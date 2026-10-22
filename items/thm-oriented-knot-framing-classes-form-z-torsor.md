---
id: thm-oriented-knot-framing-classes-form-z-torsor
kind: theorem
title: "Normal framing classes relative to a spanning surface are classified by winding"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - thm-fundamental-group-of-the-circle
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6, §6, pp.15–17"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "Framing classes as loops in $SO(2)$ and the framing integer"
    - title: "Allen Hatcher, Algebraic Topology, Chapter 1, §1.1, Theorem 1.7"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
      locator: "Chapter 1, §1.1, Theorem 1.7: the fundamental group of the circle is classified by degree"
---

## Statement

Let $K$ be a smooth oriented knot in the oriented three-sphere, and let $F$ be a connected compact oriented smooth embedded surface with oriented boundary $K$. Fix the standard round metric on $S^3$. A normal field along $K$ assigns to every point $p\in K$ a nonzero vector in the plane orthogonal to $T_pK$; two such fields represent the same framing class when they are homotopic through nonzero normal fields. The inward unit vector tangent to $F$ along $K$, together with the positive quarter-turn in each oriented normal plane, gives a reference frame. In this frame the relative normal field is a map $K\cong S^1\to S^1$, and its degree gives a bijection from framing classes to $\mathbb Z$. Adding $n$ positive full twists changes this integer by $n$.

## Statement references

[[def-oriented-link-in-s-three-and-ambient-isotopy|The smooth oriented knot model in the three-sphere]]

[[thm-fundamental-group-of-the-circle|Based circle loops are classified by integer degree]]

## Facts & Assumptions

**Given:** A smooth oriented knot $K$, a spanning surface $F$ as in the statement, and the standard orientation and metric on $S^3$.

[F1] An oriented link in $S^3$ is a smooth embedding of a finite disjoint union of oriented circles, with the fixed standard orientation of $S^3$. ([[def-oriented-link-in-s-three-and-ambient-isotopy]])

[F2] The degree map from $\pi_1(\mathbb R/\mathbb Z,[0])$ to $(\mathbb Z,+)$ is an isomorphism, and two based circle loops are homotopic exactly when they have equal degree. ([[thm-fundamental-group-of-the-circle]])

## Proof

1.1 At each point of $K$, the inward unit vector in $T F$ perpendicular to $T K$ is a smooth nonzero normal vector. The orientation of $S^3$, the orientation of $K$, and the metric orient the normal plane; its positive quarter-turn supplies a smooth second unit vector. These vectors give an oriented orthonormal frame of the normal plane along all of $K$. [given, F1, construct]

2.1 Normalize any nonzero normal field to unit length and express it in this reference frame as $(\cos 2\pi\theta(p),\sin 2\pi\theta(p))$. This defines a map $r:K\to S^1$. The frame identifies homotopies through nonzero normal fields exactly with free homotopies of these circle maps, since normalization is continuous and the frame is defined at every point. [step 1.1, given, construct]

3.1 Fix a point of $K$. Any free loop $r$ can be made based by a constant rotation of the target sending its value at that point to $1$; the rotation is homotopic to the identity because $S^1$ is path-connected. By [F2], based homotopy classes are classified by degree and every integer occurs. Undoing the constant rotations shows that free homotopy classes are also classified by degree. Therefore the winding parameter is a bijection to $\mathbb Z$, and multiplication by the degree-$n$ loop adds $n$, giving a free transitive twist action. [F2, step 2.1, given, algebra] ∎
