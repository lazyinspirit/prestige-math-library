---
id: "lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm"
kind: "lemma"
title: "The geodesic spray is a well-defined smooth vector field on TM"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-geodesic-spray","prop-coordinate-geodesic-equation","thm-christoffel-symbol-transformation-law","def-countable-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, proof of Theorem 15.2.1, pp.115–117
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. The local geodesic-spray formulas agree on overlaps and define a smooth vector field $S$ on $TM$. Its integral curves are exactly the velocity lifts $t\mapsto(\gamma(t),\gamma'(t))$ of affinely parametrized geodesics.

## Facts & Assumptions

**Given:** Two overlapping base charts $x=(x^i)$ and $y=(y^a)$, with induced fibre coordinates $v^i$ and $w^a$.

[F1] [[def-countable-choice]] names the assumed $\mathrm{AC}_\omega$, and [[def-geodesic-spray]] gives the chartwise spray formula whose overlap agreement is to be proved here.

[F2] [[thm-christoffel-symbol-transformation-law]] gives the inhomogeneous transformation rule for the two Christoffel arrays.

[F3] [[prop-coordinate-geodesic-equation]] characterizes geodesics by $\dot x^k=v^k$ and $\dot v^k=-\Gamma^k{}_{ij}v^iv^j$.

## Proof

1.1 On the overlap, $w^a=(\partial y^a/\partial x^i)v^i$. Along a local integral curve of the $x$-formula, differentiation gives $$\dot y^a=\frac{\partial y^a}{\partial x^i}v^i=w^a,$$ and $$\dot w^c=\frac{\partial^2y^c}{\partial x^i\partial x^j}v^iv^j-\frac{\partial y^c}{\partial x^k}\Gamma^k{}_{ij}v^iv^j.$$ Differentiating the inverse-coordinate identity twice gives $$\frac{\partial^2y^c}{\partial x^i\partial x^j}+\frac{\partial y^c}{\partial x^k}\frac{\partial^2x^k}{\partial y^a\partial y^b}\frac{\partial y^a}{\partial x^i}\frac{\partial y^b}{\partial x^j}=0.$$ Inserting this and [F2] yields $\dot w^c=-\widetilde\Gamma^c{}_{ab}w^aw^b$, exactly the $y$-formula. [F2, given, algebra]

2.1 Step 1.1 is the tangent-coordinate transformation law for the local vector fields, so the formulas glue to one vector field on $TM$. Their coordinate components are smooth by [F1], hence the glued field is smooth. [F1, step 1.1]

3.1 If $(x(t),v(t))$ is an integral curve, its first component equation says $v^i=\dot x^i$ and its second says $\ddot x^k+\Gamma^k{}_{ij}\dot x^i\dot x^j=0$; [F3] therefore makes $x(t)$ a geodesic and $(x,v)$ its velocity lift. Conversely, a geodesic and its velocity satisfy those two equations by [F3], so its lift is an integral curve. At $v=0$ the lift is stationary; dimensions zero and one reduce respectively to the empty system and the scalar calculation, and the empty bundle is harmless. Parameter endpoints are local and one-sided where included. No choice occurs in the overlap calculation; $\mathrm{AC}_\omega$ remains the explicit hypothesis inherited from [F1]. [F1, F3, step 1.1, step 2.1] ∎
