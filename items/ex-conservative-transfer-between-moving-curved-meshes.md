---
id: ex-conservative-transfer-between-moving-curved-meshes
kind: example
title: "Opposite diagonals conserve mass under a curved shear"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-curved-domain-geometry-approximation
  - def-intersection-volume-conservative-remapping
  - thm-overlap-remap-l2-projection-conservation-positivity
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Devon Powell and Tom Abel, An exact general remeshing scheme applied to physically conservative voxelization"
      url: https://arxiv.org/pdf/1412.4941
    - title: "Zhengru Zhang, Moving Mesh Method with Conservative Interpolation Based on L2-Projection, Commun. Comput. Phys. 1 (2006), 930–944"
      url: https://www.global-sci.com/cicp/article/view/5434
verification:
  precheck: pass
---

## Example

Assume Countable Choice. Map $[-1,1]^2$ by the area-preserving shear $\Phi(x,y)=(x,y+x^2/4)$. Triangulate the square once along the southwest-to-northeast diagonal and once along the other diagonal; map both meshes by the same $\Phi$. Every source-target overlap has area $1$. If the source cell values are $2$ and $0$, each target average is $1$, source and target total mass are both $4$, and all target values remain nonnegative.

## Facts & Assumptions

**Given:** Countable Choice; the square, the shear $\Phi(x,y)=(x,y+x^2/4)$, opposite-diagonal triangulations, and source values $2,0$.

[F1] [[def-curved-domain-geometry-approximation]]: geometry maps carry a Jacobian and define the physical image domain.

[F2] [[def-intersection-volume-conservative-remapping]]: under Countable Choice, target values are exact overlap-weighted averages.

[F3] [[thm-overlap-remap-l2-projection-conservation-positivity]]: assuming Countable Choice, exact overlap remapping conserves mass and preserves nonnegativity.

[F4] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under Countable Choice, a $C^1$ diffeomorphism changes variables with its positive Jacobian.

[A1] Countable Choice is used through [F2], [F3], and [F4] ([[def-countable-choice]]).

## Verification

1.1 The shear is a global $C^1$ diffeomorphism with inverse $(X,Y)\mapsto(X,Y-X^2/4)$ and derivative $\begin{pmatrix}1&0\\x/2&1\end{pmatrix}$ of determinant $1$. Apply [F4] to each overlap to see that its physical area equals the reference overlap area. In the reference square, the two diagonals meet at the center; the two diagonals divide the square into four corner triangles, each with base $2$ along a side and altitude $1$ to the center, so each nonempty source-target overlap has area $1$. [F1, F4, A1, given, algebra]

2.1 Each target triangle has area $2$ and receives source mass $2(1)+0(1)=2$, so its target average is $1$. The source mass is $2\cdot2+0\cdot2=4$, and target mass is $2(1)+2(1)=4$. [F2, F3, step 1.1, algebra]

3.1 The exact remap therefore has source values $(2,0)$, four nonempty overlaps of area $1$, target cell areas $2$, and target averages $(1,1)$. This explicitly verifies the remap formula. [F2, step 2.1] ∎
