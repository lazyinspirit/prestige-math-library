---
id: thm-an-unrecognizable-language-exists
kind: theorem
title: "There exists a language that is not recognizable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-nonhalting-is-not-recognizable, def-halting-problem, def-decidable-and-recognizable-language]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "EECS 376 Course Notes, Part 6: Computability"
      url: "https://eecs376.github.io/notes/computability.html"
---

## Statement

There exists a language that is not recognizable.

## Facts & Assumptions

**Given:** The halting language $HALT_{TM}$.

[L1] The complement of $HALT_{TM}$ is not recognizable, by [[cor-nonhalting-is-not-recognizable]].

[L2] The symbol $HALT_{TM}$ names a language, by [[def-halting-problem]].

[L3] Recognizability is a property of languages, by [[def-decidable-and-recognizable-language]].

## Proof

**Proof technique:** direct.

1.1 By [L2], the complement of $HALT_{TM}$ is itself a language. [L2, given]

2.1 By [L1], that language is not recognizable, and [L3] identifies this as exactly the existence claim wanted. [L1, L3, step 1.1] ∎
