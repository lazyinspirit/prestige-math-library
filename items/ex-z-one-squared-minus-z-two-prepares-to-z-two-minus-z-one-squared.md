---
id: ex-z-one-squared-minus-z-two-prepares-to-z-two-minus-z-one-squared
kind: example
title: "$z_1^2-z_2$ prepares to the Weierstrass polynomial $z_2-z_1^2$"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-weierstrass-preparation-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 6.2"
      url: "https://jirilebl.github.io/scv/scv.pdf"
pipeline_run: frontier-22
---

## Example

For $f(z_1,z_2)=z_1^2-z_2$, the Weierstrass preparation in the variable $z_2$
is

$$f=(-1)\,(z_2-z_1^2).$$

So the prepared polynomial is exactly $W(z_1,z_2)=z_2-z_1^2$, and the unit is
the constant $-1$.

## Facts & Assumptions

**Given:** The germ $f(z_1,z_2)=z_1^2-z_2$ at the origin.

[L1] A regular germ factors as a unit times a Weierstrass polynomial ([[thm-weierstrass-preparation-theorem]]).

## Verification

**Proof technique:** direct.

1.1 The slice $f(0,z_2)=-z_2$ has a simple zero at $0$, so $f$ is regular in $z_2$ of order $1$. [given, algebra]

2.1 The identity $$f=(-1)\,(z_2-z_1^2)$$ already has the required form: the factor $-1$ is a unit and $z_2-z_1^2$ is monic in $z_2$ with lower coefficient $-z_1^2$ vanishing at the origin. Thus [L1] produces exactly this preparation. [step 1.1, L1] ∎
