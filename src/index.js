import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const statusDir = join(root, "statuses");

function normalizePackName(pack) {
  return String(pack ?? "eldritch")
    .replace(/[^a-z0-9-]/gi, "")
    .toLowerCase();
}

function loadPack(pack = "eldritch") {
  const safePack = normalizePackName(pack);
  const file = join(statusDir, `${safePack}.json`);
  const statuses = JSON.parse(readFileSync(file, "utf8"));

  if (!Array.isArray(statuses) || statuses.length === 0) {
    throw new Error(`Status pack '${pack}' is empty or invalid.`);
  }

  return statuses;
}

export function listPacks() {
  return readdirSync(statusDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.replace(/\.json$/, ""))
    .sort();
}

export function eldritchThinking(options = {}) {
  const { pack = "eldritch", subject = "Claude", random = Math.random } = options;
  const statuses = loadPack(pack);
  const index = Math.floor(random() * statuses.length);
  const text = statuses[Math.min(index, statuses.length - 1)];
  return text.replace(/^Claude\b/, subject);
}

export function getStatus(options = {}) {
  const { pack = "eldritch" } = options;
  return {
    pack: normalizePackName(pack),
    text: eldritchThinking(options)
  };
}
