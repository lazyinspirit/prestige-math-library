---
id: ex-finite-subset-net-for-unordered-real-summation
kind: example
title: "Finite partial sums of a real family form a net directed by inclusion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-directed-set-and-net, def-net-convergence-and-cluster-point, def-sum-over-a-finite-index-set, thm-sum-rule, def-finite-cardinality]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Unconditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unconditional_convergence"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
pipeline_run: null
---

## Example

For a family $(a_i)_{i\in I}$ of real numbers, let $\operatorname{Fin}(I)$ be the finite subsets of $I$, ordered by inclusion, and put $s_F=\sum_{i\in F}a_i$. Then $(s_F)_{F\in\operatorname{Fin}(I)}$ is the **finite-subset net**. The family is **summable with sum $s$** when this net converges to $s$ in the usual topology of $\mathbb R$.

## Facts & Assumptions

**Given:** A real family $(a_i)_{i\in I}$.

[L1] A finite-index sum is independent of its enumeration ([[def-sum-over-a-finite-index-set]]).

[L2] A union of two finite sets is finite, and sums split across disjoint finite sets ([[thm-sum-rule]]).

## Verification

**Proof technique:** constructive.

1.1 $\operatorname{Fin}(I)$ is nonempty because it contains $\varnothing$, and it is directed because $F\cup G$ is a finite upper bound of $F$ and $G$. [L2, construct]

1.2 Therefore $F\mapsto s_F$ is a net. If $F\subseteq G$, then $s_G=s_F+\sum_{i\in G\setminus F}a_i$, so later values add only terms not already counted. [L1, L2]

2.1 Thus the displayed finite partial sums form the announced net, and its convergence is a definition of unordered summability. [step 1.1, step 1.2, discharge-construct] ∎
