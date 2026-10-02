---
id: cex-c-infinity-up-to-boundary-density-is-domain-sensitive
kind: counterexample
title: Ambient-smooth density fails on a slit disc
status: draft
origin: pipeline
deps: [thm-smooth-up-to-the-boundary-density-on-smooth-domains, def-sobolev-space-wkp-and-its-norm, thm-tonelli-and-fubini-for-completed-product-measures, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, thm-holder-inequality-for-integrals, thm-polar-coordinates-formula-for-lebesgue-measure, lem-classical-derivatives-are-weak-derivatives, def-integral-over-a-measurable-set, def-axiom-of-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Lemma 1.14 and §1.5
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.3–§1.5, printed pp. 10–20
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), §3.6
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.6, printed pp. 60–62
---

## Statement refuted

The smooth-up-to-the-boundary density conclusion of
[[thm-smooth-up-to-the-boundary-density-on-smooth-domains]] cannot be
extended from bounded $C^k$ domains to arbitrary bounded open sets. Assume
the Axiom of Choice and let
$$\Omega=B(0,1)\setminus\{(x,0):0\le x<1\}\subset\mathbb R^2,\qquad u(x,y)=\arg(x+iy)\in(0,2\pi).$$
For every $1\le p<2$ the branch $u$ belongs to $W^{1,p}(\Omega)$, but there is
no sequence of functions $\varphi_j\in C^\infty(\mathbb R^2)$ with
$\|\varphi_j|_\Omega-u\|_{W^{1,p}(\Omega)}\to0$. Thus the restrictions of
globally smooth functions are not dense in $W^{1,p}(\Omega)$ on this bounded
open set, although they are dense on every bounded $C^k$ domain. The two
one-sided boundary values of $u$ on the slit differ by $2\pi$, and a globally
smooth function has equal one-sided values, which is the obstruction.

## Facts & Assumptions

**Given:** the Axiom of Choice; the bounded open slit disc $\Omega=B(0,1)\setminus\{(x,0):0\le x<1\}$; the branch $u(x,y)=\arg(x+iy)\in(0,2\pi)$; and $1\le p<2$.

[F1] Classical derivatives of $C^1$ functions are weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

[F2] Membership in $W^{1,p}(\Omega;\mathbb K)$ means membership of the class in $L^p$ together with weak first derivatives in $L^p$, with finite-$p$ norm $\|w\|_{W^{1,p}(\Omega)}=(\|w\|_{L^p(\Omega)}^p+\|\partial_xw\|_{L^p(\Omega)}^p+\|\partial_yw\|_{L^p(\Omega)}^p)^{1/p}$; at $p=\infty$ the norm is the maximum of these three essential bounds ([[def-sobolev-space-wkp-and-its-norm]]).

[F3] Polar coordinates: $\int_{\mathbb R^2}f\,d\lambda_2=\int_0^\infty\int_{S^1}f(r\omega)\,r\,d\sigma(\omega)\,dr$ for Borel measurable $f\ge0$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F4] Tonelli–Fubini: for nonnegative measurable $f$ on a completed product, the double integral equals the iterated integrals; and $\lambda_2$ is the completion of $\lambda_1\times\lambda_1$ ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]).

[F5] Hölder's inequality: for conjugate exponents and integrable functions, $\int|fg|\le\|f\|_p\|g\|_q$ ([[thm-holder-inequality-for-integrals]]).

[F6] The density theorem: on a bounded $C^k$ domain with $k\ge1$ and $1\le q<\infty$, the restrictions of $C_c^\infty(\mathbb R^n;\mathbb K)$ functions are dense in $W^{k,q}$ ([[thm-smooth-up-to-the-boundary-density-on-smooth-domains]]).

[F7] Integral over a measurable set: $\int_A f\,d\mu$ is the integral of $f1_A$ ([[def-integral-over-a-measurable-set]]).

**Choice use.** The Axiom of Choice is assumed; the argument invokes it only through the Countable Choice declared by [F1] and through the choice-bearing product-measure and polar-coordinate interfaces [F3] and [F4]. The contradiction argument itself selects no family.

## Counterexample

1.1 The set $\Omega$ is open, because it is the intersection of the open disc $B(0,1)$ with the open set $\{y\ne0\}\cup\{x<0\}$, and it is bounded; the branch $u$ is of class $C^\infty$ on $\Omega$ with $0<u<2\pi$ and $$\nabla u(x,y)=\Bigl(\frac{-y}{x^2+y^2},\ \frac{x}{x^2+y^2}\Bigr),\qquad |\nabla u(x,y)|=\frac{1}{r},\quad r=\sqrt{x^2+y^2}.$$ [given, algebra]

1.2 Endpoint estimate. Let $g\in C^1([0,\varepsilon])$ and let $1\le p<\infty$. For every $s\in(0,\varepsilon)$ the fundamental theorem gives $g(0)=g(s)-\int_0^sg'(t)\,dt$, so $\varepsilon|g(0)|\le\int_0^\varepsilon|g|+\varepsilon\int_0^\varepsilon|g'|$, and [F5] applied to the two summands yields $|g(0)|^p\le C(\varepsilon,p)\bigl(\int_0^\varepsilon|g|^p+\int_0^\varepsilon|g'|^p\bigr)$ with $C(\varepsilon,p)=2^{p-1}\max\{\varepsilon^{-1},\varepsilon^{p-1}\}$; the same estimate holds on $(-\varepsilon,0)$ for the endpoint $0$. [F5, given]

2.1 Integrability. Since $|u|\le2\pi$ and $\Omega\subseteq B(0,1)$ has finite area, $\int_\Omega|u|^p<\infty$; by [F3], [F7] and $|\nabla u|=1/r$ of step 1.1, $$\int_\Omega|\nabla u|^p=\int_\Omega r^{-p}\le\int_0^12\pi r^{1-p}\,dr=\frac{2\pi}{2-p}<\infty,$$ because $p<2$ makes the one-dimensional integral converge at $r=0$. [F3, F7, step 1.1]

3.1 Membership. The function $u$ is $C^\infty$ on the open set $\Omega$, so by [F1] its classical partial derivatives of step 1.1 are its weak derivatives; by step 2.1 they lie in $L^p(\Omega)$ together with $u$, and the membership criterion of [F2] gives $u\in W^{1,p}(\Omega)$ for every $1\le p<2$. [F1, F2, step 1.1, step 2.1]

4.1 Upper strip. Suppose $\varphi_j\in C^\infty(\mathbb R^2)$ satisfy $\|\varphi_j|_\Omega-u\|_{W^{1,p}(\Omega)}\to0$. Fix $0<\varepsilon<1/4$ and put $S_+=(1/4,3/4)\times(0,\varepsilon)\subset\Omega$. The function $u=\arctan(y/x)$ extends $C^1$ to the closed strip, with $u(x,0)=0$. For each $j$, apply the endpoint estimate of step 1.2 to $g_j(x,y)=\varphi_j(x,y)-u(x,y)$ on each vertical section of $S_+$ and integrate in $x$ using [F4]. Since $\varepsilon$ is fixed, its constant is fixed, and $$\int_{1/4}^{3/4}|\varphi_j(x,0)|^pdx\le C(\varepsilon,p)\int_{S_+}\bigl(|\varphi_j-u|^p+|\partial_y\varphi_j-\partial_yu|^p\bigr)\le C(\varepsilon,p)\|\varphi_j-u\|_{W^{1,p}(\Omega)}^p\longrightarrow0.$$ [F2, F4, step 1.2, step 3.1]

4.2 Lower strip. On $S_-=(1/4,3/4)\times(-\varepsilon,0)$ the function $u=2\pi-\arctan(|y|/x)$ extends $C^1$ to the closed strip with $u(x,0)=2\pi$. Applying step 1.2 to $g_j=\varphi_j-u$ on each vertical section and integrating in $x$ gives, for the same fixed $\varepsilon$, $$\int_{1/4}^{3/4}|\varphi_j(x,0)-2\pi|^pdx\le C(\varepsilon,p)\int_{S_-}\bigl(|\varphi_j-u|^p+|\partial_y\varphi_j-\partial_yu|^p\bigr)\le C(\varepsilon,p)\|\varphi_j-u\|_{W^{1,p}(\Omega)}^p\longrightarrow0.$$ [F2, F4, step 1.2, step 3.1]

5.1 Contradiction. For every $j$ the elementary inequality $|2\pi|^p\le2^{p-1}(|\varphi_j(x,0)|^p+|\varphi_j(x,0)-2\pi|^p)$ holds pointwise on $(1/4,3/4)$, so $$\frac{1}{2}(2\pi)^p=\int_{1/4}^{3/4}|2\pi|^pdx\le2^{p-1}\Bigl(\int_{1/4}^{3/4}|\varphi_j(x,0)|^pdx+\int_{1/4}^{3/4}|\varphi_j(x,0)-2\pi|^pdx\Bigr)\xrightarrow[j\to\infty]{}0$$ by steps 4.1 and 4.2, which is impossible since $(2\pi)^p/2>0$. [F7, step 4.1, step 4.2]

6.1 Therefore no sequence of globally smooth functions converges to $u$ in $W^{1,p}(\Omega)$ for any $1\le p<2$, so ambient smooth restrictions are not dense on this bounded open set. By contrast [F6] gives that density for every bounded $C^k$ domain, so the conclusion cannot be extended to arbitrary open sets. Indeed $\Omega$ is not a bounded $C^1$ domain in the graph sense: near a slit point $(x_0,0)$ with $0<x_0<1$, its complement is only a line segment and has empty interior, so $\Omega$ is dense on both sides of that segment. A one-sided graph domain has a nonempty open complementary side in every sufficiently small chart neighbourhood, which rules out such a chart here. [F6, step 3.1, step 5.1] ∎
