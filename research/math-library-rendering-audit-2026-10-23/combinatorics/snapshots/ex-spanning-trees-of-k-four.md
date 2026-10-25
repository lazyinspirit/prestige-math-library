---
id: ex-spanning-trees-of-k-four
kind: example
title: "$\\tau(K_4)=16$ by direct Prüfer enumeration and Cayley's formula"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cayley-formula, thm-prufer-code-bijection, def-number-of-spanning-trees]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISI Bangalore discrete mathematics notes, Trees and Cayley’s theorem"
      url: "https://www.isibang.ac.in/~d.yogesh/Course_Notes/DM1/Ch4.S1.html"
pipeline_run: null
---

## Statement

The complete graph $K_4$ has $16$ spanning trees.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,line width=0.7pt,every node/.style={font=\small}]
  \tikzset{vertex/.style={circle,draw,fill=white,inner sep=1.4pt,minimum size=5mm}}
  \node[vertex] (v0) at (-1,1) {$0$};
  \node[vertex] (v1) at (1,1) {$1$};
  \node[vertex] (v2) at (1,-1) {$2$};
  \node[vertex] (v3) at (-1,-1) {$3$};
  \draw[gray] (v3)--(v0) (v0)--(v2) (v1)--(v3);
  \draw[blue,very thick] (v0)--(v1)--(v2)--(v3);
  \node[blue] at (0,-1.65) {one spanning tree $T$ of $K_4$};
  \node at (0,1.65) {$K_4$: all six edges};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** $K_4$ on the label set $4$.

[L1] Its spanning trees correspond bijectively to words of length $2$ on $4$ ([[thm-prufer-code-bijection]]).

[L2] Cayley's formula gives $\tau(K_n)=n^{n-2}$ ([[thm-cayley-formula]]).

[F1] $\tau$ counts spanning trees ([[def-number-of-spanning-trees]]).

## Verification

**Proof technique:** direct.

1.1 There are $4$ choices for each of the two positions of a Prüfer word, hence $4^2=16$ words and therefore $16$ spanning trees. [L1, F1]

2.1 Independently, Cayley's formula gives $\tau(K_4)=4^{4-2}=16$, agreeing with the enumeration. [L2] ∎
