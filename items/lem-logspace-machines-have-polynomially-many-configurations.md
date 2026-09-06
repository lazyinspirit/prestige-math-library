---
id: lem-logspace-machines-have-polynomially-many-configurations
kind: lemma
title: "Logspace machines have polynomially many configurations"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-read-only-input-logspace-machine]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, §3.1"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Statement

For a fixed read-only-input logspace machine $M$, there is a polynomial $p_M$
such that on every input $x$ of length $n$, $M$ has at most $p_M(n)$ reachable
configurations. Consequently, any accepting branch has an accepting branch
with no repeated configuration and hence with fewer than $p_M(n)$ transitions.

## Facts & Assumptions

**Given:** a fixed read-only-input logspace machine $M$ and an input $x$ of length $n$.

[L1] A logspace machine charges only $O(\log_2(n+2))$ visited work cells and has a read-only input tape ([[def-read-only-input-logspace-machine]]).

## Proof

**Proof technique:** direct counting.

1.1 By [L1], a configuration is specified by a state from a fixed finite set, one of $n+2$ input-head positions, the contents of $O(\log(n+2))$ work cells over fixed finite alphabets, and finitely many work-head positions among those cells. [L1, construct]

2.1 The product of these choices is $(n+2)^{O(1)}$; enlarge its fixed constant to obtain a polynomial $p_M(n)$ bounding the reachable configurations. [step 1.1, algebra]

3.1 If an accepting branch repeats a configuration, delete the segment between its two occurrences; the identical later configuration has the same possible continuation. Repeating this deletion yields a simple accepting path with fewer than $p_M(n)$ transitions. [step 2.1, cases] ∎
