---
id: ex-straight-lines-as-euclidean-geodesics
kind: example
title: Straight lines as Euclidean geodesics
status: draft
origin: pipeline
pipeline_run: phase-2-next-17
deps: [prop-coordinate-geodesic-equation, prop-christoffel-formula-for-the-levi-civita-connection, cor-zero-derivative-implies-constant]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Example 15.1.3, p. 114
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
---

## Example

On Euclidean $\mathbb R^n$ with its Levi–Civita connection, every affinely parametrized geodesic on an interval $I$ has the form
$$\gamma(t)=p+tv\quad(t\in I)$$
for fixed $p,v\in\mathbb R^n$, and every such curve is a geodesic. Here $v=0$ gives a constant geodesic; a nonconstant curve traces a straight line. If $n=0$, the only curves are constant.

## Facts & Assumptions

**Given:** The Euclidean metric $g_{ij}=\delta_{ij}$ in Cartesian coordinates and an interval $I$ of affine parameter values.

[F1] [[prop-christoffel-formula-for-the-levi-civita-connection]] gives $\Gamma^k{}_{ij}=\frac12g^{k\ell}(\partial_i g_{j\ell}+\partial_jg_{i\ell}-\partial_\ell g_{ij})$.

[F2] [[prop-coordinate-geodesic-equation]] says that $\gamma$ is a geodesic exactly when $\ddot x^k+\Gamma^k{}_{ij}\dot x^i\dot x^j=0$ in every coordinate.

[F3] [[cor-zero-derivative-implies-constant]] says that a continuous function on an interval whose interior derivative is zero is constant, including when the interval has endpoints.

## Verification

1.1 Every $g_{ij}=\delta_{ij}$ is constant, so all its partial derivatives vanish. Formula [F1] therefore gives $\Gamma^k{}_{ij}=0$ for every index. [F1, given]

2.1 By [F2] and step 1.1, the geodesic equation is $\ddot x^k=0$ for each $k$. Applying [F3] first to $\dot x^k$ gives a constant $v^k$; applying it to $x^k(t)-tv^k$ gives a constant $p^k$. Thus $\gamma(t)=p+tv$ throughout the interval, not merely near one parameter value. For an included endpoint the equality extends by continuity. [F2, F3, step 1.1]

3.1 Conversely, $x^k(t)=p^k+tv^k$ has $\ddot x^k=0$, so [F2] and step 1.1 make it a geodesic. If $v=0$, it is constant; if $v\ne0$, its image lies on the straight line $p+\mathbb Rv$. In dimension zero there are no coordinate equations and the unique curve is constant. The argument makes no choice beyond the given curve's own coordinates. [F2, step 1.1, step 2.1] ∎
