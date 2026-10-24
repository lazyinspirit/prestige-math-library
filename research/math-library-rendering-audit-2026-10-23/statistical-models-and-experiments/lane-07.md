# Statistical Models and Experiments — lane 07 rendering audit

## Coverage and integrity

Reviewed all 52 assigned frozen source snapshots and matching local HTML files. Hashes match the assignment for all snapshots and HTML; all 76 screenshot tiles match their individual screenshot receipts. Every receipt-listed tile was opened individually with `tools.view_image` at original resolution. No collage or downscaled image was used. Full per-item source, HTML, and tile coverage is recorded in `lane-07.json`.

The screenshot receipts report no KaTeX errors or diagram failures. No assigned body contains a TikZ, tikzcd, or Mermaid block, so there were no existing diagrams to validate. The mathematical display in the opened tiles was generally legible.

## Findings

No confirmed rendering defects.

A focused standalone recheck rejected the three initial left-edge clipping observations. Each exact PNG was reopened alone at original resolution, and its matching HTML text was checked: the opening “Fix” in `def-controlled-and-natural-mediation-effects`, “Let” in `ex-same-observed-law-different-intervention-law`, and “Front-door” in `thm-frontdoor-adjustment-sufficiency` are all present. They were composite-view artifacts. The original 76-tile view coverage is retained; rejected observations are listed in the JSON.

## High-value diagram candidates

These are candidates, not mandatory additions to every item. Their source lines contain explicit graph structures or graph transformations that a small diagram would clarify.

- **`ex-same-observed-law-different-intervention-law`, lines 37–40:** paired causal DAGs: `U → A → Y` versus `U → A` and `U → Y`. Showing both beside the shared observed law and contrasting `do(A=a)` outcomes would expose the counterexample's central relation.
- **`lem-d-separation-ancestral-moral-separation`, lines 34–36, 42–50, 58–60:** graph transformation schematic: take `H = An_G(X ∪ Y ∪ C)`, moralize common parents (`u → w ← v` becomes `u—v`), delete `C`, and compare path existence from `X` to `Y`.
- **`thm-frontdoor-adjustment-sufficiency`, lines 51–64:** causal graph schematic showing the full-DAG mediation condition and the two stated mutilated-graph separation checks (`G_underA` and `G_underM`). Because the statement specifies graph properties rather than one unique edge set, any diagram should encode those properties without implying additional edges.

## Files

- Machine-readable coverage and view attestations: `lane-07.json`
