# Neural Networks and Learning Dynamics rendering audit — lane 04

## Coverage

- Reviewed all 44 assigned frozen titles and complete ItemBodies against their snapshots, current source, and local HTML. Opened all 67 assigned PNG tiles individually with `tools.view_image` at original resolution.
- Source, snapshot, and HTML hashes match all assignment records; each PNG hash matches its capture receipt. Exact per-item and per-tile hashes and capture positions are in [lane-04.json](lane-04.json).
- Capture receipts report zero KaTeX errors and zero diagram failures. They report two rendered TikZ diagrams. One additional source TikZ block is visibly emitted as raw text, described below.
- No Scratch section, reference-title leak, or standalone clipping was confirmed. Reference links rendering as separate blocks and uppercase technique banners are expected.

## Confirmed rendering finding

- **Raw TikZ source in ItemBody:** [lem-relu-folding-block, lines 44–54](../../../items/lem-relu-folding-block.md:44). The illustrative-plot code appears literally in the local rendering, so the fold graph is absent. The intended plot is specified just above at line 42, with vertices `(0,0)`, `(1/7,1)`, `(3/7,0)`, `(5/7,1)`, `(1,0)` and axes `x` and `F_3(x)`. See [tile](screenshots/lem-relu-folding-block--01.png). The capture receipt records `tikz_count: 0` and no diagram failure, but the rendered tile visibly contains the unprocessed commands.

No other literal TeX/KaTeX, ASCII math, caret, or underscore display issue was confirmed in the assigned ItemBodies. Compact model notation such as `W2` and `S4` is ordinary text in these titles/prose and is treated as optional typography.

## Diagram review and candidate

- The existing backpropagation unrolling diagram shows the ordered state chain and shared parameter `θ` feeding each transition and the loss, as described in the item. The reverse cotangent direction is described in prose rather than drawn.
- The existing graph example diagram matches the stated six-cycle and two disjoint triangles, including the vertex labels and absence of edges between the triangles. The proof does not rely on the drawing.
- The ReLU folding plot could not be visually checked because its TikZ source is printed as text; its intended coordinates and labels are captured in the finding.
- **Optional FFT diagram:** [alg-radix-two-fft, line 24](../../../items/alg-radix-two-fft.md:24) defines an exact even/odd recursive split and paired twiddle-factor recombination. A small `q=2` butterfly could show inputs `a_0,a_2` and `a_1,a_3`, the `E_k` and `O_k` transforms, and outputs `E_k+ω^k O_k` and `E_k−ω^k O_k` at indices `k` and `k+M/2`. If inverse behavior is shown, label conjugate-root use and division by `M`. This is an uncertain editorial addition; the written algorithm is already clear and no proof depends on a diagram.

This review covers local rendering only, not live routes or full mathematical correctness. No source items, application files, or publication statuses were changed.
