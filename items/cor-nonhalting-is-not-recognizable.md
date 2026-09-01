---
id: cor-nonhalting-is-not-recognizable
kind: corollary
title: "The complement of the halting problem is not recognizable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-halting-is-recognizable-and-undecidable, thm-decidable-iff-language-and-complement-are-recognizable]
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
    - title: "Stan Nelson, Computability: Undecidable Problems"
      url: "https://www.cs.rochester.edu/u/nelson/courses/csc_173/computability/undecidable.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 17: More undecidable languages; reductions"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.17.pdf"
---

## Statement

The complement of $HALT_{TM}$ is not recognizable.

## Facts & Assumptions

**Given:** The halting language $HALT_{TM}$.

[L1] The language $HALT_{TM}$ is recognizable and undecidable, by [[thm-halting-is-recognizable-and-undecidable]].

[L2] A language is decidable if and only if both it and its complement are recognizable, by [[thm-decidable-iff-language-and-complement-are-recognizable]].

## Proof

**Proof technique:** direct.

1.1 Suppose for contradiction that the complement of $HALT_{TM}$ were recognizable. Then both $HALT_{TM}$ and its complement would be recognizable, by [L1]. [assume-contra, L1]

2.1 Applying [L2] to step 1.1 would make $HALT_{TM}$ decidable. That contradicts the undecidability clause of [L1]. [L1, L2, step 1.1, contradiction]

3.1 Therefore the complement of $HALT_{TM}$ is not recognizable. [step 2.1, discharge-contradiction: simultaneous recognizability would decide $HALT_{TM}$] ∎
