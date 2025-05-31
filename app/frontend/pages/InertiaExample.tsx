import { Button } from "@mantine/core";

export default function InertiaExample({ name }: { name: string }) {
  return (
    <>
      Hello, {name}
      <Button>Mantine Button</Button>
    </>
  );
}
