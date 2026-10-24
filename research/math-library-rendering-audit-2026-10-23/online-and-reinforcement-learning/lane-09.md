# Online and Reinforcement Learning rendering audit — lane 09

## Coverage

- Reviewed all 26 assigned frozen titles and complete ItemBodies against their snapshots, current source, and local HTML. Opened all 48 assigned PNG tiles individually with `tools.view_image` at original resolution; no collage or downscaling.
- Source and snapshot hashes match all assignment records, source bytes equal snapshots, assigned HTML hashes match, and every tile hash matches its receipt. Per-item and per-tile attestations are in [lane-09.json](lane-09.json).
- Capture receipts report zero KaTeX errors and zero diagram failures, with four rendered TikZ diagrams. One additional TikZ source block is shown literally in the ItemBody instead of rendered.
- No standalone clipping was confirmed. Tile boundaries and surrounding context were checked; the confirmed label collision below is visible within the original standalone tile.

## Confirmed rendering and diagram findings

- **Raw TikZ source in ItemBody:** [cex-rtdp-optimal-relevant-state-convergence-fails, lines 58–73](../../../items/cex-rtdp-optimal-relevant-state-convergence-fails.md:58). The diagram source is emitted as literal TeX rather than a graph. Its preceding prose specifies the intended five-state model, all labeled transitions, costs, and probabilities. See [tile 01](screenshots/cex-rtdp-optimal-relevant-state-convergence-fails--01.png) and [tile 02](screenshots/cex-rtdp-optimal-relevant-state-convergence-fails--02.png). The receipt reports `tikz_count: 0` and no diagram failure, consistent with the absent rendered diagram.
- **Overlapping TikZ edge labels:** [ex-policy-iteration-tie-retention, lines 79–89](../../../items/ex-policy-iteration-tie-retention.md:79). In the rendered one-state/two-action graph, the `choose a` / `choose b` labels overlap the reverse-edge probability labels near the middle, making edge-label associations hard to read. The graph semantics match the example; this is a label-placement defect. See [tile 02](screenshots/ex-policy-iteration-tie-retention--02.png).

## Diagram checks and candidate

- The DAgger graph shows the stated two-state transitions and initial-state marker; the expert and learner policies remain specified in prose, as the caption says. No defect found.
- The one-state linear TD diagram shows its unique state and deterministic zero-reward self-loop. No defect found.
- The undiscounted-return example graph shows the sole action choice and deterministic unit-reward return; the discount parameter is correctly specified in prose. No defect found.
- **Optional alpha-vector figure:** [thm-finite-horizon-pomdp-piecewise-linear-convex-value, lines 46–50 and 98–104](../../../items/thm-finite-horizon-pomdp-piecewise-linear-convex-value.md:46) explicitly develops the upper envelope, maximizing regions, witness beliefs, and exhaustive policy-tree count. An uncertain schematic could show regions `R_alpha` covering `Δ(S)`, a witness belief for a retained vector, and the one-step action/observation continuation construction `P_{h+1}=A×P_h^Ω`. Use no numeric geometry without a supplied finite instance; do not imply polynomial pruning or an infinite-horizon representation. The proof does not rely on a figure.

This review covers assigned local rendering, not live routes or full mathematical correctness. No source items, application files, or publication statuses were changed.
