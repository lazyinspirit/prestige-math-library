---
id: prop-expander-prereq-one-vertex-landscape-composition
kind: proposition
title: One-vertex composition of phase-difference landscapes
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-prereq-phase-torus
  - def-expander-prereq-rotation-reduction
  - prop-expander-prereq-second-variation-test
  - def-expander-prereq-loop-compatible-networks
  - math:def-connected-graph-and-connected-component
  - math:thm-chain-rule-for-total-derivatives
  - math:def-product-topology
dependency_roles:
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-rotation-reduction: mathematical-premise
  prop-expander-prereq-second-variation-test: mathematical-premise
  def-expander-prereq-loop-compatible-networks: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  math:thm-chain-rule-for-total-derivatives: mathematical-premise
  math:def-product-topology: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement

Let $G_1=(V_1,E_1)$ and $G_2=(V_2,E_2)$ be finite undirected networks whose vertex sets meet exactly at $v$. Here $V_i$ is nonempty and finite, and $E_i$ is a set of unordered pairs $\{x,y\}$ with $x,y\in V_i$; the case $x=y$ denotes a loop. Thus repeated edges are excluded and loops are allowed. Equivalently, the symmetric binary matrix $A_i$ has $(A_i)_{xy}=1$ exactly when $\{x,y\}\in E_i$, including on the diagonal; this is a finite symmetric network. The loop-free support graph has vertex set $V_i$ and edges $\{\{x,y\}\in E_i:x\ne y\}$. Assume it is connected: every two vertices are joined by a path, with the length-zero path allowed at a single vertex. On the phase torus $T_{V_i}=\mathbb R^{V_i}/(2\pi\mathbb Z)^{V_i}$, let $U_i$ be a real-valued $C^2$ energy depending only on phase differences. Thus its value is unchanged by adding one common phase to every coordinate. A configuration is synchronized when all its vertex phases agree. A critical point has all first angular partial derivatives zero; a negative Hessian direction at a critical point is a real tangent vector $h$ with $h^T\nabla^2U_i h<0$. A local minimum is a point whose energy is no greater than the energy at every point in some neighborhood.

Suppose that, for each $i$, every local minimum of $U_i$ is synchronized and every critical point that is not a local minimum has a negative Hessian direction. On the glued network with vertex set $V=V_1\cup V_2$ and edge set $E_1\cup E_2$, define $U(\theta)=U_1(\theta|_{V_1})+U_2(\theta|_{V_2})$. Then every local minimum of $U$ is synchronized, and every critical point of $U$ that is not a local minimum has a negative Hessian direction. Fixing the shared phase gives independent relative-phase coordinates for the two factors. This conclusion uses the one-vertex product structure; it does not assert a general edge-addition monotonicity theorem.

## Statement references

[[def-expander-prereq-loop-compatible-networks]]

[[math:def-connected-graph-and-connected-component]]

[[def-expander-prereq-phase-torus]]

[[def-expander-prereq-rotation-reduction]]

[[prop-expander-prereq-second-variation-test]]

## Facts & Assumptions

[F1] The phase torus has angular charts with locally translational transitions, and coordinatewise addition and subtraction of phases are represented in these charts by addition and subtraction of real lifts ([[def-expander-prereq-phase-torus]]).

[F2] Fixing one vertex gives a relative-phase coordinate for each diagonal rotation orbit; every phase-difference function is constant on these orbits ([[def-expander-prereq-rotation-reduction]]).

[F3] A local minimum of a $C^2$ function in Euclidean coordinates is critical and has nonnegative Hessian quadratic form ([[prop-expander-prereq-second-variation-test]]).

[F4] A symmetric nonnegative matrix on a nonempty finite vertex set is a network; its positive off-diagonal entries define its loop-free support graph. The binary case represents the unordered edges in the Statement, with diagonal entries representing loops ([[def-expander-prereq-loop-compatible-networks]]). Connectedness of that support graph means that every two vertices are joined by a path; a one-vertex graph is connected ([[math:def-connected-graph-and-connected-component]]).

[F5] For composable maps between open Euclidean sets, total differentiability of the inner map at a point and of the outer map at its image gives $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[math:thm-chain-rule-for-total-derivatives]]).

[F6] In a finite product of topological spaces, products of open factor neighborhoods form a neighborhood basis. The empty product is a one-point space ([[math:def-product-topology]]).

[A1] The two networks and energies satisfy the hypotheses of the Statement.

## Proof

**Given:** The networks, energies and hypotheses in the Statement.

**Goal:** Prove the two landscape properties for $U$ and establish the relative-phase product structure.

1.1 Every edge of $E_1\cup E_2$ has endpoints in $V=V_1\cup V_2$, so the glued network has the same unordered-edge convention, with any common loop at $v$ occurring once in the edge union. Its energy is the displayed sum by definition. Write $W_i=V_i\setminus\{v\}$. The map sending $\theta$ to $(c,z_1,z_2)$, where $c=\theta_v$ and $z_i=(\theta_x-\theta_v)_{x\in W_i}$, has inverse $\theta_v=c$ and $\theta_x=c+(z_i)_x$ for $x\in W_i$. The sets $W_1,W_2$ are disjoint and cover $V\setminus\{v\}$, so these formulas are mutually inverse. In angular charts both maps are represented locally by linear maps, hence are smooth with smooth inverses. If $W_i$ is empty, its factor is the one-point empty product. Thus the shared phase and the two relative-phase factors give a product diffeomorphism. [A1, F1, F2, F4, algebra]

2.1 Let $u_i(z_i)$ be $U_i$ evaluated with phase $0$ at $v$ and phases $z_i$ on $W_i$. Rotation invariance gives $U(c,z_1,z_2)=u_1(z_1)+u_2(z_2)$, independently of $c$. To transfer derivatives, take any local affine map $B(y)=My+b$ between the angular-coordinate open sets and any $C^2$ scalar function $f$. Applying [F5] gives $\partial_j(f\circ B)(y)=\sum_r M_{rj}(\partial_r f)(B(y))$. Applying [F5] again to each $\partial_r f$ gives $\partial_k\partial_j(f\circ B)(y)=\sum_{r,s}M_{rj}M_{sk}(\partial_s\partial_r f)(B(y))$. Thus the composition is $C^2$, and $\nabla(f\circ B)=M^T(\nabla f)\circ B$ and $\nabla^2(f\circ B)=M^T((\nabla^2 f)\circ B)M$. These formulas apply to the component sections defining $u_i$ and to the inverse coordinate maps in step 1.1; all domains can be restricted to angular-chart open neighborhoods. When $M$ is invertible, the gradient vanishes in one coordinate system exactly when it vanishes in the other, and the Hessian quadratic form on $k$ in the new coordinates equals the old form on $Mk$. Empty relative-phase factors have no derivatives, and the same formulas use empty sums. For the displayed sum, the relative-factor derivatives are those of $u_i$ and the $c$ derivative is zero. Consequently a point is critical for $U$ exactly when both $z_i$ are critical for $u_i$; applying the invertible component coordinate map also makes this equivalent to criticality of each corresponding $U_i$. [A1, F1, F2, F5, step 1.1, algebra]

3.1 A point is a local minimum of $U$ exactly when both $z_i$ are local minima of their $u_i$. Indeed, by [F6] a neighborhood witnessing a minimum contains a product $N_c\times N_1\times N_2$ of open neighborhoods of its coordinates. Fixing $c$ and the other relative factor in the energy inequality shows $u_i(z_i)\leq u_i(w_i)$ for every $w_i\in N_i$, proving necessity. Conversely, choose open neighborhoods witnessing the two factor minima and any open neighborhood of $c$. Their product is a neighborhood by [F6], and adding the factor inequalities proves the minimum property for $U$. Applying the same argument to the component coordinates $(\theta_v,z_i)$ shows that a minimum of $u_i$ is exactly a minimum of $U_i$ at the corresponding configuration. The diffeomorphisms in step 1.1 carry these neighborhoods to neighborhoods in the original phase tori. This also covers a one-point relative factor. Consequently every minimum of $U$ restricts to synchronized configurations on both components. Their common phase at $v$ is the same, so the whole glued configuration is synchronized. [A1, F2, F6, step 1.1, step 2.1]

4.1 At a critical point of $U$ that is not a local minimum, step 3.1 gives a factor that is not a local minimum. By step 2.1 its corresponding component configuration is critical, so [A1] gives a tangent direction $h$ with strictly negative component Hessian quadratic form. Let $L_i$ be the invertible derivative of the inverse component coordinate map $(c,z_i)\mapsto\theta|_{V_i}$, and write $L_i^{-1}h=(a,b)$. The Hessian formula in step 2.1 shows that the component form in these coordinates on $(a,b)$ is the same negative number. Since $U_i$ is independent of $c$, its quadratic form on $(a,b)$ equals that on $(0,b)$. Extend $(0,b)$ to the glued product by taking zero velocity in the other relative-phase factor and in $c$. The sum in step 2.1 has block-diagonal second derivatives, so its quadratic form on this extended direction is the same negative number. Applying the inverse glued coordinate derivative to that direction and using the same Hessian formula gives a negative direction in the original angular coordinates of $U$. The coordinate maps are locally affine, so their second derivatives vanish and no additional term occurs. This proves the remaining assertion. [A1, F1, F5, step 1.1, step 2.1, step 3.1, algebra] ∎

## Remarks

The argument applies to the displayed sum of phase-difference energies. It makes no claim about adding an edge between vertices already in a network.
