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

## Batch 6 of run `frontier-13` — adjunctions, units and counits (SINGLETON)

One A/B pair, and it is the **highest-leverage pair in the entire plan**:
**197 unbuilt A pages sit downstream of it.** The category-theory spine, the
homological-algebra track, the monoidal track and both representation-theory
tracks all descend from this page. Read more, not less.

> **Orders in the prose scaffold are STALE.** `research/plan-spec.json` is the
> only live source of `order`. Identify everything by **page id**.

| | |
|---|---|
| A page | `adjunctions-units-and-counits` · "Adjunctions Units and Counits" · category `category-theory` · order **365.001** |
| B page | `adjunctions-units-and-counits-examples` · order **365.002** |
| prose scaffold | `research/plan-category-theory-track.md`, block **MA-1** (design body at line ~1056; the B page at line ~1135) |

### Your `requires` — read this, it changed at step 0

```
limits-and-colimits-examples
conjugacy-and-simplicity-in-the-symmetric-groups
free-modules-and-exact-sequences
tychonoff-embedding-and-stone-cech
```

The MA-1 design names seven prerequisites; the spec carried only the first. The
orchestrator added the three missing published ones at step 0 (**decision D1**),
precisely so the worked adjunctions in MA-1 items 33–41 are legal citations
rather than `undeclared-prereq` failures. `limits-and-colimits`,
`universal-properties-and-the-yoneda-lemma`, `free-groups-and-presentations` and
`subspaces-products-and-quotients` were already reachable transitively and are
citable.

**A `requires` edge onto a B page.** `limits-and-colimits-examples` is a B page.
Declaring it puts its companion **A** page `limits-and-colimits` in your closure,
so items on `limits-and-colimits` are citable. It does **not** make the examples
items citable: nothing anywhere may depend on an item homed on an `-examples`
page (`validate-plan` error `b-leaf`, `depcheck` error `b-leaf-content`).

MA-1 §Traps already flags two live instances of this — `ex-free-monoid-universal-property-as-a-representation`
and `ex-function-sets-as-exponential-representing-objects` are both published
**B-leaves** and cannot be cited. MA-1 items 35 and 41 tell you to check whether
an A-page home exists for those universal properties and to prove them locally
if not. Do that check on disk.

### The one item you must NOT build

MA-1 item 40, *restriction of scalars has a left and a right adjoint*, is marked
**CONTINGENT** on `tensor-products-of-modules`. That page is being built in
**this same run** (batch 5) and is not published, so it is not in your closure
and citing it is an `undeclared-prereq` failure. The design already specifies the
fallback: **drop to the `Hom`-side (coextension) adjoint alone, and record the
drop** as a `deferred` row in your coverage with the reason naming the specific
result and the page that will license it. Do not wait for batch 5, do not cite
its drafts, and do not ask for the edge.

### Things MA-1 is emphatic about

1. **Unit–counit is the definition here, and item 2 is not optional.** The
   library deviates from Mac Lane, Riehl and Leinster, who lead with the hom-set
   form, because the hom-set formulation presupposes local smallness and the
   unit–counit formulation presupposes nothing. `rem-why-this-library-takes-unit-counit-as-the-definition`
   records the deviation. A definitional deviation that is not recorded reads as
   an error to the next auditor.
2. **RAPL's primary proof must be the unit/counit one** (item 24). The
   representable-functor proof is a *separate* item (27) carrying a local
   smallness hypothesis that item 24 does not need, and `rem-rapl-carries-no-size-hypothesis`
   reconciles the two routes. Do not merge them.
3. **Riehl's 2nd edition renumbered Chapters 3 and 4.** The adjoint functor
   theorems are §4.7, not §4.6. Prop 4.3.7 (mates), §4.5, Thm 4.2.7 and Ex 6.2.15
   are new in the 2nd edition. Any locator carried over from a first-edition
   citation is wrong. Every Riehl locator in MA-1 is against the **2nd edition**.
   Verify the range you record actually contains what you say it contains — Alpha
   re-opens the source at step 6.
4. **The A page is deliberately example-heavy**, because the B page is a leaf and
   the free–forgetful adjunctions are cited by three downstream pages. The worked
   adjunctions belong on the **A** side as numbered items, not exiled to B.
5. **Choice.** Items 9, 11 and 12 are written to keep a proper-class selection
   from hiding inside `∀d ∃Gd`. MA-1 item 12 points at the published
   `rem-choice-behind-limit-and-colimit-functors`. Preserve that care; it is the
   kind of thing a judge reads for.

### Sources named by the design

- **Riehl, *Category Theory in Context*, 2nd ed.** — §§4.1–4.4, 4.6. Primary.
- **Leinster, *Basic Category Theory*** (arXiv:1612.09375v2) — Ch 2 in full and
  §6.3. Second independent treatment with different proofs.
- **Mac Lane, *CWM*, Ch IV** — third treatment, classical statement and the
  historical attribution of `⊣` to Kan.

Harvest all of them per the coverage rules in your brief. MA-1 also records
`thm-floor-and-ceiling-are-adjoint-to-the-inclusion-of-integers` as an applied
addition citing the published real-analysis `def-floor-and-ceiling` — check that
id on disk and confirm the page it is homed on is in your closure before
scaffolding it; if it is not, record it rather than citing it.

### Size

MA-1 lists 41 numbered A-page items plus 4 `fs-` items — **45**, under the
60-item ceiling but not by much, and your harvest may add to it. If you pass 60,
propose a split in your notes at step 2 with the exact cut. The design's own
sectioning (the definition and its encodings / the calculus / preservation /
worked adjunctions) is the natural seam. Propose it early; after authoring it is
a rewrite.

**Forward references: the design says NONE.** Keep it that way.
