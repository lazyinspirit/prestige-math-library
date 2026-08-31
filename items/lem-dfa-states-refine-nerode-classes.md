---
id: lem-dfa-states-refine-nerode-classes
kind: lemma
title: "A DFA can realize at most one Nerode class per reachable state"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-nerode-equivalence, def-dfa-acceptance-and-recognized-language, def-extended-dfa-transition-function]
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
    - title: "Eric Blais, Models of Computation, 20. Nonregular Languages"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w26/nonregular"
---

## Statement

Let $D$ be a DFA recognizing a language $L$. If two words $u,v\in\Sigma^*$ drive
$D$ from its start state to the same state, then $u\equiv_L v$. Consequently,
distinct Nerode classes of $L$ must reach distinct reachable states of $D$.

## Facts & Assumptions

**Given:** A DFA $D=(Q,\Sigma,\delta,q_0,F)$ recognizing $L$, with extended transition function $\delta^*$.

[L1] By [[def-nerode-equivalence]], to prove $u\equiv_L v$ it is enough to show that $uz\in L$ if and only if $vz\in L$ for every continuation $z\in\Sigma^*$.

[L2] By [[def-dfa-acceptance-and-recognized-language]], a word $w$ belongs to $L$ exactly when $\delta^*(q_0,w)\in F$.

[L3] By [[def-extended-dfa-transition-function]], $\delta^*(s,\varepsilon)=s$ and $\delta^*(s,xa)=\delta(\delta^*(s,x),a)$.

## Proof

**Proof technique:** direct.

1.1 For every state $s$ and words $x,z$, repeated use of [L3] gives $\delta^*(s,xz)=\delta^*(\delta^*(s,x),z)$; in particular, $\delta^*(q_0,uz)=\delta^*(\delta^*(q_0,u),z)$ and $\delta^*(q_0,vz)=\delta^*(\delta^*(q_0,v),z)$. [L3, construct]

2.1 If $\delta^*(q_0,u)=\delta^*(q_0,v)$, then step 1.1 implies $\delta^*(q_0,uz)=\delta^*(q_0,vz)$ for every $z\in\Sigma^*$. By [L2], this gives $uz\in L$ if and only if $vz\in L$ for every $z$, so [L1] yields $u\equiv_L v$. [L1, L2, step 1.1, given]

3.1 Therefore every reachable state of $D$ contains words from at most one Nerode class, and distinct Nerode classes must land in distinct reachable states. [step 2.1] ∎
