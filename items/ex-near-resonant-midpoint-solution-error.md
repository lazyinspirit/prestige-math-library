---
id: ex-near-resonant-midpoint-solution-error
kind: example
title: A near-resonant Nyström equation amplifies midpoint quadrature error
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-nystrom-quadrature-and-finite-rank-operators
  - alg-composite-midpoint-rule
justified_by: []
proof_strategy: direct
axiom_use: None. All operators have rank one and all calculations are finite
  sums and elementary integrals.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and
        Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Theorem 3.18 and Remark 3.21, printed pp. 62–65; the example gives an
        exact finite-dimensional instance."
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical
        Computation, §5.6"
      url: "https://fncbook.com/integration/"
      locator: "Definition 5.6.1, general weighted quadrature conventions; the
        midpoint nodes and exact polynomial moments below are supplied locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

For $0<\delta<1$, set $\lambda:=3(1-\delta)$, define
$$ (Ku)(x):=\lambda x\int_0^1 yu(y)\,dy,$$
and let $f(x)=1$. The exact solution of $u-Ku=f$ is
$$u(x)=1+\frac{\lambda}{2\delta}x.$$
For the $N$-panel composite midpoint rule with $h=1/N$, the Nyström solution is
$$u_N(x)=1+\frac{\lambda}{2(\delta+\lambda h^2/12)}x.$$
Its error is the midpoint residual multiplied by a factor
$$(\delta+\lambda h^2/12)^{-1},$$
which is at least $(2\delta)^{-1}$ whenever $\lambda h^2/12\le\delta$.
Thus a small quadrature residual can produce a much larger solution error as
$\delta$ approaches the resonance value $0$.

## Facts & Assumptions

**Given:** $0<\delta<1$, $\lambda=3(1-\delta)$, $h=1/N$, $f\equiv1$, and the rank-one integral operator and midpoint Nyström rule in the Example.

[F1] [[def-nystrom-quadrature-and-finite-rank-operators]]: $K_Nu(x)=\lambda xQ_N(yu(y))$ for the rank-one kernel $k(x,y)=\lambda xy$.

[F2] [[alg-composite-midpoint-rule]]: $Q_Ng=h\sum_{j=0}^{N-1}g((j+\tfrac12)h)$.

## Verification

**Given:** The data above, and the exact and discrete affine candidates $u(x)=1+cx$ and $u_N(x)=1+c_Nx$.

1.1 Substituting $u=1+cx$ into $u=1+Ku$ gives $c=\lambda(1/2+c/3)$, so $c(1-\lambda/3)=\lambda/2$. Since $1-\lambda/3=\delta>0$, the unique coefficient is $c=\lambda/(2\delta)$, proving the exact formula. [given, algebra]

1.2 On each midpoint panel, direct integration gives $\int_{jh}^{(j+1)h}y\,dy=h(j+\tfrac12)h$ and $\int_{jh}^{(j+1)h}y^2\,dy-h((j+\tfrac12)h)^2=h^3/12.$ Summing the $N$ panels yields $Q_N(y)=1/2$ and $Q_N(y^2)=1/3-h^2/12$. [given, F2, algebra]

2.1 Any discrete solution has the form $u_N(x)=1+c_Nx$ because the range of $K_N$ is contained in the span of $x$. Its coefficient satisfies $c_N=\lambda(1/2+c_N(1/3-h^2/12))$, hence $c_N=\lambda/(2(\delta+\lambda h^2/12))$; the denominator is positive, so the discrete solution is unique. [given, F1, step 1.2, algebra]

3.1 On the direction $x$, $Kx=(\lambda/3)x$, so $I-K$ scales that direction by $\delta$. Also $K_Nx=\lambda(1/3-h^2/12)x$, so $I-K_N$ scales it by $\delta+\lambda h^2/12$. Directly using the exact and discrete coefficients from steps 1.1 and 2.1 gives $\|K_Nu-Ku\|_\infty=\frac{\lambda^2h^2}{24\delta},\qquad \|u_N-u\|_\infty=\frac{\lambda^2h^2}{24\delta(\delta+\lambda h^2/12)}.$ The ratio of solution error to quadrature residual is exactly $(\delta+\lambda h^2/12)^{-1}$, and the stated lower bound follows when $\lambda h^2/12\le\delta$. [given, F1, step 1.1, step 1.2, step 2.1, algebra] ∎
