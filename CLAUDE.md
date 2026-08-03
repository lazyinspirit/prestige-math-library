# prestige-math-library — session instructions

`AGENTS.md` is a non-normative adapter for non-Anthropic agents and points here;
this file remains the canonical agent instruction file.

This repo is the **public math library** served at `app.prestige-intelligence.cc/library`
by the Prestige Intelligence app (bind-mount; see README §How serving works).
**Normative docs, read before touching content: `SCHEMA.md` (item/page contract) and
`README.md` (provenance, judge lineup, citation rules).** House style for proofs:
`items/lem-cauchy-bounded.md` is the approved exemplar.

**Mechanism architecture: `ARCHITECTURE.md`** — every gate, ledger, brief and
visual tier, how each works and which failure it prevents. Read it before
adding or changing a mechanism.

**Subagent brief templates: `briefs/`** — the prompt-side half of the workflow
(scaffold, step-6 batch audit, authoring, paired judges). `LEVELS.md` describes
them; those files are the actual text.

**Per-level build, step 0 to 10: `LEVELS.md`** — the canonical description of
how a dependency level is built (actors, artifacts, the ten gates, the
self-contained-scope rule, the twice-touched escalation). Read it before
starting or resuming a level.

**Published-page audit, step A0 to A10: `AUDIT-WORKFLOW.md`** — the canonical
retro-audit of already-published pages (provenance retro-tagging, citation-
precision audit, generated-statement blast radius, the wave/batch model, the
`deepseek+terra` judge lineup). Read it before starting or resuming an audit
wave.

**End-to-end runbook:** `WORKFLOW.md` describes the full workflow (the model
roles, the modified reasoning/disproof engines, the RAG distiller, the
seven-step loop, serving over SSH, publish, and the gotchas). Read it for how to
run a page from prompt to publish; the normative docs above win where they differ.

1. **Author as `status: draft`** per SCHEMA.md. Session-authored content is
   `origin: session`; never fabricate scraped sources (use `references`). Every
   future mathematical-content item also declares separate reader-facing
   statement/construction and proof/verification provenance.
2. **Precheck (mechanical, free)** — from the repo root:
   ```
   node --import /root/Projects/prestige-intelligence/worker/node_modules/tsx/dist/loader.mjs tools/precheck.mts
   ```
   Bare = all items; or pass specific files. On REPAIR output, adopt the printed
   canonical stratification into the file and re-run until clean (the repo stores
   the strictly stratified form: a step citing phase-k steps sits in phase k+1).
   Record `verification.precheck: pass`.
3. **Paired skeptical judge** — **RUNS ONCE, AFTER the step-6 audit, on
   final text, for EVERY item in the completed level**; authors do not judge.
   Step-7 coverage is not limited to items Alpha or an independent reader changed:
   both judges read every item in every completed A/B pair. Current session workflow (owner,
   2026-07-31): authoring, Beta, and Alpha agents use **GPT 5.6 Sol via the
   Codex subscription plan**; the paired judges use **DeepSeek V4 Pro directly
   through the DeepSeek API at `xhigh` thinking (official API value: `max`)** and
   a freshly spawned **GPT 5.6 Terra through the
   Codex subscription**. GPT 5.6 Sol authoring/audit agents run at `xhigh`
   reasoning with a **1,000,000-token context window**; Terra runs as a fresh
   read-only Codex judge process at `xhigh`. `tools/judge.mts --parallel` runs both
   judges concurrently and preserves the injection-test record.
   **The judge's context unit is the A/B PAIR:** it receives the item's own page
   and `-examples` companion in full, plus exactly the pages the item's own page
   both declares in `requires` and actually cites. Both models receive the
   identical context and read proofs and dependency citations skeptically.
   DeepSeek supplies the cross-family screen; Terra is an independent
   subscription-backed comparison lane, not a claim of cross-family separation
   from the Sol author.
   Record a paired pass in `verification.judge` only when both models actually
   pass the text; commit their full verdict ledger at
   `research/level<n>-judge.jsonl`. Compare the models' findings at step 10. A
   proof refuted or repaired more than once escalates per WORKFLOW.md
   §"Twice-touched proofs".
3b. **Final Alpha-n audit — WHEN PUBLISHING A LEVEL**. Before the owner audit,
   Alpha-n audits the WHOLE level under `LEVELS.md` step 6: independent readers
   verify every proof step and in-batch dependency citation in content they did
   not author, Alpha audits their fixes from disk, then Alpha audits cross-batch
   and cross-level citations. Fatal includes
   a title or Statement asserting more than the proof gives — the judge reads
   Statements and cannot see a false title. `LEVELS.md` §"Step 6".
4. **Owner audit** gates `status: published` (set `verification.audited`).
   Flipping status is the publish action — the live site reads this directory.
5. **Commit + push** (`main`, conventional-commit style). NO Co-Authored-By
   trailers, ever. GitHub is backup only, never on the serving path.

## Preview

The `/library` renderer is built in the app repo (routes under
`web/app/library/`, reading env `MATH_LIBRARY_DIR`). Local preview: run the app
dev server on `:3001` and SSH-tunnel per `WORKFLOW.md` step 6 (`docs/DEV_WORKFLOW.md`
in the app repo has the tunnel). The signed-in owner sees drafts with a DRAFT
banner; the public sees only `published`.

## Hard rules

- **No shell-permission prompts (owner, 2026-07-30).** This binds the
  orchestrator and every current and future subagent. Run routine repository
  reads, writes, and gates inside the workspace sandbox and choose
  non-escalated command forms. Do not request shell-command approval from the
  owner. On runtimes that expose `dangerouslyDisableSandbox`, pass it on every
  Bash call as the existing unattended-build backstop; on runtimes that do not,
  stay within their already-granted workspace permissions. If an indispensable
  operation truly cannot be expressed without new authority, stop and record a
  blocker instead of raising a permission prompt.

- **Context continuity and compaction (owner, 2026-08-03).** Once active
  context reaches **60%**, automatically save durable session history at the
  next safe boundary (preferably after completing the current task or gate,
  never by abandoning work mid-operation). The orchestrator updates the active
  run's `research/<run>-RESUME.md` with the objective, current step/frozen-text
  state, owner policy changes, selected batches, active agents and ownership,
  material files and gate results, ledgers, open risks, exact next action, and
  the working-tree baseline. Keep it concise and factual; never put credentials,
  tokens, or copied long transcripts in it. After saving that memory, compact
  context at a convenient safe boundary whenever the platform offers or performs
  compaction; then immediately read the record and verify relevant disk state
  before continuing the same workflow. A checkpoint or compaction is not an
  owner pause and must not delay a stage once the state is safely recorded.
  **Beta and Alpha agents use the same 60% rule.** A Beta appends its concise
  checkpoint to its namespaced batch notes; Alpha writes it to its namespaced
  Alpha report/handoff. Each reads its own checkpoint and verifies relevant
  files after compaction, then continues without waiting for an orchestrator
  replay.

- **GPT 5.6 Sol dispatch default (owner, 2026-07-31).** Every authoring, Beta,
  Alpha, or other GPT 5.6 Sol subagent is dispatched as **GPT 5.6 Sol** at
  `xhigh` reasoning with a **1,000,000-token context window**. This is the
  binding default for this and all future sessions. Where the active launcher
  exposes a context-window field, set it explicitly to `1000000`; otherwise do
  not silently substitute another model or a smaller requested window. The
  authoring role uses Sol, not Terra.

- **Future Step-5/6 ownership (owner, 2026-07-31).** In every future session,
  the Beta agents that scaffolded the batches personally author all Step-5
  content after Step 4. At Step 6 they are excluded from auditing any content
  they authored; Alpha assigns independent audit readers and adjudicates their
  findings. The prior separate author-agent and self-auditing-Beta arrangement
  is retired for future runs.

- **Beta batch capacity (owner, 2026-08-01).** In every future session, each
  Beta scaffolds and authors at most **two A/B pairs**. Step 0 keeps every batch
  manifest at that cap, and `content-policy.mjs --manifest-only` rejects an in-flight manifest
  with more than two A pages. The capacity bound does not create dependencies
  between otherwise independent pairs or change their legal build order.

- **Step-3 decisions belong to the orchestrator (owner, 2026-07-30).** In this
  and every future session, the orchestrator verifies each Beta recommendation
  from disk and then **approves or declines it using best judgment**; it does not
  hand routine scaffold adjudication back to the owner. The decision priority
  is: (1) mathematical accuracy and correct citation of dependencies are
  non-negotiable; then (2) minimize forward references; then (3) preserve
  mathematical richness. Investigate uncertainty before deciding and log the
  decision plus rationale.

- **Step-10 fatal-error report and sole pause (owner, 2026-07-31).** Step 9 is
  a sweep only: it does not pause the build. At the end of step 10, before the
  publication/owner-audit pause, the orchestrator gives the owner a concise but
  complete account of every fatal mathematical error encountered and fixed.
  Group errors by defect type (for example invalid inference, incorrect
  dependency citation, false/overstrong definition or theorem, missing
  hypothesis/choice scope, invalid witness) and by location (title/Statement,
  proof/refutation, Facts/dependencies, Remark, or page prose/summary). For every
  error, name the affected id/file and the disposition: dropped/deferred,
  restated, proof repaired/replaced, prose corrected, dependencies corrected, or
  a new lemma/result added. Detailed Beta/Alpha/judge ledgers remain the evidence
  source; concision must not omit a fatal defect.

- **Paired skeptical judges (owner, 2026-07-31).** At step 7, run
  `deepseek-v4-pro` directly with `gpt-5.6-terra` through `tools/judge.mts`.
  DeepSeek reads `DEEPSEEK_API_KEY` directly from the configured environment or
  `/root/Projects/prestige-intelligence/.env`; Terra is a fresh, read-only Codex
  subscription process in an empty temporary work directory. They receive the
  same hash-attested frozen prompt and must read proofs and dependencies as
  adversarial refuters.
  `tools/judge-sweep.mjs` keeps their calls independent in file-backed,
  cross-process model pools: DeepSeek has a cap of 16 concurrent calls and
  Terra has a separate cap of 16. Each model moves to its next item when one of
  its own slots is free, without waiting for the other model (32 calls maximum
  combined).
  Before scheduling, it assembles each selected item's current prompt hash once
  and shares that attestation across both model queues.
  The sweep records every transport/HTTP attempt, latency, finish reason, and
  rate-limit headers in the paired attempt ledger; an empty non-final response
  is retried with jitter and is never treated as a mathematical verdict.
  The sweep itself requeues retryable attempts, releasing that model's slot
  during backoff so unrelated work in the same lane continues.
  Supply `tools/judge-sweep.mjs --pages` with A-page ids; it includes the
  corresponding B/examples item lists automatically, because coverage is for
  the whole A/B pair. **For the initial Step-7 sweep, supply every A page in the
  completed level:** both judges must judge every item whether or not Alpha
  changed it at Step 6. `--items` is reserved for a later, Alpha-selected
  rejudge of an item materially repaired after that complete sweep.
  A targeted replay may pass `--models` to retry one model's incomplete current
  verdicts without spending calls on an already-complete other-model verdict.
  DeepSeek runs with thinking enabled at `xhigh` (official API `max`), starts at
  a 40k-token maximum-reasoning budget and receives one 80k retry only
  after an empty `finish_reason: length` response; its prompt and scrutiny are
  otherwise unchanged.
  Preserve every per-model verdict in the level ledger, adjudicate a rejection
  from either model in `research/level<n>-judge-adjudications.jsonl` as
  `{id, model, context_sha256, outcome, defect_type?}` (`outcome` is
  `confirmed_fatal`, `confirmed_nonfatal`, or `false_positive`; fatal types are
  `logic`, `dependency_citation`, or `other`), and compare agreement,
  model-only rejections, nulls, and owner-confirmed fatal findings at the end of
  step 10. The two model pools are independently capped at 16 calls each (32
  maximum combined); neither model's throughput is throttled by the other.

- **Alpha adjudicates judges (owner, 2026-07-31).** For this and every future
  session, Alpha is the sole adjudicator of a paired-judge rejection. Alpha
  reads the frozen verdict and current disk text, confirms a fatal defect,
  confirms a nonfatal defect, or records a false positive; it applies any
  permitted draft repair and selects the exact changed items for rejudge. The
  orchestrator runs gates and maintains ledgers but does not substitute its own
  adjudication for Alpha's.
- **Alpha's 30-second threshold (owner, 2026-07-31).** In every future Alpha
  audit or judge adjudication, a logical gap between proof steps that a competent
  human reader can close in 30 seconds is **nonfatal**. Alpha may record or
  polish it when useful, but it must not classify it as a fatal proof defect or
  initiate a fatal repair cycle on that basis.

- **Alpha proof-refuter delegation (owner, 2026-07-31).** For every future
  Alpha-n audit, Alpha dispatches read-only proof-refuter subagents. They use
  the same skeptical standard as the DeepSeek V4 Pro/GPT 5.6 Terra judges: read each
  proof step and cited dependency as an adversarial refuter, report only a
  concrete false claim, unlicensed inference, missing hypothesis, or inaccurate
  citation, and inspect the supplied dependency before alleging it is too weak.
  Alpha alone adjudicates every finding from disk: it may confirm it, refute it
  with evidence, or apply and gate the necessary in-flight repair. A reader
  subagent never writes content or applies a fix.

- **Keep the normative docs current (owner, 2026-07-27).** `CLAUDE.md`,
  `WORKFLOW.md`, `LEVELS.md`, `ARCHITECTURE.md` and `AUDIT-WORKFLOW.md` are
  normative and are
  updated **in the same commit as the change they describe** — a new or
  retired tool, a new gate error code, a change to the agent hierarchy or a
  brief, a new owner rule, a change to the frontmatter contract, or a
  measured fact about a mechanism. Verify against the code, never from
  memory: when a doc and the code disagree, the code is the truth and the
  doc is the bug.

- **Published-page audit workflow (owner, 2026-08-02).** `AUDIT-WORKFLOW.md`
  is normative for the retro-audit of published pages. Inside audit scope it
  supersedes three standing rules by explicit owner decision: (1) legacy
  provenance IS retro-tagged, by evidence-based determination with a durable
  per-item ledger row — `ai-generated` requires a positive determination of
  genuine novelty (owner, 2026-08-02: never assign it merely because a source
  failed to surface; a recoverable restatement of established mathematics is
  `ai-altered`, and an undecidable case escalates to Alpha), uncertainty never
  falls toward a sourced label, and the sole URL waiver is the Alpha-concurred
  `established-knowledge` evidence class; (2) Audit-Beta and Alpha use **GPT
  5.6 Sol** through the Codex subscription at `xhigh` with a 1,000,000-token
  context window; independent readers and proof-refuters also use **GPT 5.6
  Sol**;
  Alpha must first recover the durable prior-session audit record; paired
  judges are DeepSeek V4 Pro plus fresh GPT 5.6 Terra selected by env
  `JUDGE_LINEUP=deepseek+terra`, with the build's same independent 16+16
  concurrent pools; (3) the published-item repair delegation extends to
  citation-precision repairs, provenance retags, and debatable restatements
  with Alpha as final adjudicator — deletions, id changes, and reading-order
  changes remain owner-only. At audit A8, exactly as at build Step 8, Alpha
  adjudicates the rejection from disk, deletes a stale pass after a material
  rewrite, and re-runs both judges **only on what changed**. A
  public-interface repair also repeats impact closure and refreshes a
  **targeted rejudge receipt for the changed item only**; it does not trigger a
  whole-wave Step-8 sweep or a full-current-context coverage run. The receipt
  binds the target id, its exact paired rejudge context, and an item SHA-256
  computed with only `verification.judge` excluded, so the stamp itself and a
  later unrelated companion-page edit cannot stale it. `apply-judge-stamps`
  validates that receipt before writing the target's audit judge stamp. All
  build safeguards carry over: touch
  snapshots, impact closure, no self-certification, stale-verdict deletion,
  targeted rejudge, and the twice-touched escalation. The repair stamp is
  `verification.verified` with `scope: published-audit` and
  `delegated_by: owner`. **Already-tagged content is never audit scope
  (owner, 2026-08-02, standing for all future sessions):** an item that
  already carries both component-provenance tags is not re-audited;
  `rounds.mjs --audit-batches` excludes it mechanically at scope generation.
  Full workflow, decisions D1–D5/R1–R3, and gates: `AUDIT-WORKFLOW.md`.

- Item ids are IMMUTABLE on `main`; renames go through `aliases` (SCHEMA §2).
- A published page listing a draft item is a hard error, never a silent skip.
- **Self-contained scope and external fallback (owner, 2026-08-01).** The
  normal rule is that no item rests on a result the library has not established.
  Beta must never cite a dependency whose `provenance.statement` is
  `ai-generated`; the proof-provenance label is irrelevant. It may freely use
  `literature-derived` and `ai-altered` statements, but an AI-adapted target is
  never auto-trusted: when its exact claim or conventions are in doubt, Beta or
  Alpha verifies it against reputable literature. Beta then searches reputable sources
  for the exact statement of any well-known result it needs, and tries to prove
  that result from available library dependencies. If that fails, Beta
  decomposes, rescopes, or drops the item with a licensing note. The narrow last
  resort is a well-established, source-checked result whose local proof cannot
  be built in scope: record it as a source-cited `rem-` item with
  `proved_here: false`, cite that item in `deps`, and record the exact source,
  failed in-library route, and necessity in the batch notes and proof contract.
  `external_refs` is for non-load-bearing mentions only. The visible fuchsia ‡
  marker is the reader-facing external-dependency tag. Foundational axioms
  already adopted — AC, countable choice, dependent choice — and independence
  facts about them remain separately permitted. All other unbuilt machinery is
  dropped. This is forward-looking; published items are not retrofitted. Full
  rule in `WORKFLOW.md` §"Self-contained scope".
- Generation for this library NEVER goes through the public billed pipelines.
  Current session route: GPT 5.6 Sol authoring, Beta, and Alpha audit through
  the Codex subscription plan, all at `xhigh` with a 1,000,000-token context
  window; direct DeepSeek judging plus fresh GPT 5.6 Terra judges through the
  Codex subscription. Do not wire a subscription account into the worker service.
- Mathematical content requires the step-6 Alpha/Beta audit before publish, even
  when judged.
- **Scaffold richness (owner, 2026-07-30).** For every A/B pair, Beta decomposes
  long theorem/lemma proofs into focused intermediate lemmas and performs a pass
  for useful, cheaply proved corollaries. The A-page size-warning ceiling is 100
  total items, raised from 60. It is a review ceiling, not a target: never pad,
  and never drop valuable results merely for ergonomics or to stay below it.
- **Generated-claim minimization (owner, 2026-08-01).** Source-backed
  statements are the default. Beta must not invent a new theorem, proposition,
  definition, false statement, or mathematical remark merely to enrich a page
  or bridge an inconvenient proof. It may introduce only an easily and directly
  verifiable `ai-generated` corollary, or a checkable example/counterexample.
  None may be load-bearing infrastructure: every AI-generated
  Statement/Construction is forbidden as a dependency target. Keep a would-be
  proof-decomposition lemma inline, or replace it with a literature-derived or
  AI-altered statement. A theorem in the dependency backbone needs reliable
  literature support or a locally proved, source-grounded route.
- **Source-grounded, dependency-closed scaffolding (owner, 2026-07-30).**
  Before constructing an A/B scaffold, Beta searches reputable mathematical
  sources on the web for the relevant definitions, theorem and corollary
  statements, counterexamples, and proof strategies, and records the sources
  and any convention disagreements in its notes. Beta has read access to the
  full published library and must open every published item it intends to cite.
  It never selects an `ai-generated` Statement/Construction as a load-bearing
  dependency; proof provenance never changes that rule. An AI-adapted target
  is source-checked whenever its exact statement or conventions leave doubt.
  Every load-bearing dependency must normally
  be established by published content or by an earlier item inside the pair;
  the only exception is the documented external fallback in the
  self-contained-scope rule. A published item without component `provenance`
  (or the older `authorship` fallback) is `legacy-unclassified`, not evidence
  that it is AI-generated and not a reason
  to invent a provenance label. Before Beta uses one, it must open the item and
  either confirm from its own mathematical knowledge that the exact statement
  is an established result, or search reputable sources for that exact
  statement and its conventions. Record which route was used in the batch
  notes. If neither route establishes confidence, do not make it load-bearing:
  prove it locally, rescope, or use the narrow documented external fallback.
- **Natural mathematical voice and citation fidelity (owner, 2026-07-30).** Do
  not write AI-sounding labels or interpretive filler such as "Null definition:"
  or "the key bridge says". In every `[F#]`, `[A#]`, or `[L#]` dependency fact,
  state the cited definition/theorem itself: quote it exactly when practical, or
  give a concise shortening that preserves its domain, quantifiers, hypotheses,
  conclusion, and direction with maximum fidelity. Never replace the proposition
  with a synthetic summary of what it is "for". This binds the orchestrator and
  every scaffold, author, Beta, Alpha, and judge agent.
- **Beta dependency discipline (owner, 2026-07-31).** A Beta precisely cites
  every load-bearing dependency. Its `[F#]`, `[A#]`, and `[L#]` facts reproduce
  the cited Definition or Statement where practical; otherwise they are the
  smallest faithful shortening, with no changed domain, quantifier, hypothesis,
  direction, conclusion, or invented converse. If a dependency appears
  insufficient, do not inflate its restatement or add an unused edge: add needed
  inline proof steps, reconsider the proof strategy, or reconsider whether the
  theorem/example/counterexample is true as stated. This binds Beta scaffolding
  and Step-5 authoring in every future run.
- **Dependency provenance order (owner, 2026-08-01).** Beta must not use an
  `ai-generated` Statement/Construction as a load-bearing scaffold or proof
  dependency. The target proof's provenance is irrelevant. An AI-adapted target
  still requires a reputable-source check whenever its exact statement or
  conventions are in doubt. For a needed
  well-known result, find a reputable source for its exact statement and
  conventions, then add and prove the result from available library material if
  possible. Only when that local proof cannot be built in scope may Beta use the
  documented `proved_here: false` external-dependency fallback; it must be a
  source-cited `rem-` item in `deps`, never an `external_refs` mention, with the
  exact source, failed local route, and necessity recorded in the batch notes
  and proof contract.
- **Beta proof-design discipline (owner, 2026-07-31).** Before authoring a proof,
  Beta prepares a proof-obligation map that assigns every substantive subclaim
  to an exact dependency or an inline derivation. It performs a boundary pass
  for empty objects, zero/one indices, degenerate parameters, endpoints,
  nonempty choices, and both directions of an iff. Each written proof step uses
  only an explicit fact, earlier step, given hypothesis, or elementary algebra.
  Split proofs with distinct conceptual moves into focused lemmas. If a proof
  still does not close honestly, narrow or drop the stated theorem/example/
  counterexample rather than patching it with an overstated dependency. This is
  required in every future Beta scaffold and Step-5 authoring run.
- **Component provenance and AI-generated truth risk (owner, 2026-08-01).**
  Every future Beta assigns `provenance.statement` and `provenance.proof` to
  every mathematical-content item it authors, including definitions,
  propositions, theorems, lemmas, corollaries, examples, counterexamples, false
  statements, and mathematical remarks. It records a rationale for each in its
  batch notes. Statement means the Definition/Statement or the exact
  construction; proof means the local Proof, Verification, or Refutation. Each
  component is `literature-derived`, `ai-altered`, or `ai-generated`; proof may
  instead be `not-supplied`, and definitions/remarks use `not-applicable`. A
  generated proof does not make a source-derived statement AI-generated.
  `proved_here` separately says whether the library supplies a complete proof.
  Beta treats an AI-generated statement or construction, not merely an
  AI-generated proof, as the truth-risk flag and searches for a counterexample
  before authoring or repairing it whenever there is concrete doubt. Alpha
  checks both labels at Step 6, retags each materially altered component, and
  independently probes an AI-generated claim, witness, or refutation for
  counterexamples whenever its truthfulness is in doubt; repairing a proof does
  not establish the Statement. Never retrofit legacy items merely to satisfy
  this rule.
- **Durable proof-contract and high-risk gates (owner, 2026-08-01).** In every
  future level, each Beta writes and maintains a namespaced
  `research/level<n>-batch-<i>.proof-contracts.json` for every proof-bearing
  item it owns. It records (a) the exact cited source clause and every step
  using each `[F#]`/`[A#]`/`[L#]` fact, (b) a stated input map covering every
  numbered step exactly once, and (c) an anchored disposition of empty, zero,
  one, degenerate, endpoint, nonempty-choice, and both iff-direction cases.
  The orchestrator merges the batch files before the whole-level gate with
  `tools/merge-proof-contracts.mjs`, then runs `proof-contract.mjs --strict`,
  `finite-smoke.mjs`, and `risk-report.mjs --require-reviewed` after Step 5 and
  again after Step-6 repairs, before freezing Step-7 context. Finite smoke tests
  are bounded countermodel searches, never general proofs. A high/critical risk
  result routes the item to an additional Alpha proof-refuter and requires an
  Alpha `risk_review` record. `QUALITY-CONTROLS.md` is the complete contract.
- **Scope and blast-radius closure (owner, 2026-08-01).** Every future level
  also runs `content-policy.mjs` on the batch manifests, generates the complete
  `audit-manifest.mjs` relationship checklist, and records the Alpha audit
  receipt. After any public-interface change, `impact-audit.mjs` computes every
  downstream logical and direct-citation consumer from touch snapshots and
  requires an Alpha disposition before the item can continue. After Step 7,
  `level-coverage.mjs --verify-current-context` is the hard receipt gate: every
  scoped item needs provenance, every proof-bearing item needs a merged contract,
  and both DeepSeek/Terra lanes need matching current frozen-context verdicts.
  A current rejection is a hard stop unless Alpha has recorded an exact-hash
  adjudication: `confirmed_fatal` blocks closure, while `confirmed_nonfatal`
  and `false_positive` may clear that rejection under Alpha's 30-second rule.
  Source-backed `literature-derived` and `ai-altered`
  items need a reader-visible `sources.references` URL.
  It also requires the current independent `spine-audit.mjs` receipt for the
  proof-bearing items among the 100 largest transitive dependency cones; that
  receipt lapses on a mathematical-content change. This prevents future levels
  from silently relying on an unreviewed high-fan-out proof.
  The structured `external_dependency` record is required for any future
  `proved_here: false` fallback. These controls are forward-looking and never
  fabricate provenance for legacy items.
- **Obvious published-dependency repair (owner, 2026-08-01).** This owner
  delegation narrowly overrides the ordinary read-only boundary: Beta and Alpha
  may repair a **published item that the current level uses as a dependency**
  when its present Definition, Statement, Fact, citation, or equally
  load-bearing mathematical prose is an unambiguous falsehood. It is not a
  licence to choose between conventions, improve exposition, complete a
  nonfatal 30-second gap, or make a speculative extension. The replacement must
  be either (a) the exact statement, including its conventions and hypotheses,
  checked against a reputable source and recorded with its working URL, or (b)
  a directly checkable elementary correction. “Elementary” means a short
  arithmetic, set-theoretic, logical, or definition-unfolding derivation written
  in the repair record; it never licenses an unsupported nontrivial theorem.
  Before the first edit, take a dedicated touch snapshot. Record the old error,
  the replacement, validation route, source or derivation, and component-provenance change
  in Alpha's `research/level<n>-published-dependency-repairs.md`. Make the
  smallest correction, never rename or remove an existing id, and retag
  materially AI-repaired statement or proof `ai-altered` (an already
  `ai-generated` item remains so). Then run `impact-audit.mjs` from that
  dedicated baseline and give every logical and direct-citation consumer an
  evidence-based disposition, repairing each one that is no longer licensed,
  before treating the correction as complete. A Beta
  repair is independently checked and certified by Alpha; an Alpha repair is
  independently checked by a Step-6 reader. No author certifies its own repair.
  Delete stale `verification.judge`; after the final text, both current judge
  lanes rejudge the corrected item and every materially repaired consumer on its
  matching frozen context. Do not write `verification.audited`: remove the obsolete
  owner-audit stamp and record the independent current reading as
  `verification.verified` with `scope: published-dependency-repair` and
  `delegated_by: owner`, which `depcheck` already recognizes as the delegated
  publication gate. For `proved_here: false`, recheck and replace its
  `sources_checked` record instead of judging a nonexistent proof. If the
  correction or any affected consumer needs a debatable restatement, a new
  theorem, deletion, changed reading order, or an unresolved impact queue, it is
  not “obvious”: do not make a partial public repair; report it for the owner.
- **Page-summary contract (owner, 2026-07-30).** Every A-page summary is exactly
  two nonempty prose paragraphs, each under 150 words. Paragraph 1 gives the
  mathematical background and names definitions and results from declared
  dependencies that the development uses. Paragraph 2 names the main definitions
  and theorems developed on the page and explains their general logical
  progression. A B page has no authored summary body at all. A summaries remain
  bound by SCHEMA §6: no counts, self-ranking, unsupported reading position, or
  survey claims about other pages.

## Presentation (owner-approved 2026-07-24, FROZEN — do not restyle)

The owner has explicitly approved the aesthetics and presentation and asked that
they persist across ALL future sessions. Treat this as a hard constraint: do NOT
change the visual style, layout, colours, spacing, typography, or flowchart look
in EITHER repo without an explicit, in-session owner instruction to restyle. New
content must be authored to SCHEMA.md's layout rules so it renders identically to
what exists; adding content is always fine, restyling is not.

The approved style is implemented by these files (the source of truth — read them
before any rendering change, and preserve their behaviour):

- `web/lib/library-kinds.ts` — the per-kind colour palette (light + dark):
  definition=blue, theorem=violet, lemma/proposition=teal, corollary=violet,
  example=emerald, counterexample=amber, false-statement=rose, remark=slate.
  Colour is ALWAYS paired with the kind label (never colour-alone). Drives both
  the kind chips and the flowchart node fills.
- `web/components/library/ItemBody.tsx` — mechanical proof rendering: sectioned
  Statement / Facts & Assumptions / Proof, a "technique ·" line, one row per
  fact and per step, right-aligned mono step numbers, per-citation tag chips in
  a bounded wrapping end column, collapsible Scratch.
- `web/components/library/badges.tsx` — kind chips (coloured), DRAFT banner,
  provenance + verification chips. The provenance pill shows ONLY the provenance
  label (no "judge N/M" fraction — that reads as failures and is banned here);
  the judge count lives in the verification caption below (see page.tsx).
- `web/components/library/Mermaid.tsx` — flowchart v2: straight thick indigo
  edges (linear curve, 2.75px), 13px squarish (iPhone-like) corners, nodes
  coloured by kind, click-to-enlarge lightbox (Esc/backdrop close), selected
  dark palette (not auto-flip).
- `web/app/library/[...path]/page.tsx` — the five fixed-numbered page sections
  (1 Prerequisites · 2 Summary · 3 Flowchart · 4 Definitions/theorems/proofs ·
  5 Examples/counterexamples/false statements), always rendered, with honest
  empty-state lines. Section 1 Prerequisites is PAGE-level: links to the other
  library pages proving this page's dependency closure, never individual items.
- **Verification caption (owner-approved, keep it): a short always-visible note
  directly under the provenance pill** reads "✓ N results · all verified · K also
  independently AI-judged", then explains every result is machine-checked and
  owner-audited and that the judge is an ADDITIONAL independent AI review, so the
  items not AI-judged were owner-verified, NOT failures. This exists so "judge
  31/34" can never be misread as failures; do not remove it or reintroduce a
  bare judge fraction as the headline.
- **Forward references (owner-authorised addition, 2026-07-25 — ADDITIVE, not a
  restyle; keep it).** The owner allowed forward references on condition that
  they are VISIBLY different from everything else, and that their CONSEQUENCES
  (examples, corollaries, anything downstream) are marked the same way, since
  such a consequence may use the forward reference in its own proof. Implemented
  by `web/lib/library-forward.ts`, which owns the single accent used for all of
  it: **sky, a dashed underline on links, and the ↗ glyph** (sky is used nowhere
  else; the kind palette and the state chips are untouched). Marker text always
  accompanies the colour, as everywhere else here. `web/components/library/
  MathMarkdown.tsx` renders a forward link, and renders it as marked text rather
  than a dead link when the target is not authored yet;
  `web/components/library/badges.tsx` adds `ForwardDependentChip` for an item
  that rests on later material, `direct` or `inherited`. The content side is
  `forward_refs` in item frontmatter (SCHEMA §3) plus `tools/fwdcheck.mjs`.
- **Recorded-but-not-proved, a THIRD tier (owner instruction, 2026-07-25 —
  ADDITIVE; keep it).** The owner asked that the deferred results of
  `DEFERRED.md` be INCLUDED in the library, and that they and their consequences
  be visibly different from everything else INCLUDING ordinary forward references
  and their consequences; that every unproved dependency inside a proof be
  visibly different from every other dependency; and that the reader be reminded
  such a dependency is not developed here. Three ranked tiers result, each
  distinct in colour, underline style AND glyph, so none relies on colour alone:

  | tier | colour | underline | glyph |
  |---|---|---|---|
  | ordinary citation | indigo | solid | none |
  | forward reference | sky | dashed | ↗ |
  | **not proved here** | **fuchsia** | **dotted** | **‡** |

  Fuchsia is used nowhere else, and the bottom tier OUTRANKS the middle one.

  **Content-side policy change, owner 2026-08-01 — the RENDERING below is
  untouched and stays frozen.** The ‡ tier ordinarily serves the `deferred-*`
  catalogue pages and the pre-existing choice/independence citations. The sole
  new-content exception is the documented external fallback in the hard rules:
  a well-established, exact-source-checked result that Beta cannot prove from
  available library dependencies may be a source-cited `proved_here: false`
  `rem-` dependency. Do not delete this machinery — it makes that exception
  visible and honest to readers.
  Owned by `web/lib/library-external.ts` (accent + the `unprovedDependence`
  closure, which propagates along `deps` so consequences are marked too);
  `web/components/library/ItemBody.tsx` marks the FACT row carrying an unproved
  dependency and EVERY step tag citing that fact; `badges.tsx` adds
  `UnprovedDependentChip` and `UnprovedDepsNote`, the always-visible reminder in
  the spirit of the verification caption. Content side: `proved_here: false` in
  frontmatter (SCHEMA §3), the `not-proved-here` category, and
  `tools/extcheck.mjs`.
- **Search and issue reporting, owner-commissioned 2026-07-28 — ADDITIVE, not a
  restyle; keep them.** The owner asked for a search box and a way to report
  mathematical inaccuracies. Both are built from the EXISTING vocabulary only —
  the kind palette for result chips, the chip shape of `badges.tsx`, existing
  neutrals — and introduce **no new accent**; sky and fuchsia remain reserved for
  forward references and the ‡ tier. Owned by `web/components/library/SearchBox.tsx`
  (client, mounted in `web/app/library/layout.tsx`), `web/lib/library-search.ts`
  + `web/app/library/search-index/route.ts` (the index), and
  `web/components/library/ReportIssue.tsx` + `web/lib/library-feedback.ts` +
  `web/app/library/feedback/route.ts` (per-item reporting to
  `support@prestige-intelligence.cc`).
  **Two rules here are correctness, not taste.** The search index is
  **published-only for the public** — it is a file in the browser, so shipping
  drafts would publish unpublished mathematics to anyone with devtools; the route
  serves the owner's draft-bearing index as `private, no-store` with
  `Vary: cookie`. And the index is built through `plainTitle()`, never a second
  de-TeX, so a reader typing `sqrt` matches `\sqrt`.
- **Corpus loading is memoised** (`web/lib/library-cache.ts`), which took a page
  view from ~50 ms of re-parsing 1,204 items to 0.50 ms. The DATA is cached and
  the RENDER is not, deliberately: the routes await `auth()` and show drafts to
  the owner only, so caching rendered pages would leak drafts or hide them.
- Flowchart is BIRDS-EYE: only `landmark: true` items are nodes; edges are the
  transitive reduction of nearest-landmark-ancestor. Curate landmarks (main
  theorems, key definitions, key lemmas); do not revert to one-node-per-item.
- **Index page, owner-instructed restyle 2026-07-26 — now itself FROZEN.** The
  owner reopened the `/library` INDEX only (the page and item renderers were not
  touched). Owned by `web/lib/library-categories.ts` (per-group accent, A/B
  pairing, page-level dependency graph), `web/components/library/group.tsx`
  (group card + page row) and `web/app/library/group/[slug]/page.tsx` (the group
  dependency tree). A page's `<name>-examples` companion is listed in a RIGHT-hand
  column on its A page's row, never on a line of its own. Group titles are cards
  with a per-group accent, and no webfont fetch, so the Docker build stays
  hermetic. Sky and fuchsia remain reserved; the single use of fuchsia is the
  `not-proved-here` group, which IS the ‡ tier.
- **Index page, SECOND owner-instructed restyle 2026-07-27 — liquid glass, and
  now itself FROZEN.** The owner reopened the INDEX again (the item and page
  renderers were NOT touched and remain frozen at the 2026-07-24 spec). Cards are
  translucent glass: `backdrop-blur-xl backdrop-saturate-150` over `bg-white/55`
  (`dark:bg-white/[0.055]`), a `1.75rem` radius, a two-layer shadow, and a
  specular top edge. The per-group hue moved from an opaque wash to a
  TRANSLUCENT tint layered over the glass, so it tints rather than paints.
  **The left accent bar is GONE** (owner, 2026-07-27) and the `bar` field was
  removed from `CategoryStyle` with it; colour is still never alone because the
  group title carries the hue and IS the group's name. Masthead and group titles
  use `.font-display-rounded` — `ui-rounded`, which resolves to SF Pro Rounded on
  Apple platforms and degrades to `system-ui` elsewhere. **Naming a family never
  fetches; there is no `@font-face` and the build stays hermetic** — the same
  constraint that made the old display serif a system stack. `.library-ground`
  gives the `/library` layout a subtle vertical gradient, built with `color-mix`
  against `--background` so it themes itself in both modes. Dark tints run at
  `/40` (light `/35`) after the owner reported the first pass looked washed out;
  `prefers-reduced-transparency: reduce` falls back to an opaque surface.
  Owned by `web/app/globals.css`, `web/app/library/layout.tsx`,
  `web/app/library/page.tsx`, `web/components/library/group.tsx` and
  `web/lib/library-categories.ts`.
- **Titles are LaTeX; nothing renders KaTeX inside a mermaid label.** `plainTitle`
  in `web/lib/math-library.ts` is the one de-TeX for every plain-text context
  (flowchart labels, OG cards, metadata): a Unicode symbol table, `\{`/`\}` kept
  as set braces, unknown control words degrading to their own name, and
  all-or-nothing scripts so `a^{1/n}` stays `a^1/n` rather than becoming the
  false-reading `a¹/n`. Do not reintroduce a second, cruder copy.

Global entry point for future sessions: the `/math-library` skill loads this
file first. If a future session is tempted to "improve" the look, STOP — the
look is settled; only the owner reopens it.
