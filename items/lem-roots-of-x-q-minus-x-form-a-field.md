---
id: lem-roots-of-x-q-minus-x-form-a-field
kind: lemma
title: "In characteristic $p$, the roots of $x^{p^n}-x$ form a subfield and are all simple"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-frobenius-endomorphism-and-finite-field-automorphism, def-subfield, def-formal-derivative-of-a-polynomial, thm-repeated-root-derivative-criterion]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Section 2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Statement

Let $E$ be a field of characteristic $p>0$, let $n\ge1$, and put $q=p^n$. Then

$$R_q:=\{a\in E:a^q=a\}$$

is a subfield of $E$. Every root of $t^q-t$ is simple.

## Facts & Assumptions

**Given:** A field $E$ of characteristic $p$, a positive integer $n$, and $q=p^n$.

[L1] The $n$-fold Frobenius iterate $a\mapsto a^{p^n}$ is an injective field endomorphism ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L2] A subset containing $1$ and closed under subtraction, multiplication, and inverses of nonzero elements is a subfield ([[def-subfield]]).

[L3] The formal derivative of $\sum a_it^i$ is $\sum ia_it^{i-1}$ ([[def-formal-derivative-of-a-polynomial]]).

[L4] A root is repeated if and only if the derivative also vanishes there ([[thm-repeated-root-derivative-criterion]]).

## Proof

**Proof technique:** direct.

1.1 The elements $0$ and $1$ lie in $R_q$. Since the map $a\mapsto a^q$ is a field endomorphism by [L1], if $a,b\in R_q$ then $(a-b)^q=a^q-b^q=a-b$ and $(ab)^q=a^qb^q=ab$. [given, L1]

1.2 By [L3], the derivative of $t^q-t$ is $qt^{q-1}-1=-1$, because $q=p^n$ is zero in characteristic $p$. It vanishes nowhere. [given, L3, algebra]

2.1 If $0\ne a\in R_q$, then $(a^{-1})^q=(a^q)^{-1}=a^{-1}$, so $a^{-1}\in R_q$. Thus [L2] makes $R_q$ a subfield. [step 1.1, L1, L2]

3.1 Hence [L4] says every root of $t^q-t$ is simple. [step 1.2, L4] ∎
