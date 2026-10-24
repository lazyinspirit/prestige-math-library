---
id: prop-qc-trace-holder-inequality
kind: proposition
title: Trace Holder Inequality
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-linear-map
  - def-qc-trace-norm
  - thm-qc-trace-norm-duality-and-norm-properties
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - prop-adjoint-algebra
  - def-trace-of-an-endomorphism
  - def-coordinate-column-and-matrix-of-a-linear-map
  - def-real-and-complex-inner-product-space
  - lem-complex-conjugation-and-modulus-laws
  - thm-singular-value-decomposition
  - thm-bessel-inequality-and-finite-parseval-identity
justified_by: []
proof_strategy: direct
axiom_use: None; finite SVD bases and orthonormal-basis expansions establish the operator-norm maxima, and finite-dimensional adjoints are used.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information (2018 author-hosted draft), Chapter 1, §1.1.3, Eq. (1.174)
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27), Appendices A.5 and A.7"
      url: https://arxiv.org/pdf/1907.09415v6
---

## Statement

For finite-dimensional complex inner-product spaces $H,K$ and compatible
linear maps $A,B:H\to K$ ([[def-linear-map]]), the composite $B^*A$ is an
endomorphism of $H$ and

$$|\operatorname{tr}_H(B^*A)|\le\|A\|_1\,\|B\|.$$

## Facts & Assumptions
**Given:** The finite-dimensional spaces and maps in the Statement.

[F1] Trace-norm duality says $\|A\|_1=\max_{\|C\|\le1}|\operatorname{tr}_H(C^*A)|$ ([[thm-qc-trace-norm-duality-and-norm-properties]]).

[F2] The operator norm is $0$ when $H=0$ and otherwise is defined as the maximum of $\|Bv\|$ over unit vectors ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F3] For real $\beta$, $(\beta^{-1}B)^*=\beta^{-1}B^*$ when $\beta>0$, and $0^*=0$ ([[prop-adjoint-algebra]]).

[F4] The trace is computed by diagonal sums in any ordered basis and vanishes on the zero space ([[def-trace-of-an-endomorphism]]).

[F5] The root inner product is linear in its first argument, and the induced length satisfies $\|v\|^2=\langle v,v\rangle$ ([[def-real-and-complex-inner-product-space]]).

[F6] Complex modulus is nonnegative and multiplicative ([[lem-complex-conjugation-and-modulus-laws]]).

[F7] An SVD expresses $B$ using its positive singular values and orthonormal domain and codomain vectors ([[thm-singular-value-decomposition]]).

[F8] For an orthonormal basis, the sum of the squared coordinate moduli equals the squared vector length, including the empty-basis case ([[thm-bessel-inequality-and-finite-parseval-identity]]).

[F9] In an ordered basis, the $j$-th matrix column of an endomorphism is the coordinate column of its image on the $j$-th basis vector ([[def-coordinate-column-and-matrix-of-a-linear-map]]).

## Proof

1.1 Put $\beta=\|B\|$. If $H=0$, [F2] defines $\beta=0$. If $H\ne0$, choose an SVD of $B$ from [F7], with positive singular values $t_1\ge\cdots\ge t_q>0$ and orthonormal domain vectors $(u_j)$. If $q>0$, [F8] gives $\|Bv\|^2=\sum_{j\le q}t_j^2|\langle v,u_j\rangle|^2\le t_1^2$ for every unit vector $v$, with equality at $u_1$. If $q=0$, the SVD gives $B=0$, and every unit vector attains $0$. Thus the maximum in [F2] exists in all cases. When $\beta=0$, every unit vector has $Bv=0$; scaling and linearity give $B=0$ (also when $H=0$). By [F3], $B^*=0$, and then $B^*A=0$, whose trace is $0$ by [F4]; both sides of the inequality are $0$. [given, F2, F3, F4, F7, F8, algebra]

2.1 Suppose $\beta>0$ and put $C=B/\beta$. For every unit vector $v$, $$\|Cv\|^2=\left\langle\beta^{-1}Bv,\beta^{-1}Bv\right\rangle =\beta^{-2}\|Bv\|^2,$$ so nonnegativity gives $\|Cv\|=\|Bv\|/\beta\le1$ by [F2]. Applying the argument in step 1.1 with $C$ in place of $B$ shows its defining maximum exists and is at most $1$, hence $\|C\|\le1$. Trace-norm duality [F1] gives $|\operatorname{tr}_H(C^*A)|\le\|A\|_1$. [F1, F2, F5, step 1.1, algebra]

3.1 Since $\beta$ is a positive real, [F3] gives $C^*=\beta^{-1}B^*$. Fix an ordered basis of $H$. The coordinate column of $\beta^{-1}(B^*A)e_j$ is $\beta^{-1}$ times the coordinate column of $(B^*A)e_j$, by uniqueness of coordinates and [F9]; hence their diagonal entries have the same scaling. Summing them by [F4] gives $\operatorname{tr}_H(C^*A)=\beta^{-1}\operatorname{tr}_H(B^*A)$. Thus step 2.1 and modulus homogeneity [F6] yield $\beta^{-1}|\operatorname{tr}_H(B^*A)|\le\|A\|_1$. Multiplying by $\beta$ proves the inequality when $\beta>0$; step 1.1 proves the $\beta=0$ case. [F3, F4, F6, F9, step 2.1, algebra] ∎
