---
id: cor-standard-semantic-machine-properties-are-undecidable
kind: corollary
title: "Standard semantic properties such as emptiness, finiteness, regularity, and context-freedom are undecidable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-rices-theorem, def-index-set-and-extensional-machine-property]
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
    - title: "H. G. Rice, Classes of Recursively Enumerable Sets and Their Decision Problems"
      url: "https://www.scribd.com/document/692967974/S0002-9947-1953-0053041-6"
    - title: "MIT 6.045J / 18.400J, Lecture 9: Mapping Reducibility and Rice's Theorem"
      url: "https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/7aead2c728dd3d5a737d832811ef97e6_MIT6_045JS11_lec09.pdf"
---

## Statement

The following decision problems about a Turing machine's recognized language
are undecidable:

- whether the language is empty,
- whether it is finite,
- whether it is regular,
- and whether it is context-free.

## Facts & Assumptions

**Given:** The four language properties listed in the statement.

[L1] Rice's theorem says that every nontrivial extensional property of recognizable languages has an undecidable index set, by [[thm-rices-theorem]].

[L2] An extensional property depends only on the recognized language, not on the particular machine code, by [[def-index-set-and-extensional-machine-property]].

## Proof

**Proof technique:** direct.

1.1 Each listed property is extensional in the sense of [L2]: if two machines recognize the same language, then either both languages are empty, both are finite, both are regular, or both are context-free. [L2, given]

1.2 Each property is nontrivial. For emptiness, $\varnothing$ belongs and $\{0\}$ does not. For finiteness, $\{0\}$ belongs and $\{0^n:n\ge 0\}$ does not. For regularity, $\varnothing$ belongs and the standard recognizable language $\{0^n1^n:n\ge 0\}$ does not. For context-freedom, $\{0^n1^n:n\ge 0\}$ belongs and the standard recognizable language $\{0^n1^n2^n:n\ge 0\}$ does not. [given, construct]

2.1 Therefore [L1] applies to each of the four properties, so each corresponding index set is undecidable. [L1, step 1.1, step 1.2] ∎
