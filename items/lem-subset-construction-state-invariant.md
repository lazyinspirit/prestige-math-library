---
id: lem-subset-construction-state-invariant
kind: lemma
title: "Subset construction tracks exactly the reachable NFA state set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-subset-construction-dfa, def-extended-nfa-transition]
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 3: Nondeterministic finite automata"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.03.pdf"
---

## Statement

Let $N=(Q,\Sigma,\delta,q_0,F)$ be an NFA with epsilon-moves, and let
$D_N=(\mathcal P(Q),\Sigma,\mu,S_0,G)$ be its subset-construction DFA.

Then for every word $w\in\Sigma^*$,
$$ \mu^*(S_0,w)=\widehat\delta(q_0,w), $$
where $\mu^*$ is the extended transition of $D_N$.

## Facts & Assumptions

**Given:** An NFA $N$ and its subset-construction DFA $D_N$.

[L1] By [[def-subset-construction-dfa]], the start state of $D_N$ is $S_0=\operatorname{ECl}(q_0)$ and its one-letter transition is $\mu(S,a)=\operatorname{ECl}(\bigcup_{q\in S}\delta(q,a))$.

[L2] By [[def-extended-nfa-transition]], the extended NFA transition satisfies $\widehat\delta(q_0,\varepsilon)=\operatorname{ECl}(q_0)$ and $\widehat\delta(q_0,wa)=\operatorname{ECl}(\bigcup_{q\in\widehat\delta(q_0,w)}\delta(q,a))$.

## Proof

**Proof technique:** direct.

1.1 For the empty word, $\mu^*(S_0,\varepsilon)=S_0$ by the DFA recursion, while [L1] and [L2] identify both sides with $\operatorname{ECl}(q_0)$. [L1, L2, given, base]

1.2 Fix a successor word of the form $wa$. [given]

2.1 Assume $\mu^*(S_0,w)=\widehat\delta(q_0,w)$. Then for the successor word from step 1.2 the DFA recursion gives $\mu^*(S_0,wa)=\mu(\mu^*(S_0,w),a)$, so [L1] turns this into $\operatorname{ECl}(\bigcup_{q\in\mu^*(S_0,w)}\delta(q,a))$. [L1, step 1.2, ih]

3.1 Substituting the induction hypothesis into step 2.1 yields $\mu^*(S_0,wa)=\operatorname{ECl}(\bigcup_{q\in\widehat\delta(q_0,w)}\delta(q,a))$, and [L2] identifies that set with $\widehat\delta(q_0,wa)$. [L2, step 2.1]

4.1 Steps 1.1, 1.2, 2.1, and 3.1 prove by induction on $|w|$ that $\mu^*(S_0,w)=\widehat\delta(q_0,w)$ for every word $w$. [step 1.1, step 1.2, step 2.1, step 3.1, discharge-induction: on |w|] ∎
