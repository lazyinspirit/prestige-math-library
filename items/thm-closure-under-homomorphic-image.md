---
id: thm-closure-under-homomorphic-image
kind: theorem
title: "Regular languages are closed under homomorphic image"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-alphabet-homomorphism-and-induced-word-map, def-regular-expression-denotation, lem-denotation-is-structurally-well-defined, thm-kleenes-theorem]
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
$\widehat h:\Sigma^*\to\Delta^*$, and let $L\subseteq\Sigma^*$ be regular.
Then
$$ \widehat h[L]:=\{\widehat h(w):w\in L\} $$
is a regular language over $\Delta$.

## Facts & Assumptions

**Given:** An alphabet map $h:\Sigma\to\Delta^*$ and a regular language
$L\subseteq\Sigma^*$.

[L1] By [[def-alphabet-homomorphism-and-induced-word-map]], the induced map $\widehat h$ sends a concatenated word to the concatenation of the image words of its letters.

[L2] By [[def-regular-expression-denotation]], the denotation of a regular expression is built recursively from union, concatenation, and star on languages.

[L3] By [[lem-denotation-is-structurally-well-defined]], recursive substitutions through a regular-expression tree produce a uniquely determined regular expression.

[L4] By [[thm-kleenes-theorem]], every regular language is denoted by some regular expression.

## Proof

**Proof technique:** direct.

1.1 Choose a regular expression $R$ over $\Sigma$ with $\mathcal L(R)=L$ by [L4]. For each letter $a\in\Sigma$, choose a regular expression $E_a$ over $\Delta$ that denotes the single word $h(a)$: if $h(a)=\varepsilon$ take $E_a=\varepsilon$, and if $h(a)=b_1\cdots b_n$ with $n\ge 1$, take the concatenation $E_a:=b_1\cdots b_n$. [L1, L4, given, choose]

2.1 Define $T(R)$ by recursively replacing each occurrence of a letter $a$ in $R$ by $E_a$, while leaving $\varnothing$ and $\varepsilon$ fixed and commuting with $+$, concatenation, and $^*$. By [L3], this gives one well-defined regular expression over $\Delta$. [L3, step 1.1, construct]

3.1 A structural induction on $R$ using [L1] and [L2] shows that $\mathcal L(T(R))=\{\widehat h(w):w\in\mathcal L(R)\}$. Since $\mathcal L(R)=L$, this language is exactly $\widehat h[L]$. Therefore $\widehat h[L]$ is denoted by a regular expression and is regular. [L1, L2, step 2.1, induction] ∎
