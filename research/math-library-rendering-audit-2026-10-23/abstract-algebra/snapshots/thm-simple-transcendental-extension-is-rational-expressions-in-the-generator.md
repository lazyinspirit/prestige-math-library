---
id: thm-simple-transcendental-extension-is-rational-expressions-in-the-generator
kind: theorem
title: 'A simple transcendental extension consists exactly of rational expressions in its generator'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-extension-generated-subfields-and-simple-extension, def-algebraic-and-transcendental-elements, thm-evaluation-kernel-and-minimal-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: frontier-11
---

## Statement

If $K/F$ is a field extension and $a\in K$ is transcendental over $F$, then
$$F(a)=\{f(a)g(a)^{-1}:f,g\in F[x],\ g\ne0\}.$$

## Facts & Assumptions

**Given:** A field extension $K/F$ and an element $a\in K$ transcendental over $F$.

[F1] For transcendental $a$, evaluation $F[x]\to K$ has zero kernel ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[F2] $F(a)$ is the smallest subfield of $K$ containing $F$ and $a$ ([[def-field-extension-generated-subfields-and-simple-extension]]).

[A1] Transcendental means that no nonzero polynomial in $F[x]$ vanishes at $a$ ([[def-algebraic-and-transcendental-elements]]).

## Proof

**Proof technique:** direct.

1.1 Let $R$ be the set on the right. By [F1], $g\ne0$ implies $g(a)\ne0$, so every displayed quotient is defined. [F1]

2.1 The choices $(f,g)=(c,1)$ and $(x,1)$ show that $F\cup\{a\}\subseteq R$. [step 1.1, algebra]

2.2 Common denominators show that $R$ is closed under addition, subtraction, and multiplication. [step 1.1, algebra]

2.3 If $f(a)g(a)^{-1}\ne0$, then $f\ne0$ by [A1], and its inverse is $g(a)f(a)^{-1}\in R$. [A1, step 1.1]

2.4 Conversely, every subfield containing $F$ and $a$ contains $f(a)$, $g(a)$, and $g(a)^{-1}$ for every $f,g\in F[x]$ with $g\ne0$; hence it contains $R$. [step 1.1, algebra]

3.1 Thus $R$ is a subfield of $K$ containing $F$ and $a$, so $F(a)\subseteq R$ by [F2]. [F2, step 2.1, step 2.2, step 2.3]

4.1 In particular $R\subseteq F(a)$, and step 3.1 gives equality. [F2, step 3.1, step 2.4] ∎
