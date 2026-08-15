---
id: lem-power-congruence-root-bound-modulo-a-prime
kind: lemma
title: ' For prime $q$ and $d\ge1$, the congruence $x^d\equiv1\pmod q$ has at most $d$ residue-class solutions'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-z-mod-p-is-a-field, lem-field-is-a-commutative-ring, thm-root-bound-for-polynomials-over-a-domain, def-integers-modulo-n, def-polynomial-evaluation-and-root]
justified_by: []
aliases: []
landmark: false
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
    - title: "Peter Hackman, Elementary Number Theory, Chapter C"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

If $q$ is prime and $d\ge1$, then

$$x^d\equiv1\pmod q$$

has at most $d$ distinct solution classes modulo $q$.

## Facts & Assumptions

**Given:** A prime $q$ and an integer $d\ge1$.

[L1] The residue-class ring $\mathbb Z/q$ is a field when $q$ is prime ([[thm-z-mod-p-is-a-field]]).

[L2] Every field is a commutative ring and has no zero divisors ([[lem-field-is-a-commutative-ring]]).

[L3] A nonzero polynomial of degree $d$ over an integral domain has at most $d$ roots ([[thm-root-bound-for-polynomials-over-a-domain]]).

[L4] Congruence modulo $q$ is equality of classes in $\mathbb Z/q$, and a root is an element at which polynomial evaluation is zero ([[def-integers-modulo-n]], [[def-polynomial-evaluation-and-root]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $\mathbb Z/q$ is an integral domain. The polynomial $f(X)=X^d-1$ over this domain is nonzero and has degree $d$. [L1, L2, algebra]

2.1 By [L4], the solution classes of the congruence are exactly the roots of $f$ in $\mathbb Z/q$. The bound [L3] therefore gives at most $d$ such classes. [step 1.1, L3, L4] ∎
