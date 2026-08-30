---
id: def-nondeterministic-pushdown-automaton
kind: definition
title: "Nondeterministic pushdown automata"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-computation-alphabet-and-word-convention, def-finite-cardinality, def-function]
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
    - title: "Dexter C. Kozen, Automata and Computability"
      url: "https://dokumen.pub/automata-and-computability-9781461218449-1461218446-q-2917785.html"
---

## Definition

Let $\Sigma$ be an input alphabet. A **nondeterministic pushdown automaton**
(PDA) over $\Sigma$ is a septuple
$$ M=(Q,\Sigma,\Gamma,\delta,q_0,Z_0,F) $$
such that:

- $Q$ is a finite set of states.
- $\Gamma$ is a finite stack alphabet.
- $q_0\in Q$ is the start state.
- $Z_0\in\Gamma$ is the initial stack symbol.
- $F\subseteq Q$ is the set of accepting states.
- $\delta$ assigns to each triple $(q,x,Z)\in Q\times(\Sigma\cup\{\varepsilon\})\times\Gamma$ a finite set of pairs $(p,\beta)\in Q\times\Gamma^*$.

The intended meaning of $(p,\beta)\in\delta(q,x,Z)$ is that, when the machine
is in state $q$ with top stack symbol $Z$, it may read $x$ if $x\in\Sigma$ or
read nothing if $x=\varepsilon$, pop $Z$, replace it by the word $\beta$, and
move to state $p$.

## Remarks

- The stack is the extra memory absent from finite automata.

- Nondeterminism means that several pairs $(p,\beta)$ may be enabled from the
  same triple $(q,x,Z)$.
