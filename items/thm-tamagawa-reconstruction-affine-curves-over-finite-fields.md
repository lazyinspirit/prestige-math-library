---
id: thm-tamagawa-reconstruction-affine-curves-over-finite-fields
kind: theorem
title: Grothendieck reconstruction for affine hyperbolic curves over finite fields
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-affine-hyperbolic-curve-type
  - def-arithmetic-fundamental-group-extension
  - def-jacobian-of-smooth-proper-curve
  - def-finite-field-and-its-order
  - def-tame-fundamental-group-of-affine-curve
  - thm-arithmetic-fundamental-group-sequence-is-exact
  - thm-picard-zero-represented-by-jacobian
  - lem-generic-degree-g-divisor-has-unique-effective-representative
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Akio Tamagawa, The Grothendieck conjecture for affine curves, Theorem 0.5 and §4.3
      url: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0010437X97000614
---

## Statement

Assume the Axiom of Choice. For $i=1,2$, let $k_i$ be a finite field and let $U_i=C_i\setminus D_i$, where $C_i$ is smooth, proper and geometrically connected, $D_i$ is a reduced finite boundary divisor, and $r_i>0$ and $2g_i-2+r_i>0$ for $g_i=\dim H^1(C_i,\mathcal O_{C_i})$ and $r_i=\#D_i(\bar k_i)$. Choose geometric basepoints $\bar u_i$. The group $\pi_1^t(U_i,\bar u_i)$ classifies finite étale covers tamely ramified at the boundary. The natural map

$$
\operatorname{Isom}_{\mathrm{Sch}}(U_1,U_2)\longrightarrow
\operatorname{Isom}_{\mathrm{cont}}\bigl(\pi_1^t(U_1,\bar u_1),\pi_1^t(U_2,\bar u_2)\bigr)
/\operatorname{Inn}\bigl(\pi_1^t(U_2,\bar u_2)\bigr)
$$

is bijective. Here $\operatorname{Isom}_{\mathrm{Sch}}$ means scheme isomorphisms without a fixed identification between $k_1$ and $k_2$, the group isomorphisms are continuous, and the denominator identifies two group isomorphisms that differ by conjugation in the target group.

## Statement references

[Tamagawa, Theorem 0.5 and its proof in §4.3](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/S0010437X97000614)

[[def-affine-hyperbolic-curve-type]]

[[def-finite-field-and-its-order]]

[[def-tame-fundamental-group-of-affine-curve]]
