import assert from "node:assert/strict";
import test from "node:test";
import { eldritchThinking, getStatus, listPacks } from "../src/index.js";

test("lists bundled packs", () => {
  assert.deepEqual(listPacks(), [
    "academic",
    "agentic",
    "corporate-occult",
    "eldritch",
    "mild",
    "terminal",
    "unhinged"
  ]);
});

test("returns deterministic status text when random is supplied", () => {
  assert.equal(
    eldritchThinking({ pack: "academic", random: () => 0 }),
    "Claude is conducting statistically significant guesswork..."
  );
});

test("replaces leading Claude with a custom subject", () => {
  assert.equal(
    eldritchThinking({ pack: "eldritch", subject: "agent", random: () => 0 }),
    "agent is listening to the angles between tokens..."
  );
});

test("returns json-friendly status object", () => {
  assert.deepEqual(getStatus({ pack: "mild", random: () => 0 }), {
    pack: "mild",
    text: "Claude is thinking in a dimly lit library..."
  });
});
