---
id: ex-bem-logarithmic-capacity-and-scale-on-a-circle
kind: example
title: The logarithmic single layer on a circle changes by a scale term of rank at most one
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-bem-logarithmic-capacity-and-two-dimensional-layer-scaling, thm-bem-logarithmic-capacity-homothety-and-layer-scale]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.4 and Exercise 11, PDF pp. 9–16: logarithmic capacity and the scale-dependent constant mode."
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§5, printed p. 625: the exceptional two-dimensional logarithmic-capacity case."
---

## Example

Let $\Gamma=S_1$ be the unit circle, let $s>0$, and scale the curve to $S_s$. For a smooth density $\lambda$ on $S_1$, set $\lambda_s(sy)=s^{-1}\lambda(y)$. Then
$$\operatorname{cap}(S_s)=s\operatorname{cap}(S_1),\qquad V_{S_s}\lambda_s(sx)=V_{S_1}\lambda(x)-\frac{\log s}{2\pi}\int_{S_1}\lambda\,ds.$$
In particular, the change in the layer trace depends only on the total charge, so it has rank at most one (rank zero for $s=1$ and rank one otherwise). For $\lambda=1/(2\pi)$ on $S_1$ and $s=e$, the total charge is one and the trace changes by $-1/(2\pi)$.

## Facts & Assumptions

**Given:** The logarithmic capacity and layer conventions of [[def-bem-logarithmic-capacity-and-two-dimensional-layer-scaling]], a circle, and a smooth density.

[F1] Under dilation by $s$, capacity scales by $s$ and the logarithmic single-layer trace gains $-(\log s)/(2\pi)$ times the total charge ([[thm-bem-logarithmic-capacity-homothety-and-layer-scale]]).

## Proof

1.1 The circle $S_1$ is compact. Since $|x-y|\le2$ on it, every probability energy is at least $-\log2$. Normalized arclength has finite energy: writing $x=e^{i\theta}$ and $y=e^{i\varphi}$ gives $|x-y|=2|\sin((\theta-\varphi)/2)|$, whose logarithmic singularity is integrable because $\int_0^\epsilon|\log t|dt<\infty$. Thus $I(S_1)$ is finite and $0<\operatorname{cap}(S_1)<\infty$. Apply [F1] with $K=S_1$ and $\Gamma=S_1$ to obtain both scaling identities in the Example. The functional $\lambda\mapsto\int_{S_1}\lambda ds$ has one-dimensional range, and its output is a constant function, so the trace correction is rank at most one. Its scalar factor vanishes precisely at $s=1$; otherwise the constant density gives a nonzero correction, proving rank one. [F1, given, algebra]

2.1 For $\lambda=1/(2\pi)$ on the unit circle, $\int_{S_1}\lambda ds=(1/(2\pi))(2\pi)=1$. Substituting $s=e$ into the correction gives $-(\log e)/(2\pi)=-1/(2\pi)$. Any zero-total-charge density has no scale correction by the same formula. [step 1.1, given, algebra] ∎

