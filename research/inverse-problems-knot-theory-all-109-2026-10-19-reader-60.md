# Step 3a reader report — batch 60

Run: `inverse-problems-knot-theory-all-109-2026-10-19`

## Opened scope

Pages opened and checked:

- `library/knot-theory/connected-sums-and-prime-decomposition.md` (A page): verdict **pass**. Its inventory matches the assigned 37 A items; metadata and `page_layout: compact-v1` are preserved, and the body is empty.
- `library/knot-theory/connected-sums-and-prime-decomposition-examples.md` (B page): verdict **pass**. Its two examples and A-page prerequisite match the manifest; metadata and `page_layout: compact-v1` are preserved, and the body is empty.

Assigned items opened in dependency order:

- Level 0: `def-knot-connected-sum-and-prime-knot`; `lem-relative-transversality-for-embedded-surfaces`; `lem-smooth-ball-windows-and-boundary-disk-absorption`; `lem-bounded-euclidean-homeomorphism-has-compactly-supported-local-model`; `lem-finite-subpolyhedra-have-compact-pl-manifold-neighborhoods`; `lem-no-twofold-cover-forces-spherical-boundary-in-finite-pl-three-manifold`; `lem-two-sheeted-pl-disk-immersion-has-essential-embedded-disk`; `lem-finite-polyhedral-slabs-without-vertex-levels-are-pl-products`; `lem-regular-polyhedral-surface-cones-have-height-preserving-pl-straightenings`; `def-pl-embedding-and-subpolyhedron`.
- Level 1: `lem-knot-connected-sum-well-defined`; `lem-capped-elementary-height-spheres-bound-smooth-balls`; `lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation`.
- Level 2: `lem-mirroring-preserves-primality-of-a-knot`; `thm-oriented-knot-connected-sum-is-a-commutative-monoid`; `lem-knot-reverse-mirror-connected-sum-is-ribbon`; `thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three`; `lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar`.
- Level 3: `lem-knot-decomposing-sphere-realizes-connected-sum`; `thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds`; `lem-parametrized-pl-balls-absorb-standard-boundary-windows`; `lem-finite-pl-level-collars-give-global-band-products`.
- Level 4: `lem-knot-genus-invariant-under-mirror-and-reversal`; `lem-knot-genus-zero-iff-unknot`; `thm-knot-genus-additive-under-connected-sum`; `lem-simply-connected-pl-end-has-spherical-compact-neighborhoods`; `lem-no-saddle-polyhedral-two-spheres-bound-parametrized-pl-balls`; `lem-three-disk-pl-severing-reassembles-parametrized-balls`.
- Level 5: `lem-knot-decomposing-sphere-systems-cut-and-paste`; `lem-right-trefoil-has-genus-one`; `lem-pl-height-product-caps-replace-by-one-extremum`; `lem-pointed-flat-pl-caps-admit-saddle-free-replacements`.
- Level 6: `thm-schubert-prime-decomposition-for-knots`; `lem-right-trefoil-is-prime`; `lem-innermost-critical-height-loops-admit-strict-pl-cap-reduction`.
- Level 7: `thm-finite-pl-schoenflies-in-dimension-three`.
- Level 8: `thm-prime-decomposition-of-compact-orientable-three-manifold`.
- Examples: `ex-knot-kt-05-worked-cases`; `cex-knot-kt-05-boundary-case`.

## Dependency review

To verify the assigned proofs, I opened the relevant supplier claims and proof passages in dependency order. This included the current-run batch 58 linking-number definition, parity lemma, diagram algorithm and correctness/termination results, and signed-intersection theorem; the six batch 59 Seifert-surface construction and genus suppliers; batch 61 Seifert pairing, skew-part, isotopy, cut-open-cover and Alexander-module presentation items; batch 62 determinant formula, square-presentation normalization and connected-sum multiplicativity; batch 67 Seifert-surface moves, S-equivalence and Levine–Tristram claims; batch 75's positive Hopf-plumbing matrix; and batch 104's finite-surface, complement-homology and Kneser-bound suppliers.

I also opened the TOP/PL suppliers used by the assigned three-manifold theorem: `thm-compact-topological-three-manifolds-admit-finite-pl-triangulations`, `thm-three-dimensional-topological-handles-admit-relative-pl-straightenings`, and `thm-finite-orientable-pl-three-manifolds-have-prime-connected-sum-decompositions`, together with the marked-sphere and complement-homology lemmas they use. Published covering, homology, collar, transversality, Laurent-ring and Alexander-polynomial premises were checked where needed.

For the relative-transversality claim I read Gualtieri, Corollary 3.27 and Theorem 3.29 (printed pp. 35–36). For finite PL general position I read Rourke–Sanderson, Theorem 5.3 and its vertex-push proof (printed pp. 61–62). For the Seifert-surface move result I read Lickorish, Theorem 8.2 and proof (printed pp. 79–81). These passages support the uses recorded in the assigned arguments. The trefoil matrix calculation was checked entrywise against the positive-push and intersection conventions; the resulting matrices give (t^2-t+1), determinant (3) at (-1), and the stated signatures.

No other confirmed false claim, missing hypothesis, invalid inference, incorrect diagram, or citation defect remained in the assigned items after the repair below. No item outside batch 60 or page body was edited.

## Edit and evidence

In `thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds`, Proof 3.1 previously used a lifted deformation retraction to conclude that (p_i^{-1}(D_{i-1})=D_i\cup\tau_i(D_i)) is connected, while its only cited covering dependency, the map lifting criterion, does not lift homotopies. I added the published `thm-homotopy-lifting-for-covering-maps` dependency and made the lift explicit: lift the strong deformation retraction from the identity on (M_i); its terminal map lands in and fixes the full preimage, because the base retraction fixes (D_{i-1}) and lifts of constant paths are constant. It is therefore a retraction of connected (M_i), proving the needed connectedness.

The matching batch 60 proof-contract row now records fact F8 and its use in step 3.1. The item had no stale `verification.judge` record to remove.

Validation after the edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds.md`: PASS.
- `node tools/proof-layout.mjs items/thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds.md`: 8 steps, 0 defects.

## Uneditable defects and blocker

No confirmed uneditable defect remains in the assigned scope or in a dependency claim needed to establish an assigned result. No blocker.
