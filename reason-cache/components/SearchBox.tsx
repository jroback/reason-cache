type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-base text-white outline-none placeholder:text-zinc-500 focus:border-white/30"
      placeholder="Try: Help me write a Google cover letter..."
    />
  );
}