---
id: thm-reduction-mod-prime-irreducibility-test
kind: theorem
title: 'Irreducibility after reduction modulo a prime implies irreducibility over Q when the leading coefficient survives'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-gauss-lemma-for-integer-polynomials, thm-universal-property-of-a-polynomial-ring, prop-canonical-quotient-ring-map, prop-integers-modulo-n-as-a-quotient-ring, def-prime, thm-z-mod-p-is-a-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Theorem 23.13(1)'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
    - title: 'Keith Conrad, Irreducibility Tests in Q[T], Appendix A.3'
      url: 'https://kconrad.math.uconn.edu/blurbs/ringtheory/irredtestsoverQ.pdf'
pipeline_run: null
---

## Statement

Let $f\in\mathbb Z[x]$ be primitive and of positive degree, and let $p$ be prime. Suppose $p$ does not divide the leading coefficient of $f$. If the coefficientwise reduction $\bar f\in(\mathbb Z/p)[x]$ is irreducible, then $f$ is irreducible in $\mathbb Q[x]$.

## Facts & Assumptions

**Given:** A primitive positive-degree polynomial $f\in\mathbb Z[x]$ and a prime $p$ not dividing its leading coefficient.

[L1] A rational factorization of a primitive integer polynomial clears to a factorization into primitive integer polynomials of the same positive degrees ([[thm-gauss-lemma-for-integer-polynomials]]).

[L2] A coefficient ring homomorphism extends to a polynomial-ring homomorphism ([[thm-universal-property-of-a-polynomial-ring]]).

[L3] The quotient map $\mathbb Z\to\mathbb Z/p\mathbb Z$ has kernel $p\mathbb Z$ ([[prop-canonical-quotient-ring-map]]).

[L4] The ring $\mathbb Z/p$ is the quotient $\mathbb Z/p\mathbb Z$ ([[prop-integers-modulo-n-as-a-quotient-ring]]).

[L5] A prime is an integer greater than $1$ with no positive divisors other than $1$ and itself ([[def-prime]]).

[L6] For prime $p$, the ring $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose for contradiction that $f$ is reducible over $\mathbb Q$; [L1] gives $f=GH$ with primitive $G,H\in\mathbb Z[x]$ of positive degree. [assume-contra, given, L1]

2.1 Reduce coefficients using [L2], [L3], and [L4]. Neither $\bar G$ nor $\bar H$ is zero, since primitivity forbids $p$ from dividing every coefficient; and because the leading coefficient of $f$ survives, $\deg\bar f=\deg f=\deg G+\deg H$, so both reductions retain positive degree. [step 1.1, L1, L2, L3, L4, L5, algebra]

3.1 Thus $\bar f=\bar G\bar H$ is a factorization into two nonunits in the polynomial ring over the field of [L6], contradicting the assumed irreducibility of $\bar f$; therefore $f$ is irreducible over $\mathbb Q$. [step 2.1, L6, discharge-contradiction] ∎
