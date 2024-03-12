import _groups from "../../groups.json"
import { FilterState } from "../App"

export interface GetGroupsResponse {
  result: 1 | 0,
  data?: Group[]
}

export interface Group {
  "id": number,
  "name": string,
  "closed": boolean,
  "avatar_color"?: string,
  "members_count": number,
  "friends"?: User[]
}

export interface User {
  "first_name": string,
  "last_name": string
}

function apiLogic(params: FilterState): Group[] {
  const groups = (_groups as Group[]).filter((item) => {
    if (params.closed !== "all" &&
      (params.closed === "true")  !== item.closed) return false
    if (params.avatarColor === "no" && item.avatar_color !== undefined) return false
    if (params.avatarColor !== "all" && params.avatarColor !== "no" &&
      !(item.avatar_color !== undefined && params.avatarColor === item.avatar_color)) return false
    if (params.friends !== "all" &&
      (params.friends === "true") !== (item.friends !== undefined)) return false
    return true
  })
  return groups;
}

export function getGroups(params: FilterState): Promise<GetGroupsResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const groups = apiLogic(params);
      const response: GetGroupsResponse = {
        result: 1,
        data: groups
      };
      resolve(response);
    }, 1000);
  });
}