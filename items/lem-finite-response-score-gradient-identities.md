---
id: lem-finite-response-score-gradient-identities
kind: lemma
title: "Finite-response score mean and reward-gradient identities"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-verifier-and-generation-protocol
  - def-differentiable-stochastic-policy
  - def-total-derivative-in-euclidean-space
  - def-jacobian-matrix-and-gradient
  - def-finite-sum
  - thm-algebra-of-total-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-logarithm-derivative-and-integral
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
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, second-edition draft"
      url: "https://web.stanford.edu/class/psych209/Readings/SuttonBartoRL.pdf"
      locator: "Chapter 13 §§13.2–13.3, finite action score identity inside the episodic policy-gradient proof and REINFORCE derivation; PDF pp. 285–287, printed pp. 268–270."

---

## Statement

Fix a prompt $q$, an open parameter set $U\subseteq\mathbb R^d$, and the finite response policy with nonempty fixed support $(b_1,\ldots,b_m)$ and score vectors $S_\theta(q,b_j)$ from the generation protocol. For any fixed finite reward function $r$ on that support, define

$$J(\theta):=\sum_{j=1}^{m}\pi_\theta(b_j\mid q)r(b_j).$$

Then, for every $\theta\in U$,

$$\mathbb E_\theta[S_\theta(q,Y)\mid q]=0,\qquad \mathbb E_\theta[r(Y)S_\theta(q,Y)\mid q]=\nabla_\theta J(\theta).$$

## Statement references

[[def-verifier-and-generation-protocol|The finite truncated response law, fixed support, and policy score.]]

[[def-differentiable-stochastic-policy|The fixed-support differentiable policy convention and logarithmic score vector.]]

## Facts & Assumptions

**Given:** A fixed prompt $q$, its finite response list and support, the differentiable normalized policy, and a fixed finite-valued reward function $r$.

[F1] [[def-verifier-and-generation-protocol]]: the support $(b_1,\ldots,b_m)$ is finite and fixed; each supported mass is positive and totally differentiable, the masses sum to one, and $S_\theta(q,b_j)=\nabla_\theta\log\pi_\theta(b_j\mid q)$.

[F2] [[def-differentiable-stochastic-policy]]: a supported policy mass is positive and totally differentiable on its open parameter domain, and its score is the gradient of its logarithm.

[F3] [[thm-chain-rule-for-total-derivatives]] and [[thm-logarithm-derivative-and-integral]]: for positive $\pi_\theta(b_j\mid q)$, the chain rule gives $\nabla_\theta\log\pi_\theta(b_j\mid q)=\nabla_\theta\pi_\theta(b_j\mid q)/\pi_\theta(b_j\mid q)$.

[F4] [[def-finite-sum]] and [[thm-algebra-of-total-derivatives]]: a sum over $m$ terms is defined by recursion, and induction using the binary sum rule differentiates it term by term.

[F5] [[def-total-derivative-in-euclidean-space]] and [[def-jacobian-matrix-and-gradient]]: total differentiability supplies the derivative map, and the gradient is its scalar-valued coordinate vector.

[F6] Use one-based coordinate labels $X_a:=X(a-1)$ for vectors in $\mathbb R^d$, $1\le a\le d$, and $\partial_{\theta_a}:=\partial_{a-1}$ in the supplier gradient convention. Every score vector lies in $\mathbb R^d$; write $S_{\theta,a}(q,b_j):=(S_\theta(q,b_j))_a$ for its $a$th coordinate. For a finite random vector $X$, write $X_a$ for its $a$th coordinate and define $\mathbb E_\theta[X\mid q]$ as the vector whose $a$th coordinate is the finite scalar sum $\sum_{j=1}^{m}\pi_\theta(b_j\mid q)X_a(b_j)$ for $a=1,\ldots,d$; vector sums and equalities are coordinatewise.

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 For each coordinate $a=1,\ldots,d$ and supported response $b_j$, [F2] supplies differentiability and positive mass, so [F3] and [F1] give $\pi_\theta(b_j\mid q)S_{\theta,a}(q,b_j)=\partial_{\theta_a}\pi_\theta(b_j\mid q)$. This holds for every coordinate of each score vector. [given, F1, F2, F3, algebra]

2.1 Fix a coordinate $a$. By [F4], differentiate the finite normalization identity $\sum_{j=1}^m\pi_\theta(b_j\mid q)=1$ in coordinate $a$ term by term. Using step 1.1 and [F6], the $a$th coordinate of the expected score is $\sum_{j=1}^m\pi_\theta(b_j\mid q)S_{\theta,a}(q,b_j)=\sum_{j=1}^m\partial_{\theta_a}\pi_\theta(b_j\mid q)=\partial_{\theta_a}1=0$. This holds for every $a$, proving the vector identity. [F1, F4, F5, F6, step 1.1, algebra]

3.1 Fix a coordinate $a$. Since $r(b_j)$ is fixed and finite, [F4] differentiates $J(\theta)=\sum_{j=1}^m\pi_\theta(b_j\mid q)r(b_j)$ in coordinate $a$ term by term. Substituting step 1.1, the $a$th coordinate of $\nabla_\theta J(\theta)$ is $\sum_{j=1}^m r(b_j)\partial_{\theta_a}\pi_\theta(b_j\mid q)=\sum_{j=1}^m\pi_\theta(b_j\mid q)r(b_j)S_{\theta,a}(q,b_j)$. By [F6], these are the coordinates of the stated vector expectation; since this holds for every $a$, the vector identity follows. [given, F1, F4, F5, F6, step 1.1, algebra] ∎

## Remarks

This finite proof uses only the normalized mass function and finite sums. It uses no trajectory law, dominated interchange, conditional expectation, or choice principle.
