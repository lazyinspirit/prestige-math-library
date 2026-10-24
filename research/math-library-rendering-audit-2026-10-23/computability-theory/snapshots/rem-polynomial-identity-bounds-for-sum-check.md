---
id: rem-polynomial-identity-bounds-for-sum-check
kind: remark
title: "Existing polynomial identity bounds"
status: published
origin: pipeline
deps: [thm-root-bound-for-polynomials-over-a-domain, def-monomials-multidegree-and-total-degree]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local prerequisite repair and finite-counting argument; not independent review"
    delegated_by: "owner via UC-73 audit"
sources:
  references:
    - title: "Justin Thaler, Proofs, Arguments, and Zero-Knowledge (2023), \u00a73.4, Lemma 3.3, p.28"
      url: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf"
---

## Discussion

The existing [[thm-root-bound-for-polynomials-over-a-domain]] says that a nonzero univariate polynomial of degree $m$ over an integral domain has at most $m$ distinct roots. A field is an integral domain: if $ab=0$ and $a\ne0$, multiplication by $a^{-1}$ gives $b=0$.

A nonzero formal polynomial of total degree at most $d$ over a field vanishes at a uniform point of $S^n$ with probability at most $d/|S|$, for nonempty finite $S\subseteq F$. Here total degree and coefficient expansions are as in [[def-monomials-multidegree-and-total-degree]]. To see the bound directly, induct on $n$. For $n=0$ a nonzero constant never vanishes. For $n>0$, write $f=\sum_{j=0}^m f_j(x_1,\ldots,x_{n-1})x_n^j$ with $f_m\ne0$. The total degree of $f_m$ is at most $d-m$, so the induction hypothesis bounds the fraction of points of $S^{n-1}$ where it vanishes by $(d-m)/|S|$. At each remaining point the specialization in $x_n$ has degree $m$ and at most $m$ roots by the root bound. Splitting the finite set $S^n$ into these two cases gives a vanishing fraction at most $(d-m)/|S|+m/|S|=d/|S|$. This argument is finite counting and uses no Axiom of Choice.

Apply such bounds to a nonzero difference of formal polynomials. Individual degree bounds concern one variable at a time; total degree bounds concern sums of exponents within a monomial. Sum-check's round comparison is univariate and needs only the root bound. When a degree bound is at least the field size, the resulting probability bound may be vacuous. Distinct formal polynomials over a finite field need not define distinct functions on the whole field.
