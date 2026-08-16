---
id: lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power
kind: lemma
title: "If $a$ is not a $p$th power in a characteristic-$p$ field, then $x^{p^n}-a$ is irreducible for every $n\\ge1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-frobenius-endomorphism-and-finite-field-automorphism, thm-polynomial-is-separable-iff-coprime-to-its-derivative, thm-splitting-fields-exist-for-nonzero-polynomials, thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $F$ have characteristic $p>0$, let $a\in F$ not be a $p$th power in $F$,
and let $n\ge1$. Then $x^{p^n}-a$ is irreducible in $F[x]$.

## Facts & Assumptions

**Given:** A field $F$ of characteristic $p>0$, an element $a\notin F^p$, and a natural number $n\ge1$.

[L1] Frobenius is injective and $(u-v)^{p^r}=u^{p^r}-v^{p^r}$ in characteristic $p$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L2] A nonzero polynomial is separable exactly when it is coprime to its derivative ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]).

[L3] Every nonzero polynomial over a field has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]).

[L4] Every irreducible polynomial in characteristic $p$ is uniquely a separable irreducible polynomial in a power $x^{p^e}$ ([[thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]]).

## Proof

**Proof technique:** direct.

1.1 In a splitting field supplied by [L3], choose a root $b$ of $x^{p^n}-a$; [L1] gives $x^{p^n}-a=(x-b)^{p^n}$, so $b$ is its only distinct root. [L1, L3]

2.1 Let $q$ be the minimal polynomial of $b$ over $F$. By [L4], write $q(x)=g(x^{p^r})$ with $g$ irreducible and separable. Every root of $q$ is also a root of $x^{p^n}-a$, hence equals $b$ by step 1.1; separability of $g$ and [L2] therefore force $g$ to be linear. Thus $q(x)=x^{p^r}-c$ for some $c=b^{p^r}\in F$ and some $0\le r\le n$. [step 1.1, L2, L4]

3.1 If $r<n$, then $a=b^{p^n}=c^{p^{n-r}}$ is a $p$th power in $F$, contrary to the hypothesis; hence $r=n$ and $q=x^{p^n}-a$. [step 2.1, algebra]

4.1 Therefore $x^{p^n}-a$ is the minimal polynomial of $b$ and is irreducible. The hypothesis excludes $a=0$ because $0=0^p$, and the same argument includes $n=1$. [step 3.1] ∎
