---
id: ex-a-shear-makes-z-one-z-two-regular-in-z-two
kind: example
title: "A linear shear makes $z_1z_2$ regular in $z_2$"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-regular-holomorphic-germ, lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular]
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
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Exercise 6.2.5"
      url: "https://jirilebl.github.io/scv/scv.pdf"
pipeline_run: frontier-22
---

## Example

Let $T(z_1,z_2)=(z_1+z_2,z_2)$. Then

$$\bigl(z_1z_2\bigr)\circ T=(z_1+z_2)z_2=z_1z_2+z_2^2,$$

and along the slice $z_1=0$ this becomes $z_2^2$. So the sheared germ is
regular in $z_2$ of order $2$.

## Facts & Assumptions

**Given:** The shear $T(z_1,z_2)=(z_1+z_2,z_2)$.

[L1] Regularity in the last variable is the exact-order condition of [[def-regular-holomorphic-germ]].

[L2] Every nonzero germ can be made regular after an invertible complex-linear change of coordinates ([[lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular]]).

## Verification

**Proof technique:** direct.

1.1 Direct substitution gives $$\bigl(z_1z_2\bigr)\circ T=z_1z_2+z_2^2.$$ [given, algebra]

2.1 Setting $z_1=0$ in step 1.1 yields the slice $z_2^2$, which has exact order $2$ at the origin. So [L1] makes the transformed germ regular in $z_2$ of order $2$, exhibiting the coordinate-change mechanism promised by [L2]. [step 1.1, L1, L2] ∎
