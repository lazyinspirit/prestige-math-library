---
id: def-cm-splitting-hamiltonian-and-verlet-map
kind: definition
title: The splitting Hamiltonian $H=A+B$, the drift and kick maps, and the velocity-Verlet map
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
forward_refs: [ex-cm-verlet-map-of-the-harmonic-oscillator]
deps:
- def-cm-phase-domain-and-standard-symplectic-two-form
- def-ck-euclidean-maps-and-diffeomorphisms
- def-directional-and-partial-derivatives
- def-jacobian-matrix-and-gradient
- def-hessian-and-euclidean-critical-point
- def-matrix-product-and-identity-matrix
- def-transpose-of-a-matrix
dependency_roles:
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 2 ''Symplectic integrators'', Sections 1 and 5: the Stormer-Verlet scheme and its interpretation as the Strang splitting of the kinetic and potential flows, printed pages 1-3 and 12-13'
    url: https://www.unige.ch/~hairer/poly_geoint/week2.pdf
  - title: 'A. Quillen, PHY411 Lecture notes Part 7 ''Integrators'' (University of Rochester), Sections 2.3 and 2.5: drift and kick evolution operators and the Stormer-Verlet method, printed pages 18-20 and 23-24'
    url: https://astro.pas.rochester.edu/~aquillen/phy411/lecture7.pdf
verification:
  precheck: pass
---

## Definition

Let $d\ge1$ and let $U\subseteq\mathbb R^{2d}$ be a phase domain with coordinates $z=(q,p)$, $q=(q^1,\dots,q^d)$ and $p=(p_1,\dots,p_d)$, standard two-form $\omega_U=\sum_i dq^i\wedge dp_i$ and standard symplectic matrix $J$ ([[def-cm-phase-domain-and-standard-symplectic-two-form]]).

Fix a matrix $M\in M_d(\mathbb R)$ that is **symmetric and positive definite**, meaning $M^{\mathsf T}=M$ ([[def-transpose-of-a-matrix]]) and $v^{\mathsf T}Mv>0$ for every nonzero $v\in\mathbb R^d$; here $v^{\mathsf T}Mv$ is the matrix product of [[def-matrix-product-and-identity-matrix]]. Fix an open $\Pi\subseteq\mathbb R^d$ with $U\subseteq\Pi\times\mathbb R^d$ and a function $U_{\mathrm{pot}}:\Pi\to\mathbb R$ of class $C^3$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), whose gradient $\nabla U_{\mathrm{pot}}$ and Hessian matrix $H_{U_{\mathrm{pot}}}$ are those of [[def-jacobian-matrix-and-gradient]] and [[def-hessian-and-euclidean-critical-point]]; write $\nabla U_{\mathrm{pot}}(q)$ as a column vector and abbreviate $U_{\mathrm{pot}}(q)$ by $V(q)$ on $U$.

On $U$ define the **kinetic part** and **potential part**

$$A(q,p):=\tfrac12\,p^{\mathsf T}M^{-1}p,\qquad B(q,p):=V(q),\qquad H:=A+B,$$

and the **drift** and **kick** maps $D_h,K_h:U\to\mathbb R^{2d}$,

$$D_h(q,p):=(q+h\,M^{-1}p,\;p),\qquad K_h(q,p):=(q,\;p-h\,\nabla V(q)).$$

Both are defined wherever their displayed values lie in $U$; in particular $D_h$ is defined on $U$ whenever $(q+hM^{-1}p,p)\in U$, and $K_h$ on $U$ whenever $(q,p-h\nabla V(q))\in U$. The **velocity-Verlet map** of the splitting $H=A+B$ at step $h\in\mathbb R$ is the composite

$$V_h:=K_{h/2}\circ D_h\circ K_{h/2},$$

defined on the set of $(q,p)\in U$ for which the composition exists and its value lies in $U$.

## Remarks

- The definition is purely mathematical and choice-free; the names *drift*, *kick* and *velocity-Verlet* are conventional. Nothing here asserts that $M$, $V$ or $H$ describe a physical system, and no unit convention is fixed: $q,p,h$ are dimensionless coordinates and a step parameter in this definition. The Hamiltonian field of $A$ is $X_A(q,p)=(M^{-1}p,0)$ and that of $B$ is $X_B(q,p)=(0,-\nabla V(q))$ by [[def-cm-phase-domain-and-standard-symplectic-two-form]]; the proposition [[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]] proves that the time-$t$ flows of these fields are exactly $D_t$ and $K_t$, so that $V_h$ is the symmetric Strang-type splitting of the two flows. The exact flow of $H$ is denoted $\Phi_t$ in the items of this page.
- For $H(q,p)=\tfrac12p^{\mathsf T}M^{-1}p+V(q)$ and the second-order differential equation $M\ddot q=-\nabla V(q)$, the map $V_h$ is the classical velocity-Verlet (leapfrog) update in one-step form: half a kick, a full drift, half a kick. When $M$ is a positive multiple of the identity and $V$ is quadratic these formulas reduce to the explicit two-by-two maps of [[ex-cm-verlet-map-of-the-harmonic-oscillator]] on the companion page.
