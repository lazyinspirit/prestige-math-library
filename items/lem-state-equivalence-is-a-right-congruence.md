---
id: lem-state-equivalence-is-a-right-congruence
kind: lemma
title: "State-equivalent DFA states stay equivalent after every input word"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-right-language-and-equivalent-dfa-states, def-equivalence-relation, def-extended-dfa-transition-function]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

For every DFA $D$, the state-equivalence relation $\equiv_D$ of
[[def-right-language-and-equivalent-dfa-states]] is an equivalence relation on
the state set, and for every word $u\in\Sigma^*$,
$$ p\equiv_D q \implies \delta^*(p,u)\equiv_D\delta^*(q,u). $$

## Facts & Assumptions

**Given:** A DFA $D=(Q,\Sigma,\delta,q_0,F)$ with extended transition function $\delta^*$.

[L1] By [[def-right-language-and-equivalent-dfa-states]], $p\equiv_D q$ means that for every continuation $w\in\Sigma^*$ one has $\delta^*(p,w)\in F$ if and only if $\delta^*(q,w)\in F$.

[L2] By [[def-equivalence-relation]], a relation is an equivalence relation exactly when it is reflexive, symmetric, and transitive.

[L3] By [[def-extended-dfa-transition-function]], $\delta^*(s,\varepsilon)=s$ and $\delta^*(s,va)=\delta(\delta^*(s,v),a)$ for every state $s$, word $v$, and letter $a$.

## Proof

**Proof technique:** direct.

1.1 Equality of right languages is reflexive, symmetric, and transitive, so [L1] and [L2] show that $\equiv_D$ is an equivalence relation on $Q$. [L1, L2, given]

1.2 Fix a letter $a\in\Sigma$. If $p\equiv_D q$, then induction on $v$ using [L3] gives $\delta^*(\delta(p,a),v)=\delta^*(p,av)$ and $\delta^*(\delta(q,a),v)=\delta^*(q,av)$ for every word $v$; applying [L1] to the continuation $av$ therefore yields $\delta(p,a)\equiv_D\delta(q,a)$. [L1, L3, construct]

2.1 We now induct on the word $u$. The case $u=\varepsilon$ is immediate from [L3]. If the claim holds for $u$ and $a\in\Sigma$, then step 1.2 applied to the equivalent states $\delta^*(p,u)$ and $\delta^*(q,u)$ gives $\delta^*(p,ua)\equiv_D\delta^*(q,ua)$. [L3, step 1.2, induction]

3.1 Steps 1.1 and 2.1 prove both claims. [step 1.1, step 2.1] ∎
