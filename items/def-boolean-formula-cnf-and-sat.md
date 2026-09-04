---
id: def-boolean-formula-cnf-and-sat
kind: definition
title: "Boolean formulas, conjunctive normal form, and the satisfiability language SAT"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "MIT 18.404J / 6.840J Theory of Computation, Lecture Notes"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/pages/lecture-notes/"
    - title: "Stephen A. Cook, The Complexity of Theorem-Proving Procedures"
      url: "https://www.cs.utoronto.ca/~sacook/homepage/1971.pdf"
---

## Definition

A **Boolean formula** is built from variables, the constants $\top,\bot$, and
the connectives $\neg,\land,\lor$ in the usual recursive way. A formula is in
**conjunctive normal form (CNF)** when it is a conjunction of clauses, where
each clause is a disjunction of literals and a **literal** is either a variable
or the negation of a variable.

The language
$$ SAT:=\{\ulcorner\varphi\urcorner : \varphi \text{ is a satisfiable Boolean formula}\} $$
consists of the encodings of Boolean formulas that admit a truth assignment
making them true.

## Remarks

- A $3$-CNF formula is a CNF formula whose clauses have at most three literals.

- On this page, formulas are encoded by any fixed reasonable binary syntax;
  completeness statements are invariant under that choice up to polynomial-time
  translation.

