---
id: ex-a-noncompact-algebraic-line-needs-a-deleted-boundary-triangulation
kind: example
title: "A noncompact algebraic line needs a deleted boundary triangulation"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-continuous-map-top,
       def-homeomorphism-and-open-maps,
       def-metric-topology,
       prop-a-finite-simplicial-complex-has-compact-hausdorff-realization,
       rem-complex-euclidean-space-dictionary]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "Section 5.4 (spaces of finite type as finite complexes with a subcomplex deleted)"
---

## Example

The analytic complex affine line $\mathbb A^1(\mathbb C)=\mathbb C$ cannot be
homeomorphic to the realization of a finite simplicial complex. It is
homeomorphic to a finite triangulated compactification with one boundary vertex
deleted. Thus "finite triangulation" for noncompact varieties must allow a
deleted subcomplex or another equivalent noncompact finite-cell convention.

## Facts & Assumptions

**Given:** The usual analytic topology on $\mathbb C=\mathbb R^2$, and the fixed complex structure that identifies $a+bi$ with $(a,b)$ ([[rem-complex-euclidean-space-dictionary]], [[def-metric-topology]]).

[F1] The realization of a finite simplicial complex is compact ([[prop-a-finite-simplicial-complex-has-compact-hausdorff-realization]]).

[F2] A homeomorphism is a continuous bijection with continuous inverse, and composites of continuous maps are continuous ([[def-homeomorphism-and-open-maps]], [[def-continuous-map-top]]).

## Verification

1.1 The increasing open disks $\{z:|z|<n\}$ for positive integers $n$ cover $\mathbb C$, and no finite subfamily covers: a finite union of such disks is contained in the largest of them. Hence $\mathbb C$ is not compact, and by [F1] it is not homeomorphic to the realization of any finite simplicial complex. [F1, given]

1.2 Let $K$ be the boundary complex of the octahedron with vertices $\pm e_1,\pm e_2,\pm e_3$ and eight triangular faces, one for each choice of signs. Its realization is $\{x\in\mathbb R^3:|x_1|+|x_2|+|x_3|=1\}$: every listed triangular face satisfies the equation and every point of the $\ell^1$-sphere lies in such a face. The radial normalization $x\mapsto x/\|x\|_2$ maps this realization bijectively onto the unit sphere $S^2$, with inverse $u\mapsto u/(|u_1|+|u_2|+|u_3|)$; both maps are continuous, so by [F2] it is a homeomorphism. Deleting the subcomplex consisting of the single vertex $e_3$ identifies $|K|\setminus\{e_3\}$ with $S^2\setminus\{e_3\}$. [given, construct, algebra]

2.1 For $(a,b)\in\mathbb R^2$ put $s=a^2+b^2$ and map $(a,b)$ to $(2a,2b,s-1)/(s+1)$. Its squared Euclidean norm is $(4s+(s-1)^2)/(s+1)^2=(s+1)^2/(s+1)^2=1$, so the image lies on $S^2$, and its third coordinate $(s-1)/(s+1)$ is strictly less than $1$. The map $u\mapsto(u_1,u_2)/(1-u_3)$ is defined on $S^2\setminus\{e_3\}$ and is inverse to the previous formula by direct substitution; both are continuous. Composing with the identification $\mathbb C\cong\mathbb R^2$ and with step 1.2 gives a homeomorphism $\mathbb C\cong S^2\setminus\{e_3\}\cong|K|\setminus\{e_3\}$, a finite triangulation with one boundary vertex deleted; step 1.1 shows that deleting a boundary simplex is necessary for a noncompact space. [F2, step 1.1, step 1.2, algebra] ∎

## Remarks

- The example exhibits the deleted-boundary convention used by the finite triangulation statements of the companion page. It makes no claim about compactifications of higher-dimensional or singular varieties, and it does not assert that an arbitrary algebraic morphism becomes simplicial.
