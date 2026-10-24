# Online and Reinforcement Learning visual audit — lane 04

## Scope and coverage

Reviewed all 27 assigned frozen titles and complete ItemBodies against their local HTML previews. Individually opened all 46 receipt-listed PNG tiles at original resolution. The per-item ledger in [lane-04.json](lane-04.json) records source, snapshot, and HTML hashes, tile paths and hashes, dimensions, and per-tile view attestations. All source and HTML hashes match the frozen assignment.

No confirmed raw-math, KaTeX, reference-title, Scratch, or clipping defects were found. Multi-tile items were reviewed tile by tile and at the overlaps to distinguish tile seams from clipping. Assigned HTML contains no standalone image elements, so image clipping was not applicable. The audit used local frozen sources and previews only.

## Diagram review

The two authored TikZ diagrams were checked against their source claims:

- `ex-surrogate-loss-fails-task-cost-control`, frozen source lines 29–38: the one-state model and its two deterministic self-loops are represented correctly; the action/cost labels are present. The diagram is small in the tile, though no label or edge appears clipped. Its display scale can be checked at normal page width if retained as a teaching aid. Evidence: `screenshots/ex-surrogate-loss-fails-task-cost-control--01.png`.
- `thm-bairds-counterexample-off-policy-td-diverges`, frozen source lines 91–115: the six upper states, lower state, dashed routing symbol, uniform endpoint interpretation, solid-action transitions, and policy probabilities match the accompanying prose. Repeated “dashed” labels cluster over the upper transitions at the displayed scale; moving or reducing those labels may improve legibility. The diagram does not appear to confuse the routing symbol with a state. Evidence: `screenshots/thm-bairds-counterexample-off-policy-td-diverges--03.png`.

These are diagram layout checks, not confirmed mathematical or rendering findings. No item has a confirmed defect.

## Optional diagram candidate

`alg-dagger`, frozen source lines 41–49, could use an optional round-by-round data-flow diagram. Show the learner and expert-use coin forming the rollout policy; the rollout through the MDP; expert labeling of visited states; aggregation into the multiset; round loss calculation; and cumulative follow-the-leader update for the next policy. Distinguish the recorded expert label from the executed action, which is expert-selected only when the mixture coin selects it. The body states all of this already; a diagram would be an editorial summary, not a proof. Evidence: `screenshots/alg-dagger--01.png`.

No repository source, application, production, or status files were changed.
