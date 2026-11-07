---
id: def-effective-cone-of-divisors
kind: definition
title: "Effective cone of divisors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-smooth-fano-variety-over-number-field
  - def-picard-rank-over-number-field
  - def-cartier-divisor
  - def-invertible-sheaf
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §§3–4"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
    - title: "Régis de la Bretèche, Tim Browning, and Emmanuel Peyre, The Manin–Peyre conjecture for smooth spherical Fano varieties of semisimple rank one, §§2, 4"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/235A5BAB435DC8519686A76FAD2EB686/S2050509423001238a.pdf/div-class-title-the-manin-peyre-conjecture-for-smooth-spherical-fano-varieties-of-semisimple-rank-one-div.pdf"
verification: {}
---

## Definition

Let $K$ be a number field, let $X/K$ be a smooth Fano variety with free finite-rank Picard group, and set $V:=\operatorname{Pic}(X)\otimes_{\mathbb Z}\mathbb R$. A Cartier divisor $D$ on $X$ is **effective** if it has local equations in $\mathcal O_X$ that are nonzerodivisors. Its class is $[D]:=[\mathcal O_X(D)]\otimes 1\in V$. The **effective cone** $C_{\mathrm{eff}}(X)\subseteq V$ is the closure, in the usual finite-dimensional real topology, of the set of all finite sums $\sum_{j=1}^m t_j[D_j]$ with $m\ge0$, $t_j\in\mathbb R_{ge0}$, and each $D_j$ an effective Cartier divisor. The empty sum is $0$.

## Definition references

[[def-smooth-fano-variety-over-number-field]]

[[def-picard-rank-over-number-field]]

[[def-cartier-divisor]]

[[def-invertible-sheaf]]
