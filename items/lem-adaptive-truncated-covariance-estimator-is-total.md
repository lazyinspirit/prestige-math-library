---
id: lem-adaptive-truncated-covariance-estimator-is-total
kind: lemma
title: The adaptive truncated covariance procedure is well-defined on its declared domain
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - alg-adaptive-truncated-covariance-estimator
  - lem-measurable-minimum-norm-geometric-median-selection
  - def-countable-choice
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - cor-weierstrass-approximation-on-a-closed-interval
  - thm-of-archimedean
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: Countable Choice is inherited only through the geometric-median pilot. The scale grid and smallest-index rule use least-natural-number selection.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Stanislav Minsker and Xiaohan Wei, Estimation of the Covariance Structure of Heavy-Tailed Distributions, §2"
      url: "https://arxiv.org/pdf/1708.00502"
dependency_level: 3
---

## Statement

On the input domain in [[alg-adaptive-truncated-covariance-estimator]], the
adaptive truncated covariance procedure is total and Borel measurable as a
function of the sample.

## Facts & Assumptions

**Given:** A finite sample in $\mathbb R^p$, $\beta>1$, and positive finite
scale bounds with the algorithm's declared block-count condition.

[F1] [[alg-adaptive-truncated-covariance-estimator]] specifies a finite
block partition, the geometric-median pilot, spectral truncation, a finite
scale grid, and a least-index selection rule.

[F2] [[lem-measurable-minimum-norm-geometric-median-selection]]: the
geometric median pilot is a Borel function of its block means.

[F3] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: real
symmetric matrices admit orthonormal eigenbases, so the scalar truncation
defines a basis-independent matrix function.

[F4] [[cor-weierstrass-approximation-on-a-closed-interval]]: every
continuous scalar function on a compact real interval is uniformly
approximable by polynomials.

[F5] [[thm-of-archimedean]]: every finite real number is smaller than some
natural number.

## Proof

1.1 The integer $k=\lfloor3.5\beta\rfloor+1$ satisfies $1\le k\le m/2$ on the declared domain. The deterministic balanced partition therefore has $k$ nonempty blocks, and each block mean is a continuous linear function of the sample. By [F2], applying the minimum-norm geometric median gives a single-valued Borel pilot. [F1, F2, algebra]

1.2 For each finite symmetric matrix, [F3] defines its spectral truncation independently of the eigenbasis. To check continuity in the matrix, let $A_n\to A$ be symmetric and choose $R$ larger than all their operator norms. By [F4], approximate the scalar clipping function uniformly on $[-R,R]$ by a polynomial $q$ within $\eta>0$. Spectral diagonalization [F3] gives $\|\psi(B)-q(B)\|_{\rm op}\le\eta$ for $B=A,A_n$; polynomial evaluation is continuous in matrix entries, so $q(A_n)\to q(A)$. Hence $\limsup_n\|\psi(A_n)-\psi(A)\|_{\rm op}\le2\eta$, and letting $\eta\downarrow0$ proves continuity. Each $\theta_j$ is positive and finite. The grid consists exactly of integers $0\le j<L$, where $L=\log_2(2\sigma_{\max}/\sigma_{\min})\ge1$; it is finite by [F5] and nonempty since $j=0$ belongs to it. [F1, F3, F4, F5, algebra]

2.1 The largest grid index satisfies the agreement rule vacuously, so the set of admissible indices is nonempty and has a least element $j^*$. For each fixed pair of indices, the matrix difference is Borel in the sample: the pilot is Borel by step 1.1 and the remaining finite matrix operations and truncation are continuous by step 1.2. Its operator norm is Borel as the composition with a continuous norm. Therefore the event that a given index satisfies all finitely many comparisons is Borel; taking the least among finitely many such indices is a Borel rule. The output is thus defined and Borel on the whole declared domain. [F1, step 1.1, step 1.2, algebra] ∎
