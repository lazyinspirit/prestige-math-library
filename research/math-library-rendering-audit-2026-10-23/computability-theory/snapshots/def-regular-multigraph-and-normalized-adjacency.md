---
id: def-regular-multigraph-and-normalized-adjacency
kind: definition
title: "Regular multigraph and normalized adjacency"
status: published
origin: pipeline
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §§2.1–2.3, pp19–21; Dinur §2.1, p8."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Definition

A finite $d$-regular adjacency-slot multigraph on $V=\{1,\ldots,n\}$, with $n\ge1$ and integer $d>0$, is a symmetric matrix $A\in\mathbb Z_{\ge0}^{n\times n}$ with every row sum $d$. $A_{uv}$ counts slots from $u$ to $v$; diagonal entries count loop slots. Its normalized adjacency is $M=A/d$. We use $\langle f,g\rangle=n^{-1}\sum_v f(v)\overline{g(v)}$ unless an unnormalized inner product is explicitly specified.

An adjacency list records the $d$ destinations per vertex, including repetitions. An ordinary undirected edge has two incidence slots paired by reversal; an ordinary loop has two slots at the same vertex. Such a representation requires even diagonal entries. Any symmetric integer matrix can be converted to it by doubling every slot. Uniform directed-slot sampling chooses one of the $nd$ slots; for a reverse-paired graph it induces the uniform distribution on its $nd/2$ ordinary edges. Connectivity uses positive off-diagonal entries. When $n=1$, the mean-zero subspace is $\{0\}$.
