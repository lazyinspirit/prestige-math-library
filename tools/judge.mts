// Topic-neutral cross-provider refuter-judge for library items. Normal paired
// mode runs DeepSeek V4 Pro directly against a freshly spawned GPT-5.6 Terra
// Codex-subscription process on the identical frozen prompt.
//
// Owner update 2026-07-31: session-item authors use GPT 5.6 Sol through the
// Codex subscription plan at xhigh reasoning with a 1M-token context window;
// the judge uses direct DeepSeek V4 Pro and GPT-5.6 Terra in parallel. GPT-family
// calls must NOT be routed through a third-party gateway. This file retains the
// historical GLM/DeepSeek injection-test record as model-evaluation evidence.
//
// MEASURED TWICE, so no future session re-runs either experiment.
//
// PASS 1 — 56 calls, 7 candidate models, against 5 items verified correct by hand
// and 3 historical versions carrying defects verified from git:
//
//   model                         median latency   false pos   caught defects
//   z-ai/glm-5.2                       73.8 s         0/5           0/3
//   deepseek/deepseek-v4-flash          5.1 s         1/5           0/3
//   google/gemini-3.1-flash-lite        3.4 s         0/5           0/3
//   openai/gpt-5.4-mini                 ~3   s         4/5           0/3
//   minimax/minimax-m2.7 | moonshotai/kimi-k2.6 | bailian/qwen3.7-plus: UNPARSEABLE
//
// On pass 1 the default was switched to deepseek for 14x lower latency, since its
// REASON strings named the specific construction under test and read as genuine
// engagement. THAT WAS WRONG, and the way it was wrong is the lesson here.
//
// PASS 2 — INJECTION TEST, which is what actually separates a judge from a rubber
// stamp. Two defects were injected into a known-good item:
//
//   (a) BLATANT: claim 3 restated as "n ~ m implies n < m", false on its face
//       (n = m gives n ~ n) and flatly contradicted by the item's own step 6.1.
//   (b) SUBTLE: trichotomy attributed to lem-nat-transitive-irreflexive, which
//       states only that naturals are transitive sets with n not in n.
//
//   model                        blatant (a)   subtle (b)
//   z-ai/glm-5.2                 CAUGHT        missed
//   deepseek/deepseek-v4-flash   MISSED        missed
//
// DeepSeek passed the blatant injection and reported "No false claim, unjustified
// step, or mis-cited fact was found." GLM named claim 3, gave the n = m witness,
// and pointed out that step 6.1 proves n = m rather than n < m. Reverted.
//
// THE METHOD, not the ranking, is what to keep: A LOW REJECTION RATE AND A
// FLUENT-SOUNDING REASON ARE NOT EVIDENCE OF A GOOD JUDGE. A model that always
// accepts scores zero false positives and writes a confident summary of the proof
// it just failed to check. The only test that separates them is injecting a defect
// you KNOW is there and seeing whether the model says so. Run the injection test
// before adopting any judge model.
//
// The finding that outranks all of it: on 3 real historical defects EVERY model
// scored 0/3, GLM included. All three were found by reading tiers. Keep the judge
// as a cheap screen; never model it as the thing that finds defects.
//
// PASS 4 — INJECTION TEST FOR THE claude-opus-5 LANE, 2026-08-02, 2 calls,
// run before adopting the JUDGE_LINEUP=deepseek+opus audit lineup
// (AUDIT-WORKFLOW.md). Control: lem-cauchy-bounded unmodified -> keep=true,
// with a substantive reason that checked L1 against lem-rat-triangle's actual
// step. Injection: step 2.1 altered to the false bound |a_N| - 1 -> keep=false,
// naming the step, the n = N contradiction, the correct |a_N| + 1 bound, and
// that step 3.2 silently uses the true bound while citing 2.1. The lane meets
// the adoption bar; the standing rule still applies to any future model or
// context change.
//
// PASS 5 — INJECTION TEST FOR THE claude-sonnet-5 LANE, 2026-08-02, 4 calls,
// run before adopting JUDGE_LINEUP=deepseek+sonnet (owner instruction: the
// audit's Claude lane moves Opus 5 -> Sonnet 5 after the Opus lane refused
// 303 of 382 wave-0 calls under 16-way lane concurrency, status 1 at ~3s,
// yielding 101 null verdicts — a capacity refusal, never a verdict).
// First pair, WITHOUT output-format enforcement: control -> keep=true with a
// substantive reason; injection (step 2.1 falsified to |a_N| - 1) -> the
// defect was found exactly, but answered in PROSE, so it scored
// UNPARSEABLE/null. That is a lane-contract failure, not a detection failure:
// the fix is the `--append-system-prompt` JSON constraint above, the exact
// analogue of the DeepSeek lane's `response_format: json_object`; the frozen
// judge prompt is unchanged and stays byte-identical across lanes.
// Second pair, WITH it: control -> keep=true (reason checked L1 against
// lem-rat-triangle's actual step); injection -> keep=false, naming step 2.1,
// the correct |a_N| + 1 bound, and that step 3.2 uses the true bound while
// citing 2.1. The lane meets the adoption bar. The exemplar was restored and
// `git diff` verified clean after each injection.
//
// PASS 3 — INJECTION TEST FOR THE A/B PAIR CONTEXT, 2026-07-28, 3 calls. The
// companion-page block below was added on the owner's instruction; the same rule
// applies to a CONTEXT change as to a model change, so it was injection-tested
// before being used on a level.
//
//   injection                                                          GLM 5.2
//   (a) INVALID TEST, discarded: a Remark asserting gcd(0,0) = 0       accepted
//       and that Bezout extends to (0,0) with x = y = 0
//   (b) a Remark asserting the companion page never uses the           CAUGHT
//       Euclidean algorithm and finds coefficients by inspection
//   (c) control: an untouched item that passed pre-change              accepted
//
// (a) is recorded because getting it wrong is instructive: it was written as a
// false claim and it is TRUE. def-common-divisor-and-gcd fixes gcd(0,0) := 0 by
// convention, the B page does treat that pair, and 0 = 0*0 + 0*0. The judge was
// right and the test was broken. VERIFY AN INJECTION IS ACTUALLY FALSE, against
// the library's own conventions, before reading an acceptance as a miss.
//
// (b) is the class this block exists for: mathematically NEUTRAL, false only
// relative to the companion page's contents, so no amount of mathematical
// knowledge can catch it and only the supplied text can. GLM named both refuting
// items (ex-euclidean-algorithm-worked, ex-euclidean-algorithm-on-consecutive-
// fibonacci-numbers) and added that the proof itself was correct, so the bigger
// prompt did not buy the catch with a collateral false positive.
//
// This does NOT promote the judge above a screen. It closes one structural
// blindness; the 0/3 on real historical defects stands unchallenged.
//
// Also: half the catalogue is not drop-in. Reasoning-style models return <think>
// blocks or reasoning-only content this harness cannot parse. Check parseability
// before swapping a model, not after.
// Run from the repo root (the app worker's tsx supplies the TS loader):
//   node tools/tsx-run.mjs tools/judge.mts \
//     items/<id>.md [--parallel | --model deepseek-v4-pro] [--topic "..."] [--conventions "..."] \
//     [--batch "<A-page-slug>,<A-page-slug>,..."]
//
// CONTEXT SUPPLIED, in the order the prompt carries it (see the blocks below):
//   1. the item itself
//   2. every item it cites          — Statement + Remarks, or FULL if same pair
//   3. the other items on its page  — FULL text, proofs included
//   4. its A/B companion page       — FULL text, proofs included
//   5. other pages in the batch     — Statement + Remarks, only with --batch
// --batch takes A-page slugs; each pulls in its own `-examples` companion, so
// naming the level's A pages is enough. JUDGE_BATCH is the env equivalent.
// --no-context disables 2-5 for A/B measurement.
//
// Prints one line of JSON: {"id":..,"model":..,"keep":true|false|null,"reason":..}
//   keep=true  -> accepted (no specific defect found)
//   keep=false -> rejected  (reason names the defect)
//   keep=null  -> call/parse error (reason explains)
//
// Appends {id,model,pt,ct} to $JUDGE_COSTLOG when set, for the session cost report.
// Appends the FULL VERDICT {id,model,keep,reason,context_sha256,at} to
// $JUDGE_VERDICTLOG when set.
// Set that one for every judge run of a level, at a stable path, so refutations
// survive their own repair — the owner's twice-refuted escalation rule counts
// rejections per proof across runs and cannot work off stdout alone.
//
// Needs DEEPSEEK_API_KEY, supplied directly or from the sibling Prestige
// Intelligence .env file. Terra uses the already-authenticated Codex CLI.
import { readFileSync, appendFileSync, existsSync, readdirSync, mkdtempSync, copyFileSync, chmodSync, rmSync } from "node:fs";
import { createHash } from "node:crypto";
import { basename, join } from "node:path";
import { spawn } from "node:child_process";
import { homedir } from "node:os";
import { deepseekEnvFile } from "./paths.mjs";

const argv = process.argv.slice(2);
const VALUE_FLAGS = new Set(["model", "topic", "conventions", "batch"]);
// --no-context disables the cited-item RAG block, for A/B measurement only.
const opts: Record<string, string> = {};
const bools = new Set<string>();
let file = "";
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a.startsWith("--")) {
    const name = a.slice(2);
    if (VALUE_FLAGS.has(name)) opts[name] = argv[++i] ?? "";
    else bools.add(name);
  } else if (!file) {
    file = a;
  }
}
if (!file && !bools.has("preflight")) {
  console.error('usage: tsx tools/judge.mts items/<id>.md [--parallel | --model M] [--topic "T"] [--conventions "C"] [--batch "slug,slug"]');
  console.error('       tsx tools/judge.mts --preflight [--parallel | --model M]   # cheap account check for the selected judge(s)');
  console.error('       tsx tools/judge.mts items/<id>.md --context-hash          # no-network current-prompt attestation');
  process.exit(2);
}

// EXIT CODES. 0 = a verdict was produced (pass, refutation, or an honest null).
// 2 = usage/config error. 3 = THE ACCOUNT CANNOT PAY: no verdict is obtainable
// now or by retrying, and a sweep should stop rather than continue.
//
// Why 3 exists (measured 2026-07-28, frontier-1). The account ran dry mid-build.
// A 402 is not a transient fault, but it reached callers as `keep: null` with a
// NO_CONTENT reason — indistinguishable from the intermittently dropped verdicts
// this harness genuinely does produce, and the documented response to those is
// "always re-run before concluding". So six agents re-ran a payment error for
// HOURS. The status was never the problem; the AMBIGUITY was.
const PAYMENT_EXIT = 3;
// Endpoint override, so the payment path above can be EXERCISED in a test rather
// than only reasoned about. Defaults to production; nothing in the workflow sets it.
const DEEPSEEK_BASE_URL = process.env.DEEPSEEK_BASE_URL ?? "https://api.deepseek.com";
const DEEPSEEK_API_URL = DEEPSEEK_BASE_URL.replace(/\/$/, "") + "/chat/completions";
const isPaymentError = (status: number, raw: string): boolean =>
  status === 402 || /insufficient[_ ]credits|"code"\s*:\s*402/i.test(raw);
// SESSION items only. Session authoring uses GPT 5.6 Sol; its paired judges are
// therefore direct DeepSeek V4 Pro and fresh GPT-5.6 Terra Codex processes. The
// production pipeline keeps its origin-conditioned lineup in worker/src/ofox.ts.
const DEEPSEEK_MODEL = "deepseek-v4-pro";
const TERRA_MODEL = "gpt-5.6-terra";
// Published-audit lane (owner, 2026-08-02, AUDIT-WORKFLOW.md): a fresh headless
// Claude Code process running Opus 5 — the runFreshTerra pattern with the Codex
// binary swapped for the local `claude` CLI. Selected only through JUDGE_LINEUP.
const OPUS_MODEL = "claude-opus-5";
// Owner, 2026-08-02: the audit's second lane moves from Opus 5 to Sonnet 5.
// Measured cause: under the sweep's 16-way lane concurrency the headless Opus
// process exited status 1 on 303 of 382 attempts (~3s latency, ~142 bytes),
// i.e. a subscription-side capacity refusal rather than a mathematical verdict
// — 101 of 180 wave-0 items came back null. Sonnet 5 runs the identical
// headless lane.
const SONNET_MODEL = "claude-sonnet-5";
const CLAUDE_MODELS = new Set([OPUS_MODEL, SONNET_MODEL]);
// Owner setting: DeepSeek judges at xhigh thinking. Its official OpenAI-format
// API exposes only `high` and `max`; DeepSeek documents xhigh as the compatible
// spelling that maps to `max`, so preserve the requested level explicitly and
// send the canonical wire value.
const DEEPSEEK_THINKING_LEVEL = "xhigh";
const DEEPSEEK_API_REASONING_EFFORT = DEEPSEEK_THINKING_LEVEL === "xhigh" ? "max" : "high";
const SUPPORTED_MODELS = [DEEPSEEK_MODEL, TERRA_MODEL, OPUS_MODEL, SONNET_MODEL];
// JUDGE_LINEUP selects the session's paired lineup without forking the tool.
// Owner instruction 2026-08-04: the second lane moves Terra -> Sonnet 5 for
// both the build and the published-page audit, so the default below is
// deepseek+sonnet. The lane has gone Opus -> Sonnet -> Terra -> Sonnet; every
// older row stays as historical evidence only, and the other lineups remain
// selectable for a deliberate experiment. The frozen prompt, hash attestation,
// and verdict contract are identical across lineups.
//
// WHAT THE LEDGERS MEASURED BEFORE THIS SWITCH (frontiers 6-9, waves 0-1; the
// evidence is in research/audit/RESUME.md, not in anyone's memory):
//   gpt-5.6-terra    142 fatal / 58 false pos / 1036 adjudicated — 94.4% precision
//   deepseek-v4-pro  129 fatal / 55 false pos /  618 adjudicated — 91.1% precision
//   claude-sonnet-5    1 fatal / 14 false pos /   35 adjudicated — 60.0% precision
// Sonnet's dominant failure was `reject` recorded while its own reason text
// concluded *keep* — verdict EXTRACTION, not reasoning; its prose was often the
// sharper of the two and it alone caught a gcd circularity. The transport-level
// JSON constraint in runFreshClaude below is the fix for exactly that failure
// and postdates most of those 35 adjudications, so the 60% is a small, stale
// sample rather than a settled verdict on the model. Re-measure it at the next
// A10 comparison; if it holds, the swap costs fatals (Terra-only fatal items
// were 20% of the wave-0/1 total).
const JUDGE_LINEUPS: Record<string, string[]> = {
  "deepseek+terra": [DEEPSEEK_MODEL, TERRA_MODEL],
  "deepseek+opus": [DEEPSEEK_MODEL, OPUS_MODEL],
  "deepseek+sonnet": [DEEPSEEK_MODEL, SONNET_MODEL],
};
const lineupName = process.env.JUDGE_LINEUP ?? "deepseek+sonnet";
const lineup = JUDGE_LINEUPS[lineupName];
if (!lineup) {
  console.error(`JUDGE_LINEUP must be one of ${Object.keys(JUDGE_LINEUPS).join(", ")}`);
  process.exit(2);
}
// A normal invocation is always the paired comparison. `--model` is reserved
// for a targeted replay of exactly one incomplete/changed model verdict; the
// retained `--parallel` spelling is an explicit no-op alias for the default.
const models = opts.model ? [opts.model] : lineup;
const topic = opts.topic ?? "";
// The normal sweep used to omit --conventions, leaving the documented
// triage/citation rules in a dead file.  Load one canonical conventions file by
// default and put its literal bytes in the frozen prompt hash.  A targeted
// experiment may still pass literal replacement text with --conventions; a
// readable path is accepted as a convenience for reproducible experiments.
const DEFAULT_CONVENTIONS_PATH = join(process.cwd(), 'briefs/judge-conventions.txt');
const conventionArgument = opts.conventions;
const conventionsPath = conventionArgument && existsSync(conventionArgument)
  ? conventionArgument
  : DEFAULT_CONVENTIONS_PATH;
let conventions = "";
try {
  conventions = conventionArgument && !existsSync(conventionArgument)
    ? conventionArgument
    : readFileSync(conventionsPath, 'utf8').trim();
} catch (cause) {
  console.error(`[judge] cannot load required conventions from ${conventionsPath}: ${String((cause as Error).message ?? cause)}`);
  process.exit(2);
}
if (!conventions) {
  console.error(`[judge] required conventions file is empty: ${conventionsPath}`);
  process.exit(2);
}
const id = basename(file).replace(/\.md$/, "");

for (const judgeModel of models) {
  if (!SUPPORTED_MODELS.includes(judgeModel)) {
    console.error(`--model must be one of ${SUPPORTED_MODELS.join(", ")}`);
    process.exit(2);
  }
}

const deepseekKey = (): string => {
  if (process.env.DEEPSEEK_API_KEY) return process.env.DEEPSEEK_API_KEY;
  const envPath = deepseekEnvFile();
  if (!envPath) {
    console.error("[judge] DEEPSEEK_API_KEY is not set and no prestige-intelligence checkout was found; set DEEPSEEK_API_KEY or PRESTIGE_APP_DIR");
    process.exit(2);
  }
  try {
    const line = readFileSync(envPath, "utf8").split(/\r?\n/).find((entry) =>
      /^(?:export\s+)?DEEPSEEK_API_KEY\s*=/.test(entry),
    );
    const value = line?.replace(/^(?:export\s+)?DEEPSEEK_API_KEY\s*=\s*/, "").trim()
      .replace(/^['"]|['"]$/g, "");
    if (value) return value;
  } catch { /* report a key-free configuration error below */ }
  throw new Error("DEEPSEEK_API_KEY is not set and was not found in the configured DeepSeek .env file");
};

type CodexRun = { stdout: string; stderr: string; code: number | null; timedOut: boolean };
const runFreshTerra = (prompt: string, timeoutMs: number): Promise<CodexRun> => new Promise((resolve) => {
  // Codex subscription authentication lives in the user's normal CODEX_HOME,
  // but this judge must run read-only and must not let Codex initialise there.
  // Give every judge call a 0700 temporary home containing only its auth record
  // AND an empty working directory. The latter keeps the Codex lane from having
  // item files to inspect outside the supplied frozen prompt. Remove both on
  // every exit path. The token is never placed in a prompt, ledger, command
  // argument, or process output.
  const sourceHome = process.env.CODEX_HOME ?? join(homedir(), ".codex");
  const temporaryHome = mkdtempSync("/tmp/prestige-math-library-terra-");
  const temporaryWork = mkdtempSync("/tmp/prestige-math-library-terra-work-");
  const sourceAuth = join(sourceHome, "auth.json");
  if (existsSync(sourceAuth)) {
    copyFileSync(sourceAuth, join(temporaryHome, "auth.json"));
    chmodSync(join(temporaryHome, "auth.json"), 0o600);
  }
  const child = spawn(process.env.CODEX_BIN ?? "codex", [
    "--ask-for-approval", "never", "exec", "--ephemeral", "--model", TERRA_MODEL,
    "-c", 'model_reasoning_effort="xhigh"',
    // The temporary CODEX_HOME below contains only auth.json, so the user's
    // config.toml — including model_context_window — is deliberately NOT
    // inherited. Pass the owner's 1,000,000-token window explicitly, or this
    // lane silently runs at the Codex built-in default (owner, 2026-08-03).
    "-c", "model_context_window=1000000",
    "--sandbox", "read-only", "--skip-git-repo-check", "--cd", temporaryWork, "-",
  ], { stdio: ["pipe", "pipe", "pipe"], env: { ...process.env, CODEX_HOME: temporaryHome } });
  let stdout = "";
  let stderr = "";
  let settled = false;
  let timedOut = false;
  const finish = (code: number | null) => {
    if (settled) return;
    settled = true;
    clearTimeout(timeout);
    try { rmSync(temporaryHome, { recursive: true, force: true }); } catch { /* best-effort credential cleanup */ }
    try { rmSync(temporaryWork, { recursive: true, force: true }); } catch { /* best-effort workdir cleanup */ }
    resolve({ stdout, stderr, code, timedOut });
  };
  const timeout = setTimeout(() => {
    timedOut = true;
    child.kill("SIGTERM");
  }, timeoutMs);
  child.stdout.on("data", (chunk) => { stdout += chunk; });
  child.stderr.on("data", (chunk) => { stderr += chunk; });
  child.on("error", (error) => { stderr += String(error); finish(null); });
  child.on("close", finish);
  child.stdin.end(prompt);
});

const runFreshClaude = (model: string, prompt: string, timeoutMs: number): Promise<CodexRun> => new Promise((resolve) => {
  // The audit lineup's second lane is a fresh headless Claude Code process:
  // the runFreshTerra pattern with the Codex binary swapped for the local
  // `claude` CLI. `-p` is non-interactive print mode; `--no-session-persistence`
  // leaves no conversation state behind; the empty temporary working directory
  // keeps repository files and the repo's project settings/hooks out of scope;
  // and every core tool is explicitly disallowed so the supplied prompt is the
  // lane's only context. `--bare` was measured to SKIP OAuth credential loading
  // ("Not logged in", 2026-08-02), so it is deliberately absent. Auth stays in
  // the user's normal Claude config — no credential is copied, printed, or
  // placed in the prompt or ledgers.
  const temporaryWork = mkdtempSync("/tmp/prestige-math-library-claude-work-");
  const child = spawn(process.env.CLAUDE_BIN ?? "claude", [
    "-p", "--model", model, "--effort", "high",
    // TRANSPORT-LEVEL JSON enforcement, the exact analogue of the DeepSeek
    // lane's `response_format: {type: "json_object"}`. The frozen judge prompt
    // stays byte-identical across lanes — this is lane configuration, not
    // prompt material, and says nothing about the mathematics. Measured
    // 2026-08-02: without it, Sonnet 5 detected an injected false step
    // precisely but answered in prose, scoring UNPARSEABLE/null.
    "--append-system-prompt",
    "Reply with exactly one JSON object and nothing else: no prose, no preamble, no markdown fence. "
      + 'The object must be {"keep": <true|false>, "reason": "<one sentence>"}. '
      + "Judge only what the user message asks; this instruction constrains output format only.",
    "--no-session-persistence",
    // Every core tool is denied so the supplied prompt is the lane's only
    // context. "SlashCommand" and "Skill" were removed 2026-08-02: they match
    // no known tool, and the CLI prints a "matches no known tool" warning that
    // pollutes the lane's captured output.
    "--disallowed-tools",
    "Bash", "Read", "Write", "Edit", "Glob", "Grep", "WebFetch", "WebSearch",
    "Task", "Agent", "NotebookEdit", "TodoWrite",
  ], { stdio: ["pipe", "pipe", "pipe"], cwd: temporaryWork, env: { ...process.env } });
  let stdout = "";
  let stderr = "";
  let settled = false;
  let timedOut = false;
  const finish = (code: number | null) => {
    if (settled) return;
    settled = true;
    clearTimeout(timeout);
    try { rmSync(temporaryWork, { recursive: true, force: true }); } catch { /* best-effort workdir cleanup */ }
    resolve({ stdout, stderr, code, timedOut });
  };
  const timeout = setTimeout(() => {
    timedOut = true;
    child.kill("SIGTERM");
  }, timeoutMs);
  child.stdout.on("data", (chunk) => { stdout += chunk; });
  child.stderr.on("data", (chunk) => { stderr += chunk; });
  child.on("error", (error) => { stderr += String(error); finish(null); });
  child.on("close", finish);
  child.stdin.end(prompt);
});

// --preflight: one minimal call per selected model, before a sweep spends
// anything. A dead account then costs a single request per independent judge.
if (bools.has("preflight")) {
  const checks = await Promise.all(models.map(async (judgeModel) => {
    if (judgeModel === TERRA_MODEL) {
      const terra = await runFreshTerra('Return exactly {"keep":true,"reason":"preflight"}. Do not read files or use tools.', 120_000);
      return { judgeModel, status: terra.code === 0 && terra.stdout.trim() ? 200 : 0, raw: terra.stdout || terra.stderr || "Codex produced no output" };
    }
    if (CLAUDE_MODELS.has(judgeModel)) {
      const claudeRun = await runFreshClaude(judgeModel, 'Return exactly {"keep":true,"reason":"preflight"}. Do not read files or use tools.', 120_000);
      return { judgeModel, status: claudeRun.code === 0 && claudeRun.stdout.trim() ? 200 : 0, raw: claudeRun.stdout || claudeRun.stderr || "Claude produced no output" };
    }
    try {
      // A deliberately tiny direct completion tests the endpoint, model,
      // credentials, JSON mode, and configured xhigh setting used by normal
      // judging. This is a reachability preflight, not
      // an item verdict. The supplied text is not item material and no verdict
      // ledger is written during preflight.
      const r = await fetch(DEEPSEEK_API_URL, {
        method: "POST",
        headers: { authorization: `Bearer ${deepseekKey()}`, "content-type": "application/json" },
        body: JSON.stringify({
          model: DEEPSEEK_MODEL,
          reasoning_effort: DEEPSEEK_API_REASONING_EFFORT,
          thinking: { type: "enabled" },
          response_format: { type: "json_object" },
          max_tokens: 512,
          messages: [{ role: "user", content: 'Return exactly this json object: {"ok":true}.' }],
        }),
        signal: AbortSignal.timeout(60_000),
      });
      const raw = await r.text();
      return { judgeModel, status: r.status, raw };
    } catch (e) {
      return { judgeModel, status: 0, raw: `transport failure — ${String((e as Error)?.message ?? e)}` };
    }
  }));
  for (const { judgeModel, status, raw } of checks) {
    if (status === 0) {
      console.error(`[judge] preflight (${judgeModel}): ${raw}`);
      process.exit(PAYMENT_EXIT);
    }
    if (isPaymentError(status, raw)) {
      console.error(`[judge] PREFLIGHT FAILED (${judgeModel}): the account cannot pay. ${raw.slice(0, 200)}`);
      console.error("[judge] Do not start a sweep. This needs an owner top-up; no retry will succeed.");
      process.exit(PAYMENT_EXIT);
    }
    if (status >= 400) {
      console.error(`[judge] preflight (${judgeModel}): HTTP ${status} — ${raw.slice(0, 200)}`);
      process.exit(2);
    }
    console.error(`[judge] preflight OK (${judgeModel}) — the account is funded.`);
  }
  process.exit(0);
}

const body = readFileSync(file, "utf8");
// Auto-activate the diagram refuter discipline when the item declares a diagram.
const hasDiagram = /\*\*Diagram:\*\*/.test(body) || /\[C\d+\]/.test(body);
const DIAGRAM_RULES = `

DIAGRAM CHASING (this item declares a commutative diagram): "the diagram commutes", "by the diagram", or "a diagram chase shows" used as a justification is a SPECIFIC error. Every commutativity assertion must be a concrete composite equation derived from declared cells [C#], facts, or prior steps, and a step tiling cells into an outer equation must cite EVERY cell it uses; every [C#] a step cites must be DECLARED in the Diagram block. A "naturality" justification must name BOTH the transformation AND the morphism it is instantiated at; an axiom or universal-property instance must name its objects; an isomorphism used in a chase must be THE induced/canonical map for the construction, not merely some isomorphism. A cancellation (faithful functor, mono/epi) without its declared enabling fact, or a map/transformation used before its [choose]/[construct] obligations are discharged (independence of choices; naturality; both composites for a claimed bijection), is a SPECIFIC error: name the step. A named lemma (snake, five, 3x3, ...) whose hypotheses are not each established by a cited step or cell is a SPECIFIC error: name the missing hypothesis.`;

// ---------------------------------------------------------------- cited context
//
// Owner decision, 2026-07-25: give the judge the FULL text of what this item
// cites. Measured on round 2: 29 of 38 rejections were false positives, and the
// dominant mechanism was the judge assuming a cited [L#] fact was WEAKER than it
// actually is, then objecting that the step was unjustified. It could not do
// otherwise, because it never saw the cited item.
//
// We include each cited item's Statement/Definition, NOT its proof. The judge is
// told to treat cited items as correct, so what it needs is what they SAY, not
// how they are established; pulling proofs in would multiply the prompt for no
// gain. One level deep only, for the same reason.
//
// This also turns the context into a two-way check: with the real text in hand,
// an [L#] that OVERSTATES its source becomes a defect the judge can actually
// catch, which is a real class it was previously blind to.
const withContext = !argv.includes("--no-context");

/**
 * What a cited or sibling item SAYS: its Statement/Definition AND its Remarks.
 *
 * Remarks are NOT optional here, and leaving them out was a real bug. Items
 * legitimately cross-reference each other's Remarks ("the argument is written
 * out once, in the remarks of X", "by the remark at the end of Y"). With only
 * Statements supplied, the judge cannot find the referenced argument and reports
 * the cross-reference as a false claim about the library's contents. That
 * produced FOUR rejections in one run, every one of them wrong, and every one
 * pointing at text that does exist.
 *
 * Proof and Refutation stay out: the judge is told to treat cited items as
 * correct, so it needs what they SAY, not how they are established.
 */
function quotedTextOf(src: string): string {
  const grab = (h: string) => {
    const m = src.match(new RegExp("\\n## " + h + "\\b[^\\n]*\\n([\\s\\S]*?)(?=\\n## |$)"));
    return m ? m[1].trim() : "";
  };
  const parts = [
    grab("Statement refuted") || grab("Statement") || grab("Definition") || grab("Example"),
    grab("Remarks") && "**Remarks.**\n" + grab("Remarks"),
  ].filter(Boolean);
  const text = parts.length ? parts.join("\n\n") : src.trim();
  // Cap per item. A 23-item page of full Remarks reached ~103k chars, and the
  // gateway already timed out once on this page at half that. The cap is marked
  // so the judge knows text was elided and does not read the elision as absence.
  const CAP = 3000;
  return text.length <= CAP
    ? text
    : text.slice(0, CAP) + "\n… [truncated here; this item continues. Do NOT infer that anything is missing from it.]";
}

/**
 * The WHOLE body of a page sibling: Statement/Definition, Facts & Assumptions,
 * the full Proof or Refutation, and Remarks. Frontmatter is stripped.
 *
 * Owner decision, 2026-07-26: the judge is to be given the FULL context of its
 * page. quotedTextOf's proof-free summary is what made the judge structurally
 * blind to an unbacked step or a mis-stated [L#] inside a sibling, which is the
 * defect class the reading tiers keep finding. The largest page in the repo is
 * ~124k chars (~35k tokens) of body, well inside the selected judges' long-context
 * budgets. The old 3000-char cap was protecting a gateway timeout, not a context limit. The
 * request timeout is raised alongside this.
 */
function fullTextOf(src: string): string {
  const body = src.replace(/^---\n[\s\S]*?\n---\n/, "").trim();
  const CAP = 24000;
  return body.length <= CAP
    ? body
    : body.slice(0, CAP) + "\n… [truncated here; this item continues. Do NOT infer that anything is missing from it.]";
}

// Ids already shown in an earlier block, so no later block repeats them.
const shownIds = new Set<string>();

// ------------------------------------------------------------- page structure
//
// Owner decision, 2026-07-28: the judge's context unit is the A/B PAIR, and it
// may additionally be given the rest of the batch being built.
//
// The 2026-07-25 tier below supplied only the item's OWN page, and that leaves
// two blind spots that the pair closes:
//   * an A-page theorem never sees the `-examples` page that illustrates it, so
//     an example that misstates its theorem, or claims a hypothesis the theorem
//     does not have, is invisible from both sides;
//   * a B-page example sees the A-page results ONLY where it happens to cite
//     them, which is precisely the case where a MISSING citation cannot be seen.
// An A page and its companion are published, and read, as one unit; judging half
// of it against the other half is what the pair block restores.
//
// The batch block is wider and deliberately cheaper (statement + remarks, no
// proofs). Its job is cross-PAGE dependency checking inside one level: a step
// resting on a result that a sibling page states but this item never cites, or
// two pages of the same batch stating the same result differently. It is opt-in
// per run via --batch / JUDGE_BATCH because the batch is a property of the build,
// not of the content, and nothing in items/ or library/ records it.
interface PageInfo {
  path: string;
  slug: string;
  title: string;
  ids: string[];
}

function loadPages(): PageInfo[] {
  if (!existsSync("library")) return [];
  const paths: string[] = [];
  const walk = (dir: string): void => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = dir + "/" + e.name;
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith(".md")) paths.push(p);
    }
  };
  walk("library");

  const listed = (fm: string, key: string): string[] => {
    const m = fm.match(new RegExp("^" + key + ":\\s*\\[([^\\]]*)\\]", "m"));
    return m ? m[1].split(",").map((t) => t.trim()).filter(Boolean) : [];
  };

  const out: PageInfo[] = [];
  for (const p of paths) {
    const src = readFileSync(p, "utf8");
    const fm = (src.match(/^---\n([\s\S]*?)\n---/) ?? [, ""])[1];
    const ids = [...listed(fm, "items"), ...listed(fm, "examples")];
    if (!ids.length) continue; // _category.md and any other non-page markdown
    out.push({
      path: p,
      slug: basename(p).replace(/\.md$/, ""),
      title: (fm.match(/^title:\s*"?(.*?)"?\s*$/m) ?? [, p])[1],
      ids,
    });
  }
  return out;
}

// The A/B pairing convention, and the ONLY one the renderer uses:
// web/lib/library-categories.ts pairs `<slug>` with `<slug>-examples`.
const EXAMPLES_SUFFIX = "-examples";
const companionSlug = (slug: string): string =>
  slug.endsWith(EXAMPLES_SUFFIX) ? slug.slice(0, -EXAMPLES_SUFFIX.length) : slug + EXAMPLES_SUFFIX;

const allPages = withContext ? loadPages() : [];
const ownPage = allPages.find((p) => p.ids.includes(id));
const pairPage = ownPage ? allPages.find((p) => p.slug === companionSlug(ownPage.slug)) : undefined;

// --batch a,b,c (or JUDGE_BATCH=a,b,c): page slugs or paths. Each named page
// pulls in its companion too, so naming the three A pages of a level is enough.
const batchArg = opts.batch ?? process.env.JUDGE_BATCH ?? "";
const namedBatch = batchArg
  .split(",")
  .map((t) => basename(t.trim()).replace(/\.md$/, ""))
  .filter(Boolean);
const batchSlugs = new Set<string>();
for (const slug of namedBatch) {
  batchSlugs.add(slug);
  batchSlugs.add(companionSlug(slug));
  // A named page that matches nothing is a silent no-op otherwise, and a
  // silently-empty context block reads as "the batch is clean". Say so.
  if (withContext && !allPages.some((p) => p.slug === slug)) {
    console.error(`[judge] --batch: no page "${slug}" under library/ — that page contributes NO context`);
  }
}
const batchPages = allPages.filter(
  (p) => batchSlugs.has(p.slug) && p.slug !== ownPage?.slug && p.slug !== pairPage?.slug,
);

/** Ids supplied IN FULL somewhere in the prompt: this item's page and its pair. */
const inFullPage = (x: string): boolean =>
  (ownPage?.ids.includes(x) ?? false) || (pairPage?.ids.includes(x) ?? false);

function blocksFor(page: PageInfo, mode: "full" | "quoted"): string[] {
  const out: string[] = [];
  for (const x of page.ids) {
    if (x === id || shownIds.has(x)) continue;
    const f = "items/" + x + ".md";
    if (!existsSync(f)) continue;
    const s = readFileSync(f, "utf8");
    shownIds.add(x);
    const t = (s.match(/^title:\s*"?(.*?)"?\s*$/m) ?? [, x])[1];
    out.push(`### [[${x}]] ${t}\n` + (mode === "full" ? fullTextOf(s) : quotedTextOf(s)));
  }
  return out;
}

function pageContext(itemBody: string): string {
  if (!withContext || !ownPage) return "";
  let out = "";

  const own = blocksFor(ownPage, "full");
  if (own.length) {
    out +=
      `\n\n=== THE OTHER ITEMS ON THIS ITEM'S PAGE ("${ownPage.title}") ===\n` +
      "This item is published as part of the page above and is read in that order.\n" +
      "Use these to check for defects that live BETWEEN items: this item contradicting\n" +
      "a sibling, restating one inaccurately, claiming the page proves something it does\n" +
      "not, or duplicating a sibling's result while disagreeing with it. Items already\n" +
      "quoted in the citation section above are not repeated here.\n\n" +
      own.join("\n\n");
  }

  if (pairPage) {
    const pair = blocksFor(pairPage, "full");
    if (pair.length) {
      const ownIsExamples = ownPage.slug.endsWith(EXAMPLES_SUFFIX);
      out +=
        `\n\n=== THE COMPANION PAGE ("${pairPage.title}") ===\n` +
        (ownIsExamples
          ? "This item is an example on the B page of an A/B pair. The block below is the A\n" +
            "page it illustrates: the definitions and results these examples are examples OF.\n"
          : "This item sits on the A page of an A/B pair. The block below is the companion\n" +
            "B page: the examples and counterexamples published alongside these results.\n") +
        "The two pages are published and read as ONE unit. Supplied IN FULL, like the page\n" +
        "siblings above, so cross-references between them are checkable in both directions.\n\n" +
        pair.join("\n\n");
    }
  }

  if (batchPages.length) {
    // Budget: the pair blocks above are the high-value context and are never cut.
    // The batch is cut rather than allowed to push the request into the gateway
    // timeout that this file's history already records. Elisions are declared.
    const BATCH_BUDGET = 200_000;
    const kept: string[] = [];
    const dropped: string[] = [];
    let used = 0;

    // RELEVANCE ORDER, not list order (fixed 2026-07-28, measured defect).
    //
    // This loop used to walk `batchPages` in the order the --batch flag named
    // them and drop whatever no longer fit. So the pages that survived were the
    // ones typed first, which has nothing to do with the item being judged.
    //
    // Measured on level 9 (mixed): every item of `the-derivative-and-mean-value-
    // theorems` was judged with `primes-and-the-fundamental-theorem-of-arithmetic`
    // and `linear-independence-bases-and-dimension` in context, and with
    // `monotone-functions-and-discontinuities` DROPPED — the one page it actually
    // cites, and the only one whose statements it could get wrong. The batch
    // block was doing worse than nothing there: it spent the whole budget on two
    // pages about primes and vector spaces while judging a page about
    // derivatives, and declared the elision of the page that mattered.
    //
    // So: pages this item actually cites go first, and the cut falls on pages it
    // does not cite. Ties keep the caller's order, which stays deterministic.
    const cited = new Set<string>();
    for (const m of itemBody.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) cited.add(m[1].trim());
    const relevance = (p: PageInfo) => (p.ids.some((i) => cited.has(i)) ? 0 : 1);
    const ordered = batchPages
      .map((p, i) => ({ p, i }))
      .sort((a, b) => relevance(a.p) - relevance(b.p) || a.i - b.i)
      .map(({ p }) => p);

    for (const p of ordered) {
      const blocks = blocksFor(p, "quoted");
      if (!blocks.length) continue;
      const text = `#### page: ${p.title}\n\n` + blocks.join("\n\n");
      if (used + text.length > BATCH_BUDGET) {
        dropped.push(p.title);
        continue;
      }
      used += text.length;
      kept.push(text);
    }
    if (dropped.length) {
      console.error(`[judge] batch context budget reached; omitted: ${dropped.join(", ")}`);
    }
    if (kept.length) {
      out +=
        "\n\n=== OTHER PAGES IN THE CURRENT BATCH ===\n" +
        "These pages are being written alongside this one, at the same dependency level.\n" +
        "Statement/Definition and Remarks only, NO proofs, so treat every one as CORRECT\n" +
        "and do not audit them: they are judged separately, on their own calls.\n" +
        (dropped.length ? `NOTE: further batch pages were omitted for length (${dropped.join(", ")}).\n` : "") +
        "\n" +
        kept.join("\n\n");
    }
  }

  return out;
}

function citedContext(itemBody: string): string {
  if (!withContext) return "";
  const dir = "items";
  if (!existsSync(dir)) return "";
  // ids cited anywhere in this item, plus everything in deps/justified_by
  const ids = new Set<string>();
  for (const m of itemBody.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) ids.add(m[1].trim());
  for (const key of ["deps", "justified_by", "forward_refs"]) {
    const m = itemBody.match(new RegExp("^" + key + ":\\s*\\[([^\\]]*)\\]", "m"));
    if (m) for (const x of m[1].split(",").map((t) => t.trim()).filter(Boolean)) ids.add(x);
  }
  ids.delete(basename(file, ".md"));
  if (!ids.size) return "";

  // resolve through aliases
  const byId = new Map<string, string>();
  const alias = new Map<string, string>();
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".md")) continue;
    const src = readFileSync(dir + "/" + f, "utf8");
    const id = f.replace(/\.md$/, "");
    byId.set(id, src);
    const am = src.match(/^aliases:\s*\[([^\]]*)\]/m);
    if (am) for (const a of am[1].split(",").map((t) => t.trim()).filter(Boolean)) alias.set(a, id);
  }

  const blocks: string[] = [];
  for (const raw of [...ids].sort()) {
    const id = byId.has(raw) ? raw : alias.get(raw);
    if (!id) continue;
    const src = byId.get(id)!;
    const title = (src.match(/^title:\s*"?(.*?)"?\s*$/m) ?? [, id])[1];
    const notProved = /^proved_here:\s*false/m.test(src);
    shownIds.add(id);
    // A cited item on this item's own page or its companion is supplied IN FULL.
    // Previously the citation block claimed every entry first, so citing a sibling
    // DOWNGRADED it from full text to a 3000-char statement — exactly backwards,
    // and it contradicted the prompt rule telling the judge siblings come in full.
    const full = inFullPage(id);
    blocks.push(
      `### [[${id}]] ${title}` +
        (notProved ? "  (RECORDED, NOT PROVED IN THIS LIBRARY)" : "") +
        (full ? "  (FULL TEXT — this page or its companion)" : "") +
        "\n" +
        (full ? fullTextOf(src) : quotedTextOf(src)),
    );
  }
  if (!blocks.length) return "";
  return (
    "\n\n=== EXACT TEXT OF EVERY ITEM THIS ONE CITES ===\n" +
    "These are the real statements behind the [[wikilinks]] and behind the [L#] facts.\n" +
    "Treat each as CORRECT. Use them to check that this item's facts restate them FAITHFULLY.\n" +
    "Entries marked FULL TEXT carry their proofs too; the rest are Statement + Remarks.\n\n" +
    blocks.join("\n\n")
  );
}

const CONTEXT_RULES = `

CITED CONTEXT: the exact text of every item this one cites is supplied below the item. Use it, and note that it cuts BOTH ways.
  * If an [L#] fact FAITHFULLY restates its cited item, then any step citing that [L#] is LICENSED. Do NOT object that such a step is unjustified, and do NOT assume a cited item says less than the supplied text says. Read the supplied text before claiming a step lacks support.
  * If an [L#] fact is STRONGER than its cited item, or restates it inaccurately, that IS a specific defect: name the fact and the discrepancy.
  * NATURAL VOICE AND CITATION FIDELITY (owner, 2026-07-30): prose must be direct and mathematical, without canned headings, meta-commentary, or rhetorical filler. Every [F#], [A#], and [L#] fact must state the cited Definition or Statement itself, exactly when practical or in a concise version preserving its domain, quantifiers, hypotheses, conclusion, and direction. Flag AI-sounding labels or interpretive filler such as "Null definition:" when they replace the proposition with a description of what it is for. Write your own verdict reason in direct, natural prose.
  * An item marked RECORDED, NOT PROVED IN THIS LIBRARY is a deliberate external citation, not a gap. Depending on one is not a defect.

PAGE CONTEXT: the other items published on this item's page are supplied after the cited items. They are there so you can catch defects that live BETWEEN items, which are invisible when an item is read alone:
  * this item CONTRADICTING a sibling on the same page, or the two taking opposite positions on the same question;
  * this item claiming the page (or the library) proves, supplies or discusses something that no sibling actually does. If this item says "proved below", "supplied by the page that develops X", "as shown in the remarks of Y", CHECK the supplied text. A false claim about the library's own contents is a defect even when the mathematics is fine;
  * a ledger, conventions or summary item whose claims do not match what its page actually establishes;
  * this item restating a sibling INACCURATELY, whether or not it cites it.
  Two cautions. A sibling covering related ground is NOT duplication, and a sibling that comes LATER on the page is not a forward-reference violation: same-page links are ordinary links. Do not object to either.
  A THIRD point, and read it carefully because the two blocks below the item differ:
  * PAGE SIBLINGS are supplied IN FULL: statement, facts, every proof step, and remarks. So a cross-reference to a sibling's step, fact or proof IS checkable, and a claim about a sibling that its full text contradicts IS a defect you should name. Use this.
  * CITED ITEMS FROM OTHER PAGES are supplied as Statement/Definition and Remarks only, TRUNCATED at a marked cut, with no Proof. For those you may NOT conclude a cross-reference is false merely because you cannot find the passage. Report it as unverifiable, or say nothing, unless the supplied text CONTRADICTS it.

COMPANION PAGE: pages are published in A/B pairs. The A page develops definitions and results; the B page, named "<A>-examples", carries the examples and counterexamples for them. THE PAIR IS ONE UNIT, read together, so the companion is supplied IN FULL exactly like the page siblings. Check across it in whichever direction applies:
  * an example that MISSTATES the result it illustrates: attributing a hypothesis the theorem does not have, dropping one it does have, or claiming it shows a hypothesis is necessary when it does not exhibit the required failure;
  * an example claiming to be a counterexample to a result that, as the A page actually states it, it does not contradict;
  * a result whose statement or remarks promise an example, a counterexample, or a witness that the companion page does not in fact supply, or a companion item that claims the A page proves something it does not;
  * the two pages using the same term, symbol or notation with DIFFERENT meanings, or defining the same object twice and inequivalently.
  Same caution as above: a companion item that comes later, or that is not cited, is not by itself a defect. The pair is symmetric, and links across it are ordinary links.

BATCH CONTEXT: if a block of OTHER PAGES IN THE CURRENT BATCH is supplied, those pages are being written at the same time as this one, at the same dependency level. They are Statement/Definition and Remarks only, with NO proofs. Their purpose is narrow, and staying inside it matters:
  * USE them to catch a step that makes a mathematical move which a batch item states but this item never cites, when the item's OWN facts do not already license that move. That is a missing-dependency defect and it is worth naming.
  * USE them to catch this item and a batch item stating the SAME result incompatibly, or defining the same term differently.
  * USE them to check a claim this item makes about what the library does or does not contain.
  * DO NOT audit the batch items themselves. They are judged separately, on their own calls; a defect in one of them is not a defect in this item.
  * DO NOT reject this item merely because it does not cite a batch item, because a batch item covers similar ground, or because a batch item would have given a shorter proof. Only a step that is actually UNLICENSED as written is a defect.
  * DO NOT treat a batch item as unavailable machinery: the batch is being published together with this item.

Your primary job is unchanged and outranks all of the above: the logical validity of THIS item's own steps, each against the facts it cites. The blocks below exist so that a step resting on something outside this item can be checked against what that something actually says.`;

// The `--mode certify` arm was MEASURED AND DELETED, 2026-07-25. Scored against
// research/verification-benchmark.md (150 items, 50 known defects), a gentler
// "most items are correct, do not manufacture an objection" framing halved the
// rejections (29 -> 14) but gutted recall: it caught 2 of 6 real defects where
// the refuter caught 6 of 6, and its precision was WORSE too (14% vs 21%). It
// became agreeable, not accurate. The refuter framing below is deliberate: this
// judge is a high-recall SCREEN whose ~20-25% precision is a property of
// adversarial refutation, not a bug to tune out. Do not re-run this experiment,
// and do not soften the prompt to reduce false positives -- that trade has been
// measured and it loses real defects.

const refuterSys =
  `You are a REFUTER auditing ONE mathematical library item (a definition, theorem+proof, lemma+proof, example, or false-statement+refutation) for a rigorous, cross-referenced public math library${topic ? ` (topic: ${topic})` : ""}.

WHERE TO LOOK FIRST (owner instruction, 2026-07-26). Two classes account for nearly every real defect found in this library. Spend your effort on them, in this order, before anything else:

  (1) MISSING OR INCORRECT CITATIONS OF DEPENDENCIES. A step that makes a mathematical move with no fact behind it at all. An [L#] fact that is STRONGER than, or does not literally say, what its cited item says. A step whose tag cites facts that do not license the move it makes. A named property (transitivity, antisymmetry, trichotomy, cancellation, density, completeness) used with nothing establishing it. This is the single most common real defect here: check EVERY step's tag against the facts it names, and every [L#] against the supplied text of its source.

  (2) LOGICAL GAPS IN THE IMMEDIATE NEIGHBOURHOOD OF THE PROOF. Within this item's own argument: a step that does not follow from the steps and facts it cites, a hypothesis used but never established (nonemptiness before a minimum, a denominator before a division, a case never discharged), a quantifier or scope slip, a claim in the statement that the proof does not reach. Stay close to the proof; you are not auditing the whole library.

Report anything else you happen to notice, but do not go hunting for it at the expense of these two.

Your ONLY job is to find a SPECIFIC defect. Flag the item (keep=false) ONLY if you can point to a concrete problem: a false claim, a concrete counterexample, a logically unjustified or mis-cited step, a symbol used out of its scope, a wrong or incompletely-discharged proof strategy, a definition that is not well-formed, or ill-formed / mathematically wrong LaTeX. If you find no specific error, ACCEPT (keep=true). Do NOT reject merely because a proof is terse, omits routine algebra, or defers a genuinely tedious-but-standard verification to a cited textbook, PROVIDED the core argument is present and correct.

DEPENDENCIES: any step citing another library item by [[id]] or by a fact label ([L#]) whose content restates a cited item may be treated as ASSUMED-CORRECT (those items are audited separately). Judge only THIS item's own reasoning: does its proof correctly establish its stated claim FROM its cited facts?${conventions ? `\n\nConventions in use:\n${conventions}` : ""}${withContext ? CONTEXT_RULES : ""}${hasDiagram ? DIAGRAM_RULES : ""}

Output STRICT minified JSON ONLY, no prose around it. Keep \`reason\` to at most
280 characters so that the complete JSON verdict is never truncated:
{"keep":true|false,"reason":"<if keep=false, the specific defect and where; if keep=true, a one-line note on what you verified>"}`;

const sys = refuterSys;
const buildUserPrompt = () => "Audit this library item. Return only the JSON verdict. Do not read files or call tools: the supplied context is authoritative.\n\n---\n" + body + citedContext(body) + pageContext(body);

// Build the entire prompt ONCE before either request starts. Context assembly
// de-duplicates page and cited-item blocks with `shownIds`, so assembling it
// inside each parallel call would give the second model a different prompt.
const userPrompt = buildUserPrompt();
// This exact payload, byte for byte, is the sole model-visible audit prompt for
// both providers. Their provider envelopes necessarily differ, but neither gets
// a model-specific system prompt, context block, or verdict from the other.
const frozenPrompt = sys + "\n\n=== AUDIT MATERIAL ===\n" + userPrompt;
const contextSha256 = createHash("sha256").update(frozenPrompt).digest("hex");
// --dump-prompt prints the exact frozen payload and exits without a network call.
if (bools.has("dump-prompt")) {
  console.log(frozenPrompt);
  console.error(`\n[dump-prompt] frozen prompt ${frozenPrompt.length} chars`);
  process.exit(0);
}
if (bools.has("context-hash")) {
  console.log(JSON.stringify({ id, context_sha256: contextSha256 }));
  process.exit(0);
}

const DEEPSEEK_INITIAL_MAX_TOKENS = 40_000;
const DEEPSEEK_LENGTH_RETRY_MAX_TOKENS = 80_000;
// A full A/B-pair context at owner-requested xhigh can legitimately take more
// than the former seven-minute transport window (several completed Frontier-6
// calls already took more than six minutes).  Do not turn that live reasoning
// into an unrecorded failure: let the direct API have the same twelve-minute
// allowance as the Terra lane.  This changes only transport patience, not the
// frozen prompt, thinking level, or token budget.
const DEEPSEEK_REQUEST_TIMEOUT_MS = 12 * 60_000;
const configuredAttemptLimit = Number(process.env.JUDGE_MAX_ATTEMPTS ?? 3);
const MAX_CALL_ATTEMPTS = Number.isInteger(configuredAttemptLimit) && configuredAttemptLimit >= 1
  ? Math.min(configuredAttemptLimit, 3)
  : 3;
const retryAllowed = process.env.JUDGE_RETRY_ALLOWED !== "0";
const payloadForDeepSeek = (maxTokens: number) => ({
  model: DEEPSEEK_MODEL,
  // `max` is DeepSeek's documented API representation of owner-requested xhigh.
  reasoning_effort: DEEPSEEK_API_REASONING_EFFORT,
  thinking: { type: "enabled" },
  response_format: { type: "json_object" },
  // Raised 3000 -> 8000 -> 40000 on 2026-07-26 (owner). Under the full-page context
  // the reason strings grew, and a truncated reason arrives as unparseable JSON ->
  // keep=null, which reads as a call failure rather than as a verdict. A page agent
  // hit this twice on one item and correctly refused to record a verdict from it.
  // Reasoning models also spend this budget on thinking BEFORE emitting the JSON, so
  // the ceiling must clear both; that is why the generous value.
  //
  // This is a CEILING, not a target: billing is on tokens actually produced, and
  // measured completions run about 1.4k. Headroom here costs nothing.
  // DeepSeek v4 Pro exhausted 40000 tokens on maximum reasoning without an answer
  // on the Cycle-1 uniform-Cauchy theorem (2026-07-31). It now starts at 40000
  // then retries that explicit length failure once at 80000. This keeps
  // ordinary calls short without weakening the skeptical prompt or abandoning
  // the hard cases that genuinely need more reasoning room.
  max_tokens: maxTokens,
  messages: [{ role: "user", content: frozenPrompt }],
});

const sleep = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

interface JudgeResp {
  choices?: { message?: { content?: string }; finish_reason?: string | null }[];
  usage?: { prompt_tokens?: number; completion_tokens?: number };
}

const attemptLog = process.env.JUDGE_ATTEMPTLOG;
const configuredAttemptNumber = Number(process.env.JUDGE_ATTEMPT_NUMBER ?? 1);
const attemptNumberOffset = Number.isInteger(configuredAttemptNumber) && configuredAttemptNumber >= 1
  ? configuredAttemptNumber - 1
  : 0;
const emitAttempt = (judgeModel: string, attempt: number, event: Record<string, unknown>): void => {
  if (!attemptLog) return;
  try {
    appendFileSync(attemptLog, JSON.stringify({
      id,
      model: judgeModel,
      attempt: attemptNumberOffset + attempt + 1,
      context_sha256: contextSha256,
      at: new Date().toISOString(),
      ...event,
    }) + "\n");
  } catch { /* telemetry must never suppress a verdict */ }
};
const rateLimitHeaders = (headers: Headers) => ({
  limit_requests: headers.get("x-ratelimit-limit-requests"),
  remaining_requests: headers.get("x-ratelimit-remaining-requests"),
  reset_requests: headers.get("x-ratelimit-reset-requests"),
  retry_after: headers.get("retry-after"),
});
const transportError = (error: unknown) => {
  const e = error as { name?: unknown; message?: unknown; code?: unknown; errno?: unknown; cause?: unknown };
  const cause = e?.cause as { name?: unknown; message?: unknown; code?: unknown; errno?: unknown } | undefined;
  return {
    name: typeof e?.name === "string" ? e.name : "Error",
    message: String(e?.message ?? error).slice(0, 500),
    code: typeof e?.code === "string" ? e.code : null,
    errno: typeof e?.errno === "string" || typeof e?.errno === "number" ? e.errno : null,
    cause: cause ? {
      name: typeof cause.name === "string" ? cause.name : "Error",
      message: String(cause.message ?? cause).slice(0, 500),
      code: typeof cause.code === "string" ? cause.code : null,
      errno: typeof cause.errno === "string" || typeof cause.errno === "number" ? cause.errno : null,
    } : null,
  };
};
const backoffMs = (attempt: number, retryAfter: string | null = null): number => {
  const requested = Number(retryAfter ?? NaN);
  const base = Number.isFinite(requested) ? Math.min(requested * 1000, 60_000) : (attempt + 1) * 4000;
  return base + Math.floor(Math.random() * 1000);
};
const retryAfterMs = (retryAfter: string | null): number | null => {
  const requested = Number(retryAfter ?? NaN);
  return Number.isFinite(requested) ? Math.min(requested * 1000, 60_000) : null;
};

type RetryKind = "transient" | "length";
type CallResult = {
  content: string;
  usage?: JudgeResp["usage"];
  raw: string;
  payment?: boolean;
  retry?: RetryKind;
  retry_after_ms?: number | null;
};

async function callDeepSeek(): Promise<CallResult> {
  let deepseekLengthFallbackUsed = process.env.JUDGE_DEEPSEEK_LENGTH_FALLBACK === "1";
  for (let attempt = 0; attempt < MAX_CALL_ATTEMPTS; attempt++) {
    const retryPossible = attempt < MAX_CALL_ATTEMPTS - 1;
    let resp: Response;
    let raw: string;
    const max_tokens = deepseekLengthFallbackUsed ? DEEPSEEK_LENGTH_RETRY_MAX_TOKENS : DEEPSEEK_INITIAL_MAX_TOKENS;
    const started = performance.now();
    try {
      resp = await fetch(DEEPSEEK_API_URL, {
        method: "POST",
        headers: { authorization: `Bearer ${deepseekKey()}`, "content-type": "application/json" },
        body: JSON.stringify(payloadForDeepSeek(max_tokens)),
        signal: AbortSignal.timeout(DEEPSEEK_REQUEST_TIMEOUT_MS),
      });
      // A reset can arrive while the response body is being read, not only
      // while the request is opened.  Keep both operations in this transport
      // guard so judge-sweep receives retry exit 4 instead of a raw Node
      // process exit that leaves a current-context verdict missing.
      raw = await resp.text();
    } catch (e) {
      const latency_ms = Math.round(performance.now() - started);
      emitAttempt(DEEPSEEK_MODEL, attempt, { outcome: "transport_failure", latency_ms, max_tokens, transport: transportError(e) });
      if (retryPossible) { await sleep(backoffMs(attempt)); continue; }
      return {
        content: "",
        raw: String((e as Error)?.message ?? e),
        retry: MAX_CALL_ATTEMPTS === 1 && retryAllowed ? "transient" : undefined,
      };
    }
    const latency_ms = Math.round(performance.now() - started);
    const headers = rateLimitHeaders(resp.headers);
    // A payment error is TERMINAL. Never retry it, and never let it leave here
    // wearing the same clothes as a dropped verdict — see PAYMENT_EXIT above.
    if (isPaymentError(resp.status, raw)) {
      emitAttempt(DEEPSEEK_MODEL, attempt, { outcome: "payment_required", status: resp.status, latency_ms, max_tokens, rate_limit: headers, raw_bytes: raw.length });
      return { content: "", raw, payment: true };
    }
    if (resp.status === 429 || resp.status >= 500) {
      emitAttempt(DEEPSEEK_MODEL, attempt, { outcome: "retryable_http", status: resp.status, latency_ms, max_tokens, rate_limit: headers, raw_bytes: raw.length });
      if (retryPossible) { await sleep(backoffMs(attempt, headers.retry_after)); continue; }
      return {
        content: "",
        raw,
        retry: MAX_CALL_ATTEMPTS === 1 && retryAllowed ? "transient" : undefined,
        retry_after_ms: retryAfterMs(headers.retry_after),
      };
    }
    let j: JudgeResp = {};
    try { j = JSON.parse(raw) as JudgeResp; } catch { /* leave raw for the error path */ }
    const choice = j.choices?.[0];
    const content = choice?.message?.content ?? "";
    const finish_reason = choice?.finish_reason ?? null;
    const successful = resp.status >= 200 && resp.status < 300;
    const event = {
      outcome: content ? "response" : !successful ? "empty_http_error" : finish_reason === null ? "empty_incomplete" : "empty_terminal",
      status: resp.status,
      latency_ms,
      max_tokens,
      rate_limit: headers,
      finish_reason,
      has_content: Boolean(content),
      usage: j.usage ?? null,
      raw_bytes: raw.length,
    };
    // An empty completion with no terminal finish reason is a gateway-side
    // interruption, not a substantive null verdict. Retry it with jitter. A
    // DeepSeek length stop gets one 80k fallback after its normal 40k attempt;
    // a second length stop remains a measurable reasoning-budget null.
    if (successful && !content && finish_reason === null && retryPossible) {
      emitAttempt(DEEPSEEK_MODEL, attempt, { ...event, outcome: "empty_incomplete_retry" });
      await sleep(backoffMs(attempt, headers.retry_after));
      continue;
    }
    if (successful && !content && finish_reason === "length" && !deepseekLengthFallbackUsed && retryPossible) {
      emitAttempt(DEEPSEEK_MODEL, attempt, { ...event, outcome: "length_retry" });
      deepseekLengthFallbackUsed = true;
      await sleep(backoffMs(attempt, headers.retry_after));
      continue;
    }
    if (successful && !content && finish_reason === null && MAX_CALL_ATTEMPTS === 1 && retryAllowed) {
      emitAttempt(DEEPSEEK_MODEL, attempt, { ...event, outcome: "empty_incomplete_retry" });
      return { content, usage: j.usage, raw, retry: "transient", retry_after_ms: retryAfterMs(headers.retry_after) };
    }
    if (successful && !content && finish_reason === "length" && !deepseekLengthFallbackUsed && MAX_CALL_ATTEMPTS === 1 && retryAllowed) {
      emitAttempt(DEEPSEEK_MODEL, attempt, { ...event, outcome: "length_retry" });
      return { content, usage: j.usage, raw, retry: "length", retry_after_ms: retryAfterMs(headers.retry_after) };
    }
    emitAttempt(DEEPSEEK_MODEL, attempt, event);
    return { content, usage: j.usage, raw };
  }
  return { content: "", raw: "retries exhausted" };
}

async function callTerra(): Promise<CallResult> {
  for (let attempt = 0; attempt < MAX_CALL_ATTEMPTS; attempt++) {
    const retryPossible = attempt < MAX_CALL_ATTEMPTS - 1;
    const started = performance.now();
    const run = await runFreshTerra(frozenPrompt, 12 * 60_000);
    const latency_ms = Math.round(performance.now() - started);
    const content = run.stdout.trim();
    const event = {
      outcome: content && run.code === 0 ? "response" : run.timedOut ? "timeout" : "codex_exit",
      status: run.code,
      latency_ms,
      max_tokens: null,
      finish_reason: run.code === 0 ? "codex_complete" : run.timedOut ? "timeout" : "codex_exit",
      has_content: Boolean(content),
      raw_bytes: (run.stdout.length + run.stderr.length),
    };
    if (run.code === 0 && content) {
      emitAttempt(TERRA_MODEL, attempt, event);
      return { content, raw: run.stderr };
    }
    emitAttempt(TERRA_MODEL, attempt, event);
    if (retryPossible) { await sleep(backoffMs(attempt)); continue; }
    return {
      content: "",
      raw: (run.stderr || run.stdout || `codex exited ${String(run.code)}`).slice(0, 1000),
      retry: MAX_CALL_ATTEMPTS === 1 && retryAllowed ? "transient" : undefined,
    };
  }
  return { content: "", raw: "Terra retries exhausted" };
}

async function callClaude(model: string): Promise<CallResult> {
  for (let attempt = 0; attempt < MAX_CALL_ATTEMPTS; attempt++) {
    const retryPossible = attempt < MAX_CALL_ATTEMPTS - 1;
    const started = performance.now();
    const run = await runFreshClaude(model, frozenPrompt, 12 * 60_000);
    const latency_ms = Math.round(performance.now() - started);
    const content = run.stdout.trim();
    const event = {
      outcome: content && run.code === 0 ? "response" : run.timedOut ? "timeout" : "claude_exit",
      status: run.code,
      latency_ms,
      max_tokens: null,
      finish_reason: run.code === 0 ? "claude_complete" : run.timedOut ? "timeout" : "claude_exit",
      has_content: Boolean(content),
      raw_bytes: (run.stdout.length + run.stderr.length),
    };
    if (run.code === 0 && content) {
      emitAttempt(model, attempt, event);
      return { content, raw: run.stderr };
    }
    emitAttempt(model, attempt, event);
    if (retryPossible) { await sleep(backoffMs(attempt)); continue; }
    return {
      content: "",
      raw: (run.stderr || run.stdout || `claude exited ${String(run.code)}`).slice(0, 1000),
      retry: MAX_CALL_ATTEMPTS === 1 && retryAllowed ? "transient" : undefined,
    };
  }
  return { content: "", raw: `${model} retries exhausted` };
}

const call = (judgeModel: string): Promise<CallResult> =>
  judgeModel === DEEPSEEK_MODEL ? callDeepSeek()
    : judgeModel === TERRA_MODEL ? callTerra()
    : callClaude(judgeModel);

// A REFUTATION LEDGER, not a cost log. The costlog above records spend only, so
// until now a rejection existed solely on stdout and vanished the moment it was
// repaired. The owner's twice-refuted rule (WORKFLOW §"Twice-refuted proofs")
// needs a COUNT PER PROOF ACROSS RUNS, so verdicts must outlive the run that
// produced them. Set JUDGE_VERDICTLOG to the level's ledger and never rotate it
// mid-level; the count is the whole point.
const emit = (judgeModel: string, keep: boolean | null, reason: string): void => {
  const line = JSON.stringify({ id, model: judgeModel, keep, reason });
  process.stdout.write(line + "\n");
  const vlog = process.env.JUDGE_VERDICTLOG;
  if (vlog) {
    try {
      appendFileSync(vlog, JSON.stringify({ id, model: judgeModel, keep, reason, context_sha256: contextSha256, at: new Date().toISOString() }) + "\n");
    } catch { /* non-fatal: stdout is still the primary channel */ }
  }
};

// TERMINAL: the account cannot pay. Say so on stdout so the caller sees it, and
// exit 3 so a sweep loop can stop on the FIRST one instead of grinding through
// every remaining item.
//
// Deliberately NOT written to JUDGE_VERDICTLOG. That ledger answers "how many
// times was this proof refuted", and a payment failure is not a verdict about
// the proof at all. 46 such lines entered the frontier-1 ledger before this
// existed and had to be filtered out of every count made from it afterwards.
type Verdict = { judgeModel: string; keep: boolean | null; reason: string; usage?: JudgeResp["usage"]; payment?: boolean; retry?: RetryKind; retry_after_ms?: number | null };

const judgeOne = async (judgeModel: string): Promise<Verdict> => {
  const { content, usage, raw, payment, retry, retry_after_ms } = await call(judgeModel);
  if (payment) return { judgeModel, keep: null, reason: "PAYMENT_REQUIRED: " + raw.slice(0, 200), usage, payment: true };
  if (retry) return { judgeModel, keep: null, reason: "RETRY_REQUIRED: " + raw.slice(0, 200), usage, retry, retry_after_ms };
  if (!content) return { judgeModel, keep: null, reason: "NO_CONTENT: " + raw.slice(0, 300), usage };
  const cleaned = content.replace(/^```json/i, "").replace(/^```/, "").replace(/```$/, "").trim();
  try {
    const v = JSON.parse(cleaned) as { keep?: boolean; reason?: string };
    return { judgeModel, keep: typeof v.keep === "boolean" ? v.keep : null, reason: v.reason ?? content, usage };
  } catch {
    // A few reasoning models occasionally overrun the requested reason length
    // after first emitting an unambiguous `{"keep":true, ...` verdict. An
    // acceptance has no defect rationale to preserve, so record that explicit
    // leading accept rather than burning repeat calls on JSON punctuation. A
    // partial rejection is NEVER accepted: it lacks the specific defect that
    // Step 8 must adjudicate, and remains a null for a targeted retry.
    const leading = cleaned.match(/^\{\s*"keep"\s*:\s*(true|false)\b/);
    if (leading?.[1] === "true") {
      return { judgeModel, keep: true, reason: "TRUNCATED_ACCEPT: " + content.slice(0, 300), usage };
    }
    return { judgeModel, keep: null, reason: `UNPARSEABLE (${content.length} chars): ` + content.slice(0, 300), usage };
  }
};

// `Promise.all` is intentional: --parallel gives both independent refuters the
// exact same frozen prompt, rather than letting either model's result influence
// the other's context or verdict.
const verdicts = await Promise.all(models.map(judgeOne));
const costlog = process.env.JUDGE_COSTLOG;
for (const verdict of verdicts) {
  if (costlog) {
    try {
      appendFileSync(costlog, JSON.stringify({ id, model: verdict.judgeModel, pt: verdict.usage?.prompt_tokens ?? 0, ct: verdict.usage?.completion_tokens ?? 0 }) + "\n");
    } catch { /* non-fatal */ }
  }
  if (verdict.retry) {
    process.stdout.write(JSON.stringify({ id, model: verdict.judgeModel, retry: verdict.retry, retry_after_ms: verdict.retry_after_ms ?? null }) + "\n");
  } else {
    emit(verdict.judgeModel, verdict.keep, verdict.reason);
  }
}
if (verdicts.some((verdict) => verdict.payment)) {
  console.error("[judge] ACCOUNT CANNOT PAY — stopping. This is terminal: no retry will succeed and this is not a verdict about the proof.");
  console.error("[judge] Needs an owner top-up. Run `tsx tools/judge.mts --preflight --parallel` to confirm both judges before restarting a paired sweep.");
  process.exit(PAYMENT_EXIT);
}
if (verdicts.some((verdict) => verdict.retry)) {
  process.exit(verdicts.some((verdict) => verdict.retry === "length") ? 5 : 4);
}
