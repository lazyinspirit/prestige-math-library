---
id: thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions
kind: theorem
title: "A minimal generating family in a finite exponent-one purely inseparable extension is a $p$-basis and gives degree $p^r$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-p-basis-of-an-exponent-one-purely-inseparable-extension, lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power, thm-simple-algebraic-extension-quotient-power-basis-and-degree, lem-product-basis-for-a-tower-of-finite-extensions, thm-tower-law-for-finite-field-extensions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 3"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite exponent-one purely inseparable extension of
characteristic $p$, and let $(b_1,\ldots,b_r)$ be a minimal generating family
for $K$ over $F$. Then it is a $p$-basis, and

$$[K:F]=p^r.$$

Conversely, every $p$-basis generates $K$ over $F$. The empty family gives the
trivial extension and degree $p^0=1$.

## Facts & Assumptions

**Given:** A finite exponent-one purely inseparable extension $K/F$ and a minimal generating family $(b_1,\ldots,b_r)$.

[L1] If a constant is not a $p$th power in a characteristic-$p$ field, then $x^p-a$ is irreducible ([[lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power]]).

[L2] A simple algebraic extension has the power basis whose length is the degree of the minimal polynomial ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L3] Products of bases in a finite tower form a basis of the top field over the bottom field ([[lem-product-basis-for-a-tower-of-finite-extensions]]).

[L4] Degrees multiply in a finite tower ([[thm-tower-law-for-finite-field-extensions]]).

[L5] A $p$-basis is the restricted-monomial basis of [[def-p-basis-of-an-exponent-one-purely-inseparable-extension]].

## Proof

**Proof technique:** direct.

1.1 Put $K_j=F(b_1,\ldots,b_j)$. Minimality gives $b_j\notin K_{j-1}$, while exponent one gives $b_j^p=a_j\in F\subseteq K_{j-1}$. If $a_j=c^p$ for some $c\in K_{j-1}$, injectivity of Frobenius in $K$ would give $b_j=c$, a contradiction; hence [L1] makes $x^p-a_j$ the minimal polynomial of $b_j$ over $K_{j-1}$. [L1, algebra]

2.1 By [L2], each step $K_j/K_{j-1}$ has basis $1,b_j,\ldots,b_j^{p-1}$ and degree $p$. [step 1.1, L2]

3.1 Repeated use of [L3] gives the restricted monomials $b_1^{e_1}\cdots b_r^{e_r}$ as an $F$-basis of $K$, so the family is a $p$-basis by [L5]. Repeated use of [L4] gives $[K:F]=p^r$. [step 2.1, L3, L4, L5]

4.1 Conversely, if the restricted monomials form a basis, every element of $K$ is an $F$-linear combination of products of the $b_i$, so $K=F(b_1,\ldots,b_r)$. For $r=0$ this says $K=F$ and the degree is one. [L5, algebra] ∎
