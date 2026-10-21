---
id: thm-group-centered-score-estimator-factor
kind: theorem
title: "The group-centered score estimator has factor one minus one over G"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-verifier-and-generation-protocol
  - lem-finite-response-score-gradient-identities
  - def-probability-measure
  - def-expectation-on-a-finite-probability-space
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-finite-sum
  - def-independent-random-elements
  - def-independent-sigma-algebras-and-events
  - def-field
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "DeepSeek-AI, DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning, original arXiv v1"
      url: "https://arxiv.org/pdf/2501.12948v1"
      locator: "§2.2.1, group-standardized GRPO advantages; the unnormalized finite score calculation is proved locally."
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, second-edition draft"
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoRL.pdf"
      locator: "Chapter 13 §13.4, score cancellation for an action-independent state baseline; PDF p. 289, printed p. 272."

---

## Statement

Fix a prompt $q$, a parameter $\theta$ in the open domain of its finite response policy, a finite real reward function $r$ on the policy support, and an integer $G\ge2$. Let $Y_1,\ldots,Y_G$ be independent responses with common law $\pi_\theta(\cdot\mid q)$, let $R_i:=r(Y_i)$, let $S_i:=\nabla_\theta\log\pi_\theta(Y_i\mid q)$, and set
$\overline R:=G^{-1}\sum_{j=1}^{G}R_j$ and $J(\theta):=\mathbb E_\theta[r(Y)\mid q]$.
Then
$$\mathbb E_\theta\left[\frac1G\sum_{i=1}^{G}(R_i-\overline R)S_i\mid q\right]=\left(1-\frac1G\right)\nabla_\theta J(\theta).$$
If instead $\overline R_{-i}:=(G-1)^{-1}\sum_{j\ne i}R_j$, then
$$\mathbb E_\theta\left[\frac1G\sum_{i=1}^{G}(R_i-\overline R_{-i})S_i\mid q\right]=\nabla_\theta J(\theta).$$

## Statement references

[[def-verifier-and-generation-protocol|The finite response policy, support, score vector, and expectation convention.]]

[[lem-finite-response-score-gradient-identities|The finite score has zero mean and its reward-weighted mean is the gradient of expected reward.]]

## Facts & Assumptions

**Given:** The finite policy at $q$, its fixed positive support, a finite reward $r$, and independent draws $Y_1,\ldots,Y_G$ from that same policy.

[F1] [[def-verifier-and-generation-protocol]]: $Y_q$ is finite, $\pi_\theta$ is normalized and positive on its fixed support, $S_\theta(q,y)=\nabla_\theta\log\pi_\theta(y\mid q)$ there, and independent draws have the product joint mass.

[F2] [[lem-finite-response-score-gradient-identities]]: $\mathbb E_\theta[S_\theta(q,Y)\mid q]=0$ and $\mathbb E_\theta[r(Y)S_\theta(q,Y)\mid q]=\nabla_\theta J(\theta)$.

[F3] [[def-probability-measure]], [[def-expectation-on-a-finite-probability-space]], [[cor-expectation-linearity-monotonicity-and-modulus-bound]], and [[def-finite-sum]]: the finite group sample law is a probability measure, scalar expectations are finite weighted sums, and finite sums are recursively defined. Each variable is bounded and integrable because it is a real-valued function on the finite group response space, so the expectation linearity rule applies. [[def-field]] supplies distributivity for the finite expansions below.

[F4] [[def-independent-random-elements]] and [[def-independent-sigma-algebras-and-events]]: singleton response events from distinct independent draws have product probabilities; together with [F1]'s finite response law this gives the product pair masses used below.

[F5] Use the one-based coordinate labels $X^{(a)}:=X(a-1)$ and $\partial_{\theta_a}:=\partial_{a-1}$, $1\le a\le d$, as in the score-identity supplier. Every score vector lies in $\mathbb R^d$; write $S_i^{(a)}:=(S_i)_a$ for its $a$th coordinate. Each vector expectation in this proof is defined coordinatewise by the finite scalar expectation in that coordinate; vector sums and equalities are coordinatewise. Accordingly, [F3] is applied to scalar coordinates, and the finite-sum factorization below is shown in each coordinate.

## Proof

**Given:** The Statement hypotheses and the scalar finite-expectation convention in [F3], extended coordinatewise as specified in [F5].

1.1 For each coordinate $a=1,\ldots,d$, [F2] gives $\mathbb E[R_iS_i^{(a)}\mid q]=\partial_{\theta_a}J(\theta)$ and $\mathbb E[S_i^{(a)}\mid q]=0$ for every $i$. Scalar linearity from [F3] yields $\mathbb E[G^{-1}\sum_i R_iS_i^{(a)}\mid q]=\partial_{\theta_a}J(\theta)$. Since this holds in every coordinate, [F5] gives $\mathbb E[G^{-1}\sum_i R_iS_i\mid q]=\nabla_\theta J(\theta)$. [given, F2, F3, F5, algebra]

1.2 For $i\ne j$ and each coordinate $a$, expand the finite expectation over response pairs $(Y_i,Y_j)=(b_{q,k},b_{q,\ell})$. By [F1] and [F4], their joint mass is $\pi_\theta(b_{q,k}\mid q)\pi_\theta(b_{q,\ell}\mid q)$. The recursive finite-sum clauses in [F3] and field distributivity in [F3] factor the pair sum: induction over the $\ell$-list first extracts the fixed $\pi_\theta(b_{q,k}\mid q)S_{\theta,a}(q,b_{q,k})$, and induction over the $k$-list then gives $\mathbb E[R_jS_i^{(a)}\mid q]=\left(\sum_{k=1}^{n_q}\pi_\theta(b_{q,k}\mid q)S_{\theta,a}(q,b_{q,k})\right)\left(\sum_{\ell=1}^{n_q}\pi_\theta(b_{q,\ell}\mid q)r(b_{q,\ell})\right)=0$ by [F2]. This proves the zero cross expectation in every coordinate under [F5]. [F1, F2, F3, F4, F5, algebra, induction]

2.1 Expand $\overline R=G^{-1}\sum_jR_j$, so $G^{-1}\sum_i\overline R S_i=G^{-2}\sum_{i,j}R_jS_i$. For each coordinate $a$, scalar linearity from [F3], the $G$ diagonal expectations $\partial_{\theta_a}J(\theta)$ from [F2], and the zero cross expectations from step 1.2 give $\mathbb E[G^{-1}\sum_i\overline R S_i^{(a)}\mid q]=G^{-2}G\partial_{\theta_a}J(\theta)=G^{-1}\partial_{\theta_a}J(\theta)$. By [F5] this is the coordinatewise vector identity. Subtracting it from step 1.1 proves the first identity. [given, F2, F3, F5, step 1.1, step 1.2, algebra]

3.1 For each $i$ and coordinate $a$, every term in $\overline R_{-i}S_i^{(a)}$ has the form $R_jS_i^{(a)}$ with $j\ne i$, so scalar linearity and step 1.2 give $\mathbb E[\overline R_{-i}S_i^{(a)}\mid q]=0$. This holds for every coordinate, so [F5] gives the zero vector expectation. Subtracting these zero means from step 1.1 proves the leave-one-out identity coordinatewise. [given, F3, F5, step 1.1, step 1.2, algebra] ∎

## Remarks

This identity covers unnormalized same-policy centering and the leave-one-out center. It does not cover division by a random group standard deviation, clipped probability ratios, or samples reused from a frozen old policy; none of those modifications inherits an unbiasedness claim from this calculation alone.
