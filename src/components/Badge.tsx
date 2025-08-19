export const Badge = (props: any) => {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-700 bg-neutral-800 p-1 text-sm leading-4 text-neutral-100 no-underline"
    />
  );
}