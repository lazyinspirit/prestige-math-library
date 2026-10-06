---
id: ex-plane-circle-immersions-of-rotation-number-k
kind: example
title: "Plane circle immersions of rotation number k"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-rotation-number-of-an-immersed-oriented-circle-in-the-plane, thm-whitney-graustein-classification-of-plane-circle-immersions, prop-degree-of-the-power-map-on-the-circle, thm-winding-number-equals-circle-degree, def-immersion-submersion-and-constant-rank-map, def-degree-of-a-circle-loop, def-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hassler Whitney, On regular closed curves in the plane, Compositio Mathematica 4 (1937), pp. 276–284"
      url: https://www.numdam.org/item/CM_1937__4__276_0.pdf
      locator: "§1, pp. 276–279; rotation numbers of regular closed curves and the deformation theorem"
    - title: "John Francis, The h-Principle, Lecture 10: Classifying immersions of spheres, after Smale (notes by A. Beaudry)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/10eversing.pdf
      locator: "PDF pp. 1–2; the winding-number classification in the case $n=1$"
dependency_level: 14
---

## Example

For every integer $k\ne0$ the map $\gamma_k:S^1\to\mathbb R^2$,
$\gamma_k(\theta)=(\cos k\theta,\sin k\theta)$, with
$S^1=\mathbb R/2\pi\mathbb Z$ positively oriented, is an immersion:
$\gamma_k'(\theta)=k(-\sin k\theta,\cos k\theta)$ never vanishes. Its unit tangent is $\operatorname{sgn}(k)(-\sin k\theta,\cos k\theta)$,
a constant rotation of $e^{ik\theta}$, so $\operatorname{rot}(\gamma_k)=k$.
The zero value is realised by $\delta(\theta)=(\cos\theta,\sin2\theta)$,
whose velocity is $p(\sin\theta)$ for $p(u)=(-u,2-4u^2)$. This velocity
never vanishes and contracts through nonzero loops to $(0,2)$ via
$p((1-t)\sin\theta)$, so $\operatorname{rot}(\delta)=0$.
Thus $\{\gamma_k:k\in\mathbb Z\setminus\{0\}\}\cup\{\delta\}$ contains
one representative of each regular homotopy class, by Whitney–Graustein
under its inherited countable-choice hypothesis. The formula $\gamma_0$
is constant and is excluded.

## Facts & Assumptions

**Given:** The oriented circle $S^1=\mathbb R/2\pi\mathbb Z$, the maps $\gamma_k(\theta)=(\cos k\theta,\sin k\theta)$ for $k\in\mathbb Z\setminus\{0\}$ and $\delta(\theta)=(\cos\theta,\sin2\theta)$.

[F1] An immersion of the circle is a smooth map with everywhere nonvanishing velocity; its rotation number is the degree of the normalised velocity and equals the winding number of the velocity about the origin. [[def-immersion-submersion-and-constant-rank-map]], [[def-rotation-number-of-an-immersed-oriented-circle-in-the-plane]]

[F2] The degree of the $k$-th power map of the circle is $k$, and the winding number of a closed loop in $\mathbb C^\times$ about $0$ is the degree of its normalised circle loop. [[prop-degree-of-the-power-map-on-the-circle]], [[thm-winding-number-equals-circle-degree]], [[def-degree-of-a-circle-loop]]

[F3] Two oriented plane circle immersions are regularly homotopic if and only if their rotation numbers agree, and the rotation number gives a bijection $\pi_0\operatorname{Imm}(S^1,\mathbb R^2)\cong\mathbb Z$. [[thm-whitney-graustein-classification-of-plane-circle-immersions]]

## Verification

1.1 For $k\ne0$, $\gamma_k$ has velocity $k(-\sin k\theta,\cos k\theta)$ of norm $|k|>0$. Its normalized velocity is $\operatorname{sgn}(k)i e^{ik\theta}$, a constant rotation of the degree-$k$ power map, so $\operatorname{rot}(\gamma_k)=k$. For negative $k$ the extra factor is $-1$; it preserves degree. [F1, F2]

1.2 The velocity of $\delta$ is $p(\sin\theta)$ with $p(u)=(-u,2-4u^2)$. This never vanishes, and $p((1-t)\sin\theta)$ contracts it to $(0,2)$ through nonzero loops, giving rotation number zero. If $\delta(\theta)=\delta(\phi)$, equality of cosines gives $\phi=\theta$ or $\phi=-\theta$ modulo $2\pi$. In the second case equality of $\sin2\theta$ and $-\sin2\theta$ requires $\sin2\theta=0$; the only distinct pair is $\pi/2,3\pi/2$, both mapping to the origin. Thus this is its unique double point. [F1, F2, construct, algebra]

2.1 For $k<0$, $\gamma_k(\theta)=\gamma_{|k|}(-\theta)$ is the $|k|$-fold circle with reversed domain orientation, consistent with its rotation number $k$ in step 1.1. [F1, step 1.1]

3.1 By [F3], under its countable-choice hypothesis, $\gamma_k$ and $\gamma_l$ for nonzero $k,l$ are regularly homotopic exactly when $k=l$, and no $\gamma_k$ is regularly homotopic to $\delta$. Steps 1.1 and 1.2 realise every integer with exactly one member of the displayed family. In particular rotation number zero does not force injectivity. [F3, step 1.1, step 1.2, step 2.1] ∎