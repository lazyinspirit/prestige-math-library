---
id: thm-subset-construction-preserves-language
kind: theorem
title: "The subset construction preserves the recognized language"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-deterministic-finite-automaton, cor-cardinality-of-the-power-set, thm-existence-and-uniqueness-of-extended-dfa-transition, def-dfa-acceptance-and-recognized-language, def-nfa-acceptance-and-recognized-language]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local subset DFA construction, invariant and direct prerequisite repair; not independent review"
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 3: Nondeterministic finite automata"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.03.pdf"
---

## Statement

Let $N$ be an NFA with epsilon-moves, and let $D_N$ be its subset-construction
DFA. Then
$$ L(D_N)=L(N). $$

## Facts & Assumptions

**Given:** An NFA $N$ and its subset-construction DFA $D_N$.

[L1] The finite-run transition and its word recursion are supplied by [[def-nfa-acceptance-and-recognized-language]]. Put $E(S)=\widehat\delta(S,\varepsilon)$ and define
$D_N=(\mathcal P(Q),\Sigma,\mu,E(\{q_0\}),G),\qquad \mu(S,a)=E\!\left(\bigcup_{q\in S}\delta(q,a)\right),\qquad G=\{S\subseteq Q:S\cap F\ne\varnothing\}.$
The state set is finite by [[cor-cardinality-of-the-power-set]], contains the indicated start state, and every transition is a uniquely defined subset of $Q$. Thus this is a total DFA as in [[def-deterministic-finite-automaton]], including the empty subset as a state. Its extended transition $\mu^*$ exists by [[thm-existence-and-uniqueness-of-extended-dfa-transition]].

[L2] By [[def-dfa-acceptance-and-recognized-language]], $D_N$ accepts $w$ exactly when its reached DFA state is accepting.

[L3] By [[def-nfa-acceptance-and-recognized-language]], $N$ accepts $w$ exactly when its reachable state set on $w$ contains an accepting state.

## Proof

**Proof technique:** direct.

1.1 Induct on the word length to show $\mu^*(E(\{q_0\}),w)=\widehat\delta(q_0,w)$. For the empty word, both sides equal $E(\{q_0\})$. If the equality holds for $w$, the DFA recursion and [L1] give the value at $wa$ as $E(\bigcup_{q\in\widehat\delta(q_0,w)}\delta(q,a))$, which is exactly $\widehat\delta(q_0,wa)$ by the finite-run recursion. This proves the identity for every word. [L1, given, induction]

2.1 In the subset construction, a DFA state is accepting exactly when it contains an accepting NFA state. Therefore [L2] and step 1.1 show that $D_N$ accepts $w$ exactly when $\widehat\delta(q_0,w)$ contains an accepting state. [L2, step 1.1]

3.1 By [L3], the condition from step 2.1 is exactly the statement that $N$ accepts $w$. Thus $D_N$ accepts precisely the words that $N$ accepts, so $L(D_N)=L(N)$. [L3, step 2.1] ∎
