---
id: fs-weierstrass-preparation-is-unique-without-the-unit-condition
kind: false-statement
title: "FALSE: arbitrary factorizations by a Weierstrass polynomial are unique without unit and degree conditions"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-weierstrass-preparation-theorem, def-weierstrass-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 6.2"
      url: "https://jirilebl.github.io/scv/scv.pdf"
pipeline_run: frontier-22
---

## Statement

**False claim:** For a regular germ $f$, a factorization $f=aP$ is unique
whenever $P$ is a Weierstrass polynomial, even if $a$ need not be a unit and
the degree of $P$ need not equal the regular order of $f$.

## Facts & Assumptions

**Given:** The germ $f(z_1,z_2)=z_2^2$.

[L1] The genuine Weierstrass preparation theorem factors a regular germ as a unit times a Weierstrass polynomial ([[thm-weierstrass-preparation-theorem]]).

[L2] Both $z_2$ and $z_2^2$ are Weierstrass polynomials in the variable $z_2$ ([[def-weierstrass-polynomial]]).

## Refutation

**Proof technique:** direct.

1.1 The factorization $$z_2^2=1\cdot z_2^2$$ is a genuine preparation by [L1]. [L1, given]

2.1 If neither the unit condition nor the degree condition is retained, then also $$z_2^2=z_2\cdot z_2$$ is allowed, and [L2] says the second factor is a Weierstrass polynomial of degree $1$. This differs from the genuine degree-$2$ preparation in step 1.1, so the relaxed factorization is not unique. [step 1.1, L2] ∎
