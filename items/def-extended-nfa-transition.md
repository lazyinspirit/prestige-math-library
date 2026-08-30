---
id: def-extended-nfa-transition
kind: definition
title: "The extended transition function of an NFA"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-epsilon-closure-of-a-state-set]
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

Let $N=(Q,\Sigma,\delta,q_0,F)$ be an NFA with epsilon-moves.

Its **extended transition function** is the map
$$ \widehat\delta:\mathcal P(Q)\times\Sigma^*\to\mathcal P(Q) $$
defined recursively by
$$ \widehat\delta(S,\varepsilon):=\operatorname{ECl}(S) $$
and
$$ \widehat\delta(S,wa):=\operatorname{ECl}\!\Bigl(\bigcup_{q\in\widehat\delta(S,w)}\delta(q,a)\Bigr) $$
for every state set $S\subseteq Q$, every word $w\in\Sigma^*$, and every letter
$a\in\Sigma$.

For a single state $q\in Q$ we abbreviate
$$ \widehat\delta(q,w):=\widehat\delta(\{q\},w). $$

Thus $\widehat\delta(S,w)$ is the set of states that can be reached by starting
in some state of $S$, taking any number of $\varepsilon$-moves before and
between letter moves and after the final letter move, and reading the word $w$.
