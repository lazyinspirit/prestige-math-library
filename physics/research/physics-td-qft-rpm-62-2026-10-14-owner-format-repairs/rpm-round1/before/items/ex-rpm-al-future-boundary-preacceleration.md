---
id: ex-rpm-al-future-boundary-preacceleration
kind: example
title: "Future-boundary solution of the nonrelativistic Abraham–Lorentz equation"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - thm-ftc-first-part
  - thm-continuous-implies-integrable
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
  - thm-extreme-value-metric
  - thm-monotonicity-of-the-integral
  - lem-integral-elementary-bounds
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - thm-exponential-limits-and-range
dependency_roles:
  thm-ftc-first-part: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  lem-integral-elementary-bounds: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  thm-exponential-limits-and-range: mathematical-premise
sources:
  references:
    - title: "Landau and Lifshitz, The Classical Theory of Fields, 4th revised English edition"
      url: "https://ru.djvu.online/file/ADnW1S0k8Ttos"
      locator: "Complete text inspected; §75, printed pp. 222–225, on the nonrelativistic radiation-reaction equation and its future-boundary solution."
    - title: "Sen Zhang, Pre-acceleration from Landau–Lifshitz Series, arXiv:1303.7120"
      url: "https://arxiv.org/html/1303.7120"
      locator: "Full HTML text inspected; §2, Eqs. (2.1)–(2.6), and Appendix A, Eqs. (A.1)–(A.4), including the nonrelativistic pre-acceleration solution."
verification: {}
physical_scope: "Exact solution and sign check for a separately stated one-dimensional nonrelativistic Abraham–Lorentz ODE. Pre-acceleration is a property of this future-boundary model solution, not an empirical finding or a conclusion about finite-body causal dynamics."
empirical_premises: []
---

## Statement

Let $m>0$ and $\tau_e>0$. Let $T>0$ and let $F_{\rm ext}\in C_c^\infty(\mathbb R)$ be nonnegative, not identically zero, and supported in $[0,T]$; $C_c^\infty$ means smooth with compact support. Here $F_{\rm ext}$ is a scalar force history in newtons. Consider the separate nonrelativistic Abraham–Lorentz model equation for acceleration $a(t)$,

$$
a(t)=\frac{F_{\rm ext}(t)}{m}+\tau_e\frac{da}{dt}(t),
$$

where $\tau_e$ has units of time. Interpret the integral to $+\infty$ as a finite Riemann integral after a truncation beyond the compact support, with the value independent of the truncation. The unique solution satisfying the future boundary condition $a(t)\to0$ as $t\to+\infty$ is

$$
a(t)=\frac{1}{m\tau_e}\int_t^{\infty}e^{(t-s)/\tau_e}F_{\rm ext}(s)\,ds.
$$

It vanishes for $t\geq T$ and is strictly positive for every $t<0$. Thus this equation with this future boundary condition has pre-acceleration before the pulse support. The example concerns the stated ODE only; it is not a measurement and does not establish the behavior of finite charges.

## Facts & Assumptions

**Given:** $m>0$, $\tau_e>0$, the stated smooth compactly supported nonnegative pulse, and the separate ODE and future boundary condition above.

[A1] Adopt only for this mathematical example the scalar equation $a=F_{\rm ext}/m+\tau_e a'$ and the future decay condition.

[F1] [[thm-ftc-first-part]] and [[thm-continuous-implies-integrable]]: a continuous integrand on each compact interval has the integral regularity needed for the fundamental theorem of calculus.

[F2] [[thm-derivative-of-exponential]], [[thm-chain-rule]], and [[thm-algebra-of-derivatives]]: exponentials differentiate by the chain rule, and products obey the product rule.

[F3] [[thm-monotonicity-of-the-integral]] and [[lem-integral-elementary-bounds]]: the integral of a nonnegative continuous function is nonnegative and bounded below by a positive lower bound times interval length.

[F4] [[cor-exponential-reciprocal-and-positivity]]: $e^x>0$ and $e^{-x}=1/e^x$.

[F5] [[thm-extreme-value-metric]]: a continuous real function on a compact interval attains its minimum; if it is positive everywhere then that minimum is positive.

[F6] [[cor-mean-value-theorem]] and [[thm-exponential-is-strictly-increasing]]: the mean value theorem and positive derivative give strict increase of the real exponential.

[F7] [[thm-exponential-limits-and-range]]: $e^x\to0$ as $x\to-\infty$.

## Proof

1.1 Define $I(t):=\int_t^\infty e^{(t-s)/\tau_e}F_{\rm ext}(s)\,ds$, interpreting the integral as a finite Riemann integral after any upper truncation beyond $\max\{t,T\}$; compact support makes the value independent of that truncation. For $t<T$, write $I(t)=e^{t/\tau_e}\int_t^T e^{-s/\tau_e}F_{\rm ext}(s)\,ds$. By [F1] the integrand is integrable on this compact interval, and [F2] together with the fundamental theorem gives

$$
I'(t)=-F_{\rm ext}(t)+\frac{1}{\tau_e}I(t)\qquad (t<T).
$$

For $a=I/(m\tau_e)$ this identity becomes $\tau_e a'= -F_{\rm ext}/m+a$, which rearranges to the displayed Abraham–Lorentz equation. For $t>T$, both $I$ and $F_{\rm ext}$ vanish, so the same equation holds. At $t=T$, smoothness and support imply $F_{\rm ext}(T)=0$, and the one-sided derivatives agree with the displayed identity. [given, A1, F1, F2, algebra]

1.2 For $t\geq T$, the integration interval contains no point where $F_{\rm ext}$ is nonzero, so $a(t)=0$. For $t<0$, continuity and nonnegativity of the nonzero pulse give a closed subinterval of $(0,T)$ on which $F_{\rm ext}\geq d>0$. The exponential factor is positive and continuous there by [F2, F4]; its minimum is positive by [F5]. The integral over that subinterval is strictly positive by the lower bound [F3], and all remaining contributions are nonnegative. Thus $a(t)>0$. Since $a(t)=0$ for $t\geq T$, it satisfies the future boundary condition. [given, A1, F2, F3, F4, F5, step 1.1]

2.1 If $a_1,a_2$ are two solutions, their difference $d=a_1-a_2$ satisfies $d'=d/\tau_e$. The product rule gives $(e^{-t/\tau_e}d(t))'=0$, so [F6] implies this product is a constant $C$. By [F4], $d(t)=Ce^{t/\tau_e}$; if $C\ne0$, then [F7] makes $|d(t)|\to\infty$ as $t\to+\infty$, contradicting $d(t)\to0$. Hence $C=0$ and $d=0$, proving uniqueness. Together with step 1.2, the unique future-decaying solution is strictly positive for all $t<0$: this pre-acceleration is a property of the stated model equation, not an empirical claim. [A1, F2, F4, F6, F7, step 1.2, algebra] ∎
