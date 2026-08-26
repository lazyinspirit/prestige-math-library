// Run hash-attested judge calls for every item on selected plan pages.
// Workflow rule: the initial Step-7 call supplies every completed-level A page;
// --items is only for Alpha-selected rejudges after a material repair.
// Each model has its own cross-process pool: 16 slots per configured model (owner,
// 2026-08-05; DeepSeek was briefly 24). They start their next item as soon as
// one of their own slots is free. Total concurrency is the sum of the selected
// models' caps; the current singleton Terra lineup therefore uses Terra's cap.
// Retry backoffs return work to this scheduler, releasing that model's slot so
// unrelated calls in the same lane can continue. No result influences the other.
import { closeSync, existsSync, mkdirSync, openSync, readFileSync, readdirSync, rmSync, statSync, utimesSync, writeFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { join, resolve } from "node:path";
import { tsxLoader } from "./paths.mjs";
import { verdictIsCurrent } from "./judge-currency.mjs";
import { MODELS, JUDGE_LINEUPS, DEFAULT_LINEUP } from "./models.mjs";
import { buildCurrentContextHashes } from "./context-hash-pool.mjs";

const argv = process.argv.slice(2);
const value = (flag) => {
  const i = argv.indexOf(flag);
  return i >= 0 ? argv[i + 1] : "";
};
const ledger = value("--ledger");
const cost = value("--cost");
const attempts = value("--attempts") || (ledger ? (ledger.endsWith(".jsonl") ? ledger.replace(/\.jsonl$/, "-attempts.jsonl") : `${ledger}.attempts.jsonl`) : "");
const pagesArg = value("--pages");
const itemsArg = value("--items");
// --manifests: comma-separated audit batch manifests (wave<k>-<cat>.pages.json).
// The audit workflow's scope of record is the manifest, whose item lists come
// from the PAGE FILES — plan-spec's `items` arrays are stale for legacy pages
// (the documented --pairs bug), so a --pages sweep over old pages under-covers.
// Measured wave 0, 2026-08-02: --pages selected 180 of the 276 in-scope items.
const manifestsArg = value("--manifests");
const limitArg = value("--limit");
const modelsArg = value("--models");
const run = value("--run");
const persistentPairs = Boolean(run);
const contextCache = value("--context-cache")
  || (ledger.endsWith('.jsonl') ? ledger.replace(/-judge\.jsonl$/, '-judge-context-hashes.json') : `${ledger}-context-hashes.json`);
if (!ledger || !cost || (!pagesArg && !itemsArg && !manifestsArg)) {
  console.error("usage: node tools/judge-sweep.mjs --ledger research/level<n>-judge.jsonl --cost research/level<n>-judge-cost.jsonl (--pages a-page,another-page | --items item-id,item-id | --manifests wave<k>-a.pages.json,wave<k>-b.pages.json) [--models model,...] [--limit N]");
  process.exit(2);
}
if (manifestsArg && (pagesArg || itemsArg)) {
  console.error("judge-sweep: --manifests cannot be combined with --pages/--items");
  process.exit(2);
}
if (persistentPairs && (!/^[A-Za-z0-9._-]+$/.test(run) || manifestsArg || modelsArg)) {
  throw new Error("--run persistent judging requires a plain run id, --pages or --items, and the configured Terra lineup");
}
const limit = limitArg ? Number(limitArg) : Infinity;
if (!(Number.isInteger(limit) && limit > 0) && limit !== Infinity) {
  throw new Error("--limit must be a positive integer");
}

// The ids come from tools/models.mjs, the one registry. They stay named here
// because the per-model CONCURRENCY table below keys on them, and the `[1m]`
// suffix is part of the model IDENTITY — ledger rows, slot directories and
// JUDGE_CONCURRENCY_* names all carry it.
const DEEPSEEK = MODELS.deepseek.id;
const TERRA = MODELS.terra.id;
const SONNET = MODELS.sonnet.id;
const OPUS = MODELS.opus.id;
// The lineup map is the registry's too. Historical rows are append-only evidence
// only; the child judge inherits the same env var as the sweep. Default flipped
// to deepseek+sonnet (owner, 2026-08-17) after the Codex account behind Terra
// was throttled mid-run, BACK to deepseek+terra (owner, 2026-08-20), and to
// deepseek+opus (owner, 2026-08-23) when that Codex subscription reached its
// weekly limit outright. Every retired lane's rows stay as evidence; none
// satisfies current coverage, which is per frozen context and per configured
// model set, not per any judge name appearing in the ledger.
const lineupName = process.env.JUDGE_LINEUP ?? DEFAULT_LINEUP;
const supportedModels = JUDGE_LINEUPS[lineupName];
if (!supportedModels) {
  throw new Error(`JUDGE_LINEUP must be one of ${Object.keys(JUDGE_LINEUPS).join(", ")}`);
}
const models = modelsArg
  ? [...new Set(modelsArg.split(",").map((model) => model.trim()).filter(Boolean))]
  : supportedModels;
if (!models.length || models.some((model) => !supportedModels.includes(model))) {
  throw new Error(`--models must contain only ${supportedModels.join(", ")}`);
}
if (persistentPairs && (models.length !== 1 || models[0] !== TERRA)) {
  throw new Error(`--run persistent judging requires the singleton ${TERRA} lineup`);
}
const requestedPages = new Set(pagesArg.split(",").map((s) => s.trim()).filter(Boolean));
const requestedItems = new Set(itemsArg.split(",").map((s) => s.trim()).filter(Boolean));
const plan = JSON.parse(readFileSync("research/plan-spec.json", "utf8"));
const pagesById = new Map(plan.pages.map((page) => [page.id, page]));
// A normal sweep is named by its A pages, but judge coverage is per A/B pair:
// the examples page has its own items and must not disappear merely because it
// is not a prerequisite of the A page. Keep an explicitly named B page useful
// for narrow recovery work without implicitly adding its A companion.
const selectedPages = new Set();
for (const id of requestedPages) {
  selectedPages.add(id);
  const page = pagesById.get(id);
  if (page?.kind === "A" && typeof page.companion === "string") selectedPages.add(page.companion);
}
const pageIds = plan.pages
  .filter((page) => selectedPages.has(page.id))
  .flatMap((page) => page.items.map((item) => item.id));
const manifestIds = manifestsArg
  ? [...new Set(manifestsArg.split(",").map((s) => s.trim()).filter(Boolean)
      .flatMap((file) => JSON.parse(readFileSync(file, "utf8"))
        .flatMap((page) => page.items.map((item) => item.id))))]
  : [];
const ids = manifestsArg ? manifestIds : requestedItems.size ? [...requestedItems] : pageIds;
// The guard is a typo catcher, and plan-spec alone is the wrong authority for
// it: the spec's `items` arrays are stale for pre-spec pages, so a legitimate
// published item can be absent from them (measured 2026-08-02 — an audit
// rejudge of 13 items died on lem-rat-cut-embeds and thm-reals-dedekind-field,
// both published and on disk for months). Accept an id that is either planned
// OR an authored item file; a typo satisfies neither.
const plannedIds = new Set(plan.pages.flatMap((page) => page.items.map((item) => item.id)));
const unknownItems = [...requestedItems].filter((id) => !plannedIds.has(id) && !existsSync(`items/${id}.md`));
if (unknownItems.length) throw new Error(`--items includes unknown item id(s): ${unknownItems.join(", ")}`);
if (!ids.length || new Set(ids).size !== ids.length) {
  throw new Error(`selected pages produced ${ids.length} non-unique items`);
}

// Persistent build judging is still item-granular. This map changes only the
// transport and scheduling: one sequential worker owns each A/B pair, and every
// invocation below remains the canonical one-item judge.mts prompt.
const aPageForPage = new Map();
for (const page of plan.pages.filter((candidate) => candidate.kind === "A")) {
  aPageForPage.set(page.id, page.id);
  if (typeof page.companion === "string") aPageForPage.set(page.companion, page.id);
}
const pairForItem = new Map();
for (const page of plan.pages) {
  const pair = aPageForPage.get(page.id);
  if (!pair) continue;
  for (const item of page.items ?? []) pairForItem.set(item.id, pair);
}
const latestPublishedRepair = new Map();
if (persistentPairs && itemsArg) {
  const repairPath = `research/${run}-step8-published-repairs.jsonl`;
  if (existsSync(repairPath)) {
    for (const [index, line] of readFileSync(repairPath, "utf8").split("\n").filter(Boolean).entries()) {
      let row;
      try { row = JSON.parse(line); } catch { throw new Error(`${repairPath}:${index + 1}: invalid JSON`); }
      if (row.kind === "repaired" && typeof row.id === "string") latestPublishedRepair.set(row.id, row);
    }
  }
}
const pairForTarget = (itemId) => {
  const route = latestPublishedRepair.get(itemId);
  if (route) {
    const via = pairForItem.get(route.found_via);
    if (via) return via;
    throw new Error(`${itemId}: no Step-7 A/B pair session route through found_via ${route.found_via}`);
  }
  const direct = pairForItem.get(itemId);
  if (direct) return direct;
  throw new Error(`${itemId}: no Step-7 A/B pair session route`);
};
const pairTargets = new Map();
if (persistentPairs) {
  for (const itemId of ids) {
    const pair = pairForTarget(itemId);
    const owned = pairTargets.get(pair) ?? [];
    owned.push(itemId);
    pairTargets.set(pair, owned);
  }
}
const sessionHomeFor = (pair) => {
  if (!/^[A-Za-z0-9._-]+$/.test(pair)) throw new Error(`invalid A/B pair id: ${pair}`);
  return resolve(`.autopilot/sessions/${run}/judge/${pair}`);
};
const readPairSession = (pair, required = false) => {
  const path = join(sessionHomeFor(pair), "judge-session.json");
  if (!existsSync(path)) {
    if (required) throw new Error(`${pair}: missing Step-7 Terra session metadata at ${path}`);
    return null;
  }
  let row;
  try { row = JSON.parse(readFileSync(path, "utf8")); }
  catch (cause) { throw new Error(`${path}: invalid JSON (${cause.message})`); }
  if (row.version !== 1 || row.pair !== pair || row.model !== TERRA
    || !/^[0-9a-f-]{36}$/i.test(row.session_id)) {
    throw new Error(`${path}: invalid persistent Terra session metadata`);
  }
  return row;
};
if (persistentPairs && itemsArg) {
  for (const pair of pairTargets.keys()) readPairSession(pair, true);
}

const history = new Map();
if (existsSync(ledger)) {
  for (const [index, line] of readFileSync(ledger, "utf8").split("\n").filter(Boolean).entries()) {
    let row;
    try { row = JSON.parse(line); } catch { throw new Error(`${ledger}:${index + 1}: invalid JSON`); }
    if (!ids.includes(row.id) || !models.includes(row.model)) continue;
    const histories = history.get(row.id) ?? new Map();
    const modelRows = histories.get(row.model) ?? [];
    modelRows.push(row);
    histories.set(row.model, modelRows);
    history.set(row.id, histories);
  }
}
let loader;
try { loader = tsxLoader(); }
catch (cause) { console.error(`[judge-sweep] ${cause.message}`); process.exit(2); }
let childCaptureSerial = 0;
const captureChild = (args, env) => new Promise((resolve, reject) => {
  const prefix = `/tmp/prestige-math-library-judge-capture-${process.pid}-${childCaptureSerial += 1}`;
  const stdoutPath = `${prefix}.stdout`;
  const stderrPath = `${prefix}.stderr`;
  const stdoutFd = openSync(stdoutPath, "w");
  const stderrFd = openSync(stderrPath, "w");
  let settled = false;
  const finish = (callback) => {
    if (settled) return;
    settled = true;
    closeSync(stdoutFd);
    closeSync(stderrFd);
    const stdout = readFileSync(stdoutPath, "utf8");
    const stderr = readFileSync(stderrPath, "utf8");
    rmSync(stdoutPath, { force: true });
    rmSync(stderrPath, { force: true });
    callback(stdout, stderr);
  };
  const child = spawn(process.execPath, args, { stdio: ["ignore", stdoutFd, stderrFd], env });
  child.on("error", (cause) => finish(() => reject(cause)));
  child.on("close", (code) => finish((stdout, stderr) => resolve({ code: code ?? 2, stdout, stderr })));
});
// Every configured model queue attests against the identical current prompt.
// Build each hash through the canonical judge path before network work starts.
const currentHashes = new Map();
for (const result of await buildCurrentContextHashes(ids, { loader, cachePath: contextCache })) {
  if (!result.ok) throw new Error(result.error);
  currentHashes.set(result.id, { context: result.context, item: result.item });
}
// Owner policy, 2026-08-01: cap each judge lane independently. The current
// Terra remains capped at 14. Under the current singleton lineup that is also
// the total judge concurrency; see MODEL_CONCURRENCY below.
// `--limit` caps how many ITEMS each model covers; it is not concurrency.
// Every lane has its own model-named slot directory, so independent pools cannot
// double-book a cap.
const MODEL_CONCURRENCY = Object.freeze({
  // DeepSeek gates every sweep: at the end of wave 1b's A7, Terra had
  // finished all 174 while DeepSeek still had 36 pending with all of its
  // slots held. Its per-call latency, not its throughput, sets wall clock.
  // That is why it was raised 16 -> 24 (owner, 2026-08-03), and it is BACK to
  // 16 (owner, 2026-08-05) for a reason latency does not see: MEMORY. Every
  // lane call is its own node+tsx process. Wave 4 measured the sweep at 3.9 GB
  // with a 4.6 GB peak on a 7.8 GB host, past the
  // unit's MemoryHigh=4G and closing on MemoryMax=5G. A lane killed by the
  // kernel returns a capacity refusal, and a capacity refusal is not a verdict
  // — a capacity refusal is always a null verdict.
  // RAISED to 24 for DeepSeek and Sonnet (owner, 2026-08-17), superseding the
  // 2026-08-05 16-cap. The context that cap carried, restated so this raise
  // is a decision and not amnesia: the 16-cap's reason was MEMORY — the sweep
  // measured 3.9 GB with a 4.6 GB peak at 16+16 on a 7.8 GB VPS host, and a
  // kernel-killed lane is a null verdict. This host carries 16 GB. The
  // retired 2026-08-04 Claude lane also recorded 207 capacity refusals at
  // cap 16; today's sonnet lane ran 313/392 clean at cap 6 with its nulls
  // coming from the account session limit, not concurrency. If 24 produces
  // refusal or kernel-kill nulls, the currency rule re-spends them — but
  // lower the cap back rather than paying that loop twice.
  //
  // BOTH ACTIVE LANES ARE 14 (owner, 2026-08-20): "Set judge concurrency to 14
  // for both deepseek and terra". The sweep therefore runs **28 calls combined**
  // under `deepseek+terra`. This is a BACK-OFF, not a raise, and it sits below
  // every previously measured cliff: below the 2026-08-05 memory value of 16
  // that was derived on a 7.8 GB host, and well below the 24 the other lanes
  // carried. Symmetric caps also mean neither lane can get far ahead of the
  // other, so an interrupted sweep leaves fewer half-paired items.
  //
  // Do not read this as a memory or capacity finding — none was taken on
  // 2026-08-20. It is an owner setting, and the note above records what the
  // numbers around it were measured from.
  //
  // SONNET keeps 24 because its lineup is not selected; if `deepseek+sonnet` is
  // ever chosen again, decide its cap then rather than inheriting a number set
  // for a different lane.
  //
  // OPUS TAKES 14 (owner, 2026-08-23) — the owner's active-lane value, carried
  // over unchanged with the lane swap: "Just replace LLMs as instructed without
  // changing anything else". The paragraph above says to decide a newly selected
  // lane's cap rather than inherit one, so record what the decision was made
  // AGAINST, because this is the one number in this file that a measurement
  // disagrees with:
  //   * the retired 2026-08-04 claude lane returned 207 CAPACITY REFUSALS against
  //     140 responses at cap 16 on wave 5 A7 — 60%, up from 29% on wave 4 — while
  //     DeepSeek returned 209/209 on the same sweep;
  //   * the sonnet lane ran 313/392 clean at cap 6, and its nulls came from the
  //     account SESSION LIMIT rather than from concurrency;
  //   * a capacity refusal is a null verdict, never a verdict, so a lane that
  //     refuses does not fail loudly — it quietly halves the run's paired
  //     coverage.
  // Both figures are for a claude-CLI lane, which is what the second judge is
  // again as of 2026-08-24 (claude-sonnet-4-6), and 14 sits between them. If this
  // sweep starts returning `claude_exit` nulls at ~3.5s, that is the refusal
  // signature: lower with JUDGE_CONCURRENCY_CLAUDE_SONNET_4_6 (which can only
  // lower, never raise) rather than re-spending the loop. The env name is derived
  // from the model id, so it moves with the lineup — see `laneCap` below.
  [DEEPSEEK]: 14,
  [TERRA]: 14,
  [SONNET]: 24,
  [OPUS]: 14,
});

// MEASURED, wave 5 A7 (2026-08-05): at cap 16 the retired second lane returned **207
// capacity refusals against 140 responses** — `claude_exit`, status 1, 66 bytes,
// ~3.5s, i.e. refused fast rather than reasoning and failing. 69 of 209 items
// ended with only DeepSeek's verdict, so the wave's paired coverage was really
// 140/209. The trend is the alarming part: wave 4 refused 61 of 213 (29%) at the
// same cap, wave 5 refused 60%. DeepSeek, on the same sweep, returned 209/209.
//
// This is the exact failure that retired an earlier lane (303 refusals of 382 on
// wave 0), and the standing rule is that a capacity refusal is a NULL, never a
// verdict. So the cap needs to be tunable without editing an owner-set constant:
// the default is whatever MODEL_CONCURRENCY says the owner set (14 per active
// lane since 2026-08-20), and a targeted replay can lower just the refusing
// lane. Raising it above the owner's value is deliberately not possible here —
// this exists to back off, not to push harder.
const concurrencyOverride = (model) => {
  const raw = process.env[`JUDGE_CONCURRENCY_${model.replace(/[^A-Za-z0-9]/g, "_").toUpperCase()}`];
  if (raw === undefined) return null;
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 1) throw new Error(`JUDGE_CONCURRENCY_* must be a positive integer; got ${raw}`);
  return Math.min(n, MODEL_CONCURRENCY[model] ?? n);
};
const capFor = (model) => concurrencyOverride(model) ?? MODEL_CONCURRENCY[model];
const MAX_CONCURRENT_CALLS = supportedModels.reduce((sum, model) => sum + capFor(model), 0);
const RETRY_EXIT = 4;
const LENGTH_RETRY_EXIT = 5;
// These semaphores are shared across *all* sweep invocations. An in-process
// pool alone would let two resumed sweeps exceed a model lane's cap. Directory
// slots are atomic on this host filesystem; each holder refreshes its mtime,
// and an abandoned slot is reclaimed only after its heartbeat is stale for five
// minutes. Model-specific directories preserve the independent per-lane caps.
const GLOBAL_SLOT_DIR = "/tmp/prestige-math-library-judge-slots";
const SLOT_STALE_MS = 5 * 60_000;
const SLOT_HEARTBEAT_MS = 30_000;
const SLOT_RETRY_MS = 250;
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const slotDirFor = (model) => `${GLOBAL_SLOT_DIR}/${model}`;
// An interrupted parent used to leave all of its directory semaphores behind
// until their five-minute stale timeout.  That is safe, but it unnecessarily
// stalls an otherwise independent recovery sweep.  Keep only this process's
// release callbacks so SIGINT/SIGTERM can synchronously clean up its own
// slots without touching a concurrent sweep's slots.
const heldSlotReleases = new Set();
let receivedTerminationSignal = false;
const releaseHeldSlots = () => {
  for (const release of [...heldSlotReleases]) {
    try { release(); } catch { /* best-effort shutdown cleanup */ }
  }
  heldSlotReleases.clear();
};
const terminateAfterSlotCleanup = () => {
  if (receivedTerminationSignal) return;
  receivedTerminationSignal = true;
  releaseHeldSlots();
  process.exit(130);
};
process.once("SIGINT", terminateAfterSlotCleanup);
process.once("SIGTERM", terminateAfterSlotCleanup);
const reapStaleSlots = (model) => {
  try {
    for (const entry of readdirSync(slotDirFor(model), { withFileTypes: true })) {
      if (!entry.isDirectory() || !/^slot-[0-9]+$/.test(entry.name)) continue;
      const slot = `${slotDirFor(model)}/${entry.name}`;
      try {
        if (Date.now() - statSync(slot).mtimeMs > SLOT_STALE_MS) {
          rmSync(slot, { recursive: true, force: true });
          console.error(`[judge-sweep] reclaimed stale ${model} slot ${entry.name}.`);
        }
      } catch { /* a concurrent release/reclaim won the race */ }
    }
  } catch { /* the first acquirer creates the directory below */ }
};
const acquireModelSlot = async (model) => {
  const dir = slotDirFor(model);
  const cap = capFor(model);
  if (!cap) throw new Error(`no concurrency cap configured for ${model}`);
  mkdirSync(dir, { recursive: true });
  while (true) {
    reapStaleSlots(model);
    for (let index = 0; index < cap; index += 1) {
      const slot = `${dir}/slot-${index}`;
      try {
        mkdirSync(slot);
        writeFileSync(`${slot}/holder.json`, JSON.stringify({ model, pid: process.pid, acquired_at: new Date().toISOString() }) + "\n");
        const heartbeat = setInterval(() => {
          try { utimesSync(slot, new Date(), new Date()); } catch { /* released or replaced */ }
        }, SLOT_HEARTBEAT_MS);
        // STAGGER THE CODEX BOOT BURST. Terra is an ephemeral Codex process
        // per call, and sixteen of them booting in the same second all hit
        // the models-refresh endpoint together: on frontier-15's step-7
        // sweep every Terra call died NO_CONTENT on `429 Too Many Requests
        // ... failed to refresh available models` while DeepSeek's direct
        // API sailed — 392 null verdicts, an entire lane lost. A first-boot
        // spread of 1.5s per slot index (0–22.5s across the pool) costs
        // nothing against a multi-hour sweep and keeps concurrent boots to
        // ones; steady-state recycling never bursts, so the delay applies
        // once per slot acquisition.
        //
        // DELIBERATELY TERRA-ONLY, still, after the 2026-08-23 move to Opus.
        // This stagger targets one specific Codex failure — a models-refresh
        // endpoint 429 at boot — and the claude CLI has no such step. The Opus
        // lane's known failure is different in kind: an ACCOUNT capacity refusal
        // (`claude_exit`, ~3.5s, 66 bytes), which spreading boots does not fix
        // because the limit is on the quota, not on the boot. If that signature
        // appears, lower the cap; do not add a stagger and expect it to help.
        if (model === "gpt-5.6-terra" && index > 0) await pause(index * 1500);
        return () => {
          clearInterval(heartbeat);
          try { rmSync(slot, { recursive: true, force: true }); } catch { /* already reclaimed */ }
        };
      } catch (error) {
        if (error?.code !== "EEXIST") throw error;
      }
    }
    await pause(SLOT_RETRY_MS);
  }
};
/** Which items this model still owes a verdict on.
 *
 *  The currency rule is `tools/judge-currency.mjs`, shared with
 *  `level-coverage.mjs`. This used to implement only clause (a) — the frozen
 *  pair context — while the gate that checks its work honoured clause (b) too,
 *  so the sweep spent calls re-judging items the gate already considered
 *  covered. Two readings of one rule is the defect; the spend is the symptom. */
const pendingFor = (model) => ids
  .filter((id) => {
    const current = currentHashes.get(id);
    if (!current) throw new Error(`${id}: missing current judge context hash`);
    const modelRows = history.get(id)?.get(model) ?? [];
    const pair = persistentPairs ? pairForTarget(id) : null;
    const session = pair ? readPairSession(pair, false) : null;
    return ![...modelRows].reverse().some((row) =>
      typeof row.keep === "boolean" && verdictIsCurrent(row, current)
        && (!persistentPairs || (session && row.session_pair === pair && row.session_id === session.session_id)),
    );
  })
  .slice(0, limit);
const pending = Object.fromEntries(models.map((model) => [model, pendingFor(model)]));
console.log(`[judge-sweep] lineup ${lineupName}: ${models.map((model) => `${model} pending ${pending[model]?.length ?? 0}/${ids.length} (cap ${capFor(model)})`).join("; ")} — at most ${MAX_CONCURRENT_CALLS} calls combined.`);

if (persistentPairs) {
  const pendingIds = new Set(pending[TERRA]);
  const work = [...pairTargets.entries()]
    .map(([pair, targets]) => [pair, targets.filter((id) => pendingIds.has(id))])
    .filter(([, targets]) => targets.length);
  console.log(`[judge-sweep] ${work.length} persistent Terra pair worker(s); each item receives one complete sequential xhigh turn.`);
  let paymentFailed = false;

  const runPairAttempt = async (pair, id, attempt, lengthFallback) => {
    const session = readPairSession(pair, false);
    console.log(`[judge-sweep] start ${TERRA} ${id} in pair ${pair} attempt ${attempt + 1}${session ? " (resume)" : " (new session)"}`);
    const releaseSlot = await acquireModelSlot(TERRA);
    heldSlotReleases.add(releaseSlot);
    try {
      const args = ["--import", loader, "tools/judge.mts", `items/${id}.md`, "--model", TERRA,
        "--session-home", sessionHomeFor(pair), "--session-pair", pair,
        ...(session ? ["--resume-session", session.session_id] : [])];
      let captured;
      try {
        captured = await captureChild(args, {
          ...process.env,
          JUDGE_VERDICTLOG: ledger,
          JUDGE_COSTLOG: cost,
          JUDGE_ATTEMPTLOG: attempts,
          JUDGE_MAX_ATTEMPTS: "1",
          JUDGE_ATTEMPT_NUMBER: String(attempt + 1),
          JUDGE_RETRY_ALLOWED: attempt < 2 ? "1" : "0",
          JUDGE_DEEPSEEK_LENGTH_FALLBACK: lengthFallback ? "1" : "0",
        });
      } catch (cause) {
        console.error(`[judge-sweep] ${id}: could not start persistent judge — ${String(cause)}`);
        return { code: 2, retry_after_ms: null };
      }
      if (captured.stdout) process.stdout.write(captured.stdout);
      if (captured.stderr) process.stderr.write(captured.stderr);
      let retry_after_ms = null;
      if (captured.code === RETRY_EXIT || captured.code === LENGTH_RETRY_EXIT) {
        for (const line of captured.stdout.trim().split("\n").reverse()) {
          try {
            const control = JSON.parse(line);
            if (control.retry) {
              retry_after_ms = Number.isFinite(control.retry_after_ms) ? control.retry_after_ms : null;
              break;
            }
          } catch { /* diagnostic output */ }
        }
      }
      return { code: captured.code, retry_after_ms };
    } finally {
      heldSlotReleases.delete(releaseSlot);
      releaseSlot();
    }
  };

  const pairWorker = async ([pair, targets]) => {
    for (const id of targets) {
      let lengthFallback = false;
      for (let attempt = 0; attempt < 3; attempt += 1) {
        if (paymentFailed) return;
        const result = await runPairAttempt(pair, id, attempt, lengthFallback);
        if (result.code === 3) {
          paymentFailed = true;
          console.error("[judge-sweep] account cannot pay; stopping without treating this as a verdict.");
          return;
        }
        if ((result.code === RETRY_EXIT || result.code === LENGTH_RETRY_EXIT) && attempt < 2) {
          lengthFallback ||= result.code === LENGTH_RETRY_EXIT;
          const base = Number.isFinite(result.retry_after_ms) ? Math.min(result.retry_after_ms, 60_000) : (attempt + 1) * 4000;
          await pause(base + Math.floor(Math.random() * 1000));
          continue;
        }
        if (result.code !== 0) {
          console.error(`[judge-sweep] ${TERRA} ${id}: judge exited ${result.code}; closure will expose the incomplete item.`);
        }
        break;
      }
    }
  };

  // Exactly one worker per A/B pair. Items inside a worker are deliberately
  // serial: Terra finishes one full item verdict before seeing the next item.
  await Promise.all(work.map(pairWorker));
  if (paymentFailed) process.exit(3);
  console.log("[judge-sweep] persistent pair sweep completed; run tools/judge-compare.mjs on the judge ledger.");
  process.exit(0);
}

const runAttempt = async (task) => {
  const { id, model } = task;
  console.log(`[judge-sweep] start ${model} ${id} attempt ${task.attempt + 1}`);
  const releaseSlot = await acquireModelSlot(model);
  heldSlotReleases.add(releaseSlot);
  try {
    let captured;
    try {
      captured = await captureChild(
        ["--import", loader, "tools/judge.mts", `items/${id}.md`, "--model", model],
        {
          ...process.env,
          JUDGE_VERDICTLOG: ledger,
          JUDGE_COSTLOG: cost,
          JUDGE_ATTEMPTLOG: attempts,
          JUDGE_MAX_ATTEMPTS: "1",
          JUDGE_ATTEMPT_NUMBER: String(task.attempt + 1),
          JUDGE_RETRY_ALLOWED: task.attempt < 2 ? "1" : "0",
          JUDGE_DEEPSEEK_LENGTH_FALLBACK: task.lengthFallback ? "1" : "0",
        },
      );
    } catch (error) {
      console.error(`[judge-sweep] ${id}: could not start judge — ${String(error)}`);
      return { code: 2, retry_after_ms: null };
    }
    const { code, stdout, stderr } = captured;
    if (stdout) process.stdout.write(stdout);
    if (stderr) process.stderr.write(stderr);
    let retry_after_ms = null;
    if (code === RETRY_EXIT || code === LENGTH_RETRY_EXIT) {
      for (const line of stdout.trim().split("\n").reverse()) {
        try {
          const control = JSON.parse(line);
          if (control.retry) {
            retry_after_ms = Number.isFinite(control.retry_after_ms) ? control.retry_after_ms : null;
            break;
          }
        } catch { /* another diagnostic line, not the retry control record */ }
      }
    }
    return { code, retry_after_ms };
  } finally {
    heldSlotReleases.delete(releaseSlot);
    releaseSlot();
  }
};
let paymentFailed = false;
const cursors = new Map(models.map((model) => [model, 0]));
let nextModelIndex = 0;
const retries = [];
const takeInitialTask = () => {
  for (let offset = 0; offset < models.length; offset += 1) {
    const index = (nextModelIndex + offset) % models.length;
    const model = models[index];
    const cursor = cursors.get(model);
    if (cursor < pending[model].length) {
      cursors.set(model, cursor + 1);
      nextModelIndex = (index + 1) % models.length;
      return { id: pending[model][cursor], model, attempt: 0, lengthFallback: false };
    }
  }
  return null;
};
const takeDueRetry = () => {
  const now = Date.now();
  let selected = -1;
  for (let index = 0; index < retries.length; index += 1) {
    if (retries[index].ready_at <= now && (selected < 0 || retries[index].ready_at < retries[selected].ready_at)) selected = index;
  }
  return selected < 0 ? null : retries.splice(selected, 1)[0];
};
const nextTask = () => takeDueRetry() ?? takeInitialTask();
const nextRetryWaitMs = () => retries.length
  ? Math.max(1, Math.min(...retries.map((task) => task.ready_at - Date.now())))
  : null;
const retryDelayMs = (task, retryAfterMs) => {
  const base = Number.isFinite(retryAfterMs) ? Math.min(retryAfterMs, 60_000) : (task.attempt + 1) * 4000;
  return base + Math.floor(Math.random() * 1000);
};
const worker = async () => {
  while (!paymentFailed) {
    const task = nextTask();
    if (!task) {
      const wait = nextRetryWaitMs();
      if (wait === null) return;
      await pause(wait);
      continue;
    }
    const result = await runAttempt(task);
    if (result.code === 3) {
      paymentFailed = true;
      console.error("[judge-sweep] account cannot pay; stopping without treating this as a verdict.");
    } else if ((result.code === RETRY_EXIT || result.code === LENGTH_RETRY_EXIT) && task.attempt < 2) {
      const ready_at = Date.now() + retryDelayMs(task, result.retry_after_ms);
      retries.push({
        ...task,
        attempt: task.attempt + 1,
        lengthFallback: task.lengthFallback || result.code === LENGTH_RETRY_EXIT,
        ready_at,
      });
      console.log(`[judge-sweep] requeued ${task.model} ${task.id} for attempt ${task.attempt + 2}; its model slot is free during backoff.`);
    } else if (result.code !== 0) {
      console.error(`[judge-sweep] ${task.model} ${task.id}: judge exited ${result.code}; continue so the Step-10 comparison exposes the incomplete item.`);
    }
  }
};
const totalPending = models.reduce((sum, model) => sum + pending[model].length, 0);
const workerLimit = models.reduce((sum, model) => sum + capFor(model), 0);
await Promise.all(Array.from(
  { length: Math.min(workerLimit, totalPending) },
  () => worker(),
));
if (paymentFailed) process.exit(3);
console.log("[judge-sweep] completed; run tools/judge-compare.mjs on the judge ledger.");
