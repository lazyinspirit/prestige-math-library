---
id: thm-nrqmx-finite-band-adiabatic-velocity
kind: theorem
domain: mathematics
library: mathematics
title: Conditional band velocity and anomalous term
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 7
deps:
  - def-nrqmx-bloch-fiber-model
  - lem-nrqmx-bloch-fiber-model-properties
  - thm-nrqmx-two-band-degree-formula
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-nrqmx-bloch-fiber-model: mathematical-premise
  lem-nrqmx-bloch-fiber-model-properties: mathematical-premise
  thm-nrqmx-two-band-degree-formula: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Di Xiao, Ming-Che Chang, and Qian Niu, Berry Phase Effects on Electronic Properties
      url: https://arxiv.org/pdf/0907.2021
      locator: Sections III.A and V.A, Eqs. (3.6)–(3.7) and (5.7)–(5.8).
    - title: David Tong, Applications of Quantum Mechanics, University of Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf
      locator: Chapter 6, §§6.3.4–6.3.5.
---

## Statement

Assume Axiom of Choice and Countable Choice. Let $U\subset\mathbb R^3$ be an open coordinate chart of a three-dimensional Brillouin torus, let $h:U\to M_r(\mathbb C)$ be the restriction of a $C^2$ Hermitian finite-range Bloch fiber family, and let $\varepsilon:U\to\mathbb R$ be a simple eigenvalue with a positive local gap from the other eigenvalues. On a local chart choose a $C^2$ normalized eigenvector $u(k)$ for $\varepsilon(k)$. Under an adopted slow-force single-band effective description, for position $x\in\mathbb R^3$, crystal wave vector $k\in U$, constant signed charge $q$, constant electric field $\mathbf E_{\rm ext}$, and reduced Planck constant $\hbar>0$, take the effective Lagrangian

$$L=\hbar k\cdot\dot x+i\hbar\,u(k)^*\nabla_k u(k)\cdot\dot k-\varepsilon(k)+q\mathbf E_{\rm ext}\cdot x.$$

Here $k$ is measured in radians per metre, $x$ in metres, $\varepsilon$ in joules, $q$ in coulombs, $\mathbf E_{\rm ext}$ in volts per metre, and $\hbar$ in joule seconds. Let $\mathcal A(k):=i u(k)^*\nabla_k u(k)\in\mathbb R^3$ and $\boldsymbol\Omega(k):=\nabla_k\times\mathcal A(k)$. Every $C^2$ stationary curve of this adopted effective action satisfies

$$\hbar\dot k=q\mathbf E_{\rm ext},\qquad \dot x=\frac{1}{\hbar}\nabla_k\varepsilon-\dot k\times\boldsymbol\Omega.$$

The equations are invariant under a local phase change of $u$. This is the exact Euler–Lagrange consequence of the stated effective Lagrangian; it supplies no error estimate for replacing the underlying quantum dynamics by that Lagrangian.

For a two-band specialization, the normalization of $\boldsymbol\Omega$ agrees with the Chern convention of the two-band degree formula.

## Statement references

[[def-nrqmx-bloch-fiber-model]]

[[lem-nrqmx-bloch-fiber-model-properties]]

[[thm-nrqmx-two-band-degree-formula]]

## Facts & Assumptions

**Given:** A $C^2$ isolated simple band, its local normalized eigenvector, and the explicitly adopted effective Lagrangian above. The electric field is constant in space and time; $q$ is signed.

[A1] Axiom of Choice and Countable Choice are the principles in [[def-axiom-of-choice]] and [[def-countable-choice]].

[A2] The Lagrangian in the statement is an adopted single-band effective model, as in Xiao, Chang, and Niu, §§III.A and V.A. Its use as an approximation to a wave packet requires the separate slow-force and single-band assumptions; no approximation error is assumed or proved here.

[F1] [[def-nrqmx-bloch-fiber-model]] fixes the finite-range Bloch fiber setting, while [[lem-nrqmx-bloch-fiber-model-properties]] makes a uniformly isolated simple-band projector smooth.

[F2] [[thm-nrqmx-two-band-degree-formula]] fixes the sign of the same real Berry curvature in the two-band case: $C(P_\pm)=(2\pi)^{-1}\int\Omega_{12}=\mp\deg(n)$.

## Proof

**Given:** [A1], [A2], [F1], [F2], a local normalized eigenvector, and the variables and constants in the statement.

1.1 Differentiating $u^*u=1$ gives $(\partial_j u)^*u+u^*\partial_j u=0$, so $u^*\partial_j u$ is purely imaginary and $\mathcal A_j=i u^*\partial_j u$ is real. If only the smooth rank-one projector $P(k)$ is given, fix a unit vector $v\in\operatorname{im}P(k_0)$; by continuity $P(k)v\ne0$ near $k_0$, and $u(k)=P(k)v/\|P(k)v\|$ supplies the required local $C^2$ normalized section. Under $u'=e^{i\chi}u$, direct differentiation gives $\mathcal A'=\mathcal A-\nabla_k\chi$, so $\boldsymbol\Omega'=\boldsymbol\Omega$ and the Lagrangian changes by $-\hbar\,d\chi/dt$, a total derivative. Thus the equations are chart independent. [A1, A2, F1, given, algebra]

2.1 For each coordinate $x_j$, $\partial L/\partial\dot x_j=\hbar k_j$ and $\partial L/\partial x_j=q(E_{\rm ext})_j$. The Euler–Lagrange equation $\frac{d}{dt}(\partial L/\partial\dot x_j)-\partial L/\partial x_j=0$ therefore gives $\hbar\dot k_j=q(E_{\rm ext})_j$, the first vector equation. [A1, step 1.1, given, algebra]

2.2 For each $k_j$, $\partial L/\partial\dot k_j=\hbar\mathcal A_j$ and $\partial L/\partial k_j=\hbar\dot x_j+\hbar\sum_i(\partial_j\mathcal A_i)\dot k_i-\partial_j\varepsilon$. Applying Euler–Lagrange and the chain rule gives $\hbar\dot x_j=\partial_j\varepsilon+\hbar\sum_i(\partial_i\mathcal A_j-\partial_j\mathcal A_i)\dot k_i=\partial_j\varepsilon-\hbar(\dot k\times\boldsymbol\Omega)_j$, where the last equality is the component identity $\partial_i\mathcal A_j-\partial_j\mathcal A_i=-\epsilon_{j i\ell}(\nabla_k\times\mathcal A)_\ell$. Dividing by $\hbar>0$ gives the second vector equation. [A1, step 1.1, given, algebra]

2.3 On a two-band chart with $P_s=u u^*$, direct differentiation of $P_s$ gives $\Omega_{12}=i\,\operatorname{tr}(P_s[\partial_1P_s,\partial_2P_s])$. Thus $(2\pi)^{-1}\int\Omega_{12}=C(P_s)$ in the projector convention, and [F2] gives its signed degree value; this confirms that the anomalous term uses the same sign convention as the preceding band formula. The variational derivation itself does not depend on a two-band restriction. [F2, step 1.1, algebra]

3.1 The result is the Euler–Lagrange consequence of the adopted finite-dimensional effective Lagrangian. It does not establish that a physical wave packet follows these equations, nor quantify any error from neglected interband transitions or higher spatial and temporal derivatives of the field. [A2, step 2.1, step 2.2, step 2.3] ∎