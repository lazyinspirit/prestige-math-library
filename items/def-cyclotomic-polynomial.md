---
id: def-cyclotomic-polynomial
kind: definition
title: "The cyclotomic polynomials $\\Phi_n\\in\\mathbb Z[t]$, defined by $\\prod_{d\\mid n}\\Phi_d=t^{n}-1$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-polynomial-ring-over-a-commutative-ring, thm-polynomial-ring-is-a-commutative-ring, def-polynomial-degree-leading-coefficient-and-monic, thm-monic-polynomial-division, def-divides-in-z]
justified_by: [thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
    - title: "P. L. Clark, Field Theory (course notes/monograph), Section 9.1.2"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
pipeline_run: null
---

## Definition

The **cyclotomic polynomials** $\Phi_n\in\mathbb Z[t]$
([[def-polynomial-ring-over-a-commutative-ring]]) are defined by recursion on
$n\ge1$:

$$\Phi_1:=t-1,\qquad \Phi_n:=\frac{t^{n}-1}{\displaystyle\prod_{\substack{d\mid n\\ 0<d<n}}\Phi_d}\quad(n\ge2),$$

the divisors being the positive divisors of $n$ ([[def-divides-in-z]]). The
product is formed in the commutative ring $\mathbb Z[t]$
([[thm-polynomial-ring-is-a-commutative-ring]]): multiply the finitely many
factors in any enumeration of the divisor set. Associativity and commutativity
make the result independent of that enumeration.

**What the fraction means.** The denominator
$P_n:=\prod_{d\mid n,\,d<n}\Phi_d$ is a product of monic polynomials in
$\mathbb Z[t]$, hence itself monic
([[def-polynomial-degree-leading-coefficient-and-monic]]), so
[[thm-monic-polynomial-division]] supplies a unique pair $q,r\in\mathbb Z[t]$
with $t^{n}-1=qP_n+r$ and $r=0$ or $\deg r<\deg P_n$. The definition sets
$\Phi_n:=q$, **and asserts $r=0$**. That assertion, together with the
consequences that each $\Phi_n$ is monic of degree $\varphi(n)$ and that

$$\prod_{d\mid n}\Phi_d=t^{n}-1$$

for every $n\ge1$, is discharged by
[[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]],
which is why that theorem is a numbered result and not a parenthesis: the
division is carried out over $\mathbb Z$, not over a field, so exactness is a
statement about integer coefficients and does not follow from the division
algorithm.

## Remarks

- **Why not define $\Phi_n$ by its roots.** The usual definition takes $\Phi_n$
  to be the monic polynomial whose roots are the primitive $n$-th roots of unity
  in $\mathbb C$, or the minimal polynomial over $\mathbb Q$ of a primitive
  $n$-th root of unity.
  Neither is available at this point in the reading order, and neither would
  serve: the minimal-polynomial version makes
  [[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]] a tautology
  rather than a theorem, and over a base field where the reduction of $\Phi_n$
  is reducible it no longer controls the factorisation there
  ([[thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field]]). The
  recursion above is a statement about $\mathbb Z[t]$ alone, and the description
  of the roots is then a theorem
  ([[thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity]]).

- **Reduction into another field.** For a field $K$ the image of $\Phi_n$ under
  the coefficientwise ring homomorphism $\mathbb Z[t]\to K[t]$ induced by the
  canonical map $\mathbb Z\to K$ and fixing $t$ is again written $\Phi_n$ when
  no confusion arises; the identity $\prod_{d\mid n}\Phi_d=t^{n}-1$ is
  preserved, since a ring homomorphism preserves finite products.
