# Neural Networks and Learning Dynamics visual review — lane 08

**Coverage:** 43 of 43 assigned items and 70 of 70 screenshot tiles. I read each assigned title, complete frozen ItemBody, and local HTML. Every screenshot tile was opened individually at original resolution. Per-item source, snapshot, HTML, and tile hashes and dimensions are in [lane-08.json](lane-08.json).

## Confirmed rendering defect

- `def-recurrent-neural-network`, Definition body, snapshot lines 32–50: the source supplies a horizon-2 TikZ unrolling graph, but its literal `\begin{center}`, `\begin{tikzpicture}`, `\node`, and `\draw` commands appear in the local HTML and screenshot. The intended DAG has `h₀` and `x₁` feeding `F₁`, `F₁` feeding `h₁`, `h₁` and `x₂` feeding `F₂`, and `F₂` feeding `h₂`; dashed `θ` edges feed both time-indexed occurrences `F₁` and `F₂`. Repair the local diagram rendering while preserving these labels and edges. Evidence: `screenshots/def-recurrent-neural-network--01.png`.

## Diagrams and clipping

The recurrent-network TikZ is an existing source-authored diagram and is recorded above as a rendering defect, not as a missing diagram. No separate missing-diagram candidate was supported by the assigned source text. No standalone image asset was assigned, and no confirmed clipping defect was observed.

Review was read-only. Item content, publication status, screenshots, and website data were not modified.
