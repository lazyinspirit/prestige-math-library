---
id: lem-ball-and-sphere-mean-radial-identity
kind: lemma
title: "Ball means and sphere means are related by a radial derivative"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
proof_strategy: direct
deps: [def-spherical-mean-of-space-dependent-data, def-ball-average-operator-on-r-n, thm-polar-coordinates-formula-for-lebesgue-measure, cor-primitives-of-a-continuous-function, lem-sphere-and-ball-measures-scale, def-countable-choice, thm-heine-cantor-metric, cor-euclidean-closed-balls-and-spheres-are-compact, def-metric-compactness, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.2, printed p. 173, (7.16) and the radial measure identity behind it"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.1, printed p. 20, Theorem 2.1 and equation (2.4): sphere-average radial derivative and radial integration for ball averages"
---


## Statement

Assume the Axiom of Countable Choice, let $n\ge1$, let $g\in C^0(\mathbb R^n)$, and for $x\in\mathbb R^n$, $r>0$ let $A_g(x,r):=|B_r(x)|^{-1}\int_{B_r(x)}g$ be the ball average of [[def-ball-average-operator-on-r-n]] and $M_g$ the spherical mean of [[def-spherical-mean-of-space-dependent-data]]. Then for every $r>0$
$$A_g(x,r)=\frac{n}{r^n}\int_0^rs^{n-1}M_g(x,s)\,ds,\qquad M_g(x,r)=A_g(x,r)+\frac rn\,\partial_rA_g(x,r).$$

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $g\in C^0(\mathbb R^n)$, and the means $A_g$ and $M_g$ of the statement.

[F1] Under Countable Choice, $\int_{\mathbb R^n}f\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}f(s\theta)s^{n-1}\,d\sigma(\theta)\,ds$ for every Borel measurable $f:\mathbb R^n\to[0,\infty]$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F2] $M_g(x,s)=\omega_{n-1}^{-1}\int_{S^{n-1}}g(x+s\omega)\,d\sigma(\omega)$ and $\omega_{n-1}=\sigma(S^{n-1})$ for $x\in\mathbb R^n$, $s>0$ ([[def-spherical-mean-of-space-dependent-data]]).

[F3] $|B_r(x)|=\omega_{n-1}r^n/n$ for $r>0$ ([[lem-sphere-and-ball-measures-scale]]).

[F4] A continuous function on a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]); Euclidean closed balls are compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]], in the sense of [[def-metric-compactness]]).

[F5] If $I\subseteq\mathbb R$ is order-convex with at least two elements and $f:I\to\mathbb R$ is continuous on $I$, then for $r_0\in I$, $r\mapsto\int_{r_0}^rf$ is a primitive of $f$ on $I$ ([[cor-primitives-of-a-continuous-function]]).

## Proof

1.1 Polar coordinates applied to the positive and negative parts of the function $u\mapsto g(x+u)\mathbf 1_{B_r(0)}(u)$ give, using translation invariance ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]) to set $y=x+u$, $|B_r(x)|A_g(x,r)=\int_{B_r(x)}g=\int_0^r\int_{S^{n-1}}g(x+s\omega)s^{n-1}\,d\sigma(\omega)\,ds=\omega_{n-1}\int_0^rs^{n-1}M_g(x,s)\,ds$, where the inner integral is $\omega_{n-1}M_g(x,s)$ by the definition of the spherical mean; dividing by $|B_r(x)|=\omega_{n-1}r^n/n$ gives the first identity. [F1, F2, F3, algebra]

1.2 The function $s\mapsto M_g(x,s)$ is continuous on $(0,\infty)$: for $s,s_0>0$ with $|s-s_0|<1$ one has $|M_g(x,s)-M_g(x,s_0)|\le\sup_{\omega\in S^{n-1}}|g(x+s\omega)-g(x+s_0\omega)|$, and the two points $x+s\omega$ and $x+s_0\omega$ lie in the compact ball $\overline{B_{s_0+1}(x)}$ at distance $|s-s_0|$; since $g$ is uniformly continuous on that ball by [F4], the supremum tends to $0$ as $s\to s_0$. [F4, algebra]

1.3 Hence $s\mapsto s^{n-1}M_g(x,s)$ is continuous on $(0,\infty)$, so locally at any $r>0$ split the integral at a fixed $r_0\in(0,r)$; the first part is constant and [F5] differentiates the second part. Thus $r\mapsto\int_0^rs^{n-1}M_g(x,s)\,ds$ is a primitive of $s^{n-1}M_g(x,s)$, and the first identity gives $\partial_r\bigl(r^nA_g(x,r)\bigr)=n\,r^{n-1}M_g(x,r)$ for $r>0$. [F5, algebra]

2.1 Differentiating the product gives $\partial_r\bigl(r^nA_g(x,r)\bigr)=nr^{n-1}A_g(x,r)+r^n\partial_rA_g(x,r)$, so equating with the previous display and dividing by $nr^{n-1}>0$ yields $M_g(x,r)=A_g(x,r)+\frac rn\partial_rA_g(x,r)$, the second identity. [algebra] ∎ 
