#!/usr/bin/env node
// slots.mjs — the cross-process concurrency pool, shared.
//
// Extracted in behaviour from tools/judge-sweep.mjs, which has run this design
// against real sweeps for months, and exercised by tools/slots.test.mjs.
//
// judge-sweep still carries its own copy ON PURPOSE, for now. The swap is about
// six lines, but a sweep cannot be run on this checkout (no tsx, no key), and
// silently re-wiring the scheduler that spends money on an untested path buys
// tidiness with the wrong currency. Do it in a commit where a real sweep can
// follow. Unlike tools/item-hash.mjs — where two copies would disagree about
// whether an item changed and one of them would be wrong — these two pools guard
// different namespaces and never have to agree with each other, so the
// duplication is bounded rather than dangerous.
//
// WHY DIRECTORY SLOTS RATHER THAN AN IN-PROCESS SEMAPHORE. An in-process pool
// bounds one invocation. Two resumed sweeps, or a driver plus a supervising
// session, would each independently believe they were under the cap and
// together exceed it — which is how a subscription lane gets rate-limited into
// returning capacity refusals that look like verdicts. `mkdir` is atomic on this
// host filesystem, so a directory IS the semaphore.
//
// WHY HEARTBEATS. A killed holder cannot release its slot. Each holder touches
// its slot's mtime every 30s and any slot stale for five minutes is reclaimed,
// so a crash costs five minutes of one lane's capacity rather than blocking it
// forever. On SIGINT/SIGTERM a process releases only ITS OWN slots — never the
// whole directory — so an unrelated concurrent run is untouched.

import { mkdirSync, writeFileSync, readdirSync, statSync, rmSync, utimesSync } from 'node:fs';

export const SLOT_STALE_MS = 5 * 60_000;
export const SLOT_HEARTBEAT_MS = 30_000;
export const SLOT_RETRY_MS = 250;

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * @param {object} options
 * @param {string} options.root   directory holding one subdirectory per lane
 * @param {Record<string, number>} options.caps  lane -> max concurrent holders
 * @param {string} [options.label]  prefix for reclamation messages
 * @param {number} [options.staleMs]
 */
export const createSlotPool = ({ root, caps, label = 'slots', staleMs = SLOT_STALE_MS }) => {
  const laneDir = (lane) => `${root}/${lane}`;
  const heldReleases = new Set();
  let terminating = false;

  const releaseAll = () => {
    for (const release of [...heldReleases]) {
      try { release(); } catch { /* best-effort shutdown cleanup */ }
    }
    heldReleases.clear();
  };

  const terminate = () => {
    if (terminating) return;
    terminating = true;
    releaseAll();
    process.exit(130);
  };
  process.once('SIGINT', terminate);
  process.once('SIGTERM', terminate);

  const reapStale = (lane) => {
    try {
      for (const entry of readdirSync(laneDir(lane), { withFileTypes: true })) {
        if (!entry.isDirectory() || !/^slot-[0-9]+$/.test(entry.name)) continue;
        const slot = `${laneDir(lane)}/${entry.name}`;
        try {
          if (Date.now() - statSync(slot).mtimeMs > staleMs) {
            rmSync(slot, { recursive: true, force: true });
            console.error(`[${label}] reclaimed stale ${lane} slot ${entry.name}.`);
          }
        } catch { /* a concurrent release or reclaim won the race */ }
      }
    } catch { /* the first acquirer creates the directory below */ }
  };

  /** Resolves to a release function once a slot in `lane` is held. */
  const acquire = async (lane) => {
    const dir = laneDir(lane);
    const cap = caps[lane];
    if (!cap) throw new Error(`no concurrency cap configured for ${lane}`);
    mkdirSync(dir, { recursive: true });
    while (true) {
      reapStale(lane);
      for (let index = 0; index < cap; index += 1) {
        const slot = `${dir}/slot-${index}`;
        try {
          mkdirSync(slot);
          writeFileSync(`${slot}/holder.json`,
            JSON.stringify({ lane, pid: process.pid, acquired_at: new Date().toISOString() }) + '\n');
          const heartbeat = setInterval(() => {
            try { utimesSync(slot, new Date(), new Date()); } catch { /* released or replaced */ }
          }, SLOT_HEARTBEAT_MS);
          let released = false;
          const release = () => {
            if (released) return;
            released = true;
            clearInterval(heartbeat);
            heldReleases.delete(release);
            try { rmSync(slot, { recursive: true, force: true }); } catch { /* already reclaimed */ }
          };
          heldReleases.add(release);
          return release;
        } catch (error) {
          if (error?.code !== 'EEXIST') throw error;
        }
      }
      await pause(SLOT_RETRY_MS);
    }
  };

  const held = (lane) => {
    try {
      return readdirSync(laneDir(lane), { withFileTypes: true })
        .filter((e) => e.isDirectory() && /^slot-[0-9]+$/.test(e.name)).length;
    } catch { return 0; }
  };

  return { acquire, releaseAll, held, maxConcurrent: Object.values(caps).reduce((a, b) => a + b, 0) };
};
