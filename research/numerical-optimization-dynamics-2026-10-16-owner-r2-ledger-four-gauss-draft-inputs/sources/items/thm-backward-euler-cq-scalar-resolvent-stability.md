---
id: thm-backward-euler-cq-scalar-resolvent-stability
kind: theorem
title: Scalar resolvent stability for backward-Euler convolution quadrature
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-backward-euler-convolution-quadrature
  - lem-backward-euler-cq-weights-and-partial-sums
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: None. The maximum is over a finite sequence and the estimate is choice-free.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Ralf Hiptmair, Advanced Numerical Methods for Computational Science and Engineering, lecture notes (2023), §3.3.3
      url: https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf
    - title: C. Lubich, Convolution Quadrature and Discretized Operational Calculus I, Numerische Mathematik 52 (1988), §§1–2
      url: https://people.math.ethz.ch/~hiptmair/Seminars/CONVQUAD/Articles/LUB88.pdf
---

## Statement

Let $0<\alpha<1$, $\lambda\ge0$, $T>0$, and $h=T/N$ with integer $N\ge1$.
For $g^1,\ldots,g^N\in\mathbb R$, let $V^0=0$ and let $V^n$ solve the
backward-Euler CQ recurrence

$$\bar\partial_h^\alpha V^n+\lambda V^n=g^n,$$

where $\bar\partial_h^\alpha$ is defined in
[[alg-backward-euler-convolution-quadrature]]. Then

$$\max_{0\le n\le N}|V^n| \le \Gamma(1-\alpha)(2T)^\alpha\max_{1\le n\le N}|g^n|.$$

## Facts & Assumptions

**Given:** $0<\alpha<1$, $\lambda\ge0$, $h=T/N$, $V^0=0$, and forcing
values $g^n$.

[F1] [[alg-backward-euler-convolution-quadrature]]: the recurrence is
$(h^{-\alpha}+\lambda)V^n=g^n-h^{-\alpha}\sum_{j=1}^n\omega_jV^{n-j}$.

[F2] [[lem-backward-euler-cq-weights-and-partial-sums]]:
$\omega_j<0$ for $j\ge1$, $\sum_{j=0}^n\omega_j=p_n>0$, and
$p_n\ge (n+1)^{-\alpha}/\Gamma(1-\alpha)$.

## Proof

1.1 Write $G=\max_{1\le n\le N}|g^n|$ and $M=\max_{0\le n\le N}|V^n|$. If $M=0$ the claim is immediate. Otherwise choose the least index $n\ge1$ with $|V^n|=M$. Taking absolute values in [F1] and using $-\omega_j>0$ gives $$\bigl(h^{-\alpha}+\lambda\bigr)M\le G+h^{-\alpha}M\sum_{j=1}^n(-\omega_j).$$ The sum on the right is $1-p_n$ by [F2], so rearranging yields $(\lambda+h^{-\alpha}p_n)M\le G$. [given, F1, F2, choose, algebra]

2.1 Since $n\le N$, $h(n+1)\le h(N+1)=T+h\le2T$. By [F2], $h^{-\alpha}p_n\ge(2T)^{-\alpha}/\Gamma(1-\alpha)$. As $\lambda\ge0$, step 1.1 gives $M\le G/(h^{-\alpha}p_n)\le\Gamma(1-\alpha)(2T)^\alpha G$. Since $V^0=0$, this is the stated estimate. [step 1.1, F2, algebra] ∎