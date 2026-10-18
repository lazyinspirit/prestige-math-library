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
  - thm-real-power-continuity-and-derivatives
  - lem-mean-value-theorem-on-closed-interval
  - thm-continuous-implies-integrable
  - thm-additivity-over-subintervals
  - thm-monotonicity-of-the-integral
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - def-real-power
  - cor-exponential-reciprocal-and-positivity
justified_by: []
proof_strategy: direct
axiom_use: None. The exact singular integral and all midpoint sums are
  one-dimensional calculations.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jiri Lebl, Basic Analysis I, §5.5 Improper Integrals"
      url: "https://www.jirka.org/ra/html/sec_impropriemann.html"
      locator: "Definition 5.5.1 and Proposition 5.5.2, the integrable endpoint power
        $y^{-1/2}$."
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and
        Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Method 3.12 and the dependence of Nyström error on the actual
        integrand regularity, printed pp. 60–65."
verification:
  precheck: pass
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

**Given:** $N\ge1$, $h=1/N$, the function $g(y)=y^{-1/2}$ on $(0,1]$, its improper integral, and the product-integration rule from the A page. For the midpoint algorithm, use the extension $\widetilde g:[0,1]\to\mathbb R$ given by $\widetilde g(0)=0$ and $\widetilde g(y)=g(y)$ for $y>0$.

[F1] [[lem-half-order-singular-integral-exists]]: $\int_0^1y^{-1/2}\,dy=2$ and the product weights integrate the constant function with their total weight $S_0(1)=2$.

[F2] [[def-half-order-product-integration]]: $K_nu(0)=S_0(I_ng_0)$ and the hats form the piecewise-linear interpolant.

[F3] [[alg-composite-midpoint-rule]] applies to the everywhere evaluable function $\widetilde g$ and uses $\widetilde g((j+\tfrac12)h)=g((j+\tfrac12)h)$ on each panel with weight $h$. No endpoint is sampled, and the assigned value at zero does not enter the improper integral.

[F4] On $(0,\infty)$, $g(y)=y^{-1/2}$ is $C^2$ with $g'(y)=-\tfrac12y^{-3/2}$ and $g''(y)=\tfrac34y^{-5/2}>0$; positive-base powers are exponentials and the exponential is positive ([[thm-real-power-continuity-and-derivatives]], [[def-real-power]], [[cor-exponential-reciprocal-and-positivity]]).

[F5] The mean value theorem on a closed interval gives a point where the derivative equals the secant slope ([[lem-mean-value-theorem-on-closed-interval]]).

[F6] A continuous function on a closed interval is Riemann integrable ([[thm-continuous-implies-integrable]]).

[F7] Integrals add when a closed interval is split at an interior point ([[thm-additivity-over-subintervals]]).

[F8] A nonnegative integrable function has nonnegative integral ([[thm-monotonicity-of-the-integral]]).

[F9] Differentiating compositions, sums, and scalar multiples uses the chain rule and algebra of derivatives ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

## Verification

**Given:** The data in the Example, $m_j:=(j+\tfrac12)h$, $g(y)=y^{-1/2}$ for $y>0$, and the extension $\widetilde g$ above.

1.1 Since every $m_j>0$, the admissible call $Q_M(\widetilde g;0,1,N)$ equals $h\sum_{j=0}^{N-1}g(m_j)$ by [F3]. On the first panel, the substitution $y=ht$ gives $\int_0^h y^{-1/2}dy=\sqrt h\int_0^1t^{-1/2}dt=2\sqrt h$ by [F1]; this substitution follows by scaling tagged sums on each truncated interval and then taking the improper limit. The midpoint contribution is $hg(h/2)=\sqrt2\sqrt h$. Their difference is $(2-\sqrt2)\sqrt h$. [given, F1, F3, algebra]

2.1 For every later panel $[jh,(j+1)h]$, $j\ge1$, the function $g$ is $C^2$ by [F4]. Its second derivative is positive because $y^{-5/2}=\exp((-5/2)\log y)>0$ for $y>0$, using [F4]. The mean value theorem [F5] applied to $g'$ shows that $g'$ is increasing there. For $0\le s\le h/2$, put $D(s):=g(m_j-s)+g(m_j+s)-2g(m_j)$. By [F9], $D'(s)=-g'(m_j-s)+g'(m_j+s)\ge0$ in the interior; another application of [F5] on $[0,s]$ gives $D(s)\ge D(0)=0$. Splitting at $m_j$ and substituting $y=m_j-s$ and $y=m_j+s$ gives $\int_{jh}^{(j+1)h}g(y)\,dy-hg(m_j)=\int_0^{h/2}D(s)\,ds$: the left substitution reverses the limits, while the right preserves them, and each has Jacobian magnitude $1$. Thus the integral identity follows directly from the tagged Riemann sums under these affine maps. The integrals exist by [F6], the split at $m_j$ is additive by [F7], and the nonnegative difference integrates to at least zero by [F8]. Thus no later panel cancels the positive first-panel error, and the total midpoint error is at least $(2-\sqrt2)\sqrt h$. [given, F3, F4, F5, F6, F7, F8, F9, step 1.1, algebra]

3.1 For the product rule, $a\equiv1$ and $u\equiv1$ give $g_0\equiv1$. On each panel the two adjacent hat formulas in [F2] sum to $1$, so $I_ng_0=1$. By [F1] and [F2], $K_nu(0)=S_0(1)=2=Ku(0)$. Hence this case is exact under product integration although direct midpoint sampling has only the lower-bound rate above. [F1, F2, step 1.1] ∎
