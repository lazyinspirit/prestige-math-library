---
id: prop-expander-prereq-strict-saddle-flow-nullity
kind: proposition
title: A null basin for all strict saddles of a smooth compact gradient flow
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phase-volume
  - def-expander-prereq-gradient-trajectories
  - thm-expander-prereq-center-stable-map-input
  - math:def-countable-choice
  - math:lem-c1-euclidean-maximal-flow-with-c2-upgrade
  - math:lem-xd-finite-matrix-exponential-series
  - math:thm-second-countable-implies-lindelof
  - math:prop-the-image-of-a-lower-dimensional-c1-manifold-is-null
  - math:prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets
  - math:prop-countable-unions-and-subsets-of-manifold-null-sets-are-null
  - math:thm-lebesgue-null-agrees-with-elementary-nullity-in-rn
  - math:def-null-subset-of-a-smooth-manifold
dependency_roles:
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-phase-volume: mathematical-premise
  def-expander-prereq-gradient-trajectories: mathematical-premise
  thm-expander-prereq-center-stable-map-input: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:lem-c1-euclidean-maximal-flow-with-c2-upgrade: mathematical-premise
  math:lem-xd-finite-matrix-exponential-series: mathematical-premise
  math:thm-second-countable-implies-lindelof: mathematical-premise
  math:prop-the-image-of-a-lower-dimensional-c1-manifold-is-null: mathematical-premise
  math:prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets: mathematical-premise
  math:prop-countable-unions-and-subsets-of-manifold-null-sets-are-null: mathematical-premise
  math:thm-lebesgue-null-agrees-with-elementary-nullity-in-rn: mathematical-premise
  math:def-null-subset-of-a-smooth-manifold: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
---

## Statement

Assume countable choice. Let $V$ be a nonempty finite set and let $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ be the finite flat phase torus. Let $U:T_V\to\mathbb R$ be $C^2$, meaning that its angular-coordinate expressions have continuous partial derivatives through order two. Define its flat gradient in an angular chart by $(\operatorname{grad}U)_v=\partial U/\partial x_v$ for $v\in V$, and its downward gradient equation by $\dot x_v=-\partial U/\partial x_v$. Suppose this equation has a complete flow $\Phi_t$, defined for all real times. A critical point is a point $p$ with $dU_p=0$; its Hessian is the matrix $H_p$ of second partial derivatives in an angular chart. A strict saddle here means a critical point at which $H_p$ has a negative eigenvalue. Then the set of initial points $x$ for which $\Phi_t(x)$ converges as $t\to\infty$ to some strict saddle has normalized phase volume zero. The strict saddles need not be isolated.

## Facts & Assumptions

**Given:** Countable choice and the torus, potential, complete flow and saddle set in the Statement.

[F1] Angular charts have locally translation transitions and Euclidean metric; the torus is compact and metrizable ([[def-expander-prereq-phase-torus]]). For the $C^2$ potential here, use the coordinate gradient and downward equation defined in the Statement. Flow notation $\Phi_t(x)$ denotes the time-$t$ value of the integral curve through $x$, with the trajectory convention of [[def-expander-prereq-gradient-trajectories]]. Phase volume is the completed normalized Lebesgue measure in angular coordinates ([[def-expander-prereq-phase-volume]]).

[F2] A Euclidean $C^1$ vector field has a unique jointly $C^1$ local flow, whose state derivative satisfies the variational equation; its time maps have inverse-time local maps ([[math:lem-c1-euclidean-maximal-flow-with-c2-upgrade]]). The finite matrix exponential solves $Y'=AY$, $Y(0)=I$ ([[math:lem-xd-finite-matrix-exponential-series]]).

[F3] At a fixed point of a $C^1$ local diffeomorphism, the center-stable theorem gives an embedded $C^1$ disc tangent to the generalized eigenspaces with eigenvalue modulus at most one, and an open neighbourhood whose points staying there under all nonnegative iterates lie in that disc ([[thm-expander-prereq-center-stable-map-input]]).

[F4] On a positive-dimensional smooth manifold, a subset is manifold-null when its intersection with every chart domain has an elementary Euclidean-null coordinate image; under countable choice this is independent of the smooth atlas ([[math:def-null-subset-of-a-smooth-manifold]]). Under countable choice, a second-countable space is Lindelöf; a $C^1$ image of a lower-dimensional smooth manifold is manifold-null; an equidimensional $C^1$ map sends manifold-null sets to manifold-null sets; and countable unions and subsets of such sets are null ([[math:def-countable-choice]], [[math:thm-second-countable-implies-lindelof]], [[math:prop-the-image-of-a-lower-dimensional-c1-manifold-is-null]], [[math:prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets]], [[math:prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]]).

[F5] Since $|V|\ge1$, the positive-dimensional chartwise definition of manifold-nullity applies to the phase torus ([[math:def-null-subset-of-a-smooth-manifold]]). Elementary Euclidean nullity agrees with Lebesgue nullity, and in an angular chart phase-nullity is equivalent to Lebesgue nullity of the coordinate image ([[math:thm-lebesgue-null-agrees-with-elementary-nullity-in-rn]], [[def-expander-prereq-phase-volume]]).

## Proof

**Given:** The data and assumptions in the Statement.

**Goal:** Prove that the union of the basins of all strict saddles is phase-null.

1.1 On an overlap of angular charts the transition is locally $y=x+a$ for a constant lattice vector $a$. If $u_x$ and $u_y$ are the expressions of $U$, then $u_y(y)=u_x(y-a)$ and $\partial u_y/\partial y_v=\partial u_x/\partial x_v$ at corresponding points. The transition derivative is the identity, so the gradient components in the Statement agree as tangent vectors and define a global $C^1$ field. Their Euclidean inner product with a vector $w$ is $\sum_{v\in V}(\partial U/\partial x_v)w_v=dU(w)$, so this is the flat-metric gradient. Its downward field is $-\nabla U$ in each angular chart. By [F2], uniqueness patches the local flows along each trajectory, and a finite subdivision of any compact time interval gives $C^1$ dependence on the initial point. Completeness and uniqueness give $\Phi_{t+s}=\Phi_t\circ\Phi_s$ and $\Phi_t^{-1}=\Phi_{-t}$, so each time map is a $C^1$ diffeomorphism. At a critical point $p$, the constant trajectory is the unique trajectory through $p$. In an angular chart the variational equation there is $Y'=-H_pY$, $Y(0)=I$; consequently $D\Phi_1(p)=e^{-H_p}$ by [F2]. [given, F1, F2]

2.1 Fix a strict saddle $p$. If $H_pv=\lambda v$ with $\lambda<0$ and $v\ne0$, a real nonzero eigenvector may be chosen because $H_p$ and $\lambda$ are real. The exponential series gives $D\Phi_1(p)v=e^{-\lambda}v$, with $e^{-\lambda}>1$. Apply [F3] to the coordinate representation of $\Phi_1$ at $p$, shrinking its coordinate domain as necessary. Its trapping neighbourhood $B_p$ is open in the torus, and its embedded disc $W_p$ has dimension strictly less than $|V|$, since the unstable generalized eigenspace contains $v$. Thus every point whose nonnegative integer iterates stay in $B_p$ belongs to $W_p$. [F2, F3, step 1.1]

3.1 Let $S$ be the set of strict saddles. The angular boxes with rational endpoints form a countable base for $T_V$, so their intersections with $S$ form a countable base for $S$. The sets $B_p\cap S$, $p\in S$, cover $S$. By [F4], choose a countable subcover $B_{p_j}\cap S$, with its associated discs $W_{p_j}$. If $S$ is empty, the desired basin is empty. Otherwise, for any initial point $x$ converging to $p\in S$, choose $j$ with $p\in B_{p_j}$. Since $B_{p_j}$ is open, there is an integer $N\ge0$ such that $\Phi_{N+k}(x)\in B_{p_j}$ for every integer $k\ge0$. By step 2.1, $\Phi_N(x)\in W_{p_j}$. Therefore the basin is contained in $\bigcup_{j,N\ge0}\Phi_{-N}(W_{p_j})$. [F1, F4, step 2.1, choose]

4.1 Each $W_{p_j}$ is the $C^1$ image of an open subset of Euclidean space of dimension less than $|V|$, so [F4] makes it manifold-null. By step 1.1 and [F4], every $\Phi_{-N}(W_{p_j})$ is manifold-null; countable choice makes their countable union, and every subset of it, manifold-null. Cover the torus by countably many angular charts. Since $|V|\ge1$, the definition in [F4] makes the coordinate image of the basin intersected with each chart domain elementary Euclidean-null. In each chart, [F5] converts this coordinate nullity to a phase-null subset. Their countable union is phase-null by completeness and countable additivity of phase volume. This proves the claim. [F1, F4, F5, step 1.1, step 3.1] ∎
