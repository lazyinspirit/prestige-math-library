---
id: ex-st-pure-spinor-cone-euler-eight
kind: example
title: Pure-Spinor Euler Divergence Eight
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
category: string-theory
deps:
  - lem-st-pure-spinor-cone-volume-current-cocycle
dependency_roles:
  lem-st-pure-spinor-cone-volume-current-cocycle: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Nikita Nekrasov, Lectures on Curved Beta-Gamma Systems, Pure Spinors, and Anomalies"
      url: "https://arxiv.org/pdf/hep-th/0511008v1"
      locator: "§§3.3.1–3.4.1, PDF pp. 50–54: eleven-coordinate pure-spinor patch, top form, and Euler-current third pole."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

On the patch and with the conventions of [[lem-st-pure-spinor-cone-volume-current-cocycle]], take $E=\rho\partial_\rho$ and $\Omega=\rho^7d\rho\wedge d^{10}u$. Then $\operatorname{div}_\Omega E=8$, every infinitesimal Lorentz/Spin generator has zero divergence, and the Euler current has third pole $8\alpha'/(z-w)^3$. Sixteen unconstrained spinor pairs instead give ordinary Euler divergence $16$ and are a different field space.

## Statement references

[[lem-st-pure-spinor-cone-volume-current-cocycle]]

## Facts & Assumptions

**Given:** The constrained eleven-coordinate chart, its volume and the positive third-pole convention.

[F1] [[lem-st-pure-spinor-cone-volume-current-cocycle]] proves $\operatorname{div}_\Omega E=8$, zero divergence for Spin generators, and the current pole formula.

## Proof

1.1 Directly, $\operatorname{div}_\Omega E=\rho^{-7}\partial_\rho(\rho^7\rho)=\rho^{-7}\partial_\rho(\rho^8)=8$. A Spin generator has zero divergence by the corresponding calculation in [F1]. [F1, algebra]

2.1 Substituting $E$ into the current formula in [F1] gives $8\alpha'/(z-w)^3$. In a sixteen-dimensional unconstrained linear spinor space with flat volume, the Euler vector $\sum_{\alpha=1}^{16}\lambda^\alpha\partial_{\lambda^\alpha}$ has divergence $\sum_{\alpha=1}^{16}\partial_{\lambda^\alpha}\lambda^\alpha=16$; it does not represent the eleven-dimensional cotangent-quotiented cone system of [F1]. [F1, step 1.1, algebra] ∎
