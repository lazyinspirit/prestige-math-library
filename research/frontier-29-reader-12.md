# frontier-29 reader-12 report

Date: Tuesday, September 1, 2026.
Batch: `12`.
Page pair: `simplicial-complexes-and-simplicial-homology` / `simplicial-complexes-and-simplicial-homology-examples`.

## Opened scope

Artifacts opened from `research/`:
- `frontier-29-reader.task.md`
- `frontier-29-batch-12.pages.json`
- `frontier-29-batch-12.coverage.json`
- `frontier-29-batch-12.notes.md`
- `frontier-29-batch-12.proof-contracts.json`
- live run state via `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`

Assigned pages opened:
- `library/algebraic-topology/simplicial-complexes-and-simplicial-homology.md`
- `library/algebraic-topology/simplicial-complexes-and-simplicial-homology-examples.md`

Assigned A items opened:
- `def-abstract-simplicial-complex`, `def-simplicial-subcomplex-star-closure-and-link`, `def-locally-finite-and-finite-dimensional-simplicial-complex`, `def-geometric-simplex-spanned-by-affinely-independent-vertices`, `lem-barycentric-coordinates-are-unique`, `def-geometric-realization-of-an-abstract-simplicial-complex`, `lem-geometric-simplices-intersect-in-the-realization-of-their-common-face`, `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`, `def-simplicial-map-and-its-geometric-realization`, `lem-the-realization-of-a-simplicial-map-is-continuous-and-functorial`, `def-orientation-of-a-simplex`, `lem-an-odd-permutation-reverses-oriented-simplex-sign`, `def-simplicial-chain-groups-and-boundary`, `lem-simplicial-boundary-is-independent-of-oriented-representative`, `thm-the-simplicial-boundary-squares-to-zero`, `def-simplicial-cycles-boundaries-and-homology`, `def-augmentation-and-reduced-simplicial-homology`, `lem-the-simplicial-augmentation-is-a-chain-map`, `def-induced-simplicial-chain-map`, `lem-induced-simplicial-chain-maps-commute-with-boundaries`, `prop-simplicial-homology-is-functorial`, `def-contiguous-simplicial-maps`, `lem-contiguous-simplicial-maps-have-homotopic-realizations`, `thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology`, `lem-the-augmented-simplicial-chain-complex-of-a-simplex-is-contractible`, `cor-the-simplex-has-zero-reduced-simplicial-homology`, `prop-zero-th-simplicial-homology-is-free-on-connected-components`, `prop-simplicial-homology-of-a-disjoint-union-is-the-direct-sum`, `def-simplicial-euler-characteristic`, `thm-euler-poincare-formula-for-a-finite-simplicial-complex`

Assigned B items opened:
- `ex-simplicial-homology-of-a-point-and-an-edge`, `ex-boundary-of-a-triangle-has-first-homology-z`, `ex-simplicial-homology-of-the-tetrahedron-boundary`, `ex-a-contractible-simplicial-cone`, `ex-two-contiguous-maps-of-a-subdivided-interval`, `ex-a-finite-complex-with-euler-characteristic-zero`, `cex-a-vertex-map-need-not-be-simplicial`, `cex-finite-dimensional-does-not-imply-finite-or-locally-finite`, `ex-a-delta-complex-structure-on-the-torus`

Published dependency items opened:
- `def-product-topology`
- `def-subspace-topology-top`
- `thm-heine-borel-rn`
- `thm-metric-hausdorff-separation`
- `def-cycle-and-boundary-subobjects-of-a-complex`
- `def-homology-object-of-a-chain-complex`
- `prop-homology-respects-identities-and-composition`
- `def-homotopy-relative-and-path-homotopy`
- `def-chain-homotopy`
- `thm-chain-homotopic-maps-induce-the-same-map-on-homology`
- `def-contractible-complex`
- `cor-a-contractible-complex-is-acyclic`
- `def-connected-component-and-quasicomponent`
- `thm-euler-poincare-formula-for-finite-free-complexes`

Coverage sources opened:
- Hatcher, *Algebraic Topology*, Preface xi and Ch. 2 / §2.C slices recorded in batch coverage
- Nanda, *Computational Algebraic Topology*, Lecture 01
- Nanda, *Computational Algebraic Topology*, Lecture 02
- Nanda, *Computational Algebraic Topology*, Lecture 03

## Repairs

1. `def-geometric-realization-of-an-abstract-simplicial-complex`
   Replaced the incorrect product-subspace topology with the design-required weak/simplex topology. The previous topology made `lem-the-realization-of-a-simplicial-map-is-continuous-and-functorial` false on infinite complexes.

2. `lem-the-realization-of-a-simplicial-map-is-continuous-and-functorial`
   Rewrote the continuity step to use simplexwise affine restrictions plus the weak topology, rather than an invalid global product-topology patching argument.

3. `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`
   Added the empty-realization case and rewrote the Hausdorff argument through the finite-vertex ambient cube plus weak-topology/subspace-topology agreement.

4. `lem-simplicial-boundary-is-independent-of-oriented-representative`
   Replaced the incomplete transposition argument with an explicit adjacent-transposition sign check.

5. `prop-zero-th-simplicial-homology-is-free-on-connected-components`
   Removed the unnecessary component-has-a-vertex hypothesis and supplied the missing proof that connected components of the realization coincide with edge-path components of the vertex set.

6. `thm-contiguous-simplicial-maps-induce-the-same-map-on-simplicial-homology`
   Expanded the prism step so the chain-homotopy identity is actually stated rather than deferred to an unspecified “direct computation.”

7. `thm-euler-poincare-formula-for-a-finite-simplicial-complex`
   Narrowed the title to match the current torsion-free hypothesis on homology.

8. `ex-simplicial-homology-of-the-tetrahedron-boundary`
   Replaced the rank-only shortcut with an explicit computation showing `B_1=Z_1` and `H_2\cong\mathbb Z`.

9. `ex-a-contractible-simplicial-cone`
   Corrected the cone operator so simplices already containing the apex are sent to `0`, matching the simplex-contraction convention.

10. `research/frontier-29-batch-12.proof-contracts.json`
    Refreshed the contract rows for the repaired A-page proofs, especially the `H_0` component argument and the finite-realization topology step.

## Defects checked but left unchanged

- No remaining editable mathematical defect was found in the other assigned items.
- No uneditable defect was confirmed in an assigned page, a published dependency, or another batch item/page.

## Page verdicts

- `simplicial-complexes-and-simplicial-homology`: pass on current bytes after the topology, boundary-sign, `H_0`, and contiguity repairs.
- `simplicial-complexes-and-simplicial-homology-examples`: pass on current bytes after the tetrahedron and cone example repairs.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts <9 changed item files>`: all unchanged on the final bytes.
- `node tools/tsx-run.mjs tools/precheck.mts <9 changed item files>`: the 6 proof-bearing changed items passed; the definition/example carriers were included in the invocation but are not proof-checked by `precheck`.
- `node tools/proof-contract.mjs research/frontier-29-batch-12.proof-contracts.json --strict`: pass, `17/17` scoped items checked.
- `node tools/rendercheck.mjs <9 changed item files> library/algebraic-topology/simplicial-complexes-and-simplicial-homology.md library/algebraic-topology/simplicial-complexes-and-simplicial-homology-examples.md`: pass, `11` files clean.
- `node tools/content-policy.mjs research/frontier-29-batch-12.pages.json`: pass, `39` scoped items, `0` errors, `0` warnings.
- `git diff --check -- <touched files>`: pass.

## Blockers

- No mathematical blocker remains inside the editable Step-6 scope.
- The batch manifest still carries the pre-repair Euler-Poincare title string; per the dispatch limits I did not edit batch-manifest prose outside the allowed item/page scope.
