---
id: thm-frobenius-endomorphism-and-finite-field-automorphism
kind: theorem
title: "Frobenius $x\\mapsto x^p$ is an injective endomorphism in characteristic $p$, and an automorphism for finite fields"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-binomial-theorem-over-a-commutative-ring, lem-prime-divides-intermediate-binomial-coefficients, thm-characteristic-of-a-field-is-zero-or-prime, def-field-homomorphism, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Sections 1-2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Propositions 4.19-4.24"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field of characteristic $p>0$. The **Frobenius map**

$$\operatorname{Fr}_F:F\to F,\qquad x\mapsto x^p,$$

is an injective field endomorphism. If $F$ is finite, it is an automorphism. Its $n$-fold iterate is $x\mapsto x^{p^n}$.

## Facts & Assumptions

**Given:** A field $F$ of positive characteristic $p$.

[L1] The binomial theorem holds in every commutative ring ([[thm-binomial-theorem-over-a-commutative-ring]]).

[L2] For $0<k<p$, the prime $p$ divides $\binom pk$ ([[lem-prime-divides-intermediate-binomial-coefficients]]).

[L3] A positive field characteristic is prime ([[thm-characteristic-of-a-field-is-zero-or-prime]]).

[L4] A field homomorphism preserves addition, multiplication, and $1$ ([[def-field-homomorphism]]).

[L5] An injection from a finite set to itself is a bijection ([[thm-subset-of-a-finite-set]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], all intermediate terms in $(x+y)^p$ have coefficients divisible by $p$ and hence vanish in $F$, so $(x+y)^p=x^p+y^p$. [given, L1, L2, L3, algebra]

1.2 Commutativity gives $(xy)^p=x^py^p$, and $1^p=1$, so Frobenius is an endomorphism by [L4]. [given, L4, algebra]

2.1 If $x^p=y^p$, then step 1.1 gives $(x-y)^p=0$. A field has no nonzero nilpotents, so $x-y=0$ and the map is injective. [step 1.1, algebra]

3.1 If $F$ is finite, [L5] turns this injection into a bijection, hence an automorphism. [step 1.2, step 2.1, L5]

4.1 Iterating and using $(x^{p^r})^p=x^{p^{r+1}}$ gives $\operatorname{Fr}_F^n(x)=x^{p^n}$, including $n=0$ as the identity. [step 1.2, algebra] ∎
