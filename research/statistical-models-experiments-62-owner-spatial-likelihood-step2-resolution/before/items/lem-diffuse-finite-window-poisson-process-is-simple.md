---
id: lem-diffuse-finite-window-poisson-process-is-simple
kind: lemma
title: "A finite Poisson process with atomless intensity is simple"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-random-measure-and-locally-finite-point-process
  - def-poisson-and-cox-point-process
  - thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice principle is used by the finite-mixture and diagonal-null proof."
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 3, Theorem 3.6 and Proposition 3.8, PDF pp. 33–34: finite Poisson construction and conditional iid locations."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 4, §4.3, Example 4.5, PDF pp. 62–63: the finite Poisson process has a mixed-binomial representation. The simplicity argument is supplied locally."
verification:
  precheck: pending
---

## Statement

Let $\nu$ be a finite atomless Borel measure on $\mathbb R^d$, and let
$\eta$ be a Poisson point process with intensity $\nu$. Then $\eta$ is simple
almost surely: with probability one, every singleton has mass at most one.

## Facts & Assumptions

**Given:** A finite atomless Borel measure $\nu$ and a Poisson point process
$\eta$ of intensity $\nu$.

[F1] A point process is simple when almost every realization gives each
singleton mass at most one. ([[def-random-measure-and-locally-finite-point-process]])

[F2] If $\nu$ is finite with $\Lambda=\nu(\mathbb R^d)>0$, the Poisson
process law is the push-forward of
$e^{-\Lambda}\Lambda^n/n!\,(\nu/\Lambda)^{\otimes n}$ on each finite tuple
space under $(x_1,\ldots,x_n)\mapsto\sum_i\delta_{x_i}$; if $\Lambda=0$,
the process is zero. ([[thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law]])

[F3] Finite product measures exist, and integration over a product can be
computed by iterated nonnegative integrals. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]],
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

The diagonal in $\mathbb R^d\times\mathbb R^d$ is measurable for the product
Borel sigma-algebra: rational open boxes are countable and form a basis of
$\mathbb R^d$ because every open neighbourhood of a point contains a box with
rational endpoints around that point. Pairwise rectangles from this basis
form a countable basis of the product topology. Every open set is therefore a
countable union of product-measurable rectangles, and the closed diagonal is
product-measurable.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $\Lambda=\nu(\mathbb R^d)$. If $\Lambda=0$, [F2] says the process is the zero measure, which is simple by [F1]. Suppose $\Lambda>0$ and set $Q=\nu/\Lambda$. Atomlessness of $\nu$ implies $Q(\{x\})=0$ for every $x\in\mathbb R^d$. [given, F1, F2]

2.1 Fix $n\ge2$ and a pair $i<j$ of coordinate indices. The diagonal is product-measurable by the preceding basis argument. Under $Q^{\otimes n}$, the event $x_i=x_j$ has measure $\int Q(\{x\})\,Q(dx)=0$ by [F3] and step 1.1, since every singleton has zero $Q$-mass by step 1.1. The other $n-2$ coordinates contribute total mass one. There are only finitely many pairs among $n$ coordinates, so with $Q^{\otimes n}$-probability one no two coordinates coincide. [given, step 1.1, F3, algebra]

3.1 By the mixed-binomial representation [F2], conditional on each total count $n$, the point locations have law $Q^{\otimes n}$. Step 2.1 therefore shows simplicity conditional on every $n\ge2$; counts $n=0,1$ are simple directly. The total count has a probability law on $\mathbb N_0$, so summing these probability-one conclusions over its countably many values proves simplicity almost surely by [F1]. [step 2.1, F1, F2, algebra] ∎
