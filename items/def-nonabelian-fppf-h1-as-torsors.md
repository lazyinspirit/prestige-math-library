---
id: def-nonabelian-fppf-h1-as-torsors
kind: definition
title: Nonabelian fppf H1 as a Set of Torsors
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-group-scheme-over-a-field
  - def-fppf-topology-on-schemes
  - def-fppf-sheaf-and-sheafification
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Bjorn Poonen, Rational Points on Varieties, §§5.12.2 and 5.12.6, printed pp. 152 and 156–157
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
---

## Definition

Let $k$ be a field and let $G$ be a finite-type group scheme over $k$. A represented right fppf $G$-torsor is a finite-type $k$-scheme $X$ with a right $G$-action such that $X\to\operatorname{Spec}k$ is an fppf cover and the action map $X\times_kG\to X\times_kX$, $(x,g)\mapsto(x,xg)$, is an isomorphism. Equivalently, $X$ is fppf-locally isomorphic to $G$ with its regular right action. Define $H^1_{\mathrm{fppf}}(k,G)$ here to be the pointed set of isomorphism classes of represented right fppf $G$-torsors, pointed by the trivial torsor $G$. For noncommutative $G$ this is a pointed set, not in general a group.

## Definition references

[Poonen, represented algebraic-group torsors and Lang's theorem, §§5.12.2 and 5.12.6](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[[def-fppf-topology-on-schemes]]

[[def-fppf-sheaf-and-sheafification]]
