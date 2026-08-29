---
id: lem-induced-word-map-has-the-free-extension-property
kind: lemma
title: "The induced word map is the unique concatenation-preserving extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-alphabet-homomorphism-and-induced-word-map, def-computation-alphabet-and-word-convention]
proof_strategy: direct
justified_by: []
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Statement

Let $h:\Sigma\to\Delta^*$ be an alphabet map and let
$\widehat h:\Sigma^*\to\Delta^*$ be its induced word map.
For $a\in\Sigma$, write $\langle a\rangle:1\to\Sigma$ for the one-letter word
whose unique value is $a$.

1. For all words $u,v\in\Sigma^*$,
   $$ \widehat h(uv)=\widehat h(u)\widehat h(v). $$
2. If $g:\Sigma^*\to\Delta^*$ satisfies $g(uv)=g(u)g(v)$ for all words $u,v$
   and $g(\langle a\rangle)=h(a)$ for every $a\in\Sigma$, then
   $g=\widehat h$.

## Facts & Assumptions

**Given:** An alphabet map $h:\Sigma\to\Delta^*$, its induced map
$\widehat h:\Sigma^*\to\Delta^*$, and a map $g:\Sigma^*\to\Delta^*$ preserving
concatenation and satisfying $g(\langle a\rangle)=h(a)$ for every $a\in\Sigma$.

[L1] The induced map is defined by $\widehat h(\varepsilon)=\varepsilon$ and
$\widehat h(a_0\cdots a_{n-1})=h(a_0)\cdots h(a_{n-1})$ by
[[def-alphabet-homomorphism-and-induced-word-map]].

[L2] Word concatenation is formed by writing the letters of the first word
followed by those of the second, by
[[def-computation-alphabet-and-word-convention]].

## Proof

**Proof technique:** direct.

1.1 If $u=a_0\cdots a_{m-1}$ and $v=b_0\cdots b_{n-1}$, then [L2] says that the word $uv$ is $a_0\cdots a_{m-1}b_0\cdots b_{n-1}$. Applying [L1] to that word gives $\widehat h(uv)=h(a_0)\cdots h(a_{m-1})h(b_0)\cdots h(b_{n-1})$, which is exactly $\widehat h(u)\widehat h(v)$. [given, L1, L2]

1.2 Since $g$ preserves concatenation, $g(\varepsilon)=g(\varepsilon\varepsilon)=g(\varepsilon)g(\varepsilon)$. Comparing word lengths forces $g(\varepsilon)=\varepsilon$. [given, algebra]

1.3 For the induction step, write a nonempty word as $w=u\langle a\rangle$ with $a\in\Sigma$ its final letter. If $g(u)=\widehat h(u)$, then $g(w)=g(u\langle a\rangle)=g(u)g(\langle a\rangle)=\widehat h(u)h(a)=\widehat h(u\langle a\rangle)=\widehat h(w)$ by the hypothesis on $g$ and [L1]. [ih, given, L1, induction]

2.1 We prove $g(w)=\widehat h(w)$ for every word $w$ by induction on the length of $w$. The base case is the empty word, handled by step 1.2 and [L1]. [step 1.2, L1, base]

3.1 Steps 2.1 and 1.3 show that $g(w)=\widehat h(w)$ for every word $w$, so $g=\widehat h$. Together with step 1.1 this proves both clauses. [step 1.1, step 2.1, step 1.3, discharge-induction] ∎
