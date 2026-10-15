---
id: ex-uncontrolled-risk-set-denominator
kind: example
title: An empty risk set prevents root-n tightness
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-independent-families-of-event-classes
  - def-op-and-little-op-stochastic-bounds
  - thm-vector-stochastic-order-calculus
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
---

## Example

Assume AC. Let $T_1,T_2,\ldots$ be IID uniform on $[0,1]$ event times and set $X_i=1$ for every subject. For each $n\ge2$, use the moving terminal time $t_n=2^{-1/n}$ and risk indicators $Y_{ni}=1\{T_i\ge t_n\}$. Write $K_n=\sum_{i=1}^nY_{ni}$. The target mean among subjects at risk is the fixed value $\theta=1$. Define the risk-set ratio

$$\hat\theta_n=\begin{cases}\displaystyle\frac{\sum_{i=1}^nX_iY_{ni}}{K_n},&K_n>0,\\[4pt]0,&K_n=0.\end{cases}$$

The convention makes the estimator defined even when the risk set is empty.

## Facts & Assumptions

**Given:** The IID uniform event times and ratio estimator in the Example. Show that its root-$n$ error is not tight, so the terminal influence theorem cannot be applied without a separate expansion.

[A1] The event times are IID, their common law satisfies $P(T_i<t)=t$ for $0\le t\le1$, and subjects are mutually independent.

[A2] Assume AC. [[def-axiom-of-choice]]

[F1] [[def-identically-distributed-and-iid-random-variables]]: IID means a common law and mutual independence of the whole family.

[F2] [[def-independent-families-of-event-classes]]: For finite selections of distinct independent indices, the probability of an intersection is the product of the event probabilities.

[F3] [[def-op-and-little-op-stochastic-bounds]]: $Z_n=O_P(1)$ requires that its tail probabilities can be made uniformly small in the limit by choosing a sufficiently large bound.

[F4] [[thm-vector-stochastic-order-calculus]]: Any finite-dimensional sequence converging in distribution is bounded in probability.

[F5] [[thm-iid-terminal-influence-limit]]: If this estimator had a centered finite-variance IID influence expansion, its root-$n$ error would converge in distribution under AC.

## Verification

1.1 For each $n\ge2$, [A1] gives $P(Y_{ni}=0)=t_n=2^{-1/n}$. The events $\{Y_{ni}=0\}$ are independent by the finite event-product identity in [F2], hence $P(K_n=0)=(2^{-1/n})^n=1/2$. Since $X_i=1$, the ratio is $1$ when $K_n>0$ and is $0$ otherwise; therefore $\sqrt n(\hat\theta_n-1)$ is $0$ when $K_n>0$ and $-\sqrt n$ when $K_n=0$. [A1, F1, F2, algebra]

2.1 For every fixed $M>0$ and every integer $n>M^2$, $P(|\sqrt n(\hat\theta_n-1)|>M)=P(K_n=0)=1/2$. Taking $\eta=1/4$ in [F3] shows that the root-$n$ errors are not $O_P(1)$. If they converged in distribution, [F4] would make them $O_P(1)$, a contradiction. Under [A2], the expansion required by [F5] would imply a weak limit, so it cannot hold for this estimator. The example shows why a consumer must control its own random denominator before claiming a terminal influence limit. [A2, F3, F4, F5, step 1.1] ∎
