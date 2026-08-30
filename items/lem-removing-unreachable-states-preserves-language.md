---
id: lem-removing-unreachable-states-preserves-language
kind: lemma
title: "Removing unreachable states preserves the recognized language"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-reachable-dfa-state, def-dfa-acceptance-and-recognized-language]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

Let $D=(Q,\Sigma,\delta,q_0,F)$ be a DFA, let $Q_r\subseteq Q$ be its reachable
states, and let $D_r$ be the DFA obtained by restricting $D$ to the states
$Q_r$. Then
$$ L(D_r)=L(D). $$

## Facts & Assumptions

**Given:** A DFA $D=(Q,\Sigma,\delta,q_0,F)$ and its reachable-state subset
$Q_r$.

[L1] A state is reachable exactly when it has the form $\delta^*(q_0,w)$ for
some input word $w$, by [[def-reachable-dfa-state]].

[L2] A word is accepted exactly when the extended transition from the start
state lands in an accepting state, by
[[def-dfa-acceptance-and-recognized-language]].

## Proof

**Proof technique:** direct.

1.1 Let $w=a_0a_1\cdots a_{n-1}$ be any input word, and consider the run of $D$ from $q_0$ on $w$. After reading the prefix $a_0\cdots a_{i-1}$, the machine is in the state $\delta^*(q_0,a_0\cdots a_{i-1})$, so [L1] says every state visited during the run is reachable. [given, L1]

2.1 Therefore the entire run of $D$ on $w$ stays inside $Q_r$, and the restricted machine $D_r$ has exactly the same transitions on those states. So $D_r$ ends in the same final state as $D$ on the word $w$. [step 1.1]

3.1 By [L2], the word $w$ is accepted by $D_r$ if and only if that common final state lies in $F\cap Q_r$, which is equivalent to the same final state lying in $F$. Hence $w$ is accepted by $D_r$ exactly when it is accepted by $D$. [L2, step 2.1]

4.1 Since this holds for every word $w\in\Sigma^*$, the two machines recognize the same language. [step 3.1] ∎
