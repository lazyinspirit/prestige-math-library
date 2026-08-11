# prestige-math-library — session instructions

`AGENTS.md` is a non-normative adapter for non-Anthropic agents and points here;
this file remains the canonical agent instruction file.

This repo is the **public math library** served at
`app.prestige-intelligence.cc/library` by the Prestige Intelligence app
(bind-mount; see README §How serving works). House style for proofs:
`items/lem-cauchy-bounded.md` is the approved exemplar.

## Normative docs — read the one governing what you are about to do

| doc | canonical for |
|---|---|
| `SCHEMA.md` | the item/page contract: frontmatter, layout, what counts as a material rewrite |
| `LEVELS.md` | the per-level build, step 0 → 10: actors, artifacts, the ten gates, self-contained scope, the twice-touched escalation |
| `AUDIT-WORKFLOW.md` | the published-page retro-audit, step A0 → A10: retro-tagging, citation precision, blast radius, waves and batches, decisions D1–D5 / R1–R3 |
| `ARCHITECTURE.md` | every gate, ledger, brief and visual tier — how each works and which failure it prevents. Read before adding or changing a mechanism |
| `QUALITY-CONTROLS.md` | the proof-contract, finite-smoke and risk-routing contract in full |
| `UNATTENDED.md` · `UNATTENDED-AUDIT.md` | `run-level.mjs` / `run-wave.mjs`: halt codes, preflight, gate tables, dispatch roles, systemd units |
| `WORKFLOW.md` | end-to-end runbook, prompt to publish; serving over SSH; the gotchas |
| `README.md` | provenance, judge lineup, citation rules |
| `briefs/` | the actual subagent prompt text (`LEVELS.md` describes them) |

The subject-specific doc wins over `WORKFLOW.md` where they differ. Neither
unattended driver ever publishes: step 10 / A10 is the sole owner pause.

## The publish path

1. **Author as `status: draft`** per SCHEMA.md. Session-authored content is
   `origin: session`; never fabricate scraped sources (use `references`). Every
   mathematical-content item declares separate reader-facing
   statement/construction and proof/verification provenance.
2. **Precheck (mechanical, free)**, from the repo root:
   `node tools/tsx-run.mjs tools/precheck.mts`. Bare = all items, or pass
   specific files. On REPAIR output, adopt the printed canonical stratification
   into the file and re-run until clean — the repo stores the strictly
   stratified form, so a step citing phase-k steps sits in phase k+1. Record
   `verification.precheck: pass`.
3. **Step-6 Alpha-n audit of the WHOLE level, when publishing a level.**
   Independent readers verify every proof step and in-batch dependency citation
   in content they did not author; Alpha audits their fixes from disk, then
   audits cross-batch and cross-level citations. Fatal includes a title or
   Statement asserting more than the proof gives — the judge reads Statements and
   cannot see a false title. Mathematical content requires this audit before
   publish **even when judged**. `LEVELS.md` §"Step 6".
4. **Step-7 paired skeptical judge** — runs once, after the step-6 audit, on
   final text, for **every item in the completed level**; authors never judge.
   See §"Paired skeptical judges".
5. **Owner audit** gates `status: published` (set `verification.audited`).
   Flipping status is the publish action — the live site reads this directory.
6. **Commit + push** (`main`, conventional-commit style). NO Co-Authored-By
   trailers, ever. GitHub is backup only, never on the serving path.

## Preview

The `/library` renderer is built in the app repo (routes under
`web/app/library/`, reading env `MATH_LIBRARY_DIR`). Local preview: run the app
dev server on `:3001` and SSH-tunnel per `WORKFLOW.md` step 6. The signed-in
owner sees drafts with a DRAFT banner; the public sees only `published`.

## Model lineup — the single source of truth

Generation for this library **NEVER** goes through the public billed pipelines,
and a subscription account is **never** wired into the worker service.

| lane | model | runner and settings |
|---|---|---|
| Beta (scaffold + Step-5 author), independent Step-6 `reader`, Alpha's `refuter` subagents, `orchestrator` | **GPT 5.6 Sol** | Codex subscription, `xhigh`, **1,000,000-token** context |
| **build `alpha`** (owner, 2026-08-10) | **Claude Opus 5** | `claude` runner, `xhigh`, 1M window via model id `claude-opus-5[1m]` |
| `audit-beta`, `audit-alpha` | GPT 5.6 Sol | Codex subscription, `xhigh`, 1M context |
| audit `certifier` / independent reader | GPT 5.6 Terra | Codex, `xhigh`, 1M context, read-only |
| `audit-refuter` | DeepSeek V4 Pro | direct API, `max` (its spelling of `xhigh`), tool-less |
| paired judges, build and audit | DeepSeek V4 Pro + GPT 5.6 Terra | `JUDGE_LINEUP=deepseek+terra` |

**These settings are binding for this and every future session** (owner,
2026-07-31 for the Sol default; 2026-08-10 for build Alpha; 2026-08-08 for the
audit lineup). Where a launcher exposes a context-window field, set it
explicitly to `1000000`; never silently substitute another model or a smaller
window. `tools/dispatch.mjs` is the mechanical expression of this table, and
passes every setting explicitly rather than inheriting it: Codex lanes get
`model_reasoning_effort="xhigh"` and `model_context_window=1000000` because the
temporary `CODEX_HOME` holds only `auth.json` and no `config.toml`; the claude
lane gets `--effort xhigh` because `buildClaude` defaults that runner to `high`,
and carries its window in the `[1m]` model id because that CLI has no window flag.

**Scope of the Alpha exception:** the BUILD `alpha` role only, and it buys
cross-family independence — Alpha adjudicates the DeepSeek and Terra judges.
Alpha's `refuter` subagents, the Step-6 `reader`, and the published-audit
`audit-alpha` adjudicator are NOT covered and stay on Sol. The authoring role
uses Sol, never Terra. Read-only is enforced per runner, never by asking:
`--sandbox read-only` on Codex, tool-lessness by transport on DeepSeek, an
`--allowed-tools` allow list on the claude runner.
`dispatch.mjs --check-read-only` prints it.

## Hard rules

### Operating

- **No permission prompts of ANY kind (owner, 2026-07-30; broadened
  2026-08-11).** This binds the orchestrator and every current and future
  subagent. The 2026-08-11 wording is the owner's: *"Do not ask and do not let
  any agents ask for shell command permissions, edit permissions, git
  permissions, or any permissions whatsoever."* Run routine repository reads,
  writes, gates, commits and agent dispatches inside the workspace sandbox, and
  choose non-escalated command forms. On runtimes exposing
  `dangerouslyDisableSandbox`, pass it on **every** Bash call as the existing
  unattended-build backstop; on runtimes without it, stay within their
  already-granted workspace permissions. An orchestrator is responsible for the
  prompts its agents raise as well as its own: every brief it writes carries this
  rule. If an indispensable operation truly cannot be expressed without new
  authority, **stop and record a blocker** in the run record — that is the escape
  hatch, not a prompt. Committing to a feature branch is routine; pushing,
  publishing, and anything else outward-facing remains a separate owner decision,
  unchanged by this rule.

- **Context continuity and compaction (owner, 2026-08-03).** Once active context
  reaches **60%**, save durable session history at the next safe boundary —
  after completing the current task or gate, never by abandoning work
  mid-operation. The orchestrator updates the active run's
  `research/<run>-RESUME.md` with the objective, current step and frozen-text
  state, owner policy changes, selected batches, active agents and ownership,
  material files and gate results, ledgers, open risks, exact next action, and
  the working-tree baseline — concise and factual, never credentials, tokens or
  copied transcripts. Then compact, immediately read the record back, and verify
  relevant disk state before continuing. A checkpoint or compaction is not an
  owner pause and must not delay a stage once the state is safely recorded.
  **Beta and Alpha use the same 60% rule** — a Beta appends its checkpoint to its
  namespaced batch notes, Alpha to its namespaced report/handoff — and each
  resumes from its own checkpoint without waiting for an orchestrator replay.

- **Keep the normative docs current (owner, 2026-07-27).** `CLAUDE.md`,
  `WORKFLOW.md`, `LEVELS.md`, `ARCHITECTURE.md` and `AUDIT-WORKFLOW.md` are
  updated **in the same commit as the change they describe**; the trigger list is
  `ARCHITECTURE.md` §9. Verify against the code, never from memory: when a doc
  and the code disagree, the code is the truth and the doc is the bug.

### Roles, decisions and gates in a build

- **Beta batch capacity (owner, 2026-08-01).** Each Beta scaffolds and authors at
  most **two A/B pairs**. Step 0 keeps every batch manifest at that cap, and
  `content-policy.mjs --manifest-only` rejects an in-flight manifest with more
  than two A pages. The bound creates no dependency between otherwise independent
  pairs and does not change their legal build order.

- **Step-5/6 ownership (owner, 2026-07-31).** The Betas that scaffolded the
  batches personally author all Step-5 content after Step 4, and at Step 6 are
  excluded from auditing anything they authored; Alpha assigns independent audit
  readers and adjudicates their findings.

- **Step-3 decisions belong to the orchestrator (owner, 2026-07-30).** It verifies
  each Beta recommendation from disk and then **approves or declines it using best
  judgment**, never handing routine scaffold adjudication back to the owner.
  Priority: (1) mathematical accuracy and correct dependency citation are
  non-negotiable; then (2) minimize forward references; then (3) preserve
  mathematical richness. Investigate uncertainty before deciding, and log the
  decision plus rationale.

- **Alpha reviews scaffold breadth and depth at step 3 (owner, 2026-08-11).**
  Alpha is spawned at **step 3**, not step 4. After the orchestrator settles the
  Beta recommendations, Alpha reads every pair's `.pages.json`, `.notes.md` and
  `.coverage.json` together and returns a `sufficient` / `insufficient` verdict
  per pair in `research/<run>-alpha-step3-scaffold-review.md`, naming for each
  `insufficient` the exact results to add and the source that carries them.
  Alpha authors nothing at this stage and edits no batch file; the orchestrator
  routes findings to the owning Beta and Alpha re-checks before step 4 splices.
  Step 3 is the last point where fixing thinness costs a scaffold edit rather
  than a rewrite. The review criteria are in `LEVELS.md` §"Step 3" and
  `briefs/alpha.md` §"Stage 0".

- **Alpha adjudicates judges, and the 30-second threshold (owner, 2026-07-31).**
  Alpha is the sole adjudicator of a paired-judge rejection: it reads the frozen
  verdict and the current disk text, confirms a fatal defect, confirms a nonfatal
  defect, or records a false positive, applies any permitted draft repair, and
  selects the exact changed items for rejudge. The orchestrator runs gates and
  maintains ledgers but never substitutes its own adjudication for Alpha's.
  In any Alpha audit or adjudication, a logical gap between proof steps that a
  competent human reader can close in **30 seconds is nonfatal**: Alpha may
  record or polish it, but must not call it a fatal proof defect or start a fatal
  repair cycle on that basis. **At step 8 the polish is withdrawn** — see below.

- **Alpha proof-refuter delegation (owner, 2026-07-31).** For every Alpha-n audit,
  Alpha dispatches read-only proof-refuter subagents held to the paired judges'
  skeptical standard: report only a concrete false claim, unlicensed inference,
  missing hypothesis, or inaccurate citation, and inspect the supplied dependency
  before alleging it is too weak. **A reader subagent never writes content or
  applies a fix**; Alpha alone adjudicates every finding from disk — confirm,
  refute with evidence, or apply and gate the repair.

- **Step 8 is fatal-only (R1; owner, 2026-08-03).** At build step 8, only a
  `confirmed_fatal` adjudication licenses an edit to an item. A
  `confirmed_nonfatal` or `false_positive` closes the rejection on its exact-hash
  ledger row with **no content, page, frontmatter, contract, impact, or judge
  mutation** — the rule `AUDIT-WORKFLOW.md` §9 already states for audit A8, now
  binding on the build and mechanically enforced in both. Cosmetic polish and
  30-second-gap tidying belong at **step 6**, before the text is frozen, where no
  verdict exists to void: any edit is a material rewrite under SCHEMA §3, so a
  step-8 polish voids `verification.judge`, forces a rejudge, and resamples a
  refuter that surfaces a fresh nitpick each stochastic run — an unbounded loop
  converging on nothing. **Fatal repairs are deliberately uncapped:** a proof that
  keeps yielding real fatal defects is either converging toward correctness or is
  actually false, and both must run to conclusion. The twice-touched escalation
  stays advisory.
  *Mechanism:* every adjudication row records `item_sha256`, the sha256 of the
  normalized item text (verification block excluded) at adjudication time. Take a
  dedicated `touchlog.mjs` baseline immediately before step-8 adjudication
  begins, then run `tools/step8-guard.mjs` — every item changed since that
  baseline must be licensed by a `confirmed_fatal` row recorded against the
  pre-edit text state (error codes `nonfatal-edit`,
  `judge-adjudication-unhashed`). Pre-R1 ledgers lack `item_sha256`; those levels
  are published rather than re-gated.

- **Step-10 fatal-error report and sole pause (owner, 2026-07-31).** Step 9 is a
  sweep only and does not pause the build. At the end of step 10, before the
  publication/owner-audit pause, the orchestrator gives the owner a concise but
  complete account of every fatal mathematical error encountered and fixed,
  grouped by defect type (invalid inference, incorrect dependency citation,
  false or overstrong definition/theorem, missing hypothesis or choice scope,
  invalid witness) and by location (title/Statement, proof/refutation,
  Facts/dependencies, Remark, or page prose/summary). For each, name the affected
  id/file and its disposition. The Beta/Alpha/judge ledgers remain the evidence
  source; concision must not omit a fatal defect.

### Paired skeptical judges (owner, 2026-07-31; second lane changed 2026-08-04)

At step 7, run `deepseek-v4-pro` with `gpt-5.6-terra` through `tools/judge.mts`,
selected by `JUDGE_LINEUP=deepseek+terra` — the default in `judge.mts`,
`judge-sweep.mjs`, `level-coverage.mjs` and the audit driver. DeepSeek reads
`DEEPSEEK_API_KEY` from the environment or the app repo's `.env`, located by
`tools/paths.mjs`; Terra is a fresh ephemeral Codex process in an empty
temporary working directory, read-only, `xhigh`, explicit 1,000,000-token
window, so the frozen prompt is its only context. `--parallel` runs both lanes
concurrently on a byte-identical frozen prompt and preserves the injection-test
record. Both must read proofs and dependency citations as adversarial refuters.

**The judge's context unit is the A/B PAIR:** the item's own page and its
`-examples` companion in full, plus exactly the pages that page both declares in
`requires` and actually cites.

DeepSeek supplies the cross-family screen; Terra is an independent
subscription-backed lane but shares the GPT family with audit Alpha, so weight
same-family agreement accordingly. Rows from retired second lanes remain
append-only evidence and never satisfy current Terra coverage.

- Record a paired pass in `verification.judge` only when **both** models actually
  pass the text; commit the full verdict ledger at `research/level<n>-judge.jsonl`
  and compare the two models' findings at step 10 / A10. A proof refuted or
  repaired more than once escalates per `WORKFLOW.md` §"Twice-touched proofs".
- Adjudicate a rejection from either model in
  `research/level<n>-judge-adjudications.jsonl` as
  `{id, model, context_sha256, outcome, defect_type?}` — `outcome` is
  `confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`; fatal types are
  `logic`, `dependency_citation`, or `other`. At step 10 compare agreement,
  model-only rejections, nulls, and owner-confirmed fatal findings.
- `tools/judge-sweep.mjs` keeps the lanes independent in file-backed,
  cross-process pools capped at **16 concurrent calls each, 32 combined** (owner,
  2026-08-05); each model advances when one of *its own* slots frees. Do not
  raise either cap: every lane call is its own node+tsx process, and a capacity
  refusal — from a subscription or from the kernel — is a null verdict, not a
  verdict. Its scheduling, attestation, telemetry and retry semantics are
  `ARCHITECTURE.md` §5; the memory ceiling behind the cap is in
  `UNATTENDED-AUDIT.md`.
- Supply `--pages` with A-page ids; the sweep adds the corresponding B/examples
  items automatically, because coverage is for the whole pair. **For the initial
  Step-7 sweep, supply every A page in the completed level** — both judges judge
  every item whether or not Alpha changed it at step 6. `--items` is reserved for
  a later Alpha-selected rejudge of an item materially repaired after that
  complete sweep; `--models` retries one model's incomplete verdicts without
  spending a call on an already-complete other-model verdict.

### Mathematical content

- Item ids are IMMUTABLE on `main`; renames go through `aliases` (SCHEMA §2).
- A published page listing a draft item is a hard error, never a silent skip.

- **Self-contained scope; build the machinery; split the page (owner,
  2026-08-01, extended 2026-08-11).** No item rests on a result the library has
  not established. Beta searches reputable sources for the exact statement of any
  well-known result it needs, then proves that result from available library
  dependencies. **If that fails, Beta builds the missing prerequisite definitions
  and theorems.** Dropping an important result for want of a definition or lemma
  that could have been written is no longer a permitted disposition;
  `deferred` / `out-of-scope` is reserved for material genuinely belonging to
  another page's topic, or resting on a whole subject area the library has not
  reached (a computability level, a measure-theory level).
  **An A page over 60 items is SPLIT** into two or more A pages, each with its own
  B companion, summary, and place in reading order. That ceiling is the pressure
  valve making the machinery affordable, and splitting is never dropping — every
  result survives, it just gets a better home. `validate-plan.mjs` enforces it as
  error code `size` at steps 0, 2 and 4; split before authoring, after it is a
  rewrite. A split mints new page ids and shifts plan order, so recompute order
  from `plan-spec.json` and never quote a remembered one (`LEVELS.md` §"`order`
  is not stable").
  **The narrow last resort** is a well-established, source-checked result whose
  local proof genuinely cannot be built in scope: a source-cited `rem-` item with
  `proved_here: false`, listed in `deps`, with the exact source, failed
  in-library route and necessity recorded in the batch notes and proof contract.
  "It would have taken three more lemmas" is not a licence to use it.
  `external_refs` is for non-load-bearing mentions only and cannot conceal a
  logical dependency; the fuchsia ‡ marker is the reader-facing tag. Foundational
  axioms already adopted — AC, countable choice, dependent choice — and
  independence facts about them remain separately permitted. A dropped item is
  deferred, not deleted: its `coverage.json` row is what makes it recoverable.
  Published items are not retrofitted. Full rule: `LEVELS.md` §"Step 2",
  `WORKFLOW.md` §"Self-contained scope".

- **Scaffold richness (owner, 2026-07-30).** For every A/B pair, Beta decomposes
  long proofs into focused intermediate lemmas and makes a pass for useful,
  cheaply proved corollaries. Never pad; never drop valuable results for
  ergonomics.

- **Source-grounded, dependency-closed scaffolding (owner, 2026-07-30; dependency
  provenance order 2026-08-01).** Before constructing an A/B scaffold, Beta
  searches reputable mathematical sources on the web for the relevant
  definitions, theorem and corollary statements, counterexamples and proof
  strategies, and records the sources and any convention disagreements in its
  notes. It has read access to the full published library and must open every
  published item it intends to cite. Every load-bearing dependency is established
  by published content or by an earlier item inside the pair; the only exception
  is the documented external fallback above.
  **Provenance order, and the proof's provenance never changes it:** Beta must
  never make an `ai-generated` Statement/Construction a load-bearing scaffold or
  proof dependency. `literature-derived` and `ai-altered` statements may be used
  freely, but an AI-adapted target is never auto-trusted — when its exact claim
  or conventions are in doubt, Beta or Alpha verifies it against reputable
  literature. A published item without component `provenance` (or the older
  `authorship` fallback) is `legacy-unclassified`: that is not evidence it is
  AI-generated, and not a reason to invent a label. Before using one, open it and
  either confirm from your own mathematical knowledge that the exact statement is
  an established result, or find reputable sources for that exact statement and
  its conventions; record which route was used in the batch notes. If neither
  route establishes confidence, do not make it load-bearing: prove it locally,
  rescope, or use the narrow documented fallback.

- **Generated-claim minimization (owner, 2026-08-01).** Source-backed statements
  are the default. Beta must not invent a theorem, proposition, definition, false
  statement, or mathematical remark merely to enrich a page or bridge an
  inconvenient proof. It may introduce only an easily and directly verifiable
  `ai-generated` corollary, or a checkable example/counterexample, and neither
  may be load-bearing: every AI-generated Statement/Construction is forbidden as
  a dependency target. Keep a would-be proof-decomposition lemma inline, or
  replace it with a literature-derived or AI-altered statement. A theorem in the
  dependency backbone needs literature support or a locally proved,
  source-grounded route.

- **Component provenance and AI-generated truth risk (owner, 2026-08-01).** Beta
  assigns `provenance.statement` and `provenance.proof` to **every**
  mathematical-content item it authors, and records a rationale for each in its
  batch notes. Statement means the Definition/Statement or the exact
  construction; proof means the local Proof, Verification, or Refutation. Each
  component is `literature-derived`, `ai-altered`, or `ai-generated`; proof may
  instead be `not-supplied`, and definitions/remarks use `not-applicable`
  (SCHEMA §3). A generated proof
  does not make a source-derived statement AI-generated; `proved_here` separately
  says whether the library supplies a complete proof. Beta treats an AI-generated
  **statement or construction**, not merely an AI-generated proof, as the
  truth-risk flag and searches for a counterexample before authoring or repairing
  it whenever there is concrete doubt. Alpha checks both labels at Step 6, retags
  each materially altered component, and independently probes an AI-generated
  claim, witness or refutation for counterexamples when its truthfulness is in
  doubt — repairing a proof does not establish the Statement. Never retrofit
  legacy items merely to satisfy this rule.

- **Source depth and the canonical-coverage harvest (owner, 2026-08-11).** In
  every scaffold: (a) each A/B pair is backed by **at least two independent
  treatments**, at least one a textbook, monograph, or full lecture-note set with
  a harvestable table of contents — Wikipedia and encyclopedia entries are
  convention tiebreakers only and can never be a pair's primary backing; (b) for
  every source, Beta records the exact chapter/section range it read and
  enumerates **that source's own section and named-result headings** over that
  range; (c) every harvested heading receives an explicit disposition —
  `included` (naming the scaffolded item id), `inline` (naming the item whose
  proof absorbs it), `already-published` (naming the published item), `deferred`,
  or `out-of-scope` — and the last two need a written reason about **that
  specific result**. The harvest is source-anchored rather than a minimum result
  count: a count would invite the padding scaffold richness forbids, while a
  disposition for every heading a source itself contains cannot be satisfied by
  inventing anything. The artifact is `research/<run>-batch-<i>.coverage.json`,
  gated by `tools/coverage-checklist.mjs` at **step 2** (where acting on a gap
  still costs a scaffold entry, not a rewrite) and again at **step 6**, where
  Alpha additionally checks the harvest is *faithful* to the sources — the gate
  only checks it is structurally complete and still true of disk. `LEVELS.md`
  §"Step 2"; error codes `ARCHITECTURE.md` §3.11b. Legacy pages are not
  retro-harvested.

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
  dependency discipline 2026-07-31).** Do not write AI-sounding labels or
  interpretive filler such as "Null definition:" or "the key bridge says". In
  every `[F#]`, `[A#]` or `[L#]` fact, state the cited definition/theorem itself:
  quote it exactly when practical, otherwise give the smallest faithful
  shortening — no changed domain, quantifier, hypothesis, direction or
  conclusion, and no invented converse. Never replace the proposition with a
  synthetic summary of what it is "for". If a dependency appears insufficient, do
  not inflate its restatement or add an unused edge: add the needed inline proof
  steps, reconsider the strategy, or reconsider whether the claim is true as
  stated. Binds the orchestrator and every scaffold, author, Beta, Alpha and
  judge agent.

- **No applied `\iota(n)` for natural numbers (owner, 2026-08-11, standing).** Do
  not write the canonical embedding explicitly around a natural number —
  `\iota(n)`, `\iota(0)`, `\iota(k!)`. Write the number: to a reader who has not
  just read the embedding lemma it looks like an undefined function. **Bare
  `\iota` is untouched and still correct** as the name of a basis inclusion in a
  universal property, as in a free group `(F,\iota)` with `\phi\circ\iota=\iota'`;
  only the *applied* form is banned. Enforced batch-scoped by `content-policy.mjs`
  error `notation-iota-applied`, so new content is gated and the legacy corpus is
  not retro-flagged — cleaning the ~350 published items that carry it is a
  separate owner decision, and a real mathematical edit per item, never a `sed`
  pass.

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
  `research/level<n>-batch-<i>.proof-contracts.json` for every proof-bearing item
  it owns, recording (a) the exact cited source clause and every step using each
  `[F#]`/`[A#]`/`[L#]` fact, (b) a stated input map covering every numbered step
  exactly once, and (c) an anchored disposition of empty, zero, one, degenerate,
  endpoint, nonempty-choice and both iff-direction cases. The orchestrator merges
  the batch files with `tools/merge-proof-contracts.mjs`, then runs
  `proof-contract.mjs --strict`, `finite-smoke.mjs` and `risk-report.mjs` after
  Step 5 and again after Step-6 repairs, before freezing Step-7 context. Finite
  smoke tests are bounded countermodel searches, never general proofs. A
  high/critical risk result routes the item to an additional Alpha proof-refuter
  and requires an Alpha `risk_review` record. **`--require-reviewed` belongs to
  the Step-6 run, not the Step-5 one:** a `risk_review` is a disposition only
  Alpha may write, and Alpha writes it at Step 6, so demanding one at Step 5 asks
  the authoring Betas for another role's record and can never pass on a fresh
  level. Step 5 computes the risk tiers; Step 6 requires their dispositions — the
  same split the audit carries at A4 versus A6. `QUALITY-CONTROLS.md` is the
  complete contract.

- **Scope and blast-radius closure (owner, 2026-08-01).** Every level runs
  `content-policy.mjs` on the batch manifests, generates the complete
  `audit-manifest.mjs` relationship checklist, and records the Alpha audit
  receipt. After any public-interface change, `impact-audit.mjs` computes every
  downstream logical and direct-citation consumer from touch snapshots and
  requires an Alpha disposition before the item can continue. After Step 7,
  `level-coverage.mjs --verify-current-context` is the hard receipt gate: every
  scoped item needs provenance, every proof-bearing item needs a merged contract,
  and both judge lanes need current verdicts — cast either against the current
  frozen pair context, or against byte-identical text of that item (owner,
  2026-08-06: repairing one item moves the whole pair's context hash, and the
  strict reading forced a rejudge of every untouched sibling). A repaired item
  always rejudges, since its own `item_sha256` changed; only its unedited
  page-mates are spared. A current rejection is a hard stop unless Alpha has
  recorded an exact-hash adjudication: `confirmed_fatal` blocks closure, while
  `confirmed_nonfatal` and `false_positive` may clear it under the 30-second
  rule. Source-backed `literature-derived` and `ai-altered` items need a
  reader-visible `sources.references` URL. The gate also requires the current
  independent `spine-audit.mjs` receipt for the proof-bearing items among the 100
  largest transitive dependency cones — it lapses on any mathematical-content
  change, and it is what stops a level silently resting on an unreviewed
  high-fan-out proof. The structured `external_dependency` record is required for
  any `proved_here: false` fallback. Never fabricate provenance for legacy items.

- **Obvious published-dependency repair (owner, 2026-08-01).** This delegation
  narrowly overrides the ordinary read-only boundary: Beta and Alpha may repair a
  **published item the current level uses as a dependency** when its present
  Definition, Statement, Fact, citation, or equally load-bearing mathematical
  prose is an unambiguous falsehood. It is not a licence to choose between
  conventions, improve exposition, close a nonfatal 30-second gap, or extend
  speculatively. The replacement must be either (a) the exact statement,
  conventions and hypotheses included, checked against a reputable source and
  recorded with its working URL, or (b) a directly checkable elementary
  correction — a short arithmetic, set-theoretic, logical or definition-unfolding
  derivation written into the repair record, never an unsupported nontrivial
  theorem. Take a dedicated touch snapshot before the first edit, record the
  error, replacement, validation route and provenance change in Alpha's
  `research/level<n>-published-dependency-repairs.md`, make the smallest
  correction, never rename or remove an id, then run `impact-audit.mjs` from that
  baseline and resolve every logical and direct-citation consumer before calling
  it complete. **No author certifies its own repair** — a Beta's is certified by
  Alpha, Alpha's by a Step-6 reader. Delete stale `verification.judge` and the
  obsolete `verification.audited`; both judge lanes rejudge the final text, and
  the delegated public gate is `verification.verified` with
  `scope: published-dependency-repair` and `delegated_by: owner`, which `depcheck`
  already recognizes. A `proved_here: false` item instead gets a fresh
  `sources_checked` record. If the correction or any consumer needs a debatable
  restatement, a new theorem, a deletion, a changed reading order, or leaves an
  impact queue open, it is not "obvious": report it for the owner rather than
  applying a partial public repair. Full protocol: `WORKFLOW.md`, `LEVELS.md` §6.

- **Published-page audit workflow (owner, 2026-08-02).** `AUDIT-WORKFLOW.md` is
  normative for the retro-audit of published pages. Inside audit scope only, it
  supersedes three standing rules by owner decision — stated in full at its §2,
  summarised here so no future session mistakes them for drift:
  1. **Legacy provenance IS retro-tagged**, by audited evidence-based
     determination with a durable per-item ledger row — never by guessing.
     Uncertainty never falls toward a *sourced* label, and never toward
     `ai-generated` either: that requires a positive determination of genuine
     novelty, a recoverable restatement of established mathematics is
     `ai-altered`, and an undecidable case escalates to Alpha.
  2. **The audit lineup** is in the model table above (owner, 2026-08-08). The
     refuter's routing to DeepSeek is load-bearing — it is the only cross-family
     reader on the audit side — and the certifier stays agentic because certifying
     a source-backed repair means actually fetching the source. The DeepSeek lane
     is tool-less, so Alpha assembles a refuter's context into its `--task` file
     and `dispatch.mjs` refuses a refuter dispatched without one. Alpha must
     recover the durable prior-session audit record before acting.
  3. **The repair delegation extends** to citation-precision repairs, provenance
     retags, and debatable restatements, with Alpha as final adjudicator.
     Deletions, id changes, and reading-order changes remain owner-only.

  **A7 is an exception to the build's whole-level Step-7 sweep** (owner,
  2026-08-08): A2/A6 already read the entire wave, so A7 — and any new A8
  repair — rejudges only the exact repair ids in `wave<k>-rejudge-targets.json`,
  and provenance-only retags are not judge targets. A public-interface repair
  repeats impact closure and refreshes a targeted rejudge receipt **for the
  changed item only**, validated by `apply-judge-stamps` before the audit judge
  stamp is written (§9); it never triggers a whole-wave sweep. The repair stamp
  is `verification.verified` with `scope: published-audit` and
  `delegated_by: owner`. Every build safeguard carries over, step 8's fatal-only
  rule included. **Already-tagged content is never audit scope** (owner,
  2026-08-02, standing): an item carrying both component-provenance tags is not
  re-audited, and `rounds.mjs --audit-batches` excludes it mechanically at scope
  generation.

## Presentation (owner-approved 2026-07-24, FROZEN — do not restyle)

The owner has approved the aesthetics and asked that they persist across ALL
future sessions. Treat this as a hard constraint: do NOT change the visual style,
layout, colours, spacing, typography, or flowchart look in EITHER repo without an
explicit, in-session owner instruction to restyle. Adding content is always fine;
restyling is not. New content is authored to SCHEMA.md's layout rules so it
renders identically to what exists. The implementation lives in the **app repo**
and those files are the source of truth — read them, and `ARCHITECTURE.md` §7
which tables them, before any rendering change. The two owner-instructed restyles
of the `/library` INDEX (2026-07-26, 2026-07-27) are themselves now frozen too.

**Three ranked citation tiers** (`ARCHITECTURE.md` §7 tables colour, underline
and glyph), none relying on colour alone: ordinary citation < **forward
reference** < **not proved here** — the bottom tier OUTRANKS the middle one.
**Sky and fuchsia are reserved** for the top two tiers and used nowhere else;
later additions (search, issue reporting, navigation) were deliberately built
from the existing vocabulary and introduce no new accent. Marker text always
accompanies colour.

Content-side hooks for the tiers, and the rules that are correctness rather than
taste:

- **Forward references** (owner-authorised 2026-07-25): `forward_refs` in item
  frontmatter (SCHEMA §3) plus `tools/fwdcheck.mjs` (`ARCHITECTURE.md` §3.3). A
  forward reference's CONSEQUENCES are marked the same way, because a consequence
  may use it in its own proof.
- **The ‡ tier** (owner instruction 2026-07-25): `proved_here: false` in
  frontmatter, the `not-proved-here` category, `tools/extcheck.mjs`
  (`ARCHITECTURE.md` §3.4). The accent propagates along `deps` so consequences
  are marked too, with an always-visible note that the dependency is not
  developed here. It serves the `deferred-*` catalogue pages, the pre-existing
  choice/independence citations, and the documented external fallback above — do
  not delete this machinery, it is what makes that fallback honest to readers.
- **Flowcharts are BIRDS-EYE:** only `landmark: true` items are nodes, edges are
  the transitive reduction of nearest-landmark-ancestor. Curate landmarks (main
  theorems, key definitions, key lemmas); never revert to one-node-per-item.
- **The verification caption stays.** An always-visible note under the provenance
  pill reads "✓ N results · all verified · K also independently AI-judged", then
  explains that every result is machine-checked and owner-audited and the judge
  is an ADDITIONAL independent review — so the items not AI-judged were
  owner-verified, NOT failures. A bare "judge 31/34" fraction as the headline is
  banned here: it reads as failures.
- **The search index is published-only for the public.** It is a file in the
  browser, so shipping drafts would publish unpublished mathematics to anyone
  with devtools; the route serves the owner's draft-bearing index as
  `private, no-store` with `Vary: cookie`. It is built through `plainTitle()` —
  the single de-TeX for every plain-text context — never a second, cruder copy.
- **Corpus loading is memoised, rendering is not** — deliberately: the routes
  await `auth()` and show drafts to the owner only, so caching rendered pages
  would leak drafts or hide them.

If a future session is tempted to "improve" the look: STOP. Only the owner
reopens it.
