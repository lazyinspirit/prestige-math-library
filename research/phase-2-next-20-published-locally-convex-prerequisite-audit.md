# Published prerequisite audit: locally convex batch

Date: 2026-09-11. Scope: the published clauses actually used by the original
`phase-2-next-20` batch-2 locally convex scaffold. This is a local mathematical
and dependency-interface audit, not an independent judgment, a draft-readiness
decision, or a transitive closure certification. No published item was edited.

## Implicit supplier reconciliation — bounded clear

`def-algebraic-dual-and-linear-functional` (current SHA-256
`7af2c0369ebd6f3c4055f77c2c169651f7cc6bec9f009d3ab0a813eeb81bf353`)
defines a linear functional as a linear map `V -> F`, “where F is regarded as
a vector space over itself,” and then defines `V* = L(V,F)`. Its declared
dependencies are only `def-linear-map` and
`def-vector-space-of-linear-maps`. Both require their source and target already
to be vector spaces; neither proves that the field `F` has the required
`F`-vector-space structure. The missing result is not in that dependency
closure.

The exact earlier published supplier is `lem-restriction-of-scalars`, claim 1
(current SHA-256
`95811067b059da1ce32c2ac672ba5116725a7bc8c54bcbffc6b5bc5948979b67`),
whose proof checks the five vector-space axioms for the field acting on itself.
whose first claim supplies the construction completely. Under the canonical
classification rule that a correct implicit use of an adequate published
supplier is clear rather than a metadata-only defect, the missing direct edge
does not establish repair debt. An explicit dependency/citation would improve
the interface, and the new locally convex definition may declare it locally,
but no published repair or Phase-2 pair is required. Classification: bounded
no-repair-needed within this exact construction/dependency-interface scope.

## Bounded clears

The following full current items and the named used clauses were read. Their
statements and proofs support the batch-2 use; no repair was identified in this
scope.

- `thm-compactness-under-continuous-maps`: continuous images, extreme values,
  and compact-to-Hausdorff homeomorphism. The proof uses only finite choice
  after finite-subcover extraction. SHA-256
  `f03a1501312d1022f1ae137f6b53d509b67fc96999c583af78eaa9e26a15c48a`.
- `thm-compact-subset-of-a-hausdorff-space-is-closed`: the all-admissible-open-
  sets construction avoids point-indexed choice; only finite witness recovery
  remains. SHA-256
  `60818ed5b689730024b81b58e860f519c190b9cd552e34ae9ed6e59488c449f2`.
- `thm-finite-products-of-compact-spaces` and
  `lem-tube-lemma-for-a-compact-factor`: slice compactness, all admissible
  bands, finite subcover and finite witness recovery prove the finite product
  clause without arbitrary choice. SHA-256 respectively
  `1664194b7332a03b7fd75ba6c33729f4c7e2ba2f4aa0d168b95e7ff03d244182`
  and `9eaad58323248489200e60b8553fd256a4b9cf3eaaaafe412c6fc814c0f2f739`.
- `cor-heine-borel-in-the-product-topology`,
  `thm-compactness-agrees-with-metric-compactness`,
  `thm-heine-borel-rn`, and `lem-product-topology-on-rn`: the product and
  Euclidean metric topologies agree; the deterministic coordinate-by-coordinate
  bisection supplies closed-box compactness; closed bounded subsets then follow.
  Only finite coordinate choice is used. SHA-256 respectively
  `81c12191eeae066667e87a981fbd2107dd9843e4f28dc2ba33478c07b0c958ba`,
  `089b25e5d06a099cbc8375ed342c9d29bd1f83a2f66ca692d8f7eca4989cc0f9`,
  `33799c8d7f209d4ce2856473c5ff2b6cf8e1c6e679c11d3f82642b9e06f2c3bc`,
  and `353fb38786722fea8b7fef898329ac21b39dc84cc6ab27707dbd696a0a571b02`.
- `thm-product-universal-property`: the batch uses only continuity of
  projections and componentwise continuity. These clauses are choice-free;
  choice is isolated to the unused arbitrary-product surjectivity clause.
  SHA-256
  `3ae7f8b8c086daed03c7dce7289f9320918c50b74e4fcef89ff2240edb7fb711`.
- `def-hahn-banach-extension-principle-relative` and
  `thm-relative-hahn-banach-dominated-extension`: the definition explicitly
  names HB as an additional principle over ZF, and the theorem assumes it and
  derives the two-sided estimate from one-sided domination. SHA-256 respectively
  `1ad510768886acca8e75659bda1422ab2a2189ae6da57a78b57d1b0fa3f1624a`
  and `b94b26b0359554a76c53796ed1e4050d4263780b692e3d311eba4adffbc39ed9`.
- `lem-restriction-of-scalars`: claim 1 directly checks the field-as-vector-
  space structure; the restriction clauses correctly inherit the common-field
  operations. SHA-256
  `95811067b059da1ce32c2ac672ba5116725a7bc8c54bcbffc6b5bc5948979b67`.
- `thm-infimum-property` and `thm-closure-characterisation-top`: the precise
  infimum and neighbourhood-closure clauses used by the gauge and convexity
  arguments are proved from their declared definitions. SHA-256 respectively
  `7351340bd5cde0beff10d8f1134c95db17e9af8ba83a4809464f7a31cf7f9291`
  and `c3d47536e209dac50c49f770a00a286eee97a94c2e7364314ba1e789e84d2b87`.

`lem-finite-choice` and `def-infimum` already had bounded-clear dispositions;
their exact clauses were reconfirmed without creating duplicate rows. The
remaining elementary scalar and topology definitions were read only to the
extent needed to type these interfaces and are not given whole-item clears.
