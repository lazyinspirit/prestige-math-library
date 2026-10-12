---
id: ex-a-noncompact-algebraic-line-needs-a-deleted-boundary-triangulation
kind: example
title: A noncompact algebraic line needs a deleted boundary triangulation
status: draft
origin: session
deps: [prop-a-finite-simplicial-complex-has-compact-hausdorff-realization]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
---

## Example

The analytic complex affine line $\mathbb A^1(\mathbb C)=\mathbb C$ cannot be homeomorphic to the realization of a finite simplicial complex. It is homeomorphic to a finite triangulated compactification with one boundary vertex deleted. Thus “finite triangulation” for noncompact varieties must allow a deleted subcomplex or another equivalent noncompact finite-cell convention.

## Facts & Assumptions

**Given:** The usual analytic topology on $\mathbb C=\mathbb R^2$.

[F1] Realization of a finite simplicial complex is compact ([[prop-a-finite-simplicial-complex-has-compact-hausdorff-realization]]).

## Verification

1.1 The increasing open disks $\{z:|z|<n\}$ for positive integers $n$ cover $\mathbb C$ and have no finite subcover, since a finite union is contained in the largest of the finitely many disks. Hence $\mathbb C$ is not compact and cannot be a finite simplicial realization by [F1]. [F1, given]

1.2 Let $K$ be the boundary complex of the octahedron with vertices $\pm e_1,\pm e_2,\pm e_3$. Its realization is $\{x\in\mathbb R^3:|x_1|+|x_2|+|x_3|=1\}$; its eight triangular faces are specified by the three signs. Radial normalization $x\mapsto x/\|x\|_2$ maps it homeomorphically to $S^2$, with continuous inverse $u\mapsto u/(|u_1|+|u_2|+|u_3|)$. Delete the subcomplex consisting of the single vertex $e_3$. This identifies $|K|\setminus\{e_3\}$ with $S^2\setminus\{e_3\}$. [given, construct, algebra]

2.1 For $(a,b)\in\mathbb R^2$, set $s=a^2+b^2$ and map it to $(2a,2b,s-1)/(s+1)$. The squared Euclidean norm of the numerator is $4s+(s-1)^2=(s+1)^2$, so the image is on $S^2$; its third coordinate is strictly less than one. The inverse sends $u\in S^2\setminus\{e_3\}$ to $(u_1,u_2)/(1-u_3)$. The displayed formulas are continuous and inverse by substitution. Combined with step 1.2 this gives the claimed finite-pair model; step 1.1 explains why deleting its boundary vertex is necessary. [step 1.1, step 1.2, algebra] ∎
