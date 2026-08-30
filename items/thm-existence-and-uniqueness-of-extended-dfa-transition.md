---
id: thm-existence-and-uniqueness-of-extended-dfa-transition
kind: theorem
title: "The extended transition function exists and is unique"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-extended-dfa-transition-function]
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

For every DFA $D=(Q,\Sigma,\delta,q_0,F)$ there exists a unique function
$$ \delta^*:Q\times\Sigma^*\to Q $$
such that, for all $q\in Q$, $u\in\Sigma^*$, and $a\in\Sigma$,
$$ \delta^*(q,\varepsilon)=q,\qquad \delta^*(q,ua)=\delta(\delta^*(q,u),a). $$

## Facts & Assumptions

**Given:** A DFA $D=(Q,\Sigma,\delta,q_0,F)$.

[L1] By [[def-extended-dfa-transition-function]], an extended transition
function for $D$ is exactly a function $\delta^*:Q\times\Sigma^*\to Q$
satisfying the two displayed clauses for $\varepsilon$ and $ua$.

## Proof

**Proof technique:** direct.

1.1 Fix $q\in Q$ and a word $w=a_0a_1\cdots a_{n-1}$. Define a sequence of states by $s_0=q$ and $s_{i+1}=\delta(s_i,a_i)$ for $0\le i<n$, and then define $\delta^*(q,w):=s_n$. This gives a function $Q\times\Sigma^*\to Q$ because the DFA transition function supplies exactly one next state at each letter. [given, construct]

2.1 If $w=\varepsilon$, then $n=0$ and step 1.1 gives $\delta^*(q,\varepsilon)=s_0=q$. If $w=ua$ with $u=a_0\cdots a_{n-2}$ and $a=a_{n-1}$, then the last state in the sequence is $s_n=\delta(s_{n-1},a)=\delta(\delta^*(q,u),a)$. So the function from step 1.1 satisfies the two clauses of [L1]. [step 1.1, L1]

3.1 Let $\eta:Q\times\Sigma^*\to Q$ be any other function satisfying [L1]. We prove by induction on the length of $w$ that $\eta(q,w)=\delta^*(q,w)$ for every $q\in Q$. For $w=\varepsilon$, both values are $q$ by [L1] and step 2.1. [base, L1, step 2.1]

3.2 Assume $\eta(q,u)=\delta^*(q,u)$ for all words $u$ of length $n$, and let $w=ua$ have length $n+1$. Then [L1] gives $\eta(q,w)=\delta(\eta(q,u),a)$, and the induction hypothesis turns this into $\delta(\delta^*(q,u),a)=\delta^*(q,w)$ by step 2.1. [ih, L1, step 2.1, induction]

4.1 Steps 3.1 and 3.2 show that every function satisfying [L1] agrees with the function built in step 1.1, so the extended transition function exists and is unique. [step 1.1, step 2.1, step 3.1, step 3.2, discharge-induction] ∎
