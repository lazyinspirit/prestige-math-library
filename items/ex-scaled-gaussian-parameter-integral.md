---
id: ex-scaled-gaussian-parameter-integral
kind: example
title: "The scaled Gaussian integral and its parameter derivative"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-gaussian-integral, thm-differentiation-under-dominated-improper-multiple-integrals, thm-substitution-for-improper-integrals, thm-exponential-beats-every-polynomial, thm-improper-p-test-rational, thm-comparison-test-for-improper-integrals, thm-real-power-continuity-and-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Functions Defined by Improper Integrals, Example 12"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_IMPROPER_FUNCTIONS.PDF"
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, §3.1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Example

For $a>0$, define $F(a):=\int_{-\infty}^{\infty}e^{-ax^2}\,dx$. Then

$$F(a)=\sqrt{\frac\pi a},\qquad F'(a)=-\frac{\sqrt\pi}{2a^{3/2}}=-\int_{-\infty}^{\infty}x^2e^{-ax^2}\,dx.$$

## Facts & Assumptions

**Given:** A positive parameter $a$.

[L1] The Gaussian integral equals $\sqrt\pi$ ([[thm-gaussian-integral]]).

[L2] On an open domain and open parameter interval, if $f$ and $\partial_tf$ are continuous, one slice is absolutely improperly integrable, and $|\partial_tf|$ has an integrable bound uniform on each compact parameter interval, then $F'(t)=\int_D\partial_tf(x,t)\,dx$ ([[thm-differentiation-under-dominated-improper-multiple-integrals]]).

[L3] For real $\alpha$, $(x^\alpha)'=\alpha x^{\alpha-1}$ on $(0,\infty)$ ([[thm-real-power-continuity-and-derivatives]]).

[L4] A monotone differentiable substitution preserves convergent improper integrals under the compact-truncation hypotheses ([[thm-substitution-for-improper-integrals]]).

[L5] Exponential decay dominates every fixed polynomial power ([[thm-exponential-beats-every-polynomial]]).

[L6] The tail integral $\int_1^\infty x^{-2}\,dx$ converges ([[thm-improper-p-test-rational]]).

[L7] A nonnegative function dominated on a tail by a function with convergent improper integral also has a convergent tail integral ([[thm-comparison-test-for-improper-integrals]]).

## Verification

**Proof technique:** direct.

1.1 The substitution $u=\sqrt a\,x$ is licensed by [L4], and [L1] gives $F(a)=a^{-1/2}\int_{-\infty}^{\infty}e^{-u^2}\,du=\sqrt\pi\,a^{-1/2}$. [L1, L4, algebra]

1.2 Let $C\subset(0,\infty)$ be compact and put $m:=\min C>0$. Then $|\partial_a e^{-ax^2}|=x^2e^{-ax^2}\le x^2e^{-mx^2}$ for $a\in C$. Applying [L5] with the variable $x^2$ shows this is eventually at most $x^{-2}$, so [L6] and [L7] make both tails integrable; continuity handles the compact middle interval. The slice at $a=1$ is absolutely integrable by [L1]. Thus every hypothesis of [L2] holds on the open parameter interval $(0,\infty)$ and gives $F'(a)=-\int_{-\infty}^{\infty}x^2e^{-ax^2}\,dx$. [L1, L2, L5, L6, L7]

2.1 Differentiating the explicit formula in step 1.1 with [L3] gives $F'(a)=-(\sqrt\pi/2)a^{-3/2}$, which combined with step 1.2 gives the displayed second-moment identity. [step 1.1, step 1.2, L3] ∎
