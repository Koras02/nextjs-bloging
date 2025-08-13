/**
 *  제네릭(Generics)
 * - 다양한 타입을 받아 타입 안정성을 유지하며 재사용 가능
 */

export function wrap<T>(value: T): { value: T } {
  return { value };
}
