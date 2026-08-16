---
id: thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core
kind: theorem
title: "In characteristic $p$, every irreducible polynomial is uniquely $g(x^{p^e})$ with $g$ irreducible and separable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polynomial-is-separable-iff-coprime-to-its-derivative, thm-frobenius-endomorphism-and-finite-field-automorphism, lem-polynomial-factorisation-into-irreducibles]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2, 3, and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $F$ have characteristic $p>0$ and let $f\in F[x]$ be nonconstant and
irreducible. There are unique $e\in\mathbb N$ and $g\in F[x]$ such that

$$f(x)=g(x^{p^e}),$$

$g$ is irreducible and separable, and $e$ is maximal with this property. The
case $e=0$ occurs exactly when $f$ is separable.

## Facts & Assumptions

**Given:** A field $F$ of characteristic $p>0$ and a nonconstant irreducible polynomial $f\in F[x]$.

[L1] A nonzero polynomial is separable exactly when it is coprime to its formal derivative ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]).

[L2] In characteristic $p$, Frobenius is an injective endomorphism and $(a+b)^p=a^p+b^p$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L3] Every nonzero nonunit polynomial over a field factors into irreducibles ([[lem-polynomial-factorisation-into-irreducibles]]).

## Proof

**Proof technique:** direct.

1.1 The derivative $f'$ is zero exactly when every exponent occurring in $f$ is divisible by $p$; in that case there is a unique $h\in F[x]$ with $f(x)=h(x^p)$. Repeating this finite descent in degree gives a unique maximal $e$ and a polynomial $g$ with $f(x)=g(x^{p^e})$ and $g'\ne0$. [L2, algebra]

2.1 If $g=uv$ with both factors nonconstant, then $f=u(x^{p^e})v(x^{p^e})$, contradicting irreducibility of $f$; hence $g$ is irreducible. [step 1.1, algebra]

3.1 Since $g'\ne0$, any nonunit common divisor of $g$ and $g'$ has an irreducible factor by [L3], which would divide the irreducible $g$ and hence force $g\mid g'$, impossible by degree; thus $\gcd(g,g')=1$ and [L1] makes $g$ separable. [step 1.1, step 2.1, L1, L3]

4.1 The exponents occurring in $f$ determine their largest common power $p^e$, so $e$ and then the coefficient-preserving core $g$ are unique. Moreover $e=0$ exactly when $f'\ne0$, which for irreducible $f$ is equivalent to separability by [L1]. [step 1.1, step 3.1, L1] ∎
