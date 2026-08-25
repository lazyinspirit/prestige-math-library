---
id: lem-the-constant-term-of-a-cyclotomic-polynomial
kind: lemma
title: "$\\Phi_1(0)=-1$ and $\\Phi_n(0)=1$ for $n\\ge2$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cyclotomic-polynomial, thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient, def-polynomial-evaluation-and-root, thm-universal-property-of-a-polynomial-ring, def-sum-over-a-finite-index-set, def-divides-in-z]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory (course notes/monograph), Exercise 9.8"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
pipeline_run: null
---

## Statement

For the cyclotomic polynomials of [[def-cyclotomic-polynomial]],

$$\Phi_1(0)=-1,\qquad \Phi_n(0)=1\ \text{ for every } n\ge2 .$$

## Facts & Assumptions

**Given:** The cyclotomic polynomials $\Phi_n\in\mathbb Z[t]$ and their defining identity; evaluation at $0$ is as in [[def-polynomial-evaluation-and-root]].

[L1] For every $n\ge1$ one has $\prod_{d\mid n}\Phi_d=t^{n}-1$, the product being over the positive divisors of $n$ ([[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]], [[def-sum-over-a-finite-index-set]], [[def-divides-in-z]]).

[L2] Evaluation at an element of a commutative ring is a unital ring homomorphism $\mathbb Z[t]\to\mathbb Z$ ([[thm-universal-property-of-a-polynomial-ring]]), so it carries finite products to finite products.

## Proof

**Proof technique:** induction.

1.1 $\Phi_1=t-1$ by [[def-cyclotomic-polynomial]], so $\Phi_1(0)=-1$; this is also the base of the induction below, taken at $n=2$, where [L1] and [L2] give $\Phi_1(0)\,\Phi_2(0)=0^{2}-1=-1$, hence $-\Phi_2(0)=-1$ and $\Phi_2(0)=1$. [base, L1, L2, given]

1.2 Inductive hypothesis: fix $n\ge3$ and assume $\Phi_m(0)=1$ for every $m$ with $2\le m<n$. [ih]

2.1 Evaluating the identity of [L1] at $0$ and using [L2] gives $\prod_{d\mid n}\Phi_d(0)=-1$; separating the factor $d=1$, which is $-1$ by step 1.1, leaves $\prod_{d\mid n,\,d>1}\Phi_d(0)=1$. [step 1.1, L1, L2]

3.1 Every factor with $1<d<n$ equals $1$ by step 1.2, so the product reduces to $\Phi_n(0)=1$, which is the assertion at $n$; the induction is complete and $\Phi_n(0)=1$ for every $n\ge2$. [step 1.2, step 2.1, discharge-induction] ∎

## Remarks

- **What this is for.** The value $1$ at the origin makes $\Phi_n(x)\equiv1$ modulo $x$ for every integer $x$, so no prime dividing $x$ divides $\Phi_n(x)$. That is the whole mechanism behind [[thm-infinitely-many-primes-congruent-to-one-modulo-n]], and the exceptional value at $n=1$ is why that theorem treats $n=1$ separately.
