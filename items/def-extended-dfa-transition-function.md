---
id: def-extended-dfa-transition-function
kind: definition
title: "The extended transition function of a DFA"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-deterministic-finite-automaton
  - def-computation-alphabet-and-word-convention
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

Let $D=(Q,\Sigma,\delta,q_0,F)$ be a DFA. An **extended transition function**
for $D$ is a function
$$ \delta^*:Q\times\Sigma^*\to Q $$
satisfying the two clauses
$$ \delta^*(q,\varepsilon)=q $$
for every $q\in Q$, and
$$ \delta^*(q,ua)=\delta(\delta^*(q,u),a) $$
for every state $q\in Q$, every word $u\in\Sigma^*$, and every letter
$a\in\Sigma$.

Thus $\delta^*(q,w)$ is intended to be the state reached from $q$ after reading
the whole word $w$. The next theorem proves that such a function exists and is
unique.
