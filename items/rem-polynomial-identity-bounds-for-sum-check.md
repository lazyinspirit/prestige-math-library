---
id: rem-polynomial-identity-bounds-for-sum-check
kind: remark
title: "Existing polynomial identity bounds"
status: published
origin: pipeline
deps: [thm-root-bound-for-polynomials-over-a-domain, thm-schwartz-zippel-lemma]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Justin Thaler, Proofs, Arguments, and Zero-Knowledge (2023), \u00a73.4, Lemma 3.3, p.28"
      url: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf"
---

## Discussion

The existing [[thm-root-bound-for-polynomials-over-a-domain]] says that a nonzero univariate polynomial of degree $m$ over an integral domain has at most $m$ distinct roots. A field is an integral domain: if $ab=0$ and $a\ne0$, multiplication by $a^{-1}$ gives $b=0$.

The existing [[thm-schwartz-zippel-lemma]] says that a nonzero formal polynomial of total degree at most $d$ over a field vanishes at a uniform point of $S^n$ with probability at most $d/|S|$, for nonempty finite $S\subseteq F$.

Apply such bounds to a nonzero difference of formal polynomials. Individual degree bounds concern one variable at a time; total degree bounds concern sums of exponents within a monomial. Sum-check's round comparison is univariate and needs only the root bound. When a degree bound is at least the field size, the resulting probability bound may be vacuous. Distinct formal polynomials over a finite field need not define distinct functions on the whole field.
