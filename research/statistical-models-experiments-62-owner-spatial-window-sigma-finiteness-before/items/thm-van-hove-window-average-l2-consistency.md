---
id: thm-van-hove-window-average-l2-consistency
kind: theorem
title: "Unbiasedness and L2 consistency of the spatial window average"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-van-hove-window-sequence
  - def-spatial-window-average
  - def-countable-choice
  - thm-borel-sets-are-lebesgue-measurable
  - thm-lebesgue-measure-is-a-complete-measure
  - def-borel-sigma-algebra
  - def-random-element-and-real-random-variable
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measurable-function-between-measurable-spaces
  - thm-sections-of-product-measurable-functions-are-measurable
  - thm-composition-with-borel-functions-preserves-measurability
  - cor-cauchy-schwarz-for-random-variables
  - def-convergence-in-lp-for-random-variables
  - thm-dominated-convergence
  - def-product-measure-on-sigma-finite-spaces
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - def-random-field-stationarity-covariance-and-variogram
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024), Lemmas 2.2–2.3 and Theorem 2.5"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/mitarbeiter/spodarev/publications/scripts/SpatialStatistics_2024.pdf"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$, as required by
[[def-van-hove-window-sequence]]. Let $X(s)$, $s\in\mathbb R^d$, be a jointly measurable real random field on a
probability space, with constant mean $\mu$ and finite second moments. Assume
it is wide-sense stationary in the explicit sense that
$$\operatorname{Cov}(X(s+h),X(s))=C(h)$$
for all $s,h\in\mathbb R^d$, and that $C\in L^1(\mathbb R^d)$. Let $(W_n)$ be
a Van Hove sequence from [[def-van-hove-window-sequence]]. Then each spatial
window average from [[def-spatial-window-average]] is well-defined, satisfies
$$\mathbb E[\bar X_{W_n}]=\mu,$$
and
$$\mathbb E\bigl[|\bar X_{W_n}-\mu|^2\bigr]\longrightarrow0.$$
Thus these averages are unbiased and converge to the mean in $L^2$. No
variance consistency for any other estimator, weak consistency, or central
limit theorem is asserted.

## Facts & Assumptions

**Given:** $d\ge1$, a probability space $(\Omega,\mathcal F,\mathbb P)$, a
jointly measurable real field $X:\mathbb R^d\times\Omega\to\mathbb R$,
$\mathbb E[X(s)]=\mu$, $\mathbb E[X(s)^2]<\infty$ for every $s$, stationary
covariance $C(t-s)$, $\int_{\mathbb R^d}|C(h)|\,dh<\infty$, and a Van Hove
sequence $(W_n)$.

[A1] [[def-van-hove-window-sequence]]: under $\mathrm{AC}_\omega$,
[[thm-borel-sets-are-lebesgue-measurable]] makes every Borel $W_n$
Lebesgue measurable and [[thm-lebesgue-measure-is-a-complete-measure]]
supplies Lebesgue measure; every $W_n$ has finite positive volume,
$|W_n|\to\infty$, and for each compact $K$,
$|(W_n+K)\setminus W_n|/|W_n|\to0$.

[A2] [[def-spatial-window-average]]: when a sample path is Lebesgue integrable,
$\bar X_{W_n}=|W_n|^{-1}\int_{W_n}X(s)\,ds$.

[F1] [[def-random-field-stationarity-covariance-and-variogram]],
[[def-random-element-and-real-random-variable]], and
[[def-borel-sigma-algebra]]: a field is a family of real random variables on
one probability space; joint measurability is an additional hypothesis for
spatial integration, and wide stationarity supplies a constant mean and
displacement-indexed covariance.

[F2] [[def-moments-variance-and-covariance]]: variance is the expected
centered square and covariance is the expected centered product; symmetry makes
the reverse-lag convention in the Given equivalent to the supplier covariance
convention.

[F3] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]:
expectation is the Lebesgue integral against $\mathbb P$.

[F4] [[cor-cauchy-schwarz-for-random-variables]]: for $U,V\in L^2(\mathbb P)$,
$\mathbb E|UV|\le\|U\|_2\|V\|_2$.

[F5] [[def-product-measure-on-sigma-finite-spaces]] and
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product-
measurable functions can be integrated in either order, and the section
integral is measurable.

[F6] [[def-integrable-real-and-complex-functions-and-their-integrals]] and
[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: absolutely
integrable product-measurable functions have equal iterated and product
integrals.

[F7] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]:
Lebesgue measure is invariant under spatial translations.

[F8] [[def-convergence-in-lp-for-random-variables]]: $L^2$ convergence means
that the $L^2$ norm of the difference tends to zero.

[F9] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]],
[[def-measurable-function-between-measurable-spaces]],
[[thm-sections-of-product-measurable-functions-are-measurable]], and
[[thm-composition-with-borel-functions-preserves-measurability]]: on
$(\mathbb R^d\times\mathbb R^d\times\Omega,
(\mathcal B(\mathbb R^d)\otimes\mathcal B(\mathbb R^d))\otimes\mathcal F)$, the
maps $((s,t),\omega)\mapsto(s,\omega)$ and $((s,t),\omega)\mapsto(t,\omega)$
are measurable because the preimages of generating rectangles $A\times E$
are respectively $(A\times\mathbb R^d)\times E$ and
$(\mathbb R^d\times A)\times E$. Composing with the jointly measurable field
shows that $(s,t,\omega)\mapsto X(s,\omega)$ and
$(s,t,\omega)\mapsto X(t,\omega)$ are measurable, so their centered product
is measurable. Also, $(s,h)\mapsto s+h$ is continuous because
\(\|s+h-(s_0+h_0)\|_2\le\|s-s_0\|_2+\|h-h_0\|_2\). Every open subset
of $\mathbb R^d\times\mathbb R^d$ is a countable union of rational open
rectangles, hence belongs to $\mathcal B(\mathbb R^d)\otimes\mathcal
B(\mathbb R^d)$. Thus inverse images of open sets under addition are
product-measurable, and the class of sets with product-measurable preimage is
a sigma-algebra containing all open sets, hence contains every Borel set.
Therefore addition is measurable for the product sigma-algebra and
$(s,h)\mapsto\mathbf1_{W_n}(s)\mathbf1_{W_n}(s+h)$ is measurable for Borel
$W_n$. Under AC$_\omega$ in [A1], these Borel-measurable functions are also
measurable for the product Lebesgue sigma-algebras used in Tonelli. Since $C$
is Lebesgue measurable by $C\in L^1$, its lift
$(s,h)\mapsto C(h)$ is measurable for the product Lebesgue sigma-algebra:
the preimage of a Lebesgue-measurable set $E$ is $\mathbb R^d\times E$.
Thus $C(h)\mathbf1_{W_n}(s)\mathbf1_{W_n}(s+h)$ is product-measurable as
well.

[F10] [[thm-dominated-convergence]]: pointwise convergence dominated by an
integrable function permits passage of the limit through the integral.

## Proof


**Proof technique:** establish the exact covariance double integral, then use
the Van Hove overlap limit and dominated convergence.

1.1 For every $s$, [F4] with $V=1$ gives $\mathbb E|X(s)|\le(\mathbb E[X(s)^2])^{1/2}=M<\infty$, where $M$ is constant by the stated first- and second-order stationarity. The map $(s,\omega)\mapsto |X(s,\omega)|$ is product-measurable; Tonelli [F5] gives $\mathbb E\int_{W_n}|X(s)|\,ds =\int_{W_n}\mathbb E|X(s)|\,ds\le M|W_n|<\infty.$ Therefore the sample path is absolutely integrable almost surely. Tonelli also makes the event where this integral is finite measurable; its probability is one. Applying Tonelli separately to $X^+$ and $X^-$ makes both section integrals measurable, and their difference on that event, extended by zero on its null complement as in [A2], is measurable. [A2, F1, F3, F4, F5, F9, given]

1.2 Since $\int_{W_n}\mathbb E|X(s)|\,ds<\infty$, Fubini [F6] applies to $X$ on $W_n\times\Omega$. Its constant mean gives $\mathbb E[\bar X_{W_n}]=\frac1{|W_n|}\int_{W_n}\mathbb E[X(s)]\,ds =\frac1{|W_n|}\int_{W_n}\mu\,ds=\mu.$ [A2, F3, F6, given, algebra]

1.3 Put $Z(s):=X(s)-\mu$. The rectangle-preimage argument in [F9] makes $(s,t,\omega)\mapsto Z(s,\omega)Z(t,\omega)$ product-measurable. By [F4], $\mathbb E|Z(s)Z(t)|\le C(0)$ for all $s,t$. Iterated Tonelli [F5] therefore gives a finite integral, at most $C(0)|W_n|^2$, of the absolute pair product over $W_n\times W_n\times\Omega$. Each $\Omega$-section is integrable by this bound, so Fubini [F6] makes $(s,t)\mapsto\mathbb E[Z(s)Z(t)]$ measurable; it equals $C(t-s)$ by [F2]. A second Fubini calculation yields $\mathbb E\bigl[(\bar X_{W_n}-\mu)^2\bigr] =\frac1{|W_n|^2}\int_{W_n}\int_{W_n}C(t-s)\,dt\,ds.$ This also proves $\bar X_{W_n}\in L^2$. [A2, F2, F4, F5, F6, F9, given]

1.4 Define $q_n(h):=|W_n\cap(W_n-h)|/|W_n|$. The addition-measurability argument in [F9] makes $(s,h)\mapsto\mathbf1_{W_n}(s)\mathbf1_{W_n}(s+h)$ product-measurable, so Tonelli [F5] gives measurability of its section integral $q_n$. Also $0\le q_n(h)\le1$. For fixed $h$, translation invariance [F7] gives $|W_n\setminus(W_n-h)|=|(W_n+h)\setminus W_n|.$ The latter is bounded by $|(W_n+\{0,h\})\setminus W_n|$, so the Van Hove condition [A1] implies $q_n(h)\to1$. [A1, F5, F7, F9, algebra]

2.1 The product-measurable integrand $C(h)\mathbf1_{W_n}(s)\mathbf1_{W_n}(s+h)$ is absolutely integrable: Tonelli and [F9] give
$$\int_{\mathbb R^d}\int_{W_n}|C(h)|\mathbf1_{W_n}(s+h)\,ds\,dh\le |W_n|\|C\|_1<\infty.$$
In the inner integral of step 1.3 set $h=t-s$; translation invariance [F7]
gives $\int_{W_n}C(t-s)\,dt=\int_{\mathbb R^d}C(h)\mathbf1_{W_n}(s+h)\,dh$.
Fubini [F6] then yields
$$\mathbb E\bigl[(\bar X_{W_n}-\mu)^2\bigr] =\frac1{|W_n|^2}\int_{\mathbb R^d}C(h)|W_n\cap(W_n-h)|\,dh.$$
The overlap factor is the measure of those $s\in W_n$ for which $s+h\in W_n$.
[step 1.3, F5, F6, F7, F9, algebra]

3.1 Multiplying the formula in step 2.1 by $|W_n|$ gives $|W_n|\,\mathbb E[(\bar X_{W_n}-\mu)^2]=\int_{\mathbb R^d}C(h)q_n(h)\,dh.$ By [F10], the right side converges to $\int C(h)\,dh$ because $|C(h)q_n(h)|\le|C(h)|\in L^1$. It is therefore bounded; since $|W_n|\to\infty$, step 2.1 implies $\mathbb E[(\bar X_{W_n}-\mu)^2]\to0$. [A1, F10, step 2.1, step 1.4, given]

4.1 The mean identity in step 1.2 and the second-moment limit in step 3.1 are exactly $L^2$ convergence to $\mu$ by [F8]. [F8, step 1.2, step 3.1] ∎
