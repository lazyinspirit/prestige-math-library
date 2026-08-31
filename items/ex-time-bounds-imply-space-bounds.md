---
id: ex-time-bounds-imply-space-bounds
kind: example
title: "A machine that runs in O(n^2) time necessarily uses at most O(n^2) space"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-time-bounds-imply-space-bounds]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
---

## Example

Let $M$ be a decider that, on an input of length $n$, makes at most $3n^2+5n+7$
steps. For instance, $M$ might repeatedly sweep across the input while keeping
only a bounded amount of auxiliary control information. Then the time-bound
lemma implies that the total number of visited tape cells is also at most a
constant multiple of $n^2$.

## Facts & Assumptions

**Given:** A machine $M$ with running time at most $3n^2+5n+7$ on inputs of length $n$.

[L1] Any $O(T(n))$ time bound yields an $O(T(n))$ space bound for a fixed machine, by [[lem-time-bounds-imply-space-bounds]].

## Verification

**Proof technique:** direct.

1.1 The polynomial $3n^2+5n+7$ is $O(n^2)$. So the hypothesis places $M$ in the setting of [L1] with $T(n)=n^2$. [given]

2.1 Applying [L1] yields $\operatorname{Space}_M(n)=O(n^2)$. This matches the concrete intuition that a machine cannot visit more than a constant multiple of its own number of time steps. [L1, step 1.1] ∎
