import Link from "next/link";

const TODOS_COUNT = 20;

export default function Todos() {
  return (
    <div>
      Todos List:
      <ul>
        {Array.from({ length: TODOS_COUNT }).map((_, i) => (
          <li key={`todo-${i}`}>
            <Link replace={true} href={`/todos/${i + 1}`}>
              Todo - {i + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
