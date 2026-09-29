---
id: cex-w-one-p-point-evaluation-is-unbounded-in-the-subcritical-and-higher-dimensional-critical-cases
kind: counterexample
title: Point evaluation is unbounded below the Sobolev continuity threshold
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-sobolev-space-wkp-and-its-norm
  - lem-classical-derivatives-are-weak-derivatives
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - lem-metrics-on-rn
  - def-metric-topology
  - def-metric-ball
  - lem-smooth-bump-between-concentric-euclidean-balls
  - def-test-function-space-d-of-an-open-set
  - def-support-and-compactly-supported-riemann-integral-in-rn
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - def-ck-and-multi-index-notation-in-several-variables
  - def-the-standard-smooth-step-function
  - thm-the-standard-flat-function-is-smooth-and-flat-at-zero
  - def-the-standard-flat-function
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - thm-derivative-of-exponential
  - cor-one-dimensional-change-of-variables-with-absolute-derivative
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-ftc-second-part
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - prop-measure-monotonicity
  - cor-continuous-functions-are-borel-measurable
  - thm-borel-sets-are-lebesgue-measurable
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-integral-over-a-measurable-set
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-integer-power
  - def-real-power
  - thm-real-power-laws
  - thm-real-power-continuity-and-derivatives
  - cor-mean-value-theorem
  - thm-of-archimedean
  - thm-exponential-beats-every-polynomial
  - def-factorial-and-falling-factorial
  - lem-derivative-of-a-power
  - def-bounded-linear-operator
  - thm-nonnegative-series-bounded-partial-sums
  - lem-of-naturals-positive
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (Aalto University, 2026)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.2, Examples 1.11–1.12, printed pp. 8–9; these establish unbounded Sobolev functions in the stated exponent regimes but do not prove unboundedness of evaluation on test functions; the explicit sequences and estimates here are derived directly
verification:
  precheck: pass
  audited: 2026-09-30
---

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §1.2, Examples 1.11–1.12,
  printed pp. 8–9. Example 1.11 proves existence of unbounded $W^{1,p}$
  functions for $1\le p<n$; Example 1.12 gives an unbounded $W^{1,n}$
  function for $n\ge2$. These examples motivate the exponent split but do not
  establish the test-function sequences or point-evaluation conclusion below.
  The exact smooth sequences and their norms are derived here.

## Statement

Assume the Axiom of Countable Choice. Let $n\ge2$, let
$\Omega\subseteq\mathbb R^n$ be open with $0\in\Omega$, let
$\mathbb K\in\{\mathbb R,\mathbb C\}$, and let $1\le p\le n$.
There is a sequence of real-valued (hence $\mathbb K$-valued) functions
$u_m\in C_c^\infty(\Omega;\mathbb K)$ such that
$$ \sup_m\|u_m\|_{W^{1,p}(\Omega;\mathbb K)}<\infty, \qquad |u_m(0)|\longrightarrow\infty. $$
Thus evaluation at $0$ is unbounded on smooth compactly supported functions
in the $W^{1,p}$ norm. No bounded linear functional on
$W^{1,p}(\Omega;\mathbb K)$ can agree with ordinary point evaluation at
$0$ on every member of $C_c^\infty(\Omega;\mathbb K)$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, an open set
$\Omega\subseteq\mathbb R^n$ containing $0$, a scalar field
$\mathbb K\in\{\mathbb R,\mathbb C\}$, and $1\le p\le n$.

[F1] Countable Choice, written $\mathrm{AC}_\omega$, says that every
sequence of nonempty sets has a choice function
([[def-countable-choice]]).

[F2] For finite $p$,
$$ \|u\|_{W^{1,p}}^p=\|u\|_{L^p}^p+ \sum_{j=1}^n\|D_ju\|_{L^p}^p $$
for $u\in W^{1,p}$
([[def-sobolev-space-wkp-and-its-norm]]).

[F3] Under Countable Choice, a smooth function's classical first partial
derivatives are its weak derivatives
([[lem-classical-derivatives-are-weak-derivatives]]).

[F4] A test function on an open set is smooth with compact support contained
in that set, and the real-valued test functions are included in the convention
for either scalar field
([[def-test-function-space-d-of-an-open-set]]).

[F5] There is a smooth $\phi:\mathbb R^n\to[0,1]$ equal to $1$ on
$\overline B_{1/2}(0)$ and with support contained in $B_{3/4}(0)$
([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[F6] The Euclidean metric is
$d_2(x,y)=\sqrt{\sum_{j=1}^n(x_j-y_j)^2}$; hence if
$Q(x)=\sum_{j=1}^n x_j^2$, then $Q(x)=|x|^2=d_2(x,0)^2$, and
$|x_j|\le |x|$
([[lem-metrics-on-rn]]).

[F7] Since $\Omega$ is open and contains $0$, some ball $B_R(0)$ with
$R>0$ is contained in $\Omega$
([[def-metric-topology]], [[def-metric-ball]]).

[F8] The support is the closure of the nonzero locus. Closed Euclidean balls
are compact
([[def-support-and-compactly-supported-riemann-integral-in-rn]],
[[thm-heine-borel-rn]]).

[F9] Continuous real functions on compact metric spaces are bounded and attain
their extrema
([[thm-extreme-value-metric]]).

[F10] Under Countable Choice, a box with side lengths $b_i-a_i$ is measurable with measure
$\prod_i(b_i-a_i)$; Lebesgue measure is monotone under inclusion
([[thm-lebesgue-measure-of-a-box-of-every-kind]],
[[prop-measure-monotonicity]]).

[F11] For a nonnegative measurable function, integration is monotone and
positively homogeneous; a constant on a measurable set integrates to that
constant times its measure
([[def-integral-over-a-measurable-set]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]],
[[def-integral-of-a-nonnegative-simple-function]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F12] Continuous Euclidean functions are Borel measurable under Countable
Choice, Borel sets (including open and closed sets) are Lebesgue measurable
under Countable Choice, and the $L^p$ norm for finite $p$ is defined
using the integral of $|u|^p$
([[cor-continuous-functions-are-borel-measurable]],
[[thm-borel-sets-are-lebesgue-measurable]],
[[def-complex-lp-and-euclidean-test-function-conventions]]).

[F13] The library standard smooth step is denoted by $\sigma$; write
$\theta:=\sigma$ to distinguish it from the polar surface measure. Its
formula is smooth across the endpoints because the flat function has all
derivatives zero at zero, and it takes values in $[0,1]$ from the positive
formula on $(0,1)$ and the constant values outside
([[def-the-standard-smooth-step-function]],
[[thm-the-standard-flat-function-is-smooth-and-flat-at-zero]],
[[def-the-standard-flat-function]],
[[cor-exponential-reciprocal-and-positivity]]).

[F14] The same step is $0$ for $t\le0$ and $1$ for $t\ge1$
([[def-the-standard-smooth-step-function]]).

[F15] Coordinate chain, sum, and product rules hold; smoothness means all
iterated coordinate derivatives exist and are continuous. For $x>0$,
$\log'(x)=1/x$, and integer negative powers have their usual derivatives.
Consequently $Q$ is smooth, and the compositions with $\log Q$ used
below are smooth on $Q>0$: repeated differentiation uses the chain and
product rules and derivatives of $Q^{-j}$
([[def-ck-and-multi-index-notation-in-several-variables]],
[[thm-chain-rule]], [[thm-algebra-of-derivatives]],
[[thm-logarithm-derivative-and-integral]], [[def-integer-power]],
[[lem-derivative-of-a-power]]).

[F16] The logarithm satisfies its product, quotient, and reciprocal laws and
$\log(\exp x)=x$; the exponential is smooth, positive, satisfies
$\exp(0)=1$ and $\exp(x+y)=\exp(x)\exp(y)$, and is strictly increasing
([[def-natural-logarithm]], [[thm-natural-logarithm-laws]],
[[def-real-exponential-function-and-e]],
[[thm-derivative-of-exponential]], [[thm-exponential-addition-formula]],
[[cor-exponential-reciprocal-and-positivity]],
[[thm-exponential-is-strictly-increasing]]).

[F17] For positive base $a$, $a^x=\exp(x\log a)$, and real powers obey
their exponent laws. For a fixed real exponent $b$,
$(x^b)'=b x^{b-1}$ on $x>0$; the mean value theorem therefore gives
$k^b\le1$ whenever $k\ge1$ and $b\le0$
([[def-real-power]], [[thm-real-power-laws]],
[[thm-real-power-continuity-and-derivatives]], [[cor-mean-value-theorem]]).

[F18] The natural numbers are unbounded in $\mathbb R$, so any fixed real
threshold is exceeded by an integer
([[thm-of-archimedean]]).

[F19] Under Countable Choice, polar coordinates integrate nonnegative Borel
functions using $r^{n-1}dr\,d\sigma$, where the sphere measure is finite
([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F20] Under Countable Choice, bounded Riemann integrable functions on compact
intervals have equal Riemann and Lebesgue integrals. A monotone $C^1$
substitution with nonzero derivative changes a
one-dimensional Riemann integral by the absolute derivative; and the
fundamental theorem evaluates the integrals used below
([[cor-one-dimensional-change-of-variables-with-absolute-derivative]],
[[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]],
[[thm-ftc-second-part]]).

[F21] For each natural $N$ and $t>0$, the defining exponential series
has nonnegative terms and includes its $N$-th term, so
$\exp(t)\ge t^N/N!$. This follows from the series definition and
the fact that its sum bounds every partial sum
([[def-real-exponential-function-and-e]],
[[def-factorial-and-falling-factorial]], [[lem-of-naturals-positive]],
[[thm-nonnegative-series-bounded-partial-sums]]).
Consequently
$t^n\le n!\exp(t)$ for $t\ge0$

[F22] For each natural degree $n$ and real $a>0$,
$x^n/\exp(ax)\to0$ as $x\to+\infty$
([[thm-exponential-beats-every-polynomial]]).

[F23] A bounded linear operator $T$ between normed spaces has a constant
$C\ge0$ with $\|Tx\|\le C\|x\|$ for every $x$
([[def-bounded-linear-operator]]).

**Choice use.** The exact assumption is $\mathrm{AC}_\omega$. It is needed by the
Sobolev definition [F2], classical-derivative compatibility [F3], box
measure formula [F10], continuous/Borel measurability and Lebesgue
measurability [F12], polar coordinates [F19], and the Riemann-to-Lebesgue
comparison [F20]. The constructions below make no arbitrary
sequence of choices; the fixed integer cutoffs are obtained from [F18] and the
pointwise estimate in [F21] and limit assertion in [F22].

## Counterexample

**Proof technique:** direct.

1.1 The declared choice principle is exactly Countable Choice. [F1, given]
Its uses are confined to the supplier hypotheses listed in the Choice use note
[F2, F3, F10, F12, F19, F20]; the integer cutoffs below use the Archimedean
property and the displayed limit, not additional choices.

1.2 Openness supplies a positive closed ball, and the common cutoff bound is finite. [F5, F7, F9, construct]
Choose $R>0$ so that $\overline B_R(0)\subseteq\Omega$, after taking
an open ball about $0$ and reducing its radius. Take $\phi$ from [F5] and let
$$ M=1+\sup_{\overline B_1(0)}|\phi| +\max_{1\le j\le n}\sup_{\overline B_1(0)}|\partial_j\phi| +\sup_{0\le t\le1}|\theta'(t)|. $$
This is finite by [F9]. Also $\phi(0)=1$ and
$\operatorname{supp}\phi\subset B_{3/4}(0)$.

2.1 For $1\le p<n$, the scaled smooth bumps have supports shrinking to zero and values diverging there. [F4, F5, F8, F15, F17, F18, step 1.2, construct]
By [F18] choose an integer $q\ge1$ with $q(n-p)>p$, then choose an
integer $k_0>\max(1,R^{-1})$. For
each $m\ge1$, put $k=m+k_0$ and
$$ u_m(x)=k\phi(k^q x). $$
Since $k\ge k_0>1$ and $q\ge1$, $k^{-q}\le k^{-1}<R$. The support
of $u_m$, and of each of its first derivatives, lies in
$B_{k^{-q}}(0)\subset B_R(0)$; thus [F4] gives
$u_m\in C_c^\infty(\Omega;\mathbb R)\subset C_c^\infty(\Omega;\mathbb K)$.
The chain rule gives
$$ \partial_j u_m(x)=k^{q+1}(\partial_j\phi)(k^q x), \qquad u_m(0)=k\longrightarrow\infty. $$
The derivative support assertion follows because a smooth function is zero
with all derivatives on the open complement of its support.

2.2 If $p=n$, the logarithmic radial cutoffs are smooth, supported, diverge at zero, and have the displayed gradient bound. [F4, F6, F8, F13, F14, F15, F16, F22, step 1.2, construct]
By [F22], $h^n\exp(-nh^2)\to0$ as integers $h\to\infty$: apply its limit
assertion with $x=h^2$, polynomial degree $n$, and $a=n$, and use
$h^n\le h^{2n}$ for $h\ge1$ and [F16]. Choose an integer $h_0\ge1$
so that $h^n\exp(-nh^2)\le1$ for $h\ge h_0$. For each $m\ge1$, set
$h=m+h_0$, $L=h^2$, and $r_h=R\exp(-L)$. Since $L>0$, [F16] gives
$0<\exp(-L)<\exp(0)=1$, so $0<r_h<R$. With
$Q(x)=\sum_{j=1}^n x_j^2=|x|^2$ by [F6], define
$$ w_h(x)=\begin{cases} 1,&Q(x)\le r_h^2,\\[2pt] \displaystyle\theta\!\left(\frac{\log(R^2/Q(x))}{2L}\right), &r_h^2<Q(x)<R^2,\\[6pt] 0,&Q(x)\ge R^2, \end{cases} \qquad u_m(x)=h w_h(x). $$
For $r_h<|x|<R$, the scalar argument equals
$t=\log(R/|x|)/L\in(0,1)$, by [F16]. The polynomial $Q$ and the
composition with $\log Q$ are smooth where $Q>0$, by [F15]; $w_h$
is constant near $0$. Since $\theta$ is smooth and constant on both
half-lines beyond $[0,1]$, the pieces join smoothly at both radii. Its
support lies in $\overline B_R(0)\subseteq\Omega$, so [F4] gives
$u_m\in C_c^\infty(\Omega;\mathbb R)$, and $u_m(0)=h\to\infty$.
On the annulus, differentiation gives
$$ |\partial_j u_m(x)| =\frac{h|\theta'(t)||x_j|}{L|x|^2} \le\frac{Mh}{L|x|}. $$
Outside the annulus the derivatives vanish, including at the joining radii
because the step is smooth and constant on the adjacent half-lines.

3.1 The subcritical construction has a uniform $W^{1,p}$ bound. [F2, F3, F5, F10, F11, F12, F17, step 1.2, step 2.1]
The ball $B_{k^{-q}}(0)$ lies in a cube of measure
$(2k^{-q})^n$, by [F10]. The pointwise bounds from [F5] and step 1.2,
measurability from [F12], and integral monotonicity and homogeneity [F11]
give
$$ \int_\Omega |u_m|^p\,dx\le 2^n k^{p-qn},\qquad \int_\Omega |\partial_j u_m|^p\,dx \le 2^nM^p k^{p(q+1)-qn} =2^nM^p k^{p-q(n-p)}. $$
Both exponents are negative: $p-q(n-p)<0$ by the choice of $q$, and
$p-qn<0$ follows since $qn>q(n-p)>p$. Thus [F17] makes both
quantities uniformly bounded for $k\ge1$. Since the classical
derivatives are weak derivatives by [F3], [F2] now gives
$\sup_m\|u_m\|_{W^{1,p}}<\infty$.

3.2 Polar integration gives a uniform $L^n$ bound for each critical gradient term. [F16, F19, F20, step 2.2]
For each $j$,
$$ \int_\Omega|\partial_j u_m|^n\,dx \le \sigma(S^{n-1})\left(\frac{Mh}{L}\right)^n \int_{r_h}^R\frac{dr}{r}. $$
Since $\log(R/r_h)=L$, [F16] and the fundamental theorem in [F20] give
$\int_{r_h}^Rdr/r=L$. Therefore
$$ \int_\Omega|\partial_j u_m|^n\,dx \le M^n\sigma(S^{n-1})\frac{h^n}{L^{n-1}} =M^n\sigma(S^{n-1})h^{2-n}, $$
which is uniformly bounded because $n\ge2$ and $h\ge1$.

3.3 The core and annulus estimates give a uniform critical $L^n$ bound for the function term. [F10, F11, F13, F14, F16, F17, F19, F20, F21, step 1.2, step 2.2]
On the core $\overline B_{r_h}(0)$, [F10] bounds the measure by
$(2r_h)^n$; hence
$$ \int_{\overline B_{r_h}}|u_m|^n\,dx \le (2R)^n h^n\exp(-nh^2)\le(2R)^n $$
by the choice of $h_0$. For the annulus, the mean value theorem and the
derivative bound in step 1.2 imply
$0\le\theta(t)\le Mt$ for $0\le t\le1$. The substitution
$r=R\exp(-s)$ is decreasing: its oriented endpoints are $L$ and $0$,
and reversing them gives the positive integral on $[0,L]$ with Jacobian
$R\exp(-s)$. Thus [F20] gives
$$ \begin{aligned} \int_{r_h}^R\left|\theta\!\left(\frac{\log(R/r)}{L}\right)\right|^n r^{n-1}\,dr &\le \frac{M^nR^n}{L^n}\int_0^L s^n\exp(-ns)\,ds\\ &\le \frac{M^nR^nn!}{L^n}\int_0^L\exp(-s)\,ds\\ &\le \frac{M^nR^nn!}{L^n}. \end{aligned} $$
Here [F21] gives $s^n\le n!\exp(s)$; since $n\ge2$, monotonicity
of the exponential in [F16] gives
$\exp(-(n-1)s)\le\exp(-s)$, and [F20] evaluates
$\int_0^L\exp(-s)ds=1-\exp(-L)\le1$. Applying [F19] to this
radial annulus integral and multiplying by $h^n$ yields
$$ \int_{B_R\setminus\overline B_{r_h}}|u_m|^n\,dx \le \sigma(S^{n-1})M^nR^nn!\frac{h^n}{L^n} =\sigma(S^{n-1})M^nR^nn!h^{-n}, $$
also uniformly bounded.

4.1 These estimates bound the critical $W^{1,n}$ norm while the origin values diverge. [F2, F3, step 3.2, step 3.3]
Steps 3.2 and 3.3 bound the function term and each of the $n$ first
derivative terms in [F2] uniformly in $L^n$. By [F3], the classical
derivatives are the weak derivatives, so
$\sup_m\|u_m\|_{W^{1,n}}<\infty$, while $u_m(0)=h\to\infty$.

5.1 Any bounded extension contradicts divergence of the corresponding test sequence at zero. [F23, step 3.1, step 4.1, assume-contra, discharge-contradiction]
Suppose a bounded linear functional $T:W^{1,p}(\Omega;\mathbb K)\to\mathbb K$ agreed with ordinary point
evaluation on all test functions. Boundedness would give a constant $C$ such
that, for the corresponding sequence,
$$ |u_m(0)|=|T([u_m])|\le C\|u_m\|_{W^{1,p}}. $$
The right side is uniformly bounded by step 3.1 or step 4.1, while the left side
tends to infinity. This contradiction proves unboundedness and rules out the
asserted bounded extension. ∎
