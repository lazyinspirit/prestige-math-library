---
id: def-leftmost-and-rightmost-derivation
kind: definition
title: "Leftmost and rightmost derivations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-one-step-and-reflexive-transitive-derivation
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 8"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.08.pdf"
---

## Definition

Let $G=(V,\Sigma,P,S)$ be a context-free grammar, and suppose
$xAy\Rightarrow_G x\alpha y$ is one derivation step.

This step is **leftmost** when $x$ contains no variables, so the rewritten
occurrence of $A$ is the leftmost variable in the sentential form. It is
**rightmost** when $y$ contains no variables, so the rewritten occurrence of
$A$ is the rightmost variable.

A finite derivation is a **leftmost derivation** when each of its steps is
leftmost, and a **rightmost derivation** when each of its steps is rightmost.
