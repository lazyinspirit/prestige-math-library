---
id: def-ip-compact-linear-inverse-model
kind: definition
title: Compact linear inverse model between Hilbert spaces
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-compact-linear-operator
  - def-hilbert-space
  - def-ip-forward-map-and-solution-classes
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, arXiv:2001.00617v2, §3.1"
      url: "https://arxiv.org/pdf/2001.00617"
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, University of Vienna, 2015"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
---

## Definition

Let $X,Y$ be real or complex Hilbert spaces over the same scalar field, and let
$K:X\to Y$ be a compact linear operator. The associated compact linear inverse
model has parameter space $X$, data space $Y$, forward map $K$, and admissible
truth class $X$: for a true parameter $x^\dagger\in X$, the exact datum is
$y=Kx^\dagger\in Y$. Given an exact datum $y\in Y$, solving this inverse
problem means finding a parameter $x\in X$ such that $Kx=y$. No injectivity,
surjectivity, or closed-range assumption is included in the model.

## Definition references

[[def-ip-forward-map-and-solution-classes|General forward-map and solution-class interface]]

[[def-hilbert-space|Real and complex Hilbert spaces]]

[[def-compact-linear-operator|Compact linear operators between normed spaces]]
