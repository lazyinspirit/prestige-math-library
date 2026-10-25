# Probability visual audit — lane 07

## Scope and coverage

Reviewed all 68 assigned items and all 110 screenshot tiles. Every tile was opened individually with `tools.view_image` at original resolution. The per-item and per-tile hashes, checked sections, findings, diagram candidates, and limitations are recorded in [lane-07.json](lane-07.json). Two confirmed raw ASCII formula findings were identified. No TikZ source or rendered diagram failures were present.

## Confirmed findings

- **lem-characteristic-function-of-a-multivariate-normal-law**, Facts & Assumptions line 34: the scalar-normal characteristic function `exp(ims-sigma^2s^2/2)` is displayed as baseline ASCII rather than typeset math. See `screenshots/lem-characteristic-function-of-a-multivariate-normal-law--01.png`.
- **thm-lindeberg-feller-central-limit-theorem-sufficiency**, Facts & Assumptions lines 34 and 42: `min(|u|^3/3,4u^2)` and `exp(-t^2/2)` appear as baseline ASCII, unlike neighboring rendered expressions. See both item screenshot tiles.

## Diagram review

No existing TikZ diagrams occurred in the assigned items, so there were no existing diagram maps, orientations, indices, or signs to check. Three optional schematic candidates are recorded in the JSON ledger: interval overlap and covariance, the Brownian bridge path transformation, and the row-wise uniform partition in a random-mapping representation. Each entry gives exact source lines, proposed diagram content, required mathematical checks, and its limits.

## Rendering and clipping

No confirmed clipping defect was identified. Multi-tile bodies continue across overlapping vertical crops; those boundaries were not treated as content loss. Text approaching the right content edge was not called overflow clipping without horizontal-scroll or DOM confirmation. KaTeX capture receipts report no parser errors.

## Limitations

These were local Chromium ItemBody previews, not HTTP/live website routes. The review assessed rendering and visible diagram opportunities, not a complete mathematical audit. No item, application, build, or publication files were modified.
