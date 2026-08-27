---
id: fs-every-irreducible-real-polynomial-has-degree-one
kind: false-statement
title: "FALSE: every irreducible polynomial in $\\mathbb R[x]$ has degree $1$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-irreducible-real-polynomials-have-degree-one-or-two, lem-x-squared-plus-one-is-irreducible-over-the-reals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 5"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
pipeline_run: frontier-20
---

## Statement

**False claim:** every irreducible polynomial in $\mathbb R[x]$ has degree $1$.

## Facts & Assumptions

**Given:** The polynomial $f(x)=x^2+1$.

[L1] The polynomial $x^2+1$ is irreducible in $\mathbb R[x]$ ([[lem-x-squared-plus-one-is-irreducible-over-the-reals]]).

[L2] An irreducible polynomial in $\mathbb R[x]$ has degree $1$ or $2$ ([[cor-irreducible-real-polynomials-have-degree-one-or-two]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the polynomial $x^2+1$ is irreducible over $\mathbb R$. [L1]

2.1 It has degree $2$, and [L2] says that degree $2$ is the exact non-linear possibility for irreducible real polynomials. [L2, step 1.1]

3.1 Therefore the degree-one claim is false. [step 2.1] ∎
