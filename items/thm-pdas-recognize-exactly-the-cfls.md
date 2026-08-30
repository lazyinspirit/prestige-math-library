---
id: thm-pdas-recognize-exactly-the-cfls
kind: theorem
title: "PDAs recognize exactly the context-free languages"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-cfg-to-pda-construction, thm-pda-to-cfg-construction]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

A language over a finite alphabet is context-free if and only if some PDA
recognizes it.

## Facts & Assumptions

**Given:** A language $L$ over a finite alphabet $\Sigma$.

[L1] By [[thm-cfg-to-pda-construction]], every context-free grammar has an equivalent PDA.

[L2] By [[thm-pda-to-cfg-construction]], every PDA has an equivalent context-free grammar.

## Proof

**Proof technique:** direct.

1.1 If $L$ is context-free, choose a grammar generating $L$. Then [L1] gives a PDA recognizing the same language. [L1, given]

1.2 If some PDA recognizes $L$, then [L2] gives a context-free grammar generating that same language. [L2, given]

2.1 Therefore $L$ is context-free if and only if some PDA recognizes it. [step 1.1, step 1.2] ∎
