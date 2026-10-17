---
id: lem-gapped-projector-map-well-defined
kind: lemma
title: A strict occupied gap defines a unique rank-r spectral projector
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-self-consistent-projector-response-map, def-rank-r-orthogonal-projector-domain, thm-complex-spectral-theorem-for-normal-endomorphisms]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Tosio Kato, Perturbation Theory for Linear Operators, 2nd ed., Chapter II §1.4
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/kato1.pdf
    - title: Benjamin Texier, Basic matrix perturbation theory, §2
      url: https://ems.press/content/serial-article-files/44369?nt=1
verification:
  precheck: pending
---

## Statement

For every $X\in U$ at which the response map of
[[def-self-consistent-projector-response-map]] has a strict $r$th gap,
$\Phi(X)$ is a uniquely defined member of $\mathcal P_r$. Degeneracies among
the first $r$ eigenvalues or among the remaining eigenvalues do not affect it.

## Facts & Assumptions
**Given:** A Hermitian matrix $F(X)$ with ordered eigenvalues $\lambda_1\le\cdots\le\lambda_n$ and $\lambda_r<\lambda_{r+1}$.

[F1] A finite-dimensional Hermitian matrix has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] The response-map definition selects the sum of eigenspaces belonging to the $r$ lowest eigenvalues ([[def-self-consistent-projector-response-map]]).

[L1] $\mathcal P_r=\{P=P^*:P^2=P,\operatorname{tr}P=r\}$ ([[def-rank-r-orthogonal-projector-domain]]).

## Proof


1.1 By [F1], choose an orthonormal eigenbasis $(u_1,\ldots,u_n)$ of $F(X)$ with the eigenvalues in the given order. The strict gap prevents an eigenspace for one eigenvalue from straddling positions $r$ and $r+1$, so the sum of the first $r$ eigenspaces is the span of exactly the first $r$ basis vectors. [given, F1, algebra]

2.1 Changing the orthonormal basis within a repeated eigenspace below the gap leaves that entire eigenspace in the sum; changing one within a repeated eigenspace above the gap leaves that entire eigenspace out. Thus the selected subspace does not depend on the eigenbasis chosen in step 1.1. Its orthogonal projector is $P=\sum_{j=1}^r u_ju_j^*$, which satisfies $P=P^*$, $P^2=P$, and $\operatorname{tr}P=r$. [step 1.1, F1, F2, L1, algebra]

3.1 The operator in step 2.1 is independent of all allowed basis choices, lies in $\mathcal P_r$ by [L1], and is exactly the map specified by [F2]. Hence it is the unique rank-$r$ occupied spectral projector. [step 2.1, F2, L1] ∎
