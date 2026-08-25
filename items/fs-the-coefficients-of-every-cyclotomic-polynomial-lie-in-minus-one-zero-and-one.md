---
id: fs-the-coefficients-of-every-cyclotomic-polynomial-lie-in-minus-one-zero-and-one
kind: false-statement
title: "FALSE: every cyclotomic polynomial has all coefficients in $\\{-1,0,1\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cyclotomic-polynomial, thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "P. L. Clark, Field Theory (course notes/monograph), Section 9.1.2"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
pipeline_run: null
---

## Statement

**False claim.** Every coefficient of every cyclotomic polynomial
$\Phi_n\in\mathbb Z[t]$ lies in $\{-1,0,1\}$.

The failure first appears at $n=105$: the coefficient of $t^{7}$ in
$\Phi_{105}(t)$ is $-2$.

## Facts & Assumptions

**Given:** The cyclotomic recursion $$ \prod_{d\mid n}\Phi_d(t)=t^{n}-1 $$ for $n\ge1$ ([[def-cyclotomic-polynomial]]).

[L1] For every $n\ge1$, $\Phi_n$ is a monic polynomial in $\mathbb Z[t]$ and the displayed divisor recursion holds ([[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]]).

## Refutation

**Proof technique:** direct.

1.1 Running the divisor recursion for $n=105=3\cdot5\cdot7$ and truncating modulo $t^{8}$ gives $$ \Phi_{105}(t)\equiv\frac{(1-t^{3})(1-t^{5})(1-t^{7})}{1-t}\equiv 1+t+t^{2}-t^{5}-t^{6}-2t^{7}\pmod{t^{8}}. $$ The first congruence is the defining recursion with every factor of degree at least $15$ dropped modulo $t^{8}$, and the second comes from expanding $(1-t)^{-1}=1+t+t^{2}+t^{3}+t^{4}+t^{5}+t^{6}+t^{7}\pmod{t^{8}}$. [given, L1, algebra]

2.1 Step 1.1 shows that the coefficient of $t^{7}$ in $\Phi_{105}(t)$ is $-2$, and $-2\notin\{-1,0,1\}$. So the false claim fails. [step 1.1, algebra] ∎

## Remarks

- **Why this is a real pattern and not a silly claim.** For many small values of $n$ the coefficients do lie in $\{-1,0,1\}$, so the first counterexample is not visually obvious from the recursion alone.
