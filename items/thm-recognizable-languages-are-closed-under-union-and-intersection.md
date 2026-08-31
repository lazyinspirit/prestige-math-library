---
id: thm-recognizable-languages-are-closed-under-union-and-intersection
kind: theorem
title: "Recognizable languages are closed under union and intersection"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-decidable-and-recognizable-language, def-language-boolean-operations]
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
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 18: Further discussion of computability"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.18.pdf"
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

If $L,K\subseteq\Sigma^*$ are recognizable, then both $L\cup K$ and
$L\cap K$ are recognizable.

## Facts & Assumptions

**Given:** Recognizable languages $L,K\subseteq\Sigma^*$.

[L1] By [[def-decidable-and-recognizable-language]], a recognizer accepts exactly the members of its language, but may diverge on nonmembers.

[L2] By [[def-language-boolean-operations]], $L\cup K$ and $L\cap K$ are languages over the same alphabet.

## Proof

**Proof technique:** direct.

1.1 Let $M_L$ recognize $L$ and $M_K$ recognize $K$. To recognize $L\cup K$, interleave their computations on an input $w$ and accept as soon as either machine accepts. If $w\in L\cup K$, one of the recognizers eventually accepts; if $w\notin L\cup K$, neither does. Hence $L\cup K$ is recognizable by [L1] and [L2]. [L1, L2, given]

1.2 To recognize $L\cap K$, again interleave the two computations on $w$, but now record whether each machine has accepted and halt only once both accept. If $w\in L\cap K$, both accepting events occur after finitely many stages; if $w\notin L\cap K$, at least one machine never accepts, which is allowed for a recognizer. Thus $L\cap K$ is recognizable. [L1, L2, construct]

2.1 Therefore recognizable languages are closed under union and intersection. [step 1.1, step 1.2] ∎
