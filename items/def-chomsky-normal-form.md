---
id: def-chomsky-normal-form
kind: definition
title: "Chomsky normal form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-context-free-grammar
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 8"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.08.pdf"
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Definition

A context-free grammar $G=(V,\Sigma,P,S)$ is in **Chomsky normal form** when
every production of $G$ is of one of the following types:

1. $A\to BC$, where $A,B,C\in V$;
2. $A\to a$, where $A\in V$ and $a\in\Sigma$;
3. optionally, $S\to\varepsilon$, provided that $S$ does not occur on any
   right-hand side.

## Remarks

- The start-symbol $\varepsilon$-rule is an exception, not part of the generic
  binary-or-terminal pattern.

- In CNF, every nonempty derivation step either expands one variable into two
  variables or replaces one variable by one terminal.
