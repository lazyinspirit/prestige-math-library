---
id: thm-spectral-resolution-and-polynomial-spectral-projections
kind: theorem
title: "A normal endomorphism is a sum of its eigenvalues times pairwise orthogonal projections, and each spectral projection is a polynomial in the endomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-spectral-theorem-for-normal-endomorphisms, cor-primary-projections-are-polynomials-in-the-endomorphism, def-orthogonal-projection, thm-self-adjoint-idempotents-are-exactly-orthogonal-projections]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $V$ be a finite-dimensional complex inner product space and let $T:V\to V$
be normal. If $\lambda_1,\dots,\lambda_r$ are the distinct eigenvalues of $T$,
then there are pairwise orthogonal projections $P_1,\dots,P_r$ such that

$$T=\sum_{j=1}^r \lambda_j P_j,$$

each $P_j$ projects onto the eigenspace $E_{\lambda_j}(T)$, and every $P_j$ is
a polynomial in $T$.

## Facts & Assumptions

**Given:** A finite-dimensional complex inner product space $V$ and a normal endomorphism $T:V\to V$ with distinct eigenvalues $\lambda_1,\dots,\lambda_r$.

[L1] A normal complex endomorphism has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[L2] Self-adjoint idempotents are exactly orthogonal projections ([[thm-self-adjoint-idempotents-are-exactly-orthogonal-projections]]).

[L3] In the primary decomposition, each primary projection is a polynomial in the endomorphism ([[cor-primary-projections-are-polynomials-in-the-endomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $V$ has an orthonormal eigenbasis. If $V=0$, then there are no eigenvalues and $T=0$ is the empty sum. Otherwise $V=E_{\lambda_1}(T)\oplus \cdots \oplus E_{\lambda_r}(T)$ with the summands pairwise orthogonal; if $P_j$ is the orthogonal projection onto $E_{\lambda_j}(T)$ and $v=v_1+\cdots+v_r$ with $v_j\in E_{\lambda_j}(T)$, then $Tv=\lambda_1v_1+\cdots+\lambda_r v_r=\sum_{j=1}^r \lambda_j P_jv$, hence $T=\sum_{j=1}^r \lambda_jP_j$. [L1]

2.1 Because the eigenspaces are pairwise orthogonal and the $P_j$ are the corresponding orthogonal projections, one has $P_j^2=P_j$, $P_j^*=P_j$, and $P_iP_j=0$ for $i\ne j$, so the $P_j$ are pairwise orthogonal projections in the sense of [L2]. [L2, step 1.1]

3.1 Since $T$ is diagonalisable with distinct eigenvalues, its primary decomposition is exactly the direct sum of the eigenspaces $E_{\lambda_j}(T)$. Therefore [L3] identifies each projection onto $E_{\lambda_j}(T)$ with a polynomial in $T$. [L3, step 1.1] ∎
