---
id: thm-unramified-rankin-selberg-euler-factor-for-adjacent-ranks
kind: theorem
title: "Unramified Rankin–Selberg Euler Factor for Adjacent Ranks"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-unramified-satake-parameter-for-gln
  - def-standard-and-rankin-selberg-l-functions-on-gln
dependency_level: 5
sources:
  scraped: []
  references:
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §0"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lectures 2–3"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $K$ be a nonarchimedean local field of residue cardinality $q_v$, and let $n\geq1$. Let $\pi_v,\pi'_v$ be unramified local representation data of ranks $n+1,n$ with assigned unramified Weil–Deligne parameters $(r,N)$ and $(r',N')$ of dimensions $n+1$ and $n$. Thus $N=N'=0$ and inertia acts trivially. Let the Frobenius eigenvalue multisets be $\{\alpha_{1,v},\ldots,\alpha_{n+1,v}\}$ and $\{\beta_{1,v},\ldots,\beta_{n,v}\}$. This includes the original case of unramified local components of unitary cuspidal generic automorphic representations. Then the Rankin–Selberg local factor defined by the tensor Weil–Deligne parameter is

$$L_v(s,\pi_v\times\pi'_v)=\prod_{i=1}^{n+1}\prod_{j=1}^{n}(1-\alpha_{i,v}\beta_{j,v}q_v^{-s})^{-1}.$$

## Statement references

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §0](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lectures 2–3](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

## Facts & Assumptions

**Given:** Unramified local parameter data of ranks $n+1,n$ as in the Statement, with residue cardinality $q_v$ and Frobenius eigenvalues $\alpha_{i,v},\beta_{j,v}$. Prove the displayed determinant formula.

[F1] [[def-standard-and-rankin-selberg-l-functions-on-gln]]: the local Rankin–Selberg factor uses the tensor parameter $(r_{\pi_v}\otimes r_{\pi'_v},\,N_{\pi_v}\otimes1+1\otimes N_{\pi'_v})$.

[F2] [[def-standard-and-rankin-selberg-l-functions-on-gln]]: the local factor of a finite-dimensional parameter $(r,N)$ is the inverse determinant of $1-q_v^{-s}r(\mathrm{Fr}_v)$ on $(\ker N)^{I_v}$.

[F3] The given unramified parameters have zero monodromy and trivial inertia. Their specified Frobenius eigenvalues, with algebraic multiplicity, are the Satake parameters in the representation case of [[def-unramified-satake-parameter-for-gln]].

## Proof

1.1 By [F3], $N_{\pi_v}=N_{\pi'_v}=0$ and inertia acts trivially on both local parameters. By the tensor construction in [F1], the tensor parameter also has zero monodromy and trivial inertia, so the inverse determinant in [F2] is taken on the full tensor space. [given, F1, F2, F3]

2.1 Write $A=r_{\pi_v}(\mathrm{Fr}_v)$ and $B=r_{\pi'_v}(\mathrm{Fr}_v)$. Over $\mathbb C$, choose bases in which $A$ and $B$ are upper triangular. In the tensor-product basis, $A\otimes B$ is block upper triangular with diagonal entries $\alpha_{i,v}\beta_{j,v}$, counted with algebraic multiplicity. Hence the inverse determinant of $1-q_v^{-s}(A\otimes B)$ is the displayed product. [given, F1, F2, F3, step 1.1, choose, algebra] ∎

## Proof references

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §0](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

## Remarks

The assigned parameter data are hypotheses; existence of a local correspondence is not proved here. The proof uses only the determinant definition of the local factor; it does not evaluate a spherical Whittaker integral.
