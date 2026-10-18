# Step 3a reader report — batch 55

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: independent reader  
Verdict: no confirmed defects found; no blocker.

## Opened inventory

Reviewed both assigned pages:

- A page: `cohomological-hall-algebras-and-quiver-correspondences`.
- B page: `cohomological-hall-algebras-and-quiver-correspondences-examples`.

Opened all 18 assigned items; for claims depending on assigned suppliers, I checked the suppliers before reaching consumer verdicts:

- A items: `lem-general-linear-quotient-stacks-are-algebraic`; `def-quiver-representation-stacks-and-exact-sequence-correspondences`; `lem-quiver-exact-sequence-correspondence-is-smooth-and-proper`; `lem-algebraic-milnor-neighborhoods-admit-controlled-sector-transport`; `thm-normalized-rational-vanishing-cycles-have-coherent-operations`; `rem-preprojective-coha-and-nakajima-action-source-boundaries`; `def-intrinsic-quotient-stack-borel-moore-grading`; `def-quiver-potential-and-monodromic-vanishing-cycle-data`; `lem-quiver-parabolic-levi-borel-model-comparisons`; `thm-quiver-quotient-stack-borel-moore-operation-package`; `def-untwisted-quiver-cohomological-hall-algebra`; `lem-quiver-potential-trace-is-additive-on-extensions`; `thm-untwisted-quiver-coha-is-associative-and-unital`; `lem-standard-rational-quiver-vanishing-cycles-realize-critical-correspondences`; `def-critical-quiver-coha-from-vanishing-cycle-data`; `thm-critical-quiver-coha-associative-under-coherence-axioms`.
- B items: `ex-jordan-quiver-extension-correspondence`; `ex-jordan-quiver-potential-critical-locus`.

For the claims used in these items and page summaries, I also inspected the relevant interfaces and proof passages of the quotient-stack, descent, representability, smoothness, Grassmannian, projective-bundle, properness, additive-torsor, stratification, controlled-transport, finite-triangulation, finite-cochain, principalization, six-operation, Verdier-duality, equivariant Borel–Moore, and Stiefel-frame suppliers. This included the full local argument of `lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions`, the relative Künneth, Alexander–Whitney/shuffle, cover-small-chain, and additive-torsor arguments, and the required page-level reading prerequisites.

## Mathematical review and evidence

- The quotient atlas argument identifies its pullback over a torsor with that torsor; the isomorphism functor is locally the closed compatibility locus in an affine general-linear group. The extension correspondence's off-diagonal rank is `e = Σ b_i a_j`, its splitting group has rank `u = Σ a_i b_i`, and its stack-relative smooth dimension is `e-u = -χ_Q(b,a)`. The proper map is represented after every scheme base change by the closed invariant-subspace incidence locus in a relative Grassmannian. The all-loop, repeated-arrow, zero-rank, and empty-quiver cases are covered by the displayed formulas and endpoint cases.
- The Milnor-neighborhood proof's generic-center argument controls the relative conormal obstruction, chooses radii avoiding the finite zero-fibre obstruction set and distance critical values, and uses compactness to rule out nonzero boundary critical values. The supplied controlled transport and compact controlled triangulation statements match the uses made in the proof. For the vanishing-cycle normalization and operations, I checked Massey's [*The Sebastiani–Thom Isomorphism in the Derived Category*](https://arxiv.org/pdf/math/9908101), §1 (Lemma 1.2, Propositions 1.3–1.4, proof 1.5, PDF pp. 2–5), and [*Natural Commuting of Vanishing Cycles and the Verdier Dual*](https://arxiv.org/pdf/0908.2799), Lemma 2.2 and Theorem 3.1 (PDF pp. 2–5). Their support inclusion, positive angular monodromy, and normalized duality agree with the local conventions. The additional local claims are supported by the item's finite-neighborhood, open-pair chain, and SNC computations.
- The ordinary CoHA shift is consistent with the subrepresentation-first convention: the smooth pullback contributes `2(e-u) = -2χ_Q(b,a)`. The critical product uses the same shift; its proper coefficient map has the stated direction, dual to the morphism from total-dimension vanishing cycles to the proper image of extension vanishing cycles. I checked Kontsevich–Soibelman's [paper](https://arxiv.org/pdf/1006.2706v2), §§2.1–2.3 (PDF pp. 8–11) and §7.6 (PDF pp. 101–102), and Davison's [paper](https://arxiv.org/pdf/1311.7172v5), §2.5 (PDF pp. 14–15), §§2.7 and 3.1–3.2 (PDF pp. 20–27). The local claims are more explicit about rational coefficients, arbitrary critical values, and the proper morphism; they do not import an isomorphism for closed restriction or claim mixed-Hodge enrichment.
- Associativity compares both parenthesizations on the same ordered three-step flag. Bilinearity gives `χ(b,a)+χ(c,a+b)=χ(c,b)+χ(b+c,a)`, so the declared degree is unchanged. The zero-subobject and zero-quotient correspondences give the two identity maps.
- The one-loop example's splitting action sends `c` to `c+(μ−λ)t`; its scalar-matrix fiber under `p` is `P¹`, its distinct-eigenvalue fiber has two lines, and its non-scalar Jordan fiber has one. For `x²`, the small Milnor fibre has two points, a positive loop exchanges them, and `V_f=φ_f[-1]` places reduced `H⁰` in degree one.
- The A-page's source boundaries match the consulted sources. Yang–Zhao's [paper](https://arxiv.org/pdf/1407.7994v6), Theorems A and B (§§0.1–0.2) and Theorem D (§0.4; see also §5.6 and Theorem 8.3), retains the algebraic-oriented-cohomology and torus-action conditions; Theorem D is restricted to quivers without edge loops and retains the sign twist, parameter specialization, torsion quotient, ADE isomorphism range, and action diagram. Nakajima's [review](https://arxiv.org/pdf/1611.10000v1), Theorem 14 (§4.1) and Theorem 17 (§4.5), states the no-edge-loop condition for the Lagrangian-core theorem; it says the Lagrangian proof is omitted and gives only a sketch for the action relations. The B-page summaries stay within their examples' calculations.

## Edits, unresolved defects, and page verdicts

- Edits: none. No item or page bytes were changed; no proof contract or judge record was touched. Reflow, precheck, and proof-layout were not run because no item was changed.
- Defects that could not be edited: none identified.
- A page `cohomological-hall-algebras-and-quiver-correspondences`: no confirmed defect; its scope, grading, operation boundary, and source-reported action caveats agree with the opened carriers and sources.
- B page `cohomological-hall-algebras-and-quiver-correspondences-examples`: no confirmed defect; both computations and the boundary between illustration and general proof are accurate.
- Blocker: none.
