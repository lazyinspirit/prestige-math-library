---
id: thm-spectrum-of-the-complete-bipartite-graph
kind: theorem
title: "The complete bipartite graph $K_{m,n}$ has adjacency spectrum $\\{\\sqrt{mn},0^{m+n-2},-\\sqrt{mn}\\}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjacency-matrix-of-a-finite-simple-graph, def-graph-spectrum-spectral-radius-and-cospectrality, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, MIT 18.314 handout, Problem 1"
      url: "https://ocw.mit.edu/courses/18-314-combinatorial-analysis-fall-2014/2724112ea36679f82dc04f0b2f4f355e_MIT18_314F14_mt.pdf"
---

## Statement

For integers $m,n\ge1$, the complete bipartite graph $K_{m,n}$ has adjacency
spectrum

$$\{\sqrt{mn},0^{m+n-2},-\sqrt{mn}\}.$$

## Facts & Assumptions

**Given:** Integers $m,n\ge1$ and the complete bipartite graph $K_{m,n}$ with its two parts of sizes $m$ and $n$.

[F1] In $K_{m,n}$ every edge joins the two parts, and every such cross pair is an edge ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] The adjacency spectrum is the multiset of adjacency eigenvalues ([[def-graph-spectrum-spectral-radius-and-cospectrality]]).

## Proof

**Proof technique:** direct.

1.1 In the vertex order with the first part before the second, the adjacency matrix is $A=\begin{pmatrix}0&J_{m\times n}\\J_{n\times m}&0\end{pmatrix}$ by [F1]. If a vector $(x,y)$ has the coordinates of $x$ summing to $0$, then $J_{n\times m}x=0$ and $A(x,0)=0$. Likewise, if the coordinates of $y$ sum to $0$, then $A(0,y)=0$. These give an $(m-1)+(n-1)=m+n-2$ dimensional eigenspace for the eigenvalue $0$. [F1, algebra]

2.1 On the remaining two-dimensional subspace of vectors constant on each part, $A$ acts by $A(a\mathbf 1_m,b\mathbf 1_n)=(nb\,\mathbf 1_m,ma\,\mathbf 1_n)$. Relative to the basis $(\mathbf 1_m,0)$ and $(0,\mathbf 1_n)$, this action has matrix $\begin{pmatrix}0&n\\m&0\end{pmatrix}$, whose eigenvalues are $\pm\sqrt{mn}$. Together with step 1.1 this accounts for all $m+n$ eigenvalues. [step 1.1, algebra]

3.1 Therefore the adjacency spectrum is exactly $\{\sqrt{mn},0^{m+n-2},-\sqrt{mn}\}$ by [F2]. [step 1.1, step 2.1, F2] ∎
