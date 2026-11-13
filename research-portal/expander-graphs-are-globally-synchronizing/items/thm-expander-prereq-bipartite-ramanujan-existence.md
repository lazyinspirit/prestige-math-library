---
id: thm-expander-prereq-bipartite-ramanujan-existence
kind: theorem
title: Bipartite Ramanujan existence and the centered spectrum
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-prereq-loop-compatible-networks
  - prop-expander-prereq-regular-mean-zero-spectrum
dependency_roles:
  def-expander-prereq-loop-compatible-networks: mathematical-premise
  prop-expander-prereq-regular-mean-zero-spectrum: mathematical-premise
external_input: true
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: literature-derived
sources:
  references:
    - title: "Interlacing families I: Bipartite Ramanujan graphs of all degrees"
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v182-n1-p07-p.pdf
      locator: Section 2.1, printed p. 308; Theorem 5.5 and its proof, printed p. 316
      statement: For every integer d at least 3 there is an infinite sequence of
        d-regular bipartite Ramanujan graphs. In the source convention the
        eigenvalues d and, for a bipartite graph, -d are trivial; every
        nontrivial eigenvalue lies between -2 sqrt(d-1) and 2 sqrt(d-1). The
        proof produces successive graphs with twice as many vertices.
      hypotheses: An integer d at least 3; finite d-regular bipartite graphs, with
        Ramanujan defined using the source's trivial-eigenvalue convention.
      reading_limits: Read Section 2.1 and the statement and proof paragraph of
        Theorem 5.5. The interlacing-polynomial, signing and 2-lift machinery
        used by the source was not reconstructed or independently verified. The
        centered-spectrum comparison below is a local deduction, not a claim
        attributed to the source.
dependency_level: 2
---

## Statement

For every integer $d\ge3$ there is a sequence of finite simple $d$-regular bipartite graphs whose vertex counts tend to infinity and whose adjacency eigenvalues other than the source's trivial values $d$ and $-d$ lie in $[-2\sqrt{d-1},2\sqrt{d-1}]$. Here bipartite means that the vertices have two parts and every edge joins different parts; $d$-regular means that each vertex has exactly $d$ neighbors. The adjacency matrix $A$ has entry one at adjacent pairs and zero elsewhere.

For each such graph, with $n$ vertices and all-ones matrix $J$, the centered adjacency norm satisfies $\|A-(d/n)J\|_{\mathrm{op}}\ge d>2\sqrt{d-1}$. Thus the existence theorem with both trivial values excluded does not itself provide the centered absolute-spectrum bound $\|A-(d/n)J\|_{\mathrm{op}}\le2\sqrt{d-1}$.

## External input

The existence and nontrivial-eigenvalue bound in the first paragraph are imported from Marcus, Spielman and Srivastava, Section 2.1 and Theorem 5.5. Their proof starts with a complete bipartite graph and obtains graphs of twice the preceding order; the cited interlacing and lifting machinery is not reconstructed here.

## Facts & Assumptions

**Given:** An integer $d\ge3$ and a graph supplied by the external input, with bipartition $V=L\sqcup R$.

**Goal:** Establish the stated comparison with the centered adjacency norm.

[F1] The imported theorem supplies the graphs and their nontrivial spectral bound, with both $d$ and $-d$ designated trivial in the bipartite case.

[F2] For a finite simple graph, adjacency is represented by its symmetric zero-diagonal $0$–$1$ matrix; its row sums are its vertex degrees ([[def-expander-prereq-loop-compatible-networks]]).

[F3] For a symmetric nonnegative matrix with constant row sum $d>0$, the centered operator $A-(d/n)J$ agrees with $A$ on the vectors of coordinate sum zero, and its norm is the norm of that restriction ([[prop-expander-prereq-regular-mean-zero-spectrum]]).

## Proof

1.1 Counting edges from the two sides gives $d|L|=d|R|$, so $|L|=|R|$. Define $v$ to be $1$ on $L$ and $-1$ on $R$. It is nonzero and has coordinate sum zero. Each neighbor of a vertex lies in the opposite part, and every vertex has $d$ neighbors; therefore $Av=-dv$. [given, F2, algebra]

2.1 By [F3], $(A-(d/n)J)v=Av=-dv$. The definition of operator norm applied to this nonzero vector gives $\|A-(d/n)J\|_{\mathrm{op}}\ge d$. Since $d\ge3$, $(d-2)^2>0$, and hence $d^2>4(d-1)$, which gives $d>2\sqrt{d-1}$. Together with the imported existence statement [F1], this proves the claim and the stated limitation of the bipartite convention. [F1, F3, step 1.1, algebra] ∎
