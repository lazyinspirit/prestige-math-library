# Frontier 33 — Independent reader report, batch 10

## Scope opened

- Manifest, coverage, and proof contracts: `research/frontier-33-batch-10.pages.json`,
  `research/frontier-33-batch-10.coverage.json`, and
  `research/frontier-33-batch-10.proof-contracts.json`.
- Draft A page: `library/scheme-theory/fibre-products-base-change-and-scheme-theoretic-fibres.md`,
  with all 42 listed theory items read in full:
  `def-fibre-product-schemes-universal-property`,
  `lem-fibre-product-unique-canonical-isomorphism`,
  `thm-affine-fibre-product-tensor-ring`,
  `lem-affine-fibre-product-projections-stalk-maps`,
  `lem-fibre-product-open-restriction`,
  `lem-fibre-products-glue-over-open-covers`,
  `thm-fibre-products-of-schemes-exist`,
  `cor-product-schemes-over-base-exists`,
  `lem-fibre-product-associativity-and-symmetry`,
  `def-base-change-morphism-schemes`, `lem-base-change-composition`,
  `lem-tensor-ring-presentations-for-base-change`,
  `lem-field-valued-points-of-schemes`, `def-scheme-theoretic-fibre`,
  `thm-affine-fibre-coordinate-ring`, `lem-points-of-fibre-primes-over-point`,
  `lem-scheme-fibre-stalk-quotient`,
  `lem-points-of-scheme-fibre-product-residue-tensors`,
  `lem-fibre-after-base-change`, `lem-base-extension-field-coordinate-ring`,
  `def-geometric-fibre`, `lem-geometric-fibre-choice-independent`,
  `def-geometrically-reduced-integral-connected-fibre`,
  `lem-base-change-open-closed-immersions`,
  `def-scheme-theoretic-inverse-image-subscheme`,
  `lem-subscheme-intersection-fibre-product`,
  `lem-base-change-locally-finite-type-presentation`,
  `lem-base-change-quasi-compact-morphisms`,
  `cor-base-change-finite-type-and-products`, `def-affine-morphism-schemes`,
  `lem-affineness-from-unit-generating-global-sections`,
  `lem-affine-morphism-local-on-target`, `lem-base-change-affine-morphisms`,
  `def-diagonal-morphism-scheme`, `lem-diagonal-base-change-identification`,
  `def-graph-morphism-over-base`, `lem-graph-as-pullback-diagonal`,
  `thm-classical-product-agrees-scheme-product`,
  `lem-base-change-surjective-morphisms`,
  `lem-immersions-and-localizations-monomorphisms`,
  `rem-properties-can-change-after-field-extension`, and
  `rem-fibre-is-scheme-not-point-set`.
- Draft B page: `library/scheme-theory/fibre-products-base-change-and-scheme-theoretic-fibres-examples.md`,
  with all 11 examples/counterexamples read in full:
  `ex-fibre-family-xy-equals-t`, `ex-nonreduced-fibre-x-squared-equals-t`,
  `ex-base-change-real-conic-to-complex`,
  `cex-domain-tensor-algebraic-closure-reducible`,
  `ex-product-affine-lines-plane`, `ex-fibre-closed-immersion`,
  `ex-graph-polynomial-map-closed-subscheme`,
  `cex-set-theoretic-fibre-loses-multiplicity`,
  `ex-empty-fibre-tensor-zero-ring`,
  `cex-purely-inseparable-base-change-nonreduced`, and
  `ex-quadratic-cover-self-fibre-product`.
- The 39 direct external dependencies of those items were opened, including the
  current universal-property, gluing, affine-spectrum, residue-field,
  localization, finite-presentation, affineness, classical-variety, and
  Choice/maximal-ideal interfaces.
- Primary material was independently read: Stacks Project tags `01JO`,
  §26.17.1--6 (universal property, affine tensors, open restrictions, point
  quadruples, and immersion pullback); `01JW`, §26.18.1--6 (base change,
  fibres, topology, and stalk quotients); and Vakil, *Foundations of Algebraic
  Geometry*, March 2011 draft, printed pp. 201--215 and 231--233.  The latter
  includes the affine/gluing existence proof, tensor computations, the
  quadratic-fibre calculation, geometric-fibre convention, and graph Cartesian
  square.

## Review and edit

No repair was necessary.  No assigned item, page body, contract, verification
record, published dependency, plan, or another batch was edited.

I checked that the affine tensor construction uses arbitrary test schemes; the
open-restriction and gluing proofs retain nonaffine overlaps; and the existence
argument supplies the advertised affine-chart cover.  The fibre calculations
correctly preserve nilpotents, residue fields, empty spectra, and the
generic-point case.  The residue-tensor description supplies the extra datum
over a pair of scheme points, and the geometric-fibre convention explicitly
retains Choice and noncanonicity.

For the examples, the characteristic-zero and characteristic-two branches of
the quadratic cover were checked separately; the $xy=t$, $x^2=t$, closed
immersion, localization, real-conic, and purely inseparable calculations have
the stated coordinate rings and empty/nonreduced cases.  The two distinct
primes over the generic-point pair in the affine plane have the stated
contractions.  The classical-product claim retains its algebraically closed,
irreducible hypotheses.  No false claim, missing hypothesis, citation error,
or type error remains.

## Page verdicts and blocker

- A `fibre-products-base-change-and-scheme-theoretic-fibres`: **pass**.
- B `fibre-products-base-change-and-scheme-theoretic-fibres-examples`: **pass**.
- Blocker: none.

## Validation

- PASS — focused `precheck`: 42 proof-bearing items, 0 failures.
- PASS — `rendercheck` on all 53 assigned items and both pages: 55 files with
  parsed frontmatter and KaTeX math.
- PASS — `content-policy.mjs research/frontier-33-batch-10.pages.json`: 53
  scoped items, 0 errors, 0 warnings.
- PASS — strict proof-contract check: 42/42 items, 0 errors and 0 warnings.
- PASS — `manifest-deps`: 53 items, 0 normalized, 0 errors.
- PASS — repository dependency check: no errors.  Its 475 multi-home warnings
  are pre-existing and outside this batch.
