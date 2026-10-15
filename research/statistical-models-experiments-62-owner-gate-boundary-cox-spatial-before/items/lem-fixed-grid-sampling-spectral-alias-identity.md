---
id: lem-fixed-grid-sampling-spectral-alias-identity
kind: lemma
title: "Spectral alias identity for fixed regular-grid sampling"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
deps:
  - def-random-field-stationarity-covariance-and-variogram
  - def-borel-sigma-algebra
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-borel-sets-are-lebesgue-measurable
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-regular-grid-periodogram-fejer-expectation
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-monotone-convergence-for-the-integral
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - cor-second-countable-lch-locally-finite-borel-measures-are-regular
  - lem-unit-circle-is-a-compact-metrizable-topological-group
  - thm-finite-products-of-compact-spaces
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-integers
  - lem-int-equivalence
  - thm-universal-property-of-the-quotient
  - thm-n-cross-n-countable
  - lem-finite-powers-of-countable-sets-are-countable
  - lem-countable-iff-surjection-from-n
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - def-nonnegative-lebesgue-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024), Section 2.3, Definition 2.9(b) and the periodic-kernel calculation in Lemma 2.10(b), PDF pp. 20–21; fixed-grid target corrected locally"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/mitarbeiter/spodarev/publications/scripts/SpatialStatistics_2024.pdf"
dependency_level: 5
---

## Statement

Assume AC and DC. Let $X(s)$, $s\in\mathbb R^d$, be a real wide-stationary field with mean $\mu$ and covariance admitting the density representation
$$ C(h)=\int_{\mathbb R^d}e^{ih\cdot\omega}f(\omega)\,d\omega,\qquad f:\mathbb R^d\to[0,\infty),\quad f\in L^1(\mathbb R^d), $$
where $f$ is a specified Borel representative. Fix spacing $\delta>0$ and sample $Y_j=X(\delta j)$, $j\in\mathbb Z^d$. On $Q=[-\pi,\pi)^d$ set
$$ g_\delta(\theta):=\delta^{-d}\sum_{k\in\mathbb Z^d}f((\theta+2\pi k)/\delta). $$
This nonnegative measurable sum is finite almost everywhere, is in $L^1(Q)$, and defines a periodic density of the sampled field's unique torus spectral measure:
$$ c(h)=C(\delta h)=\int_Q e^{ih\cdot\theta}g_\delta(\theta)\,d\theta,\qquad \int_Qg_\delta=\int_{\mathbb R^d}f=C(0). $$
Thus for the angular periodogram of [[thm-regular-grid-periodogram-fejer-expectation]],
$$ E[I_n(\lambda)]=\int_Q\Phi_n(\lambda-\theta)g_\delta(\theta)\,d\theta =\int_{\mathbb R^d}\Phi_n(\lambda-\delta\omega)f(\omega)\,d\omega. $$
The general fixed-grid target is this aliased density, without any alias-free assumption. Where a pointwise density limit is claimed, a version continuous at the target must be specified; a spectral measure alone supplies no canonical pointwise density value.

## Facts & Assumptions

**Given:** AC and DC, the wide-stationary continuous-space field with its specified integrable nonnegative density, and fixed regular-grid spacing $\delta>0$.

[F1] [[def-random-field-stationarity-covariance-and-variogram]]: wide stationarity gives a constant mean and displacement covariance; restricting to sites $\delta j$ preserves these properties.

[F2] [[thm-linear-change-of-variables-for-lebesgue-measure]] and [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]: a scalar dilation by $\delta$ multiplies $d$-dimensional Lebesgue measure by $\delta^d$, and translations preserve it. The dilation theorem assumes Countable Choice.

[F3] [[thm-monotone-convergence-for-the-integral]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], and [[def-integrable-real-and-complex-functions-and-their-integrals]]: nonnegative countable sums pass through integrals, and absolutely integrable complex integrands can be partitioned and integrated termwise.

[F4] [[thm-choice-implies-dependent-implies-countable-choice]]: AC implies DC and Countable Choice. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F5] [[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[thm-finite-products-of-compact-spaces]], and [[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]: the finite-dimensional torus is compact Hausdorff and second-countable, and under Countable Choice its finite Borel measures are Radon. A countable base is obtained by intersecting rational Euclidean balls with its realization in $\mathbb R^{2d}$.

[F6] [[thm-regular-grid-periodogram-fejer-expectation]]: under AC and DC a stationary lattice covariance has a unique finite positive Radon torus spectral measure, and $EI_n$ is its Fejer convolution.

[F7] [[def-integers]] and [[lem-int-equivalence]]: $\mathbb Z$ is the
quotient of $\mathbb N\times\mathbb N$ by the stated equivalence relation.
[[thm-universal-property-of-the-quotient]]: the map sending a pair to its
class is surjective. [[thm-n-cross-n-countable]] supplies a bijection
$\beta:\mathbb N\to\mathbb N\times\mathbb N$.
[[lem-countable-iff-surjection-from-n]]: a nonempty set is at most countable
if and only if it admits a surjection from $\mathbb N$.
[[lem-finite-powers-of-countable-sets-are-countable]]: every finite power of
an at most countable set is at most countable.

[F8] [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]:
every nonnegative measurable function is the increasing pointwise limit of
nonnegative measurable simple functions.

[F9] [[def-nonnegative-lebesgue-integral]]: the nonnegative integral of a
measurable function is the supremum of the integrals of its nonnegative simple
minorants; for a simple function its integral is the finite sum over its
disjoint level sets.

## Proof

1.1 First establish the countability needed for the sum. By [F7], the
quotient map $\pi:\mathbb N\times\mathbb N\to\mathbb Z$ is surjective,
and $\beta:\mathbb N\to\mathbb N\times\mathbb N$ is bijective. Their
composite is onto: for any class $z$, take a representative $(a,b)$ and the
unique $j$ with $\beta(j)=(a,b)$; then $\pi(\beta(j))=z$. Thus $\mathbb Z$
is at most countable by the surjection criterion in [F7]. Its finite power
$\mathbb Z^d$ is at most countable by [F7] and is nonempty, since it contains
the constant tuple with value $[(0,0)]$ (and for $d=0$ the empty tuple).
The same criterion supplies a surjection $e:\mathbb N\to\mathbb Z^d$.
Put $K_m:=\{e(j):0\le j\le m\}$. These are increasing finite subsets whose
union is $\mathbb Z^d$. For a nonnegative family $(a_k)$ define its sum as
$\lim_m\sum_{k\in K_m}a_k$. Each index is counted once, even if $e$ repeats
values. Every finite subset of $\mathbb Z^d$ is contained in some $K_m$:
choose a preimage index for each of its finitely many elements and take their
maximum. Hence the limit equals the supremum of all finite-subset sums and
is invariant under reindexing. No countable family of choices is required.
Each $\theta\mapsto f((\theta+2\pi k)/\delta)$ is nonnegative Borel.
The finite partial sums over $K_m$ are Borel and increase; for each real $a$,
the strict superlevel set of their limit is the union of their Borel strict
superlevel sets, so the limit is measurable. Reindexing the sum over finite subsets shows
$g_\delta$ is periodic. The translates $Q+2\pi k$, $k\in\mathbb Z^d$, form
a disjoint partition of $\mathbb R^d$. Put
$P_m:=\bigcup_{k\in K_m}(Q+2\pi k)$, so $P_m\uparrow\mathbb R^d$.
Translation invariance [F2] first for indicators, then for simple functions
by [F9] and by monotone convergence [F3] for nonnegative Borel functions, gives the
cellwise integral translations. Monotone convergence [F3] then gives
$$ \int_Qg_\delta(\theta)d\theta=\delta^{-d}\lim_m\sum_{k\in K_m}\int_{Q+2\pi k}f(u/\delta)du=\delta^{-d}\int_{\mathbb R^d}f(u/\delta)du. $$
For the dilation identity, [F2] gives it first for indicators of Borel sets.
For a nonnegative simple function written over disjoint level sets, summing
these indicator identities gives the identity for the simple function by [F9].
By [F8], every nonnegative Borel function is an increasing limit of simple
functions; monotone convergence [F3] therefore extends the dilation identity
to every such function, including $f$. Thus
$$ \int_Qg_\delta(\theta)d\theta=\int_{\mathbb R^d}f(\omega)d\omega<\infty. $$
The measurable set where $g_\delta=\infty$ is null: if it had positive
measure, the integral would be at least $M$ times that measure for every
$M>0$, contradicting finiteness. This set is periodic, so a finite-valued
representative obtained by replacing $g_\delta$ by zero there remains periodic
and defines the same measure. [F2, F3, F7, F8, given, algebra]

2.1 For integer $h$, the identity
$e^{ih\cdot(\theta+2\pi k)}=e^{ih\cdot\theta}$ and the finite mass in step 1.1 permit the same increasing finite-union partition for the absolutely
integrable complex integrand. Translation on each cell, using the integral-
translation identity established in step 1.1 on the nonnegative parts of its
real and imaginary parts, gives
$$ \int_Qe^{ih\cdot\theta}g_\delta(\theta)d\theta=\delta^{-d}\int_{\mathbb R^d}e^{ih\cdot u}f(u/\delta)\,du. $$
To apply dilation to this complex integral, write $e^{ih\cdot u}f(u/\delta)$ as the differences of its nonnegative cosine and sine parts. Apply the nonnegative scaling identity established in step 1.1 to $f(\omega)\max(\cos(\delta h\cdot\omega),0)$, $f(\omega)\max(-\cos(\delta h\cdot\omega),0)$, and the corresponding two sine parts. Each is Borel and bounded by $f$, hence integrable; recombining their integrals yields
$$ \int_Qe^{ih\cdot\theta}g_\delta(\theta)d\theta=\int_{\mathbb R^d}e^{i\delta h\cdot\omega}f(\omega)d\omega=C(\delta h)=c(h). $$
The density defines a finite Borel measure on the torus, Radon by [F5] and [F4]. By [F1] the sample is a stationary lattice field; symmetry of real covariance identifies $\operatorname{Cov}(Y_{j+h},Y_j)$ with $C(\delta h)$. Uniqueness in [F6] identifies that measure with its torus spectrum. The mass identity at $h=0$ is $C(0)$. [F1, F2, F3, F4, F5, F6, step 1.1, algebra]

3.1 Apply [F6] to the sampled spectrum in step 2.1 to obtain the first periodogram expectation identity. Since $\Phi_n$ is periodic, bounded for each fixed $n$, and nonnegative, partitioning the density integral exactly as in step 1.1 gives its second expression over $\mathbb R^d$. That expression integrates a periodic kernel against the original density and does not remove the noncentral translates. [F2, F3, F6, step 1.1, step 2.1, algebra] ∎

## Source notes

Spodarev's finite-grid calculation in Lemma 2.10(b) produces the last periodic-kernel integral. Its subsequent unconditional claim of convergence to the unaliased continuous-space density omits periodization. The local identity supplies the correct target; the alias-free bias result is a separate corollary with an explicit exact condition.
