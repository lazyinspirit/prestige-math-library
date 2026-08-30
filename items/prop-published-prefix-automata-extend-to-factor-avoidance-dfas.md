---
id: prop-published-prefix-automata-extend-to-factor-avoidance-dfas
kind: proposition
title: "The published prefix automata extend canonically to DFAs for factor-avoidance languages"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-prefix-automaton-for-a-finite-forbidden-factor-set, def-finite-words-factor-avoidance-and-prefix-states, def-deterministic-finite-automaton, def-dfa-acceptance-and-recognized-language]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Example 4.7.7 and Proposition 4.7.8"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
---

## Statement

Let $\Sigma$ be a finite alphabet and let $B$ be a finite nonempty set of
nonempty words over $\Sigma$. Starting from the published prefix automaton on
$S_B$, adjoin a new sink state $\bot$, send every previously rejected letter to
$\bot$, let $\bot$ loop on every letter, and declare every state in $S_B$
accepting while $\bot$ is rejecting.

The resulting machine is a DFA over $\Sigma$, and it recognizes exactly the
language of words over $\Sigma$ that avoid every factor in $B$.

## Facts & Assumptions

**Given:** A finite alphabet $\Sigma$ and a finite nonempty set $B$ of nonempty
words over $\Sigma$.

[L1] The set $S_B$ consists of the words that avoid $B$ and are proper prefixes
of words in $B$; it is finite, and $\varepsilon\in S_B$, by
[[def-finite-words-factor-avoidance-and-prefix-states]].

[L2] In the published prefix automaton, if $sa$ still avoids $B$ then the edge
labelled $a$ from $s$ goes to the longest suffix of $sa$ that lies in $S_B$;
if $sa$ contains a forbidden factor, the letter $a$ is rejected, by
[[def-prefix-automaton-for-a-finite-forbidden-factor-set]].

[L3] A word is accepted by a DFA exactly when the final state lies in the
accepting set, by [[def-dfa-acceptance-and-recognized-language]].

## Proof

**Proof technique:** direct.

1.1 Define $D_B$ to have state set $S_B\cup\{\bot\}$, start state $\varepsilon$, accepting set $S_B$, and transition rule $$ \delta(s,a)=\begin{cases}\text{the published longest-suffix state for }sa,&\text{if }sa\text{ avoids }B,\\ \bot,&\text{if }sa\text{ contains a factor in }B,\end{cases}\qquad \delta(\bot,a)=\bot. $$ By [L1] and [L2], this is a total transition function on a finite state set, so $D_B$ is a DFA. [L1, L2, construct]

2.1 We prove by induction on the length of a word $w$ that the run of $D_B$ from $\varepsilon$ behaves as follows: if $w$ avoids $B$, the final state is the longest suffix of $w$ belonging to $S_B$; if $w$ contains a forbidden factor, the final state is $\bot$. The induction step is exactly the two cases built into the definition of $\delta$ in step 1.1. [step 1.1, induction]

3.1 If $w$ avoids $B$, then step 2.1 places the run in a state of $S_B$, hence [L3] says that $D_B$ accepts $w$. If $w$ contains a factor in $B$, then step 2.1 places the run in $\bot$, so [L3] says that $D_B$ rejects $w$. [L3, step 2.1]

4.1 Therefore $L(D_B)$ is exactly the language of words over $\Sigma$ that avoid every forbidden factor in $B$. [step 3.1] ∎
