---
id: cex-opposite-boundary-orientation-gives-the-wrong-sign-in-stokes
title: "The wrong boundary sign in the half-space computation"
kind: counterexample
status: draft
origin: pipeline
deps: ["lem-half-space-stokes-for-a-compactly-supported-form"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Theorem 16.11 proof pp.412–413"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement refuted

False assertion: Stokes on the standard oriented half-line remains valid if its boundary point is assigned the positive sign instead of its induced negative sign.

## Facts & Assumptions

[F1] [[lem-half-space-stokes-for-a-compactly-supported-form]]: Give $H^n=\{x_n\geq0\}$ the standard orientation, $n\geq1$, and its face the outward-normal-first orientation. If $\eta\in\Omega_c^{n-1}(H^n)$ and $j:\partial H^n\hookrightarrow H^n$, then $$\int_{H^n}d\eta=\int_{\partial H^n}j^*\eta.$$ With $\eta=\sum_i a_i\,dx^1\wedge\cdots\wedge\widehat{dx^i}\wedge\cdots\wedge dx^n$, both sides are $(-1)^n\int_{\mathbb R^{n-1}}a_n(x^{\prime},0)\,dx^{\prime}$ for $n>1$, and $-a_1(0)$ for $n=1$.

## Counterexample

**Given:** The proposed assertion; use the data constructed below.

1.1 Choose a smooth compactly supported f on $[0,\infty)$ with f=1 near zero. Explicitly, put $b(u)=e^{-1/u}$ for $u>0$ and zero otherwise, and $f(t)=b(2-t)/(b(2-t)+b(t-1))$. The denominator is positive for all t, and all derivatives of b vanish at zero, so f is smooth, equals one for t at most one, and zero for t at least two. [construct]

2.1 The half-space Stokes formula in dimension one gives $\int_0^\infty f^{\prime}(t)dt=-f(0)=-1$, equivalently the FTC difference $f(2)-f(0)$. Giving the endpoint positive sign instead yields $+f(0)=1$, so the proposed convention breaks the identity. [F1, step 1.1] ∎
