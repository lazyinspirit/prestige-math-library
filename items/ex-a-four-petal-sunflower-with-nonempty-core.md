---
id: ex-a-four-petal-sunflower-with-nonempty-core
kind: example
title: "Four explicit petals with a common two-element core form a sunflower"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-sunflower]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The four sets

$$\{1,2,3,4\},\quad\{1,2,5,6\},\quad\{1,2,7,8\},\quad\{1,2,9,10\}$$

form a $4$-petal sunflower. Their common core is $\{1,2\}$ and their petals
are the pairwise disjoint sets $\{3,4\}$, $\{5,6\}$, $\{7,8\}$, and
$\{9,10\}$.

```tikz
\begin{tikzpicture}[
  every node/.style={font=\small},
  core/.style={draw,circle,minimum size=11mm,fill=orange!22,
               draw=orange!85!black,line width=1pt},
  petal/.style={draw,rounded corners=4pt,minimum width=16mm,
                minimum height=8mm,fill=blue!10,draw=blue!65!black}
]
\node[core] (c) at (0,0) {$\{1,2\}$};
\node[petal] (p1) at (0,2.2) {$\{3,4\}$};
\node[petal] (p2) at (3,0) {$\{5,6\}$};
\node[petal] (p3) at (0,-2.2) {$\{7,8\}$};
\node[petal] (p4) at (-3,0) {$\{9,10\}$};

\draw[blue!65!black,line width=1.3pt] (c)--node[right] {$F_1$} (p1);
\draw[blue!65!black,line width=1.3pt] (c)--node[above] {$F_2$} (p2);
\draw[blue!65!black,line width=1.3pt] (c)--node[right] {$F_3$} (p3);
\draw[blue!65!black,line width=1.3pt] (c)--node[above] {$F_4$} (p4);

\node[font=\scriptsize,anchor=south] at (0,.65) {common core};
\node[font=\scriptsize,anchor=north] at (0,-2.8)
  {$F_i=\{1,2\}\cup P_i$, with the $P_i$ pairwise disjoint};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The four sets displayed in the Example.

[F1] Distinct sets form a sunflower when all pairwise intersections equal one common core ([[def-sunflower]]).

## Verification

**Proof technique:** direct.

1.1 Every displayed set contains $\{1,2\}$, and outside this pair their elements lie in disjoint two-element blocks. [given]

2.1 Therefore the intersection of any two distinct displayed sets is exactly $\{1,2\}$. [step 1.1]

3.1 By [F1], the four sets form a sunflower with the stated core and petals. [step 2.1, F1] ∎
