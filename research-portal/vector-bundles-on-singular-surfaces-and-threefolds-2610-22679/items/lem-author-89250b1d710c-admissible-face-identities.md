---
id: lem-author-89250b1d710c-admissible-face-identities
kind: lemma
title: Admissible face restrictions and their cycle identities
status: draft
domain: mathematics
deps:
  - lem-author-89250b1d710c-face-coordinate-geometry
  - lem-author-89250b1d710c-cartier-face-length
  - lem-author-89250b1d710c-cycle-open-locality
  - thm-author-89250b1d710c-bloch-simplicial-cycle-input
  - thm-author-89250b1d710c-smooth-local-geometry-input
  - math:def-free-abelian-group
dependency_roles:
  lem-author-89250b1d710c-face-coordinate-geometry: mathematical-premise
  lem-author-89250b1d710c-cartier-face-length: mathematical-premise
  lem-author-89250b1d710c-cycle-open-locality: mathematical-premise
  thm-author-89250b1d710c-bloch-simplicial-cycle-input: mathematical-premise
  thm-author-89250b1d710c-smooth-local-geometry-input: mathematical-premise
  math:def-free-abelian-group: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement
Let $k$ be a field, $X$ smooth of finite type over $k$, and $r,n\geq0$. Write $z^r(X,n)$ for the free abelian group on integral closed subschemes $W\subset X\times\Delta^n$ of codimension $r$ meeting every nonempty coordinate face properly: each intersection component has codimension $r$ in the face, and an empty intersection is allowed. For $n\geq1$, define
$$d_i^n[W]=\sum_T\ell_{\mathcal O_{W,\eta_T}}(\mathcal O_{W,\eta_T}/(t_i))[T],$$
where $T$ runs over the components of $W\cap\{t_i=0\}$ and the target face is identified with $X\times\Delta^{n-1}$ in increasing coordinate order. The sum is zero if the intersection is empty. These formulas give homomorphisms $d_i^n:z^r(X,n)\to z^r(X,n-1)$ and, for $n\geq2$ and $0\leq i<j\leq n$, satisfy $d_i^{n-1}d_j^n=d_{j-1}^{n-1}d_i^n$ as equalities of integral cycles. Neither separatedness nor pure dimension is assumed for $X$.

## Facts & Assumptions

**Given:** $k,X,r,n$ and the groups in the Statement.

**Goal:** Establish finite coefficients, admissibility and the cycle-level face identities.

[F1] Coordinate faces are regular embeddings with the stated order identifications. [[lem-author-89250b1d710c-face-coordinate-geometry]]

[F2] A proper single-coordinate intersection has the specified local tensor-resolution length. [[lem-author-89250b1d710c-cartier-face-length]]

[F3] Cycle equality, the relevant codimension conditions and the displayed lengths are open local. [[lem-author-89250b1d710c-cycle-open-locality]]

[F4] The separated equidimensional smooth case, including the simplicial identity with intersection multiplicities, is an external input. [[thm-author-89250b1d710c-bloch-simplicial-cycle-input]]

[F5] A smooth finite-type scheme admits a cover by integral smooth affine opens. [[thm-author-89250b1d710c-smooth-local-geometry-input]]

[F6] Generator images extend uniquely to homomorphisms. [[math:def-free-abelian-group]]

## Proof

1.1 By [F5], cover $X$ by integral smooth affine opens $U$. Each is separated and equidimensional, so [F4] applies. Restrictions of admissible generators remain admissible by [F3]. [F3, F4, F5, construct]

1.2 At a component $T$ of a single face intersection, put $A=\mathcal O_{X\times\Delta^n,\eta_T}$ and let $I$ define $W$ there. By [F1], $t_i$ is a nonzerodivisor on $A$. Properness prevents $W$ from lying in the face, so $t_i\notin I$; since $\eta_T$ is generic in the intersection, $\sqrt{I+(t_i)}$ is the maximal ideal of $A$. The Tor coefficient in [F4] is therefore the finite quotient length in [F2]. This is also the length over $A/I=\mathcal O_{W,\eta_T}$, since the submodules coincide. [F1, F2, F4, given]

2.1 The intersection has finitely many components because it is noetherian. The global sum consequently has finite coefficients and restricts to the local face cycles by [F3] and step 1.2. Those local cycles are admissible by [F4]; [F3] detects the codimension conditions globally. Extend to a homomorphism by [F6]. [F3, F4, F6, step 1.2, construct]

3.1 Restrict the two sides of the claimed identity to each open in step 1.1. Both successive face operations commute with restriction by [F3] and step 1.2. On each open they agree by [F4], with the same target face identified by [F1]. Local detection in [F3] gives equality of global cycles with all coefficients. This proves the lemma; compatibility of multiplicities is imported in [F4]. [F1, F3, F4, step 1.1, step 1.2, step 2.1] ∎
