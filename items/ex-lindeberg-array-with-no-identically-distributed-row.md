---
id: ex-lindeberg-array-with-no-identically-distributed-row
kind: example
title: A Lindeberg array with no identically distributed row
deps: ["thm-countable-product-of-probability-spaces", "cor-coordinate-random-elements-on-a-countable-product-are-independent", "lem-ac-supplies-sequential-choices-for-probability-constructions", "lem-bernoulli-and-binomial-mean-and-variance", "thm-lindeberg-feller-central-limit-theorem-sufficiency", "def-total-row-variance-and-lindeberg-condition", "def-bernoulli-and-binomial-random-variables", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, Examples 3.4.11-3.4.13'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Billingsley, Probability and Measure, Section 27
      url: https://www.colorado.edu/amath/sites/default/files/attached-files/billingsley.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Example

Assume AC. For $1\le k\le n$, take independent Bernoulli variables $B_{n,k}$ with $p_{n,k}=k/(2n+2)$ and put $X_{n,k}=B_{n,k}-p_{n,k}$. The centered laws are distinct within each row of length at least two, yet the array satisfies Lindeberg and $s_n^{-1}\sum_kX_{n,k}\Rightarrow N(0,1)$.

## Facts & Assumptions

[F1] Under DC and countable choice the specified countable family of probability spaces has a product probability. [[thm-countable-product-of-probability-spaces]].

[F2] The product coordinates are independent and have the specified laws. [[cor-coordinate-random-elements-on-a-countable-product-are-independent]].

[F3] AC supplies dependent and countable choice. [[lem-ac-supplies-sequential-choices-for-probability-constructions]].

[F4] Bernoulli p has mean p and variance p(1-p). [[lem-bernoulli-and-binomial-mean-and-variance]].

[F5] Under AC the Lindeberg condition gives a standard-normal limit. [[thm-lindeberg-feller-central-limit-theorem-sufficiency]].

## Verification

**Given:** Assume AC. For $1\le k\le n$, take independent Bernoulli variables $B_{n,k}$ with $p_{n,k}=k/(2n+2)$ and put $X_{n,k}=B_{n,k}-p_{n,k}$. The centered laws are distinct within each row of length at least two, yet the array satisfies Lindeberg and $s_n^{-1}\sum_kX_{n,k}\Rightarrow N(0,1)$.

1.1 Each $0<p_{n,k}<1/2$ defines a two-point probability. Index the pairs by $n(n-1)/2+k$ and use [F1]–[F3] to construct all coordinates independently. By [F4], the centered entry has mean zero and variance $p_{n,k}(1-p_{n,k})$. Its values are $-p_{n,k}$ and $1-p_{n,k}$, both of absolute value less than one. Distinct p have distinct negative support points with positive mass, hence distinct centered laws. Normalizing every entry in a fixed row by the same positive s_n also preserves this distinction. [F1, F2, F3, F4]

2.1 Since $1-p_{n,k}>1/2$, $s_n^2\ge\frac12\sum_{k=1}^n k/(2n+2)=n/8$. Here $\sum_{k=1}^n k=n(n+1)/2$, obtained by pairing k with n+1-k and adding the n equal pair sums. Thus s_n is positive and tends to infinity. For any fixed epsilon>0, eventually $\varepsilon s_n>1$, so every event $|X_{n,k}|>\varepsilon s_n$ is empty. The Lindeberg sum is then exactly zero. All second moments are finite, so [F5] gives the claimed limit. AC is used only through the stated product construction and CLT suppliers; no cross-row independence is needed by the theorem. [step 1.1, F5] ∎

