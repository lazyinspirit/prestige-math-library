# Step 3a reader report — batch 38

Date: 2026-10-25  
Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader

## Inventory opened

Assigned pages:

- `qftx-two-group-symmetry-backgrounds` (A): frontmatter only; page inventory and prerequisites match the batch manifest.
- `qftx-two-group-symmetry-backgrounds-examples` (B): frontmatter only; example inventory and prerequisites match the batch manifest.

Direct prerequisite pages opened for context:

- `qftx-p-form-symmetries`
- `qftx-two-group-cochains`
- `qftx-defects-and-topological-operators`

Items read in dependency order:

1. `def-aqft-topological-defect`
2. `def-aqft-p-form-global-symmetry`
3. `def-aqft-two-group-background`
4. `thm-aqft-two-group-background-consistency`
5. `def-aqft-finite-background-two-groupoid`
6. `thm-aqft-finite-background-two-groupoid-coherence`
7. `def-aqft-two-group-symmetry-realization` (assigned)
8. `pthm-aqft-two-group-background-coupling` (assigned)
9. `ex-aqft-two-group-split-background-coupling` (assigned)
10. `ex-aqft-two-group-nonzero-postnikov-unit-response` (assigned)

For the public-definition consumer check described below, I also opened `def-aqft-finite-two-group-state-sum`, its batch-40 manifest row, and its batch-40 proof-contract references. The assigned batch-38 proof contract was checked against the current items.

## Findings and item verdicts

- `def-aqft-two-group-symmetry-realization`: **hold**. In line 41, the opening Definition paragraph calls orientation and unspecified “spin or related lifting data” a tangential structure, but does not give the structure object or its map/lift. None of its six declared suppliers defines that input. Schommer-Pries, *Tori Detect Invertibility of Topological Field Theories*, §1, PDF pp. 2714–2715, specifies a tangential structure by a fibration `ξ: X → BO(d)` and a lift of the tangent-bundle classifying map `τ_M: M → BO(d)` to `X`; the source lists spin structures as the `BSpin(d)` case. [Source](https://msp.org/gt/2018/22-5/gt-v22-n5-p05-s.pdf).

  I did not retain a local clarification because the current batch-40 consumer `def-aqft-finite-two-group-state-sum` has F1 and F2 proof-contract entries quoting the complete Definition section (18,448 characters). Changing the assigned Definition would stale that outside-batch contract, which I am not authorized to edit. The exact defect and required repair are recorded in the findings JSON for owner routing.

- `pthm-aqft-two-group-background-coupling`: **pass, conditional on its stated model data**. Finite reindexing by the gauge-arrow bijection gives the correlator and partition-function identities; the counterterm phase is the stated source/target reweighting. The proof does not infer a phase or an anomaly from the Postnikov class, and it makes no continuum or empirical claim.
- `ex-aqft-two-group-split-background-coupling`: **pass**. The edge shift changes precisely faces 012, 013, and 014; the tetrahedron coboundary vanishes by `δ²=0`; the adopted unit-weight response gives phase 1. The statement and Remarks limit this to a finite background-response assignment.
- `ex-aqft-two-group-nonzero-postnikov-unit-response`: **pass**. The normalized cocycle, non-coboundary witness, all-tetrahedra background equation, and 0123 gauge-transform values check out. The TikZ diagram has the six arrows in increasing vertex order and labels the four faces of tetrahedron 0123 correctly; the proof does not rely on the diagram. The unit response remains a separate adopted input, not a consequence of `β`.

The cited mathematical conventions were checked against the actual supplier statements. Baez–Lauda, §8.3, identifies the skeletal associator with a normalized group 3-cocycle and derives its cocycle equation from the pentagon; Benini–Córdova–Hsin, §2.3, gives the simplicial `δ_a B = a*β` condition and the two background gauge transformations. Gaiotto–Kapustin–Seiberg–Willett, §1, supports the codimension and deformation-invariance conventions for symmetry defects. Bhardwaj et al., §§2.2.1–2.2.2 and §4.1, supports the higher-form charge and background conventions. The explicit finite formulas and calculations used here were checked locally.

## Page verdicts

- `qftx-two-group-symmetry-backgrounds` (A): **hold** for the unresolved definition gap in its assigned realization item. Its placement metadata is consistent and its body is empty.
- `qftx-two-group-symmetry-backgrounds-examples` (B): **hold by dependency** on the A page; no page-local defect was found. Its placement metadata is consistent and its body is empty.

The three prerequisite pages opened for context have coherent page IDs, classifications, inventories, and empty bodies. No page summary or TikZ diagram was added or changed.

## Edits and checks

No content or contract edits were retained. No `verification.judge` record was removed. The outside-batch consumer contract was left untouched.

Read-only checks completed on the current assigned files:

- `proof-layout` on all four assigned items: 4 items, 10 steps, 0 defects.
- `precheck` on the three proof-bearing assigned items: all passed.
- `rendercheck` on the four items and two assigned pages: 6 files passed YAML and KaTeX checks.

## Blocker and coverage

The A-page definition remains unresolved because its necessary clarification would change an item in the assigned batch while making a verbatim-source proof-contract quote stale in batch 40. That consumer artifact is outside reader-38's write scope. No other mathematical or diagram defect was found in the assigned content. The checks above cover the assigned item dependency closure and direct page prerequisites; page prerequisites beyond that direct context were not opened because no assigned claim used them.
