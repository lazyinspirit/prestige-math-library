---
id: ex-hlr-accumulated-truncation-can-destroy-positive-definiteness
kind: example
title: "Two accepted local truncations can destroy positive definiteness after
  accumulation"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - alg-hlr-core-svd-recompression-with-tolerance
  - thm-hlr-core-svd-recompression-is-best-rank-tolerance
  - def-finite-tensor-arrays-and-frobenius-inner-product
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank
        Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.4.5"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Let $e_2=(0,1)^{\mathsf T}$, $M=\operatorname{diag}(1,-1/50)$, and $D_1=D_2=(3/50)e_2e_2^*$. The exact sum $A=M+D_1+D_2=\operatorname{diag}(1,1/10)$ is positive definite. If each rank-one update is separately recompressed to rank zero with tolerance $\delta=3/50$ before assembly, both local truncations are accepted and the assembled approximation is $M$, which is indefinite. Each local error $3/50$ is below the smaller diagonal coefficient $1/10$ of $A$. The example concerns truncation of low-rank updates before their sum is assembled; it does not claim that every SVD truncation of a completed positive-definite H-matrix destroys positivity.

## Facts & Assumptions

**Given:** The matrices $M,D_1,D_2$, tolerance $\delta=3/50$, and rank cap $k=0$ for the two update compressions.

[F1] [[alg-hlr-core-svd-recompression-with-tolerance]]: the procedure accepts a rank-zero output when the discarded singular-value tail is at most $\delta$.

[F2] [[thm-hlr-core-svd-recompression-is-best-rank-tolerance]]: the returned rank-zero approximation has Frobenius error exactly its discarded singular-value tail.

[F3] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: the Frobenius norm is computed from the squared moduli of all matrix entries.

## Verification

1.1 The exact sum is $A=\operatorname{diag}(1,-1/50+3/50+3/50)=\operatorname{diag}(1,1/10)$. For every nonzero $z=(z_1,z_2)^{\mathsf T}$, $z^*Az=|z_1|^2+(1/10)|z_2|^2>0$, so $A$ is positive definite. [given, algebra]

1.2 Each $D_i$ has rank one and its only positive singular value is $3/50$, so its rank-zero discarded tail and Frobenius error are both $3/50=\delta$ by [F3]. Thus [F1] accepts each update as zero, and [F2] gives its exact local error. [given, F1, F2, F3, algebra]

2.1 After both updates are replaced by zero, the sum is $M$. Its quadratic form at $e_2$ is $e_2^*Me_2=-1/50<0$, so it is not positive definite. The accumulated perturbation is $D_1+D_2=(3/25)e_2e_2^*$, whose action in this direction exceeds either local error; hence the two separate local tolerances do not preserve definiteness of the assembled sum. [given, step 1.1, step 1.2, algebra] ∎
