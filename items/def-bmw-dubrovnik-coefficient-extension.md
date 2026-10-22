---
id: def-bmw-dubrovnik-coefficient-extension
kind: definition
title: BMW coefficient extension for Dubrovnik parameters
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-kauffman-regular-isotopy-and-dubrovnik-conventions
  - def-bmw-algebra-with-fixed-kauffman-skein-convention
proof_strategy: not-applicable
axiom_use: "Choice-free: this is a quotient-ring definition by one displayed relation."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Frederick M. Goodman and Holly Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, Definition 3.1"
      url: "https://arxiv.org/pdf/math/0411155"
      locator: "PDF pp. 15–16: BMW coefficient parameters and their universal relation"
    - title: "Loïc Poulain d’Andecy, Fusion for the Yang–Baxter Equation and the Braid Group, Winter Braids Lecture Notes 7 (2020), §2.2"
      url: "https://proceedings.centre-mersenne.org/item/10.5802/wbln.35.pdf"
      locator: "PDF pp. 14–15: BMW parameters and braid-generator convention"
---

## Definition

Let
$$S=\mathbb Z[a^{\pm1},z,d^{\pm1}]/(z(d-1)-(a-a^{-1}))$$
be the universal Dubrovnik coefficient ring. Define the coefficient extension
$$T=S[q^{\pm1}]/(q-q^{-1}-z).$$
Inside $T$ write $z_B=q-q^{-1}$, $z_D=z_B$, $\rho=a$, and $\delta=d$. These names specify the intended BMW and Dubrovnik parameter images; the compatibility of their coefficient relations is proved separately.

## Definition references

[[def-kauffman-regular-isotopy-and-dubrovnik-conventions|Universal Dubrovnik coefficient ring]]

[[def-bmw-algebra-with-fixed-kauffman-skein-convention|BMW presentation and parameter symbols]]

[Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155)

[Poulain d’Andecy, *Fusion for the Yang–Baxter Equation and the Braid Group* (2020)](https://proceedings.centre-mersenne.org/item/10.5802/wbln.35.pdf)
