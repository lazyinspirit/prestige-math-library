---
id: def-lusin-area-function-for-a-fixed-admissible-kernel
kind: definition
title: "The Lusin area function for a fixed admissible kernel and aperture"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-schwartz-space-and-its-seminorms, def-support-and-compactly-supported-riemann-integral-in-rn, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fatou-lemma, thm-dominated-convergence, thm-complex-holder-minkowski-and-the-quotient-norm, def-integral-over-a-measurable-set, def-borel-and-lebesgue-measurable-function-on-rn, def-convolution-of-two-functions-on-rn, thm-young-convolution-inequality, thm-the-lebesgue-integral-respects-almost-everywhere-equality, def-countable-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Definition 7.31 (cones $\\Gamma_{x,A}$ with aperture $A$), the area-type integrals $\\int t|\\nabla u|^2\\,dt\\,dy$ and $\\int|(\\varphi*\\psi_t)(y)|^2\\,dt\\,dy/t$ used in §7.6, printed pp. 40-44; §6.2 and Proposition 6.10 comparing the cone-based and square-function descriptions of $H^1$, printed pp. 24-26"
---

## Definition

Assume Countable Choice ([[def-countable-choice]]). Fix an aperture $a>0$ and an
**admissible kernel**: a real-valued radial Schwartz function $\psi$
([[def-schwartz-space-and-its-seminorms]]) with
$\int_{\mathbb R^n}\psi=0$ and $\psi$ not identically zero; the support
convention of [[def-support-and-compactly-supported-riemann-integral-in-rn]]
applies to the compactly supported functions used below.

For $t>0$ write $\psi_t(y):=t^{-n}\psi(y/t)$, and for $x\in\mathbb R^n$ let
$$\Gamma_a(x):=\{(y,t)\in\mathbb R^n\times(0,\infty):|y-x|<at\}$$
be the **cone of aperture $a$ over $x$**. For $f\in L^p(\mathbb R^n;\mathbb C)$
with $1\le p\le\infty$, or for $f\in\mathcal S(\mathbb R^n)$ (which lies in
every $L^p$), fix a representative of $f$ and define
$$A_{a,\psi}f(x):=\Bigl(\int_0^\infty\int_{|y-x|<at}\bigl|(f*\psi_t)(y)\bigr|^2\,dy\,\frac{dt}{t^{n+1}}\Bigr)^{1/2}\in[0,\infty],$$
where $f*\psi_t$ is the convolution of [[def-convolution-of-two-functions-on-rn]].
The following well-definedness facts are part of the definition and are used
with the cited suppliers.

1. Let $q$ be conjugate to $p$, with $q=\infty$ when $p=1$ and $q=1$
   when $p=\infty$. For every $y\in\mathbb R^n$ and $t>0$, Holder's
   inequality ([[thm-complex-holder-minkowski-and-the-quotient-norm]]) makes
   $$ (f*\psi_t)(y):=\int_{\mathbb R^n}f(u)\,t^{-n}\psi((y-u)/t)\,du $$
   absolutely convergent and independent of the representative of $f$.
   Young's inequality ([[thm-young-convolution-inequality]]) gives
   $\|f*\psi_t\|_p\le\|\psi\|_1\|f\|_p$. Moreover
   $(y,t)\mapsto t^{-n}\psi((y-\cdot)/t)$ is continuous into
   $L^q(\mathbb R^n)$ for $t>0$: near any fixed $(y,t)$ these Schwartz kernels
   depend pointwise continuously on the parameters and have a common
   integrable Schwartz majorant for finite $q$, so dominated convergence
   applies ([[thm-dominated-convergence]]); for $q=\infty$, uniform
   continuity on bounded sets and a uniform Schwartz tail give convergence in
   the supremum norm. Holder's inequality therefore shows that
   $(y,t)\mapsto(f*\psi_t)(y)$ is jointly continuous, hence Borel measurable.
2. For each $x$ the set $\Gamma_a(x)$ is open in
   $\mathbb R^n\times(0,\infty)$ and the integrand is nonnegative, so the
   iterated integral over $\Gamma_a(x)$ is well defined in $[0,\infty]$ by
   Tonelli ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]) without
   any integrability hypothesis; the comparison with the integral over the
   measurable set $\Gamma_a(x)$ is the convention of
   [[def-integral-over-a-measurable-set]].
3. $A_{a,\psi}f$ is Borel measurable as a function of $x$, in fact it is
   lower semicontinuous. Write $H(y,t):=|(f*\psi_t)(y)|^2$; this is continuous
   by item 1. If $x_m\to x$, then
   $\mathbf1_{\{|y-x|<at\}}\le\liminf_m\mathbf1_{\{|y-x_m|<at\}}$
   for every $(y,t)$, because the cone inequality is strict. Fatou's lemma
   ([[thm-fatou-lemma]]) applied to the nonnegative integrands with measure
   $dy\,dt/t^{n+1}$ gives
   $A_{a,\psi}f(x)^2\le\liminf_m A_{a,\psi}f(x_m)^2$; hence the extended-valued
   function $A_{a,\psi}f$ is lower semicontinuous and therefore Borel.
4. If two representatives of $f$ agree almost everywhere, their integrands
   in the integral formula of item 1 agree almost everywhere in $u$; the
   Lebesgue integral respects almost-everywhere equality
   ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]), so the
   convolutions, and hence the area functions, agree at every $(y,t)$ and $x$.
   Thus the functional is defined on almost-everywhere classes, with values
   allowed to equal $+\infty$.

The cancellation $\int\psi=0$ and the aperture $a$ are part of the data.
Distinct pairs need not give distinct functionals: replacing $\psi$ by
$-\psi$ leaves $A_{a,\psi}$ unchanged, since the squared modulus of every
convolution is unchanged. No equivalence between this functional and a
square-function scale is asserted here.
