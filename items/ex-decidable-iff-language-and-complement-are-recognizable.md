---
id: ex-decidable-iff-language-and-complement-are-recognizable
kind: example
title: "Recognizers for strings containing a 1 and for all-zero strings"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-decidable-iff-language-and-complement-are-recognizable]
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
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 17: More undecidable languages; reductions"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.17.pdf"
---

## Example

Let $A\subseteq\{0,1\}^*$ be the language of binary strings containing at least
one `1`. Its complement consists of the all-zero strings, including the empty
word.

## Facts & Assumptions

**Given:** The language $A$ and its complement $A^c$.

[L1] By [[thm-decidable-iff-language-and-complement-are-recognizable]], recognizers for a language and its complement can be interleaved into a decider.

## Verification

**Proof technique:** direct.

1.1 A recognizer for $A$ scans the input from left to right and accepts as soon as it sees a `1`; on an all-zero input it may simply continue forever. A recognizer for $A^c$ scans to the end of the input and accepts exactly when every scanned symbol is `0`. [given]

2.1 On any input word, exactly one of the two recognizers from step 1.1 eventually accepts. Therefore [L1] interleaves them into a decider for $A$. [L1, step 1.1] ∎
