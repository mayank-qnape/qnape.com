import { useTheme } from "context/theme/theme.context";
import { Comp } from "./Components";
import { useEffect, useState } from "react";


export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="self-center px-3">
      <Comp.ToggleSwitch
        defaultChecked={theme === 'dark'}
        checked={mounted ? theme === 'dark' : undefined}
        onChange={toggleTheme}
        size="default"
        checkedChildren="dark"
        unCheckedChildren="light"
      />
    </div>
  )
}