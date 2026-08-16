// The owner control channel.
//
// The requirement is "runs autonomously to completion, but let me intervene if
// I choose to". Those pull in opposite directions: anything that WAITS for the
// owner is not autonomous, and anything the owner cannot reach is not
// controllable.
//
// The resolution is that control is READ, never awaited. The engine polls a
// small JSON file every tick and acts on whatever it finds. An owner who never
// touches it changes nothing; an owner who writes `{"command":"pause"}` gets a
// pause at the next tick boundary. No prompt, no blocking read, no timeout that
// could stall a 14-hour run because nobody was at the keyboard.
//
// Commands are consumed — the engine clears the file after acting — so a
// command means "do this now", not "be in this mode forever". `pause` is the
// exception, because pausing is a mode; it persists in state until `resume`.
//
//   echo '{"command":"pause"}'                    > .autopilot/control.json
//   echo '{"command":"resume"}'                   > .autopilot/control.json
//   echo '{"command":"skip","stage":"7-judge"}'   > .autopilot/control.json
//   echo '{"command":"retry","unit":"3"}'         > .autopilot/control.json
//   echo '{"command":"stop"}'                     > .autopilot/control.json
//   echo '{"command":"report"}'                   > .autopilot/control.json

import { readFileSync, writeFileSync, existsSync, unlinkSync, mkdirSync } from 'node:fs';
import type { Control, ControlCommand } from './types.mts';
import { dirname, join } from 'node:path';

export const COMMANDS = new Set(['pause', 'resume', 'skip', 'retry', 'stop', 'report']);

export function controlPath(dir: string): string { return join(dir, 'control.json'); }

/** Read and CONSUME any pending command.
 *
 *  Malformed input is reported and discarded rather than retried: a file the
 *  engine cannot parse would otherwise be re-read every tick forever, which
 *  turns a typo into an infinite log. */
export function takeCommand(dir: string): Control | null {
  const p = controlPath(dir);
  if (!existsSync(p)) return null;
  let raw;
  try { raw = readFileSync(p, 'utf8').trim(); }
  catch { return null; }
  // Parse BEFORE consuming. Deleting first meant a crash between the unlink and
  // the act lost the command silently, and the owner would see no effect and no
  // error. Read, decide, then delete — so a command survives a crash and is
  // acted on next tick.
  const consume = () => { try { unlinkSync(p); } catch { /* already gone */ } };
  if (!raw) { consume(); return null; }
  let parsed;
  try { parsed = JSON.parse(raw); }
  catch {
    // Accept a bare word too — `echo pause > control.json` is what a person
    // actually types under pressure, and refusing it helps nobody.
    const word = raw.replace(/['"]/g, '').trim();
    consume();
    if (COMMANDS.has(word)) return { command: word };
    return { command: null, error: `unparseable control file: ${raw.slice(0, 120)}` };
  }
  consume();
  // `parsed` may be any JSON value here — `null` in particular parses fine and
  // then throws on property access, and an unhandled throw in the control path
  // takes down the whole engine from inside its own steering wheel.
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed) || !COMMANDS.has(parsed.command)) {
    return { command: null, error: `unknown command ${JSON.stringify(parsed?.command ?? parsed)}; known: ${[...COMMANDS].join(', ')}` };
  }
  return parsed;
}

export function writeCommand(dir: string, command: ControlCommand, extra: Record<string, unknown> = {}): void {
  mkdirSync(dirname(controlPath(dir)), { recursive: true });
  writeFileSync(controlPath(dir), JSON.stringify({ command, ...extra }) + '\n');
}
