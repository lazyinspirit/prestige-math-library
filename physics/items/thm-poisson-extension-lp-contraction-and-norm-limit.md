---
id: thm-poisson-extension-lp-contraction-and-norm-limit
kind: theorem
title: "Poisson extension is an Lp contraction and converges in finite Lp"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-countable-choice, def-harmonic-hardy-class-disc, def-measure-with-density, def-poisson-integral-of-finite-boundary-measure, def-poisson-kernel-on-the-disc, def-the-one-dimensional-torus-and-normalized-haar-integral, lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori, lem-poisson-integrals-are-harmonic, lem-poisson-kernel-is-a-boundary-approximate-identity, lem-poisson-kernel-properties-on-the-disc, thm-complex-holder-minkowski-and-the-quotient-norm, thm-integration-against-a-density, thm-jensens-integral-inequality, thm-poisson-integral-solves-the-disc-dirichlet-problem, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  references:
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, second edition, Chapter 6"
      url: "https://www.axler.net/HFT.pdf"
      locator: "Poisson Integrals of Measures, printed pp. 111-113 and 121-122 (PDF pp. 116-118, 126-127): formulas (6.1)-(6.4) and Theorem 6.7 on Lp contraction and norm convergence."
    - title: "Herbert Koch, Notes for Harmonic and Real Analysis (University of Bonn, 2014-15), Chapter 3"
      url: "https://www.math.uni-bonn.de/ag/ana/WiSe1415/V4B5_notes.pdf"
      locator: "§3.1.2, printed pp. 35-37: the disc Poisson extension, its Lp boundedness and boundary convergence."
---

## Statement

Assume [[def-countable-choice|countable choice]]. Let $1\le p\le\infty$ and let
$f\in L^p(\mathbb T,m;\mathbb C)$. Then $P[f]$ is complex harmonic, lies in the
Hardy class $h^p(\mathbb D)$ of [[def-harmonic-hardy-class-disc]], and
$$\|P_r*f\|_p\le\|f\|_p\qquad(0\le r<1).$$
If $p<\infty$, then $\|P_r*f-f\|_p\to0$ as $r\uparrow1$. No $L^\infty$
norm-convergence statement is made for arbitrary data.

## Facts & Assumptions

**Given:** Countable choice, an exponent $1\le p\le\infty$, and a function $f\in L^p(\mathbb T,m;\mathbb C)$.

[L1] For $f\in L^1(\mathbb T,m)$ the Poisson integral $P[f]=P[fm]$ and the radial functions $(P_r*f)(\zeta)=P[f](r\zeta)=\int_{\mathbb T}P_r(\zeta-\eta)f(\eta)\,dm(\eta)$ are defined by integration against the kernel; for real continuous data on $\partial\mathbb D$ this agrees with the published continuous-data Poisson integral ([[def-poisson-integral-of-finite-boundary-measure]]).

[L2] The torus $\mathbb T$ carries the probability measure $m$, which is invariant under translations $\zeta\mapsto\zeta-\eta$; the product space $\mathbb T\times\mathbb T$ is sigma-finite and Tonelli's theorem applies to nonnegative product-measurable functions ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[L3] For $0\le r<1$ the kernel satisfies $P_r(\theta)=(1-r^2)/(1-2r\cos\theta+r^2)>0$, $\int_{\mathbb T}P_r\,dm=1$, and $P(z,\eta)\le(1+|z|)/(1-|z|)$ for all $z\in\mathbb D$, $\eta\in\mathbb T$ ([[lem-poisson-kernel-properties-on-the-disc]], [[def-poisson-kernel-on-the-disc]]).

[L4] A nonnegative measurable density $w$ with $\int w\,dm=1$ defines a probability measure $w\,dm$ on $\mathbb T$, and $\int g\,d(w\,dm)=\int gw\,dm$ for nonnegative measurable $g$; on this probability space Jensen's inequality applies to real $g\in L^1$ and a convex $\varphi$ with $\varphi\circ g\in L^1$ ([[def-measure-with-density]], [[thm-integration-against-a-density]], [[thm-jensens-integral-inequality]]).

[L5] On the probability space $\mathbb T$, $L^p$ Hölder with the constant function $1$ gives $\int_{\mathbb T}|f|\,dm\le\|f\|_p$ for every $1\le p\le\infty$; uniform convergence implies $L^p$ convergence for finite $p$, and $|{\int g\,dm}|\le\int|g|\,dm$ ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[L6] For $1\le p<\infty$ the continuous complex functions on $\mathbb T$ are dense in $L^p(\mathbb T,m;\mathbb C)$ ([[lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori]]).

[L7] The Poisson integral of a continuous real boundary datum is harmonic on $\mathbb D$, and a locally uniform limit of harmonic functions is harmonic ([[lem-poisson-integrals-are-harmonic]], [[thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic]]).

[L8] The Poisson integral of continuous real boundary data converges to that data uniformly on $\mathbb T$ as $r\uparrow1$, equivalently the continuous-data Poisson integral extends continuously to the closed disc ([[lem-poisson-kernel-is-a-boundary-approximate-identity]], [[thm-poisson-integral-solves-the-disc-dirichlet-problem]]).

## Proof

**Proof technique:** direct.

1.1 By [L5] (Hölder against the constant function $1$, whose conjugate norm is $m(\mathbb T)^{1-1/p}=1$ for finite $p$ and $\|1\|_\infty=1$ for $p=\infty$), every $f\in L^p(\mathbb T,m;\mathbb C)$ satisfies $\int_{\mathbb T}|f|\,dm\le\|f\|_p<\infty$; hence $f\in L^1(\mathbb T,m)$ and the Poisson integral $P[f]$ of [L1] is defined. [given, L1, L5, algebra]

1.2 For every $0\le r<1$ and every $\zeta\in\mathbb T$, translation invariance of $m$ and [L3] give $\int_{\mathbb T}P_r(\zeta-\eta)\,dm(\eta)=\int_{\mathbb T}P_r\,dm=1$; since the kernel is positive, the elementary estimate $|{\int g\,dm}|\le\int|g|\,dm$ of [L5] applied to $g=P_r(\zeta-\cdot)f$ gives $$|(P_r*f)(\zeta)|\le\int_{\mathbb T}P_r(\zeta-\eta)\,|f(\eta)|\,dm(\eta).$$ [L1, L2, L3, L5, algebra]

1.3 If $g\in C(\mathbb T,\mathbb C)$, write $g=u+iv$ with real continuous $u,v$. By the agreement clause of [L1] the integrals $P[u]$ and $P[v]$ coincide with the published Poisson integrals of the real continuous boundary data $u\circ\varphi^{-1}$ and $v\circ\varphi^{-1}$; [L7] makes both real harmonic, and linearity of the integral gives $P[g]=P[u]+iP[v]$, so $P[g]$ is complex harmonic. [L1, L7, algebra]

2.1 For $p=\infty$: step 1.2 and the total mass from [L3] give $|(P_r*f)(\zeta)|\le\|f\|_\infty\int_{\mathbb T}P_r(\zeta-\eta)\,dm(\eta)=\|f\|_\infty$ for every $\zeta$, so $\|P_r*f\|_\infty\le\|f\|_\infty$ and $\sup_{0\le r<1}\|(P[f])_r\|_\infty\le\|f\|_\infty$. [step 1.2, L3]

2.2 For $p=1$: integrating the display of step 1.2 over $\zeta$ and applying Tonelli's theorem [L2] to the nonnegative product-measurable integrand $(\zeta,\eta)\mapsto P_r(\zeta-\eta)|f(\eta)|$, then translation invariance of $m$, gives $$\|P_r*f\|_1\le\int_{\mathbb T}\!\int_{\mathbb T}P_r(\zeta-\eta)|f(\eta)|\,dm(\eta)\,dm(\zeta)=\int_{\mathbb T}|f(\eta)|\Bigl(\int_{\mathbb T}P_r(\zeta-\eta)\,dm(\zeta)\Bigr)dm(\eta)=\|f\|_1.$$ [step 1.2, L2, L3, algebra]

2.3 For $1<p<\infty$: fix $\zeta$ and put $w_\zeta(\eta):=P_r(\zeta-\eta)$, a nonnegative measurable density with $\int w_\zeta\,dm=1$ by step 1.2, so [L4] makes $\nu_\zeta:=w_\zeta\,dm$ a probability measure on $\mathbb T$ with $\int|f|\,d\nu_\zeta=\int P_r(\zeta-\eta)|f(\eta)|\,dm(\eta)\le\sup_\eta P_r\;\|f\|_1<\infty$, so $|f|\in L^1(\nu_\zeta)$ and $|f|^p\in L^1(\nu_\zeta)$ because $\int|f|^p\,d\nu_\zeta\le\sup_\eta P_r\,\|f\|_p^p$. Jensen's inequality [L4] applied to the convex function $t\mapsto t^p$ and $|f|$ gives, using step 1.2, $$|(P_r*f)(\zeta)|^p\le\Bigl(\int_{\mathbb T}|f|\,d\nu_\zeta\Bigr)^p\le\int_{\mathbb T}|f|^p\,d\nu_\zeta=\int_{\mathbb T}P_r(\zeta-\eta)|f(\eta)|^p\,dm(\eta);$$ integrating this display over $\zeta$ and applying the same Tonelli and translation-invariance argument yields $\|P_r*f\|_p^p\le\|f\|_p^p$, hence $\|P_r*f\|_p\le\|f\|_p$. [step 1.2, L2, L3, L4, L5, algebra]

2.4 $P[f]$ is complex harmonic. Indeed $f\in L^1$ by step 1.1; choose continuous $g_n$ with $\|f-g_n\|_1\to0$ [L6] at $p=1$. For $z\in\mathbb D$ the bound of [L3] and step 1.1 give $$|P[f](z)-P[g_n](z)|=|P[f-g_n](z)|\le\frac{1+|z|}{1-|z|}\,\|f-g_n\|_1,$$ and the factor $(1+|z|)/(1-|z|)$ is bounded on every compact subset of $\mathbb D$; hence $P[g_n]\to P[f]$ locally uniformly on $\mathbb D$. Each $P[g_n]$ is complex harmonic by step 1.3, so the locally uniform limit $P[f]$ is complex harmonic by [L7]. [step 1.1, step 1.3, L1, L3, L6, L7, algebra]

2.5 Convergence for continuous data: let $g\in C(\mathbb T,\mathbb C)$. Applying [L8] to the real and imaginary parts and using the identification of [L1] gives $|P[g](re^{i\alpha})-g(e^{i\alpha})|\to0$ uniformly in $\alpha$ as $r\uparrow1$; consequently, for every $1\le p<\infty$, $\|P_r*g-g\|_p\le\|P_r*g-g\|_\infty\to0$ because $m$ is a probability measure [L2]. [step 1.2, L1, L2, L5, L8, algebra]

3.1 Combining steps 2.1, 2.2 and 2.3, for every $1\le p\le\infty$ and every $0\le r<1$ the contraction $\|P_r*f\|_p\le\|f\|_p$ holds. With the harmonicity proved in step 2.4 this yields $\sup_{0\le r<1}\|(P[f])_r\|_p\le\|f\|_p<\infty$, so $P[f]\in h^p(\mathbb D)$ with $\|P[f]\|_{h^p}\le\|f\|_p$. [step 2.1, step 2.2, step 2.3, step 2.4]

4.1 Let $p<\infty$ and $\varepsilon>0$. By [L6] choose continuous $g$ with $\|f-g\|_p<\varepsilon/3$. For every $0\le r<1$, step 3.1 and the triangle inequality for the $L^p$ norm give $$\|P_r*f-f\|_p\le\|P_r*(f-g)\|_p+\|P_r*g-g\|_p+\|g-f\|_p\le 2\|f-g\|_p+\|P_r*g-g\|_p,$$ and step 2.5 makes the last term smaller than $\varepsilon/3$ for all $r$ sufficiently close to $1$; hence $\|P_r*f-f\|_p<2\varepsilon/3+\varepsilon/3=\varepsilon$ for those $r$, so $\|P_r*f-f\|_p\to0$ as $r\uparrow1$. This proves the finite-$p$ norm limit, while at $p=\infty$ no norm-convergence claim is made; the contraction and the $h^p$ membership are step 3.1, completing the proof. [step 2.5, step 3.1, L5, L6, algebra] ∎
