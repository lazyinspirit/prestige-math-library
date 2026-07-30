# The per-level build, step 0 to 9 — canonical

The owner builds this library **one A-page dependency level at a time**. This
file is the single description of that process — *what happens in what order*.
**`ARCHITECTURE.md` is its companion**: what each mechanism IS, how it works,
and which failure it was built to prevent. `SCHEMA.md` and `CLAUDE.md` win
where they differ; `WORKFLOW.md` is the older per-page runbook and remains true
of a single page's journey.

All four normative docs are updated **in the same commit as the change they
describe** (owner, 2026-07-27).

Everything below is verified against the code as of 2026-07-30.

---

## Actors

| actor | model | does |
|---|---|---|
| **owner** | human | approves step-3 findings one at a time; audits; sets `verification.audited`; the only one who may remove published or out-of-level results |
| **orchestrator** | this session | batching, splicing, briefs, the **gate of record**, personal audits, **step-8 adjudication of every judge rejection**, reporting |
| **Alpha-n** | **GPT 5.6 Sol via the Codex subscription plan, `xhigh`** | spawned at **step 4**, resumed at **step 6**; propagates approved changes into higher-level prose; audits every Beta fix from disk; audits cross-batch and cross-level references |
| **Beta-n-i** | **GPT 5.6 Sol via the Codex subscription plan, `xhigh`** | one per batch; steps 1–2 scaffolding; at **step 6**, audits its own batch end-to-end, fixes defects, and personally authors any result it adds |
| **authoring agent** | **GPT 5.6 Terra via the Codex subscription plan, `xhigh`** | one per A/B pair; step 5 proof generation and gates. **Does not judge and does not adjudicate** (owner, 2026-07-28) |
| **judge** | **GLM 5.2 via the ofox API, `xhigh`** | cheap cross-family adversarial screen; invoked through `tools/judge.mts` |

## Artifacts

| path | what |
|---|---|
| `research/plan-*.md`, `research/design-*.md` | **prose scaffolds** — human-readable page designs (RA-nn blocks, F1/T1–T10 topology track, AA-nn/LA-nn algebra track) |
| `research/sweep-*.md` | RAG sweeps: raw source material, *not* scaffolds |
| `research/plan-spec.json` | **machine scaffold**. `pages[]` of `{order, id, kind, category, title, companion, requires[], items[]}`; each item `{id, kind, title, strategy?, deps[]}` |
| `research/level<n>-batch-<i>.pages.json` / `.notes.md` | Beta-n-i's **only** writable outputs |
| `research/level<n>-judge.jsonl` | **refutation ledger** (`JUDGE_VERDICTLOG`) |
| `research/level<n>-touches.json` | **repair ledger** (`touchlog.mjs`) |
| `items/<id>.md`, `library/<category>/<page>.md` | the content itself |
| `briefs/judge-conventions.txt` | the judge's conventions block, passed to the GLM ofox judge through `tools/judge.mts` |
| `briefs/*.md` | **the prompt-side mechanisms**: the subagent brief templates (scaffold, step-6 batch audit, authoring, GLM judge). These are half the workflow and were session-scratchpad-only until 2026-07-27. Every one opens with the **no shell-permission prompts rule** (`ARCHITECTURE.md` §6.1) |

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
0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9
                        ▲   ▲   ▲   ▲
          author, gates ┘   │   │   └ sweep, rundown, pause
          only, NO judge    │   └ adjudicate judge rejections
                            └ judge ONCE, after the audit
```

**Legacy mapping for old notes:** old step 9 (and the retired old step 8 duties)
is now **step 6**; old step 6 is now **step 7**; old step 7 is now **step 8**;
old step 10 is now **step 9**. Historical research notes may still use the old
numbers; normative instructions below use the new ones.

**Why the judge stays after the audit.** Measured on `frontier-1`: **292 judge
calls for 212 items.** Audits rewrite prose, and SCHEMA §3 correctly voids a
verdict on rewritten text — so **80 calls (27%) were repeats of an item already
judged, and 30 earned passes were destroyed** and had to be bought again.
Judging after the audit costs nothing in coverage — every item is still judged —
and the verdicts describe the text that ships.

## Step 0 — Batch (orchestrator)

1. Compute the **frontier from disk**, never from a remembered page count: an
   unpublished page all of whose `requires` are published. Do not trust
   `rounds.mjs` levels for this — they ignore publication state.
2. Divide the level's **A-pages into groups of at most 3**. A batch = one group
   **plus its example siblings**, so at most 6 pages. A batch always contains at
   least one A-page; a batch of orphan B-pages is not a defined shape.
3. **Pack to the cap of 3** by prerequisite affinity, so seams fall *inside* a
   batch. Merging batches can only remove cross-batch edges.
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

**Published-library read and closure pass (owner, 2026-07-30).** Beta has read
access to the full published `items/` and `library/` corpus. It must search the
pool before minting ids and open every published dependency it proposes, checking
the exact Definition or Statement, hypotheses, conclusion, direction, and
`status: published`. Every load-bearing dependency must be either an earlier
item inside the A/B pair or established by published content on a strictly
earlier page. If not, Beta decomposes or rescopes the result, or drops it with a
licensing note under the self-contained-scope rule.

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
writes **only** its two `research/level<n>-batch-<i>.*` files. Parallel batches
writing shared prose would overwrite each other silently — prose is not gated.

## Step 2 — Resolve dependencies (Beta-n-i)

Every external dependency must resolve to one of: a **published item on disk**;
an item **earlier on the same page**; an item on a **page earlier in plan order**
inside this level; or a **declared forward reference**.

Priority order, owner's words: **mathematical accuracy and correct dependency
citation are non-negotiable; then minimize forward references; then preserve
mathematical richness.**

**Self-contained scope (hard rule).** A theorem or example needing machinery
beyond current scope — measure theory, functional analysis, anything unbuilt —
is **DROPPED from the scaffold with a note recording why and what would license
it**, never authored with a `proved_here: false` dependency. A **mention** via
`external_refs` counts as an instance to eliminate, not only a load-bearing
`dep`. The sole exception is a **foundational axiom already adopted** (AC,
countable choice, dependent choice) and the independence facts *about* those
axioms, which are cited as external facts and never used as a proof step. The ‡
tier and the `deferred-*` catalogue pages stay; what ends is depending on them.
**A dropped item is deferred, not deleted — the note is what makes it
recoverable.**

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

## Step 5 — Author (one agent per A/B pair, in parallel)

> **Authors do NOT judge (owner, 2026-07-28).** An author is finished when its
> gates are clean and its report is written. Judging is step 7 and runs after the
> step-6 audit. This is where most of the wall-clock saving lives.

**Model change (owner, 2026-07-30): authoring agents are GPT 5.6 Terra via the
Codex subscription plan at `xhigh` reasoning.** GPT-family models are not called
through ofox. Terra authors use the same `briefs/authoring.md` contract and must
emit normal repo files; the orchestrator remains responsible for running the
gates of record.

Each writes `items/<id>.md` and its `library/<category>/<page>.md`, `status:
draft`, `origin: session`. **Never** sets `verification.audited`. Adding a dep to
silence a checker when the proof does not use it is the dominant historical
defect class and is forbidden.

Every A-page summary is written last in exactly two nonempty prose paragraphs,
each under 150 words. The first gives mathematical background and names the
definitions and results from declared dependencies that are used. The second
names the main definitions and theorems developed on the page and explains their
general logical progression. A B page has no authored summary body. A summaries
remain subject to SCHEMA §6's bans on counts, self-ranking, unsupported
reading-position claims, and surveys of other pages.

**AUTHOR THE WHOLE LEVEL AT ONCE (owner, 2026-07-28).** A dependency level is
authored in ONE round, every A/B pair in it dispatched in parallel, however wide
the level is. Do **not** split a level into sequential sub-rounds.

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

## Step 6 — Audit (Betas first, then Alpha-n)

**Model (owner, 2026-07-30): Beta-n-i and Alpha-n are GPT 5.6 Sol run through
the Codex subscription plan at `xhigh` reasoning.** Do not run GPT-family audit
work through ofox.

This is the final mathematical reading tier before the judge and the owner. It
has three ordered parts.

### 6a. Beta batch audits, in parallel

Each Beta-n-i that scaffolded a batch at steps 1–2 returns as that batch's audit
reader. Betas work in parallel and have write authority over their own in-flight
batch files.

For every authored item in the batch, the Beta must:

1. **Verify every proof step of every proof.** Read the step, its cited facts,
   and the cited dependency items from disk. A step is clean only if the cited
   material mathematically licenses exactly what the step claims.
2. **Verify every dependency citation in the batch**, syntactically and
   semantically: the target exists, is an allowed earlier/same-page dependency or
   declared forward reference, and actually states the proposition for which it
   is cited. The common failure mode is citing a true theorem for a stronger or
   different claim than it makes.
3. **Read the A-page summaries and Remarks with proof-step suspicion.** Verify
   the fixed two-paragraph, under-150-words-per-paragraph A-summary contract and
   the absence of an authored B-page body. No count in prose, no unsupported
   position claim, and no corpus-wide scope denial.
4. **Fix every defect it is licensed to fix**, not merely report it. If the fix
   requires adding or deleting a lemma/proposition/theorem/corollary/example/
   counterexample/false-statement, the Beta may do so inside the in-flight level.
   Anything it adds must be personally authored by that Beta, including the full
   proof when the kind requires one. Item ids remain immutable once on `main`.
5. Delete any stale `verification.judge` block after a material rewrite, run
   `tools/reflow.mts` and `tools/precheck.mts` on changed proof items, and run the
   relevant gates locally. Do **not** judge; judging is step 7.

Each Beta reports to Alpha-n: every item changed; every added/deleted result and
why; every proof step or citation defect found; unresolved concerns; and an
explicit coverage statement saying that every proof step and every dependency
citation in the batch was read, or naming any exception.

### 6b. Alpha audit of Beta fixes

After all Betas finish, Alpha-n audits the mistakes and fixes reported by every
Beta. Alpha verifies from disk, not from the report: changed item text, added or
deleted results, dependency lists, page lists, stale judge blocks, and gate
status. Alpha may accept, amend, revert, or extend a Beta fix. If Alpha adds a
result, Alpha personally authors its proof.

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

The mechanical backstop is `tools/audit-manifest.mjs`: generate the per-batch and
cross-edge checklist, then reconcile Alpha's report against it so omission is
visible. The script enumerates edges; the semantic verdict is the Beta/Alpha
reader's responsibility.

**Fatal, must fix:** mathematical inaccuracy; logical invalidity; a step not
licensed by its cited facts; citing an item for a claim it does not make; a title
or Statement asserting more than the proof gives; unlicensed forward references;
and any cross-level citation whose target is not actually strong enough.

**Interaction with the twice-touched rule.** A repair here to an item already
repaired earlier takes it to two touches and escalates to a personal audit by the
orchestrator. Alpha-n reports such repairs in a separate list and still makes
necessary fixes.

## Step 7 — Judge (after the audit, one sweep, on final text)

**Model change (owner, 2026-07-30): the session-item judge is GLM 5.2 through
the ofox API at `xhigh` reasoning.** It is cross-family from the GPT 5.6 Terra
author. `tools/judge.mts` is the default judge path and retains the historical
injection-test record.

Use `briefs/codex-judge.md` (historical filename) plus
`briefs/judge-conventions.txt`. The judge's
context unit stays the **A/B pair**: the item page and its `-examples` companion
in full, plus only the pages the item's own page both declares in `requires` and
actually cites. Compute that batch mechanically; do not pass every sibling page.

Record a full verdict ledger at `research/level<n>-judge.jsonl` with at least
`{id, model, keep, reason, at}` for every call. `verification.judge` records only
passes. Never record a pass the judge did not give; a null/failed subscription
run is not a verdict.

Before adopting any different judge model or context shape, run an injection test
with a defect known to be false under the library's own conventions. The old GLM
and DeepSeek measurements remain evidence that a low rejection rate is not a
judge-quality metric.

## Step 8 — Adjudicate judge rejections (orchestrator)

A rejection now lands on text that has cleared the step-6 audit, so the
orchestrator adjudicates it personally. **Adjudicate, do not comply.** Each
rejection gets either a fix, with the defect named, or a refutation, with a
verbatim quote from the cited item. Then delete `verification.judge` on anything
materially rewritten and re-judge only what changed.

Standing instruction: re-read your own Remarks with a numbered step's suspicion.
Remark prose is where falsehoods hide.

## Step 9 — Sweep, rundown, then pause

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

### 9b. Rundown, then pause

Full report: added/deleted in-flight results; forward references present; judge
coverage counted from frontmatter on disk; gate results; escalation set; Beta
batch-audit coverage; Alpha cross-edge coverage; and readiness to publish.

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

Then stop for the owner.

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
a weaker true statement serves. Then report and iterate with the owner.
Beta/Alpha may add or delete in-flight draft results under step 6, but published
items and items outside the in-flight level still require explicit owner approval
before removal; at 21–24% precision a repeated rejection can be a repeated false
positive.

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

## The nine gates — the orchestrator runs the authoritative pass

| gate | catches |
|---|---|
| `precheck.mts` | phase-proof format. `no-given`, `no-steps`, `no-qed`, `qed-not-final[-postrepair]`, `untagged-steps`, `bad-tag`, `strategy-missing(...)`. Strategies: direct, contradiction, cases, induction, contrapositive, constructive. Tag families open→discharge: `contrapositive-reduce`→`discharge-contrapositive`, `assume-contra`→`discharge-contradiction`, `base`/`ih`→`discharge-induction`, `assume-case`/`cases-exhaustive`→`cases`. **Line-based** — run `reflow.mts` first; adopt REPAIR output with `adopt-repair.mjs` |
| `depcheck.mjs` | `id-filename`, `yaml-escape`, `kind-prefix`, `dep-unresolved`, `link-unresolved`, `self-dep`, `item-cycle`, `page-cycle`, `page-item-missing`, `page-item-dup`, `draft-on-published-page`, `published-unaudited`, `published-unchecked`, `orphan`, `multi-home`, `cited-not-in-deps`, `justification-backward`, `justification-duplicated`, `sources-checked-on-proved` (19 total) |
| `fwdcheck.mjs` | `forward-on-spine` (load-bearing forward ref on a def/lemma/prop/theorem), `forward-undeclared`, `forward-in-deps`, `forward-not-later`, `forward-same-page`, `forward-dangling`, `forward-unused`, `forward-cycle`, `stack-cycle`; marks `direct`/`inherited` |
| `extcheck.mjs` | `unproved-kind`, `unproved-has-proof`, `unproved-judged`, `unproved-precheck`, `unproved-on-published`, `unproved-uncited`, `external-dangling`, `external-in-deps`, `external-not-unproved`, `external-unused` |
| `citecheck.mjs` | mis-attribution heuristic — the largest historical defect class (14 of 50) |
| `rendercheck.mjs` | `wikilink-in-math`, `nested-dollar-in-display`, `dollar-in-tag`, `multiline-display`, `unclosed-display`, `unbalanced-inline-dollar`, `blank-line-in-inline-math`, `katex-parse-error` (**real KaTeX**), `unreadable` |
| `validate-plan.mjs` | scaffold, **takes the spec path as an argument** (`node tools/validate-plan.mjs research/plan-spec.json`; bare = usage error, not a failure). Errors `resolve`, `requires-resolve`, `requires-cycle`, `item-cycle`, `page-cycle`, `prereq-order`, `undeclared-prereq`, `forward-ref`, `forward-whitelist`, `intra-order`, **`b-leaf`** (nothing may depend on a B page), `b-requires-a`, `dup-id`, `prefix`, `kind`, `companion`; warnings `orphan`, `size` (>100 A-page items; review only, never a pruning target), `redundant-prereq` (19 total) |
| `depsource.mjs` | per dep: `published` / `planned-earlier` / `draft-page` / `homeless` / `planned-later` / `unresolved`. **Only `unresolved` fails.** `planned-later` is the forward-reference report — but it reads `deps` only and is **blind to `forward_refs`** |
| `prosecheck.mjs` | **the prose defect class**, which is where 100% of this library's found defects live. ERROR `position-contradiction` (a "later/earlier page" claim contradicting `plan-spec` order — decidable, no judgement). WARNINGS `count-in-prose`, `count-of-this-page`, `library-scope-denial`. `--warnings` lists them, `--strict` fails on them |

Helpers: `rounds.mjs` (static levels), `consumers.mjs --changed` (who cites what
I touched), `gen-spec.mjs` (regenerate the spec).

## Publish (after owner audit)

Flip `status: published` — **that is the publish action**, the live site reads
this directory. A published page listing a draft item is a hard error. Commit
with conventional-commit style, **no `Co-Authored-By` trailers, ever**. GitHub is
backup only, never on the serving path.
