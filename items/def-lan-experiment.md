---
id: def-lan-experiment
kind: definition
title: Local asymptotic normality for local experiments
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-contiguous-sequences-of-measures
  - def-convergence-in-distribution-of-random-elements
  - def-multivariate-normal-law
  - def-total-variation-distance-for-probability-laws
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 22, PDF pp. 2–6
      url: https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/22notes.pdf
    - title: John Duchi, A few notes on contiguity, asymptotics, and local asymptotic normality, §2
      url: https://web.stanford.edu/class/stats300b/Notes/contiguity-and-asymptotics.pdf
---

## Definition

Let $P_{n,h}$ be probability laws on a common measurable space for each
integer $n\ge1$ and local parameter $h\in\mathbb R^d$, where $d<\infty$ and
$P_{n,0}$ is the base law. Suppose that for every fixed $h$ we are supplied a
nonnegative measurable function $L_{n,h}$ with
$$\int L_{n,h}\,dP_{n,0}=1.$$
It defines an absolutely continuous proxy
$$\bar P_{n,h}(A):=\int_A L_{n,h}\,dP_{n,0}.$$
The actual local law is allowed to have a singular part; the approximation
condition below is what connects it to this proxy.

The experiments are **locally asymptotically normal (LAN)** at $h=0$ with
information matrix $K$ and central sequence $\Delta_n$ if $K$ is a symmetric
positive semidefinite $d\times d$ matrix, $\Delta_n$ is an $\mathbb R^d$-valued
statistic,
$$\Delta_n\Rightarrow N_d(0,K)\quad\text{under }P_{n,0},$$
and for every fixed $h\in\mathbb R^d$,
$$\|P_{n,h}-\bar P_{n,h}\|_{\rm TV}\to0,\qquad \log L_{n,h}=h^T\Delta_n-\tfrac12h^TKh+o_{P_{n,0}}(1),$$
where $\|\cdot\|_{\rm TV}$ is the event-supremum total variation distance
([[def-total-variation-distance-for-probability-laws]]) and
$o_{P_{n,0}}(1)$ means convergence to zero in $P_{n,0}$-probability. We set
$\log0=-\infty$; the finite-valued expansion entails
$P_{n,0}(L_{n,h}=0)\to0$. Convergence in distribution is as in
[[def-convergence-in-distribution-of-random-elements]], and $N_d(0,K)$ allows
singular $K$ ([[def-multivariate-normal-law]]).

If $P_{n,h}=\bar P_{n,h}$, this is the usual dominated LAN comparison. The
proxy formulation also covers QMD paths whose local alternatives are not
absolutely continuous with respect to the base law, provided the singular
product mass tends to zero in total variation. This definition is pointwise
in each fixed $h$; it does not assert uniformity over bounded sets of $h$.
