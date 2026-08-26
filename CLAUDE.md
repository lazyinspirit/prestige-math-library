# prestige-math-library — session instructions

`AGENTS.md` is a non-normative adapter for non-Anthropic agents and points here;
this file is canonical.

This repo is the **public math library** served at
`app.prestige-intelligence.cc/library` by the Prestige Intelligence app
(bind-mount; README §How serving works). Proof house style:
`items/lem-cauchy-bounded.md`.

## Normative docs — read the one governing what you are about to do

| doc | canonical for |
|---|---|
| `SCHEMA.md` | the item/page contract: frontmatter, layout, material rewrite |
| `LEVELS.md` | the build, step 0 → 10: actors, artifacts, gates, self-contained scope, the twice-touched escalation |
| `AUDIT-WORKFLOW.md` | the published-page retro-audit, A0 → A10: retro-tagging, citation precision, blast radius, waves, decisions D1–D5 / R1–R3 |
| `ARCHITECTURE.md` | every gate, ledger, brief and visual tier — how each works and which failure it prevents. Read before changing a mechanism |
| `QUALITY-CONTROLS.md` | the proof-contract, finite-smoke and risk-routing contract |
| `UNATTENDED.md` · `UNATTENDED-AUDIT.md` | the unattended drivers: preflight, gate tables, dispatch roles, blockers. Build driver `tools/autopilot/`; `run-wave.mjs` drives the audit |
| `WORKFLOW.md` | end-to-end runbook, prompt to publish; serving over SSH |
| `README.md` | provenance, judge lineup, citation rules |
| `briefs/` | the actual subagent prompt text |
| `articles/README.md` | the "Rabbit holes" articles: format, editorial rules, `tools/articlecheck.mts`. NOT governed by SCHEMA.md |

The subject-specific doc wins over `WORKFLOW.md`. This file carries the rules;
those docs carry the protocols and the evidence behind them. No driver ever
publishes: step 10 / A10 is the sole owner pause.

## The publish path

1. **Author as `status: draft`** per SCHEMA.md. Session-authored content is
   `origin: session`; never fabricate scraped sources (use `references`). Every
   mathematical-content item declares separate statement/construction and
   proof/verification provenance.
2. **Precheck:** `node tools/tsx-run.mjs tools/precheck.mts` (bare = all items).
   On REPAIR output adopt the printed canonical stratification and re-run until
   clean — the repo stores the strictly stratified form, so a step citing phase-k
   steps sits in phase k+1. Record `verification.precheck: pass`.
3. **Step-6 Alpha audit of the WHOLE level** — independent readers on content
   they did not author, then Alpha. Fatal includes a title or Statement asserting
   more than the proof gives: the judge reads Statements and cannot see a false
   title. Required before publish **even when judged**.
4. **Step-7 skeptical judge** — once, after step 6, on final text, for
   **every item in the level**; authors never judge.
5. **Owner audit** gates `status: published` (set `verification.audited`).
   Flipping status is the publish action — the live site reads this directory. A
   NEW CATEGORY also needs `library/<cat>/_pathway.md` and the parts and briefs
   its category page reads (SCHEMA §6.1); until then the group renders bare
   dependency levels. `pathcheck.mjs` gates it; `pathway-sync.mjs` (step 10)
   places each new page.
6. **Commit + push** (`main`, conventional-commit; `10-close-v2` commits the
   run's tree, push stays an owner act). **NO Co-Authored-By trailers, ever.**
   GitHub is backup only, never on the serving path.

## Preview

The `/library` renderer lives in the app repo (`web/app/library/`, env
`MATH_LIBRARY_DIR`); its `.env` is at the app ROOT, not `web/`, and without it
`auth()` has no session so every draft 404s. The signed-in owner sees drafts with
a DRAFT banner; the public sees only `published`.

## Model lineup

Generation **NEVER** goes through the public billed pipelines, and a subscription
account is **never** wired into the worker service.

| lane | model | runner and settings |
|---|---|---|
| Beta (scaffold + Step-5 author), Step-6 `reader` | **GPT-5.4** | codex, `xhigh`, **1M** (`-c model_context_window=1000000`) |
| Alpha's `refuter` | **GPT-5.4** | codex, `high`, `--sandbox read-only` |
| build `alpha` | GPT-5.4 | codex, `xhigh`, 1M, web tools |
| `alpha-assign` — `2-assign` ONLY | **GPT-5.6 Luna** | codex, `high`, 1M, cap 1, no web |
| `alpha-high` — `3-recheck`, `10-pathway-author-v2` | GPT-5.4 | codex, **`high`**, 1M, web tools |
| `alpha-adjudicate` — `8-adjudicate` ONLY | **GPT-5.6 Sol** | codex, `xhigh`, 1M, **cap 4**, web tools |
| `scaffolder`, audit `orchestrator`, `audit-beta`, `audit-alpha` | GPT-5.4 | codex, `xhigh`, 1M |
| `mechanic` (post-adjudication bookkeeping) | GPT-5.4 | codex, **`medium`**, 1M |
| audit `certifier` / independent reader | GPT-5.4 | codex, `xhigh`, 1M, read-only |
| `audit-refuter` | DeepSeek V4 Pro | direct API, `max` (its spelling of `xhigh`), tool-less |
| Step-7 judge, build and audit | **GPT-5.6 Terra only** | `JUDGE_LINEUP=terra`; `xhigh`, 1M, cap 14 |

**Owner, 2026-08-26: DeepSeek is removed from Step 7; GPT-5.6 Terra is the sole
judge through Steps 8–10 and the corresponding audit close-out.** The ordinary
agent assignments and the separate tool-less `audit-refuter` remain unchanged.
**There is no
`max` effort on codex** — the API accepts `none|low|medium|high|xhigh`; `max` is
DeepSeek's spelling and the corresponding Codex tier is `xhigh`. **The 1M
window on Codex is `-c model_context_window=1000000`, passed explicitly** by
both `dispatch.mjs` and `judge.mts` — the temporary `CODEX_HOME` carries only
`auth.json`, so `config.toml` is not inherited and an omitted flag silently
runs the built-in default.

**GPT-5.6 Terra remains subject to the judge injection bar.** `tools/judge.mts`
sets that adoption test for every new judge model; a funded `--preflight` is
reachability, not proof that the lane clears the bar.

**Binding for every future session** (owner, 2026-07-31 → 08-24). Never silently
substitute another model, effort tier or context window. **Verify a new id
resolves before wiring it** — including `gpt-5.6-terra` before making it the
active judge — because a bad id does not reliably error.
`tools/dispatch.mjs --dry-run --json` attests the resolved table and
`--check-read-only` attests the sandboxes.

**Context windows.** On codex the 1M window is `-c model_context_window=1000000`,
passed explicitly by `dispatch.mjs` and `judge.mts`; the temporary `CODEX_HOME`
carries only `auth.json`, so `config.toml` is NOT inherited and an omitted flag
silently runs the built-in default. The retired Claude entries retain their
`[1m]` model id so their historical configuration remains unambiguous, but they
are not active judge lanes.

**Effort vocabularies differ by runner and are not interchangeable.** codex
accepts `none|low|medium|high|xhigh` and REJECTS `max`; `max` is DeepSeek's
spelling of the top tier. "max" in an owner instruction means the runner's top
tier — `xhigh` on codex.

**Retained and unrouted:** `claude-opus-5[1m]`, `claude-sonnet-4-6`, and
`gpt-5.4` as a judge lane. `deepseek+opus`, `deepseek+sonnet`,
`deepseek+terra`, and `deepseek+gpt54` stay selectable but unselected for
historical replay. Retired lineups' ledger rows
stay append-only evidence and satisfy no current coverage.

**Swap a model in `tools/models.mjs`** — the registry of every id, its runner and
family, the `LANES` assignment and `JUDGE_LINEUPS`. Five lanes: `agentic` (every
ordinary agent role), `secondary` (a tier below — the `refuter`), `partition`
(`2-assign` alone), `adjudication` (`8-adjudicate` alone, held on Sol so fatal
counts stay comparable across runs), `crossFamily` (the tool-less adversarial
reader). Moving every
agent role is one edit to `LANES.agentic`; a new id is one edit to `MODELS`.
**The registry does NOT own caps, sandboxes, effort, web access or working
directories** — those belong to the ROLE and stay in `dispatch.mjs`, so a lane
swap cannot silently move them. A stage wanting a different model or effort
therefore needs its own role, as `mechanic`, `alpha-assign` and `alpha-high` do.

**ANYTHING THAT ENUMERATES MODELS MUST DERIVE FROM THE REGISTRY.** Seven
hand-kept copies were found in one week — `judge.mts`'s `SUPPORTED_MODELS`, its
per-id transport routing, `judge-stamps.test.mts`, the registry's own lane test,
and three lineup tables. `preflight.mjs` keeps a literal copy on purpose (it must
not import a tool it is checking is runnable) and
`tools/autopilot/test/model-registry.test.mts` fails if it drifts, if `[1m]`
disappears from the Opus id, if a lane names a model its runner cannot spawn, if
an agent lane becomes tool-less, or if `crossFamily` shares `agentic`'s family.
**A test that must be edited when a lane moves is a copy, not a guard.**

**SHAPE IS NOT COVERAGE — A LEDGER MUST BE ABLE TO WRITE A RETIRED LANE'S ROW**
(found live, 2026-08-24). Two different questions get two different lists.
*Is this a judge model at all* is `KNOWN_JUDGES`, the registry-derived union over
every lineup; *is this one of today's configured judges* is `JUDGE_LINEUPS[lineupName]`.
A **shape** check uses the first, a **coverage** check the second — which skips a
retired lane's rows rather than rejecting them, so they stay append-only evidence
exactly as §"Skeptical judge" requires. `level-coverage.mjs` asked the
coverage question inside its adjudication shape check, so at frontier-18 step 8
the five `claude-sonnet-4-6` rejections `step8-scope` handed group d came back
`judge-adjudication-shape` after the Alpha adjudicated all five correctly. **No
agent could have written those rows any other way**, so all three repair rounds
burned and the stage stopped needing a person — the signature of a gate an agent
cannot satisfy. `model-registry.test.mts` now fails if either shape checker tests
`record.model` against the configured lineup.

**ROUTE BY RUNNER, NEVER BY MODEL ID.** `judge.mts` chose its transport with a
chain of id equality tests ending in a catch-all, so an unnamed model was judged
by `gpt-5.6-terra` while every artifact recorded the requested name. Caught
2026-08-24 before it ran. A silent substitution announces itself nowhere.

**THE SOLE TERRA JUDGE SHARES A FAMILY WITH MOST WORK IT SCREENS** (owner,
2026-08-26). Agents are OpenAI-family and the judge is `gpt-5.6-terra`;
`audit-refuter` stays DeepSeek but is not a Step-7 judge. The current judge route
therefore provides no cross-family corroboration. **A single-model verdict is
one reading, not corroboration** — keep the distinction across future lineup
changes. **No agent edits mathematical content after step 9.**

**Two live risks.** *Quota* — Terra and the ordinary agent lanes draw on the
Codex subscription and its weekly cap, so a judge sweep competes with authoring
for that account. A cap is a ceiling the engine may use, never a quota it must
spend: **if lanes die on a limit, lower the caps rather than re-spending the
loop.** *Judge adoption* — `tools/judge.mts` sets an injection test as the bar
for a new judge model; a funded `--preflight` is reachability, not that bar.

Read-only is enforced per runner, never by asking: `--sandbox read-only` on codex
(a kernel-level guarantee, and what every read-only role now gets), an
`--allowed-tools` allow list on the claude runner (default-deny — a deny list
alone is escapable through a subagent, measured 2026-08-05), tool-lessness by
transport on DeepSeek. `dispatch.mjs --check-read-only` prints it. The claude
runner's is a tool-layer allow list rather than a kernel sandbox and is only as
good as the tool list; codex's is not.

## Hard rules

### Operating

- **No permission prompts of ANY kind (owner, 2026-07-30; broadened
  2026-08-11).** Owner's wording: *"Do not ask and do not let any agents ask for
  shell command permissions, edit permissions, web search permissions, git
  permissions, or any permissions whatsoever."* It binds a compound command as a
  whole: **no segment of an `&&` chain may prompt either.** Run routine reads,
  writes, web searches, gates, commits and dispatches inside the workspace
  sandbox, choosing non-escalated forms; where the runtime exposes
  `dangerouslyDisableSandbox`, pass it on **every** Bash call. Whoever dispatches
  a subagent owns the prompts it raises. If an operation needs new authority,
  **stop and record a blocker** — that is the escape hatch, not a prompt.
  Committing to a feature branch is routine; pushing, publishing and anything
  outward-facing stays an owner decision.

- **NO LLM DRIVES A STAGE TRANSITION (owner, 2026-08-16).** `tools/autopilot/`
  owns coverage, gates, retries, blockers and every transition; a cleared stage
  is a **dispatch trigger**, never a reporting checkpoint. Models are dispatched
  only for scouting, scaffolding, authoring, refutation, verification,
  adjudication, judgement, audit, reporting and supervision. The test: **if the
  answer is a function of files on disk, it is code.** `ARCHITECTURE.md` §3.11d.

- **Deterministic launch defects spend no model attempts.** `autopilot start`
  runs the existing doctor before detach, and the executor renders every fully
  materialised primary or repair plan through the real dispatcher `--dry-run`
  before starting any member of its fan-out; a deterministic repair-plan
  refusal refunds the repair budget. Tool plans are typed argv and may not
  invoke `sh`/`bash`; every automatic retry keeps its own atomically reserved
  prompt, log and result while the unsuffixed path remains the latest-result
  compatibility name.

- **Every stage must be able to fail (owner, 2026-08-16).** A stage declares a
  gate or an explicit `gatesWaived` reason, and the **terminal stage may not
  waive**. An empty gate list, a gate with no command, and a gate whose inputs
  are absent are **failures**, never passes.

- **Context continuity and compaction (owner, 2026-08-03).** At **60%** active
  context, save durable history at the next safe boundary — after the current
  task or gate, never mid-operation. Record objective, current step, frozen-text
  state, owner policy changes, selected batches, active agents and ownership,
  material files and gate results, ledgers, open risks, exact next action, and
  the working-tree baseline; never credentials, tokens or transcripts. Then
  compact, read the record back, verify disk state, continue. Not an owner pause,
  and it must not delay a stage. **Beta and Alpha use the same 60% rule** — Beta
  in its namespaced batch notes, Alpha in its namespaced report/handoff. Nobody
  replays an agent's context for it.

- **Keep the normative docs current (owner, 2026-07-27).** `CLAUDE.md`,
  `WORKFLOW.md`, `LEVELS.md`, `ARCHITECTURE.md` and `AUDIT-WORKFLOW.md` are
  updated **in the same commit as the change they describe**; triggers at
  `ARCHITECTURE.md` §9. When a doc and the code disagree, the code is the truth
  and the doc is the bug.

### Roles, decisions and gates in a build

- **Capacity (owner, 2026-08-01; caps 2026-08-16).** Each Beta scaffolds and
  authors at most **two A/B pairs**, enforced by `content-policy.mjs
  --manifest-only`. **Beta and reader caps 12, alpha cap 4** (all raised
  2026-08-24 from 9 and 3: alpha cap × 3 batches is the ceiling on a run's batch
  count, and 3 capped it at nine — frontier-18 needed ten; the Beta/reader caps
  track it by the same arithmetic). Stage `concurrency` mirrors these and moves
  with them. **Quota:** every one of these lanes now draws on the **Codex**
  subscription and its WEEKLY cap. On the Claude subscription nine concurrent
  Betas exhausted the window in ~55 minutes and did it twice on frontier-18, so
  12 is a ceiling to be used, not spent, whichever account is behind it. Each
  Alpha ≤3 batches.

- **Step-5/6 ownership (owner, 2026-07-31).** The Betas that scaffolded author
  all Step-5 content and at Step 6 may not audit anything they authored; Alpha
  assigns independent readers and adjudicates.

- **The step-0 drift review is stage `1-drift`, ahead of the Betas, and Alpha
  decides it (owner, 2026-08-24).** Four dispositions: apply a backward edge;
  **reorder** to close a forward edge; **mint** a prerequisite the spec lacks
  (A page + `-examples`), which **this run then builds**; and above **three**
  mintings, **rescope** the run onto those dependencies instead, **≤14 pairs**.
  Alpha edits `plan-spec.json` and writes its report only —
  `tools/drift-apply.mjs` derives manifests, ledger and task files from the
  verdicts, because an Alpha writing manifests is an Alpha driving a stage
  transition. It runs before any Beta so a rescope costs one Alpha pass instead
  of a teardown of authored work. `drift-blocked` still stops the run but is now
  a last resort meaning *nobody decided*. `LEVELS.md` §Step 0 4c;
  `ARCHITECTURE.md` §3.11e-3.

- **`autopilot plan` refuses an unbuildable pair set (owner, 2026-08-24).** Every
  `requires` edge must point at a page **published on disk** or built by the same
  run — the stage-1 predicate, enforced before any agent starts. **Publication
  state is the `status:` line, never the git log**: a predecessor is commonly
  published on disk hours before it is committed. Plan `autopilot frontier`'s
  wave 1 or publish the predecessor; `--allow-unbuildable` owns the stage-1 stop.
  `ARCHITECTURE.md` §3.11e-4.

- **Step-3 decisions belong to Alpha (owner, 2026-07-30; reassigned
  2026-08-16).** Alpha verifies each Beta recommendation from disk and **approves
  or declines using best judgment**, never handing routine scaffold adjudication
  to the owner. Priority: (1) mathematical accuracy and correct dependency
  citation, non-negotiable; (2) minimize forward references; (3) preserve
  mathematical richness. Log each decision and its rationale.

- **Alpha reviews scaffold breadth and depth at step 3 (owner, 2026-08-11).**
  Alpha is spawned at **step 3**, not step 4, reads every pair's `.pages.json`,
  `.notes.md` and `.coverage.json` together, and returns
  `sufficient`/`insufficient` per pair in
  `research/<run>-alpha-<g>-step3-scaffold-review.md`, naming for each
  `insufficient` the exact results to add and the source carrying them. `3-fix`
  routes findings to the owning Beta; `3-recheck` will not clear while any pair
  is `insufficient`. **Alpha may repair the scaffold itself** (owner,
  2026-08-16) — step 3 is the last point where thinness costs an edit rather than
  a rewrite. **Group Alphas** (owner, 2026-08-14): one per **≤3 batches** at
  steps 3, 6a/6b **and 8**, outputs namespaced; assignment decided at `2-assign`
  and validated by `alpha-groups.mjs`, which **never lets a category that fits
  inside one Alpha be split**. The **lead Alpha** alone owns steps 4, 6c, 9, the
  receipts and step 10. **Step 4's splice is not Alpha's**: `splice-plan.mjs`
  transcribes ids mechanically and its refusal is what Alpha adjudicates.
  `LEVELS.md` §Actors, §"Step 4"; `ARCHITECTURE.md` §6.

- **Step 8 is partitioned by group (owner, 2026-08-25).** Each group Alpha
  adjudicates the rejections against items in **its own batches**, on the same
  `2-assign` partition steps 3 and 6 use; no rejection has two adjudicators and
  none has none. Stage `8-scope` renders the partition mechanically
  (`tools/step8-scope.mjs`) — who owns which rejection is a function of files on
  disk — and writes each group a **self-contained task file**: its pages, every
  item it owns, the dependency edges that leave its boundary, and its exact
  rejection rows. Each group Alpha **resumes its rejection-blind Step-7 reader
  conversation** when that durable session exists, and otherwise falls back to
  a fresh dispatch using the rendered file. Nothing from its step-3 or step-6
  self carries: a reader who already decided a proof was fine is the
  worst-placed reader of a judge's objection to it. **Read scope is the whole
  library, write scope is the group** — every Alpha may open any published item
  and any item this run has built, because a citation objection is adjudicated by
  reading the cited item; a defect found in another group's item is recorded in
  `<run>-step8-cross-group.jsonl`. Repair and recovery rounds route back to the
  owning group by the same map. `LEVELS.md` §"Step 8"; `ARCHITECTURE.md` §6.

- **Step 8 separates mathematical retries from integrity closure (frontier-18
  rebuild, 2026-08-25).** `8-scope` does not recompute judge currency over the
  unchanged bytes just certified at `7-judge`. `8-adjudicate` owns exact-row
  decisions and licensed fatal repairs; `8-preflight` runs the full repository,
  contract and ledger checks **before** buying new verdicts; `8-rejudge` has the
  lifetime **two frozen-context cycles per item** budget, counting its initial
  targeted sweep, and gates only the Step-8 guard, published-repair
  certification and judge closure; `8-close` runs the final non-judge integrity
  battery; `8-final` recomputes exact mathematical currency with no repair hook
  that could open a third cycle; `8-freeze` snapshots those bytes for Step 9. Existing
  unadjudicated/open-fatal rows are decided before any missing-verdict sweep, and
  non-judge failures cannot consume or trigger the judge budget. Recovery tasks
  are regenerated from current closure rows and resume the owning group; an
  unscoped failure gets one focused reviewer, never four duplicated group scans.
  Exact context hashes are still canonical `judge.mts --context-hash` results,
  computed by a bounded local pool and reused only through an input-fingerprinted
  receipt rather than 796 serial subprocesses. Immediately before fan-out, a
  funded Terra preflight must pass; failure blocks without spending a
  rejudge cycle or launching the sweep.

- **A cross-group defect is an ALERT (owner, 2026-08-25).** The finding row is
  not a note or a relabelled judge verdict. `step8-scope` gives it a stable id,
  materialises it in `<run>-step8-alerts.json`, and blocks until the named
  `owning_group` records an evidence-bearing disposition in
  `<run>-step8-alert-decisions.jsonl`. The engine re-dispatches only that
  group's Alpha. If the owner confirms a fatal target defect, a real targeted
  judge rejection and its exact adjudication must exist before any edit; the
  source item's rejection is provenance and cannot license the target repair.

- **A defect in a PUBLISHED item is repaired, then judged by Terra (owner,
  2026-08-25).** No group owns published content, and leaving a known falsehood
  live because it was out of scope is not a disposition. The Alpha repairs it and
  writes `{kind:"repaired", id, group, found_via, pre_sha256, defect,
  correction_basis}` to a namespaced temporary file, then appends it with
  `tools/published-repairs.mjs`; agents never edit the shared
  `<run>-step8-published-repairs.jsonl` directly. That row is a
  **second licence source** for `step8-guard --published-repairs`, kept separate
  from the adjudication ledger on purpose: published content was never in this
  run's frozen pair context, so licensing the edit through a `confirmed_fatal`
  row would mean naming a model that never judged the item — a fabricated verdict
  in an append-only ledger step 10 reports from. `8-rejudge` unions those ids into
  its sweep (the closure receipt is run-scoped and never names them), and
  `step8-scope published` blocks until Terra has answered on the
  repaired text. That is the certification: published content has no step-6
  reader left, and no author certifies its own repair. The existing bounds hold —
  the replacement is the source-checked statement or a directly checkable
  elementary correction, and **deletions, id changes and reading-order changes to
  published pages stay owner-only**; a correction needing one of those, or a
  debatable restatement or new theorem, is recorded as
  `{kind:"escalated", …, why}` and stops there.

- **A group Alpha is ONE agent that reads at step 7 and adjudicates at step 8
  (owner, 2026-08-25).** It is spawned while the judge sweep runs, reads its own
  group's pairs, and is then **resumed** at step 8 to adjudicate the rejections
  against those items. Not two agents with a file between them — the same
  conversation, so what it understood while reading is what it holds while
  judging.
  **Read-only at step 7, write at step 8**, which one `codex exec` cannot do
  because `--sandbox` is fixed for the life of a process. `codex exec resume` is
  the seam: it re-enters the conversation in a new process, so the sandbox is
  chosen again. Verified 2026-08-25 — a session created under `--sandbox
  read-only` and resumed with `-c sandbox_mode="workspace-write"` recalled its
  earlier turn and wrote a file. `resume` REJECTS `--sandbox` and `--cd`; the
  sandbox goes through `-c sandbox_mode=`, the working directory through the
  spawned process's cwd. Role `alpha-group-read` at step 7, `alpha-adjudicate`
  resuming at step 8; `dispatch.mjs --session-home` keeps the CODEX_HOME alive
  under gitignored `.autopilot/sessions/<run>/<label>/`, and `--resume-session`
  takes the id from the step-7 result record — never `--last`, which with four
  concurrent groups means whichever finished last.
  The reader returns a JSON digest (`briefs/schemas/step8-context.json`): the
  conventions its pages fix, the load-bearing items, the dependencies it opened,
  the seams it checked, what already looks wrong, and **alerts** — defects it
  found in items another group owns. `8-scope` delivers each alert to the group
  that owns the item. The `step8-digests` gate fails a vacuous digest against the
  group's real size and fails an alert aimed at the sender's own items, but
  **never requires a nonempty `concerns` list**. Quota: four Sol lanes overlap the
  sweep on the Codex weekly cap; if lanes die on a limit, lower
  `alpha-group-read`'s cap rather than re-spend.

- **Route a stage by the role its plan dispatches (owner-scope defect, found
  2026-08-25).** A stage's `pattern` must match `<role>-<label>.result.json` for
  the role its own `plan()` names. The 2026-08-24 lane split left `2-assign`,
  `3-recheck` and `8-adjudicate` matching `alpha` while dispatching
  `alpha-assign`, `alpha-high` and `alpha-adjudicate`; none had re-run, so all
  three would have re-dispatched a completed multi-hour agent forever with an
  `ok: true` result on disk and nothing else amiss.
  `tools/autopilot/test/step8-groups.test.mts` now checks every stage's pattern
  against the result filename its own plan produces.

- **Alpha repairs wrong mathematics (owner, 2026-08-16).** At steps 6 and 8 a
  wrong proof is Alpha's to fix, not to report. Four authorised repairs, Alpha
  picking whichever the defect needs: **rewrite part of the proof**; **write the
  whole proof** where its construction rather than its wording is wrong;
  **correct the Statement, Definition or title** where what is written is false
  or claims more than the argument gives; **add intermediate lemmas**. If none
  closes the defect honestly, narrow or withdraw the claim; never inflate a
  dependency. The *stage* is what is bounded — step 8 needs a `confirmed_fatal`
  row first — and inside that licence all four repair modes are open. **At step 3
  only the last two apply.** "A proof rewrite is authoring" describes which repair
  is needed; it is not a prohibition. Step 8 permits at most two automatic
  frozen-context judge cycles per item, including the frozen judge context whose
  first confirmed-fatal adjudication licenses repair;
  after the second confirmed-fatal context, the item is a terminal blocker for
  the owner or supervising session, with no third judge cycle.

- **Alpha adjudicates the judge; the 30-second threshold (owner, 2026-07-31).**
  Alpha is the sole adjudicator of a configured-judge rejection: it reads the frozen
  verdict and the current disk text, records `confirmed_fatal` /
  `confirmed_nonfatal` / `false_positive`, and applies any permitted repair. The
  engine runs the gates and owns the rejudge. **Every rejection is adjudicated,
  not the interesting ones** — `step8-guard` checks only that edits were
  licensed; the closure gate checks that rejections were answered. A gap between
  proof steps a competent reader closes in **30 seconds is nonfatal**: record or
  polish it, never call it fatal. It covers gaps *between steps* — a defect in the
  Statement itself is never 30-second. **At step 8 the polish is withdrawn.**

- **Step-6 refuter ownership (owner, 2026-07-31; rebuilt 2026-08-25).** In a
  build, the engine dispatches the read-only refuter stage; Alpha never spawns a
  duplicate. The computed scope is every reader-untouched item plus every
  high/critical-risk item. Mechanical collection requires exact, complete
  coverage before 6b. Refuters report concrete false claims, unlicensed
  inferences, missing hypotheses, inaccurate citations, and ill-formed
  expressions, opening cited dependencies before alleging weakness. They never
  edit or adjudicate; group Alpha decides every structured finding from disk.
  The published-page audit retains its separate Alpha-dispatched, context-packed
  DeepSeek refuter protocol under `AUDIT-WORKFLOW.md`.

- **Step 8 is fatal-only (R1; owner, 2026-08-03).** Only a `confirmed_fatal`
  adjudication licenses an edit. A `confirmed_nonfatal` or `false_positive`
  closes the rejection on its exact-hash ledger row with **no content, page,
  frontmatter, contract, impact, or judge mutation**. Cosmetic polish and
  30-second tidying belong at **step 6**, before the text is frozen: any edit is
  a material rewrite under SCHEMA §3, so a step-8 polish voids
  `verification.judge`, forces a rejudge and resamples a refuter — an unbounded
  loop converging on nothing. **Owner clarification, 2026-08-25: two Step-8
  frozen-context cycles per item are the maximum.** A fatal defect still present after the second cycle,
  or a judge call that still has no usable verdict then, becomes a blocker for
  the owner or supervising session to resolve directly. Record that exceptional
  disposition in `<run>-step8-terminal-resolutions.jsonl`, bound to the exact
  current item and context hashes. It supplies no judge verdict and no pass
  stamp, and `autopilot retry` may re-run the gates but may not reopen the
  two-cycle budget. `LEVELS.md` §"Step 8".

- **Exact decline decisions and post-Step-8 certification (owner, 2026-08-25).**
  Step 3 records one evidence-bearing decision per `deferred`/`out-of-scope`
  coverage row, bound to the exact row, relevant page closure and destination.
  Step 9 re-examines only decisions whose bound context changed; a legacy run
  without receipts reviews every decline. Every item created **or mathematically
  modified** after `post-step8` receives a Terra verdict, exact-hash
  adjudication, targeted rejudge and a verified stamp; a creation must have one
  run-manifest owner, while a modified published item stays in the targeted
  change scope. Impact closure precedes final stamps and whole-level receipts.

- **The defect ledger (owner, 2026-08-16).** A disposition and its row in
  `research/defect-ledger.jsonl` are one act — 6b/6c, step 8 (one row per
  `confirmed_fatal`), step 9. Step 10 authors none and runs `defect-ledger.mjs`
  `stats` + `render`. The `check` gate (steps 8–10) enforces it;
  `research/DEFECT-LEDGER.md` is generated, never edited.

- **Step-10 reporting is evidence-bound and read-only (owner, 2026-08-25).**
  Final readiness is the one full final-text validation after pathway work and
  stamps. Code reconciles its receipts and ledgers into a hash-bound evidence
  packet and mechanically renders every build count, judge statistic and fatal
  defect row. The read-only Alpha supplies only interpretation, caveats, owner
  reading priorities and recommendations. A protected-tree receipt taken after
  evidence generation must still match at close-out; a mismatch hard-stops.

### Skeptical judge (owner, 2026-07-31; Terra-only 2026-08-26)

At step 7 run only `gpt-5.6-terra` through `tools/judge.mts`, selected by
`JUDGE_LINEUP=terra` (owner, 2026-08-26). Terra runs at
`xhigh` with the 1M window passed explicitly. `judge-sweep.mjs --run <run>`
creates one persistent Codex conversation per A/B pair and one sequential
worker per pair. Every item still receives its own complete turn with the
unchanged skeptical one-item prompt and full frozen A/B context; only after that
verdict finishes may the pair worker submit its next item. Step 8 resumes the
same pair conversation for a repaired item. Step 9 and later judging remains a
fresh ephemeral call per item. **Transport is chosen by the registry's runner for the id, never
by an id equality test** — see §Model lineup. Terra reads the frozen prompt as
an adversarial refuter of proofs and dependency citations. **Terra is capped at
14**.
`ARCHITECTURE.md` §5.

**The judge's context unit is the A/B PAIR:** the item's page and its `-examples`
companion in full, plus exactly the pages that page declares in `requires` and
actually cites.

Rows from unselected lanes stay append-only evidence and never satisfy current
coverage. **A level judged under a retired lineup is not judged now**: coverage
is per frozen context *and* per configured model set.

- Record a pass in `verification.judge` only when Terra passes the
  text — written mechanically by `apply-judge-stamps.mjs`, enforced by the
  `judge-stamps` gate at `10-stamps-v2`/`10-close-v2` (an adjudicated rejection
  never stamps). Commit the ledger at `research/<run>-judge.jsonl` and compare the
  judge findings at step 10 / A10. A proof refuted or repaired more than once
  escalates per `WORKFLOW.md` §"Twice-touched proofs".
- Adjudicate in `research/<run>-judge-adjudications.jsonl` as
  `{id, model, context_sha256, outcome, defect_type?}` — `outcome` is
  `confirmed_fatal`, `confirmed_nonfatal` or `false_positive`; fatal types are
  `logic`, `dependency_citation` or `other`.
- `tools/judge-sweep.mjs` keeps the model in a file-backed pool. Step 7 has one
  worker per selected A/B pair (14 workers for Frontier 19), and each worker
  serializes its items while independent pairs run concurrently. Every item
  turn is its own process resuming the pair's exact session UUID; a capacity
  refusal is a null verdict, not a verdict. Session identity is stored at
  `.autopilot/sessions/<run>/judge/<A-page>/judge-session.json`, copied into the
  verdict row, and required by the Step-7/8 closure gates.
  `JUDGE_CONCURRENCY_<MODEL>` (here `JUDGE_CONCURRENCY_GPT_5_6_TERRA`) can
  lower a lane for a targeted replay, never raise it above the owner's value. On
  refusal or kernel-kill nulls, lower rather than re-spend the loop. Spend
  `judge.mts --preflight` before a sweep.
- Supply `--pages` with A-page ids; the sweep adds the B/examples items itself.
  **The initial Step-7 sweep takes every A page in the level** — Terra judges
  every item whether or not Alpha changed it. `--items` is for a later rejudge of
  an item repaired after that sweep, driven by `8-rejudge` from
  `<run>-judge-closure.json`, and resumes that item's pair session. `--models`
  remains available only on the fresh historical-replay route.

### Mathematical content

- Item ids are IMMUTABLE on `main`; renames go through `aliases` (SCHEMA §2).
- A published page listing a draft item is a hard error, never a silent skip.

- **Self-contained scope; build the machinery; split the page (owner,
  2026-08-01, extended 2026-08-11).** No item rests on a result the library has
  not established. Beta searches reputable sources for the exact statement of any
  well-known result it needs, then proves it from available library dependencies;
  **if that fails, Beta builds the missing prerequisite definitions and
  theorems.** Dropping a result for want of a definition or lemma that could have
  been written is not a permitted disposition — `deferred`/`out-of-scope` is for
  another page's topic or a subject area the library has not reached. **An A page
  over 60 items is SPLIT** into two or more A pages, each with its own B
  companion, summary and place in reading order; splitting is never dropping.
  `validate-plan.mjs` enforces it as `size` at steps 0, 2 and 4 — split before
  authoring, after it is a rewrite. A split mints new page ids and shifts order,
  so recompute from `plan-spec.json` (`LEVELS.md` §"`order` is not stable").
  **The narrow last resort** is a source-checked result whose local proof
  genuinely cannot be built in scope: a source-cited `rem-` item with
  `proved_here: false`, in `deps`, with the exact source, failed in-library route
  and necessity recorded. **"It would have taken three more lemmas" is not a
  licence.** `external_refs` is for non-load-bearing mentions only; fuchsia ‡ is
  the reader-facing tag. Already-adopted axioms (AC, countable/dependent choice)
  and independence facts remain permitted. A dropped item is deferred, not
  deleted: its `coverage.json` row makes it recoverable. Published items are not
  retrofitted. `LEVELS.md` §"Step 2".

- **Scaffold richness (owner, 2026-07-30).** Beta decomposes long proofs into
  focused lemmas and makes a pass for cheaply proved corollaries. Never pad;
  never drop valuable results for ergonomics.

- **A second proof of a published theorem is welcome (owner, 2026-08-20):** *"I
  do not mind having duplicate theorems if they are proved in different ways,
  it's good for mathematical richness."* Requires a **genuinely different
  route** — a different method, not a rearrangement. Each version keeps a distinct
  id naming its route (as in
  `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`), its own component
  provenance and proof contract, and **each names the other** in a `rem-` or its
  Remark. Prefer the fuller form: a theorem with its own proof beats a remark
  pointing at the first. **Not licensed:** a restatement carrying the same proof,
  a cosmetic variant, or an invented claim — the statement must still be
  source-backed. `briefs/judge-conventions.txt` tells the judges, since a second
  route otherwise reads as a duplication defect; `content-policy`'s
  `batch-duplicate-item` is about a repeated **id** and is unaffected.

- **Source-grounded, dependency-closed scaffolding (owner, 2026-07-30;
  provenance order 2026-08-01).** Before scaffolding, Beta searches reputable
  sources for the relevant definitions, statements, counterexamples and proof
  strategies, records them and any convention disagreements in its notes, and
  must open every published item it intends to cite. Every load-bearing
  dependency is established by published content or by an earlier item in the
  pair; the only exception is the documented external fallback. **Beta must never
  make an `ai-generated` Statement/Construction a load-bearing scaffold or proof
  dependency**, and the proof's provenance never changes that.
  `literature-derived` and `ai-altered` may be used freely, but an AI-adapted
  target is never auto-trusted. A published item with no component `provenance`
  (or the older `authorship`) is `legacy-unclassified` — not evidence it is
  AI-generated, and not a reason to invent a label: open it and either confirm
  from your own knowledge that the exact statement is established or source it,
  recording which route in the batch notes. If neither gives confidence, do not
  make it load-bearing — prove it locally, rescope, or use the fallback.

- **Generated-claim minimization (owner, 2026-08-01).** Source-backed statements
  are the default. Beta must not invent a theorem, proposition, definition, false
  statement or mathematical remark merely to enrich a page or bridge an
  inconvenient proof. It may introduce only a directly verifiable `ai-generated`
  corollary or a checkable example/counterexample, and neither may be
  load-bearing. Keep a would-be decomposition lemma inline, or replace it with a
  literature-derived or AI-altered statement. A theorem in the dependency
  backbone needs literature support or a locally proved, source-grounded route.

- **Component provenance and AI truth risk (owner, 2026-08-01).** Beta assigns
  `provenance.statement` and `provenance.proof` to **every** mathematical-content
  item it authors, with a rationale in its batch notes; values and their meanings
  are SCHEMA §3. A generated proof does not make a source-derived statement
  AI-generated; `proved_here` separately says whether the library supplies a
  complete proof. **The truth-risk flag is an AI-generated statement or
  construction, not an AI-generated proof:** Beta searches for a counterexample
  before authoring or repairing one whenever there is concrete doubt. Alpha checks
  both labels at Step 6, retags each materially altered component, and
  independently probes an AI-generated claim, witness or refutation for
  counterexamples when its truthfulness is in doubt — **repairing a proof does not
  establish the Statement.** Never retrofit legacy items merely to satisfy this
  rule.

- **Source depth and the canonical-coverage harvest (owner, 2026-08-11).** Each
  A/B pair is backed by **at least two independent treatments**, at least one a
  textbook, monograph or full lecture-note set with a harvestable table of
  contents — Wikipedia and encyclopedia entries are convention tiebreakers only,
  never primary backing. Beta records the exact chapter/section range read per
  source, enumerates **that source's own section and named-result headings** over
  it, and gives every harvested heading a disposition (enum and reason
  requirements: `LEVELS.md` §"Step 2"). Source-anchored, never a minimum count: a
  count invites the padding scaffold richness forbids. Artifact
  `research/<run>-batch-<i>.coverage.json`, gated by `coverage-checklist.mjs` at
  **steps 2 and 6**, where Alpha additionally checks the harvest is *faithful* —
  the gate only checks it is structurally complete and true of disk. Legacy pages
  are not retro-harvested.

- **Citation liveness; RECOVER BEFORE REPLACE (owner, 2026-08-15).**
  `coverage-checklist` checks a source URL is *present*; `tools/url-sweep.mjs`
  checks a reader can *open* it — a gate at **steps 2 and 6**,
  `--recover --fail-on-dead`. On a dead source, **recover before re-sourcing**: it
  queries the Wayback index under every host variant, because a document moved
  behind a new subdomain is archived only under its old host. Re-source only once
  recovery fails — replacing a recoverable source costs a re-harvest and rewrites
  every backed item's provenance.

- **Beta proof-design discipline (owner, 2026-07-31).** Before authoring a proof,
  Beta prepares a proof-obligation map assigning every substantive subclaim to an
  exact dependency or an inline derivation, and performs a boundary pass for
  empty objects, zero/one indices, degenerate parameters, endpoints, nonempty
  choices, and both directions of an iff. Each written step uses only an explicit
  fact, an earlier step, a given hypothesis, or elementary algebra; proofs with
  distinct conceptual moves split into focused lemmas. If a proof still does not
  close honestly, narrow or drop the claim rather than patching it with an
  overstated dependency.

- **Natural mathematical voice and citation fidelity (owner, 2026-07-30; Beta
  dependency discipline 2026-07-31).** No AI-sounding labels or interpretive
  filler ("Null definition:", "the key bridge says"). In every `[F#]`, `[A#]` or
  `[L#]` state the cited proposition itself: quote it exactly when practical, else
  the smallest faithful shortening — no changed domain, quantifier, hypothesis,
  direction or conclusion; no invented converse. **A clause's opening words are
  not a citation**; never substitute a summary of what it is "for". If a
  dependency appears insufficient, do not inflate its restatement or add an unused
  edge: add inline proof steps, reconsider the strategy, or reconsider whether the
  claim is true as stated. Binds every scaffold, author, Beta, Alpha and judge.

- **No applied `\iota(n)` for natural numbers (owner, 2026-08-11, standing).** Do
  not write the canonical embedding around a natural number — `\iota(n)`,
  `\iota(0)`, `\iota(k!)`. Write the number: to a reader who has not just read the
  embedding lemma it looks like an undefined function. **Bare `\iota` is untouched
  and still correct** as a basis inclusion in a universal property, as in
  `(F,\iota)` with `\phi\circ\iota=\iota'`; only the *applied* form is banned.
  Enforced batch-scoped by `content-policy.mjs` error `notation-iota-applied`, so
  new content is gated and the legacy corpus is not retro-flagged — cleaning the
  ~350 published items carrying it is a separate owner decision, and a real edit
  per item, never a `sed` pass.

- **Diagrams are optional, equations are not (owner, 2026-08-25, standing).**
  Every item involving a commutative diagram or a string diagram states its
  content **precisely and algebraically** in the item text: arrows named with
  domain and codomain, every commutativity claim written as a composite
  equation, every string-diagram identity written as an equation between
  composites. A `tikz`/`tikzcd` block is a rendering aid layered on top of that
  text and never the sole carrier of a Definition, Statement, hypothesis or
  proof step. Delete every diagram and the item must still be complete. **The
  judges cannot see pictures:** the frozen prompt is text, `deepseek-v4-pro` has
  no vision, and at frontier-18 step 7 it burned 595s and then 720s on
  `thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor` without returning a
  verdict. An item whose mathematics lives only in an SVG is unjudgeable, and an
  unjudgeable item cannot be published. Binds every scaffold, author, Beta and
  Alpha. SCHEMA §5.1 carries the layout rules; the `**Diagram:**` cell grammar
  it fixes is a *proof* device and does not exist on a `def-` item, so on those
  the prose and display math are the whole algebraic statement. **Published
  items are not retrofitted** — this governs new content, and the ~65 legacy
  items carrying TikZ are a separate owner decision.

- **Page-summary contract (owner, 2026-07-30).** Every A-page summary is exactly
  two nonempty prose paragraphs, each under 150 words. Paragraph 1 gives the
  mathematical background and names definitions and results from declared
  dependencies that the development uses. Paragraph 2 names the main definitions
  and theorems developed on the page and explains their logical progression. A B
  page has no authored summary body at all. Summaries remain bound by SCHEMA §6:
  no counts, self-ranking, unsupported reading position, or survey claims about
  other pages.

### Contracts, blast radius and repairs

- **Durable proof-contract and high-risk gates (owner, 2026-08-01).** Each Beta
  maintains `research/<run>-batch-<i>.proof-contracts.json` for every
  proof-bearing item it owns. **A templated `not_applicable` boundary row is not
  a disposition**; `boundary-audit.mjs` and `citation-fidelity.mjs` close that
  class. Gate order after Step 5 and again after Step-6 repairs:
  `merge-proof-contracts.mjs` first (a failed merge means nothing below it
  passed over a live file), then `proof-contract --strict`, `finite-smoke`,
  `risk-report`, those two detectors, `gate-liveness`. Finite smoke tests are
  bounded countermodel searches, never general proofs. A high/critical risk
  result routes the item to the engine's Step-6 read-only refuter even when the
  reader edited it, and requires an Alpha `risk_review`. **`--require-reviewed`
  belongs to Step 6, not Step 5:** only
  Alpha writes a `risk_review`, at Step 6, so demanding one at Step 5 can never
  pass. Full contract: `QUALITY-CONTROLS.md`.

- **Scope and blast-radius closure (owner, 2026-08-01).** Every level runs
  `content-policy.mjs` on the manifests, generates the `audit-manifest.mjs`
  checklist, and records the Alpha receipt. After any public-interface change,
  `impact-audit.mjs` computes every downstream consumer and requires an Alpha
  disposition. **Diff `pre-author → post-6b`, then `post-6b → current` at 6c** — a baseline
  after authoring, or a defaulted `--to`, makes the diff empty by construction, so
  the gate confirms instead of checking.
  `level-coverage.mjs --verify-current-context` is the hard receipt gate the
  terminal stage runs: provenance on every scoped item, a merged contract on every
  proof-bearing one, a current Terra verdict, the `spine-audit.mjs`
  receipt for proof-bearing items in the 100 largest dependency cones, a
  reader-visible `sources.references` URL on `literature-derived`/`ai-altered`
  items, and an `external_dependency` record for any `proved_here: false`.
  A verdict is current when cast against the current frozen pair context **or**
  against byte-identical text of that item (owner, 2026-08-06) — so a repaired
  item always rejudges and only its unedited page-mates are spared. A current
  rejection is a hard stop unless Alpha recorded an exact-hash adjudication:
  `confirmed_fatal` blocks closure; `confirmed_nonfatal` and `false_positive` may
  clear it under the 30-second rule.

- **Obvious published-dependency repair (owner, 2026-08-01; Step-6 ownership
  hardened 2026-08-26).** A Step-6 reader reports, but never edits, an
  unambiguous falsehood in a published dependency. After adjudicating it, the
  first group Alpha to acquire the atomic pre-edit claim is the sole repair
  owner; parallel groups may not race on the file. The replacement is the exact
  source-checked statement with its conventions/hypotheses or a directly
  checkable elementary correction—never a preference, exposition improvement,
  30-second gap closure, or unsupported theorem. The locked handoff records the
  finding group, repair owner, old/new guard hashes, defect, and correction
  basis; Step 8 sends the repaired item through Terra. No repairer
  self-certifies. A debatable restatement, new theorem, deletion, id/order
  change, or open impact queue is an owner blocker. `WORKFLOW.md`; `LEVELS.md`
  §6.

- **Published-page audit workflow (owner, 2026-08-02).** `AUDIT-WORKFLOW.md` is
  normative for the retro-audit of published pages. **Every build safeguard
  carries over, step 8's fatal-only rule included.** Inside audit scope only it
  supersedes three standing rules, stated in full at its §2: legacy provenance
  **is** retro-tagged by audited determination with a durable ledger row (never by
  guessing; `ai-generated` needs a positive finding of novelty, a recoverable
  restatement is `ai-altered`, undecidable escalates to Alpha); the audit lineup
  is the model table above; and the repair delegation extends to
  citation-precision repairs, provenance retags and debatable restatements, Alpha
  adjudicating. **Deletions, id changes and reading-order changes to PUBLISHED
  pages remain owner-only** — the 2026-08-24 minting and reordering authority is
  step-0 planning of unbuilt pages and does not reach published content, whose
  ids are immutable on `main`. The DeepSeek refuter is tool-less, so Alpha assembles its context
  into the `--task` file and `dispatch.mjs` refuses a refuter dispatched without
  one.

  **A7 is an exception to the build's whole-level Step-7 sweep** (owner,
  2026-08-08): A2/A6 already read the wave, so A7 and any A8 repair rejudge only
  the ids in `wave<k>-rejudge-targets.json`, and provenance-only retags are not
  judge targets. Stamp is `verification.verified`, `scope: published-audit`,
  `delegated_by: owner`. **Already-tagged content is never audit scope**: an item
  carrying both component-provenance tags is not re-audited, and
  `rounds.mjs --audit-batches` excludes it at scope generation.

## Presentation (owner-approved 2026-07-24, FROZEN — do not restyle)

Do NOT change visual style, layout, colours, spacing, typography, or flowchart
look in EITHER repo without an explicit, in-session owner instruction. Adding
content is always fine; restyling is not. New content follows SCHEMA.md's layout
rules so it renders identically to what exists. The implementation lives in the
**app repo** and is the source of truth — read it, and `ARCHITECTURE.md` §7 which
tables it, before any rendering change. The owner-instructed restyles of the
`/library` INDEX (2026-07-26, 2026-07-27) and the 2026-08-14 category hue-family
table are frozen too.

**Three ranked citation tiers** (`ARCHITECTURE.md` §7 tables colour, underline
and glyph), none relying on colour alone: ordinary citation < **forward
reference** < **not proved here** — the bottom tier OUTRANKS the middle one.
**Sky and fuchsia are reserved** for the top two tiers and used nowhere else;
later additions (search, issue reporting, navigation) introduce no new accent.
Marker text always accompanies colour.

Content-side hooks, and the rules that are correctness rather than taste:

- **Forward references** (owner, 2026-07-25): `forward_refs` in item frontmatter
  (SCHEMA §3) plus `tools/fwdcheck.mjs`. A forward reference's CONSEQUENCES are
  marked the same way — a consequence may use it in its own proof.
- **The ‡ tier** (owner, 2026-07-25): `proved_here: false` in frontmatter, the
  `not-proved-here` category, `tools/extcheck.mjs`. The accent propagates along
  `deps` so consequences are marked too, with an always-visible note that the
  dependency is not developed here. It serves the `deferred-*` catalogue pages,
  the choice and independence citations, and the documented external fallback —
  **do not delete this machinery**; it is what makes that fallback honest.
- **Flowcharts are BIRDS-EYE:** only `landmark: true` items are nodes; edges are
  the transitive reduction of nearest-landmark-ancestor. Curate landmarks; never
  revert to one-node-per-item.
- **The verification caption stays**, saying items not AI-judged were
  owner-verified, NOT failures; a bare "judge 31/34" headline is banned.
- **Draft safety, both correctness:** drafts never reach the public search index;
  corpus loading is memoised, rendering is not. Both mechanisms and the caption's
  exact wording: `ARCHITECTURE.md` §7.1.

If tempted to "improve" the look: STOP. Only the owner reopens it.
