type IconName = "spark" | "arrow" | "play" | "phone" | "message" | "calendar" | "brain" | "clock" | "chart" | "check" | "lock" | "menu";

export function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    spark: <><path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2Z"/><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/></>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    play: <path d="m9 7 8 5-8 5V7Z"/>,
    phone: <path d="M8.4 3.5 10.2 7c.3.6.1 1.3-.4 1.7l-1.2 1a13 13 0 0 0 5.7 5.7l1-1.2c.4-.5 1.1-.7 1.7-.4l3.5 1.8c.6.3.9.9.8 1.5l-.5 3c-.1.7-.7 1.2-1.4 1.2C10.2 21.3 2.7 13.8 2.7 4.6c0-.7.5-1.3 1.2-1.4l3-.5c.6-.1 1.2.2 1.5.8Z"/>,
    message: <><path d="M20 15a3 3 0 0 1-3 3H8l-5 3V7a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v8Z"/><path d="M7 9h10M7 13h6"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4m8-4v4M3 10h18m-13 4h3m2 0h3m-8 3h3"/></>,
    brain: <><path d="M9.5 4a3 3 0 0 0-5 2.2A3.5 3.5 0 0 0 4 13a3.5 3.5 0 0 0 5.5 4.8V4Zm5 0a3 3 0 0 1 5 2.2A3.5 3.5 0 0 1 20 13a3.5 3.5 0 0 1-5.5 4.8V4Z"/><path d="M9.5 8H7m7.5 4H17m-7.5 2H7m7.5-6H17"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    chart: <><path d="M4 20V10m6 10V4m6 16v-7m4 7H2"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    menu: <><path d="M4 8h16M4 16h16"/></>,
  };
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
