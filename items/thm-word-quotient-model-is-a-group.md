---
id: thm-word-quotient-model-is-a-group
kind: theorem
title: '$F_{\mathrm{word}}(X)$ is a group under $[w][v]=[wv]$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-word-quotient-model-of-the-free-group, prop-free-equivalence-is-an-equivalence-and-a-congruence, def-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-11
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, §1.2"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/reductions.html"
pipeline_run: null
---

## Statement

For every set $X$, $F_{\mathrm{word}}(X)$ is a group under
$[w][v]=[wv]$. Its identity is the empty-word class $[\varepsilon]$, and if
$w=a_1\cdots a_n$, then

$$[w]^{-1}=[a_n^{-1}\cdots a_1^{-1}].$$

## Facts & Assumptions

**Given:** A set $X$, the quotient $F_{\mathrm{word}}(X)=W(X)/{\sim}$, and the class product of [[def-word-quotient-model-of-the-free-group]].

[L1] If $w\sim w'$ and $v\sim v'$, then $wv\sim w'v'$ ([[prop-free-equivalence-is-an-equivalence-and-a-congruence]]).

[F1] A **group** is a monoid $(G,*,e)$ in which every element is invertible ([[def-group]]).

## Proof

**Proof technique:** direct.

1.1 If $[w]=[w']$ and $[v]=[v']$, then $w\sim w'$ and $v\sim v'$, so [L1] gives $wv\sim w'v'$ and therefore $[wv]=[w'v']$; the class product is well-defined. [L1, given]

2.1 Literal string concatenation is associative, so for all word classes $([u][v])[w]=[(uv)w]=[u(vw)]=[u]([v][w])$. [step 1.1, algebra]

2.2 The empty word satisfies $\varepsilon w=w=w\varepsilon$, so $[\varepsilon][w]=[w]=[w][\varepsilon]$. [step 1.1, algebra]

3.1 For $w=a_1\cdots a_n$, put $w^*=a_n^{-1}\cdots a_1^{-1}$; successive cancellations from the central seam carry both $ww^*$ and $w^*w$ to $\varepsilon$, including when $n=0$, so $[w][w^*]=[\varepsilon]=[w^*][w]$. [given, step 2.2]

4.1 The product is well-defined and associative, $[\varepsilon]$ is a two-sided identity, and every $[w]$ has the two-sided inverse $[w^*]$; these are the group requirements in [F1]. [F1, step 1.1, step 2.1, step 2.2, step 3.1] ∎
