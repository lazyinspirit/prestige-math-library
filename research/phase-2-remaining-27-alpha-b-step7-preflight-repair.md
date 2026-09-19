# Step-7 preflight repair — group b

Run: `phase-2-remaining-27`  
Batches: 9, 10, 4  
Dispatch: `step7-preflight-b-1`

The assigned failures were checked against the current item text, proof-contract
entry, cited supplier clauses, and each item's recorded source locators. No
external source fetch was needed: the mathematical claims used here were either
elementary from the displayed definitions/proofs or were checked against exact
current local supplier statements. Contract regeneration was performed before
the two genuine item inconsistencies were repaired.

## Batch 9

### `thm-naturality-and-edge-maps-of-the-ahss`

- Failure: `citation-uses` for `F1 -> thm-cellular-approximation-for-maps-of-cw-pairs`.
- Cause: after the theorem was narrowed to cellular maps, the cellular-
  approximation fact and dependency remained, but no proof step used them.
- Repair: removed the unused `F1` paragraph and dependency. Preserved the
  exact-couple argument and its remaining dependencies. Synchronized the
  manifest to include the actually used `def-exact-couple` and to state the
  current cellular-map claim/proof plan, refreshed the plan through
  `splice-plan --update`, and regenerated the contract entry.
- Recorded source locator read: Davis–Kirk, *Lecture Notes in Algebraic Topology*, §9.1,
  printed pp. 237–246, as recorded at
  `https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf`.
- Guard hash: `d4d9cf26b1777372e66fe98047e9c6c76c67048e583058f7533d38d5f05eb487`
  → `643543d2d2231e2a5c705e81a3f7c1a475c669cf4c926278111cd54782da161a`.
- Evidence: precheck PASS; strict proof-contract PASS; defect
  `phase-2-remaining-27-step7-b-140`.
- Blocker: none.

### `lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three`

- Failure: the `nonempty-choice` row credited nonexistent step 3.1.
- Cause: proof steps were renumbered; the AC-bearing Postnikov and universal-
  operation interfaces are actually used in step 1.1.
- Repair: regenerated the contract and anchored the row to step 1.1, `[F1]`,
  `[F2]`, and the given Bott-generator data.
- Recorded source locator read: Adams, *Stable Homotopy and Generalised Homology*,
  Proposition 16.6 and proof, printed pp. 391–393, at
  `https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Adams-SHGH-latex2.pdf`.
- Item unchanged; guard hash
  `c2770d4faf022f1aeb87050e985d00966cabb69805ebedc50d269a2c7e815130`.
- Evidence: strict proof-contract PASS; boundary audit reports no contradicted
  candidate in the owned contracts.
- Blocker: none.

### `lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations`

- Failure: undeclared/load-bearing forward citation to
  `cor-singular-cohomology-is-homotopy-invariant`.
- Cause: that later corollary states homotopy invariance only for real
  coefficients, whereas `[F5]` uses rational coefficients. The earlier
  published `thm-homotopic-maps-induce-equal-maps-in-singular-cohomology`
  states the required result for every abelian coefficient group.
- Repair: repointed `[F5]` and `deps` to the earlier general theorem; retained
  the functoriality, pair-LES, excision, and reduced/unreduced suppliers.
  Synchronized the exact dependency set in the batch manifest and canonical
  plan, then regenerated the contract.
- Recorded source locator read: Hatcher, *Vector Bundles & K-Theory*, §4.1, printed
  pp. 109–114, at `https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf`;
  the replacement supplier's exact Statement covers every integer degree and
  every abelian coefficient group.
- Guard hash: `37e7447ee7959e139903d793c80b18742e01d7051ca3525b12763f5ff1d38e28`
  → `c8254e99d5449cd69bab0b287a2c4a35d8fcdaa30e4f1be201a44fdb36f1a901`.
- Evidence: precheck PASS; strict proof-contract PASS; scoped fwdcheck has
  zero errors; defect `phase-2-remaining-27-step7-b-141`.
- Blocker: none in the owned item.

### `ex-chern-classes-of-a-sum-of-universal-complex-lines`

- Failure: `empty`, `zero`, `one`, and `degenerate` rows credited nonexistent
  step 5.1.
- Cause: the boundary paragraph is now step 4.1.
- Repair: regenerated the entry and rewrote all four rows against the actual
  statements in step 4.1: finite product, rank cutoff, one-line case, and
  trivial-summand case.
- Recorded source locator read: Miller, MIT 18.906 Lecture 35, printed pp. 130–132, at
  `https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf`.
- Item unchanged; guard hash
  `24774aba88ba989e6eea4a8f79a70defdce0d7e2bf411cd7aa99149f5f1a1027`.
- Evidence: strict proof-contract PASS; boundary audit reports no contradicted
  candidate.
- Blocker: none.

### `ex-complex-line-bundles-over-the-two-sphere-by-clutching-degree`

- Failure: the `one` row credited nonexistent step 1.2.
- Cause: the generator argument is step 2.1; the existing `zero` and
  `degenerate` rows also still pointed at old step 4.1 rather than the current
  step 5.1.
- Repair: regenerated the entry and anchored `one` to step 2.1 and the other
  two rows to step 5.1, using only the current clutching/Picard argument.
- Recorded source locator read: Hatcher, *Vector Bundles & K-Theory*, Example 1.10 and §3.1,
  printed pp. 22–24 and 86–88, at
  `https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf`.
- Item unchanged; guard hash
  `f10fc146888cbf96daaec03344bfdbc9f38e8a29511c0dfd169492af7da7fc6d`.
- Evidence: strict proof-contract PASS; boundary audit reports no contradicted
  candidate.
- Blocker: none.

## Batch 10

### `lem-pi-three-so-three-generated-by-the-quaternion-double-cover`

- Failure: `zero` and `iff-reverse` credited nonexistent step 1.8.
- Cause: the constant-clutch argument is step 1.7, and surjectivity of the
  induced higher-homotopy map is step 2.5, assembled in step 10.1.
- Repair: regenerated the contract and corrected those rows. The same read
  found and corrected three additional stale semantic pointers in the same
  worksheet: `one` now points to step 2.4, `endpoints` to step 2.1, and
  `iff-forward` to step 2.1.
- Recorded source locators read: Hatcher, *Algebraic Topology*, §1.3 p. 75, Proposition 4.1
  p. 342, Corollary 4.25 p. 361, at
  `https://pi.math.cornell.edu/~hatcher/AT/AT.pdf`; and Hatcher,
  *Vector Bundles & K-Theory*, §1.2, printed pp. 23–26, at
  `https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf`.
- Item unchanged; guard hash
  `dac7e9873fdf2ff5edc9f155aca373bd9972e504cbfcf80eb0ba741e8c4eab1f`.
- Evidence: strict proof-contract PASS; boundary audit reports no contradicted
  candidate.
- Blocker: none.

## Batch 4

### `def-gelfand-transform`

- Failure: missing complete high-risk `risk_review`.
- Cause: the contract had no `risk_review`.
- Repair: recorded a current-text review covering the algebraic domain,
  pointwise-evaluation continuity, the conditional compact/supremum-norm
  clause, and the explicitly withheld stronger properties. Tightened the
  empty-space and unit boundary evidence so it cites the Definition rather
  than nonexistent Remarks.
- Recorded source locators read: Shirbisheh, Definition 3.1.17, printed pp. 61–62,
  `https://arxiv.org/pdf/1211.3404`; Bühler–Salamon, Definition 5.59 and
  §5.5.1, printed pp. 259–262; Williams, Definition 3.2 and §3, printed
  pp. 7–9, `https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf`.
- Item unchanged; guard hash
  `b6f9a7b2ff252e9d098a1fea38bcfc306e774d52c6be67b76f5461e0e7213a6c`.
- Evidence: risk-report PASS; strict proof-contract PASS.
- Blocker: none.

### `lem-c-star-spectral-radius-equals-norm-for-normal-elements`

- Failure: stale `[L2]` quote for
  `def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra`.
- Cause: the supplier Definition changed after the contract quote was frozen.
- Repair: regenerated the exact current Definition quote and uses at steps 1.1
  and 2.1; the fact and proof remain consistent.
- Recorded source locators read: Shirbisheh, Lemma 3.1.30 and Proposition 3.1.32, printed
  pp. 64–65, `https://arxiv.org/pdf/1211.3404`; Williams §4, printed pp. 9–11.
- Item unchanged; guard hash
  `a51f6911310de742b15b73486feafb264c9a1e91d1e228e74fe31558d307b869`.
- Evidence: strict proof-contract PASS.
- Blocker: none.

### `lem-closed-ideal-quotient-is-a-banach-algebra`

- Failure: stale `[L4]` quote for `lem-neumann-series`.
- Cause: the Neumann-series Statement's closing qualification changed after
  the contract quote was frozen.
- Repair: regenerated the exact current Statement and its sole use at step 2.3.
- Recorded source locators read: Shirbisheh, Proposition 3.1.4, printed pp. 54–57,
  `https://arxiv.org/pdf/1211.3404`; Bühler–Salamon, Theorem 5.58 and §5.5.1,
  printed pp. 258–262.
- Item unchanged; guard hash
  `5b8bdbeb32dc2e77a21054e2468af4d34954e78899cc552b293edf59a7228227`.
- Evidence: strict proof-contract PASS.
- Blocker: none.

### `lem-contour-integral-commutes-with-bounded-linear-maps`

- Failure: missing complete high-risk `risk_review`.
- Cause: the contract had no `risk_review`.
- Repair: recorded a current-text review of the finite tagged-sum identity,
  bounded-map limit passage, and path-length estimate. Corrected the same
  worksheet's false `not_applicable` dispositions for constant contours and
  endpoints to checked rows against steps 1.1–2.2.
- Recorded source locators read: Bühler–Salamon, Lemma 5.9 and §5.1.2, printed pp. 213–216;
  Shirbisheh §2.5, printed pp. 43–47, `https://arxiv.org/pdf/1211.3404`.
- Item unchanged; guard hash
  `2daca6d7e6e835dfeb24b33854bd12c82fa195d8981747da06905996842d6966`.
- Evidence: risk-report PASS; strict proof-contract PASS; boundary audit has
  no contradicted candidate.
- Blocker: none.

### `lem-relations-among-the-five-spectral-parts`

- Failure: stale `[L2]` quote for
  `def-approximate-point-and-compression-spectrum`.
- Cause: the supplier Definition changed its hypotheses and sequential
  description after the contract quote was frozen.
- Repair: regenerated the exact current Definition quote and all uses in
  steps 1.1–1.4.
- Recorded source locators read: Bühler–Salamon §5.2.1, printed pp. 219–221; Shirbisheh §2.3,
  printed pp. 30–33, `https://arxiv.org/pdf/1211.3404`.
- Item unchanged; guard hash
  `0830ab63cb2c53d666c4c88da97ecb204b6ca980547a7c25ccff0b8baaa17a66`.
- Evidence: strict proof-contract PASS.
- Blocker: none.

### `thm-commutative-gelfand-duality`

- Failure: `empty` credited nonexistent step 1.4.
- Cause: the theorem now explicitly excludes the empty-space/zero-algebra
  pair; its object verification is step 1.1.
- Repair: anchored the row to the explicit Statement restriction and step 1.1.
- Recorded source locators read: Shirbisheh, Theorem 3.3.5 and Corollary 3.3.6, printed
  pp. 80–81, `https://arxiv.org/pdf/1211.3404`; Bühler–Salamon, Theorem 5.64,
  printed pp. 266–267; Tressl §4, pp. 16–17.
- Item unchanged; guard hash
  `a90955b3fe4d0d6c719ac77b0cc1759e464655e26a05a43dfc73af8a96141167`.
- Evidence: strict proof-contract PASS; boundary audit has no contradicted
  candidate.
- Blocker: none.

### `thm-gelfand-transform-is-a-contractive-unital-homomorphism`

- Failure: stale `[L2]` quote for `def-gelfand-transform`.
- Cause: the Definition now distinguishes the general product-topology target
  from the compact Banach-algebra supremum-norm case.
- Repair: regenerated the full current Definition and uses at steps 1.2–1.3.
- Recorded source locators read: Shirbisheh, Theorem 3.1.18, printed p. 62,
  `https://arxiv.org/pdf/1211.3404`; Bühler–Salamon, Theorem 5.63, printed
  pp. 262–266.
- Item unchanged; guard hash
  `ac6dfe62df7601e1af1cf01dba0cf5594ec681cb33dfa3cdeace498d6b5f4c2f`.
- Evidence: strict proof-contract PASS.
- Blocker: none.

### `thm-kernel-of-the-gelfand-transform-is-the-radical`

- Failure: stale `[L1]` quote for `def-gelfand-transform`.
- Cause: the same later Definition clarification made the frozen quote stale.
- Repair: regenerated the exact current Definition and its use at step 1.1.
- Recorded source locators read: Shirbisheh, Definition 3.1.23 and Remark 3.1.24, printed
  pp. 62–63, `https://arxiv.org/pdf/1211.3404`; Bühler–Salamon, Theorem 5.63,
  pp. 262–266; Williams, Remark 3.7, p. 9.
- Item unchanged; guard hash
  `aa6f7dd15fd6fd1bff09ea72fe5c3256add4f6d1be45da2370b8b7de5c4cffda`.
- Evidence: strict proof-contract PASS.
- Blocker: none.

### `thm-maximal-ideal-space-is-compact-hausdorff`

- Failure: stale `[L2]` quote for `def-character-and-maximal-ideal-space`.
- Cause: the character-space Definition changed its unit and maximal-ideal
  qualifications after the contract quote was frozen.
- Repair: regenerated the exact current Definition and uses at steps 1.1,
  1.2, 1.5, and 2.1.
- Recorded source locators read: Shirbisheh, Proposition 3.1.12 and Remark 3.1.13, printed
  pp. 60–61, `https://arxiv.org/pdf/1211.3404`; Bühler–Salamon, Lemmas
  5.61–5.62, pp. 262–265; Williams, Theorem 3.6, pp. 8–9.
- Item unchanged; guard hash
  `e3e37ca5b23388673971604977e7896c2152e9efef832e897c895498099b0339`.
- Evidence: strict proof-contract PASS.
- Blocker: none.

### `thm-stone-duality`

- Failure: stale `[L2]` quote for `def-stone-space-and-clopen-algebra`.
- Cause: the Definition now separates the topology generated by basic opens
  from the later AC-dependent compactness/Hausdorffness theorem.
- Repair: regenerated the exact current Definition and uses at steps 1.3 and
  2.1.
- Recorded source locator read: Tressl, *Stone Duality for Boolean Algebras*, Theorem 3.1.6,
  p. 12; Lemma 4.1, Definitions 4.2–4.3, p. 16; Theorem 4.4, pp. 16–17, at
  `https://personalpages.manchester.ac.uk/staff/marcus.tressl/papers/StoneDualityBooleanAlgebras.pdf`.
- Item unchanged; guard hash
  `16484151637e590148d4f627fc5213ef63b3f5c49fa76a9a9126bc93d2c162c9`.
- Evidence: strict proof-contract PASS.
- Blocker: none.

## Validation and carrier hashes

- `regen-contract-entries.mjs`: refreshed 4 batch-9 entries, 1 batch-10 entry,
  and 7 batch-4 entries initially; refreshed the two edited batch-9 entries
  again after their item repairs.
- `precheck.mts`: 2/2 edited items PASS.
- `proof-contract.mjs --strict --items ...`: batch 9, 5/5 PASS; batch 10, 1/1
  PASS; batch 4, 10/10 PASS, all with zero warnings.
- `risk-report.mjs --require-reviewed`: both assigned high-risk items PASS.
- `boundary-audit.mjs` over batches 4, 9, 10: 1,504 rows scanned, zero template
  clusters and zero contradicted candidates.
- `fwdcheck.mjs`: repository-wide PASS with zero errors; the repaired graded
  Chern-character lemma has no forward reference.
- `splice-plan.mjs --run phase-2-remaining-27 --batch 9 --update`: refreshed the
  two affected page item objects.
- `defect-ledger.mjs validate --run phase-2-remaining-27`: 1,119 rows checked,
  zero errors.
- Contract SHA-256:
  batch 4 `57f3797b5984ac33607e3adafe99561847e6c81142bdc55ecd9ff97417dd0980`;
  batch 9 `c614fe74570f0489f31189b4acb100d915145f80eb806ef3a2d9c9cca1c89ded`;
  batch 10 `a8dd80874fa1c5af8f670b30cae12824f237a641c25c2ce3acc676e99c1e51dc`.
- Batch-9 manifest SHA-256:
  `e6efbaa0628def246dde88787b32f2260ba7e4db3a756b9722289131ba69a6b0`.
- Canonical plan SHA-256 after sanctioned splice:
  `bb1f3adb1d7dd1936bc735ff7b148ec6e7c3d278ec1136ade3dbad24651fa060`.

## Blockers

The scoped fwdcheck for
`lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations`
passes with zero errors. A final repository-wide fwdcheck also reports zero
errors after the other owning writers completed their repairs. There is no
blocker remaining in this dispatch's owned items or artifacts.
