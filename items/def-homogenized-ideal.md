---
id: "def-homogenized-ideal"
kind: "definition"
title: "The homogenized ideal of a marked ideal of maximal order"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 6
deps:
  - "def-ideal-of-derivatives"
  - "def-ideal-sheaf"
  - "def-maximal-order-and-tangent-directions"
  - "lem-addition-and-multiplication-of-marked-ideals"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Definition

Let $(\mathcal I,E,\mu)$ be a marked ideal of maximal order with $\mu\ge1$ and put $T(\mathcal I)=\mathcal D^{\mu-1}(\mathcal I)$ ([[def-maximal-order-and-tangent-directions]]).
The homogenized ideal is the ideal sheaf
$$H(\mathcal I):=\mathcal I+\mathcal D(\mathcal I)\cdot T(\mathcal I)+\dots+\mathcal D^i(\mathcal I)\cdot T(\mathcal I)^i+\dots+\mathcal D^{\mu-1}(\mathcal I)\cdot T(\mathcal I)^{\mu-1},$$
the products and sums being products and sums of ideal sheaves; the homogenized marked ideal is $H(\mathcal I,\mu):=(H(\mathcal I),E,\mu)$.
It satisfies $H(\mathcal I)\supseteq\mathcal I$ and $T(H(\mathcal I))=T(\mathcal I)$ for $\mu\ge1$. If $\mu>1$ and $K$ has characteristic zero or perfect characteristic $p>\mu$, then
$$\mathcal D(H(\mathcal I))\subseteq H(\mathcal D(\mathcal I),\mu-1),$$
where $(\mathcal D(\mathcal I),\mu-1)$ is again of maximal order, so the right-hand homogenization is defined. It is designed so that it looks the same from every tangent direction and is equivalent to $(\mathcal I,\mu)$ (proved below).
