---
id: prop-complete-invariant-flags-and-upper-triangular-matrices
kind: proposition
title: "Complete invariant flags are equivalent to upper-triangular matrices"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-triangularisable-endomorphism, def-invariant-subspace-and-induced-quotient-operator, def-coordinate-column-and-matrix-of-a-linear-map]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Result 5.39"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal B=(v_1,\ldots,v_n)$ be an ordered basis of $V$, and put $V_j=\operatorname{span}(v_1,\ldots,v_j)$, with $V_0=0$. Then $[T]_{\mathcal B}^{\mathcal B}$ is upper triangular if and only if every $V_j$ is $T$-invariant. Equivalently, upper-triangular bases are exactly the bases adapted to complete invariant flags
$$0=V_0\subset V_1\subset\cdots\subset V_n=V,\qquad \dim V_j=j.$$

## Facts & Assumptions

**Given:** An endomorphism $T:V\to V$ and an ordered basis $\mathcal B=(v_1,\ldots,v_n)$.

[L1] Triangularisability means that the matrix of $T$ in some ordered basis is upper triangular ([[def-triangularisable-endomorphism]]).

[L2] A subspace $W$ is $T$-invariant when $T(W)\subseteq W$ ([[def-invariant-subspace-and-induced-quotient-operator]]).

[L3] The $j$-th matrix column is the coordinate column of $T(v_j)$ in the ordered basis ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 If the matrix is upper triangular, its $j$-th column has no nonzero entry below row $j$, so $T(v_j)\in V_j$; linearity then gives $T(V_j)\subseteq V_j$ for every $j$. [L1, L2, L3]

2.1 Conversely, if every $V_j$ is invariant, then $T(v_j)\in V_j$, so the $j$-th matrix column has zero entries below row $j$ and the matrix is upper triangular; the statements include the empty flag for $V=0$ and the flag $0\subset V$ in dimension one. [step 1.1, L1, L2, L3] ∎
