---
id: ex-power-weight-a-p-range
kind: example
title: The A_p range of a power weight
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [def-muckenhoupt-a-p-and-a-one-weights, def-weight-and-weighted-lp-space, lem-a-p-weights-are-doubling, def-axis-parallel-cube-averages-and-cube-maximal-functions, lem-ball-and-cube-maximal-functions-are-comparable, thm-polar-coordinates-formula-for-lebesgue-measure, thm-real-power-continuity-and-derivatives, thm-comparison-test-for-improper-integrals, thm-dominated-convergence, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-lebesgue-measure-under-dilations-and-reflections, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Examples 7.1.6 and 7.1.7, printed pp. 505-507"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "Example 4.17, printed p. 75"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Fix $1<p<\infty$ and $\alpha\in\mathbb R$, and let $w(x):=|x|^\alpha$ on
$\mathbb R^n$ (the value at the origin being assigned arbitrarily, say
$w(0):=0$). Then $w$ is a weight exactly when $\alpha>-n$, and for such
$\alpha$ one has $w\in A_p$ if and only if
$$-n<\alpha<n(p-1).$$
In that open range the $A_p$ characteristic is finite and bounded in terms of
$n,p,\alpha$; when $\alpha\ge n(p-1)$ the reciprocal-power average diverges on cubes containing the origin; when $\alpha\le-n$, the function is not a weight. Both thresholds are local integrability conditions at the origin. Moreover the associated measure is doubling for every $\alpha>-n$.

## Facts & Assumptions

**Given:** Countable Choice; $n\ge1$, $1<p<\infty$, $\alpha\in\mathbb R$, and $w=|x|^\alpha$.

[F1] $w$ is a weight iff it is Lebesgue measurable, locally integrable and positive and finite a.e.; the $A_p$ characteristic is $\sup_Q\langle w\rangle_Q\langle w^{-1/(p-1)}\rangle_Q^{p-1}$ over cubes ([[def-weight-and-weighted-lp-space]], [[def-muckenhoupt-a-p-and-a-one-weights]]).

[F2] Polar coordinates: $\int_{\mathbb R^n}g(x)\,dx=\int_0^\infty\int_{\mathbb S^{n-1}}g(r\theta)r^{n-1}d\theta\,dr$, so $\int_{B(0,R)}|x|^a\,dx=|\mathbb S^{n-1}|R^{n+a}/(n+a)$ for $a>-n$ and $+\infty$ for $a\le-n$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-real-power-continuity-and-derivatives]], [[thm-comparison-test-for-improper-integrals]], [[thm-dominated-convergence]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F3] For $a>-n$, $|x_0|\le3R$ implies $B(x_0,R)\subseteq B(0,4R)$, so [F2] bounds its $|x|^a$ integral above by $C_{n,a}R^{n+a}$. If $a<0$, then $|x|^a\ge(4R)^a$ a.e. on this ball, giving a positive lower bound of that order. If $a\ge0$, remove $B(0,R/2)$; the remainder has measure at least $(1-2^{-n})|B(x_0,R)|$ and $|x|^a\ge(R/2)^a$ there, again giving a positive lower bound. For $|x_0|\ge3R$, $(2/3)|x_0|\le|x|\le(4/3)|x_0|$ on the ball, so its integral is comparable to $|x_0|^aR^n$. Volume scaling is [[thm-lebesgue-measure-under-dilations-and-reflections]], and ball/cube characteristic equivalence is [[lem-ball-and-cube-maximal-functions-are-comparable]].

## Verification

**Proof technique:** direct.

1.1 If $\alpha\le-n$, then $\int_{B(0,1)}|x|^\alpha dx=+\infty$ by [F2], so $w$ is not locally integrable and hence not a weight. If $\alpha>-n$, then $w$ is locally integrable (apply [F2] on each ball, using [F3] to compare $\int_{B(x_0,R)}|x|^\alpha$ with the radial integral), it is positive and finite off the origin, and it is assigned the value $0$ at the single point $0$ of measure zero; hence $w$ is a weight. [F1, F2, F3, given, algebra]

1.2 Let $\alpha>-n$ and let $B=B(x_0,R)$ be a ball with $|x_0|\ge3R$. On $B$ one has $(2/3)|x_0|\le|x|\le(4/3)|x_0|$, so both $\int_B|x|^\alpha dx$ and $\int_B|x|^{-\alpha/(p-1)}dx$ are comparable to $|x_0|^\alpha R^n$ and $|x_0|^{-\alpha/(p-1)}R^n$ respectively, and the defining product is bounded by a constant depending only on $n,\alpha,p$. [F3, given, algebra]

2.1 Let $\alpha>-n$ and let $B=B(x_0,R)$ with $|x_0|<3R$. By [F3] the two integrals $\int_B|x|^\alpha dx$ and $\int_B|x|^{-\alpha/(p-1)}dx$ are comparable to $R^{n+\alpha}$ and $R^{n-\alpha/(p-1)}$ provided both exponents exceed $-n$; the normalized product $\langle w\rangle_B\langle w^{-1/(p-1)}\rangle_B^{p-1}$ is then comparable to $R^{\alpha}R^{-\alpha/(p-1)\cdot(p-1)}=1$, uniformly in $B$. If $-\alpha/(p-1)\le-n$, that is $\alpha\ge n(p-1)$, the second exponent does not exceed $-n$ and the corresponding integral over $B(0,R)$ diverges, so the product is $+\infty$ on the ball $B(0,R)$. [F3, step 1.2, given, algebra]

3.1 Steps 1.1–2.1 give the stated weight and $A_p$ ranges for ball averages; the ball/cube comparison [F3] gives the same result for the defined cube characteristic. For doubling, if $|x_0|<3R$, the integral on $B(x_0,2R)$ is bounded above by the radial integral on $B(0,5R)$, of order $R^{n+\alpha}$, while [F3] bounds the integral on $B(x_0,R)$ below by a positive multiple of that order. If $|x_0|\ge3R$, both balls have $|x|$ comparable to $|x_0|$ (on the larger ball, $|x_0|/3\le|x|\le5|x_0|/3$); their integrals are therefore comparable up to a fixed constant. Hence $w(B(x_0,2R))\le C_{n,\alpha}w(B(x_0,R))$ for every $\alpha>-n$. [F2, F3, step 1.1, step 1.2, step 2.1, given, algebra] ∎
