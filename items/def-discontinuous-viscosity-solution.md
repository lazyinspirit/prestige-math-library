---
id: def-discontinuous-viscosity-solution
kind: definition
title: Discontinuous viscosity solutions through the two envelopes
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-viscosity-subsolution-and-supersolution
- def-upper-and-lower-semicontinuous-envelopes
- lem-envelopes-are-the-least-semicontinuous-majorants
- def-hamilton-jacobi-cauchy-problem
justified_by: []
aliases: []
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: Section 4 and the construction in the proof of Theorem 4.1, printed pp. 22--25
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1 Section 8 and Remark 1.31, printed pp. 33--38
verification:
  precheck: n/a
---

## Definition

Let $n\ge1$, let $O\subseteq\mathbb R^n$ be open, $T>0$, let
$H:O\times[0,T]\times\mathbb R^n\to\mathbb R$ be continuous, $Z=O\times(0,T)$,
and let $u_0:O\to\mathbb R$. A locally bounded function $u:Z\to\mathbb R$ is a
**viscosity solution of the Cauchy problem** if its upper semicontinuous
envelope $u^*$ is a viscosity subsolution and its lower semicontinuous
envelope $u_*$ is a viscosity supersolution in the sense of
[[def-viscosity-subsolution-and-supersolution]], each carrying the initial
datum $u_0$ in the relaxed limsup/liminf sense. Both envelopes are taken over
$Z$ as a subset of $\mathbb R^{n+1}$
([[def-upper-and-lower-semicontinuous-envelopes]]); the subsolution
inequalities are imposed at every point of $Z$ and the relaxed initial
conditions at every point of $O$.

A **continuous viscosity solution** is a viscosity solution $u$ that is
continuous on $Z$. For such a $u$ one has $u^*=u_*=u$
(apply [[lem-envelopes-are-the-least-semicontinuous-majorants]] on a small
closed ball about each interior point, where continuity makes $u$ bounded).
The relaxed initial conditions give a continuous extension to the initial
face with value $u_0$, so the definition
specializes to the one for continuous test functions. In the opposite
direction, the envelope formulation is forced whenever $u$ is not continuous:
it keeps the subsolution inequality attached to $u^*$ and the supersolution
inequality to $u_*$, and never asks a single discontinuous function to satisfy
both.

## Remarks

- **Why the two envelopes.** A merely locally bounded $u$ need not be upper or
  lower semicontinuous, so the test-function definition of
  [[def-viscosity-subsolution-and-supersolution]] cannot be applied to $u$
  directly. The envelopes are respectively the least upper semicontinuous majorant
  and the greatest lower semicontinuous minorant of $u$, so requiring $u^*$ to be a subsolution and $u_*$ a supersolution
  is the weakest formulation in which the two one-sided inequalities can be
  tested; a function is a viscosity solution exactly when both envelopes solve
  their respective one-sided problems.
- **Where it is used.** This is the notion under which the half-relaxed limits
  of a locally bounded family are sub- and supersolutions
  ([[def-half-relaxed-limits]],
  [[thm-half-relaxed-limit-stability-for-viscosity-solutions]]) and under
  which the perron-type and comparison statements of the page are formulated
  when continuity of the produced object is not known in advance
  ([[thm-upper-semicontinuous-envelope-of-a-locally-bounded-supremum-of-subsolutions]]).
  The domain conventions $Z=O\times(0,T)$ and the initial face $O\times\{0\}$
  are those of [[def-hamilton-jacobi-cauchy-problem]]. No choice principle is
  used.
