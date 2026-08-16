---
id: lem-perfect-subfield-of-a-one-step-root-extension-in-positive-characteristic
kind: lemma
title: "The elements with a $p^n$th power in the base form a perfect subfield carrying the one-step root condition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-frobenius-endomorphism-and-finite-field-automorphism, thm-perfect-field-characterizations, def-subfield]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Theorem 4.9"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Proposition 6.5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $L/F$ be an algebraic extension of characteristic $p>0$ such that every
nonconstant polynomial in $F[x]$ has a root in $L$. Then

$$F':=\{a\in L:a^{p^n}\in F\text{ for some }n\in\mathbb N\}$$

is a perfect intermediate field, and every nonconstant polynomial in $F'[x]$
has a root in $L$.

## Facts & Assumptions

**Given:** An algebraic root extension $L/F$ of characteristic $p>0$.

[L1] Frobenius is injective and respects addition and multiplication in characteristic $p$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L2] In positive characteristic, a field is perfect exactly when Frobenius is surjective ([[thm-perfect-field-characterizations]]).

[L3] A subset containing $0,1$ and closed under subtraction, multiplication, and nonzero inverses is a subfield ([[def-subfield]]).

## Proof

**Proof technique:** direct.

1.1 The set $F'$ contains $F$ by taking $n=0$. For $a,b\in F'$, choose one exponent $N$ at least as large as exponents witnessing both memberships. Then [L1] gives $(a-b)^{p^N}=a^{p^N}-b^{p^N}\in F$, $(ab)^{p^N}\in F$, and, for $a\ne0$, $(a^{-1})^{p^N}=(a^{p^N})^{-1}\in F$. Hence [L3] makes $F'$ an intermediate field. [L1, L3]

1.2 If $a\in F'$ and $a^{p^n}=c\in F$, the root hypothesis applied to $x^{p^{n+1}}-c$ gives $b\in L$ with $b^{p^{n+1}}=c$. Then $(b^p)^{p^n}=a^{p^n}$, so injectivity in [L1] gives $b^p=a$, and $b\in F'$ by its displayed power. Thus Frobenius on $F'$ is surjective and [L2] makes $F'$ perfect. [L1, L2, choose]

1.3 Let $g(x)=\sum_{i=0}^d a_ix^i\in F'[x]$ be nonconstant. Choose one $n$ with every $a_i^{p^n}\in F$. Then $g(x)^{p^n}=\sum_i a_i^{p^n}x^{ip^n}$ is a nonconstant polynomial over $F$, so it has a root $u\in L$. [L1, choose]

2.1 Since $g(u)^{p^n}=0$, injectivity of Frobenius gives $g(u)=0$. Thus every nonconstant polynomial over $F'$ has a root in $L$. [step 1.3, L1] ∎
