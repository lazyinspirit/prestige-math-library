---
id: lem-diffuse-finite-window-poisson-process-is-simple
kind: lemma
title: "A finite Poisson process with atomless intensity is simple"
status: published
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
---

## Statement

Let $\nu$ be a finite atomless Borel measure on $\mathbb R^d$, and let
$\eta$ be a Poisson point process with intensity $\nu$. Then $\eta$ is simple
almost surely: with probability one, every singleton has mass at most one.

## Facts & Assumptions

**Given:** A finite atomless Borel measure $\nu$ and a Poisson point process
$\eta$ of intensity $\nu$.

[F1] A counting configuration $\xi$ is simple if $\xi(\{x\})\le1$ for every
$x$. This is a pointwise definition; almost-sure simplicity of $\eta$ is the
conclusion to be proved here.
([[def-random-measure-and-locally-finite-point-process]])

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

1.2 For $m\in\mathbb N_0$ and $k\in\mathbb Z^d$, put $C_{m,k}=2^{-m}(k+[0,1)^d)$. The set $H=\{\xi:\xi(\mathbb R^d)<\infty\}\cap\bigcup_{m\ge0}\bigcap_{k\in\mathbb Z^d}\{\xi:\xi(C_{m,k})\le1\}$ is evaluation-measurable, since all cubes are Borel and the unions and intersections are countable. It is exactly the set of finite simple configurations: a repeated location forces a count at least two in its cube at every scale; conversely, a finite set of distinct locations has positive minimum pairwise distance when it has at least two points, so cubes of sufficiently small diameter contain at most one point. Counts zero and one satisfy the condition at every scale. [F1, construct]

2.1 Fix $n\ge2$ and a pair $i<j$ of coordinate indices. The diagonal is product-measurable by the preceding basis argument. Under $Q^{\otimes n}$, the event $x_i=x_j$ has measure $\int Q(\{x\})\,Q(dx)=0$ by [F3] and step 1.1, since every singleton has zero $Q$-mass by step 1.1. The other $n-2$ coordinates contribute total mass one. There are only finitely many pairs among $n$ coordinates, so with $Q^{\otimes n}$-probability one no two coordinates coincide. [given, step 1.1, F3, algebra]

3.1 In the mixed-binomial construction [F2], the image configuration belongs to $H$ with probability one on each component: step 2.1 treats $n\ge2$, and counts $n=0,1$ are simple directly. Summing over the component probabilities gives mass one to $H$. Since $H$ is measurable by step 1.2 and every Poisson process with intensity $\nu$ has this push-forward law by [F2], $\mathbb P\{\eta\in H\}=1$. Thus $\eta$ is simple almost surely. [step 1.2, step 2.1, F1, F2, algebra] ∎
