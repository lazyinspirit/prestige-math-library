---
id: lem-finite-response-likelihood-ratio-change-of-measure
kind: lemma
title: "Finite response likelihood ratios change measure by cancellation"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-verifier-and-generation-protocol
  - def-probability-measure
  - def-finite-sum
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
      locator: "§5.5, target/behavior trajectory ratio (5.3), PDF pp. 128–129, printed pp. 112–113."

---

## Statement

Let $Y$ be a finite nonempty response set with a fixed enumeration $(y_1,\ldots,y_m)$, and let $p$ and $q$ be probability mass functions on $Y$ satisfying $p(y)>0\Rightarrow q(y)>0$. Define $\rho(y)=p(y)/q(y)$ when $q(y)>0$ and $\rho(y)=0$ when $q(y)=0$. Then, for every real-valued function $f$ on $Y$,

$$\sum_{j=1}^{m}q(y_j)\rho(y_j)f(y_j)=\sum_{j=1}^{m}p(y_j)f(y_j).$$

In particular, $\sum_{j=1}^{m}q(y_j)\rho(y_j)=1$. This is a finite response identity; it asserts no change-of-measure result on an arbitrary trajectory space.

## Statement references

[[def-probability-measure|A probability law assigns total mass one and sums its point masses over finite events.]]

[[def-verifier-and-generation-protocol|A finite response policy has normalized masses on its fixed support.]]

[[def-finite-sum|Finite sums are defined by recursion on their upper index.]]

## Facts & Assumptions

**Given:** The finite response set $Y$, probability masses $p,q$, the support inclusion, and a real-valued function $f$.

[F1] [[def-probability-measure]]: a probability law is a measure of total mass one; its nonnegative singleton masses on the finite response set sum to one.

[F2] [[def-verifier-and-generation-protocol]]: every prompt has a finite response set and a normalized policy mass function on its fixed support.

[F3] [[def-finite-sum]]: a sum of $m$ real terms is the recursively defined finite sum over indices $1,\ldots,m$.

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 For each index $j$, if $q(y_j)=0$, support inclusion forces $p(y_j)=0$ and the definition gives $q(y_j)\rho(y_j)=p(y_j)=0$. If $q(y_j)>0$, the quotient is defined and $q(y_j)\rho(y_j)=p(y_j)$. Thus this equality holds for every $j=1,\ldots,m$. [given, F1, F2, algebra]

2.1 Multiplying the pointwise equality in step 1.1 by $f(y_j)$ and summing over $j$ using [F3] gives the stated identity. Taking $f(y_j)=1$ gives $\sum_{j=1}^{m}q(y_j)\rho(y_j)=\sum_{j=1}^{m}p(y_j)=1$. Every operation is a finite sum, so no choice or sigma-finite measure hypothesis is used. [given, F1, F3, step 1.1, algebra] ∎
