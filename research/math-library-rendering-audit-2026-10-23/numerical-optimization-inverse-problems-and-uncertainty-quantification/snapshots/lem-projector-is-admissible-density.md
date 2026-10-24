---
id: lem-projector-is-admissible-density
kind: lemma
title: Every rank-r orthogonal projector is an admissible density
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-admissible-hermitian-density-domain, def-rank-r-orthogonal-projector-domain, thm-complex-spectral-theorem-for-normal-endomorphisms]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eric Cancès, Gaspard Kemlin, and Antoine Levitt, Convergence analysis of direct minimization and self-consistent iterations, §2.1
      url: https://arxiv.org/pdf/2004.09088
    - title: Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, §2.1
      url: https://www.numdam.org/item/M2AN_2000__34_4_749_0.pdf
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Every $P\in\mathcal P_r$ belongs to the admissible density domain
$\mathcal D_r$.

## Facts & Assumptions
**Given:** $P\in\mathbb H_n$ satisfies $P=P^*$, $P^2=P$, and $\operatorname{tr}P=r$, where $1\le r<n$.

[F1] The rank-$r$ projector set is $\mathcal P_r=\{P=P^*:P^2=P,\operatorname{tr}P=r\}$ ([[def-rank-r-orthogonal-projector-domain]]).

[F2] A finite-dimensional Hermitian matrix has an orthonormal eigenbasis and real eigenvalues ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F3] The admissible domain consists of Hermitian positive contractions of trace $r$ ([[def-admissible-hermitian-density-domain]]).

## Proof


1.1 By [F2], choose a unitary eigenbasis of $P$ with real eigenvalues $\mu_j$. From $P^2=P$, each satisfies $\mu_j^2=\mu_j$, hence $\mu_j\in\{0,1\}$. Therefore every eigenvalue lies between $0$ and $1$, so for each $x$ the quadratic forms $x^*Px$ and $x^*(I-P)x$ are nonnegative. [given, F1, F2, algebra]

2.1 The matrix $P$ is Hermitian and has trace $r$ by [F1]; step 1.1 gives $0\preceq P\preceq I$. These are exactly the conditions in [F3], so $P\in\mathcal D_r$. [step 1.1, F1, F3] ∎
