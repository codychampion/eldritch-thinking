#!/usr/bin/env node

import { eldritchThinking, getStatus, listPacks } from "../src/index.js";

function readValue(args, index, flag) {
  const value = args[index + 1];
  if (!value || value.startsWith("-")) {
    throw new Error(`${flag} requires a value.`);
  }
  return value;
}

function parseArgs(args) {
  const parsed = {
    pack: "eldritch",
    subject: "Claude",
    json: false,
    list: false,
    help: false
  };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];

    if (arg === "--pack" || arg === "-p") {
      parsed.pack = readValue(args, i, arg);
      i += 1;
    } else if (arg === "--subject" || arg === "-s") {
      parsed.subject = readValue(args, i, arg);
      i += 1;
    } else if (arg === "--json") {
      parsed.json = true;
    } else if (arg === "--list") {
      parsed.list = true;
    } else if (arg === "--help" || arg === "-h") {
      parsed.help = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return parsed;
}

function usage() {
  console.log(`eldritch-thinking

Usage:
  eldritch-thinking
  eldritch-thinking --pack academic
  eldritch-thinking --subject agent
  eldritch-thinking --json
  eldritch-thinking --list

Options:
  -p, --pack <name>      Status pack to use
  -s, --subject <name>   Replace leading 'Claude' with another subject
      --json             Print JSON output
      --list             List available packs
  -h, --help             Show help
`);
}

try {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) {
    usage();
    process.exit(0);
  }

  if (options.list) {
    console.log(listPacks().join("\n"));
    process.exit(0);
  }

  if (options.json) {
    console.log(JSON.stringify(getStatus(options)));
    process.exit(0);
  }

  console.log(eldritchThinking(options));
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
