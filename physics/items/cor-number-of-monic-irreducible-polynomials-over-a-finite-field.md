---
id: cor-number-of-monic-irreducible-polynomials-over-a-finite-field
kind: corollary
title: "Möbius inversion gives the closed formula for the number of monic irreducibles over $\\mathbb F_q$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-classical-mobius-inversion, prop-divisor-sum-identity-for-monic-irreducibles-over-a-finite-field]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Finite Fields, Section 6"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
    - title: "Kiran S. Kedlaya, An Introduction to Analytic Number Theory, Section 3.2"
      url: "https://kskedlaya.org/ant/chapter-3.html"
pipeline_run: null
---

## Statement

Let $\mathbb F_q$ be a finite field of order $q$, and let $N_q(n)$ denote the
number of monic irreducible polynomials of degree $n$ in $\mathbb F_q[t]$. Then
for every $n\ge1$,

$$ N_q(n)=\frac1n\sum_{\substack{d\mid n\\d>0}} \mu(d)q^{n/d}. $$

## Facts & Assumptions

**Given:** A finite field $\mathbb F_q$ of order $q$ and an integer $n\ge1$.

## Proof

**Proof technique:** direct.

1.1 By [[prop-divisor-sum-identity-for-monic-irreducibles-over-a-finite-field]], one has $\sum_{d\mid n} d\,N_q(d)=q^n$. Regard $f(d):=d\,N_q(d)$ and $g(n):=q^n$ as arithmetic functions of the degree variable. [given]

2.1 Applying [[cor-classical-mobius-inversion]] to those functions gives $n\,N_q(n)=\sum_{d\mid n}\mu(d)q^{n/d}$. [step 1.1]

3.1 Since $n\ge1$, division by $n$ yields the claimed closed formula for $N_q(n)$. [step 2.1, algebra] ∎
