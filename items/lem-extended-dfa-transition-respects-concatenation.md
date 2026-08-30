---
id: lem-extended-dfa-transition-respects-concatenation
kind: lemma
title: "Extended DFA transition respects concatenation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-existence-and-uniqueness-of-extended-dfa-transition]
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

Let $D=(Q,\Sigma,\delta,q_0,F)$ be a DFA with extended transition function
$\delta^*$. Then for all $p\in Q$ and all words $u,v\in\Sigma^*$,
$$ \delta^*(p,uv)=\delta^*(\delta^*(p,u),v). $$

## Facts & Assumptions

**Given:** A DFA $D=(Q,\Sigma,\delta,q_0,F)$ with its unique extended
transition function $\delta^*$, a state $p\in Q$, and words $u,v\in\Sigma^*$.

[L1] By [[thm-existence-and-uniqueness-of-extended-dfa-transition]], the
function $\delta^*$ satisfies $\delta^*(q,\varepsilon)=q$ and
$\delta^*(q,xa)=\delta(\delta^*(q,x),a)$ for all states $q$, words $x$, and
letters $a$.

## Proof

**Proof technique:** direct.

1.1 We prove the identity by induction on the length of $v$. If $v=\varepsilon$, then [L1] gives $\delta^*(p,u\varepsilon)=\delta^*(p,u)$ and also $\delta^*(\delta^*(p,u),\varepsilon)=\delta^*(p,u)$. [base, L1]

1.2 Assume the identity holds for a word $v$, and let $a\in\Sigma$. We compare the two sides for $va$. [ih, induction]

2.1 By [L1], $$ \delta^*(p,uva)=\delta(\delta^*(p,uv),a). $$ The induction hypothesis turns this into $$ \delta(\delta^*(\delta^*(p,u),v),a). $$ [L1, step 1.2]

3.1 Applying [L1] again, the last expression is exactly $\delta^*(\delta^*(p,u),va)$. Therefore $\delta^*(p,uva)=\delta^*(\delta^*(p,u),va)$. [L1, step 2.1]

4.1 Steps 1.1, 2.1, and 3.1 complete the induction on $v$, so $\delta^*(p,uv)=\delta^*(\delta^*(p,u),v)$ for all $u,v\in\Sigma^*$. [step 1.1, step 2.1, step 3.1, discharge-induction] ∎
