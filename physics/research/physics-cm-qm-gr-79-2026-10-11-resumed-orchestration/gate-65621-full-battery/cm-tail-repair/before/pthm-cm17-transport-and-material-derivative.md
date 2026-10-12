---
id: pthm-cm17-transport-and-material-derivative
kind: physics-theorem
title: "The transport identity and the material derivative along label worldlines for the adopted continuum model"
status: draft
origin: session
domain: physics
dependency_level: 10
deps: [post-cm17-continuum-kinematic-model, def-cm17-continuum-body-and-units, def-cm-continuum-motion, def-cm-euclidean-spatial-calculus, thm-cm-transport-theorem, def-countable-choice, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-interval]
dependency_roles:
  post-cm17-continuum-kinematic-model: physical-assumption
  def-cm17-continuum-body-and-units: formulation-prerequisite
  def-cm-continuum-motion: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  thm-cm-transport-theorem: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional on the adopted continuum kinematic model (smooth motion with positive Jacobian) and on the Axiom of Countable Choice used by the cited change-of-variables theorem: for a C^1 spatial field on a neighbourhood of the swept region of a body over a compactly contained time interval, the rate of change of the field's integral over the current image of the body equals the integral of the local time derivative plus the flux term div(fu); and along the worldline of a label the ordinary time derivative of the material field equals the material derivative D_tf = partial_t f + grad f . u. The theorem asserts no balance law and no empirical value."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Sections 3.7 (transport equations) and 1.4-1.6 (material and spatial descriptions, material derivative)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "W. Barsukow, Introduction to Conservation Laws: Theory and Numerics (lecture notes, TUM, Winter term 2021/22), Section 1.2.3, Theorem 1.1 (the transport theorem) and Section 1.1 (the advective derivative)"
      url: "https://user.math.uzh.ch/barsukow/exercises2122/conservationlaws.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), as used by the transport theorem cited below. Let
$(B,O,I)$ be body data of [[def-cm17-continuum-body-and-units]], let $\chi$ be
a motion of the model on $I$ with spatial velocity $u$ and material
acceleration $a=D_tu$ ([[post-cm17-continuum-kinematic-model]],
[[def-cm-continuum-motion]]). Let $J_0\subseteq I$ be an open interval with
$\overline{J_0}\subseteq I$, put $\Sigma:=\{(t,x):t\in\overline{J_0},\
x\in\chi_t(\overline B)\}$, and let $f:U\to\mathbb R$ be of class $C^1$ on an
open set $U\subseteq\mathbb R\times\mathbb R^3$ containing $\Sigma$
([[def-ck-euclidean-maps-and-diffeomorphisms]]). Then:

**(i) Transport identity.** The function $F(t):=\int_{\chi_t(B)}f(t,x)\,dx$ is
defined and differentiable on $J_0$, and for every $t\in J_0$

$$F'(t)=\int_{\chi_t(B)}\bigl(\partial_tf+\operatorname{div}(fu)\bigr)(t,x)\,dx .$$

The identity holds componentwise for a $C^1$ vector field $f$.

**(ii) Material derivative along worldlines.** If $f$ is the spatial
description of a material field $F_{\mathrm m}(t,X):=f(t,\chi(t,X))$, then for
every $X\in B$ the function $t\mapsto F_{\mathrm m}(t,X)$ is differentiable on
$J_0$ and

$$\frac{d}{dt}F_{\mathrm m}(t,X)=D_tf\bigl(t,\chi(t,X)\bigr)=\Bigl(\partial_tf+\nabla f\cdot u\Bigr)\bigl(t,\chi(t,X)\bigr),$$

with $D_t$ and the gradient of [[def-cm-euclidean-spatial-calculus]]. Writing
$\operatorname{div}(fu)=\nabla f\cdot u+f\operatorname{div}u$, the integrand
of (i) is $D_tf+f\operatorname{div}u$ at the corresponding current point.

The statement is conditional on the kinematic model and on the compact
containment $\overline{J_0}\subseteq I$; it asserts no conservation law, no
equation of motion and no empirical value.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; body data $(B,O,I)$; the motion $\chi$ with
spatial velocity $u$; the interval $J_0$; the $C^1$ field $f$ on a
neighbourhood of the swept region.

[F1] The kinematic model and the motion ([[post-cm17-continuum-kinematic-model]], [[def-cm-continuum-motion]]): $\chi$ is a motion of the material region $B$ on $I$ in the sense of that definition, so each $\chi_t$ is an injective $C^1$ map with invertible derivative and the Jacobian $J=\det D_X\chi_t$ is positive on $I\times B$; the spatial velocity $u$ satisfies $u(t,\chi(t,X))=\partial_t\chi(t,X)$ and $u$ is $C^1$ on its open domain.

[F2] Transport theorem ([[thm-cm-transport-theorem]]): under $\mathrm{AC}_\omega$, for the motion $\chi$, the compactly contained interval $J_0$ and a $C^1$ function on a neighbourhood of the swept region, $t\mapsto\int_{\chi_t(B)}f(t,x)\,dx$ is differentiable on $J_0$ with derivative $\int_{\chi_t(B)}(\partial_tf+\operatorname{div}(fu))\,dx$, and the same formula holds componentwise for vector fields.

[F3] Spatial calculus ([[def-cm-euclidean-spatial-calculus]]): $\operatorname{div}(fu)=\nabla f\cdot u+f\operatorname{div}u$ for the scalar $f$ and the field $u$, and the material derivative is defined by $D_tf=\partial_tf+\nabla f\cdot u$.

[F4] Chain rule and algebra of derivatives ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]]): composing the $C^2$ curve $t\mapsto\chi(t,X)$ with the $C^1$ field $f$ gives a differentiable function of $t$ with the stated derivative, and the product rule gives the displayed splitting of $\operatorname{div}(fu)$.

[F5] The Axiom of Countable Choice ([[def-countable-choice]]): the explicit choice assumption under which [F2] is stated.

## Proof

**Proof technique:** direct; instantiate the transport theorem at the model's motion and read the along-worldline derivative through the chain rule and the definition of the material derivative.

1.1 Part (i): by [F1] the map $\chi$ is a motion of the material region $B$ on $I$ in the sense of [[def-cm-continuum-motion]], and by hypothesis $f$ is $C^1$ on a neighbourhood of the swept region $\Sigma$ with $\overline{J_0}\subseteq I$. Under the declared axiom [F5], the transport theorem [F2] therefore applies and gives $F'(t)=\int_{\chi_t(B)}(\partial_tf+\operatorname{div}(fu))(t,x)\,dx$ for every $t\in J_0$, with the vector case following componentwise. [given, F1, F2, F5]

1.2 Part (ii), derivative along a label: fix $X\in B$. By [F1] the curve $t\mapsto\chi(t,X)$ is of class $C^2$ on $I$ and $f$ is $C^1$ on a neighbourhood of the swept region, so the composition $t\mapsto F_{\mathrm m}(t,X)=f(t,\chi(t,X))$ is differentiable on $J_0$ with, by the chain rule [F4], $\frac{d}{dt}F_{\mathrm m}(t,X)=\partial_tf(t,\chi(t,X))+\nabla f(t,\chi(t,X))\cdot\partial_t\chi(t,X)$. [given, F1, F4, construct]

2.1 Since $\partial_t\chi(t,X)=u(t,\chi(t,X))$ by [F1], the right-hand side of step 1.2 is $\partial_tf+\nabla f\cdot u$ evaluated at $(t,\chi(t,X))$, which is $D_tf(t,\chi(t,X))$ by the definition in [F3]. This is the identity of part (ii). [step 1.2, F1, F3, algebra]

3.1 Integrand splitting: by [F3], $\partial_tf+\operatorname{div}(fu)=\partial_tf+\nabla f\cdot u+f\operatorname{div}u=D_tf+f\operatorname{div}u$, so the transport integrand of part (i) is the material derivative plus the volumetric term; combining with steps 1.1, 1.2 and 2.1 gives both displays of the statement, and no conservation or dynamical conclusion is drawn. [step 1.1, step 2.1, F3, algebra] ∎

## Remarks

- **Hypotheses are used exactly.** Positive Jacobian and $C^2$ regularity of the
  motion are used to instantiate the transport theorem and the chain rule;
  the compact containment $\overline{J_0}\subseteq I$ supplies the bounded
  parameter derivative of the cited theorem. Fields that are merely
  integrable, motions that fail injectivity somewhere, and time intervals
  whose closure meets the boundary of $I$ are outside this statement; the
  counterexample item of the companion page exhibits a motion with a
  vanishing Jacobian at which the positivity hypothesis genuinely fails.

- **Reading of the two terms.** At a fixed spatial point $\partial_tf$ is the
  local rate of change of the field; $u\cdot\nabla f$ is the transport of the
  field by the material velocity. Both have dimension $[f]\tau^{-1}$
  ([[def-cm01-units]]), so the display is dimensionally consistent, and the
  singular term $f\operatorname{div}u$ records the change of volume of a
  material element along the motion.
