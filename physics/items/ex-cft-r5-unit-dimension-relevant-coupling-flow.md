---
id: ex-cft-r5-unit-dimension-relevant-coupling-flow
kind: example
title: Linearized flow of a unit-dimension scalar perturbation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: physics
library: physics
deps:
  - def-cft-r5-regulated-conformal-perturbation
  - pthm-cft-r5-linear-beta-coefficient-from-scaling-dimension
dependency_roles:
  def-cft-r5-regulated-conformal-perturbation: formulation-prerequisite
  pthm-cft-r5-linear-beta-coefficient-from-scaling-dimension: physical-result
justified_by: []
physical_scope: Conditional data-level Wilsonian calculation for a normalized scalar scaling eigenoperator of total dimension one; it stops when the dimensionless coupling leaves the stated linearized regime and makes no global-flow or physical-realization claim.
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - source_key: S01
      title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, published 1989, arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§8.6, printed pp. 128–130: relevant operators, conformal perturbations, and the distinction between first-order scaling and exact marginality."
      source_limit: The notes do not assert that every abstract operator datum is realized by a particular CFT.
    - source_key: S20
      title: Satoshi Nawata, Runkai Tao, Daisuke Yokoyama, An Introduction to 2d Conformal Field Theory, arXiv:2208.05180v5
      url: https://arxiv.org/pdf/2208.05180v5
      locator: "§6.1, printed pp. 78–82, Eqs. (6.10), (6.13), and (6.18): Wilsonian time convention and linear beta coefficient."
      source_limit: The linearized calculation does not determine nonlinear flow, endpoint existence, or model realization.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Condition on declared full local two-dimensional CFT data that contain a normalized scalar scaling eigenoperator $\mathcal O$ of total dimension $\Delta=1$. This is a data-level example and does not construct such a CFT. Let $a_0>0$ be a reference cutoff length, let the fixed dimensionful coupling $\lambda_{\rm phys}\in\mathbb R$ have units $[{\rm length}]^{-1}$, and set $t=\log(a/a_0)$ and $g(t)=\lambda_{\rm phys}a(t)$ with $a(t)=a_0e^t$. The linearized regime is the interval where $|g(t)|<\varepsilon$ for a fixed dimensionless tolerance $\varepsilon>0$. The example computes only the engineering beta term in this regime; OPE-induced nonlinear corrections and a later endpoint are not specified.

## Example references

[[def-cft-r5-regulated-conformal-perturbation]]

[[pthm-cft-r5-linear-beta-coefficient-from-scaling-dimension]]

## Facts & Assumptions

**Given:** The cutoff and IR time convention in the Example, and a scalar scaling eigenoperator with $\Delta=1$.

[F1] [[def-cft-r5-regulated-conformal-perturbation]]: the dimensionless coupling is $g(a)=\lambda_{\rm phys}a^{2-\Delta}$ and $t=\log(a/a_0)$ increases toward the IR.

[F2] [[pthm-cft-r5-linear-beta-coefficient-from-scaling-dimension]]: the engineering beta term is $(2-\Delta)g$ in this convention.

[A1] The background CFT data and the normalized operator are assumed as stated in the Example; no existence theorem for them is used.

## Verification

**Given:** $g_0=\lambda_{\rm phys}a_0$ and $|g_0|<\varepsilon$.

1.1 Since $a(t)=a_0e^t$ and $\Delta=1$, the definition gives $g(t)=\lambda_{\rm phys}a_0e^t=g_0e^t$. [given, F1, A1, algebra]

2.1 Differentiating the fixed-dimensionful-coupling rescaling gives the engineering term $\beta_{\rm eng}(g(t)):=dg(t)/dt=g_0e^t=g(t)$, agreeing with $(2-\Delta)g$ from [F2]. This is not an equation for the full renormalized beta function: the theorem permits additional $O(|g|^2)$ terms under its separate second-order remainder hypothesis, and this Example specifies no nonlinear correction. [given, F2, step 1.1, algebra]

2.2 For $g_0\ne0$, the boundary $|g(t_*)|=\varepsilon$ is reached at $t_* = \log(\varepsilon/|g_0|)>0$, and $|g(t)|<\varepsilon$ for $t<t_*$. If $g_0=0$, then $g(t)=0$ for every $t$ and there is no finite exit time. [given, step 1.1, algebra]

3.1 For nonzero $g_0$, the strict linearized regime is $t<t_*$; at $t=t_*$ one has $|g(t_*)|=\varepsilon$, so the boundary point is outside that regime. This calculation supplies no nonlinear continuation or assertion that a full flow reaches another CFT. [given, A1, step 2.2] ∎

