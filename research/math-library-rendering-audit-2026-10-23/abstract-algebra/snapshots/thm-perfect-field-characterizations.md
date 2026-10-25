---
id: thm-perfect-field-characterizations
kind: theorem
title: "A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-perfect-field, thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core, lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power, thm-frobenius-endomorphism-and-finite-field-automorphism, thm-polynomial-is-separable-iff-coprime-to-its-derivative]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
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

A field $F$ is perfect if and only if either $\operatorname{char}F=0$, or
$\operatorname{char}F=p>0$ and the Frobenius map $a\mapsto a^p$ is surjective.

## Facts & Assumptions

**Given:** A field $F$.

[L1] A field is perfect when all of its nonconstant irreducible polynomials are separable ([[def-perfect-field]]).

[L2] In characteristic $p$, every irreducible polynomial has a unique form $g(x^{p^e})$ with $g$ irreducible and separable ([[thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]]).

[L3] If $a$ is not a $p$th power, then $x^p-a$ is irreducible ([[lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power]]).

[L4] Frobenius is an injective field endomorphism in characteristic $p$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L5] A nonzero polynomial is separable exactly when it is coprime to its derivative ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]).

## Proof

**Proof technique:** direct.

1.1 If $\operatorname{char}F=0$ and $f$ is irreducible, then $f'\ne0$; any common nonconstant divisor of $f$ and $f'$ would be associated to $f$, which is impossible because $\deg f'<\deg f$. Thus $\gcd(f,f')=1$, so $f$ is separable by [L5]. [L1, L5, algebra]

1.2 Suppose $\operatorname{char}F=p>0$ and Frobenius is surjective. For irreducible $f=g(x^{p^e})$ as in [L2], if $e>0$ then taking $p^e$th roots of the coefficients through repeated surjectivity and using [L4] would write $f$ as a $p^e$th power of a nonconstant polynomial, contradicting irreducibility. Hence $e=0$ and every irreducible is separable. [L2, L4]

1.3 Conversely, if Frobenius is not surjective, choose $a\notin F^p$. Then [L3] makes $x^p-a$ irreducible, while its derivative is zero, so it is not separable and $F$ is not perfect. [L1, L3]

2.1 The characteristic-zero argument and the two implications in positive characteristic establish the equivalence. [step 1.1, step 1.2, step 1.3] ∎
