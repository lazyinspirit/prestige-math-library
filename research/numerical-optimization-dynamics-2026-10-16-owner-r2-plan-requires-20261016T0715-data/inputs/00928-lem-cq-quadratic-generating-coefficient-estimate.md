---
id: lem-cq-quadratic-generating-coefficient-estimate
kind: lemma
title: Generating-coefficient estimate for the quadratic CQ datum
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-backward-euler-convolution-quadrature
  - lem-backward-euler-cq-weights-and-partial-sums
  - def-real-gamma-function-by-the-euler-integral
  - thm-real-gamma-functional-equation
  - cor-gautschi-inequality-for-the-real-gamma-function
  - thm-ratio-test
  - def-real-power-series-and-radius-of-convergence
  - thm-termwise-differentiation-of-a-real-power-series
  - thm-real-power-continuity-and-derivatives
  - thm-real-power-laws
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
  - thm-geometric-series
  - lem-cauchy-product-of-real-power-series
  - cor-power-series-sums-are-smooth-with-coefficient-formula
  - thm-principal-branch-power-agrees-with-positive-real-power
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: None. The argument uses power-series coefficients and scalar inequalities only.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Ralf Hiptmair, Advanced Numerical Methods for Computational Science and Engineering, lecture notes (2023), §3.3.2
      url: https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf
    - title: C. Lubich, Convolution Quadrature and Discretized Operational Calculus I, Numerische Mathematik 52 (1988), §1
      url: https://people.math.ethz.ch/~hiptmair/Seminars/CONVQUAD/Articles/LUB88.pdf
---

## Statement

Let $0<\alpha<1$, put $\beta=2-\alpha$, and define
$$c_m:=\frac{\Gamma(m+\beta+1)}{\Gamma(\beta+1)\Gamma(m+1)}\quad(m\ge0),$$
$$s_1:=1,\qquad s_n:=c_{n-1}+c_{n-2}\quad(n\ge2).$$
There is a constant $C_\alpha<\infty$ such that for every $n\ge1$,
$$\left|s_n-\frac{2n^\beta}{\Gamma(\beta+1)}\right| \le C_\alpha n^{\beta-1}.$$
For $n\ge1$, $s_n$ is the coefficient of $z^n$ in the real Taylor series
about $0$ of $z(1+z)(1-z)^{\alpha-3}$ on $(-1,1)$.

## Facts & Assumptions

**Given:** $0<\alpha<1$, $\beta=2-\alpha$, and $n\ge1$.

[F1] [[alg-backward-euler-convolution-quadrature]]:
$\bar\partial_h^\alpha$ is convolution with the recursively defined
weights $\omega_j$, so its action on $v^n=n^2$ has coefficients
$\sum_{j=0}^n\omega_j(n-j)^2$.

[F2] [[lem-backward-euler-cq-weights-and-partial-sums]] and
[[thm-principal-branch-power-agrees-with-positive-real-power]]:
for real $z\in(-1,1)$, $\sum_{j\ge0}\omega_jz^j=(1-z)^\alpha$ in the
real-power convention.

[F3] [[thm-real-gamma-functional-equation]]:
$\Gamma(x+1)=x\Gamma(x)$ for $x>0$.

[F4] [[def-real-gamma-function-by-the-euler-integral]]:
$\Gamma(x)>0$ for $x>0$ and $\Gamma(1)=1$.

[F5] [[cor-gautschi-inequality-for-the-real-gamma-function]]: for $x>0$
and $0\le q\le1$,
$x^{1-q}\le\Gamma(x+1)/\Gamma(x+q)\le(x+1)^{1-q}$.

[F6] [[thm-ratio-test]]: if the absolute-term ratios tend to a value below
$1$, the series converges absolutely.

[F7] [[def-real-power-series-and-radius-of-convergence]] and
[[thm-termwise-differentiation-of-a-real-power-series]]: power series may
be differentiated term by term inside their radius.

[F8] [[thm-real-power-continuity-and-derivatives]],
[[thm-real-power-laws]], [[thm-chain-rule]], and
[[thm-algebra-of-derivatives]]: positive-base powers obey exponent laws
and the chain/product rules, with $(x^q)'=qx^{q-1}$ for $x>0$.

[F9] [[cor-mean-value-theorem]]: a differentiable function with zero
derivative on an interval is constant there.

[F10] [[thm-geometric-series]]: for $|z|<1$,
$\sum_{m\ge0}z^m=(1-z)^{-1}$.

[F11] [[lem-cauchy-product-of-real-power-series]]: inside the common
radius, the product of two power-series sums has the Cauchy-product
coefficients.

[F12] [[cor-power-series-sums-are-smooth-with-coefficient-formula]]:
coefficients of equal power-series sums near their centre agree.

## Proof

1.1 By [F3] and $\Gamma(1)=1$ in [F4], $c_0=1$ and $c_{m+1}/c_m=(m+\beta+1)/(m+1)$. These terms are positive by [F4], and for every fixed real $z$ with $0<|z|<1$ the ratio of successive absolute terms of $\sum c_mz^m$ tends to $|z|$. Hence [F6] gives absolute convergence there; for $z=0$ only the constant term remains. The coefficient recurrence yields $(m+1)c_{m+1}=(m+\beta+1)c_m$; by [F7], coefficient comparison gives $(1-z)C'(z)=(\beta+1)C(z)$ for $C(z):=\sum_{m\ge0}c_mz^m$. The derivative of $C(z)(1-z)^{\beta+1}$ is therefore zero by [F8]. It equals $1$ at $z=0$, so [F9] and [F8] give $C(z)=(1-z)^{-(\beta+1)}$ for real $z\in(-1,1)$. [given, F3, F4, F6, F7, F8, F9, F12, algebra]

2.1 Starting from [F10], termwise differentiation by [F7] gives $$\sum_{m\ge0}m z^m=\frac{z}{(1-z)^2},\qquad \sum_{m\ge0}m^2 z^m =z\frac{d}{dz}\left(\frac{z}{(1-z)^2}\right) =\frac{z(1+z)}{(1-z)^3}$$ for real $z\in(-1,1)$. Multiplying by the real symbol in [F2] and using [F8] gives $z(1+z)(1-z)^{\alpha-3}$. By [F11], its $z^n$ coefficient is the discrete derivative coefficient for nodal values $n^2$; by step 1.1 it is $1$ for $n=1$ and $c_{n-1}+c_{n-2}$ for $n\ge2$. This proves the coefficient assertion. [F1, F2, F7, F8, F10, F11, F12, step 1.1, algebra]

2.2 Put $r=1-\alpha=\beta-1\in(0,1)$. For $n\ge2$, apply [F5] with $x=n-\alpha$ and $q=\alpha$. It gives $(n-\alpha)^r\le\Gamma(n+1-\alpha)/\Gamma(n) \le(n+1-\alpha)^r$. By [F3], $$c_{n-1}=\frac{(n+1-\alpha)\Gamma(n+1-\alpha)} {\Gamma(\beta+1)\Gamma(n)}.$$ Consequently $c_{n-1}$ lies between $(n+1-\alpha)(n-\alpha)^r/\Gamma(\beta+1)$ and $(n+1-\alpha)^{r+1}/\Gamma(\beta+1)$. For the upper endpoint, the mean value theorem gives $(n+1-\alpha)^{r+1}-n^{r+1}\le(r+1)(n+1)^r\le C n^r$. For the lower endpoint, write $$|(n+1-\alpha)(n-\alpha)^r-n^{r+1}| \le(n+1-\alpha)|(n-\alpha)^r-n^r|+(1-\alpha)n^r.$$ Because $n\ge2$, $n-\alpha\ge n/2$; the mean value theorem bounds $|n^r-(n-\alpha)^r|\le r\alpha(n/2)^{r-1}$, and $n+1-\alpha\le 3n/2$. Thus this lower endpoint also differs from $n^{r+1}$ by at most a constant depending on $\alpha$ times $n^r$. Dividing by the fixed positive $\Gamma(\beta+1)$ proves Thus $|c_{n-1}-n^\beta/\Gamma(\beta+1)|\le C_\alpha n^{\beta-1}$ after enlarging the constant. [step 1.1, F3, F5, F8, F9, algebra]

3.1 For $n\ge3$, apply the same estimate with $n-1$ in place of $n$ to $c_{n-2}$. Also $|n^\beta-(n-1)^\beta|\le\beta n^{\beta-1}$ by the mean value theorem. Hence $|c_{n-2}-n^\beta/\Gamma(\beta+1)|\le C_\alpha n^{\beta-1}$ after another enlargement. The cases $n=1,2$ have finite coefficients and are covered by enlarging $C_\alpha$ once more. Adding the two estimates proves the claim. [step 2.2, F8, F9, algebra] ∎
