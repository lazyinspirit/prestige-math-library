---
id: lem-epsilon-closure-is-a-closure-operator
kind: lemma
title: "Epsilon-closure is a closure operator"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-epsilon-closure-of-a-state-set]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 3: Nondeterministic finite automata"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.03.pdf"
---

## Statement

Let $N$ be an NFA with epsilon-moves and let $S,T$ be subsets of its state set.
Then:

1. $S\subseteq\operatorname{ECl}(S)$;
2. if $S\subseteq T$, then $\operatorname{ECl}(S)\subseteq\operatorname{ECl}(T)$;
3. $\operatorname{ECl}(\operatorname{ECl}(S))=\operatorname{ECl}(S)$.

## Facts & Assumptions

**Given:** An NFA with epsilon-moves $N$ and subsets $S,T$ of its state set.

[L1] By [[def-epsilon-closure-of-a-state-set]], a state lies in
$\operatorname{ECl}(S)$ exactly when it is reachable from some state of $S$ by
a finite chain of $\varepsilon$-transitions.

## Proof

**Proof technique:** direct.

1.1 For every $s\in S$, the length-zero $\varepsilon$-chain from $s$ to itself shows $s\in\operatorname{ECl}(S)$ by [L1]. Hence $S\subseteq\operatorname{ECl}(S)$. [L1, given]

1.2 Assume $S\subseteq T$ and let $q\in\operatorname{ECl}(S)$. By [L1], some $\varepsilon$-chain starts in a state of $S$ and ends at $q$; because that start state also lies in $T$, the same chain shows $q\in\operatorname{ECl}(T)$. Thus $\operatorname{ECl}(S)\subseteq\operatorname{ECl}(T)$. [L1, given]

2.1 Step 1.1 gives $\operatorname{ECl}(S)\subseteq\operatorname{ECl}(\operatorname{ECl}(S))$. For the reverse inclusion, let $q\in\operatorname{ECl}(\operatorname{ECl}(S))$. By [L1], there is an $\varepsilon$-chain from some $r\in\operatorname{ECl}(S)$ to $q$, and again by [L1] there is an $\varepsilon$-chain from some $s\in S$ to $r$. Concatenating the two finite chains gives an $\varepsilon$-chain from $s$ to $q$, so $q\in\operatorname{ECl}(S)$. Therefore $\operatorname{ECl}(\operatorname{ECl}(S))=\operatorname{ECl}(S)$. [L1, step 1.1] ∎
