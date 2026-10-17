---
id: def-emg-periodic-high-sobolev-state
kind: definition
title: Periodic high-Sobolev state spaces
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-emg-electrovacuum-cauchy-system, def-function, def-gr-periodic-torus-and-sobolev-spaces, lem-gr-periodic-fourier-differentiation-and-norm-equivalence, thm-fourier-basis-and-parseval-on-the-n-torus, def-countable-choice]
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-function: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  def-countable-choice: mathematical-premise
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

Assume Countable Choice $\mathrm{AC}_\omega$ as required by [[def-gr-periodic-torus-and-sobolev-spaces]] and [[thm-fourier-basis-and-parseval-on-the-n-torus]]; no use of the full Axiom of Choice is made here. Let $\mathbb T^3_{2\pi}$, its normalized measure, the componentwise real Sobolev spaces $H^s(\mathbb T^3_{2\pi};\mathbb R^m)$, and their weak-derivative and Fourier-coefficient conventions be exactly those of [[def-gr-periodic-torus-and-sobolev-spaces]]. In particular, $H^s$ is defined for integer $s\ge0$, the weak-derivative norm is equivalent to the Fourier-weight norm by [[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]], and the trigonometric characters are a complete orthonormal system by [[thm-fourier-basis-and-parseval-on-the-n-torus]]. A field is a function with the domain and codomain declaration of [[def-function]]; Sobolev fields are its $L^2$-equivalence classes, not pointwise representatives.

For finite $m\ge1$, open $O\subseteq\mathbb R^m$, compact $K\subseteq O$, $R\ge0$, and integer $s\ge5$, define the bounded admissible initial-state class

$$\mathcal S_s(K,R):=\{u_0\in H^s(\mathbb T^3_{2\pi};\mathbb R^m):u_0\text{ has its continuous representative valued in }K,\ \|u_0\|_{H^s}\le R\}.$$

The representative is unique because two continuous functions equal almost everywhere on the torus agree everywhere. For a smooth periodic first-order reduction of the electrovacuum equations, its finite list of real component fields is identified with one such $\mathbb R^m$-valued function. The high-regularity initial metric and electromagnetic data are $h\in H^{s+1}$, $K,e,b\in H^s$, with $h$ uniformly positive definite; the product state and its first spatial metric derivatives lie in $H^s$. This is a definition of admissible function-space classes only; it asserts no existence result for a coupled Einstein-Maxwell reduction.

For physical units, one may introduce fixed scales $L_0>0$ in metres and $F_0>0$ in tesla, use dimensionless torus coordinates $y^i=x^i/L_0$, and replace each first metric derivative $v$ by $L_0v$ and each electromagnetic component $e,b$ by $e/F_0,b/F_0$. These constant invertible rescalings define the same finite-component Sobolev topology; they are bookkeeping conventions, not extra equations.
