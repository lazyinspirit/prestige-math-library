---
id: def-viscosity-subsolution-and-supersolution
kind: definition
title: Viscosity subsolutions and supersolutions of a first-order equation and of the Cauchy problem
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-hamilton-jacobi-cauchy-problem
- def-upper-and-lower-semicontinuous-envelopes
- def-semicontinuity-on-euclidean-subsets
- def-total-derivative-in-euclidean-space
- def-ck-and-multi-index-notation-in-several-variables
justified_by: []
forward_refs:
- cex-reversing-the-contact-extremum-reverses-the-viscosity-inequality
aliases: []
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: Definition 2.2, Remarks 2.3, and the parabolic counterpart (8.1)--(8.4), printed pp. 10--11 and 49--50
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1 Sections 1--2, equations (1.4)--(1.6) and (1.10), printed pp. 15--22
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: 'Section 3, viscosity solutions: the test-function definition and its immediate consequences, printed pp. 10--12'
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^{n+1}$ be nonempty open with coordinates
$(x,t)\in\mathbb R^n\times\mathbb R$, and let
$H:U\times\mathbb R^n\to\mathbb R$ be continuous. A function $u:U\to\mathbb R$
that is upper semicontinuous on $U$
([[def-semicontinuity-on-euclidean-subsets]]) is a **viscosity subsolution**
of $u_t+H(x,t,Du)=0$ in $U$ if for every $\phi\in C^1(U)$
([[def-ck-and-multi-index-notation-in-several-variables]]) and every point
$z_0\in U$ at which $u-\phi$ has a local maximum,
$$\phi_t(z_0)+H(z_0,D\phi(z_0))\le0 .$$
A function $v:U\to\mathbb R$ that is lower semicontinuous on $U$ is a
**viscosity supersolution** if for every $\phi\in C^1(U)$ and every point
$z_0\in U$ at which $v-\phi$ has a local minimum,
$$\phi_t(z_0)+H(z_0,D\phi(z_0))\ge0 .$$
A **viscosity solution** of the equation in $U$ is a function that is both a
viscosity subsolution and a viscosity supersolution.

**Cauchy problem.** Let $Z=O\times(0,T)$ and
$H:O\times[0,T]\times\mathbb R^n\to\mathbb R$ be as in
[[def-hamilton-jacobi-cauchy-problem]], and let $u_0:O\to\mathbb R$. A
**viscosity subsolution of the Cauchy problem** is an upper semicontinuous
$u:Z\to\mathbb R$ satisfying the subsolution inequality at every $z_0\in Z$
together with the relaxed initial condition
$$\limsup_{\substack{(y,s)\to(x,0)\\ s>0,\ y\in O}}u(y,s)\le u_0(x)\qquad\text{for every }x\in O ;$$
a **viscosity supersolution** $v$ satisfies the supersolution inequality at
every $z_0\in Z$ together with
$$\liminf_{\substack{(y,s)\to(x,0)\\ s>0,\ y\in O}}v(y,s)\ge u_0(x)\qquad\text{for every }x\in O .$$
A **viscosity solution of the Cauchy problem** is a function that is both a
subsolution and a supersolution of the Cauchy problem; a continuous solution
of the Cauchy problem satisfies the initial data pointwise, $u(x,0)=u_0(x)$
for every $x\in O$.

## Remarks

- **Direction of the contact.** The subsolution test is taken at a local
  maximum of $u-\phi$, equivalently where $\phi$ touches $u$ from above, and
  the supersolution test at a local minimum; reversing the extremum reverses
  the direction of the required inequality. This is exactly the sign
  asymmetry that [[cex-reversing-the-contact-extremum-reverses-the-viscosity-inequality]]
  records.
- **Semicontinuity is part of the definition.** The subsolution must be upper
  semicontinuous and the supersolution lower semicontinuous: those are the
  classes in which the tested extrema behave well under localisation and
  limits. No continuity of $u$ on $U$ and no almost-everywhere class is
  assumed; a merely locally bounded function is handled through the two
  envelopes in [[def-discontinuous-viscosity-solution]].
- **The initial condition is relaxed.** The limsup/liminf condition is
  imposed at points of the initial face through sequences with $s>0$; it does
  not require $u$ to extend to $t=0$. For a continuous $u$ the two relaxed
  conditions force $u(x,s)\to u_0(x)$ as $(y,s)\to(x,0)$, hence the pointwise
  equality. No choice principle is used.
