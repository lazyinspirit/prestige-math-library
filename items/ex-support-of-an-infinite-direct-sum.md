---
id: ex-support-of-an-infinite-direct-sum
kind: example
title: "The support of the direct sum over all primes of Z/pZ is the set of all nonzero prime ideals of Z"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-support-of-arbitrary-direct-sums, lem-support-of-a-cyclic-module-is-its-vanishing-set]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.40: Support"
      url: "https://stacks.math.columbia.edu/tag/080S"
pipeline_run: null
---

## Example

Let
$$
M=\bigoplus_{p \text{ prime}} \mathbb Z/p\mathbb Z.
$$
Then
$$
\operatorname{Supp}_{\mathbb Z}(M)=\{(p): p \text{ prime}\},
$$
the set of all nonzero prime ideals of $\mathbb Z$.

## Facts & Assumptions

**Given:** The $\mathbb Z$-module $M=\bigoplus_{p \text{ prime}} \mathbb Z/p\mathbb Z$.

[L1] The support of an arbitrary direct sum is the union of the supports of the summands ([[thm-support-of-arbitrary-direct-sums]]).

[L2] The support of $\mathbb Z/p\mathbb Z$ is exactly $\{(p)\}$ ([[lem-support-of-a-cyclic-module-is-its-vanishing-set]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\operatorname{Supp}_{\mathbb Z}(M)=\bigcup_p \operatorname{Supp}_{\mathbb Z}(\mathbb Z/p\mathbb Z)$. [L1]

2.1 Each summand contributes exactly the singleton $\{(p)\}$ by [L2], so the union in step 1.1 is the set of all nonzero prime ideals of $\mathbb Z$. [step 1.1, L2]

3.1 Hence $\operatorname{Supp}_{\mathbb Z}(M)=\{(p): p \text{ prime}\}$. [step 2.1] ∎
