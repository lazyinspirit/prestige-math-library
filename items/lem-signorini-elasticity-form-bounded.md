---
id: lem-signorini-elasticity-form-bounded
kind: lemma
title: "The isotropic contact elasticity form is well defined and bounded"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    def-signorini-elasticity-contact-model,
    cor-cauchy-schwarz-inequality-for-l-two,
    def-sobolev-space-wkp-and-its-norm
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part XI Chapter 53: Stokes
        equations: Basic ideas"
      url: "https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf"
      locator: "§§53.1–53.2, printed pp. 391–394: the symmetric strain form and its
        continuity bounds."
    - title: "Walter Zulehner, Numerical Methods for Continuum Mechanics 1, complete
        80-page lecture notes"
      url: "https://www.numa.uni-linz.ac.at/Teaching/Lectures/numkont1_en.pdf"
      locator: "Chapter 2 §2.1, printed pp. 20–22: the elasticity bilinear form and
        boundedness estimate."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

In the setting of [[def-signorini-elasticity-contact-model]], the form $a$ is well defined, symmetric, and satisfies
$$|a(u,v)|\le(2\mu+2\lambda)\|u\|_{H^1(\Omega)}\|v\|_{H^1(\Omega)}\qquad(u,v\in V).$$

## Facts & Assumptions

**Given:** The bounded polygon $\Omega$, $u,v\in V\subset H^1(\Omega;\mathbb R^2)$, constants $\mu>0$, $\lambda\ge0$, and the form in [[def-signorini-elasticity-contact-model]].

[F1] The strain and form are $\varepsilon(u)=(\nabla u+(\nabla u)^T)/2$ and $a(u,v)=\int_\Omega2\mu\varepsilon(u):\varepsilon(v)+\lambda\operatorname{div}u\operatorname{div}v\,dx$. ([[def-signorini-elasticity-contact-model]])

[F2] For $L^2$ matrix or scalar fields, the integral pairing is bounded by the product of the $L^2$ norms. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F3] The $H^1$ norm contains the $L^2$ norm of the full weak gradient, and the entries of that gradient are in $L^2$. ([[def-sobolev-space-wkp-and-its-norm]])

## Proof

**Proof technique:** direct.

**Given:** The setting above and the real isotropic elasticity form $a$.

1.1 The symmetric-part map is an orthogonal projection in the Frobenius inner product, so $|\varepsilon(w)|_F\le|\nabla w|_F$. Also $|\operatorname{div}w|=|\operatorname{tr}\nabla w|\le\sqrt2|\nabla w|_F$ by Cauchy–Schwarz on the two diagonal entries. Thus both $\varepsilon(w)$ and $\operatorname{div}w$ are in $L^2$ by [F3], so each integral defining $a(u,v)$ is finite. [F1, F3, given, algebra]

2.1 Applying [F2] to the two terms of [F1] and then the bounds of step 1.1 gives $|a(u,v)|\le2\mu\|\nabla u\|_2\|\nabla v\|_2+2\lambda\|\nabla u\|_2\|\nabla v\|_2\le(2\mu+2\lambda)\|u\|_{H^1}\|v\|_{H^1}$. The integrand is symmetric in $u,v$, so $a(u,v)=a(v,u)$. [F1, F2, F3, step 1.1, algebra] ∎
