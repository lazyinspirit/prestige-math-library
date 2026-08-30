---
id: thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound
kind: theorem
title: "In the standard real floating-point model, computed pivoted LU is a nearby factorisation with a pivot-growth dependent backward bound"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity, def-permutation-matrix-partial-pivoting-and-pivot-growth, def-standard-relative-floating-point-model-and-unit-roundoff, lem-product-of-one-plus-deltas-gives-theta-n, thm-floating-point-dot-product-componentwise-and-normwise-error-bounds]
aliases: []
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 2.6.4"
      url: "https://fncbook.com/pivoting/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Beyond linear solves + using structure"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-13.html"
---

## Statement

Let $A\in M_n(\mathbb R)$ with $n\ge 1$, and suppose
Gaussian elimination with partial pivoting is carried out in the standard
relative floating-point model with unit roundoff $u$, with every intermediate
division, product, and sum in range. Let the computed factors satisfy

$$\widehat P A \approx \widehat L\widehat U,$$
where $\widehat P$ is a permutation matrix, $\widehat L$ is unit lower triangular, and $\widehat U$ is upper triangular. Then there exists a matrix $\Delta A$ such that
$$\widehat P(A+\Delta A)=\widehat L\widehat U,$$
and
$$|\Delta A|\le \gamma_n\,\widehat P^{\mathsf T}(|\widehat L|\,|\widehat U|)$$
entrywise, where $\gamma_n=nu/(1-nu)$. If $\rho(A)$ is the pivot-growth factor of [[def-permutation-matrix-partial-pivoting-and-pivot-growth]], then
$$\|\Delta A\|_\infty\le n^2\gamma_n\,\rho(A)\,\max_{p,q}|a_{pq}|.$$

## Facts & Assumptions

**Given:** A matrix $A\in M_n(\mathbb R)$, the standard relative floating-point model with unit roundoff $u$ and $nu<1$, and computed partial-pivoted factors $\widehat P,\widehat L,\widehat U$ with all intermediate operations in range.

[L1] Partial pivoting produces a permutation matrix and multipliers $|\widehat\ell_{ik}|\le 1$ below the diagonal ([[thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity]], [[def-permutation-matrix-partial-pivoting-and-pivot-growth]]).

[L2] The floating-point model represents each in-range arithmetic operation by a relative perturbation bounded by $u$ ([[def-standard-relative-floating-point-model-and-unit-roundoff]]).

[L3] Products of factors $(1+\delta)$ with $|\delta|\le u$ collapse to $1+\theta$ with $|\theta|\le \gamma_n$ ([[lem-product-of-one-plus-deltas-gives-theta-n]]).

[L4] A floating-point dot product of length at most $n$ equals the exact dot product of componentwise perturbed summands with relative perturbations bounded by $\gamma_n$ ([[thm-floating-point-dot-product-componentwise-and-normwise-error-bounds]]).

## Proof

**Proof technique:** collect the local elimination residuals into one backward perturbation.

1.1 In exact arithmetic, each computed upper-triangular entry satisfies a formula of the form $$ \widehat u_{ij}=\operatorname{fl}\left((\widehat P A)_{ij}-\sum_{k<i}\widehat \ell_{ik}\widehat u_{kj}\right), $$ and each computed strict-lower entry satisfies $$ \widehat \ell_{ij}=\operatorname{fl}\left(\frac{(\widehat P A)_{ij}-\sum_{k<j} \widehat \ell_{ik}\widehat u_{kj}}{\widehat u_{jj}}\right). $$ By [L2]-[L4], each such floating-point combination is the exact relation for a perturbed entry of $\widehat P A$, with perturbation bounded by $\gamma_n$ times the corresponding dot-product sum. Collecting those entrywise perturbations into a matrix $E$ gives $$\widehat P A + E = \widehat L\widehat U$$ and $$|E_{ij}|\le \gamma_n\sum_{k\le \min(i,j)}|\widehat \ell_{ik}|\,|\widehat u_{kj}|.$$ [L2, L3, L4, algebra]

2.1 Set $\Delta A:=\widehat P^{\mathsf T}E$. Because $\widehat P$ is a permutation matrix, $$|\Delta A|=\widehat P^{\mathsf T}|E|\le \gamma_n\,\widehat P^{\mathsf T}(|\widehat L|\,|\widehat U|)$$ by step 1.1. Multiplying the identity of step 1.1 by $\widehat P^{\mathsf T}$ on the left gives $$\widehat P(A+\Delta A)=\widehat L\widehat U,$$ which is the nearby-factorisation statement. [step 1.1, L1, algebra]

2.2 By [L1], every row of $|\widehat L|$ has one diagonal $1$ and at most $n-1$ strict-lower entries of modulus at most $1$, so its row sum is at most $n$. Every entry of $\widehat U$ is bounded by $\rho(A)\max_{p,q}|a_{pq}|$ from the definition of pivot growth. Therefore each row sum of $|\widehat L||\widehat U|$ is at most $n^2\rho(A)\max_{p,q}|a_{pq}|$, and step 1.1 yields $$\|E\|_\infty\le n^2\gamma_n\rho(A)\max_{p,q}|a_{pq}|.$$ Because row permutations preserve the infinity norm, the same bound holds for $\Delta A$. [step 1.1, L1, algebra]

3.1 Step 2.1 proves the backward-error identity, and step 2.2 gives the pivot-growth dependent bound. [step 2.1, step 2.2] ∎
