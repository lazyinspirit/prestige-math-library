# Reader report — batch 4

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: independent reader  
Batch: `4`

## Scope and opened inventory

Reviewed `briefs/reader.md`, the current batch-4 manifest, batch-4 authoring notes, proof contracts, coverage record, and cross-batch dependency record. The authoring notes, contracts, and recorded readiness were treated as navigation and evidence, not as proof acceptance.

Assigned pages opened:

- `library/quantum-field-theory-mathematics/qftx-nonabelian-brst-bv-mathematics.md`
- `library/quantum-field-theory-mathematics/qftx-nonabelian-brst-bv-mathematics-examples.md`

Assigned items opened in supplier-before-consumer order:

1. `items/def-qftx-nonabelian-brst-complex.md`
2. `items/lem-qftx-nonabelian-brst-nilpotence.md`
3. `items/def-qftx-local-brst-cohomology.md`
4. `items/def-qftx-bv-antibracket-master-action.md`
5. `items/lem-qftx-bv-canonical-action-generates-brst-differential.md`
6. `items/lem-qftx-bv-master-equation-brst-nilpotence.md`
7. `items/ex-qftx-su2-brst-nilpotence.md`
8. `items/ex-qftx-su2-bv-ghost-master-equation.md`

For the A-page prerequisite, also opened `library/quantum-field-theory-mathematics/qftx-gauge-geometry.md` and all five items listed on it: `def-qftx-nonabelian-gauge-data`, `def-qftx-principal-connection-form`, `def-qftx-lie-algebra-valued-form-bracket`, `lem-qftx-principal-curvature-cartan-bianchi`, and `def-qftx-associated-covariant-derivative`. The two `tikzcd` diagrams in the curvature and associated-covariant-derivative context items agree with their stated section-change and curvature-covariance identities; their proofs do not rely on the diagrams.

The relevant cited source passages were checked at [Barnich, Brandt, and Henneaux](https://arxiv.org/abs/hep-th/0002245), §§2.2–2.3 and 4.1–4.5; [Gomis, París, and Samuel](https://arxiv.org/abs/hep-th/9412228), §§4.1–4.6 and 5.2; and [Qiu and Zabzine](https://arxiv.org/abs/1105.2680), §§3.1–3.2 and 4.1–4.4. In particular, the source conventions were compared with the items' explicitly stated bracket and ghost signs. The local proofs, rather than an imported classification result, establish the batch's algebraic claims.

## Review results

No reportable mathematical, definitional, citation, statement-format, or diagram defect was found in the assigned items. The local BRST definition fixes the graded coefficient algebra, jet prolongation, and left-derivation convention. The nilpotence proof checks the ghost, gauge-potential, and matter generators, then extends the result to all finite jets and the finite-polynomial algebra. The local-cohomology definition types the horizontal forms and quotient correctly and verifies that its denominator lies in its numerator. The BV definition states parity, ghost-number, derivative, and local-functional boundary conventions; the canonical-action lemma's parity-dependent right-derivative sign agrees with those conventions. The master-equation lemma derives the Jacobi identity relation in both directions with the stated center hypothesis, and its local application uses the stated invariance and boundary conditions. Both SU(2) examples' component and Jacobi calculations are consistent with their suppliers.

All eight item contracts were compared with the current statements, proofs, dependencies, and cited facts. No assigned item depends on a batch-2 item; the A-page's only cross-batch edge is its page prerequisite `qftx-gauge-geometry`. The supplied items state their local Lie-algebra and representation hypotheses directly, and the prerequisite page introduces no conflicting convention for those local definitions.

The assigned pages have YAML frontmatter only, with no page summaries. Their IDs, inventories, library classification, companion relation, and page prerequisite match the current manifest. The B page correctly places its two examples under `examples` and requires its A companion.

One nonblocking evidence inconsistency was observed: the batch-4 authoring notes list `lem-qftx-bv-master-equation-brst-nilpotence` and `ex-qftx-su2-bv-ghost-master-equation` at levels 3 and 4, while their current item/manifest metadata give levels 4 and 5. The current levels match the actual dependency edges; the discrepancy is confined to the out-of-scope notes and does not affect the reviewed claims or carriers.

## Page verdicts

- `qftx-nonabelian-brst-bv-mathematics` (A page): no defect observed in the assigned page metadata, inventory, prerequisite edge, or presentation. This is a reader disposition, not publication or acceptance.
- `qftx-nonabelian-brst-bv-mathematics-examples` (B page): no defect observed in the assigned page metadata, inventory, companion edge, or presentation. This is a reader disposition, not publication or acceptance.

The prerequisite page `qftx-gauge-geometry` was reviewed only as dependency context; this report does not certify that page or its five items as a whole.

## Edits, uneditable findings, and checks

- Edits: none. No confirmed defect within the assigned write scope required repair.
- Uneditable content findings: none.
- Blocker: none.
- No item was changed, so item reflow, precheck, and the post-edit proof-layout command were not applicable.

## Coverage limits

The review opened the direct page prerequisite and each item listed on that page, but did not audit their full transitive mathematical dependency closure; those suppliers are not item-level prerequisites of the batch-4 claims. Source review was limited to relevant passages available from the cited arXiv text views; I did not retrieve or inspect complete PDF files in this review. No claim of full-PDF retrieval, external source-fetch validation, or production acceptance is made.
