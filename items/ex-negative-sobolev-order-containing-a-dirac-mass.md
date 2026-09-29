---
id: ex-negative-sobolev-order-containing-a-dirac-mass
kind: example
title: "A Dirac mass has precisely sufficiently negative Sobolev order"
status: draft
origin: pipeline
deps:
  - thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces
  - thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - def-polar-surface-measure-on-the-unit-sphere
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - lem-smooth-polynomially-bounded-multipliers-on-schwartz-space
  - def-regular-distribution-from-a-locally-integrable-function
  - thm-locally-integrable-functions-embed-in-distributions
  - lem-complex-lp-completeness-density-and-inner-product
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - def-complex-lp-and-euclidean-test-function-conventions
  - thm-nonnegative-improper-integral-bounded-primitive-criterion
  - lem-improper-integral-splitting-and-tail-invariance
  - thm-continuous-implies-integrable
  - thm-additivity-over-subintervals
  - thm-monotonicity-of-the-integral
  - thm-nonnegative-series-bounded-partial-sums
  - thm-p-series-real-exponents
  - thm-logarithm-derivative-and-integral
  - def-real-power
  - thm-real-power-laws
  - thm-exponential-is-strictly-increasing
  - thm-of-archimedean
  - def-countable-choice
  - lem-japanese-bracket-powers-preserve-schwartz-space
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-monotone-convergence-for-the-integral
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "§12.1.2, weighted H^s definition, printed p. 140; the Dirac criterion and its radial integral are computed locally"
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
      locator: "§6.2, weighted Sobolev convention, printed p. 25"
---

## Statement

Assume Countable Choice and let $n\ge1$. Let $\delta_0\in\mathcal S'(\mathbb R^n)$
be the Dirac mass at the origin and let $H^s=H^s(\mathbb R^n)$ be the
real-order Bessel-potential completion, identified with its canonical image in
$\mathcal S'(\mathbb R^n)$ under $E_s$
([[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]). Then
$$\delta_0\in H^s\quad\Longleftrightarrow\quad s<-\frac n2 .$$
Equivalently the threshold is $2s+n<0$; at the strict endpoint $s=-n/2$ the
membership fails, and the radial integrand decays like $1/r$, so the failure is
a logarithmic divergence. Membership is read through the weighted Fourier
characterization: $\delta_0\in H^s$ means that
$\langle\xi\rangle^s\mathcal F\delta_0$ is the regular distribution of an $L^2$
class $g$, the class is unique, and then $\|\delta_0\|_{H^s}=\|g\|_2$. No
pointwise-function assumption is made on $\delta_0$ or on any representative of
$g$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, the Dirac mass $\delta_0$, and the Japanese bracket $\langle\xi\rangle=(1+|\xi|^2)^{1/2}$.

[A1] Countable Choice permits one selection from each nonempty set in a countable family ([[def-countable-choice]]).

[F1] In the negative-sign $2\pi$ normalization, $\mathcal F\delta_0=u_1$, the regular distribution of the constant function $1$; the Dirac mass is a tempered distribution and constants are regular tempered distributions ([[thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials]]).

[F2] For every $s\in\mathbb R$, a tempered distribution $u$ lies in $E_s[H^s]$ if and only if there is a unique $g\in L^2(\mathbb R^n)$ with $\langle\xi\rangle^s\mathcal Fu=u_g$ in $\mathcal S'(\mathbb R^n)$, and then $\|u\|_{H^s}=\|g\|_2$ ([[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]).

[F3] A smooth symbol whose derivatives are all polynomially bounded acts
on tempered distributions by $\langle au,\varphi\rangle=\langle u,a\varphi\rangle$
([[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]]).
The bracket weight $a=\langle\xi\rangle^s$ preserves Schwartz space
([[lem-japanese-bracket-powers-preserve-schwartz-space]]). In the case
$u=u_1$ used below, $\langle au_1,\varphi\rangle=\int a\varphi$ by [F1],
so $au_1=u_a$ is a regular tempered distribution. On compact tests this is
exactly the regular functional of
[[def-regular-distribution-from-a-locally-integrable-function]].

[F4] The regular-distribution map $h\mapsto u_h$ is injective on $L^1_{\mathrm{loc}}(\mathbb R^n)$ modulo almost-everywhere equality ([[thm-locally-integrable-functions-embed-in-distributions]]).

[F5] Every $L^2$ class is locally integrable: for compact $K$, $\int_K|h|\le|K|^{1/2}\|h\|_2<\infty$ by Cauchy–Schwarz and finiteness of the measure of bounded sets ([[lem-complex-lp-completeness-density-and-inner-product]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F6] Polar coordinates: for Borel measurable $f:\mathbb R^n\to[0,\infty]$, $$\int_{\mathbb R^n}f\,d\lambda_n =\int_0^\infty\!\!\int_{S^{n-1}}f(r\omega)\,r^{n-1}\,d\sigma(\omega)\,dr,$$ where $\sigma$ is the finite Borel measure on $S^{n-1}$ with $\sigma(E)=n\lambda_n(\{r\omega:\omega\in E,\ 0<r\le1\})$; its total mass satisfies $0<\sigma(S^{n-1})=n\lambda_n(\{0<|x|\le1\})<\infty$, because the set contains $B(e_1/2,1/4)$ (where $e_1$ is the first coordinate unit vector) and is contained in $B(0,2)$; these balls have positive finite measure ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F7] For a nonnegative locally Riemann-integrable $\varphi$, the tail integral $\int_1^\infty\varphi:=\sup_{R>1}\int_1^R\varphi$ is finite exactly when the truncations are bounded, and changing a finite lower endpoint does not affect finiteness ([[thm-nonnegative-improper-integral-bounded-primitive-criterion]], [[lem-improper-integral-splitting-and-tail-invariance]]).

[F8] For a nonnegative series, convergence is equivalent to boundedness of its partial sums ([[thm-nonnegative-series-bounded-partial-sums]]); and for real $p$, $\sum_{k\ge1}1/k^p$ converges exactly when $p>1$ ([[thm-p-series-real-exponents]]).

[F9] A continuous function on a compact interval is Riemann integrable; the integral is additive over adjacent intervals and monotone in the integrand ([[thm-continuous-implies-integrable]], [[thm-additivity-over-subintervals]], [[thm-monotonicity-of-the-integral]]).

[F10] For $R>0$, $\int_1^R\frac{dt}t=\log R$, and $\log R\to+\infty$ as $R\to+\infty$, so this integral diverges logarithmically ([[thm-logarithm-derivative-and-integral]]).

[F11] For $b>0$ and real $u$, $b^u=\exp(u\log b)$ ([[def-real-power]]); the logarithm satisfies $\log'(x)=1/x>0$ on $(0,\infty)$ and is therefore strictly increasing ([[thm-logarithm-derivative-and-integral]]), and $\exp$ is strictly increasing ([[thm-exponential-is-strictly-increasing]]), so $b\mapsto b^u$ is strictly increasing for $u>0$ and strictly decreasing for $u<0$; and $b^{u+v}=b^ub^v$, $(b_1b_2)^u=b_1^ub_2^u$ ([[thm-real-power-laws]]).

[F12] Every real number is exceeded by a natural number ([[thm-of-archimedean]]).

[F13] For a measurable $g$, $g\in L^2(\mathbb R^n)$ exactly when $\int_{\mathbb R^n}|g|^2<\infty$, and then $\|g\|_2^2=\int|g|^2$ ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F14] Bounded Riemann-integrable functions on compact intervals have equal
Lebesgue and Riemann integrals
([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).
For nonnegative measurable functions, monotone convergence identifies the
integral with the increasing limit of its truncations
([[thm-monotone-convergence-for-the-integral]]).

## Proof

**Proof technique:** reduce the membership to the finiteness of a radial integral, bracket that integral between blocks of a real $p$-series, and read off the threshold and its strict endpoint.

1.1 The Fourier transform of the Dirac mass. By [F1], $\mathcal F\delta_0=u_1$ is the regular distribution of the constant function $1$. [F1]

1.2 The polar reduction. Apply [F6] to $f(\xi)=\langle\xi\rangle^{2s}$; since $f(r\omega)=(1+r^2)^s$ is radial, the total mass of $\sigma$ factors out: $$\int_{\mathbb R^n}\langle\xi\rangle^{2s}d\xi =\sigma(S^{n-1})\int_0^\infty\varphi(r)\,dr,\qquad \varphi(r):=(1+r^2)^sr^{n-1},$$ with $\sigma(S^{n-1})\in(0,\infty)$. The function $\varphi$ extends continuously to $r=0$, with value $1$ if $n=1$ and $0$ if $n>1$. By [F14], its Lebesgue integral on each compact interval equals its Riemann integral, and monotone convergence of $\varphi\mathbf 1_{[0,N]}$ identifies the full nonnegative Lebesgue integral with the supremum of these truncations, including when infinite. On $0<r\le1$ one has $(1+r^2)^s\le\max(1,2^s)$ and $r^{n-1}\le1$ by [F11], so $\int_0^1\varphi\le\max(1,2^s)<\infty$ by [F9]. Since $\int_0^R\varphi=\int_0^1\varphi+\int_1^R\varphi$ for $R>1$ by additivity [F9], the integral over $(0,\infty)$ is finite if and only if the tail truncations $\int_1^R\varphi$ are bounded, that is, if and only if the tail $\int_1^\infty\varphi$ is finite in the sense of [F7]. [F6, F7, F9, F11, F14, given]

1.3 Block bounds. Put $q:=2s+n-1$ and write, by [F11], $\varphi(r)=r^q(1+r^{-2})^s$. For an integer $k\ge1$ and $r\in[k,k+1]$ one has $1+r^{-2}\in[1,2]$, so $(1+r^{-2})^s\in[c_1,c_2]$ with $c_1=\min(1,2^s)>0$ and $c_2=\max(1,2^s)$; moreover $k+1\le2k$ for $k\ge1$, so $2^{\min(q,0)}\le r^q/k^q\le2^{\max(q,0)}$, and with $c_3=c_12^{\min(q,0)}$, $c_4=c_22^{\max(q,0)}$, $$c_3k^q\le\varphi(r)\le c_4k^q,\qquad r\in[k,k+1],\quad k\ge1 .$$ [F11, algebra]

2.1 The membership criterion. By [F2], $\delta_0\in H^s$ if and only if there is $g\in L^2$ with $\langle\xi\rangle^s\mathcal F\delta_0=u_g$. By step 1.1 and [F3] applied to the smooth symbol $a=\langle\xi\rangle^s$ and the locally integrable $h=1$, this product is $\langle\xi\rangle^su_1=u_{\langle\xi\rangle^s}$. The condition is therefore $u_{\langle\xi\rangle^s}=u_g$ for some $g\in L^2$. Both $\langle\xi\rangle^s$ and $g$ are locally integrable by continuity and [F5], so [F4] forces $\langle\xi\rangle^s=g$ almost everywhere; hence a qualifying $g$ exists exactly when $\langle\xi\rangle^s\in L^2(\mathbb R^n)$, that is, by [F13], exactly when $\int_{\mathbb R^n}\langle\xi\rangle^{2s}\,d\xi<\infty$, and then $\|\delta_0\|_{H^s}=\|g\|_2=\|\langle\xi\rangle^s\|_2$. [F2, F3, F4, F5, F13, step 1.1]

2.2 The block comparison. For every integer $N\ge1$, additivity and monotonicity of the integral [F9] applied to step 1.3 give $$c_3\sum_{k=1}^Nk^q\le\int_1^{N+1}\varphi\le c_4\sum_{k=1}^Nk^q .$$ If $\sum_{k\ge1}k^q$ converges with value $S$, then for every $R>1$ [F12] supplies an integer $N\ge R$, and monotonicity [F9] together with step 1.3 gives $\int_1^R\varphi\le\int_1^{N+1}\varphi\le c_4S$, so the truncations are bounded and $\int_1^\infty\varphi\le c_4S<\infty$ by [F7]. Conversely, if $\int_1^\infty\varphi<\infty$, then $\sum_{k=1}^Nk^q\le c_3^{-1}\int_1^{N+1}\varphi\le c_3^{-1}\int_1^\infty\varphi$ for every $N$, so the partial sums are bounded and $\sum_{k\ge1}k^q$ converges by [F8]. [F7, F8, F9, F12, step 1.3]

3.1 The threshold. By step 2.2, $\int_1^\infty\varphi<\infty$ if and only if $\sum_{k\ge1}k^q=\sum_{k\ge1}1/k^{-q}$ converges, which by [F8] happens exactly when $-q>1$, that is, exactly when $2s+n-1<-1$, i.e. $s<-n/2$. Combining with steps 2.1 and 1.2, this gives $\delta_0\in H^s\Longleftrightarrow s<-n/2$. [F8, step 2.1, step 1.2, step 2.2]

3.2 The strict endpoint. Let $s=-n/2$, so $q=-1$ and $\varphi(r)=r^{-1}(1+r^{-2})^s\ge c_1r^{-1}$ for $r\ge1$ by [F11]. Hence for every $R>1$, $$\int_1^R\varphi\ge c_1\int_1^R\frac{dr}r=c_1\log R \longrightarrow+\infty\qquad(R\to\infty)$$ by [F9] and [F10]; the truncations are unbounded, so $\int_1^\infty\varphi=\infty$ by [F7], and by steps 2.1 and 1.2, $\delta_0\notin H^{-n/2}$. The divergence is logarithmic: the truncated integral grows like $\log R$ because the radial integrand behaves like $1/r$. [F7, F9, F10, F11, step 2.1, step 1.2]

4.1 Conclusion. Step 3.1 proves the equivalence $\delta_0\in H^s\Longleftrightarrow s<-n/2$ and exhibits the strict threshold $2s+n<0$, while step 3.2 proves that the borderline case $s=-n/2$ fails by logarithmic divergence; step 2.1 identifies the exact norm with the $L^2$ norm of the unique weighted Fourier class, and no pointwise-function assumption is used anywhere. Countable Choice is used exactly through the cited characterization, regular-distribution and polar-coordinate interfaces, which carry it as their hypothesis. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13, step 1.1, step 2.1, step 1.2, step 1.3, step 2.2, step 3.1, step 3.2] ∎
