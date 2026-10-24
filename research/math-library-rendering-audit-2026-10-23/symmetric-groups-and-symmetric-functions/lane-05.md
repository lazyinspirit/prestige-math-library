# Symmetric Groups and Symmetric Functions — lane 05

## Scope and result

Reviewed all 32 assigned titles and complete ItemBodies in the frozen snapshots and matching local HTML, plus all 74 receipt-listed PNG tiles opened individually with `tools.view_image` at original resolution. No live routes or network were used. No item, application, or status files were changed.

All assignment source hashes, snapshot hashes, HTML hashes, and receipt-listed PNG hashes match. The capture receipts report zero KaTeX errors, zero existing TikZ diagrams, and zero diagram failures. No clipping was confirmed in the assigned captures. No rendering defect was found.

## Diagram candidates

These are focused diagram opportunities, not content or status defects.

### def-partition-young-diagram-and-conjugate-partition

- Source lines: 40-64.
- Kind: missing-diagram-high-likelihood.
- Rationale: The definition introduces Young diagrams as the node sets [λ] and conjugation as the coordinate transpose; a small diagram pair makes the row/column convention and conjugate shape immediately legible.
- Concrete map or relation: Use λ=(3,1), λ′=(2,1,1); draw nodes in English orientation and label transpose (i,j)↦(j,i), with row lengths (3,1) becoming column heights (2,1,1).

### def-row-insertion-and-bumping-route

- Source lines: 41-46, 67-74.
- Kind: missing-diagram-high-likelihood.
- Rationale: The definition names the bumping route and new box; their evolving positions are inherently spatial and are difficult to reconstruct from the procedural prose alone.
- Concrete map or relation: Illustrate T with rows [1,3,5] / [2,4], insert x=2.5, bump 3 from row 1 column 2, then 4 from row 2 column 2, and append 4 in row 3 column 1; route (2,2,1), new box (3,1), bumped values 2.5<3<4.

### thm-e-quotient-controls-hooks-divisible-by-e

- Source lines: 32-40; proof lines 63-67.
- Kind: missing-diagram-high-likelihood.
- Rationale: The main assertion is an explicit bijection between hooks represented by same-runner bead-gap pairs and quotient hooks; the abacus rescaling is the core mathematical map and benefits from a compact runner diagram.
- Concrete map or relation: For runner i, show b=b′e+i and g=g′e+i mapping to quotient pair (b′,g′); label |H|=b−g=e(b′−g′)=e|f(H)| and Q_e(λ\H)=Q_e(λ)\f(H). Keep the diagram explanatory; proof remains textual.

## Coverage and attestations

- Items: 32/32 reviewed.
- PNG tiles: 74/74 individually opened at original resolution; all observed SHA256 values match their capture receipts.
- Source/snapshot/HTML hash mismatches: none. KaTeX errors: 0. Existing diagram failures: 0.
- Item status was read as `published` for all assigned records and left unchanged.

Per-item titles, expected and observed hashes, receipt metrics, and tile-level open attestations are recorded in `lane-05.json`.

Read-only audit preparation: `CLAUDE.md` and `README.md` read fully; `SCHEMA.md` and `WORKFLOW.md` read for repository and rendering-audit context.