#!/usr/bin/env node
// Serialize published-item repair ownership and append its certification rows.

import {
  appendFileSync, existsSync, mkdirSync, readFileSync, realpathSync, renameSync, rmSync, statSync, writeFileSync,
} from 'node:fs';
import { join, resolve, relative, isAbsolute } from 'node:path';
import { itemHashGuard } from './item-hash.mjs';
import { ADOPTION_KIND, adoptionSha, readAdoptionResearch, validateAdoptionAcceptance, prepareAdoptionRefresh } from './published-repair-adoption.mjs';

const argv = process.argv.slice(2);
const command = argv[0];
const opt = (name) => {
  const at = argv.indexOf(`--${name}`);
  return at >= 0 && argv[at + 1] && !argv[at + 1].startsWith('--') ? argv[at + 1] : null;
};
const run = opt('run');
const root = resolve(opt('root') ?? '.');
const R = (...parts) => join(root, ...parts);
const repairsPath = R('research', `${run}-step5-published-repairs.jsonl`);
const claimsPath = R('research', `${run}-step3-published-claims.jsonl`);
const lockPath = R('research', `${run}-published-repairs.lock`);
const wait = new Int32Array(new SharedArrayBuffer(4));

if (!run || !['claim', 'append', 'adopt', 'adopt-refresh'].includes(command)) {
  console.error('usage: node tools/published-repairs.mjs claim --run <run> --id <published-id> --group <group> [--root <repo>]');
  console.error('   or: node tools/published-repairs.mjs append --run <run> --file <rows.json> [--root <repo>]');
  console.error('   or: node tools/published-repairs.mjs adopt --run <run> --file <research/acceptance.json> --receipt <research/adoption.json> [--root <repo>]');
  console.error('   or: node tools/published-repairs.mjs adopt-refresh --run <run> --file <research/acceptance.json> --receipt <research/adoption.json> --history <research/history.json> [--root <repo>]');
  process.exit(2);
}

function rows(path) {
  if (!existsSync(path)) return [];
  return readFileSync(path, 'utf8').split(/\r?\n/).filter(Boolean).map((line, index) => {
    try { return JSON.parse(line); }
    catch (cause) { throw new Error(`${path} line ${index + 1} is invalid JSON (${cause.message})`); }
  });
}

function acquireLock() {
  const started = Date.now();
  for (;;) {
    try {
      mkdirSync(lockPath);
      writeFileSync(join(lockPath, 'owner.json'), JSON.stringify({ pid: process.pid, at: new Date().toISOString() }));
      return () => rmSync(lockPath, { recursive: true, force: true });
    } catch (cause) {
      if (cause?.code !== 'EEXIST') throw cause;
      try {
        if (Date.now() - statSync(lockPath).mtimeMs > 10 * 60_000) {
          rmSync(lockPath, { recursive: true, force: true });
          continue;
        }
      } catch { continue; }
      if (Date.now() - started > 30_000) throw new Error(`timed out waiting for ${lockPath}`);
      Atomics.wait(wait, 0, 0, 25);
    }
  }
}

const release = acquireLock();
try {
  if (command === 'claim') {
    const id = opt('id');
    const group = opt('group');
    if (!id || !group) throw new Error('claim requires --id and --group');
    const itemPath = R('items', `${id}.md`);
    if (!existsSync(itemPath)) throw new Error(`${id} is not an existing published item`);
    const pre = itemHashGuard(readFileSync(itemPath, 'utf8'));
    const existing = rows(claimsPath).find((row) => row.id === id);
    if (existing) {
      if (existing.group !== group) {
        console.error(`published-repairs: ${id} is owned by group ${existing.group}; group ${group} must not edit it`);
        process.exitCode = 3;
      } else {
        console.log(`published-repairs: group ${group} already owns ${id}`);
      }
    } else {
      appendFileSync(claimsPath, `${JSON.stringify({
        version: 1, run, id, group, pre_sha256: pre, claimed_at: new Date().toISOString(),
      })}\n`);
      console.log(`published-repairs: group ${group} claimed ${id} at ${pre}`);
    }
  } else if (command === 'adopt' || command === 'adopt-refresh') {
    const input = opt('file'), receiptPath = opt('receipt'), historyPath = opt('history');
    const refresh = command === 'adopt-refresh';
    if (!input || !receiptPath || (refresh && !historyPath))
      throw new Error('adoption requires --file, --receipt and refresh requires --history research paths');
    const acceptance = JSON.parse(readAdoptionResearch(root, input));
    if (acceptance.run !== run) throw new Error('adoption run mismatch');
    const now = new Date().toISOString();
    const liveText = readFileSync(R('items', `${acceptance.id}.md`), 'utf8');
    const matches = rows(claimsPath).filter(row => row.id === acceptance.id);
    let prepared;
    if (refresh) {
      if (matches.length !== 1) throw new Error('refresh requires exactly one existing adopted ownership claim');
      const previousRaw = readFileSync(claimsPath, 'utf8').split(/\r?\n/).find(line => line.trim() && JSON.parse(line).id === acceptance.id);
      prepared = prepareAdoptionRefresh(root, matches[0], now, previousRaw);
    } else if (matches.length) throw new Error('adoption cannot replace an existing ownership claim');
    const { acceptance: a, acceptance_sha256 } = validateAdoptionAcceptance(root, input, now, liveText, prepared?.predecessor);
    const outputPath = path => {
      if (!path.startsWith('research/') || path.includes('\\')
        || path.split('/').some(part => !part || part === '.' || part === '..'))
        throw new Error('invalid adoption output path');
      const parent = path.slice(0, path.lastIndexOf('/'));
      const rel = relative(realpathSync(R('research')), realpathSync(R(parent)));
      if (rel.startsWith('..') || isAbsolute(rel) || existsSync(R(path)))
        throw new Error('adoption output escapes research or already exists');
      return R(path);
    };
    const receiptOutput = outputPath(receiptPath);
    const historyOutput = refresh ? outputPath(historyPath) : undefined;
    if (refresh && receiptPath === historyPath) throw new Error('history and receipt must be separate new files');
    const adoption = { version: 1, kind: ADOPTION_KIND, run, id: a.id, group: a.group,
      pre_sha256: a.pre_sha256, recorded_at: now, acceptance_file: input, acceptance_sha256 };
    if (refresh) {
      const historyRaw = JSON.stringify(prepared.history, null, 2) + '\n';
      adoption.previous_claim = matches[0];
      adoption.previous_history = historyPath;
      adoption.previous_history_sha256 = adoptionSha(historyRaw);
      writeFileSync(historyOutput, historyRaw, { flag: 'wx' });
    }
    const raw = JSON.stringify(adoption, null, 2) + '\n';
    writeFileSync(receiptOutput, raw, { flag: 'wx' });
    const claim = { version: 1, run, id: a.id, group: a.group,
      pre_sha256: a.pre_sha256, claimed_at: now, claim_kind: ADOPTION_KIND,
      adoption_receipt: receiptPath, adoption_sha256: adoptionSha(raw) };
    if (refresh) {
      // Preserve every unrelated ledger byte; the old active row is retained
      // in the new immutable history before atomically replacing this one row.
      const claimsRaw = readFileSync(claimsPath, 'utf8');
      const updated = claimsRaw.split('\n').map(line => line.trim() && JSON.parse(line).id === a.id
        ? JSON.stringify(claim) : line).join('\n');
      const temporary = `${claimsPath}.refresh-${process.pid}`;
      try {
        writeFileSync(temporary, updated, { flag: 'wx' });
        renameSync(temporary, claimsPath);
      } finally { rmSync(temporary, { force: true }); }
    } else appendFileSync(claimsPath, JSON.stringify(claim) + '\n');
    console.log(`published-repairs: owner ${refresh ? 'refreshed adoption of' : 'adopted'} ${a.id} at ${now}; local checks remain required`);
  } else {
    const input = opt('file');
    if (!input) throw new Error('append requires --file <rows.json>');
    const raw = JSON.parse(readFileSync(resolve(root, input), 'utf8'));
    const incoming = Array.isArray(raw) ? raw : [raw];
    const existing = rows(repairsPath);
    const claims = rows(claimsPath);
    const key = (row) => row.found_at_stage === '3a-adjudicate'
      ? `step3:${row.step3_obligation}` : `step5:${row.kind}:${row.group}:${row.id}:${row.found_via}`;
    const keys = new Set(existing.map(key));
    for (const row of incoming) {
      if (!row || !['repaired', 'escalated'].includes(row.kind) || typeof row.id !== 'string'
        || typeof row.group !== 'string' || typeof row.found_via !== 'string') {
        throw new Error('each row requires kind repaired|escalated, id, group, and found_via');
      }
      if (['3a-adjudicate', '3b-cross'].includes(row.found_at_stage)) {
        const claim = claims.find((candidate) => candidate.id === row.id);
        if (!claim || row.repair_owner_group !== claim.group || row.pre_sha256 !== claim.pre_sha256) {
          throw new Error(`${row.id} Step-3 receipt does not match its pre-edit ownership claim`);
        }
      }
      const rowKey = key(row);
      if (keys.has(rowKey)) throw new Error(`duplicate published-repair row ${rowKey}`);
      keys.add(rowKey);
    }
    appendFileSync(repairsPath, incoming.map((row) => JSON.stringify(row)).join('\n') + '\n');
    console.log(`published-repairs: appended ${incoming.length} row(s) to ${repairsPath}`);
  }
} finally {
  release();
}
