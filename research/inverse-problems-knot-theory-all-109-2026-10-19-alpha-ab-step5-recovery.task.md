# Step 5 adjudication — group **ab**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 82, 83, 84: 3 A/B pair(s), 6 page(s), 38 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **82**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-82-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **83**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-83-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **84**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-84-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/inverse-problems-knot-theory-all-109-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 82 | `kauffman-bracket-state-sum-and-jones-polynomial` | A | knot-theory | 3146 | `hecke-markov-traces-and-polynomial-link-invariants`, `crossing-signs-writhe-and-linking-number`, `temperley-lieb-diagram-algebra-and-catalan-basis`, `temperley-lieb-root-of-unity-and-modular-representation-theory` |
| 82 | `kauffman-bracket-state-sum-and-jones-polynomial-examples` | B | knot-theory | 3147 | `kauffman-bracket-state-sum-and-jones-polynomial`, `temperley-lieb-diagram-algebra-and-catalan-basis`, `temperley-lieb-root-of-unity-and-modular-representation-theory` |
| 83 | `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` | A | knot-theory | 3148 | `crossing-signs-writhe-and-linking-number`, `kauffman-bracket-state-sum-and-jones-polynomial`, `brauer-bmw-and-partition-diagram-algebras` |
| 83 | `kauffman-and-dubrovnik-polynomials-from-bmw-algebras-examples` | B | knot-theory | 3149 | `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` |
| 84 | `skein-modules-for-links-in-three-manifolds` | A | knot-theory | 3150 | `kauffman-bracket-state-sum-and-jones-polynomial` |
| 84 | `skein-modules-for-links-in-three-manifolds-examples` | B | knot-theory | 3151 | `skein-modules-for-links-in-three-manifolds` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `kauffman-bracket-state-sum-and-jones-polynomial` — Kauffman bracket state sum and the Jones polynomial (8 item(s))

- `def-kauffman-bracket-smoothing-and-loop-value` · definition — Kauffman bracket smoothing and loop value
- `alg-kauffman-bracket-state-sum` · algorithm — Kauffman bracket state sum
- `lem-kauffman-bracket-r2-r3-identities` · lemma — Kauffman bracket R2 and R3 identities
- `thm-kauffman-bracket-state-sum-procedure-properties` · theorem — Kauffman bracket state-sum procedure properties
- `lem-kauffman-bracket-curl-and-writhe-correction` · lemma — Kauffman bracket curl and writhe correction
- `lem-hecke-bracket-trace-dictionary-and-local-descent` · lemma — Hecke–bracket trace dictionary and local descent
- `thm-normalized-bracket-is-an-oriented-link-invariant` · theorem — The normalized bracket is an oriented link invariant
- `thm-bracket-state-sum-matches-library-jones-specialization` · theorem — The bracket state sum matches the library Jones specialization

### `kauffman-bracket-state-sum-and-jones-polynomial-examples` — Kauffman bracket state sum and the Jones polynomial — Examples and Counterexamples (2 item(s))

- `cex-knot-kt-29-boundary-case` · counterexample — A type-I kink changes the raw bracket
- `ex-knot-kt-29-worked-cases` · example — Trefoil, mirror, and unknot bracket calculations

### `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` — Kauffman and Dubrovnik polynomials from BMW algebras (15 item(s))

- `def-kauffman-regular-isotopy-and-dubrovnik-conventions` · definition — Kauffman regular-isotopy and Dubrovnik conventions
- `def-bmw-dubrovnik-coefficient-extension` · definition — BMW coefficient extension for Dubrovnik parameters
- `lem-kauffman-dubrovnik-writhe-component-conversion` · lemma — Kauffman and Dubrovnik writhe-component conversion
- `lem-bmw-relations-dubrovnik-parameter-dictionary` · lemma — BMW relations in the Dubrovnik parameter convention
- `def-dubrovnik-tangle-skein-algebra` · definition — Ordinary Dubrovnik tangle skein algebra
- `lem-bmw-presentation-tangle-evaluation-is-well-defined` · lemma — The BMW presentation maps to the Dubrovnik tangle algebra
- `lem-bmw-descending-tangle-spanning` · lemma — BMW tangle skein spanning by descending matchings
- `lem-bmw-finite-source-normal-form-over-dubrovnik-extension` · lemma — Finite source normal form over the Dubrovnik coefficient extension
- `lem-bmw-closure-pairing-independence` · lemma — BMW descending matchings are independent by closure pairing
- `lem-bmw-markov-trace-stabilization` · lemma — BMW closure trace and stabilization scalars
- `lem-bmw-descending-tangle-spanning-and-independence` · lemma — BMW has the descending Kauffman tangle basis
- `alg-kauffman-polynomial-from-bmw-braid-closure` · algorithm — Compute the Kauffman polynomial from a BMW braid closure
- `thm-bmw-markov-trace-gives-dubrovnik-invariant` · theorem — The BMW Markov trace gives the Dubrovnik link invariant
- `thm-kauffman-polynomial-from-bmw-braid-closure-procedure-properties` · theorem — The BMW braid-closure algorithm terminates and returns its stated value
- `thm-kauffman-and-dubrovnik-conversion` · theorem — The Kauffman and Dubrovnik polynomials agree under the stated conversion

### `kauffman-and-dubrovnik-polynomials-from-bmw-algebras-examples` — Kauffman and Dubrovnik polynomials from BMW algebras — Examples and Counterexamples (2 item(s))

- `cex-knot-kt-30-boundary-case` · counterexample — The leading minus sign in the Dubrovnik conversion is necessary
- `ex-knot-kt-30-worked-cases` · example — BMW Kauffman and Dubrovnik worked cases

### `skein-modules-for-links-in-three-manifolds` — Skein modules for links in 3-manifolds (9 item(s))

- `lem-framed-link-diagram-calculus` · lemma — Framed link diagrams and local Reidemeister moves in plane products
- `def-kauffman-bracket-skein-module-of-a-three-manifold` · definition — Kauffman bracket skein module of a three-manifold
- `lem-kauffman-bracket-module-framing-twist-factor` · lemma — Full framing twists in the Kauffman bracket skein module
- `lem-general-3manifold-skein-quotient-isotopy-and-gluing` · lemma — Functoriality and boundary-collar action for the three-manifold skein quotient
- `lem-kauffman-bracket-evaluation-is-invariant-for-framed-links-in-s-three` · lemma — Kauffman bracket evaluation of framed links in the three-sphere
- `lem-annular-kauffman-bracket-state-expansion` · lemma — Annular state expansion for the Kauffman bracket skein module
- `thm-skein-module-of-s-three-is-rank-one` · theorem — The Kauffman bracket skein module of S³ is rank one
- `thm-skein-module-of-solid-torus-has-core-multicurve-basis` · theorem — The solid-torus skein module has a core-multicurve basis
- `lem-skein-module-isomorphism-respects-framings-and-boundary` · lemma — Framing transport and compatible collar actions under oriented diffeomorphisms

### `skein-modules-for-links-in-three-manifolds-examples` — Skein modules for links in 3-manifolds — Examples and Counterexamples (2 item(s))

- `cex-knot-kt-31-boundary-case` · counterexample — Forgetting framing identifies distinct skein classes
- `ex-knot-kt-31-worked-cases` · example — The empty link, trivial circle, and annular core multicurves

## Your seams

Your pages depend on another group's:

- `kauffman-bracket-state-sum-and-jones-polynomial` requires `crossing-signs-writhe-and-linking-number` (group t, batch 58)
- `kauffman-and-dubrovnik-polynomials-from-bmw-algebras` requires `crossing-signs-writhe-and-linking-number` (group t, batch 58)

Another group's pages depend on yours:

- `root-of-unity-skein-tqft-for-three-manifolds` (group ac) requires your `skein-modules-for-links-in-three-manifolds`
- `ribbon-categories-and-reshetikhin-turaev-knot-invariants` (group ac) requires your `kauffman-bracket-state-sum-and-jones-polynomial`
- `ribbon-categories-and-reshetikhin-turaev-knot-invariants` (group ac) requires your `kauffman-and-dubrovnik-polynomials-from-bmw-algebras`
- `khovanov-homology-and-jones-categorification` (group ad) requires your `kauffman-bracket-state-sum-and-jones-polynomial`
- `terminating-computations-for-classical-knot-invariants` (group ai) requires your `kauffman-bracket-state-sum-and-jones-polynomial`
- `alternating-diagrams-and-crossing-number-minimality` (group ai) requires your `kauffman-bracket-state-sum-and-jones-polynomial`
- `open-questions-in-knot-polynomials-and-surgery` (group aj) requires your `kauffman-bracket-state-sum-and-jones-polynomial`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/inverse-problems-knot-theory-all-109-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `inverse-problems-knot-theory-all-109-2026-10-19`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
