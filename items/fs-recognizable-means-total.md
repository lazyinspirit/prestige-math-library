---
id: fs-recognizable-means-total
kind: false-statement
title: "FALSE: recognizable means total halting"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-decidable-and-recognizable-language]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 18: Further discussion of computability"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.18.pdf"
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

Whenever a machine recognizes a language, it halts on every input.

## Facts & Assumptions

**Given:** The language $\{0\}\subseteq\{0,1\}^*$.

[L1] By [[def-decidable-and-recognizable-language]], a recognizer only has to halt and accept on the members of its language.

## Refutation

**Proof technique:** direct.

1.1 Let $M$ be the machine that accepts immediately on input `0` and otherwise moves right forever without entering any halting state. Then $M$ accepts exactly the one-word language $\{0\}$. [L1, given]

2.1 On every nonmember of $\{0\}$, the machine from step 1.1 diverges. So $M$ recognizes $\{0\}$ but does not halt on every input. [step 1.1]

3.1 Therefore recognizability does not force total halting, and the statement is false. [step 2.1] ∎
