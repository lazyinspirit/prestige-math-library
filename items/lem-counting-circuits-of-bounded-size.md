---
id: lem-counting-circuits-of-bounded-size
kind: lemma
title: "Counting bounded-size Boolean circuits"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-boolean-circuit-size-depth-fanin-and-basis, thm-product-rule]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

For $n,s\ge1$, the number of Boolean functions on $n$ inputs computed by
circuits of size at most $s$ over the fixed page basis is at most
$$2^{O(s\log(n+s))}.$$

## Facts & Assumptions

**Given:** integers $n,s\ge1$.

[L1] The circuit basis is fixed and has arity at most two, by [[def-boolean-circuit-size-depth-fanin-and-basis]].

[L2] Independent finite choices multiply, by [[thm-product-rule]].

## Proof

**Proof technique:** direct.

1.1 A topologically numbered gate has at most a fixed number $b$ of type choices and at most two input-wire indices among at most $n+s$ available wires. Thus each gate record has at most $b(n+s)^2$ possibilities; choosing an output wire adds at most $n+s$ possibilities. [L1, given]

2.1 By [L2], circuits with exactly $r\le s$ gates therefore number at most $(n+s)[b(n+s)^2]^r$. Summing over $0\le r\le s$ gives at most $(s+1)(n+s)[b(n+s)^2]^s=2^{O(s\log(n+s))}$ because $s\ge1$. [L2, step 1.1, algebra]

3.1 Distinct encodings may compute the same function, so this circuit count is also an upper bound on the number of represented Boolean functions. [step 2.1] ∎
