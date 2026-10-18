---
id: def-unequal-parameter-weight-function-and-coefficient-order
kind: definition
title: Weight functions and ordered group-algebra coefficients
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-arbitrary-rank-coxeter-system-and-bruhat-order]
justified_by: [lem-simple-generator-weights-extend-to-a-weight-function]
aliases: []
landmark: false
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters, revised arXiv text (2014)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§3.1, PDF p. 22: weight functions, the odd-edge condition, and v_s=v^{L(s)}."
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras, EPFL lecture notes (2006)"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "§4, PDF pp. 15–16: finite-Weyl weight functions and generic Hecke parameters."
verification:
  precheck: n/a
---

## Definition

Let $(W,S)$ be as in [[def-arbitrary-rank-coxeter-system-and-bruhat-order]]. A **totally ordered abelian group** $(\Gamma,+,0,<)$ is an abelian group with a total order invariant under translation. Its group algebra $A=\mathbb Z[\Gamma]$ consists of finite sums $\sum_{\gamma\in\Gamma}a_\gamma v^\gamma$, where $a_\gamma\in\mathbb Z$, with $v^\gamma v^\delta=v^{\gamma+\delta}$. Define the ring involution $\overline{v^\gamma}=v^{-\gamma}$, and set
$$
A_{<0}=\bigoplus_{\gamma<0}\mathbb Z v^\gamma,\qquad A_{\le0}=\bigoplus_{\gamma\le0}\mathbb Z v^\gamma.
$$

A **weight function** is a map $L:W\to\Gamma$ such that $L(xy)=L(x)+L(y)$ whenever $\ell(xy)=\ell(x)+\ell(y)$. Its simple-generator parameters are $L(s)$ for $s\in S$. The exact criterion for prescribing those values on the simple generators is proved in [[lem-simple-generator-weights-extend-to-a-weight-function]]. No sign restriction on $L(s)$ is part of this definition.

The coefficient ordering used on the weighted Kazhdan–Lusztig basis is the given order on $\Gamma$, through $A_{<0}$. The group algebra elements $v^{L(s)}$ are units for every $s\in S$.
