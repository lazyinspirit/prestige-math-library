---
id: def-reachable-dfa-state
kind: definition
title: "Reachable states of a DFA"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-extended-dfa-transition-function
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
---

## Definition

Let $D=(Q,\Sigma,\delta,q_0,F)$ be a DFA with extended transition function
$\delta^*$. A state $q\in Q$ is **reachable** when there exists a word
$w\in\Sigma^*$ such that
$$ q=\delta^*(q_0,w). $$

The set of all reachable states is the **reachable part** of the DFA.
