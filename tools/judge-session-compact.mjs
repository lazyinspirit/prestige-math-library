#!/usr/bin/env node
// Recover one persistent A/B-pair judge conversation without changing its
// session identity. Only consecutive context-exhausted turns (which produced no
// verdict) are reverted; the last successful item turn and every earlier
// item remain. The same thread is then compacted through Codex app-server.

import {
  chmodSync, existsSync, mkdtempSync, readFileSync, readdirSync, rmSync,
  statSync, writeFileSync,
} from 'node:fs';
import { spawn } from 'node:child_process';
import { homedir } from 'node:os';
import { basename, join, resolve } from 'node:path';
import readline from 'node:readline';
import {
  JUDGE_AUTO_COMPACT_TOKEN_LIMIT, JUDGE_CONTEXT_WINDOW, MODELS,
} from './models.mjs';

const UUID = /^[0-9a-f-]{36}$/i;
const CONTEXT_ERROR = /ran out of room in the model'?s context window|context window[^\n]*(?:exhaust|exceed|full)|maximum context length/i;

function findLatestRollout(home, sessionId) {
  const pending = [join(home, 'sessions')];
  const found = [];
  const shardName = new RegExp(`-${sessionId}(?:_[0-9a-f-]{36})?\\.jsonl$`, 'i');
  while (pending.length) {
    const dir = pending.pop();
    let entries;
    try { entries = readdirSync(dir, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) pending.push(path);
      else if (shardName.test(entry.name)) found.push(path);
    }
  }
  if (!found.length) throw new Error(`${home}: found no rollout for ${sessionId}`);
  // Codex keeps the thread id but writes resumed paginated history into a
  // continuation shard named `<thread-id>_<shard-id>.jsonl`. The most recently
  // written shard contains the active tail that thread/revert accepts.
  return found.sort((a, b) => statSync(a).mtimeMs - statSync(b).mtimeMs).at(-1);
}

function rolloutTailState(rollout) {
  let failures = [];
  let contextTokens = 0;
  for (const [index, line] of readFileSync(rollout, 'utf8').split('\n').filter(Boolean).entries()) {
    let row;
    try { row = JSON.parse(line); }
    catch { throw new Error(`${rollout}:${index + 1}: invalid JSON`); }
    if (row.type === 'event_msg' && row.payload?.type === 'token_count') {
      const total = row.payload.info?.total_token_usage?.total_tokens;
      if (Number.isFinite(total)) contextTokens = total;
    }
    if (row.type !== 'event_msg' || row.payload?.type !== 'task_complete') continue;
    const error = row.payload.error;
    failures = error && (error.codex_error_info === 'context_window_exceeded'
      || CONTEXT_ERROR.test(String(error.message ?? '')))
      ? [...failures, row.payload.turn_id]
      : [];
  }
  if (failures.length && !failures[0]) throw new Error(`${rollout}: first failed turn has no id`);
  return {
    contextTokens,
    failedCount: failures.length,
    beforeTurnId: failures[0] ?? null,
  };
}

function syncAuthBefore(sessionHome) {
  const canonicalHome = process.env.CODEX_HOME ?? join(homedir(), '.codex');
  const canonicalPath = join(canonicalHome, 'auth.json');
  const activePath = join(sessionHome, 'auth.json');
  if (existsSync(canonicalPath)) {
    const baseline = readFileSync(canonicalPath);
    writeFileSync(activePath, baseline);
    chmodSync(activePath, 0o600);
    return { canonicalPath, activePath, baseline };
  }
  if (existsSync(activePath)) {
    return { canonicalPath, activePath, baseline: readFileSync(activePath) };
  }
  return { canonicalPath, activePath, baseline: null };
}

function syncAuthAfter(auth) {
  if (!auth.baseline || !existsSync(auth.activePath)) return;
  const after = readFileSync(auth.activePath);
  const canonical = existsSync(auth.canonicalPath) ? readFileSync(auth.canonicalPath) : null;
  if (!after.equals(auth.baseline) && (!canonical || canonical.equals(auth.baseline))) {
    writeFileSync(auth.canonicalPath, after);
    chmodSync(auth.canonicalPath, 0o600);
  }
}

async function compactThroughAppServer({ sessionHome, sessionId, model, beforeTurnId, timeoutMs }) {
  const work = mkdtempSync('/tmp/prestige-math-library-judge-compact-');
  const args = [
    'app-server',
    '-c', `model_context_window=${JUDGE_CONTEXT_WINDOW}`,
    '-c', `model_auto_compact_token_limit=${JUDGE_AUTO_COMPACT_TOKEN_LIMIT}`,
    '-c', 'model_auto_compact_token_limit_scope="total"',
    '-c', 'model_reasoning_effort="xhigh"',
  ];
  const auth = syncAuthBefore(sessionHome);
  try {
    await new Promise((resolveCompact, rejectCompact) => {
      const child = spawn(process.env.CODEX_BIN ?? 'codex', args, {
        cwd: work,
        env: { ...process.env, CODEX_HOME: sessionHome },
        stdio: ['pipe', 'pipe', 'pipe'],
      });
      const lines = readline.createInterface({ input: child.stdout });
      let stderr = '';
      let settled = false;
      let compactionStarted = false;
      const finish = (error = null) => {
        if (settled) return;
        settled = true;
        clearTimeout(timeout);
        lines.close();
        child.kill('SIGTERM');
        if (error) rejectCompact(error);
        else resolveCompact();
      };
      const send = (message) => child.stdin.write(`${JSON.stringify(message)}\n`);
      const failResponse = (message, label) => {
        if (!message.error) return false;
        finish(new Error(`${label}: ${message.error.message ?? JSON.stringify(message.error)}`));
        return true;
      };
      child.stderr.on('data', (chunk) => { stderr += chunk; });
      child.on('error', (cause) => finish(cause));
      child.on('close', (code) => {
        if (!settled) finish(new Error(`Codex app-server exited ${String(code)} before compaction completed: ${stderr.slice(-1000)}`));
      });
      lines.on('line', (line) => {
        let message;
        try { message = JSON.parse(line); }
        catch { finish(new Error(`Codex app-server emitted malformed JSON: ${line.slice(0, 300)}`)); return; }
        if (message.id === 0) {
          if (failResponse(message, 'initialize')) return;
          send({ method: 'initialized', params: {} });
          send({ method: 'thread/resume', id: 1, params: {
            threadId: sessionId,
            model,
            cwd: work,
            approvalPolicy: 'never',
            sandbox: 'read-only',
            excludeTurns: true,
          } });
        } else if (message.id === 1) {
          if (failResponse(message, 'thread/resume')) return;
          if (message.result?.thread?.id !== sessionId) {
            finish(new Error(`thread/resume returned ${message.result?.thread?.id ?? 'no id'}, expected ${sessionId}`));
            return;
          }
          if (beforeTurnId) {
            send({ method: 'thread/revert', id: 2, params: { threadId: sessionId, beforeTurnId } });
          } else {
            send({ method: 'thread/compact/start', id: 3, params: { threadId: sessionId } });
          }
        } else if (message.id === 2) {
          if (failResponse(message, 'thread/revert')) return;
          send({ method: 'thread/compact/start', id: 3, params: { threadId: sessionId } });
        } else if (message.id === 3) {
          if (failResponse(message, 'thread/compact/start')) return;
          compactionStarted = true;
        } else if (message.method === 'error') {
          finish(new Error(`thread compaction failed: ${message.params?.error?.message ?? JSON.stringify(message.params)}`));
        } else if (compactionStarted && message.method === 'turn/completed') {
          const turn = message.params?.turn;
          if (turn?.status === 'completed') finish();
          else finish(new Error(`thread compaction ended ${turn?.status ?? 'without status'}: ${turn?.error?.message ?? ''}`));
        }
      });
      const timeout = setTimeout(() => finish(new Error(`thread compaction timed out after ${timeoutMs}ms`)), timeoutMs);
      send({ method: 'initialize', id: 0, params: {
        clientInfo: { name: 'prestige_math_judge', title: 'Prestige Math Judge', version: '1.0.0' },
        capabilities: { experimentalApi: true },
      } });
    });
  } finally {
    syncAuthAfter(auth);
    rmSync(work, { recursive: true, force: true });
  }
}

export async function recoverJudgeSession({ sessionHome, sessionId, model = MODELS.terra.id, timeoutMs = 12 * 60_000 }) {
  const home = resolve(sessionHome);
  if (!UUID.test(sessionId ?? '')) throw new Error('judge recovery requires a session UUID');
  const metadataPath = join(home, 'judge-session.json');
  const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'));
  if (metadata.version !== 1 || metadata.model !== model || metadata.session_id !== sessionId
    || !/^[A-Za-z0-9._-]+$/.test(metadata.pair ?? '')) {
    throw new Error(`${metadataPath}: recovery target does not match persistent judge metadata`);
  }
  const rollout = findLatestRollout(home, sessionId);
  const tail = rolloutTailState(rollout);
  if (!tail.failedCount) throw new Error(`${rollout}: no trailing context-exhausted judge turns to recover`);
  await compactThroughAppServer({
    sessionHome: home,
    sessionId,
    model,
    beforeTurnId: tail.beforeTurnId,
    timeoutMs,
  });
  return { pair: metadata.pair, session_id: sessionId, reverted_failed_turns: tail.failedCount };
}

/** Compact at the earliest item boundary after 50%, or recover any failed
 * context-exhausted tail first. This preserves the exact thread identity and
 * every successful one-item turn. */
export async function compactJudgeSessionIfNeeded({
  sessionHome, sessionId, model = MODELS.terra.id,
  threshold = JUDGE_AUTO_COMPACT_TOKEN_LIMIT, timeoutMs = 12 * 60_000,
}) {
  const home = resolve(sessionHome);
  if (!UUID.test(sessionId ?? '')) throw new Error('judge compaction requires a session UUID');
  const metadataPath = join(home, 'judge-session.json');
  const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'));
  if (metadata.version !== 1 || metadata.model !== model || metadata.session_id !== sessionId
    || !/^[A-Za-z0-9._-]+$/.test(metadata.pair ?? '')) {
    throw new Error(`${metadataPath}: compaction target does not match persistent judge metadata`);
  }
  const rollout = findLatestRollout(home, sessionId);
  const tail = rolloutTailState(rollout);
  if (!tail.failedCount && tail.contextTokens < threshold) {
    return {
      pair: metadata.pair, session_id: sessionId, compacted: false,
      context_tokens: tail.contextTokens, reverted_failed_turns: 0,
    };
  }
  await compactThroughAppServer({
    sessionHome: home,
    sessionId,
    model,
    beforeTurnId: tail.beforeTurnId,
    timeoutMs,
  });
  return {
    pair: metadata.pair, session_id: sessionId, compacted: true,
    context_tokens: tail.contextTokens, reverted_failed_turns: tail.failedCount,
  };
}

if (process.argv[1] && basename(process.argv[1]) === basename(new URL(import.meta.url).pathname)) {
  const argv = process.argv.slice(2);
  const value = (flag) => {
    const at = argv.indexOf(flag);
    return at >= 0 ? argv[at + 1] : '';
  };
  try {
    const receipt = await recoverJudgeSession({
      sessionHome: value('--session-home'),
      sessionId: value('--session-id'),
      model: value('--model') || MODELS.terra.id,
    });
    process.stdout.write(`${JSON.stringify(receipt)}\n`);
  } catch (cause) {
    console.error(`[judge-session-compact] ${cause.message ?? String(cause)}`);
    process.exit(2);
  }
}
