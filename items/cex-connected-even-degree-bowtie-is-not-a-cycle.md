---
id: cex-connected-even-degree-bowtie-is-not-a-cycle
kind: counterexample
title: "Two triangles sharing one vertex form a connected simple graph with all degrees even that is not a cycle"
status: published
origin: session
deps: [fs-all-even-degrees-force-one-cycle, def-graph-adjacency-incidence-neighbourhood-and-degree, def-graph-walk-trail-path-and-cycle]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Cornell Mathematics, Graph Theory notes"
      url: "https://pi.math.cornell.edu/~zakh/putnam/graph-theory.pdf"
pipeline_run: null
---

## Statement refuted

The false statement [[fs-all-even-degrees-force-one-cycle]] claims that every
connected simple graph whose degrees are all even is itself a cycle.

## Facts & Assumptions

**Given:** The graph $G$ with vertices $x,a,b,c,d$ and edges $xa,ab,bx,xc,cd,dx$.

[F1] Degree is the number of neighbours ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[F2] Every vertex of a cycle graph has degree $2$ ([[def-graph-walk-trail-path-and-cycle]]).

## Counterexample

**Proof technique:** direct.

1.1 The edges form the triangles $xabx$ and $xcdx$. Every vertex reaches $x$ within its triangle, so every two vertices are joined by a path and $G$ is connected. [given]

1.2 The vertex $x$ has degree $4$, while $a,b,c,d$ each have degree $2$. Thus every degree is even by [F1]. [given, F1]

2.1 Since $x$ has degree $4$, [F2] shows that $G$ is not a cycle graph. Steps 1.1 and 1.2 supply the required connected even-degree counterexample. [step 1.1, step 1.2, F2] ∎

## Remarks

```tikz
\begin{tikzpicture}[
  vertex/.style={draw,circle,fill=white,minimum size=8mm,inner sep=1pt,font=\small},
  centre/.style={vertex,draw=red!75!black,fill=red!12,line width=1.4pt},
  edge/.style={draw=gray!75,line width=1.1pt}
]
\node[centre] (x) at (0,0) {$x$};
\node[vertex] (a) at (-2,1.25) {$a$};
\node[vertex] (b) at (-2,-1.25) {$b$};
\node[vertex] (c) at (2,1.25) {$c$};
\node[vertex] (d) at (2,-1.25) {$d$};
\draw[edge] (x)--(a)--(b)--(x);
\draw[edge] (x)--(c)--(d)--(x);
\node[font=\scriptsize,red!75!black,anchor=west] at (.45,.2) {$\deg(x)=4$};
\node[font=\scriptsize] at (0,-1.9)
  {$\deg(a)=\deg(b)=\deg(c)=\deg(d)=2$};
\end{tikzpicture}
```
