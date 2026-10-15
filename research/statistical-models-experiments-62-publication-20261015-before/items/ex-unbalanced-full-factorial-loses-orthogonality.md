---
id: ex-unbalanced-full-factorial-loses-orthogonality
kind: example
title: "Unequal replication removes factorial-column orthogonality"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-two-level-full-factorial-design
  - def-orthogonal-vectors-sets-and-orthonormal-bases
  - prop-standard-coordinate-inner-products
  - thm-full-two-level-factorial-contrast-orthogonality
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Take the two-factor run set $\{(−1,−1),(+1,−1),(−1,+1),(+1,+1)\}$ and replicate the $(−1,−1)$ run twice, with each other run observed once. All four treatment combinations are present, but the intercept and first-factor columns have inner product $−1$ in the five-row design matrix. Thus unequal replication loses orthogonality even though it does not make the four coefficient directions linearly dependent.

## Facts & Assumptions

[F1] [[def-two-level-full-factorial-design]]: for two factors the full run set contains all four sign pairs, and the columns are $1$, $x_1$, $x_2$, and $x_1x_2$.

[F2] [[prop-standard-coordinate-inner-products]]: the real coordinate inner product is the sum of coordinatewise products.

[F3] [[def-orthogonal-vectors-sets-and-orthonormal-bases]]: two columns are orthogonal exactly when their inner product is zero.

[F4] [[thm-full-two-level-factorial-contrast-orthogonality]]: with one copy of each run, the four columns satisfy $X^{\mathsf T}X=4I_4$.

## Verification

**Given:** The four run combinations in [F1], with multiplicities $2,1,1,1$ in the order shown in the Example. Verify loss of orthogonality and retained full rank.

1.1 The intercept column is $1$ in each row, while the first-factor column takes values $−1,−1,+1,−1,+1$ in the five-row design. By [F2], their inner product is $−1−1+1−1+1=−1$. [given, F1, F2, algebra]

2.1 By [F3], orthogonality requires a zero inner product, so step 1.1 shows these columns are not orthogonal. The same four distinct rows, before the extra replicate, still occur, so any vector in the kernel of the five-row matrix lies in the kernel of the original four-row matrix. [F3, step 1.1]

3.1 If $b$ is in that kernel, the original four-row matrix $X$ satisfies $Xb=0$. Then $0=b^{\mathsf T}X^{\mathsf T}Xb=4b^{\mathsf T}b$ by [F4], so $b=0$. Thus the five-row matrix has full column rank: unequal replication removes orthogonality here but not estimability of these four coefficients. [F4, step 2.1, algebra] ∎

