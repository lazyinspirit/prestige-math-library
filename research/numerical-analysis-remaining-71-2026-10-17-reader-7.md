# Step 3a reader report — batch 7

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `7`  
Role: reader

## Opened inventory

Pages:

- `library/numerical-linear-algebra-and-approximation/certified-geometric-predicates.md` (`certified-geometric-predicates`) — A page, draft.
- `library/numerical-linear-algebra-and-approximation/certified-geometric-predicates-examples.md` (`certified-geometric-predicates-examples`) — B page, draft.

Assigned A-page items under `items/<id>.md`, read in dependency order:

1. `def-certified-geometric-predicate-determinants`
2. `alg-interval-geometric-predicate-filter`
3. `alg-symbolic-geometric-determinant-tie-break`
4. `lem-dyadic-determinant-integer-clearance-preserves-sign`
5. `lem-leibniz-determinant-forward-error-bound`
6. `lem-two-and-three-by-three-nonsingular-dyadic-system-solvable`
7. `alg-exact-dyadic-determinant-sign`
8. `alg-floating-filter-for-geometric-determinants`
9. `lem-nondegenerate-dyadic-simplex-determines-unique-sphere`
10. `thm-interval-geometric-predicate-filter-sound`
11. `lem-lifted-determinant-sign-matches-sphere-side`
12. `thm-floating-filter-sign-is-exact`
13. `alg-certified-dyadic-geometric-predicate`
14. `thm-symbolic-geometric-determinant-tie-break-consistent`
15. `thm-certified-dyadic-geometric-predicate-sound-and-terminates`

Assigned B-page examples, after their A-page suppliers:

- `ex-uncertain-coordinate-interval-with-ambiguous-sign`
- `ex-nearly-cocircular-sites-certified-incircle`
- `ex-nearly-collinear-triangle-certified-orientation`

Direct published item dependencies opened: `def-dyadic-floating-point-format-and-directed-rounding`, `def-intervals-rectangles-and-complex-balls`, `def-complete-ordered-real-field`, `def-outward-rounded-interval-and-ball-operations`, `thm-outward-rounded-operations-are-isotone-and-dag-sound`, `def-standard-relative-floating-point-model-and-unit-roundoff`, `lem-of-abs-value`, `lem-of-triangle-inequality`, `lem-nonnegative-square-root-exists-and-unique`, `def-abs-value`, `lem-directed-dyadic-rounding-enclosure-and-error`, `alg-dyadic-square-root-bisection`, `thm-dyadic-square-root-bisection-encloses`, and `lem-real-and-complex-modulus-rules`.

To check the ordered-field facts used by those suppliers, I also opened `def-ordered-field`, `lem-of-mult-neg`, `lem-of-sign-rules`, `lem-of-add-order`, `def-field`, `lem-of-zero-mult`, and `lem-of-inverse-unique`. These suppliers were published; no dependency from another current-run batch was reached.

## Review and edits

The determinant definitions preserve the raw zero sign, use the stated row and column order, and restrict geometric side interpretation to a nondegenerate base. The integer-clearance argument scales each row by a positive power of two. The floating error proof counts the $s-1$ product roundings and $s!-1$ accumulation roundings, and its $γ_q$ estimate follows from the displayed hypotheses. The sphere-center and lifted-determinant proofs preserve the signs for the stated conventions. The interval and exact filters return a sign only under their respective enclosure/error certificates. The symbolic perturbation proof establishes nonzero determinant polynomials, preserves already nonzero signs, and gives one sufficiently small positive parameter for the finite predicate family. The example computations and edge cases agree with the definitions.

Two algorithm definitions left the interval evaluation order unspecified, although outward interval arithmetic can give different enclosures under different groupings. I repaired both in-flight algorithms:

- `alg-interval-geometric-predicate-filter` now forms lifted squared-norm entries in coordinate order, enumerates permutations lexicographically, multiplies each term left-to-right, applies odd signs by interval subtraction, and accumulates terms left-to-right. This fixes the exact finite interval DAG whose sign is tested.
- `alg-floating-filter-for-geometric-determinants` now builds the absolute-term interval DAG using the same lexicographic permutation order and left-to-right products and sum. Its $U$ is consequently unambiguous.

The dependent soundness proofs remain applicable: `thm-interval-geometric-predicate-filter-sound` and `thm-floating-filter-sign-is-exact` use outward enclosure of a finite expression DAG whose nodes all return finite enclosures, together with the same sign/error conditions. Their mathematical steps and statements did not change. Both algorithm items have no phase-proof section and no `verification.judge` record. I refreshed the five exact source-quote mirrors in the batch proof contract that quoted the changed definitions; no proof-step derivation changed.

No other confirmed defect remained. No assigned page prose was edited.

## Page verdicts

- `certified-geometric-predicates`: **pass after the two algorithm clarifications**. The page summary accurately describes the exact determinant, floating and integer filters, interval uncertainty, zero preservation, and separately declared symbolic tie-break.
- `certified-geometric-predicates-examples`: **pass**. Its summary matches the three examples. The diagram is marked schematic and the item computations do not rely on it.

## Source checks

- Shewchuk, *Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates*, [official PDF](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf), §§4.2–4.4 (PDF pp. 36–45): §4.2 gives orientation/incircle sign conventions and determinant formulations; §§4.3–4.4 describe adaptive error-bound filtering and exact determinant evaluation. The batch's general left-to-right Leibniz bound is proved locally.
- Edelsbrunner and Mücke, *Simulation of Simplicity*, [arXiv PDF](https://arxiv.org/pdf/math/9410209), §3.2 and Lemmas 3.2–3.3 (PDF pp. 8–10): coordinate perturbations are ordered by infinitesimal exponents; the cited argument establishes nondegeneracy for sufficiently small positive perturbation and preservation of a nonzero original orientation. The batch's base-three encoding is separately justified in its proof.
- CGAL Manual, [“Robustness Issues”](https://cgal.geometryfactory.com/CGAL/doc/main/Manual/devman_robustness.html), “The role of predicates and constructions” (current page, lines 24–30): distinguishes exact geometric predicates from constructions and describes exact predicate support.
- de Berg et al., *Computational Geometry: Algorithms and Applications*, 2nd ed., Ch. 1 §1.2, “Degeneracies and Robustness” ([author-hosted chapter PDF](https://ics-websites.science.uu.nl/geobook/introduction.pdf), pp. 7–9): discusses how rounding can change near-degenerate geometric decisions. The item’s listed [Cimec PDF URL](https://cimec.org.ar/twiki/pub/Cimec/GeometriaComputacional/DeBerg_-_Computational_Geometry_-_Algorithms_and_Applications_2e.pdf) did not render in the web reader; I checked the same edition’s author-hosted chapter instead.

## Validation and blocker

- Reflow: both changed algorithms reported `unchanged`.
- Precheck: both changed algorithms reported `0 checked, 0 failing` (definitions have no numbered proof steps).
- Proof layout: one batched command on both changed item paths reported `2 items, 0 steps, 0 defects`.
- Proof-contract checks: the targeted post-update check reported `0 errors, 0 warnings, 8/8 items checked`; the final strict batch check reported `0 errors, 0 warnings, 18/18 assigned items checked`.
- Blocker: none.

No mathematical finding remains uneditable. The machine-readable findings artifact has `findings: []`.
