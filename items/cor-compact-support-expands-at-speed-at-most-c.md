---
id: cor-compact-support-expands-at-speed-at-most-c
kind: corollary
title: "Compact support expands at speed at most c"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-countable-choice, thm-finite-propagation-speed-for-the-wave-equation, def-support-and-compactly-supported-riemann-integral-in-rn, def-forward-and-backward-wave-cones-domain-of-dependence-and-influence, def-wave-equation-cauchy-data-and-wave-speed, thm-extreme-value-metric, thm-cauchy-schwarz-and-the-euclidean-norm]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.3, printed pp. 177-178: the cone of dependence and support consequences of Theorem 7.12"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.2.3, printed pp. 290-292, Theorem 9.2.3 and its support corollary"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $c>0$,
$T>0$, let $K\subseteq\mathbb R^n$ be compact and let $u$ be a classical
solution of $\Box_cu=f$ on a neighbourhood of $\mathbb R^n\times[0,T)$ with Cauchy data $(u_0,u_1)$ satisfying
$\operatorname{supp}u_0\cup\operatorname{supp}u_1\subseteq K$
([[def-support-and-compactly-supported-riemann-integral-in-rn]]) and
$\operatorname{supp}f\subseteq\{(x,t):0\le t<T,\ \operatorname{dist}(x,K)\le ct\}$ (support relative to this time slab). For $K=\varnothing$, use $\operatorname{dist}(x,K)=+\infty$, so the source is zero and the asserted support is empty.
Then for every $t\in[0,T)$

$$\operatorname{supp}u(\cdot,t)\subseteq K+\overline B_{ct}(0)=\{x:\operatorname{dist}(x,K)\le ct\},$$

the time-$t$ domain of influence of the data support
([[def-forward-and-backward-wave-cones-domain-of-dependence-and-influence]]).

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; a compact $K$, a $C^2$ solution $u$, defined near the closed initial slab, of $\Box_cu=f$ with data supported in $K$ and source supported in $\{(y,s):\operatorname{dist}(y,K)\le cs\}$.

[F1] Finite propagation: for $t>0$, if $w$ solves $\Box_cw=g$ on a neighbourhood of the closed backward cone $K^-(x,t)$ with $g=0$ there and $w(\cdot,0)=w_t(\cdot,0)=0$ on the base ball $B_{ct}(x)$, then $w(x,t)=0$. ([[thm-finite-propagation-speed-for-the-wave-equation]])

[F2] $\operatorname{supp}u_0=\overline{\{x:u_0(x)\ne0\}}$ and likewise for $u_1$; a point outside $\operatorname{supp}f$ has $f=0$ there. ([[def-support-and-compactly-supported-riemann-integral-in-rn]])

[F3] The base ball of $K^-(x,t)$ is the open ball $B_{ct}(x)=x+B_{ct}(0)$. For nonempty compact $K$, the continuous function $z\mapsto|x-z|$ attains a minimum on $K$, so $K+\overline B_{ct}(0)=\{x:\operatorname{dist}(x,K)\le ct\}$ is closed. Also $|x-z|\le|x-y|+|y-z|$ for every $z\in K$; taking infima gives $\operatorname{dist}(x,K)\le|x-y|+\operatorname{dist}(y,K)$. ([[thm-extreme-value-metric]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]) ([[def-forward-and-backward-wave-cones-domain-of-dependence-and-influence]])

## Proof

1.1 Reduction to a point outside the domain of influence: if $K=\varnothing$, all data and the source vanish, so [F1] applied at every $(x,t)$ with $t\in(0,T)$ gives $u=0$ there; at $t=0$, continuity and the Cauchy displacement limit give $u(\cdot,0)=u_0=0$, so the support inclusion holds throughout $[0,T)$. Otherwise let $t\in(0,T)$ and $x\notin K+\overline B_{ct}(0)$, so $\operatorname{dist}(x,K)>ct$; then the base ball of $K^-(x,t)$ is $B_{ct}(x)$ by [F3], and $B_{ct}(x)\cap K=\varnothing$: if $z\in B_{ct}(x)\cap K$ then $\operatorname{dist}(x,K)\le|x-z|<ct$, contradicting $\operatorname{dist}(x,K)>ct$; hence the initial data vanish on $B_{ct}(x)$ by [F2]: $u_0=u_1=0$ there; and the source vanishes on the cone: if $(y,s)\in K^-(x,t)$ had $\operatorname{dist}(y,K)\le cs$, then $\operatorname{dist}(x,K)\le|x-y|+\operatorname{dist}(y,K)\le c(t-s)+cs=ct$ by [F3], a contradiction, so $\operatorname{dist}(y,K)>cs$ and $(y,s)\notin\operatorname{supp}f$, i.e. $f(y,s)=0$. [given, F1, F2, F3, algebra]

2.1 Conclusion: by step 1.1 the data and source of $\Box_cu=f$ vanish in the cone $K^-(x,t)$, so [F1] applied to $u$ gives $u(x,t)=0$; as $x\notin K+\overline B_{ct}(0)$ was arbitrary, every point outside $K+\overline B_{ct}(0)$ has $u(\cdot,t)=0$, and the containing set is closed by [F3], whence $\operatorname{supp}u(\cdot,t)\subseteq K+\overline B_{ct}(0)$ for every $t\in(0,T)$; at $t=0$, continuity and the Cauchy displacement limit give $u(\cdot,0)=u_0$, so the inclusion is exactly the support hypothesis on $u_0$. [given, step 1.1, F1, F3] ∎ 