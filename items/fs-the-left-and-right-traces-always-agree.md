---
id: fs-the-left-and-right-traces-always-agree
kind: false-statement
title: "FALSE: the left and right traces always agree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-in-a-spherical-category-the-left-and-right-traces-agree]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Exercise 4.7.16"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

The left and right traces always agree.

## Facts & Assumptions

**Given:** The tensor category of finite-dimensional $\mathbb Z$-graded vector
spaces and a scalar $q\in k^\times$ with $q\neq\pm1$.

[L1] In spherical categories the left and right traces agree
([[thm-in-a-spherical-category-the-left-and-right-traces-agree]]).

## Refutation

**Proof technique:** direct.

1.1 Let $\mathcal C$ be the tensor category of finite-dimensional $\mathbb Z$-graded vector spaces over a field $k$, and fix $q\in k^\times$ with $q\neq\pm1$. The usual double-dual map is a pivotal structure, and multiplying its component on degree-$n$ vectors by $q^n$ gives another pivotal structure $a'$. [given, construct]

2.1 Let $X=k[1]$ be the one-dimensional object concentrated in degree $1$. Then $X^\vee=k[-1]$, so $$\dim_{a'}(X)=q,\qquad \dim_{a'}(X^\vee)=q^{-1}.$$ Since $q\neq q^{-1}$, the pivotal structure $a'$ is not spherical. [step 1.1, algebra]

3.1 For the identity endomorphism $1_X$, the two trace expressions are exactly those two dimensions: $$\operatorname{Tr}_L(a'_X1_X)=q,\qquad \operatorname{Tr}_R(1_X(a'_X)^{-1})=q^{-1}.$$ They are unequal, so left and right traces do not always agree. This does not contradict [[thm-in-a-spherical-category-the-left-and-right-traces-agree]], because the witness is deliberately non-spherical. [step 2.1, L1] ∎
