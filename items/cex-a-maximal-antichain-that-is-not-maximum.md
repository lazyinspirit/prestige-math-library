---
id: cex-a-maximal-antichain-that-is-not-maximum
kind: counterexample
title: "A maximal antichain of size one in a finite poset of width two"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-antichain-and-poset-covers, def-height-and-width-of-a-finite-poset, fs-maximal-antichain-need-not-be-maximum]
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

## Statement refuted

The false statement [[fs-maximal-antichain-need-not-be-maximum]] claims that
every maximal antichain in a finite poset has maximum cardinality.

## Facts & Assumptions

**Given:** The poset $P=\{a,b,c\}$ with $a<b$, $a<c$, and $b,c$ incomparable.

[F1] An antichain is maximal when no larger antichain contains it, and maximum when no antichain has greater cardinality; the width is the maximum cardinality of an antichain ([[def-antichain-and-poset-covers]], [[def-height-and-width-of-a-finite-poset]]).

## Counterexample

**Proof technique:** direct.

1.1 The singleton $\{a\}$ is an antichain and cannot be enlarged, since both $b$ and $c$ are comparable with $a$. [given, F1]

1.2 The pair $\{b,c\}$ is an antichain. No three-element antichain exists, because the only three-element subset is $P$ itself and it contains the comparable pair $a,b$; hence the width of $P$ is $2$. [given, F1]

2.1 Thus $\{a\}$ is maximal of cardinality $1$ but not maximum, providing the required counterexample. [step 1.1, step 1.2] ∎

## Remarks

```tikz
\begin{tikzpicture}[
  every node/.style={font=\small},
  elt/.style={draw,circle,minimum size=9mm,inner sep=1pt,fill=white},
  maximal/.style={elt,draw=orange!85!black,fill=orange!20,line width=1pt},
  maximum/.style={elt,draw=blue!75!black,fill=blue!13,line width=1pt}
]
\node[maximal] (a) at (0,0) {$a$};
\node[maximum] (b) at (-1.5,1.6) {$b$};
\node[maximum] (c) at (1.5,1.6) {$c$};
\draw[gray!75,line width=.9pt] (a)--(b) (a)--(c);

\node[font=\scriptsize,anchor=north] at (0,-.65)
  {maximal antichain $\{a\}$};
\draw[blue!75!black,dashed] (-2.05,2.2)--(2.05,2.2);
\node[font=\scriptsize,anchor=south] at (0,2.27)
  {maximum antichain $\{b,c\}$};
\end{tikzpicture}
```
