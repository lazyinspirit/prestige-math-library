---
id: ex-width-three-poset-and-a-minimum-chain-cover
kind: example
title: "A six-element poset of width three and a three-chain cover"
status: published
origin: session
deps: [thm-dilworth-finite-posets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.4"
      url: "https://appliedcombinatorics.org/book/s_posets_dilworth.html"
pipeline_run: null
---

## Example

Let $P=\{a_1,a_2,a_3,b_1,b_2,b_3\}$ with $a_i<b_i$ for each $i$, and no
other comparabilities between distinct elements. Then
$\{a_1,a_2,a_3\}$ is an antichain, and

$$\{a_1<b_1\},\qquad\{a_2<b_2\},\qquad\{a_3<b_3\}$$

is a chain cover. The width is exactly $3$, and this cover is minimum.

```tikz
\begin{tikzpicture}[
  every node/.style={font=\small},
  elt/.style={draw,circle,minimum size=8mm,inner sep=1pt,fill=white},
  anti/.style={elt,draw=orange!85!black,fill=orange!18,line width=.9pt}
]
\node[anti] (a1) at (-2.4,0) {$a_1$};
\node[anti] (a2) at (0,0) {$a_2$};
\node[anti] (a3) at (2.4,0) {$a_3$};
\node[elt] (b1) at (-2.4,1.7) {$b_1$};
\node[elt] (b2) at (0,1.7) {$b_2$};
\node[elt] (b3) at (2.4,1.7) {$b_3$};

\draw[blue!70!black,line width=1.2pt] (a1)--(b1);
\draw[green!50!black,line width=1.2pt] (a2)--(b2);
\draw[red!70!black,line width=1.2pt] (a3)--(b3);

\node[font=\scriptsize] at (-2.4,2.35) {$C_1$};
\node[font=\scriptsize] at (0,2.35) {$C_2$};
\node[font=\scriptsize] at (2.4,2.35) {$C_3$};
\draw[orange!85!black,dashed] (-3.05,-.55)--(3.05,-.55);
\node[font=\scriptsize,anchor=north] at (0,-.62)
  {maximum antichain $\{a_1,a_2,a_3\}$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The six-element poset $P$ described in the Example.

[L1] In a finite poset, the minimum number of chains in a chain cover equals the width ([[thm-dilworth-finite-posets]]).

## Verification

**Proof technique:** direct.

1.1 The set $\{a_1,a_2,a_3\}$ is an antichain, so the width is at least $3$. [given]

1.2 Every antichain contains at most one element from each comparable pair $\{a_i,b_i\}$, so it has at most $3$ elements. Hence the width is exactly $3$. [given]

1.3 The three displayed two-element chains cover all six elements, so they form a chain cover of cardinality $3$. [given]

2.1 By steps 1.2 and 1.3, and equivalently by [L1], the displayed cover has the minimum possible number of chains. [step 1.2, step 1.3, L1] ∎
