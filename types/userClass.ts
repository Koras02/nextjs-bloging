import { ID } from "./user";

/**
 * 클래스(Class)
 * - OOP 방식으로 데이터와 메서드를 묶어 관리
 * - 접근제어자(public/private/protected/readonly) 사용 가능
 */
export class Person {
  public name: string; // 어디서나 접근 가능함
  private ssn: string; // 클래스 내부에서만 접근 가능함
  protected role: string; // 클래스 내부 + 상속 클래스에서만 접근 가능
  readonly id: ID; // 초기화 후 수정 불가능 함

  constructor(name: string, ssn: string, role: string, id: ID) {
    this.name = name;
    this.ssn = ssn;
    this.role = role;
    this.id = id;
  }

  more(): void {
    console.log(`Hi, I'm ${this.name}`);
  }
}

/**
 * 상속(Inheritance)
 * - 부모 클래스(Person)의 기능을 물려받아 확장 가능
 */

export class Employee extends Person {
  position: string;

  constructor(
    name: string,
    ssn: string,
    role: string,
    id: ID,
    position: string
  ) {
    super(name, ssn, role, id); // 부모 생성자 호출
    this.position = position;
  }

  work(): void {
    console.log(`${this.name} is working as ${this.position}`);
  }
}
