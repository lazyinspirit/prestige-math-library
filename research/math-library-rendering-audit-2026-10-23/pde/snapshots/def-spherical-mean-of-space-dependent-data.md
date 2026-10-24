---
id: def-spherical-mean-of-space-dependent-data
kind: definition
title: "Spherical means and the weighted ball integral of space-dependent data"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-countable-choice, def-spherical-averages-and-local-ball-means-in-rn, def-ball-average-operator-on-r-n, def-polar-surface-measure-on-the-unit-sphere, lem-sphere-and-ball-measures-scale, thm-continuous-implies-integrable, thm-polar-coordinates-formula-for-lebesgue-measure, cor-euclidean-closed-balls-and-spheres-are-compact, thm-extreme-value-metric, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.2, printed p. 173, definition (7.16) of the spherical mean $U$, and printed p. 175, formula (7.24) for the weighted ball integral"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.1.3, printed p. 284, Definition 9.1.1 of the spherical mean $M_r(h,x)$"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§1.11, printed p. 17, Proposition 1.45: polar integration; §2.1, printed p. 20, Theorem 2.1: ball and sphere averages"
---


## Definition

Assume the Axiom of Countable Choice. Let $n\ge1$, let $f:\mathbb R^n\to\mathbb R$ be continuous, let $\sigma$ be the polar surface measure on $S^{n-1}$ ([[def-polar-surface-measure-on-the-unit-sphere]]) and let $\omega_{n-1}=\sigma(S^{n-1})=nV_n>0$, where $V_n=|B_1^n|$ ([[lem-sphere-and-ball-measures-scale]]). The **spherical mean** of $f$ is
$$M_f(x,r):=\frac{1}{\omega_{n-1}}\int_{S^{n-1}}f(x+r\omega)\,d\sigma(\omega)\qquad(x\in\mathbb R^n,\ r>0),$$
the average of $f$ over the sphere of centre $x$ and radius $r$ with respect to the polar measure; this is the mean of [[def-spherical-averages-and-local-ball-means-in-rn]] with $u=f$, restricted to continuous data. One sets $M_f(x,0):=f(x)$; that value is a convention whose consistency as a limit is proved later on this page, not assumed here. The unnormalised sphere integral is
$$S_f(x,r):=\int_{S^{n-1}}f(x+r\omega)\,d\sigma(\omega)=\omega_{n-1}M_f(x,r)\qquad(x\in\mathbb R^n,\ r>0).$$
For even $n$ and $r>0$ put
$$W_f(x,r):=\frac{1}{n!!V_n}\int_{B_r(x)}\frac{f(y)}{\sqrt{r^2-|y-x|^2}}\,dy ,$$
where $n!!=n(n-2)\cdots2$ and $V_n=|B_1^n|$ is the volume of the unit ball ([[lem-sphere-and-ball-measures-scale]]); for $n=2$ this is the weighted disk integral appearing in the two-dimensional Poisson formula below. The integral defining $W_f(x,r)$ is absolutely convergent and hence well defined: the weight $y\mapsto(r^2-|y-x|^2)^{-1/2}$ is integrable over $B_r(x)$ — by translation invariance ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]) and the polar formula its integral is $\omega_{n-1}\int_0^rs^{n-1}(r^2-s^2)^{-1/2}ds<\infty$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]) — while $f$ is bounded on the closed ball $\overline{B_r(x)}$ because that ball is compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]]) and a continuous function is bounded on a compact set ([[thm-extreme-value-metric]]); the product of an integrable function and a bounded function is Lebesgue integrable. The **ball average** used on this page is the normalised mean $A_g(x,r)$ of [[def-ball-average-operator-on-r-n]], and every sphere or ball integral below is read under the Axiom of Countable Choice of [[def-countable-choice]], which supplies the polar measure and its integrals.
