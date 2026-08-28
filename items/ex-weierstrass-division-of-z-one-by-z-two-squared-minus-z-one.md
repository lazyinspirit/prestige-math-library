---
id: ex-weierstrass-division-of-z-one-by-z-two-squared-minus-z-one
kind: example
title: "Dividing $z_1$ by the Weierstrass polynomial $z_2^2-z_1$"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-weierstrass-division-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 6.2"
      url: "https://jirilebl.github.io/scv/scv.pdf"
pipeline_run: frontier-22
---

## Example

Let $W(z_1,z_2)=z_2^2-z_1$. Dividing the germ $f(z_1,z_2)=z_1$ by $W$ gives

$$z_1=0\cdot W+z_1.$$

So the unique quotient is $q=0$ and the unique remainder is the degree-$0$
polynomial $r(z_1,z_2)=z_1$.

## Facts & Assumptions

**Given:** The dividend $f(z_1,z_2)=z_1$ and divisor $W(z_1,z_2)=z_2^2-z_1$.

[L1] Weierstrass division gives a unique quotient and a unique remainder of $z_2$-degree $<2$ ([[thm-weierstrass-division-theorem]]).

## Verification

**Proof technique:** direct.

1.1 The identity $$z_1=0\cdot(z_2^2-z_1)+z_1$$ is immediate. [given]

2.1 The remainder $z_1$ has degree $0$ in $z_2$, hence degree $<2$. Therefore [L1] identifies this displayed identity as the unique Weierstrass division of $z_1$ by $z_2^2-z_1$. [step 1.1, L1] ∎
