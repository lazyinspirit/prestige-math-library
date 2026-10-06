---
id: thm-stationarity-is-sufficient-for-a-global-minimum-of-a-convex-differentiable-functional
kind: theorem
title: "Stationarity is sufficient for a global minimum of a convex differentiable functional"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-convex-and-strictly-convex-functionals-on-a-banach-space, def-gateaux-and-frechet-derivatives-of-a-functional, cor-strict-convexity-gives-uniqueness-of-a-minimiser, lem-three-slope-inequality-for-convex-functions, thm-supporting-lines-for-convex-functions, def-infimum]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 1 Section 2, Remark 1.5, printed p. 7"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, Corollary 13.4, printed p. 299"
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 2, Sections 2.4-2.5, printed pp. 14-16"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $K$ be a convex subset of a real Banach space and let $I:K\to(-\infty,+\infty]$ be convex ([[def-convex-and-strictly-convex-functionals-on-a-banach-space]]). Fix $u\in K$ with $I(u)<+\infty$, and assume that for every $v\in K$ the finite one-sided admissible directional derivative
$$\delta_+I(u;v-u):=\lim_{t\downarrow0}\frac{I(u+t(v-u))-I(u)}{t}$$
exists and is nonnegative. Then $I(u)=\inf_KI$. If $I$ is strictly convex, $u$ is the unique minimiser. In particular, for a real-valued Gateaux differentiable functional on an open neighbourhood of $K$, the condition $\delta I(u;v-u)\ge0$ for every $v\in K$ suffices, since the one-sided derivative agrees with that of [[def-gateaux-and-frechet-derivatives-of-a-functional]].

## Facts & Assumptions

**Given:** A convex $K$ in a real Banach space; a convex extended-real functional $I$; a finite competitor $u\in K$; and finite nonnegative one-sided derivatives $\delta_+I(u;v-u)$ for every $v\in K$. Only $0<t<1$ is used, so the segment is admissible even when $u$ lies on the boundary of $K$.

[F1] Convexity of $I$: for $w,z\in K$ and $\lambda\in[0,1]$ one has $I(\lambda w+(1-\lambda)z)\le\lambda I(w)+(1-\lambda)I(z)$, with the extended-real conventions; in particular the segment $\{u+\varepsilon(v-u):\varepsilon\in[0,1]\}$ lies in $K$ for $v\in K$ ([[def-convex-and-strictly-convex-functionals-on-a-banach-space]]).

[F2] Three-slope inequality: if $\varphi:I_0\to\mathbb R$ is convex on an interval and $x<y<z$ lie in $I_0$, then the secant slopes satisfy $s(x,y)\le s(x,z)\le s(y,z)$, where $s(a,b)=(f(b)-f(a))/(b-a)$ ([[lem-three-slope-inequality-for-convex-functions]]). Equivalently, the supporting-line form of convexity applies at every interior point with a slope between the one-sided derivatives ([[thm-supporting-lines-for-convex-functions]]).

[F3] The admissible derivative is the limit of the secant slopes $(\varphi_w(t)-\varphi_w(0))/t$ as $t\downarrow0$, where $\varphi_w(t):=I(u+tw)$. When an ordinary Gateaux derivative exists on an open neighbourhood, this is its one-sided restriction ([[def-gateaux-and-frechet-derivatives-of-a-functional]]).

[F4] A proper, strictly convex functional has at most one minimiser on a convex set ([[cor-strict-convexity-gives-uniqueness-of-a-minimiser]]); in step 4.1 the functional is proper because $I(u)$ is finite.

## Proof

**Proof technique:** direct, by monotonicity of the secant slopes along the admissible segment.

1.1 Reduction to a segment. Fix $v\in K$. If $I(v)=+\infty$ then $I(u)\le I(v)$ is automatic because $I(u)$ is finite by hypothesis; so assume $I(v)<+\infty$. Define $\varphi(\varepsilon):=I(u+\varepsilon(v-u))$ for $\varepsilon\in[0,1]$. By [F1] the segment lies in $K$ and $\varphi(\varepsilon)\le(1-\varepsilon)I(u)+\varepsilon I(v)<+\infty$, while $\varphi(\varepsilon)>-\infty$ by the codomain of $I$; hence $\varphi:[0,1]\to\mathbb R$ is a finite convex function. [F1, F3, given]

1.2 The one-sided derivative. By the differentiability hypothesis the secant slope $s(0,\varepsilon)=\varepsilon^{-1}(\varphi(\varepsilon)-\varphi(0))$ has the finite limit $\delta_+I(u;v-u)\ge0$ as $\varepsilon\downarrow0$. [F3, given]

2.1 Secant comparison. By [F2], applied on the interval $[0,1]$ to the convex function $\varphi$ and the points $0<\varepsilon<1$, one has $s(0,\varepsilon)\le s(0,1)$. [F2, step 1.1]

3.1 Passing to the limit. Letting $\varepsilon\downarrow0$ in the inequality of step 2.1 gives $\delta_+I(u;v-u)\le s(0,1)=\varphi(1)-\varphi(0)=I(v)-I(u)$; since $\delta_+I(u;v-u)\ge0$ by hypothesis, it follows that $I(v)\ge I(u)$. [step 1.2, step 2.1, algebra]

4.1 Conclusion and uniqueness. As $v\in K$ was arbitrary, $I(u)\le I(v)$ for every $v\in K$, so $I(u)$ is a lower bound for $I$ on $K$; since $u\in K$, it is the greatest lower bound, $I(u)=\inf_KI$. If $I$ is moreover strictly convex and $v\in K$ is any other minimiser, then both $u$ and $v$ are finite minimisers and [F4] gives $u=v$, so $u$ is the unique minimiser. [F4, step 3.1] ∎ 
