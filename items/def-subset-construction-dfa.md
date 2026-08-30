---
id: def-subset-construction-dfa
kind: definition
title: "The subset-construction DFA"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-deterministic-finite-automaton, def-epsilon-closure-of-a-state-set, def-nfa-with-epsilon-moves]
verification:
  precheck: n/a
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

The **subset-construction DFA** associated to $N$ is
$$ D_N=(\mathcal P(Q),\Sigma,\mu,S_0,G), $$
where
$$ S_0:=\operatorname{ECl}(q_0), $$
$$ \mu(S,a):=\operatorname{ECl}\!\Bigl(\bigcup_{q\in S}\delta(q,a)\Bigr) \quad\text{for }S\subseteq Q,\ a\in\Sigma, $$
and
$$ G:=\{S\subseteq Q:S\cap F\neq\varnothing\}. $$

Thus each DFA state records the whole set of NFA states that may be active
after a given input prefix.
