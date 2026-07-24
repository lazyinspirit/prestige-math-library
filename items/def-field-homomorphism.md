---
id: def-field-homomorphism
kind: definition
title: "Field homomorphism and embedding"
status: published
origin: session
deps: [def-field, lem-of-inverse-unique]
aliases: []
landmark: false
short: "field hom"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $F$ and $G$ be fields ([[def-field]]). A **field homomorphism**
$\varphi : F \to G$ is a map satisfying, for all $x, y \in F$,

$$\varphi(x + y) = \varphi(x) + \varphi(y), \qquad \varphi(x\, y) = \varphi(x)\,\varphi(y), \qquad \varphi(1_F) = 1_G.$$

An **embedding** (or **monomorphism**) is an injective field homomorphism. An
**isomorphism** is a bijective field homomorphism.

## Remarks

- From additivity, $\varphi(0_F) = 0_G$ and $\varphi(-x) = -\varphi(x)$; from
  multiplicativity, $\varphi(x^{-1}) = \varphi(x)^{-1}$ for $x \ne 0$. These read
  off because $\varphi(-x)$ is an additive inverse of $\varphi(x)$ and
  $\varphi(x^{-1})$ a multiplicative inverse of $\varphi(x)$, and inverses are
  unique ([[lem-of-inverse-unique]]).
- Every field homomorphism is automatically injective: its kernel
  $\{x : \varphi(x) = 0\}$ is an ideal of $F$, and a field has only the ideals
  $\{0\}$ and $F$; since $\varphi(1_F) = 1_G \ne 0$, the kernel is $\{0\}$. This
  injectivity is used explicitly in [[lem-of-hom-order-preserving]].
- Order-compatible homomorphisms are the subject of
  [[def-ordered-field-isomorphism]].
