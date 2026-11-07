---
id: def-peyre-leading-constant
kind: definition
title: "Peyre leading constant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-peyre-alpha-factor
  - def-picard-rank-over-number-field
  - def-peyre-beta-factor
  - def-peyre-tamagawa-measure
justified_by: []
axiom_use: >-
  The conditional tau factor inherits AC and AC_omega from its adelic measure
  prerequisites; the product defining theta introduces no further axiom.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §§3–4"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
    - title: "Régis de la Bretèche, Tim Browning, and Emmanuel Peyre, The Manin–Peyre conjecture for smooth spherical Fano varieties of semisimple rank one, §4"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/235A5BAB435DC8519686A76FAD2EB686/S2050509423001238a.pdf/div-class-title-the-manin-peyre-conjecture-for-smooth-spherical-fano-varieties-of-semisimple-rank-one-div.pdf"
    - title: "Jakob Glas, Counting rational points over function fields, PhD thesis, §2.3 (2024)"
      url: "https://research-explorer.ista.ac.at/download/18132/18140/example-phd.pdf"
      locator: "Chapter 2, §2.3, printed pp. 10–11 / PDF pp. 21–22: Manin–Peyre conjecture, alpha-beta-tau factors, thin sets, and accumulating lines on cubic surfaces."
verification: {}
---

## Definition

Let $K$ be a number field, let $X/K$ satisfy the Peyre almost-Fano admissibility conditions, and fix an adelic anticanonical height $H$. When its alpha and beta factors and conditional Tamagawa constant are defined, the **Peyre leading constant** is
$$
\theta_H(X):=\alpha(X)\,\beta(X)\,\tau_H(X).
$$
For a nonempty Zariski-open subset $U\subseteq X$, put $N_U(B):=\#\{P\in U(K):H(P)\le B\}$. The factor is the predicted coefficient in the Manin–Peyre counting formula $N_U(B)\sim\theta_H(X)B(\log B)^{\rho(X)-1}$; this definition asserts neither that such an asymptotic holds nor that $U=X$ is permissible.

## Definition references

[[def-peyre-admissibility-conditions]]

[[def-peyre-alpha-factor]]

[[def-peyre-beta-factor]]

[[def-peyre-tamagawa-measure]]

[Emmanuel Peyre, §§3–4](https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf)
