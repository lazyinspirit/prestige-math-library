---
id: ex-syntactic-properties-lie-outside-rices-theorem
kind: example
title: "Adding an unreachable state changes syntax without changing the recognized language"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-syntactic-properties-lie-outside-rices-theorem]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "EECS 376 Course Notes, Part 6: Computability"
      url: "https://eecs376.github.io/notes/computability.html"
---

## Example

Start with any Turing machine $M$. Form a new machine $M'$ by adding one extra
state $q_{dead}$ and no transitions into it.

## Facts & Assumptions

**Given:** A Turing machine $M$ and the modified machine $M'$.

[L1] Syntactic properties can change while the recognized language stays fixed, and those properties therefore fall outside Rice's theorem, by [[prop-syntactic-properties-lie-outside-rices-theorem]].

## Verification

**Proof technique:** direct.

1.1 Because no transition ever enters $q_{dead}$, the computation of $M'$ on every input follows exactly the same states, tape symbols, and head moves as the computation of $M$. Hence $L(M')=L(M)$. [given, construct]

2.1 Even so, $M'$ has a different state count and visibly has an unreachable state. Step 1.1 therefore gives a concrete instance of [L1]: the code-level property changes while the language does not. [L1, step 1.1] ∎

