---
id: ex-two-dimensional-wave-has-an-interior-tail
kind: example
title: "A two-dimensional interior tail"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
proof_strategy: direct
deps: [thm-poisson-formula-for-the-two-dimensional-wave-equation, lem-wave-formulas-attain-the-cauchy-data, def-spherical-mean-of-space-dependent-data, thm-support-dichotomy-for-free-wave-fundamental-solutions, def-countable-choice, lem-smooth-bump-between-concentric-euclidean-balls]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed pp. 172–173: the striking difference between the three- and two-dimensional dependences"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1.4, printed pp. 285–286, (9.1.16): the interior disk integral of the two-dimensional formula"
---


## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $c=1$, $u_0=0$ and choose a nonnegative $u_1\in C_c^\infty(B_{1/2}(0))$ with $\int u_1>0$, for example the bump equal to one on $\overline B_{1/4}(0)$ supplied by [[lem-smooth-bump-between-concentric-euclidean-balls]]. Fix $x=0$ and $t=1$: the support of $u_1$ is strictly inside the disk $B_1(0)$, and it is disjoint from the sphere $\partial B_1(0)$. Poisson's formula of [[thm-poisson-formula-for-the-two-dimensional-wave-equation]] gives
$$u(0,1)=\frac1{2\pi}\int_{B_1(0)}\frac{u_1(y)}{\sqrt{1-|y|^2}}\,dy>0 ,$$
because the weight is strictly positive on the interior and $u_1\ge0$ is positive on a set of positive measure. Thus the value at time $t=1$ is affected by data strictly inside the wavefront: the two-dimensional solution has an interior tail, in contrast to the three-dimensional evaluation depending on data near the sphere only, as recorded in [[thm-support-dichotomy-for-free-wave-fundamental-solutions]].

## Facts & Assumptions

**Given:** Countable Choice, $c=1$, $u_0=0$, and a nonnegative smooth compactly supported datum $u_1\in C_c^\infty(B_{1/2}(0))$ with $\int u_1>0$.

[F1] Poisson's formula for $c=1$, $u_0=0$ reads $u(x,t)=\frac{1}{2\pi}\int_{B_t(x)}u_1(y)(t^2-|y-x|^2)^{-1/2}dy$ for $t>0$ ([[thm-poisson-formula-for-the-two-dimensional-wave-equation]] with $W_{u_1}(x,t)=\frac{1}{2\pi}\int_{B_t(x)}u_1(y)(t^2-|y-x|^2)^{-1/2}dy$ by [[def-spherical-mean-of-space-dependent-data]]).

[F2] The odd-dimensional evaluation depends on the data through a neighbourhood of the sphere $\partial B_{ct}(x)$, while in even dimensions data supported strictly inside the ball contribute ([[thm-support-dichotomy-for-free-wave-fundamental-solutions]]).

## Verification

1.1 At $x=0$, $t=1$, [F1] gives $u(0,1)=\frac{1}{2\pi}\int_{B_1(0)}u_1(y)(1-|y|^2)^{-1/2}dy$. The integrand is nonnegative, the weight $(1-|y|^2)^{-1/2}$ is strictly positive and bounded below by $1$ (and above by $2/\sqrt3$) on the support $B_{1/2}(0)$ of $u_1$, and $u_1$ is positive on a set of positive measure; hence the integral is strictly positive. [F1, algebra]

2.1 The support of $u_1$ lies strictly inside $B_1(0)$ and is disjoint from $\partial B_1(0)$, so the value $u(0,1)$ is produced by data at distance at most $1/2$ from the origin, strictly behind the wavefront of radius $1$; by [F2] this is exactly the two-dimensional interior tail, in contrast with the $(n\ge3)$ odd-dimensional evaluation, which reads the data near the sphere. [F2, given] ∎ 
