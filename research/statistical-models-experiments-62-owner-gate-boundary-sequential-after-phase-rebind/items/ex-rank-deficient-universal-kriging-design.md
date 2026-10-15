---
id: ex-rank-deficient-universal-kriging-design
kind: example
title: "A rank-deficient universal-kriging design"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-simple-ordinary-and-universal-kriging
  - def-finite-probability-space-and-event
  - def-finite-real-random-variable-and-distribution
  - def-expectation-on-a-finite-probability-space
  - def-variance-and-covariance
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

On the finite product space $\Omega=\{-1,1\}^3$ with equal probability on
each of its eight outcomes, let $\epsilon_s$ be the coordinate indexed by
$s\in\{0,1,2\}$. For unrestricted $\beta\in\mathbb R^3$, define
$X(s)=\beta_0+\beta_1s+\beta_2s^2+\epsilon_s$. Observe at $s_1=0$ and
$s_2=1$, and predict at $s_0=2$, using
$p(s)=(1,s,s^2)^\top$. The observation design matrix
$$P=\begin{pmatrix}1&0&0\\1&1&1\end{pmatrix}$$
has rank two, while $p(s_0)=(1,2,4)^\top$. The universal-unbiasedness
constraint has no solution, although the observation covariance is
$\Sigma=I_2$.

## Facts & Assumptions

**Given:** The equal-weight product space, the three coordinate variables, the quadratic trend, and the observation and target sites.

[F1] [[def-simple-ordinary-and-universal-kriging]]: for trend design matrix $P$ and target trend vector $p_0$, universal-unbiased weights must satisfy $P^\top\lambda=p_0$.

[F2] [[def-finite-probability-space-and-event]] and [[def-finite-real-random-variable-and-distribution]]: the eight outcomes have weights $1/8$, and each coordinate variable is a function on that finite space.

[F3] [[def-expectation-on-a-finite-probability-space]]: expectations are finite weighted sums.

[F4] [[def-variance-and-covariance]]: covariance is the expectation of a centered product.

## Verification

**Given:** The eight equally weighted sign triples and the stated trend.

1.1 For each coordinate $\epsilon_s$, four outcomes have value $1$ and four have value $-1$, so [F2] and [F3] give $\mathbb E[\epsilon_s]=0$ and $\mathbb E[\epsilon_s^2]=1$. For distinct coordinates, each of the four sign pairs occurs twice, so [F4] gives $\operatorname{Cov}(\epsilon_s,\epsilon_t)=0$. Hence the observation-error covariance is $I_2$, which is positive definite. [given, F2, F3, F4, algebra]

2.1 The two rows of $P$ are linearly independent, but its last two columns are equal, so its rank is two rather than three. For every $\lambda=(\lambda_1,\lambda_2)^\top$, $P^\top\lambda=(\lambda_1+\lambda_2,\lambda_2,\lambda_2)^\top$; its last two coordinates cannot equal the target's $2$ and $4$. Thus no weight vector satisfies $P^\top\lambda=p(s_0)$, so no linear predictor is unbiased for every $\beta$. [F1, step 1.1, algebra] ∎