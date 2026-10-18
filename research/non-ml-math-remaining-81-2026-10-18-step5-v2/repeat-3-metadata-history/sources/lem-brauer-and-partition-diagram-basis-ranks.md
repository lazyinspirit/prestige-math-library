---
id: lem-brauer-and-partition-diagram-basis-ranks
kind: lemma
title: Ranks of the Brauer and partition diagram bases
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-brauer-and-partition-diagram-categories]
proof_strategy: direct
axiom_use: "No choice principle is used; the counts are finite recurrences."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lehrer and Zhang, The Brauer Category and Invariant Theory, §2.1"
      url: https://arxiv.org/pdf/1207.5889
      locator: "PDF pp. 4–5: matching diagrams as a free basis, including object zero."
    - title: "Halverson and Ram, Partition Algebras, §2"
      url: https://arxiv.org/pdf/math/0401314
      locator: "PDF pp. 6–9: set-partition diagrams as a free basis."
---

## Statement

For $a\ge0$, the Brauer algebra $B_a(\delta)$ over any commutative unital ring $R$ is free of rank $(2a-1)!!$, with $(-1)!!=1$. The partition algebra $P_a(\delta)$ is free of rank $\operatorname{Bell}(2a)$, where $\operatorname{Bell}(j)$ denotes the number of set partitions of a $j$-element set.

## Facts & Assumptions

**Given:** The diagram bases in [[def-brauer-and-partition-diagram-categories]].

[F1] [[def-brauer-and-partition-diagram-categories]]: $B_a(\delta)$ has one free basis vector per perfect matching of $2a$ ordered vertices; $P_a(\delta)$ has one per set partition of those vertices.

## Proof

1.1 Let $M_{2a}$ be the number of perfect matchings of $2a$ labels. For $a=0$ the empty matching gives $M_0=1$. For $a\ge1$, the first label can be paired with any of the remaining $2a-1$ labels, and deleting that pair leaves an arbitrary matching of $2a-2$ labels. Hence $M_{2a}=(2a-1)M_{2a-2}$, and induction gives $M_{2a}=(2a-1)(2a-3)\cdots1=(2a-1)!!$. [given, F1, algebra]

2.1 By [F1], partition diagrams are in bijection with set partitions of the $2a$ boundary labels. Their number is $\operatorname{Bell}(2a)$ by the definition in the Statement, and the module is free on precisely that set. [F1, algebra] ∎
