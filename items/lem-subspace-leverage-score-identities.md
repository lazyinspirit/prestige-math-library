---
id: lem-subspace-leverage-score-identities
kind: lemma
title: Leverage scores are basis-independent and sum to the dimension
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings
dependency_level: 1
deps:
  - def-subspace-leverage-scores
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra,
        §2.4"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Michael W. Mahoney, Randomized Algorithms for Matrices and Data, §4.1"
      url: "https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $U\subseteq\mathbb K^n$ have dimension $d\ge1$, where
$\mathbb K\in\{\mathbb R,\mathbb C\}$. For any orthonormal basis matrix
$Q\in\mathbb K^{n\times d}$, let $\ell_i=\|e_i^*Q\|_2^2$. Then
these values are independent of the chosen orthonormal basis, satisfy
$0\le\ell_i\le1$ and $\sum_{i=0}^{n-1}\ell_i=d$, and $\ell_i=0$
exactly when the $i$-th row of $Q$ is zero.

## Facts & Assumptions

**Given:** A finite-dimensional subspace $U\subseteq\mathbb K^n$ of positive dimension and an orthonormal basis matrix $Q$.

[F1] The leverage score is $\ell_i(U)=\|e_i^*Q\|_2^2$ for an orthonormal basis matrix $Q$ ([[def-subspace-leverage-scores]]).

[F2] The columns of $Q$ are orthonormal, so $Q^*Q=I_d$ ([[def-subspace-leverage-scores]]).

## Proof

**Given:** The hypotheses in the Statement.

1.1 Let $Q'$ be another orthonormal basis matrix of $U$, and set $W=Q^*Q'$. Since each column of $Q'$ lies in $U=\operatorname{Ran}(Q)$, the orthogonal projection $QQ^*$ fixes it, so $Q'=QQ^*Q'=QW$. Thus $W^*W=Q'^*QQ^*Q'=Q'^*Q'=I_d$. The square matrix $W$ is unitary, and right multiplication by $W$ preserves the Euclidean norm of every row; hence $\|e_i^*Q'\|_2^2=\|e_i^*Q\|_2^2$ for every $i$. [F1, F2, algebra]

1.2 Writing $q_j$ for column $j$ of $Q$, finite-sum reordering gives $\sum_{i=0}^{n-1}\ell_i=\sum_i\sum_{j=0}^{d-1}|Q_{ij}|^2=\sum_j\|q_j\|_2^2=d$, because every column is a unit vector. [F1, F2, algebra]

2.1 Put $P=QQ^*$. Then $P=P^*$ and $P^2=P$ by [F2], so $e_i=Pe_i+(I-P)e_i$ is an orthogonal decomposition. Also $\ell_i=\|Q^*e_i\|_2^2=\|QQ^*e_i\|_2^2=\|Pe_i\|_2^2$, using $Q^*Q=I_d$. Therefore $0\le\ell_i\le\|e_i\|_2^2=1$, and $\ell_i=0$ exactly when $Q^*e_i=0$, which is exactly when row $i$ of $Q$ is zero. [F1, F2, algebra] ∎
