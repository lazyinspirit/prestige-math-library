---
id: def-nfa-with-epsilon-moves
kind: definition
title: "Nondeterministic finite automata with epsilon-moves"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-deterministic-finite-automaton, def-power-set]
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
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 3: Nondeterministic finite automata"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.03.pdf"
---

## Definition

Let $\Sigma$ be an alphabet. A **nondeterministic finite automaton with
epsilon-moves** is a quintuple
$$ N=(Q,\Sigma,\delta,q_0,F) $$
such that:

- $Q$ is a finite set of states.
- $q_0\in Q$ is the start state.
- $F\subseteq Q$ is the set of accepting states.
- $\delta$ assigns to each pair $(q,x)\in Q\times(\Sigma\cup\{\varepsilon\})$ a
  subset $\delta(q,x)\subseteq Q$, equivalently an element of
  $\mathcal P(Q)$ in the sense of [[def-power-set]].

Thus a letter $a\in\Sigma$ may lead from one state to several next states, and
an $\varepsilon$-transition changes state without consuming an input symbol.

## Remarks

- A DFA in the sense of [[def-deterministic-finite-automaton]] is the special
  case in which every set $\delta(q,a)$ is a singleton and every
  $\delta(q,\varepsilon)$ is empty.

- The symbol $\varepsilon$ is not an extra alphabet letter. It records a move
  that reads nothing.
