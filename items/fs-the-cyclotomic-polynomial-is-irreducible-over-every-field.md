---
id: fs-the-cyclotomic-polynomial-is-irreducible-over-every-field
kind: false-statement
title: "FALSE: $\\Phi_n$ is irreducible over every field"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cyclotomic-polynomials-are-irreducible-over-the-rationals, thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Theorem 5.4 and Corollary 5.7"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "P. L. Clark, Field Theory (course notes/monograph), Theorem 9.8"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
pipeline_run: null
---

## Statement

**False claim.** For every field $K$ and every $n\ge1$ with the characteristic of
$K$ not dividing $n$, the image of $\Phi_n$ in $K[t]$ is irreducible.

What is true is different in two directions: over $\mathbb Q$ every $\Phi_n$ is
irreducible, but over a finite field the factor degree is governed by the order
of the Frobenius class modulo $n$.

## Facts & Assumptions

**Given:** The rational irreducibility theorem and the finite-field factorisation theorem.

[L1] For every $n\ge1$, the cyclotomic polynomial $\Phi_n$ is irreducible in $\mathbb Q[t]$ ([[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]]).

[L2] If $\gcd(n,q)=1$, the reduction of $\Phi_n$ in $\mathbb F_q[t]$ is a product of distinct monic irreducibles, each of degree the order of $[q]$ modulo $n$ ([[thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field]]).

## Refutation

**Proof technique:** direct.

1.1 In $(\mathbb Z/5)^\times$ one has $[11]=[1]$, so the order of $[11]$ modulo $5$ is $1$. Therefore [L2] says that over $\mathbb F_{11}$ every irreducible factor of $\Phi_5$ has degree $1$. [L2, algebra]

2.1 Hence the reduction of $\Phi_5$ in $\mathbb F_{11}[t]$ is a product of distinct linear factors, so it is reducible there. This contradicts the false claim. [step 1.1, algebra]

3.1 The contradiction does not touch [L1]: irreducibility over $\mathbb Q$ is a theorem, but it does not persist over arbitrary base fields. [step 2.1, L1] ∎

## Remarks

- **The finite-field theorem is the correct replacement.** The question over $\mathbb F_q$ is not "irreducible or not?" in the abstract, but "what is the order of $[q]$ modulo $n$?"
