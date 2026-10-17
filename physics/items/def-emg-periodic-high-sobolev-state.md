---
id: def-emg-periodic-high-sobolev-state
kind: definition
title: Periodic high-Sobolev state spaces
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-emg-electrovacuum-cauchy-system, def-function, def-gr-periodic-torus-and-sobolev-spaces, lem-gr-periodic-fourier-differentiation-and-norm-equivalence, thm-fourier-basis-and-parseval-on-the-n-torus, def-countable-choice, lem-gr-periodic-sobolev-algebra, lem-gr-smooth-composition-and-commutator-estimates]
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-function: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-gr-periodic-sobolev-algebra: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Lecture Notes in Physics 540 (2000), section 3.1"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
      locator: "Section 3.1, pages 28-31, defines the periodic Sobolev setting used for symmetric-hyperbolic evolution and its regularity thresholds. The exact local Sobolev interface used here is the current published GR14 definition, not the source's inaccurate composition estimate."
    - title: "H. S. Reall, Part III General Relativity, Cambridge lecture notes, October 12 2022 revision, sections 10.4-10.5"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Section 10.4 fixes the induced metric and second fundamental form data convention; section 10.5 states the initial-value setting."
verification:
  precheck: pending
---

## Definition

For the geometric data convention, orient $\mathbb T^3_{2\pi}$ by the ordered dimensionless coordinates $(\theta^1,\theta^2,\theta^3)$; the corresponding length-coordinate frame $(\partial_{X^1},\partial_{X^2},\partial_{X^3})$ has the same orientation.

Assume Countable Choice $\mathrm{AC}_\omega$ as required by [[def-gr-periodic-torus-and-sobolev-spaces]] and [[thm-fourier-basis-and-parseval-on-the-n-torus]]; no use of the full Axiom of Choice is made here. Let $\mathbb T^3_{2\pi}$, its normalized measure, the componentwise real Sobolev spaces $H^s(\mathbb T^3_{2\pi};\mathbb R^m)$, and their weak-derivative and Fourier-coefficient conventions be exactly those of [[def-gr-periodic-torus-and-sobolev-spaces]]. In particular, $H^s$ is defined for integer $s\ge0$, the weak-derivative norm is equivalent to the Fourier-weight norm by [[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]], and the trigonometric characters are a complete orthonormal system by [[thm-fourier-basis-and-parseval-on-the-n-torus]]. A field is a function with the domain and codomain declaration of [[def-function]]; Sobolev fields are its $L^2$-equivalence classes, not pointwise representatives.

For finite $m\ge1$, open $O\subseteq\mathbb R^m$, compact $K\subseteq O$, $R\ge0$, and integer $s\ge5$, define the bounded admissible initial-state class

$$\mathcal S_s(K,R):=\{u_0\in H^s(\mathbb T^3_{2\pi};\mathbb R^m):u_0\text{ has its continuous representative valued in }K,\ \|u_0\|_{H^s}\le R\}.$$

The representative is unique because two continuous functions equal almost everywhere on the torus agree everywhere. For a smooth periodic first-order reduction of the electrovacuum equations, its specified finite list of real state components is identified with one such $\mathbb R^m$-valued function; the state-component convention is part of that reduction. In the geometric data convention below, the component arrays are specified separately. This is a definition of admissible function-space classes only; it asserts no existence result for a coupled Einstein-Maxwell reduction.

For the geometric data convention, write the dimensionless torus coordinate as $\theta^i\in\mathbb R/(2\pi\mathbb Z)$ and introduce a fixed length scale $L_0>0$ in metres. The corresponding length coordinates are $X^i=L_0\theta^i$ on $\mathbb T^3_{2\pi L_0}:=\mathbb R^3/(2\pi L_0\mathbb Z)^3$; the Sobolev variable remains $\theta$, and $X$ is not a second name for a coordinate on $\mathbb T^3_{2\pi}$. The arrays $h_{ij}(\theta)$ and $K_{ij}(\theta)$ are the covariant metric and second-fundamental-form components in the length-coordinate frame $\partial_{X^i}$, with $h_{ij}=h_{ji}$ and $K_{ij}=K_{ji}$. Let $\mathsf e_A(h)$, $A=1,2,3$, be the positively oriented $h$-orthonormal frame obtained by Gram-Schmidt from the ordered global frame $(\partial_{X^1},\partial_{X^2},\partial_{X^3})$. For spatial vectors $e,b$, the electromagnetic component arrays in this convention are $e_A:=h(e,\mathsf e_A)$ and $b_A:=h(b,\mathsf e_A)$; these are the orthonormal observer components used in the Einstein-Maxwell first-order reduction. The frame coefficients are smooth functions of the positive matrix $(h_{ij})$. If $h\in H^{s+1}$ has range in a compact subset of the positive-definite matrices, the composition supplier gives these coefficients in $H^{s+1}$; since $s\ge5$, the Sobolev-algebra supplier gives their products with coordinate vector components in $H^s$. The inverse frame matrix has the same property, so the coordinate and orthonormal component arrays describe the same $H^s$ vector fields.

Thus the data component spaces mean $(h_{ij})\in H^{s+1}(\mathbb T^3_{2\pi};\mathbb R^9)$ with values in symmetric positive matrices, $(K_{ij})\in H^s(\mathbb T^3_{2\pi};\mathbb R^9)$ with values in symmetric matrices, and $(e_A),(b_A)\in H^s(\mathbb T^3_{2\pi};\mathbb R^3)$. A smooth periodic first-order state also includes the specified component functions of that reduction and the first spatial metric derivatives; in the above length-coordinate convention $v_{kij}:=\partial_{X^k}h_{ij}=L_0^{-1}\partial_{\theta^k}h_{ij}$ and $K_{ij}$ carry one inverse-length factor. For a fixed field scale $F_0>0$ in tesla, the dimensionless physical component arrays are $h_{ij}$, $L_0K_{ij}$, $L_0v_{kij}$, $e_A/F_0$, and $b_A/F_0$. Each fixed rescaling is invertible and preserves the finite-component Sobolev topology. These are component and unit conventions, not additional field equations.
