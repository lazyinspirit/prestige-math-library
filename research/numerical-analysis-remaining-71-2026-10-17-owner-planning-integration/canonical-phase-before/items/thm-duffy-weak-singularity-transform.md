---
id: thm-duffy-weak-singularity-transform
kind: theorem
title: The Duffy map turns a vertex singularity into an integrable radial weight
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-duffy-reference-triangle-map, lem-duffy-reference-map-jacobian-and-image, def-p-norms-on-rn, def-real-power, thm-real-power-laws, lem-real-power-improper-integral, thm-change-of-variables-for-compact-jordan-sets, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, thm-real-power-continuity-and-derivatives, thm-composition-of-continuous-functions, thm-algebra-of-continuous-functions]
proof_strategy: direct
axiom_use: None. The truncated change of variables and power-tail limit use no choice.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Imperial College London, Numerical quadrature, Finite Element course notes, §1.6
      url: https://finite-element.github.io/1_quadrature.html
      locator: §1.6, equations (1.11)–(1.13), Duffy Jacobian and triangle transformation.
    - title: J. Lebl, Basic Analysis I, §5.4.1–5.4.2, The logarithm and the exponential
      url: https://www.jirka.org/ra/html/sec_logandexp.html
      locator: §5.4.1–5.4.2, integrability of positive-base real powers.
---

## Statement

Let $\alpha<2$ and let $q:T\to\mathbb R$ be continuous. On $T\setminus\{(0,0)\}$ put $f(x,y)=\|(x,y)\|_2^{-\alpha}q(x,y)$, where $\|\cdot\|_2$ is the Euclidean norm. The improper integral over $T$ is absolutely convergent and
$$\int_T f(x,y)\,dx\,dy=\int_0^1\int_0^1 r^{1-\alpha}G(r,s)\,ds\,dr, \qquad G(r,s)=(1+s^2)^{-\alpha/2}q(r,rs).$$
In particular, the transformed radial weight $r^{1-\alpha}$ is integrable at zero because $1-\alpha>-1$.

## Facts & Assumptions

**Given:** A real exponent $\alpha<2$, a continuous amplitude $q$ on the reference triangle $T$, and the map $D$ of [[def-duffy-reference-triangle-map]].

[F1] [[def-duffy-reference-triangle-map]] and [[lem-duffy-reference-map-jacobian-and-image]]: $D(r,s)=(r,rs)$ maps the square to $T$, is one-to-one with inverse $(x,y)\mapsto(x,y/x)$ for $r>0$, and has determinant $r$.

[F2] [[def-p-norms-on-rn]]: $\|(r,rs)\|_2=r\sqrt{1+s^2}$ for $r>0$.

[F3] [[thm-change-of-variables-for-compact-jordan-sets]]: on a compact truncated region where the map is one-to-one with nonzero Jacobian, the integral changes by the absolute Jacobian determinant.

[F4] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]] and [[thm-real-power-continuity-and-derivatives]]: the continuous function $G$ is bounded on the compact square, and $u\mapsto u^{-\alpha/2}$ is continuous for $u>0$.

[F5] [[lem-real-power-improper-integral]]: if $\gamma>-1$, then $\int_0^\varepsilon r^\gamma dr=\varepsilon^{\gamma+1}/(\gamma+1)$.

[F6] [[thm-real-power-laws]]: positive-base powers satisfy $(ab)^u=a^ub^u$ and $(a^v)^u=a^{vu}$.

[F7] [[thm-composition-of-continuous-functions]] and [[thm-algebra-of-continuous-functions]]: the composition and product of the continuous functions in $G$ remain continuous.

## Proof

1.1 For $0<\varepsilon<1$, restrict to $T_\varepsilon=\{(x,y)\in T:x\ge\varepsilon\}$. The polynomial map $D(r,s)=(r,rs)$ extends to the open set $U=(0,\infty)\times\mathbb R$, where it is injective with inverse $(x,y)\mapsto(x,y/x)$ and determinant $r>0$. Thus its restriction to the compact Jordan rectangle $[\varepsilon,1]\times[0,1]$ satisfies [F3]; on its image $\|(x,y)\|_2\ge\varepsilon$, so the integrand is continuous and bounded there. By [F1]–[F2] and [F6], its transformed integrand is $r\,(r\sqrt{1+s^2})^{-\alpha}q(r,rs)=r^{1-\alpha}G(r,s)$. [F1, F2, F3, F6, given, algebra]

1.2 The function $G$ is continuous on $[0,1]^2$ by [F4] and [F7], so let $M=\max|G|<\infty$. Since $1-\alpha>-1$, [F5] bounds the absolute transformed integral over $0<r<\varepsilon$ by $M\varepsilon^{2-\alpha}/(2-\alpha)$, which tends to zero. Hence the truncated integrals have an absolutely convergent limit and the displayed identity follows from step 1.1. [F4, F5, F7, step 1.1, algebra]

2.1 The same bound applies to any neighborhood of the vertex contained in $0\le x<\varepsilon$, and every sufficiently small Euclidean ball about $(0,0)$ is contained in such a set. Therefore the absolute integral near the vertex tends to zero independently of the particular shrinking neighborhood, establishing the usual improper-integral interpretation. [F1, step 1.2, algebra] ∎

