---
id: def-cm-constrained-configuration-and-mass-metric
kind: definition
title: "Constrained configurations, the mass matrix and the mass metric"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-embedded-submanifold-and-slice-chart, def-derivation-at-a-point-and-tangent-space, def-differential-of-a-smooth-map, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, def-bilinear-symmetric-skew-and-alternating-forms, def-smooth-manifold, def-c-r-and-smooth-maps-between-smooth-manifolds, def-ck-euclidean-maps-and-diffeomorphisms, def-ck-and-multi-index-notation-in-several-variables, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-coordinate-derivations-form-a-basis-of-the-tangent-space]
dependency_roles:
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-bilinear-symmetric-skew-and-alternating-forms: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 2.1 (constraints, generalized coordinates) and Section 3.1 (configuration space)"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Chapter 3"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
verification:
  precheck: pass
---

## Definition

Let $N\ge1$; the ambient dimension is $3N$. Identify $\mathbb R^{3N}$ with the $N$-fold product $(\mathbb R^3)^N$ and write a point as $x=(x_1,\dots,x_N)$ with $x_i\in\mathbb R^3$, explicitly $x_i(k):=x(3(i-1)+k)$ for $1\le i\le N$ and $0\le k<3$; the Euclidean inner product on $\mathbb R^{3N}$ is

$$\langle x,y\rangle_{3N}=\sum_{i=1}^{N}\langle x_i,y_i\rangle_2,$$

with $\langle\,\cdot\,,\,\cdot\,\rangle_2$ the inner product of [[def-euclidean-inner-product]].

Let $d\ge0$ and let $Q$ be a smooth $d$-dimensional manifold ([[def-smooth-manifold]]) and let

$$X:Q\longrightarrow\mathbb R^{3N}$$

be a smooth map. The manifold $Q$ is the **configuration space** and $X$ is the **configuration map**; the pair $(Q,X)$ is called a **particle configuration** when $Q$ is an embedded submanifold of $\mathbb R^{3N}$ and $X$ is the inclusion ([[def-embedded-submanifold-and-slice-chart]]), and a **parametrized configuration** otherwise. For $q\in Q$ the intrinsic differential is $dX_q:T_qQ\to T_{X(q)}\mathbb R^{3N}$ as in [[def-differential-of-a-smooth-map]] ([[def-derivation-at-a-point-and-tangent-space]] for the tangent space). For $a\in\mathbb R^{3N}$ and the coordinate function $\pi_k(x):=x(k)$, define $\iota_a:T_a\mathbb R^{3N}\to\mathbb R^{3N}$ by $\iota_a(w)(k):=w([\pi_k])$ for $0\le k<3N$. This is the standard linear isomorphism: in the identity chart the coordinate derivations form a basis by [[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]], and evaluation on coordinate germs sends that basis to the standard unit vectors. Throughout this item and its mass-metric formulas, the notation $dX_q(u)$ in Euclidean expressions abbreviates $\iota_{X(q)}(dX_q(u))$. In particular its components are $u([\pi_k\circ X])$, so this convention retains the usual Jacobian and inclusion formulas.

Let $m_1,\dots,m_N>0$ be **masses**. The **mass matrix** is the linear map $M:\mathbb R^{3N}\to\mathbb R^{3N}$ acting on each block by $M(x_1,\dots,x_N)=(m_1x_1,\dots,m_Nx_N)$; its matrix in the standard basis is block diagonal with blocks $m_iI_3$ ([[def-matrix-product-and-identity-matrix]]).

The **mass metric** of $(Q,X,m_1,\dots,m_N)$ is the family of maps

$$G_q:T_qQ\times T_qQ\longrightarrow\mathbb R,\qquad G_q(u,v):=\langle dX_q(u),\,M\,dX_q(v)\rangle_{3N},$$

for $q\in Q$ and $u,v\in T_qQ$. The **kinetic energy** of a tangent vector $v\in T_qQ$ is

$$T_q(v):=\tfrac12\,G_q(v,v).$$

Each $G_q$ is a symmetric bilinear form on the real vector space $T_qQ$ in the sense of [[def-bilinear-symmetric-skew-and-alternating-forms]]; that the family depends smoothly on $q$ means that in every smooth local chart of $Q$ the coefficient functions $q\mapsto G_q(\partial_i,\partial_j)$ are smooth, and is stated in the smoothness remark below.

## Remarks

- **Smooth dependence.** In any smooth chart $\psi:W\to\psi(W)\subseteq\mathbb R^d$ on $Q$, write $X_\psi:=X\circ\psi^{-1}$ and let $J_X$ be its $3N\times d$ Jacobian. The coordinate matrix of $G$ is $J_X^{\mathsf T}MJ_X$. Because $X_\psi$ is $C^\infty$, each entry of its Jacobian is $C^\infty$ by the multi-index definition of $C^k$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-ck-and-multi-index-notation-in-several-variables]]); finite sums and products preserve smoothness ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]). Hence the coefficients of $G$ are smooth in every chart, as stated in the Definition.

- In a local chart with coordinate vector fields $\partial_1,\dots,\partial_d$ the matrix of $dX_q$ is the $3N\times d$ Jacobian $X_q$ with entries $\partial_jX^k(q)$, and the matrix of $G_q$ is $X_q^{\mathsf T}MX_q$; this finite computation is [[lem-cm-mass-metric-positivity]]. When $X$ is the inclusion of an embedded $Q$, the differential is the inclusion $T_qQ\hookrightarrow\mathbb R^{3N}$ and the formula reads $G_q(u,v)=\langle u,Mv\rangle_{3N}$.

- The mass metric is a mathematical construction from the data $(Q,X,m_i)$: no physical law, no identification of $m_i$ with any measured inertial or gravitational mass, and no assertion that the motion of any physical system minimizes anything is made here.

- The kinetic energy $T_q$ is not a function on $Q$ but a function on tangent vectors depending on the base point; this dependence is the reason the mass metric is recorded as a family indexed by $q$.
