---
id: lem-qa-30-exp-quadratic-bound
kind: lemma
title: "Scalar exponential bound for bounded losses"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qa-30-mmw-game
  - def-qa-30-sdp-primal-dual-pair
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-real-and-complex-inner-product-space
  - def-functional-calculus-for-a-normal-endomorphism
  - def-non-negative-and-positive-operator
  - def-qc-dirac-notation-conversion
  - def-real-exponential-function-and-e
  - lem-exponential-series-has-infinite-radius
  - def-factorial-and-falling-factorial
  - def-integer-power
  - lem-power-monotone
  - thm-geometric-series
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

For $0<\eta\le1$ and $x\in[-1,1]$,
$$\exp(-\eta x)\le1-\eta x+\eta^2.$$
Consequently, if $M=M^*$ and $-I\preceq M\preceq I$, then $\exp(-\eta M)\preceq I-\eta M+\eta^2I$.

## Facts & Assumptions

**Given:** $0<\eta\le1$, $x\in[-1,1]$, and a Hermitian matrix $M$ with $-I\preceq M\preceq I$. The order inequalities mean that $I-M$ and $I+M$ have nonnegative quadratic forms.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional normal operator has an orthonormal eigenbasis.

[F2] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] and [[def-real-and-complex-inner-product-space]]: $\langle Mv,w\rangle=\langle v,M^*w\rangle$ and the inner product is conjugate-symmetric.

[F3] [[def-functional-calculus-for-a-normal-endomorphism]]: if $M=\sum_j\lambda_jP_j$, then $f(M)=\sum_jf(\lambda_j)P_j$ for $f$ on its spectrum.

[F4] [[def-real-exponential-function-and-e]] and [[lem-exponential-series-has-infinite-radius]]: $\exp(u)=\sum_{k\ge0}u^k/k!$, and this series converges absolutely for every real input, so consecutive tails may be grouped.

[F5] [[def-factorial-and-falling-factorial]], [[def-integer-power]], and [[lem-power-monotone]]: $(k+1)!=(k+1)k!$, powers satisfy $a^{n+1}=a^na$, and $0\le u\le1$ implies $u^n\le1$.

[F6] [[thm-geometric-series]]: $\sum_{j\ge0}2^{-j}=2$.

[F7] [[def-non-negative-and-positive-operator]] and [[def-qa-30-sdp-primal-dual-pair]]: nonnegative and positive-semidefinite operators have the stated quadratic-form meanings.

## Proof

**Proof technique:** direct.

1.1 Put $u=-\eta x$, so $|u|\le1$. From [F5] and $2!=2$, induction gives $k!\ge2^{k-1}$ for $k\ge2$: if it holds at $k\ge2$, then $(k+1)!=(k+1)k!\ge3\cdot2^{k-1}>2^k$, so the bound is strict for $k\ge3$. Thus [F6] gives $\sum_{k\ge2}1/k!\le1/2+1/6+\sum_{k\ge4}2^{-(k-1)}=1/2+1/6+(1/8)\sum_{j\ge0}2^{-j}=11/12<1$. If $u=0$, [F4] gives $\exp(u)=1=1+u+u^2$. If $0<u\le1$, then $u^k=u^2u^{k-2}\le u^2$ for $k\ge2$ by [F5], so [F4] gives $\exp(u)=1+u+\sum_{k\ge2}u^k/k!\le1+u+u^2\sum_{k\ge2}1/k!<1+u+u^2$. If $u=-v\le0$ with $0\le v\le1$, the absolute convergence in [F4] allows consecutive grouping because the partial sums after each pair are a subsequence of the ordinary partial sums and hence have the same limit; each pair after the quadratic term is $-v^{2j+3}/(2j+3)!+v^{2j+4}/(2j+4)!=-\frac{v^{2j+3}}{(2j+3)!}(1-\frac{v}{2j+4})\le0$ for $j\ge0$. Hence $\exp(-v)\le1-v+v^2/2\le1-v+v^2$. In every case, $\exp(u)\le1+u+u^2$. [given, F4, F5, F6, algebra]

2.1 The scalar bound in step 1.1 gives $\exp(-\eta x)\le1-\eta x+\eta^2x^2\le1-\eta x+\eta^2$. Since $M=M^*$, it is normal, so [F1] gives an orthonormal eigenbasis $Me_k=\lambda_ke_k$. For each unit $e_k$, [F2] gives $\lambda_k=\langle Me_k,e_k\rangle=\langle e_k,Me_k\rangle=\overline{\lambda_k}$, hence $\lambda_k$ is real; testing the order bounds on $e_k$ gives $1-\lambda_k\ge0$ and $1+\lambda_k\ge0$, so $\lambda_k\in[-1,1]$. By [F3], $\exp(-\eta M)$ and $I-\eta M+\eta^2I$ are diagonal in this basis, and applying the scalar bound to each eigenvalue shows their difference is positive semidefinite by [F7]. [given, F1, F2, F3, F7, step 1.1, algebra] ∎
