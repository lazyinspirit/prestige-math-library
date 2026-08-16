---
id: ex-algebraic-closure-of-a-finite-field
kind: example
title: "$\\overline{\\mathbb F_p}$ is the union of its finite subfields and is an infinite algebraic extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraic-closure, cor-element-algebraic-iff-simple-extension-finite, thm-frobenius-endomorphism-and-finite-field-automorphism, def-subfield, prop-finite-fields-are-splitting-fields-of-x-q-minus-x, cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree, thm-polynomial-is-separable-iff-coprime-to-its-derivative, thm-simple-algebraic-extension-quotient-power-basis-and-degree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, finite fields and algebraic closures"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Example

For a prime $p$, an algebraic closure $\overline{\mathbb F_p}$ is the union of
its finite subfields. It contains one subfield of order $p^n$ for every
$n\ge1$, the nested fields $\mathbb F_{p^{n!}}$ for $n\ge1$ exhaust it, and it
is an infinite algebraic extension of $\mathbb F_p$.

## Facts & Assumptions

**Given:** A prime $p$ and an algebraic closure $\Omega=\overline{\mathbb F_p}$.

[L1] An element is algebraic over a field exactly when its simple extension is finite ([[cor-element-algebraic-iff-simple-extension-finite]]).

[L2] Frobenius and all its iterates respect field operations in characteristic $p$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L3] A subset containing $0,1$ and closed under subtraction, multiplication, and nonzero inverses is a subfield ([[def-subfield]]).

[L4] Every field of order $q$ is the splitting field of $x^q-x$ over its prime field, and all of its elements are roots ([[prop-finite-fields-are-splitting-fields-of-x-q-minus-x]]).

[L5] Over every finite field there is an irreducible polynomial of each positive degree ([[cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree]]).

[L6] An algebraic closure is algebraic over its base and algebraically closed ([[def-algebraic-closure]]).

[L7] A nonzero polynomial is separable exactly when it is coprime to its derivative ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]).

[L8] The degree of a simple algebraic extension is the degree of the minimal polynomial of its generator ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

## Verification

**Proof technique:** direct.

1.1 Every $a\in\Omega$ is algebraic over $\mathbb F_p$ by [L6], so [L1] makes $\mathbb F_p(a)$ a finite field. Hence $\Omega$ is the union of its finite subfields. [L1, L6]

1.2 For $n\ge1$, let $E_n$ be the roots in $\Omega$ of $x^{p^n}-x$. This polynomial splits by [L6], and its derivative is $-1$, so [L7] gives exactly $p^n$ distinct roots. By [L2], the root set is closed under subtraction and multiplication, and it is closed under nonzero inverses; hence [L3] makes $E_n$ a subfield of order $p^n$. Any other subfield of that order consists entirely of roots by [L4], so it equals $E_n$. [L2, L3, L4, L6, L7, algebra]

2.1 If $a$ lies in a finite subfield of order $p^d$, choose $n\ge d$. Every element $b$ of that subfield satisfies $b^{p^d}=b$ by [L4]. Since $d$ divides $n!$, iterating Frobenius by [L2] gives $b^{p^{n!}}=b$, so the subfield lies in $E_{n!}$. The same argument shows $E_{n!}\subseteq E_{(n+1)!}$, and step 1.1 now shows that their nested union is all of $\Omega$. [step 1.1, step 1.2, L2, L4]

3.1 The irreducibles supplied by [L5] have roots in $\Omega$ by [L6], and [L8] makes the generated simple subextensions have arbitrarily large finite degree. Therefore $\Omega$ cannot be finite, while it is algebraic by [L6]. [L5, L6, L8] ∎
