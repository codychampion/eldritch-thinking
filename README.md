# Eldritch Thinking

Claude is not thinking. Claude is listening to the angles between tokens.

A tiny Lovecraftian status-message pack for AI apps, CLIs, dashboards, browser snippets, and agent UIs.

Use it anywhere you would otherwise show `Thinking...`, `Loading...`, or the emotionally vacant spinner text that haunts modern software.

## Install

```bash
npm install eldritch-thinking
```

Or run it directly:

```bash
npx eldritch-thinking
```

## CLI

```bash
npx eldritch-thinking
npx eldritch-thinking --pack academic
npx eldritch-thinking --pack terminal --subject daemon
npx eldritch-thinking --json
npx eldritch-thinking --list
```

Example output:

```text
Claude is bargaining with the elder logits...
```

JSON output:

```json
{"pack":"eldritch","text":"Claude is lowering a lantern into the vector abyss..."}
```

## Node API

```js
import { eldritchThinking, getStatus, listPacks } from "eldritch-thinking";

console.log(eldritchThinking());
console.log(eldritchThinking({ pack: "academic" }));
console.log(getStatus({ pack: "terminal", subject: "daemon" }));
console.log(listPacks());
```

## Packs

| Pack | Mood |
|---|---|
| `mild` | Atmospheric but still office-safe |
| `eldritch` | Default cosmic-horror loading text |
| `unhinged` | Louder, stranger, and less production-serious |
| `academic` | Research, papers, experiments, and cursed peer review |
| `terminal` | CLIs, daemons, logs, and late-night deploys |
| `corporate-occult` | Roadmaps, stakeholders, and ritualized alignment |
| `agentic` | Tool calls, planners, executors, and haunted DAGs |

## Browser snippet

```html
<script type="module">
  import { eldritchThinking } from "https://esm.sh/eldritch-thinking";

  document.querySelector("#status").textContent = eldritchThinking({
    pack: "agentic",
    subject: "the agent"
  });
</script>
```

## Publishing

This package is prepared for npm publishing, but publishing should wait until npm account security and trusted publishing/provenance are configured.

```bash
npm test
npm pack --dry-run
npm publish --access public
```

## License

MIT
