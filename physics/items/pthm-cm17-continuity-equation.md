---
id: pthm-cm17-continuity-equation
kind: physics-theorem
title: "The continuity equation of the continuum model: local form of mass balance, the material form, and the incompressibility reading"
status: published
origin: session
domain: physics
dependency_level: 12
deps: [post-cm17-mass-balance, post-cm17-continuum-kinematic-model, def-cm17-continuum-body-and-units, def-cm17-density-and-mass, pthm-cm17-transport-and-material-derivative, thm-cm-local-mass-balance, def-countable-choice, def-cm-continuum-motion, def-cm-euclidean-spatial-calculus, lem-cm-determinant-derivative-along-a-matrix-curve, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-interval]
dependency_roles:
  post-cm17-mass-balance: physical-assumption
  post-cm17-continuum-kinematic-model: physical-assumption
  def-cm17-continuum-body-and-units: formulation-prerequisite
  def-cm17-density-and-mass: formulation-prerequisite
  pthm-cm17-transport-and-material-derivative: physical-result
  thm-cm-local-mass-balance: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cm-continuum-motion: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  lem-cm-determinant-derivative-along-a-matrix-curve: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional on the adopted mass-balance postulate, the smooth kinematic model and the Axiom of Countable Choice used by the transport machinery: conservation of the model mass of every material subregion is equivalent to the partial differential equation partial_t rho + div(rho u) = 0 on the current regions; equivalently the material derivative satisfies D_t rho = -rho div u, the product rho times the Jacobian is constant along each label worldline, the relative volume rate is div u, and the incompressibility condition div u = 0 is equivalent to the density being constant along each worldline in this branch. The theorem is a conditional model deduction and asserts no empirical value."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 4.2 (conservation of mass, local forms and the volumetric interpretation)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "W. Barsukow, Introduction to Conservation Laws: Theory and Numerics (lecture notes, TUM, Winter term 2021/22), Section 1.1 (integral and differential forms of the continuity equation)"
      url: "https://user.math.uzh.ch/barsukow/exercises2122/conservationlaws.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 8.3 (continuity equation and incompressibility of a continuum)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $(B,O,I)$ be body data
([[def-cm17-continuum-body-and-units]]), let $\chi$ be a motion of the model
with spatial velocity $u$ ([[post-cm17-continuum-kinematic-model]],
[[def-cm-continuum-motion]]), let $J_0\subseteq I$ be an open interval with
$\overline{J_0}\subseteq I$, let $\Sigma$ be the swept region over
$\overline{J_0}$, and let $\rho:U\to(0,\infty)$ be a density field of class
$C^1$ on an open set $U$ containing $\Sigma$
([[def-cm17-density-and-mass]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).
Assume the mass-balance postulate (CM) of [[post-cm17-mass-balance]] for every
material subregion and every $t\in J_0$. Then:

**(i) Local form.** For every $(t,x)\in J_0\times\chi_t(B)$,

$$\partial_t\rho(t,x)+\operatorname{div}\bigl(\rho u\bigr)(t,x)=0 . \tag{C}$$

Conversely, if (C) holds on an open neighbourhood of $\Sigma$, then (CM)
holds for every material subregion and every $t\in J_0$.

**(ii) Material form.** On $J_0\times\chi_t(B)$ the material derivative of the
density satisfies

$$D_t\rho=-\rho\operatorname{div}u ,$$

and writing $J(t,X)=\det D_X\chi_t(X)$ along the motion, the product
$\rho\bigl(t,\chi(t,X)\bigr)J(t,X)$ is constant in $t$ for every label
$X\in B$.

**(iii) Volume rate.** For every $X\in B$ and $t\in J_0$ one has
$\partial_tJ(t,X)=J(t,X)\operatorname{div}u(t,\chi(t,X))$: the relative rate of
change of an infinitesimal material volume is $\operatorname{div}u$, and the
identity of (ii) is the statement that density times volume is conserved
along a label. In particular $\operatorname{div}u=0$ on the swept region if
and only if $\rho$ is constant along every label worldline ($D_t\rho=0$).

The statement is a conditional deduction from the adopted mass balance and
the kinematic model; it asserts no equation of motion, no constitutive
relation and no empirical value.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; body data and the motion $\chi$ with spatial velocity $u$; the interval $J_0$; the $C^1$ positive density field $\rho$; the mass-balance assumption (CM).

[F1] Mass balance ([[post-cm17-mass-balance]]): for every material subregion $B'\subseteq B$ and every $t\in J_0$, $\frac{d}{dt}\int_{\chi_t(B')}\rho(t,x)\,dx=0$.

[F2] Local mass balance ([[thm-cm-local-mass-balance]]): under the stated hypotheses, (CM) for every material subregion and every $t\in J_0$ implies $\partial_t\rho+\operatorname{div}(\rho u)=0$ on the current interior; conversely, that equation on a neighbourhood of the swept region implies (CM).

[F3] Transport and material derivative ([[pthm-cm17-transport-and-material-derivative]]): for every label $X\in B$, $\frac{d}{dt}f(t,\chi(t,X))=D_tf(t,\chi(t,X))=(\partial_tf+\nabla f\cdot u)(t,\chi(t,X))$ for $C^1$ spatial fields $f$, under the same axiom and kinematic hypotheses.

[F4] Determinant derivative ([[lem-cm-determinant-derivative-along-a-matrix-curve]], [[thm-chain-rule-for-total-derivatives]]): for the matrix curve $t\mapsto A(t):=D_X\chi_t(X)$ with invertible values one has $(\det A)'=\det A\,\operatorname{tr}(A^{-1}A')$, and $A'=Du(t,\chi(t,X))A$; hence $\partial_tJ=J\operatorname{tr}\bigl(Du(t,\chi(t,X))\bigr)=J\operatorname{div}u(t,\chi(t,X))$ by the definition of divergence in [[def-cm-euclidean-spatial-calculus]].

[F5] Algebra of derivatives ([[thm-algebra-of-derivatives]], [[def-cm-euclidean-spatial-calculus]]): $\operatorname{div}(\rho u)=\nabla\rho\cdot u+\rho\operatorname{div}u$ and $D_t\rho=\partial_t\rho+\nabla\rho\cdot u$.

## Proof

**Proof technique:** direct; localize the integral mass balance with the cited equivalence, rewrite the divergence with the product rule, and read the along-label rate through the transport item and the volume-rate lemma.

1.1 Part (i), forward: by [F1] the integral conservation (CM) holds for every material subregion and every $t\in J_0$. The hypotheses of [F2] are those of the statement (positive $C^1$ density, motion, compactly contained interval, equation domain), so [F2] gives $\partial_t\rho+\operatorname{div}(\rho u)=0$ at every point of $J_0\times\chi_t(B)$. [given, F1, F2]

1.2 Part (i), converse: if (C) holds on an open neighbourhood of $\Sigma$, then [F2] applied in its converse direction gives (CM) for every material subregion and every $t\in J_0$. [given, F2]

2.1 Part (ii), first identity: by [F5], $\operatorname{div}(\rho u)=\nabla\rho\cdot u+\rho\operatorname{div}u$, so (C) reads $\partial_t\rho+\nabla\rho\cdot u+\rho\operatorname{div}u=0$, that is $D_t\rho+\rho\operatorname{div}u=0$, which is $D_t\rho=-\rho\operatorname{div}u$. [step 1.1, F5, algebra]

3.1 Part (iii): fix $X\in B$. By [F4], $\partial_tJ(t,X)=J(t,X)\operatorname{div}u(t,\chi(t,X))$ on $J_0$, and by [F3] the along-label derivative of the spatial field $\rho$ is $\frac{d}{dt}\rho(t,\chi(t,X))=D_t\rho(t,\chi(t,X))$. Therefore $\frac{d}{dt}\bigl[\rho(t,\chi(t,X))J(t,X)\bigr]=\bigl(D_t\rho\bigr)J+\rho\,\partial_tJ=\bigl(-\rho\operatorname{div}u\bigr)J+\rho J\operatorname{div}u=0$ on $J_0$, so the product is constant in $t$. [given, step 2.1, F3, F4, algebra]

4.1 Part (iii), final clause: if $\operatorname{div}u=0$ on the swept region, then $D_t\rho=-\rho\operatorname{div}u=0$ there by step 2.1, and by [F3] $\frac{d}{dt}\rho(t,\chi(t,X))=0$ for every label, so $\rho$ is constant along every worldline. Conversely, if $\rho$ is constant along every worldline then $D_t\rho=0$ on the current regions by [F3], and step 2.1 together with $\rho>0$ gives $\operatorname{div}u=0$ there. This proves the equivalence and completes the item. [step 2.1, step 3.1, F3, algebra] ∎

## Remarks

- **Reading of the equation.** The partial differential equation (C) is a
  balance of the model density with the mass flux $\rho u$; the material form
  $D_t\rho=-\rho\operatorname{div}u$ says that density decreases along a label
  exactly when the material element dilates. The identity
  $\rho J=\text{constant}$ along a label is the precise sense in which mass is
  conserved in the model, and it is the form used by the wave and fluid items
  below.

- **Conditionality.** The equation is a theorem about the adopted model: it
  holds because the model is assumed to balance mass, and it fails if the
  mass-balance assumption is replaced by a balance with sources. No claim is
  made that any material's density satisfies it beyond the modelling regime of
  [[post-cm17-continuum-kinematic-model]].
