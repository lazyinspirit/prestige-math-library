---
id: ex-bernoulli-terminal-influence-limit
kind: example
title: Bernoulli sample mean as an exact terminal influence expansion
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-moments-variance-and-covariance
  - thm-iid-terminal-influence-limit
  - def-axiom-of-choice
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Assume AC. Let $B_1,B_2,\ldots$ be IID Bernoulli$(p)$ variables, where $0\le p\le1$, and estimate $\theta=p$ by $\hat\theta_n=\bar B_n=n^{-1}\sum_{i=1}^nB_i$. Take the subject influence function $\phi(b)=b-p$.

## Facts & Assumptions

**Given:** The Bernoulli sample and estimator in the Example. Verify its influence expansion and terminal limit.

[A1] The observations are IID Bernoulli$(p)$, with $P(B_i=1)=p$ and $P(B_i=0)=1-p$.

[A2] Assume AC. [[def-axiom-of-choice]]

[F1] [[def-identically-distributed-and-iid-random-variables]]: IID means a common law and mutual independence of the whole family.

[F2] [[def-moments-variance-and-covariance]]: For a square-integrable real random variable $X$, $\operatorname{Var}(X)=E[(X-E X)^2]$.

[F3] [[thm-iid-terminal-influence-limit]]: A separately supplied centered, finite-variance IID influence expansion has its covariance normal limit under AC.

## Verification

1.1 For every Borel set $C\subseteq\mathbb R$, $\{B_i-p\in C\}=\{B_i\in C+p\}$, where $C+p$ is Borel. The common law of the $B_i$ therefore gives a common law for $B_i-p$, and applying the finite independence identities in [F1] to these preimage events proves that the shifted observations are IID. The variable $\phi(B_i)=B_i-p$ has mean $p-p=0$ and variance $p(1-p)$ by [A1] and [F2]. The estimator identity $\bar B_n-p=n^{-1}\sum_i(B_i-p)$ gives the required expansion exactly, with zero remainder. [A1, F1, F2, algebra]

2.1 Apply [F3] with $d=1$ and $\Sigma=p(1-p)$ to obtain $\sqrt n(\bar B_n-p)\Rightarrow N(0,p(1-p))$. At $p=0$ or $p=1$, $\bar B_n=p$ almost surely, so the limit is the point mass $N(0,0)$ covered by the theorem. [A2, F3, step 1.1] ∎