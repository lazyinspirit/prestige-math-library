---
id: ex-gr-fx07-1
kind: example
title: "Kerr geometry and hidden symmetry — Schwarzschild limit"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
physical_scope: "Pure mathematical limit and separation example; no measurement or claim about gravitational collapse is made."
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-kerr-exterior
  - lem-gr-fx-kerr-exterior-properties
  - prop-gr-fx-kerr-horizon-generator
  - def-gr-fx-killing-tensor
  - prop-gr-fx-killing-tensor-conservation
  - lem-gr-fx-kerr-vacuum-verification
  - thm-gr-fx-kerr-hamilton-jacobi-separation
  - def-gr-schwarzschild-exterior-model
  - thm-gr-killing-and-on-shell-matter-identities
  - def-countable-choice
dependency_roles:
  def-gr-fx-kerr-exterior: mathematical-premise
  lem-gr-fx-kerr-exterior-properties: mathematical-premise
  prop-gr-fx-kerr-horizon-generator: mathematical-premise
  def-gr-fx-killing-tensor: mathematical-premise
  prop-gr-fx-killing-tensor-conservation: mathematical-premise
  lem-gr-fx-kerr-vacuum-verification: mathematical-premise
  thm-gr-fx-kerr-hamilton-jacobi-separation: mathematical-premise
  def-gr-schwarzschild-exterior-model: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "M. Visser, The Kerr spacetime: A brief introduction, introductory book chapter, arXiv:0706.0622v3 (2008), §5, PDF pp. 14-15"
      url: "https://arxiv.org/pdf/0706.0622"
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §§7.3 and 7.5, PDF pp. 95-100"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
verification:
  precheck: pending
---

## Example

At $a=0$, the Kerr exterior is exactly the Schwarzschild exterior with
Schwarzschild radius $2M$, and $\Omega_H=0$. Its Ricci tensor vanishes. The
Hamilton-Jacobi separation constant reduces to
$Q=p_\theta^2+L_z^2\cot^2\theta=L_{\mathrm{sph}}^2-L_z^2$, where
$p_\theta:=S_\theta'$, $L_z:=\partial_\phi S$, and
$L_{\mathrm{sph}}^2:=p_\theta^2+L_z^2/\sin^2\theta$. The axial Killing field
$\Phi$ also gives the reducible Killing tensor
$K^\Phi=\Phi^\flat\otimes\Phi^\flat$, whose quadratic integral is constant
along affine geodesics.

## Facts & Assumptions

**Given:** $M>0$, $a=0$, geometric units $G_N=c=1$, and the Kerr and
Schwarzschild metric data.

[F1] [[def-gr-fx-kerr-exterior]]: $\Sigma=r^2+a^2\cos^2\theta$, $\Delta=r^2-2Mr+a^2$, with the stated Boyer-Lindquist metric components.

[F2] [[def-gr-schwarzschild-exterior-model]]: in geometric units its exterior has $s=2m_*$ and line element $-(1-s/r)dt^2+(1-s/r)^{-1}dr^2+r^2\gamma_{S^2}$ on $r>s$.

[F3] [[prop-gr-fx-kerr-horizon-generator]]: $T=\partial_t$ and $\Phi$ are Killing, and $\Omega_H=a/(r_+^2+a^2)$.

[F4] [[def-gr-fx-killing-tensor]]: a symmetric tensor is Killing when $\nabla_{(a}K_{bc)}=0$; reducible tensors include symmetric products of lowered Killing fields.

[F5] [[prop-gr-fx-killing-tensor-conservation]]: a rank-two Killing tensor gives a constant quadratic integral along every affine geodesic.

[F6] [[lem-gr-fx-kerr-vacuum-verification]]: the Kerr exterior metric has $\operatorname{Ric}=0$.

[F7] [[thm-gr-fx-kerr-hamilton-jacobi-separation]]: the local separated equations for $S_r'$ and $S_\theta'$ hold with the stated constants.

[F8] [[thm-gr-killing-and-on-shell-matter-identities]]: a Killing field satisfies $\nabla_a\Phi_b+\nabla_b\Phi_a=0$.

[A1] The smooth Lorentzian and tangent-bundle conventions use only countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

## Verification

1.1 Setting $a=0$ gives $r_+=2M$, $\Sigma=r^2$, $\Delta=r(r-2M)$, and $g_{t\phi}=0$. The remaining components are $g_{tt}=-(1-2M/r)$, $g_{rr}=(1-2M/r)^{-1}$, $g_{\theta\theta}=r^2$, and $g_{\phi\phi}=r^2\sin^2\theta$. These are exactly [F2] with $s=2m_*=2M$ and the same domain $r>2M$. [given, A1, F1, F2, algebra]

1.2 Since $\Phi$ is Killing by [F3] and [F8], set $K^\Phi_{ab}:=\Phi_a\Phi_b$. The product rule gives $\nabla_{(a}K^\Phi_{bc)}=\frac13[\Phi_b(\nabla_a\Phi_c+\nabla_c\Phi_a)+\Phi_c(\nabla_a\Phi_b+\nabla_b\Phi_a)+\Phi_a(\nabla_b\Phi_c+\nabla_c\Phi_b)]=0$. Thus $K^\Phi$ is a reducible Killing tensor by [F4]. [F3, F4, F8, algebra]

2.1 By [F3], $\Omega_H=a/(r_+^2+a^2)$, so $\Omega_H=0$ at $a=0$. The vacuum statement follows by applying [F6] to this same metric and restricting its domain to $r>2M$. [given, F3, F6, step 1.1, algebra]

2.2 Along an affine geodesic, $K^\Phi_{ab}v^av^b=(\Phi_av^a)^2$ is constant by [F5]. This is the axial quadratic integral; it is reducible and is not identified with an irreducible Carter tensor. [F4, F5, step 1.2]

3.1 Setting $a=0$ in [F7] gives $Q=p_\theta^2+L_z^2\cos^2\theta/\sin^2\theta=p_\theta^2+L_z^2\cot^2\theta$. Since $1/\sin^2\theta-\cot^2\theta=1$, this equals $L_{\mathrm{sph}}^2-L_z^2$ under the definitions in the Example. [F7, algebra] ∎


## Remarks

This limit identifies the separated angular constant with the familiar
spherical expression. It does not infer a formula or irreducibility result
for the Kerr Carter tensor away from $a=0$.
