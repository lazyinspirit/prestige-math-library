---
id: thm-real-pin-spin-topological-double-covers
kind: theorem
title: Pin and full-even Spin are topological double covers
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: pin-spin-and-clifford-module-representations
dependency_level: 7
deps:
  - thm-real-pin-spin-image-kernel-and-compactness
  - lem-real-local-spin-lift-by-matrix-logarithm
  - lem-normalized-pin-spin-product-and-norm-laws
  - lem-twisted-clifford-adjoint-reflection-and-scalar-kernel
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §§1.5 and 1.8"
      url: https://arxiv.org/pdf/0805.0311
    - title: "Eckhard Meinrenken, Lie groups and Clifford algebras, Chapter 2 §4.1"
      url: https://www.math.toronto.edu/mein/teaching/LieClifford/cl12.pdf
---

## Statement

Equip $\mathrm{Cl}(V,Q)$ with its finite-dimensional real topology, Pin and full-even Spin with the subspace topology, and $O(V,B)$ and $SO(V,B)$ with their matrix topologies. The maps in [[thm-real-pin-spin-image-kernel-and-compactness]] are continuous central two-sheeted covering maps. This is a topological assertion in addition to the algebraic exactness of those sequences.

## Facts & Assumptions

**Given:** The finite-dimensional nondegenerate real quadratic space with the group topologies above.

[F1] Both twisted-adjoint maps are surjective group homomorphisms with central kernel $\{1,-1\}$ ([[thm-real-pin-spin-image-kernel-and-compactness]]).

[F2] A continuous local section $s$ near the identity of $SO(V,B)$ has $\rho(s(A))=A$ and $s(A)\in\operatorname{Spin}_{N=1}$ ([[lem-real-local-spin-lift-by-matrix-logarithm]]).

[F3] Pin consists of homogeneous normalized-vector products, and its even subgroup is full-even Spin ([[lem-normalized-pin-spin-product-and-norm-laws]]).

[F4] Each normalized anisotropic vector acts by its hyperplane reflection ([[lem-twisted-clifford-adjoint-reflection-and-scalar-kernel]]).

## Proof


**Proof technique:** direct.

1.1 The maps are continuous because the twisted action uses only finite-dimensional algebra multiplication, the grading involution, and inversion on the open set of invertible elements. By [F2], shrink a neighborhood $U$ of the identity in $SO(V,B)$ until the section is defined on $U$. For every $A\in U$, [F1] says the fiber is exactly $\{s(A),-s(A)\}$. [F1, F2, algebra]

2.1 Since the finite-dimensional Clifford algebra is Hausdorff and $1\ne-1$, choose an open neighborhood $W$ of $1$ disjoint from $-W$. Since $s(I)=1$, shrink $U$ so $s(U)\subset W$ and $-s(U)\subset -W$. Then $\rho^{-1}(U)\cap W=s(U)$ and $\rho^{-1}(U)\cap(-W)=-s(U)$ are disjoint open subsets of $\rho^{-1}(U)$; each maps homeomorphically to $U$, with inverse $s$ or $-s$. Thus the map on full-even Spin is a two-sheeted covering near the identity. [F1, step 1.1, choose]

3.1 Choose an open neighborhood $U_O$ of the identity in $O(V,B)$, contained in both $SO(V,B)$ and the neighborhood $U$ of step 2.1; this is possible because $SO(V,B)$ is open in $O(V,B)$, as determinant is continuous with values in $\{1,-1\}$. If $x\in\operatorname{Pin}$ and $x=u_1\cdots u_k$ is a product of normalized vectors, then [F4] gives $\det\rho_x=(-1)^k$. Thus $\rho_x\in U_O$ implies $k$ is even, and [F3] gives $x\in\operatorname{Spin}_{\mathrm{full}}$. Conversely full-even Spin is contained in Pin. Therefore the Pin preimage of $U_O$ is exactly the full-even Spin preimage restricted to $U_O$, so step 2.1 supplies its two sheets. For any point of either target group choose one lift using [F1]; left multiplication by that lift and by its image transports the identity neighborhood and its two sheets to a neighborhood of that point. Hence both maps are covering maps everywhere. Their kernels are central by [F1], so both are central topological double covers. [F1, F3, F4, step 2.1, construct] ∎

## Remarks

The local logarithm section is the step that distinguishes a covering proof from an abstract short exact sequence with a two-element kernel.
