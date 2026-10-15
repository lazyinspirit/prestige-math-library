---
id: ex-smc-multinomial-ancestry-collapse
kind: example
title: "Ancestry collapse under repeated multinomial resampling"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-multinomial-and-residual-offspring-resampling
  - thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts
proof_strategy: direct
axiom_use: "No choice axiom is used; all ancestor probabilities are finite sums."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Track $N=2$ particles with equal weights through $m\ge1$ repeated multinomial resampling steps and identity mutation. Use fresh independent randomness at each call: the $m$ pairs of child indices are mutually independent, each uniform on $\{1,2\}^2$. Each child records the original ancestor from which its state descends. The normalized particle weights remain $(1/2,1/2)$ at each step.

## Facts & Assumptions

**Given:** Two distinct initial ancestors, $N=2$, equal normalized weights $(1/2,1/2)$, multinomial resampling with independent index pairs across calls, and the identity mutation that leaves each selected state unchanged.

[F1] [[alg-multinomial-and-residual-offspring-resampling]]: Under multinomial resampling, the two child indices are conditionally IID with probabilities equal to the normalized parent weights.

[F2] [[thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts]]: Each parent has conditional expected offspring count $Np_j$.

## Verification

**Given:** The finite two-particle system in the Example.

1.1 The two child indices are independent fair draws by [F1]. They choose the same parent with probability $(1/2)^2+(1/2)^2=1/2$. The expected number of distinct parents represented is $2\{1-(1-1/2)^2\}=3/2$, since each parent is selected at least once with probability $3/4$. [F1, given, algebra]

2.1 If both children select one parent, identity mutation leaves two copies of that same original ancestor. Every later resampling copies represented ancestors, so it cannot restore the lost ancestor. If both lineages remain, their survival through the next call requires different parent indices. By the stipulated independence across calls and step 1.1, this has conditional probability $1/2$ given the full preceding index history. [F1, given, step 1.1]

3.1 Starting from two lineages, the probability that no collapse occurs in $m$ successive resampling steps is $(1/2)^m$ by induction on $m$ using step 2.1. Hence the probability of a single represented ancestor is $1-2^{-m}\to1$, even though the expected offspring counts at each step remain $(1,1)$ by [F2]. [F2, step 2.1, induction, algebra] ∎
