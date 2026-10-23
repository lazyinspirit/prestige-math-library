---
id: pthm-fd-material-mass-continuity
kind: physics-theorem
title: Material mass balance implies local continuity
status: draft
origin: pipeline
proof_strategy: direct
domain: physics
library: physics
dependency_level: 3
deps:
  - post-fd-continuum-balances
  - def-fd-quantity-and-frame-conventions
  - lem-fd-transport-and-density
  - lem-fd-c1-domain-jordan-integrals
dependency_roles:
  post-fd-continuum-balances: physical-assumption
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  lem-fd-transport-and-density: mathematical-premise
  lem-fd-c1-domain-jordan-integrals: mathematical-premise
physical_scope: "Smooth positive-density material branch: the adopted integral mass balance yields local continuity; no weak or vacuum extension is asserted."
empirical_premises: []
aliases: [lem-fd-material-mass-continuity]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics"
      url: "https://academicweb.nd.edu/~powers/ame.60635/notes.pdf"
      locator: "§4.6.1, printed pp. 152–153."
    - title: "Chiang C. Mei, MIT OpenCourseWare Lecture Notes on Fluid Dynamics"
      url: "https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/4bbeb3c0de9503422b6049d2f9760af9_13transthm.pdf"
      locator: "§1.3, complete 4-page moving-volume transport derivation."
---

## Statement

Let $I\subseteq\mathbb R$ be an open interval containing $0$, let $B\subseteq\mathbb R^3$ be a bounded open reference region with $C^1$ boundary (locally a $C^1$ graph with the region on one side), and let $U$ be an open neighborhood of $\overline B$. Let $\chi\in C^2(I\times U;\mathbb R^3)$ have orientation-preserving diffeomorphic time slices (bijections onto open images with $C^2$ inverses and positive Jacobian determinant), and satisfy $\chi(0,a)=a$. Here $C^r$ means all coordinate partial derivatives through order $r$ are continuous; write $\Omega_t=\chi_t(B)$ and $u(t,\chi(t,a))=\partial_t\chi(t,a)$. Let $\rho_0\in C^1(\overline B)$ and $\rho\in C^1(\mathcal O)$ be positive mass densities, where $\mathcal O=\{(t,x):t\in I,\ x\in\chi_t(U)\}$. Suppose that for every nonempty bounded open $V$ with compact closure in $B$ and $C^1$ boundary locally a graph with the region on one side and every $t\in I$,
$$\int_{\chi_t(V)}\rho(t,x)\,dx=\int_V\rho_0(a)\,da.$$
Then the pointwise continuity equation
$$\partial_t\rho+\operatorname{div}_x(\rho u)=0$$
holds throughout the balanced physical region $\mathcal O_B:=\{(t,x):t\in I,\ x\in\chi_t(B)\}$. The larger set $\mathcal O$ is only the ambient regularity domain; no balance outside $\chi_t(B)$ is assumed or concluded. This is a conditional deduction in the smooth material model and asserts no extension to weak fields or vacuum.

## Statement references

[[post-fd-continuum-balances]]

[[lem-fd-transport-and-density]]

[[lem-fd-c1-domain-jordan-integrals]]

[Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §4.6.1](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf).

[Mei, MIT OpenCourseWare, *Kinematic Transport Theorem*, §1.3](https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/4bbeb3c0de9503422b6049d2f9760af9_13transthm.pdf).

## Facts & Assumptions

**Given:** The stated $C^2$ motion, positive $C^1$ densities, and mass equality for every bounded $C^1$ material subregion.

[A1] [[post-fd-continuum-balances]]: for every admissible material region, its current mass integral equals the fixed reference integral of $\rho_0$.

[F1] [[def-fd-quantity-and-frame-conventions]]: the material motion is an orientation-preserving $C^2$ family of diffeomorphisms and $u$ is its Eulerian velocity.

[F2] [[lem-fd-transport-and-density]]: for a compact Jordan reference set $K$ and a $C^1$ scalar field, the moving integral is differentiable and its derivative is the integral of $\partial_t\rho+\operatorname{div}_x(\rho u)$.

[F3] [[lem-fd-c1-domain-jordan-integrals]]: a bounded open $C^1$ region and its compact closure have the same integral for continuous fields, and its image under a $C^1$ diffeomorphism is again a bounded $C^1$ region.

## Proof

1.1 Fix a closed ball $K\subset B$ with nonempty interior, and put $V=\operatorname{int}K$. The region $V$ is an admissible material subregion. By [F3], the boundary has content zero and its image integral agrees with the integral over $\chi_t(K)$. Thus [A1] makes $M_K(t):=\int_{\chi_t(K)}\rho(t,x)\,dx$ constant on $I$. [given, A1, F1, F3]

1.2 The set $K$ is compact Jordan and $\rho$ is $C^1$, so [F2] gives
$$0=M_K'(t)=\int_{\chi_t(K)}R(t,x)\,dx,\qquad R:=\partial_t\rho+\operatorname{div}_x(\rho u).$$
The residual $R$ is continuous. [given, F2, step 1.1]

1.3 Fix $(t,x_0)\in\mathcal O_B$ and write $x_0=\chi(t,a_0)$ with $a_0\in B$. If $R(t,x_0)>0$, continuity gives a neighborhood on which $R>R(t,x_0)/2$. Choose a sufficiently small closed ball $K$ about $a_0$ contained in $B$ whose image lies in that neighborhood. The image has positive volume because $\chi_t$ is a diffeomorphism and $K$ contains a nonempty open ball, so its integral of $R$ is positive, contradicting step 1.2. The same argument applied to $-R$ rules out $R(t,x_0)<0$. Hence $R=0$ everywhere in $\mathcal O_B$. [given, F1, step 1.2, algebra] ∎
