---
id: prop-winding-number-under-reversal-and-concatenation
kind: proposition
title: "Reversal negates and concatenation adds winding numbers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-winding-number-closed-complex-contour, prop-reversal-and-concatenation-of-complex-line-integrals, def-complex-contours-reversal-concatenation-and-closedness, def-piecewise-c1-path-operations-and-oriented-reparametrizations, thm-arc-length-is-invariant-under-monotone-reparametrization, thm-arc-length-is-additive-over-subintervals, thm-existence-of-complex-line-integrals-on-rectifiable-paths, thm-winding-number-is-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

**Reversal.** Let $\gamma:[a,b]\to\mathbb C$ be a closed complex contour and let
$p\notin\gamma^\ast$. Then the reversal $\gamma^-(t)=\gamma(a+b-t)$ is a closed
complex contour with the same trace, and

$$n(\gamma^-,p)=-n(\gamma,p).$$

**Concatenation.** Let $\alpha,\beta:[0,1]\to\mathbb C$ be complex contours with
$\alpha(1)=\beta(0)$. Then $\alpha*\beta$ is a complex contour with trace
$\alpha^\ast\cup\beta^\ast$, and for every
$p\notin\alpha^\ast\cup\beta^\ast$

$$\int_{\alpha*\beta}\frac{dz}{z-p}=\int_\alpha\frac{dz}{z-p}+\int_\beta\frac{dz}{z-p}.$$

If moreover $\alpha$ and $\beta$ are themselves closed, then $\alpha*\beta$ is
closed and

$$n(\alpha*\beta,p)=n(\alpha,p)+n(\beta,p).$$

The hypothesis $\alpha(1)=\beta(0)$ is what makes the concatenation a contour,
and closedness of $\alpha*\beta$ is what makes its index defined; the integral
identity needs neither $\alpha$ nor $\beta$ to be closed.

## Facts & Assumptions

**Given:** Closed complex contours where an index is asserted, composable complex contours where a concatenation is asserted, and a point off the traces involved.

[L1] For a closed complex contour $\gamma$ and $p\notin\gamma^\ast$, $n(\gamma,p)=(2\pi i)^{-1}\int_\gamma dz/(z-p)$ ([[def-winding-number-closed-complex-contour]]).

[L2] For a rectifiable contour $\gamma$, $\int_{\gamma^-}f\,dz=-\int_\gamma f\,dz$; for composable rectifiable contours $\alpha,\beta$, $\int_{\alpha*\beta}f\,dz=\int_\alpha f\,dz+\int_\beta f\,dz$ ([[prop-reversal-and-concatenation-of-complex-line-integrals]]).

[L3] A complex contour is a rectifiable path $\gamma:[a,b]\to\mathbb C$; it is closed when $\gamma(a)=\gamma(b)$; its reversal is $\gamma^-(t)=\gamma(a+b-t)$; and for $\alpha,\beta:[0,1]\to\mathbb C$ with $\alpha(1)=\beta(0)$ the concatenation is $(\alpha*\beta)(s)=\alpha(2s)$ for $s\le\tfrac12$ and $\beta(2s-1)$ for $s\ge\tfrac12$ ([[def-complex-contours-reversal-concatenation-and-closedness]], [[def-piecewise-c1-path-operations-and-oriented-reparametrizations]]).

[L4] Arc length is unchanged by a monotone reparametrization ([[thm-arc-length-is-invariant-under-monotone-reparametrization]]).

[L5] Arc length is additive across a split of the parameter interval, and a path is rectifiable exactly when both restrictions are ([[thm-arc-length-is-additive-over-subintervals]]).

[L6] For a rectifiable contour and a continuous integrand on its trace, the complex line integral exists ([[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]).

[L7] The winding number of a closed complex contour about a point off its trace is an integer ([[thm-winding-number-is-integer]]).

## Proof

**Proof technique:** direct.

1.1 The map $t\mapsto a+b-t$ is a decreasing continuous bijection of $[a,b]$ onto itself, so by [L3] and [L4] the reversal $\gamma^-$ is a path of the same length as $\gamma$, hence rectifiable, and its trace is $\gamma([a,b])=\gamma^\ast$; it is closed because $\gamma^-(a)=\gamma(b)=\gamma(a)=\gamma^-(b)$ by [L3]. [given, L3, L4]

1.2 By [L3] the concatenation $\alpha*\beta$ is continuous on $[0,1]$, its restrictions to $[0,\tfrac12]$ and $[\tfrac12,1]$ are monotone reparametrizations of $\alpha$ and $\beta$, so both are rectifiable by [L4] and $\alpha*\beta$ is rectifiable by [L5]; its trace is $\alpha^\ast\cup\beta^\ast$ by the two-piece formula. [given, L3, L4, L5]

1.3 If $\alpha$ and $\beta$ are closed then $(\alpha*\beta)(0)=\alpha(0)=\alpha(1)=\beta(0)=\beta(1)=(\alpha*\beta)(1)$ by [L3], so $\alpha*\beta$ is closed. [given, L3]

2.1 With $p\notin\gamma^\ast$ the function $z\mapsto1/(z-p)$ is continuous on $\gamma^\ast=(\gamma^-)^\ast$, so all the integrals below exist by [L6]; applying the reversal identity of [L2] to it and dividing by $2\pi i$ gives $n(\gamma^-,p)=-n(\gamma,p)$ through [L1]. [step 1.1, L1, L2, L6]

2.2 With $p\notin\alpha^\ast\cup\beta^\ast$ the function $z\mapsto1/(z-p)$ is continuous on that union, so the concatenation identity of [L2] applies to it and gives the displayed additive formula, all three integrals existing by [L6]. [step 1.2, L2, L6]

3.1 If $\alpha$ and $\beta$ are closed, step 1.3 makes $\alpha*\beta$ closed, so [L1] turns step 2.2 into $n(\alpha*\beta,p)=n(\alpha,p)+n(\beta,p)$; all three values are integers by [L7], consistently with the identity. [step 1.3, step 2.1, step 2.2, L1, L7] ∎
