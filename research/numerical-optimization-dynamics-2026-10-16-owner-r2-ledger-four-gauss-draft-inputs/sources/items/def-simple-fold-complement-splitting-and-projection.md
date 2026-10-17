---
id: def-simple-fold-complement-splitting-and-projection
kind: definition
title: "Complement splitting and range projection for a simple fold"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-orthogonal-complement
  - def-kernel-and-image-of-a-linear-map
  - def-linear-map
  - def-rank-and-nullity
  - def-total-derivative-in-euclidean-space
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Eugene L. Allgower and Kurt Georg, Numerical Continuation Methods: An Introduction, Springer Series in Computational Mathematics 13 (1990)"
      url: "http://lib.ysu.am/disciplines_bk/080dea8526183abcce1135f2a4460625.pdf"
      locator: "Chapter 2, §§2.1–2.2, printed pp. 7–16: complements and regular implicit curves"
    - title: "K. A. Cliffe, A. Spence, and S. J. Tavener, The numerical analysis of bifurcation problems with application to fluid mechanics, Acta Numerica 9 (2000), 39–131"
      url: "https://www.math.colostate.edu/~tavener/manuscripts/cliffe/acta-numerica-2000.pdf"
      locator: "§3.2, printed pp. 53–55: Lyapunov–Schmidt complement projection"
---

## Definition

Let $J:\mathbb R^n\to\mathbb R^n$ be linear of rank $n-1$
([[def-rank-and-nullity]]). Let $v$ be a unit
vector with $\ker J=\operatorname{span}\{v\}$, let $w\ne0$ satisfy
$w^TJ=0$, and let $b\in\mathbb R^n$ satisfy $a:=w^Tb\ne0$. Define the
state-space complement and range complement by
$$X:=v^\perp,\qquad Y:=\ker(w^T).$$
Set $q:=b/a$ and define the projection candidate
$$P:=I-qw^T:\mathbb R^n\to\mathbb R^n.$$
For a differentiable $F:U\subseteq\mathbb R^n\times\mathbb R\to\mathbb R^n$,
$F_x$ and $F_\lambda$ denote the restrictions of the total derivative
[[def-total-derivative-in-euclidean-space]] to the state and scalar-parameter
directions. At a simple fold, the intended data are
$J=F_x(x_0,\lambda_0)$ and $b=F_\lambda(x_0,\lambda_0)$.
The next lemma proves that $J|_X:X\to Y$ is an isomorphism and that $P$ is
the projection onto $Y$ along $\operatorname{span}\{q\}$.
