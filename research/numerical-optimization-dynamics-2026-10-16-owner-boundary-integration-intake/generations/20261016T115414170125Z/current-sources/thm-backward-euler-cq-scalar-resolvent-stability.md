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
  - def-real-power
  - cor-exponential-reciprocal-and-positivity
  - thm-real-power-laws
  - thm-real-power-continuity-and-derivatives
  - cor-mean-value-theorem
  - def-finite-sum
  - lem-finite-sum-reindexing-and-fubini
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
For any valid input $(u_0,F^1,\ldots,F^N)$ to
[[alg-backward-euler-convolution-quadrature]], its updates define a unique
sequence $V^0=0,V^1,\ldots,V^N$ satisfying

$$\bar\partial_h^\alpha V^n+\lambda V^n=F^n-\lambda u_0\qquad(1\le n\le N).$$

In particular, for $g^1,\ldots,g^N\in\mathbb R$, use the algorithm with
$u_0=0$ and $F^n=g^n$. Its output sequence $V$ satisfies

$$\bar\partial_h^\alpha V^n+\lambda V^n=g^n,$$

where $\bar\partial_h^\alpha$ is defined in
[[alg-backward-euler-convolution-quadrature]]. Then

$$\max_{0\le n\le N}|V^n| \le \Gamma(1-\alpha)(2T)^\alpha\max_{1\le n\le N}|g^n|.$$

The direct full-history implementation uses exactly $N(N+1)/2$ terms in its
convolution history sums. Retaining the solution sequence $V^0,\ldots,V^N$
requires $N+1$ solution values; this count excludes input and weight storage.

## Facts & Assumptions

**Given:** $0<\alpha<1$, $\lambda\ge0$, $h=T/N$, $V^0=0$, and forcing
values $g^n$.

[F1] [[alg-backward-euler-convolution-quadrature]]: for a general input
$(u_0,F^1,\ldots,F^N)$, the update is
$(h^{-\alpha}+\lambda)V^n=F^n-\lambda u_0-h^{-\alpha}\sum_{j=1}^n\omega_jV^{n-j}$;
for the zero-initial-value input $F^n=g^n$, this is the recurrence in the
stability claim.

[F2] [[lem-backward-euler-cq-weights-and-partial-sums]]:
$\omega_j<0$ for $j\ge1$, $\sum_{j=0}^n\omega_j=p_n>0$, and
$p_n\ge (n+1)^{-\alpha}/\Gamma(1-\alpha)$.

[F3] [[def-real-power]] and
[[cor-exponential-reciprocal-and-positivity]]: for $h>0$ and $\alpha>0$,
$h^{-\alpha}=\exp(-\alpha\log h)>0$.

[F4] [[thm-real-power-laws]] gives $(xy)^{-\alpha}=x^{-\alpha}y^{-\alpha}$
for $x,y>0$. By [[thm-real-power-continuity-and-derivatives]], its derivative
is $-\alpha x^{-\alpha-1}<0$ (positivity follows from [F3]); then
[[cor-mean-value-theorem]] makes $x\mapsto x^{-\alpha}$ decreasing on
$(0,\infty)$ when $\alpha>0$.

[F5] [[def-finite-sum]] defines the finite sums used below, and
[[lem-finite-sum-reindexing-and-fubini]] permits reindexing them by a bijection.

## Proof

1.1 For a general valid input $(u_0,F^1,\ldots,F^N)$, [F3] and $\lambda\ge0$ give $h^{-\alpha}+\lambda>0$. Inductively, once $V^0,\ldots,V^{n-1}$ are defined, the update divides a specified real numerator by this positive denominator, so it gives a unique real $V^n$. Rearranging the update gives $\bar\partial_h^\alpha V^n+\lambda V^n=F^n-\lambda u_0$ by the operator definition in the algorithm. Induction proves the stated well-definedness and equation for the whole sequence. [given, F1, F3, algebra, induction]

1.2 At update $n$, [F1] includes exactly $n$ terms in the history sum. Thus the total count is $S=\sum_{n=1}^N n$. Reindexing by the bijection $n\mapsto N+1-n$ using [F5] also gives $S=\sum_{n=1}^N(N+1-n)$. Adding termwise yields $2S=\sum_{n=1}^N(N+1)=N(N+1)$, so the total number is $N(N+1)/2$. The sequence $V^0,\ldots,V^N$ has exactly $N+1$ solution values. [given, F1, F5, algebra]

1.3 Write $G=\max_{1\le n\le N}|g^n|$ and $M=\max_{0\le n\le N}|V^n|$. If $M=0$ the claim is immediate. Otherwise choose the least index $n\ge1$ with $|V^n|=M$. Taking absolute values in [F1] and using $-\omega_j>0$ gives $$\bigl(h^{-\alpha}+\lambda\bigr)M\le G+h^{-\alpha}M\sum_{j=1}^n(-\omega_j).$$ The sum on the right is $1-p_n$ by [F2], so rearranging yields $(\lambda+h^{-\alpha}p_n)M\le G$. [given, F1, F2, choose, algebra]

2.1 Since $n\le N$, $h(n+1)\le h(N+1)=T+h\le2T$. By [F2], [F4], and [F3], $$h^{-\alpha}p_n\ge \frac{h^{-\alpha}(n+1)^{-\alpha}}{\Gamma(1-\alpha)}=\frac{(h(n+1))^{-\alpha}}{\Gamma(1-\alpha)}\ge\frac{(2T)^{-\alpha}}{\Gamma(1-\alpha)}.$$ As $\lambda\ge0$, step 1.3 gives $M\le G/(h^{-\alpha}p_n)\le\Gamma(1-\alpha)(2T)^\alpha G$. Since $V^0=0$, this is the stated estimate. [step 1.3, F2, F3, F4, algebra] ∎

