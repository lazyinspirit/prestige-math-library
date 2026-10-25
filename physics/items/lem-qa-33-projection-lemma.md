---
id: lem-qa-33-projection-lemma
kind: lemma
title: Projection lemma for a large penalty
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: None; the argument uses only finite-dimensional spectral decomposition and scalar inequalities.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: Lemma 1, §3, PDF pp. 4–5
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 14, §14.3.1, PDF pp. 118–120
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space and let $S\subseteq H$ be a nonzero subspace. Let $H_1,H_2$ be Hermitian endomorphisms, with $H_2|_S=0$ and $\langle H_2v,v\rangle\ge J\|v\|^2$ for every $v\in S^\perp$, where $J>2\|H_1\|$. Write $\lambda_S=\lambda_{\min}(H_1|_S)$. Then

$$\lambda_S-\frac{\|H_1\|^2}{J-2\|H_1\|}\le\lambda_{\min}(H_1+H_2)\le\lambda_S.$$

Here $H_1|_S$ is the compression $P_SH_1P_S$ on $S$, where $P_S$ is orthogonal projection. Assume $S\ne\{0\}$ so that $\lambda_S$ is defined. If $S^\perp=\{0\}$, the lower spectral hypothesis is vacuous and the conclusion reduces to equality.

## Facts & Assumptions

**Given:** A finite-dimensional complex-inner-product space $H$, a nonzero subspace $S$, Hermitian maps $H_1,H_2$, and the penalty and norm hypotheses in the Statement.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional normal endomorphism has an orthonormal basis of eigenvectors.

## Proof

1.1 Set $K=\|H_1\|$. By [F1], the Hermitian compression $H_1|_S$ has a unit eigenvector $u\in S$ with eigenvalue $\lambda_S$. Since $H_2u=0$, its Rayleigh quotient for $H_1+H_2$ is $\lambda_S$, so $\lambda_{\min}(H_1+H_2)\le\lambda_S$. [given, F1, choose]

1.2 If $S^\perp=\{0\}$, then $S=H$ and $H_2=0$, so the conclusion is equality. Otherwise both $S$ and $S^\perp$ are nonzero. For a unit vector $x\in H$, write $x=\alpha u+\beta w$ with $u\in S$, $w\in S^\perp$ unit and $\alpha,\beta\ge0$, $\alpha^2+\beta^2=1$; absorb the phases into $u,w$. If either component of $x$ is zero, choose any unit vector in its nonzero subspace for the unused direction. Self-adjointness of $H_2$ and $H_2|_S=0$ make its cross terms zero, so $\langle H_2x,x\rangle\ge J\beta^2$. Also $\langle H_1u,u\rangle\ge\lambda_S$, $\langle H_1w,w\rangle\ge-K$, and $|\langle H_1u,w\rangle|\le K$. [given, F1, choose, algebra]

2.1 Expanding the quadratic form and using $\lambda_S\ge-K$ gives $\langle(H_1+H_2)x,x\rangle\ge\lambda_S+(J-2K)\beta^2-2K\beta.$ Indeed the $S$-diagonal term is $\alpha^2\langle H_1u,u\rangle\ge\alpha^2\lambda_S=\lambda_S-\beta^2\lambda_S\ge\lambda_S-K\beta^2$, the $S^\perp$ term is at least $-K\beta^2$, and $\alpha\le1$ bounds the cross term below by $-2K\beta$. [step 1.2, algebra]

3.1 The scalar quadratic $(J-2K)\beta^2-2K\beta$ has minimum $-K^2/(J-2K)$ by completing the square. Thus every unit Rayleigh quotient is at least $\lambda_S-K^2/(J-2K)$; [F1] identifies the least eigenvalue with the minimum Rayleigh quotient. This proves the lower bound. [F1, step 2.1, algebra] ∎
