---
id: thm-full-rank-sensitivity-implies-local-identifiability
kind: theorem
title: "Full column rank of the sensitivity Jacobian implies local identifiability"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-nonlinear-experimental-design-and-local-identifiability
  - def-row-space-column-space-nullspace-and-matrix-ranks
  - lem-matrix-rank-detected-by-nonzero-minors
  - thm-chain-rule-for-total-derivatives
  - thm-dimension-of-a-linear-subspace
  - thm-euclidean-inverse-function-theorem
  - thm-real-square-matrix-invertible-iff-determinant-nonzero
  - thm-row-rank-equals-column-rank
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "J. Lebl, Basic Analysis II, Theorem 8.5.1"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
      locator: "Full section on the Euclidean inverse function theorem read; its C1 hypotheses and local inverse conclusion match the selected square coordinate map."
    - title: "Leah R. McLean et al., Estimability Analysis and Optimal Design in Dynamic Multi-scale Models of Cardiac Electrophysiology, §2.1"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4906545/"
      locator: "Full article and §2.1 read; it distinguishes local identifiability from global identifiability and the linearized rank test."
---

## Statement

Let $\Theta\subseteq\mathbb R^p$ be open with $p\ge1$, let $F_\xi:\Theta\to\mathbb R^m$ be the joint observation map of [[def-nonlinear-experimental-design-and-local-identifiability]], and fix $\theta_0\in\Theta$. If its Jacobian $J_\xi(\theta_0)$ has full column rank, then $F_\xi$ is injective on an open neighborhood of $\theta_0$; hence the model is locally identifiable at $\theta_0$ for this design.

## Facts & Assumptions

**Given:** The open parameter domain, the $C^1$ joint observation map, and full column rank of $J_\xi(\theta_0)$.

[F1] [[def-nonlinear-experimental-design-and-local-identifiability]]: the finite stacked observation map $F_\xi$ is $C^1$ with derivative $J_\xi$; local identifiability means injectivity on some open neighborhood, and full column rank means the Jacobian has $p$ linearly independent columns.

[F2] [[def-row-space-column-space-nullspace-and-matrix-ranks]] and [[thm-row-rank-equals-column-rank]]: the rank of a finite matrix is the dimension of its column space.

[F3] [[thm-dimension-of-a-linear-subspace]]: a linearly independent list in $\mathbb R^m$ has length at most $m$.

[F4] [[lem-matrix-rank-detected-by-nonzero-minors]]: a real matrix has rank at least $p$ exactly when it has a nonzero $p$-rowed minor.

[F5] [[thm-real-square-matrix-invertible-iff-determinant-nonzero]]: a positive-sized square real matrix with nonzero determinant is invertible.

[F6] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition is the composition of the derivatives.

[F7] [[thm-euclidean-inverse-function-theorem]]: a $C^1$ map between open subsets of $\mathbb R^p$ with invertible derivative at $\theta_0$ is injective on some open neighborhood of $\theta_0$.

## Proof

**Proof technique:** direct.

1.1 Full column rank means the $p$ columns of $J_\xi(\theta_0)$ are independent. They lie in $\mathbb R^m$, so [F3] gives $p\le m$. By [F2] the matrix rank is $p$, and [F4] supplies a set $I$ of $p$ rows whose square submatrix $B=J_\xi(\theta_0)[I,:]$ has nonzero determinant. [F1, F2, F3, F4, given]

2.1 By [F5], $B$ is invertible. Let $P_I:\mathbb R^m\to\mathbb R^p$ be the coordinate projection onto the rows in $I$, and set $G=P_I\circ F_\xi$. The linear map $P_I$ has derivative $P_I$, since its linear first-order expansion has zero remainder. Thus [F1] and [F6] give $DG(\theta)=P_IJ_\xi(\theta)$ for every $\theta\in\Theta$; this derivative is continuous, so $G$ is $C^1$, and $DG(\theta_0)=P_IJ_\xi(\theta_0)=B$. [step 1.1, F1, F5, F6, construct, algebra]

3.1 Apply [F7] to $G$: there is an open neighborhood $V\subseteq\Theta$ of $\theta_0$ on which $G$ is injective. If $\theta,\theta'\in V$ satisfy $F_\xi(\theta)=F_\xi(\theta')$, then applying $P_I$ gives $G(\theta)=G(\theta')$, hence $\theta=\theta'$. Thus $F_\xi$ is injective on $V$, which is local identifiability by [F1]. The argument selects one of finitely many row minors and uses no choice axiom. [step 2.1, F1, F7, algebra] ∎
