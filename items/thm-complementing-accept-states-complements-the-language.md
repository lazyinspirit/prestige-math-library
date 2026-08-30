---
id: thm-complementing-accept-states-complements-the-language
kind: theorem
title: "Complementing the accepting states complements the recognized language"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dfa-acceptance-and-recognized-language, def-language-boolean-operations, def-deterministic-finite-automaton]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 4"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.04.pdf"
---

## Statement

Let $D=(Q,\Sigma,\delta,q_0,F)$ be a DFA and let
$$ D^c:=(Q,\Sigma,\delta,q_0,Q\setminus F). $$
Then
$$ L(D^c)=\Sigma^*\setminus L(D). $$

## Facts & Assumptions

**Given:** A DFA $D=(Q,\Sigma,\delta,q_0,F)$ over $\Sigma$.

[L1] For languages over a fixed alphabet, the complement of $L$ is
$L^c=\Sigma^*\setminus L$, by [[def-language-boolean-operations]].

[L2] A word $w$ is accepted by a DFA exactly when the final state
$\delta^*(q_0,w)$ lies in its accepting set, by
[[def-dfa-acceptance-and-recognized-language]].

## Proof

**Proof technique:** direct.

1.1 The machines $D$ and $D^c$ have the same state set, the same start state, and the same transition function. Therefore, for every word $w\in\Sigma^*$, they follow exactly the same run and end in the same state $\delta^*(q_0,w)$. [given]

2.1 By [L2], the word $w$ is accepted by $D^c$ exactly when this common final state lies in $Q\setminus F$, which is equivalent to saying that it does not lie in $F$. So $w$ is accepted by $D^c$ exactly when $w$ is not accepted by $D$. [L2, step 1.1]

3.1 Since this equivalence holds for every $w\in\Sigma^*$, the language of $D^c$ is precisely $\Sigma^*\setminus L(D)$, which is $L(D)^c$ by [L1]. [L1, step 2.1] ∎
