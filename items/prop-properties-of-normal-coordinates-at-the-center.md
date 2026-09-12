---
id: "prop-properties-of-normal-coordinates-at-the-center"
kind: "proposition"
title: "Properties of normal coordinates at the center"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-normal-neighborhood-and-normal-coordinate-chart","prop-coordinate-geodesic-equation","prop-christoffel-formula-for-the-levi-civita-connection","prop-exponential-map-scales-geodesic-time","thm-the-differential-of-exp-p-at-zero-is-the-identity","def-countable-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Proposition 17.2.2, pp.130--131
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(x^1,\ldots,x^n)$ be normal coordinates centred at $p$ from an orthonormal ordered basis $(e_1,\ldots,e_n)$ of $T_pM$. Then
$$x(p)=0,\qquad \left.\partial_i\right|_p=e_i,\qquad g_{ij}(p)=\delta_{ij},\qquad \Gamma^k{}_{ij}(p)=0,\qquad \partial_k g_{ij}(p)=0.$$
Moreover, if $v=\sum_i v^ie_i$, then every part of its geodesic lying in the normal neighbourhood has coordinate expression
$$x(\gamma_{p,v}(t))=(tv^1,\ldots,tv^n).$$

## Facts & Assumptions

**Given:** An orthonormal supplied basis and its normal coordinate chart on a normal neighbourhood of $p$.

[F1] Under [[def-countable-choice]], [[def-normal-neighborhood-and-normal-coordinate-chart]] gives $x=E^{-1}\circ\exp_p^{-1}$ and [[prop-exponential-map-scales-geodesic-time]] gives $\gamma_{p,v}(t)=\exp_p(tv)$ whenever defined in the chart.

[F2] [[thm-the-differential-of-exp-p-at-zero-is-the-identity]] gives $d(\exp_p)_{0_p}=I$, and [[prop-coordinate-geodesic-equation]] gives the coordinate geodesic equation in both directions.

[F3] [[prop-christoffel-formula-for-the-levi-civita-connection]] gives both symmetry $\Gamma^k{}_{ij}=\Gamma^k{}_{ji}$ and the metric-derivative formula after lowering the upper index.

## Proof

**Proof technique:** direct.

1.1 From [F1], $x(p)=E^{-1}(0_p)=0$. The inverse chart is $x^{-1}=\exp_p\circ E$, so [F2] gives $d(x^{-1})_0(e_i^{\mathrm{std}})=d(\exp_p)_{0_p}(e_i)=e_i$; by the definition of coordinate tangent vectors this is $\partial_i|_p=e_i$. Orthonormality then gives $g_{ij}(p)=g_p(e_i,e_j)=\delta_{ij}$. [F1, F2, given]

1.2 If $v=\sum_i v^ie_i$ and $\gamma_{p,v}(t)$ is in the normal neighbourhood, [F1] yields $\gamma_{p,v}(t)=\exp_p(tv)$ and therefore $x(\gamma_{p,v}(t))=E^{-1}(tv)=(tv^1,\ldots,tv^n)$. Thus every radial coordinate line is a geodesic on every connected parameter subinterval for which it remains in the chart. [F1]

2.1 Substitute the line from step 1.2 into the coordinate geodesic equation [F2] at $t=0$. Its second coordinate derivatives vanish, so for every $v\in\mathbb R^n$ and every $k$, $\sum_{i,j}\Gamma^k{}_{ij}(p)v^iv^j=0$. Taking $v=e_i^{\mathrm{std}}$ gives $\Gamma^k{}_{ii}(p)=0$. For $i\ne j$, taking $v=e_i^{\mathrm{std}}+e_j^{\mathrm{std}}$ gives $\Gamma^k{}_{ij}(p)+\Gamma^k{}_{ji}(p)=0$; symmetry from [F3] makes both terms zero. Hence every Christoffel symbol vanishes at $p$. [F2, F3, step 1.2]

3.1 Write $\Gamma_{ij\ell}=\sum_m g_{m\ell}\Gamma^m{}_{ij}$. The two equations $\Gamma_{kij}(p)=0$ and $\Gamma_{kji}(p)=0$ from step 2.1 and [F3] read respectively $$\partial_k g_{ij}+\partial_i g_{kj}-\partial_j g_{ki}=0,\qquad \partial_k g_{ji}+\partial_j g_{ki}-\partial_i g_{kj}=0$$ at $p$. Adding and using $g_{ij}=g_{ji}$ gives $2\partial_k g_{ij}(p)=0$, so every first metric derivative vanishes. [F3, step 2.1]

4.1 In dimension zero all indexed families and sums are empty, $x(p)=0$, and every assertion holds. In dimension one step 2.1 uses $v=1$ and gives the sole symbol and then the sole metric derivative as zero. On an empty manifold there is no centred chart. The zero vector gives the constant radial geodesic; chart-domain endpoints are excluded because the normal source is open, while every included parameter time is covered by step 1.2. The orthonormal basis is supplied, and $\mathrm{AC}_\omega$ is inherited only through [F1]--[F2]. [F1, F2, F3, step 1.1, step 1.2, step 2.1, step 3.1] ∎
