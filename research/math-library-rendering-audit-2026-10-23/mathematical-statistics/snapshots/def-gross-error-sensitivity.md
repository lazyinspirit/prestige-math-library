---
id: def-gross-error-sensitivity
kind: definition
title: Gross-error sensitivity of a functional
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 10
deps: [def-statistical-functional-and-influence-function]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "P. B. Stark, Statistics 240 Lecture Notes, Part 9: Robustness and Related Topics, §1.3.3, PDF pp. 15–16"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf"
    - title: "Elvezio Ronchetti, Introduction to Robust Statistics, slides 12 and 17"
      url: "https://orfe.princeton.edu/sites/g/files/toruqf1286/files/documents/ronchetti-lecture1.pdf"
---

## Definition

For a statistical functional $T$ at a law $F$, let $D_{T,F}:=\{x\in\mathcal X:\operatorname{IF}(x;T,F)\text{ exists as a finite vector}\}$. When $D_{T,F}\ne\varnothing$, its **gross-error sensitivity** is the extended nonnegative number

$$\gamma^*(T,F):=\sup_{x\in D_{T,F}}\|\operatorname{IF}(x;T,F)\|_2.$$

For a real-valued functional the norm is absolute value. This supremum only ranges over directions where the influence function exists; it makes no claim that the derivative exists in every direction.

## Remarks

Finite gross-error sensitivity is a local pointwise stability bound. It does not, without a uniform remainder hypothesis, bound the maximum bias over an entire contamination neighborhood.

