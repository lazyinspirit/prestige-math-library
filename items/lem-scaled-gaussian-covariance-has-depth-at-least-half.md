---
id: lem-scaled-gaussian-covariance-has-depth-at-least-half
kind: lemma
title: The scaled Gaussian covariance has matrix depth at least one half
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-matrix-depth-covariance-estimator
  - lem-matrix-depth-gaussian-scale-constant-exists-uniquely
  - def-huber-covariance-model
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: AC is inherited through the finite-dimensional Gaussian-law supplier. The one-dimensional probability calculation is choice-free.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, Proposition 3.1"
      url: "https://arxiv.org/pdf/1506.00691"
dependency_level: 4
---

## Statement

Let $\Sigma\succeq0$, let $U\subseteq S^{p-1}$ be nonempty, and let
$N_p(0,\Sigma)$ be its centered Gaussian law. If $\beta$ is the unique
positive constant satisfying $\Phi(\sqrt\beta)=3/4$, then
$$D_U(\beta\Sigma,N_p(0,\Sigma))\ge\frac12.$$
Equality holds for every direction with positive variance; when $\Sigma=0$
the depth is $1$.

## Facts & Assumptions

**Given:** A positive semidefinite covariance matrix $\Sigma$, a nonempty
direction set $U\subseteq S^{p-1}$, and its centered Gaussian law.

[F1] [[def-matrix-depth-covariance-estimator]] defines depth using both weak
tails, including their boundary ties.

[F2] [[def-multivariate-normal-law]]: for $u\in\mathbb R^p$,
$u^TX\sim N(0,u^T\Sigma u)$ under $N_p(0,\Sigma)$.

[F3] [[lem-matrix-depth-gaussian-scale-constant-exists-uniquely]]:
$\Phi(\sqrt\beta)=3/4$ for the unique $\beta>0$.

[F4] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: a
nonnegative random variable with expectation zero vanishes almost surely.

## Proof

1.1 Fix $u\in U$ and put $v=u^T\Sigma u\ge0$. If $v>0$, [F2] gives $u^TX=\sqrt v Z$ with $Z\sim N(0,1)$. The threshold for $\beta\Sigma$ is $u^T(\beta\Sigma)u=\beta v$, so $$P((u^TX)^2\le\beta v)=P(|Z|\le\sqrt\beta)=2\Phi(\sqrt\beta)-1=\frac12.$$ The normal law has a density, so its boundary has probability zero and $P((u^TX)^2\ge\beta v)=1/2$ as well. [F2, F3, algebra]

2.1 If $v=0$, then $\mathbb E(u^TX)^2=v=0$ by [F2]. Fact [F4] implies $u^TX=0$ almost surely. Both weak-tail events at threshold zero then have probability one. Thus in every direction the smaller weak tail is at least $1/2$; taking the infimum proves the depth bound. If $\Sigma=0$, every direction is in the zero-variance case and the depth equals one. [F1, F2, F4, step 1.1, algebra] ∎