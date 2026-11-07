---
id: lem-density-primitive-dirichlet-theta-integral-representation
kind: lemma
title: Density-local theta integral representation for a primitive Dirichlet L-function
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-integration-by-parts-with-interior-derivatives
- def-dirichlet-character-modulo-q
- lem-dirichlet-character-values
- def-euler-gamma-function
- thm-twisted-poisson-summation
- lem-fourier-transform-of-a-gaussian
- def-completed-dirichlet-l-function
- thm-primitive-dirichlet-l-analytic-continuation
- thm-identity-theorem-holomorphic-functions
- thm-weierstrass-convergence-holomorphic-functions
- thm-complex-exponential-is-entire-with-derivative-itself
- def-dirichlet-l-function
- thm-dirichlet-series-absolute-half-plane-holomorphy
- def-schwartz-space-and-its-seminorms
- thm-algebra-of-derivatives
- thm-chain-rule
- thm-derivative-of-exponential
- def-real-exponential-function-and-e
- thm-exponential-beats-every-polynomial
- lem-extreme-value-theorem-from-compactness
- def-complex-logarithms-principal-logarithm-and-complex-powers
- def-complex-exponential
- thm-geometric-series
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
  - title: Nickolas Andersen, Analytic Number Theory, Theorems 16.7–16.8
    url: https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf
    locator: Chapter 16, primitive Dirichlet L-functions, theta transformation and
      completed L-function continuation.
  - title: Harold Davenport, Multiplicative Number Theory, second edition
    url: https://djvu.online/file/Rh8B8jEVpxFgk
    locator: §21, printed pp. 126–131, completed Dirichlet L-function and Mellin integral
      in Siegel's proof.
---

## Statement

Let $q>1$ and let $\chi$ be a primitive nonprincipal Dirichlet character modulo $q$. Let $a\in\{0,1\}$ satisfy $\chi(-1)=(-1)^a$, let $\overline\chi$ be the pointwise complex conjugate character, and put
$$\Theta_\chi(t)=\sum_{n\in\mathbb Z\setminus\{0\}}\chi(n)n^a e^{-\pi n^2t/q},\qquad \Theta_{\overline\chi}(t)=\sum_{n\in\mathbb Z\setminus\{0\}}\overline{\chi(n)}n^a e^{-\pi n^2t/q},\qquad \tau(\chi)=\sum_{r\bmod q}\chi(r)e^{2\pi i r/q}.$$
Use $c^s=\exp(s\log c)$ for $c>0$. Define $\Lambda(s,\chi)=(q/\pi)^{(s+a)/2}\Gamma((s+a)/2)L(s,\chi)$. Then, for every $s\in\mathbb C$,
$$2\Lambda(s,\chi)=\int_1^\infty\Theta_\chi(t)t^{(s+a)/2-1}\,dt+\frac{\tau(\chi)}{i^a\sqrt q}\int_1^\infty\Theta_{\overline\chi}(u)u^{(1-s+a)/2-1}\,du.$$
Both integrals converge absolutely for every $s$ and define entire functions of $s$.

## Statement references

[[def-completed-dirichlet-l-function|Completed Dirichlet L-function convention]]

[[thm-twisted-poisson-summation|Twisted Poisson summation]]

[[lem-fourier-transform-of-a-gaussian|Fourier transform of a Gaussian]]

## Facts & Assumptions

**Given:** A primitive nonprincipal character $\chi$ modulo $q>1$, its parity $a\in\{0,1\}$, and the functions and constants in the statement.

[F1] A Dirichlet character is periodic, completely multiplicative, zero on nonunits and of modulus one on units. Since $(-1)^2=1$, its parity value is $\chi(-1)=(-1)^a=\overline\chi(-1)$ ([[def-dirichlet-character-modulo-q]], [[lem-dirichlet-character-values]]).

[F2] For $\operatorname{Re}z>0$, $\Gamma(z)=\int_0^\infty e^{-v}v^{z-1}dv$ ([[def-euler-gamma-function]]).

[F3] For primitive $\chi$ modulo $q$ and Schwartz $f$, $\sum_{n\in\mathbb Z}\chi(n)f(n)=\frac{\tau(\chi)}q\sum_{m\in\mathbb Z}\overline{\chi(m)}\widehat f(m/q)$ ([[thm-twisted-poisson-summation]]).

[F4] With $\widehat f(\xi)=\int_{\mathbb R}f(x)e^{-2\pi i x\xi}dx$, $\widehat{e^{-\pi t x^2}}(\xi)=t^{-1/2}e^{-\pi\xi^2/t}$ for $t>0$ ([[lem-fourier-transform-of-a-gaussian]]).

[F5] The completed function is $\Lambda(s,\chi)=(q/\pi)^{(s+a)/2}\Gamma((s+a)/2)L(s,\chi)$ ([[def-completed-dirichlet-l-function]]).

[F6] For primitive nonprincipal $\chi$, both $L(s,\chi)$ and $\Lambda(s,\chi)$ extend to entire functions ([[thm-primitive-dirichlet-l-analytic-continuation]]).

[F7] Holomorphic functions agreeing on an open subset of a connected domain agree everywhere; locally uniform limits of holomorphic functions are holomorphic ([[thm-identity-theorem-holomorphic-functions]], [[thm-weierstrass-convergence-holomorphic-functions]]).

[F8] The complex exponential is entire and has derivative itself ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F9] The Dirichlet series $L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}$ converges absolutely on $\operatorname{Re}s>1$ ([[def-dirichlet-l-function]], [[thm-dirichlet-series-absolute-half-plane-holomorphy]]).

[F10] Scalar geometric series converge with their explicit ratio tails; all Gaussian bounds needed below are proved locally in step 1.1. [[thm-geometric-series]]

[F11] A function is Schwartz when it is smooth and every seminorm $\sup_x|x^m f^{(k)}(x)|$ is finite. Every polynomial times $e^{-c x^2}$, for $c>0$, has this property: all derivatives remain polynomial times the same Gaussian by the product rule, chain rule and $\exp' =\exp$; for each weighted derivative, choose an integer $M$ larger than half its polynomial degree, use $y^M/e^{cy}\to0$ for $y=x^2\to\infty$, and bound the remaining compact interval by continuity. ([[def-schwartz-space-and-its-seminorms]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[thm-derivative-of-exponential]], [[def-real-exponential-function-and-e]], [[thm-exponential-beats-every-polynomial]], [[lem-extreme-value-theorem-from-compactness]]).

[F12] For $c>0$, $c^s=\exp(s\log c)$; the complex exponential is entire ([[def-complex-logarithms-principal-logarithm-and-complex-powers]], [[def-complex-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F13] On a finite closed interval, continuous real factors whose interior derivatives have Riemann-integrable extensions satisfy integration by parts ([[thm-integration-by-parts-with-interior-derivatives]]).

## Proof

1.1 We prove the scalar Gaussian bounds required later from finite geometric comparisons. Fix $c>0$ and $a\in\{0,1\}$. For $0<t\le1$, group positive integers by $k\le n\sqrt t<k+1$. Each group contains at most $2t^{-1/2}$ integers and contributes at most $2t^{-(a+1)/2}(k+1)^a e^{-ck^2}$. The last sequence has consecutive-term ratio $((k+2)/(k+1))^a e^{-c(2k+1)}$, at most $1/2$ beyond a fixed integer, so [F10] bounds its tail geometrically. Hence $\sum_{n\ge1}n^a e^{-cn^2t}\le C_{a,c}t^{-(a+1)/2}$. For $t\ge1$, use $n^2t\ge t/2+n^2/2$ and the same ratio bound to obtain $\sum n^a e^{-cn^2t}\le C_{a,c}e^{-ct/2}$. For $n>N$, $n^2\ge(N^2+n^2)/2$, so the omitted tail is bounded by $e^{-cN^2t/2}\sum_{n\ge1}n^a e^{-cn^2t/2}$. Apply the two preceding bounds with $c/2$: its bounds are respectively $C_{a,c}t^{-(a+1)/2}e^{-cN^2t/2}$ and $C_{a,c}e^{-cN^2t/2}e^{-ct/4}$. All constants depend only on $a,c$, and the positive scalar tails explicitly tend to zero. These are the four Gaussian estimates used below, without any later-page input. [F10, given, construct, algebra]

1.2 The functions $f_t(x)=x^ae^{-\pi tx^2/q}$ are Schwartz by [F11], so [F3] applies. For $a=0$, scaling in [F4] gives $\widehat f_t(\xi)=\sqrt{q/t}e^{-\pi q\xi^2/t}$. For $a=1$, apply [F13] on $[-R,R]$ separately to the real and imaginary parts of the Gaussian and trigonometric factors: all factors and derivatives are continuous, so the finite-interval hypotheses hold. Then let $R\to\infty$; Gaussian decay makes the boundary term vanish and bounds both integral tails absolutely. This gives $$\widehat f_t(\xi)=-\frac{iq\xi}{t}\sqrt{q/t}e^{-\pi q\xi^2/t},$$ because $(e^{-\pi t x^2/q})'=-(2\pi t/q)x e^{-\pi t x^2/q}$ and the boundary term tends to zero. Substitution of these transforms into [F3] gives, in both parity cases, $$\Theta_\chi(t)=\frac{\tau(\chi)}{i^a\sqrt q}t^{-a-1/2}\Theta_{\overline\chi}(1/t).$$ The zero frequency contributes zero because $\chi(0)=0$ when $a=0$, and because of the factor $m^a$ when $a=1$. [F1, F3, F4, F11, F13, given, algebra]

2.1 For $t>0$, parity gives $\Theta_\chi(t)=2\sum_{n\ge1}\chi(n)n^a e^{-\pi n^2t/q}$. Put $z=(s+a)/2$ and initially assume $\operatorname{Re}s=\sigma>1$. For each $N$, integrating the finite sum over $1\le n\le N$ gives $$2\Gamma(z)(q/\pi)^z\sum_{n\le N}\chi(n)n^{-s}$$ by [F2] and the substitution $v=\pi n^2t/q$. The omitted tail, after multiplying by $t^{z-1}$, has integral tending to zero as $N\to\infty$: on $0<t\le1$, [F10, step 1.1] and $n^2\ge(N^2+n^2)/2$ bound it by $$C\int_0^1t^{\sigma/2-3/2}e^{-cN^2t}dt=O(N^{1-\sigma}),$$ and on $t\ge1$ they bound it by an exponentially decreasing function of $N^2t$ times an integrable exponential in $t$. Since the Dirichlet series in [F9] converges absolutely, passage to the limit yields $$\int_0^\infty\Theta_\chi(t)t^{(s+a)/2-1}dt=2\Gamma((s+a)/2)(q/\pi)^{(s+a)/2}L(s,\chi)=2\Lambda(s,\chi).$$ [F1, F2, F5, F9, F10, F12, given, algebra, step 1.1]

3.1 Splitting the integral in step 2.1 at $t=1$, using the transformation in step 1.2 on $(0,1)$, and substituting $u=1/t$ gives, for $\operatorname{Re}s>1$, $$2\Lambda(s,\chi)=\int_1^\infty\Theta_\chi(t)t^{(s+a)/2-1}dt+\frac{\tau(\chi)}{i^a\sqrt q}\int_1^\infty\Theta_{\overline\chi}(u)u^{(1-s+a)/2-1}du.$$ The theta bounds [F10, step 1.1] show absolute convergence on both half-lines. [F10, F12, step 2.1, step 1.2, algebra, step 1.1]

4.1 On any compact $s$-set, [F10, step 1.1] bounds each integrand in step 3.1 by $Ce^{-ct}t^B$, which is integrable; the same holds after any fixed number of $s$-derivatives, with extra powers of $\log t$. Each finite-interval integral is a locally uniform limit of its Riemann sums of entire functions, since its integrand depends continuously on $t$ uniformly on compact $s$-sets; the improper tails converge locally uniformly by this bound. Thus [F7], [F8] and [F12] show the right side is entire. The left side is entire by [F6]. The two entire functions agree on $\operatorname{Re}s>1$ by step 3.1, hence agree on all of $\mathbb C$ by [F7]. [F6, F7, F8, F10, F12, step 3.1, algebra, step 1.1] ∎
