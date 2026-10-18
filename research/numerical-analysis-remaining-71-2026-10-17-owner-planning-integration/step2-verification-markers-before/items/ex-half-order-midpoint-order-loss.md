---
id: ex-half-order-midpoint-order-loss
kind: example
title: Direct midpoint quadrature loses order on a half-order singularity
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-half-order-product-integration
  - lem-half-order-singular-integral-exists
  - alg-composite-midpoint-rule
justified_by: []
proof_strategy: direct
axiom_use: None. The exact singular integral and all midpoint sums are one-dimensional calculations.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jiri Lebl, Basic Analysis I, §5.5 Improper Integrals"
      url: "https://www.jirka.org/ra/html/sec_impropriemann.html"
      locator: "Definition 5.5.1 and Proposition 5.5.2, the integrable endpoint power $y^{-1/2}$."
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Method 3.12 and the dependence of Nyström error on the actual integrand regularity, printed pp. 60–65."
---

## Example

At $x=0$, take the weakly singular kernel $s(0,y)=y^{-1/2}$ and smooth factor
$a\equiv1$, $u\equiv1$. The exact integral is $2$. The composite midpoint rule
on panels of width $h=1/N$ underestimates it by at least
$$(2-\sqrt2)\sqrt h,$$
so direct midpoint sampling of this singular integrand is not second order.
The product-integration rule of [[def-half-order-product-integration]] is exact
for this constant smooth factor, because its interpolant is identically $1$.

## Facts & Assumptions

**Given:** $N\ge1$, $h=1/N$, the function $g(y)=y^{-1/2}$ on $(0,1]$, its improper integral, and the product-integration rule from the A page.

[F1] [[lem-half-order-singular-integral-exists]]: $\int_0^1y^{-1/2}\,dy=2$ and the product weights integrate the constant function with their total weight $S_0(1)=2$.

[F2] [[def-half-order-product-integration]]: $K_nu(0)=S_0(I_ng_0)$ and the hats form the piecewise-linear interpolant.

[F3] [[alg-composite-midpoint-rule]]: the midpoint rule uses the value $g((j+\tfrac12)h)$ on each panel with weight $h$.

## Verification

**Given:** The data in the Example, $m_j:=(j+\tfrac12)h$, and $g(y)=y^{-1/2}$.

1.1 On the first panel, $\int_0^h y^{-1/2}dy=2\sqrt h$ by [F1], while the midpoint contribution is $hg(h/2)=\sqrt2\sqrt h$. Their difference is $(2-\sqrt2)\sqrt h$. [given, F1, F3, algebra]

2.1 For every later panel $[jh,(j+1)h]$, $j\ge1$, the function $g$ is differentiable and $g'(y)=-\tfrac12 y^{-3/2}$ is increasing. For $0\le s\le h/2$, the derivative of $g(m_j-s)+g(m_j+s)-2g(m_j)$ is $-g'(m_j-s)+g'(m_j+s)\ge0$; its value at $s=0$ is zero. Integrating this nonnegative symmetric difference shows $\int_{jh}^{(j+1)h}g(y)dy\ge hg(m_j)$. Thus no later panel cancels the positive first-panel error, and the total midpoint error is at least $(2-\sqrt2)\sqrt h$. [given, F3, step 1.1, algebra]

3.1 For the product rule, $a\equiv1$ and $u\equiv1$ give $g_0\equiv1$. On each panel the two adjacent hat formulas in [F2] sum to $1$, so $I_ng_0=1$. By [F1] and [F2], $K_nu(0)=S_0(1)=2=Ku(0)$. Hence this case is exact under product integration although direct midpoint sampling has only the lower-bound rate above. [F1, F2, step 1.1] ∎
