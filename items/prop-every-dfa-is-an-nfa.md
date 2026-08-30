---
id: prop-every-dfa-is-an-nfa
kind: proposition
title: "Every DFA is an NFA"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-deterministic-finite-automaton, def-dfa-acceptance-and-recognized-language, def-nfa-with-epsilon-moves, def-nfa-acceptance-and-recognized-language]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 3: Nondeterministic finite automata"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.03.pdf"
---

## Statement

Let $D=(Q,\Sigma,\delta,q_0,F)$ be a DFA. Then there is an NFA $N$ over the
same alphabet with $L(N)=L(D)$.

## Facts & Assumptions

**Given:** A DFA $D=(Q,\Sigma,\delta,q_0,F)$.

[L1] By [[def-deterministic-finite-automaton]], for each $(q,a)\in Q\times\Sigma$
the DFA has exactly one next state $\delta(q,a)$.

[L2] By [[def-dfa-acceptance-and-recognized-language]], a word $w$ is accepted
by $D$ exactly when the DFA run from $q_0$ on $w$ ends in a state of $F$.

[L3] By [[def-nfa-acceptance-and-recognized-language]], a word $w$ is accepted
by an NFA exactly when the reachable state set after reading $w$ meets its
accepting set.

## Proof

**Proof technique:** direct.

1.1 Define an NFA $N=(Q,\Sigma,\eta,q_0,F)$ by $\eta(q,a):=\{\delta(q,a)\}$ for $a\in\Sigma$ and $\eta(q,\varepsilon):=\varnothing$ for every state $q$. Step [L1] makes this well-defined, and $N$ has the same states, start state, and accepting states as $D$. [L1, given, construct]

2.1 We claim that for every state $q$ and every word $w$, the NFA reachable set from $q$ on $w$ is the singleton containing the DFA state reached from $q$ on $w$. This is proved by induction on $|w|$: for $\varepsilon$ there are no $\varepsilon$-moves, so the reachable set is $\{q\}$; for $wa$, the NFA applies the same one-letter transition as the DFA and then again has no $\varepsilon$-moves. [L1, step 1.1, induction]

3.1 By step 2.1 and [L2], a word $w$ reaches an accepting DFA state exactly when the NFA reachable set on $w$ contains an accepting state. By [L3], this is exactly the NFA acceptance condition, so $L(N)=L(D)$. [L2, L3, step 2.1] ∎
