---
id: ex-outer-function-with-prescribed-boundary-modulus
kind: example
title: "An outer function with a prescribed power of a vanishing modulus"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-inner-singular-inner-and-outer-functions, lem-outer-function-properties, def-the-one-dimensional-torus-and-normalized-haar-integral, def-poisson-kernel-on-the-disc, def-poisson-integral-of-finite-boundary-measure, lem-poisson-kernel-properties-on-the-disc, thm-complex-power-series-converge-locally-uniformly, thm-jensen-formula-on-a-disc, thm-dominated-convergence, def-complex-exponential, thm-complex-polynomials-and-rational-functions-are-holomorphic, def-analytic-hardy-space-disc]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.10, §6.2"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Theorem 5.27 and the structure of outer functions, printed pp. 43-47 and 60-64: $[f]$ and its modulus; Example 6.3(a) computes the boundary modulus $|1-e^{i\\theta}|^{\\alpha}$."
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §4"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "Theorem 4.4 and (4.5), printed pp. 63-65: outer functions as $e^{u+iv}$ with $u=P[\\log h]$, determined by $h$ up to a unimodular constant."
---

## Example

Let $0<\alpha<\infty$ and let $h(\zeta):=|1-\zeta|^{\alpha}$ for
$\zeta\in\mathbb T$ (identified with the unit circle). Then
$\log h\in L^1(\mathbb T,m)$ and
$h\in L^\infty(\mathbb T,m)\subseteq L^p$ for every $p$, and the associated
outer function is $[h](z)=(1-z)^{\alpha}$, the principal branch normalized by
$[h](0)=1$. Hence $|[h]^*(\zeta)|=|1-\zeta|^{\alpha}=h(\zeta)$ for every
$\zeta\ne1$, $[h]\in H^\infty(\mathbb D)$ with
$\|[h]\|_\infty=2^{\alpha}$, and $[h]$ is outer; for
$\alpha\notin\mathbb N$ the function $[h]$ is not rational. The identity
$\int_{\mathbb T}K(z,\zeta)\log|1-\zeta|\,dm(\zeta)=\log(1-z)$ (principal
branch) is the computation that produces the outer function: its real part is
$\log|1-z|=P[\log|1-\zeta|](z)$ because the power series
$\log(1-z)=-\sum_{n\ge1}z^n/n$ has boundary real part $\log|1-\zeta|$ with
Fourier coefficients $-1/(2|n|)$, $n\ne0$.

## Facts & Assumptions

**Given:** A parameter $0<\alpha<\infty$ and the function $h=|1-\zeta|^\alpha$ on $\mathbb T$.

[F1] For $|w|<1$ the principal logarithm satisfies $\log(1-w)=-\sum_{n\ge1}w^n/n$, and $\operatorname{Re}\log(1-w)=\log|1-w|$; for $|w|=1$, $w\ne1$, the same series converges conditionally with $\log|1-w|=-\sum_{n\ge1}\operatorname{Re}(w^n)/n$ ([[thm-complex-power-series-converge-locally-uniformly]], [[def-complex-exponential]]).

[F2] Jensen's formula gives $\log|F(0)|=\frac{1}{2\pi}\int_0^{2\pi}\log|F(re^{i\theta})|\,d\theta$ when $F$ is holomorphic and zero-free on a neighbourhood of $\{|w|\le r\}$; applied to $F(w)=1-rw$ this gives $\int_{\mathbb T}\log|1-r\zeta|\,dm(\zeta)=0$ for every $0<r<1$ ([[thm-jensen-formula-on-a-disc]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[F3] The kernel $K(z,\zeta)=(\zeta+z)/(\zeta-z)$ has $\operatorname{Re}K=P(z,\zeta)$ and expansion $K(z,\zeta)=1+2\sum_{n\ge1}z^n\zeta^{-n}$; $P(z,\cdot)$ has total mass $1$ and is bounded for fixed $z$ ([[def-poisson-kernel-on-the-disc]], [[def-poisson-integral-of-finite-boundary-measure]], [[lem-poisson-kernel-properties-on-the-disc]], [[def-inner-singular-inner-and-outer-functions]]).

[F4] The outer function $[h]=\exp(\int K\log h\,dm)$ satisfies $|[h]^*|=h$ a.e. and, if $h\in L^\infty$, $[h]\in H^\infty$ with $|[h]|\le\|h\|_\infty$; it is determined by $h$ up to a unimodular constant ([[lem-outer-function-properties]], [[def-inner-singular-inner-and-outer-functions]]).

[F5] For $t\in(0,1]$ one has $|\log t|\le C(t^{-1/2}+1)$ for a constant $C$, and $\int_{\mathbb T}|1-\zeta|^{-1/2}dm(\zeta)<+\infty$; dominated convergence therefore applies to the family $\log|1-r\zeta|$ with $r\uparrow1$ and its weighted variants ([[thm-dominated-convergence]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[F6] $w\mapsto(1-w)^\alpha$, and every complex polynomial and rational function, is holomorphic where defined; a rational function has at most poles as singularities, so a function admitting a rational extension could not have a branch-type singularity at $1$ with non-integer $\alpha$ ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

## Verification

1.1 The logarithm $\log|1-\zeta|$ is integrable with zero mean. By [F2] and [F5], $\int_{\mathbb T}\log|1-\zeta|\,dm=\lim_{r\uparrow1}\int_{\mathbb T}\log|1-r\zeta|\,dm=0$. Moreover $\log|1-\zeta|\in L^1$: its positive part is bounded by $\log2$, and its negative part is integrable by the bound of [F5]. [given, F2, F5, algebra]

2.1 The Fourier coefficients and the Herglotz integral. From the power series of [F1], for every $0<r<1$ and $n\ge1$, the Fourier coefficients of $\zeta\mapsto\log|1-r\zeta|$ are $-r^n/(2n)$ at $\pm n$ and $0$ at $0$; by [F5], letting $r\uparrow1$ gives the coefficients of $\log|1-\zeta|$: $\widehat{}(0)=0$, $\widehat{}(\pm n)=-1/(2n)$. Therefore, with $z=re^{i\theta}$ and $e_n(\zeta)=\zeta^n$, $$\int_{\mathbb T}K(z,\zeta)\log|1-\zeta|\,dm(\zeta)=\sum_{n\in\mathbb Z}\widehat{}(n)r^{|n|}e_n(\theta)=-\sum_{n\ge1}\frac{r^n(e^{in\theta}+e^{-in\theta})}{2n}=\operatorname{Re}\log(1-z)+i\operatorname{Im}\log(1-z)=\log(1-z),$$ the imaginary part being the conjugate harmonic function determined up to an additive constant and vanishing at $z=0$; this is the principal branch of $\log(1-z)$ because its real part is $\log|1-z|$ and it equals $0$ at $z=0$. [step 1.1, F1, F2, F3, F5, algebra]

3.1 The outer function is $(1-z)^\alpha$. Since $\log h=\alpha\log|1-\zeta|\in L^1$ by step 1.1, the outer function is well defined and, by step 2.1, $$[h](z)=\exp\Bigl(\int_{\mathbb T}K(z,\zeta)\log h(\zeta)\,dm(\zeta)\Bigr)=\exp\bigl(\alpha\log(1-z)\bigr)=(1-z)^{\alpha},$$ the principal branch, with $[h](0)=1$. [step 2.1, F3, algebra]

4.1 Modulus and $H^\infty$ membership. Since $0\le h\le2^\alpha$, the function $h$ lies in $L^\infty(\mathbb T,m)\subseteq L^p$ for every $p$, and [F4] gives $[h]\in H^\infty$ with $|[h]|\le2^\alpha$ and $|[h]^*|=h$ a.e.; explicitly $|(1-z)^\alpha|=|1-z|^\alpha\le2^\alpha$ on $\mathbb D$ with equality along $z\to-1$, so $\|[h]\|_\infty=2^\alpha$. On the boundary, for every $\zeta\ne1$ the principal branch is continuous and $|(1-\zeta)^\alpha|=|1-\zeta|^\alpha=h(\zeta)$; combined with the a.e. identity this gives $|[h]^*|=h$ off the single point $1$. [step 3.1, F4, algebra]

5.1 Non-rationality for non-integer $\alpha$. If $\alpha\notin\mathbb N$ and $(1-z)^\alpha$ agreed on $\mathbb D$ with a rational function $R$, then $R$ would be holomorphic on a disc around $1$; but near $z=1$ the principal branch behaves as $(1-z)^\alpha$, which is not of the form $(1-z)^m g(z)$ with $m\in\mathbb Z$ and $g$ holomorphic and nonzero at $1$ unless $\alpha\in\mathbb Z$ (compare the growth of $(1-z)^{\alpha-m}$ along real $z\to1^-$: it tends to $0$ for $\alpha>m$ and to $+\infty$ for $\alpha<m$); a rational function has such a finite-order behaviour at each of its singularities, so $\alpha\in\mathbb N$, a contradiction. [step 3.1, F6, algebra] ∎
