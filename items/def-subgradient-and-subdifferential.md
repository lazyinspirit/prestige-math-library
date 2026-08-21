---
id: def-subgradient-and-subdifferential
kind: definition
title: "Subgradients and the subdifferential of a convex function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 12"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
    - title: "D. Drusvyatskiy, Convex Analysis and Nonsmooth Optimization, §3.5"
      url: "https://sites.math.washington.edu/~ddrusv/crs/Math_516_2020/curr_notes.pdf"
pipeline_run: null
---

## Definition

Let $f:C\to\mathbb R$ be convex on a convex set $C\subseteq\mathbb R^n$ ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]), and let $a\in C$. A vector $v$ is a subgradient of $f$ at $a$ when $f(y)\ge f(a)+\langle v,y-a\rangle$ for every $y$ in the domain.

The **subdifferential** is the set

$$\partial f(a):=\{v\in\mathbb R^n:f(y)\ge f(a)+\langle v,y-a\rangle\text{ for every }y\in C\},$$

with the Euclidean inner product of [[def-euclidean-inner-product]]. The definition permits $\partial f(a)$ to be empty or to contain more than one vector.
