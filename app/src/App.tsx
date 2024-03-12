import { useReducer } from "react";
import PageLayout from "./components/PageLayout/PageLayout";
import { getGroups } from "./api/GroupService";
import Controls from "./components/Controls/Controls";
import { useQuery } from "@tanstack/react-query";
import Group from "./components/Group/Group";

export interface FilterState {
  closed: string;
  avatarColor: string;
  friends: string;
}

const FilterInitState: FilterState = {
  closed: "all",
  avatarColor: "all",
  friends: "all",
};

export type FilterAction =
  | { type: "reset" }
  | { type: "setClosed"; value: FilterState["closed"] }
  | { type: "setAvatarColor"; value: FilterState["avatarColor"] }
  | { type: "setFriends"; value: FilterState["friends"] };

function reducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case "reset": {
      return FilterInitState;
    }
    case "setClosed": {
      return { ...state, closed: action.value };
    }
    case "setAvatarColor": {
      return { ...state, avatarColor: action.value };
    }
    case "setFriends": {
      return { ...state, friends: action.value };
    }
    default:
      throw Error("Invalid action");
  }
}

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filterState, dispatch] = useReducer(reducer, FilterInitState);

  const { isPending, error, data } = useQuery({
    queryKey: ["groups", filterState],
    queryFn: () => getGroups(filterState),
  });

  if (!isPending && (error || data?.result === 0 || data?.data === undefined))
    return (
      <div className="flex w-screen h-screen items-center justify-center text-3xl">
        Произошла ошибка :(
      </div>
    );

  return (
    <PageLayout>
      <Controls filterState={filterState} dispatch={dispatch} />
      {isPending && (
        <div className="flex justify-center text-3xl">Загрузка...</div>
      )}
      {data?.data?.map((item) => (
        <Group key={item.id} group={item} />
      ))}
    </PageLayout>
  );
}

export default App;
