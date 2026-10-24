# Statistical Models and Experiments rendering audit — lane 08

## Coverage

- Assignment: `research/math-library-rendering-audit-2026-10-23/statistical-models-and-experiments/assignment-08.json`
- Reviewed 52/52 frozen titles and full ItemBody texts.
- Opened 81/81 receipt-listed screenshot tiles separately through `tools.view_image` at original resolution. Per-item and per-tile SHA-256 values and comparisons are in [lane-08.json](lane-08.json).
- All 52 frozen item hashes, live item hashes, and matching HTML hashes agree with the assignment. All 81 tile hashes match their screenshot receipts. No lane metadata drift.
- All 52 manifests report zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. No assigned ItemBody contains TikZ/tikzcd. No title typography finding or open Scratch section was found.

## Rendering findings

No confirmed rendering defects. All visible inline/display math and source links rendered legibly in the local captured HTML. No clipping defect was confirmed; portions cut by tile boundaries continued in the following independently reviewed tile.

## Potentially useful missing diagrams

1. [ex-frontdoor-adjustment-binary-model](../../../items/ex-frontdoor-adjustment-binary-model.md:39): the binary SCM states the four directed edges `U→A`, `U→Y`, `A→M`, and `M→Y`, then identifies the directed mediation path and two path-blocking conditions (lines 39–46). A compact causal DAG could show `A→M→Y`, the common cause `U`, collider `Y` on `A←U→Y←M`, and blocking at `A` for `M←A←U→Y`. If drawing `G_{\underline A}`, label the mutilated graph and remove arrows out of `A`. This is a source-supported optional candidate, not a confirmed omission; the prose is already explicit.

## Existing diagram checks and limits

There are no lane-08 TikZ/tikzcd diagrams to validate. No live website or external source was used. No item, app, or publication status was changed. Review was limited to this assignment and is not a proof audit.
