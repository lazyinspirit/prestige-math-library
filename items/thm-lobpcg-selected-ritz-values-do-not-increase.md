---
id: thm-lobpcg-selected-ritz-values-do-not-increase
kind: theorem
title: "A successful LOBPCG Rayleigh-Ritz update cannot increase the selected Ritz values"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-block-lobpcg-with-rank-loss-status
  - lem-generalized-ritz-values-monotone-under-nested-subspaces
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
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §13.6"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
    - title: "Andrew Knyazev, Recent implementations, applications, and extensions of LOBPCG, §1"
      url: "https://arxiv.org/pdf/1708.08354"
---

## Statement

Let $A=A^*$ and $B=B^*>0$. Suppose one successful update of
[[alg-block-lobpcg-with-rank-loss-status]] starts from a $q$-dimensional
$B$-orthonormal block $X_k$ with selected Ritz values
$\theta_1(X_k)\le\cdots\le\theta_q(X_k)$. The update forms a trial space
$S_k=\operatorname{span}(X_k,W_k,D_k)$, retains the old block, and selects the
$q$ smallest generalized Ritz values on $S_k$. Then
$$\theta_j(X_{k+1})\le\theta_j(X_k)\qquad(1\le j\le q).$$
This assertion applies only to an update that reaches the Rayleigh-Ritz step;
the algorithm's `rank-loss` and `budget-exhausted` exits make no update claim.

## Facts & Assumptions

**Given:** One successful LOBPCG update for a Hermitian-definite pair, with the
old block retained in its trial space.

[F1] [[alg-block-lobpcg-with-rank-loss-status]]: the trial block is $Y_k=[X_k,W_k,D_k]$, so it retains $\operatorname{range}(X_k)$.

[F2] [[alg-block-lobpcg-with-rank-loss-status]]: a successful projected solve selects the $q$ smallest Ritz values on the full trial span and uses their Ritz vectors as $X_{k+1}$.

[L1] [[lem-generalized-ritz-values-monotone-under-nested-subspaces]]: if $S\subseteq T$, then $\theta_j(T)\le\theta_j(S)$ for each index available in $S$.

## Proof

**Proof technique:** direct.

1.1 On the successful branch, [F1] constructs $S_k$ with $\operatorname{range}(X_k)\subseteq S_k$, and [F2] sets the new block to the q smallest Ritz vectors on $S_k$. Hence $\theta_j(X_{k+1})=\theta_j(S_k)$ and $\theta_j(X_k)=\theta_j(\operatorname{range}(X_k))$. [given, F1, F2, algebra]

2.1 Apply [L1] to $\operatorname{range}(X_k)\subseteq S_k$. It gives $\theta_j(S_k)\le\theta_j(\operatorname{range}(X_k))$ for every $j\le q$; substituting the equalities from step 1.1 proves the claim. [L1, step 1.1, algebra] ∎
