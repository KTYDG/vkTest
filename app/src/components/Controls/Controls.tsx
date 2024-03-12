import { FilterState, FilterAction } from "../../App";
import Select from "../Select/Select";

function Controls({
  filterState,
  dispatch,
}: {
  filterState: FilterState;
  dispatch: React.Dispatch<FilterAction>;
}) {
  return (
    <div className="w-full flex flex-row justify-center gap-12 pt-12">
      <Select
        value={filterState.closed}
        onChange={(e) => dispatch({ type: "setClosed", value: e.target.value })}
      >
        <option value="all">Тип группы</option>
        <option value="true">Закрытые</option>
        <option value="false">Открытые</option>
      </Select>
      <Select
        value={filterState.avatarColor}
        onChange={(e) =>
          dispatch({ type: "setAvatarColor", value: e.target.value })
        }
      >
        <option value="all">Цвет аватарки</option>
        <option value="no">Без цвета</option>
        <option value="red">Красный</option>
        <option value="green">Зеленый</option>
        <option value="yellow">Желтый</option>
        <option value="blue">Синий</option>
        <option value="purple">Фиолетовый</option>
        <option value="white">Белый</option>
        <option value="orange">Оранжевый</option>
      </Select>
      <Select
        value={filterState.friends}
        onChange={(e) =>
          dispatch({ type: "setFriends", value: e.target.value })
        }
      >
        <option value="all">Друзья в группе</option>
        <option value="true">С друзьями</option>
        <option value="false">Без друзей ;(</option>
      </Select>
      <button
        className="border-2 border-white p-3 rounded-md"
        onClick={() => dispatch({ type: "reset" })}
      >
        Сбросить
      </button>
    </div>
  );
}

export default Controls;
