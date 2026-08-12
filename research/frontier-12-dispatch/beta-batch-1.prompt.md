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
`research/frontier-12-batch-1.coverage.json`. Per A page: at least two
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
node tools/coverage-checklist.mjs research/frontier-12-batch-1.coverage.json
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

- `research/frontier-12-batch-1.pages.json` — the machine scaffold
- `research/frontier-12-batch-1.notes.md` — source ledger, provenance
  rationales, convention disagreements, split proposals, licensing notes
- `research/frontier-12-batch-1.coverage.json` — the harvest
- `research/frontier-12-batch-1.proof-contracts.json` — begun at scaffold time

You may not edit `plan-spec.json`, another batch's files, `items/`, `library/`,
or any normative doc. A published dependency you believe is unambiguously false
is recorded in your notes at steps 1–2, never edited.

## 4. Gates you must leave green

```
node tools/validate-plan.mjs research/plan-spec.json
node tools/coverage-checklist.mjs research/frontier-12-batch-1.coverage.json
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

## Batch 1 of run `frontier-12` — field theory

Two A/B pairs. You own all four pages, and you author them at step 5.

### Pair A — the D10 pair (NEW, no prose scaffold exists)

| | |
|---|---|
| A page | order **53.2** · `the-field-of-fractions-and-localisation` · "The Field of Fractions and Localisation" · category `abstract-algebra` |
| B page | order **53.4** · `the-field-of-fractions-and-localisation-examples` |
| requires | `polynomial-rings-and-roots` (order 52) — orders 48 and 46 are reachable through it and are citable |

**Why this page exists, and what it must deliver.** Two items are **already
published** and both open by assuming a construction the library has never
built:

- `items/cex-ordered-field-not-archimedean.md` (`kind: counterexample`, homed on
  `foundations-of-the-real-numbers`, order 9) — *"Given: ℝ(t), the field of
  fractions of the polynomial ring ℝ[t], …"*
- `items/ex-rational-function-field-order.md` (an example, homed on
  `equivalent-forms-of-completeness-examples`, order 125) — *"Let ℝ(t) be the
  field of fractions of the polynomial ring …"*

Open both on disk before you scaffold. At **step 9** the orchestrator will wire
them to your page: a load-bearing forward reference from the order-9
counterexample, an ordinary `deps` edge from the order-125 example. For that to
work your scaffold must contain, as **citable items with stable ids**:

1. the field of fractions `Frac(D)` of an integral domain `D` — construction and
   the definition itself, not merely a mention;
2. that it **is** a field, and that `D` embeds in it;
3. its **universal property** (every injective ring map from `D` into a field
   factors uniquely through `Frac(D)`);
4. `ℝ(t) = Frac(ℝ[t])` reachable as a named consequence or example on the **A**
   page — a B-page item cannot be depended on (`b-leaf`).

Do **not** define an order or a positive cone on ℝ(t): the published
counterexample supplies its own `P = {f ≠ 0 : f(x) > 0 for all sufficiently
large real x}` and must keep owning it. Your job is the field, not its ordering.

Beyond that, scaffold the subject properly: localisation `S⁻¹R` at a
multiplicative set, localisation at a prime ideal, the local ring, the universal
property of localisation, exactness where it is in scope, and the standard
counterexamples (what goes wrong when `0 ∈ S`, when `R` is not a domain, when `S`
contains zero divisors). Richness is the owner's stated priority for this run.

### Pair B — splitting fields

| | |
|---|---|
| A page | order **56** · `splitting-fields` · "Splitting Fields and the Existence of Roots" |
| B page | order **57** · `splitting-fields-examples` |
| requires | `field-extensions-and-the-complex-numbers` (order 54) |
| prose scaffold | `research/plan-algebra-track-expansion.md`, `research/plan-algebra-track.md` — read the sections covering splitting fields |

Kronecker's construction, existence and uniqueness up to isomorphism, splitting
field of a polynomial and of a set, degree bounds, normality where it is in
scope, algebraic closure only if you can genuinely close it here.

### A hard constraint between your two pairs

`splitting-fields` (56) does **not** declare `the-field-of-fractions-and-localisation`
(53.2) in its `requires`, and 53.2 is not in its closure. So **no item on
`splitting-fields` may depend on any item on the field-of-fractions page** —
`validate-plan` fails it as `undeclared-prereq`. Keep them independent.

If while scaffolding you conclude that splitting fields genuinely *needs* the
field of fractions, do not work around it and do not edit `plan-spec.json`.
**Record it in your notes as a recommendation**, name the exact result that needs
it, and the orchestrator will decide at step 3 whether to add the `requires`
edge. That is a legal and expected outcome — just not yours to apply.
