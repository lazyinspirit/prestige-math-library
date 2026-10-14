---
id: thm-finite-variance-geometric-median-mean-bound
kind: theorem
title: "Finite-variance Hilbert mean bound for geometric medians of means"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [alg-geometric-median-of-block-means, lem-measurable-minimum-norm-geometric-median-selection, lem-geometric-median-majority-radius-bound, def-hilbert-space, def-separable-space, lem-countable-iff-surjection-from-n, def-strongly-measurable-banach-valued-function, def-bochner-integrable-function, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, thm-bounded-linear-maps-commute-with-bochner-integration, def-trace-class-operator, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-is-absolutely-convergent-and-basis-independent, def-countable-choice, thm-projection-onto-a-nonempty-closed-convex-set, def-random-element-and-real-random-variable, def-expectation-of-a-nonnegative-or-integrable-random-variable, cor-markov-inequality-for-random-variables, def-independent-random-elements, thm-grouping-independent-sigma-algebras, thm-independent-random-elements-have-product-joint-law, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-cauchy-schwarz-in-an-inner-product-space, def-natural-logarithm, def-real-exponential-function-and-e, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Stanislav Minsker, Geometric Median and Robust Estimation in Banach Spaces, Corollary 4.1 and proof"
      url: "https://arxiv.org/pdf/1308.1334"
      locator: "PDF p. 8; full finite-second-moment Hilbert mean result and block-Chebyshev proof."
    - title: "Gábor Lugosi, Mean Estimation in High Dimension, §2"
      url: "https://ems.press/content/book-chapter-files/33347?nt=1"
      locator: "PDF pp. 2–3; finite-variance median-of-means performance and block construction."
---

## Statement

Assume Countable Choice. Let $H$ be a separable real Hilbert space and let $X_1,\ldots,X_n$ be iid Borel $H$-valued random elements with $E\|X_1\|^2<\infty$. Let $\mu=E_BX_1$ be their Bochner mean, define $x\otimes y:h\mapsto\langle h,y\rangle x$, and let
$$
\Sigma=E_B[(X_1-\mu)\otimes(X_1-\mu)]\in S_1(H),\qquad V=\operatorname{tr}\Sigma=E\|X_1-\mu\|^2,
$$
where $E_B$ denotes Bochner expectation, $S_1(H)$ is the Banach space of trace-class operators on $H$, and $x\otimes y$ is the rank-one operator $h\mapsto\langle h,y\rangle x$.
For $0<p<a<1/2$, put $\psi(a;p)=a\log(a/p)+(1-a)\log((1-a)/(1-p))$ and $C_a=(1-a)/\sqrt{1-2a}$. Set $a=7/18$, $p=1/10$, and
$$
k=\left\lfloor\frac{\log(1/\delta)}{\psi(a;p)}\right\rfloor+1.
$$
If $0<\delta<1$ and $k\le n/2$, apply [[alg-geometric-median-of-block-means]] to $X_1,\ldots,X_n$ using $k$ blocks and call the output $\widehat\mu$. Then
$$
\mathbb P\!\left(\|\widehat\mu-\mu\|>11\sqrt{\frac{V\log(1.4/\delta)}{n}}\right)\le\delta.
$$
If $V>0$, the same bound holds with $\ge$ in place of $>$ in the displayed event. If $V=0$, then $\widehat\mu=\mu$ almost surely. The finite-variance assumption is on the clean iid sample; no sample-replacement or Huber-contamination guarantee is asserted here.

## Facts & Assumptions

**Given:** Countable Choice, a separable real Hilbert space $H$, iid Borel random elements $X_1,\ldots,X_n$ with finite second moment, $0<\delta<1$, and the displayed $k\le n/2$ condition.

[A1] Countable Choice is used by [[thm-projection-onto-a-nonempty-closed-convex-set]] in the geometric-median selector and by the trace-class supplier chain; the Bochner integrability criterion itself is choice-free ([[def-countable-choice]], [[lem-measurable-minimum-norm-geometric-median-selection]], [[def-trace-class-operator]]).

[F1] A Borel map into separable $H$ is strongly measurable by finite-valued approximations from a fixed dense sequence; strong measurability and integrability of the norm imply Bochner integrability ([[def-strongly-measurable-banach-valued-function]], [[def-bochner-integrable-function]], [[thm-bochner-integrability-criterion]]).

[F2] Trace-class operators form a Banach space under trace norm, and the trace is a bounded linear functional whose value on a nuclear representation $Th=\langle h,u\rangle v$ is $\langle v,u\rangle$ ([[def-trace-class-operator]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]], [[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[F3] The Bochner norm inequality and commutation with bounded linear maps give $\|E_BZ\|\le E\|Z\|$ and $T(E_BZ)=E_B(TZ)$ for bounded linear $T$ ([[lem-bochner-integral-norm-inequality]], [[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[F4] Independent random elements have product joint law; disjoint subfamilies of an independent family remain independent ([[thm-independent-random-elements-have-product-joint-law]], [[thm-grouping-independent-sigma-algebras]]).

[F5] For a nonnegative random variable $W$ and $t>0$, $P(W\ge t)\le EW/t$ ([[cor-markov-inequality-for-random-variables]]).

[F6] Fubini applies to the integrable scalar cross-term $\langle Y_i,Y_l\rangle$ under the product law of independent random elements ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-independent-random-elements-have-product-joint-law]]).

[F7] The natural logarithm and exponential satisfy their usual inverse and algebraic identities ([[def-natural-logarithm]], [[def-real-exponential-function-and-e]]).

[F8] For $0<a<1$ and $0<p<1$, write $\psi(a;p)=a\log(a/p)+(1-a)\log((1-a)/(1-p))$; this is the Bernoulli relative-entropy expression used in the Chernoff calculation below.

[F9] If a geometric median is farther than $C_a r$ from a point, more than $ak$ block centers are farther than $r$ from that point ([[lem-geometric-median-majority-radius-bound]]).

[F10] Cauchy–Schwarz holds for the Hilbert inner product ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F11] A nonnegative measurable function with integral zero vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F12] The minimum-norm geometric-median selector is Borel, and the block means are continuous functions of the input sample ([[alg-geometric-median-of-block-means]], [[lem-measurable-minimum-norm-geometric-median-selection]]).

[F13] Separability means that a nonempty space has an at-most-countable dense subset; [[lem-countable-iff-surjection-from-n]] enumerates that subset by a sequence ([[def-separable-space]]).

[L1] If $t=(x-1)/(x+1)$ and $|t|<1$, then $\log x=2\sum_{j=0}^{\infty}t^{2j+1}/(2j+1)$; truncating after $j=M$ leaves absolute remainder at most $2|t|^{2M+3}/((2M+3)(1-t^2))$. This follows by integrating the geometric series for $2/(1-t^2)$.

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, a separable real Hilbert space, the iid sample with finite second moment, the confidence parameter $\delta$, and the stated $k\le n/2$ condition.

1.1 The map $X_1$ is strongly measurable: by [F13], fix a countable dense sequence $(h_j)$ in $H$ and approximate each $x\in H$ by the nearest of $h_1,\ldots,h_m$, breaking finite ties by the least index. The cells defining these finite-valued simple Borel maps are Borel because they are finite intersections of strict or weak comparisons of continuous distance functions, and the maps converge pointwise to $x$. Since $\|X_1\|\le1+\|X_1\|^2$, $E\|X_1\|<\infty$, so [F1] defines $\mu=E_BX_1$. [F1, F13, given, algebra]

1.2 If the geometric median is farther than $C_a r_0$ from $\mu$, [F9] forces more than $ak$ bad block means. For $W$ the number of bad blocks, independence and $P(\text{bad block }j)\le p$ give $E e^{\lambda W}\le(1-p+pe^\lambda)^k$ for $\lambda>0$. Markov's inequality with $\lambda=\log(a(1-p)/(p(1-a)))>0$ gives $P(W\ge ak)\le e^{-k\psi(a;p)}<\delta$, after substituting this $\lambda$ and simplifying. [F4, F5, F7, F8, F9, algebra]

2.1 For the rank-one operator $x\otimes y$, [F10] gives $\|x\otimes y\|\le\|x\|\|y\|$, with equality by testing $y/\|y\|$ when $y\ne0$; its only possible nonzero singular value is this operator norm, so $\|x\otimes y\|_1=\|x\|\|y\|$. Apply the rank-one map to the finite-valued simple approximants from step 1.1: the resulting $S_1(H)$-valued functions are simple and converge pointwise in trace norm, because $\|u\otimes u-v\otimes v\|_1\le(\|u\|+\|v\|)\|u-v\|$. Hence $(X_1-\mu)\otimes(X_1-\mu)$ is strongly measurable; its trace norm is $\|X_1-\mu\|^2$, which is integrable since $E\|X_1-\mu\|^2\le2E\|X_1\|^2+2\|\mu\|^2$. The Bochner integrability criterion gives its Bochner expectation $\Sigma$ in $S_1(H)$. The bounded trace functional commutes with this integral by [F3], and [F2] gives $\operatorname{tr}\Sigma=E\|X_1-\mu\|^2=V$. For $h,g\in H$, bounded evaluation maps commute with the integral and give $\langle\Sigma h,g\rangle=E[\langle h,X_1-\mu\rangle\langle X_1-\mu,g\rangle]$; this is symmetric in $h,g$ and is nonnegative when $h=g$. If $V=0$, [F11] gives $X_1=\mu$ almost surely. Identical distribution and a finite union of null events imply that all $X_i=\mu$ simultaneously almost surely; hence every block mean is $\mu$. The objective in [F12] is then $k\|z-\mu\|$, uniquely minimized at $\mu$, so $\widehat\mu=\mu$ almost surely. Thus the strict-tail event in the Statement is empty when its threshold is zero. Assume $V>0$ below. [A1, F2, F3, F10, F11, F12, given, step 1.1]

3.1 Let $m_j^{\circ}$ be a block size. For centered $Y_i=X_i-\mu$, expand $E\|\sum_{i\in B_j}Y_i\|^2$ into diagonal and cross terms. Each diagonal term is $V$; for $i\ne l$, product-law independence [F4] and scalar Fubini [F6] give $E\langle Y_i,Y_l\rangle=\int\!\int\langle x,y\rangle\,dP_Y(x)dP_Y(y)=0$. The integrand is integrable because [F10] gives $|\langle x,y\rangle|\le\|x\|\|y\|$ and $E\|Y_i\|<\infty$; the inner integral is zero by [F3] and $E_BY_l=0$. Dividing by $(m_j^{\circ})^2$ yields $E\|m_j-\mu\|^2=V/m_j^{\circ}$. [F3, F4, F6, F10, step 2.1, algebra]

4.1 Since $k\le n/2$, every block has size at least $\lfloor n/k\rfloor\ge n/(2k)$. Put $r_0=\sqrt{2kV/(pn)}$. By [F5] and step 3.1, $P(\|m_j-\mu\|>r_0)\le p$ for each block. The block means are independent by [F4], and [F12] makes their geometric-median aggregate a Borel random element. [F4, F5, F12, step 3.1, given, algebra]

5.1 The same Chernoff calculation as step 1.2 applies to every $q<a$. For each sufficiently large integer $s$, use radius $(1-1/s)r_0$ in step 4.1, so the bad-block probability is at most $p_s=p/(1-1/s)^2<a$. The event $\{\|\widehat\mu-\mu\|\ge C_ar_0\}$ is contained in the corresponding strict-radius event, whose probability is at most $e^{-k\psi(a;p_s)}$. Let $s\to\infty$; continuity gives $e^{-k\psi(a;p)}<\delta$. [F9, step 4.1, step 1.2, algebra]

6.1 For $a=7/18$ and $p=1/10$, $C_a=(1-a)/\sqrt{1-2a}$; applying [L1] with $M=50$ and $t=-13/68,13/22,1/6$ gives $2915/10000<\psi(a;p)<2916/10000$ and $3364/10000<\log(7/5)$. Hence $5/18<\psi(a;p)<\log(7/5)$ and $C_a\sqrt{2/(p\psi(a;p))}\le11$. From $k=\lfloor\log(1/\delta)/\psi(a;p)\rfloor+1$ we have $k\psi(a;p)\le\log(1/\delta)+\psi(a;p)<\log(7/(5\delta))$. Step 4.1 therefore gives the asserted nonstrict-tail bound for $V>0$ after replacing $r_0$ by its expression; the strict-tail event is a subset, so its bound follows as well. When $V=0$, exact recovery in step 2.1 gives the strict-tail bound. No nonstrict-tail assertion at zero threshold is made. [F7, L1, step 2.1, step 4.1, step 5.1, algebra] ∎
