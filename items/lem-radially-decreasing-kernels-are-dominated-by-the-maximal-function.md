---
id: lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function
kind: lemma
title: "Radially decreasing kernels are dominated by the maximal function"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-centered-and-uncentered-hardy-littlewood-maximal-functions, def-countable-choice, lem-euclidean-balls-have-positive-finite-lebesgue-measure, prop-measure-monotonicity, thm-layer-cake-formula-for-l-p-powers, thm-lebesgue-measure-under-dilations-and-reflections, thm-tonelli-theorem-for-sigma-finite-product-spaces]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Theorem 2.9 and its proof (decreasing-kernel domination), printed p. 5"
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "proof of Theorem 5.3.4, the step bounding the error term by $M(f)$, printed pp. 364–365"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]).

Let $\omega\ge0$ be a measurable, radially nonincreasing, integrable function on
$\mathbb R^n$: that is, $\omega(x)=\omega(y)$ whenever $|x|=|y|$ and
$\omega(x)\ge\omega(y)$ whenever $|x|\le|y|$. Let
$f\in L^1_{\mathrm{loc}}(\mathbb R^n)$. Then for every $x\in\mathbb R^n$,
$$\int_{\mathbb R^n}|f(x-y)|\,\omega(y)\,dy\le\|\omega\|_1\,Mf(x),$$
where $M$ is the centered Hardy–Littlewood maximal operator and both sides may be
$+\infty$.

## Facts & Assumptions

**Given:** Countable Choice ([[def-countable-choice]]), which is assumed both by the definition of the maximal function [F1] and by the scaling identity [F5]; a radially nonincreasing integrable $\omega\ge0$; a function $f\in L^1_{\mathrm{loc}}(\mathbb R^n)$; a point $x\in\mathbb R^n$; a height $t>0$.

[F1] $Mf(x)=\sup_{r>0}\lambda(B(x,r))^{-1}\int_{B(x,r)}|f|\,d\lambda$, with values in $[0,\infty]$ ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]]); consequently $\int_{B(x,r)}|f|\,d\lambda\le\lambda(B(x,r))Mf(x)$ for every $r>0$ whenever $Mf(x)<\infty$.

[F2] For measurable $A\subseteq B$ one has $\mu(A)\le\mu(B)$ ([[prop-measure-monotonicity]]), and every Euclidean ball is Lebesgue measurable with $0<\lambda(B(x,r))<\infty$ ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F3] For measurable $g$ and $0<q<\infty$, $\int|g|^q\,d\lambda=q\int_0^\infty t^{q-1}\lambda(\{|g|>t\})\,dt$, both sides possibly $+\infty$; in particular the case $q=1$ computes $\|\omega\|_1$ ([[thm-layer-cake-formula-for-l-p-powers]]).

[F4] On a product of $\sigma$-finite measure spaces, a nonnegative product-measurable function may be integrated in either order ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F5] For nonzero real $c$ and Lebesgue measurable $E$, $\lambda(cE)=|c|^n\lambda(E)$ ([[thm-lebesgue-measure-under-dilations-and-reflections]]); in particular $\lambda(B(0,r))=r^n\lambda(B(0,1))$ for $r>0$, and $t\mapsto t^n$ is continuous.

## Proof

**Proof technique:** direct.

1.1 Fix $x$ and put $g(y):=|f(x-y)|$ for $y\in\mathbb R^n$; then $g\ge0$ is measurable and locally integrable, $\int|f(x-y)|\omega(y)\,dy=\int g\,\omega\,d\lambda$, and substitution $z=x-y$ (with $B(x,r)=x-B(0,r)$ and translation invariance of $\lambda$) gives $\sup_{r>0}\lambda(B(0,r))^{-1}\int_{B(0,r)}g\,d\lambda=\sup_{r>0}\lambda(B(x,r))^{-1}\int_{B(x,r)}|f|\,d\lambda=Mf(x)$, that is, $Mg(0)=Mf(x)$; if $\|\omega\|_1=0$, the nonnegative integrand vanishes almost everywhere and both sides are zero (with the usual zero-times-infinity convention). Otherwise the case $Mf(x)=+\infty$ makes the desired inequality trivial, so assume $Mf(x)<\infty$ and fix a height $t>0$. [F1, given, construct]

1.2 For $t>0$ put $S_t:=\{\omega>t\}$ and $r_t:=\sup\{|y|:y\in S_t\}\in[0,\infty]$, using $r_t=0$ when $S_t=\varnothing$. Then $r_t<\infty$: if $r_t=\infty$, then for every $\rho>0$ radial monotonicity and the definition of the supremum give $B(0,\rho)\subseteq S_t$, so $\|\omega\|_1\ge t\,\lambda(B(0,\rho))$ for all $\rho$, which is impossible because $\lambda(B(0,\rho))\to\infty$ as $\rho\to\infty$. Moreover $B(0,r_t)\subseteq S_t\subseteq B(0,r_t+\varepsilon)$ for every $\varepsilon>0$: the first inclusion uses that $|z|<r_t$ provides $y\in S_t$ with $|y|>|z|$ and then $\omega(z)\ge\omega(y)>t$, and the second uses $|y|\le r_t$ for $y\in S_t$. Consequently, by monotonicity [F2] and the scaling identity [F5], $$\lambda(S_t)\le\lambda(B(0,r_t+\varepsilon))=(r_t+\varepsilon)^n\lambda(B(0,1))\quad(\varepsilon>0),\qquad \lambda(B(0,r_t))=r_t^n\lambda(B(0,1)),$$ so letting $\varepsilon\downarrow0$ along $\varepsilon=1/k$ and using continuity of $t\mapsto t^n$ yields $\lambda(S_t)=\lambda(B(0,r_t))$. [F1, F2, F5, given, algebra]

2.1 For every $\rho>0$ one has $\int_{B(0,\rho)}g\,d\lambda\le\lambda(B(0,\rho))Mg(0)=\lambda(B(0,\rho))Mf(x)$ by [F1] and step 1.1, hence for every $\varepsilon>0$ the inclusions of step 1.2 give $$\int_{S_t}g\,d\lambda\le\int_{B(0,r_t+\varepsilon)}g\,d\lambda\le(r_t+\varepsilon)^n\lambda(B(0,1))Mf(x);$$ letting $\varepsilon\downarrow0$ as in step 1.2 gives $\int_{S_t}g\,d\lambda\le\lambda(B(0,r_t))Mf(x)$. [F1, F2, F5, step 1.1, step 1.2, algebra]

2.2 The layer-cake identity [F3] applied to $\omega$ with $q=1$, together with $\lambda(S_t)=\lambda(B(0,r_t))$ from step 1.2, gives $\|\omega\|_1=\int_0^\infty\lambda(S_t)\,dt=\int_0^\infty\lambda(B(0,r_t))\,dt$. [F3, step 1.2, algebra]

3.1 The pointwise identity $\omega(y)=\int_0^\infty\mathbf1_{S_t}(y)\,dt$ for $y\in\mathbb R^n$, Tonelli's theorem [F4] applied to the nonnegative product-measurable integrand $(y,t)\mapsto g(y)\mathbf1_{S_t}(y)$, and steps 2.1 and 2.2 give $$\int g\,\omega\,d\lambda=\int_0^\infty\!\!\int_{S_t}g\,d\lambda\,dt\le\int_0^\infty\lambda(B(0,r_t))Mf(x)\,dt=Mf(x)\int_0^\infty\lambda(B(0,r_t))\,dt=Mf(x)\|\omega\|_1,$$ which is the asserted inequality; the case $Mf(x)=+\infty$ was already trivial in step 1.1. [F4, step 2.1, step 2.2, algebra] ∎
