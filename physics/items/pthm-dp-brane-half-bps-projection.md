---
id: pthm-dp-brane-half-bps-projection
kind: physics-theorem
title: Flat Dp Brane Half BPS Projection
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 13
domain: physics
library: physics
deps:
- def-dp-brane-open-string-boundary-condition
- def-type-iia-supergravity-killing-spinor-equations
- def-type-iib-supergravity-killing-spinor-equations
- def-supergravity-conventions-and-normalizations
- post-dp-brane-boundary-state-supercharge-gluing
dependency_roles:
  def-dp-brane-open-string-boundary-condition: formulation-prerequisite
  def-type-iia-supergravity-killing-spinor-equations: formulation-prerequisite
  def-type-iib-supergravity-killing-spinor-equations: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-dp-brane-boundary-state-supercharge-gluing: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: Static flat Type II Dp boundary sector with zero worldvolume flux and no backreaction; conditionally counts
  the preserved constant target supersymmetries from the flat KSE and boundary-state gluing, without extending to curved,
  fluxed, or dynamical branes.
sources:
  references:
  - title: J. Polchinski, Dirichlet-Branes and Ramond-Ramond Charges, arXiv:hep-th/9510017v3
    url: https://arxiv.org/pdf/hep-th/9510017v3
    locator: §2, PDF pp. 2–4, Ramond zero-mode gluing and half-supersymmetry statement.
  - title: M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free
      notation, arXiv:1607.00327v3
    url: https://arxiv.org/pdf/1607.00327v3
    locator: §§3.4–3.6 and 8.2, Type IIA/IIB Killing-spinor equation conventions and flat-background specialization.
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

In a source-free flat Type II background, let $\mathcal S_L,\mathcal S_R$ be the two real 16-dimensional Majorana–Weyl supersymmetry spaces of the appropriate IIA/IIB chiralities. For a static flat Dp boundary state, the preserved constant supersymmetries are exactly the graph $\{(K_p\epsilon_R,\epsilon_R):\epsilon_R\in\mathcal S_R\}$ of the invertible map $K_p$ in [[post-dp-brane-boundary-state-supercharge-gluing]]. Hence they form a 16-dimensional real subspace of the 32-dimensional supersymmetry space. Equivalently, with
$$ \Gamma_{Dp}(\epsilon_L,\epsilon_R)=(K_p\epsilon_R,K_p^{-1}\epsilon_L), $$
the preserved parameters obey $\Gamma_{Dp}\epsilon=\epsilon$, and $\Gamma_{Dp}^2=1$. This is the conditional half-BPS projection.

## Facts & Assumptions

**Given:** A source-free flat ten-dimensional Type II bosonic solution with constant dilaton and vanishing field strengths, a static flat Dp boundary condition, and the exact source gluing map and KSE interfaces.

[F1] [[post-dp-brane-boundary-state-supercharge-gluing]]: the unbroken boundary-state supersymmetries obey $\epsilon_L=K_p\epsilon_R$, where $K_p:\mathcal S_R\to\mathcal S_L$ is invertible.

[F2] [[def-dp-brane-open-string-boundary-condition]]: a static flat Dp-brane has Neumann tangent and fixed Dirichlet normal endpoint data; Type IIA uses even $p$ and Type IIB odd $p$.

[A1] [[def-type-iia-supergravity-killing-spinor-equations]]: a local on-shell IIA spinor obeys the displayed gravitino and dilatino equations on a supplied spin patch. In the stated flat solution all flux and dilaton-gradient terms vanish, so the gravitino equation reduces to $\nabla_X\epsilon=0$. Its current Step 1 record is ready for its declared dependencies.

[A2] [[def-type-iib-supergravity-killing-spinor-equations]]: a local on-shell IIB doublet obeys the displayed equations in the stated spinor bundle. In the stated flat solution $H_3=0$, $G_1=\widetilde G_3=\widetilde G_5=0$, and $d\Phi=0$, so $\widetilde\Omega=\Omega=0$ and the gravitino equation reduces to $\nabla_X\epsilon=0$. Its current Step 1 record is escalated because its upstream readiness inputs are missing, so use remains conditional.

## Proof

1.1 On $\mathcal S_L\oplus\mathcal S_R$, define $\Gamma_{Dp}$ by the displayed block map. Since $K_p$ is invertible by [F1], both compositions are defined and $\Gamma_{Dp}^2(\epsilon_L,\epsilon_R)=(K_pK_p^{-1}\epsilon_L,K_p^{-1}K_p\epsilon_R)=(\epsilon_L,\epsilon_R)$. Thus it is an involution. [given, F1, algebra]

2.1 The fixed-point equation $\Gamma_{Dp}(\epsilon_L,\epsilon_R)=(\epsilon_L,\epsilon_R)$ is equivalent to the two equations $\epsilon_L=K_p\epsilon_R$ and $\epsilon_R=K_p^{-1}\epsilon_L$; either one implies the other. The map $\epsilon_R\mapsto(K_p\epsilon_R,\epsilon_R)$ is therefore a linear bijection from $\mathcal S_R$ to the fixed-point space. [given, F1, step 1.1, algebra]

3.1 By [A1] or [A2], according to Type IIA or IIB, the flat on-shell KSE reduce to $\nabla_X\epsilon=0$; in a Cartesian parallel frame these solutions are the constant elements of each chiral 16-real-dimensional space. The boundary-state condition [F1] retains exactly the graph counted in step 2.1, so the preserved space has real dimension $16$, half of $\dim_{\mathbb R}(\mathcal S_L\oplus\mathcal S_R)=32$. This conclusion remains conditional on current KSE readiness and adopted boundary-state gluing; it asserts nothing about nonflat or fluxed backgrounds. [given, F1, A1, A2, F2, step 2.1, algebra] ∎
