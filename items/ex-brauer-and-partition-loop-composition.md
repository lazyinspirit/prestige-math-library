---
id: ex-brauer-and-partition-loop-composition
kind: example
title: Brauer and partition loops contribute their parameters
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-brauer-and-partition-diagram-categories, lem-brauer-and-partition-composition-is-associative]
proof_strategy: direct
generation:
  role: example
axiom_use: "No choice principle is used; the compositions are finite."
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Lehrer and Zhang, The Brauer Category and Invariant Theory, §2.1"
      url: https://arxiv.org/pdf/1207.5889
      locator: "PDF pp. 4–5: removal of a closed Brauer loop with scalar parameter."
    - title: "Halverson and Ram, Partition Algebras, §2"
      url: https://arxiv.org/pdf/math/0401314
      locator: "PDF pp. 6–9: removal of a closed partition component with scalar parameter."
---

## Example

For a Brauer cup $U:0\to2$ and cap $A:2\to0$, $A\circ U=\delta\,1_0$. For the partition algebra $P_1(\delta)$, let $d=\{\{1\},\{1'\}\}$. Then $d^2=\delta d$: the glued middle singleton blocks form one removed component, while the two outer singleton blocks remain.

## Facts & Assumptions

**Given:** The cup, cap, and singleton partition diagrams with the stacking convention in [[def-brauer-and-partition-diagram-categories]], and optional substitutions $\delta=m$ or $\delta=-2n$.

[F1] [[def-brauer-and-partition-diagram-categories]]: each closed component removed in stacking contributes one factor $\delta$.

## Verification

1.1 Gluing the two vertices of $U$ to the two vertices of $A$ closes one matched component and leaves no outer vertex, so the result is one loop times the empty identity diagram, namely $\delta\,1_0$. [given, F1, construct]

2.1 In $d\circ d$, the two middle singleton blocks are identified with each other and with no outer vertex, so they form exactly one removed class. The outer vertices remain two singleton blocks, giving $\delta d$. Substituting $\delta=m$ or $\delta=-2n$ gives those same loop scalars in the respective classical branches. [F1, step 1.1, algebra] ∎
