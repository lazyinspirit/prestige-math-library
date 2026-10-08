---
id: def-cg-large-spherical-metric-flag-and-almost-negative-matrix
kind: definition
title: "Finite large spherical complexes, their almost-negative matrices, the metric flag condition, and links"
status: published
origin: pipeline
dependency_level: 7
deps:
  - def-cg-spherical-gram-simplex-and-angular-link
  - lem-cg-spherical-simplex-existence-and-link-gram-formula
  - def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric
  - def-cg-euclidean-cone-and-spherical-join-metrics
  - def-abstract-simplicial-complex
  - def-simplicial-subcomplex-star-closure-and-link
  - def-metric-space
  - def-definiteness-inertia-and-signature-data-over-the-reals
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Ruth Charney and Michael W. Davis, The Euler characteristic of a nonpositively curved, piecewise Euclidean manifold, Pacific J. Math. 171 (1995)"
      url: "https://msp.org/pjm/1995/171-1/pjm-v171-n1-p04-s.pdf"
      locator: "2.1.1 (large piecewise spherical spaces), 2.3-2.4.1 (cosine matrices of spherical simplices; links of simplices of size $>\\pi/2$ again have size $>\\pi/2$), 2.7 (flag complexes), 2.9 (the definition of a metric flag complex), 2.10 (Moussong's Lemma for simplices of size $>\\pi/2$)"
    - title: "Philip Moeller, A note on almost negative matrices and Gromov-hyperbolic Coxeter groups, arXiv:2205.07791"
      url: "https://arxiv.org/pdf/2205.07791"
      locator: "Section 2 (almost negative matrices, the nerve complex $N(A)$, the link matrix $\\operatorname{lk}(I,A)$ and Lemma 2.1 identifying links of nerves with nerves of link matrices)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.3 (geometric links) and I.7.1–I.7.3, printed pp. 520–521 (metric flag definition and link inheritance); Sections 7.1 and 12.1 for the Coxeter-nerve application"
    - title: "G. Moussong, Hyperbolic Coxeter groups, PhD thesis (Ohio State University 1988), McCammond transcription"
      url: "https://people.math.osu.edu/davis.12/papers/moussongdissertation.pdf"
      locator: "Chapter 1, Sections 4–5 (local geodesics and girth of finite S-complexes); Chapter 2, Sections 7–8 (almost-negative matrices and their nerves)"
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Fix the following notions; no theorem about them is asserted here beyond well-definedness.

**(1) Finite spherical complexes.** Let $K$ be a finite abstract simplicial complex ([[def-abstract-simplicial-complex]]) whose simplices $\sigma$ carry positive-definite Gram matrices $C_\sigma$ of diagonal $1$ on their vertices, compatible on common faces, and let $X=|K|_C$ be the associated finite spherical complex with its chain metric $d$ and its truncated angular metric $d_\pi=\min\{\pi,d\}$ ([[lem-cg-spherical-simplex-existence-and-link-gram-formula]](iii), [[def-cg-spherical-gram-simplex-and-angular-link]], [[def-cg-euclidean-cone-and-spherical-join-metrics]](2)). $X$ is **large** when for every simplex $\sigma$ and all distinct $s,t\in\sigma$ the edge length $\arccos c_{st}$ is at least $\pi/2$, equivalently every off-diagonal entry of every $C_\sigma$ is at most $0$. Here “large” names this edge-length condition; it does not assert the distinct unique-geodesic-below-$\pi$ property called “large” for piecewise-spherical spaces in Charney–Davis §2.1.1.

**(2) The associated almost-negative matrix.** Let $X$ be large. Since $K$ is simplicial, a pair of vertices spans at most one edge. For an edge $\{s,t\}$, let $c_{st}=c_{ts}$ be the corresponding entry of its prescribed Gram matrix, and let $\ell_{st}:=\arccos(c_{st})\in[\pi/2,\pi)$ be its one-cell spherical length. Define the symmetric matrix $C=C(X)$ on the vertex set by $c_{ss}=1$, by the prescribed edge entry $c_{st}$ when $\{s,t\}$ is an edge of $K$, and by $c_{st}=c_{ts}:=-1$ when $\{s,t\}$ is not an edge. Its off-diagonal entries are non-positive: this is the **almost-negative matrix** associated with $X$. The edge entry is taken from the prescribed local Gram data because a gluing's global chain metric need not restrict to a cell metric in general ([[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]]).

**(3) The metric flag condition.** Let $X$ be large. A set $T$ of vertices of $K$ is **pairwise adjacent** when every two distinct members of $T$ span an edge; in that case $C_T:=(c_{st})_{s,t\in T}$ is the cosine matrix of $T$. We regard the empty matrix as positive definite, so the empty set passes this test. Say that $X$ is **metric flag** when for every pairwise adjacent $T$: $T$ is the vertex set of a simplex of $K$ if and only if $C_T$ is positive definite ([[def-definiteness-inertia-and-signature-data-over-the-reals]]). The forward implication is automatic for complexes of spherical simplices, since a principal submatrix of a positive-definite Gram matrix is positive definite; the content of the condition is the converse. A **large metric flag complex** is a large finite spherical complex satisfying (3).

**(4) Links.** For a face $F$ of $X$ (that is, a simplex of $K$) the **link** $\operatorname{Lk}_X(F)$ is the finite spherical complex whose simplices are the links $\operatorname{Lk}_\sigma(F)$ of the simplices $\sigma\supseteq F$ ([[def-simplicial-subcomplex-star-closure-and-link]]), carrying the Gram matrices obtained by the iterated Schur complement of [[lem-cg-spherical-simplex-existence-and-link-gram-formula]](iv): its vertices are the vertices $t\notin F$ for which $F\cup\{t\}$ is a simplex of $K$, and its cells are the sets $T$ disjoint from $F$ with $F\cup T$ a simplex of $K$. Adjacency to every vertex of $F$ alone does not suffice: the resulting clique may have a non-positive-definite cosine matrix. No assertion is made here about complexes with edges shorter than $\pi/2$; the metric flag test is used only in the large case.
