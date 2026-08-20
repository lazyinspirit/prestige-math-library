# prestige-math-library — session instructions

`AGENTS.md` is a non-normative adapter for non-Anthropic agents and points here;
this file remains the canonical agent instruction file.

This repo is the **public math library** served at
`app.prestige-intelligence.cc/library` by the Prestige Intelligence app
(bind-mount; README §How serving works). House style for proofs:
`items/lem-cauchy-bounded.md` is the approved exemplar.

## Normative docs — read the one governing what you are about to do

| doc | canonical for |
|---|---|
| `SCHEMA.md` | the item/page contract: frontmatter, layout, material rewrite |
| `LEVELS.md` | the build, step 0 → 10: actors, artifacts, gates, self-contained scope, the twice-touched escalation |
| `AUDIT-WORKFLOW.md` | the published-page retro-audit, A0 → A10: retro-tagging, citation precision, blast radius, waves, decisions D1–D5 / R1–R3 |
| `ARCHITECTURE.md` | every gate, ledger, brief and visual tier — how each works and which failure it prevents. Read before changing a mechanism |
| `QUALITY-CONTROLS.md` | the proof-contract, finite-smoke and risk-routing contract |
| `UNATTENDED.md` · `UNATTENDED-AUDIT.md` | the unattended drivers: preflight, gate tables, dispatch roles, blockers. The build driver is `tools/autopilot/`; `run-wave.mjs` drives the audit |
| `WORKFLOW.md` | end-to-end runbook, prompt to publish; serving over SSH |
| `README.md` | provenance, judge lineup, citation rules |
| `briefs/` | the actual subagent prompt text |
| `articles/README.md` | the "Rabbit holes" narrative articles: format, editorial rules, `tools/articlecheck.mts` gate. NOT governed by SCHEMA.md |

The subject-specific doc wins over `WORKFLOW.md` where they differ. No driver
ever publishes: step 10 / A10 is the sole owner pause.

## The publish path

1. **Author as `status: draft`** per SCHEMA.md. Session-authored content is
   `origin: session`; never fabricate scraped sources (use `references`). Every
   mathematical-content item declares separate statement/construction and
   proof/verification provenance.
2. **Precheck (mechanical, free)**, from the repo root:
   `node tools/tsx-run.mjs tools/precheck.mts`. Bare = all items, or pass
   specific files. On REPAIR output, adopt the printed canonical stratification
   into the file and re-run until clean — the repo stores the strictly
   stratified form, so a step citing phase-k steps sits in phase k+1. Record
   `verification.precheck: pass`.
3. **Step-6 Alpha audit of the WHOLE level** — independent readers on content
   they did not author, then Alpha (§Roles; `LEVELS.md` §"Step 6"). Fatal
   includes a title or Statement asserting more than the proof gives — the
   judge reads Statements and cannot see a false title. Required before
   publish **even when judged**.
4. **Step-7 paired skeptical judge** — once, after step 6, on final text, for
   **every item in the level**; authors never judge (§"Paired skeptical
   judges").
5. **Owner audit** gates `status: published` (set `verification.audited`).
   Flipping status is the publish action — the live site reads this directory.
   A NEW CATEGORY also needs `library/<cat>/_pathway.md`, the parts and briefs
   its category page reads (SCHEMA §6.1); until it exists the group renders bare
   dependency levels. `node tools/pathcheck.mjs` is the gate, and
   `tools/pathway-sync.mjs` (step 10) places each new page in it.
6. **Commit + push** (`main`, conventional-commit style; the engine's
   `10-commit` stage commits the run's tree on `main` itself — push stays an
   owner act). NO Co-Authored-By
   trailers, ever. GitHub is backup only, never on the serving path.

## Preview

The `/library` renderer lives in the app repo (`web/app/library/`, env
`MATH_LIBRARY_DIR`); its `.env` is at the app ROOT, not `web/`, and without it
`auth()` has no session so every draft 404s (`WORKFLOW.md` step 6). The signed-in
owner sees drafts with a DRAFT banner; the public sees only `published`.

## Model lineup — the single source of truth

Generation **NEVER** goes through the public billed pipelines, and a subscription
account is **never** wired into the worker service.

| lane | model | runner and settings |
|---|---|---|
| Beta (scaffold + Step-5 author), independent Step-6 `reader`, Alpha's `refuter` subagents | **GPT 5.6 Sol** | Codex subscription, `xhigh`, **1,000,000-token** context |
| **build `alpha`** (owner, 2026-08-20) | **GPT 5.6 Sol** | Codex subscription, `xhigh`, 1M context, `tools.web_search=true` |
| `scaffolder` (subject tracks), `orchestrator` (audit) | GPT 5.6 Sol | Codex subscription, `xhigh`, 1M context |
| `audit-beta`, `audit-alpha` | GPT 5.6 Sol | Codex subscription, `xhigh`, 1M context |
| `mechanic` (post-adjudication bookkeeping) | GPT 5.6 Terra | Codex, **`medium`**, 1M context |
| audit `certifier` / independent reader | GPT 5.6 Terra | Codex, `xhigh`, 1M context, read-only |
| `audit-refuter` | DeepSeek V4 Pro | direct API, `max` (its spelling of `xhigh`), tool-less |
| paired judges, build and audit | DeepSeek V4 Pro + **GPT 5.6 Terra** | `JUDGE_LINEUP=deepseek+terra` (owner, 2026-08-20) |

**Binding for every future session** (owner, 2026-07-31/08-08/08-20). Never
silently substitute another model or a smaller window; a context-window field is
`1000000`. `tools/dispatch.mjs` is this table, mechanically — Codex:
`model_reasoning_effort="xhigh"`, `model_context_window=1000000`, temporary
`CODEX_HOME` with `auth.json`, no `config.toml` — and `--dry-run --json` attests
it. **No lane runs on an Anthropic model.** The `claude` runner is kept in
`dispatch.mjs` with no role routed to it, and the only remaining claude process
anywhere is the sonnet judge lane, which is selectable and not selected.

**The Alpha exception is withdrawn** (owner, 2026-08-20: *"Change from opus 5 to
sol, and sonnet 5 to terra for all agents and judges"*). From 2026-08-10 the
BUILD `alpha` role ran Claude Opus 5 to buy cross-family independence for the
role that adjudicates the judges. **Read what that means now and do not
rediscover it as a surprise:** Alpha, the Betas it audits, the `reader` and
`refuter` it dispatches, and the Terra judge lane whose rejections it adjudicates
are all GPT-family. **DeepSeek is the only cross-family reader in either
workflow** — the step-7 judge lane on the build side and `audit-refuter` on the
audit side. Weight accordingly: Terra/Alpha agreement is same-family agreement,
not corroboration, and a DeepSeek-only rejection is the one finding no other lane
in the run could have produced. The authoring role uses Sol, never Terra.
Read-only is enforced per runner, never by asking: `--sandbox read-only` on
Codex, tool-lessness by transport on DeepSeek, and — if a claude role is ever
re-added — an `--allowed-tools` allow list on the claude runner.
`dispatch.mjs --check-read-only` prints it.

## Hard rules

### Operating

- **No permission prompts of ANY kind (owner, 2026-07-30; broadened
  2026-08-11).** Binds every current and future agent.
  The owner's wording: *"Do not ask and do not let any agents ask for shell
  command permissions, edit permissions, web search permissions, git permissions,
  or any permissions whatsoever."* It binds a compound command as a whole: **no
  segment of an `&&` chain may raise a prompt either.** Run
  routine reads, writes, web searches, gates, commits and dispatches inside the
  workspace sandbox, choosing non-escalated forms. On runtimes exposing
  `dangerouslyDisableSandbox`, pass it on **every** Bash call; otherwise stay
  within granted workspace permissions. Whoever dispatches a subagent owns the
  prompts it raises: every brief carries this rule. If an operation cannot proceed
  without new authority, **stop and record a blocker** — that is the escape hatch,
  not a prompt. Committing to a feature branch is routine; pushing, publishing and
  anything outward-facing remains a separate owner decision.

- **NO LLM DRIVES A STAGE TRANSITION (owner, 2026-08-16; supersedes the
  2026-08-15 supervisor rule).** The engine at `tools/autopilot/` owns coverage,
  gates, retries, blockers and every transition; a cleared stage is a
  **dispatch trigger**, never a reporting checkpoint. Models are dispatched only
  for **scouting, scaffolding, authoring, refutation, verification,
  adjudication, judgement, audit, reporting and supervision**, enforced at the
  point of dispatch. The test: **if the answer is a function of files on disk, it
  is code.** `ARCHITECTURE.md` §3.11d.

- **Every stage must be able to fail (owner, 2026-08-16).** A stage declares a
  gate or an explicit `gatesWaived` reason, and the **terminal stage may not
  waive**. An empty gate list, a gate with no command, and a gate whose inputs
  are absent are **failures**, never passes — `frontier-14` finished step 10
  with its receipt gate red, two fatal proofs unrepaired and sixteen rejections
  unread, because the last stage could not say no. `ARCHITECTURE.md` §3.11d.

- **Context continuity and compaction (owner, 2026-08-03).** At **60%** active
  context, save durable history at the next safe boundary — after the current
  task or gate, never mid-operation. Record the objective, current step and
  frozen-text state, owner policy changes, selected batches, active agents and
  ownership, material files and gate results, ledgers, open risks, exact next
  action, and the working-tree baseline — concise and factual, never credentials,
  tokens or copied transcripts. Then compact, immediately read the record back,
  and verify relevant disk state before continuing. Not an owner pause, and it
  must not delay a stage once the state is safely recorded. **Beta and Alpha use
  the same 60% rule** — Beta appends to its namespaced batch notes, Alpha to its
  namespaced report/handoff — each resuming from its own checkpoint. Nobody
  replays an agent's context for it.

- **Keep the normative docs current (owner, 2026-07-27).** `CLAUDE.md`,
  `WORKFLOW.md`, `LEVELS.md`, `ARCHITECTURE.md` and `AUDIT-WORKFLOW.md` are
  updated **in the same commit as the change they describe**; the trigger list is
  `ARCHITECTURE.md` §9. Verify against the code, never from memory: when a doc
  and the code disagree, the code is the truth and the doc is the bug.

### Roles, decisions and gates in a build

- **Beta batch capacity (owner, 2026-08-01; lane cap raised 2026-08-16).** Each
  Beta scaffolds and authors at most **two A/B pairs**, enforced by
  `content-policy.mjs --manifest-only`. The **beta and reader lane caps are 9**:
  the alpha cap is 3 and each Alpha owns ≤3 batches, so a run may carry nine.

- **Step-5/6 ownership (owner, 2026-07-31).** The Betas that scaffolded the
  batches author all Step-5 content, and at Step 6 are excluded from auditing
  anything they authored; Alpha assigns independent readers and adjudicates.

- **Step-3 decisions belong to Alpha (owner, 2026-07-30; reassigned from the
  orchestrator 2026-08-16).** It verifies each Beta recommendation from disk and
  then **approves or declines it using best judgment**, never handing routine
  scaffold adjudication back to the owner. Priority: (1) mathematical accuracy
  and correct dependency citation are non-negotiable; then (2) minimize forward
  references; then (3) preserve mathematical richness. Log each decision and its rationale.

- **Alpha reviews scaffold breadth and depth at step 3 (owner, 2026-08-11).**
  Alpha is spawned at **step 3**, not step 4. It reads every pair's
  `.pages.json`, `.notes.md` and `.coverage.json` together and returns a
  `sufficient`/`insufficient` verdict per pair in
  `research/<run>-alpha-<g>-step3-scaffold-review.md`, naming for each
  `insufficient` the exact results to add and the source carrying them. The
  `3-fix` stage routes findings to the owning Beta, and the `3-recheck` gate will
  not clear while any pair is `insufficient`, so step 4 cannot splice past an
  unfixed finding. **Alpha may also repair the scaffold
  itself** (owner, 2026-08-16): the older no-edit rule existed because two writers
  on one batch file overwrite each other, and the stage barrier removed that. Step
  3 is the last point where thinness costs a scaffold edit, not a rewrite.
  **Group Alphas (owner, 2026-08-14; assignment judged 2026-08-16):** one Alpha
  per **≤3 batches** at step 3 and 6a/6b, outputs namespaced. **Which batches**
  is decided at stage `2-assign` by an Alpha and validated by
  `alpha-groups.mjs`, which **never lets a category that fits inside one Alpha be
  split** — a hard gate error. The **lead Alpha** alone owns steps 4, 6c, 8, 9,
  the receipts and step 10. **Step 4's splice is not Alpha's**:
  `tools/splice-plan.mjs` transcribes ids mechanically and its refusal is what
  Alpha adjudicates. `LEVELS.md` §Actors, §"Step 4"; `ARCHITECTURE.md` §6.

- **Alpha repairs wrong mathematics (owner, 2026-08-16).** At steps 6 and 8 a
  wrong proof is Alpha's to fix, not to report. Four repairs are authorised and
  Alpha picks whichever the defect needs: **rewrite part of the proof**, **write
  the whole proof** where its construction rather than its wording is wrong,
  **correct the Statement, Definition or title** where what is written is false
  or claims more than the argument gives, or **add intermediate lemmas** where a
  proof runs longer than expected. If none closes the defect honestly, narrow or
  withdraw the claim; never inflate a dependency. The *stage* is what is
  bounded — step 8 needs a `confirmed_fatal` row first — and inside that licence
  all four are open and uncapped. **At step 3 only the last two apply**: no proof
  exists, so Alpha infers the route from `title`, `strategy` and `deps` and
  decides whether it can close. `frontier-14` shipped two true theorems whose
  proofs did not establish them, declared as blockers because "a proof rewrite is
  authoring" was read as a prohibition rather than as a description of which repair
  was needed.

- **Alpha adjudicates judges, and the 30-second threshold (owner, 2026-07-31).**
  Alpha is the sole adjudicator of a paired-judge rejection: it reads the frozen
  verdict and the current disk text, records `confirmed_fatal` /
  `confirmed_nonfatal` / `false_positive`, and applies any permitted repair. The
  engine runs the gates and owns the rejudge (`level-coverage --judge-only`;
  `ARCHITECTURE.md` §5). **Every rejection is adjudicated, not the interesting ones** —
  `step8-guard` checks only that edits were licensed; the closure gate checks the
  other direction, that rejections were answered.
  A gap between proof steps a competent reader closes in **30 seconds is
  nonfatal**: record or polish it, never call it fatal. It covers gaps *between
  steps* — a defect in the Statement itself is never 30-second. **At step 8 the
  polish is withdrawn.**

- **Alpha proof-refuter delegation (owner, 2026-07-31).** For every Alpha-n audit,
  Alpha dispatches read-only proof-refuter subagents held to the paired judges'
  skeptical standard: report only a concrete false claim, unlicensed inference,
  missing hypothesis, or inaccurate citation, and inspect the supplied dependency
  before alleging it is too weak. **A refuter never writes content or applies a
  fix**; Alpha alone adjudicates every finding from disk — confirm, refute with
  evidence, or apply and gate the repair.

- **Step 8 is fatal-only (R1; owner, 2026-08-03).** At build step 8, only a
  `confirmed_fatal` adjudication licenses an edit to an item. A
  `confirmed_nonfatal` or `false_positive` closes the rejection on its exact-hash
  ledger row with **no content, page, frontmatter, contract, impact, or judge
  mutation** — the rule `AUDIT-WORKFLOW.md` §9 states for A8, now binding on the
  build and mechanically enforced in both. Cosmetic polish and
  30-second-gap tidying belong at **step 6**, before the text is frozen, where no
  verdict exists to void: any edit is a material rewrite under SCHEMA §3, so a
  step-8 polish voids `verification.judge`, forces a rejudge, and resamples a
  refuter — an unbounded loop converging on nothing. **Fatal repairs are
  deliberately uncapped:** a proof that keeps yielding real fatal defects is
  either converging on correctness or is false, and both must run to conclusion.
  The twice-touched escalation stays advisory.
  Exact-hash rows, the engine's `pre-step8` baseline and the guard that licenses
  every later edit against them: `LEVELS.md` §"Step 8".

- **Step-10 fatal-error report and sole pause (owner, 2026-07-31).** Step 9 does
  not pause the build. At the end of step 10 the lead Alpha accounts for every
  fatal error found and fixed, grouped by defect type (invalid inference,
  incorrect dependency citation, false or overstrong statement, missing hypothesis
  or choice scope, invalid witness) and by location (title/Statement, proof,
  Facts, Remark, page prose), each naming the id and its disposition. Evidence is
  the ledgers; concision must not omit a fatal defect.

- **The defect ledger (owner, 2026-08-16).** A disposition and its row in
  `research/defect-ledger.jsonl` are one act — 6b/6c, step 8 (one row per
  `confirmed_fatal`), step 9; step 10 authors none and runs
  `defect-ledger.mjs` `stats` + `render`. The `check` gate (steps 8–10)
  enforces it; `research/DEFECT-LEDGER.md` is generated, never edited.
  `ARCHITECTURE.md` §3.11h.

### Paired skeptical judges (owner, 2026-07-31; second lane changed 2026-08-20)

At step 7, run `deepseek-v4-pro` with `gpt-5.6-terra` through
`tools/judge.mts`, selected by `JUDGE_LINEUP=deepseek+terra` (owner,
2026-08-20) — the default in `judge.mts`, `judge-sweep.mjs`,
`level-coverage.mjs`, `judge-compare.mjs`, `apply-judge-stamps.mjs` and the
audit driver. The Terra lane is an ephemeral `codex exec` process per call
with a 0700 temporary `CODEX_HOME` holding only `auth.json` and an empty
temporary working directory, `xhigh`, `model_context_window=1000000`, so the
frozen prompt is its only context. **Both active lanes are capped at 14**
(owner, 2026-08-20), so a sweep runs **28** calls combined. Both lanes read one
byte-identical frozen prompt, as adversarial refuters of proofs and
dependency citations (`ARCHITECTURE.md` §5). `deepseek+sonnet` remains
selectable and unselected; its lane is a tool-less `claude -p` process.

**The judge's context unit is the A/B PAIR:** the item's page and its
`-examples` companion in full, plus exactly the pages that page declares in
`requires` and actually cites.

**The cross-family screen is DeepSeek and nothing else** (owner, 2026-08-20).
Terra now shares the GPT family with the Sol authors it screens *and* with the
Sol Alpha that adjudicates its rejections, so neither agreement is
corroboration: a Terra rejection Alpha calls `false_positive` is two
same-family reads agreeing. Give a DeepSeek-only rejection the weight its
isolation earns. **What this lineup re-accepts:** Terra was retired on
2026-08-17 when the Codex account behind it was throttled mid-run (429 on the
models endpoint, `NO_CONTENT` on every exec), and a capacity refusal is a null
verdict, never a verdict. Spend `judge.mts --preflight` before a sweep.
Rows from unselected lanes — Terra's frontier-15 nulls, sonnet's frontier-15
verdicts — stay append-only evidence and never satisfy current coverage.

- Record a paired pass in `verification.judge` only when **both** models actually
  pass the text — written mechanically by `apply-judge-stamps.mjs`, which the
  engine's `judge-stamps` gate at 10-commit enforces (an adjudicated rejection
  never stamps); commit the full verdict ledger at `research/<run>-judge.jsonl`
  and compare the two models' findings at step 10 / A10. A proof refuted or
  repaired more than once escalates per `WORKFLOW.md` §"Twice-touched proofs".
- Adjudicate a rejection from either model in
  `research/<run>-judge-adjudications.jsonl` as
  `{id, model, context_sha256, outcome, defect_type?}` — `outcome` is
  `confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`; fatal types are
  `logic`, `dependency_citation`, or `other`. At step 10 compare agreement,
  model-only rejections, nulls, and owner-confirmed fatal findings.
- `tools/judge-sweep.mjs` keeps the lanes independent in file-backed pools:
  **14 per active lane, 28 combined** (owner, 2026-08-20), superseding the
  DeepSeek 24 / Terra 16 the day started with. It is a back-off below every
  measured value — the 2026-08-05 cap of 16 per lane was itself derived from a
  3.9 GB sweep with a 4.6 GB peak on a 7.8 GB host — and symmetric caps keep
  neither lane far ahead of the other, so an interrupted sweep leaves fewer
  half-paired items. Each model advances when one of *its own* slots frees.
  Every lane call is its own node+tsx process and a capacity refusal is a null
  verdict, not a verdict. `JUDGE_CONCURRENCY_<MODEL>` can lower a lane further
  for a targeted replay and can never raise it above the owner's value. On
  refusal or kernel-kill nulls, lower rather than re-spend the loop.
  `ARCHITECTURE.md` §5.
- Supply `--pages` with A-page ids; the sweep adds the B/examples items itself,
  because coverage is for the whole pair. **The initial Step-7 sweep takes every
  A page in the level** — both judges judge every item whether or not Alpha
  changed it. `--items` is for a later rejudge of an item repaired after that
  sweep, driven by the `8-rejudge` stage from `<run>-judge-closure.json`;
  `--models` retries one lane without re-spending the other.

### Mathematical content

- Item ids are IMMUTABLE on `main`; renames go through `aliases` (SCHEMA §2).
- A published page listing a draft item is a hard error, never a silent skip.

- **Self-contained scope; build the machinery; split the page (owner,
  2026-08-01, extended 2026-08-11).** No item rests on a result the library has
  not established. Beta searches reputable sources for the exact statement of any
  well-known result it needs, then proves it from available library dependencies.
  **If that fails, Beta builds the missing prerequisite definitions and
  theorems.** Dropping a result for want of a definition or lemma that could have
  been written is not a permitted disposition; `deferred` / `out-of-scope` is for
  another page's topic, or a subject area the library has not reached.
  **An A page over 60 items is SPLIT** into two or more A pages, each with its own
  B companion, summary and place in reading order; splitting is never dropping.
  `validate-plan.mjs` enforces it as `size` at steps 0, 2 and 4 — split before
  authoring, after it is a rewrite. A split mints new page ids and shifts order,
  so recompute from `plan-spec.json` (`LEVELS.md` §"`order` is not stable").
  **The narrow last resort** is a source-checked result whose local proof
  genuinely cannot be built in scope: a source-cited `rem-` item with
  `proved_here: false`, in `deps`, with the exact source, failed in-library route
  and necessity in the batch notes and proof contract. "It would have taken three
  more lemmas" is not a licence. `external_refs` is for non-load-bearing mentions
  only; the fuchsia ‡ marker is the reader-facing tag. Already-adopted axioms (AC, countable/dependent choice) and
  independence facts remain permitted. A dropped item is
  deferred, not deleted: its `coverage.json` row is what makes it recoverable.
  Published items are not retrofitted. Full rule: `LEVELS.md` §"Step 2".

- **Scaffold richness (owner, 2026-07-30).** Beta decomposes long proofs into
  focused lemmas and makes a pass for cheaply proved corollaries. Never pad; never
  drop valuable results for ergonomics.

- **Source-grounded, dependency-closed scaffolding (owner, 2026-07-30; dependency
  provenance order 2026-08-01).** Before scaffolding, Beta searches reputable
  sources for the relevant definitions, statements, counterexamples and proof
  strategies, and records them and any convention disagreements in its notes. It
  must open every published item it intends to cite. Every load-bearing
  dependency is established by published content or by an earlier item inside the
  pair; the only exception is the documented external fallback above.
  **Provenance order, and the proof's provenance never changes it:** Beta must
  never make an `ai-generated` Statement/Construction a load-bearing scaffold or
  proof dependency. `literature-derived` and `ai-altered` may be used freely, but
  an AI-adapted target is never auto-trusted — when its claim or conventions are
  in doubt, verify against reputable literature. A published item with no
  component `provenance` (or the older `authorship`) is `legacy-unclassified`:
  not evidence it is AI-generated, and not a reason to invent a label. Before
  using one, open it and either confirm from your own knowledge that the exact
  statement is established, or source it; record which route in the batch notes.
  If neither gives confidence, do not make it load-bearing: prove it locally,
  rescope, or use the documented fallback.

- **Generated-claim minimization (owner, 2026-08-01).** Source-backed statements
  are the default. Beta must not invent a theorem, proposition, definition, false
  statement or mathematical remark merely to enrich a page or bridge an
  inconvenient proof. It may introduce only a directly verifiable `ai-generated`
  corollary, or a checkable example/counterexample, and neither may be
  load-bearing. Keep a would-be decomposition lemma inline, or replace it with a
  literature-derived or AI-altered statement. A theorem in the dependency
  backbone needs literature support or a locally proved, source-grounded route.

- **Component provenance and AI-generated truth risk (owner, 2026-08-01).** Beta
  assigns `provenance.statement` and `provenance.proof` to **every**
  mathematical-content item it authors, with a rationale in its batch notes.
  Statement means the Definition/Statement or exact construction; proof means the
  local Proof, Verification or Refutation. Each is `literature-derived`,
  `ai-altered` or `ai-generated`; proof may be `not-supplied`, and
  definitions/remarks `not-applicable` (SCHEMA §3). A generated proof does not
  make a source-derived statement AI-generated; `proved_here` separately says
  whether the library supplies a complete proof.
  The truth-risk flag is an AI-generated **statement or construction**, not an
  AI-generated proof: Beta searches for a counterexample before authoring or
  repairing one whenever there is concrete doubt. Alpha checks both labels at
  Step 6, retags each materially altered component, and independently probes an
  AI-generated claim, witness or refutation for counterexamples when its
  truthfulness is in doubt — repairing a proof does not establish the Statement.
  Never retrofit legacy items merely to satisfy this rule.

- **Source depth and the canonical-coverage harvest (owner, 2026-08-11).** In
  every scaffold: (a) each A/B pair is backed by **at least two independent
  treatments**, at least one a textbook, monograph or full lecture-note set with
  a harvestable table of contents — Wikipedia and encyclopedia entries are
  convention tiebreakers only and never a pair's primary backing; (b) Beta
  records the exact chapter/section range it read per source and enumerates
  **that source's own section and named-result headings** over it; (c) every
  harvested heading gets a disposition — `included` (naming the item id),
  `inline` (the item whose proof absorbs it), `already-published` (the published
  item), `deferred` or `out-of-scope` — the last two with a written reason about
  **that specific result**. Source-anchored, never a minimum count: a count
  invites the padding scaffold richness forbids. The artifact is
  `research/<run>-batch-<i>.coverage.json`, gated by `coverage-checklist.mjs` at
  **step 2** and again at **step 6**, where Alpha additionally checks the harvest
  is *faithful* — the gate only checks it is structurally complete and true of
  disk. `LEVELS.md` §"Step 2"; error codes `ARCHITECTURE.md` §3.11b. Legacy pages
  are not retro-harvested.

- **Citation liveness; RECOVER BEFORE REPLACE (owner, 2026-08-15).**
  `coverage-checklist` checks a source URL is *present*; `tools/url-sweep.mjs`
  checks a reader can *open* it — a gate at **steps 2 and 6**,
  `--recover --fail-on-dead`. On a dead source, **recover before re-sourcing**:
  it queries the Wayback index under every host variant, because a document moved
  behind a new subdomain is archived only under its old host. Re-source only once
  recovery fails: replacing a recoverable source costs a re-harvest and rewrites
  every backed item's provenance. `ARCHITECTURE.md` §3.11c.

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
  `[L#]` state the cited proposition itself: quote it exactly when practical,
  else the smallest faithful shortening — no changed domain, quantifier,
  hypothesis, direction or conclusion; no invented converse. **A clause's
  opening words are not a citation**; never substitute a summary of what it is
  "for". If a dependency appears insufficient, do not inflate its restatement or
  add an unused edge: add inline proof steps, reconsider the strategy, or
  reconsider whether the claim is true as stated. Binds every scaffold, author, Beta, Alpha and
  judge agent.

- **No applied `\iota(n)` for natural numbers (owner, 2026-08-11, standing).** Do
  not write the canonical embedding around a natural number — `\iota(n)`,
  `\iota(0)`, `\iota(k!)`. Write the number: to a reader who has not just read the
  embedding lemma it looks like an undefined function. **Bare `\iota` is untouched
  and still correct** as a basis inclusion in a universal property, as in
  `(F,\iota)` with `\phi\circ\iota=\iota'`; only the *applied* form is banned. Enforced batch-scoped by `content-policy.mjs`
  error `notation-iota-applied`, so new content is gated and the legacy corpus is
  not retro-flagged — cleaning the ~350 published items carrying it is a separate
  owner decision, and a real edit per item, never a `sed` pass.

- **Page-summary contract (owner, 2026-07-30).** Every A-page summary is exactly
  two nonempty prose paragraphs, each under 150 words. Paragraph 1 gives the
  mathematical background and names definitions and results from declared
  dependencies that the development uses. Paragraph 2 names the main definitions
  and theorems developed on the page and explains their general logical
  progression. A B page has no authored summary body at all. Summaries remain
  bound by SCHEMA §6: no counts, self-ranking, unsupported reading position, or
  survey claims about other pages.

### Contracts, blast radius and repairs

- **Durable proof-contract and high-risk gates (owner, 2026-08-01).** Each Beta
  writes and maintains a namespaced
  `research/<run>-batch-<i>.proof-contracts.json` for every proof-bearing item
  it owns: (a) the exact cited source clause and every step using each
  `[F#]`/`[A#]`/`[L#]` fact, (b) an input map covering every numbered step exactly
  once, (c) an anchored disposition of empty, zero, one, degenerate, endpoint,
  nonempty-choice and both iff-direction cases. **A templated `not_applicable`
  boundary row is not a disposition** — `--strict` checks only that the eight are
  present; on `frontier-13` two false template rows each hid a fatal defect, and on
  `frontier-14` three did. `boundary-audit.mjs` and `citation-fidelity.mjs` close
  that class (`ARCHITECTURE.md` §3.11g).
  The engine gates all of this: `merge-proof-contracts.mjs` first (a merge that
  fails means nothing below it claims to have passed over a stale file), then
  `proof-contract --strict`, `finite-smoke`, `risk-report`, those two detectors
  and `gate-liveness`, after Step 5 and again after Step-6 repairs. Finite smoke
  tests are bounded countermodel searches, never general proofs. A high/critical
  risk result routes the item to an additional Alpha proof-refuter and requires an
  Alpha `risk_review`. **`--require-reviewed` is a `risk-report` flag and belongs
  to Step 6, not Step 5:** a `risk_review` is a disposition only Alpha writes, at
  Step 6, so demanding one at Step 5 asks the authoring Betas for another role's
  record and can never pass. Step 5 computes the tiers; Step 6 requires their
  dispositions — the split the audit carries at A4 versus A6.
  `QUALITY-CONTROLS.md` is the complete contract.

- **Scope and blast-radius closure (owner, 2026-08-01).** Every level runs
  `content-policy.mjs` on the manifests, generates the `audit-manifest.mjs`
  checklist, and records the Alpha receipt. After any public-interface change,
  `impact-audit.mjs` computes every downstream logical and direct-citation
  consumer from touch snapshots and requires an Alpha disposition. **Diff
  `pre-author → post-6b`, both engine snapshots** — a baseline after authoring,
  or a defaulted `--to`, makes the diff empty by construction: the gate
  confirms instead of checking.
  `level-coverage.mjs --verify-current-context` is the hard receipt gate and the
  terminal stage runs it: every scoped item needs provenance, every proof-bearing
  item a merged contract, and both judge lanes a current verdict — cast against
  the current frozen pair context, or against byte-identical text of that item
  (owner, 2026-08-06). A repaired item always rejudges, since its own
  `item_sha256` changed; only its unedited page-mates are spared. A current
  rejection is a hard stop unless Alpha recorded an exact-hash adjudication:
  `confirmed_fatal` blocks closure, `confirmed_nonfatal` and `false_positive`
  may clear it under the 30-second rule. `literature-derived` and `ai-altered`
  items need a reader-visible `sources.references` URL. The gate also requires
  the current `spine-audit.mjs` receipt for the proof-bearing items among the 100
  largest dependency cones — it lapses on any mathematical-content change, and is
  what stops a level resting on an unreviewed high-fan-out proof. An
  `external_dependency` record is required for any `proved_here: false` fallback.

- **Obvious published-dependency repair (owner, 2026-08-01).** Narrowly
  overrides the read-only boundary: Beta and Alpha may repair a **published item
  the current level depends on** when its Definition, Statement, Fact, citation or
  equally load-bearing prose is an unambiguous falsehood. Not a licence to choose
  between conventions, improve exposition, close a 30-second gap, or extend. The
  replacement is either (a) the exact statement with its conventions and
  hypotheses, checked against a reputable source and recorded with its working
  URL, or (b) a directly checkable elementary correction written into the repair
  record — never an unsupported nontrivial theorem. Take a dedicated touch
  snapshot before the first edit, record the error, replacement, validation route
  and provenance change in `research/<run>-published-dependency-repairs.md`, make
  the smallest correction, never rename or remove an id, then run
  `impact-audit.mjs` from that baseline and resolve every consumer. **No author
  certifies its own repair** — a Beta's is certified by Alpha, Alpha's by a
  Step-6 reader. Delete stale `verification.judge` and `verification.audited`;
  both lanes rejudge the final text, and the delegated public gate is
  `verification.verified` with `scope: published-dependency-repair` and
  `delegated_by: owner`, which `depcheck` recognizes. A `proved_here: false` item
  instead gets a fresh
  `sources_checked` record. If the correction or any consumer needs a debatable
  restatement, a new theorem, a deletion, a changed reading order, or leaves an
  impact queue open, it is not "obvious": report it for the owner. Full protocol:
  `WORKFLOW.md`, `LEVELS.md` §6.

- **Published-page audit workflow (owner, 2026-08-02).** `AUDIT-WORKFLOW.md` is
  normative for the retro-audit of published pages. Inside audit scope only, it
  supersedes three standing rules by owner decision — stated in full at its §2,
  summarised here so no future session mistakes them for drift:
  1. **Legacy provenance IS retro-tagged**, by audited determination with a
     durable per-item ledger row, never by guessing. Uncertainty falls toward
     neither a *sourced* label nor `ai-generated`: the latter needs a positive
     finding of novelty, a recoverable restatement is `ai-altered`, and an
     undecidable case escalates to Alpha.
  2. **The audit lineup** is in the model table above (owner, 2026-08-08). The
     refuter's routing to DeepSeek is load-bearing — the only cross-family reader
     on the audit side — and the certifier stays agentic because certifying a
     source-backed repair means fetching the source. The DeepSeek lane is
     tool-less, so Alpha assembles a refuter's context into its `--task` file and
     `dispatch.mjs` refuses a refuter dispatched without one. Alpha recovers the
     durable prior-session audit record before acting.
  3. **The repair delegation extends** to citation-precision repairs, provenance
     retags and debatable restatements, Alpha adjudicating. Deletions, id changes
     and reading-order changes remain owner-only.

  **A7 is an exception to the build's whole-level Step-7 sweep** (owner,
  2026-08-08): A2/A6 already read the wave, so A7 and any A8 repair rejudge only
  the ids in `wave<k>-rejudge-targets.json`; provenance-only retags are not judge
  targets. A public-interface repair repeats impact closure and refreshes a
  targeted rejudge receipt **for the changed item only**, validated by
  `apply-judge-stamps` before the stamp is written (§9). The stamp is
  `verification.verified`, `scope: published-audit`, `delegated_by: owner`. Every
  build safeguard carries over, step 8's fatal-only rule included. **Already-tagged content is never audit scope** (owner,
  2026-08-02, standing): an item carrying both component-provenance tags is not
  re-audited, and `rounds.mjs --audit-batches` excludes it at scope generation.

## Presentation (owner-approved 2026-07-24, FROZEN — do not restyle)

The owner has approved the aesthetics and asked that they persist across ALL
future sessions. Hard constraint: do NOT change the visual style, layout,
colours, spacing, typography, or flowchart look in EITHER repo without an
explicit, in-session owner instruction to restyle. Adding content is always
fine; restyling is not. New content follows SCHEMA.md's layout rules so it
renders identically to what exists. The implementation lives in the **app repo**
and is the source of truth — read it, and `ARCHITECTURE.md` §7 which tables it,
before any rendering change. The owner-instructed restyles of the `/library`
INDEX (2026-07-26, 2026-07-27) and the 2026-08-14 category hue-family table are
frozen too.

**Three ranked citation tiers** (`ARCHITECTURE.md` §7 tables colour, underline
and glyph), none relying on colour alone: ordinary citation < **forward
reference** < **not proved here** — the bottom tier OUTRANKS the middle one.
**Sky and fuchsia are reserved** for the top two tiers and used nowhere else;
later additions (search, issue reporting, navigation) were built from the
existing vocabulary and introduce no new accent. Marker text always accompanies
colour.

Content-side hooks for the tiers, and the rules that are correctness rather than
taste:

- **Forward references** (owner-authorised 2026-07-25): `forward_refs` in item
  frontmatter (SCHEMA §3) plus `tools/fwdcheck.mjs` (`ARCHITECTURE.md` §3.3). A
  forward reference's CONSEQUENCES are marked the same way — a consequence may
  use it in its own proof.
- **The ‡ tier** (owner instruction 2026-07-25): `proved_here: false` in
  frontmatter, the `not-proved-here` category, `tools/extcheck.mjs`
  (`ARCHITECTURE.md` §3.4). The accent propagates along `deps` so consequences
  are marked too, with an always-visible note that the dependency is not
  developed here. It serves the `deferred-*` catalogue pages, the choice and
  independence citations, and the documented external fallback above — **do not
  delete this machinery**; it is what makes that fallback honest to readers.
- **Flowcharts are BIRDS-EYE:** only `landmark: true` items are nodes; edges are
  the transitive reduction of nearest-landmark-ancestor. Curate landmarks; never
  revert to one-node-per-item.
- **The verification caption stays**, saying items not AI-judged were
  owner-verified, NOT failures; a bare "judge 31/34" headline is banned.
- **Draft safety, both correctness:** drafts never reach the public search index;
  corpus loading is memoised, rendering is not. Both mechanisms, and the
  caption's exact wording: `ARCHITECTURE.md` §7.1.

If tempted to "improve" the look: STOP. Only the owner reopens it.
