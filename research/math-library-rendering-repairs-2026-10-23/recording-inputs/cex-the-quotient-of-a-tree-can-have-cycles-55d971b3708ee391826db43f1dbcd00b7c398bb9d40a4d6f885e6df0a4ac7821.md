---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/cex-the-quotient-of-a-tree-can-have-cycles.json
  precheck: pass
id: cex-the-quotient-of-a-tree-can-have-cycles
kind: counterexample
title: "A quotient of a tree can have cycles"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quotient-graph-of-an-action-without-inversions, ex-the-bi-infinite-line-and-its-translation-action]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Yuriy Tumarkin, Groups Acting on Trees"
      url: "https://www.scribd.com/document/825918235/trees"
---

## Statement refuted

The quotient of a simplicial tree by an action without inversions is always a
tree.

## Facts & Assumptions

**Given:** The quotient-graph definition and the translation action on the line.

[L1] A quotient graph identifies vertices and edges only up to orbit. ([[def-quotient-graph-of-an-action-without-inversions]])

[L2] Translation by one step on the bi-infinite line is a hyperbolic action on a simplicial tree. ([[ex-the-bi-infinite-line-and-its-translation-action]])

## Counterexample

**Proof technique:** direct.

1.1 By [L2], the bi-infinite line is a simplicial tree. Let $g$ be translation by three steps, so $\langle g\rangle$ acts without inversions on that tree. [L2, given]

2.1 In the quotient graph from [L1], the three vertex orbits are the residue classes modulo $3$, and the edge orbits join them cyclically. The quotient is therefore a $3$-cycle, not a tree. This refutes the statement. [L1, step 1.1, algebra] ∎


## Remarks

The illustration shows geometric edges (each representing a pair of reversed
oriented edges). The quotient map $q:L\to\langle g\rangle\backslash L$ sends
$n$ to its residue class $[n]$ modulo $3$, where $g(n)=n+3$. The three
geometric edge orbits have representatives joining $0$ to $1$, $1$ to $2$,
and $2$ to $3$; the last therefore joins $[2]$ to $[0]$ in the quotient.
The counterexample above is independent of the illustration.

```tikz
\begin{tikzpicture}[scale=0.85]
\draw (-0.5,0) -- (5.5,0);
\node at (-0.7,0) {$\cdots$};
\node at (5.7,0) {$\cdots$};
\fill (0,0) circle (2pt);
\fill (1,0) circle (2pt);
\fill (2,0) circle (2pt);
\fill (3,0) circle (2pt);
\fill (4,0) circle (2pt);
\fill (5,0) circle (2pt);
\node at (0,-0.4) {$-1$};
\node at (1,-0.4) {$0$};
\node at (2,-0.4) {$1$};
\node at (3,-0.4) {$2$};
\node at (4,-0.4) {$3$};
\node at (5,-0.4) {$4$};
\draw[->] (1,0.7) -- (4,0.7);
\node at (2.5,1.05) {$g(n)=n+3$};
\draw[->] (6.2,0.2) -- (7.3,0.2);
\node at (6.75,0.6) {$q$};
\draw (8,-0.5) -- (10,-0.5);
\draw (10,-0.5) -- (9,1.1);
\draw (9,1.1) -- (8,-0.5);
\fill (8,-0.5) circle (2pt);
\fill (10,-0.5) circle (2pt);
\fill (9,1.1) circle (2pt);
\node at (7.8,-0.9) {$[0]$};
\node at (10.2,-0.9) {$[1]$};
\node at (9,1.5) {$[2]$};
\end{tikzpicture}
```
