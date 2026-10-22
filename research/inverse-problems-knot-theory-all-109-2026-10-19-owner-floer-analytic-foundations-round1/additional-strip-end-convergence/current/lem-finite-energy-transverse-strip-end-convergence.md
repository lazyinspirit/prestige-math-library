---
id: lem-finite-energy-transverse-strip-end-convergence
kind: lemma
title: "Finite-energy transverse strip ends converge to one intersection point"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-interior-energy-regularity-for-smooth-almost-complex-strips, lem-boundary-energy-regularity-for-totally-real-strips, thm-euclidean-inverse-function-theorem]
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Analytic strip-end prerequisites"
---

## Statement

Assume Countable Choice. Let $(X,g)$ be compact, let $L_0,L_1\subset X$ be compact smooth half-dimensional submanifolds with finite intersection, and let $J(s,t,x)$ be smooth almost complex structures on $[0,\infty)\times[0,1]\times X$ with uniform $C^2$ bounds in source and target. Assume $J(s,j,x)=J_{b,j}(x)$ for $x\in L_j$, independent of $s$, and that $L_j$ is totally real for $J_{b,j}$. A smooth solution
$$u_s+J(s,t,u)u_t=0,\qquad u(s,j)\in L_j,$$
with finite Dirichlet energy has a unique point $x_+\in L_0\cap L_1$ such that
$$\sup_{0\le t\le1}d_g(u(s,t),x_+)\longrightarrow0,\qquad \sup_{0\le t\le1}|du(s,t)|_g\longrightarrow0$$
as $s\to\infty$. In particular no such strip exists if $L_0\cap L_1$ is empty. Compact transverse half-dimensional $L_0,L_1$ satisfy the finite-intersection premise. The analogous conclusion holds at a negative strip end. No exponential rate or index theorem is asserted.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The actual smooth half-strip, compact target and boundary submanifolds, coefficient bounds, fixed boundary structures, and finite energy from the statement.

[F1] The proved target-global interior and boundary epsilon estimates are [[lem-interior-energy-regularity-for-smooth-almost-complex-strips]] and [[lem-boundary-energy-regularity-for-totally-real-strips]]. Their constants are uniform under the stipulated coefficient bounds; the boundary structures are fixed in $s$ exactly as required there.

[F2] [[thm-euclidean-inverse-function-theorem]] gives local coordinates in which two transverse complementary-dimensional submanifolds have isolated intersection, by applying the theorem to the difference of their local parametrizations.

## Proof

1.1 Choose a fixed radius $r>0$ less than $1/16$ and the uniform scale restrictions in [F1]. Since the total energy is finite, the tail energy $E(u;[S,\infty)\times[0,1])$ tends to zero. Each point $(s,t)$ with $s>S+1$ is covered by an interior smaller disk or a boundary half-radius patch of fixed radius comparable to $r$, contained in that tail. Points within $r/4$ of a physical edge use the boundary supremum estimate centered at their boundary foot; other points use a fixed smaller interior disk. At the upper edge the orientation-preserving coordinate $(s,t)\mapsto(-s,1-t)$ turns it into a lower half-plane edge and preserves the equation, replacing the source arguments in $J$ only; its boundary structure is still fixed. Thus [F1] applies with uniform constants on every such patch. Once the tail energy is below its threshold, $$\sup_{s>S+1,\,0\le t\le1}|du(s,t)|_g^2\le C E(u;[S,\infty)\times[0,1]).$$ The right side tends to zero. [F1, given, construct, algebra]

2.1 The angular slice length is at most $\sup_t|u_t(s,t)|_g$, so step 1.1 implies $$\sup_t d_g(u(s,t),u(s,0))\longrightarrow0.$$ Any sequence $s_n\to\infty$ has a subsequence for which $u(s_n,0)$ converges, by compactness of $X$. Its limit lies in closed $L_0$. Since $u(s_n,1)\in L_1$ and their mutual distances tend to zero, the same limit lies in closed $L_1$. Consequently the distance from the entire tail image to $L_0\cap L_1$ tends to zero. Indeed, otherwise choose a sequence of image points with distance bounded below; compactness and the vanishing slice diameter would produce a subsequential limit in the intersection, a contradiction. If the intersection were empty the very first subsequence argument would already contradict that emptiness. [step 1.1, given, construct, algebra]

3.1 Let $K=L_0\cap L_1$, now nonempty and finite. Choose pairwise disjoint small metric neighborhoods of its finitely many points. By step 2.1 every sufficiently far tail image lies in their union. That tail source $[S,\infty)\times[0,1]$ is connected, its continuous image is connected, and therefore it lies wholly in one of those neighborhoods, say the one about $x_+$. Within that chosen neighborhood the only possible cluster point is $x_+$ by step 2.1 and separation from the other points of $K$. Compactness now implies uniform convergence of the tail image to $x_+$: a sequence failing it would have a different subsequential cluster point. This proves the asserted uniform endpoint convergence; the derivative convergence was established in step 1.1. Uniqueness follows from uniqueness of a limit in a metric space. [step 1.1, step 2.1, construct, algebra]

4.1 For the transverse assertion, choose smooth local parametrizations $f_0,f_1$ of $L_0,L_1$ about an intersection point. The derivative of $(a,b)\mapsto f_0(a)-f_1(b)$ in a target coordinate chart is invertible because the two tangent spaces are complementary. By [F2] the zero of this difference is isolated. Thus the compact set $K$ is discrete. An infinite compact set has an accumulation point, which here would again lie in $K$ and contradict isolatedness; equivalently its isolating neighborhoods have a finite subcover. Hence $K$ is finite. At a negative strip end apply the same argument to $v(s,t)=u(-s,t)$, whose equation has almost complex coefficient $-J(-s,t,x)$ and fixed totally real boundary structures $-J_{b,j}$; all norm and energy hypotheses persist. This proves the remaining assertions without presuming a diagonal linear normal form or an exponential rate. [F2, step 3.1, construct, algebra] ∎
