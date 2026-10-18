---
id: def-floater-hormann-interpolant
kind: definition
title: Floater–Hormann barycentric interpolant
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-barycentric-rational-quotient
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation with no poles and high rates of approximation, Sections 2 and 4
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
---

## Definition

Let $n\ge1$, let $x_0<\cdots<x_n$ be distinct real nodes, let
$f_0,\ldots,f_n\in\mathbb R$ be data, and let $d$ be an integer with
$0\le d<n$. For $j=0,\ldots,n$, define
$$w_j=(-1)^{j-d} \sum_{i=\max(0,j-d)}^{\min(j,n-d)} \prod_{\substack{i\le k\le i+d\\k\ne j}}|x_j-x_k|^{-1}.$$
The index range is nonempty and every product is positive, so every $w_j$ is
nonzero. The **Floater–Hormann interpolant of degree parameter $d$** is the
barycentric rational quotient of these nodes, data, and weights from
[[def-barycentric-rational-quotient]]. Away from the nodes, exact evaluation
uses the quotient with this denominator;
a zero of the reduced denominator is reported as pole status. The no-real-pole
theorem below proves that this status never occurs for admissible exact real
inputs.
