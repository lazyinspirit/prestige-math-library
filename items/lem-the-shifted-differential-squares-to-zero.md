---
id: lem-the-shifted-differential-squares-to-zero
kind: lemma
title: "The shifted differential squares to zero"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-shift-of-a-chain-complex]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.14: Homotopy and the shift functor"
      url: "https://stacks.math.columbia.edu/tag/0119"
pipeline_run: frontier-25
---

## Statement

For every chain complex $C_\bullet$ and every $k\in\mathbb Z$, the shifted
differential on $C[k]_\bullet$ satisfies
$$d^{C[k]}_{n-1}d^{C[k]}_n=0$$
for all $n\in\mathbb Z$.

## Facts & Assumptions

**Given:** A chain complex $C_\bullet$, an integer $k$, and an integer $n$.

[L1] The shift satisfies $$d^{C[k]}_n=(-1)^k d^C_{n-k}$$ ([[def-shift-of-a-chain-complex]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $$d^{C[k]}_{n-1}d^{C[k]}_n=(-1)^k d^C_{n-k-1}(-1)^k d^C_{n-k}=(-1)^{2k}d^C_{n-k-1}d^C_{n-k}.$$ [L1, given, algebra]

2.1 Since $C_\bullet$ is a chain complex, the last composite in step 1.1 is zero. Therefore $d^{C[k]}_{n-1}d^{C[k]}_n=0$ for all $n$. [step 1.1, algebra] ∎
