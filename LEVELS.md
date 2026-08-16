# The per-level build, step 0 to 10 — canonical

The owner builds this library **one A-page dependency level at a time**. This
file is the single description of that process — *what happens in what order*.
The retro-audit of **already-published** pages is a separate workflow with its
own steps A0–A10, judge lineup, and briefs: `AUDIT-WORKFLOW.md`. This file
stays the build.
**`ARCHITECTURE.md` is its companion**: what each mechanism IS, how it works,
and which failure it was built to prevent. `SCHEMA.md` and `CLAUDE.md` win
where they differ; `WORKFLOW.md` is the older per-page runbook and remains true
of a single page's journey.

All four normative docs are updated **in the same commit as the change they
describe** (owner, 2026-07-27).

Everything below is verified against the code as of 2026-07-31.

---

## Actors

| actor | model | does |
|---|---|---|
| **owner** | human | approves step-3 findings one at a time; audits; sets `verification.audited`; the only one who may remove published or out-of-level results |
| **the engine** | `tools/autopilot/`, no model | batching, splicing, the **gate of record**, retries, blockers, ledgers, and every stage transition. It makes no mathematical judgment and never publishes |
| **Alpha-n** | **Claude Opus 5 on the `claude` runner, `xhigh`, 1M-token context** (owner, 2026-08-10; was GPT 5.6 Sol) | spawned at **step 3** (owner, 2026-08-11 — was step 4), where its first job is to review every Beta scaffold for breadth and depth before anything is authored; resumed at **steps 4, 6 and 8**; dispatches read-only skeptical proof-refuters, adjudicates their and the paired judges' findings, applies/gates warranted repairs, propagates approved changes into higher-level prose, and audits every independent-reader fix and cross-batch/cross-level reference from disk. **Since 2026-08-14 this is a GROUP role at steps 3 and 6a/6b** — see the row below |
| **group Alpha / lead Alpha** (owner, 2026-08-14; assignment judged 2026-08-16) | same model and settings | A run's batches are divided among **group Alphas, at most three batches each** (`dispatch.mjs` alpha cap 3). **Which batches each owns is decided at stage `2-assign`**, by an Alpha, to minimise what crosses a group boundary; `tools/alpha-groups.mjs` validates it and fails on a category split that was avoidable. Each group Alpha runs **step 3** for its own batches and **steps 6a/6b** for them, writing only namespaced artifacts nobody else opens. The **lead Alpha** is one of them and additionally owns the stages that are global by nature: **step 4** propagation, **step 6c** cross-batch/cross-level citation audit, **step 8** adjudication, step 9, the receipts and step 10. Rationale: `ARCHITECTURE.md` §6 |
| **Beta-n-i** | **GPT 5.6 Sol via the Codex subscription plan, `xhigh`, 1M-token context** | one per batch; steps 1–2 scaffolding and **step 5 authors all content in its batch** after Step 4. It never audits content it authored. |
| **independent Step-6 reader** | **GPT 5.6 Sol via the Codex subscription plan, `xhigh`, 1M-token context** | Alpha-assigned read-only or repair-capable audit role for content it did not author; does not judge or adjudicate. |
| **judges** | **DeepSeek V4 Pro direct (`max`) and GPT 5.6 Terra** (owner, 2026-08-04; `JUDGE_LINEUP=deepseek+terra`) | independent adversarial screens; invoked concurrently through `tools/judge.mts --parallel` on the same hash-attested frozen context. DeepSeek is the only cross-family lane; Terra is subscription-backed and independent but shares the GPT family with the audit Alpha, so weight same-family agreement accordingly. |

## Artifacts

| path | what |
|---|---|
| `research/plan-*.md`, `research/design-*.md` | **prose scaffolds** — human-readable page designs (RA-nn blocks, F1/T1–T10 topology track, AA-nn/LA-nn algebra track) |
| `research/sweep-*.md` | RAG sweeps: raw source material, *not* scaffolds |
| `research/plan-spec.json` | **machine scaffold**. `pages[]` of `{order, id, kind, category, title, companion, requires[], items[]}`; each item `{id, kind, title, strategy?, deps[]}` |
| `research/<run>-batch-<i>.pages.json` / `.notes.md` | Beta-n-i's **only** writable outputs |
| `research/<run>-judge.jsonl` | **refutation ledger** (`JUDGE_VERDICTLOG`) |
| `research/<run>-judge-attempts.jsonl` | **judge transport/latency ledger** (`JUDGE_ATTEMPTLOG`), written by the sweep |
| `research/<run>-touches.json` | **repair ledger** (`touchlog.mjs`) |
| `research/<run>-audit-manifest.json` | generated full relationship checklist for the independent-reader and Alpha audit |
| `research/<run>-impact.json` | Alpha dispositions for every consumer exposed by a changed public interface |
| `research/<run>-published-dependency-repairs.md` | Alpha's evidence ledger for any owner-delegated repair to a published dependency |
| `research/<run>-audit-coverage.json` | Alpha's manifest-bound whole-level audit receipt |
| `items/<id>.md`, `library/<category>/<page>.md` | the content itself |
| `briefs/judge-conventions.txt` | the paired judges' canonical conventions block, loaded by `tools/judge.mts` into the frozen prompt and hash for both lanes |
| `briefs/*.md` | **the prompt-side mechanisms**: the subagent brief templates (scaffold, step-6 batch audit, authoring, paired judges). These are half the workflow and were session-scratchpad-only until 2026-07-27. Every one opens with the **no shell-permission prompts rule** (`ARCHITECTURE.md` §6.1) |

### `order` is not stable across insertions — recompute, never remember

`order` lives **only** in `research/plan-spec.json`; no page or item frontmatter
carries it. Renumbering is therefore a one-file edit, and it is safe as long as
the **relative** order of existing pages is preserved, because every existing
citation stays backward-pointing. `depsource.mjs`, `fwdcheck.mjs`,
`validate-plan.mjs` and `rounds.mjs` are the only readers.

Three insertions have happened, the last two on the same day:

1. `formal-laurent-series-field` took the fractional order 31.5 (since absorbed
   into an integer slot by the renumbers below — there are now **no** fractional
   orders in the spec).
2. **2026-07-27**, the algebra track inserted at order 20, shifting 120 pages and
   taking the spec from 140 to 198 pages (`research/plan-algebra-track.md`).
3. **2026-07-27**, the elementary number theory block inserted at orders 22–27
   and the fundamental theorem of finite abelian groups at 36–37, shifting 177
   pages and taking the spec from 198 to **206** pages. Two different shifts:
   old orders 22–29 moved **+6**, old order 30 and above moved **+8**, orders
   1–21 did not move. Decisions D5–D7 in `research/plan-algebra-track.md`.

**Orders 56–67 and 94–97 are RESERVED** (they were 48–59 and 86–89 before
insertion 3) for the deferred algebra expansion — Sylow, Galois, and the
structure theorem for **finitely generated** abelian groups. The **finite**
abelian case is no longer deferred; it is built at order 36.

**Consequence: any order quoted in a memory file, research note or commit message
predating insertion 3 is stale above order 21** — and anything predating
insertion 2 is stale above order 19. Recompute from `plan-spec.json`; never
quote an order from memory.

### BRIEF AN AGENT BY PAGE ID, NEVER BY ORDER (2026-07-28, learned the hard way)

A brief that says "audit orders 137 and 138" is a **dangling reference**: `order`
is the one field a splice rewrites, and the agent resolves it against the spec as
it stands when the agent runs, not when the brief was written.

Measured the day it happened. Three step-8 auditors were briefed on level 9 as
"orders 129/130, 131/132, 137/138". Between writing the briefs and the agents
finishing, 158 pages were spliced in and **every one of those orders moved** —
129→151, 131→153, 137→159. The `research/<run>-batch-<i>.pages.json` files
still carry the pre-splice numbers, so batch file and spec now disagree by 22.

**Nothing was mis-audited, and only because each brief also named the page FILES
under `library/`.** That is luck, not design. An agent given orders alone would
have audited whatever had drifted into those slots and reported success.

So: **name the page id and the file path. Quote an order only as a parenthetical
convenience, never as the identifier.** The same applies to any note that will
outlive the session — an order in prose is stale the moment a track is spliced,
which is now a routine operation rather than a rare one.

**When you renumber, the prose scaffolds do not follow automatically.** Insertion
3 had to rewrite 64 `order N` references in `research/plan-algebra-track.md`, and
a case-sensitive sweep still missed a capitalised `Orders N to M`, two bare
`(34)`-style parentheticals in a bridge table, an `available at 70`, and an
entire table column of bare page orders. **Grep for bare numbers as well as for
the word "order", and verify every section heading against the spec afterwards**
rather than trusting the sweep.

**So prefer a FRACTIONAL splice when you are inserting a pair rather than a
track.** `order` is only ever compared, never counted: `validate-plan.mjs` checks
`prereq-order` as a strict inequality and `rounds.mjs` derives levels from
`requires`, so nothing requires the orders to be contiguous integers, and the
spec has carried `5.1`–`5.4` since the foundations split. Inserting the
logarithm-characterisations pair at `178.1`/`178.2` (2026-08-11) renumbered
nothing and so cost no reference sweep at all, against the 264 pages a
renumbering insertion at that point would have moved. Renumber only when a whole
track needs contiguous room, and then pay the sweep above in full.

---

## EXECUTION ORDER — numbers now match the running order

**Renumbered 2026-07-30 (owner).** The old stable-name scheme was retired: the
workflow is now numbered in the order it actually runs.

```
0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10
                        ▲   ▲   ▲   ▲    ▲
          author, gates ┘   │   │   │    └ rundown, sole owner pause
          only, NO judge    │   │   └ sweep only; continue directly
                            │   └ adjudicate judge rejections
                            └ judge ONCE, after the audit
```

**Legacy mapping for old notes:** old step 9 (and the retired old step 8 duties)
is now **step 6**; old step 6 is now **step 7**; old step 7 is now **step 8**.
The old step 10 sweep is now **step 9**; its former final rundown and owner
pause are now the distinct **step 10**. Historical research notes may still use
the old numbers; normative instructions below use the new ones.

**Why the judge stays after the audit.** Measured on `frontier-1`: **292 judge
calls for 212 items.** Audits rewrite prose, and SCHEMA §3 correctly voids a
verdict on rewritten text — so **80 calls (27%) were repeats of an item already
judged, and 30 earned passes were destroyed** and had to be bought again.
Judging after the audit costs nothing in coverage — every item is still judged —
and the verdicts describe the text that ships.

### Context-continuity checkpoint (every agent, owner 2026-08-03)

Once active context reaches **60%**, the agent automatically saves a
durable checkpoint at the next safe boundary (preferably after the current task
or gate, never by abandoning work mid-operation), not a workflow pause. Update
`research/<run>-RESUME.md` (or the active named-run equivalent) with the
owner instructions that differ from the standing rules, current numbered step
and frozen-text state, batches, active agents/ownership, material artifact paths
and gate results, ledger paths, open defects and constraints, working-tree
baseline, and the exact next action. It must be concise, factual, and contain no
credentials or copied long transcripts. After saving the checkpoint, compact at
a convenient safe boundary whenever the platform offers or performs compaction;
then read the checkpoint first, verify any action-critical state from disk, and
immediately continue the same step. Checkpoints are updated after material state
changes; they neither authorize publication nor create an owner pause.

Beta-n-i and Alpha-n apply the same procedure at **60% of their own context
length**. A Beta's checkpoint is an appended, concise section of its namespaced
`<run>-batch-<i>.notes.md`; Alpha's is in its namespaced Alpha report or
handoff. Those role checkpoints identify the owned artifact set, current
substage, completed checks, open mathematical question/constraint, and exact
next action. On resumption the same agent reads it and verifies the relevant
disk state before continuing. Nobody replays its context or repeats its brief.

## Step 0 — Batch (mechanical)

1. Compute the **frontier from disk**, never from a remembered page count: an
   unpublished page all of whose `requires` are published. Do not trust
   `rounds.mjs` levels for this — they ignore publication state.
2. Divide the level's **A-pages into groups of at most 2**. A batch = one group
   **plus its example siblings**, so at most 4 pages. A batch always contains at
   least one A-page; a batch of orphan B-pages is not a defined shape.
3. **Pack to the cap of 2** by prerequisite affinity, so seams fall *inside* a
   batch. `content-policy.mjs --manifest-only` rejects a future batch manifest with more than
   two A pages. Merging batches can only remove cross-batch edges.
4. Report the **cross-batch seam count before spawning**. If the pages have no
   item lists yet the count cannot be computed — say so rather than reporting 0.
4b. `autopilot plan` also assembles the **design-vs-spec drift evidence**
   (`<run>-drift-evidence.json`) and writes the review task. The review itself
   is step 1's `drift` unit — an Alpha reads each pair's design section against
   the spec closure, applies backward `requires` edges, and records a
   higher-order edge as blocked; `drift-review-check.mjs` gates step 1 on the
   report (`ARCHITECTURE.md` §3.11e-3). Caught here, drift is a one-line spec
   edit; caught at step 4 it is `undeclared-prereq` after the citations exist.
5. Honour any **owner-directed scope obligation** standing against the next
   build. Such an obligation names a specific frontier pair that the batch
   selection MUST include; it is not a preference to weigh against affinity
   packing, and a build that omits it is incomplete however clean its gates are.
   An obligation is discharged when its pair publishes, and the entry is struck
   from the list below in that same commit.

**Standing scope obligations.**

*None outstanding.*

The RA-27b obligation (`the-integral-logarithm-and-its-characterisations` + its
B companion, orders 178.1/178.2; owner, 2026-08-11) was **discharged and struck
on 2026-08-13**, when the pair published in run `frontier-11`. All three gaps
closed and were verified by an independent step-6 reader that did not author
them: the integral-first `L(x) := \int_1^x dt/t` developed with no reference to
`exp` in any proof and identified by a single citation of
`thm-exponential-ivp-uniqueness`; the continuous and differentiable
functional-equation characterisations; and `thm-logarithm-definition-equivalence`
with `rem-logarithm-roadmap-and-circularity`. Its design remains recorded at
`research/plan-realanalysis-pages.md` §RA-27b.

## Step 1 — Scaffold (Beta-n-i, all batches in parallel)

Each Beta reads the prose scaffold sections for its pages, plus every published
item it intends to cite — **the item on disk, not the scaffold's description of
it** — and emits machine-readable per-item scaffolds.

**Source-grounded research pass (owner, 2026-07-30).** Before fixing the item
list, each Beta searches reputable mathematical sources on the web for the
pair's definitions, theorem and corollary statements, counterexamples, and proof
strategies. Prefer authoritative or scholarly sources such as peer-reviewed or
open textbooks, university-hosted notes, the Stacks Project, and the
Encyclopedia of Mathematics. Verify every URL recorded in the notes, say what
planned material it supports, and record convention disagreements rather than
silently choosing one. Web research informs the scaffold; it does not turn
session-authored material into fabricated scraped provenance.

**Canonical-coverage harvest (owner, 2026-08-11).** Finding a source is not
reading it. Each pair needs **at least two independent treatments**, at least
one a textbook, monograph, or full lecture-note set; an encyclopedia entry is a
convention tiebreaker and never a pair's primary backing. For each source, Beta
records the exact chapter/section range read and enumerates **that source's own
section and named-result headings** across it, then gives every heading a
disposition: `included` with the scaffolded item id, `inline` with the item
absorbing it, `already-published` with the published id, or `deferred` /
`out-of-scope` with a written reason about that specific result. The output is
`research/<run>-batch-<i>.coverage.json`, and `coverage-checklist.mjs` is a
required gate at **step 2 and step 6** — a missing checklist is a missing
receipt, not a skip. This is the only gate in the system that can see a result
that was never written; every other one reads what is there and asks whether it
is true. It exists because `group-actions-and-cayleys-theorem` published without
the orbit–stabiliser theorem while citing a source titled "Orbits and
stabilizers". Alpha checks faithfulness to the sources at step 6; the gate checks
structure only.

**Component-provenance and truth-risk pass (owner, 2026-08-02).** For every planned
mathematical-content item, including definitions, propositions, theorems,
lemmas, corollaries, examples, counterexamples, false statements, and
mathematical remarks, Beta records `provenance.statement` and `provenance.proof`
with a rationale for each in its batch notes. A claim/witness/construction not
both well-established and documented in reliable literature has
`provenance.statement: ai-generated`.
That label requires a heightened truth check: when there is concrete doubt,
Beta searches for a counterexample before keeping or repairing the item. A proof
repair alone does not establish the Statement; a counterexample requires a
narrower claim, a different witness, or a dropped item.

**Generated-claim minimization pass (owner, 2026-08-01).** The scaffold starts
from source-backed statements; do not mint an AI-generated theorem,
proposition, definition, false statement, or mathematical remark to add
richness or bridge a proof. A generated corollary is allowed only when directly
and easily verifiable from stated material, and generated examples/counterexamples
only with a checkable witness. Every AI-generated Statement/Construction is
non-load-bearing: it may never be a `deps` target. Keep a would-be generated
proof-decomposition lemma inline or replace it with a literature-derived or
AI-altered statement.

**Published-library read and closure pass (owner, 2026-08-01).** Beta has read
access to the full published `items/` and `library/` corpus. It must search the
pool before minting ids and open every published dependency it proposes, checking
the exact Definition or Statement, hypotheses, conclusion, direction, and
`status: published`. Never choose a dependency whose `provenance.statement` is
`ai-generated`; its proof provenance is irrelevant. Literature-derived and
AI-altered statements are eligible but never auto-trusted: reopen the target
and, whenever an AI adaptation leaves doubt, verify its exact statement and
conventions against reputable literature. Every load-bearing
dependency must normally be either an earlier item inside the A/B pair or
established by published content on a strictly earlier page. If not, first
search an exact reputable source and attempt a local proof; then decompose,
rescope, or drop it with a licensing note unless the documented external
fallback applies.

**Per-pair richness pass (owner, 2026-07-30).** For each A/B pair independently,
the Beta must (1) split a theorem or lemma with a long, multi-part proof into
focused earlier intermediate lemmas when that improves reuse, auditability, or
exposition; and (2) inspect every substantial result for useful immediate
corollaries that are cheap to prove. Do not create cosmetic variants or trivial
microlemmas. `validate-plan` now warns only above **100 total items on an A page**,
raised from 60. One hundred is a review ceiling, not a target or minimum: do not pad,
and do not drop valuable results merely for ergonomics. If coherent content
exceeds it, retain the mathematics and report a possible structural page split.

**Hard constraint — plan order.** An item may cite only an item earlier on its
own page, or an item on a page with a strictly smaller `order`. No exceptions.
Fractional orders exist (`formal-laurent-series-field` is 31.5), so a page can be
inserted without renumbering.

**Namespaced write protocol.** Beta may read anything and run any gate, but
writes **only** its three `research/<run>-batch-<i>.*` files. Parallel batches
writing shared prose would overwrite each other silently — prose is not gated.
The third is `research/<run>-batch-<i>.proof-contracts.json`, the
machine-readable proof-obligation, citation, and boundary worksheet required by
`QUALITY-CONTROLS.md`; `merge-proof-contracts.mjs` merges the batch files as a
gate, and they are never jointly edited.

## Step 2 — Resolve dependencies (Beta-n-i)

Every external dependency must resolve to one of: a **published item on disk**;
an item **earlier on the same page**; an item on a **page earlier in plan order**
inside this level; or a **declared forward reference**.

Priority order, owner's words: **mathematical accuracy and correct dependency
citation are non-negotiable; then minimize forward references; then preserve
mathematical richness.**

**Build the machinery; split the page (owner, 2026-08-11).** If a theorem needs
definitions or theorems the library has not established, **build them**. Dropping
an important result because a prerequisite is missing is the lazy approach and is
no longer a permitted disposition. Its pressure valve is the ceiling: **an A page
over 60 items is split into two or more A pages**, each with its own B companion
and summary, enforced as `validate-plan.mjs` error `size` at steps 0, 2 and 4.
Split before authoring — after authoring it is a rewrite. Splitting is never
dropping; every result keeps a home.

**Self-contained scope and external fallback (hard rule).** A theorem or example
needing machinery beyond current scope — a whole subject area the library has not
reached, not a lemma that could have been written — is **dropped from the
scaffold with a note recording why and what would license it**. Before dropping
it, Beta must avoid `ai-generated` dependencies, search reputable sources for
the exact statement and conventions of a needed well-known result, and attempt
to prove that result from available library dependencies, **building the
prerequisites that proof needs**. Only if that local
proof cannot be built in scope may Beta use the last-resort external fallback:
create a source-cited `rem-` item with `proved_here: false`, list it in `deps`,
and record the exact source, failed in-library route, and necessity in the batch
notes and proof contract. `external_refs` is only for a non-load-bearing
mention; it cannot conceal a logical dependency. The fuchsia ‡ marker is the
external-dependency tag. Foundational axioms the library has already adopted —
`def-axiom-of-choice`, `def-countable-choice`, `def-dependent-choice` — are
assumed rather than derived, so depending on one is not an unproved dependency;
the metamathematical independence facts *about* them (Cohen forcing, the
Feferman-Levy model, the constructible universe) are exempt on the same grounds
and under the same limit, that they are cited as external facts **about** an
axiom and never used as a step inside a mathematical proof. **A dropped item is
deferred, not deleted — the note is
what makes it recoverable.** Since 2026-08-11 that note has a machine-checked
home: a dropped result is a `deferred` or `out-of-scope` row in the batch's
`coverage.json`, with a reason naming that specific result.
`coverage-checklist.mjs` runs here as a required gate, and it is what stops a
drop from being silent rather than recorded.

**Decompose or rescope before you drop.** Dropping is the last of the three
dispositions and not the first: a result that will not fit whole may still fit
decomposed into parts the library can establish, or restated at the strength the
current scope supports. What is genuinely dropped is added back later, at or
below the current dependency level, as the advanced topics are developed.

**Where it bites first.** A scaffold that says "this is true but the standard
proof uses Lebesgue measurability", or that reaches for a Vitali set, a
non-measurable function, a positive-measure hypothesis, or a Banach-space
theorem, triggers the exact-source search and local-proof attempt above; absent
the documented fallback, it is dropped and noted.

**The fallback is the ‡ tier's only new load-bearing use.** The fuchsia / dotted
/ ‡ tier otherwise stays a catalogue — the `deferred-*` pages are its main body —
and is never a general licence to build on unproved material; the marker is what
makes the one exception honest to a reader instead of hiding it. The same four
records the batch notes carry are machine-required in the item's
`external_dependency` frontmatter block — `source_url`, `exact_statement`,
`local_proof_attempt`, `necessity` — and `source_url` must exactly match one of
that item's `sources.references` URLs. `content-policy.mjs` enforces both, and
also rejects an `external_dependency` block on an item that is not a
`proved_here: false` fallback record.

**This is forward-looking** (owner: "from now on"). Published items are not
retrofitted: existing external dependencies keep their recorded provenance, and
only new ones must satisfy the source-checked fallback above.

**Citation liveness (owner, 2026-08-15).** `url-sweep.mjs --coverage … --recover
--fail-on-dead` also runs here as a required gate. The checklist above proves a
source URL is *present*; this proves a reader can *open* it. On `frontier-13` a
batch cited lecture notes returning 404 — 47 of 114 rows and 15 items rested on
them — and every gate was green; only an Alpha trying the link caught it.

**When it fails, RECOVER BEFORE YOU RE-SOURCE.** The gate prints the archived
snapshot when one exists, and it looks under every host variant rather than the
hostname in the citation — a document moved behind a new subdomain is archived
only under its old host, so the citation's own hostname reads as "never
archived". Swap the citation to the snapshot. **Re-sourcing the page onto a
different text is the last resort, not the first move:** on `frontier-13` it cost
a 42-minute re-harvest and an instruction naming a chapter that did not contain
the material, while the notes were recoverable the whole time. Re-source only
when the gate reports no snapshot under any variant. Full rationale:
`ARCHITECTURE.md` §3.11c.

**Reuse discipline.** Ids are IMMUTABLE on `main`. Grep `items/` and
`plan-spec.json` before minting; reuse or alias an existing id for an existing
statement.

## The engine — no stage waits on a human, and none waits on a model

**Every stage boundary is a mechanical trigger.** `tools/autopilot/` holds the
stage table: what each stage owes, which result files cover it, which gates it
must pass, and what to dispatch for whatever is still missing. It reads all of
that from disk, so a stage cleared by a hand-run dispatch is picked up without
restarting anything.

```
npx tsx tools/autopilot/bin/autopilot.mts doctor --run <run>   # before you start
npx tsx tools/autopilot/bin/autopilot.mts start  --run <run> --detach
npx tsx tools/autopilot/bin/autopilot.mts status               # where the build is
```

The 2026-08-15 design put a `supervisor` agent on this boundary to judge whether
a stage was finished. That was the right diagnosis — the measured cost of a
model on the critical path was ~5h of idle pipeline across three occurrences on
`frontier-13` — and the wrong cure, because it moved the transition from one
model to another. **A cleared stage is a dispatch trigger, never a reporting
checkpoint**, and whether a stage is cleared is a predicate over files on disk.
The role, its brief and `run-supervisor.mjs` are all deleted.

**No model is on the critical path at all.** Steps 3, 6 and 8 dispatch to an
Alpha for judgment; step 4's splice is `tools/splice-plan.mjs`; the gates,
retries, blockers and transitions are the engine's. `ARCHITECTURE.md` §3.11d.

**Every stage must be able to fail.** A stage declares a gate or an explicit
`gatesWaived` reason, and the terminal stage may not waive. `frontier-14`
reached the end of step 10 with its receipt gate red, two confirmed-fatal proofs
unrepaired and sixteen judge rejections unread, because the last stage declared
an empty gate list and an empty list read as "passed".

**Two self-correcting loops**, each bounded, each dispatching from a receipt of
ids rather than from prose:

| loop | clears when | receipt |
|---|---|---|
| step 3 review → Beta fix → re-check | every pair `sufficient` | `<run>-scaffold-closure.json` |
| step 7 judge → adjudicate → repair → rejudge | every item paired, every rejection adjudicated, no open fatal | `<run>-judge-closure.json` |

## Step 3 — Adjudicate recommendations (Alpha)

Alpha verifies every load-bearing claim from disk first (no stage advances
on an agent's report alone), then exercise best judgment and **approve or
decline** each Beta recommendation. Mathematical accuracy and correct citation
of dependencies are non-negotiable; among mathematically valid choices, minimize
forward references before preserving additional richness. I may investigate or
ask an agent for clarification before deciding, but routine scaffold
adjudication does not pause for owner approval. Every decision and its rationale
are logged.

**Then Alpha-n reviews every scaffold for breadth and depth (owner,
2026-08-11).** Alpha is spawned here, not at step 4, and it settles the Beta
recommendations itself before reviewing breadth and depth.

**Group Alphas (owner, 2026-08-14).** Divide the run's batches among Alphas at
**at most three batches each** and dispatch them together — the `alpha` lane cap
is 3. A group Alpha reads only its own batches, and touches a batch file only
within them (see the direct-repair licence below). Nothing else is shared: each
writes its own
`research/<run>-alpha-<g>-step3-scaffold-review.md` plus a machine-readable
`-step3-verdicts.json`, which `tools/scaffold-verdicts.mjs` merges into the run's
scaffold-closure receipt. This exists because one Alpha reading a whole level's scaffolds is the
same agent that later reads the whole level's proofs — `frontier-12` was 454
items — and step 3 is where a thin page is still cheap to fix. Concurrency here
is a ceiling, not a quota to spend: three concurrent Opus lanes burn a shared
Claude session limit that also feeds the lead Alpha, so run the groups in
series whenever the headroom is unknown. The scoping is what buys the accuracy;
the parallelism is optional.

For every pair the owning group Alpha reads the
`.pages.json`, `.notes.md` and `.coverage.json` together and asks whether the
standard development of the subject is actually present: are the results a
competent textbook chapter proves either scaffolded or disposed; is the harvest
faithful to the sources at their stated locators; are the declines real now that
a missing prerequisite must be **built** rather than declined; is the B page a
real examples development; is the proof decomposition honest; does the pair need
splitting at 60 items. Output is
`research/<run>-alpha-<g>-step3-scaffold-review.md`, a `sufficient` /
`insufficient` verdict per pair with the exact results to add and the source
that carries them. The `3-fix` stage routes findings to the owning Beta
mechanically, and the `3-recheck` gate will not clear while any pair is still
`insufficient`, so step 4 cannot splice past an unfixed finding.

**Alpha may repair the scaffold directly** (owner, 2026-08-16). The older rule
forbade it because two writers on one batch file overwrite each other silently;
the stage barrier removed that reason, since no Beta runs while step 3 does.
A wrong planned Statement is wrong before it is authored — correct it here,
where it costs a scaffold entry instead of a rewrite. Prefer routing genuine
breadth work to the owning Beta, which holds the sources. This is the last point where fixing thinness costs a scaffold edit
rather than a rewrite — it exists because `group-actions-and-cayleys-theorem`
published without the orbit–stabiliser theorem and nothing caught it until a
reader did. `briefs/alpha.md` §"Stage 0".

## Step 4 — Splice and propagate (mechanical + lead Alpha)

**The splice is not Alpha's.** `tools/splice-plan.mjs` transcribes the Beta
manifests' item lists into `plan-spec.json` mechanically, keeping `plan-spec`'s
page metadata, and refuses rather than guessing — on a problem it writes nothing
and names every one. It refuses when the manifest declares a `requires` edge the
plan does not, because adding a prerequisite is an adjudication and not a
transcription; when a page already carries a *different* spliced item list, which
needs the explicit `--update` that logs the delta id by id; when an A page exceeds
the 60-item ceiling, which must be split before authoring; and on a duplicate item
id anywhere in the plan, which would be a silent corruption. **The refusal is what
Alpha adjudicates.**

**Alpha-n was spawned at step 3** (owner, 2026-08-11; it used to be spawned
here) and resumes now to apply the `.notes.md` amendments into higher-level
prose scaffolds — one writer, so no silent overwrite. Do not splice a pair Alpha
marked `insufficient` at step 3 until its findings are resolved and it has
re-checked.

## Step 5 — Author (the scaffold Betas, by batch)

> **Authors do NOT judge (owner, 2026-07-28).** An author is finished when its
> gates are clean and its report is written. Judging is step 7 and runs after the
> step-6 audit. This is where most of the wall-clock saving lives.

**Model change (owner, 2026-07-31): authoring agents are GPT 5.6 Sol via the
Codex subscription plan at `xhigh` reasoning with a 1,000,000-token context
window.** GPT-family models are not called through ofox. Sol authors use the
same `briefs/authoring.md` contract and must emit normal repo files; the engine
runs the gates of record.

Each writes `items/<id>.md` and its `library/<category>/<page>.md`, `status:
draft`, `origin: session`. Every mathematical-content item, including examples,
counterexamples, false statements, and mathematical remarks, carries
separate `provenance.statement` and `provenance.proof` values under SCHEMA.md
with a reason for each in the batch notes. An AI-generated Statement/Construction
receives a counterexample search whenever its truthfulness is in concrete doubt;
an AI-generated proof alone does not alter the statement's eligibility. **Never** sets
`verification.audited`. Adding a dep to silence a checker when the proof does
not use it is the dominant historical defect class and is forbidden.

**Generated-claim authoring check (owner, 2026-08-01).** Do not expand the
approved scaffold with a newly invented theorem, proposition, definition, false
statement, lemma, or remark. Retain a generated corollary only when its
derivation is directly and easily verifiable, and use generated
examples/counterexamples only with checkable witnesses. Every AI-generated
Statement/Construction is non-load-bearing. Keep a would-be generated
proof-decomposition lemma inline or replace it with a source-backed statement.

**Dependency discipline (owner, 2026-07-31).** The scaffold Beta authors every
load-bearing citation with the actual cited Definition or Statement in view.
Quote it when practical; otherwise use the smallest faithful shortening,
preserving domain, hypotheses, quantifiers, direction, and conclusion. If the
real statement does not license a step, never silently strengthen its
restatement: add the necessary inline proof steps, reconsider the proof
strategy, or reconsider the truth/scope of the theorem, example, or
counterexample.

**Dependency provenance rule (owner, 2026-08-02).** Never make an
`ai-generated` Statement/Construction a load-bearing authoring dependency.
The target proof's provenance is irrelevant; literature-derived and AI-altered
statements remain eligible but an AI-adapted target must be source-checked
whenever its exact claim or conventions are in doubt. For each needed
well-known result absent from the library, search reputable sources for its
exact statement, prove that statement from available library dependencies when
possible, and use the new local proof. The only exception is the documented
`proved_here: false` external fallback from Step 2; it must remain visibly
marked and fully justified in the batch notes and proof contract.

**Proof-design discipline (owner, 2026-07-31).** Before drafting prose, Beta
maps each non-routine subclaim to a precise dependency or inline derivation,
then runs a boundary pass over empty cases, zero/one indices, degenerate
parameters, endpoints, nonempty selections, and each direction of every iff.
Every proof step may use only an explicit fact, earlier step, given hypothesis,
or elementary algebra. Separate conceptual moves belong in focused lemmas. A
claim whose proof cannot close from these licensed moves is narrowed or dropped,
not rescued by an overstrong citation.

**Durable contract gate (owner, 2026-08-01).** The author updates its own batch
proof-contract for every proof-bearing item. It covers every direct fact citation
with an exact source clause, every numbered proof step with stated inputs, and
all standard boundary cases. The engine merges batch contracts and runs the
strict proof-contract, finite-smoke, and risk-routing gates on the
whole level after Step 5. A finite smoke pass is only bounded falsification
evidence, never a proof.

**Future-scope containment gate (owner, 2026-08-01).** After authoring, the
engine runs `tools/content-policy.mjs` on every batch manifest. It requires
both component-provenance tags on every in-flight item, restricts generated
content to non-load-bearing corollary/example roles, forbids every
AI-generated Statement/Construction as a dependency target, and requires a structured
source/local-proof/necessity record for any external fallback. Then generate
`audit-manifest.mjs --json`; Alpha's Step-6 receipt is bound to that actual
relationship manifest, not a self-reported list of citations.

**Narrow published-dependency exception (owner, 2026-08-01).** A Step-5 Beta
may repair a published dependency used by its current level only under
`CLAUDE.md`'s obvious-published-dependency-repair protocol. It first records the
specific falsehood and exact source or elementary derivation in its namespaced
batch notes; it then takes a dedicated touch baseline before editing. This is
not permission to edit unrelated published material, alter a convention by
preference, rename/remove an id, or make a speculative theorem repair. Alpha
owns the shared repair ledger and independently certifies a Beta's completed
repair. The corrected public interface and every consumer in `impact-audit`'s
computed set must be resolved before the level can continue.

Every A-page summary is written last in exactly two nonempty prose paragraphs,
each under 150 words. The first gives mathematical background and names the
definitions and results from declared dependencies that are used. The second
names the main definitions and theorems developed on the page and explains their
general logical progression. A B page has no authored summary body. A summaries
remain subject to SCHEMA §6's bans on counts, self-ranking, unsupported
reading-position claims, and surveys of other pages.

**AUTHOR THE WHOLE LEVEL AT ONCE (owner, 2026-07-28).** A dependency level is
authored in ONE round, every one- or two-pair Beta batch in it dispatched in
parallel, however wide the level is. Do **not** split a level into sequential
sub-rounds.

The old `--max 8` cap did exactly that, turning 19 dependency levels into 36
rounds. It bought nothing: pages sharing a level are *provably* mutually
independent — a dependency would force the dependent page to a strictly higher
level — so there is no ordering to discover inside a level and no risk that
splitting mitigates. It only serialised work that could have run at once.

`tools/rounds.mjs` now emits one round per level by default. `--max N` still
exists for the rare case where the owner wants to cap concurrency for a reason
they can state; it is opt-in and no longer the default.

**What still forces sequencing is a real dependency edge, and only that.** Level
9 (mixed) ran as three rounds because its five pairs sat at four levels: order 129
depends on 70, and orders 131 and 137 both depend on 129. Splitting there was
correct. Splitting a single level is not.

## Step 6 — Audit (independent readers, then Alpha-n)

**Model (owner, 2026-07-31, amended 2026-08-10): Beta-n-i is GPT 5.6 Sol run
through the Codex subscription plan at `xhigh` reasoning with a 1,000,000-token
context window. Alpha-n is Claude Opus 5 on the `claude` runner at `xhigh` with
the same 1,000,000-token window (model id `claude-opus-5[1m]`).** Do
not run GPT-family audit work through ofox. Alpha's read-only proof-refuters and
the independent Step-6 readers stay on Sol, so the reading tier below Alpha
remains GPT-family.

This is the final mathematical reading tier before the judge and the owner. It
has three ordered parts.

**Contract and risk coverage (owner, 2026-08-01).** Independent readers update
the contract belonging to the batch they audit whenever a repair changes proof
text, citations, step numbers, or boundary handling. Before Step 7, Alpha merges
the batch contracts and re-runs the three gates in `QUALITY-CONTROLS.md`. Every
high/critical risk item receives an additional Alpha proof-refuter reading; the
Alpha `risk_review` field records what that reading established or why a routing
signal was inapplicable. This does not replace full reader coverage for any
ordinary item.

The engine owns both endpoints of the impact window: `pre-author` is taken at
its own stage before Step 5, `post-6b` at its own stage after the 6b repairs,
and the 6c gate diffs exactly `pre-author → post-6b` — an explicit right
endpoint, because a defaulted one resolved to the baseline itself and the diff
was empty by construction. `impact-audit.mjs` computes the transitive
reverse-`deps` cone and direct citation consumers of every interface change in
that window; Alpha records a concrete disposition for every listed item in
`research/<run>-impact.json` before Step 7. A proof-only repair remains subject
to its own audit and rejudge, but does not create a false downstream work queue.

For an owner-delegated published-dependency repair, take the baseline immediately
before the repair, not merely at the start of authoring. Alpha appends the exact
old and corrected text, source or elementary derivation, provenance transition,
independent reviewer, impact-receipt path, and targeted paired-judge result to
`research/<run>-published-dependency-repairs.md`. A Beta repair is reviewed
by Alpha; an Alpha repair is reviewed by an independent Step-6 reader. Clear
the stale `judge` block and obsolete `audited` stamp, then use the independent
current `verified` block with `scope: published-dependency-repair` and
`delegated_by: owner` only after that review. A `proved_here: false` item instead
needs a fresh source check. Do not continue with an unresolved consumer queue.

**Alpha proof-refuters (owner, 2026-07-31).** For every future Alpha-n audit,
Alpha dispatches one or more GPT 5.6 Sol proof-reading subagents with
**read-only access** to the in-flight level and all published library content.
Where the runtime exposes file permissions, grant no write capability; otherwise
their prompt forbids `apply_patch`, file writes, and fixes. They work with the
same adversarial standard as both step-7 judges: trace every proof step against
its cited facts and dependencies, read those dependencies before claiming they
are insufficient, and report only a specific logical, statement, hypothesis, or
citation defect. They return evidence, never edits. Alpha-n remains the single
adjudicator: it verifies every reported issue from disk, may refute a false
positive, and alone may repair and gate in-flight content. The only public-item
exception is the owner-delegated obvious-published-dependency protocol above.

### 6a. Independent batch audits, in parallel

**Who runs 6a and 6b (owner, 2026-08-14).** The **group Alpha** that owns a batch
runs 6a and 6b for it — at most three batches per Alpha, the same division used
at step 3, so the Alpha adjudicating a batch is the one that reviewed its
scaffold. 6c below stays with the **lead Alpha** alone, because the edges it
audits are exactly the ones no group can see. Step 8 likewise: one adjudicator,
one exact-hash ledger.

Alpha assigns independent readers for each batch. A Beta that scaffolded or
authored a batch is excluded from auditing it. Independent readers work in
parallel and have write authority over their assigned in-flight
batch files.

For every authored item in the batch, the independent reader must:

1. **Verify every proof step of every proof skeptically.** Read the step, its
   cited facts, and the cited dependency items from disk as a refuter would. A
   step is clean only if the cited material mathematically licenses exactly what
   the step claims.
2. **Verify every dependency citation in the batch**, syntactically and
   semantically: the target exists, is an allowed earlier/same-page dependency or
   declared forward reference, and actually states the proposition for which it
   is cited. The common failure mode is citing a true theorem for a stronger or
   different claim than it makes.
3. **Check component provenance and AI-generated truth risk.** For every
mathematical-content item, including examples, counterexamples, false
   statements, and mathematical remarks, verify `provenance.statement` and
   `provenance.proof` separately against the actual source and edit history.
   A material AI change to a source-backed statement/witness requires
   statement `ai-altered`; an AI-generated proof does not taint a source-backed
   statement. Reject every `deps` target whose Statement/Construction is
   `ai-generated`, but permit literature-derived and AI-altered statements
   regardless of proof provenance. For an AI-adapted target, reopen its exact
   statement and source-check it against reputable literature whenever the
   adaptation, hypotheses, conclusion, or conventions leave doubt. For an
   AI-generated Statement/Construction
   with any concrete truth concern, search for a relevant counterexample before
   accepting a repair. Do not backfill legacy content.
4. **Read the A-page summaries and Remarks with proof-step suspicion.** Verify
   the fixed two-paragraph, under-150-words-per-paragraph A-summary contract and
   the absence of an authored B-page body. No count in prose, no unsupported
   position claim, and no corpus-wide scope denial.
5. **Fix every defect it is licensed to fix**, not merely report it. If the fix
   requires adding or deleting a lemma/proposition/theorem/corollary/example/
   counterexample/false-statement, the independent reader may do so inside the in-flight level.
   Anything it adds must be personally authored by that independent reader, including the full
   proof when the kind requires one. Item ids remain immutable once on `main`.
6. Delete any stale `verification.judge` block after a material rewrite, run
   `tools/reflow.mts` and `tools/precheck.mts` on changed proof items, and run the
   relevant gates locally. Do **not** judge; judging is step 7.

Each independent reader reports to Alpha-n: every item changed; every added/deleted result and
why; every proof step or citation defect found; unresolved concerns; and an
explicit coverage statement saying that every proof step and every dependency
citation in the batch was read, or naming any exception.

### 6b. Alpha audit of independent-reader fixes

After all independent readers finish, Alpha-n audits the mistakes and fixes they
reported, plus the evidence reported by Alpha's read-only proof-refuters. Alpha
verifies from disk, not from any report: changed item text, added or deleted
results, dependency lists, page lists, component-provenance tags, stale judge blocks, and
gate status.
Alpha may confirm, refute, amend, revert, or extend a reported error or
independent-reader fix. If Alpha adds a result, Alpha personally authors its proof.

### 6c. Alpha cross-batch and cross-level citation audit

Alpha-n then audits every dependency edge from the in-flight level that is not
wholly inside one Beta batch:

- cross-batch edges inside the level;
- backward edges to already-published library content;
- any declared forward reference, which should be few and explicitly justified.

Alpha has full read access to all published content. For each edge, Alpha reads
the source item's use and the target item on disk and verifies that the citation
is semantically and mathematically accurate: right statement, right hypotheses,
right direction, no hidden stronger claim. Alpha fixes failures directly when
possible and may add/delete in-flight results as needed, personally authoring any
proof it adds.

If that reading discovers an obvious falsehood in the published dependency
itself, Alpha may apply the narrowly delegated published-dependency repair rather
than merely reporting it. The exact source or elementary derivation, dedicated
touch baseline, full impact receipt, independent certification, provenance
transition, and targeted paired rejudge remain mandatory.

The mechanical backstop is `tools/audit-manifest.mjs`: generate the per-batch and
cross-edge checklist, including `deps`, `justified_by`, `forward_refs`, and
`external_refs`, then reconcile Alpha's report against it so omission is visible.
The script enumerates relationships; the semantic verdict is the Beta/Alpha
reader's responsibility.

**Fatal, must fix:** mathematical inaccuracy; logical invalidity; a step not
licensed by its cited facts; citing an item for a claim it does not make; a title
or Statement asserting more than the proof gives; unlicensed forward references;
and any cross-level citation whose target is not actually strong enough.
An omitted bridge a competent human reader closes in 30 seconds is nonfatal:
record or polish it if useful, but do not escalate it as a fatal proof defect.

**Interaction with the twice-touched rule.** A repair here to an item already
repaired earlier takes it to two touches and escalates to a personal audit by the
lead Alpha. Alpha-n reports such repairs in a separate list and still makes
necessary fixes.

## Step 7 — Judge (after the audit, one sweep, on final text)

**Model change (owner, 2026-07-31): the session-item judges are DeepSeek V4 Pro
directly at maximum reasoning and freshly spawned Claude Sonnet 5 through the
Codex subscription at `xhigh`.** `tools/judge.mts --parallel` supports a
one-item paired call; `tools/judge-sweep.mjs` instead uses one file-backed,
cross-process model pools with **24 concurrent DeepSeek calls and 16 concurrent
Sonnet calls**. Either model moves to its next item as soon as one of its own
slots is free (32 calls maximum combined). Both receive the same exact hash-attested frozen prompt
for the item. DeepSeek remains the cross-family screen from the GPT 5.6 Sol
author; Sonnet is retained as an independent same-context comparison lane, not
as a cross-family claim. The harness retains the historical injection-test
record.

`tools/judge.mts` loads `briefs/judge-conventions.txt` into its frozen prompt by
default; `briefs/codex-judge.md` is historical human documentation. Each judge's
context unit stays the **A/B pair**: the item page and its `-examples` companion
in full, plus only the pages the item's own page both declares in `requires` and
actually cites. Compute that batch mechanically; do not pass every sibling page.

**Coverage is mandatory and level-wide (owner, 2026-07-31).** The initial
Step-7 sweep receives **every A-page id in the completed level**, so both judges
read every item in every A/B pair — whether or not Alpha or an independent
reader touched that item at Step 6. A selected subset is not a valid initial
Step-7 sweep. `--items` is reserved for a later Alpha-selected rejudge after a
material repair, and `--models` only recovers an incomplete verdict.

Record a full verdict ledger at `research/<run>-judge.jsonl` with at least
`{id, model, keep, reason, context_sha256, at}` for **both** model calls on
every item. The two `context_sha256` values must match: this is the mechanical
attestation that the judges saw the same frozen context. Use
`tools/judge-sweep.mjs` to resume a selected page set. Pass its A-page ids: the
sweep automatically includes every selected A page's B/examples companion, so
all items in each A/B pair receive coverage. It skips only complete
pairs whose hash also matches freshly assembled current context.
The sweep assembles each selected item's current prompt hash once before
scheduling and uses that single attestation for both model queues.
For a targeted recovery, `--models <model>` retries only that model's missing
current-context verdicts; ordinary first-pass sweeps omit the flag and run both.
The sweep permits at most 16 calls per lane at once (32
combined), with no per-item barrier: a finished call takes the next eligible
call for its own model while the other model continues independently.
It writes a separate per-attempt ledger with latency, HTTP/rate-limit metadata,
finish reason, and structured transport cause. An empty response with no terminal
finish reason is retried with jitter up to the normal three-attempt limit;
the sweep, rather than a slot-holding child, schedules that retry, so its model
slot is released during the wait and other calls in that lane continue.
DeepSeek's empty `finish_reason: length` first pass is retried once at 80k tokens
after its ordinary 40k-token maximum-reasoning pass. A second length stop remains an
explicit reasoning-budget null.
`verification.judge` records a pass only after both models passed the text.
Never record a pass a judge did not give; a null/failed call is not a verdict.
At step 10, compare both-pass, both-reject, Sonnet-only rejection, DeepSeek-only
rejection, and incomplete/null outcomes with their adjudications. Record one
owner adjudication for every model rejection in
`research/<run>-judge-adjudications.jsonl`, keyed by `{id, model,
context_sha256}`, with `outcome` (`confirmed_fatal`, `confirmed_nonfatal`, or
`false_positive`) and, when fatal, `defect_type` (`logic`,
`dependency_citation`, or `other`). Run
`tools/judge-compare.mjs <ledger> --adjudications <file>` in step 10: only its
adjudicated fatal logic/dependency-citation counts support a judge-effectiveness
comparison; raw rejection counts do not.

The existing injection record for GLM and DeepSeek v4 Flash remains evidence
that a low rejection rate is not a judge-quality metric; it does not substitute
for the paired per-level comparison required here.

**Whole-level coverage receipt (owner, 2026-08-01).** After the initial sweep,
generate `research/<run>-audit-coverage.json` with
`tools/level-coverage.mjs --template`. Alpha completes only its reviewer and
attestation fields. Before Step 8, rerun `level-coverage.mjs` with the merged
proof contract, paired ledger, dependency-spine receipt, Alpha receipt, and
`--verify-current-context`. The gate
recomputes the item/relationship manifest from disk, requires a contract for
every proof-bearing item, and requires one usable DeepSeek and Sonnet verdict on
the same *current* frozen prompt for every item. It is not satisfied by a broad
agent report or by a stale pass after a repair. Give it
`--judge-adjudications research/<run>-judge-adjudications.jsonl`: a current
rejection passes only with Alpha's exact-hash `confirmed_nonfatal` or
`false_positive` decision; a missing decision or `confirmed_fatal` remains a
hard failure. The spine receipt independently
reads the proof-bearing items among the largest transitive dependency cones and
lapses whenever their mathematical content changes.

## Step 8 — Adjudicate judge rejections (Alpha-n)

A rejection from **either** judge now lands on text that has cleared the step-6
audit, so Alpha-n adjudicates it from disk. **Adjudicate, do not
comply.** Each rejection gets either a fix, with the defect named, or a
refutation, with a verbatim quote from the cited item. Append a per-model,
per-context owner decision to `research/<run>-judge-adjudications.jsonl` so
step 10 can separate confirmed fatal logic/dependency-citation detections from
nonfatal findings and false positives. Then delete
`verification.judge` on anything materially rewritten and re-run both judges
only on what changed.

**Step 8 is fatal-only (R1, owner 2026-08-03).** Only a `confirmed_fatal`
adjudication licenses an edit. `confirmed_nonfatal` and `false_positive` close
the rejection on their ledger row and change nothing: no content, page,
frontmatter, contract, impact, or judge mutation. Cosmetic polish and
30-second-gap tidying are **step-6** work, done before the text is frozen, where
no verdict exists to void. Any edit here is a material rewrite under SCHEMA §3,
so a polish voids the verdict, forces a rejudge, and resamples a refuter that
surfaces a fresh nitpick each run — an unbounded loop that costs two judge calls
a turn and converges on nothing. **Fatal repairs are uncapped**; the
twice-touched escalation remains advisory, because a proof that keeps yielding
real fatal defects is either converging toward correctness or is actually false.

Every adjudication row carries `item_sha256`, the full sha256 of the normalized
item text (verification block excluded) at adjudication time. Snapshot the
baseline immediately before adjudicating — the engine takes it as its own
`8-baseline` stage, for the reason `4-baseline` exists: taken afterwards it
licenses whatever happened. Then gate the stage:

```
node tools/touchlog.mjs snap research/<run>-touches.json "pre-step8"
# ... Alpha adjudicates and applies only confirmed-fatal repairs ...
node tools/step8-guard.mjs --touches research/<run>-touches.json \
  --baseline "pre-step8" --adjudications research/<run>-judge-adjudications.jsonl
# then CLOSE the window, so step 9 can edit without breaking this gate:
node tools/touchlog.mjs snap research/<run>-touches.json "after-step8-alpha"
# the engine's 8-adjudicate/8-rejudge gate lists re-run the guard mechanically
```

**Close the window, or the gate becomes unre-runnable.** `step8-guard` defaults
its upper bound to the **live working tree**, so once step 9 legitimately edits
anything, every later re-run of step 8 reports that edit as `nonfatal-edit` —
and a step-9 repair to an item no judge ever rejected can never be licensed by a
`confirmed_fatal`, so the gate stays red forever. Measured on run `zfc`. Snapshot
a closing label when Alpha finishes and pass it as `--against`; omit it only
while step 8 is still in progress.

`nonfatal-edit` names any item changed without a licensing confirmed-fatal row;
`judge-adjudication-unhashed` names a row that cannot license anything because
it records no text state. The guard is scoped to that explicit baseline window,
so a later legitimate stage — a step-9 scope-denial repair, an owner-directed
change — is never mistaken for a nonfatal polish. Ledgers predating R1 carry no
`item_sha256` at all and so can license nothing; those levels are published as
they stand rather than re-gated.

Any Step-8 public-interface repair also re-runs `impact-audit.mjs`; regenerate
the audit receipt and repeat the final `level-coverage.mjs
--verify-current-context` gate after its targeted paired rejudge. A stale
receipt or pair of ledger rows is not publication evidence.

**The rejudge is item-granular, not page-granular (owner, 2026-08-06).** The
judge's context unit is the whole A/B pair, so repairing one item moves the
frozen context hash of every item on that pair. Read strictly, that forced a
rejudge of every untouched sibling. `judge.mts` now records `item_sha256` on
every verdict beside `context_sha256`, and `level-coverage` accepts a verdict
pair cast against **byte-identical text of that item** even when the pair
context has moved. A repaired item is never covered that way — its own hash
changed, so it always rejudges — but its unedited page-mates are spared. Ledger
rows predating the field fall back to the strict context comparison and cannot
benefit. Alpha must therefore **report the exact ids it edited**: that list is
the rejudge set, and an unnamed repair reaches step 10 carrying a verdict cast
against text that no longer exists. This is the same rule and the same mechanism
as `AUDIT-WORKFLOW.md` §A8, which measured it: 2 repairs staled all 31 items on
a pair, 12 of which cited the repaired items nowhere, and 10 repairs across four
rounds cost ~130 rejudge calls.

Standing instruction: re-read your own Remarks with a numbered step's suspicion.
Remark prose is where falsehoods hide.

## Step 9 — Scope-denial sweep

### 9a. Scope-denial sweep of the published corpus

Every level ends with a scope-denial sweep of the published corpus, over ITEMS
AND PAGE SUMMARIES BOTH. Grep is the entry point, never the sweep: negation can
be carried by `neither`, `no item`, `lacks`, `absent from`, `silent on`,
`nowhere`, and many other forms. Check order-relative claims by position, not
only by phrasing, and look for the inverse defect too: a false claim that the
library DOES define/prove something.

Amendments to published pages land in the same commit that publishes the level,
never before, with `verification.audited` cleared so `depcheck` forces the
owner's re-audit. After any such repair, re-grep the file you repaired.

Do not pause after this sweep. Continue directly to step 10, including any
required re-grep or re-audit caused by a repair.

## Step 10 — Final rundown and sole owner pause

Full report: added/deleted in-flight results; forward references present; paired
judge coverage counted from the ledger and frontmatter on disk; DeepSeek/Sonnet
agreement, model-only findings, and the owner-adjudicated fatal logic and
dependency-citation detection comparison; gate results;
escalation set; Beta batch-audit coverage; Alpha cross-edge coverage; and
readiness to publish.

The rundown also contains a **concise but complete fatal-error report**. It
enumerates every publish-blocking mathematical defect encountered and fixed,
grouped first by type (invalid proof inference; incorrect or missing dependency
citation; false/overstrong definition, title, Statement, theorem, example or
witness; missing hypothesis or choice scope; circular/forward/out-of-scope use)
and then by location (title/Statement, proof/refutation, Facts/frontmatter
dependencies, Remark, page prose/summary). Each entry names the item/page and
states the fix disposition: dropped/deferred, restated/weakened, proof
repaired/replaced, prose repaired, dependencies added/removed/rebound, choice
hypothesis restored, or new lemma/result added. Counts and grouping keep it
concise; no fatal defect may be omitted. Beta audit ledgers, the Alpha ledger,
judge verdict log, touch ledger, and the Alpha adjudication ledger are the
evidence sources.

This is the **only owner pause** in the per-level build. Stop for the
owner here, short of owner audit, publication, commit, or push.

---

## The escalation rule (fires at any step)

A proof **refuted OR repaired more than once** is structurally suspect. Two
independent triggers; count **refutations + repairs combined, per item**:

1. **Judge refutations > 1 before step 6 completes** → name it in Alpha-n's
   step-6 brief; Alpha reviews **the proof and all neighbouring dependencies**,
   since a proof that keeps failing is often correct and resting on a bad
   neighbour.
2. **Refuted or fixed > 1 by any subagent, Alpha-n included** → the lead Alpha
   audits it **personally**, and this does not wait for step 6.

The personal audit must state the **nature** of the fault (mathematical
inaccuracy / mis-cited dependency / unjustified step / judge false positive) and
the **ramification of dropping** the result: what cites it, what breaks, whether
a weaker true statement serves. Record the finding in the escalation set and
continue the build; the end-of-step-10 report is the sole owner pause. Beta/Alpha
may add or delete in-flight draft results under step 6, but a published item or
an item outside the in-flight level is never removed without explicit owner
approval; defer that owner-bound decision to the step-10 report. At 21–24%
precision a repeated rejection can be a repeated false positive.

```
node tools/touchlog.mjs snap  research/<run>-touches.json "<stage>"   # after EVERY item-modifying stage
node tools/touchlog.mjs audit research/<run>-touches.json research/<run>-judge.jsonl
```

Repairs are **measured from disk**, never counted from an agent's report.

## Triage — the standing rule, binding on every actor including me

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Three prose rules (owner, 2026-07-28), enforced by `prosecheck.mjs`.**
  **(1) No count in prose** — not "seven items", not "half of this page". Every
  count written here has eventually been wrong, and nobody re-counts a count.
  **(2) No positional claim not derived from the spec** — name the page id or say
  "not built"; "a later page" was wrong seven times in one build. **(3) A scope
  denial is scoped to THIS PAGE'S DECLARED PREREQUISITES, never to "the
  library"** — the corpus-wide form is a claim no author can warrant, and one
  build falsified its own.
  **(4) A page summary describes the mathematics, never the page**, and a Remark
  justifies rather than surveys (SCHEMA §6). No counts, no self-ranking, no
  claims about other pages. No mechanical tier reads a summary at all.
- **Natural voice and citation fidelity (owner, 2026-07-30):** write direct,
  natural mathematical prose throughout, without canned headings,
  meta-commentary, or rhetorical filler. In `[F#]`, `[A#]`, or `[L#]` facts, use
  no AI-sounding labels or interpretive filler. State the cited
  proposition itself. Quote its Definition or Statement exactly when practical;
  if shortening, preserve the domain, quantifiers, hypotheses, conclusion, and
  direction with maximum fidelity. `Null definition: a null perturbation ...`
  is the defect pattern; the null-sequence condition itself is the repair.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

State it in every brief and in `--conventions`. The bar is a *rich,
self-contained, accurate* library, not a perfect one. Prefer one reusable lemma
over a repeated inline argument (`cor-archimedean-reciprocal` retired a gap in 24
items). **Do not trim landmarks.**

## The base gates and future-scope closures — the engine runs the authoritative pass

| gate | catches |
|---|---|
| `precheck.mts` | phase-proof format. `no-given`, `no-steps`, `no-qed`, `qed-not-final[-postrepair]`, `untagged-steps`, `bad-tag`, `strategy-missing(...)`. Strategies: direct, contradiction, cases, induction, contrapositive, constructive. Tag families open→discharge: `contrapositive-reduce`→`discharge-contrapositive`, `assume-contra`→`discharge-contradiction`, `base`/`ih`→`discharge-induction`, `assume-case`/`cases-exhaustive`→`cases`. **Line-based** — run `reflow.mts` first; adopt REPAIR output with `adopt-repair.mjs` |
| `depcheck.mjs` | actual-content id/kind/reference/cycle/page-publish checks, definition-justification direction, and `b-leaf-content` (no dependency onto a B-only item outside that B page). Warnings retain multi-home/orphan/citation leads and the single explicit legacy B-leaf edge. |
| `fwdcheck.mjs` | `forward-on-spine` (load-bearing forward ref on a def/lemma/prop/theorem), `forward-undeclared`, `forward-in-deps`, `forward-not-later`, `forward-same-page`, `forward-dangling`, `forward-unused`, `forward-cycle`, `stack-cycle`; marks `direct`/`inherited` |
| `extcheck.mjs` | `unproved-kind`, `unproved-has-proof`, `unproved-judged`, `unproved-precheck`, `unproved-on-published`, `unproved-uncited`, `external-dangling`, `external-in-deps`, `external-not-unproved`, `external-unused` |
| `citecheck.mjs` | mis-attribution heuristic — the largest historical defect class (14 of 50) |
| `rendercheck.mjs` | `wikilink-in-math`, `nested-dollar-in-display`, `dollar-in-tag`, `multiline-display`, `unclosed-display`, `unbalanced-inline-dollar`, `blank-line-in-inline-math`, `katex-parse-error` (**real KaTeX**), `frontmatter-unparsable` / `frontmatter-duplicate-key` (**the renderer's own `yaml`** — a file whose frontmatter throws is silently dropped from the corpus, and every published page listing it then 404s), `unreadable` |
| `validate-plan.mjs` | scaffold, **takes the spec path as an argument** (`node tools/validate-plan.mjs research/plan-spec.json`; bare = usage error, not a failure). Errors `resolve`, `requires-resolve`, `requires-cycle`, `item-cycle`, `page-cycle`, `prereq-order`, `undeclared-prereq`, `forward-ref`, `forward-whitelist`, `intra-order`, **`b-leaf`** (nothing may depend on a B page), `b-requires-a`, `dup-id`, `prefix`, `kind`, `companion`; warnings `orphan`, `size` (>100 A-page items; review only, never a pruning target), `redundant-prereq` (19 total). `--rehomed FILE` relaxes `dup-id` for the exact owner-approved re-homes it names (`ARCHITECTURE.md` §3.11a) |
| `depsource.mjs` | per dep: `published` / `planned-earlier` / `draft-page` / `homeless` / `planned-later` / `unresolved`. **Only `unresolved` fails.** `planned-later` is the forward-reference report — but it reads `deps` only and is **blind to `forward_refs`** |
| `prosecheck.mjs` | **the prose defect class**, which is where 100% of this library's found defects live. ERROR `position-contradiction` (a "later/earlier page" claim contradicting `plan-spec` order — decidable, no judgement). WARNINGS `count-in-prose`, `count-of-this-page`, `library-scope-denial`. `--warnings` lists them, `--strict` fails on them |

| `proof-contract.mjs` | strict, versioned proof-obligation / citation / boundary worksheet. Each direct fact citation gets a declared source and exact source clause; each numbered step gets exactly one stated-input entry; every standard boundary case is checked or specifically not applicable. Checks accountable links, not mathematical truth |
| `finite-smoke.mjs` | selected bounded countermodel searches for finite/combinatorial claims. A failure supplies a concrete model or convention discrepancy; a pass is **not** a general proof |
| `risk-report.mjs` | transparent high-risk routing (fan-in, proof length, iff, existence/well-definedness, boundary language, induction, quotients, limits). `--require-reviewed` requires an Alpha `risk_review` for high/critical items; it does not declare a defect. **It belongs to step 6, not step 5**: only Alpha writes a `risk_review`, and it does so at step 6, so step 5 computes tiers and step 6 requires dispositions (the same split the audit uses at A4 versus A6) |
| `content-policy.mjs` | future-batch component provenance, AI-generated-statement dependency prohibition, generated-claim containment, and structured external fallback. `--rehomed FILE` distinguishes an owner-approved re-home from an illegal id mint, and adds `batch-rehome-missing-item` (`ARCHITECTURE.md` §3.11a) |
| `impact-audit.mjs` | required Alpha disposition of every computed downstream consumer of a changed public interface |
| `step8-guard.mjs` | R1, step 8 is fatal-only: `nonfatal-edit` (an item changed since the `pre-step8` baseline with no `confirmed_fatal` adjudication against that text state), `judge-adjudication-unhashed` (a row with no `item_sha256`, which can license nothing). Warns on `step8-creation`/`step8-deletion`, which are step-6 powers. Fatal repairs are uncapped |
| `level-coverage.mjs` | batch/relationship/contract scope, plan-dependency reconciliation, current paired-judge coverage, Alpha receipt, and spine receipt |
| `spine-audit.mjs` | independent content-hashed read of proof-bearing items in the largest transitive dependency cones |

Helpers: `rounds.mjs` (static levels), `consumers.mjs --changed` (who cites what
I touched), `gen-spec.mjs` (regenerate the spec).

**To run a level without a session attached, `UNATTENDED.md` is normative:**
`tools/autopilot/` drives steps 0–10 and holds at the step-10 owner pause, with
`autopilot pause|resume|retry|skip|stop` to steer it and `bin/watchdog.sh` to survive
logout. It changes no rule in this file — it sequences them.

**Read a gate's counts off the tool, never off this summary.** `gates.mjs` prints
only the last six lines of a failing tool, and five times on run `zfc` that
understated the blocker: step 5's `risk-report` showed 6 of 60 missing risk
reviews, the step-6 coverage receipt showed 1 of 43 unreconciled plan entries,
`level-coverage` showed 1 of 10 warnings. Each time an agent briefed off the
summary planned against the wrong number. The tail now always carries a census
line (`[full output: N ERROR line(s), M WARN line(s), K earlier line(s) not
shown]`), but the census is a warning to re-run the tool, not a substitute for it.

**The gates for a step are a table, not a recollection:** the build's single
gate table is `tools/autopilot/stages/mathlib.mts`, run by the engine per stage
(`gates.mjs`'s build table is retired; its `--audit` table still serves the
published-page audit). A gate only ever reads — `reflow`, `adopt-repair` and
`merge-proof-contracts` write, so they are actions run before it — and it never
spends, so `judge-sweep` is the step-7 action while `level-coverage` is the
gate that checks its output. A required receipt that is
missing fails the step rather than being skipped.

**Before starting or resuming a level, run `node tools/preflight.mjs`** (add
`--judges` to also spend one minimal call per judge lane). It verifies the app
repo, tsx loader, precheck source, KaTeX, `yaml`, Codex CLI and auth, DeepSeek key
reachability, Node, git state and disk. It exists because several of those fail
*soft* — `rendercheck` SKIPS without KaTeX or `yaml` and still exits 0 — so a gate that
never ran reads like a gate that passed. `tools/paths.mjs` resolves the app repo
(`$PRESTIGE_APP_DIR`, else the sibling checkout, else the VPS path), and
`node tools/tsx-run.mjs tools/<x>.mts` is the invocation for every `.mts` tool.

## Publish (after owner audit)

Flip `status: published` — **that is the publish action**, the live site reads
this directory. A published page listing a draft item is a hard error. Commit
with conventional-commit style, **no `Co-Authored-By` trailers, ever**. GitHub is
backup only, never on the serving path.
