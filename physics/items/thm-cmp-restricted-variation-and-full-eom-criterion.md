---
id: thm-cmp-restricted-variation-and-full-eom-criterion
kind: theorem
title: Restricted variation and the full field equations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: cmp-kaluza-klein-reduction-and-effective-theory
dependency_level: 1
deps:
  - def-cmp-field-space-variation-splitting
dependency_roles:
  def-cmp-field-space-variation-splitting: mathematical-premise
aliases: []
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
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Josep M. Pons and Pere Talavera, Consistent and Inconsistent Truncations: Some Results and the Issue of the Correct Uplifting of Solutions, arXiv:hep-th/0309079v2"
      url: "https://arxiv.org/pdf/hep-th/0309079v2"
      locator: "§§1 and 2.2–2.4: reduced variational equations, full equations, and solution uplift"
---

## Statement

Let $\mathcal C_r,\mathcal C,S,I,\phi,\psi=I(\phi)$ and the topological direct sum $T_\psi\mathcal C=V_{\rm ret}(\phi)\oplus V_{\rm omit}(\phi)$ be as in the supplied definition. Set $S_r=S\circ I$. Call $\psi$ stationary for $S$ when $D S|_\psi=0$ on all admissible full variations, and call $\phi$ stationary for $S_r$ when $D S_r|_\phi=0$. Then
$$D S_r|_\phi=(D I_\phi)^*(D S|_\psi),$$
so $D S_r|_\phi=0$ if and only if $D S|_\psi$ annihilates $V_{\rm ret}(\phi)$. The configuration $\psi$ is stationary for $S$ if and only if the restrictions of $D S|_\psi$ to both $V_{\rm ret}(\phi)$ and $V_{\rm omit}(\phi)$ vanish. Therefore reduced stationarity implies full stationarity exactly when the omitted restriction also vanishes. No local Euler–Lagrange differential operator is asserted here; for an action whose boundary terms vanish, these are its variational stationarity conditions.

## Statement references

[[def-cmp-field-space-variation-splitting]]

## Facts & Assumptions

**Given:** Differentiable $S:\mathcal C\to\mathbb R$, $I:\mathcal C_r\to\mathcal C$, and the declared split $T_{I(\phi)}\mathcal C=V_{\rm ret}\oplus V_{\rm omit}$.

[F1] [[def-cmp-field-space-variation-splitting]]: $D S_r|_\phi=(D I_\phi)^*(D S|_\psi)$, so reduced stationarity is equivalent to $D S|_\psi$ annihilating $V_{\rm ret}(\phi)$; every full variation decomposes uniquely into retained and omitted parts.

[A1] “Stationary” means that the first-variation covector vanishes on every tangent variation in the stated configuration space. Boundary conditions and any gauge fixing or smooth quotient are already incorporated in that space.

## Proof

1.1  If $D S|_\psi=0$ on the full tangent space, its restrictions to both summands vanish. In particular, by [F1], $D S_r|_\phi=(D I_\phi)^*(D S|_\psi)=0$. [given, F1, A1, algebra]

2.1  Conversely, suppose both restrictions vanish. Every full variation is $v=v_{\rm ret}+v_{\rm omit}$ by [F1], so linearity gives $D S|_\psi(v)=D S|_\psi(v_{\rm ret})+D S|_\psi(v_{\rm omit})=0+0=0$. Thus full stationarity is equivalent to the two restrictions vanishing. [given, F1, A1, step 1.1, algebra]

3.1  The pullback identity in [F1] identifies reduced stationarity with vanishing of the retained restriction. Hence reduced stationarity implies full stationarity exactly when the omitted restriction vanishes as well; without that condition, the restricted variation leaves it untested. [given, F1, A1, step 2.1, algebra] ∎
