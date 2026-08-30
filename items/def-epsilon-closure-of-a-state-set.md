---
id: def-epsilon-closure-of-a-state-set
kind: definition
title: "The epsilon-closure of a set of NFA states"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-nfa-with-epsilon-moves, def-subset-and-proper-subset]
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

Let $N=(Q,\Sigma,\delta,q_0,F)$ be an NFA with epsilon-moves, and let
$S\subseteq Q$.

The **epsilon-closure** of $S$, written $\operatorname{ECl}(S)$, is the set of
all states $q\in Q$ for which there exist a state $s\in S$ and a finite
sequence of states
$$ s=r_0,r_1,\dots,r_n=q $$
such that $r_{i+1}\in\delta(r_i,\varepsilon)$ for every $0\le i<n$.

Equivalently, $\operatorname{ECl}(S)$ is the least subset $T\subseteq Q$ with
$S\subseteq T$ and $\delta(t,\varepsilon)\subseteq T$ for every $t\in T$.

For a single state $q\in Q$ we abbreviate
$$ \operatorname{ECl}(q):=\operatorname{ECl}(\{q\}). $$
