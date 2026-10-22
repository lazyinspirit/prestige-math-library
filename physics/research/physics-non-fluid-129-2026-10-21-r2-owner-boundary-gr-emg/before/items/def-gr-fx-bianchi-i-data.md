---
id: def-gr-fx-bianchi-i-data
kind: definition
title: "Diagonal Bianchi I model"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-gr-flrw-model-data
  - def-gr-periodic-torus-and-sobolev-spaces
  - def-gr-smooth-lorentzian-objects
  - def-gr-curvature-tensor-and-derived-tensors
  - def-countable-choice
dependency_roles:
  def-gr-flrw-model-data: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "Rishabh Jha, Introduction to Hamiltonian Formulation of General Relativity and Homogeneous Cosmologies, SciPost Physics Lecture Notes 73 (2023), arXiv:2204.03537v2, Section 4.3.1, equations (159)–(172), printed pp. 36–38 (PDF pp. 37–39)"
      url: "https://arxiv.org/pdf/2204.03537"
    - title: "Diego L. Cáceres, Leonardo Castañeda, and Juan M. Tejeiro, Shear Dynamics in Bianchi I Cosmology, arXiv:1003.3491v1 (2010), Section 2, equations (2.1)–(2.2), printed p. 2 (PDF p. 3)"
      url: "https://arxiv.org/pdf/1003.3491"
verification:
  precheck: pending
---

## Definition

Let $c>0$ be a fixed conversion constant in metres per second. Let $I\subseteq\mathbb R$ be a nonempty open interval of physical time in seconds, and let $\mathbb T^3_{2\pi}=\mathbb R^3/(2\pi\mathbb Z)^3$ have dimensionless angular coordinates $x^1,x^2,x^3$. Its quotient charts are local lifts to $\mathbb R^3$; chart changes are translations by elements of $(2\pi\mathbb Z)^3$. Give $M=I\times\mathbb T^3_{2\pi}$ the product smooth structure, so $M$ is a smooth four-manifold without boundary. Choose positive $C^2$ functions $a_i:I\to(0,\infty)$, $i=1,2,3$, with values in metres. The metric

$$g=-c^2\,dt^2+\sum_{i=1}^3a_i(t)^2\,(dx^i)^2$$

has signature $(-,+,+,+)$ and is $C^2$ on the product manifold. Choose the smooth vector field $N=\partial_t$ as its time orientation: the relevant pointwise condition from the Lorentzian definition is $g(N,N)=-c^2<0$, which is meaningful at this $C^2$ regularity. This diagonal, spatially homogeneous metric datum is called a diagonal Bianchi I datum here; homogeneity means its coefficients are independent of the torus coordinates, and no isotropy is required. Define the directional expansion rates, their mean, the spatial volume scale and the squared directional shear by

$$H_i:=\frac{\dot a_i}{a_i},\qquad H:=\frac13\sum_{i=1}^3H_i,\qquad V:=a_1a_2a_3,\qquad \sigma^2:=\frac12\sum_{i=1}^3(H_i-H)^2.$$

Here $\dot a_i=d a_i/dt$; $H_i$ and $H$ have units $\mathrm{s}^{-1}$, $V$ has units $\mathrm{m}^3$, and $\sigma^2$ has units $\mathrm{s}^{-2}$. The symbol $\sigma^2$ denotes a nonnegative scalar defined by this formula, not a tensor norm on a spacetime frame. This is a geometric ansatz and makes no field-equation or observational claim. The product and quotient constructions carry the inherited axiom of countable choice $\mathrm{AC}_\omega$ and use no stronger choice principle.

For comparison with smooth Lorentzian geometry, use the curvature convention $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ and the component order $R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$. The local connection and Ricci components for this $C^2$ metric are defined separately.

## Definition references

[[def-gr-flrw-model-data]]

[[def-gr-periodic-torus-and-sobolev-spaces]]

[[def-gr-smooth-lorentzian-objects]]

[[def-gr-curvature-tensor-and-derived-tensors]]

[[def-countable-choice]]
