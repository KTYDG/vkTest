import { useState } from "react";
import { type Group } from "../../api/GroupService";

function Group({ group }: { group: Group }) {
  const [showFriends, setShowFriends] = useState(false);

  function onShowFriends() {
    if (!showFriends)
      setTimeout(() => {
        setShowFriends(!showFriends);
      }, 1000);
    else setShowFriends(!showFriends);
  }

  return (
    <div className="Group w-full border-2 border-white rounded-xl flex flex-col p-4">
      <div className="Group-picture flex flex-row">
        <div
          className="w-25 h-25 rounded-full"
          style={{
            background: group.avatar_color ? group.avatar_color : "transparent",
          }}
        ></div>
        <div className="flex flex-col p-4">
          <div className="flex flex-row gap-4 items-center">
            <div className="Group-title font-bold p-1">{group.name}</div>
            <div className="Group-status p-1 italic text-sm">
              {(group.closed ? "Закрытая" : "Открытая") + " группа"}
            </div>
          </div>
          <div className="Group-members flex flex-row items-center">
            <div className="p-1">Подписчиков: {group.members_count}</div>
            {group.friends && (
              <div
                className="Group-friends cursor-pointer hover:bg-gray-600 px-4 p-1 select-none"
                onClick={onShowFriends}
              >
                Друзей подписано: {group.friends.length}
              </div>
            )}
          </div>
        </div>
      </div>
      {showFriends &&
        group.friends?.map((item) => (
          <div
            key={item.first_name + item.last_name}
            className="Friend flex flex-row gap-4 border-t-2 pt-2 mt-3 mx-12"
          >
            <div className="Friend-first-name">{item.first_name}</div>
            <div className="Friend-last-name">{item.last_name}</div>
          </div>
        ))}
    </div>
  );
}

export default Group;
