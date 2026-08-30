---
id: lem-affine-algebra-points-as-k-algebra-maps
kind: lemma
title: "k-points of k[x_1, ..., x_n]/I are exactly k-algebra maps to k"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-universal-property-of-a-polynomial-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, discussion after Proposition 15.3"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $k$ be a field, let $I\subseteq k[x_1,\ldots,x_n]$ be an ideal, and put
$A=k[x_1,\ldots,x_n]/I$. Then the $k$-algebra homomorphisms $A\to k$ are in
natural bijection with the points $a=(a_1,\ldots,a_n)\in k^n$ satisfying
$h(a)=0$ for every $h\in I$.

## Facts & Assumptions

**Given:** A field $k$, an ideal $I\subseteq k[x_1,\ldots,x_n]$, and the quotient algebra $A=k[x_1,\ldots,x_n]/I$.

[L1] A $k$-algebra map out of a polynomial ring is determined uniquely by the images of the variables ([[thm-universal-property-of-a-polynomial-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $\psi:A\to k$ be a $k$-algebra map, and let $\bar x_i$ be the class of $x_i$ in $A$. Put $a_i=\psi(\bar x_i)$. The composite $k[x_1,\ldots,x_n]\to A\xrightarrow{\psi} k$ is a $k$-algebra map sending $x_i$ to $a_i$, so by [L1] it is evaluation at $a=(a_1,\ldots,a_n)$. Since every $h\in I$ maps to $0$ in $A$, we get $h(a)=0$. [L1, given]

1.2 Conversely, let $a\in k^n$ satisfy $h(a)=0$ for every $h\in I$. By [L1], evaluation at $a$ is a $k$-algebra map $k[x_1,\ldots,x_n]\to k$, and the hypothesis says that $I$ lies in its kernel. Therefore it factors uniquely through a $k$-algebra map $A\to k$. [L1, given]

2.1 The two constructions are inverse because both record the same coordinate images of the classes $\bar x_1,\ldots,\bar x_n$. Hence $k$-points of $k[x_1,\ldots,x_n]/I$ are exactly its $k$-algebra maps to $k$. [step 1.1, step 1.2] ∎
