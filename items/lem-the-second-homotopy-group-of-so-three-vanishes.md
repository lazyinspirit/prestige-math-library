---
id: lem-the-second-homotopy-group-of-so-three-vanishes
kind: lemma
title: "The second homotopy group of SO(3) vanishes"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-pi-three-so-three-generated-by-the-quaternion-double-cover, thm-lower-dimensional-sphere-maps-are-based-nullhomotopic, prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant, def-higher-homotopy-group-by-based-cubes, prop-cubical-and-spherical-models-of-higher-homotopy-agree, def-stiefel-space-grassmannian-and-tautological-bundle, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3 (covering isomorphisms on higher homotopy groups) and §4.2–4.3"
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: "printed pp. 75, 342, 375–440; a two-sheeted covering induces isomorphisms on $\\pi_n$ for $n\\ge2$, and $S^3$ covers $\\mathrm{SO}(3)$"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (Harvard CMSA Math-Science Literature Lecture write-up, June 30 2022), §2.1 eversion paragraph"
      url: https://math.stanford.edu/~ralph/immersions-final.pdf
      locator: "PDF pp. 8–10; $\\mathrm{SO}(3)\\cong\\mathbb{RP}^3$ with universal cover $S^3$, hence $\\pi_2(\\mathrm{SO}(3))=0$"
dependency_level: 0
---

## Statement

$\pi_2(\mathrm{SO}(3),I)=0$. More precisely, for the two-sheeted covering
homomorphism $\rho:S^3\to\mathrm{SO}(3)$, $\rho(q)(v)=qvq^{-1}$, from the unit
quaternions onto the rotations of $\operatorname{Im}\mathbb H$, the induced
homomorphism $\rho_*:\pi_2(S^3,1)\to\pi_2(\mathrm{SO}(3),I)$ is a bijection and
$\pi_2(S^3,1)=0$. Consequently also $\pi_2(O(3))=0$ and
$\pi_2(V_2(\mathbb R^3))=0$: the map $(u,v)\mapsto(u,v,u\times v)$ is a
homeomorphism $V_2(\mathbb R^3)\to\mathrm{SO}(3)$, and $O(3)$ is the disjoint
union of the two cosets of $\mathrm{SO}(3)$, each homeomorphic to
$\mathrm{SO}(3)$.

## Facts & Assumptions

**Given:** The quaternion double cover $\rho:S^3\to\mathrm{SO}(3)$, the identity matrix $I\in\mathrm{SO}(3)$, and the standard frames $(e_1,e_2)$ of $V_2(\mathbb R^3)$, $(e_1,e_2,e_3)$ of $\mathbb R^3$.

[F1] $\rho(q)(v)=qvq^{-1}$ defines a continuous surjective group homomorphism with kernel $\{\pm1\}$, it is a two-sheeted covering map, and for every covering $p:E\to B$, every $e_0$ and every $n\ge2$, the induced map $p_*:\pi_n(E,e_0)\to\pi_n(B,p(e_0))$ is an isomorphism. [[lem-pi-three-so-three-generated-by-the-quaternion-double-cover]]

[F3] $\pi_n$ is computed by based cubes and $\pi_0$ is the pointed set of path components; $\pi_2$ is a group and based homotopy equivalences induce isomorphisms. Cubical classes agree with based sphere-map classes. [[prop-cubical-and-spherical-models-of-higher-homotopy-agree]], [[def-higher-homotopy-group-by-based-cubes]], [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]

[F4] For $0\le k<r$, every continuous based map $(S^k,a)\to(S^r,b)$ is nullhomotopic through maps fixing $a$. [[thm-lower-dimensional-sphere-maps-are-based-nullhomotopic]]

[F5] $V_2(\mathbb R^3)=\{(u,v):\langle u,u\rangle=\langle v,v\rangle=1,\ \langle u,v\rangle=0\}$ with the subspace topology; $\mathrm{SO}(3)$ is the group of real $3\times3$ matrices with $R^{\mathsf T}R=I$ and $\det R=1$. [[def-stiefel-space-grassmannian-and-tautological-bundle]], [[lem-pi-three-so-three-generated-by-the-quaternion-double-cover]]. Write $O(3)=\{A:A^{\mathsf T}A=I\}$ with its matrix subspace topology.

[F6] The cross product is bilinear, alternating, orthogonal to both factors, and satisfies the scalar triple product identity $\langle x\times y,z\rangle=\det[x\ y\ z]$. [[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]

## Proof

1.1 The map $\phi:V_2(\mathbb R^3)\to\mathrm{SO}(3)$, $\phi(u,v)=(u\mid v\mid u\times v)$, is a homeomorphism. Its image lies in $\mathrm{SO}(3)$: for orthonormal $u,v$ the vector $u\times v$ is orthogonal to $u$ and $v$ by [F6] and is unit, since expanding its coordinates gives $\lVert u\times v\rVert^2=\lVert u\rVert^2\lVert v\rVert^2-\langle u,v\rangle^2=1$, so the three columns are orthonormal, and $\det(u\mid v\mid u\times v)=\langle u\times v,u\times v\rangle=1$ by the triple product identity [F6]. It is injective because the first two columns determine the argument. It is surjective: for $R\in\mathrm{SO}(3)$ with columns $c_1,c_2,c_3$, the vector $c_1\times c_2$ is a unit vector orthogonal to $c_1$ and $c_2$ by [F6], hence equals $\pm c_3$, and the sign is $+$ because $\langle c_1\times c_2,c_3\rangle=\det(c_1\mid c_2\mid c_3)=\det R=1$; thus $R=\phi(c_1,c_2)$ with $(c_1,c_2)\in V_2(\mathbb R^3)$. Both $\phi$ and the projection $R\mapsto(c_1,c_2)$ to the first two columns are continuous, so $\phi$ is a homeomorphism. [F5, F6]

1.2 $\rho_*:\pi_2(S^3,1)\to\pi_2(\mathrm{SO}(3),I)$ is an isomorphism: $\rho$ is a two-sheeted covering map by [F1], and covering projections induce isomorphisms on $\pi_n$ for $n\ge2$ by the second clause of [F1] applied with $n=2$, $p=\rho$, $e_0=1$. [F1]

1.3 $\pi_2(S^3,1)=0$: every continuous based map $S^2\to S^3$ is nullhomotopic through based maps by [F4] with $k=2<r=3$, so every element of $\pi_2(S^3,1)$ equals the class of the constant map, the distinguished element of the group [F3]. [F3, F4]

2.1 Hence $\pi_2(\mathrm{SO}(3),I)=0$: an isomorphism of groups carries the distinguished element to the distinguished element, so the triviality of the source in step 1.3 forces the triviality of the target. [F3, step 1.2, step 1.3]

3.1 $O(3)$ is the disjoint union of its two cosets: every $A\in O(3)$ has $\det A=\pm1$ by $A^{\mathsf T}A=I$, so $A\in\mathrm{SO}(3)$ or $A\in R_0\mathrm{SO}(3)$ for the reflection $R_0=\operatorname{diag}(1,1,-1)$, and the two cosets are disjoint and each is homeomorphic to $\mathrm{SO}(3)$ by left translation. Since the square $I^2$ is connected, every based cube $I^2\to O(3)$ and every boundary-fixed homotopy of such cubes lies in the single component of the basepoint, so evaluating cubical representatives identifies $\pi_2(O(3),J)$ with $\pi_2$ of the component of $J$, which after left translation is $\pi_2(\mathrm{SO}(3),I)$ and hence is $0$ by step 2.1. [F3, F5, step 2.1]

4.1 $\pi_2(V_2(\mathbb R^3),e)=0$ at every basepoint $e=(u,v)$: the homeomorphism of step 1.1 satisfies $\phi(u,v)=R$ and is a based homotopy equivalence, so it induces an isomorphism $\pi_2(V_2(\mathbb R^3),e)\cong\pi_2(\mathrm{SO}(3),R)$ [F3]; the left translation $A\mapsto R^{-1}A$ is a homeomorphism of $\mathrm{SO}(3)$ carrying $R$ to $I$, hence induces an isomorphism $\pi_2(\mathrm{SO}(3),R)\cong\pi_2(\mathrm{SO}(3),I)$, which is $0$ by step 2.1. Together with steps 2.1 and 3.1 this proves all three claimed vanishings at every basepoint, the argument uses the unconditional topological covering statement [F1] and no Lie-group structure or choice principle. [F1, F3, step 1.1, step 2.1, step 3.1] ∎
