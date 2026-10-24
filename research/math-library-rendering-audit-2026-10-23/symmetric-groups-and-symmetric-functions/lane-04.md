# Symmetric Groups and Symmetric Functions rendering audit — lane 04

Reviewed all 32 assigned item titles and complete ItemBodies, plus all 73 assigned screenshot tiles. Each tile was opened individually with `tools.view_image` at original resolution. Current source, frozen snapshot, rendered HTML, and screenshot hashes match their frozen records. No item or tile remains unreviewed. Exact per-item and per-tile SHA256 coverage is in [lane-04.json](lane-04.json).

Two confirmed title notation defects show `S_3` with a literal underscore instead of a typeset subscript: `cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric` and `ex-kronecker-products-for-s3`. The same notation in ItemBody math renders correctly. See the JSON finding records for source line and screenshot evidence.

## Rendering and diagram checks

The 32 receipt sidecars report zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. There were no existing TikZ/tikzcd maps, orientations, indices, or signs to check. The inline math and full proof content were legible in all original-resolution tiles. No standalone clipping was confirmed. No source-supported missing diagram was strong enough to recommend; the examples and correspondences in this lane are fully specified by the accompanying prose and formulas.

## Item and tile coverage

- `cex-a-nonzero-stable-schur-function-can-vanish-in-too-few-variables` — 2 tile(s): `cex-a-nonzero-stable-schur-function-can-vanish-in-too-few-variables--01.png`, `cex-a-nonzero-stable-schur-function-can-vanish-in-too-few-variables--02.png`
- `cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability` — 2 tile(s): `cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability--01.png`, `cex-row-padding-does-not-preserve-a-kronecker-coefficient-before-stability--02.png`
- `cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric` — 1 tile(s): `cor-kronecker-coefficients-are-nonnegative-integers-and-s3-symmetric--01.png`
- `def-beta-set-and-e-runner-abacus-of-a-partition` — 1 tile(s): `def-beta-set-and-e-runner-abacus-of-a-partition--01.png`
- `def-fi-category-and-fi-module` — 2 tile(s): `def-fi-category-and-fi-module--01.png`, `def-fi-category-and-fi-module--02.png`
- `def-graded-bialgebra-and-hopf-algebra` — 1 tile(s): `def-graded-bialgebra-and-hopf-algebra--01.png`
- `def-joint-convergence-and-normalized-cycle-character-observables` — 1 tile(s): `def-joint-convergence-and-normalized-cycle-character-observables--01.png`
- `def-padded-kronecker-coefficient-sequence` — 1 tile(s): `def-padded-kronecker-coefficient-sequence--01.png`
- `def-row-and-column-stabilizers-of-a-tableau` — 1 tile(s): `def-row-and-column-stabilizers-of-a-tableau--01.png`
- `def-tabloid-and-column-orders-for-specht-straightening` — 1 tile(s): `def-tabloid-and-column-orders-for-specht-straightening--01.png`
- `ex-degree-three-stable-symmetric-function-bases` — 3 tile(s): `ex-degree-three-stable-symmetric-function-bases--01.png`, `ex-degree-three-stable-symmetric-function-bases--02.png`, `ex-degree-three-stable-symmetric-function-bases--03.png`
- `ex-kronecker-products-for-s3` — 3 tile(s): `ex-kronecker-products-for-s3--01.png`, `ex-kronecker-products-for-s3--02.png`, `ex-kronecker-products-for-s3--03.png`
- `ex-removable-nodes-and-row-endpoints` — 2 tile(s): `ex-removable-nodes-and-row-endpoints--01.png`, `ex-removable-nodes-and-row-endpoints--02.png`
- `ex-sign-twist-conjugates-the-s31-character` — 2 tile(s): `ex-sign-twist-conjugates-the-s31-character--01.png`, `ex-sign-twist-conjugates-the-s31-character--02.png`
- `ex-young-permutation-modules-for-row-and-column-partitions` — 2 tile(s): `ex-young-permutation-modules-for-row-and-column-partitions--01.png`, `ex-young-permutation-modules-for-row-and-column-partitions--02.png`
- `lem-branching-rule-for-specht-induction-and-coinvariants` — 3 tile(s): `lem-branching-rule-for-specht-induction-and-coinvariants--01.png`, `lem-branching-rule-for-specht-induction-and-coinvariants--02.png`, `lem-branching-rule-for-specht-induction-and-coinvariants--03.png`
- `lem-connected-graded-bialgebra-has-a-recursive-antipode` — 2 tile(s): `lem-connected-graded-bialgebra-has-a-recursive-antipode--01.png`, `lem-connected-graded-bialgebra-has-a-recursive-antipode--02.png`
- `lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules` — 2 tile(s): `lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules--01.png`, `lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules--02.png`
- `lem-integral-jucys-murphy-symmetric-polynomials-span-the-center` — 2 tile(s): `lem-integral-jucys-murphy-symmetric-polynomials-span-the-center--01.png`, `lem-integral-jucys-murphy-symmetric-polynomials-span-the-center--02.png`
- `lem-padded-irreducible-characters-have-character-polynomials` — 2 tile(s): `lem-padded-irreducible-characters-have-character-polynomials--01.png`, `lem-padded-irreducible-characters-have-character-polynomials--02.png`
- `lem-rsk-union-bound-localizes-plancherel-profiles` — 2 tile(s): `lem-rsk-union-bound-localizes-plancherel-profiles--01.png`, `lem-rsk-union-bound-localizes-plancherel-profiles--02.png`
- `lem-specht-branching-successive-quotients` — 4 tile(s): `lem-specht-branching-successive-quotients--01.png`, `lem-specht-branching-successive-quotients--02.png`, `lem-specht-branching-successive-quotients--03.png`, `lem-specht-branching-successive-quotients--04.png`
- `lem-type-a-modular-root-interval-essential-subset-basis-and-count` — 10 tile(s): `lem-type-a-modular-root-interval-essential-subset-basis-and-count--01.png`, `lem-type-a-modular-root-interval-essential-subset-basis-and-count--02.png`, `lem-type-a-modular-root-interval-essential-subset-basis-and-count--03.png`, `lem-type-a-modular-root-interval-essential-subset-basis-and-count--04.png`, `lem-type-a-modular-root-interval-essential-subset-basis-and-count--05.png`, `lem-type-a-modular-root-interval-essential-subset-basis-and-count--06.png`, `lem-type-a-modular-root-interval-essential-subset-basis-and-count--07.png`, `lem-type-a-modular-root-interval-essential-subset-basis-and-count--08.png`, `lem-type-a-modular-root-interval-essential-subset-basis-and-count--09.png`, `lem-type-a-modular-root-interval-essential-subset-basis-and-count--10.png`
- `prop-omega-conjugates-schur-functions` — 2 tile(s): `prop-omega-conjugates-schur-functions--01.png`, `prop-omega-conjugates-schur-functions--02.png`
- `prop-scaled-plancherel-profile-moments-converge-in-probability` — 3 tile(s): `prop-scaled-plancherel-profile-moments-converge-in-probability--01.png`, `prop-scaled-plancherel-profile-moments-converge-in-probability--02.png`, `prop-scaled-plancherel-profile-moments-converge-in-probability--03.png`
- `rem-rsk-longest-increasing-subsequence-consequences-remain-rg11-owned` — 1 tile(s): `rem-rsk-longest-increasing-subsequence-consequences-remain-rg11-owned--01.png`
- `thm-e-core-is-independent-of-the-rim-hook-removal-order` — 2 tile(s): `thm-e-core-is-independent-of-the-rim-hook-removal-order--01.png`, `thm-e-core-is-independent-of-the-rim-hook-removal-order--02.png`
- `thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis` — 3 tile(s): `thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis--01.png`, `thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis--02.png`, `thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis--03.png`
- `thm-littlewood-richardson-schur-product-expansion` — 3 tile(s): `thm-littlewood-richardson-schur-product-expansion--01.png`, `thm-littlewood-richardson-schur-product-expansion--02.png`, `thm-littlewood-richardson-schur-product-expansion--03.png`
- `thm-outer-induction-makes-the-graded-representation-group-a-commutative-ring` — 3 tile(s): `thm-outer-induction-makes-the-graded-representation-group-a-commutative-ring--01.png`, `thm-outer-induction-makes-the-graded-representation-group-a-commutative-ring--02.png`, `thm-outer-induction-makes-the-graded-representation-group-a-commutative-ring--03.png`
- `thm-schensted-longest-increasing-and-decreasing-subsequence-theorem` — 2 tile(s): `thm-schensted-longest-increasing-and-decreasing-subsequence-theorem--01.png`, `thm-schensted-longest-increasing-and-decreasing-subsequence-theorem--02.png`
- `thm-standard-polytabloid-basis` — 2 tile(s): `thm-standard-polytabloid-basis--01.png`, `thm-standard-polytabloid-basis--02.png`
