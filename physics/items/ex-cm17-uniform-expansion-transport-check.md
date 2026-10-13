---
id: ex-cm17-uniform-expansion-transport-check
kind: example
title: "Worked check of the transport identity and the continuity equation on a
  uniform expansion"
status: published
origin: session
domain: physics
dependency_level: 13
deps:
  - pthm-cm17-transport-and-material-derivative
  - pthm-cm17-continuity-equation
  - post-cm17-continuum-kinematic-model
  - post-cm17-mass-balance
  - def-cm17-density-and-mass
  - def-cm-continuum-motion
  - def-cm-euclidean-spatial-calculus
  - def-integral-over-a-measurable-set
  - def-cm17-continuum-body-and-units
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-countable-choice
dependency_roles:
  pthm-cm17-transport-and-material-derivative: physical-result
  pthm-cm17-continuity-equation: physical-result
  post-cm17-continuum-kinematic-model: physical-assumption
  post-cm17-mass-balance: physical-assumption
  def-cm17-density-and-mass: formulation-prerequisite
  def-cm-continuum-motion: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-cm17-continuum-body-and-units: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked verification of the model's transport identity and
  continuity equation on the explicit uniform expansion of a cube of side L_0 (including the one-metre cube),
  with constant reference density rho_0 and time-dependent spatial density: the model velocity, divergence, density field and mass are
  computed exactly, the integral mass balance holds identically, the continuity
  equation holds identically, and both sides of the transport identity are
  evaluated for a nonconstant field. The example is an exact conditional check
  within the adopted model; it reports no measurement."
sources:
  references:
    - title: "W. Barsukow, Introduction to Conservation Laws: Theory and Numerics
        (lecture notes, TUM, Winter term 2021/22), Section 1.1 (the continuity
        equation) and Section 1.2.3 (the transport theorem)"
      url: "https://user.math.uzh.ch/barsukow/exercises2122/conservationlaws.pdf"
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the
        Mechanics of Solids (MIT, 1988, revised 2020), Sections 3.7 and 4.2
        (transport equations and conservation of mass with worked examples of
        the local form)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
verification:
  precheck: pass
---

## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the cited Lebesgue transport and continuity suppliers.

Let $L_0>0$ have dimension length and let $B=(0,L_0)^3\subseteq\mathbb R^3$ be the reference cube (the unit-cube case is $L_0=1\,\mathrm m$). Fix an expansion rate $\alpha>0$ with $[\alpha]=\tau^{-1}$ and put $I=(-1/\alpha,\infty)$ and define the uniform
expansion

$$\chi(t,X):=\bigl((1+\alpha t)X_1,(1+\alpha t)X_2,(1+\alpha t)X_3\bigr)\qquad\bigl((t,X)\in I\times\mathbb R^3\bigr).$$

Then $\chi$ is a motion of $B$ on $I$ in the sense of
[[def-cm-continuum-motion]] (with $O=\mathbb R^3$): it is $C^\infty$, each
$\chi_t$ is a diffeomorphism with $D_X\chi_t=(1+\alpha t)I_3$ and
$J(t,X)=(1+\alpha t)^3>0$ on $I\times B$. Adopt the model of
[[post-cm17-continuum-kinematic-model]] with these data and the
constant-reference-density field

$$\rho(t,x):=\frac{\rho_0}{(1+\alpha t)^3}\qquad(\rho_0>0)$$

on all of $I\times\mathbb R^3$. This is a positive $C^\infty$ scalar
field with $[\rho_0]=[\rho]=\mu\ell^{-3}$, so it is defined on an open
neighborhood of every swept closure. Its values outside the current body
are an explicit mathematical extension. Then:

1. the spatial velocity is $u(t,x)=\alpha x/(1+\alpha t)$ and
   $\operatorname{div}u(t,x)=3\alpha/(1+\alpha t)$
   ([[def-cm-euclidean-spatial-calculus]]);
2. the model mass of $B$ at time $t$ is
   $\int_{\chi_t(B)}\rho\,dx=\rho_0L_0^3$ for every $t\in I$: the mass-balance
   assumption of [[post-cm17-mass-balance]] holds for every material subregion, since more generally $m(t,B')=\rho_0\operatorname{vol}(B')$, and the continuity
   equation $\partial_t\rho+\operatorname{div}(\rho u)=0$ of
   [[pthm-cm17-continuity-equation]] holds identically on $I\times\mathbb R^3$;
3. for the field $f(t,x):=x_1^2$ the transport identity of
   [[pthm-cm17-transport-and-material-derivative]] is verified exactly:
   with $F(t)=\int_{\chi_t(B)}f(t,x)\,dx$ one has $F(t)=L_0^5(1+\alpha t)^5/3$ and
   $F'(t)=5\alpha L_0^5(1+\alpha t)^4/3=\int_{\chi_t(B)}(\partial_tf+\operatorname{div}(fu))\,dx$
   for every $t\in I$;
4. along each label the density satisfies
   $\rho(t,\chi(t,X))(1+\alpha t)^3=\rho_0$, the constant-product form of density
   times volume of part (ii) of the continuity theorem, and the material
   derivative is
   $D_t\rho(t,\chi(t,X))=-3\alpha\rho_0/(1+\alpha t)^4=-\rho\operatorname{div}u$, as the
   material form of that theorem requires.

## Facts & Assumptions

**Given:** Countable choice. the side length $L_0>0$, expansion rate $\alpha>0$ and the domain $B=(0,L_0)^3$, the interval $I=(-1/\alpha,\infty)$, the motion $\chi$, the constant $\rho_0>0$ and the field $\rho$.

[F1] Motion and velocity ([[def-cm-continuum-motion]], [[post-cm17-continuum-kinematic-model]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): $\chi$ satisfies the defining conditions of a motion with $D_X\chi_t=(1+\alpha t)I_3$, $J=(1+\alpha t)^3>0$ on $I\times B$; the spatial velocity is $u(t,x)=\partial_t\chi(t,\chi_t^{-1}(x))=\alpha x/(1+\alpha t)$, of class $C^\infty$ on $I\times\mathbb R^3$.

[F2] Spatial calculus ([[def-cm-euclidean-spatial-calculus]]): for $u(t,x)=\alpha x/(1+\alpha t)$ one has $\partial_ju_j=\alpha/(1+\alpha t)$ and $\operatorname{div}u=3\alpha/(1+\alpha t)$; the divergence of the field $fu$ with $f=x_1^2$ is $\partial_1(x_1^3\alpha/(1+\alpha t))+\partial_2(\alpha x_1^2x_2/(1+\alpha t))+\partial_3(x_1^2x_3\alpha/(1+\alpha t))=5\alpha x_1^2/(1+\alpha t)$.

[F3] Transport and continuity ([[pthm-cm17-transport-and-material-derivative]], [[pthm-cm17-continuity-equation]], [[def-integral-over-a-measurable-set]]): under the stated kinematic and mass-balance hypotheses, $F$ is differentiable with $F'(t)=\int_{\chi_t(B)}(\partial_tf+\operatorname{div}(fu))\,dx$, the continuity equation holds, and $\frac{d}{dt}\rho(t,\chi(t,X))=D_t\rho(t,\chi(t,X))=-\rho\operatorname{div}u$ along labels.

## Verification

**Proof technique:** direct; compute the Jacobian, velocity, divergence, density field and both sides of the identities from the definitions and evaluate the integrals over the cube explicitly.

1.1 Motion and velocity: $D_X\chi_t=(1+\alpha t)I_3$ gives $J=(1+\alpha t)^3>0$ on $I\times B$, so $\chi$ is a motion of $B$ on $I$; inverting, $\chi_t^{-1}(x)=x/(1+\alpha t)$ and $u(t,x)=\partial_t\chi(t,\chi_t^{-1}(x))=\alpha x/(1+\alpha t)$. [given, F1]

2.1 Divergences: since $u_j(t,x)=\alpha x_j/(1+\alpha t)$, $\partial_ju_j=\alpha/(1+\alpha t)$ and $\operatorname{div}u=3\alpha/(1+\alpha t)$; with $f=x_1^2$ the computation of [F2] gives $\operatorname{div}(fu)=5\alpha x_1^2/(1+\alpha t)$ and $\partial_tf=0$. [step 1.1, F2, algebra]

2.2 Transport identity, left side: $F(t)=\int_{\chi_t(B)}x_1^2\,dx=(1+\alpha t)^5\int_BX_1^2\,dX=\frac{L_0^5(1+\alpha t)^5}{3}$ by the same change of variables, since $\int_0^{L_0}X_1^2\,dX_1=L_0^3/3$ and the other two coordinate integrals each contribute $L_0$; hence $F'(t)=\frac{5\alpha L_0^5(1+\alpha t)^4}{3}$. [step 1.1, F3, algebra]

3.1 Mass and continuity: by the change of variables $x=(1+\alpha t)X$ with $J=(1+\alpha t)^3$, one has $\int_{\chi_t(B)}\rho\,dx=\int_B\frac{\rho_0}{(1+\alpha t)^3}(1+\alpha t)^3\,dX=\rho_0L_0^3$, constant in $t$. The same change of variables on any admissible $B\prime$ gives $m(t,B\prime)=\rho_0\operatorname{vol}(B\prime)$, establishing the adopted mass balance for every material subregion. For the continuity equation, $\partial_t\rho=-3\alpha\rho_0/(1+\alpha t)^4$ and, by step 2.1 and the product rule, $\operatorname{div}(\rho u)=\rho\operatorname{div}u=\frac{\rho_0}{(1+\alpha t)^3}\cdot\frac{3\alpha}{1+\alpha t}=\frac{3\alpha\rho_0}{(1+\alpha t)^4}$, so the sum is zero identically on $I\times\mathbb R^3$. [step 1.1, step 2.1, F3, algebra]

3.2 Transport identity, right side: the integrand $\partial_tf+\operatorname{div}(fu)=5\alpha x_1^2/(1+\alpha t)$ by step 2.1, so $\int_{\chi_t(B)}(\partial_tf+\operatorname{div}(fu))\,dx=\frac{5\alpha}{1+\alpha t}\int_{\chi_t(B)}x_1^2\,dx=\frac{5\alpha}{1+\alpha t}\cdot\frac{L_0^5(1+\alpha t)^5}{3}=\frac{5\alpha L_0^5(1+\alpha t)^4}{3}$, which equals the derivative of step 2.2 for every $t\in I$. [step 2.1, step 2.2, F3, algebra]

4.1 Material form: by step 1.1, $\rho(t,\chi(t,X))=\rho_0/(1+\alpha t)^3$ so $\rho(t,\chi(t,X))J(t,X)=\rho_0$ is constant along each label, matching the constant-product clause of [[pthm-cm17-continuity-equation]]; and $\frac{d}{dt}\rho(t,\chi(t,X))=-3\alpha\rho_0/(1+\alpha t)^4=-\rho(t,\chi(t,X))\operatorname{div}u(t,\chi(t,X))$ by step 2.1, matching the material form $D_t\rho=-\rho\operatorname{div}u$. [step 1.1, step 3.1, F3, algebra] ∎

## Remarks

- The example is a closed-form check of the model's kinematic and mass-balance
  machinery on expanding flow data; the divergence $3\alpha/(1+\alpha t)$ is exactly the
  relative volume rate $\partial_tJ/J$ of part (iii) of
  [[pthm-cm17-continuity-equation]], which the computation exhibits
  explicitly.

- Nothing here is a measurement or a material law: the density field was chosen
  to make the mass balance hold, and the example verifies the model's
  identities, not the adequacy of the model for any material.
