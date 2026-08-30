---
id: prop-subset-construction-can-require-exponentially-many-states
kind: proposition
title: "The subset construction can require exponentially many states"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nfa-with-epsilon-moves, def-deterministic-finite-automaton, def-finite-cardinality]
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

For each integer $n\ge 1$ there exists a language over
$\Sigma_n=\{a_1,\dots,a_n\}$ that is recognized by an NFA with $2n+1$ states
but by no DFA with fewer than $2^n$ states.

## Facts & Assumptions

**Given:** An integer $n\ge 1$ and the alphabet $\Sigma_n=\{a_1,\dots,a_n\}$.

[L1] By [[def-nfa-with-epsilon-moves]], an NFA may branch into several possible next states on the same input symbol.

[L2] By [[def-deterministic-finite-automaton]], a DFA has exactly one state after each input prefix, so two prefixes that land in the same state must have the same future acceptance behavior.

## Proof

**Proof technique:** direct.

1.1 Let $L_n$ be the set of words over $\Sigma_n$ for which at least one letter $a_i$ occurs an odd number of times. An NFA for $L_n$ has one start state and, for each $i$, two parity states that track whether the number of $a_i$'s seen so far is even or odd. By [L1], the machine may nondeterministically choose which letter $a_i$ to track, and then it accepts exactly when that tracked count ends odd. Thus $L_n$ has an NFA with $1+2n$ states. [L1, given, construct]

1.2 For a prefix $u$, let $\pi(u)\in\{0,1\}^n$ be its parity vector, whose $i$th coordinate records whether $a_i$ has appeared an even or odd number of times in $u$. Distinct parity vectors are distinguishable: if $\pi(u)\neq\pi(v)$, append the suffix consisting of exactly those letters whose parity is odd in $\pi(u)$. The resulting word from $u$ has all-even parity and is not in $L_n$, while the resulting word from $v$ still has at least one odd coordinate and lies in $L_n$. [given, construct]

2.1 Therefore no DFA can place two different parity vectors in the same state, because [L2] would then force the same acceptance behavior for the distinguishing suffix from step 1.2. Since there are $2^n$ parity vectors, every DFA for $L_n$ needs at least $2^n$ states. [L2, step 1.2]

3.1 So the subset-construction simulation of NFA's by DFA's can require exponentially many states. [step 1.1, step 2.1] ∎
