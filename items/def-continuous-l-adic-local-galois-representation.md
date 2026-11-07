---
id: def-continuous-l-adic-local-galois-representation
kind: definition
title: "Continuous finite-dimensional ℓ-adic representation of a local Galois group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-absolute-galois-group-of-a-local-field
  - def-field-of-p-adic-numbers
  - def-vector-space
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Luc Illusie, Grothendieck and vanishing cycles, §2"
      url: "https://www.numdam.org/item/AFST_2021_6_30_1_83_0.pdf"
    - title: "Masao Oi, Introduction to the Local Langlands Correspondence, §5.1"
      url: "https://masaooi.github.io/LLC.pdf"
verification:
  precheck: n/a
---

## Definition

Let $K$ be a nonarchimedean local field with finite residue field, fix a separable closure $K_s$, and let $G_K=\mathrm{Gal}(K_s/K)$ with its Krull topology. For a prime $\ell$ and a finite-dimensional $\mathbb Q_\ell$-vector space $V$ with its $\ell$-adic topology, a **continuous finite-dimensional $\ell$-adic representation of $G_K$** is a continuous group homomorphism $\rho:G_K\to\mathrm{GL}_{\mathbb Q_\ell}(V)$, where the automorphism group has the topology induced from $\mathrm{End}_{\mathbb Q_\ell}(V)$.

## Definition references

[[def-absolute-galois-group-of-a-local-field]]

[[def-field-of-p-adic-numbers]]

[[def-vector-space]]

[Luc Illusie, *Grothendieck and vanishing cycles*, §2](https://www.numdam.org/item/AFST_2021_6_30_1_83_0.pdf)

[Masao Oi, *Introduction to the Local Langlands Correspondence*, §5.1](https://masaooi.github.io/LLC.pdf)
