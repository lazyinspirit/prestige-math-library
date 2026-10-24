---
id: def-sketch-qr-right-preconditioner
kind: definition
title: Right preconditioner from the reduced QR factor of a sketch
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings
dependency_level: 0
deps:
  - def-full-reduced-and-column-pivoted-computational-qr-factorisations
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra, §2.6"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Michael W. Mahoney, Randomized Algorithms for Matrices and Data, §4.3"
      url: "https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $A\in\mathbb K^{n\times d}$, $S\in\mathbb K^{m\times n}$, and suppose
a reduced QR factorization of $SA$ is supplied:
$$
SA=QR,\qquad Q^*Q=I_d,
$$
where $R\in\mathbb K^{d\times d}$ is upper triangular and nonsingular.
The **sketch-QR right preconditioner** is
$$
P_S:=R^{-1}.
$$
It is undefined when no such reduced factorization with nonsingular $R$ is
available. The matrix being preconditioned is the original $A$, through
$AP_S$; $SA$ is used to construct $P_S$.
