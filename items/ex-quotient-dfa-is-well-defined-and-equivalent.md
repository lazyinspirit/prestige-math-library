---
id: ex-quotient-dfa-is-well-defined-and-equivalent
kind: example
title: "Merging equivalent sink-like states in a small DFA"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-quotient-dfa-is-well-defined-and-equivalent]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Example

Consider the DFA over $\{a,b\}$ with states
$$ q_0,q_a,q_b,r,s, $$
start state $q_0$, accepting states $\{q_a,q_b\}$, and transitions
$$
\delta(q_0,a)=q_a,\ \delta(q_0,b)=q_b,\ \delta(q_a,a)=r,\ \delta(q_a,b)=s,
$$
$$
\delta(q_b,a)=r,\ \delta(q_b,b)=q_b,\ \delta(r,a)=r,\ \delta(r,b)=r,\ \delta(s,a)=s,\ \delta(s,b)=s.
$$
It recognizes the language $\{a\}\cup\{b^m:m\geq 1\}$.

## Facts & Assumptions

**Given:** The displayed DFA.

[L1] By [[lem-quotient-dfa-is-well-defined-and-equivalent]], merging state-equivalent states yields a well-defined DFA with the same language.

## Verification

**Proof technique:** direct.

1.1 The states $r$ and $s$ are equivalent because every continuation from either state stays in a rejecting sink. No other pair is equivalent: $q_a$ is distinguished from $q_b$ by the word $b$, and $q_0$ is distinguished from both $q_a$ and $q_b$ by $\varepsilon$. [given]

2.1 The quotient therefore has four states $[q_0]$, $[q_a]$, $[q_b]$, and $[r]=[s]$. Its only nontrivial merge is the class $[r]=[s]$, and [L1] shows that the quotient recognizes the same language as the original DFA. [L1, step 1.1]

3.1 Concretely, the quotient still accepts $a$, $b$, and $bb$, while it rejects $\varepsilon$, $ab$, and $ba$. The merge removes a redundant rejecting state without changing any acceptance decision. [step 2.1] ∎
