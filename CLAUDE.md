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
4. **Step-7 paired skeptical judge** — once, after step 6, on final text, for
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
| Beta (scaffold + Step-5 author), Step-6 `reader`, Alpha's `refuter` | **Claude Opus 5** | claude CLI, `xhigh`, **1M** context (`[1m]` id) |
| build `alpha` | Claude Opus 5 | claude CLI, `xhigh`, 1M, web tools |
| `scaffolder`, audit `orchestrator`, `audit-beta`, `audit-alpha` | Claude Opus 5 | claude CLI, `xhigh`, 1M |
| `mechanic` (post-adjudication bookkeeping) | Claude Opus 5 | claude CLI, **`medium`**, 1M |
| audit `certifier` / independent reader | Claude Opus 5 | claude CLI, `xhigh`, 1M, read-only |
| `audit-refuter` | DeepSeek V4 Pro | direct API, `max` (its spelling of `xhigh`), tool-less |
| paired judges, build and audit | DeepSeek V4 Pro + Claude Opus 5 | `JUDGE_LINEUP=deepseek+opus` |

**Binding for every future session** (owner, 2026-07-31/08-08/08-20/08-23). Never
silently substitute another model or a smaller window. **The 1M window is the
`[1m]` suffix on the model id and nothing else** — the claude CLI has no
`model_context_window` knob, so a bare `claude-opus-5` runs the standard window
with no other symptom. `tools/dispatch.mjs --dry-run --json` attests the table.
The `codex` runner is kept with no role routed to it; `deepseek+terra` and
`deepseek+sonnet` stay selectable and unselected.

**Swap a model in `tools/models.mjs`** (2026-08-23) — the registry of every id,
its runner and family, the `LANES` assignment and `JUDGE_LINEUPS`. Moving every
agent role is one edit to `LANES.agentic`; a new id is one edit to `MODELS`.
**The registry does NOT own caps, sandboxes, effort, web access or working
directories** — those belong to the role and stay in `dispatch.mjs`, so a lane
swap cannot silently move them. `preflight.mjs` keeps a literal lineup copy on
purpose (it must not import a tool it is checking is runnable);
`tools/autopilot/test/model-registry.test.mts` fails if that copy drifts, if
`[1m]` disappears, or if `crossFamily` resolves to `agentic`'s family.

**DeepSeek is the only cross-family reader in either workflow** — the step-7
judge lane and `audit-refuter`. Every other lane is Anthropic, so Alpha, the
Betas it audits, the `reader`/`refuter` it dispatches and the Opus judge whose
rejections it adjudicates are one family. Opus/Alpha agreement is not
corroboration; a DeepSeek-only rejection is the one finding no other lane could
have produced. **No agent edits mathematical content after step 9.**

**Two live risks.** *Quota* — every agent lane and the Opus judge draw on one
Claude subscription, so one session limit can null a sweep and stall the
dispatched roles together. A cap is a ceiling the engine may use, never a quota
it must spend: **if lanes die on the session limit, lower the caps rather than
re-spending the loop.** *An unproven judge* — `tools/judge.mts` sets an injection
test as the adoption bar for a new judge model, and none has been run against
Opus at the frozen prompt.

Read-only is enforced per runner, never by asking: an `--allowed-tools` allow
list on the claude runner (default-deny — a deny list alone is escapable through
a subagent, measured 2026-08-05), tool-lessness by transport on DeepSeek,
`--sandbox read-only` on Codex if reopened. `dispatch.mjs --check-read-only`
prints it. The claude runner's is a tool-layer allow list, not a kernel sandbox,
and is only as good as the tool list.

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
  --manifest-only`. **Beta and reader caps 9**, alpha cap 3, each Alpha ≤3
  batches.

- **Step-5/6 ownership (owner, 2026-07-31).** The Betas that scaffolded author
  all Step-5 content and at Step 6 may not audit anything they authored; Alpha
  assigns independent readers and adjudicates.

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
  steps 3 and 6a/6b, outputs namespaced; assignment decided at `2-assign` and
  validated by `alpha-groups.mjs`, which **never lets a category that fits inside
  one Alpha be split**. The **lead Alpha** alone owns steps 4, 6c, 8, 9, the
  receipts and step 10. **Step 4's splice is not Alpha's**: `splice-plan.mjs`
  transcribes ids mechanically and its refusal is what Alpha adjudicates.
  `LEVELS.md` §Actors, §"Step 4"; `ARCHITECTURE.md` §6.

- **Alpha repairs wrong mathematics (owner, 2026-08-16).** At steps 6 and 8 a
  wrong proof is Alpha's to fix, not to report. Four authorised repairs, Alpha
  picking whichever the defect needs: **rewrite part of the proof**; **write the
  whole proof** where its construction rather than its wording is wrong;
  **correct the Statement, Definition or title** where what is written is false
  or claims more than the argument gives; **add intermediate lemmas**. If none
  closes the defect honestly, narrow or withdraw the claim; never inflate a
  dependency. The *stage* is what is bounded — step 8 needs a `confirmed_fatal`
  row first — and inside that licence all four are open and uncapped. **At step 3
  only the last two apply.** "A proof rewrite is authoring" describes which repair
  is needed; it is not a prohibition.

- **Alpha adjudicates judges; the 30-second threshold (owner, 2026-07-31).**
  Alpha is the sole adjudicator of a paired-judge rejection: it reads the frozen
  verdict and the current disk text, records `confirmed_fatal` /
  `confirmed_nonfatal` / `false_positive`, and applies any permitted repair. The
  engine runs the gates and owns the rejudge. **Every rejection is adjudicated,
  not the interesting ones** — `step8-guard` checks only that edits were
  licensed; the closure gate checks that rejections were answered. A gap between
  proof steps a competent reader closes in **30 seconds is nonfatal**: record or
  polish it, never call it fatal. It covers gaps *between steps* — a defect in the
  Statement itself is never 30-second. **At step 8 the polish is withdrawn.**

- **Alpha proof-refuter delegation (owner, 2026-07-31).** For every Alpha-n
  audit, Alpha dispatches read-only proof-refuters held to the paired judges'
  standard: report only a concrete false claim, unlicensed inference, missing
  hypothesis, or inaccurate citation, and inspect the supplied dependency before
  alleging it is too weak. **A refuter never writes content or applies a fix**;
  Alpha alone adjudicates every finding from disk.

- **Step 8 is fatal-only (R1; owner, 2026-08-03).** Only a `confirmed_fatal`
  adjudication licenses an edit. A `confirmed_nonfatal` or `false_positive`
  closes the rejection on its exact-hash ledger row with **no content, page,
  frontmatter, contract, impact, or judge mutation**. Cosmetic polish and
  30-second tidying belong at **step 6**, before the text is frozen: any edit is
  a material rewrite under SCHEMA §3, so a step-8 polish voids
  `verification.judge`, forces a rejudge and resamples a refuter — an unbounded
  loop converging on nothing. **Fatal repairs are deliberately uncapped:** a
  proof that keeps yielding real fatal defects is either converging on
  correctness or is false, and both must run to conclusion. The twice-touched
  escalation stays advisory. `LEVELS.md` §"Step 8".

- **Step-10 fatal-error report and sole pause (owner, 2026-07-31).** Step 9 does
  not pause the build. At the end of step 10 the lead Alpha accounts for every
  fatal error found and fixed, grouped by defect type (invalid inference,
  incorrect dependency citation, false or overstrong statement, missing
  hypothesis or choice scope, invalid witness) and by location (title/Statement,
  proof, Facts, Remark, page prose), each naming the id and its disposition.
  Evidence is the ledgers; concision must not omit a fatal defect.

- **The defect ledger (owner, 2026-08-16).** A disposition and its row in
  `research/defect-ledger.jsonl` are one act — 6b/6c, step 8 (one row per
  `confirmed_fatal`), step 9. Step 10 authors none and runs `defect-ledger.mjs`
  `stats` + `render`. The `check` gate (steps 8–10) enforces it;
  `research/DEFECT-LEDGER.md` is generated, never edited.

### Paired skeptical judges (owner, 2026-07-31; second lane 2026-08-23)

At step 7 run `deepseek-v4-pro` with `claude-opus-5[1m]` through
`tools/judge.mts`, selected by `JUDGE_LINEUP=deepseek+opus`. The Opus lane is a
fresh `claude -p` per call with an **empty temporary working directory** and
`--allowed-tools ""`, so the frozen prompt is its only context — the empty
workdir matters because the repo root carries this file, and a judge that has
read the build rules is no longer reading the frozen prompt alone. Both lanes
read one byte-identical frozen prompt as adversarial refuters of proofs and
dependency citations. **Both lanes capped at 14** (owner, 2026-08-20) — **28**
combined. `ARCHITECTURE.md` §5.

**The judge's context unit is the A/B PAIR:** the item's page and its `-examples`
companion in full, plus exactly the pages that page declares in `requires` and
actually cites.

Rows from unselected lanes stay append-only evidence and never satisfy current
coverage. **A level judged under `deepseek+terra` is not judged now**: coverage is
per frozen context *and* per configured lane.

- Record a paired pass in `verification.judge` only when **both** models pass the
  text — written mechanically by `apply-judge-stamps.mjs`, enforced by the
  `judge-stamps` gate at `10-stamps-v2`/`10-close-v2` (an adjudicated rejection
  never stamps). Commit the ledger at `research/<run>-judge.jsonl` and compare the
  models' findings at step 10 / A10. A proof refuted or repaired more than once
  escalates per `WORKFLOW.md` §"Twice-touched proofs".
- Adjudicate in `research/<run>-judge-adjudications.jsonl` as
  `{id, model, context_sha256, outcome, defect_type?}` — `outcome` is
  `confirmed_fatal`, `confirmed_nonfatal` or `false_positive`; fatal types are
  `logic`, `dependency_citation` or `other`.
- `tools/judge-sweep.mjs` keeps the lanes in independent file-backed pools; each
  model advances when one of *its own* slots frees, every call is its own
  process, and a capacity refusal is a null verdict, not a verdict.
  `JUDGE_CONCURRENCY_<MODEL>` (here `JUDGE_CONCURRENCY_CLAUDE_OPUS_5_1M_`) can
  lower a lane for a targeted replay, never raise it above the owner's value. On
  refusal or kernel-kill nulls, lower rather than re-spend the loop. Spend
  `judge.mts --preflight` before a sweep.
- Supply `--pages` with A-page ids; the sweep adds the B/examples items itself.
  **The initial Step-7 sweep takes every A page in the level** — both judges judge
  every item whether or not Alpha changed it. `--items` is for a later rejudge of
  an item repaired after that sweep, driven by `8-rejudge` from
  `<run>-judge-closure.json`; `--models` retries one lane without re-spending the
  other.

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
  result routes the item to an extra Alpha proof-refuter and requires an Alpha
  `risk_review`. **`--require-reviewed` belongs to Step 6, not Step 5:** only
  Alpha writes a `risk_review`, at Step 6, so demanding one at Step 5 can never
  pass. Full contract: `QUALITY-CONTROLS.md`.

- **Scope and blast-radius closure (owner, 2026-08-01).** Every level runs
  `content-policy.mjs` on the manifests, generates the `audit-manifest.mjs`
  checklist, and records the Alpha receipt. After any public-interface change,
  `impact-audit.mjs` computes every downstream consumer and requires an Alpha
  disposition. **Diff `pre-author → post-6b`, both engine snapshots** — a baseline
  after authoring, or a defaulted `--to`, makes the diff empty by construction, so
  the gate confirms instead of checking.
  `level-coverage.mjs --verify-current-context` is the hard receipt gate the
  terminal stage runs: provenance on every scoped item, a merged contract on every
  proof-bearing one, a current verdict from both lanes, the `spine-audit.mjs`
  receipt for proof-bearing items in the 100 largest dependency cones, a
  reader-visible `sources.references` URL on `literature-derived`/`ai-altered`
  items, and an `external_dependency` record for any `proved_here: false`.
  A verdict is current when cast against the current frozen pair context **or**
  against byte-identical text of that item (owner, 2026-08-06) — so a repaired
  item always rejudges and only its unedited page-mates are spared. A current
  rejection is a hard stop unless Alpha recorded an exact-hash adjudication:
  `confirmed_fatal` blocks closure; `confirmed_nonfatal` and `false_positive` may
  clear it under the 30-second rule.

- **Obvious published-dependency repair (owner, 2026-08-01).** Narrowly overrides
  the read-only boundary: Beta and Alpha may repair a **published item the current
  level depends on** when its Definition, Statement, Fact, citation or equally
  load-bearing prose is an unambiguous falsehood. Not a licence to choose between
  conventions, improve exposition, close a 30-second gap, or extend. The
  replacement is either the exact source-checked statement with its conventions
  and hypotheses, or a directly checkable elementary correction — never an
  unsupported nontrivial theorem. **No author certifies its own repair**: a
  Beta's is certified by Alpha, Alpha's by a Step-6 reader. **If the correction or
  any consumer needs a debatable restatement, a new theorem, a deletion, a changed
  reading order, or leaves an impact queue open, it is not "obvious" — report it
  for the owner.** Snapshot, repair record, rejudge, stamp
  (`verification.verified`, `scope: published-dependency-repair`,
  `delegated_by: owner`) and impact closure: `WORKFLOW.md`, `LEVELS.md` §6.

- **Published-page audit workflow (owner, 2026-08-02).** `AUDIT-WORKFLOW.md` is
  normative for the retro-audit of published pages. **Every build safeguard
  carries over, step 8's fatal-only rule included.** Inside audit scope only it
  supersedes three standing rules, stated in full at its §2: legacy provenance
  **is** retro-tagged by audited determination with a durable ledger row (never by
  guessing; `ai-generated` needs a positive finding of novelty, a recoverable
  restatement is `ai-altered`, undecidable escalates to Alpha); the audit lineup
  is the model table above; and the repair delegation extends to
  citation-precision repairs, provenance retags and debatable restatements, Alpha
  adjudicating. **Deletions, id changes and reading-order changes remain
  owner-only.** The DeepSeek refuter is tool-less, so Alpha assembles its context
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
