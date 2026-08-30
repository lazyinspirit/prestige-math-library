---
id: thm-epsilon-elimination-for-nfas
kind: theorem
title: "Epsilon-moves can be eliminated from NFAs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-epsilon-closure-of-a-state-set, def-nfa-acceptance-and-recognized-language]
proof_strategy: direct
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

For every NFA with epsilon-moves there exists an equivalent NFA with no
epsilon-transitions.

## Facts & Assumptions

**Given:** An NFA $N=(Q,\Sigma,\delta,q_0,F)$ with epsilon-moves.

[L1] By [[def-epsilon-closure-of-a-state-set]], $\operatorname{ECl}(q)$ is the set of states reachable from $q$ by zero or more $\varepsilon$-moves.

[L2] By [[def-nfa-acceptance-and-recognized-language]], a word is accepted exactly when the reachable state set after the whole word meets the accepting set.

## Proof

**Proof technique:** cases.

1.1 Define an epsilon-free NFA $N'=(Q,\Sigma,\delta',q_0,F')$ by $$ \delta'(q,a):=\bigcup_{r\in\operatorname{ECl}(q)}\operatorname{ECl}(\delta(r,a)) $$ for $q\in Q$ and $a\in\Sigma$, and by $$ F':=\{q\in Q:\operatorname{ECl}(q)\cap F\neq\varnothing\}. $$ Thus one $a$-move of $N'$ does exactly what $N$ can do by any number of $\varepsilon$-moves, then one $a$-move, then any number of $\varepsilon$-moves. [L1, given, construct]

2.1 We claim that for every nonempty word $w$, the states reachable from $q_0$ in $N'$ after reading $w$ are exactly the states reachable from $q_0$ in $N$ after reading $w$. The proof is by induction on $|w|$: for one letter this is the definition of $\delta'$, and appending one more letter repeats the same closure-before-and-after simulation. [L1, step 1.1, induction]

3.1 If $w=\varepsilon$, then $N$ accepts $w$ exactly when $\operatorname{ECl}(q_0)\cap F\neq\varnothing$, which is exactly the condition $q_0\in F'$ from step 1.1. If $w\neq\varepsilon$, then step 2.1 and [L2] show that $N$ and $N'$ have the same reachable accepting states after reading $w$. Hence $L(N')=L(N)$. [L2, step 1.1, step 2.1] ∎
