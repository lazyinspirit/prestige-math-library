## Combinatorics

Completed visual review of **1414 items across 104 pages**, with **1820 image tiles**. Findings: 24 confirmed, 5 uncertain. Evidence: [manifest](math-library-rendering-audit-2026-10-23/combinatorics/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/combinatorics/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/combinatorics/category-review-receipt.json).

### Confirmed rendering defects

#### combinatorics / confirmed 001: `cex-substituting-x-i-equals-x-power-i-loses-colour-profile-information`

- Location: **Item body**; source lines 4.
- Pages: `counting-up-to-symmetry-burnside-and-polya-examples`.
- Visible defect: The substitution x_i=x^i can erase colour-profile information
- Future repair: Put x_i=x^i in math delimiters in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/cex-substituting-x-i-equals-x-power-i-loses-colour-profile-information--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/cex-substituting-x-i-equals-x-power-i-loses-colour-profile-information.md).

Exact frozen source lines:

```text
4: title: "The substitution x_i=x^i can erase colour-profile information"
```

#### combinatorics / confirmed 002: `thm-cographs-are-exactly-the-p-four-free-graphs`

- Location: **Proof**; source lines 64.
- Pages: `cographs-perfect-patterns-and-pure-pairs`.
- Visible defect: The uppercase monospace technique banner displays the dollar delimiters and P_4 notation literally.
- Future repair: Use math-free wording such as “induction on the order of a P4-free graph” in the technique label.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/thm-cographs-are-exactly-the-p-four-free-graphs--02.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/thm-cographs-are-exactly-the-p-four-free-graphs.md).

Exact frozen source lines:

```text
64: **Proof technique:** induction on the order of a $P_4$-free graph.
```

#### combinatorics / confirmed 003: `lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem`

- Location: **Proof**; source lines 56.
- Pages: `property-star-and-comb-outcomes`.
- Visible defect: The uppercase monospace technique banner displays literal dollar-delimited TeX, including xi=c^10, G, and d.
- Future repair: Use math-free wording in the technique label, for example “apply Rödl at the fixed scale xi, then transfer the outcomes back to G by choosing d large enough”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem.md).

Exact frozen source lines:

```text
56: **Proof technique:** apply Rödl at the fixed scale $\xi=c^{10}$, then transfer each outcome of the constant-scale theorem back to $G$ by choosing $d$ large enough.
```

#### combinatorics / confirmed 004: `thm-the-bird-graph-has-the-erdos-hajnal-property`

- Location: **Proof**; source lines 58.
- Pages: `erdos-hajnal-for-the-e-graph-and-bird`.
- Visible defect: TECHNIQUE · DIRECT APPLICATION OF THE PUBLISHED REDUCTION TO THE SINGLETON FAMILY \${\MATHRM{BIRD}\}$, THEN UNWINDING THE DEFINITION OF THE ERDŐS-HAJNAL CONSTANT
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/research/math-library-rendering-audit-2026-10-23/combinatorics/screenshots/thm-the-bird-graph-has-the-erdos-hajnal-property--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/thm-the-bird-graph-has-the-erdos-hajnal-property.md).

Exact frozen source lines:

```text
58: **Proof technique:** direct application of the published reduction to the singleton family $\{\mathrm{Bird}\}$, then unwinding the definition of the Erdős-Hajnal constant.
```

#### combinatorics / confirmed 005: `thm-substituting-perfect-graphs-preserves-perfection`

- Location: **Proof**; source lines 68.
- Pages: `bull-free-graphs-and-the-erdos-hajnal-property`.
- Visible defect: The text `## Source notes` is appended visibly to the rendered proof conclusion; the following source note paragraph is also part of the rendered ItemBody.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/combinatorics/research/math-library-rendering-audit-2026-10-23/combinatorics/screenshots/thm-substituting-perfect-graphs-preserves-perfection--02.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/thm-substituting-perfect-graphs-preserves-perfection.md).

Exact frozen source lines:

```text
68: 4.1 Since $W$ was arbitrary, every induced subgraph of $G$ has $\chi=\omega$. Therefore $G$ is perfect. [L1, step 1.1, step 3.1] ∎ ## Source notes
```

#### combinatorics / confirmed 006: `ex-complementary-forbidden-bases`

- Location: **Remarks**; source lines 56, 58, 60.
- Pages: `induced-subgraphs-and-hereditary-graph-classes-examples`.
- Visible defect: The screenshot prints the raw TikZ source as plain text in Remarks rather than showing the complementary forbidden-basis diagram.
- Future repair: Move \begin{tikzpicture} to a new line after the tikz fence opener and retain the two graph panels and complement arrow.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/ex-complementary-forbidden-bases--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/ex-complementary-forbidden-bases.md).

Exact frozen source lines:

```text
56: ```tikz \begin{tikzpicture}[ vertex/.style={draw,circle,fill=white,minimum size=8mm,inner sep=1pt}, edge/.style={draw=blue!70!black,line width=1.2pt}, caption/.style={font=\small,align=center} ] \node[vertex] (a1) at (0,0) {}; \node[vertex] (a2) at (1.5,0) {}; \node[caption] at (.75,-.7) {$\overline K_2\in\mathcal B(\mathcal K)$};
58: \draw[<->,line width=.9pt] (2.05,0)--node[above,font=\scriptsize] {complement} (3.55,0);
60: \node[vertex] (b1) at (4.1,0) {}; \node[vertex] (b2) at (5.6,0) {}; \draw[edge] (b1)--(b2); \node[caption] at (4.85,-.7) {$K_2\in\mathcal B(\mathcal E)$}; \end{tikzpicture} ```
```

#### combinatorics / confirmed 007: `ex-durfee-square-decomposition-of-five-three-three-two-one`

- Location: **Example**; source lines 34, 37, 41, 45.
- Pages: `integer-partitions-and-the-twelvefold-way-examples`.
- Visible defect: The text explains the square-and-arms decomposition by referring to cells on the right and below, while the screenshot contains only prose and formulas.
- Future repair: Add a Ferrers/Young diagram with the 3×3 Durfee square distinguished, the right-hand α=(2) cells marked, and the lower β=(2,1) cells marked.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/ex-durfee-square-decomposition-of-five-three-three-two-one--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/ex-durfee-square-decomposition-of-five-three-three-two-one.md).

Exact frozen source lines:

```text
34: the Durfee length is $3$, so the upper-left $3 \times 3$ square is the Durfee
37: The cells to the right of that square form the partition
41: and the cells below it form the partition
45: Thus $\lambda$ is rebuilt from the $3 \times 3$ square together with one
```

#### combinatorics / confirmed 008: `cex-c-four-and-v-four-can-share-a-nonfaithful-cycle-index`

- Location: **Title**; source lines 4.
- Pages: `counting-up-to-symmetry-burnside-and-polya-examples`.
- Visible defect: The group subscripts in the rendered title are not typeset as mathematical subscripts.
- Future repair: Wrap the group notation in math delimiters, for example `$C_4$` and `$V_4$`, in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/cex-c-four-and-v-four-can-share-a-nonfaithful-cycle-index--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/cex-c-four-and-v-four-can-share-a-nonfaithful-cycle-index.md).

Exact frozen source lines:

```text
4: title: "C_4 and V_4 can share the same cycle index through nonfaithful actions"
```

#### combinatorics / confirmed 009: `ex-edge-set-orbits-on-four-vertices-by-polya`

- Location: **Title**; source lines 4.
- Pages: `counting-up-to-symmetry-burnside-and-polya-examples`.
- Visible defect: The symmetric-group subscript in the rendered title is not typeset as a mathematical subscript.
- Future repair: Wrap the group notation in math delimiters, for example `$S_4$`, in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/ex-edge-set-orbits-on-four-vertices-by-polya--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/ex-edge-set-orbits-on-four-vertices-by-polya.md).

Exact frozen source lines:

```text
4: title: "There are 11 S_4-orbits of edge-sets on the pairs of [4]"
```

#### combinatorics / confirmed 010: `thm-cycle-index-of-alternating-group`

- Location: **Title**; source lines 4.
- Pages: `counting-up-to-symmetry-burnside-and-polya`.
- Visible defect: The alternating-group subscript in the rendered title is not typeset as a mathematical subscript.
- Future repair: Wrap the group notation in math delimiters, for example `$A_n$`, in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/thm-cycle-index-of-alternating-group--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/thm-cycle-index-of-alternating-group.md).

Exact frozen source lines:

```text
4: title: "The cycle index of A_n is the parity-filtered symmetric-group sum"
```

#### combinatorics / confirmed 011: `cex-c6-and-two-triangles-share-a-degree-sequence`

- Location: **Remarks**; source lines 50, 52.
- Pages: `graphs-walks-and-connectivity-examples`.
- Visible defect: The Remarks section displays raw TikZ source text for the two-triangle graph instead of a rendered diagram. The title, statement, and proof render normally.
- Future repair: Reformat the diagram as a fenced TikZ block with the opening fence, TikZ source, and closing fence on separate lines; rerender and inspect the Remarks section.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/cex-c6-and-two-triangles-share-a-degree-sequence--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/cex-c6-and-two-triangles-share-a-degree-sequence.md).

Exact frozen source lines:

```text
50: ```tikz \begin{tikzpicture}[ vertex/.style={draw,circle,fill=white,minimum size=6.5mm,inner sep=1pt}, edge/.style={draw=blue!70!black,line width=1.2pt}, caption/.style={font=\small,align=center} ] % C_6. \node[vertex] (g1) at (0,1.4) {}; \node[vertex] (g2) at (1.2,.7) {}; \node[vertex] (g3) at (1.2,-.7) {}; \node[vertex] (g4) at (0,-1.4) {}; \node[vertex] (g5) at (-1.2,-.7) {}; \node[vertex] (g6) at (-1.2,.7) {}; \draw[edge] (g1)--(g2)--(g3)--(g4)--(g5)--(g6)--cycle; \node[caption] at (0,-2) {$G=C_6$\\one component};
52: % C_3 dot-union C_3. \node[vertex] (h1) at (3.3,1) {}; \node[vertex] (h2) at (4.35,-.8) {}; \node[vertex] (h3) at (2.25,-.8) {}; \node[vertex] (j1) at (6.2,1) {}; \node[vertex] (j2) at (7.25,-.8) {}; \node[vertex] (j3) at (5.15,-.8) {}; \draw[edge] (h1)--(h2)--(h3)--cycle; \draw[edge] (j1)--(j2)--(j3)--cycle; \node[caption] at (4.75,-2) {$H=C_3\mathbin{\dot\cup}C_3$\\two components}; \node[font=\scriptsize] at (2.35,1.85) {every displayed vertex has degree $2$}; \end{tikzpicture} ```
```

#### combinatorics / confirmed 012: `cex-regular-graphs-are-not-hereditary`

- Location: **Remarks**; source lines 54, 56, 58.
- Pages: `induced-subgraphs-and-hereditary-graph-classes-examples`.
- Visible defect: The Remarks section displays raw TikZ source text rather than the C4 and induced P3 illustration. The item body above the remarks renders normally.
- Future repair: Reformat the diagram as a fenced TikZ block with the opening fence, TikZ source, and closing fence on separate lines; rerender and inspect the Remarks section.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/cex-regular-graphs-are-not-hereditary--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/cex-regular-graphs-are-not-hereditary.md).

Exact frozen source lines:

```text
54: ```tikz \begin{tikzpicture}[ vertex/.style={draw,circle,fill=white,minimum size=8mm,inner sep=1pt,font=\small}, chosen/.style={vertex,fill=blue!15}, edge/.style={draw=blue!70!black,line width=1.2pt}, caption/.style={font=\small,align=center} ] \node[chosen] (v0) at (0,0) {$v_0$}; \node[chosen] (v1) at (0,1.5) {$v_1$}; \node[chosen] (v2) at (1.5,1.5) {$v_2$}; \node[vertex] (v3) at (1.5,0) {$v_3$}; \draw[edge] (v0)--(v1)--(v2)--(v3)--cycle; \node[caption] at (.75,-.65) {$C_4$: every degree is $2$};
56: \draw[->,line width=.9pt] (2.1,.75)--node[above,font=\scriptsize] {$G[\{v_0,v_1,v_2\}]$} (4.05,.75);
58: \node[chosen] (w0) at (4.55,0) {$v_0$}; \node[chosen] (w1) at (5.75,1.5) {$v_1$}; \node[chosen] (w2) at (6.95,0) {$v_2$}; \draw[edge] (w0)--(w1)--(w2); \node[caption] at (5.75,-.65) {$P_3$: degrees $1,2,1$}; \end{tikzpicture} ```
```

#### combinatorics / confirmed 013: `ex-pure-and-mixed-pairs-in-p-four`

- Location: **Remarks**; source lines 56, 58, 60, 62.
- Pages: `induced-subgraphs-and-hereditary-graph-classes-examples`.
- Visible defect: The Remarks section prints raw TikZ source for the complete, anticomplete, and mixed pair illustrations rather than diagrams.
- Future repair: Put the entire three-part figure inside a properly delimited fenced TikZ block; rerender and inspect the Remarks section.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/ex-pure-and-mixed-pairs-in-p-four--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/ex-pure-and-mixed-pairs-in-p-four.md).

Exact frozen source lines:

```text
56: ```tikz \begin{tikzpicture}[ vertex/.style={draw,circle,fill=white,minimum size=6.5mm,inner sep=1pt,font=\scriptsize}, aset/.style={vertex,fill=blue!15}, bset/.style={vertex,fill=orange!20}, edge/.style={draw=gray!75!black,line width=1pt}, caption/.style={font=\scriptsize,align=center} ] % Complete pair. \node[bset] (c1) at (0,0) {$1$}; \node[aset] (c2) at (1,0) {$2$}; \node[bset] (c3) at (2,0) {$3$}; \node[vertex] (c4) at (3,0) {$4$}; \draw[edge] (c1)--(c2)--(c3)--(c4); \node[caption] at (1.5,-.65) {$A=\{2\}$, $B=\{1,3\}$\\complete};
58: % Anticomplete pair. \node[aset] (a1) at (4.25,0) {$1$}; \node[vertex] (a2) at (5.25,0) {$2$}; \node[bset] (a3) at (6.25,0) {$3$}; \node[bset] (a4) at (7.25,0) {$4$}; \draw[edge] (a1)--(a2)--(a3)--(a4); \node[caption] at (5.75,-.65) {$A=\{1\}$, $B=\{3,4\}$\\anticomplete};
60: % Mixed pair. \node[vertex] (m1) at (8.5,0) {$1$}; \node[aset] (m2) at (9.5,0) {$2$}; \node[bset] (m3) at (10.5,0) {$3$}; \node[bset] (m4) at (11.5,0) {$4$}; \draw[edge] (m1)--(m2)--(m3)--(m4); \node[caption] at (10,-.65) {$A=\{2\}$, $B=\{3,4\}$\\mixed};
62: \node[font=\scriptsize,blue!70!black] at (4.55,1.0) {blue: $A$}; \node[font=\scriptsize,orange!80!black] at (6.95,1.0) {orange: $B$}; \end{tikzpicture} ```
```

#### combinatorics / confirmed 014: `thm-stars-and-bars`

- Location: **Remarks**; source lines 112.
- Pages: `finite-counting-and-binomial-coefficients`.
- Visible defect: The Remarks section prints the stars-and-bars TikZ source as literal text after the prose remark; the figure itself is absent.
- Future repair: Reformat the source as a properly delimited fenced TikZ block on separate lines; rerender and inspect the full Remarks section.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/thm-stars-and-bars--01.png), [tile 02](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/thm-stars-and-bars--02.png), [tile 03](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/thm-stars-and-bars--03.png), [tile 04](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/thm-stars-and-bars--04.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/thm-stars-and-bars.md).

Exact frozen source lines:

```text
112: ```tikz \begin{tikzpicture}[x=0.85cm,y=1cm] \node at (2.55,1.25) {$k=(2,0,3)$}; \node at (0,0) {$\star$}; \node at (0.85,0) {$\star$}; \draw[line width=1pt] (1.7,-0.3) -- (1.7,0.3); \draw[line width=1pt] (2.55,-0.3) -- (2.55,0.3); \node at (3.4,0) {$\star$}; \node at (4.25,0) {$\star$}; \node at (5.1,0) {$\star$}; \node at (0,-0.65) {$0$}; \node at (0.85,-0.65) {$1$}; \node at (1.7,-0.65) {$2$}; \node at (2.55,-0.65) {$3$}; \node at (3.4,-0.65) {$4$}; \node at (4.25,-0.65) {$5$}; \node at (5.1,-0.65) {$6$}; \node at (2.55,-1.35) {$S(k)=\{2,3\}\subseteq 7$}; \end{tikzpicture} ```
```

#### combinatorics / confirmed 015: `thm-lovasz-perfect-graph-criterion-and-complement-invariance`

- Location: **Proof**; source lines 78, 78.
- Pages: `bull-free-graphs-and-the-erdos-hajnal-property`.
- Visible defect: The final proof step and end-of-proof marker are followed on the same source line by `## Source notes`; the tile prints the heading syntax literally (`## Source notes`) as part of the proof row. Start the heading on its own Markdown line.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/combinatorics/research/math-library-rendering-audit-2026-10-23/combinatorics/screenshots/thm-lovasz-perfect-graph-criterion-and-complement-invariance--02.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/thm-lovasz-perfect-graph-criterion-and-complement-invariance.md).

Exact frozen source lines:

```text
78: 6.1 The contradiction discharges step 1.2, proving the numerical criterion. If $G$ is perfect, step 1.1 gives the inequality for every induced $H$. For each induced subgraph $\overline H$ of $\overline G$, [L2] gives $|V(\overline H)|=|V(H)|$, $\alpha(\overline H)=\omega(H)$, and $\omega(\overline H)=\alpha(H)$; so the same inequality holds in $\overline G$. The criterion makes $\overline G$ perfect. Applying that direction to $\overline G$ proves the converse, because $\overline{\overline G}=G$. [L2, step 1.1, step 5.1, discharge-contradiction] ∎ ## Source notes
```

#### combinatorics / confirmed 016: `cex-connected-even-degree-bowtie-is-not-a-cycle`

- Location: **Remarks**; source lines 55.
- Pages: `graphs-walks-and-connectivity-examples`.
- Visible defect: The Remarks tile displays the TikZ source literally (including tikzpicture, node, draw, and path commands) instead of rendering the graph. The source uses a one-line opening fence with `tikz` immediately followed by `\begin`, so the renderer does not recognize it as a diagram block.
- Future repair: Put `tikz` alone on the opening fence line and place the TikZ picture on following lines, matching supported multiline TikZ blocks elsewhere in the item library.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/cex-connected-even-degree-bowtie-is-not-a-cycle--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/cex-connected-even-degree-bowtie-is-not-a-cycle.md).

Exact frozen source lines:

```text
55: ```tikz \begin{tikzpicture}[ vertex/.style={draw,circle,fill=white,minimum size=8mm,inner sep=1pt,font=\small}, centre/.style={vertex,draw=red!75!black,fill=red!12,line width=1.4pt}, edge/.style={draw=gray!75,line width=1.1pt} ] \node[centre] (x) at (0,0) {$x$}; \node[vertex] (a) at (-2,1.25) {$a$}; \node[vertex] (b) at (-2,-1.25) {$b$}; \node[vertex] (c) at (2,1.25) {$c$}; \node[vertex] (d) at (2,-1.25) {$d$}; \draw[edge] (x)--(a)--(b)--(x); \draw[edge] (x)--(c)--(d)--(x); \node[font=\scriptsize,red!75!black,anchor=west] at (.45,.2) {$\deg(x)=4$}; \node[font=\scriptsize] at (0,-1.9) {$\deg(a)=\deg(b)=\deg(c)=\deg(d)=2$}; \end{tikzpicture} ```
```

#### combinatorics / confirmed 017: `cex-a-non-locally-finite-poset`

- Location: **Remarks**; source lines 61, 63, 65.
- Pages: `incidence-algebras-and-mobius-inversion-examples`.
- Visible defect: The Remarks diagram is displayed as literal TikZ source in monospace text across screenshot tiles instead of a diagram. The screenshot sidecar reports tikz_count 0; this is a visible source/rendering mismatch.
- Future repair: Put the TikZ opening fence, picture body, and closing fence on supported separate Markdown lines, then verify the rendered diagram.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/cex-a-non-locally-finite-poset--01.png), [tile 02](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/cex-a-non-locally-finite-poset--02.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/cex-a-non-locally-finite-poset.md).

Exact frozen source lines:

```text
61: ```tikz \begin{tikzpicture}[ every node/.style={font=\scriptsize}, elt/.style={draw,circle,minimum size=8mm,inner sep=1pt,fill=white} ] \node[elt] (bot) at (0,0) {$\bot$}; \node[elt] (m0) at (-3,1.6) {$(0,m)$}; \node[elt] (m1) at (-1.35,1.6) {$(1,m)$}; \node[elt] (m2) at (.3,1.6) {$(2,m)$}; \node[font=\normalsize] (dots) at (1.65,1.6) {$\cdots$}; \node[elt] (mn) at (3,1.6) {$(n,m)$}; \node[font=\normalsize] at (4.35,1.6) {$\cdots$}; \node[elt] (top) at (0,3.2) {$\top$};
63: \draw[gray!65] (bot)--(m0) (bot)--(m1) (bot)--(m2) (bot)--(mn) (m0)--(top) (m1)--(top) (m2)--(top) (mn)--(top); \draw[gray!55,densely dotted] (bot)--(dots)--(top);
65: \node[anchor=west] at (5.15,2.05) {countably many incomparable}; \node[anchor=west] at (5.15,1.55) {middle elements}; \node[anchor=west] at (5.15,.75) {$[\bot,\top]=P$ is infinite}; \end{tikzpicture} ```
```

#### combinatorics / confirmed 018: `cex-connected-graphs-are-not-hereditary`

- Location: **Remarks**; source lines 54, 56, 58.
- Pages: `induced-subgraphs-and-hereditary-graph-classes-examples`.
- Visible defect: The Remarks diagram for P3 and its induced endpoint subgraph is displayed as literal TikZ commands rather than a diagram.
- Future repair: Put the TikZ opening fence, picture body, and closing fence on supported separate Markdown lines, then verify the rendered diagram.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/cex-connected-graphs-are-not-hereditary--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/cex-connected-graphs-are-not-hereditary.md).

Exact frozen source lines:

```text
54: ```tikz \begin{tikzpicture}[ vertex/.style={draw,circle,fill=white,minimum size=8mm,inner sep=1pt,font=\small}, edge/.style={draw=blue!70!black,line width=1.2pt}, caption/.style={font=\small,align=center} ] \node[vertex] (v0) at (0,0) {$v_0$}; \node[vertex] (v1) at (1.5,0) {$v_1$}; \node[vertex] (v2) at (3,0) {$v_2$}; \draw[edge] (v0)--(v1)--(v2); \node[caption] at (1.5,-.75) {$P_3$ is connected};
56: \draw[->,line width=.9pt] (3.55,0)--node[above,font=\scriptsize] {induce on $\{v_0,v_2\}$} (5.25,0);
58: \node[vertex] (w0) at (5.8,0) {$v_0$}; \node[vertex] (w2) at (7.3,0) {$v_2$}; \node[caption] at (6.55,-.75) {$\overline K_2$ is disconnected}; \end{tikzpicture} ```
```

#### combinatorics / confirmed 019: `cex-strict-whitney-connectivity-inequalities`

- Location: **Remarks**; source lines 56.
- Pages: `graphs-walks-and-connectivity-examples`.
- Visible defect: The proposed two-lobe connectivity diagram is displayed as literal TikZ commands over screenshot tiles --01/--02 rather than as a diagram.
- Future repair: Put the TikZ opening fence, picture body, and closing fence on supported separate Markdown lines, then verify the rendered diagram.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/cex-strict-whitney-connectivity-inequalities--01.png), [tile 02](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/cex-strict-whitney-connectivity-inequalities--02.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/cex-strict-whitney-connectivity-inequalities.md).

Exact frozen source lines:

```text
56: ```tikz \begin{tikzpicture}[ vertex/.style={draw,circle,fill=white,minimum size=7.5mm,inner sep=1pt,font=\scriptsize}, cutvertex/.style={vertex,draw=violet!80!black,fill=violet!15,line width=1.4pt}, edge/.style={draw=gray!70,line width=.9pt}, edgecut/.style={draw=orange!85!black,line width=1.7pt} ] \node[cutvertex] (v) at (0,0) {$v$}; % First K_4-a_1b_1 lobe. \node[vertex] (a1) at (-1.5,.75) {$a_1$}; \node[vertex] (b1) at (-1.5,-.75) {$b_1$}; \node[vertex] (c1) at (-3.2,1.05) {$c_1$}; \node[vertex] (d1) at (-3.2,-1.05) {$d_1$}; \draw[edge] (a1)--(c1) (a1)--(d1) (b1)--(c1) (b1)--(d1) (c1)--(d1); \draw[edgecut] (v)--(a1) (v)--(b1); % Second K_4-a_2b_2 lobe. \node[vertex] (a2) at (1.5,.75) {$a_2$}; \node[vertex] (b2) at (1.5,-.75) {$b_2$}; \node[vertex] (c2) at (3.2,1.05) {$c_2$}; \node[vertex] (d2) at (3.2,-1.05) {$d_2$}; \draw[edge] (a2)--(c2) (a2)--(d2) (b2)--(c2) (b2)--(d2) (c2)--(d2); \draw[edge] (v)--(a2) (v)--(b2); \node[font=\scriptsize,violet!80!black] at (0,1.05) {vertex cut $\{v\}$}; \node[font=\scriptsize,orange!85!black] at (-1.25,-1.65) {edge cut $\{va_1,vb_1\}$}; \node[font=\scriptsize] at (0,-2.15) {$\kappa(G)=1<\lambda(G)=2<\delta(G)=3$}; \end{tikzpicture} ```
```

#### combinatorics / confirmed 020: `cor-the-bird-graph-is-generalized-nice`

- Location: **Proof technique**; source lines 51.
- Pages: `erdos-hajnal-for-the-e-graph-and-bird`.
- Visible defect: The uppercased Proof technique line exposes inline-math delimiters and the LaTeX command literally (for example `$(*)$` and `\mathrm{BIRD}`), while the same symbols render correctly in surrounding ItemBody text.
- Future repair: Render the proof-technique value as Markdown math before uppercasing, or keep mathematical tokens outside the uppercased field.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/cor-the-bird-graph-is-generalized-nice--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/cor-the-bird-graph-is-generalized-nice.md).

Exact frozen source lines:

```text
51: **Proof technique:** direct specialization of the property-$(*)$-plus-leaf-reducibility implication to the family $\{\mathrm{Bird}\}$.
```

#### combinatorics / confirmed 021: `ex-co-bird-e-neighbourhood-case-table`

- Location: **Adjacency table**; source lines 52.
- Pages: `co-bird-free-comb-structure-examples`.
- Visible defect: The purported 62-row table is emitted as a paragraph containing literal pipe separators and wraps as a long unformatted string. Standalone tile --02 shows this output; generated HTML wraps it in `<p>` and contains no `<table>` element.
- Future repair: Place each table row on its own line with a proper Markdown table separator, or use an explicitly supported table format.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/ex-co-bird-e-neighbourhood-case-table--02.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/ex-co-bird-e-neighbourhood-case-table.md).

Exact frozen source lines:

```text
52: | Mask | Type | Ordered witness | | --- | --- | --- | | 1 | I | $(p_1,p_2,p_4)$ | | 2 | I | $(p_2,p_1,p_4)$ | | 3 | I | $(p_2,p_3,p_5)$ | | 4 | I | $(p_3,p_2,p_5)$ | | 5 | I | $(p_1,p_2,p_4)$ | | 6 | I | $(p_2,p_1,p_4)$ | | 7 | I | $(p_3,q,p_5)$ | | 8 | I | $(p_4,p_3,p_1)$ | | 9 | I | $(p_1,p_2,p_5)$ | | 10 | I | $(p_2,p_1,p_5)$ | | 11 | I | $(p_2,p_3,p_5)$ | | 12 | I | $(p_3,p_2,p_5)$ | | 13 | I | $(p_1,p_2,p_5)$ | | 14 | I | $(p_2,p_1,p_5)$ | | 15 | I | $(p_3,q,p_5)$ | | 16 | I | $(p_5,p_4,p_1)$ | | 17 | I | $(p_1,p_2,p_4)$ | | 18 | I | $(p_2,p_1,p_4)$ | | 19 | I | $(p_5,p_4,q)$ | | 20 | I | $(p_3,p_4,p_1)$ | | 21 | I | $(p_1,p_2,p_4)$ | | 22 | I | $(p_2,p_1,p_4)$ | | 23 | I | $(p_5,p_4,q)$ | | 24 | I | $(p_4,p_3,p_1)$ | | 25 | I | $(p_1,p_2,q)$ | | 26 | I | $(p_2,p_1,q)$ | | 27 | II | $(p_3,p_2,p_1,p_5)$ | | 28 | I | $(p_3,q,p_1)$ | | 29 | I | $(p_1,p_2,q)$ | | 30 | I | $(p_2,p_1,q)$ | | 31 | II | $(q,p_3,p_2,p_5)$ | | 32 | I | $(q,p_3,p_1)$ | | 33 | I | $(p_1,p_2,p_4)$ | | 34 | I | $(p_2,p_1,p_4)$ | | 35 | I | $(p_2,p_3,p_5)$ | | 36 | I | $(p_3,p_2,p_5)$ | | 37 | I | $(p_1,p_2,p_4)$ | | 38 | I | $(p_2,p_1,p_4)$ | | 39 | II | $(p_4,p_3,q,p_1)$ | | 40 | I | $(p_4,p_3,p_1)$ | | 41 | I | $(p_1,p_2,p_5)$ | | 42 | I | $(p_2,p_1,p_5)$ | | 43 | I | $(p_2,p_3,p_5)$ | | 44 | I | $(p_3,p_2,p_5)$ | | 45 | I | $(p_1,p_2,p_5)$ | | 46 | I | $(p_2,p_1,p_5)$ | | 47 | II | $(p_5,p_4,p_3,p_1)$ | | 48 | I | $(p_5,p_4,p_1)$ | | 49 | I | $(p_1,p_2,p_4)$ | | 50 | I | $(p_2,p_1,p_4)$ | | 51 | II | $(p_3,p_2,p_1,p_5)$ | | 52 | I | $(p_3,p_4,p_1)$ | | 53 | I | $(p_1,p_2,p_4)$ | | 54 | I | $(p_2,p_1,p_4)$ | | 55 | II | $(p_4,p_3,q,p_1)$ | | 56 | I | $(p_4,p_3,p_1)$ | | 57 | II | $(p_3,p_4,p_5,p_1)$ | | 58 | I | $(p_4,p_3,p_1)$ | | 59 | II | $(p_3,p_2,p_1,p_5)$ | | 60 | II | $(p_2,p_3,q,p_5)$ | | 61 | II | $(p_2,p_3,q,p_5)$ | | 62 | II | $(p_1,p_2,p_3,p_5)$ |
```

#### combinatorics / confirmed 022: `thm-perfect-graphs-satisfy-kappa-at-least-their-order`

- Location: **title**; source lines 4.
- Pages: `cographs-perfect-patterns-and-pure-pairs`.
- Visible defect: The title renders the mathematical relation as raw ASCII text `|V(G)|<=kappa(G)`; the same inequality in the Statement is typeset.
- Future repair: Wrap the title’s formula in supported inline math delimiters and use `\kappa`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/thm-perfect-graphs-satisfy-kappa-at-least-their-order--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/thm-perfect-graphs-satisfy-kappa-at-least-their-order.md).

Exact frozen source lines:

```text
4: title: "Every perfect graph satisfies |V(G)|<=kappa(G)"
```

#### combinatorics / confirmed 023: `ex-partitions-into-three-parts-of-five-from-the-recurrence`

- Location: **title**; source lines 4.
- Pages: `integer-partitions-and-the-twelvefold-way-examples`.
- Visible defect: The title renders the partition-count notation as literal ASCII `p_3(5)=2`, unlike the properly typeset formula in the Example body.
- Future repair: Wrap the formula in supported inline math delimiters and use `p_3(5)=2` as math.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/ex-partitions-into-three-parts-of-five-from-the-recurrence--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/ex-partitions-into-three-parts-of-five-from-the-recurrence.md).

Exact frozen source lines:

```text
4: title: "The recurrence gives p_3(5)=2"
```

#### combinatorics / confirmed 024: `lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph`

- Location: **title**; source lines 4.
- Pages: `property-star-and-comb-outcomes`.
- Visible defect: The title exposes exponent notation as literal caret text (`y^(10/3)`, `y^(11/3)`); the statement below typesets those powers.
- Future repair: Wrap the powers in supported inline math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/screenshots/lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph.md).

Exact frozen source lines:

```text
4: title: "Under failure of the global outcomes, a large y^(10/3)-restricted induced subgraph forces a y^(11/3)-restricted induced subgraph"
```

### Uncertain observations

#### combinatorics / uncertain 001: `cex-a-subgraph-copy-need-not-be-induced`

- Location: **Remarks**; source lines 50, 54.
- Pages: `induced-subgraphs-and-hereditary-graph-classes-examples`.
- Visible defect: The inline fenced TikZ block in Remarks is printed as literal commands at the bottom of the tile instead of rendering the K3-to-P3 edge-deletion comparison. Move the fence delimiters onto their own lines so the complete diagram is parsed as a TikZ block.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/research/math-library-rendering-audit-2026-10-23/combinatorics/screenshots/cex-a-subgraph-copy-need-not-be-induced--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/cex-a-subgraph-copy-need-not-be-induced.md).

Exact frozen source lines:

```text
50: ```tikz \begin{tikzpicture}[ vertex/.style={draw,circle,fill=white,minimum size=7mm,inner sep=1pt,font=\small}, edge/.style={draw=blue!70!black,line width=1.2pt}, caption/.style={font=\small,align=center} ] \node[vertex] (k0) at (0,0) {$0$}; \node[vertex] (k1) at (1.2,1.35) {$1$}; \node[vertex] (k2) at (2.4,0) {$2$}; \draw[edge] (k0)--(k1)--(k2)--cycle; \node[caption] at (1.2,-.65) {$K_3$};
54: \node[vertex] (p0) at (4.75,0) {$0$}; \node[vertex] (p1) at (5.95,1.35) {$1$}; \node[vertex] (p2) at (7.15,0) {$2$}; \draw[edge] (p0)--(p1)--(p2); \draw[gray!65,dashed,line width=.8pt] (p0)--node[below,font=\scriptsize] {deleted} (p2); \node[caption] at (5.95,-.65) {an ordinary $P_3$ subgraph\\not induced}; \end{tikzpicture} ```
```

#### combinatorics / uncertain 002: `cex-equal-size-intervals-with-different-mobius-values`

- Location: **Remarks**; source lines 52, 58.
- Pages: `incidence-algebras-and-mobius-inversion-examples`.
- Visible defect: The inline fenced TikZ block in Remarks is printed as literal commands at the bottom of the tile instead of rendering the chain and diamond Hasse diagrams. Put the opening and closing fences on separate lines around the diagram source.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/research/math-library-rendering-audit-2026-10-23/combinatorics/screenshots/cex-equal-size-intervals-with-different-mobius-values--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/cex-equal-size-intervals-with-different-mobius-values.md).

Exact frozen source lines:

```text
52: ```tikz \begin{tikzpicture}[ every node/.style={font=\scriptsize}, elt/.style={draw,circle,minimum size=7mm,inner sep=1pt,fill=white} ] \node[font=\small] at (-2.7,4.15) {four-element chain}; \node[font=\small] at (2.7,4.15) {four-element diamond};
58: \node[font=\small] at (-2.7,-.75) {$\mu(c_0,c_3)=0$}; \node[font=\small] at (2.7,-.75) {$\mu(\bot,\top)=1$}; \end{tikzpicture} ```
```

#### combinatorics / uncertain 003: `ex-p-four-is-connected-and-anticonnected`

- Location: **Remarks**; source lines 52, 56.
- Pages: `induced-subgraphs-and-hereditary-graph-classes-examples`.
- Visible defect: The inline fenced TikZ block in Remarks is printed as literal commands at the bottom of the tile instead of rendering P4 and its complement. Put the opening and closing fences on separate lines around the diagram source.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/research/math-library-rendering-audit-2026-10-23/combinatorics/screenshots/ex-p-four-is-connected-and-anticonnected--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/ex-p-four-is-connected-and-anticonnected.md).

Exact frozen source lines:

```text
52: ```tikz \begin{tikzpicture}[ vertex/.style={draw,circle,fill=white,minimum size=7mm,inner sep=1pt,font=\small}, edge/.style={draw=blue!70!black,line width=1.2pt}, caption/.style={font=\small,align=center} ] \node[vertex] (a1) at (0,0) {$1$}; \node[vertex] (a2) at (1.25,0) {$2$}; \node[vertex] (a3) at (2.5,0) {$3$}; \node[vertex] (a4) at (3.75,0) {$4$}; \draw[edge] (a1)--(a2)--(a3)--(a4); \node[caption] at (1.875,-.7) {$P_4$: edges $12,23,34$};
56: \node[vertex] (b3) at (6.15,0) {$3$}; \node[vertex] (b1) at (7.4,0) {$1$}; \node[vertex] (b4) at (8.65,0) {$4$}; \node[vertex] (b2) at (9.9,0) {$2$}; \draw[edge] (b3)--(b1)--(b4)--(b2); \node[caption] at (8.025,-.7) {$\overline{P_4}$: edges $13,14,24$}; \end{tikzpicture} ```
```

#### combinatorics / uncertain 004: `cex-a-maximal-antichain-that-is-not-maximum`

- Location: **Remarks**; source lines 49, 51.
- Pages: `chains-antichains-sperner-and-dilworth-examples`.
- Visible defect: TikZ markup in the Remarks diagram is printed literally at the bottom of the tile instead of producing the poset picture. The opening and closing ```tikz fence delimiters share lines with commands; put the delimiters on their own lines. The stated relations and maximal-versus-maximum sets agree with the diagram source.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/research/math-library-rendering-audit-2026-10-23/combinatorics/screenshots/cex-a-maximal-antichain-that-is-not-maximum--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/cex-a-maximal-antichain-that-is-not-maximum.md).

Exact frozen source lines:

```text
49: ```tikz \begin{tikzpicture}[ every node/.style={font=\small}, elt/.style={draw,circle,minimum size=9mm,inner sep=1pt,fill=white}, maximal/.style={elt,draw=orange!85!black,fill=orange!20,line width=1pt}, maximum/.style={elt,draw=blue!75!black,fill=blue!13,line width=1pt} ] \node[maximal] (a) at (0,0) {$a$}; \node[maximum] (b) at (-1.5,1.6) {$b$}; \node[maximum] (c) at (1.5,1.6) {$c$}; \draw[gray!75,line width=.9pt] (a)--(b) (a)--(c);
51: \node[font=\scriptsize,anchor=north] at (0,-.65) {maximal antichain $\{a\}$}; \draw[blue!75!black,dashed] (-2.05,2.2)--(2.05,2.2); \node[font=\scriptsize,anchor=south] at (0,2.27) {maximum antichain $\{b,c\}$}; \end{tikzpicture} ```
```

#### combinatorics / uncertain 005: `ex-cluster-graphs-are-p-three-free`

- Location: **Remarks**; source lines 54, 58.
- Pages: `induced-subgraphs-and-hereditary-graph-classes-examples`.
- Visible defect: TikZ markup in the Remarks diagram is printed literally at the bottom of the tile instead of producing the two-component graph. The opening and closing ```tikz fence delimiters share lines with commands; put the delimiters on their own lines. The K3 disjoint-union K2 drawing is consistent with the example.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/combinatorics/research/math-library-rendering-audit-2026-10-23/combinatorics/screenshots/ex-cluster-graphs-are-p-three-free--01.png); [frozen source](math-library-rendering-audit-2026-10-23/combinatorics/snapshots/ex-cluster-graphs-are-p-three-free.md).

Exact frozen source lines:

```text
54: ```tikz \begin{tikzpicture}[ vertex/.style={draw,circle,fill=white,minimum size=7mm,inner sep=1pt}, edge/.style={draw=blue!70!black,line width=1.2pt}, caption/.style={font=\small,align=center} ] \node[vertex] (a) at (0,0) {}; \node[vertex] (b) at (1.15,1.3) {}; \node[vertex] (c) at (2.3,0) {}; \draw[edge] (a)--(b)--(c)--cycle; \node[caption] at (1.15,-.65) {complete component $K_3$};
58: \node[caption] at (2.85,-1.25) {$K_3\mathbin{\dot\cup}K_2$ is a cluster graph and is $P_3$-free}; \end{tikzpicture} ```
```

