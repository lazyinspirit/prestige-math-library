// Run hash-attested paired judge calls for every item on selected plan pages.
// Workflow rule: the initial Step-7 call supplies every completed-level A page;
// --items is only for Alpha-selected rejudges after a material repair.
// Calls share one ten-slot global pool. DeepSeek and Terra start their next item
// as soon as a slot is free, without waiting for one another on the same item.
// Retry backoffs return work to this scheduler, releasing the slot so unrelated
// calls can continue. The pool has no per-model quota, while no result from
// either model influences the other.
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, utimesSync, writeFileSync } from "node:fs";
import { spawn, spawnSync } from "node:child_process";

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
const limitArg = value("--limit");
const modelsArg = value("--models");
if (!ledger || !cost || (!pagesArg && !itemsArg)) {
  console.error("usage: node tools/judge-sweep.mjs --ledger research/level<n>-judge-paired.jsonl --cost research/level<n>-judge-paired-cost.jsonl (--pages a-page,another-page | --items item-id,item-id) [--models model,model] [--limit N]");
  process.exit(2);
}
const limit = limitArg ? Number(limitArg) : Infinity;
if (!(Number.isInteger(limit) && limit > 0) && limit !== Infinity) {
  throw new Error("--limit must be a positive integer");
}

const DEEPSEEK = "deepseek-v4-pro";
const TERRA = "gpt-5.6-terra";
const supportedModels = [DEEPSEEK, TERRA];
const models = modelsArg
  ? [...new Set(modelsArg.split(",").map((model) => model.trim()).filter(Boolean))]
  : supportedModels;
if (!models.length || models.some((model) => !supportedModels.includes(model))) {
  throw new Error(`--models must contain only ${supportedModels.join(", ")}`);
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
const ids = requestedItems.size ? [...requestedItems] : pageIds;
const plannedIds = new Set(plan.pages.flatMap((page) => page.items.map((item) => item.id)));
if ([...requestedItems].some((id) => !plannedIds.has(id))) throw new Error("--items includes an unknown planned item id");
if (!ids.length || new Set(ids).size !== ids.length) {
  throw new Error(`selected pages produced ${ids.length} non-unique items`);
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
const loader = "/root/Projects/prestige-intelligence/worker/node_modules/tsx/dist/loader.mjs";
const currentContextHash = (id) => {
  const result = spawnSync(process.execPath, ["--import", loader, "tools/judge.mts", `items/${id}.md`, "--context-hash"], {
    encoding: "utf8",
    env: process.env,
  });
  if (result.status !== 0) {
    throw new Error(`${id}: could not build current judge context — ${result.stderr.trim()}`);
  }
  const row = JSON.parse(result.stdout);
  if (row.id !== id || typeof row.context_sha256 !== "string") {
    throw new Error(`${id}: malformed current context hash`);
  }
  return row.context_sha256;
};
// Both model queues attest against the identical current prompt. Build its hash
// once per item rather than parsing the same A/B-pair context twice before any
// API call can start.
const currentHashes = new Map(ids.map((id) => [id, currentContextHash(id)]));
const MAX_CONCURRENT_CALLS = 10;
const RETRY_EXIT = 4;
const LENGTH_RETRY_EXIT = 5;
// This semaphore is shared across *all* sweep invocations. An in-process pool
// alone would let two resumed sweeps exceed the owner's global ten-call limit.
// The directory slots are atomic on this host filesystem; each holder refreshes
// its mtime, and an abandoned slot is reclaimed only after its heartbeat is
// stale for five minutes.
const GLOBAL_SLOT_DIR = "/tmp/prestige-math-library-judge-slots";
const SLOT_STALE_MS = 5 * 60_000;
const SLOT_HEARTBEAT_MS = 30_000;
const SLOT_RETRY_MS = 250;
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const reapStaleSlots = () => {
  try {
    for (const entry of readdirSync(GLOBAL_SLOT_DIR, { withFileTypes: true })) {
      if (!entry.isDirectory() || !/^slot-[0-9]$/.test(entry.name)) continue;
      const slot = `${GLOBAL_SLOT_DIR}/${entry.name}`;
      try {
        if (Date.now() - statSync(slot).mtimeMs > SLOT_STALE_MS) {
          rmSync(slot, { recursive: true, force: true });
          console.error(`[judge-sweep] reclaimed stale global slot ${entry.name}.`);
        }
      } catch { /* a concurrent release/reclaim won the race */ }
    }
  } catch { /* the first acquirer creates the directory below */ }
};
const acquireGlobalSlot = async () => {
  mkdirSync(GLOBAL_SLOT_DIR, { recursive: true });
  while (true) {
    reapStaleSlots();
    for (let index = 0; index < MAX_CONCURRENT_CALLS; index += 1) {
      const slot = `${GLOBAL_SLOT_DIR}/slot-${index}`;
      try {
        mkdirSync(slot);
        writeFileSync(`${slot}/holder.json`, JSON.stringify({ pid: process.pid, acquired_at: new Date().toISOString() }) + "\n");
        const heartbeat = setInterval(() => {
          try { utimesSync(slot, new Date(), new Date()); } catch { /* released or replaced */ }
        }, SLOT_HEARTBEAT_MS);
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
const pendingFor = (model) => ids
  .filter((id) => {
    const current = currentHashes.get(id);
    if (!current) throw new Error(`${id}: missing current judge context hash`);
    const modelRows = history.get(id)?.get(model) ?? [];
    return ![...modelRows].reverse().some((row) =>
      typeof row.keep === "boolean" && row.context_sha256 === current,
    );
  })
  .slice(0, limit);
const pending = Object.fromEntries(models.map((model) => [model, pendingFor(model)]));
console.log(`[judge-sweep] DeepSeek pending ${pending[DEEPSEEK]?.length ?? 0}/${ids.length}; Terra pending ${pending[TERRA]?.length ?? 0}/${ids.length}; one independent global pool uses at most ${MAX_CONCURRENT_CALLS} calls total.`);

const runAttempt = async (task) => {
  const { id, model } = task;
  console.log(`[judge-sweep] start ${model} ${id} attempt ${task.attempt + 1}`);
  const releaseSlot = await acquireGlobalSlot();
  try {
    return await new Promise((resolve) => {
      let stdout = "";
      let stderr = "";
      let settled = false;
      const finish = (result) => {
        if (settled) return;
        settled = true;
        if (stdout) process.stdout.write(stdout);
        if (stderr) process.stderr.write(stderr);
        resolve(result);
      };
      const child = spawn(process.execPath, ["--import", loader, "tools/judge.mts", `items/${id}.md`, "--model", model], {
        stdio: ["ignore", "pipe", "pipe"],
        env: {
          ...process.env,
          JUDGE_VERDICTLOG: ledger,
          JUDGE_COSTLOG: cost,
          JUDGE_ATTEMPTLOG: attempts,
          JUDGE_MAX_ATTEMPTS: "1",
          JUDGE_ATTEMPT_NUMBER: String(task.attempt + 1),
          JUDGE_RETRY_ALLOWED: task.attempt < 2 ? "1" : "0",
          JUDGE_DEEPSEEK_LENGTH_FALLBACK: task.lengthFallback ? "1" : "0",
        },
      });
      child.stdout.on("data", (chunk) => { stdout += chunk; });
      child.stderr.on("data", (chunk) => { stderr += chunk; });
      child.on("error", (error) => {
        console.error(`[judge-sweep] ${id}: could not start judge — ${String(error)}`);
        finish({ code: 2, retry_after_ms: null });
      });
      child.on("close", (exitCode) => {
        const code = exitCode ?? 2;
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
        finish({ code, retry_after_ms });
      });
    });
  } finally {
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
      console.log(`[judge-sweep] requeued ${task.model} ${task.id} for attempt ${task.attempt + 2}; the global slot is free during backoff.`);
    } else if (result.code !== 0) {
      console.error(`[judge-sweep] ${task.model} ${task.id}: judge exited ${result.code}; continue so the Step-10 comparison exposes the incomplete item.`);
    }
  }
};
const totalPending = models.reduce((sum, model) => sum + pending[model].length, 0);
await Promise.all(Array.from(
  { length: Math.min(MAX_CONCURRENT_CALLS, totalPending) },
  () => worker(),
));
if (paymentFailed) process.exit(3);
console.log("[judge-sweep] completed; run tools/judge-compare.mjs on the paired ledger.");
