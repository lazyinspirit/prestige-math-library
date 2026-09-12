---
id: "cor-geodesics-are-exactly-critical-points-of-energy-with-fixed-endpoints"
kind: "corollary"
title: "Geodesics are exactly critical points of energy with fixed endpoints"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-first-variation-formula-for-energy","def-geodesic-of-an-affine-connection","lem-smooth-bump-between-concentric-euclidean-balls","thm-heine-borel-r","thm-extreme-value-r","thm-nonnegative-continuous-with-zero-integral-vanishes"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Corollary 16.4.1(1) and proof Step 1, pp.124--125
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "contradiction"
---

## Statement

Let $\gamma:[a,b]\to M$ be a smooth curve on a Riemannian manifold without boundary, where $a<b$. Then $\gamma$ is a geodesic if and only if
$$\left.\frac d{ds}\right|_{s=0}E(\gamma_s)=0$$
for every smooth fixed-endpoint variation $\alpha(s,t)=\gamma_s(t)$ of $\gamma$.

## Facts & Assumptions

**Given:** The Riemannian manifold and smooth curve in the statement, and the Levi--Civita covariant acceleration $A=D_t\dot\gamma$.

[F1] [[def-geodesic-of-an-affine-connection]] says that $\gamma$ is a geodesic exactly when $A=0$.

[F2] For a fixed-endpoint smooth variation, [[thm-first-variation-formula-for-energy]] gives $\left.dE(\gamma_s)/ds\right|_0=-\int_a^b g(V,A)\,dt$.

[F3] [[lem-smooth-bump-between-concentric-euclidean-balls]] supplies a smooth one-variable bump equal to one on a smaller interval and supported in a larger interval. Closed intervals are compact by [[thm-heine-borel-r]], and [[thm-extreme-value-r]] bounds a continuous real function on one.

[F4] A nonnegative continuous function on a compact interval that has zero integral vanishes identically ([[thm-nonnegative-continuous-with-zero-integral-vanishes]]).

## Proof

**Proof technique:** contradiction.

1.1 If $\gamma$ is geodesic, [F1] gives $A=0$. Thus [F2] gives zero first variation for every smooth fixed-endpoint variation. [F1, F2]

1.2 Conversely, assume every such first variation is zero and fix $t_0\in(a,b)$. Choose a coordinate chart $x:U\to x(U)$ at $\gamma(t_0)$. Some Euclidean ball $B_{3r}(x(\gamma(t_0)))$ lies in $x(U)$; after decreasing $h>0$, $[t_0-2h,t_0+2h]\subset(a,b)$ and $x(\gamma(t))\in B_r(x(\gamma(t_0)))$ throughout that interval. Applying [F3] in $\mathbb R$ and translating gives $\chi:\mathbb R\to[0,1]$ with $\chi=1$ on $[t_0-h,t_0+h]$ and support in $(t_0-2h,t_0+2h)$. [F3, given]

2.1 Put $W(t)=\chi(t)A(t)$. This is a smooth field along $\gamma$, supported in the chart interval and zero on neighborhoods of its two ends. Let $w(t)$ be its coordinate components there. The continuous function $|w(t)|$ has a maximum $C$ on the compact closed interval by [F3]. For $|s|<r/(C+1)$ define $$\alpha(s,t)=\begin{cases}x^{-1}(x(\gamma(t))+s w(t)),&t\in(t_0-2h,t_0+2h),\\ \gamma(t),&t\notin\operatorname{supp}\chi.\end{cases}$$ The two formulas agree on neighborhoods of the gluing points. Moreover $|sw(t)|<r$, so the perturbed coordinate lies in $B_{2r}(x(\gamma(t_0)))\subset x(U)$. Hence $\alpha$ is a smooth fixed-endpoint variation with variation field $W$. [F3, step 1.2]

3.1 Applying the criticality assumption and [F2] to step 2.1 gives $$0=-\int_a^b\chi(t)|A(t)|_g^2\,dt.$$ The integrand is nonnegative and continuous, and at $t_0$ it equals $|A(t_0)|_g^2$. If $A(t_0)\ne0$, [F4] contradicts the displayed zero integral. Therefore $A(t_0)=0$. Since $t_0$ was arbitrary, $A=0$ on $(a,b)$, and smooth one-sided extension gives $A(a)=A(b)=0$ as well. Thus [F1] makes $\gamma$ a geodesic. [F1, F2, F4, step 1.2, step 2.1, discharge-contradiction]

4.1 Steps 1.1 and 3.1 prove both implications. Constant curves have $A=0$. In dimension zero every curve is locally constant, so both sides hold without the positive-dimensional coordinate construction; dimension one is exactly the one-variable case above. An empty $M$ supplies no curve. The condition $a<b$ provides interior test points, while endpoint acceleration follows by smooth one-sided continuity. For each fixed $t_0$ only one chart, two radii, and one explicit bump are used; no simultaneous selection over all $t_0$ is made, so no choice axiom is needed. [F1, F2, F3, F4, step 1.1, step 3.1] ∎
