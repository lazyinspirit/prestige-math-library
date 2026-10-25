# Step 3a reader report — batch 9

- **Run:** `advanced-qft-supersymmetry-build-2026-10-23`
- **Role:** reader, batch `9`
- **Scope:** the two assigned pages, their seven listed items, and supplier material needed to check the claims

## Opened inventory

Assigned pages, both matching the manifest inventories and retaining `page_layout: compact-v1` with empty bodies:

- `library/quantum-field-theory-mathematics/qftx-abbv-integration.md`
- `library/quantum-field-theory-mathematics/qftx-abbv-integration-examples.md`

Assigned items, reviewed in dependency order:

1. `items/lem-abbv-borel-fiber-integration-construction.md`
2. `items/def-abbv-equivariant-integration-conventions.md`
3. `items/lem-abbv-equivariant-thom-gysin-identities.md`
4. `items/lem-abbv-fixed-component-euler-invertibility.md`
5. `items/thm-atiyah-bott-berline-vergne-integration-formula.md`
6. `items/ex-abbv-projective-line-standard-circle-action.md`
7. `items/ex-abbv-positive-dimensional-fixed-components.md`

I checked the exact statements or definitions of the 24 direct item suppliers named by the batch manifest: `def-axiom-of-choice`; `def-qftx-character-localization`; `thm-milnor-join-model-is-a-contractible-free-g-space`; `lem-cohomology-ring-of-infinite-complex-projective-space`; `lem-integral-cohomology-ring-of-complex-projective-space-by-splitting`; `thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism`; `cor-poincare-duality-gives-a-nonsingular-cup-pairing`; `lem-singular-uct-extension-from-cycle-projections`; `thm-de-rham-theorem`; `lem-de-rham-top-integral-is-fundamental-class-evaluation`; `thm-smooth-partitions-of-unity-exist-on-manifolds`; `thm-general-stokes-theorem`; `thm-riemann-fubini-on-product-rectangles`; `thm-naturality-and-uniqueness-of-thom-classes`; `lem-de-rham-integration-respects-wedge-and-cup-in-cohomology`; `def-torus-equivariant-cohomology-cartan-model`; `lem-torus-classifying-space-cohomology`; `lem-qftx-borel-base-is-paracompact-of-cw-type`; `thm-thom-isomorphism-for-oriented-vector-bundles`; `lem-qftx-rational-torus-classifying-space-cohomology`; `lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent`; `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes`; `thm-borel-localization-for-compact-torus-actions`; and `prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual`.

For the assigned theorem's current-run Borel-localization supplier, I also inspected the relevant current statements and arguments in `lem-qftx-compact-torus-fixed-locus-normal-weights`, `lem-qftx-compact-torus-equivariant-slice-neighborhoods`, `lem-qftx-module-localization-preserves-exactness`, `lem-qftx-nonfixed-locus-cohomology-is-torsion-after-localization`, and `lem-qftx-fixed-normal-euler-class-is-unit-after-character-localization`. The used published statements about Thom classes, exact sequences, excision, partitions of unity, and the Euler class were checked against their local supplier items. This was a scoped dependency-use check, not a full audit of every transitive supplier proof.

## Mathematical and source review

The finite-stage Poincaré-duality construction in the fiber-integration lemma has the stated degree shift and stable range. The local form integration argument supplies the projection, base-change, product, and normalized Thom-trace identities used by the convention definition and Gysin lemma. The fixed-normal Euler calculation uses the nontrivial character weights and the nilpotence of positive-degree cohomology on each compact fixed component; the resulting finite geometric-series inverse is valid after character localization. The Borel localization proof's hypotheses and coefficient-ring conventions match the assigned ABBV theorem's use. The fixed-component reduction then follows from localization, self-intersection, disjoint-support vanishing, and Thom trace as claimed.

The two examples have the stated fixed loci, tangent or normal weights, line-bundle restrictions, orientation signs, and integrals. For the `CP^1` computation, the section induced by `z_0` has a single positive transverse zero at `[0:1]`; the second example's component orientations agree with the product orientations because both exchanged real blocks have dimension two.

The assigned statements and example descriptions are complete and have no inline hyperlinks. The proof steps are separated and tagged; no assigned TikZ/tikzcd diagrams require repair. No assigned item or page defect was confirmed. The assigned content is mathematical and makes no empirical physics claim.

I checked the cited primary/reference passages relevant to the formula and conventions:

- Atiyah–Bott, “The Moment Map and Equivariant Cohomology,” §2 and §3, including Theorem 3.5 and equations (3.7)–(3.8), [PDF](https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf).
- Libine, *Lecture Notes on Equivariant Cohomology*, §7.7, Theorem 71 and its fixed-component integration derivation, PDF pp. 42–44; §7.1, Example 48, PDF pp. 22–23, [PDF](https://arxiv.org/pdf/0709.3615).
- Hori et al., *Mirror Symmetry*, Chapter 4, §4.3, especially the self-intersection and integrated localization formulas (4.2)–(4.4), printed pp. 62–64 / PDF pp. 82–84, [PDF](https://www.claymath.org/library/monographs/cmim-1.pdf).

These references support the general localization structure; the assigned items' normalized Borel conventions, signs, and concrete examples are established locally from their stated suppliers.

## Verdict by page

- `qftx-abbv-integration`: **Pass.** The page is frontmatter-only, its five listed items match the manifest, and its prerequisites reach the necessary equivariant-cohomology, localization, topology, and integration suppliers.
- `qftx-abbv-integration-examples`: **Pass.** The page is frontmatter-only, its two examples match the manifest, and its prerequisites include the ABBV page and the Euler-class/intersection material used by the examples.

## Edits and blockers

No assigned content was edited. This is a read-only review; no item formatter, reflow, precheck, or stale judge-stamp action was needed. No blocker remains. I did not audit the full transitive proofs of all published mathematical suppliers or unrelated items on prerequisite pages.
