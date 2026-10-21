---
id: def-ip-boundary-tv-conventions
kind: definition
title: Full-space, Dirichlet, and Neumann TV conventions
status: draft
origin: pipeline
deps:
  - def-ip-spatial-bv-and-distributional-tv
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on convergence of total variation regularized linear inverse problems, Inverse Problems 34 (2018), 055011"
      url: "https://arxiv.org/pdf/1711.06495"
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
---

## Definition

Let $\Omega\subset\mathbb R^n$ be a bounded Lipschitz domain, meaning a bounded open set whose boundary has a finite cover by coordinate neighborhoods in which it is the graph of a Lipschitz function and $\Omega$ lies on one side of that graph. For $u\in BV(\Omega)$ define the Neumann total variation by $TV_N(u;\Omega):=|Du|(\Omega)$. Define its zero extension $\widetilde u\in L^1(\mathbb R^n)$ by $\widetilde u=u$ almost everywhere on $\Omega$ and $\widetilde u=0$ almost everywhere on $\mathbb R^n\setminus\Omega$. Define the Dirichlet total variation by $TV_D(u;\Omega):=TV(\widetilde u;\mathbb R^n)$ when $\widetilde u\in BV(\mathbb R^n)$ and by $TV_D(u;\Omega):=+\infty$ otherwise. For $v\in BV(\mathbb R^n)$ define the full-space total variation by $TV_F(v):=TV(v;\mathbb R^n)$. Thus Neumann variation counts only the distributional derivative inside $\Omega$, while Dirichlet variation also counts any jump created by zero extension across $\partial\Omega$.

## Definition references

[[def-ip-spatial-bv-and-distributional-tv|Spatial total variation is the mass of the partition variation of the distributional derivative.]]

[Iglesias, Mercier, and Scherzer distinguish Neumann variation in the open domain from full-space variation of a zero extension.](https://arxiv.org/pdf/1711.06495)
