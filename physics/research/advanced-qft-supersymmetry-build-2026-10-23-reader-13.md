# Step 3a Reader Report — Batch 13

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Batch: `13`

## Opened inventory

### Pages

| Page | Carrier | Review |
|---|---|---|
| `qftx-two-group-cochains` (A) | `library/quantum-field-theory-mathematics/qftx-two-group-cochains.md` | Manifest inventory and draft mathematics classification match. The body is empty and `page_layout: compact-v1` is present. No page defect observed. |
| `qftx-two-group-cochains-examples` (B) | `library/quantum-field-theory-mathematics/qftx-two-group-cochains-examples.md` | Manifest inventory, draft mathematics classification, and prerequisite on the A page match. The body is empty and `page_layout: compact-v1` is present. No page defect observed. |

### Items, read supplier first

| Order | Item | Carrier | Prerequisites | Review |
|---:|---|---|---|---|
| 1 | `def-aqft-two-group-background` | `items/def-aqft-two-group-background.md` | None | Definitions and sign conventions for the finite group cocycle, skeletal categorical 2-group, ordered simplicial cochains, twisted differential, background, gauge transformation, and change of cocycle representative are explicit and internally consistent. No defect observed. |
| 2 | `thm-aqft-two-group-background-consistency` | `items/thm-aqft-two-group-background-consistency.md` | `def-aqft-two-group-background` | Checked flatness, the twisted coboundary calculation, the cocycle identities for the gauge correction and composite, and both inverse calculations against the stated action and associator conventions. The conditional mathematical claim is not presented as a physical anomaly result. No defect observed. |
| 3 | `def-aqft-finite-background-two-groupoid` | `items/def-aqft-finite-background-two-groupoid.md` | `def-aqft-two-group-background`, `thm-aqft-two-group-background-consistency` | The raw-arrow convention, 2-arrows, composition, associator, units, relative version, and stabilizer notation are defined. Coherence is correctly left to the dependent theorem. No defect observed. |
| 4 | `thm-aqft-finite-background-two-groupoid-coherence` | `items/thm-aqft-finite-background-two-groupoid-coherence.md` | `def-aqft-finite-background-two-groupoid`, `thm-aqft-two-group-background-consistency` | Checked well-defined horizontal composition, associator and pentagon calculations, inverses up to 2-isomorphism, relative restriction, and the kernel/image counts for `pi_1` and `pi_2`. No defect observed. |
| 5 | `ex-aqft-two-group-twisted-local-coefficient-background` | `items/ex-aqft-two-group-twisted-local-coefficient-background.md` | `def-aqft-two-group-background` | Checked the six edge labels, triangle flatness, twisted face shift, and tetrahedron equation over `Z_3`. No defect observed. |
| 6 | `ex-aqft-two-group-postnikov-background` | `items/ex-aqft-two-group-postnikov-background.md` | `def-aqft-two-group-background` | Checked normalization and the 3-cocycle identity over `Z_2`, the non-coboundary argument, initial and transformed tetrahedron equations, and transformed edge/face labels. The TikZ tetrahedron has all six increasing-order edges with labels matching the text; the algebraic verification does not rely on the drawing. No defect observed. |

The manifest lists no additional prerequisites for these carriers. The proof-contract records were consulted as navigation/evidence and were not treated as verdicts. The source statements and proofs above were reviewed directly.

## Source review

- Benini, Córdova, and Hsin, [*On 2-Group Global Symmetries and Their Anomalies*](https://arxiv.org/pdf/1803.09336), §2.3, PDF pp. 16–19, especially equations (2.10)–(2.20). The inspected passage gives the twisted cocycle constraint, representative change, and the two background gauge transformations; its equation (2.19) specifies the required coboundary for the 0-form gauge correction.
- Baez and Lauda, [*Higher-Dimensional Algebra V: 2-Groups*](https://arxiv.org/pdf/math/0307200), §8.3, PDF pp. 54–61. The inspected passage identifies the associator with a normalized group 3-cocycle and gives the cochain conditions arising from monoidal functor and 2-morphism coherence. The batch's finite simplicial cochain 2-groupoid is a local construction, not a result claimed verbatim from that source.
- Schäfer-Nameki, [*ICTP Lectures on (Non-)Invertible Generalized Symmetries*](https://arxiv.org/pdf/2305.18296v2), §2.8.1, printed pp. 28–33. The inspected passage describes the Postnikov constraint on background cochains and distinguishes that symmetry data from an anomaly claim.

## Findings and edits

No reportable defect was found in the assigned items or pages. No item or page was edited. Consequently no proof contract or verification record was changed, and no formatter, reflow, or precheck command was run.

No TikZ or tikzcd diagrams occur in the batch other than the incidence diagram in `ex-aqft-two-group-postnikov-background`; that diagram was checked as noted above. The surrounding exposition does not require an additional diagram for its stated calculations.

## Page verdicts

- `qftx-two-group-cochains` (A): no reader defect found.
- `qftx-two-group-cochains-examples` (B): no reader defect found.

## Uneditable defects and blockers

None identified. No blocker remains.

The contract records randomized finite checks for the general consistency theorem. I did not independently rerun those software checks; they were not used as proof evidence. The theorem's local argument and the two finite example calculations were reviewed from their authored text.
