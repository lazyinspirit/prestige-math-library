# Beta brief for run `frontier-13` (steps 1 and 2)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's wording: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, web search permissions,
> git permissions, or any permissions whatsoever."* This binds a **compound
> command as a whole — no segment of an `&&` chain may raise a prompt either.**
> Use command forms already allowed inside the workspace sandbox, choose
> non-escalated forms, and pass `dangerouslyDisableSandbox: true` on every Bash
> call where your runtime exposes it. Web search is part of your job here and you
> never ask before searching. If an indispensable operation has no escalation-free
> form, **record a blocker in your notes** — that is the escape hatch, not a
> prompt. This rule binds every subagent you dispatch; carry it into their briefs.

You are a **Beta on run `frontier-13`**, scaffolding one batch for the public
math library. The checkout is the directory you were started in. Your batch is
named in the "This dispatch" section appended below. After step 4 you return as
the **step-5 author** of everything you scaffold here, so prepare a scaffold you
can author faithfully without rediscovering its reasoning.

Six other Betas are working other batches of this run **in parallel**. Your batch
has **no dependency edge to any other batch**, and that is not a promise — it is
mechanical. `validate-plan.mjs` raises the hard error `undeclared-prereq` for any
item depending on a page outside its own page's declared `requires` closure, and
no in-run pair is inside any other in-run pair's closure. So you can neither wait
on another batch nor cite one. Write only your own files.

## 0. Read first, in this order

1. `CLAUDE.md` — workflow and hard rules. Normative.
2. `SCHEMA.md` — the item/page contract. Normative; it wins over this brief.
3. `README.md` — provenance, judge lineup, citation rules.
4. `briefs/beta-scaffold.md` — **your base contract**, in full.
5. `items/lem-cauchy-bounded.md` — the approved house-style exemplar.
6. `research/frontier-12-batch-1.pages.json` and
   `research/frontier-12-batch-1.notes.md` — the output shape you are producing,
   from the most recent completed run.
7. `research/frontier-13-step0-batching.md` — this run's frontier, batching and
   seam analysis.
8. The prose scaffold sections named in your dispatch.

Then open, **on disk**, every published item you intend to cite. The item, not
the scaffold's description of it, and not your memory of the subject.

## 1. What this run is for

Eleven A/B pairs across seven batches, in abstract algebra, linear algebra,
combinatorics, category theory and number theory. Three batches are deliberately
single-pair because their subject deserves a whole Beta's attention. Yours may be
one of them; if it is, that is not a light load, it is a mandate to read more of
each source.

The failure this process exists to prevent is a **thin page that passes every
gate**. A previous run shipped `group-actions-and-cayleys-theorem` with orbits,
stabilisers and the orbit partition but **no orbit–stabiliser theorem**, no class
equation, no Cauchy's theorem, and an empty B page — while citing Sharifi,
Brosnan, Judson, Axler and Diestel. The sources were fine. The Beta cited a
source *without harvesting it*: Brosnan's note is literally titled *Orbits and
stabilizers*, and orbit–stabiliser never reached the scaffold.

Do not produce a four-item page.

## 2. The rules that govern this scaffold

**(a) The canonical-coverage harvest — a required, gated artifact.** You write
`research/frontier-13-batch-<i>.coverage.json`. Per A page: at least two
independent treatments, at least one a textbook, monograph or full lecture-note
set (an encyclopedia entry is a convention tiebreaker and can never be a pair's
primary backing — Wikipedia alone fails this gate); per source the exact
chapter/section range you actually read and an enumeration of **that source's
own** section and named-result headings across it; per heading a disposition —
`included` (+ the scaffolded item id), `inline` (+ the item whose proof absorbs
it), `already-published` (+ the published id), `deferred` or `out-of-scope` (+ a
reason of 40+ characters about **that specific result**; one reason pasted across
three declines is rejected). Full shape and rules: `briefs/beta-scaffold.md`
§"The canonical-coverage harvest". Run it before you report done:

```
node tools/coverage-checklist.mjs research/frontier-13-batch-<i>.coverage.json
```

There is no minimum result count — padding is forbidden. The bar is set by the
source, not by a target. **The locator must be real.** If you cite a range, that
range must exist in that edition and contain what you say it contains; Alpha
re-opens sources at step 6 and checks the harvest is faithful, not merely
well-formed.

**(b) Build the machinery; do not drop (owner, 2026-08-11).** If a theorem needs
a definition or theorem the library has not established, **build it**. Dropping
an important result because a prerequisite is missing is not a permitted
disposition. `deferred`/`out-of-scope` is for material belonging to another
page's topic, or resting on a whole subject area the library has not reached —
**never** for a lemma you could simply have written. Be ready to defend every
decline to Alpha, result by result.

**(c) Split an A page over 60 items (owner, 2026-08-11).** `validate-plan.mjs`
fails with error `size`. The remedy is always two or more A pages, each with its
own B companion, its own two-paragraph summary and its own slot in reading order
— never a shorter page with results dropped to fit. **Propose the split in your
notes at step 2** with proposed page ids and the exact cut; the orchestrator
adjudicates at step 3 and splices ids into `plan-spec.json` at step 4. Splitting
before authoring costs a spec edit; after authoring it is a rewrite. Several
pairs in this run are broad enough that a split is a live possibility — say so
early rather than trimming to fit.

**(d) Notation.** Never write the canonical embedding applied to a natural
number: no `\iota(n)`, `\iota(0)`, `\iota(k!)`. Write the number.
`content-policy.mjs` fails the batch with `notation-iota-applied`. Bare `\iota`
naming a basis inclusion in a universal property — a free group `(F,\iota)` with
`\phi\circ\iota=\iota'` — is standard and unaffected. Legacy items you cite still
use the old applied form; **leave them alone**, they are not your scope.

**(e) Provenance, and the dependency-provenance order.** Assign
`provenance.statement` and `provenance.proof` to every mathematical-content item
and record a rationale for each in your notes. Never make an `ai-generated`
Statement or Construction a load-bearing scaffold or proof dependency. A
published item with no component provenance is `legacy-unclassified` — that is
not evidence it is AI-generated; before making one load-bearing, either confirm
from your own knowledge that the exact statement is established, or find
reputable sources for that exact statement and its conventions, and record which
route you used.

**(f) B pages are leaves.** Nothing anywhere may depend on an item homed on an
`-examples` page — `validate-plan` error `b-leaf`, `depcheck` error
`b-leaf-content`. If a result on your B page turns out to be load-bearing, it
belongs on the A page. **This holds even when your A page declares a B page in
its `requires`**: two pages in this run do, and the edge makes the companion *A*
page citable, never the examples items themselves. Your dispatch says whether
this is you.

## 3. Your writable outputs — and nothing else

- `research/frontier-13-batch-<i>.pages.json` — the machine scaffold
- `research/frontier-13-batch-<i>.notes.md` — source ledger, provenance
  rationales, convention disagreements, split proposals, licensing notes
- `research/frontier-13-batch-<i>.coverage.json` — the harvest
- `research/frontier-13-batch-<i>.proof-contracts.json` — begun at scaffold time

You may not edit `plan-spec.json`, another batch's files, `items/`, `library/`,
or any normative doc. A published dependency you believe is unambiguously false
is recorded in your notes at steps 1–2, never edited.

## 4. Gates you must leave green

```
node tools/validate-plan.mjs research/plan-spec.json
node tools/coverage-checklist.mjs research/frontier-13-batch-<i>.coverage.json
```

**Do not run `tools/gates.mjs`** — it fails `EPERM` in this sandbox (its
`spawnSync` of `node` is refused before any child runs). The individual scripts
are the same checks. The orchestrator runs the wrapper and is the gate of record.

## 5. Context checkpoint

At **60% of your own context** (owner, 2026-08-03), append a concise checkpoint
section to your own `research/frontier-13-batch-<i>.notes.md`: owned artifacts,
current substage, checks completed, the open mathematical question, and the exact
next action. Then continue. On resumption read it back and verify disk state
before acting. A checkpoint is not a pause and you do not wait for the
orchestrator.

## 6. Report

Finish with a concise report: pages and item counts, the harvest yield
(scaffolded vs declined, with the declines you expect to be challenged), any
split proposal, every published dependency you opened and the confidence route
used for each, convention disagreements found, and any blocker. State plainly
anything you could not do.


---

# This dispatch

## Batch 2 of run `frontier-13` — unit groups and split extensions

Two A/B pairs. You own all four pages, and you author them at step 5.

> **Orders in the prose scaffolds are STALE.** `research/plan-algebra-track-expansion.md`
> quotes pre-splice orders (64/65, …). `research/plan-spec.json` is the only live
> source of `order`. Identify everything by **page id**.

### Pair A — primitive roots and unit groups mod n

| | |
|---|---|
| A page | `primitive-roots-and-unit-groups-modulo-n` · "Primitive Roots and Unit Groups Modulo N" · category `number-theory` · order **57.001** |
| B page | `primitive-roots-and-unit-groups-modulo-n-examples` · order **57.002** |
| requires | `splitting-fields-examples` (order 57) |
| prose scaffold | `research/plan-number-theory-track.md`, the block beginning at the `primitive-roots-and-unit-groups-modulo-n` heading (line ~190) |

**A `requires` edge onto a B page — read this carefully.** Declaring
`splitting-fields-examples` puts its companion **A** page `splitting-fields`
(and everything below it) in your closure, so items on `splitting-fields` are
citable. It does **not** make the examples items citable: nothing anywhere may
depend on an item homed on an `-examples` page (`validate-plan` error `b-leaf`,
`depcheck` error `b-leaf-content`). Cite the A page.

The structure of `(ℤ/nℤ)^×`: Euler's totient and its multiplicativity, the
Chinese remainder decomposition of the unit group, **existence of primitive roots
mod p** (the cyclicity of `𝔽_p^×`), lifting to `p^k` for odd `p`, the exceptional
structure at `2^k` (`(ℤ/2^kℤ)^× ≅ ℤ/2 × ℤ/2^{k-2}` for `k ≥ 3`), the general
`n` classification of which moduli admit a primitive root, and the order of an
element / index (discrete logarithm) calculus. Carmichael's `λ` if you can close
it in scope.

Cyclicity of `𝔽_p^×` is the load-bearing theorem. Prove it — do not cite it as
folklore. `the-structure-of-finite-abelian-groups` is published and is one honest
route; the "at most `d` roots of `x^d − 1` in a field" route is another. Say in
your notes which you used.

### Pair B — semidirect products and automorphism groups

| | |
|---|---|
| A page | `semidirect-products-and-automorphism-groups` · "Semidirect Products, Automorphism Groups and Split Extensions" · category `abstract-algebra` · order **68** |
| B page | `semidirect-products-and-automorphism-groups-examples` · order **69** |
| requires | `composition-series-and-solvable-groups`, `congruences-and-the-chinese-remainder-theorem`, `free-groups-and-presentations` (all published) |
| prose scaffold | `research/plan-algebra-track-expansion.md` §II.2, block `AG-3` (the design body begins at line ~884) |

Internal and external semidirect products and their equivalence, the recognition
criterion (`N ⊴ G`, `H ≤ G`, `N ∩ H = 1`, `NH = G`), **split extensions** and the
splitting lemma for groups, `Aut(G)` and `Inn(G) ⊴ Aut(G)`, the outer
automorphism group, characteristic subgroups, the holomorph, and the standard
computations: `Aut(ℤ/n) ≅ (ℤ/n)^×`, `Aut(ℤ^n) ≅ GL_n(ℤ)`, dihedral and
generalised dihedral groups as semidirect products, and the classification of
groups of order `pq`.

### The hard constraint between your two pairs

These two pairs are batched together because `Aut(ℤ/n) ≅ (ℤ/n)^×` is the shared
spine: the unit-group structure Pair A builds is exactly what Pair B's
automorphism computations want.

**But `semidirect-products-and-automorphism-groups` does not declare
`primitive-roots-and-unit-groups-modulo-n` in its `requires`, and it is not in
its closure.** So **no item on order 68 may depend on any item on order
57.001** — `validate-plan` fails it as `undeclared-prereq`. Pair B must build
whatever unit-group facts its own proofs need, from its own published
prerequisites (`congruences-and-the-chinese-remainder-theorem` is one of them),
or state them as hypotheses.

This is the single most likely place in this run for a Beta to write an illegal
edge. If you conclude Pair B genuinely needs Pair A, **record it in your notes as
a recommendation** naming the exact result, and the orchestrator decides at step 3
whether to add the `requires` edge. Do not work around it, and do not edit
`plan-spec.json`.
