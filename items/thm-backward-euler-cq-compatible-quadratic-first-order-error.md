---
id: thm-backward-euler-cq-compatible-quadratic-first-order-error
kind: theorem
title: First-order CQ error for a compatible quadratic datum
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-backward-euler-convolution-quadrature
  - thm-backward-euler-cq-scalar-resolvent-stability
  - lem-cq-quadratic-generating-coefficient-estimate
  - def-caputo-derivative-and-fractional-integral
  - def-real-beta-integral
  - thm-real-beta-gamma-identity
  - thm-real-gamma-functional-equation
  - def-absolutely-continuous-function
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - def-real-gamma-function-by-the-euler-integral
  - thm-geometric-series
  - thm-termwise-differentiation-of-a-real-power-series
  - lem-cauchy-product-of-real-power-series
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: None. The coefficient and recurrence arguments are choice-free.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: C. Lubich, Convolution Quadrature and Discretized Operational Calculus I, Numerische Mathematik 52 (1988), §§1–2
      url: https://people.math.ethz.ch/~hiptmair/Seminars/CONVQUAD/Articles/LUB88.pdf
    - title: Ralf Hiptmair, Advanced Numerical Methods for Computational Science and Engineering, lecture notes (2023), §3.3.2
      url: https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf
---

## Statement

Let $0<\alpha<1$, $\lambda\ge0$, $T>0$, $u_0\in\mathbb R$, and
$u(t)=u_0+t^2$ on $[0,T]$. Define

$$f(t):=\frac{2t^{2-\alpha}}{\Gamma(3-\alpha)}+\lambda(u_0+t^2).$$

Then $u$ solves $D_C^\alpha u+\lambda u=f$ and satisfies the compatibility
condition $u'(0)=0$. For $h=T/N$ and the backward-Euler CQ solution from
[[alg-backward-euler-convolution-quadrature]] with $F^n=f(nh)$, there is a
constant $C_{\alpha,T}$ independent of $N$, $u_0$, and $\lambda$ such that

$$\max_{0\le n\le N}|U^n-u(nh)|\le C_{\alpha,T}h.$$

## Facts & Assumptions

**Given:** $0<\alpha<1$, $\lambda\ge0$, $T>0$, $u_0\in\mathbb R$,
$u(t)=u_0+t^2$, the forcing above, and $h=T/N$.

[F1] [[def-caputo-derivative-and-fractional-integral]]:
$D_C^\alpha u=I^{1-\alpha}u'$ almost everywhere. At points where the
integral is finite, its pointwise integral value supplies the representative
used here; step 2.1 verifies finiteness for this polynomial.

[F2] [[alg-backward-euler-convolution-quadrature]]:
$\bar\partial_h^\alpha v^n=h^{-\alpha}\sum_{j=0}^n\omega_jv^{n-j}$
for $v^0=0$.

[F3] [[thm-real-beta-gamma-identity]]:
$B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$ for positive $p,q$.

[F4] [[thm-real-gamma-functional-equation]]:
$\Gamma(x+1)=x\Gamma(x)$ for $x>0$ and $\Gamma(1)=1$.

[F5] [[lem-cq-quadratic-generating-coefficient-estimate]]: if
$\beta=2-\alpha$, the coefficient $s_n$ in the real Taylor series of
$z(1+z)(1-z)^{\alpha-3}$ on $(-1,1)$ satisfies
$|s_n-2n^\beta/\Gamma(\beta+1)|\le C_\alpha n^{\beta-1}$.

[F6] [[thm-backward-euler-cq-scalar-resolvent-stability]]: the algorithm's
updates define the unique sequence satisfying the shifted CQ recurrence; for
zero initial data and $\lambda\ge0$, the solution driven by forcing $r^n$ is
bounded by $\Gamma(1-\alpha)(2T)^\alpha\max_n|r^n|$.

[F7] [[def-absolutely-continuous-function]]: absolute continuity means
that summed endpoint increments over any finite disjoint interval family
are small whenever the total interval length is small.

[F8] [[def-real-power]] and
[[thm-real-power-continuity-and-derivatives]]: $0^p=0$ for $p>0$,
$t^p$ is continuous for $t\ge0$, and $(t^p)'=pt^{p-1}$ for $t>0$.

[F9] [[def-real-gamma-function-by-the-euler-integral]]:
$\Gamma(q)>0$ for $q>0$.

[F10] [[thm-geometric-series]]: $\sum_{n\ge0}z^n=(1-z)^{-1}$ for
$|z|<1$.

[F11] [[thm-termwise-differentiation-of-a-real-power-series]]: a power
series can be differentiated term by term inside its radius.

[F12] [[lem-cauchy-product-of-real-power-series]]: the product of two
power-series sums has the Cauchy-product coefficients inside their common
radius.

## Proof

1.1 For any finite disjoint interval family $[a_j,b_j]\subseteq[0,T]$, $$\sum_j|u(b_j)-u(a_j)|=\sum_j(b_j-a_j)(a_j+b_j) \le 2T\sum_j(b_j-a_j).$$ Given $\varepsilon>0$, choosing $\delta=\varepsilon/(2T+1)$ verifies absolute continuity by [F7]. For almost every $t\in(0,T)$, $u'(t)=2t$ by [F8], so $u'\in L^1(0,T)$; therefore the Caputo derivative is defined by [F1]. [given, F1, F7, F8, algebra, construct]

2.1 By [F8], $u'(s)=2s$ for $s>0$; at $s=0$ the one-sided difference quotient is $s^2/s=s\to0$, so $u'(0)=0$. Thus [F1] gives $$D_C^\alpha u(t)=\frac{2}{\Gamma(1-\alpha)}\int_0^t(t-s)^{-\alpha}s\,ds =\frac{2t^{2-\alpha}}{\Gamma(1-\alpha)}B(2,1-\alpha) =\frac{2t^{2-\alpha}}{\Gamma(3-\alpha)},$$ where the substitution $s=ty$ and [F3]–[F4] give the last two equalities. Thus the stated $f$ makes $u$ an exact solution, and $u'(0)=0$. [given, F1, F3, F4, F8, F9, step 1.1, algebra]

3.1 Put $v(t)=t^2$, so $v(nh)=h^2n^2$. Starting from the geometric series [F10] and differentiating termwise by [F11] gives $\sum_{n\ge0}n^2z^n=z(1+z)/(1-z)^3$. Multiplying this generating series by $h^{-\alpha}(1-z)^\alpha$ and using [F12] shows that the discrete Caputo derivative of the exact nodal values is $h^{2-\alpha}s_n$, with $s_n$ from [F5]. The exact derivative from step 2.1 is $2h^{2-\alpha}n^{2-\alpha}/\Gamma(3-\alpha)$. [step 2.1, F2, F5, F10, F11, F12, algebra]

4.1 Therefore the residual $\tau_n:=\bar\partial_h^\alpha v(nh)-D_C^\alpha v(nh)$ satisfies $|\tau_n|\le C_\alpha h^{2-\alpha}n^{1-\alpha} =C_\alpha h(nh)^{1-\alpha}\le C_\alpha T^{1-\alpha}h$ by [F5]. [step 3.1, F5, algebra]

5.1 Subtracting the exact equation from the CQ recurrence, the error $E^n:=U^n-u(nh)$ has $E^0=0$ and satisfies $\bar\partial_h^\alpha E^n+\lambda E^n=-\tau_n$. Apply [F6] and step 4.1 to obtain $$\max_n|E^n|\le\Gamma(1-\alpha)(2T)^\alpha C_\alpha T^{1-\alpha}h.$$ The coefficient of $h$ depends only on $\alpha$ and $T$, proving the result. [step 4.1, F2, F6, algebra] ∎
