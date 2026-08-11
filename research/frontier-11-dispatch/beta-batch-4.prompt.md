# Beta brief for run `frontier-11` (steps 1 and 2)

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

You are a **Beta on run `frontier-11`**, scaffolding one batch for the public
math library. The checkout is the directory you were started in. Your batch is
named in the "This dispatch" section appended below. After step 4 you return as
the **step-5 author** of everything you scaffold here, so prepare a scaffold you
can author faithfully without rediscovering its reasoning.

Other Betas are working other batches of this run **in parallel**. Your batch has
**no dependency edge to any other batch** — that was computed from disk at step
0, not assumed — so you never need to wait for or coordinate with them. Write
only your own files.

## 0. Read first, in this order

1. `CLAUDE.md` — workflow and hard rules. Normative.
2. `SCHEMA.md` — the item/page contract. Normative; it wins over this brief.
3. `README.md` — provenance, judge lineup, citation rules.
4. `briefs/beta-scaffold.md` — **your base contract**, in full.
5. `items/lem-cauchy-bounded.md` — the approved house-style exemplar.
6. `research/frontier-10-batch-1.pages.json` and
   `research/frontier-10-batch-1.notes.md` — the output shape you are producing,
   from the most recent run built to the depth now expected.
7. `research/frontier-11-step0-batching.md` — this run's frontier and batching.
8. The prose scaffold sections named in your dispatch.

Then open, **on disk**, every published item you intend to cite. The item, not
the scaffold's description of it.

## 1. Why this run exists — read this before you scaffold

Two pairs published thin and the owner noticed. `group-actions-and-cayleys-theorem`
went out with orbits, stabilisers and the orbit partition but **no
orbit–stabiliser theorem**, no class equation, no Cauchy's theorem, and an empty
B page. `free-groups-and-presentations` went out at 6 + 1 items and had to be
rewritten wholesale.

The cause was **not** bad sources. The batch notes of that run cite Sharifi
(UCLA), Brosnan (UMD), Judson, Axler, Diestel — real notes, real textbooks. The
cause was that a Beta cited a source **without harvesting it**: Brosnan's note is
titled *Orbits and stabilizers*, it was logged as covering "orbit structure", and
orbit–stabiliser never reached the scaffold. That run produced 83 items across 20
pages, about four per page.

Do not produce a four-item page.

## 2. The rules that govern this scaffold

**(a) The canonical-coverage harvest — a required, gated artifact.** You write
`research/frontier-11-batch-4.coverage.json`. Per A page: at least two
independent treatments, at least one a textbook, monograph or full lecture-note
set (an encyclopedia entry is a convention tiebreaker and can never be a pair's
primary backing — Wikipedia alone fails this gate); per source the exact
chapter/section range you actually read and an enumeration of **that source's
own** section and named-result headings across it; per heading a disposition —
`included` (+ scaffolded item id), `inline` (+ the item whose proof absorbs it),
`already-published` (+ the published id), `deferred` or `out-of-scope` (+ a
reason of 40+ characters about **that specific result**; one reason pasted across
three declines is rejected). Full shape and rules: `briefs/beta-scaffold.md`
§"The canonical-coverage harvest". Run it before you report done:

```
node tools/coverage-checklist.mjs research/frontier-11-batch-4.coverage.json
```

There is no minimum result count — padding is forbidden. The bar is set by the
source, not by a target.

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
before authoring costs a spec edit; after authoring it is a rewrite.

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

## 3. Your writable outputs — and nothing else

- `research/frontier-11-batch-4.pages.json` — the machine scaffold
- `research/frontier-11-batch-4.notes.md` — source ledger, provenance
  rationales, convention disagreements, split proposals, licensing notes
- `research/frontier-11-batch-4.coverage.json` — the harvest
- `research/frontier-11-batch-4.proof-contracts.json` — begun at scaffold time

You may not edit `plan-spec.json`, another batch's files, `items/`, `library/`,
or any normative doc. A published dependency you believe is unambiguously false
is recorded in your notes at steps 1–2, never edited.

## 4. Gates you must leave green

```
node tools/validate-plan.mjs research/plan-spec.json
node tools/coverage-checklist.mjs research/frontier-11-batch-4.coverage.json
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

# frontier-11, batch 4

You are **Beta-frontier-11-4**. Your writable artifacts are the four
`research/frontier-11-batch-4.*` files named in the brief above.

## Your pages

- **A** `the-determinant-of-a-linear-operator` (order 84, linear-algebra) — "The Determinant of a Linear Operator, Cofactors and Cramer's Rule"
  - **B** `the-determinant-of-a-linear-operator-examples` (order 85)
  - requires: `determinants-of-matrices-over-a-commutative-ring`, `gaussian-elimination-and-row-reduction`
- **A** `the-integral-logarithm-and-its-characterisations` (order 178.1, real-analysis) — "The Integral Logarithm and the Equivalence of Its Characterisations"
  - **B** `the-integral-logarithm-and-its-characterisations-examples` (order 178.2)
  - requires: `the-logarithm-and-general-powers`

## Prose scaffold sections to read

- `research/plan-algebra-track.md` and `research/plan-algebra-track-expansion.md` (order 84)
- `research/plan-realanalysis-pages.md` **§RA-27b** (order 178.1) — this section is
  prescriptive and is the design you are implementing, not a suggestion.

## Batch note

**Order 84** is the highest-leverage unblocker in the run: it alone blocks
`eigenvalues-eigenvectors-and-the-characteristic-polynomial` (86),
`dual-spaces-bilinear-forms-and-inertia` (92) and `free-modules-and-exact-sequences`
(104). `determinants-of-matrices-over-a-commutative-ring` (82) already owns the
matrix determinant, multiplicativity, expansion and the adjugate — **cite it, do
not rebuild it.** What this page owes is the *basis-free* object: `det(T)` defined
via the matrix of `T` in any basis with **well-definedness proved** (the change-of-
basis conjugation argument is the whole point and must be its own item),
`det(T) != 0` iff `T` is invertible, `det(ST) = det(S)det(T)` transported to
operators, the determinant as the induced map on the top exterior power stated
only if you build enough to state it honestly, cofactors and the adjugate for
operators, and Cramer's rule with its exact hypotheses over a commutative ring
versus a field. The B page wants a non-invertible operator with zero determinant,
the change-of-basis invariance shown on a concrete pair of bases, and a
commutative-ring example where `det(T)` is a non-unit so `T` is injective but not
surjective.

**Order 178.1 is an owner-directed standing scope obligation** (`LEVELS.md`
§Step 0.5). It closes **three** gaps and the page is not done with two of them:

1. **The integral as a definition, not an identity.** Define
   `L(x) := \int_1^x dt/t` for `x > 0`, notated `L` and **not** `log`, and derive
   every property from the integral with **no reference to `exp` in any proof**:
   `L' = 1/x` by the first FTC, `L(1) = 0`, strict monotonicity,
   `L(xy) = L(x) + L(y)` by fixing `y` and differentiating `x |-> L(xy) - L(x)`
   to zero (**not** by a change of variables the page would have to import),
   hence `L(2^n) = n L(2)` and unboundedness both ways, hence a bijection
   `(0,inf) -> R` by the IVT; then `E := L^{-1}` with `E' = E`, `E(0) = 1`.
   Only then identify: `E = exp` is a **single** citation of
   `thm-exponential-ivp-uniqueness`, and `L = log` follows by inverting. That one
   citation is the entire bridge and it is the point of the page.
2. **The functional-equation characterisation** — uniqueness of `log` from
   multiplicative-to-additive plus a regularity hypothesis, stated with the
   hypothesis that actually makes it true.
3. **The equivalence theorem** presenting the characterisations as competing
   definitions, the logarithm's analogue of `thm-exponential-definition-equivalence`,
   plus a roadmap remark in the shape of `rem-exponential-roadmap-and-circularity`
   arguing the identification is not circular.

RA-27b also lists what orders 175 and 177 **already own** — `def-natural-logarithm`,
`thm-logarithm-derivative-and-integral`, `thm-natural-logarithm-laws`,
`thm-log-one-plus-x-power-series`, `thm-landau-logarithm-limit`, `def-real-power`,
`def-real-power-by-rational-supremum`, `thm-rational-supremum-power-agrees-with-exp`,
`cor-two-less-than-e-less-than-three`. **Cite these; restate none of them.**
State the corollary that `e` is the unique `x > 0` with `\int_1^x dt/t = 1`.

Note `the-fundamental-theorems-of-calculus` (239) is being scaffolded in batch 2
of this run and is **not** available to you as a dependency — the FTC you cite is
the published one. If you find you need something only order 239 will have, that
is a blocker to record in your notes, not a citation to invent.
