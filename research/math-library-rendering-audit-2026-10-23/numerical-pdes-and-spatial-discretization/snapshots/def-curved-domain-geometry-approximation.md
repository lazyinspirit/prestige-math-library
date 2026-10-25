---
id: def-curved-domain-geometry-approximation
kind: definition
title: "Curved-domain geometry approximation errors"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-isoparametric-curved-cell-map
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2023, Part III, Chapter 8"
      url: https://people.tamu.edu/~guermond/M661_FALL_2023/chap08.pdf
    - title: "Gerald Dziuk and Charles M. Elliott, Finite element methods for surface PDEs, Acta Numerica 22 (2013)"
      url: https://wrap.warwick.ac.uk/id/eprint/53966/1/WRAP_Elliott_DziEll13a.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\widehat\Omega\subset\mathbb R^d$ be a bounded reference domain and let $\Phi,\Phi_h:\overline{\widehat\Omega}\to\mathbb R^d$ be cellwise $C^2$ admissible maps with matching traces, positive Jacobians, and common image topology. The exact and approximate domains are $\Omega=\Phi(\widehat\Omega)$ and $\Omega_h=\Phi_h(\widehat\Omega)$. Define $e_0=\|\Phi-\Phi_h\|_{L^\infty(\widehat\Omega)}$ and $e_1=\|D\Phi-D\Phi_h\|_{L^\infty(\widehat\Omega;op)}$. A geometry approximation claim must separately state bounds on $e_0,e_1$, both Jacobian lower bounds, and boundary-trace compatibility; none follows from the word “isoparametric.”

## Tensor convention

The transformed Laplace tensors associated with these maps are $B=J_\Phi D\Phi^{-1}D\Phi^{-T}$ and $B_h=J_{\Phi_h}D\Phi_h^{-1}D\Phi_h^{-T}$ wherever the maps are differentiable. Boundary lifting error and data error are separate quantities and are not included in $e_0$ or $e_1$.
