# Coherent-curve Serre duality: repair checkpoint

Date: 2026-10-01  
Run: `frontier-37-owner-30`, batch 8  
Target: `items/thm-serre-duality-curves-coherent-sheaves.md`  
Write scope: this target and this report only.

## Repair checkpoint

The target proof now supplies the missing arguments identified in
`frontier-37-owner-30-coherent-duality-route-research.md`. The Statement was
left unchanged: it still assumes AC, allows every field and every coherent
sheaf (including torsion sheaves), and uses the existing fixed normalized
trace. No qualifier was added or removed.

The repaired route is:

1. Establish that the smooth proper curve is separated Noetherian, with
   Noetherian underlying space and dimension one, then apply the published
   cohomological-dimension theorem to get vanishing above degree one.
2. Use the projective-embedding corollary, its very-ample pullback of
   `O(1)`, and eventual global generation. Proper coherent-cohomology
   finiteness makes the generating space finite-dimensional, so a finite
   basis gives a finite locally free cover of any coherent sheaf. Its kernel
   is coherent, torsion-free, and hence finite locally free on the smooth
   curve. This yields `0 -> E' -> E -> F -> 0`, including for torsion `F`.
3. Prove inline from an injective resolution that
   `Ext^q(E,G) = H^q(E^vee tensor G)` for finite locally free `E`: tensor-Hom
   adjunction makes `E^vee tensor -` preserve injectives, and the resulting
   injectives are flasque by the cited bridge. This addresses global Ext as
   defined by `Hom(E,I^bullet)`; it does not identify it with global sections
   of sheaf Ext.
4. Define `Phi_F` and `Psi_F` explicitly by composition with the fixed trace.
   The first isomorphism follows from a natural kernel comparison with vector
   bundle duality. The second uses the correctly aligned five-term exact
   rows; its middle map is the defined Yoneda pairing, not a map inferred
   from the four outer isomorphisms. The injective-resolution pushout
   calculation identifies the Ext connecting class with the cohomology
   boundary and checks the positive sign. No `Ext^2` vanishing is asserted
   or needed.

The proof keeps the arbitrary-field claim and the original trace
normalization. The finite locally free resolution is used only to prove
bijectivity; the displayed maps themselves are canonical and functorial.

## Direct dependency audit

The target has 33 declared direct dependencies. Their current status is:

**Draft (5):**

- `cor-projective-embedding-every-smooth-proper-curve`
- `def-algebraic-curve-over-field`
- `def-canonical-line-bundle-curve`
- `lem-smooth-curve-coherent-torsion-free-locally-free`
- `thm-serre-duality-curves-vector-bundles`

**Published (28):**

- `cor-finite-type-algebra-over-noetherian-ring-is-noetherian`
- `cor-projective-cohomology-finite-dimensional-field`
- `def-axiom-of-choice`
- `def-coherent-module-scheme`
- `def-dimension-noetherian-topological-space`
- `def-globally-generated-sheaf`
- `def-invertible-sheaf`
- `def-locally-free-sheaf-finite-rank`
- `def-locally-noetherian-and-noetherian-scheme`
- `def-module-on-ringed-space`
- `def-projective-morphism-pre-proj`
- `def-proper-morphism`
- `def-sheaf-cohomology-derived-global-sections`
- `def-sheaf-ext-for-coherent-modules`
- `def-sheaf-hom`
- `def-sheaf-tensor-product`
- `def-very-ample-invertible-sheaf-relative`
- `lem-eventual-global-generation-coherent-twists`
- `lem-field-is-noetherian`
- `lem-global-sheaf-ext-long-exact-in-first-variable`
- `lem-injective-modules-flasque-and-ext-of-structure-sheaf`
- `lem-very-ample-implies-ample`
- `thm-coherent-sheaves-abelian-noetherian-scheme`
- `thm-cohomological-dimension-noetherian-scheme`
- `thm-exactness-of-sheaves-stalkwise`
- `thm-five-lemma-for-modules`
- `thm-long-exact-sequence-sheaf-cohomology`
- `thm-noetherian-ring-has-noetherian-spectrum`

The cited roles and assumption boundaries checked in the target are:

- The curve definition and properness give separated finite type, dimension
  one, and quasi-compactness. Noetherianity follows from the field and
  finite-type-algebra suppliers; a finite affine cover gives the Noetherian
  underlying topology. The cohomological-dimension theorem then applies to
  the coherent and locally free sheaves used in the proof.
- The embedding corollary supplies projectivity. The relative very-ample
  definition and very-ample-implies-ample result supply the twist required by
  eventual global generation. The proper coherent-cohomology theorem supplies
  finite-dimensional `H^0`; it is not being used as a substitute for the
  dimension-one vanishing.
- The coherent-sheaves-abelian result and smooth-curve torsion-free result
  justify the kernel step. The Ext definition and first-variable LES supply
  the exact top row. The sheaf-cohomology definition, stalkwise exactness, and
  cohomology LES supply the bottom row.
- The injective/flasque Ext-structure-sheaf result supplies the canonical
  `Ext^q(O_C,G) = H^q(C,G)` comparison and acyclicity. The locally-free
  Hom/tensor definitions justify the inline comparison for `E`. The
  vector-bundle duality supplier is used for `E` and `E^vee tensor omega_C`,
  with the same fixed normalized trace. The five-lemma supplier is applied
  only after the middle map and its compatibility are explicitly checked.
- AC is the retained stated qualifier and is also inherited where required by
  the injective-resolution, cohomological-dimension, coherent-cohomology,
  and duality suppliers. No field-perfectness assumption is used.

The old proposed two-affine-cover route to cohomological-dimension one is not
used by this proof and its Cech, affine-vanishing, normal-map, and
transcendence-degree suppliers are not declared as direct dependencies for
that purpose. The separate projectivity corollary does have a transitive
normal-map route. That corollary and its transitive suppliers remain draft;
the normal-map and fixed-trace audits are active, so this report does not
claim stable dependency closure. The vector-bundle duality supplier is also
still draft. These are dependency-stability limits, not an identified defect
in the repaired target proof.

## Exact local checks and hashes

Selected checks on the final target passed:

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-serre-duality-curves-coherent-sheaves.md`
  — PASS, one direct item checked, no failures.
- `node tools/rendercheck.mjs items/thm-serre-duality-curves-coherent-sheaves.md`
  — OK; frontmatter parsed and all math spans parsed under KaTeX.

Final target raw SHA256:  
`aa4ae20dbbf5a4488d1befa3d53d777618a806240ee737642171f85788dd1c65`

Current Statement-block SHA256 (UTF-8 bytes after `## Statement` through the
line before `## Facts & Assumptions`):  
`15d106bbc29389e4ee824f2819c97783f37fc1a4b46049f6edb2fbc3b2fafb6c`

No receipt, certification, contract, plan, ledger, shared carrier, or gate was
written as part of this repair. The existing full-text coverage record at
`research/frontier-37-owner-30-batch-8.coverage.json` documents the full Vakil
2025 text and MIT 18.725 Lectures 24–25 reading used by the route research;
no source was refetched for this checkpoint.

## Root carrier integration

Root read the full completed replacement, synchronized the selected batch8 manifest deps/strategy, canonical plan deps, prose route, selected derivations/citations/boundaries and actual in-run supplier edges. Target-only strict contracts for both projectivity/coherent duality pass with0errors/0warnings after correcting stale boundary anchors to the final phase ordering; no other contract was tested. Helper target precheck/render results reused. Scope Statement unchanged. This is local owner integration, not an independent item approval: related normal-map and fixed-trace closure remains pending. Dependency levels will be reconciled once related shared carriers drain.
