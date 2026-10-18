# Reader report — batch 56

## Run and scope

Reviewed run `non-ml-math-remaining-81-2026-10-18`, batch `56`, while the run was live in stage `3a-read`. The assigned scope contained one A page and its B companion.

## Opened inventory

### Assigned pages

- A page `hall-stability-dt-bps-and-wall-crossing`: `library/hall-algebras-and-tensor-categories/hall-stability-dt-bps-and-wall-crossing.md`.
- B page `hall-stability-dt-bps-and-wall-crossing-examples`: `library/hall-algebras-and-tensor-categories/hall-stability-dt-bps-and-wall-crossing-examples.md`.

### Required reading-context pages

- `derived-hall-algebras`.
- `motivic-hall-algebras-and-integration`.
- `cohomological-hall-algebras-and-quiver-correspondences`.
- `hall-algebra-modules-and-geometric-actions`.

### Assigned items, read in dependency order

- `def-finite-acyclic-quiver-stability-data`.
- `lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form`.
- `lem-upper-half-plane-sum-phase-between`.
- `lem-quiver-semistable-loci-are-open`.
- `lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend`.
- `lem-finite-field-quiver-semistable-stack-points-are-hall-groupoids`.
- `def-subobject-first-completed-finite-quiver-hall-algebra-and-tori`.
- `lem-finite-quiver-hall-extension-orbit-count`.
- `thm-finite-quiver-euler-and-skew-integration-is-multiplicative`.
- `thm-finite-quiver-hall-wall-crossing`.
- `rem-finite-quiver-hall-counts-and-dt-bps-interpretation`.
- `ex-one-vertex-finite-quiver-hall-integration-is-quantum-dilogarithm`.
- `ex-a2-quiver-hall-wall-crossing-pentagon`.
- `cex-omitting-strictly-semistable-objects-breaks-hn-factorization`.
- `cex-commutative-target-erases-the-a2-wall-crossing`.

### External item suppliers opened

`def-finite-field-and-its-order`, `def-abelian-category`, `def-hall-finitary-abelian-category`, `def-equivalence-of-n-fold-extensions`, `thm-short-five-lemma-in-an-abelian-category`, `def-grassmannian-subspaces`, `def-plucker-coordinates`, `lem-plucker-map-well-defined-injective`, `thm-plucker-image-closed`, `def-segre-map`, `thm-segre-image-rank-one-minors`, `def-projective-morphism-pre-proj`, `thm-projective-morphism-proper`, `thm-proper-morphism-closed-image`, `thm-closed-projective-embedding-by-homogeneous-generators`, `def-axiom-of-choice`, `thm-closed-subschemes-projective-space-homogeneous-ideals`, `def-untwisted-hall-algebra`, `lem-untwisted-hall-product-finiteness`, `thm-untwisted-hall-algebra-is-associative-and-unital`, `def-toen-derived-hall-algebra`, `def-hall-algebra-module`, `def-motivic-hall-algebra-of-a-finite-quiver`, `def-quiver-motivic-quantum-torus`, and `def-untwisted-quiver-cohomological-hall-algebra`.

## Mathematical review and edits

The finite-quiver representation lemma's vertexwise abelian structure, path-projective resolution, endpoint-fixed Yoneda extension classification, and Euler-form calculation are consistent. The upper-half-plane phase comparison is correct. The HN proof obtains a maximal-phase, maximal-dimension subobject from the finite set of dimension vectors; its quotient argument, uniqueness proof, and Frobenius descent by unique reduced row-echelon bases support the statement. The finite-field stack argument trivializes each general-linear torsor through its associated vector space and uses the HN descent result for geometric semistability. The Hall extension-orbit count and both integration exponents match the declared subobject-first order. The HN flag product, unit argument, and formal degree completion are sound. The one-vertex coefficient, A₂ chamber calculation, and both counterexamples check out.

1. In `lem-quiver-semistable-loci-are-open`, the original first proof step used Grassmannian schemes and tautological subbundle/quotient bundles before constructing those schemes; the cited Grassmannian item only defined a parameter set, and the Plücker/Segre dependencies gave point-set closed loci. I reordered and completed the argument: step 1.1 constructs the Plücker and Segre chart schemes, their local bundles, and the relative projective embedding; step 2.1 then defines the closed incidence locus; subsequent steps project it, take the finite union of destabilizing images, and complement that union. This preserves the Axiom-of-Choice branches through the closed-subscheme and properness suppliers. The relevant cited source checks were Reineke, §3, Theorem 3.2 (semistable representation loci are open), and Bridgeland, §§4.4–4.5 for the stability and HN context.

2. In `def-subobject-first-completed-finite-quiver-hall-algebra-and-tori`, the Hall carrier and its completion had no coefficient ring, while the integration maps use rational automorphism denominators and target the field `K_q`. I specified `H_Q = H_{A_Q,Q}`, identified its basis symbols with the characteristic functions, and specified the Euler and skew tori over `K_q`. This makes the later maps well-typed. The relevant normalization is also present in Bridgeland, §3.4, with the finitary extension-orbit formula in §2.1, Lemma 2.2, and the one-vertex series in §2.2.

No edited item had a `verification.judge` record to remove. Updated the batch 56 proof contract for the openness-step order, axiom-use steps, and the rational Hall coefficient convention.

### Source passages checked

- Tom Bridgeland, *Hall Algebras and Donaldson–Thomas Invariants*, §§2.1–2.2 (Hall convolution, extension-orbit formula, and vector-space series), §3.4 (hereditary integration map and skew twist), §§4.4–4.5 (phase/HN definitions and descending HN product), and §4.6 (the A₂ pentagon): <https://arxiv.org/pdf/1611.03696>.
- Markus Reineke, *The Harder–Narasimhan system in quantum groups and cohomology of quiver moduli*, §2, Proposition 2.5 (existence and uniqueness of the HN filtration), and §3, Theorem 3.2 (openness of the semistable locus): <https://arxiv.org/pdf/math/0204059>.
- Olivier Schiffmann, *Lectures on Hall Algebras*, §§1.1, 1.3, and 3.3, consulted for the cited finitary Hall, extension, and quiver conventions: <https://arxiv.org/pdf/math/0611617>.

## Page verdicts

- `hall-stability-dt-bps-and-wall-crossing` (A): pass after the two item repairs. The summary correctly limits the proved wall crossing to the finite-field Hall identity and its Euler/skew integrations, and distinguishes those arithmetic masses from the derived, motivic, cohomological, and Hall-module constructions.
- `hall-stability-dt-bps-and-wall-crossing-examples` (B): pass. The examples match the A-page conventions, and the counterexamples show the stated failures in the advertised degrees.

## Unedited defects and blockers

No confirmed or suspected uneditable defect remains in the assigned pages, items, or opened supplier statements. No blocker.

## Validation

- `reflow.mts` on `lem-quiver-semistable-loci-are-open.md`: reflowed.
- `precheck.mts` on `lem-quiver-semistable-loci-are-open.md`: pass, 1 checked, 0 failing.
- `reflow.mts` on `def-subobject-first-completed-finite-quiver-hall-algebra-and-tori.md`: unchanged.
- `precheck.mts` on `def-subobject-first-completed-finite-quiver-hall-algebra-and-tori.md`: 0 checked, 0 failing.
- Final batched `proof-layout.mjs` on both changed item paths: 2 items, 5 steps, 0 defects.

Coverage was limited to the assigned batch, the opened direct suppliers, the four required reading-context pages, and the cited source sections listed above; this was not a full re-audit of the repository or the complete transitive dependency closure of every published supplier.
