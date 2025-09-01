/**
 * 타입 선언 (Type Alias)
 * - 특정 타입에 이름을 붙여 재사용 가능함
 * - 유니온 타입(|)아니 튜플, 객체 등 다양하게 정의
 */
export type ID = string | number;

/**
 * 인터페이스 (Interface)
 * - 객체 구조를 정의 시 사용
 * - 선택적 속성(?)을 사용 가능
 * - 상속 가능
 */

export interface IUser {
  id: ID;
  name: string;
  age?: number; // 석택적 속성
}

/**
 *  유틸리티 타입(Utility Types)
 * - TypeScript에서 제공하는 편리한 타입 변형 도구
 */
export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// Partial: 모든 속성을 선택적으로
export type PartialTodo = Partial<Todo>;

// Required: 선택적 속성을 필수로 만들어줌
export type RequiredTodo = Required<Partial<Todo>>;

// Pick: 객체에서 일부 속성만 선택
export type PickTodo = Pick<Todo, "id" | "title">;

// Omit: 특정 속성 언어
export type OmitTodo = Omit<Todo, "completed">;

// ReadOnly: 모든 속성을 읽기 전용 모드로
export type ReadonlyTodo = Readonly<Todo>;

// types/user.ts
export interface User {
  id: number;
  name: string;
  email: string;
}
