---
id: thm-compact-collared-manifold-local-coefficient-lefschetz-duality-in-zf
kind: theorem
title: Local coefficient Lefschetz duality without choice
status: draft
origin: pipeline
deps:
  - thm-finite-atlas-manifold-compact-support-duality-in-zf
  - thm-compact-oriented-manifold-local-coefficient-duality-in-zf
  - lem-canonical-twisted-fundamental-classes-over-compact-subsets
  - def-cup-and-cap-products-with-local-coefficient-pairings
  - def-compactly-supported-cohomology-with-local-coefficients
  - thm-pair-long-exact-sequences-with-local-coefficients
  - thm-excision-and-mayer-vietoris-with-local-coefficients
  - prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism
  - thm-five-lemma-for-a-morphism-of-long-exact-sequences
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Theorem3.43, printed pages253–254
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
---

## Statement

Let $W$ be a compact oriented Hausdorff topological $n$-manifold with boundary $A$ and a supplied boundary collar $c:A\times[0,1)\to W$. Let $\mathcal L$ be a local system of abelian groups. Cap with the integral relative orientation class $z=[W,A]$ gives isomorphisms in every integer degree:
$$H^p(W,A;\mathcal L)\xrightarrow{\sim}H_{n-p}(W;\mathcal L),\qquad H^p(W;\mathcal L)\xrightarrow{\sim}H_{n-p}(W,A;\mathcal L).$$
The maps commute with every coefficient action commuting with transport, including noncommutative ring actions on the underlying abelian-group systems. No choice principle, smoothness, triangulation or finite CW structure is assumed.

## Facts & Assumptions

**Given:** The oriented compact manifold, supplied collar and abelian-group local system.

[F1] Canonical support classes and the relative orientation class exist without choice; the boundary of $z$ is the outward-normal-first orientation class $[A]$. The oriented assertion is the trivialized integral orientation-system case. [[lem-canonical-twisted-fundamental-classes-over-compact-subsets]]

[F2] Compact-support duality holds on a boundaryless finite-atlas manifold, and ordinary duality holds on a compact oriented boundaryless manifold. [[thm-finite-atlas-manifold-compact-support-duality-in-zf]], [[thm-compact-oriented-manifold-local-coefficient-duality-in-zf]]

[F3] Local pair sequences, excision, and homotopy invariance apply to abelian-group local systems by using the commutative base ring $\mathbb Z$. Pair cochain connectors use the explicit zero extension on simplex functions. [[thm-pair-long-exact-sequences-with-local-coefficients]], [[thm-excision-and-mayer-vietoris-with-local-coefficients]], [[prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism]]

[F4] Local cap satisfies the cochain-first boundary formula and commutes with restriction and passage to relative groups; compact-support groups are the support colimit. [[def-cup-and-cap-products-with-local-coefficient-pairings]], [[def-compactly-supported-cohomology-with-local-coefficients]]

[F5] The five lemma applies to commutative exact five-term windows. [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]]

## Proof

1.1 If $A$ is empty, both maps are [F2]'s compact duality, so assume it is nonempty. Put $N=W\setminus A$, $C_d=c(A\times[0,d))$ and $K_d=W\setminus C_d$ for $0<d<1/2$. Every compact $L\subset N$ lies in some $K_d$: intersect it with the closed compact collar segment of height at most $1/2$; on the nonempty intersection the continuous height has a positive minimum since $L$ misses $A$. Choose $d$ below that minimum; if the intersection is empty any sufficiently small $d$ works. Compactness supplies a finite atlas of $W$ by ordinary and half-space charts. Restricting these charts to $N$ gives a finite atlas by open Euclidean subsets. Thus [F2]'s finite-atlas duality applies to $N$. Pushing the collar inward with the function $t\mapsto t+\varepsilon\chi(t)$, where $\chi=1$ near zero and vanishes before height $1/2$ and $\varepsilon>0$ is small enough, gives a homotopy inverse to $N\hookrightarrow W$. Linear interpolation of this push gives the homotopies, stays inside the collar, and restricts to positive heights on $N$. [F2, F3, given, construct, algebra]

2.1 The collar deformation retraction $C_d\to A$, its coefficient transports, and the exact pair sequences imply that $H^p(W,C_d;\mathcal L)\to H^p(W,A;\mathcal L)$ is an isomorphism. Excision identifies its domain with $H^p(N,N\setminus K_d;\mathcal L|_N)$. These maps commute with decreasing $d$. The cofinality of the $K_d$ from step 1.1 and the representative definition of the support colimit therefore give a canonical isomorphism $H^p(W,A;\mathcal L)\cong H_c^p(N;\mathcal L|_N)$. To verify independence, move two representatives to a common smaller collar core; the natural relative maps and common-support equality identify them there. This selects representatives for a single class only. [F3, F4, F5, step 1.1, construct, algebra]

3.1 By [F1], the image of $z$ in $H_n(W,C_d;\mathbb Z)$ is the excision image of the support orientation class of $N$ at $K_d$. A relative cocycle on $(W,C_d)$ vanishes on $C_d$. Cap with two chains representing this equality differs by a boundary and by a cap term supported in $C_d$; the latter is zero. The cap boundary formula [F4] turns the former difference into a target boundary. Thus under step 2.1 the relative cap map on $W$ is exactly compact-support cap on $N$ followed by inclusion $N\hookrightarrow W$. Both maps are isomorphisms by step 1.1 and [F2], proving $H^p(W,A;\mathcal L)\cong H_{n-p}(W;\mathcal L)$. [F1, F2, F3, F4, step 1.1, step 2.1, algebra]

4.1 Compare the exact cohomology window $$H^{p-1}(A;\mathcal L)\to H^p(W,A;\mathcal L)\to H^p(W;\mathcal L)\to H^p(A;\mathcal L)\to H^{p+1}(W,A;\mathcal L)$$ with the homology window $$H_{n-p}(A;\mathcal L)\to H_{n-p}(W;\mathcal L)\to H_{n-p}(W,A;\mathcal L)\to H_{n-p-1}(A;\mathcal L)\to H_{n-p-1}(W;\mathcal L).$$ Use cap with $[A]$ in the first and fourth vertical positions, the isomorphism of step 3.1 in the second and fifth, and cap with $z$ in the middle. The boundary is compact and boundaryless, so its two cap maps are isomorphisms by [F2]. All rows are exact by [F3]. [F1, F2, F3, step 3.1, construct, algebra]

5.1 The two squares involving inclusions and relative quotients commute directly on the cap representatives. For the first connector square, extend a degree-$(p-1)$ cocycle $a$ on $A$ by zero to a cochain $\widetilde a$ on $W$. The cap identity gives $$\delta\widetilde a\cap z=\widetilde a\cap\partial z+(-1)^p\partial(\widetilde a\cap z).$$ Together with $\partial z=[A]$ this proves the required square on homology. For the last connector square, a degree-$p$ cocycle $b$ gives $\partial(b\cap z)=(-1)^p b|_A\cap[A]$. Multiplying that homology connector by $(-1)^p$ therefore makes the square commute. Multiplication by this unit preserves exactness. The signed ladder is now commutative, so [F5] and the four isomorphisms of step 4.1 prove the middle cap map is an isomorphism. [F1, F3, F4, F5, step 4.1, algebra]

6.1 The argument applies to arbitrary abelian-group fibers; it never lifts a cochain through a quotient of infinite products. The only cochain extension was the explicit zero extension for a subspace. Compactness supplies finitely many charts; all other operations use a single compact support or finitely many chains at a time. Any commuting scalar action commutes with cap, transport, extension and restriction, so all the maps and their inverses retain it. Empty manifolds, empty boundary, dimension zero, disconnected manifolds and all integer degrees obey the same formulas, with negative complexes zero. Hence the stated full coefficient and topological scope is obtained without a choice axiom. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 5.1, algebra] ∎
