---
id: lem-qa-21-pure-state-trace-distance-from-vector-error
kind: lemma
title: Pure-state trace distance is bounded by vector error
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qc-trace-norm
  - thm-qc-trace-norm-spectral-formula
  - def-qc-dirac-notation-conversion
  - def-inner-product-norm
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: None; only finite-dimensional spectral decomposition and inner-product identities are used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §1.1.3, Eqs. (1.181)–(1.184)
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Appendix A.5"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Let $H$ be a finite-dimensional complex inner-product space and let $u,v\in H$ be unit vectors. Write $P_u=|u\rangle\langle u|$ and $P_v=|v\rangle\langle v|$ using the Dirac convention of [[def-qc-dirac-notation-conversion]], and define their trace distance by $D(P_u,P_v):=\tfrac12\|P_u-P_v\|_1$, where $\|\cdot\|_1$ is the trace norm of [[def-qc-trace-norm]]. Then
$$D(P_u,P_v)\le \|u-v\|.$$

## Facts & Assumptions

**Given:** A finite-dimensional complex-inner-product space $H$ and unit vectors $u,v\in H$.

[F1] [[def-qc-dirac-notation-conversion]]: $|u\rangle\langle u|$ sends $z$ to $\langle z,u\rangle_{\rm root}u$, and its coordinate matrix in an orthonormal basis is $[u][u]^\dagger$.

[F2] [[def-inner-product-norm]]: $\|x\|^2=\langle x,x\rangle$ for the root inner product, linear in its first argument.

[F3] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: $|\langle x,y\rangle|\le\|x\|\|y\|$, with equality exactly when the vectors are linearly dependent.

[F4] [[def-qc-trace-norm]]: $\|A\|_1$ is the sum of the singular values of $A$, counted on its finite-dimensional domain.

[F5] [[thm-qc-trace-norm-spectral-formula]]: $\|A\|_1=\operatorname{tr}\sqrt{A^\dagger A}$.

[F6] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional normal endomorphism has an orthonormal eigenbasis.

## Proof

**Given:** As in Facts & Assumptions.

1.1 Put $c:=\langle u|v\rangle_D$ and $s:=\sqrt{1-|c|^2}$. By [F3], $0\le s\le1$. If $s=0$, equality in Cauchy–Schwarz makes $v$ a unit scalar multiple of $u$, so $P_v=P_u$ and $D(P_u,P_v)=0$. [given, F1, F2, F3, algebra]

1.2 Suppose $s>0$ and set $e:=(v-cu)/s$. The Dirac convention makes $\langle u|e\rangle_D=0$, and direct expansion gives $\|e\|=1$. In the orthonormal basis $(u,e)$ of their span, $P_u-P_v$ has matrix $\begin{pmatrix}s^2&-cs\\-\overline c\,s&-s^2\end{pmatrix}$; it is zero on the orthogonal complement. This Hermitian matrix has trace $0$ and determinant $-s^2$, hence eigenvalues $s,-s$. By [F4]–[F6], $\|P_u-P_v\|_1=2s$, so $D(P_u,P_v)=s$. [given, F1, F4, F5, F6, algebra]

2.1 For either case, $\|u-v\|^2=2-2\operatorname{Re}c\ge2(1-|c|)$, while $s^2=(1-|c|)(1+|c|)\le2(1-|c|)$. Thus $D(P_u,P_v)=s\le\|u-v\|$, including the $s=0$ case from step 1.1. [given, F2, step 1.1, step 1.2, algebra] ∎
