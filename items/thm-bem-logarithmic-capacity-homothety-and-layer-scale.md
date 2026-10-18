---
id: thm-bem-logarithmic-capacity-homothety-and-layer-scale
kind: theorem
title: Logarithmic capacity and single-layer scaling under homothety
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-bem-logarithmic-capacity-and-two-dimensional-layer-scaling]
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
      locator: "Chapter 1 §1.6, Exercise 11(a)–(e), PDF p. 16: logarithmic capacity, its invariance, and its scaling under dilations."
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§5, printed p. 625: the role of analytic capacity in the two-dimensional Laplace single-layer equation."
---

## Statement

Use the logarithmic energy and capacity conventions of [[def-bem-logarithmic-capacity-and-two-dimensional-layer-scaling]]. If $K\subset\mathbb R^2$ is compact and has $0<\operatorname{cap}(K)<\infty$ and $s>0$, then $\operatorname{cap}(sK)=s\operatorname{cap}(K)$. If $\Gamma$ is a closed piecewise-smooth curve and $\lambda$ is a smooth density, define $\Gamma_s=s\Gamma$ and $\lambda_s(sy)=s^{-1}\lambda(y)$. Then
$$V_{\Gamma_s}\lambda_s(sx)=V_\Gamma\lambda(x)-\frac{\log s}{2\pi}\int_\Gamma\lambda\,ds_y.$$
Thus changing length scale adds a constant-mode term of rank at most one (zero when $s=1$); the formula is retained separately from the three-dimensional kernel $1/(4\pi|x-y|)$.

## Facts & Assumptions

**Given:** The energy definition of logarithmic capacity and the two-dimensional layer kernel from [[def-bem-logarithmic-capacity-and-two-dimensional-layer-scaling]].

[F1] A Borel probability measure on $K$ is a nonnegative measure of total mass $1$ supported on $K$; dilation $y\mapsto sy$ sends such measures bijectively between $K$ and $sK$ and scales arclength by $s$.

## Proof


1.1 Let $\mu$ be any probability measure on $K$ and let $s_\#\mu$ be its pushforward under $y\mapsto sy$. Then $|sx-sy|=s|x-y|$, so its logarithmic energy is $\int_{sK}\int_{sK}\log\frac1{|X-Y|}\,d(s_\#\mu)(X)\,d(s_\#\mu)(Y)=\int_K\int_K\left(\log\frac1{|x-y|}-\log s\right)d\mu(x)d\mu(y)=I(\mu)-\log s,$ using $\mu(K)=1$. [F1, given, algebra]

2.1 The pushforward map in [F1] is bijective, with inverse dilation by $1/s$. Taking the infimum over all probability measures therefore gives $I(sK)=I(K)-\log s$. Exponentiating the definition yields $\operatorname{cap}(sK)=e^{-I(sK)}=s e^{-I(K)}=s\operatorname{cap}(K)$. [F1, step 1.1, algebra]

3.1 In the curve integral, substitute $Y=sy$. Arclength contributes $ds_Y=s\,ds_y$, while $\lambda_s(sy)=s^{-1}\lambda(y)$, so their product is $\lambda(y)ds_y$. The kernel identity $-\log|sx-sy|=-\log|x-y|-\log s$ then gives $V_{\Gamma_s}\lambda_s(sx)=-\frac1{2\pi}\int_\Gamma\bigl(\log|x-y|+\log s\bigr)\lambda(y)\,ds_y=V_\Gamma\lambda(x)-\frac{\log s}{2\pi}\int_\Gamma\lambda\,ds_y,$ as asserted. [F1, given, algebra] ∎

