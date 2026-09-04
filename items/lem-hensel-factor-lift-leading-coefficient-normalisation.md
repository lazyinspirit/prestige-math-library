---
id: lem-hensel-factor-lift-leading-coefficient-normalisation
kind: lemma
title: "Monicity and degree stay fixed during Hensel factor lifting"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: []
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Chapter 22"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $A$ be a commutative ring, let $g,h \in A[T]$ be monic of degrees $m,n$,
and let $u,v \in A[T]$ satisfy $\deg u < m$ and $\deg v < n$. Then $g+u$ and
$h+v$ are still monic of degrees $m$ and $n$.

## Facts & Assumptions

**Given:** Monic polynomials $g,h$ of degrees $m,n$ and correction terms $u,v$ with $\deg u < m$ and $\deg v < n$.

[L1] A polynomial of degree less than $m$ has zero $T^m$-coefficient, and similarly a polynomial of degree less than $n$ has zero $T^n$-coefficient.

## Proof

**Proof technique:** compare leading terms.

1.1 Since $\deg u < m$, [L1] shows that the coefficient of $T^m$ in $u$ is $0$. Hence the coefficient of $T^m$ in $g+u$ is the coefficient of $T^m$ in $g$, namely $1$. Therefore $g+u$ is monic of degree $m$. [L1, given]

1.2 Since $\deg v < n$, [L1] shows that the coefficient of $T^n$ in $v$ is $0$. Hence the coefficient of $T^n$ in $h+v$ is the coefficient of $T^n$ in $h$, namely $1$. Therefore $h+v$ is monic of degree $n$. [L1, given]

2.1 Hence degree-bounded corrections preserve the prescribed monicity and degrees throughout Hensel lifting. [step 1.1, step 1.2] ∎
