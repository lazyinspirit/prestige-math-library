---
id: cex-equal-size-intervals-with-different-mobius-values
kind: counterexample
title: "A four-element chain and a four-element diamond have equal-size endpoint intervals but Möbius values $0$ and $1$"
status: published
origin: session
deps: [fs-mobius-depends-only-on-interval-cardinality, ex-mobius-on-a-four-element-chain, ex-mobius-on-the-diamond-poset]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Stanley, Enumerative Combinatorics, Volume 1"
      url: "https://math.mit.edu/~rstan/ec/ec1toc.html"
pipeline_run: null
---

## Statement refuted

The endpoint Möbius value of a finite interval is determined by the number of elements in that interval ([[fs-mobius-depends-only-on-interval-cardinality]]).

## Facts & Assumptions

**Given:** The four-element chain $c_0<c_1<c_2<c_3$ and the four-element diamond with endpoints $\bot<\top$.

[F1] The chain computation gives $\mu(c_0,c_3)=0$ ([[ex-mobius-on-a-four-element-chain]]).

[F2] The diamond computation gives $\mu(\bot,\top)=1$ ([[ex-mobius-on-the-diamond-poset]]).

## Counterexample

**Proof technique:** direct.

1.1 Both endpoint intervals have four elements. [given]

1.2 Their endpoint Möbius values are nevertheless $0$ and $1$ by [F1] and [F2]. [F1, F2]

2.1 Hence equal-size intervals can have different Möbius values, and the statement is false. [step 1.1, step 1.2] ∎

## Remarks

```tikz
\begin{tikzpicture}[
  every node/.style={font=\scriptsize},
  elt/.style={draw,circle,minimum size=7mm,inner sep=1pt,fill=white}
]
\node[font=\small] at (-2.7,4.15) {four-element chain};
\node[font=\small] at (2.7,4.15) {four-element diamond};

\node[elt] (c0) at (-2.7,0) {$c_0$};
\node[elt] (c1) at (-2.7,1.05) {$c_1$};
\node[elt] (c2) at (-2.7,2.1) {$c_2$};
\node[elt] (c3) at (-2.7,3.15) {$c_3$};
\draw[gray!70] (c0)--(c1)--(c2)--(c3);

\node[elt] (bot) at (2.7,0) {$\bot$};
\node[elt] (a) at (1.65,1.55) {$a$};
\node[elt] (b) at (3.75,1.55) {$b$};
\node[elt] (top) at (2.7,3.15) {$\top$};
\draw[gray!70] (bot)--(a)--(top) (bot)--(b)--(top);

\node[font=\small] at (-2.7,-.75) {$\mu(c_0,c_3)=0$};
\node[font=\small] at (2.7,-.75) {$\mu(\bot,\top)=1$};
\end{tikzpicture}
```
