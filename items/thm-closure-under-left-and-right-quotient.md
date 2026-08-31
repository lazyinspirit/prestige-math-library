---
id: thm-closure-under-left-and-right-quotient
kind: theorem
title: "Regular languages are closed under left and right quotient with regular languages"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dfa-acceptance-and-recognized-language, def-nfa-acceptance-and-recognized-language, cor-dfas-and-nfas-recognize-the-same-languages, thm-product-dfa-for-union-and-intersection]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Conrad Cunningham, Notes on Models of Computation, Chapter 4: Properties of Regular Languages"
      url: "https://john.cs.olemiss.edu/~hcc/docs/LinzNotes/chap04/ch04.html"
---

## Statement

Let $L,K\subseteq\Sigma^*$ be regular languages. Then the right quotient
$$ L/K:=\{x\in\Sigma^*:\exists y\in K,\ xy\in L\} $$
and the left quotient
$$ K^{-1}L:=\{y\in\Sigma^*:\exists x\in K,\ xy\in L\} $$
are regular.

## Facts & Assumptions

**Given:** Regular languages $L,K\subseteq\Sigma^*$, together with DFA's
$D_L=(Q_L,\Sigma,\delta_L,q_L,F_L)$ and
$D_K=(Q_K,\Sigma,\delta_K,q_K,F_K)$ recognizing them.

[L1] By [[def-dfa-acceptance-and-recognized-language]], a word is in the language of a DFA exactly when its run from the start state finishes in an accepting state.

[L2] By [[def-nfa-acceptance-and-recognized-language]], an epsilon-NFA accepts exactly when some computation reaches an accepting state after the whole input is read.

[L3] By [[cor-dfas-and-nfas-recognize-the-same-languages]], every language recognized by an NFA is regular.

[L4] By [[thm-product-dfa-for-union-and-intersection]], two DFA's over the same alphabet can be run in parallel by a product DFA.

## Proof

**Proof technique:** direct.

1.1 For the right quotient, first build the product DFA of $D_L$ and $D_K$ from [L4]. Declare a state $q\in Q_L$ to be accepting in a new DFA $D_R$ exactly when some word $y$ drives the product machine from $(q,q_K)$ to a state of $F_L\times F_K$. The transition graph of $D_R$ is otherwise the same as that of $D_L$. [L4, given, construct]

1.2 For the left quotient, let $S:=\{\delta_L^*(q_L,x):x\in K\}\subseteq Q_L$. Add a fresh start state $s$ with an $\varepsilon$-edge from $s$ to each state of $S$, keep the letter transitions of $D_L$ on the old state set $Q_L$, and keep $F_L$ as the accepting set. This gives an epsilon-NFA $N_L$. [given, construct]

2.1 If $D_R$ reads $x$ and ends in the state $q=\delta_L^*(q_L,x)$, then by construction $q$ is accepting exactly when some $y\in K$ also takes $D_L$ from $q$ to a state of $F_L$. By [L1], this is equivalent to $xy\in L$ for some $y\in K$. Hence $L(D_R)=L/K$. [L1, step 1.1]

2.2 By [L2], a word $y$ is accepted by $N_L$ exactly when some state of $S$ reaches a state of $F_L$ after reading $y$. By the definition of $S$ and then [L1], this happens exactly when there exists $x\in K$ with $xy\in L$. Therefore $L(N_L)=K^{-1}L$. [L1, L2, step 1.2]

3.1 Step 2.1 shows that the right quotient is recognized by a DFA. Step 2.2 shows that the left quotient is recognized by an NFA, so [L3] makes it regular. Thus both quotients are regular. [L3, step 2.1, step 2.2] ∎
