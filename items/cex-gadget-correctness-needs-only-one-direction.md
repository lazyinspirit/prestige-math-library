---
id: cex-gadget-correctness-needs-only-one-direction
kind: counterexample
title: "A forward-only mapping that is not a correct many-one reduction"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-clique-independent-set-and-vertex-cover-problems, def-polynomial-time-many-one-reduction, fs-gadget-correctness-needs-only-one-direction]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement refuted

A gadget reduction is correct as soon as every yes-instance maps to a
yes-instance.

## Facts & Assumptions

**Given:** The constant map sending every $3$-CNF formula to the CLIQUE
instance $(K_1,1)$.

[F1] The graph $K_1$ has one vertex, so $(K_1,1)$ is a yes-instance of CLIQUE, by [[def-clique-independent-set-and-vertex-cover-problems]].

[L1] A polynomial-time many-one reduction requires an iff between source and target membership, by [[def-polynomial-time-many-one-reduction]].

[L2] The false slogan being refuted is recorded in [[fs-gadget-correctness-needs-only-one-direction]].

## Counterexample

**Proof technique:** direct.

1.1 The constant map in the given data is total and polynomial-time, and every satisfiable $3$-CNF formula is sent to the yes-instance $(K_1,1)$. So it preserves yes-instances in exactly the way promised by [L2]. [F1, L2, given, construct]

2.1 Consider the unsatisfiable formula $(x\lor x\lor x)\land(\neg x\lor \neg x\lor \neg x)$. It is still mapped to $(K_1,1)$, which is a yes-instance by [F1]. Thus the reverse implication in [L1] fails, so the map is not a correct many-one reduction. [F1, L1, step 1.1]

3.1 This explicit map therefore refutes the slogan [L2]. [L2, step 2.1] ∎
