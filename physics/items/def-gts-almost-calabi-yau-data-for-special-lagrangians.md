---
id: def-gts-almost-calabi-yau-data-for-special-lagrangians
kind: definition
title: Almost-Calabi–Yau data for special Lagrangians
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-gts-symplectic-and-almost-complex-curve-data
dependency_roles:
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Jacopo Stoppa, Special Lagrangian Sections and Stability Conditions on Threefolds
      url: https://arxiv.org/pdf/2508.17709v1
      locator: Introduction, printed pp. 1–2, almost-Calabi–Yau convention and Conjecture 1.1 discussion
    - title: Dominic Joyce, Lectures on Special Lagrangian Geometry
      url: https://arxiv.org/pdf/math/0111111v3
      locator: §4.1, Calabi–Yau and almost-Calabi–Yau conventions
verification:
  precheck: n/a
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

## Definition

Let $X$ be a complex manifold of complex dimension $n$, with integrable complex structure $J$. An almost-Calabi–Yau datum on $X$ is a real closed positive $(1,1)$-form $\omega$ and a nowhere-vanishing holomorphic $n$-form $\Omega$. Positivity means $\omega(v,Jv)>0$ for every nonzero real tangent vector $v$; type $(1,1)$ means $\omega(Jv,Jw)=\omega(v,w)$. Thus $g(v,w)=\omega(v,Jw)$ is the associated Kähler metric, and $\Omega$ trivializes the canonical line bundle $K_X=\bigwedge^n T^{*1,0}X$.

The manifold need not be compact. No Ricci-flat equation, volume normalization, or pointwise normalization of $\Omega$ against $g$ is part of this definition. In particular, no calibration or volume-minimizing conclusion follows merely from the name “almost-Calabi–Yau.”

## Definition references

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

[[def-gts-symplectic-and-almost-complex-curve-data]]
