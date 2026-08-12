# Beta brief for run `frontier-12` (steps 1 and 2)

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

You are a **Beta on run `frontier-12`**, scaffolding one batch for the public
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
6. `research/frontier-11-batch-1.pages.json` and
   `research/frontier-11-batch-1.notes.md` — the output shape you are producing,
   from the most recent completed run.
7. `research/frontier-12-step0-batching.md` — this run's frontier, batching and
   seam analysis.
8. The prose scaffold sections named in your dispatch.

Then open, **on disk**, every published item you intend to cite. The item, not
the scaffold's description of it, and not your memory of the subject.

## 1. What this run is for

Eleven A/B pairs across seven batches. The owner's instruction for this run is
explicit: decide autonomously, **prioritising mathematical richness and
accuracy**. Three batches are deliberately single-pair because their subject
deserves a whole Beta's attention. Yours may be one of them; if it is, that is
not a light load, it is a mandate to read more of each source.

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
`research/frontier-12-batch-7.coverage.json`. Per A page: at least two
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
node tools/coverage-checklist.mjs research/frontier-12-batch-7.coverage.json
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
`-examples` page — `validate-plan` error `b-leaf`. If a result on your B page
turns out to be load-bearing, it belongs on the A page.

## 3. Your writable outputs — and nothing else

- `research/frontier-12-batch-7.pages.json` — the machine scaffold
- `research/frontier-12-batch-7.notes.md` — source ledger, provenance
  rationales, convention disagreements, split proposals, licensing notes
- `research/frontier-12-batch-7.coverage.json` — the harvest
- `research/frontier-12-batch-7.proof-contracts.json` — begun at scaffold time

You may not edit `plan-spec.json`, another batch's files, `items/`, `library/`,
or any normative doc. A published dependency you believe is unambiguously false
is recorded in your notes at steps 1–2, never edited.

## 4. Gates you must leave green

```
node tools/validate-plan.mjs research/plan-spec.json
node tools/coverage-checklist.mjs research/frontier-12-batch-7.coverage.json
```

**Do not run `tools/gates.mjs`** — it fails `EPERM` in this sandbox (its
`spawnSync` of `node` is refused before any child runs). The individual scripts
are the same checks. The orchestrator runs the wrapper and is the gate of record.

## 5. Report

Finish with a concise report: pages and item counts, the harvest yield
(scaffolded vs declined, with the declines you expect to be challenged), any
split proposal, every published dependency you opened and the confidence route
used for each, convention disagreements found, and any blocker. State plainly
anything you could not do.


---

# This dispatch

## Batch 7 of run `frontier-12` — limits and colimits

**One A/B pair, deliberately.** 14 unscaffolded A pages sit downstream, including
the whole adjunctions / monads / abelian-categories chain. You have a whole
Beta's attention for one subject.

| | |
|---|---|
| A page | order **363** · `limits-and-colimits` · "Limits and Colimits" · `category-theory` |
| B page | order **364** · `limits-and-colimits-examples` |
| requires | `universal-properties-and-the-yoneda-lemma` (361), `cardinal-arithmetic-and-cofinality` (247) |
| prose scaffold | `research/plan-combinatorics-and-categories.md` |

### Scope

Diagrams and cones, the limit of a diagram and its universal property,
uniqueness up to unique isomorphism, colimits by duality — and say plainly what
"by duality" licenses, since a dual proof is a real proof only when the dual
statement is the exact formal dual. Then the concrete shapes: products and
coproducts, equalisers and coequalisers, pullbacks and pushouts, initial and
terminal objects, the pasting lemma for pullbacks.

The structural theorems are the point of the page: **limits from products and
equalisers**, completeness and cocompleteness, finite versus small versus large
limits, preservation, reflection and creation of limits, **representable functors
preserve limits**, `Hom(X,−)` continuity, and limits computed pointwise in
functor categories.

`cardinal-arithmetic-and-cofinality` (247) is in your `requires` for a reason:
"small" is a size condition and this library has the cardinal machinery to say it
precisely. Use it. State exactly what smallness hypothesis each theorem needs
rather than writing "small" as a decorative adjective, and be explicit about the
size distinction that makes a *complete small* category a preorder — that is the
kind of trap this page should close rather than step into.

`universal-properties-and-the-yoneda-lemma` (361) is published and is 21+14
items — open it on disk and cite it exactly. Yoneda is what makes the
representable-functor results provable here rather than asserted.

### Watch the abstraction level

Category theory is the easiest place in this library to write prose that sounds
right and proves nothing. Every universal property gets an existence claim **and**
a uniqueness claim, each proved. Every "the reader may check" is a missing item.
Diagram-chasing arguments must name the diagram and the commuting squares they
use, not gesture at them.

### Split ceiling

If the page exceeds **60 items** (`validate-plan` error `size`), propose a split
in your step-2 notes with proposed ids and the exact cut rather than trimming.
The natural seam is general limits/colimits versus the special shapes and their
calculus.
