# Online and Reinforcement Learning rendering audit — lane 01

## Coverage

- Reviewed all 27 assigned frozen titles and complete ItemBodies against their snapshots, current source, and local HTML. Opened all 45 receipt-listed PNG tiles individually with `tools.view_image` at original resolution.
- Assignment, source, snapshot, HTML, receipt, and PNG hashes match; no item or tile was left unreviewed. Exact per-item and per-tile hashes, receipt positions, and original-resolution attestations are in [lane-01.json](lane-01.json).
- Receipts report zero KaTeX errors and zero diagram failures, and one TikZ diagram. The source and rendered tiles reveal one additional unfenced TikZ block and a label collision in the rendered diagram.
- No standalone clipping was confirmed. Overlap tiles and their adjacent context were checked for the two-tile items; the clipped-looking page edges in individual screenshots are capture boundaries, not content defects.

## Confirmed rendering findings

- **Raw TikZ emitted as text:** [ex-model-accurate-on-behavior-support, lines 35–43](../../../items/ex-model-accurate-on-behavior-support.md:35). The `tikzpicture` block lacks the renderer's ` ```tikz ` fence. Its commands appear literally in [the tile](screenshots/ex-model-accurate-on-behavior-support--01.png), so the described two-model transition/reward diagram is absent. The receipt reports `tikz_count: 0`. Fence the existing block, then verify the graph shows `s --a:1--> g`, `g --d:0--> g`, and `s --b:0 (learned b:1)--> s`.
- **Overlapping transition labels:** [ex-finite-mdp-common-reward-shift, lines 79–82](../../../items/ex-finite-mdp-common-reward-shift.md:79). In the original-resolution lower tile, both “choose a/b” labels overlap their corresponding curved return-edge transition labels. The same diagram appears in the overlapping/context view, and the source positions account for the collision. Move labels apart or abbreviate the return labels while preserving state `s`, action nodes `a,b`, and reward-transition masses `p(s,1|s,a)=1`, `p(s,3|s,b)=1`. The displayed original MDP is consistent with the prose; the shifted rewards are intentionally described in text.

No other literal TeX/KaTeX, ASCII math, or standalone clipping defect was confirmed.

## Diagram review and candidates

- The common-reward-shift diagram encodes the intended one-state/two-action MDP; only its edge-label layout needs repair.
- The behavior-support example's intended graph semantics are explicit in its Remarks, but the raw code prevents visual inspection of a rendered graph.
- **Optional policy-tree witness illustration:** [ex-pomdp-policy-tree-enumeration-grows-exponentially, lines 30–34](../../../items/ex-pomdp-policy-tree-enumeration-grows-exponentially.md:30). For a small `n=2` slice, draw the four hidden strings, clock transitions, matching-bit rewards, and point-mass belief `δ_(y,0)` that uniquely witnesses tree `y` with value 2 while other strings score at most 1. State that witness beliefs need not be reachable from the specified initial belief; do not imply the example proves the general count by drawing alone.
- **Optional estimator comparison:** [alg-trajectory-importance-sampling-ope, lines 36–52](../../../items/alg-trajectory-importance-sampling-ope.md:36). Draw a short trajectory with per-step ratios `ρ_t` and prefix products `W_t`, then align OIS's full-return weight, PDIS's per-time prefix weights, and WIS's normalized full-return weights. Mark that WIS has no finite-sample unbiasedness assertion. The formulas are already explicit, so this is editorial.

This review covers local rendering and diagram semantics only, not full mathematical correctness or live routes. No source items, application files, library pages, or publication statuses were changed.
