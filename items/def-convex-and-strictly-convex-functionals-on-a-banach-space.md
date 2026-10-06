---
id: def-convex-and-strictly-convex-functionals-on-a-banach-space
kind: definition
title: "Convex and strictly convex functionals on a convex subset of a real vector space"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-extended-reals, def-proper-coercive-and-weakly-lower-semicontinuous-functional]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, printed pp. 298-299 (quasiconvexity and the extension by $+infty$)"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 2 Section 4, printed p. 44 (Theorem 2.44(ii) and its convexity step)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $X$ be a real vector space and $K\subseteq X$. The set $K$ is **convex** if $\lambda u+(1-\lambda)v\in K$ for all $u,v\in K$ and $\lambda\in[0,1]$. Fix a nonempty convex $K$ and an extended-real functional $I:K\to(-\infty,+\infty]$ ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]), with the sums and positive-weight products of [[def-extended-reals]]. For convex combinations only, additionally define $0\cdot(+\infty)=0$; this is a local convention, since that product is left undefined in the general extended-real arithmetic. Then $I$ is **convex** if
$$I\big(\lambda u+(1-\lambda)v\big)\le\lambda I(u)+(1-\lambda)I(v),\qquad u,v\in K,\ \lambda\in[0,1],$$
and **strictly convex** if the inequality is strict whenever $u\ne v$, $I(u),I(v)<+\infty$ and $\lambda\in(0,1)$. A convex functional has convex sublevel sets: for every $t\in\mathbb R$ the set $\{u\in K:I(u)\le t\}$ is convex. Only real coefficients are used: on a complex vector space these notions are read on the underlying real structure.

## Remarks

- **Sublevel sets.** Let $I$ be convex and let $t\in\mathbb R$. If $u,v\in K$ satisfy $I(u)\le t$ and $I(v)\le t$, then $I(u),I(v)<+\infty$, and for $\lambda\in[0,1]$ convexity and the extended-real conventions give $I(\lambda u+(1-\lambda)v)\le\lambda I(u)+(1-\lambda)I(v)\le\max\{I(u),I(v)\}\le t$; hence $\{u\in K:I(u)\le t\}$ is convex. This is the property used when a sublevel set is intersected with a weakly closed admissible set.

- **Endpoint coefficients.** At $\lambda=0$ and $\lambda=1$ the defining inequality reads $I(v)\le I(v)$ and $I(u)\le I(u)$, using $0\cdot(+\infty)=0$ for the extended value $+\infty$; the strict form is therefore imposed only for $0<\lambda<1$, as stated.

- **Finite competitors.** For $0<\lambda<1$, if either $I(u)$ or $I(v)$ is $+\infty$, the right-hand side of the convexity inequality is $+\infty$, so it carries no information at such a pair; the strict form is correspondingly restricted to pairs in the effective domain $\operatorname{dom}I$ ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]).
