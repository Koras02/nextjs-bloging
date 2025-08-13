import { ReactNode } from "react";
import { IUser } from "../types/user";

/**
 *  React 컴포넌트
 *  - props 타입을 인터페이스로 지정
 */
interface UserCardProps {
  user: IUser;
  children?: ReactNode;
}

export default function UserCard({ user, children }: UserCardProps) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h3>{user.name}</h3>
      <p>ID: {user.id}</p>
      {user.age && <p>Age: {user.age}</p>}
      {children}
    </div>
  );
}
