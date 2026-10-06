---
id: cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range
kind: corollary
title: "Weighted-integrable $H^p$ functions have vanishing moments in the atomic range"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 10
deps: [thm-fourier-transform-decay-of-real-hardy-space-elements, thm-atomic-characterisation-of-real-hp, def-real-hardy-space-by-a-radial-maximal-function, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, def-fourier-transform-of-a-tempered-distribution, def-locally-integrable-function-on-r-n, def-countable-choice, cor-multivariable-taylor-formula-with-peano-remainder, thm-dominated-convergence, def-hp-atom-with-moment-order, thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-locally-integrable-functions-embed-in-distributions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Marcin Bownik, Li-An Daniel Wang, Fourier transform of anisotropic Hardy spaces, Proc. Amer. Math. Soc. 141 (2013), 2299-2308 (author offprint)"
      url: "https://pages.uoregon.edu/mbownik/papers/50.pdf"
      locator: "the paragraph after (1.1), printed p. 2299 (PDF p. 1): the Fourier decay 'forces $f\\in H^p\\cap L^1$ to have vanishing moments'"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proposition 6.10(b), printed p. 26: 'Elements of $H^1$ satisfy $\\int f\\,dx=0$'"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $n\ge1$, $0<p\le1$ and $s=\lfloor n(1/p-1)\rfloor$. Suppose
$f\in H^p(\mathbb R^n)$ is represented by a locally integrable function and assume additionally that $x^\alpha f\in L^1(\mathbb R^n)$ for every multi-index $|\alpha|\le s$. Then
$$\int_{\mathbb R^n}f(x)x^\alpha\,dx=0\qquad(|\alpha|\le s).$$
In particular every compactly supported $L^1$ function $f\in H^1$ satisfies
$\int_{\mathbb R^n}f=0$, and no compactly supported integrable function of
nonzero integral lies in $H^1$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<p\le1$, $s=\lfloor n(1/p-1)\rfloor$, $f\in H^p\cap L^1_{\mathrm{loc}}$ with $x^\alpha f\in L^1$ for $|\alpha|\le s$.

[F1] Fourier decay: for the fixed kernel, reproducing order and grand-maximal order of the Fourier-decay theorem, every $f\in H^p$ has $\widehat f$ continuous on $\mathbb R^n\setminus\{0\}$ with $|\widehat f(\xi)|\le C_{n,p,N,K,\varphi}\|f\|_{H^p}|\xi|^{n(1/p-1)}$ and $\widehat f(\xi)=o(|\xi|^{n(1/p-1)})$ as $\xi\to0$ ([[thm-fourier-transform-decay-of-real-hardy-space-elements]]).

[F2] If $f\in L^1$ then $\widehat f$ is bounded and uniformly continuous on $\mathbb R^n$, and $\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$; if moreover $x^\alpha f\in L^1$, then $\partial^\alpha\widehat f(\xi)=\int(-2\pi ix)^\alpha f(x)e^{-2\pi ix\cdot\xi}dx$, so $\partial^\alpha\widehat f(0)=(-2\pi i)^{|\alpha|}\int x^\alpha f$ ([[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]], [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]).

[F3] If $m\ge1$, the Peano Taylor formula applies to every real $C^m$ function near $0$: $g(h)=T_mg(0;h)+o(|h|^m)$ ([[cor-multivariable-taylor-formula-with-peano-remainder]]). For a complex-valued function, apply this to its real and imaginary parts and combine the two expansions.



[F4] At $p=1$, [[thm-atomic-characterisation-of-real-hp]] gives $f=\sum_j\lambda_ja_j$ in $\mathcal S'$ with $\sum_j|\lambda_j|<\infty$. The size/support conditions of [[def-hp-atom-with-moment-order]] give $\|a_j\|_1\le1$. Thus the partial sums converge in complex $L^1$ by [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]], and their $L^1$ limit has the same distributional limit since $|\langle h,\chi\rangle|\le\|h\|_1\|\chi\|_\infty$. Injectivity of [[thm-locally-integrable-functions-embed-in-distributions]] identifies it a.e. with the given locally integrable representative of $f$. Hence that representative belongs to $L^1$.

**Proof technique:** the little-$o$ Fourier decay against the Taylor expansion of $\widehat f$ at the origin.

## Proof

**Proof technique:** direct.

1.1 Smoothness of $\widehat f$ at the origin. For each coordinate, the exponential difference quotient is bounded by $2\pi|x_j|$, since $|e^{iu}-1|\le|u|$. Iterating dominated convergence with the assumed integrable functions $|x^\alpha f|$ proves the derivative formula in [F2]; dominated convergence applied to each derivative integrand proves its continuity. Since $x^\alpha f\in L^1$ for $|\alpha|\le s$, [F2] gives that $\widehat f$ is $s$ times continuously differentiable near the origin and that $\partial^\alpha\widehat f(0)$ is the Fourier transform of $(-2\pi i x)^\alpha f$ at the origin. [F2, given]

2.1 A nonvanishing lowest derivative contradicts the little-$o$ decay. Suppose some $\partial^\alpha\widehat f(0)\ne0$ with $|\alpha|\le s$, and choose such an $\alpha$ of minimal total degree $m$. Put $\gamma=n(1/p-1)\ge0$. If $m=0$, then $\widehat f(0)\ne0$; choose any unit vector $\eta$. Continuity from [F2] gives $|\widehat f(t\eta)|\ge|\widehat f(0)|/2$ for all sufficiently small $t>0$, contradicting [F1], which says $\widehat f(t\eta)=o(t^\gamma)$ and hence tends to zero. If $m\ge1$, every derivative of order below $m$ vanishes. By [F2], $\widehat f$ is $C^m$ near $0$, so [F3] applied to its real and imaginary parts gives, for fixed $\eta\in\mathbb R^n$, $$\widehat f(t\eta)=t^mQ(\eta)+o(t^m)\qquad(t\downarrow0),\qquad Q(\eta)=\sum_{|\beta|=m}\frac{\partial^\beta\widehat f(0)}{\beta!}\eta^\beta .$$ This complex homogeneous polynomial is not identically zero, so choose a unit vector $\eta$ with $Q(\eta)\ne0$. Then $|\widehat f(t\eta)|\ge c t^m$ for all sufficiently small $t>0$. Since $m\le s=\lfloor\gamma\rfloor\le\gamma$, one has $t^m\ge t^\gamma$ for $0<t\le1$, contradicting [F1]. Thus every $\partial^\alpha\widehat f(0)$ with $|\alpha|\le s$ vanishes. [F1, F2, F3, step 1.1, algebra]

3.1 Conclusion. By [F2], $\partial^\alpha\widehat f(0)=(-2\pi i)^{|\alpha|}\int x^\alpha f$ for every $|\alpha|\le s$; step 2.1 shows these derivatives all vanish, so $\int x^\alpha f=0$ for $|\alpha|\le s$. For $p=1$ one has $s=0$, so the integral of $f$ vanishes; applying this to a compactly supported $L^1$ function $f\in H^1$ gives $\int f=0$, and a compactly supported $L^1$ function with $\int f\ne0$ cannot be in $H^1$. [step 2.1, F2, algebra]

4.1 Remark on the hypothesis. For $p=1$ every $H^1$ function that is a locally integrable function automatically has $f\in L^1$ by [F4], so the "compactly supported $L^1$" formulation is a special case; for $p<1$ the hypothesis $x^\alpha f\in L^1$ is a genuine additional assumption. This corollary proves the stated vanishing moments and no more. [step 3.1, F4, given] ∎
