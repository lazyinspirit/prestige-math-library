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
| **orchestrator** | this session | batching, splicing, briefs, the **gate of record**, personal audits, ledgers, and reporting |
| **Alpha-n** | **GPT 5.6 Sol via the Codex subscription plan, `xhigh`, 1M-token context** | spawned at **step 4**, resumed at **steps 6 and 8**; dispatches read-only skeptical proof-refuters, adjudicates their and the paired judges' findings, applies/gates warranted repairs, propagates approved changes into higher-level prose, and audits every independent-reader fix and cross-batch/cross-level reference from disk |
| **Beta-n-i** | **GPT 5.6 Sol via the Codex subscription plan, `xhigh`, 1M-token context** | one per batch; steps 1–2 scaffolding and **step 5 authors all content in its batch** after Step 4. It never audits content it authored. |
| **independent Step-6 reader** | **GPT 5.6 Sol via the Codex subscription plan, `xhigh`, 1M-token context** | Alpha-assigned read-only or repair-capable audit role for content it did not author; does not judge or adjudicate. |
| **judges** | **DeepSeek V4 Pro direct (`max`) and freshly spawned GPT 5.6 Terra via Codex (`xhigh`)** | independent adversarial screens; invoked concurrently through `tools/judge.mts --parallel` on the same hash-attested frozen context. DeepSeek is the cross-family lane; Terra is the apples-to-apples comparison lane. |

## Artifacts

| path | what |
|---|---|
| `research/plan-*.md`, `research/design-*.md` | **prose scaffolds** — human-readable page designs (RA-nn blocks, F1/T1–T10 topology track, AA-nn/LA-nn algebra track) |
| `research/sweep-*.md` | RAG sweeps: raw source material, *not* scaffolds |
| `research/plan-spec.json` | **machine scaffold**. `pages[]` of `{order, id, kind, category, title, companion, requires[], items[]}`; each item `{id, kind, title, strategy?, deps[]}` |
| `research/level<n>-batch-<i>.pages.json` / `.notes.md` | Beta-n-i's **only** writable outputs |
| `research/level<n>-judge.jsonl` | **refutation ledger** (`JUDGE_VERDICTLOG`) |
| `research/level<n>-judge-attempts.jsonl` | **judge transport/latency ledger** (`JUDGE_ATTEMPTLOG`), written by the sweep |
| `research/level<n>-touches.json` | **repair ledger** (`touchlog.mjs`) |
| `research/level<n>-audit-manifest.json` | generated full relationship checklist for the independent-reader and Alpha audit |
| `research/level<n>-impact-audit.json` | Alpha dispositions for every consumer exposed by a changed public interface |
| `research/level<n>-published-dependency-repairs.md` | Alpha's evidence ledger for any owner-delegated repair to a published dependency |
| `research/level<n>-audit-coverage.json` | Alpha's manifest-bound whole-level audit receipt |
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
129→151, 131→153, 137→159. The `research/level<n>-batch-<i>.pages.json` files
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

### Context-continuity checkpoint (orchestrator, owner 2026-08-03)

Once active context reaches **60%**, the orchestrator automatically saves a
durable checkpoint at the next safe boundary (preferably after the current task
or gate, never by abandoning work mid-operation), not a workflow pause. Update
`research/level<n>-RESUME.md` (or the active named-run equivalent) with the
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
`level<n>-batch-<i>.notes.md`; Alpha's is in its namespaced Alpha report or
handoff. Those role checkpoints identify the owned artifact set, current
substage, completed checks, open mathematical question/constraint, and exact
next action. On resumption the same agent reads it and verifies the relevant
disk state before continuing; it does not wait for the orchestrator to repeat
the brief.

## Step 0 — Batch (orchestrator)

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
writes **only** its three `research/level<n>-batch-<i>.*` files. Parallel batches
writing shared prose would overwrite each other silently — prose is not gated.
The third is `research/level<n>-batch-<i>.proof-contracts.json`, the
machine-readable proof-obligation, citation, and boundary worksheet required by
`QUALITY-CONTROLS.md`; it is merged by the orchestrator, never jointly edited.

## Step 2 — Resolve dependencies (Beta-n-i)

Every external dependency must resolve to one of: a **published item on disk**;
an item **earlier on the same page**; an item on a **page earlier in plan order**
inside this level; or a **declared forward reference**.

Priority order, owner's words: **mathematical accuracy and correct dependency
citation are non-negotiable; then minimize forward references; then preserve
mathematical richness.**

**Self-contained scope and external fallback (hard rule).** A theorem or
example needing machinery beyond current scope is normally **dropped from the
scaffold with a note recording why and what would license it**. Before dropping
it, Beta must avoid `ai-generated` dependencies, search reputable sources for
the exact statement and conventions of a needed well-known result, and attempt
to prove that result from available library dependencies. Only if that local
proof cannot be built in scope may Beta use the last-resort external fallback:
create a source-cited `rem-` item with `proved_here: false`, list it in `deps`,
and record the exact source, failed in-library route, and necessity in the batch
notes and proof contract. `external_refs` is only for a non-load-bearing
mention; it cannot conceal a logical dependency. The fuchsia ‡ marker is the
external-dependency tag. Foundational axioms already adopted (AC, countable
choice, dependent choice) and the independence facts about them remain
separately permitted. **A dropped item is deferred, not deleted — the note is
what makes it recoverable.**

**Reuse discipline.** Ids are IMMUTABLE on `main`. Grep `items/` and
`plan-spec.json` before minting; reuse or alias an existing id for an existing
statement.

## Step 3 — Adjudicate recommendations (orchestrator)

I verify every load-bearing claim from disk first (amendment 6: no stage advances
on an agent's report alone), then exercise best judgment and **approve or
decline** each Beta recommendation. Mathematical accuracy and correct citation
of dependencies are non-negotiable; among mathematically valid choices, minimize
forward references before preserving additional richness. I may investigate or
ask an agent for clarification before deciding, but routine scaffold
adjudication does not pause for owner approval. Every decision and its rationale
are logged.

## Step 4 — Apply and propagate (orchestrator + Alpha-n)

Splice the Beta outputs into `plan-spec.json`. The splice keeps `plan-spec`'s
page metadata but takes the **union of `requires`** (Beta computes the closure
`validate-plan` demands), logs every disagreement, and hard-fails on an id clash.
**Alpha-n is spawned here**, not at step 6, and applies the `.notes.md`
amendments into higher-level prose scaffolds — one writer, so no silent
overwrite.

## Step 5 — Author (the scaffold Betas, by batch)

> **Authors do NOT judge (owner, 2026-07-28).** An author is finished when its
> gates are clean and its report is written. Judging is step 7 and runs after the
> step-6 audit. This is where most of the wall-clock saving lives.

**Model change (owner, 2026-07-31): authoring agents are GPT 5.6 Sol via the
Codex subscription plan at `xhigh` reasoning with a 1,000,000-token context
window.** GPT-family models are not called through ofox. Sol authors use the
same `briefs/authoring.md` contract and must emit normal repo files; the
orchestrator remains responsible for running the gates of record.

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
all standard boundary cases. The orchestrator merges batch contracts and runs
the strict proof-contract, selected finite-smoke, and risk-routing gates on the
whole level after Step 5. A finite smoke pass is only bounded falsification
evidence, never a proof.

**Future-scope containment gate (owner, 2026-08-01).** After authoring, the
orchestrator runs `tools/content-policy.mjs` on every batch manifest. It requires
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
exists for the rare case where the orchestrator wants to cap concurrency for a
reason it can state; it is opt-in and no longer the default.

**What still forces sequencing is a real dependency edge, and only that.** Level
9 (mixed) ran as three rounds because its five pairs sat at four levels: order 129
depends on 70, and orders 131 and 137 both depend on 129. Splitting there was
correct. Splitting a single level is not.

## Step 6 — Audit (independent readers, then Alpha-n)

**Model (owner, 2026-07-31): Beta-n-i and Alpha-n are GPT 5.6 Sol run through
the Codex subscription plan at `xhigh` reasoning with a 1,000,000-token context
window.** Do not run GPT-family audit work through ofox.

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

After every item-modifying audit stage, take the required `touchlog.mjs` snap.
If the public-interface fingerprint changed since the Step-5 baseline,
`impact-audit.mjs` computes the transitive reverse-`deps` cone and direct
citation consumers. Alpha records a concrete disposition for every listed item
before Step 7. A proof-only repair remains subject to its own audit and rejudge,
but does not create a false downstream work queue.

For an owner-delegated published-dependency repair, take the baseline immediately
before the repair, not merely at the start of authoring. Alpha appends the exact
old and corrected text, source or elementary derivation, provenance transition,
independent reviewer, impact-receipt path, and targeted paired-judge result to
`research/level<n>-published-dependency-repairs.md`. A Beta repair is reviewed
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
orchestrator. Alpha-n reports such repairs in a separate list and still makes
necessary fixes.

## Step 7 — Judge (after the audit, one sweep, on final text)

**Model change (owner, 2026-07-31): the session-item judges are DeepSeek V4 Pro
directly at maximum reasoning and freshly spawned GPT 5.6 Terra through the
Codex subscription at `xhigh`.** `tools/judge.mts --parallel` supports a
one-item paired call; `tools/judge-sweep.mjs` instead uses one file-backed,
cross-process model pools with **24 concurrent DeepSeek calls and 16 concurrent
Terra calls**. Either model moves to its next item as soon as one of its own
slots is free (40 calls maximum combined). Both receive the same exact hash-attested frozen prompt
for the item. DeepSeek remains the cross-family screen from the GPT 5.6 Sol
author; Terra is retained as an independent same-context comparison lane, not
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

Record a full verdict ledger at `research/level<n>-judge.jsonl` with at least
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
The sweep permits at most 16 DeepSeek calls and 16 Terra calls at once (32
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
At step 10, compare both-pass, both-reject, Terra-only rejection, DeepSeek-only
rejection, and incomplete/null outcomes with their adjudications. Record one
owner adjudication for every model rejection in
`research/level<n>-judge-adjudications.jsonl`, keyed by `{id, model,
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
generate `research/level<n>-audit-coverage.json` with
`tools/level-coverage.mjs --template`. Alpha completes only its reviewer and
attestation fields. Before Step 8, rerun `level-coverage.mjs` with the merged
proof contract, paired ledger, dependency-spine receipt, Alpha receipt, and
`--verify-current-context`. The gate
recomputes the item/relationship manifest from disk, requires a contract for
every proof-bearing item, and requires one usable DeepSeek and Terra verdict on
the same *current* frozen prompt for every item. It is not satisfied by a broad
agent report or by a stale pass after a repair. Give it
`--judge-adjudications research/level<n>-judge-adjudications.jsonl`: a current
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
per-context owner decision to `research/level<n>-judge-adjudications.jsonl` so
step 10 can separate confirmed fatal logic/dependency-citation detections from
nonfatal findings and false positives. Then delete
`verification.judge` on anything materially rewritten and re-run both judges
only on what changed.

Any Step-8 public-interface repair also re-runs `impact-audit.mjs`; regenerate
the audit receipt and repeat the final `level-coverage.mjs
--verify-current-context` gate after its targeted paired rejudge. A stale
receipt or pair of ledger rows is not publication evidence.

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
judge coverage counted from the ledger and frontmatter on disk; DeepSeek/Terra
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
judge verdict log, touch ledger, and orchestrator adjudication log are the
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
2. **Refuted or fixed > 1 by any subagent, Alpha-n included** → the orchestrator
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
node tools/touchlog.mjs snap  research/level<n>-touches.json "<stage>"   # after EVERY item-modifying stage
node tools/touchlog.mjs audit research/level<n>-touches.json research/level<n>-judge.jsonl
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

## The base gates and future-scope closures — the orchestrator runs the authoritative pass

| gate | catches |
|---|---|
| `precheck.mts` | phase-proof format. `no-given`, `no-steps`, `no-qed`, `qed-not-final[-postrepair]`, `untagged-steps`, `bad-tag`, `strategy-missing(...)`. Strategies: direct, contradiction, cases, induction, contrapositive, constructive. Tag families open→discharge: `contrapositive-reduce`→`discharge-contrapositive`, `assume-contra`→`discharge-contradiction`, `base`/`ih`→`discharge-induction`, `assume-case`/`cases-exhaustive`→`cases`. **Line-based** — run `reflow.mts` first; adopt REPAIR output with `adopt-repair.mjs` |
| `depcheck.mjs` | actual-content id/kind/reference/cycle/page-publish checks, definition-justification direction, and `b-leaf-content` (no dependency onto a B-only item outside that B page). Warnings retain multi-home/orphan/citation leads and the single explicit legacy B-leaf edge. |
| `fwdcheck.mjs` | `forward-on-spine` (load-bearing forward ref on a def/lemma/prop/theorem), `forward-undeclared`, `forward-in-deps`, `forward-not-later`, `forward-same-page`, `forward-dangling`, `forward-unused`, `forward-cycle`, `stack-cycle`; marks `direct`/`inherited` |
| `extcheck.mjs` | `unproved-kind`, `unproved-has-proof`, `unproved-judged`, `unproved-precheck`, `unproved-on-published`, `unproved-uncited`, `external-dangling`, `external-in-deps`, `external-not-unproved`, `external-unused` |
| `citecheck.mjs` | mis-attribution heuristic — the largest historical defect class (14 of 50) |
| `rendercheck.mjs` | `wikilink-in-math`, `nested-dollar-in-display`, `dollar-in-tag`, `multiline-display`, `unclosed-display`, `unbalanced-inline-dollar`, `blank-line-in-inline-math`, `katex-parse-error` (**real KaTeX**), `unreadable` |
| `validate-plan.mjs` | scaffold, **takes the spec path as an argument** (`node tools/validate-plan.mjs research/plan-spec.json`; bare = usage error, not a failure). Errors `resolve`, `requires-resolve`, `requires-cycle`, `item-cycle`, `page-cycle`, `prereq-order`, `undeclared-prereq`, `forward-ref`, `forward-whitelist`, `intra-order`, **`b-leaf`** (nothing may depend on a B page), `b-requires-a`, `dup-id`, `prefix`, `kind`, `companion`; warnings `orphan`, `size` (>100 A-page items; review only, never a pruning target), `redundant-prereq` (19 total) |
| `depsource.mjs` | per dep: `published` / `planned-earlier` / `draft-page` / `homeless` / `planned-later` / `unresolved`. **Only `unresolved` fails.** `planned-later` is the forward-reference report — but it reads `deps` only and is **blind to `forward_refs`** |
| `prosecheck.mjs` | **the prose defect class**, which is where 100% of this library's found defects live. ERROR `position-contradiction` (a "later/earlier page" claim contradicting `plan-spec` order — decidable, no judgement). WARNINGS `count-in-prose`, `count-of-this-page`, `library-scope-denial`. `--warnings` lists them, `--strict` fails on them |

| `proof-contract.mjs` | strict, versioned proof-obligation / citation / boundary worksheet. Each direct fact citation gets a declared source and exact source clause; each numbered step gets exactly one stated-input entry; every standard boundary case is checked or specifically not applicable. Checks accountable links, not mathematical truth |
| `finite-smoke.mjs` | selected bounded countermodel searches for finite/combinatorial claims. A failure supplies a concrete model or convention discrepancy; a pass is **not** a general proof |
| `risk-report.mjs` | transparent high-risk routing (fan-in, proof length, iff, existence/well-definedness, boundary language, induction, quotients, limits). `--require-reviewed` requires an Alpha `risk_review` for high/critical items; it does not declare a defect |
| `content-policy.mjs` | future-batch component provenance, AI-generated-statement dependency prohibition, generated-claim containment, and structured external fallback |
| `impact-audit.mjs` | required Alpha disposition of every computed downstream consumer of a changed public interface |
| `level-coverage.mjs` | batch/relationship/contract scope, plan-dependency reconciliation, current paired-judge coverage, Alpha receipt, and spine receipt |
| `spine-audit.mjs` | independent content-hashed read of proof-bearing items in the largest transitive dependency cones |

Helpers: `rounds.mjs` (static levels), `consumers.mjs --changed` (who cites what
I touched), `gen-spec.mjs` (regenerate the spec).

## Publish (after owner audit)

Flip `status: published` — **that is the publish action**, the live site reads
this directory. A published page listing a draft item is a hard error. Commit
with conventional-commit style, **no `Co-Authored-By` trailers, ever**. GitHub is
backup only, never on the serving path.
