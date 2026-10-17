---
id: def-real-boxes-and-interval-jacobian-enclosures
kind: definition
title: Real boxes and interval Jacobian enclosures
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation
dependency_level: 3
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-intervals-rectangles-and-complex-balls
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §13"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "R. Baker Kearfott, Interval Computations: Introduction, Uses, and Resources, §§1–2"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
---

## Definition

For an integer $n\ge1$, a **real box** is a nonempty product
$X=\prod_{j=1}^n[a_j,b_j]\subset\mathbb R^n$ of closed real intervals with finite dyadic endpoints $a_j\le b_j$, using the interval convention of [[def-intervals-rectangles-and-complex-balls]]. Its interior is $\operatorname{int}X=\prod_{j=1}^n(a_j,b_j)$; it is empty if any side is degenerate.

Let $U\subset\mathbb R^n$ be open and convex, let $X\subset U$ be a real box, and let $F:U\to\mathbb R^n$ be $C^1$ in the sense of [[def-c-one-map-and-local-inverse]]. An **interval Jacobian enclosure** on $X$ is an $n\times n$ matrix $J(X)=(J_{ij})$ of finite real intervals such that
$\partial_jF_i(X):=\{\partial_jF_i(x):x\in X\}\subseteq J_{ij}$ for every $i,j$, with partial derivatives and Jacobian entries as in [[def-jacobian-matrix-and-gradient]]. Write
$\mathcal J(X)=\{A\in\mathbb R^{n\times n}:A_{ij}\in J_{ij}\}$ for the set of point matrices represented by this interval matrix.

