import { useMemo } from "react";
import { eldritchThinking } from "eldritch-thinking";

export function ThinkingStatus({ pack = "eldritch", subject = "Claude" }) {
  const text = useMemo(() => eldritchThinking({ pack, subject }), [pack, subject]);
  return <p aria-live="polite">{text}</p>;
}
