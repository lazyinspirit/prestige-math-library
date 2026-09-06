---
id: ex-time-dependent-pullback-differentiation-for-a-translation
kind: example
title: "Time-dependent pullback differentiation for a translation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

For $X_t=\partial_x$, $\Phi_{t,s}(x)=x+t-s$, and $\omega_t=t\,dx$, the time-dependent pullback identity holds.

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that If $\Phi_{t,s}$ is the local evolution of $X_t$ and $\omega_t$ is a smooth time-dependent form, then $$\frac d{dt}\Phi_{t,s}^*\omega_t=\Phi_{t,s}^*(\dot\omega_t+\mathcal L_{X_t}\omega_t).$$ ([[thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow]]).

## Verification

**Proof technique:** direct.

1.1 Here $\Phi_{t,s}^*(t\,dx)=t\,dx$, so the left side is $dx$. [F1, given]

2.1 Since $\dot\omega_t=dx$ and $\mathcal L_{\partial_x}(t\,dx)=0$, the right side is also $dx$. [step 1.1] ∎

