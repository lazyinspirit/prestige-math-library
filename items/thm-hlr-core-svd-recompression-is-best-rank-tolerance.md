---
id: thm-hlr-core-svd-recompression-is-best-rank-tolerance
kind: theorem
title: "Core-SVD recompression is best at the declared Frobenius tolerance"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - alg-hlr-core-svd-recompression-with-tolerance
  - def-finite-tensor-arrays-and-frobenius-inner-product
  - thm-best-rank-k-frobenius-matrix-approximation
  - thm-singular-value-decomposition
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical
        Matrices, MiS Lecture Note 21 (2003; revised June 2006), §§7.1–7.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank
        Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.4.2, Theorem
        2.4.2.6"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $M=\sum_s U_sV_s^*$ be the finite matrix input to [[alg-hlr-core-svd-recompression-with-tolerance]], and let $k$ and $\delta\ge0$ be its rank cap and Frobenius tolerance. If the algorithm returns **success** with rank $q$, its returned matrix $\widehat M$ has rank $q$ and satisfies $\|M-\widehat M\|_F=(\sum_{j>q}s_j(M)^2)^{1/2}\le\delta$. No lower-rank matrix meets the same tolerance. If the algorithm returns **tolerance-not-met**, no matrix of rank at most $k$ meets the tolerance.

## Facts & Assumptions

**Given:** Finite real or complex factor matrices $U_s,V_s$, their represented matrix $M$, an integer rank cap $k$, a tolerance $\delta\ge0$, and the procedure and status returned by [[alg-hlr-core-svd-recompression-with-tolerance]].

[F1] [[alg-hlr-core-svd-recompression-with-tolerance]]: the procedure forms $C=R_UR_V^*$ from compact SVDs of the concatenated factors, takes an SVD of $C$, selects the smallest $q\le k$ whose discarded singular-value tail is at most $\delta$, and reports that tail as $e_q$.

[F2] [[thm-singular-value-decomposition]]: every finite real or complex matrix has an SVD with orthonormal left and right singular vectors and nonnegative singular values.

[F3] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: matrix rank is the dimension of the column image, the Frobenius norm is the square root of the sum of squared entry moduli, and $M^*$ is the conjugate transpose.

[F4] [[thm-best-rank-k-frobenius-matrix-approximation]]: the rank-at-most-$r$ truncated SVD has Frobenius error equal to the square root of the discarded squared singular values, and every rank-at-most-$r$ matrix has at least that error.

## Proof

1.1 The compact SVDs in [F1] give $U=Q_UR_U$ and $V=Q_VR_V$ with orthonormal columns in $Q_U,Q_V$. Hence $M=Q_U(R_UR_V^*)Q_V^*=Q_UCQ_V^*$. If $C=P\Sigma Q^*$ is its SVD, then $M=(Q_UP)\Sigma(Q_VQ)^*$; both outer factors have orthonormal columns, so completing them by orthonormal bases gives an SVD of $M$. Thus the core and $M$ have the same positive singular values. [F1, F2, F3, algebra]

2.1 On success, the output factors in [F1] form the rank-$q$ truncation of the lifted SVD in step 1.1. Its retained singular values are positive and their singular vectors are orthonormal, so its rank is exactly $q$. Applying [F4] gives $\|M-\widehat M\|_F=(\sum_{j>q}s_j(M)^2)^{1/2}\le\delta$. By the minimal choice in [F1], every smaller $r<q$ has discarded tail greater than $\delta$; [F4] then rules out every rank-at-most-$r$ approximation meeting the tolerance. If the algorithm fails, then $k<t$ and the tail at $k$ is greater than $\delta$ (otherwise $q=k$ would pass); [F4] rules out every rank-at-most-$k$ approximation. This includes $q=0$, $k=0$, zero factors, and repeated singular values. [F1, F2, F3, F4, step 1.1, algebra] ∎
