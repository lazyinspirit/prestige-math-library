---
id: lem-quotient-dfa-is-well-defined-and-equivalent
kind: lemma
title: "The quotient by state equivalence is a well-defined equivalent DFA"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quotient-dfa-by-state-equivalence, lem-state-equivalence-is-a-right-congruence, def-dfa-acceptance-and-recognized-language, def-extended-dfa-transition-function, def-right-language-and-equivalent-dfa-states]
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

Let $D$ be a DFA. The quotient automaton $D/{\equiv_D}$ of
[[def-quotient-dfa-by-state-equivalence]] is well defined and recognizes the
same language as $D$.

## Facts & Assumptions

**Given:** A DFA $D=(Q,\Sigma,\delta,q_0,F)$ with extended transition function $\delta^*$.

[L1] By [[def-quotient-dfa-by-state-equivalence]], the quotient automaton uses states $[q]$, transition rule $\overline\delta([q],a)=[\delta(q,a)]$, start state $[q_0]$, and accepting classes $\overline F=\{[q]:q\in F\}$.

[L2] By [[lem-state-equivalence-is-a-right-congruence]], if $q\equiv_D q'$ then $\delta^*(q,u)\equiv_D\delta^*(q',u)$ for every word $u$, hence in particular $\delta(q,a)\equiv_D\delta(q',a)$ for every letter $a$.

[L3] By [[def-dfa-acceptance-and-recognized-language]], a DFA accepts a word exactly when the state reached by its extended transition function is accepting.

[L4] By [[def-extended-dfa-transition-function]], the extended transition satisfies $\delta^*(q,\varepsilon)=q$ and $\delta^*(q,ua)=\delta(\delta^*(q,u),a)$.

[L5] By [[def-right-language-and-equivalent-dfa-states]], $q\equiv_D q'$ means that for every continuation $u\in\Sigma^*$ one has $\delta^*(q,u)\in F$ if and only if $\delta^*(q',u)\in F$.

## Proof

**Proof technique:** direct.

1.1 Step [L2] shows that if $q\equiv_D q'$ then $[\delta(q,a)]=[\delta(q',a)]$ for every letter $a$, so $\overline\delta([q],a)$ is independent of the chosen representative. [L1, L2, given]

1.2 If $q\equiv_D q'$ and $q\in F$, then [L4] gives $\delta^*(q,\varepsilon)=q$ and $\delta^*(q',\varepsilon)=q'$. Applying [L5] to the continuation $\varepsilon$ therefore shows $q'\in F$ as well. Thus $\overline F$ is representative-independent. [L4, L5]

1.3 Let $\overline\delta^*$ be the extended transition of the quotient DFA. Induction on $u$ using [L1] and [L4] gives $\overline\delta^*([q],u)=[\delta^*(q,u)]$ for every state class $[q]$ and every word $u$. [L1, L4, induction]

2.1 For every word $u$, step 1.3 and [L3] give $u\in L(D/{\equiv_D}) \iff \overline\delta^*([q_0],u)\in\overline F \iff [\delta^*(q_0,u)]\in\overline F \iff \delta^*(q_0,u)\in F \iff u\in L(D)$. [L3, step 1.2, step 1.3]

3.1 Therefore the quotient DFA is well defined and equivalent to $D$. [step 1.1, step 1.2, step 2.1] ∎
