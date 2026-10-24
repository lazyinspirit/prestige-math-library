---
id: fs-the-integral-of-every-exact-form-on-every-manifold-is-zero
title: "False: all exact forms integrate to zero everywhere"
kind: false-statement
status: published
origin: pipeline
deps: ["thm-general-stokes-theorem", "cor-fundamental-theorem-of-calculus-from-stokes"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Theorem 16.11 and Corollary 16.13 hypotheses, pp.411–414"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

False assertion: every exact smooth top form has zero total integral whenever that integral exists, on every manifold.

## Facts & Assumptions

[F1] [[thm-general-stokes-theorem]]: Assume $\mathrm{AC}_\omega$. Let $M$ be an oriented smooth $n$-manifold with boundary, $n\geq1$, and let $\eta\in\Omega_c^{n-1}(M)$. With $j:\partial M\hookrightarrow M$ and the outward-normal-first orientation, $$\int_M d\eta=\int_{\partial M}j^*\eta.$$ An empty boundary contributes zero; in dimension one its integral is a finite signed sum of point values.

[F2] [[cor-fundamental-theorem-of-calculus-from-stokes]]: For $a<b$, orient $[a,b]$ increasingly. Every smooth $f$ on this interval satisfies $$\int_{[a,b]}df=f(b)-f(a),$$ where the boundary point signs are $-1$ at $a$ and $+1$ at $b$. This agrees with the Riemann fundamental theorem of calculus.

## Refutation

**Given:** The proposed assertion; use the data constructed below.

1.1 On the increasingly oriented compact interval $[0,1]$, the exact form $dt=d(t)$ has integral $1-0=1$. Stokes includes its nonzero boundary contribution. This alone refutes the assertion. [F1, F2]

2.1 The primitive support condition also matters without boundary. Let $b(t)=e^{-1/(1-t^2)}$ for $|t|<1$, zero otherwise; its derivatives vanish at the cutoff endpoints. Put $c=\int_{-1}^1b>0$ and $G(t)=c^{-1}\int_{-1}^t b(s)ds$, extending $b$ by zero. Then $G$ is smooth, equals zero for $t\leq-1$ and one for $t\geq1$. The exact form $dG=c^{-1}b(t)dt$ has compact support and integral one by the interval FTC, whereas $G$ has noncompact support. Hence this example also fails the compact-primitive hypothesis of Stokes on the line. [F2, step 1.1] ∎
