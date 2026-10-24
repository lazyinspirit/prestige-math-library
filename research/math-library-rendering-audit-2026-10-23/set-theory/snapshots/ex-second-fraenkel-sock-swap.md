---
id: ex-second-fraenkel-sock-swap
kind: example
title: The unsupported sock swap
status: published
origin: pipeline
deps: [thm-second-fraenkel-model-countable-pairs-without-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, §4.4", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

In the second Fraenkel system with the full group of permutations preserving each atom pair setwise, a pair outside a proposed choice function's finite support admits the permutation that swaps exactly its two atoms and fixes every other atom. It fixes every input pair but changes the chosen output.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-second-fraenkel-model-countable-pairs-without-choice]] fixes the paired atoms and group.

## Proof

1.1 Write $P_n=\{a_n,b_n\}$. If $E$ is a finite atom support, choose the least $n$ with $P_n\cap E=\varnothing$. The permutation $\pi$ interchanging $a_n,b_n$ and fixing all other atoms is allowed, fixes $E$, and satisfies $\pi P_k=P_k$ for every $k$. [F1]

2.1 If $c$ were supported by $E$ and $c(k)\in P_k$, then $\pi c=c$, so graph evaluation gives $c(n)=\pi(c(n))$. But $\pi$ has no fixed point in $P_n$, contradiction. [F1, step 1.1] ∎
