---
id: def-ip-tv-functional-on-l2-distributional-variation
kind: definition
title: Distributional TV as an extended functional on L²
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-spatial-bv-and-distributional-tv
  - def-calligraphic-l-p-on-a-measure-space
  - def-real-and-complex-inner-product-space
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on convergence of solutions of total variation regularized linear inverse problems, §1.1"
      url: "https://arxiv.org/pdf/1711.06495"
      locator: "§1.1, distributional TV for locally integrable functions"
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6, §7.4"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
      locator: "§7.4, distributional derivatives and local BV"
---

## Definition

Let $\Omega\subseteq\mathbb R^2$ be open and let $X=L^2(\Omega;\mathbb R)$. Every $u\in X$ is integrable on compact subsets by Cauchy–Schwarz. Define its extended distributional total variation by
$$TV_2(u;\Omega):=\sup\left\{\int_\Omega u\,\operatorname{div}\varphi\,dx:\ \varphi\in C_c^\infty(\Omega;\mathbb R^2),\ \sup_{x\in\Omega}|\varphi(x)|\le1\right\}\in[0,+\infty],$$
where $C_c^\infty(\Omega;\mathbb R^2)$ denotes smooth compactly supported vector fields, $|\cdot|$ is the Euclidean norm, and $\operatorname{div}\varphi=\partial_1\varphi_1+\partial_2\varphi_2$. This definition treats $L^2$ functions as almost-everywhere classes and does not require $u\in L^1(\Omega)$.

## Definition references

[[def-ip-spatial-bv-and-distributional-tv|For globally integrable functions, spatial TV is the mass of the distributional derivative measure.]]

[[def-calligraphic-l-p-on-a-measure-space|The real L² space is defined from Lebesgue measure and almost-everywhere classes.]]

[[thm-cauchy-schwarz-in-an-inner-product-space|Cauchy–Schwarz gives $\int_K|u|\le |K|^{1/2}\|u\|_{L^2(K)}$ on every compact $K$.]]

[Iglesias, Mercier, and Scherzer, *A note on convergence of solutions of total variation regularized linear inverse problems*, §1.1](https://arxiv.org/pdf/1711.06495)

[Terra, *Introduction to Geometric Measure Theory*, §7.4](https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf)
