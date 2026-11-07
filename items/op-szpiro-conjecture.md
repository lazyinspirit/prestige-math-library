---
id: op-szpiro-conjecture
kind: open-problem
title: Szpiro discriminant–conductor conjecture for elliptic curves over Q
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-elliptic-curve-minimal-discriminant-conductor-and-l-function-over-q
  - def-weierstrass-model-and-discriminant-invariants
  - def-axiom-of-choice
  - def-dependent-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: D. W. Masser, Note on a conjecture of Szpiro, Astérisque 183 (1990)
      url: https://www.numdam.org/item/AST_1990__183__19_0.pdf
      locator: §1, the minimal-discriminant/conductor formulation.
    - title: Héctor Pasten, Improved Bounds for Szpiro’s Conjecture, arXiv:2609.17390
      url: https://arxiv.org/pdf/2609.17390
      locator: Abstract and §§1–3, the conjectural statement and 2026 bounds.
---

## Open problem

For every real $\epsilon>0$, prove that there is a constant $C_\epsilon>0$ such that every elliptic curve $E/\mathbb Q$ satisfies
$$|\Delta_{\min}(E)|\le C_\epsilon N_E^{6+\epsilon},$$
where $|\Delta_{\min}(E)|$ is the positive minimal discriminant and $N_E$ is the arithmetic conductor with the Ogg normalization stated on the local A page.

## Open problem references

[[def-elliptic-curve-minimal-discriminant-conductor-and-l-function-over-q]]

[[def-weierstrass-model-and-discriminant-invariants]]

[D. W. Masser, *Note on a conjecture of Szpiro*, §1](https://www.numdam.org/item/AST_1990__183__19_0.pdf)

[Héctor Pasten, *Improved Bounds for Szpiro’s Conjecture*, arXiv:2609.17390](https://arxiv.org/pdf/2609.17390)

## Facts & Assumptions

**Given:** An elliptic curve $E/\mathbb Q$ and the local minimal-discriminant and conductor conventions stated in the A-page helper.

[F1] The helper defines $|\Delta_{\min}(E)|$ from the minimum local discriminant valuations and defines $N_E$ from the standard local conductor exponents. ([[def-elliptic-curve-minimal-discriminant-conductor-and-l-function-over-q]])

[A1] The current Néron-model existence interface used by that helper assumes AC and DC. ([[def-axiom-of-choice]], [[def-dependent-choice]])

## Status

Masser records this as Szpiro's conjecture. Pasten's September 2026 preprint proves weaker Faltings-height bounds, including an unconditional $h(E)\ll N_E\log\log N_E$ bound and a stronger bound under semistability outside a fixed finite set; it does not prove the displayed discriminant–conductor bound.
