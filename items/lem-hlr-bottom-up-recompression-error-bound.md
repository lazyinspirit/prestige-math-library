---
id: lem-hlr-bottom-up-recompression-error-bound
kind: lemma
title: "Bottom-up factor-sum recompression has the reported rank and Frobenius
  error bound"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - alg-hlr-bottom-up-recompression
  - alg-hlr-core-svd-recompression-with-tolerance
  - thm-hlr-core-svd-recompression-is-best-rank-tolerance
  - def-finite-tensor-arrays-and-frobenius-inner-product
  - thm-cauchy-schwarz-in-an-inner-product-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Steffen Börm, Lars Grasedyck, and Wolfgang Hackbusch, Hierarchical
        Matrices, MiS Lecture Note 21 (2003; revised June 2006), §§6.2, 7.1–7.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-2103.pdf"
    - title: "Ralf Hiptmair, AdvNumCSE Lecture Document, Chapter 2, “Local Low-Rank
        Compression of Non-Local Operators” (ETH Zürich, AT’23), §§2.4.2–2.4.3"
      url: "https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Use [[alg-hlr-bottom-up-recompression]] on a finite factor-sum tree for one admissible block over $\mathbb F\in\{\mathbb R,\mathbb C\}$, with exact arithmetic, rank cap $k\ge1$, node tolerances $\theta_v\ge0$, and $\sum_v\theta_v\le\delta_b$. Let $T_v$ be the subtree rooted at $v$, and let $M_v$ be the sum of its exact leaf contributions. Whenever all calls in $T_v$ succeed, the returned factors represent a matrix $\widehat M_v$ of rank at most $k$, and the reported bound satisfies
$$\|M_v-\widehat M_v\|_F\le e_v=\sum_{w\in T_v}\rho_w\le\sum_{w\in T_v}\theta_w.$$
In particular, if the routine succeeds at the root,
$$\operatorname{rank}(\widehat M_{\rm root})\le k,\qquad \|M_{\rm root}-\widehat M_{\rm root}\|_F\le e_{\rm root}=\sum_w\rho_w\le\sum_w\theta_w\le\delta_b.$$
Here $\rho_w$ is the exact discarded-tail norm returned at node $w$. A **tolerance-not-met** status at a node only means this chosen tree and these assigned local budgets did not produce the requested certificate; it does not assert that no rank-$k$ approximation of the exact full sum meets $\delta_b$.

## Facts & Assumptions

**Given:** A finite factor-sum tree for one admissible block, a cap $k$, nonnegative local tolerances, and exact arithmetic.

[F1] [[alg-hlr-core-svd-recompression-with-tolerance]]: on success, recompresses the supplied factor product and returns the exact discarded singular-value tail $\rho_v$ with $\rho_v\le\theta_v$.

[F2] [[thm-hlr-core-svd-recompression-is-best-rank-tolerance]]: the returned core-SVD factors represent the truncated singular expansion, and their Frobenius residual is exactly the reported tail $\rho_v$.

[F3] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: the Frobenius norm is the Euclidean norm of the finite list of matrix entries, with inner product $\langle X,Y\rangle_F=\sum_{i,j}\overline{X_{ij}}Y_{ij}$.

[F4] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle x,y\rangle|\le\|x\|\|y\|$ in a real or complex inner-product space; together with [F3] this gives the Frobenius triangle inequality.

## Proof

Every successful node call uses $k_b=\min(k,|\tau|,|\sigma|)$ and returns a truncated singular expansion of rank at most $k_b\le k$, by [F1] and [F2]. Clipping the cap changes no feasible matrix rank: every matrix of the block dimensions already has rank at most $\min(|\tau|,|\sigma|)$. The following two steps give the unchanged error induction.

1.1 At a leaf $v$, the routine compresses its exact contribution $M_v$; by [F1] and [F2], $\|M_v-\widehat M_v\|_F=\rho_v=e_v\le\theta_v$. [given, F1, F2]

2.1 Suppose $v$ is internal with children $v_1,v_2$. Their exact targets add to $M_v$, and their returned approximations add to the matrix $Z_v$ supplied to the core-SVD call. The Frobenius triangle inequality from [F3,F4] gives $\|M_v-Z_v\|_F\le e_{v_1}+e_{v_2}$. By [F1,F2], $\|Z_v-\widehat M_v\|_F=\rho_v$, hence $\|M_v-\widehat M_v\|_F\le e_{v_1}+e_{v_2}+\rho_v=e_v$. Step 1.1 is the leaf base case; induction over the finite tree proves the root error bound. The recurrence for $e_v$ gives $e_{\rm root}=\sum_{v\in T}\rho_v\le\sum_{v\in T}\theta_v\le\delta_b$. [given, F1, F2, F3, F4, step 1.1, induction, algebra] ∎
