# Quantum Algorithms rendering audit — lane 06

## Coverage

- Reviewed all 72 assigned frozen titles and complete ItemBodies against their snapshots, current source, local HTML, capture receipts, and screenshot tiles. Opened all 110 receipt-listed PNG tiles individually with `tools.view_image` at original resolution.
- Source, snapshot, and HTML hashes match all assignment records; each PNG hash matches its capture receipt. Per-item and per-tile hashes, tile positions, and view attestations are in [lane-06.json](lane-06.json).
- Capture receipts report zero KaTeX errors, zero diagram failures, and zero TikZ diagrams. No standalone clipping was confirmed.

## Confirmed rendering findings

- **Unrendered inline math:** [lem-qa-16-effective-spectral-gap, line 37](../../../items/lem-qa-16-effective-spectral-gap.md:37). The reflection/product definitions and `e^{iφ}` phase are plain prose in the source and display with literal underscores/braces rather than math typesetting. The following bound is properly delimited and rendered. See [original tile](screenshots/lem-qa-16-effective-spectral-gap--01.png).
- **Unrendered inline math:** [thm-qa-35-quantum-fingerprint-message-lower-bound, line 34](../../../items/thm-qa-35-quantum-fingerprint-message-lower-bound.md:34). The statement's `Ω(log n)`, `d×d`, `2^n≤(26d^(3/2))^(d^2)`, `d=2^q`, and `q=Ω(log n)` appear as literal ASCII/caret math; later sections use math delimiters. See [original tile](screenshots/thm-qa-35-quantum-fingerprint-message-lower-bound--01.png).

The lane receipts have no KaTeX errors; these are localized source markup omissions rather than renderer failures. No other genuine LaTeX/TikZ rendering defects or circuit-diagram math errors were confirmed in the opened tiles.

## Diagram review and candidates

No assigned item has an existing rendered TikZ diagram. Two uncertain editorial additions have clear source support:

- **Truncated QFT circuit:** [alg-qa-truncated-binary-qft-circuit, line 35](../../../items/alg-qa-truncated-binary-qft-circuit.md:35) specifies omitting controlled phases with denominator index `s>m`, retaining every Hadamard and final reversal SWAP, with exact recovery when `m≥n`. A small ordered-register circuit could mark each controlled phase by its denominator and distinguish omitted gates from retained gates.
- **Modular-multiplication reversible flow:** [alg-qa-modular-multiplication-circuit, lines 50–62](../../../items/alg-qa-modular-multiplication-circuit.md:50) defines the control/validity behavior and finite circuit construction. A block-level register diagram could show `f_a` computation, the data/target CNOT swaps, `f_{a^{-1}}` uncomputation, clean-work return, and identity cases. The diagram should summarize the flow rather than replace the explicit Boolean DAG.

These are editorial candidates only; the written algorithms remain explicit and no proof relies on a diagram. This review covers local rendering only, not live routes or full mathematical correctness. No source items, application files, or publication statuses were changed.
