---
id: lem-complex-lq-norm-from-finite-simple-dual-tests
kind: lemma
title: "Complex Lq norm recovery from finite simple dual tests"
status: published
origin: pipeline
landmark: false
deps: [thm-complex-holder-minkowski-and-the-quotient-norm, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p, def-finite-sigma-finite-and-semifinite-measures, def-conjugate-exponents, def-essential-supremum-with-respect-to-a-measure, thm-monotone-convergence-for-the-integral, thm-integral-triangle-inequality, lem-complex-conjugation-and-modulus-laws, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-threshold-characterisations-of-real-and-extended-real-measurability, def-complex-lp-and-euclidean-test-function-conventions, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-finite-and-countable-subadditivity-of-measures]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "Construct phase extremizers on bounded finite sets, approximate them by finite grids, and exhaust positive level sets."
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "\u00a710.2, Corollary 10.5 and Lemma 10.6, pp.286\u2013287. Independent endpoint warning: Laugesen Appendix C, p.172."
---

## Statement

Let $1\le q\le\infty$, let $r$ be its conjugate exponent, and let $\Sigma_{\mathrm{fin}}$ denote the complex finite simple functions whose nonzero sets have finite measure. Define
$$S(g):=\sup\left\{\left|\int_X gs\,d\mu\right|:s\in\Sigma_{\mathrm{fin}},\ \|s\|_r\le1\right\}.$$
On a sigma-finite measure space, if $g:X\to\mathbb C$ is measurable and $gs$ is integrable for every $s\in\Sigma_{\mathrm{fin}}$, then $\|g\|_q=S(g)$, allowing extended values. Thus a finite uniform bound on these tests proves $g\in L^q$ with its norm at most that bound.

If $g$ is already in $L^q$, the same identity holds on every measure space for $q<\infty$, and on semifinite measure spaces for $q=\infty$. The pairing is bilinear; a sesquilinear formulation replaces $s$ by its conjugate. The zero test is allowed, including on zero measure spaces.

## Facts & Assumptions

**Given:** A measurable finite-valued complex function $g$ and conjugate $q,r\in[1,\infty]$, with either the sigma-finite/test-integrability hypothesis or the stated already-Lq hypothesis.

[F1] Complex measurability is componentwise and finite support here means finite-measure nonzero set ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F2] Complex Hölder holds at all conjugate endpoints, and norms satisfy the triangle inequality ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F3] Sigma-finiteness supplies a finite-measure exhaustion; semifiniteness supplies a positive finite-measure subset of each positive-measure set ([[def-finite-sigma-finite-and-semifinite-measures]]).

[F4] $r=q/(q-1)$ for $1<q<\infty$, while the endpoints are $(q,r)=(1,\infty),(\infty,1)$ ([[def-conjugate-exponents]]).

[F5] Essential supremum is the infimum of the essential bounds ([[def-essential-supremum-with-respect-to-a-measure]]).

[F6] Increasing nonnegative functions have increasing integrals converging to the integral of their limit ([[thm-monotone-convergence-for-the-integral]]).

[F7] $|\int h|\le\int|h|$ for integrable complex $h$ ([[thm-integral-triangle-inequality]]).

[F8] $z\overline z=|z|^2$ and modulus is multiplicative ([[lem-complex-conjugation-and-modulus-laws]]).

[F9] Real sums and products of finite measurable functions are measurable ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

[F10] Real threshold preimages characterize measurability ([[thm-threshold-characterisations-of-real-and-extended-real-measurability]]).

[F11] Integral monotonicity and scaling bound measures of level sets ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F12] A countable union of null measurable sets is null ([[thm-finite-and-countable-subadditivity-of-measures]]).

## Proof

**Proof technique:** Construct phase extremizers on bounded finite sets, approximate them by finite grids, and exhaust positive level sets.

1.1 Put $a=|g|$ and $\theta=\overline g/a$ on $\{a>0\}$, zero elsewhere. The function $b=1/a$ on $\{a>0\}$, zero elsewhere, is measurable: for $t\ge0$, its strict upper level set is $\{0<a<1/t\}$ when $t>0$ and $\{a>0\}$ when $t=0$; negative upper thresholds give $X$. Real positive powers of $a$ have upper sets $\{a>t^{1/\gamma}\}$ for $\gamma>0,t\ge0$. Thus F9–F10 and F1 show the phase, the powers and all ensuing products are measurable. F8 gives $|\theta|\le1$ and $g\theta=a$. [F1, F8, F9, F10]

1.2 Let $E$ be measurable of finite measure and let $h$ be a bounded measurable function vanishing outside $E$, with $\|h\|_r\le1$ and $\int_E|g|<\infty$. Round each coordinate of $h$ down to an integer multiple of $1/m$ on $E$ and set the result $t_m$ to zero off $E$. This has finite range, measurable fibers, and $|t_m-h|\le\sqrt2/m$. When $r=\infty$ and $|h|\le1$, replace each of its finitely many values $z$ by $z/\max(1,|z|)$; these values lie in the closed unit disk and the error is at most $2\sqrt2/m$, because the displacement of $z$ is at most $|z-h|$. For finite $r$, the uniform error $e_m$ gives $\|t_m-h\|_r\le e_m\mu(E)^{1/r}\to0$; for infinity it gives $\|t_m-h\|_\infty\le e_m\to0$. Put $d_m=\max(1,\|t_m\|_r)$ and $s_m=t_m/d_m$. F2 gives $1\le d_m\le1+\|t_m-h\|_r$, hence $d_m\to1$ and $s_m\to h$ uniformly, since $h$ is bounded. Each $s_m$ is an admissible finite simple test, and F7 gives $|\int g(s_m-h)|\le\sup_E|s_m-h|\int_E|g|\to0$. Therefore $S(g)\ge|\int gh|$. If $\mu(E)=0$, the integral is zero and the zero test already suffices. [F1, F2, F7, F9, F10]

2.1 Let $E$ have finite measure with $a\le B<\infty$ on $E$, and put $A=\|g\mathbf1_E\|_q$ for finite $q$. If $A=0$, $S(g)\ge A$ from the zero test. If $A>0$ and $1<q<\infty$, set $h=\mathbf1_E\theta a^{q-1}/A^{q-1}$. This is bounded, and $(q-1)r=q$ gives $\int|h|^r=A^{-q}\int_E a^q=1$. Moreover $\int gh=A^{-(q-1)}\int_E a^q=A$. For $q=1$ set $h=\mathbf1_E\theta$ instead; it is bounded by one and $\int gh=\int_E a=A$. In both cases $\int_E|g|\le B\mu(E)<\infty$, so step 1.2 applies and gives $S(g)\ge\|g\mathbf1_E\|_q$. [F4, F11, step 1.1, step 1.2]

3.1 Under sigma-finiteness take a covering $H_j$ of finite measure and put $E_n=(\bigcup_{j\le n}H_j)\cap\{1/n\le a\le n\}$ for $n\ge1$. These finite-measure sets increase and cover $\{a>0\}$. For finite $q$, $a^q\mathbf1_{E_n}\uparrow a^q$ everywhere, so F6 yields $\|g\mathbf1_{E_n}\|_q\uparrow\|g\|_q$, possibly infinitely. Step 2.1 proves $S(g)\ge\|g\|_q$. If that norm is finite, F2 bounds every admissible test by $\|g\|_q$; if it is infinite the lower bound already gives equality at infinity. The assumed test integrability ensures every integral in the defining supremum is meaningful. [F2, F3, F6, step 2.1]

3.2 If instead $g\in L^q$ with $q<\infty$ on an arbitrary measure space, use $E_n=\{1/n\le a\le n\}$. F11 gives $n^{-q}\mu(E_n)\le\int a^q<\infty$, hence $\mu(E_n)<\infty$. The same increasing limit and step 2.1 give $S(g)\ge\|g\|_q$. Hölder gives the reverse bound and integrability of every $gs$: a finite simple function of finite-measure support belongs to every finite-exponent Lr, and is bounded when $r=\infty$. No sigma-finiteness of $X$ is needed. [F2, F6, F11, step 2.1]

4.1 Now let $q=\infty$ and $M=\|g\|_\infty>0$, possibly infinite under the sigma-finite hypothesis. For any $0<t<M$, the measurable set $D=\{a>t\}$ has positive measure, since otherwise $t$ would be an essential bound. In the sigma-finite case, $D=\bigcup_n(D\cap E_n)$ with the sets from step 3.1. F12 implies some $B=D\cap E_n$ has positive measure, and $0<\mu(B)<\infty$ with $a\le n$ there. In the semifinite already-L-infinity case, $M<\infty$; the set $\{a>M+1\}$ is null by F5. Semifiniteness applied to $D\cap\{a\le M+1\}$ gives a measurable $B$ of finite positive measure. In either case $h=\theta\mathbf1_B/\mu(B)$ is bounded, $\|h\|_1=1$, and $\int gh=\mu(B)^{-1}\int_Ba\ge t$. Step 1.2 now yields $S(g)\ge t$. Letting $t\uparrow M$, or taking arbitrarily large $t$ if $M=\infty$, proves $S(g)\ge M$. For finite $M$, F2 gives $S(g)\le M$. If $M=0$, F2 and the zero test give $S(g)=0$. [F2, F3, F4, F5, F12, step 1.1, step 1.2, step 3.1]

5.1 The measure on $X=\{x\}$ with $\mu(\varnothing)=0$, $\mu(X)=\infty$ is countably additive: a disjoint family contains at most one nonempty member. It is not semifinite. For $g(x)=1$, its essential norm is one, yet the only finite-measure-supported simple function is zero, so $S(g)=0$. This verifies the necessity of a measure hypothesis at the infinity endpoint. Finally the zero test makes every stated supremum nonempty; on zero measure spaces it and every other integral have value zero. The previous steps prove all the claimed identities and therefore the finite-bound membership conclusion. [step 3.1, step 3.2, step 4.1] ∎
