---
id: lem-bounded-energy-empty-boundary-disk-model-is-open
kind: lemma
title: "An empty boundary-disk model remains empty at bounded energy"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, thm-countable-choice-totally-real-boundary-gromov-bubble-tree-compactness, lem-soft-rescaling-captures-isolated-totally-real-boundary-energy-atoms, lem-real-involution-reflects-boundary-disks-to-holomorphic-spheres]
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Section3.7 concerns empty integrable boundary-degeneration models and their perturbations; actual fixedtarget compactness proof below retains an explicit finite energy bound and fixed boundary structure"
---

## Statement

Assume Countable Choice. Let $(X,g)$ be a compact smooth manifold, $L\subset X$ a compact embedded submanifold totally real for a smooth almost complex structure $J_0$. Suppose every smooth $J_0$-holomorphic closed disk with boundary on $L$ is constant and no nonconstant $J_0$-holomorphic sphere intersects $L$. Fix $E_0<\infty$.

There is a $C^\infty$ neighborhood $\mathcal U$ of $J_0$ such that every smooth almost complex structure $J\in\mathcal U$ satisfying the full endomorphism equality $J(x)=J_0(x)$ at every $x\in L$ has no nonconstant smooth $J$-holomorphic closed disk with boundary on $L$ and energy at most $E_0$. One may impose additional auxiliary constraints by intersection with this neighborhood.

In particular, for the supplied real-oval product torus in the disk-reflection theorem, the standard complex symmetric-product structure has such a neighborhood for every prescribed finite $E_0$. This does not construct the real model for arbitrary diagrams or provide one neighborhood for all energies. The conclusion is actual emptiness under the stated fixed-boundary condition, not a general deformation-invariance assertion for disk counts.

## Statement references

[[def-countable-choice]]

[[thm-countable-choice-totally-real-boundary-gromov-bubble-tree-compactness]]

[[lem-real-involution-reflects-boundary-disks-to-holomorphic-spheres]]

## Facts & Assumptions

**Given:** The compact target, compact embedded totally real boundary submanifold, smooth autonomous background structure, its two emptiness hypotheses, and one fixed finite energy bound. All energies use the fixed metric.

[F1] [[thm-countable-choice-totally-real-boundary-gromov-bubble-tree-compactness]] gives actual fixed-disk compactness for smoothly convergent structures with the same full structure on $L$: a smooth base disk, finitely many disk and sphere bubbles, equal values at every node, energy identity, and a connected finite nodal tree. Sphere subtrees consist entirely of spheres. All structures are the same autonomous limit when the original structures are autonomous.

[F2] The complete proof of [[lem-soft-rescaling-captures-isolated-totally-real-boundary-energy-atoms]], step1.1, gives a uniform positive quantum for every nonconstant autonomous disk under the compact coefficient and fixed totally real boundary bounds. Its normalization and epsilon-estimate argument is repeated below for the actual disks under consideration.

[F3] [[lem-real-involution-reflects-boundary-disks-to-holomorphic-spheres]] proves that the supplied real-oval torus has no nonconstant standard holomorphic disk and is disjoint from every nonconstant standard holomorphic sphere.

## Proof

1.1 For any smoothly convergent autonomous sequence $J_n$ satisfying $J_n|_L=J_0|_L$, every nonconstant holomorphic disk has one common positive lower energy bound $h$. Explicitly parametrize its interior by the upper half-plane, with smooth boundary at finite points and at infinity. Choose a finite point with nonzero derivative, which exists unless the map is constant by integration along coordinate paths. Translate the real source coordinate and dilate it by a positive factor to make that derivative norm one. These changes preserve the half-plane, its boundary condition and total energy. If the normalized point's height is at least one, the interior fixed-radius epsilon estimate applies on a disk about it. If its height is less than one, the boundary fixed-radius estimate applies in a half-disk of fixed radius centered on the real axis below it, choosing that radius large enough that the point lies in its smaller half-disk. The two estimates are the actual ones used in [F2], with uniform constants because the target coefficient bounds and boundary structure are fixed. If the relevant local energy exceeds its epsilon threshold, the total energy is already bounded below. Otherwise the estimate $1\le C E_g(v)$ supplies that lower bound. Taking the smaller of these finitely many bounds gives $h>0$. This applies to all $J_n$ and to the background without assuming the disks occur first as rescaled bubbles. [F2, given, construct, algebra]

2.1 If $E_0\le0$ the desired conclusion is immediate by positive energy. Otherwise suppose the claimed neighborhood does not exist. Use a finite chart system and the first $n$ smooth coefficient seminorms to select, for each $n$, an almost complex structure $J_n$ whose difference from $J_0$ has those seminorms less than $1/n$, with $J_n|_L=J_0|_L$, and a nonconstant $J_n$-holomorphic closed disk $v_n$ with boundary on $L$ and energy at most $E_0$. Countable Choice selects these countably many witnesses. They satisfy smooth convergence $J_n\to J_0$ and the exact fixed-boundary hypothesis of [F1]. Pass to a subsequence with convergent energies and apply [F1] on the fixed closed disk. Every component of the resulting connected finite nodal tree is a $J_0$-holomorphic disk with boundary on $L$ or a $J_0$-holomorphic sphere; its base component is a disk. At least one component is nonconstant, because the energy identity and step1.1 give a positive limiting total energy. [F1, step 1.1, construct, contradiction]

3.1 Every disk component is constant by the first background hypothesis. The base disk therefore has one value $x\in L$. Choose any nonconstant vertex in the finite tree and follow the graph path from the base to it; stop at the first nonconstant vertex on that path. Each earlier vertex is constant and matched nodal values make all those values equal to $x$. The first nonconstant vertex must be a sphere, since every disk is constant, and the final edge makes it pass through $x\in L$. This contradicts the second background hypothesis. Constant sphere ghosts or constant disk components do not escape this argument; the path crosses all of them before reaching its first nonconstant sphere. Thus the sequence in step2.1 cannot exist and the required smooth neighborhood does exist. Intersecting it with any further auxiliary subspace preserves its actual emptiness conclusion. [F1, step 2.1, construct, contradiction]

4.1 For the real-oval application the map from the product of the disjoint circles to the symmetric product is an embedding: off the repeated-point locus the quotient is a local holomorphic coordinate isomorphism on a product of disjoint disks, and the labels of the different circles determine the unique ordering. Compactness then gives the embedding onto its image. In the invariant coordinates constructed in [F3] each circle is a real line, so its product tangent plane is totally real. The target is compact, and [F3] gives both background emptiness hypotheses for the standard structure. Apply steps1.1–3.1 with this $L,J_0$ to obtain the stated finite-energy neighborhood. No claim that such a real model exists for an arbitrary attaching system, that $J$ may vary on $L$ in this proof, or that these neighborhoods are uniform as $E_0\to\infty$ has been used. [F3, step 1.1, step 2.1, step 3.1, construct] ∎
