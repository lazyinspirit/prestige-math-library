# Step 3a Reader Report — Batch 2

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Batch: `2`

## Summary

I independently reviewed the two assigned pages, all four assigned items, their direct logical suppliers, the five published page prerequisites, the scoped proof contracts, and the cited continuum-mechanics sources. The mathematical arguments are sound after one proof repair in `lem-fd-transport-and-density`. The assigned A-page `fd-mf01` still has a body summary, which is prohibited by the current page-presentation instruction; I left it unchanged because the instruction explicitly says not to repair page summaries. The B-page `fd-mf01-examples` has an empty body.

## Opened inventory

### Assigned pages

- `library/fluid-dynamics-mathematics/fd-mf01.md` (`fd-mf01`, A page): frontmatter plus two prose paragraphs in the Markdown body.
- `library/fluid-dynamics-mathematics/fd-mf01-examples.md` (`fd-mf01-examples`, B page): frontmatter only; empty Markdown body.

The batch manifest lists these page prerequisites, all checked as published mathematical pages:

- `../library/real-analysis/fubini-and-change-of-variables.md`
- `../library/real-analysis/inverse-and-implicit-function-theorems.md`
- `../library/real-analysis/the-total-derivative.md`
- `../library/linear-algebra/determinants-of-matrices-over-a-commutative-ring.md`
- `../library/real-analysis/the-riemann-integral-in-rn-and-jordan-content.md`

The B page's prerequisite is the assigned A page `fd-mf01`.

### Assigned items, in dependency order

1. `def-fd-smooth-motion` — direct supplier: `thm-euclidean-inverse-function-theorem`.
2. `lem-fd-transport-and-density` — direct suppliers: `def-fd-smooth-motion`, `thm-euclidean-inverse-function-theorem`, `thm-chain-rule-for-total-derivatives`, `cor-determinant-is-a-polynomial-in-the-matrix-entries`, `thm-change-of-variables-for-compact-jordan-sets`, `thm-injective-c-one-images-of-compact-jordan-sets-are-jordan`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `def-riemann-integral-over-a-jordan-set`, `lem-jordan-set-integral-well-defined`, `thm-multidimensional-integral-properties`, `thm-mean-value-inequality-for-total-derivatives`, and `cor-zero-total-derivative-on-a-convex-open-set-is-constant`.
3. `lem-fd-observer-calculus` — direct suppliers: `def-fd-smooth-motion` and `thm-chain-rule-for-total-derivatives`.
4. `ex-fdmath-dilation-jacobian` — direct supplier: `lem-fd-transport-and-density`.

The listed published item suppliers were opened at `items/<id>.md`; their statements and uses were checked against the assigned consumers. For the determinant-polynomial supplier, its zero-based finite-index convention is consistent with the library's von Neumann natural numbers and `M_n(R)` definition. The assigned lemma explicitly reindexes its 3D coordinate formula from 1 through 3.

### Run evidence consulted

- `research/fluid-dynamics-all-47-2026-10-23-batch-2.pages.json`.
- `research/fluid-dynamics-all-47-2026-10-23-batch-2.proof-contracts.json`, all four scoped entries.
- Item-specific sections of `research/fluid-dynamics-all-47-2026-10-23-batch-2.notes.md`, the corresponding batch coverage entries, and `research/fluid-dynamics-all-47-2026-10-23-author-check-2.json`. Their prior readiness and check results were treated as evidence, not as review verdicts.
- `research/math-imports.json` for the imported-supplier boundary.

## Mathematical and source review

`def-fd-smooth-motion` gives the domain, regularity, orientation, inverse-label map, velocity, material derivative, velocity-gradient decomposition, pathlines, and frozen-time streamlines. Its local inverse argument follows from the opened Euclidean inverse function theorem and injectivity of the joint map. No force law or physical balance premise is introduced.

`lem-fd-transport-and-density` states the Jacobian, transport, and continuity equivalences under explicit C² motion and C¹ field hypotheses. I checked its change-of-variables hypotheses, compact-Jordan image and integrability uses, determinant calculation, uniform differentiation on the fixed compact set, and localization by compact cubes. Two short proof justifications were missing and repaired below. The continuity residual is continuous under the stated regularity, and the local-cube argument yields pointwise vanishing from vanishing integrals without a physical mass-conservation postulate.

`lem-fd-observer-calculus` defines the spatial transformation by a time-dependent proper rotation and translation, then derives the velocity, gradient, acceleration, stretching, spin, and trace transformations. The equations agree with the stated correspondence at fixed time. Objectivity is defined by the displayed tensor transformation law; the result makes no inertial-frame or force-law claim.

`ex-fdmath-dilation-jacobian` computes the inverse, derivative matrix, positive Jacobian, velocity divergence, and invariant pullback by direct substitution. Its final use of the transport lemma is supported by the auxiliary C¹ density and smooth-motion hypotheses constructed in `[F2]`.

There are no diagrams in the assigned items or pages. The items contain no empirical observations or statistical claims.

The cited source sections support the kinematic terminology and formulas while the assigned proof supplies the precise local hypotheses. R. Abeyaratne, *Continuum Mechanics*, Volume II, Chapter 3 §§3.1, 3.3, 3.4.3, 3.7 and 3.8, was checked for the motion map, velocity-gradient decomposition, $\dot F=LF$, $\dot J=J\operatorname{tr}L$, transport identity, and Euclidean observer change: [MIT PDF](https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf). James F. Price, *Lagrangian and Eulerian Representations of Fluid Flow*, Part 1, §§1.2.1–1.2.2, 3.2–3.3 and 3.4.1, was checked for material labels, Eulerian fields, material derivative, transport, and the continuity equation: [MIT OpenCourseWare PDF](https://ocw.mit.edu/courses/res-12-001-topics-in-fluid-dynamics-fall-2024/mitres_12_001_f24_essay1_pt1.pdf). Price's §3.4.1 adopts physical mass conservation to derive the fluid equation; the assigned lemma does not import that postulate and proves a mathematical equivalence instead.

## Repair made

In `items/lem-fd-transport-and-density.md`:

- Step 4.1 previously invoked commutation of mixed partials from C² regularity without establishing that result. It now proves the needed equality locally by writing the same rectangular increment as both iterated integrals and taking limits using continuity of the second partials.
- Step 10.1 now states that the continuity residual is continuous under the hypotheses.
- Step 10.2 now records that the image is compact Jordan and that the continuous residual is Riemann integrable there before applying change of variables. Its tags now include the existing facts `F6` and `F11`.
- The matching proof-contract derivations and fact-use rows were updated. The item has no `verification.judge` record to remove.

Checks after the repair:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-fd-transport-and-density.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-fd-transport-and-density.md` — pass.
- `node tools/physics-support/proof-layout.mjs items/lem-fd-transport-and-density.md` — 14 steps, 0 defects.

No other item or page was edited.

## Page verdicts and unedited finding

- `fd-mf01`: defective. The Markdown body contains two summary paragraphs after the YAML frontmatter. Current instructions require frontmatter-only A/B pages and expressly prohibit repairing page summaries. I left the body untouched and recorded the page finding in `research/fluid-dynamics-all-47-2026-10-23-reader-findings-2.json`.
- `fd-mf01-examples`: pass. The page is frontmatter-only, has the expected examples inventory, is classified as mathematics, and retains `page_layout: compact-v1`.

## Blocker and coverage limit

The `fd-mf01` body summary remains an uneditable page-layout blocker under this reader dispatch. The review covered the assigned batch and consumer-relevant mathematical suppliers; it did not run the whole-run gate battery or audit the complete transitive proof library. Source reading was limited to the cited sections, not the full books.
