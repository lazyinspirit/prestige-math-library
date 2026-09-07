---
id: cor-closed-compactly-supported-forms-integrate-to-zero-on-boundaries
title: "Closed forms have zero boundary integral"
kind: corollary
status: published
origin: pipeline
deps: ["thm-general-stokes-theorem"]
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
    - title: "Lee Corollary 16.14, p.414"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Assume $\mathrm{AC}_\omega$. For oriented $M^n$ with boundary, $n\geq1$, if $\eta\in\Omega_c^{n-1}(M)$ is closed, then $\int_{\partial M}j^*\eta=0$. When $M$ is compact, no separate support assumption on the smooth closed form is needed.

## Facts & Assumptions

[F1] [[thm-general-stokes-theorem]]: Assume $\mathrm{AC}_\omega$. Let $M$ be an oriented smooth $n$-manifold with boundary, $n\geq1$, and let $\eta\in\Omega_c^{n-1}(M)$. With $j:\partial M\hookrightarrow M$ and the outward-normal-first orientation, $$\int_M d\eta=\int_{\partial M}j^*\eta.$$ An empty boundary contributes zero; in dimension one its integral is a finite signed sum of point values.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Closedness says $d\eta=0$. General Stokes identifies the boundary integral with $\int_Md\eta$, which is the integral of the zero top form and hence zero. An empty boundary is included. [F1]

2.1 For compact $M$ every closed support is compact. Thus the same argument applies to every smooth closed $(n-1)$-form. For $n=1$ it gives the signed sum of boundary values of a locally constant function; for the zero form all terms vanish. [step 1.1, algebra] ∎
