---
id: ex-countable-probability-space-with-geometric-weights
kind: example
title: "A countable probability space with geometric weights"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-probability-measure, def-random-element-and-real-random-variable, def-law-or-distribution-of-a-random-element, thm-change-of-variables-for-expectation]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

Let $\Omega=\mathbb N$ and define
$$\mathbb P(A):=\sum_{n\in A}2^{-(n+1)}\qquad(A\subseteq\mathbb N).$$
Let $X:\Omega\to\mathbb R$ be the coordinate map $X(n)=n$. Then $X$ is a random
variable, its law is
$$\mathbb P_X(\{n\})=2^{-(n+1)},$$
and
$$\mathbb E[X]=1.$$

## Facts & Assumptions

**Given:** The weights $2^{-(n+1)}$ on $\mathbb N$ and the coordinate map
$X(n)=n$.

[L1] A probability measure has total mass $1$, the law of a random element is
its pushforward measure, and change of variables computes expectation from the
law ([[def-probability-measure]],
[[def-law-or-distribution-of-a-random-element]],
[[thm-change-of-variables-for-expectation]]).

[L2] A real random variable is a measurable map into $\mathbb R$
([[def-random-element-and-real-random-variable]]).

## Verification

**Proof technique:** direct.

1.1 The geometric series gives $$\mathbb P(\mathbb N)=\sum_{n=0}^\infty 2^{-(n+1)}=1,$$ so the displayed weights define a probability measure as in [L1]. Since every subset of $\mathbb N$ is measurable, the coordinate map $X$ is a real random variable by [L2]. [L1, L2, algebra]

1.2 For each $n\in\mathbb N$, the fibre of $\{n\}$ is the singleton $\{n\}$, so the law definition gives $$\mathbb P_X(\{n\})=\mathbb P(\{n\})=2^{-(n+1)}.$$ [L1]

2.1 Applying change of variables from [L1] to the identity function on $\mathbb N\subseteq\mathbb R$ gives $$\mathbb E[X]=\sum_{n=0}^\infty n\,2^{-(n+1)}=1.$$ [step 1.2, L1, algebra]

3.1 Steps 1.1, 1.2, and 2.1 verify the measure, the law, and the expectation. [step 1.1, step 1.2, step 2.1] ∎
