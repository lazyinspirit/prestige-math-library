---
id: lem-full-level-gl2-eisenstein-distribution-pairing-is-meromorphic
kind: lemma
title: "Meromorphic Full-Level GL2 Eisenstein Distributions and Triple Pairings"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-full-level-gl2-automorphic-distribution
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-identity-theorem-holomorphic-functions
  - thm-weierstrass-convergence-holomorphic-functions
  - thm-holomorphic-parameter-riemann-integral
  - lem-full-level-gl2-smoothed-triple-distributions-have-rapid-cusp-decay
  - lem-full-level-gl2-triple-pairing-is-independent-of-smoothing
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§4, equations (4.2)–(4.7) and (4.14), printed pp.17–19."
    - title: "S. D. Miller and W. Schmid, Pairings of Automorphic Distributions"
      url: "https://arxiv.org/pdf/1106.2364v1"
      locator: "Theorem 2.30 and §4, printed pp.18–19; parameter uniformity is proved here from explicit Eisenstein Fourier bounds."
---

## Statement

For $\operatorname{Re}\nu>1$ the full-level Eisenstein distribution
$E_\nu\in(V^{-\infty}_{\nu,0})^\Gamma$ has, in its affine periodic chart,
the locally convergent expression
$$E_\nu(x)=\sum_{q>0}\sum_{p\in\mathbb Z}q^{-\nu-1}\delta_{p/q}(x).$$
There is a unique meromorphic continuation as a distribution section on
$\mathbb RP^1$, with no possible pole except a simple pole at $\nu=1$.
In both the affine and reciprocal charts its periodic Fourier coefficients are
$$a_\nu(0)=\zeta(\nu),\qquad a_\nu(n)=\sum_{d\mid |n|}d^{-\nu}\quad(n\ne0).$$
Here the second chart is identified by the full-level inversion matrix, with
the principal-series transition of parameter $\nu$. On each compact parameter
set the regularized family $(\nu-1)E_\nu$ has a common finite-order
distribution bound on each compact chart support and depends weakly
holomorphically on $\nu$.

For fixed full-level automorphic distributions $\tau_1,\tau_2$ with at least
one cuspidal, let $P_\nu=P(\tau_1,\tau_2,E_\nu)$ be their smoothed triple
pairing. Then $P_\nu$ is meromorphic on $\mathbb C$, with no possible pole
except a simple pole at $\nu=1$. Every normalized compactly supported smooth
smoothing function computes the same continuation. No choice principle is
assumed.

## Statement references

[[def-full-level-gl2-automorphic-distribution|the distribution-section and transition conventions]]

[[lem-full-level-gl2-triple-pairing-is-independent-of-smoothing|the normalized triple pairing]]

## Facts & Assumptions

**Given:** The complex parameter $\nu$, and for the pairing assertion the two fixed full-level distributions with one cuspidal factor.

[F1] [[thm-primitive-dirichlet-l-analytic-continuation]]: the conductor-one principal primitive L-function is $\zeta$, meromorphic with its unique simple pole at $1$.

[F2] [[thm-identity-theorem-holomorphic-functions]] and [[thm-weierstrass-convergence-holomorphic-functions]] give uniqueness of analytic continuation and holomorphy of locally uniform limits.

[F3] [[thm-holomorphic-parameter-riemann-integral]] gives holomorphic dependence of compact parameter integrals of jointly continuous holomorphic kernels.

[F4] [[lem-full-level-gl2-smoothed-triple-distributions-have-rapid-cusp-decay]] constructs the smooth triple function and proves cusp estimates by finite-order compact-picture bounds and repeated unipotent differentiation.

[F5] [[lem-full-level-gl2-triple-pairing-is-independent-of-smoothing]] proves independence of the normalized smoothing function.

## Proof

**Given:** The data in the Statement; positive-real powers use the real logarithm. If only the second fixed input is cuspidal, use the repeated-unipotent-derivative argument in that slot; the Eisenstein construction and all parameter formulas are unchanged.

1.1 For $\operatorname{Re}\nu>1$, the affine sum converges against compactly supported tests: the number of $p$ for a fixed $q$ whose $p/q$ lies in a fixed compact interval is $O(q)$, so the absolute sum is bounded by a multiple of $\sum_{q>0}q^{-\operatorname{Re}\nu}$. Its global compact-picture version is $\sum_{(p,q)\in(\mathbb Z^2\setminus\{0\})/\{\pm1\}}(p^2+q^2)^{-(\nu+1)/2}\delta_{[p:q]}$. It converges absolutely on the compact projective line because the shell $r\le\sqrt{p^2+q^2}<r+1$ has $O(r)$ points. The affine coefficient is exactly $q^{-\nu-1}$: writing $x=\tan\theta=p/q$, the pullback of $\delta_{p/q}$ contributes $\cos^2\theta$ and the principal-series multiplier contributes $|\cos\theta|^{\nu-1}$, whose product is $|q|^{\nu+1}(p^2+q^2)^{-(\nu+1)/2}$. Terms with $q=0$ supply the distribution at infinity. Reindexing nonzero integer vectors by any unimodular integer matrix and applying this same transition calculation proves full-level invariance. In particular inversion identifies its two chart distributions. [given, construct, algebra]

2.1 Integrate over one affine period against $e^{-2\pi inx}$. For each $q$, the representatives $0\le p<q$ give $\sum_{p=0}^{q-1}e^{-2\pi inp/q}=q$ if $q\mid n$, and zero otherwise, by a finite geometric sum. The zeroth coefficient is therefore $\sum_{q>0}q^{-\nu}=\zeta(\nu)$, and the nonzero coefficient is $\sum_{d\mid |n|}d^{-\nu}$. The calculation is justified by the absolute bound in step 1.1. [step 1.1, algebra]

3.1 Fix a compact parameter set $K$. Choose a nonnegative integer $R$ with $|\operatorname{Re}\nu|\le R$ on $K$. For $n\ne0$, $|a_\nu(n)|\le |n|^{R+1}$, since there are at most $|n|$ divisors and each summand has modulus at most $|n|^R$. Every nonzero coefficient is entire. By [F1], $(\nu-1)a_\nu(0)$ is entire and bounded on $K$; the nonzero regularized coefficients obey the same polynomial bound with an additional fixed factor $\sup_K|\nu-1|$. For a smooth periodic test $\varphi$, integration by parts $m$ times gives $|\widehat\varphi(n)|\le(2\pi|n|)^{-m}\sup|\varphi^{(m)}|$ for $n\ne0$. Choose the least integer $m>R+3$. The Fourier pairing $\sum_n(\nu-1)a_\nu(n)\widehat\varphi(-n)$ converges absolutely, locally uniformly in $\nu$, and is bounded by a fixed multiple of $\max_{j\le m}\sup|\varphi^{(j)}|$. Thus it defines an entire weak distribution family with a common finite-order bound on $K$, by [F2]. Its unregularized form is meromorphic with at most a simple pole at $1$. [step 2.1, F1, F2, construct, algebra]

4.1 Use the same Fourier family for each of the two standard projective charts. On their overlap, the required parameter-dependent transition identity holds for $\operatorname{Re}\nu>1$ by step 1.1. After multiplying by $\nu-1$, pairing its difference with any compactly supported overlap test is entire: derivatives of the transition multiplier are bounded uniformly on compact parameter and chart sets, and the series in step 3.1 converges in the corresponding common finite-order bound. The identity theorem [F2] extends this equality to all $\nu$. The two chart families therefore glue to a global meromorphic section. Apply the same argument to each fixed full-level matrix to extend invariance. A fixed finite chart partition on the projective line transports the common bounds in step 3.1 to a common global finite-order bound. Uniqueness follows by pairing any competing continuation with each local test and using [F2]. [step 1.1, step 3.1, F2, algebra]

5.1 Fix a normalized smoothing function $\psi$. In the compact-picture construction of [F4], replace the third distribution by $(\nu-1)E_\nu$. On a compact parameter set, steps 3.1–4.1 give a common finite-order bound for this input. The first two inputs are fixed. The smooth dual test density obtained by transporting $\psi$ depends holomorphically on $\nu$, and all its derivative seminorms are locally bounded: its parameter dependence consists of positive smooth functions raised to affine functions of $\nu$ on a fixed compact support. Pairing this test with the Fourier family is holomorphic by the locally uniform series bound of step 3.1. The compact-picture group-action estimate in [F4] is uniform for bounded $\operatorname{Re}\nu$ and a common distribution order: each differentiated multiplier is a finite sum of smooth powers times polynomials in $\nu$. It therefore gives a common growth exponent for every right derivative, independent of that derivative's order. The repeated-differentiation argument of [F4] now gives uniform diagonal cusp bounds of every required power on the compact parameter set. [step 3.1, step 4.1, F4, algebra]

6.1 Integrate the regularized triple function first over a truncated modular region with $y\le Y$ and compact rotation variable. These are finite-chart integrals of jointly continuous holomorphic functions and are holomorphic by repeated application of [F3]. The boundary of the fixed fundamental region is piecewise smooth; finite coordinate subdivisions, or Riemann sums on a containing rectangle restricted to that fixed region, give the same holomorphic integral by uniform continuity. Step 5.1 bounds the omitted cusp integral locally uniformly by $O(Y^{-1})$, using any fixed decay exponent at least zero. Consequently [F2] makes the limit $(\nu-1)P_\nu$ entire. Thus $P_\nu$ is meromorphic with at most a simple pole at $1$. Independence of $\psi$ holds at each $\nu\ne1$ by [F5], and then holds meromorphically by [F2]. All Fourier sums, cutoffs and compact Riemann approximations were explicitly indexed; no choice principle was invoked. [step 5.1, F2, F3, F5, algebra] ∎
