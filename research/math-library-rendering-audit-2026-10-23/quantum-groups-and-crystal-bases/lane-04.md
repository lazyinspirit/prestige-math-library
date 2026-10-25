# Quantum Groups and Crystal Bases rendering audit — lane 04

Reviewed 21 assigned items and all 54 screenshot tiles at original resolution. Current source, frozen snapshot, local HTML, and screenshot hashes match their manifests. Full titles and ItemBody were checked.

No confirmed rendering defects or diagram defects were found. One optional crystal graph candidate is listed separately. No raw ASCII math, unrendered TeX/KaTeX, literal TikZ, or diagram failure was observed. No production route was inspected.

## Editorial candidate: ex-highest-components-in-a-small-type-a-two-tensor-crystal

- Section: Example; source lines 38–44 and 70
- Candidate: Two-component colored $A_2$ crystal graph
- Rationale: The example enumerates all nine vertices of $B(\lambda_1)\otimes B(\lambda_1)$, names the two highest vertices, and gives all nonzero lowering arrows. A graph would clarify the six-vertex and three-vertex components. This is an optional presentation improvement, not a defect.
- Draw/check: Include all $(j,k)=u_j\otimes u_k$ vertices. Component one: $(1,1)\xrightarrow{1}(2,1)\xrightarrow{1}(2,2)$, $(2,1)\xrightarrow{2}(3,1)\xrightarrow{1}(3,2)$, and $(2,2)\xrightarrow{2}(3,2)\xrightarrow{2}(3,3)$. Component two: $(1,2)\xrightarrow{2}(1,3)\xrightarrow{1}(2,3)$. Mark highest vertices $(1,1)$ of weight $2\lambda_1$ and $(1,2)$ of weight $\lambda_2$. Confirm each of the nine vertices occurs exactly once and raising arrows reverse the lowering arrows; the proof remains independent of the diagram.
- Screenshots: screenshots/ex-highest-components-in-a-small-type-a-two-tensor-crystal--01.png, screenshots/ex-highest-components-in-a-small-type-a-two-tensor-crystal--02.png

All remaining assigned items render their title and complete ItemBody without observed defects. Per-item and per-tile hashes and view attestations are in lane-04.json.
