---
id: thm-subset-construction-preserves-language
kind: theorem
title: "The subset construction preserves the recognized language"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-subset-construction-state-invariant, def-dfa-acceptance-and-recognized-language, def-nfa-acceptance-and-recognized-language]
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-31
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

[L1] By [[lem-subset-construction-state-invariant]], for every word $w$ the DFA state reached in $D_N$ on $w$ is exactly the NFA reachable state set on $w$.

[L2] By [[def-dfa-acceptance-and-recognized-language]], $D_N$ accepts $w$ exactly when its reached DFA state is accepting.

[L3] By [[def-nfa-acceptance-and-recognized-language]], $N$ accepts $w$ exactly when its reachable state set on $w$ contains an accepting state.

## Proof

**Proof technique:** direct.

1.1 Let $w\in\Sigma^*$. By [L1], the state reached by $D_N$ on $w$ is the subset $\widehat\delta(q_0,w)$ of NFA states. [L1, given]

2.1 In the subset construction, a DFA state is accepting exactly when it contains an accepting NFA state. Therefore [L2] and step 1.1 show that $D_N$ accepts $w$ exactly when $\widehat\delta(q_0,w)$ contains an accepting state. [L2, step 1.1]

3.1 By [L3], the condition from step 2.1 is exactly the statement that $N$ accepts $w$. Thus $D_N$ accepts precisely the words that $N$ accepts, so $L(D_N)=L(N)$. [L3, step 2.1] ∎
