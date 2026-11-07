---
id: def-sifted-sum-and-sieve-density-product
kind: definition
title: "Sifted sums and their local-density main term"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-sieve-sequence-local-density-and-remainders
  - def-number-theoretic-mobius-function
  - cor-classical-mobius-inversion
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 12, §12.1"
      url: "https://kskedlaya.org/ant/chap-brun.html"
    - title: "D. R. Heath-Brown, Lectures on sieves, §1"
      url: "https://arxiv.org/pdf/math/0209360"
verification:
  precheck: n/a
---

## Definition

For a sieve sequence with cutoff $z$, the **sifted sum** is

$$S(A,z):=\sum_{\substack{1\le n\le N\\[n]_p\notin\Omega_p\text{ for every }p\in\mathcal P,\ p<z}}a(n).$$

For each $n$ define the squarefree integer

$$q_z(n):=\prod_{\substack{p\in\mathcal P,\ p<z\\[n]_p\in\Omega_p}}p.$$

Thus $S(A,z)=\sum_{q_z(n)=1}a(n)$, and $A_d=\sum_{d\mid q_z(n)}a(n)$ for
every squarefree $d\mid P(z)$.

Its **local-density product** and **Möbius remainder** are

$$V(z):=\prod_{\substack{p\in\mathcal P\\p<z}}(1-g(p)),\qquad
R(A,z):=\sum_{d\mid P(z)}\mu(d)r_d.$$

The empty product is $1$. Möbius inversion over positive divisors gives the
exact finite identity $S(A,z)=\sum_{d\mid P(z)}\mu(d)A_d$. If
$A_d=g(d)X+r_d$ for every
squarefree $d\mid P(z)$, then its main-term form is

$$S(A,z)=X V(z)+R(A,z),$$

where the product identity follows by expanding the finite product over the
primes below $z$.

## Definition references

[[def-sieve-sequence-local-density-and-remainders]]

[[def-number-theoretic-mobius-function]]

[[cor-classical-mobius-inversion]]

[Kedlaya, *Notes on Analytic Number Theory*, Ch. 12, §12.1](https://kskedlaya.org/ant/chap-brun.html)

[Heath-Brown, *Lectures on sieves*, §1](https://arxiv.org/pdf/math/0209360)
