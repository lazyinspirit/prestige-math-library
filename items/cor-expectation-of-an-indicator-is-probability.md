---
id: cor-expectation-of-an-indicator-is-probability
kind: corollary
title: "The expectation of an indicator is the probability of the event"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-expectation-of-a-nonnegative-or-integrable-random-variable, lem-probability-measure-basic-identities, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integral-of-a-nonnegative-simple-function]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.6"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space and let $A\in\mathcal F$.
Then the indicator $\mathbf 1_A$ satisfies
$$\mathbb E[\mathbf 1_A]=\mathbb P(A).$$

## Facts & Assumptions

**Given:** A probability space $(\Omega,\mathcal F,\mathbb P)$ and an event $A$.

[L1] Expectation of a nonnegative random variable is its integral with respect to
$\mathbb P$ ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

[L2] The complement identity gives $\mathbb P(A^c)=1-\mathbb P(A)$
([[lem-probability-measure-basic-identities]]).

[L3] On nonnegative simple functions, the nonnegative integral is the simple
integral $\sum_j c_j\mu(E_j)$
([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]],
[[def-integral-of-a-nonnegative-simple-function]]).

## Proof

**Proof technique:** direct.

1.1 The function $\mathbf 1_A$ is the simple function $$\mathbf 1_A=1\cdot\chi_A+0\cdot\chi_{A^c}.$$ Therefore [L1] and [L3] give $$\mathbb E[\mathbf 1_A]=1\cdot\mathbb P(A)+0\cdot\mathbb P(A^c).$$ [L1, L3]

2.1 Using [L2] only to note that $A^c$ is the complementary event in the same probability space, step 1.1 simplifies to $\mathbb E[\mathbf 1_A]=\mathbb P(A)$. [step 1.1, L2] ∎
