---
id: def-deterministic-finite-automaton
kind: definition
title: "Deterministic finite automata"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-computation-alphabet-and-word-convention
  - def-function
  - def-finite-cardinality
  - def-cartesian-product
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
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 2"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.02.pdf"
---

## Definition

Let $\Sigma$ be an alphabet. A **deterministic finite automaton** over
$\Sigma$ is a quintuple
$$ D=(Q,\Sigma,\delta,q_0,F) $$
such that:

- $Q$ is a finite set of **states**.
- $q_0\in Q$ is the **start state**.
- $F\subseteq Q$ is the set of **accepting states**.
- $\delta:Q\times\Sigma\to Q$ is a total **transition function** in the sense
  of [[def-function]], with domain exactly the Cartesian product
  $Q\times\Sigma$ of [[def-cartesian-product]].

The adjective "deterministic" means that for each pair $(q,a)\in Q\times\Sigma$
there is exactly one next state $\delta(q,a)$, and "finite" means that $Q$ has
finite cardinality in the sense of [[def-finite-cardinality]].

## Remarks

- A transition diagram that omits a letter from some state does not yet specify
  a DFA, because totality of $\delta$ is part of the definition.

- The ambient alphabet is part of the data. The same directed graph can define
  different automata if the chosen alphabet changes.
