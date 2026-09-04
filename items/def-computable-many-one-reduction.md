---
id: def-computable-many-one-reduction
kind: definition
title: "Computable many-one reductions between languages"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-computable-and-partial-computable-function, def-decidable-and-recognizable-language]
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
    - title: "Kevin Kelly, Many-one Reduction"
      url: "https://www.andrew.cmu.edu/user/kk3n/recursionclass/8reduction.html"
---

## Definition

Let $A\subseteq\Sigma^*$ and $B\subseteq\Gamma^*$ be languages over finite
alphabets. A **computable many-one reduction** from $A$ to $B$ is a total
computable function
$$ f:\Sigma^*\to\Gamma^* $$
such that for every $x\in\Sigma^*$ one has
$$ x\in A\iff f(x)\in B. $$

When such an $f$ exists, write
$$ A\le_m B. $$

## Remarks

- The reduction sends each source instance to one target instance.

- The biconditional preserves both yes-instances and no-instances.

