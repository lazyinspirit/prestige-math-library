---
id: thm-fourier-transform-decay-of-real-hardy-space-elements
kind: theorem
title: "Fourier transform decay of real $H^p$ elements"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [thm-atomic-characterisation-of-real-hp, def-hp-atom-with-moment-order, def-fourier-transform-of-a-tempered-distribution, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, def-multidimensional-rectangle-and-volume, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-dominated-convergence, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
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
      locator: "Lemma 4, Lemma 5 and Theorem 1, printed pp. 2302-2303 (isotropic case $A=2I_n$); Corollary 6, printed p. 2304: the $o(\\rho^{*1/p-1})$ refinement"
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "the proof of Theorem 1, printed pp. 71-72 (PDF pp. 13-14): the $\\mathcal S'$-convergence $\\widehat f=\\sum\\lambda_B\\widehat{a_B}$"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $n\ge1$, $0<p\le1$, fix the admissible kernel $\varphi$ defining $H^p$,
and set $s=\lfloor n(1/p-1)\rfloor$. Fix an integer $K\ge n/p$ and the
associated reproducing pair of the atomic decomposition, and an admissible
grand-maximal order $N\ge\max\{N_0(n,p,\varphi),n+s+1\}$. There is
$C=C(n,p,N,K,\varphi)<\infty$ such that every
$f\in H^p(\mathbb R^n)$ has a Fourier transform that is a continuous function
on $\mathbb R^n\setminus\{0\}$ and satisfies
$$|\widehat f(\xi)|\le C\|f\|_{H^p}|\xi|^{n(1/p-1)},\qquad \xi\ne0,$$
and moreover
$$\lim_{\xi\to0}\frac{|\widehat f(\xi)|}{|\xi|^{n(1/p-1)}}=0 .$$
Here $\widehat f$ is the tempered-distribution Fourier transform
([[def-fourier-transform-of-a-tempered-distribution]]), identified with a
continuous function off the origin by the estimate.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<p\le1$, the fixed kernel $\varphi$, reproducing order $K$ and order $N$, $s=\lfloor n(1/p-1)\rfloor$, $f\in H^p$, and multi-indices as in [[def-ck-and-multi-index-notation-in-several-variables]].

[F1] Atomic characterisation: $f=\sum_j\lambda_ja_j$ in $\mathcal S'$ with $(p,\infty,s)$-atoms $a_j$ and $(\lambda_j)\in\ell^p$; the representation may be chosen with $\sum_j|\lambda_j|\le C_{n,p,N,K,\varphi}\|f\|_{H^p}$ ([[thm-atomic-characterisation-of-real-hp]]).

[F2] For an $L^1$ atom the distributional transform agrees with the integral transform: the absolute double integral against a Schwartz test $\chi$ is bounded by $\|a\|_1\|\chi\|_1$, so Fubini identifies $\langle a,\widehat\chi\rangle$ with $\int\widehat a\chi$ ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]). Fourier transform is continuous on $\mathcal S'$: if $g_J\to g$ in $\mathcal S'$ then $\widehat{g_J}\to\widehat g$ in $\mathcal S'$ ([[def-fourier-transform-of-a-tempered-distribution]]).

[F3] For an atom $a$ supported in a cube $Q$ with centre $c_Q$, $\|a\|_{L^\infty}\le|Q|^{-1/p}$ and moments vanishing through order $s$ ([[def-hp-atom-with-moment-order]]), the Taylor expansion of $x\mapsto e^{-2\pi ix\cdot\xi}$ about $c_Q$ through order $s$ gives $$|\widehat a(\xi)|\le C\min\bigl(|Q|^{1-1/p},|\xi|^{s+1}|Q|^{1-1/p+(s+1)/n}\bigr)\qquad(\xi\ne0),$$ with $C=C(n,s)$: the first bound is $\|a\|_1\le\|a\|_\infty|Q|\le|Q|^{1-1/p}$, and the second uses the vanishing moments, the Taylor remainder bound $|\partial^\beta e^{-2\pi ix\cdot\xi}|\le(2\pi|\xi|)^{|\beta|}$ and $\int_Q|x-c_Q|^{s+1}dx\le C\ell(Q)^{s+1+n}$. Consequently $|\widehat a(\xi)|\le C'|\xi|^{n(1/p-1)}$ for $\xi\ne0$ (split at $|\xi|\ell(Q)\asymp1$ and use $s+1>n(1/p-1)$) and $|\widehat a(\xi)|/|\xi|^{n(1/p-1)}\to0$ as $\xi\to0$ for each fixed atom. [def-multidimensional-rectangle-and-volume, def-ck-and-multi-index-notation-in-several-variables, algebra]



**Proof technique:** the atomic representation, termwise Fourier transformation and dominated summation.

## Proof

**Proof technique:** direct.

1.1 Continuity and decay off the origin. Let $f=\sum_j\lambda_ja_j$ be the representation of [F1]. By [F2], $\widehat f=\sum_j\lambda_j\widehat{a_j}$ in $\mathcal S'$; since each $\widehat{a_j}$ is a continuous function (the atoms are integrable) and, by [F3], $|\lambda_j\widehat{a_j}(\xi)|\le C|\lambda_j||\xi|^{n(1/p-1)}$ for $\xi\ne0$, the numerical series $\sum_j\lambda_j\widehat{a_j}$ converges absolutely and locally uniformly on $\mathbb R^n\setminus\{0\}$. Its sum is therefore a continuous function off the origin and agrees with $\widehat f$ there as a distribution. There is no additional distribution supported at the origin: define the sum to be zero there. The uniform atom bound holds globally after this assignment, and $|\xi|^{n(1/p-1)}|\chi(\xi)|$ is integrable for every Schwartz test $\chi$. Dominated convergence therefore identifies the regular distribution of this sum with the distributional limit of the transformed partial sums on all of $\mathbb R^n$; this identifies $\widehat f$ with that continuous function on $\mathbb R^n\setminus\{0\}$ and gives $|\widehat f(\xi)|\le C(\sum_j|\lambda_j|)|\xi|^{n(1/p-1)}\le C'\|f\|_{H^p}|\xi|^{n(1/p-1)}$. [F1, F2, F3, algebra]

2.1 The little-$o$ statement. Fix $\eta>0$. Choose $J$ so large that $C\sum_{j>J}|\lambda_j|<\eta/2$, possible because $(\lambda_j)\in\ell^p\subseteq\ell^1$; then by [F3] the tail satisfies $\sum_{j>J}|\lambda_j||\widehat{a_j}(\xi)|\le(\eta/2)|\xi|^{n(1/p-1)}$ for every $\xi\ne0$. The finite sum $\sum_{j\le J}\lambda_j\widehat{a_j}$ is a finite combination of continuous functions each vanishing faster than $|\xi|^{n(1/p-1)}$ at the origin, so there is $\delta>0$ with $|\sum_{j\le J}\lambda_j\widehat{a_j}(\xi)|<(\eta/2)|\xi|^{n(1/p-1)}$ for $0<|\xi|<\delta$. Hence $|\widehat f(\xi)|\le\eta|\xi|^{n(1/p-1)}$ for $0<|\xi|<\delta$, which is the stated little-$o$ relation since $\eta>0$ was arbitrary. [step 1.1, F1, F3, algebra]

3.1 Conclusion. Steps 1.1 and 2.1 give the identification of $\widehat f$ with a continuous function off the origin, the decay estimate and the little-$o$ refinement. This proves the theorem. [step 1.1, step 2.1] ∎
