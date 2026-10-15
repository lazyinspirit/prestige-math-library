---
id: lem-uncorrelated-jointly-gaussian-blocks-are-independent
kind: lemma
title: Uncorrelated jointly Gaussian blocks are independent
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-independent-random-elements-have-product-joint-law
  - lem-measurable-functions-preserve-independence
  - thm-rectangle-criterion-for-independent-random-elements
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 3.10"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "J. R. Norris, Probability and Measure, Sections 8.1–8.2"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Statement

Assume the Axiom of Choice. Let $(U,V)$ be a jointly multivariate-normal real
vector with finite-dimensional blocks $U\in\mathbb R^p$ and
$V\in\mathbb R^q$, where $p,q\ge1$. If $\operatorname{Cov}(U_i,V_j)=0$ for every
$1\le i\le p$ and $1\le j\le q$, then $U$ and $V$ are independent. The
covariance matrix may be singular.

## Facts & Assumptions

**Given:** AC, jointly multivariate-normal finite real vectors $U,V$ with
$p,q\ge1$, and zero
cross-covariance between every coordinate of $U$ and every coordinate of $V$.

[A1] The Axiom of Choice is assumed by the finite-dimensional Gaussian-law
construction and its uniqueness result. [[def-axiom-of-choice]]

[F1] A law $N_d(m,\Sigma)$ is determined by its scalar normal projections,
allows singular $\Sigma$, and has a realization $m+\Sigma^{1/2}W$ with
independent standard-normal coordinates. [[def-multivariate-normal-law]]

[F2] Every finite-dimensional positive-semidefinite operator has a unique
positive-semidefinite square root. [[thm-non-negative-square-root-exists-and-is-unique]]

[F3] A finite independent family of random elements has product joint law;
this gives independence of disjoint coordinate blocks of an independent
coordinate vector. [[thm-independent-random-elements-have-product-joint-law]]

[F4] Measurable functions applied separately to independent random elements
preserve their independence. [[lem-measurable-functions-preserve-independence]]

[F5] The characteristic function of a multivariate-normal vector is
$\exp(it^Tm-t^T\Sigma t/2)$ and uniquely determines its law, including for
singular covariance. [[lem-characteristic-function-of-a-multivariate-normal-law]]

[F6] Random elements are independent exactly when probabilities of all
measurable rectangles factor. [[thm-rectangle-criterion-for-independent-random-elements]]

## Proof

1.1 Write the mean and covariance of $(U,V)$ in block form as $(m_U,m_V)$ and $\Sigma=\operatorname{diag}(\Sigma_U,\Sigma_V)$; the off-diagonal blocks vanish by hypothesis and each diagonal block is positive semidefinite as a principal block of $\Sigma$. Let $A_U,A_V$ be their positive-semidefinite square roots and put $A=\operatorname{diag}(A_U,A_V)$. Then $A$ is positive semidefinite, $A^2=\Sigma$, and [F2] identifies it with the unique positive-semidefinite square root of $\Sigma$. [given, F2]

2.1 By [F1], the joint law has a realization $(m_U+A_UW_U,m_V+A_VW_V)$ with independent standard-normal coordinates in $W_U,W_V$. By [F3] the full coordinate vector has product law, so rectangles in the two coordinate blocks factor into their block marginals; [F6] gives block independence. Applying [F4] to the separate block-affine maps preserves independence. [A1, F1, F3, F4, F6, step 1.1]

3.1 The realization in step 2.1 and the original vector have the same multivariate-normal law by [F5]. Their joint and marginal rectangle probabilities therefore agree; the factorization established in step 2.1 transfers to the original pair, and [F6] gives independence. AC is used only through the Gaussian-law construction and uniqueness suppliers. [A1, F5, F6, step 2.1] ∎