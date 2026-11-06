---
id: pthm-cft-r5-linear-beta-coefficient-from-scaling-dimension
kind: physics-theorem
title: Linear beta coefficient from the scaling dimension
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: physics
library: physics
deps:
  - def-cft-r5-regulated-conformal-perturbation
dependency_roles:
  def-cft-r5-regulated-conformal-perturbation: formulation-prerequisite
justified_by: []
physical_scope: Linearized Wilsonian cutoff scaling near a declared two-dimensional conformal fixed point for a finite family of scalar scaling eigenoperators; no nonlinear beta function or global flow is asserted.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - source_key: S20
      title: Satoshi Nawata, Runkai Tao, Daisuke Yokoyama, An Introduction to 2d Conformal Field Theory, arXiv:2208.05180v5
      url: https://arxiv.org/pdf/2208.05180v5
      locator: "§6.1, printed pp. 78–82, Eqs. (6.5)–(6.18): scaling of the dimensionless coupling and its linear beta coefficient."
      source_limit: The derivation is linearized around the fixed point; the OPE calculation supplies additional model- and scheme-dependent terms.
    - source_key: S01
      title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, published 1989, arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§8.6, printed pp. 128–130: scaling dimensions, relevant and marginal perturbations, and OPE obstructions."
      source_limit: These lecture notes do not prove an all-order beta function or global flow for a general perturbed CFT.
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

Let $N<\infty$, let $g=(g^1,\ldots,g^N)$ be dimensionless Wilsonian couplings near a declared two-dimensional conformal fixed point, and let $\mathcal O_i$ be scalar scaling eigenoperators of total dimensions $\Delta_i$. Use cutoff length $a$ and IR time $t=\log(a/a_0)$. For fixed dimensionful coefficients $\lambda_{\rm phys}^i$, set $g^i(a)=\lambda_{\rm phys}^i a^{2-\Delta_i}$. The engineering contribution to the beta function is $\beta^i_{\rm eng}=(2-\Delta_i)g^i$. If the renormalized beta map is differentiable and its remaining terms vanish to second order at the fixed point, then $\beta^i(g)=(2-\Delta_i)g^i+O(\|g\|^2)$. This is a linearized scaling statement; it does not assert that marginal operators are exactly marginal.

## Facts & Assumptions

**Given:** A finite family of dimensionless couplings and scalar scaling eigenoperators at the fixed point, a cutoff length $a$, and the IR time convention $t=\log(a/a_0)$.

[F1] [[def-cft-r5-regulated-conformal-perturbation]]: $g^i(a)=\lambda_{\rm phys}^i a^{2-\Delta_i}$, where $\lambda_{\rm phys}^i$ has units $[{\rm length}]^{\Delta_i-2}$ and $a$ has units of length.

[A1] The fixed-point scaling law is $\mathcal O_i(e^t x)=e^{-\Delta_i t}\mathcal O_i(x)$, and the linearized coupling chart is the declared scaling-eigenoperator basis.

[A2] Write the beta map as $\beta(g)=((2-\Delta_i)g^i)_{i=1}^N+R(g)$. The remainder satisfies $R(0)=0$ and, for some $K,\delta>0$, $\|R(g)\|\le K\|g\|^2$ whenever $\|g\|<\delta$, in the finite-dimensional Euclidean norm. This bound implies $DR(0)=0$; it is the stated second-order hypothesis.

## Proof

1.1 Under $a(t)=a_0e^t$, the definition in [F1] and the scaling law in [A1] give $g^i(t)=\lambda_{\rm phys}^i(a_0e^t)^{2-\Delta_i}=g^i(0)e^{(2-\Delta_i)t}$. [given, F1, A1, algebra]

2.1 Differentiating this scalar exponential at $t=0$ gives $\left.\frac{dg^i}{dt}\right|_{0}=(2-\Delta_i)g^i(0)$, which is exactly the engineering contribution to the beta vector in the chosen IR convention. [given, step 1.1, algebra]

3.1 By [A2], the derivative of the remainder at $g=0$ is zero, so it does not change the linear part computed in 2.1. The full beta therefore has the stated linearization. For $\Delta_i=2$ the linear coefficient is zero and imposes no conclusion about higher-order terms. [given, A2, step 2.1] ∎

