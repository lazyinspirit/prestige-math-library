# Step 4 cleanup report — `validate-plan` `b-leaf` and `prefix` findings

Run `phase-2-remaining-27`, dispatch `alpha-high`/`step4-bleaf-plan`.
Date: 2026-09-17. Author: alpha-high lane (this dispatch).

## Result

`node tools/validate-plan.mjs research/plan-spec.json` now exits **0** with
**0 ERROR lines**: zero `b-leaf`, `prefix`, `dup-id`, `undeclared-prereq`,
`item-cycle`, `page-cycle`, `forward-ref`, `intra-order`, `resolve`, `size`,
`companion` or `b-requires-a` findings. The 3961 `redundant-prereq` warnings are
pre-existing and were left alone.

Supporting checks, all green:

| check | result |
|---|---|
| `node tools/depcheck.mjs` | exit 0 — "OK — no cycles, all references resolve, no draft items on published pages." 0 errors; 276 warnings, all pre-existing classes (multi-home 156, cited-not-in-deps 117, orphan 2, b-leaf-legacy 1). No `b-leaf-content`; no differential-geometry `multi-home` remains. |
| `node tools/splice-plan.mjs --run phase-2-remaining-27 --all` | all 15 batches `already correct` |
| `node tools/splice-plan.mjs --run phase-2-remaining-27 --verify` | 54 page(s) across 15 manifest(s) — plan and manifests agree |
| `research/phase-2-remaining-27-splice-refusals.json` | `{ "run": "...", "refusals": [] }` |
| `node tools/manifest-integrity.mjs --run phase-2-remaining-27` | 54 page(s) owed, 54 in the manifests — no scope drift |
| `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` | refreshed and deduplicated, exit 0 |
| `node tools/rendercheck.mjs` on the edited `library/**` page files (and the semisimple A page) | OK — 9 file(s) |
| `node tools/tsx-run.mjs tools/precheck.mts` on the 11 moved suppliers + 13 synchronised consumers | 24 checked, 0 failing |
| `node tools/manifest-deps.mjs` on batch manifests 9, 11, 13 | 0 errors (70 / 115 / 117 items) |

## Prefix findings (4) — already repaired on disk, re-verified

The batch-14 manifest rows for the four items already carry the corrected kind
(the item files' kinds were always right), and the plan had been re-spliced: at
the start of my pass `validate-plan` reported **0** `prefix` findings. I
verified manifest row = item frontmatter = plan for each:

| item id | item frontmatter `kind` | batch-14 manifest row `kind` |
|---|---|---|
| `lem-sigma-cellular-base-yields-a-compatible-metric` | lemma | lemma |
| `lem-solovay-almost-disjoint-extension-under-ma` | lemma | lemma |
| `lem-ladder-separation-from-hyp` | lemma | lemma |
| `def-dodd-jensen-covering-and-square-package` | definition | definition |

No further edit was required in this pass.

## `b-leaf` findings (51): mechanism and repairs

Every finding had one of two mechanisms, and each was closed with the
dispatch's option 1 or option 2.

**(A) Stale manifest rows — 16 of 51 (option 1, already realised in the authored
text).** The Step-3b author had already replaced the B-page supplier in the
authored item (both frontmatter `deps` and every proof citation), but the batch
manifest still carried the scaffold-era `deps`, and Step 4 splices the manifest
into the plan. Repair: set the manifest row's `deps` to the authored item's
frontmatter `deps` (no item file touched; the mathematics was already the
replacement). The replacement suppliers used by the authors are all
A-page-homed items (e.g. `thm-symplectic-vector-fields-modulo-hamiltonian-vector-fields-are-first-de-rham-cohomology`,
`cor-a-nonzero-period-obstructs-exactness-and-bounding`,
`thm-the-canonical-cotangent-two-form-is-symplectic`).

**(B) Genuinely load-bearing B-page suppliers — 35 of 51, 11 distinct items
(option 2, a MOVE).** The facts the consumers use (the classical matrix groups
as Lie groups with their Lie algebras; the Killing forms of `sl_2` and of the
classical simple algebras; the matrix exponential as the Lie-group exponential;
the diagonal Cartan subalgebra of `sl_n`; the classical root systems in
coordinates; the signed-permutation Weyl groups of `B_n`/`D_n`; the
SU(2)→SO(3) covering; `su(2) ≅ so(3)`) are stated by no A-page item, so option 1
had no supplier to point at. Each supplier was moved off its examples page to
its companion A page's `examples:` list — a single-home move (its listing on the
examples page was removed), exactly as the dispatch prescribes.

### Per-finding record

| # | consumer item | consumer page | supplier | old (B) home | repair applied |
|---|---|---|---|---|---|
| 1 | `ex-complex-k-ahss-for-complex-projective-space` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` | `ex-integral-cohomology-ring-of-complex-projective-space` | `cup-cap-cross-products-and-cohomology-rings-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |
| 2 | `ex-complex-k-ahss-for-complex-projective-space` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` | `ex-complex-k-ring-of-complex-projective-space` | `complex-topological-k-theory-and-bott-periodicity-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |
| 3 | `lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` | `ex-tautological-real-and-complex-lines-over-projective-space` | `topological-vector-bundles-and-grassmannian-classification-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |
| 4 | `lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` | `ex-integral-cohomology-of-real-projective-space-from-uct` | `singular-cohomology-and-coefficient-theorems-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |
| 5 | `ex-complex-k-ahss-for-real-projective-space` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` | `ex-integral-cohomology-of-real-projective-space-from-uct` | `singular-cohomology-and-coefficient-theorems-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |
| 6 | `lem-a-bockstein-class-on-rp-two-times-rp-four-has-nonzero-integral-sq-three` | `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` | `ex-steenrod-squares-on-real-projective-space` | `bocksteins-steenrod-squares-and-cohomology-operations-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |
| 7 | `prop-classical-types-correspond-to-sl-so-and-sp` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | `ex-classical-simple-lie-algebras-and-their-killing-forms` | `semisimple-lie-algebras-cohomology-and-levi-theory-examples` | MOVE — supplier now homed on A page `semisimple-lie-algebras-cohomology-and-levi-theory`; consumer deps/citations unchanged |
| 8 | `fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | `ex-classical-simple-lie-algebras-and-their-killing-forms` | `semisimple-lie-algebras-cohomology-and-levi-theory-examples` | MOVE — supplier now homed on A page `semisimple-lie-algebras-cohomology-and-levi-theory`; consumer deps/citations unchanged |
| 9 | `prop-restricted-root-systems-may-be-nonreduced` | `real-forms-and-real-semisimple-lie-algebras` | `ex-classical-simple-lie-algebras-and-their-killing-forms` | `semisimple-lie-algebras-cohomology-and-levi-theory-examples` | MOVE — supplier now homed on A page `semisimple-lie-algebras-cohomology-and-levi-theory`; consumer deps/citations unchanged |
| 10 | `ex-cartan-involution-and-k-plus-p-for-sl-n-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-classical-simple-lie-algebras-and-their-killing-forms` | `semisimple-lie-algebras-cohomology-and-levi-theory-examples` | MOVE — supplier now homed on A page `semisimple-lie-algebras-cohomology-and-levi-theory`; consumer deps/citations unchanged |
| 11 | `ex-a-nonreduced-bc-root-system-from-a-real-form` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-classical-simple-lie-algebras-and-their-killing-forms` | `semisimple-lie-algebras-cohomology-and-levi-theory-examples` | MOVE — supplier now homed on A page `semisimple-lie-algebras-cohomology-and-levi-theory`; consumer deps/citations unchanged |
| 12 | `ex-vogan-diagrams-for-real-forms-of-sl-three-c` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-classical-simple-lie-algebras-and-their-killing-forms` | `semisimple-lie-algebras-cohomology-and-levi-theory-examples` | MOVE — supplier now homed on A page `semisimple-lie-algebras-cohomology-and-levi-theory`; consumer deps/citations unchanged |
| 13 | `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-classical-simple-lie-algebras-and-their-killing-forms` | `semisimple-lie-algebras-cohomology-and-levi-theory-examples` | MOVE — supplier now homed on A page `semisimple-lie-algebras-cohomology-and-levi-theory`; consumer deps/citations unchanged |
| 14 | `fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | `ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups` | `semisimple-lie-algebras-cohomology-and-levi-theory-examples` | MOVE — supplier now homed on A page `semisimple-lie-algebras-cohomology-and-levi-theory`; consumer deps/citations unchanged |
| 15 | `cex-the-full-weight-lattice-does-not-integrate-to-every-central-quotient-group` | `highest-weight-theory-for-complex-semisimple-lie-algebras-examples` | `ex-su-two-to-so-three-as-a-covering-homomorphism` | `lie-subgroups-actions-and-homogeneous-spaces-examples` | MOVE — supplier now homed on A page `lie-subgroups-actions-and-homogeneous-spaces`; consumer deps/citations unchanged |
| 16 | `prop-restricted-root-systems-may-be-nonreduced` | `real-forms-and-real-semisimple-lie-algebras` | `ex-classical-root-systems-in-euclidean-coordinates` | `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples` | MOVE — supplier now homed on A page `root-systems-dynkin-diagrams-and-cartan-killing-classification`; consumer deps/citations unchanged |
| 17 | `prop-restricted-root-systems-may-be-nonreduced` | `real-forms-and-real-semisimple-lie-algebras` | `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups` | `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples` | MOVE — supplier now homed on A page `root-systems-dynkin-diagrams-and-cartan-killing-classification`; consumer deps/citations unchanged |
| 18 | `ex-compact-and-split-real-forms-of-sl-two-c` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-killing-form-of-sl-two` | `semisimple-lie-algebras-cohomology-and-levi-theory-examples` | MOVE — supplier now homed on A page `semisimple-lie-algebras-cohomology-and-levi-theory`; consumer deps/citations unchanged |
| 19 | `cex-same-complexification-with-different-killing-form-signatures` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-killing-form-of-sl-two` | `semisimple-lie-algebras-cohomology-and-levi-theory-examples` | MOVE — supplier now homed on A page `semisimple-lie-algebras-cohomology-and-levi-theory`; consumer deps/citations unchanged |
| 20 | `ex-compact-and-split-real-forms-of-sl-two-c` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-unitary-and-special-unitary-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 21 | `ex-a-nonreduced-bc-root-system-from-a-real-form` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-unitary-and-special-unitary-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 22 | `ex-vogan-diagrams-for-real-forms-of-sl-three-c` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-unitary-and-special-unitary-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 23 | `ex-grassmannians-from-unitary-symplectic-reduction` | `moment-maps-and-symplectic-reduction-examples` | `ex-unitary-and-special-unitary-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |
| 24 | `ex-compact-and-split-real-forms-of-sl-two-c` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-general-and-special-linear-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 25 | `ex-cartan-involution-and-k-plus-p-for-sl-n-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-general-and-special-linear-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 26 | `ex-polar-cartan-decomposition-of-sl-n-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-general-and-special-linear-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 27 | `ex-compact-and-split-cartan-subalgebras-of-sl-two-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-general-and-special-linear-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 28 | `ex-iwasawa-decomposition-of-sl-two-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-general-and-special-linear-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 29 | `ex-restricted-roots-of-sl-n-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-general-and-special-linear-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 30 | `ex-vogan-diagrams-for-real-forms-of-sl-three-c` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-general-and-special-linear-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 31 | `cex-two-nonconjugate-real-cartan-subalgebras` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-general-and-special-linear-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 32 | `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-general-and-special-linear-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 33 | `ex-cartan-involution-and-k-plus-p-for-sl-n-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-orthogonal-and-special-orthogonal-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 34 | `ex-polar-cartan-decomposition-of-sl-n-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-orthogonal-and-special-orthogonal-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 35 | `ex-compact-and-split-cartan-subalgebras-of-sl-two-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-orthogonal-and-special-orthogonal-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 36 | `ex-iwasawa-decomposition-of-sl-two-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-orthogonal-and-special-orthogonal-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 37 | `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-orthogonal-and-special-orthogonal-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 38 | `fs-the-general-reduced-dimension-is-dim-m-minus-two-dim-g` | `moment-maps-and-symplectic-reduction` | `ex-orthogonal-and-special-orthogonal-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |
| 39 | `ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle` | `moment-maps-and-symplectic-reduction-examples` | `ex-orthogonal-and-special-orthogonal-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |
| 40 | `ex-two-sphere-as-a-coadjoint-orbit-of-so-three` | `moment-maps-and-symplectic-reduction-examples` | `ex-orthogonal-and-special-orthogonal-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |
| 41 | `ex-diagonal-action-and-addition-of-angular-momenta` | `moment-maps-and-symplectic-reduction-examples` | `ex-orthogonal-and-special-orthogonal-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |
| 42 | `cex-zero-angular-momentum-level-with-nonfree-points-is-singular` | `moment-maps-and-symplectic-reduction-examples` | `ex-orthogonal-and-special-orthogonal-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |
| 43 | `ex-polar-cartan-decomposition-of-sl-n-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-matrix-exponential-as-the-lie-group-exponential` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 44 | `ex-iwasawa-decomposition-of-sl-two-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-matrix-exponential-as-the-lie-group-exponential` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 45 | `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-matrix-exponential-as-the-lie-group-exponential` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | MOVE — supplier now homed on A page `lie-groups-invariant-fields-and-the-exponential-map`; consumer deps/citations unchanged |
| 46 | `ex-restricted-roots-of-sl-n-r` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n` | `cartan-subalgebras-and-root-space-decompositions-examples` | MOVE — supplier now homed on A page `cartan-subalgebras-and-root-space-decompositions`; consumer deps/citations unchanged |
| 47 | `ex-vogan-diagrams-for-real-forms-of-sl-three-c` | `real-forms-and-real-semisimple-lie-algebras-examples` | `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n` | `cartan-subalgebras-and-root-space-decompositions-examples` | MOVE — supplier now homed on A page `cartan-subalgebras-and-root-space-decompositions`; consumer deps/citations unchanged |
| 48 | `fs-every-symplectic-action-is-hamiltonian` | `moment-maps-and-symplectic-reduction` | `ex-a-symplectic-nonhamiltonian-vector-field-on-the-two-torus` | `hamiltonian-mechanics-and-completely-integrable-systems-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |
| 49 | `cex-irrational-flow-on-a-symplectic-torus-is-symplectic-but-not-hamiltonian` | `moment-maps-and-symplectic-reduction-examples` | `ex-a-symplectic-nonhamiltonian-vector-field-on-the-two-torus` | `hamiltonian-mechanics-and-completely-integrable-systems-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |
| 50 | `ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map` | `moment-maps-and-symplectic-reduction-examples` | `ex-the-standard-symplectic-vector-space` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |
| 51 | `ex-grassmannians-from-unitary-symplectic-reduction` | `moment-maps-and-symplectic-reduction-examples` | `ex-the-standard-symplectic-vector-space` | `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory-examples` | REPLACE (realised in authored text) — manifest row synced to the item's `deps` |

  (51 findings: 35 closed by MOVE, 16 by manifest synchronisation.)

### The 11 moves

| supplier | removed from (B page) | now homed on (A page) | library change |
|---|---|---|---|
| `ex-general-and-special-linear-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | `lie-groups-invariant-fields-and-the-exponential-map` | removed from B list; A `examples:` already carried it |
| `ex-orthogonal-and-special-orthogonal-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | `lie-groups-invariant-fields-and-the-exponential-map` | removed from B list; added to A `examples:`; removed from the secondary listing on `real-forms-and-real-semisimple-lie-algebras` |
| `ex-unitary-and-special-unitary-lie-groups` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | `lie-groups-invariant-fields-and-the-exponential-map` | removed from B list; A `examples:` already carried it |
| `ex-matrix-exponential-as-the-lie-group-exponential` | `lie-groups-invariant-fields-and-the-exponential-map-examples` | `lie-groups-invariant-fields-and-the-exponential-map` | removed from B list; A `examples:` already carried it |
| `ex-su-two-to-so-three-as-a-covering-homomorphism` | `lie-subgroups-actions-and-homogeneous-spaces-examples` | `lie-subgroups-actions-and-homogeneous-spaces` | removed from B list; A `examples:` already carried it |
| `ex-killing-form-of-sl-two` | `semisimple-lie-algebras-cohomology-and-levi-theory-examples` | `semisimple-lie-algebras-cohomology-and-levi-theory` | removed from B list; A `examples:` already carried it |
| `ex-classical-simple-lie-algebras-and-their-killing-forms` | `semisimple-lie-algebras-cohomology-and-levi-theory-examples` | `semisimple-lie-algebras-cohomology-and-levi-theory` | removed from B list; A `examples:` already carried it |
| `ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups` | `semisimple-lie-algebras-cohomology-and-levi-theory-examples` | `semisimple-lie-algebras-cohomology-and-levi-theory` | removed from B list; A `examples:` already carried it |
| `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n` | `cartan-subalgebras-and-root-space-decompositions-examples` | `cartan-subalgebras-and-root-space-decompositions` | removed from B list; A `examples:` already carried it |
| `ex-classical-root-systems-in-euclidean-coordinates` | `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | removed from B list; A `examples:` already carried it |
| `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups` | `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples` | `root-systems-dynkin-diagrams-and-cartan-killing-classification` | removed from B list; added to A `examples:` |

The moved items' statements, proofs, `deps` and status (published, with their
existing audit stamps) are untouched. Only their page inventory changed. No
`b-leaf-content` error remains anywhere, and no cross-page dependency of an
in-run item reaches an item listed on an examples page (checked directly: zero
such edges).

### Manifest and plan bookkeeping changed with the moves

- `research/phase-2-remaining-27-batch-11.pages.json`:
  `cartan-subalgebras-and-root-space-decompositions-examples` 11 → 10 items
  (dropped `ex-diagonal-cartan-subalgebra-and-roots-of-sl-n`);
  `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples`
  12 → 10 items (dropped `ex-classical-root-systems-in-euclidean-coordinates`,
  `ex-weyl-groups-of-b-n-and-d-n-as-signed-permutation-groups`).
- `research/phase-2-remaining-27-batch-9.pages.json`: `deps` synchronised for
  `ex-complex-k-ahss-for-complex-projective-space`,
  `lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions`,
  `ex-complex-k-ahss-for-real-projective-space`,
  `lem-a-bockstein-class-on-rp-two-times-rp-four-has-nonzero-integral-sq-three`.
- `research/phase-2-remaining-27-batch-13.pages.json`: `deps` synchronised for
  `fs-every-symplectic-action-is-hamiltonian`,
  `fs-the-general-reduced-dimension-is-dim-m-minus-two-dim-g`,
  `ex-circle-rotation-on-complex-n-space-and-its-quadratic-moment-map`,
  `ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle`,
  `ex-two-sphere-as-a-coadjoint-orbit-of-so-three`,
  `ex-grassmannians-from-unitary-symplectic-reduction`,
  `ex-diagonal-action-and-addition-of-angular-momenta`,
  `cex-irrational-flow-on-a-symplectic-torus-is-symplectic-but-not-hamiltonian`,
  `cex-zero-angular-momentum-level-with-nonfree-points-is-singular`.
- `research/plan-spec.json`: the three published B rows that are not covered by
  this run's manifests dropped the moved items —
  `lie-groups-invariant-fields-and-the-exponential-map-examples` 12 → 8,
  `lie-subgroups-actions-and-homogeneous-spaces-examples` 12 → 11,
  `semisimple-lie-algebras-cohomology-and-levi-theory-examples` 12 → 9 — and the
  batches 9/11/13 rows were re-spliced from the manifests.
  A-page `examples:` items are not carried in the plan's item rows (this is true
  of every A page, including the pre-existing semisimple A page entry), so the
  moved items were removed from the source rows rather than added to the
  destination rows. Adding `ex-general-and-special-linear-lie-groups` to the
  plan row of `lie-groups-invariant-fields-and-the-exponential-map` was tested
  and rejected: its dep `def-trace-of-a-square-matrix-over-a-commutative-ring`
  is homed on `linear-recurrences-and-rational-generating-functions`, which is
  not in that A page's `requires` closure, so the plan row would produce an
  `undeclared-prereq` finding, and adding the require edge is a reading-order
  change outside this dispatch.

## Files changed

Library (8 files, `examples:` home lists only):

- `library/differential-geometry/lie-groups-invariant-fields-and-the-exponential-map-examples.md`
- `library/differential-geometry/lie-groups-invariant-fields-and-the-exponential-map.md`
- `library/differential-geometry/real-forms-and-real-semisimple-lie-algebras.md`
- `library/differential-geometry/semisimple-lie-algebras-cohomology-and-levi-theory-examples.md`
- `library/differential-geometry/lie-subgroups-actions-and-homogeneous-spaces-examples.md`
- `library/differential-geometry/cartan-subalgebras-and-root-space-decompositions-examples.md`
- `library/differential-geometry/root-systems-dynkin-diagrams-and-cartan-killing-classification-examples.md`
- `library/differential-geometry/root-systems-dynkin-diagrams-and-cartan-killing-classification.md`

Manifests and plan: `research/phase-2-remaining-27-batch-9.pages.json`,
`research/phase-2-remaining-27-batch-11.pages.json`,
`research/phase-2-remaining-27-batch-13.pages.json`,
`research/plan-spec.json`, and the splice receipts
`research/phase-2-remaining-27-splice-{9,11,13}.json` +
`research/phase-2-remaining-27-splice-refusals.json`.

**No item file was edited**: no consumer's statement, proof, `deps` or citation
tags changed, and no supplier's item text changed. No coverage, contract, scope
decision or report file other than this one was touched.

## Note for the operator on the parallel `bleaf-cleanup` dispatch

`research/phase-2-remaining-27-bleaf-cleanup.task.md` (generated 20:37,
alongside this dispatch) prescribes rewriting the 51 consumers' `deps` and
inlining derivations. That route is **no longer needed**: the `b-leaf` class is
closed by manifest synchronisation plus eleven single-home moves, and after the
repair zero in-run items have any cross-page dependency on an item listed on an
examples page — the stricter of the two rules. Running the cleanup lane now
would re-edit authored proofs that this pass left byte-identical; if the owner
prefers the replace/inline route over the moves on principle, the moves are
confined to the eight `library/**` page files and the three plan/manifest rows
listed above, so reverting them is local and clean.

The per-batch splice receipts
(`research/phase-2-remaining-27-splice-{9,11,13}.json`) were rewritten by the
final `--all` pass and therefore record `pages_already_correct` /
`item_count: 0`; the spliced content itself is in `research/plan-spec.json`,
which `--verify` confirms equals the manifests.

## Prose amendments for serial reconciliation (Step 4)

The moved items are still described by sentences on the examples pages they left.
Not edited here (outside this dispatch's edit list); queued for reconciliation:

1. `lie-groups-invariant-fields-and-the-exponential-map-examples.md` —
   "The examples compute invariant brackets and exponentials for additive,
   multiplicative, classical matrix, Heisenberg, affine, and torus Lie groups.
   For matrix groups the ordinary power-series exponential is identified with
   the Lie-group exponential…": the four classical-matrix items and the
   matrix-exponential identification now live on the companion A page.
2. `semisimple-lie-algebras-cohomology-and-levi-theory-examples.md` — "Direct
   adjoint-matrix and root-weight computations give the Killing forms of
   $\mathfrak{sl}_2$ and the split classical families, including all low-rank
   orthogonal exceptions.": those two items now live on the companion A page.
3. `cartan-subalgebras-and-root-space-decompositions-examples.md` — the clause
   "the diagonal Cartan subalgebra and the roots $\varepsilon_i-\varepsilon_j$
   of $\mathfrak{sl}_n(\mathbb{C})$": that item now lives on the companion A page.
4. `root-systems-dynkin-diagrams-and-cartan-killing-classification-examples.md` —
   the clauses "the classical systems in coordinates" and "the Weyl groups of
   types $A,B,D$": both items now live on the companion A page.

## Open obligations / notes

- No published defect was found in this pass; the consumers' uses of the
  suppliers are exactly the facts the suppliers state. No ledger entry is
  therefore required (the move is an inventory/reading-order update, not a
  mathematical repair).
- No unresolved uncertainty: the moved items' content was not altered, and the
  dependency facts remain exactly as audited in their own runs.
- The run's `b-leaf`/`prefix` gate state after this pass: `validate-plan` exit 0
  and `depcheck` exit 0; the step-4 battery's other two gates
  (`frontier-dependency-ledger`, `manifest-integrity`) and `splice-refusals`
  were re-run here and pass.
