import type { NextPage } from "next";
import UserCard from "../components/UserCard";
import {
  IUser,
  PartialTodo,
  PickTodo,
  OmitTodo,
  ReadonlyTodo,
} from "../types/user";
import { wrap } from "../utils/wrap";
import { Employee } from "../types/userClass";

const Home: NextPage = () => {
  // 인터페이스 사용하기
  const user: IUser = { id: 1, name: "James", age: 28 };
  const wrappedUser = wrap(user); // 제네릭 사용

  // 클래스 + 상속
  const emp = new Employee("Kong", "443--324-2333", "admin", 2, "Developer");
  emp.more(); // 부모 클래스 메서드
  emp.work();

  // 유틸리티 타입 사용
  const partialTodo: PartialTodo = { title: "Partial Todo" };
  const pickTodo: PickTodo = { id: 1, title: "Pick Example" };
  const omitTodo: OmitTodo = { id: 2, title: "Omit Example" };
  const readonlyTodo: ReadonlyTodo = {
    id: 3,
    title: "Readonly Example",
    completed: true,
  };

  return (
    <div>
      <h1>Next.js + TypeScript Example</h1>
      <UserCard user={wrappedUser.value} />
      <pre>
        {JSON.stringify(
          { partialTodo, pickTodo, omitTodo, readonlyTodo },
          null,
          2
        )}
      </pre>
    </div>
  );
};

export default Home;
