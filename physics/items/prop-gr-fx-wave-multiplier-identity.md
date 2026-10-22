---
id: prop-gr-fx-wave-multiplier-identity
kind: proposition
title: "Wave multiplier divergence identity"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
physical_scope: "A differential identity for a real test scalar on a fixed smooth Lorentzian background; it asserts no decay or coupled gravitational response."
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-countable-choice
  - def-gr-fx-scalar-wave-stress
  - def-gr-killing-field
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-gr-killing-and-on-shell-matter-identities
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-fx-scalar-wave-stress: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
sources:
  references:
    - title: "M. Dafermos and I. Rodnianski, Lectures on black holes and linear waves, arXiv:0811.0354v1 (2008), §3.2.2, PDF pp. 29–30"
      url: "https://arxiv.org/pdf/0811.0354"
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §9.1, PDF pp. 113–114"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,g,N)$ be a time-oriented smooth
Lorentzian four-manifold, let $U\subseteq M$ be open, let
$\psi\in C^\infty(U,\mathbb R)$, and let $X$ be a smooth vector field on $U$.
For the tensor $Q_{ab}[\psi]$ and multiplier covector
$J_a^X[\psi]=Q_{ab}[\psi]X^b$ defined from the metric-selected connection,

$$\nabla^aJ_a^X[\psi]=(\Box_g\psi)\,X^b\nabla_b\psi+\frac12 Q^{ab}[\psi](\mathcal L_Xg)_{ab}.$$

Consequently, when $\Box_g\psi=0$ and $X$ is Killing, the multiplier current
has zero divergence.

## Statement references

[[def-gr-fx-scalar-wave-stress]]

[[def-gr-killing-field]]

## Facts & Assumptions

**Given:** The smooth Lorentzian background, open set, scalar field, vector
field, and $\mathrm{AC}_\omega$ assumption in the Statement.

[F1] [[def-gr-fx-scalar-wave-stress]]: $Q_{ab}=\nabla_a\psi\nabla_b\psi-\tfrac12g_{ab}\nabla^c\psi\nabla_c\psi$, $J_a^X=Q_{ab}X^b$, and $\Box_g\psi=g^{ab}\nabla_a\nabla_b\psi$.

[F2] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: $\nabla g=0$, the metric-selected connection is torsion-free, and its tensor derivative obeys the product rule and commutes with metric contractions.

[F3] [[def-gr-killing-field]]: $X$ is Killing precisely when $\mathcal L_Xg=0$.

[F4] [[thm-gr-killing-and-on-shell-matter-identities]]: for the metric-selected torsion-free connection, $(\mathcal L_Xg)_{ab}=\nabla_aX_b+\nabla_bX_a$.

[A1] $\mathrm{AC}_\omega$ is the only choice principle assumed for the smooth tangent-bundle and connection conventions used by [F2] ([[def-countable-choice]]).

## Proof

1.1 Differentiate the definition of $Q$ using $\nabla g=0$ from [F2]:
$\nabla^aQ_{ab}=(\Box_g\psi)\nabla_b\psi+\nabla^a\psi\,\nabla_a\nabla_b\psi-\nabla^c\psi\,\nabla_b\nabla_c\psi$. Since $\psi$ is a scalar and the connection is torsion-free, $\nabla_a\nabla_b\psi=\nabla_b\nabla_a\psi$; after relabelling the contracted index, the last two terms cancel. Thus $\nabla^aQ_{ab}=(\Box_g\psi)\nabla_b\psi$. [given, A1, F1, F2, algebra]

2.1 Apply the product rule to $J_a^X=Q_{ab}X^b$ and substitute step 1.1:
$\nabla^aJ_a^X=(\Box_g\psi)X^b\nabla_b\psi+Q_{ab}\nabla^aX^b$. [step 1.1, F1, F2, algebra]

3.1 The tensor $Q_{ab}$ is symmetric by [F1]. Therefore
$Q_{ab}\nabla^aX^b=\tfrac12Q^{ab}(\nabla_aX_b+\nabla_bX_a)=\tfrac12Q^{ab}(\mathcal L_Xg)_{ab}$ by [F4], which proves the displayed identity. [step 2.1, F1, F4, algebra]

4.1 If $\Box_g\psi=0$ and $X$ is Killing, the first term in the identity vanishes by the equation and the second vanishes by [F3]. Hence $\nabla^aJ_a^X=0$. This is a conditional model identity, not a decay estimate. [given, F3, step 3.1, algebra] ∎
