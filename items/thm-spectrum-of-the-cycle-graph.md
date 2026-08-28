---
id: thm-spectrum-of-the-cycle-graph
kind: theorem
title: "The cycle graph $C_n$ has adjacency spectrum $\\{2\\cos(2\\pi j/n):0\\le j<n\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-graph-spectrum-spectral-radius-and-cospectrality, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Steve Butler, Spectral Graph Theory course notes, lecture 3"
      url: "https://www.stevebutler.org/spectral2023"
---

## Statement

For every integer $n\ge3$, the cycle graph $C_n$ has adjacency spectrum

$$\{2\cos(2\pi j/n):0\le j<n\}.$$

## Facts & Assumptions

**Given:** An integer $n\ge3$ and the cycle graph $C_n$.

[F1] The graph $C_n$ has vertices $0,\dots,n-1$ and edges between consecutive residues modulo $n$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] The adjacency spectrum is the multiset of adjacency eigenvalues ([[def-graph-spectrum-spectral-radius-and-cospectrality]]).

## Proof

**Proof technique:** direct.

1.1 Let $\omega=e^{2\pi i/n}$. For each $0\le j<n$, define the vector $x^{(j)}=(1,\omega^j,\omega^{2j},\dots,\omega^{(n-1)j})^{\mathsf T}$. If $A$ is the adjacency matrix of $C_n$, then [F1] gives $(Ax^{(j)})_r=x^{(j)}_{r-1}+x^{(j)}_{r+1}=\omega^{jr}(\omega^{-j}+\omega^j)=2\cos(2\pi j/n)\,x^{(j)}_r$, with indices modulo $n$. So $x^{(j)}$ is an eigenvector with eigenvalue $2\cos(2\pi j/n)$. [F1, algebra]

2.1 The vectors $x^{(0)},\dots,x^{(n-1)}$ are linearly independent: they are the columns of a Vandermonde matrix built from the distinct numbers $1,\omega,\dots,\omega^{n-1}$. Therefore step 1.1 already lists $n$ eigenvectors of the $n\times n$ adjacency matrix, so it lists all eigenvalues with multiplicity. By [F2], this is the spectrum of $C_n$. [step 1.1, F2, algebra] ∎
