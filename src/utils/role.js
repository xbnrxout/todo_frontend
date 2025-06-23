// src/utils/role.js
import { jwtDecode } from "jwt-decode";
import { getToken } from "./auth";

export function getUserRole() {
  const token = getToken();
  if (!token) return null;
  const decoded = jwtDecode(token);
  return decoded.role || null;
}
