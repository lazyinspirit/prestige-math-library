---
id: thm-closure-under-inverse-homomorphism
kind: theorem
title: "Regular languages are closed under inverse homomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-alphabet-homomorphism-and-induced-word-map, def-dfa-acceptance-and-recognized-language, def-extended-dfa-transition-function, def-regular-language-by-dfa-recognition]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Conrad Cunningham, Notes on Models of Computation, Chapter 4: Properties of Regular Languages"
      url: "https://john.cs.olemiss.edu/~hcc/docs/LinzNotes/chap04/ch04.html"
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Statement

Let $h:\Sigma\to\Delta^*$ be an alphabet map with induced word map
$\widehat h:\Sigma^*\to\Delta^*$. If $K\subseteq\Delta^*$ is regular, then
$$ \widehat h^{-1}(K):=\{w\in\Sigma^*:\widehat h(w)\in K\} $$
is regular over $\Sigma$.

## Facts & Assumptions

**Given:** An alphabet map $h:\Sigma\to\Delta^*$ and a regular language
$K\subseteq\Delta^*$.

[L1] By [[def-alphabet-homomorphism-and-induced-word-map]], the induced map $\widehat h$ is obtained by concatenating the image words of the letters of the input word.

[L2] By [[def-extended-dfa-transition-function]], a DFA transition function extends from letters to words, and the extension respects the recursive clause $\delta^*(q,ua)=\delta(\delta^*(q,u),a)$.

[L3] By [[def-dfa-acceptance-and-recognized-language]], a word is accepted exactly when the extended transition from the start state lands in an accepting state.

[L4] By [[def-regular-language-by-dfa-recognition]], every regular language is recognized by some DFA.

## Proof

**Proof technique:** direct.

1.1 Choose a DFA $D=(Q,\Delta,\delta,q_0,F)$ with $L(D)=K$ by [L4]. Define a DFA $D_h$ over $\Sigma$ with the same state set, start state, and accepting set by $\delta_h(q,a):=\delta^*(q,h(a))$ for each $q\in Q$ and $a\in\Sigma$. [L2, L4, given, construct]

2.1 We claim that for every word $w\in\Sigma^*$ one has $\delta_h^*(q_0,w)=\delta^*(q_0,\widehat h(w))$. The proof is by induction on $|w|$: for $w=\varepsilon$ both sides equal $q_0$, and appending one letter $a$ updates the left-hand side by $\delta_h(-,a)$ and the right-hand side by the block $h(a)$, exactly as [L1] and [L2] prescribe. [L1, L2, step 1.1, induction]

3.1 By [L3] and step 2.1, the DFA $D_h$ accepts $w$ exactly when $D$ accepts $\widehat h(w)$, that is, exactly when $\widehat h(w)\in K$. Thus $L(D_h)=\widehat h^{-1}(K)$, so the inverse image is regular. [L3, step 2.1] ∎
