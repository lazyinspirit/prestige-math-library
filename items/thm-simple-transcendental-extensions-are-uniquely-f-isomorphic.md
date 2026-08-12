---
id: thm-simple-transcendental-extensions-are-uniquely-f-isomorphic
kind: theorem
title: 'Two simple transcendental extensions are uniquely $F$-isomorphic once their generators are matched'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-algebraic-and-transcendental-elements, thm-simple-transcendental-extension-is-rational-expressions-in-the-generator]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: frontier-11
---

## Statement

Let $a$ and $b$ be transcendental over $F$. There is a unique $F$-isomorphism
$$\Phi:F(a)\longrightarrow F(b)$$
such that $\Phi(a)=b$.

## Facts & Assumptions

**Given:** Transcendental elements $a$ and $b$ over the same field $F$.

[F1] Every element of $F(a)$ has the form $f(a)g(a)^{-1}$ with $f,g\in F[x]$ and $g\ne0$, and likewise for $F(b)$ ([[thm-simple-transcendental-extension-is-rational-expressions-in-the-generator]]).

[A1] An element is transcendental over $F$ when no nonzero polynomial in $F[x]$ vanishes at it ([[def-algebraic-and-transcendental-elements]]).

## Proof

**Proof technique:** direct.

1.1 Define $\Phi(f(a)g(a)^{-1})=f(b)g(b)^{-1}$. The denominators are nonzero by [A1]. [A1, F1]

2.1 If $f(a)g(a)^{-1}=r(a)s(a)^{-1}$, cross-multiplication gives $(fs-rg)(a)=0$; [A1] gives $fs=rg$, and evaluation at $b$ proves that the two proposed images agree. Thus $\Phi$ is well-defined. [A1, step 1.1, algebra]

2.2 The formula preserves sums and products, fixes $F$, and sends $a$ to $b$. [step 1.1, algebra]

3.1 The same construction with $a$ and $b$ interchanged is inverse to $\Phi$, so $\Phi$ is an $F$-isomorphism. [A1, F1, step 2.1, step 2.2]

4.1 Any $F$-homomorphism sending $a$ to $b$ must send $f(a)g(a)^{-1}$ to $f(b)g(b)^{-1}$; [F1] therefore forces it to equal $\Phi$. [F1, step 1.1] ∎
