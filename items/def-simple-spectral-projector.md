---
id: def-simple-spectral-projector
kind: definition
title: "The simple spectral projector $P=xy^*/(y^*x)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [prop-simple-eigenvalues-admit-left-right-normalization]
aliases: []
landmark: false
verification:
  audited: 2026-08-31
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Matrix Computations - Perturbation theory"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-22.html"
---

## Definition

Let $\lambda$ be a simple eigenvalue of $A$, and let $x,y$ be compatible
nonzero right and left eigenvectors. Since $y^\ast x\ne0$, the rank-one map

$$P:=\frac{xy^\ast}{y^\ast x}$$

is well defined. It is the **simple spectral projector** onto the eigendirection
$\operatorname{span}\{x\}$ along $\ker y^\ast$.
