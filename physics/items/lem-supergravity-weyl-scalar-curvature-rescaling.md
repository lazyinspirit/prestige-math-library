---
id: lem-supergravity-weyl-scalar-curvature-rescaling
kind: lemma
title: Scalar Curvature Under Conformal Rescaling
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps: []
dependency_roles: {}
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Colin Sterckx, Modave Lecture notes: Introduction to Exceptional Field Theory, arXiv:2410.19600v1"
      url: "https://arxiv.org/pdf/2410.19600v1"
      locator: "§3.2.1, equations (3.11)–(3.12), printed p. 29; the dimension-D Weyl transformation of scalar curvature."
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

## Statement

Let $M$ be a smooth $n$-manifold with $n\ge2$, let $g$ be a smooth Lorentzian metric, and let $\sigma\in C^\infty(M,\mathbb R)$. Define $\widetilde g=e^{2\sigma}g$ and $\Box_g f:=g^{MN}\nabla_M\nabla_N f$. Use the local Christoffel coefficients $\Gamma^P{}_{MN}=\frac12g^{PQ}(\partial_Mg_{NQ}+\partial_Ng_{MQ}-\partial_Qg_{MN})$, curvature $R^P{}_{QMN}=\partial_M\Gamma^P{}_{NQ}-\partial_N\Gamma^P{}_{MQ}+\Gamma^P{}_{MR}\Gamma^R{}_{NQ}-\Gamma^P{}_{NR}\Gamma^R{}_{MQ}$, Ricci tensor $R_{QN}=R^P{}_{QPN}$, and scalar curvature $R_g=g^{QN}R_{QN}$, with analogous definitions for $\widetilde g$. Then the pointwise identity is
$$
R_{\widetilde g}=e^{-2\sigma}\left(R_g-2(n-1)\Box_g\sigma-(n-1)(n-2)g^{MN}(\partial_M\sigma)(\partial_N\sigma)\right).
$$
No field equation, compactness, boundary condition, or physical model is assumed.

## Statement references

[Sterckx, §3.2.1, equation (3.12)](https://arxiv.org/pdf/2410.19600v1)

## Facts & Assumptions

**Given:** $M$, $g$, $\sigma$, $\widetilde g=e^{2\sigma}g$, and the curvature convention in the Statement.

[A1] $g$ is nondegenerate and Lorentzian, so its inverse and Levi-Civita connection are defined; $e^{2\sigma}>0$, so $\widetilde g$ is also nondegenerate with the same signature.

## Proof
1.1 Write $\sigma_M=\partial_M\sigma$, $\sigma^P=g^{PQ}\sigma_Q$, and $C^P{}_{MN}:=\widetilde\Gamma^P{}_{MN}-\Gamma^P{}_{MN}$. Substituting $\widetilde g_{MN}=e^{2\sigma}g_{MN}$ and $\widetilde g^{MN}=e^{-2\sigma}g^{MN}$ into the Christoffel formula in the Statement, the derivatives of $g$ reproduce $\Gamma^P{}_{MN}$, while the derivatives of $e^{2\sigma}$ give $C^P{}_{MN}=\delta^P_M\sigma_N+\delta^P_N\sigma_M-g_{MN}\sigma^P$. [given, A1, algebra]

2.1 Because $C$ is a tensor, the Ricci definitions give $\widetilde R_{MN}=R_{MN}+\nabla_P C^P{}_{MN}-\nabla_N C^P{}_{MP}+C^P{}_{PQ}C^Q{}_{MN}-C^P{}_{NQ}C^Q{}_{MP}$. Using $\nabla g=0$ and symmetry of the Hessian, the derivative terms are $\nabla_P C^P{}_{MN}-\nabla_N C^P{}_{MP}=-(n-2)\nabla_M\nabla_N\sigma-g_{MN}\Box_g\sigma$. Direct contraction of the displayed $C$ terms gives $C^P{}_{PQ}C^Q{}_{MN}=n(2\sigma_M\sigma_N-g_{MN}|d\sigma|_g^2)$ and $C^P{}_{NQ}C^Q{}_{MP}=(n+2)\sigma_M\sigma_N-2g_{MN}|d\sigma|_g^2$, where $|d\sigma|_g^2:=g^{PQ}\sigma_P\sigma_Q$. Thus $\widetilde R_{MN}=R_{MN}-(n-2)\nabla_M\nabla_N\sigma-g_{MN}\Box_g\sigma+(n-2)(\sigma_M\sigma_N-g_{MN}|d\sigma|_g^2)$. [step 1.1, A1, algebra]

3.1 Contract the Ricci identity in step 2.1 with $\widetilde g^{MN}=e^{-2\sigma}g^{MN}$. The Hessian terms contribute $-(n-2)\Box_g\sigma-n\Box_g\sigma=-2(n-1)\Box_g\sigma$; the gradient terms contribute $(n-2)|d\sigma|_g^2-n(n-2)|d\sigma|_g^2=-(n-1)(n-2)|d\sigma|_g^2$. The resulting scalar-curvature identity is exactly the one in the Statement. [given, A1, step 2.1, algebra] ∎
