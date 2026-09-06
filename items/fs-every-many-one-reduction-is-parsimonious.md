---
id: fs-every-many-one-reduction-is-parsimonious
kind: false-statement
title: "Every decision many-one reduction is parsimonious"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-polynomial-time-many-one-reduction, def-parsimonious-reduction, def-number-sat]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

Every polynomial-time many-one reduction between decision problems preserves
the exact number of witnesses.

## Facts & Assumptions

**Given:** a formula $\theta$ with declared variables $x_1,\ldots,x_n$ and a fresh variable $y$.

[L1] A decision many-one reduction need preserve only membership, by [[def-polynomial-time-many-one-reduction]].

[L2] A parsimonious reduction preserves exact counts, by [[def-parsimonious-reduction]].

[L3] NumberSAT counts assignments to every declared variable, including an unused one, by [[def-number-sat]].

## Refutation

**Proof technique:** direct.

1.1 Define $r(\theta)=\theta\land(y\lor\neg y)$ and declare $y$ in addition to the original variables. The map is polynomial time, and $\theta$ is satisfiable iff $r(\theta)$ is satisfiable, so it is a SAT-to-SAT many-one reduction by [L1]. [L1, given, construct]

2.1 Each satisfying assignment of $\theta$ has exactly two extensions, one for each value of $y$. Hence [L3] gives $\mathrm{NumberSAT}(r(\theta))=2\mathrm{NumberSAT}(\theta)$. For the concrete input $\theta=x_1$, the counts are $1$ and $2$, so the map is not parsimonious under [L2]. [L2, L3, step 1.1, algebra]

3.1 This one polynomial-time decision reduction refutes the universal claim. [step 1.1, step 2.1] ∎
