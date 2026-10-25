## Neural Networks and Learning Dynamics

Completed visual review of **437 items across 56 pages**, with **761 image tiles**. Findings: 6 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/category-review-receipt.json).

### Confirmed rendering defects

#### neural-networks-and-learning-dynamics / confirmed 001: `def-du-overparameterized-network-architectures-and-gram-kernels`

- Location: **Definition — residual recurrence diagram**; source lines 77, 79, 89.
- Pages: `overparameterized-training-and-interpolation`.
- Visible defect: The local HTML displays a red “diagram failed to render” box with the literal TikZ source instead of the stated generic residual-layer diagram.
- Future repair: Repair the TikZ rendering issue and verify the rendered diagram preserves the identity skip from x^(h-1) to the sum node, the nonlinear branch c_res/(H sqrt(m)) sigma(W^(h)x^(h-1)), and output x^(h). The diagram is illustrative and must not be used as proof.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/screenshots/def-du-overparameterized-network-architectures-and-gram-kernels--02.png); [frozen source](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/snapshots/def-du-overparameterized-network-architectures-and-gram-kernels.md).

Exact frozen source lines:

```text
77: The residual recurrence has one identity contribution from $x^{(h-1)}$ and one nonlinear contribution at every layer $2\le h\le H$; the arrows below depict that convention for one generic layer and do not enter any proof.
79: ```tikz
89: \end{tikzpicture}
```

#### neural-networks-and-learning-dynamics / confirmed 002: `lem-relu-folding-block`

- Location: **Illustrative plot**; source lines 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54.
- Pages: `relu-approximation-rates-and-depth-expressivity`.
- Visible defect: The local HTML and tile print the literal TikZ source as text. The standalone fold chart is not rendered; its TeX commands appear in the ItemBody.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/screenshots/lem-relu-folding-block--01.png), [tile 02](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/screenshots/lem-relu-folding-block--02.png); [frozen source](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/snapshots/lem-relu-folding-block.md).

Exact frozen source lines:

```text
44: \begin{tikzpicture}[x=5cm,y=2cm]
45:   \draw[->] (-0.04,0) -- (1.08,0) node[right] {$x$};
46:   \draw[->] (0,-0.08) -- (0,1.18) node[above] {$F_3(x)$};
47:   \draw[thick,blue] (0,0) -- (1/7,1) -- (3/7,0) -- (5/7,1) -- (1,0);
48:   \fill (1/7,1) circle (1.2pt) node[above right] {$1/7$};
49:   \fill (3/7,0) circle (1.2pt) node[below] {$3/7$};
50:   \fill (5/7,1) circle (1.2pt) node[above right] {$5/7$};
51:   \node[below left] at (0,0) {$0$};
52:   \node[below right] at (1,0) {$1$};
53:   \node[left] at (0,1) {$1$};
54: \end{tikzpicture}
```

#### neural-networks-and-learning-dynamics / confirmed 003: `lem-wasserstein-gluing`

- Location: **Diagram**; source lines 74, 75, 76, 77, 78, 79, 80.
- Pages: `wasserstein-metric-and-continuity-equation`.
- Visible defect: The preview displays the TikZ source literally between the diagram explanation and Facts & Assumptions; no diagram is rendered.
- Future repair: Wrap the existing TikZ source in the repository-supported fenced tikz block and confirm the diagram renders with the stated X,Y,Z laws and pushforward labels.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/screenshots/lem-wasserstein-gluing--01.png); [frozen source](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/snapshots/lem-wasserstein-gluing.md).

Exact frozen source lines:

```text
74: \begin{tikzpicture}[>=stealth]
75:   \node (alpha) at (0,0) {$\alpha$ on $X\times Y$};
76:   \node (gamma) at (3.5,0) {$\gamma$ on $X\times Y\times Z$};
77:   \node (beta) at (7,0) {$\beta$ on $Y\times Z$};
78:   \draw[->] (gamma) -- node[above] {$(x,y)_\#$} (alpha);
79:   \draw[->] (gamma) -- node[above] {$(y,z)_\#$} (beta);
80: \end{tikzpicture}
```

#### neural-networks-and-learning-dynamics / confirmed 004: `def-neural-operator`

- Location: **Diagram**; source lines 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59.
- Pages: `neural-operators-and-physics-informed-learning`.
- Visible defect: In the preview, the five nodes and labels are compressed into an overlapping row; labels collide and the arrows/boxes are difficult to distinguish.
- Future repair: Increase horizontal spacing and/or shorten/reflow the node labels so each of the five boxes and four composition arrows is visually distinct.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/screenshots/def-neural-operator--01.png); [frozen source](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/snapshots/def-neural-operator.md).

Exact frozen source lines:

```text
48: ```tikz
49: \begin{tikzpicture}[>=stealth,node distance=2.7cm]
50:   \node[draw,rounded corners,minimum width=2cm,align=center] (a) {$a\in A$};
51:   \node[draw,rounded corners,minimum width=2cm,align=center,right of=a] (p) {$P$ pointwise lift};
52:   \node[draw,rounded corners,minimum width=2cm,align=center,right of=p] (k) {$\sigma_t,\mathcal K_t$\ integral layers};
53:   \node[draw,rounded corners,minimum width=2cm,align=center,right of=k] (q) {$Q$ pointwise projection};
54:   \node[draw,rounded corners,minimum width=2cm,align=center,right of=q] (g) {$G(a)\in U$};
55:   \draw[->] (a) -- (p);
56:   \draw[->] (p) -- (k);
57:   \draw[->] (k) -- (q);
58:   \draw[->] (q) -- (g);
59: \end{tikzpicture}
```

#### neural-networks-and-learning-dynamics / confirmed 005: `def-recurrent-neural-network`

- Location: **Definition body**; source lines 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50.
- Pages: `recurrent-and-state-space-networks`.
- Visible defect: The definition explains a horizon-2 unrolling and supplies a TikZ graph, but the local HTML and screenshot display the literal \begin{center}, \begin{tikzpicture}, \node, and \draw source instead of a diagram. The intended DAG has h₀ and x₁ feeding F₁, F₁ feeding h₁, h₁ and x₂ feeding F₂, F₂ feeding h₂, and dashed θ edges to both F₁ and F₂. The figure is therefore absent from the visible item.
- Future repair: Render the source-authored TikZ graph (or provide an equivalent supported diagram rendering) in the local item view. Preserve the shared parameter θ, time-indexed F₁/F₂ occurrences, solid dependency edges, and dashed parameter edges.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/screenshots/def-recurrent-neural-network--01.png); [frozen source](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/snapshots/def-recurrent-neural-network.md).

Exact frozen source lines:

```text
32: \begin{center}
33: \begin{tikzpicture}[>=stealth, every node/.style={draw, rounded corners, inner sep=4pt}]
34:   \node (h0) at (0,0) {$h_0$};
35:   \node (x1) at (0,-1.1) {$x_1$};
36:   \node (f1) at (2,-0.55) {$F_1$};
37:   \node (h1) at (4,-0.55) {$h_1$};
38:   \node (x2) at (4,-1.65) {$x_2$};
39:   \node (f2) at (6,-1.1) {$F_2$};
40:   \node (h2) at (8,-1.1) {$h_2$};
41:   \node (theta) at (4,1) {$\theta$};
42:   \draw[->] (h0) -- (f1);
43:   \draw[->] (x1) -- (f1);
44:   \draw[->] (f1) -- (h1);
45:   \draw[->] (h1) -- (f2);
46:   \draw[->] (x2) -- (f2);
47:   \draw[->] (f2) -- (h2);
48:   \draw[->, dashed] (theta) -- (f1);
49:   \draw[->, dashed] (theta) -- (f2);
50: \end{tikzpicture}
```

#### neural-networks-and-learning-dynamics / confirmed 006: `thm-isotropic-ridgeless-risk-across-interpolation-threshold`

- Location: **Statement**; source lines 45.
- Pages: `minimum-norm-interpolation-and-double-descent`.
- Visible defect: In the standalone first tile the tall cases expression is rendered within the same paragraph as the following sentence, “This result gives no limit assertion…”. The sentence starts to the right of the cases array and competes for the same horizontal space, making the statement crowded and difficult to read. The formula itself is typeset; this is a layout defect.
- Future repair: Put the cases formula in its own display block (or move the following caveat to a separate paragraph) so prose cannot flow beside the multi-line expression.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/screenshots/thm-isotropic-ridgeless-risk-across-interpolation-threshold--01.png); [frozen source](math-library-rendering-audit-2026-10-23/neural-networks-and-learning-dynamics/snapshots/thm-isotropic-ridgeless-risk-across-interpolation-threshold.md).

Exact frozen source lines:

```text
45: $$\mathcal R_n\longrightarrow \begin{cases} \displaystyle\frac{\sigma^2\gamma}{1-\gamma},&0<\gamma<1,\\[5pt] \displaystyle r^2\left(1-\frac1\gamma\right)+\frac{\sigma^2}{\gamma-1},&\gamma>1. \end{cases}$$
```

