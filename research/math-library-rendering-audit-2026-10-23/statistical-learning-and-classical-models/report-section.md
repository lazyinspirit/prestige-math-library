## Statistical Learning and Classical Models

Completed visual review of **433 items across 68 pages**, with **661 image tiles**. Findings: 7 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/category-review-receipt.json).

### Confirmed rendering defects

#### statistical-learning-and-classical-models / confirmed 001: `alg-bagged-random-forest`

- Location: **Definition / data-flow diagram**; source lines 45, 54.
- Pages: `ml02-random-forests`.
- Visible defect: The rendered diagram is compressed; node labels overlap around the tree and aggregation labels, making the data-flow labels hard to read.
- Future repair: Increase horizontal spacing or place the stages on separate rows so all four node labels and incoming/outgoing arrows remain distinct.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/screenshots/alg-bagged-random-forest--01.png); [frozen source](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/snapshots/alg-bagged-random-forest.md).

Exact frozen source lines:

```text
45: ```tikz
54: \end{tikzpicture}
```

#### statistical-learning-and-classical-models / confirmed 002: `ex-multiclass-calibration-notions-differ`

- Location: **Example tables**; source lines 27, 33.
- Pages: `calibration-proper-losses-and-surrogate-classification-examples`.
- Visible defect: The Model B and Model C introductory prose appears to the right of/over the preceding display table; the table/prose sequence is crowded and interleaved in the render.
- Future repair: Put each table in its own blank-line-separated display-math block and put the next model introduction in a new paragraph.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/screenshots/ex-multiclass-calibration-notions-differ--01.png); [frozen source](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/snapshots/ex-multiclass-calibration-notions-differ.md).

Exact frozen source lines:

```text
27: For each of three models let $X$ and $Y$ have their full power-set sigma-algebras, let $X$ be uniform on $\{1,2,3\}$, set $G(X=i)=g_i$, and specify the conditional law of $Y$ at $X=i$ by the row $p_i=P(Y=\cdot\mid X=i)$. In Model A take
33: Use the smallest-index rule to break top-class ties. Model A is classwise and top-confidence calibrated but not fully reliable; Model B is top-confidence calibrated but neither classwise calibrated nor fully reliable; Model C is classwise calibrated but neither top-confidence calibrated nor fully reliable. Hence the three calibration notions are pairwise distinct.
```

#### statistical-learning-and-classical-models / confirmed 003: `ex-threshold-median-query-binary-search`

- Location: **Illustration**; source lines 44, 62.
- Pages: `active-querying-version-spaces-and-abstention-examples`.
- Visible defect: At the rendered diagram scale, the central terminal interval label is crossed/crowded by the incoming branch/edge label and is not cleanly readable.
- Future repair: Increase sibling spacing or move edge-response labels away from terminal-node boxes so interval labels remain legible.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/screenshots/ex-threshold-median-query-binary-search--01.png); [frozen source](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/snapshots/ex-threshold-median-query-binary-search.md).

Exact frozen source lines:

```text
44: ```tikz
62: \end{tikzpicture}
```

#### statistical-learning-and-classical-models / confirmed 004: `lem-anm-density-factorization-implies-dsep-conditional-independence`

- Location: **ItemBody TikZ diagram**; source lines 96, 97, 105.
- Pages: `ml02-causal-anm`.
- Visible defect: The frozen preview HTML preserves the TikZ as a <pre><code class="language-tikz"> block; the assigned PNG tile visibly shows raw TikZ commands instead of the intended schematic. Its receipt reports tikz_count: 0 and no diagram failures, so the receipt did not detect this rendering miss.
- Future repair: Use the renderer-supported fenced TikZ delimiter for this diagram, then recapture and inspect the rendered schematic.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/screenshots/lem-anm-density-factorization-implies-dsep-conditional-independence--02.png); [frozen source](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/snapshots/lem-anm-density-factorization-implies-dsep-conditional-independence.md).

Exact frozen source lines:

```text
96: ~~~tikz
97: \begin{tikzpicture}[>=stealth]
105: \end{tikzpicture}
```

#### statistical-learning-and-classical-models / confirmed 005: `ex-random-forest-zero-margin-vote-limit`

- Location: **Example**; source lines 39, 47.
- Pages: `ml02-random-forests-examples`.
- Visible defect: The matching local HTML and both assigned screenshot tiles show a red “diagram failed to render” block containing the raw TikZ source instead of the two trees. The receipt records this diagram failure. The tree labels and left/right split interpretation in the source agree with the stated training points; the independent finite-count verification remains legible.
- Future repair: Rewrite the two trees using a TikZ form supported by the local renderer (for example, separate tree scopes with explicitly anchored roots), then regenerate the matching HTML and inspect every resulting tile.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/screenshots/ex-random-forest-zero-margin-vote-limit--01.png), [tile 02](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/screenshots/ex-random-forest-zero-margin-vote-limit--02.png); [frozen source](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/snapshots/ex-random-forest-zero-margin-vote-limit.md).

Exact frozen source lines:

```text
39: ```tikz
47: \end{tikzpicture}
```

#### statistical-learning-and-classical-models / confirmed 006: `ex-latent-confounding-mimics-anm-direction`

- Location: **Remarks / diagram**; source lines 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88.
- Pages: `ml02-causal-anm-examples`.
- Visible defect: The capture displays the TikZ source commands literally in the rendered ItemBody; neither causal graph appears. The screenshot receipt reports tikz_count 0 despite the source fence, while a neighboring assigned TikZ item renders normally.
- Future repair: Change the TikZ fence to the renderer-supported triple-backtick form used by neighboring items (for example, ```tikz), retaining the existing picture source; recapture before claiming the diagram renders.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/screenshots/ex-latent-confounding-mimics-anm-direction--01.png); [frozen source](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/snapshots/ex-latent-confounding-mimics-anm-direction.md).

Exact frozen source lines:

```text
75: ~~~tikz
76: \begin{tikzpicture}[>=stealth]
77:   \node[draw,circle,dashed] (u) at (0,0) {$U$};
78:   \node[draw,circle] (xa) at (2,1) {$X$};
79:   \node[draw,circle] (ya) at (2,-1) {$Y$};
80:   \draw[->] (u) -- (xa);
81:   \draw[->] (u) -- (ya);
82:   \node at (1,-2) {Model A};
83:   \node[draw,circle] (xb) at (4,0) {$X$};
84:   \node[draw,circle] (yb) at (6,0) {$Y$};
85:   \draw[->] (xb) -- (yb);
86:   \node at (5,-1) {Model B};
87: \end{tikzpicture}
88: ~~~
```

#### statistical-learning-and-classical-models / confirmed 007: `lem-positive-minimal-dags-have-a-conditioned-reversal`

- Location: **Remarks**; source lines 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128.
- Pages: `ml02-causal-anm`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Make the source fence compatible with renderer TikZ recognition, then recapture and confirm the schematic renders. The adjacent prose correctly states that the proof does not rely on the drawing.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/screenshots/lem-positive-minimal-dags-have-a-conditioned-reversal--01.png), [tile 02](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/screenshots/lem-positive-minimal-dags-have-a-conditioned-reversal--02.png), [tile 03](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/screenshots/lem-positive-minimal-dags-have-a-conditioned-reversal--03.png); [frozen source](math-library-rendering-audit-2026-10-23/statistical-learning-and-classical-models/snapshots/lem-positive-minimal-dags-have-a-conditioned-reversal.md).

Exact frozen source lines:

```text
105: ~~~tikz
106: \begin{tikzpicture}[>=stealth]
107:   \node[draw,circle] (c1) at (0,1) {$c\in Z$};
108:   \node[draw,circle] (y1) at (0,0) {$y\in Y$};
109:   \node[draw,circle] (w1) at (0,-1) {$w\in W$};
110:   \node[draw,circle] (l1) at (2,0) {$l$};
111:   \draw[->] (c1) -- (l1);
112:   \draw[->] (y1) -- (l1);
113:   \draw[->] (w1) -- (l1);
114:   \node at (1,-1.8) {$G$};
115: 
116:   \node[draw,circle] (c2) at (4,1) {$c\in Z$};
117:   \node[draw,circle] (d2) at (4,0) {$d\in D$};
118:   \node[draw,circle] (w2) at (4,-1) {$w\in W$};
119:   \node[draw,circle] (l2) at (6,0) {$l$};
120:   \node[draw,circle] (y2) at (8,1) {$y\in Y$};
121:   \node[draw,circle] (e2) at (8,-1) {$e\in E$};
122:   \draw[->] (c2) -- (l2);
123:   \draw[->] (d2) -- (l2);
124:   \draw[->] (l2) -- (y2);
125:   \draw[->] (l2) -- (e2);
126:   \node at (6,-1.8) {$G'$};
127: \end{tikzpicture}
128: ~~~
```

