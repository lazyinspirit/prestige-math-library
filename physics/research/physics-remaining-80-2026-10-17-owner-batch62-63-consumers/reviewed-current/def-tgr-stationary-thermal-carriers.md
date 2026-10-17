---
id: def-tgr-stationary-thermal-carriers
kind: definition
title: Stationary thermal geometric data
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, def-countable-choice]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §§III.3 and VI.2"
      url: "https://arxiv.org/pdf/2106.09235"
    - title: "David Tong, General Relativity, full Cambridge Part III lecture notes, §§2.2.3 and 4.3.1"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "José Santiago and Matt Visser, Tolman-like temperature gradients in stationary spacetimes, §§III–V"
      url: "https://arxiv.org/pdf/1807.02915"
---

## Definition

Let $(M,g,N_0)$ be a smooth time-oriented Lorentzian four-manifold of signature
$(-,+,+,+)$ in the sense of [[def-gr-smooth-lorentzian-objects]], and let
$\nabla$ be its unique torsion-free $g$-compatible connection supplied by
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. Fix a nonempty
connected open set $O\subseteq M$. A **selected stationary thermal carrier** on
$O$ consists of a smooth future timelike vector field $\xi$ and a smooth
positive scalar field $T:O\to(0,\infty)$, where $T$ is measured in kelvins,
such that $\xi$ is a Killing field of $g$ in the sense of
[[def-gr-killing-field]]. Equivalently, the criterion is
$\nabla_{(a}\xi_{b)}=0$ by
[[thm-gr-killing-and-on-shell-matter-identities]]. The round brackets mean
symmetrization with factor $1/2$. The choice of $\xi$ specifies the thermal congruence; no
coordinate chart or universal observer field is selected.

Set $N_\xi:=\sqrt{-g(\xi,\xi)}>0$ and $u:=\xi/N_\xi$. Then
$g(u,u)=-1$. In the length-coordinate convention $x^0=ct$, $u$ is
dimensionless and $cu$ is the physical four-velocity, with $c>0$ in
$\mathrm{m\,s^{-1}}$. For a fixed Boltzmann constant $k_B>0$ in
$\mathrm{J\,K^{-1}}$, define the inverse-temperature vector
$\beta:=u/(k_BT)$, with units $\mathrm{J^{-1}}$, and the Killing-normalized
temperature field $T_K:=N_\xi T$. Thus $\beta=\xi/(k_BT_K)$; this definition
does not assert that $T_K$ is constant.

For a smooth chemical-potential scalar $\mu:O\to\mathbb R$ in joules, put
$\zeta:=\mu/(k_BT)$, a dimensionless scalar. Define the rest-space metric,
derivative, acceleration, expansion and shear by
$$h_{ab}:=g_{ab}+u_au_b,\qquad D:=u^a\nabla_a,\qquad a_b:=u^a\nabla_au_b,\qquad \theta:=\nabla_au^a,\qquad \sigma_{ab}:=h_a{}^ch_b{}^d\nabla_{(c}u_{d)}-\frac13\theta h_{ab}.$$
Here $a$, $\theta$ and $\sigma$ have inverse-length units; the physical
proper acceleration is $c^2a$. The smooth tangent-bundle structure used by
the cited GR suppliers assumes the Axiom of Countable Choice
[[def-countable-choice]]; no stronger choice principle is part of this
definition.

## Remarks

The data are mathematical fields on a connected open Lorentzian domain. No
complete Killing flow, thermal state, KMS condition, material realization or
empirical thermometer law is asserted.

For the adopted length-coordinate convention, take the spacetime coordinates
(including $x^0=ct$) and the local flow parameter of $\xi$ in length units,
and take the metric components to be dimensionless. Then the coordinate
components of $\xi$ and $N_\xi=\sqrt{-g(\xi,\xi)}$ are dimensionless, so
$T_K=N_\xi T$ is measured in kelvins. A constant rescaling $\xi\mapsto b\xi$
uses a dimensionless $b>0$.
