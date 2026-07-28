# The per-level build, step 0 to 10 — canonical

The owner builds this library **one A-page dependency level at a time**. This
file is the single description of that process — *what happens in what order*.
**`ARCHITECTURE.md` is its companion**: what each mechanism IS, how it works,
and which failure it was built to prevent. `SCHEMA.md` and `CLAUDE.md` win
where they differ; `WORKFLOW.md` is the older per-page runbook and remains true
of a single page's journey.

All four normative docs are updated **in the same commit as the change they
describe** (owner, 2026-07-27).

Everything below is verified against the code as of 2026-07-27.

---

## Actors

| actor | model | does |
|---|---|---|
| **owner** | human | approves step-3 findings one at a time; audits; sets `verification.audited`; the only one who may delete a result |
| **orchestrator** | this session | batching, splicing, briefs, the **gate of record**, personal audits, reporting |
| **Alpha-n** | Fable 5 | spawned at **step 4**, resumed at **step 9**; propagates approved changes into higher-level prose; audits the whole level, seams included |
| **Beta-n-i** | Opus 5 | one per batch; step 1–2 scaffolding; step 8 audit of its own batch |
| **authoring agent** | Opus 5 | one per A/B pair; step 5 proof generation; step 7 fixes |
| **judge** | `z-ai/glm-5.2` via ofox | cheap adversarial screen. **Never a Claude model** for session items |

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
| `briefs/judge-conventions.txt` | the judge's `--conventions` string — the ONLY actor whose prompt is a bare CLI argument, so it is stored rather than retyped |
| `briefs/*.md` | **the prompt-side mechanisms**: the subagent brief templates (scaffold, step-8 audit, authoring). These are half the workflow and were session-scratchpad-only until 2026-07-27 |

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

**When you renumber, the prose scaffolds do not follow automatically.** Insertion
3 had to rewrite 64 `order N` references in `research/plan-algebra-track.md`, and
a case-sensitive sweep still missed a capitalised `Orders N to M`, two bare
`(34)`-style parentheticals in a bridge table, an `available at 70`, and an
entire table column of bare page orders. **Grep for bare numbers as well as for
the word "order", and verify every section heading against the spec afterwards**
rather than trusting the sweep.

---

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

Priority order, owner's words: **mathematical accuracy > robust dependencies and
citations > minimal forward references.**

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

## Step 3 — Report to the owner (orchestrator)

I verify every load-bearing claim from disk first (amendment 6: no stage advances
on an agent's report alone), then present findings **one recommendation at a
time**, each with **approve / defer / follow-up** and an explicit statement of
what breaks if deferred. Decisions are logged.

## Step 4 — Apply and propagate (orchestrator + Alpha-n)

Splice the Beta outputs into `plan-spec.json`. The splice keeps `plan-spec`'s
page metadata but takes the **union of `requires`** (Beta computes the closure
`validate-plan` demands), logs every disagreement, and hard-fails on an id clash.
**Alpha-n is spawned here**, not at step 9, and applies the `.notes.md`
amendments into higher-level prose scaffolds — one writer, so no silent
overwrite.

## Step 5 — Author (one agent per A/B pair, in parallel)

Each writes `items/<id>.md` and its `library/<category>/<page>.md`, `status:
draft`, `origin: session`. **Never** sets `verification.audited`. Adding a dep to
silence a checker when the proof does not use it is the dominant historical
defect class and is forbidden.

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

## Step 6 — Judge (parallel with step 5, per pair)

`tools/judge.mts`, model `z-ai/glm-5.2`. Pass `--topic`, and pass the triage
rule as `--conventions "$(cat briefs/judge-conventions.txt)"` — **do not retype
it**. That file is the judge's brief: the non-negotiables, the 30-second rule,
the 0-indexing and iota conventions that are NOT defects, the instruction to
check the title against what is proved, and the no-backslash output constraint
that keeps the JSON parseable.

**Always set `JUDGE_VERDICTLOG=research/level<n>-judge.jsonl`** and capture
stdout — `JUDGE_COSTLOG` records spend, not verdicts.

**Always pass `--batch` with the level's A-page slugs (owner, 2026-07-28).**
Comma-separated, A pages only — the harness pulls in each `-examples` companion
itself, and naming a page that does not exist under `library/` prints a warning
rather than silently contributing nothing:

```
--batch "divisibility-gcd-and-bezout,rings-subrings-and-integral-domains,vector-spaces-and-subspaces"
```

The judge's context unit is the **A/B pair**: it always receives its item's own
page AND its companion page in full, and `--batch` adds the level's other pages
as Statement + Remarks. This is what lets it check a step against a dependency
that lives on a sibling page of the same batch, and what lets an example be
checked against the theorem it illustrates. Its primary job is unchanged and
still outranks this: the step-by-step validity of the one proof it was called on.
Full context inventory in `ARCHITECTURE.md` §5 and the `tools/judge.mts` header.

**Concurrency: at most 2 judge processes per subagent, 6 globally.** The sweep
belongs to subagents, one per A/B pair, not to the orchestrator running it
serially. The cap is the derisking; see `ARCHITECTURE.md` §5 for the failure it
prevents and why 6 is the ceiling.

Known harness behaviour, all measured: **retry envelope is 7 minutes per attempt
× 3 attempts ≈ 21 minutes worst case per item** (`AbortSignal.timeout(420_000)`)
— a slow call is usually not a hang; verdicts are **dropped intermittently**, so
always re-run before concluding; a reason string containing LaTeX backslashes can
make the JSON unparseable, so ask for plain prose in `--conventions`. **Never
record a pass the judge did not give**; `keep: null` is not a pass.

## Step 7 — Adjudicate rejections (authoring agent)

**Adjudicate, do not comply.** Measured judge precision on this corpus is
**21–24%**, and it scored **0/3** on real historical defects. Each rejection gets
either a **fix**, with the defect named, or a **refutation**, with a verbatim
quote from the cited item. Then **delete the `verification.judge` block of
anything materially rewritten** (SCHEMA §3: a correction in Remarks counts) and
re-judge only what changed.

Standing instruction: **re-read your own Remarks with a numbered step's
suspicion.** Remark prose is where falsehoods hide.

## Step 8 — Batch audit (Beta-n-i audits its own batch)

Focus on once-rejected proofs and their neighbours; where the judge passed
everything, this stage is the **first real reading**, not a formality — at
level 8 it found 22 item defects and ~14 summary corrections after a clean judge
sweep. Ranked hunting grounds: **Remark prose · page summaries · counts stated in
prose · index ranges at the first index (ℕ contains 0) · citing an item for a
claim it does not make · scope-denial phrasing that decays.**

## Step 9 — Final Alpha-n mathematical-accuracy audit (owner instruction, 2026-07-27; renumbered 2026-07-28)

> **The separate seam audit was REMOVED on 2026-07-28 (owner).** It used to be
> step 9, bounded to cross-batch dependency edges; the final audit was step 10a.
> The final audit is now step 9 and there is no separate seam stage. **Its two
> real duties were folded into risk source 3 below and are NOT lost** — a seam is
> a risk source, not a workflow stage, and running it as its own pass meant
> Alpha read the level twice and re-audited what it had just verified.

**Alpha-n audits the WHOLE level for mathematical accuracy, fixes fatal errors,
and reports to the owner.** This is the last verification tier before the owner's
own audit, and it is not optional.

It is **bounded by RISK**, and the risk map is written by the agents themselves:

1. **Start with what nobody has read in full.** Every step-8 report ends with an
   honest coverage statement naming exactly this. At level 9 that was two whole
   page pairs Alpha had never opened, plus ~60 proof bodies a Beta had read only
   down to Statements, Remarks and Facts. **The dependencies an author admits it
   never opened belong here too** — an `[L#]` fact copied from a third item
   rather than from its source is how the dominant defect class propagates.
2. **Then the items the authors flagged as their own least-confident.**
3. **Then the seams: cross-batch dependency edges and their immediate
   neighbours.** Compute the edge set mechanically and work from it, so this part
   scales with seams rather than with level size. **Zero declared edges between
   two pages of the same level is a finding, not a clean bill** — ask what
   *should* connect. Two pages that share a topic and cite nothing of each
   other's are either genuinely independent or quietly duplicating, and only
   reading tells you which.

Alpha keeps a standing licence to pull any item, and reports what it read.

**Fatal, must fix:** mathematical inaccuracy; logical invalidity; a step not
licensed by its cited facts; citing an item for a claim it does not make; **a
title or Statement asserting more than the proof gives.** That last class is the
reason this stage exists — the judge reads Statements and structurally cannot see
a false title, and level 9 shipped two of them into the final audit.

**Not fatal, spend no effort:** the standing triage list.

**Interaction with the twice-touched rule.** A repair here to an item already
repaired earlier takes it to two touches and so escalates to a personal audit by
the orchestrator. Alpha-n must therefore **report such repairs in a separate,
clearly labelled list** — and must still make them. Never leave a known
falsehood standing to keep a count down.

Alpha-n may **never remove a theorem or example**; that needs explicit owner
approval, with the ramification of dropping it stated.

## Step 10 — Sweep, rundown, then pause

### 10a. Scope-denial sweep of the published corpus

See below — items and page summaries both.

### 10b. Rundown, then pause

Full report: forward references present, judge coverage counted from frontmatter
on disk, gate results, escalation set, what step 9 covered and what it did not,
and readiness to publish. **Then stop for the owner.**

**Every level ends with a scope-denial sweep of the published corpus, over ITEMS
AND PAGE SUMMARIES BOTH.** Grep `does not develop`, `not defined in this
library`, `anywhere in it`, `not yet written`, `has no item`, `not introduced in
this library`. Amendments to published pages land **in the same commit that
publishes the level**, never before, with `verification.audited` cleared so
`depcheck` forces the owner's re-audit. After any such repair, **re-grep the file
you repaired** — a level-8 fix corrected one sentence and left the same
falsehood sixteen lines away.

**Grep is the entry point, never the sweep (measured at level 9).** Running the
patterns above plus every variant of `not (developed|proved|available|
established|defined|introduced) (here|in this library|at this point)` over the
published corpus matched 157 items, and every one of the 14 topic-relevant
sentences it surfaced was still true. It nevertheless missed **both** amendments
that level's step 2 had already found by reading:

- `rem-choice-ledger`: *"Neither direction is proved here, and no item derives
  either"* — "neither … proved here" is not "not proved here";
- `ex-p-adic-ultrametric`: *"neither of which this item develops or assumes"* —
  no denial keyword in any matched form.

The defect class is a claim about what the library does not contain, written in
whatever English the author reached for; no pattern enumerates that. **Dispatch a
reading agent, and hand it those two sentences as recall tests** — a sweep that
does not rediscover both is not measuring what it claims to.

The step-8 audits the same day added two more forms no pattern above catches,
both of them false when written rather than decayed: *"this library has not
built one"* (`def-p-adic-valuation`, of an ordered set with a greatest element —
`def-extended-reals` is published and is exactly that) and *"machinery this
library has not built"* (`cex-hilbert-monoid-factorisation-not-unique`, of the
algebraic integers, which orders 46/47 are for). **"has not built" is now the
fourth distinct verb** after "develop", "prove", "contain"; the list will keep
growing, which is the point. Note also that both of these were caught by page
auditors reading their own batch, not by any sweep — the cheapest place to kill
this defect is at step 8, before the claim is ever published.

The one thing that IS working: every published item using the order-relative
phrasing (`not available at this point in the reading order`) survived level 9
untouched, because the claim is indexed to a position rather than to the corpus.
That is why §6 of the step-8 brief mandates it.

---

## The escalation rule (fires at any step)

A proof **refuted OR repaired more than once** is structurally suspect. Two
independent triggers; count **refutations + repairs combined, per item**:

1. **Judge refutations > 1 before step 9** → name it in Alpha-n's step-9 brief;
   Alpha reviews **the proof and all neighbouring dependencies**, since a proof
   that keeps failing is often correct and resting on a bad neighbour. (Step 9
   is the final audit; the separate seam stage that used to hold this number was
   removed 2026-07-28. The duty is unchanged — only its step number moved.)
2. **Refuted or fixed > 1 by any subagent, Alpha-n included** → the orchestrator
   audits it **personally**, and this does not wait for step 9.

The personal audit must state the **nature** of the fault (mathematical
inaccuracy / mis-cited dependency / unjustified step / judge false positive) and
the **ramification of dropping** the result: what cites it, what breaks, whether
a weaker true statement serves. Then report and iterate with the owner.
**NEVER remove a theorem or example without explicit owner approval** — at 21–24%
precision a repeated rejection can be a repeated false positive.

```
node tools/touchlog.mjs snap  research/level<n>-touches.json "<stage>"   # after EVERY item-modifying stage
node tools/touchlog.mjs audit research/level<n>-touches.json research/level<n>-judge.jsonl
```

Repairs are **measured from disk**, never counted from an agent's report.

## Triage — the standing rule, binding on every actor including me

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

State it in every brief and in `--conventions`. The bar is a *rich,
self-contained, accurate* library, not a perfect one. Prefer one reusable lemma
over a repeated inline argument (`cor-archimedean-reciprocal` retired a gap in 24
items). **Do not trim landmarks.**

## The eight gates — the orchestrator runs the authoritative pass

| gate | catches |
|---|---|
| `precheck.mts` | phase-proof format. `no-given`, `no-steps`, `no-qed`, `qed-not-final[-postrepair]`, `untagged-steps`, `bad-tag`, `strategy-missing(...)`. Strategies: direct, contradiction, cases, induction, contrapositive, constructive. Tag families open→discharge: `contrapositive-reduce`→`discharge-contrapositive`, `assume-contra`→`discharge-contradiction`, `base`/`ih`→`discharge-induction`, `assume-case`/`cases-exhaustive`→`cases`. **Line-based** — run `reflow.mts` first; adopt REPAIR output with `adopt-repair.mjs` |
| `depcheck.mjs` | `id-filename`, `yaml-escape`, `kind-prefix`, `dep-unresolved`, `link-unresolved`, `self-dep`, `item-cycle`, `page-cycle`, `page-item-missing`, `page-item-dup`, `draft-on-published-page`, `published-unaudited`, `published-unchecked`, `orphan`, `multi-home`, `cited-not-in-deps`, `justification-backward`, `justification-duplicated`, `sources-checked-on-proved` (19 total) |
| `fwdcheck.mjs` | `forward-on-spine` (load-bearing forward ref on a def/lemma/prop/theorem), `forward-undeclared`, `forward-in-deps`, `forward-not-later`, `forward-same-page`, `forward-dangling`, `forward-unused`, `forward-cycle`, `stack-cycle`; marks `direct`/`inherited` |
| `extcheck.mjs` | `unproved-kind`, `unproved-has-proof`, `unproved-judged`, `unproved-precheck`, `unproved-on-published`, `unproved-uncited`, `external-dangling`, `external-in-deps`, `external-not-unproved`, `external-unused` |
| `citecheck.mjs` | mis-attribution heuristic — the largest historical defect class (14 of 50) |
| `rendercheck.mjs` | `wikilink-in-math`, `nested-dollar-in-display`, `dollar-in-tag`, `multiline-display`, `unclosed-display`, `unbalanced-inline-dollar`, `blank-line-in-inline-math`, `katex-parse-error` (**real KaTeX**), `unreadable` |
| `validate-plan.mjs` | scaffold, **takes the spec path as an argument** (`node tools/validate-plan.mjs research/plan-spec.json`; bare = usage error, not a failure). Errors `resolve`, `requires-resolve`, `requires-cycle`, `item-cycle`, `page-cycle`, `prereq-order`, `undeclared-prereq`, `forward-ref`, `forward-whitelist`, `intra-order`, **`b-leaf`** (nothing may depend on a B page), `b-requires-a`, `dup-id`, `prefix`, `kind`, `companion`; warnings `orphan`, `size` (>30 items), `redundant-prereq` (19 total) |
| `depsource.mjs` | per dep: `published` / `planned-earlier` / `draft-page` / `homeless` / `planned-later` / `unresolved`. **Only `unresolved` fails.** `planned-later` is the forward-reference report — but it reads `deps` only and is **blind to `forward_refs`** |

Helpers: `rounds.mjs` (static levels), `consumers.mjs --changed` (who cites what
I touched), `gen-spec.mjs` (regenerate the spec).

## Publish (after owner audit)

Flip `status: published` — **that is the publish action**, the live site reads
this directory. A published page listing a draft item is a hard error. Commit
with conventional-commit style, **no `Co-Authored-By` trailers, ever**. GitHub is
backup only, never on the serving path.
