# Reader 18 — batch 18, frontier-38-owner-30

Independent Step-5a review completed on the current authored mathematics. No judge, certification, or engine transition performed.

## Opened inventory

Pages (frontmatter and complete prose):
- `library/representation-theory/frobenius-characteristic-and-the-symmetric-group-character-dictionary.md` (A). 
- `library/representation-theory/frobenius-characteristic-and-the-symmetric-group-character-dictionary-examples.md` (B). 

All 16 assigned items (complete current files, suppliers before consumers):
- `def-graded-ordinary-representation-ring-of-symmetric-groups`
- `def-outer-induction-product-for-symmetric-group-characters`
- `lem-complete-homogeneous-expansion-in-power-sums`
- `def-frobenius-characteristic-map`
- `lem-frobenius-characteristic-is-an-isometry`
- `lem-characteristic-of-a-young-permutation-character-is-complete`
- `lem-frobenius-characteristic-preserves-outer-products`
- `thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism`
- `thm-frobenius-characteristic-sends-specht-characters-to-schur-functions`
- `cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients`
- `prop-sign-twist-corresponds-to-the-omega-involution`
- `prop-regular-character-has-characteristic-p-one-to-the-n`
- `ex-frobenius-characteristic-dictionary-for-s3`
- `ex-young-permutation-characteristic-for-shape-two-one`
- `ex-sign-twist-conjugates-the-s31-character`
- `cex-outer-induction-is-not-the-kronecker-product`

Published direct suppliers (definitions or statements and complete relevant item bodies; not a recursive audit of all their dependencies):
- `cor-distinct-specht-modules-are-inequivalent`
- `cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product`
- `cor-power-sums-are-orthogonal-for-the-hall-inner-product`
- `cor-sign-from-disjoint-cycle-structure`
- `cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types`
- `def-class-function-and-the-space-of-complex-class-functions`
- `def-column-antisymmetrizer-polytabloid-and-specht-module`
- `def-external-direct-product-of-groups`
- `def-finite-symmetric-group-and-permutation-notation`
- `def-hall-inner-product-on-symmetric-functions`
- `def-induced-character-of-a-complex-representation`
- `def-partition-young-diagram-and-conjugate-partition`
- `def-power-sum-and-complete-homogeneous-symmetric-polynomials`
- `def-semistandard-tableau-and-kostka-number`
- `def-sign-representation-and-restriction-of-a-representation`
- `def-stable-graded-ring-of-symmetric-functions`
- `def-stable-schur-function-by-bialternants`
- `def-standard-inner-product-on-complex-class-functions`
- `def-tensor-product-of-complex-representations`
- `def-virtual-character-and-character-ring-of-a-finite-group`
- `def-young-subgroup-tabloid-and-permutation-module`
- `lem-kostka-change-of-basis-is-dominance-unitriangular`
- `lem-young-permutation-module-is-induced-from-the-trivial-character`
- `prop-omega-conjugates-schur-functions`
- `prop-power-sums-form-a-rational-not-integral-stable-basis`
- `thm-centralizer-cardinality-from-cycle-type`
- `thm-character-of-a-permutation-representation-counts-fixed-points`
- `thm-character-of-the-regular-representation`
- `thm-characters-of-direct-sums-tensor-products-and-duals`
- `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules`
- `thm-complex-representations-are-determined-by-their-characters`
- `thm-conjugacy-class-cardinality`
- `thm-elementary-and-complete-families-freely-generate-the-stable-ring`
- `thm-frobenius-formula-for-induced-characters`
- `thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions`
- `thm-jacobi-trudi-and-dual-jacobi-trudi-identities`
- `thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order`
- `thm-schur-functions-form-an-orthonormal-integral-basis`
- `thm-standard-polytabloid-basis`
- `thm-youngs-rule-for-permutation-modules`

Other evidence opened: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, WORKFLOW Step-5 controls (lines 73–110), batch pages manifest, batch notes, and batch proof contracts. Notes and prior stamps are evidence, not acceptance.

## Repairs and evidence

All item edits are confined to the ten assigned draft items below. No page prose, other batch, published item, plan, author decision, or verification judgment was edited. There were no `verification.judge` records in these edited carriers to remove.

| Item and exact location | Confirmed defect and repair | Evidence |
|---|---|---|
| `def-outer-induction-product-for-symmetric-group-characters`, Definition, paragraph after the virtual external-product display | A character was described as having a value on an elementary tensor. Replaced this with evaluation at the group element `(sigma,tau)`, giving `f(sigma)g(tau)`. | The preceding displayed external-character formula and the published tensor-character trace formula. This clarifies the same operation without changing its domain or value. |
| `lem-complete-homogeneous-expansion-in-power-sums`, Proof 1.1, 2.1, 4.1 | Removed the false assertion that exponential is additive; stated its formal-series domain and `exp(A+B)=exp(A)exp(B)`. Removed the claim that both `h_d` and `p_k` have degree `d`. Reconstructed each cycle partition in decreasing order rather than the displayed ascending list. | Formal exp/log in a commutative rational power-series ring; the finite polynomial definitions; the published partition definition requires weak decrease. Coefficients still equal `N(lambda,rho)/z_rho`, including the empty case. |
| `lem-characteristic-of-a-young-permutation-character-is-complete`, Proof 2.1 | Replaced “sizes force” row preservation with equality at each labelled row index. Equal-sized rows cannot be interchanged in tabloid equality. | `def-young-subgroup-tabloid-and-permutation-module`, Definition, row equivalence. For shape `(1,1)`, swapping the two entries exchanges the two tabloids despite preserving row sizes. |
| `lem-frobenius-characteristic-preserves-outer-products`, Proof 5.1 | Corrected the individual degrees from `m+n` to `m` and `n`; proved rationality of the induced virtual character using the bilinear extension of the cycle-split formula, without prematurely assuming irreducible character values rational. Added the exact earlier-step tags. | Proof 1.1 and 3.1; each split coefficient is a product of binomial integers. The product and induced characteristic, rather than each factor, have degree `m+n`. |
| `thm-frobenius-characteristic-sends-specht-characters-to-schur-functions`, F6 and Proof 3.1–4.1 | Corrected the coefficient matrix to `K^T` and inverse entries to `(K^-1)_{mu lambda}`. Qualified the ordering that makes `K` lower unitriangular. | The exact supplier statement `h_mu=sum_lambda K_{lambda mu}s_lambda` means `h=K^T s`. In order `((1,1),(2))`, `K=[[1,0],[1,1]]`; the corrected column gives `s_(1,1)=h_1^2-h_2`, whereas the old inverse row incorrectly gave `h_1^2`. The integrality conclusion remains valid with the corrected coefficients. |
| `thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism`, Given, Proof 1.1, source locator | Corrected the same inverse-Kostka entries for characters and their characteristics. Described the given object as a graded abelian group rather than assuming the ring axioms to be proved. Located Macdonald (7.3) and its proof at printed pp. 113–114. | Young's rule gives `phi=K^T chi`; thus `chi=(K^-1)^T phi`. Ring axioms are subsequently transported through the proved multiplicative bijection in Proof 3.1. |
| `ex-frobenius-characteristic-dictionary-for-s3`, Verification 3.1–4.1 | Replaced incorrectly named ordinary `p_rho` coefficients with the normalized coefficients of `p_rho/z_rho`. Replaced the contradictory universal row-norm formula with the three actual norms; supplied the asserted column orthogonality explicitly. | Direct calculation from the displayed expansions: ordinary trivial-row coefficients are `(1/6,1/2,1/3)`, while character values are `(1,1,1)`. The corrected weighted row Gram matrix is the identity; the column Gram matrix is `diag(6,2,3)`. |
| `cex-outer-induction-is-not-the-kronecker-product`, Statement refuted, Counterexample 5.1, source locator | Made the dimension-one assertion refer explicitly to the chosen two one-dimensional trivial representations. Distinguished dimension `1` from homogeneous degree `1`. Located the internal-product discussion at printed pp. 115–116. | The given characters are trivial characters of `S_1`; arbitrary `S_1` representations need not have dimension one. The induced witness still has values `(2,0)` in `R(S_2)`. |
| `cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients`, Macdonald source locator | Corrected (7.7) from printed p. 115 to printed p. 114. | The opened source shows (7.7) on printed p. 114. No mathematical statement or proof changed. |
| `prop-sign-twist-corresponds-to-the-omega-involution`, Macdonald source locator | Located sign twist at Chapter I §7, Example 2, printed p. 116, and separated it from (2.13), printed p. 24, which supplies omega on power sums. | The complete relevant source argument computes the sign multiplier on power sums and hence on characteristic coefficients. No mathematical statement or proof changed. |

The operation definitions, theorem conclusions, hypotheses, and character tables remain the commissioned claims. The counterexample now explicitly names its original witness. All assigned consumers were reviewed using the repaired supplier arguments. The second Young-permutation example still obtains `(3,1,0)` from its three fixed-tabloid counts and Kostka numbers `(1,1,0)`; the S4 example still obtains `(3,1,-1,0,-1)` and its sign twist `(3,-1,-1,0,1)`. Neither page summary requires a prose change.

## Proof-contract repairs

Updated `research/frontier-38-owner-30-batch-18.proof-contracts.json` to track the changed derivations and their exact inputs. Also corrected the following confirmed defects in that assigned contract carrier:

- The power-sum lemma's zero case had extended `N` to unequal total sizes although its definition only uses equal sizes. It now treats an empty admissible distribution set.
- The Young-permutation lemma's zero case falsely denied a nonzero size-zero claim. It now distinguishes vanishing character values from the nonzero empty-shape module.
- The isometry's unit evidence attributed the norm to the identity class rather than all classes; its iff evidence now states both directions of the actual norm-zero equivalence.
- The Specht theorem's derivation spoke of integral ordinary power-sum coefficients. It now uses normalized coefficients and the transposed inverse.
- The character-value corollary's one-row evidence called the `p_(n)` coefficient one; it is `1/n` for positive `n`, and the normalized coefficient is one.
- The sign-twist contract said every size-zero representation was one-dimensional and asserted `ch(trivial)=1` in every degree. It now permits arbitrary finite dimension in degree zero and uses `h_n` and `e_n` for the trivial and sign characters. A trivial `S_2` character has characteristic `h_2`, not `1`.
- The ring theorem's endpoint entry confused scalar extension with endpoints of the degree range. Its evidence now keeps these distinct.
- Fixed-degree examples no longer call `n=3` the first nonempty case or assert an empty-shape instance. The S3 and S4 entries now point to their actual verification steps, and the `(2,1)` contract no longer claims the shape has a repeated part.
- The counterexample's endpoint evidence now allows `n=0`, where the products agree, while retaining the failure at `n=1`.
- Contracts for identity/isomorphism assertions no longer describe those assertions as iff statements merely because an inverse map or a supplier iff criterion is used.

All contract citation excerpts were compared, after whitespace normalization, to their named current source sections: **0 mismatches**. This is an excerpt check, not certification.

## Source evidence and review limits

Opened the primary [Macdonald text](https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf), Chapter I (2.10)–(2.14′), printed pp. 23–25, and the relevant complete characteristic arguments in §7, printed pp. 112–116: the induction product, isometry/isomorphism (7.3), labelled character expansion (7.5)–(7.8), internal product, and Example 2. These support the formal generating-series identity, normalization, and source-locator corrections. The repository's Hermitian extension was checked directly rather than silently identified with Macdonald's bilinear convention.

The complete current authored items, both page summaries, and the 40 listed direct-supplier item bodies were opened. The supplier review checks the interfaces and relevant local arguments used here; it is not a recursive audit of their entire foundational dependency closures. James and Webb were not independently opened as full external textbooks in this session; no claim of such source reading is made. The earlier batch notes' fetch and review claims were not treated as this reader's evidence. The initial bulk terminal output truncated some evidence; all current item bodies and contract entries needed for this review were subsequently obtained in bounded chunks. No unresolved mathematical uncertainty remains in the assigned arguments.

## Validation

- Reflow was run for each of the ten edited items: exit 0, all unchanged. It was repeated for the counterexample after its final witness wording edit.
- Precheck was run for each edited item: exit 0; the nine proof-like items passed. The definition was skipped by precheck (`0 checked, 0 failing`). The counterexample passed again after its final edit.
- After all item edits and formatters, one command batched all ten edited paths through `node tools/proof-layout.mjs`: **10 items, 52 steps, 0 defects**, exit 0.
- Scoped rendercheck on all 16 assigned items and both pages: **18 files, 0 errors, 0 warnings**, exit 0.
- Exact rational arithmetic checked the S3 weighted row and column Gram matrices and the degree-two inverse-Kostka orientation. These finite checks corroborate the computations; they are not proofs of the general theorems.
- The read-only engine status confirmed this run at Step 5a. No gate was run or state changed by this reader.

## Page verdicts, uneditable findings, and blockers

- **A — `frobenius-characteristic-and-the-symmetric-group-character-dictionary`: satisfactory after the recorded proof and contract repairs.** The characteristic is defined on complex class functions; the integral image, correct Specht labels, multiplicativity, isometry, sign twist, and regular-character expansion follow with the stated domains and conventions. The complete page prose accurately summarizes these claims.
- **B — `frobenius-characteristic-and-the-symmetric-group-character-dictionary-examples`: satisfactory after the S3 verification and counterexample-witness repairs.** The three examples and counterexample now give the claimed tables, decompositions, and group/degree distinction. The complete B-page prose was read and left unchanged.

No uneditable confirmed or suspected mathematical defect remains. No proposed withdrawal or owner blocker is required. These are reader conclusions only, not judge stamps or publication certification.
