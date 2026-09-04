---
id: def-turing-reduction
kind: definition
title: "Turing reductions via oracle deciders"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-decidable-and-recognizable-language]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "MIT 6.045J / 18.400J, Lecture 9: Mapping Reducibility and Rice's Theorem"
      url: "https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/7aead2c728dd3d5a737d832811ef97e6_MIT6_045JS11_lec09.pdf"
---

## Definition

Let $A\subseteq\Sigma^*$ and $B\subseteq\Gamma^*$ be languages. A **Turing
reduction** from $A$ to $B$ is a deterministic oracle Turing machine $M^B$
that halts on every input and satisfies
$$ x\in A\iff M^B \text{ accepts } x $$
for every $x\in\Sigma^*$.

When such a machine exists, write
$$ A\le_T B. $$

## Remarks

- A Turing reduction may ask several adaptive queries about $B$.

- A many-one reduction is the special case where the oracle is queried on one
  precomputed target instance.

