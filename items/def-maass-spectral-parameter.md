---
id: def-maass-spectral-parameter
kind: definition
title: "Maass Spectral Parameter"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-hyperbolic-laplacian-on-the-upper-half-plane
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§4.1, printed p. 27: Delta u=(1/4+t^2)u, the spectral parameter, and the exceptional-eigenvalue convention."
    - title: "Austin Lei, Automorphic Forms Learning Seminar Notes (Columbia University, Fall 2024)"
      url: "https://www.math.columbia.edu/~aghosh/ALNotes12.pdf"
      locator: "§3.1 and §3.3: Laplace eigenvalue and Maass spectral parameter."
---

## Definition

For an eigenvalue $\lambda\ge0$ of the positive-sign hyperbolic Laplacian,
define its spectral parameter to be the unique $t\in[0,\infty)\cup i[0,1/2]$
satisfying
$\lambda=1/4+t^2$: take $t=\sqrt{\lambda-1/4}\ge0$ when $\lambda\ge1/4$, and
$t=i\sqrt{1/4-\lambda}$ when $0\le\lambda<1/4$. In particular $\lambda=1/4$
corresponds to $t=0$ and $\lambda=0$ to $t=i/2$. No lower bound $\lambda\ge1/4$
is part of this convention.

## Definition references

[[def-hyperbolic-laplacian-on-the-upper-half-plane]]
