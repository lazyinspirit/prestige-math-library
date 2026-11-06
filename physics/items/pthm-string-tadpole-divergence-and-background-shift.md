---
id: pthm-string-tadpole-divergence-and-background-shift
kind: physics-theorem
title: Massless tadpole logarithm on a separating collar
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 11
domain: physics
physical_scope: "Conditional infrared divergence from one nonzero massless separating-channel contraction; it neither computes a model's tadpole nor proves that a shifted stationary background exists."
deps:
  - pthm-string-amplitude-sewing-factorization
  - def-cft-plumbing-and-sewing-parameter
dependency_roles:
  pthm-string-amplitude-sewing-factorization: physical-result
  def-cft-plumbing-and-sewing-parameter: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Edward Witten, Superstring Perturbation Theory via Super Riemann Surfaces: An Overview"
      url: "https://arxiv.org/pdf/1304.2832v4"
      locator: "§§3.2.1–3.2.2, PDF pp. 31–35, zero-momentum massless scalar tadpole and logarithmic separating-degeneration divergence."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume a separating closed collar has a zero-momentum massless scalar channel with $L_0^m=\bar L_0^m=a=\bar a=1$. Let $T_\phi$ be the regulated integrated one-point coefficient on one component, and let $A_{\mathrm{other}}(\phi^\vee)$ be the coefficient on the other component for the state dual to $\phi$. If their pairing contraction $C=T_\phi A_{\mathrm{other}}(\phi^\vee)$ is nonzero, the collar contribution contains $2\pi C\int_0^\epsilon dr/r$, which diverges logarithmically as the cutoff at $r=0$ is removed. A finite prescription must cancel/subtract this coefficient or change to a background in which the relevant one-point coefficient vanishes, if such a consistent stationary background exists. The theorem does not assert either remedy is available in a given model.

## Facts & Assumptions

**Given:** The separating plumbing coordinate $q$, the $d^2q=dxdy$ measure, the massless/intercept condition, a stated regulator for the component one-point coefficient, and the nonzero full contraction $C$.

[F1] [[pthm-string-amplitude-sewing-factorization]]: on the stated one-node local sewing input, the channel coefficient multiplies the collar factor; the massless level-matched state has $\Delta=\bar\Delta=0$.

[F2] [[def-cft-plumbing-and-sewing-parameter]]: the local collar is parameterized by $zw=q$.

[A1] Both component amplitudes and the nondegenerate pairing are defined with the same regulator and normalization; specifically $C\ne0$. A nonzero one-point coefficient alone would not imply this if the companion component coefficient vanished.

## Proof

1.1 For $q=re^{i\theta}$, the massless state has no residual $q$-power by [F1]. The collar density in [F1] is therefore $d^2q/|q|^2=(dr/r)d\theta$. Integrating $\theta$ from $0$ to $2\pi$ gives $2\pi\,dr/r$, and the coefficient is exactly $C$ by [A1]. [given, F1, F2, A1, algebra]

2.1 For a lower radial cutoff $\delta>0$, the contribution is $2\pi C\int_\delta^\epsilon dr/r=2\pi C(\log\epsilon-\log\delta)$. As $\delta\downarrow0$, $\log\delta\to-\infty$; since $C\ne0$, this has no finite limit. A finite prescription must remove the nonzero logarithmic coefficient, for example by a specified cancellation/subtraction or by a model-dependent background change that makes the relevant tadpole vanish. This conditional calculation does not prove the existence of such a background. [F1, A1, step 1.1, algebra] ∎

## Remarks

This is an infrared collar statement under the supplied regulator. Witten's source notes also warn that other moduli-space integrals can be conditionally convergent; the local logarithm is not a claim about the full amplitude's convergence.
