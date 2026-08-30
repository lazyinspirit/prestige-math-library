---
id: fs-complementing-a-dfa-complements-its-transition-graph
kind: false-statement
title: "FALSE: complementing a DFA complements its transition graph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-deterministic-finite-automaton, thm-complementing-accept-states-complements-the-language]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 4"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.04.pdf"
---

## Statement

**False claim:** to complement the language of a DFA, one complements its
transition graph.

## Facts & Assumptions

**Given:** The one-state DFA $D=(\{q\},\{0,1\},\delta,q,\{q\})$ with
$\delta(q,0)=q$ and $\delta(q,1)=q$.

[A1] The statement refuted is: complementing a DFA means complementing the
transition graph.

[L1] The correct complement construction keeps the same transition function and
replaces the accepting set $F$ by $Q\setminus F$, by
[[thm-complementing-accept-states-complements-the-language]].

[L2] A DFA must have exactly one outgoing transition for each input letter from
each state, by [[def-deterministic-finite-automaton]].

## Refutation

**Proof technique:** direct.

1.1 By [L1], the complement of $L(D)=\{0,1\}^*$ is the empty language, obtained by keeping the same looping transitions and changing only the accepting set from $\{q\}$ to $\varnothing$. [L1, given]

1.2 If one literally complements the transition graph instead, both loop edges are removed because they were the only edges present. The resulting picture has no outgoing transition on either input letter, so by [L2] it is not even a DFA. [given, L2]

2.1 Thus graph complementation does not produce the complement DFA from step 1.1 and does not in general preserve the DFA conditions. The claim [A1] is false. [A1, step 1.1, step 1.2] ∎
