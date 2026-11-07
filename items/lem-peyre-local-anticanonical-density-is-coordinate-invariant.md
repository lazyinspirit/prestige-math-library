---
id: lem-peyre-local-anticanonical-density-is-coordinate-invariant
kind: lemma
title: "Peyre's local anticanonical density is coordinate-invariant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-adelic-metrization-and-anticanonical-height
  - def-determinant-of-a-square-matrix
  - cor-determinant-of-an-inverse
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §4.1"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
    - title: "Régis de la Bretèche, Tim Browning, and Emmanuel Peyre, The Manin–Peyre conjecture for smooth spherical Fano varieties of semisimple rank one, §§4.1–4.2"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/235A5BAB435DC8519686A76FAD2EB686/S2050509423001238a.pdf/div-class-title-the-manin-peyre-conjecture-for-smooth-spherical-fano-varieties-of-semisimple-rank-one-div.pdf"
verification: {}
---

## Statement

Let $K_v$ be a completion of a number field, let $U$ be a smooth $d$-dimensional analytic chart on a variety, and give the anticanonical line $\det(T_U)$ a continuous $K_v$-absolute-value norm. For analytic coordinates $x=(x_1,\ldots,x_d)$, write $\xi_x=(\partial/\partial x_1)\wedge\cdots\wedge(\partial/\partial x_d)$ and form the density $\|\xi_x\|_v|dx_1\cdots dx_d|_v$. Here coordinate Haar densities obey the local change-of-variables rule $|dy_1\cdots dy_d|_v=|\det(Dy/Dx)|_v|dx_1\cdots dx_d|_v$. Then the displayed density is unchanged on overlaps of analytic coordinate charts and so defines a coordinate-independent local density on $U$.

## Statement references

[[def-adelic-metrization-and-anticanonical-height]]

## Facts & Assumptions

**Given:** Two analytic coordinate systems $x$ and $y=\phi(x)$ on the same chart, with invertible Jacobian $J:=D\phi/Dx$, the anticanonical line $\det(T_U)$, and its local norm.

[F1] The coordinate-Haar convention in the Statement gives $|dy_1\cdots dy_d|_v=|\det J|_v|dx_1\cdots dx_d|_v$.

[F2] The inverse of an invertible matrix has inverse determinant: $\det(J^{-1})=\det(J)^{-1}$. ([[cor-determinant-of-an-inverse]])

[F3] The anticanonical norm is homogeneous: $\|a\xi\|_v=|a|_v\|\xi\|_v$. ([[def-adelic-metrization-and-anticanonical-height]])

## Proof

1.1 By the chain rule, the coordinate vector fields transform by $\partial/\partial y_i=\sum_j(\partial x_j/\partial y_i)\partial/\partial x_j$. Taking the top exterior power gives $\xi_y=\det(J^{-1})\xi_x$. [given, construct, algebra]

1.2 By [F2], $\|\xi_y\|_v=|\det(J^{-1})|_v\|\xi_x\|_v=|\det J|_v^{-1}\|\xi_x\|_v$. Multiplying by the coordinate-Haar transformation [F1] cancels the Jacobian factor, so $\|\xi_y\|_v|dy_1\cdots dy_d|_v=\|\xi_x\|_v|dx_1\cdots dx_d|_v$. The local formulas therefore agree on every overlap. [F1, F2, F3, step 1.1, algebra] ∎
