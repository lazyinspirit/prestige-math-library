---
id: def-se-linearized-pair
kind: definition
domain: mathematics
title: Linearized equation and its real-duality adjoint
status: draft
deps:
  - def-se-trajectory
  - def-se-control-cutoffs
  - def-se-internal-systems
  - def-se-dirichlet-scale
  - def-se-foundation-distributional-equation
  - lem-se-real-hilbert-dualization
  - math:def-complex-conjugate-real-imaginary-part-and-modulus
  - math:lem-complex-conjugation-and-modulus-laws
  - math:def-axiom-of-choice
  - math:thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
dependency_roles:
  def-se-trajectory: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  def-se-internal-systems: mathematical-premise
  def-se-dirichlet-scale: mathematical-premise
  def-se-foundation-distributional-equation: mathematical-premise
  lem-se-real-hilbert-dualization: mathematical-premise
  math:def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  math:lem-complex-conjugation-and-modulus-laws: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-chain-sum-product-and-composition-rules-for-banach-derivatives: mathematical-premise
  math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 9
---

## Definition

Assume the Axiom of Choice. Let $T>0$, let $\Omega=\mathbb R^n\setminus\Theta$ be the smooth connected exterior of the stated compact obstacle, let $\lambda\in\mathbb R\setminus\{0\}$, and let $w$ satisfy hypothesis (W): $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ and $i\partial_t w+\Delta w+\lambda|w|^2w=0$ in distributions. The condition $w(t)\in H_D^2=H^2\cap H_0^1$ supplies its homogeneous Dirichlet condition. Let $\varphi$ be the real control cutoff, zero near the obstacle and supported as a control multiplier in the exterior region. Define $V_1=2\lambda|w|^2$ and $V_2=\lambda w^2$.

For a control $h$ and initial state $z_0$, the **linearized controlled system** is

$$i\partial_t z+\Delta z+V_1z+V_2\overline z=\varphi h\quad\text{in }\Omega\times(0,T),\qquad z|_{\partial\Omega}=0,\qquad z(0)=z_0.$$

The **real-duality adjoint system** is

$$i\partial_t v+\Delta v+V_1v-V_2\overline v=0\quad\text{in }\Omega\times(0,T),\qquad v|_{\partial\Omega}=0.$$

The real pairing on complex $L^2(\Omega)$ is $(z,v)_{\mathbb R}=\operatorname{Re}\int_\Omega z\overline v\,dx$. Here $\overline z$ denotes complex conjugation and $\operatorname{Re}$ the real part. An operator is real-linear if it preserves addition and multiplication by real scalars. The conjugate terms are real-linear; when $V_2$ is not identically zero they are not complex-linear. The term adjoint refers to the cancellation identity for this real pairing explained below, with the sign of the $V_2$ term as displayed.

These formulas specify systems rather than asserting existence or uniqueness. Interior equations may be interpreted distributionally when every displayed product is defined as a distribution; initial and boundary conditions require a solution class in which the corresponding values or traces have a meaning. The $L^2$ integral above is not asserted to define a pairing between arbitrary negative-order distributions.

## Definition references

[[def-se-trajectory]]

[[def-se-control-cutoffs]]

[[def-se-internal-systems]]

[[def-se-dirichlet-scale]]

[[def-se-foundation-distributional-equation]]

[[lem-se-real-hilbert-dualization]]

[[math:def-complex-conjugate-real-imaginary-part-and-modulus]]

[[math:lem-complex-conjugation-and-modulus-laws]]

[[math:def-axiom-of-choice]]

## Justification

The exterior, real coupling and trajectory are those of [[def-se-trajectory]]; the cutoff and control region are those of [[def-se-control-cutoffs]]. The cubic controlled equation being linearized is the $m=3$ case in [[def-se-internal-systems]]. Under the Choice assumption recorded in [[math:def-axiom-of-choice]], [[def-se-dirichlet-scale]] supplies the Dirichlet realization and its self-adjointness, the order-two domain, and the $L^2$ pairing convention. The distributional convention and its limitation on traces are those of [[def-se-foundation-distributional-equation]].

Using the conjugation and modulus conventions of [[math:def-complex-conjugate-real-imaginary-part-and-modulus]] and the conjugation laws of [[math:lem-complex-conjugation-and-modulus-laws]], direct expansion gives $|w+z|^2(w+z)=|w|^2w+2|w|^2z+w^2\overline z+2w|z|^2+\overline w z^2+|z|^2z$. Thus the displayed coefficients are exactly the part linear over the reals in $z$; the remaining terms have degree at least two. Conjugation is additive and commutes with real scalars, whereas $\overline{iz}=-i\overline z$, which establishes the stated linearity distinction.

For the adjoint terminology, suppose in addition that $z,v$ are continuously differentiable as $L^2$-valued functions, continuously take values in $D(\Delta_D)$, and satisfy the displayed equations in $L^2$, with $h(t)\in L^2$. The trajectory hypothesis makes $V_1,V_2$ essentially bounded at each time, and $V_1$ is real. By [[lem-se-real-hilbert-dualization]], the real adjoint of $z\mapsto i(V_1z+V_2\overline z)$ is $v\mapsto-iV_1v+iV_2\overline v$. Self-adjointness of $\Delta_D$ gives $(i\Delta_Dz,v)_{\mathbb R}+(z,i\Delta_Dv)_{\mathbb R}=0$. For the product rule, put $H=L^2(\Omega)_{\mathbb R}$, the real Hilbert space supplied by [[lem-se-real-hilbert-dualization]], and $B(u,q)=(u,q)_{\mathbb R}$. This is a real-bilinear map $H\times H\to\mathbb R$; by [[math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], $|B(u,q)|\le\|u\|_2\|q\|_2$, so it is bounded. On the open interval $U=(0,T)$, the assumed $L^2$ differentiability of the two curves is real Fréchet differentiability, with $Dz(t)s=s\partial_tz(t)$ and $Dv(t)s=s\partial_tv(t)$ for $s\in\mathbb R$. Applying the bounded-bilinear product rule in [[math:thm-chain-sum-product-and-composition-rules-for-banach-derivatives]] with $X=W=\mathbb R$ and $Y=Z=H$ gives $\frac{d}{dt}(z,v)_{\mathbb R}=(\partial_tz,v)_{\mathbb R}+(z,\partial_tv)_{\mathbb R}$ for $0<t<T$. Substituting the two equations and the preceding cancellation identities yields $\frac{d}{dt}(z,v)_{\mathbb R}=(-i\varphi h,v)_{\mathbb R}$ on this interval. This is a calculation for the stated regularity, not an asserted extension to every solution space.

## Source notes

The original article supplies equations (1.10) and (1.11) and their attribution as a linearized pair. The expansion and the stated real-pairing cancellation above justify the terminology using the named mathematical suppliers; the article is not used as proof of its own claim.
