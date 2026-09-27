# Step 5a reader report — batch 2

Run: `frontier-35-ten-categories`  
Manifest read: `research/frontier-35-ten-categories-batch-2.pages.json`

## Opened inventory

### Pages

- `library/algebraic-topology/simple-homotopy-whitehead-groups-and-torsion.md` (assigned A page)
- `library/algebraic-topology/simple-homotopy-whitehead-groups-and-torsion-examples.md` (assigned B page)

### Assigned items

All 27 A-page items and all four B-page example items listed by the manifest were opened and reviewed.

**A page:**

- `def-elementary-expansion-and-collapse-of-finite-cw-complexes`
- `def-simple-homotopy-equivalence`
- `def-stable-general-linear-group-and-elementary-subgroup-of-a-ring`
- `lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup`
- `def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group`
- `lem-group-rings-have-invariant-basis-number-via-augmentation`
- `lem-parity-map-of-a-finite-contracted-complex-is-invertible`
- `def-finite-based-free-chain-complex-and-its-contraction-torsion`
- `lem-contraction-torsion-is-independent-of-the-contracting-homotopy`
- `lem-basis-change-and-direct-sum-formulas-for-chain-torsion`
- `def-based-cellular-chain-complex-of-a-universal-cover`
- `lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group`
- `lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear`
- `lem-a-lifted-cellular-homotopy-equivalence-has-a-contractible-algebraic-mapping-cone`
- `def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence`
- `thm-whitehead-torsion-is-independent-of-cellular-approximation-basepaths-lifts-orientations-orders-and-contraction`
- `thm-composition-and-sum-formulas-for-whitehead-torsion`
- `lem-an-elementary-expansion-has-zero-whitehead-torsion`
- `thm-simple-homotopy-equivalences-have-zero-whitehead-torsion`
- `lem-the-target-inclusion-in-a-cellular-mapping-cylinder-is-simple`
- `lem-cell-trading-reduces-a-finite-relative-equivalence-to-two-high-cell-degrees`
- `lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases`
- `lem-cell-slides-and-stabilizations-realize-elementary-group-ring-matrices`
- `lem-an-identity-relative-boundary-matrix-allows-cell-cancellation`
- `lem-zero-torsion-is-realized-by-elementary-expansions-collapses-and-cellular-basis-moves`
- `lem-every-whitehead-class-is-realized-by-a-finite-cw-homotopy-equivalence`
- `thm-a-finite-cw-homotopy-equivalence-is-simple-if-and-only-if-its-whitehead-torsion-vanishes`

**B page:**

- `ex-an-elementary-expansion-has-zero-whitehead-torsion`
- `ex-the-whitehead-group-of-the-trivial-group-is-zero`
- `ex-torsion-of-a-two-term-based-contractible-complex`
- `cex-ordinary-acyclicity-forgets-basis-and-group-ring-torsion`

### Dependencies opened for claim checks

The required clauses were opened in `def-stable-general-linear-group-and-elementary-subgroup-of-a-ring`, `def-normal-subgroup`, `def-generated-subgroup`, `lem-group-rings-have-invariant-basis-number-via-augmentation`, `def-based-cellular-chain-complex-of-a-universal-cover`, `lem-relative-single-cell-layer-has-compatible-homotopy-and-homology-bases`, `lem-relative-homotopy-exact-sequence-of-a-triple-in-group-degrees`, `thm-long-exact-sequence-of-relative-homotopy-groups`, `lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees`, `lem-relative-cubical-disk-model-and-compression`, `thm-five-lemma-for-a-morphism-of-long-exact-sequences`, `thm-covering-space-lifting-criterion`, `thm-path-lifting-for-covering-maps`, `thm-homotopy-lifting-for-covering-maps`, `thm-deck-group-of-a-universal-cover-is-the-fundamental-group`, `prop-monodromy-acts-by-bijections-and-detects-components`, `lem-high-relative-cells-do-not-change-lower-homotopy`, `lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts`, `prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant`, `def-hurewicz-homomorphism`, and `lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair`.

## Repairs made

1. **`lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup.md`:** The former final claim said that upper unitriangularity in any ordered basis implied membership in `E_n(R)`, while its proof used only normality of the *stable* subgroup. I split the conclusion: the displayed matrix belongs to `E_n(R)` in the specified coordinates by the finite induction; in another basis, normality yields membership in stable `E(R)`, hence in `E_N(R)` after some finite stabilization. The proof steps were reordered and renumbered to follow their dependency layers. I also corrected the matching contract boundary note, which referred to matrices not present in the proof. The stable-group definition gives the stabilization union, and the direct conjugation argument now states exactly what normality proves.

2. **`lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases.md`:** A deck transformation moves the basepoint, so applying it alone was not an operation on the based relative homotopy group. The proof and statement now define the right action by applying `T_(g^-1)` and then transporting the basepoint back through the simply connected subspace; simple connectivity makes this independent of path, and the composition law gives the right action. The matching cellular translates remain the homotopy and homology bases. The invertibility conclusion also needed invariant basis number to infer equal finite free ranks. I added the assigned dependency `lem-group-rings-have-invariant-basis-number-via-augmentation` and used it before calling the boundary matrix square. I also repaired the relative-homology basis formula’s unmatched math delimiter and supplied its omitted integral coefficient group. Its proof contract now records the basepoint-change source, the IBN citation, the equal-rank obligation, and the corrected formula.

The two changed items had no `verification.judge` record to remove. Proof contracts were updated for both repairs.

## Source checks

- Hatcher, *Algebraic Topology*, §4.1, printed pp.341–342, describes basepoint-change isomorphisms and their identity, inverse-path, and path-composition laws. Printed p.345 gives the corresponding relative construction for paths in `A` and the action of `π1(A)` on relative homotopy groups. This resolves the based deck-action point.
- Cohen, *A Course in Simple-Homotopy Theory*, §§7.3–7.4, printed pp.25–27, was read from rendered scans. Section 7.3 states the cell-trading construction under `π_r(K,L)=0` and proves the required relative approximation/push; §7.4 iterates it to put a finite homotopically trivial pair in two adjacent dimensions. Lück, *A Basic Introduction to Surgery Theory*, §2.3, Theorem 2.21 proof sketch, printed pp.37–38, independently describes this two-dimension reduction and the ensuing matrix operations. These passages support the cell-trading item’s claim and proof structure.
- Lück, Lemma 2.2, §2.1, printed pp.25–26, states `E(R)=[GL(R),GL(R)]` and normality of the stable elementary subgroup. Lurie, Remark 12 (Whitehead’s Lemma), p.4, supplies the cited elementary triangular-factor identities. Neither turns stable normality into fixed-size normality; the repaired item now makes that distinction explicitly.

## Page verdicts

- **A page — `simple-homotopy-whitehead-groups-and-torsion`:** The summary and theorem arc are consistent with the reviewed items. The finite-basis overstatement in one item was repaired as above; no separate A-page prose defect remains. Verdict: pass after the item repair.
- **B page — `simple-homotopy-whitehead-groups-and-torsion-examples`:** The four example computations and the summary’s scope are consistent with the reviewed definitions and claims. No defect found. Verdict: pass.

## Validation, uneditable defects, and blocker

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup.md` — pass.
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases.md` — reflowed after the main proof edit; unchanged after the notation repair.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases.md` — pass.
- Uneditable defects: none found in the assigned pages, in-flight items, or dependencies needed for these claims.
- Blocker: none.

Coverage limitation: the Cohen PDF is image-only, without extractable text. Printed pp.25–27 were inspected as rendered page scans; the relevant arguments were readable. All assigned pages and listed items were opened.
