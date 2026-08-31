---
id: thm-decidable-iff-language-and-complement-are-recognizable
kind: theorem
title: "A language is decidable if and only if it and its complement are recognizable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-decidable-and-recognizable-language, def-language-boolean-operations]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 17: More undecidable languages; reductions"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.17.pdf"
---

## Statement

For every language $L\subseteq\Sigma^*$, the following are equivalent:

1. $L$ is decidable.
2. Both $L$ and its complement $\Sigma^*\setminus L$ are recognizable.

## Facts & Assumptions

**Given:** A language $L\subseteq\Sigma^*$.

[L1] By [[def-decidable-and-recognizable-language]], a decider halts on every input and gives the correct yes-or-no answer, while a recognizer only needs to accept the members.

[L2] By [[def-language-boolean-operations]], the complement of $L$ is the language $L^c=\Sigma^*\setminus L$ over the same alphabet.

## Proof

**Proof technique:** direct.

1.1 If $L$ is decidable, then a decider for $L$ is already a recognizer for $L$, and swapping its accepting and rejecting halting states gives a recognizer for $L^c$. Thus item 1 implies item 2 by [L1] and [L2]. [L1, L2, given]

1.2 Assume $M$ recognizes $L$ and $N$ recognizes $L^c$. On input $w$, simulate one step of $M$, then one step of $N$, then two steps of each, and so on. If $M$ accepts at some stage, accept; if $N$ accepts at some stage, reject. Because every word lies in exactly one of $L$ and $L^c$, exactly one machine must eventually accept, so this interleaving always halts with the correct answer. Therefore $L$ is decidable by [L1]. [L1, L2, construct]

2.1 Steps 1.1 and 1.2 prove both directions. [step 1.1, step 1.2] ∎
