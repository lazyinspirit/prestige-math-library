---
id: def-context-free-grammar
kind: definition
title: "Context-free grammars"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-computation-alphabet-and-word-convention
  - def-finite-cardinality
verification:
  audited: 2026-08-30
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
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 7"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.07.pdf"
---

## Definition

A **context-free grammar** is a quadruple
$$ G=(V,\Sigma,P,S) $$
such that:

- $V$ is a finite set of **variables**.
- $\Sigma$ is a finite alphabet of **terminals**, disjoint from $V$.
- $S\in V$ is the **start variable**.
- $P$ is a finite set of **productions** of the form $A\to\alpha$, where
  $A\in V$ and $\alpha$ is a finite word over the alphabet $V\cup\Sigma$ in the
  sense of [[def-computation-alphabet-and-word-convention]].

The word $\alpha$ may be empty, in which case the production is written
$A\to\varepsilon$.

## Remarks

- "Context-free" means that the left-hand side of every production is a single
  variable, independent of the surrounding sentential context.

- The grammar is finite because both the variable set and the production set are
  finite.
