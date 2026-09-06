---
id: thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow
kind: theorem
title: "Differentiation of a pulled-back form along a time-dependent flow"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lie-derivative-of-a-differential-form, def-time-dependent-vector-field-and-evolution-operator, thm-time-dependent-vector-fields-have-local-smooth-evolution-operators, prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
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

If $\Phi_{t,s}$ is the local evolution of $X_t$ and $\omega_t$ is a smooth time-dependent form, then $$\frac d{dt}\Phi_{t,s}^*\omega_t=\Phi_{t,s}^*(\dot\omega_t+\mathcal L_{X_t}\omega_t).$$

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that For $\omega\in\Omega^k(M)$, $\mathcal L_X\omega$ is the Lie derivative of $\omega$ regarded as an alternating covariant tensor. ([[def-lie-derivative-of-a-differential-form]]).

## Proof

**Proof technique:** direct.

1.1 The cocycle writes $\Phi_{t+h,s}^*\omega_{t+h}=\Phi_{t,s}^*(\Phi_{t+h,t}^*\omega_{t+h})$. Divide the increment by $h$. [F1, given]

2.1 As $h\to0$, variation of $\omega_t$ gives $\dot\omega_t$ and the short evolution gives $\mathcal L_{X_t}\omega_t$, proving the formula. [step 1.1] ∎

