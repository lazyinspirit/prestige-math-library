---
id: ex-stokes-on-an-oriented-interval
title: "Stokes on an interval with both endpoint chart signs"
kind: example
status: draft
origin: pipeline
deps: ["cor-fundamental-theorem-of-calculus-from-stokes", "lem-half-space-stokes-for-a-compactly-supported-form"]
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
    - title: "Lee Example 16.12 and p.405 negative-chart explanation"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Example

For $f(t)=t^2$ on the increasingly oriented interval $[0,1]$,
$$\int_{[0,1]}df=1= f(1)-f(0).$$
The right endpoint chart $u=1-t$ is negative; its chart sign must be retained in the upper-half-line calculation.

## Facts & Assumptions

[F1] [[cor-fundamental-theorem-of-calculus-from-stokes]]: For $a<b$, orient $[a,b]$ increasingly. Every smooth $f$ on this interval satisfies $$\int_{[a,b]}df=f(b)-f(a),$$ where the boundary point signs are $-1$ at $a$ and $+1$ at $b$. This agrees with the Riemann fundamental theorem of calculus.

[F2] [[lem-half-space-stokes-for-a-compactly-supported-form]]: Give $H^n=\{x_n\geq0\}$ the standard orientation, $n\geq1$, and its face the outward-normal-first orientation. If $\eta\in\Omega_c^{n-1}(H^n)$ and $j:\partial H^n\hookrightarrow H^n$, then $$\int_{H^n}d\eta=\int_{\partial H^n}j^*\eta.$$ With $\eta=\sum_i a_i\,dx^1\wedge\cdots\wedge\widehat{dx^i}\wedge\cdots\wedge dx^n$, both sides are $(-1)^n\int_{\mathbb R^{n-1}}a_n(x^{\prime},0)\,dx^{\prime}$ for $n>1$, and $-a_1(0)$ for $n=1$.

## Verification

**Given:** The objects and hypotheses in the statement above.

1.1 The interval formula gives $\int df=\int_0^1 2t\,dt=1$ and boundary values $(-1)f(0)+(+1)f(1)=1$. These are induced endpoint signs, not unsigned point counting. [F1]

2.1 At the left endpoint $u=t$ is positive and the half-line boundary sign is negative. At the right endpoint $u=1-t$ is negative: the half-line calculation contributes $-f(1)$, and the chart sign $-1$ changes it to $+f(1)$. More explicitly apply that local calculation to partition-weighted f supported near the endpoint; the two signs multiply in exactly this way. Thus the local calculation reproduces both endpoint values, including the zero value at t=0. [F2, step 1.1] ∎
