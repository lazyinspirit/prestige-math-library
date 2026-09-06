---
id: thm-deterministic-time-hierarchy
kind: theorem
title: "The deterministic time hierarchy theorem"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-time-diagonal-language-respects-its-budget, def-dtime-ntime-dspace-and-nspace, def-asymptotic-resource-comparison]
proof_strategy: contradiction
verification: {precheck: pass}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 3.1"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

For time-constructible $f,g$ satisfying $f(n)\log f(n)=o(g(n))$,
$$ \mathrm{DTIME}(f(n))\subsetneq\mathrm{DTIME}(g(n)). $$

## Facts & Assumptions

**Given:** the stated constructible bounds.

## Proof

**Proof technique:** contradiction.

1.1 The clocked diagonal construction decides a language $D$ in $\mathrm{DTIME}(g)$. [given, construct]

2.1 If a machine running in $O(f)$ decided $D$, its code and a sufficiently long padded input would be a valid diagonal instance. The construction returns the opposite answer there, contradiction. [step 1.1, assume-contra, discharge-contradiction] ∎
