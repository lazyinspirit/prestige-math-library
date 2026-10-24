# Online and Reinforcement Learning visual audit — lane 03

## Scope and coverage

Audited all 27 assigned frozen titles and complete ItemBodies against the local snapshot and HTML. Individually opened all 50 receipt-listed PNG tiles at original resolution, including overlap and end tiles. Assignment source, snapshots, rendered HTML, receipt-listed tile hashes, and rendered math/diagram counts match the captured evidence. No confirmed LaTeX, TikZ, clipping, or diagram-semantic defects were found.

The item-by-item coverage, section lists, receipt paths, tile hashes, capture offsets, and view attestations are in [lane-03.json](lane-03.json). A few images in multi-image tool output initially appeared to lose leading characters; reopening the original tile individually showed the characters intact, so these were viewer presentation artifacts.

## Diagram review

- **Existing diagram checked:** `alg-pomdp-witness-backup`, source lines 53–60. The tree has root action $a_0$, observation-labelled branches $x,y$, and continuation actions $a_x,a_y$. This matches the accompanying explanation; the edges denote observations. The drawing is illustrative and the algorithm is specified algebraically.
- **Optional editorial candidate:** `alg-constrained-policy-optimization`, lines 49–55. A compact flowchart could connect the positive-definite-Hessian check, feasible quadratic program, single-cost recovery branch, multi-cost no-step branch, and backtracking acceptance test. Keep “sample estimates” distinct from the exact-policy theorem guarantees.
- **Optional editorial candidate:** `alg-extended-value-iteration`, lines 25–28. A row-transfer sketch could show probability mass moving from a lowest-value state with available mass to a highest-value state with available capacity, stopping at the radius budget or when the endpoint values meet. A separate selection edge can show choosing the first action attaining the maximum backup value.
- **Optional editorial candidate:** `thm-ucrl2-regret-lower-bound`, lines 64–68 and 72. A construction diagram could distinguish the large-diameter branch’s bad-state routing tree, paired good states, and useful actions with transition probability $p$ (one distinguished pair uses $p+e$). Keep the small-diameter branch separate if shown; it uses direct state-to-state actions and perturbed self-loop rewards.

These are uncertain editorial aids, not missing mathematical hypotheses or defects. The remaining assigned bodies either define their maps and relations compactly in equations/prose or do not provide a comparably strong source-backed diagram opportunity.

No source or production files were changed. Only this lane report and its JSON ledger were written.
