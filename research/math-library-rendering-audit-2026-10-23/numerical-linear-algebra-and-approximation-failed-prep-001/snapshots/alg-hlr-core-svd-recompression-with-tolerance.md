---
id: alg-hlr-core-svd-recompression-with-tolerance
kind: algorithm
title: "Core-SVD recompression with rank and error tolerances"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-finite-tensor-arrays-and-frobenius-inner-product
  - thm-singular-value-decomposition
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical Matrices, MiS Lecture Note 21 (2003; revised June 2006), §§7.1–7.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank Compression of Non-Local Operators” (ETH Zürich, AT’23), §2.4.2"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
---

## Definition

**Input:** A field $\mathbb F\in\{\mathbb R,\mathbb C\}$, positive integers $m,n$, a finite factor list $U_s\in\mathbb F^{m\times r_s}$ and $V_s\in\mathbb F^{n\times r_s}$ representing $M=\sum_s U_sV_s^*$, a rank cap $0\le k\le\min(m,n)$, and a Frobenius tolerance $\delta\ge0$. The conjugate transpose $M^*$ and Frobenius norm are those of [[def-finite-tensor-arrays-and-frobenius-inner-product]].

**Procedure:** Concatenate the factors as $U=[U_1\ \cdots\ U_p]$ and $V=[V_1\ \cdots\ V_p]$, so $M=UV^*$. Take compact singular value decompositions $U=Q_UR_U$ and $V=Q_VR_V$, where the columns of $Q_U,Q_V$ are orthonormal and span the respective column spaces. Form the core $C=R_UR_V^*$ and compute an SVD $C=P\Sigma Q^*$. Let its positive singular values be $s_1\ge\cdots\ge s_t>0$. Find the smallest $q\in\{0,\ldots,\min(k,t)\}$ for which $e_q:=(\sum_{j>q}s_j^2)^{1/2}\le\delta$. If no such $q$ exists, return **tolerance-not-met**. Otherwise return **success** with factors $\widehat U=Q_UP_{[:,1:q]}\Sigma_q$ and $\widehat V=Q_VQ_{[:,1:q]}$, where $\Sigma_q=\operatorname{diag}(s_1,\ldots,s_q)$, and the exact discarded-tail certificate $e_q$; when $q=0$, use empty $m\times0$ and $n\times0$ factors.

The compact decompositions retain only positive singular directions. If the factor list is empty or its represented matrix is zero, then $t=0$ and the procedure returns the rank-zero representation because $\delta\ge0$. Any SVD choices in repeated singular subspaces are permitted. No result is returned when the requested cap cannot certify the tolerance.
