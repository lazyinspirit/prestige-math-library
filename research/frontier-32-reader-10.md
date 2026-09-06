# Frontier 32 — reader 10

## Scope opened

Read `research/frontier-32-batch-10.pages.json`, both assigned pages, all 35
assigned item bodies, `research/frontier-32-batch-10.proof-contracts.json`, and
the direct external item dependencies:

- `thm-excision-for-singular-homology`
- `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient`
- `cor-homology-of-spheres`
- `thm-long-exact-sequence-of-a-pair-in-singular-homology`
- `def-singular-chain-complex-and-singular-homology`

I also opened the required companion page
`relative-homology-excision-and-mayer-vietoris-examples`. Source passages were
checked in Hatcher, *Algebraic Topology*, Chapter 0, Section 2.2, and Appendix
A (especially Lemma 2.34, Theorem 2.35, Examples 2.42--2.43, Theorem 2.44,
and Proposition A.1), and May, *A Concise Course in Algebraic Topology*,
Chapter 10.

The A page inventory read was:

- `def-cell-attachment-by-a-characteristic-map`
- `lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure`
- `def-cw-complex-with-closure-finiteness-and-weak-topology`
- `def-skeleta-cw-subcomplex-and-relative-cw-complex`
- `prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition`
- `lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells`
- `cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex`
- `prop-relative-cw-inclusions-are-cofibrations`
- `prop-a-cw-complex-is-the-colimit-of-its-skeleta-in-the-weak-topology`
- `thm-relative-homology-of-consecutive-cw-skeleta`
- `def-oriented-cellular-chain-group`
- `def-cellular-boundary-from-three-consecutive-skeleta`
- `lem-the-cellular-boundary-squares-to-zero`
- `def-cellular-homology`
- `lem-skeletal-homology-stabilizes-away-from-the-cell-dimension`
- `lem-homology-of-an-infinite-cw-complex-is-the-colimit-of-skeletal-homology`
- `thm-cellular-homology-computes-singular-homology`
- `thm-relative-cellular-homology-computes-relative-singular-homology`
- `def-incidence-number-of-two-cw-cells`
- `thm-cellular-boundary-is-the-incidence-degree-matrix`
- `prop-cellular-maps-induce-cellular-chain-maps`
- `cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary`
- `def-euler-characteristic-of-a-finite-cw-complex`
- `thm-euler-poincare-formula-for-finite-cw-complexes`
- `prop-euler-characteristic-is-additive-for-finite-cw-pairs`
- `prop-euler-characteristic-of-a-finite-cw-product`

The B page inventory read was:

- `ex-cellular-homology-of-real-projective-space`
- `ex-cellular-homology-and-ring-independent-groups-of-complex-projective-space`
- `ex-cellular-boundary-matrix-of-a-closed-orientable-surface`
- `ex-cellular-homology-of-a-lens-space`
- `ex-cellular-homology-of-an-infinite-dimensional-projective-space`
- `ex-two-cw-structures-on-the-circle-have-the-same-euler-characteristic`
- `cex-the-closure-of-a-cw-cell-need-not-be-a-closed-ball`
- `cex-a-cell-decomposition-without-the-weak-topology-need-not-be-a-cw-complex`
- `cex-the-hawaiian-earring-is-not-a-cw-complex-with-its-circle-cells`

## Repairs

- `def-cw-complex-with-closure-finiteness-and-weak-topology`: replaced the
  insufficient partition-only formulation with the inductive skeletal attachment
  filtration, including discrete $X^0$, attaching maps into the preceding
  skeleton, and the C/W clauses. This restores the lower-dimensional attachment
  hypothesis used throughout the page.
- `lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells`:
  replaced an unsupported open-cover construction with the standard skeletal
  proof that one point from each of infinitely many cells forms a closed discrete
  subspace of the compact set.
- `thm-relative-homology-of-consecutive-cw-skeleta`: replaced the unspecified
  excision step with the good-pair quotient calculation and separated the $n=0$
  case, for which the cited quotient corollary's nonempty-subspace hypothesis
  does not apply.
- `def-oriented-cellular-chain-group`: corrected “basis summand $G$” to
  “direct-summand copy of $G$”; an arbitrary coefficient group need not be a
  free abelian group.
- `thm-relative-cellular-homology-computes-relative-singular-homology`:
  stated the quotient complex precisely, identified the relative skeletal pair
  as $(X^n,A^n\cup X^{n-1})$, and made the finite-singular-support colimit step
  explicit.
- `research/frontier-32-batch-10.proof-contracts.json`: repaired its literal
  leading `+`, which made it invalid JSON, and updated the contracts for the
  compactness lemma, consecutive-skeleta theorem, and relative cellular theorem
  to reflect the repaired arguments. No stale `verification.judge` record was
  present in a changed item.

## Verdicts and remaining finding

- A page `cw-complexes-and-cellular-homology`: pass after the repairs above.
  The page summary agrees with the verified finite-support and cellular-comparison
  arguments.
- B page `cw-complexes-and-cellular-homology-examples`: one nonfatal
  uneditable wording/structure defect remains in
  `cex-the-hawaiian-earring-is-not-a-cw-complex-with-its-circle-cells`.
  A 1-cell is an open interval, not a constituent circle $S^1$; the witness
  should instead specify the punctured constituent circles as open cells (and
  the circles as their closures). The conclusion remains correct, but the stated
  proposed cell structure is not literally formed.

## Validation

- `tools/reflow.mts` on all five changed items: pass (all unchanged after
  formatting check).
- `tools/precheck.mts` on all changed proof-bearing items: 3 checked, 0 failing.
  The two changed definitions are correctly n/a.
- `tools/proof-contract.mjs research/frontier-32-batch-10.proof-contracts.json --strict`:
  27/27 contracts checked, 0 errors, 0 warnings.
- `tools/citation-fidelity.mjs` correctly refused a clean result because the
  supplied contracts declare no citation records; this is recorded, not treated
  as a passing citation audit.
- `git diff --check`: pass.

No blocker remains.
