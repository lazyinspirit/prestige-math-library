---
id: cor-every-real-polynomial-factors-into-linear-and-irreducible-quadratic-factors
kind: corollary
title: "Every real polynomial factors into linear and irreducible quadratic factors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-irreducible-real-polynomials-have-degree-one-or-two, lem-polynomial-factorisation-into-irreducibles]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
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

Every nonzero polynomial $f \in \mathbb R[x]$ can be written as a nonzero real
scalar times a product of linear polynomials and irreducible quadratic
polynomials.

## Facts & Assumptions

**Given:** A nonzero polynomial $f \in \mathbb R[x]$.

[L1] Every nonzero nonunit polynomial over a field factors into irreducible polynomials ([[lem-polynomial-factorisation-into-irreducibles]]).

[L2] An irreducible polynomial in $\mathbb R[x]$ has degree $1$ or $2$ ([[cor-irreducible-real-polynomials-have-degree-one-or-two]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is a nonzero constant, then it already has the required form: it is itself the nonzero scalar multiplying the empty product. Now assume that $f$ is a nonzero nonunit polynomial. By [L1], it factors as $$ f=u\,p_1\cdots p_r $$ with $u \in \mathbb R^\times$ and each $p_j$ irreducible in $\mathbb R[x]$. [L1, algebra]

2.1 By [L2], each irreducible factor $p_j$ has degree $1$ or $2$. Therefore each $p_j$ is either linear or an irreducible quadratic, so the factorization of step 1.1 is exactly the required one. [L2, step 1.1]

3.1 The constant and nonconstant cases together prove the statement for every nonzero polynomial in $\mathbb R[x]$. [step 1.1, step 2.1] ∎
