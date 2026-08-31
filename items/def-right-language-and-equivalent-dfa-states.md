---
id: def-right-language-and-equivalent-dfa-states
kind: definition
title: "The right language of a DFA state and state equivalence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-deterministic-finite-automaton, def-extended-dfa-transition-function, def-dfa-acceptance-and-recognized-language]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "Eric Blais, Models of Computation, 20. Nonregular Languages"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w26/nonregular"
---

## Definition

Let $D=(Q,\Sigma,\delta,q_0,F)$ be a DFA with extended transition function
$\delta^*$.

For a state $q\in Q$, the **right language** of $q$ is
$$ R_D(q):=\{w\in\Sigma^*:\delta^*(q,w)\in F\}. $$

Two states $p,q\in Q$ are **state-equivalent** when they have the same right
language:
$$ p\equiv_D q \quad\Longleftrightarrow\quad R_D(p)=R_D(q). $$
Equivalently,
$$ p\equiv_D q \quad\Longleftrightarrow\quad \forall w\in\Sigma^*,\ \delta^*(p,w)\in F \iff \delta^*(q,w)\in F. $$

## Remarks

- State-equivalent states have the same future accepting behavior under every
  continuation.

- Distinct states may still be equivalent; minimization identifies exactly such
  redundancies.
