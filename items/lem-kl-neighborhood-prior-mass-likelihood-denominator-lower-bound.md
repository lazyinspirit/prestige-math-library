---
id: lem-kl-neighborhood-prior-mass-likelihood-denominator-lower-bound
kind: lemma
title: "KL-neighborhood prior mass lower-bounds the likelihood denominator"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-kl-projection-set-and-relative-kl-neighborhoods
  - def-likelihood-tilted-measure-at-kl-projection
  - def-kullback-leibler-divergence
  - def-axiom-of-choice
  - def-probability-measure
  - def-identically-distributed-and-iid-random-variables
  - lem-measurable-functions-preserve-independence
  - thm-kolmogorov-iid-l1-strong-law
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-independent-random-elements-have-product-joint-law
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - def-measure-with-density
  - cor-finite-nonnegative-integral-implies-finite-almost-everywhere
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-fatou-lemma
  - lem-coordinate-maps-and-permutations-are-measurable-on-finite-products
  - def-likelihood-density
proof_strategy: direct
axiom_use: "AC enters through the imported KL and likelihood-density conventions. The jointly measurable density family and KL projection are supplied; the proof makes no further selections."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, Lemma 4.1 proof, pp. 376–377"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, §3.2, Lemma 3.1, pp. 369–370"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
    - title: "B. J. K. Kleijn, Bayesian Statistics for Frequentists, Theorem 5.3.1 proof, pp. 158–160"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/bkleijn-book-work-in-progress-Bayesian_Statistics_for_frequentists-Version-1.0-July-2025.pdf"
---

## Statement

Let $\Pi$ be a prior probability on $\Theta$, let $B_\epsilon$ be the
measurable relative KL neighborhood from
[[def-kl-projection-set-and-relative-kl-neighborhoods]], and suppose
$\Pi(B_\epsilon)>0$. Assume the log likelihood ratios
$\log(p_\theta/p_{\theta^*})$ are $P_0$-integrable for $\Pi$-almost every
$\theta\in B_\epsilon$. For
$$D_n:=\int_\Theta\prod_{i=1}^n \frac{p_\theta(X_i)}{p_{\theta^*}(X_i)}\,\Pi(d\theta),$$
every $\alpha>\epsilon$ satisfies
$$D_n\ge e^{-n\alpha}$$
for all sufficiently large $n$, $P_0$-almost surely. Under the stated
jointly measurable dominated model, $D_n$ is also finite and positive
$P_0^n$-almost surely for each $n$.

## Facts & Assumptions

**Given:** A jointly measurable dominated IID density model, a proper prior
$\Pi$, a finite KL minimum $K^*$, and a measurable set $B_\epsilon$ of
positive prior mass on which $K(\theta)-K^*\le\epsilon$ and the log
likelihood contrast is integrable.

[A1] Assume AC for the imported KL and likelihood-density conventions
[[def-axiom-of-choice]]. All density representatives in the model are
supplied jointly, so no additional selection is made.

[F1] [[def-kl-projection-set-and-relative-kl-neighborhoods]]: on
$B_\epsilon$, $K(\theta)-K^*=-\mathbb E_{P_0}\log(p_\theta/p_{\theta^*})$.

[F2] [[def-kullback-leibler-divergence]]: KL is $+\infty$ unless
$P_0\ll P_\theta$; when finite, its logarithmic Radon–Nikodym integrand is
integrable.

[F3] [[def-likelihood-tilted-measure-at-kl-projection]]: the relative
likelihood is $r_\theta=p_\theta/p_{\theta^*}$ on
$\{p_{\theta^*}>0\}$ and zero on its $P_0$-null complement.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative
jointly measurable functions on sigma-finite product spaces may be
integrated in either order, with measurable section integrals.

[F5] [[thm-kolmogorov-iid-l1-strong-law]]: for IID integrable real
variables, their sample mean tends almost surely to their expectation.

[F6] [[lem-measurable-functions-preserve-independence]]: measurable
coordinatewise functions of an independent family remain independent.

[F7] [[def-probability-measure]]: $P_0$ and $\Pi$ have total mass one.

[F8] [[def-measure-with-density]]: a nonnegative measurable density
integrates to the measure it defines; in particular the supplied model
densities integrate to one.

[F9] [[thm-independent-random-elements-have-product-joint-law]]: the joint
law of a finite independent vector is the product of its coordinate laws.

[F10] [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]: measures
agreeing on a generating pi-system and a finite-measure exhaustion agree
on the generated sigma-algebra.

[F11] [[cor-finite-nonnegative-integral-implies-finite-almost-everywhere]]:
a nonnegative measurable function with finite integral is finite almost
everywhere.

[F12] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]:
arithmetic and lattice operations preserve measurability.

[F13] [[thm-composition-with-borel-functions-preserves-measurability]]:
composition of a measurable function with a Borel function is measurable
when the composition is defined.

[F14] [[thm-fatou-lemma]]: for nonnegative measurable functions,
$\int\liminf_n f_n\,d\Pi\le\liminf_n\int f_n\,d\Pi$.

[F15] [[lem-coordinate-maps-and-permutations-are-measurable-on-finite-products]]:
coordinate maps on a finite product are measurable, so the coordinate
likelihood products are product-measurable.

[F16] [[def-likelihood-density]]: each supplied model density is
nonnegative, measurable, and integrates to one relative to $\mu$.

[F17] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]:
finite products of sigma-finite measures exist, are sigma-finite, and have
the rectangle formula.

## Proof


**Given:** The hypotheses and conventions in the Statement.

1.1 The jointly measurable finite-valued densities and [F12], [F13] make $\{(\theta,x):p_\theta(x)=0\}$ measurable. The density formula gives $P_0\ll P_\theta$ exactly when $\int 1_{\{p_\theta=0\}}p_0\,d\mu=0$; Tonelli [F4] makes this condition measurable in $\theta$. On this measurable set, the extended log-density parts defining $K(\theta)$ are product-measurable and Tonelli makes their section integrals measurable; outside it the KL value is $+\infty$ by [F2]. Thus $\theta\mapsto K(\theta)$ and $B_\epsilon$ are measurable. By [F1], for $\Pi$-almost every $\theta\in B_\epsilon$, $\mathbb E_{P_0}\log\frac{p_\theta(X)}{p_{\theta^*}(X)} =-\bigl(K(\theta)-K^*\bigr)\ge-\epsilon.$ Both KL values are finite on this set, so [F2] makes the log ratio integrable. [A1, F1, F2, F4, F12, F13, given]

1.2 For each fixed $\theta$ in this full-prior subset of $B_\epsilon$, $L_i^\theta:=\log(p_\theta(X_i)/p_{\theta^*}(X_i))$ are IID integrable real variables: the data are IID and [F6] preserves independence under the measurable log-ratio map. By [F5], $\frac1n\sum_{i=1}^n L_i^\theta \longrightarrow-\bigl(K(\theta)-K^*\bigr)\ge-\epsilon \quad P_0^\infty\text{-almost surely}.$ The event of this convergence is jointly measurable in $(\theta,X_1,X_2,\ldots)$. Tonelli [F4] applied to the indicator of its failure, under $\Pi|_{B_\epsilon}\times P_0^\infty$, therefore gives a $P_0^\infty$-full event on which convergence holds for $\Pi$-almost every $\theta\in B_\epsilon$. [F1, F4, F5, F6, F7, given]

1.3 For fixed $n$, the finite product measures $\mu^n$ and $P_0^n$ exist by [F17]. The nonnegative jointly measurable likelihood $\prod_{i=1}^n p_\theta(x_i)$ is product-measurable by [F15] and integrates to one over $\mu^n$ for every $\theta$, by [F16] and repeated integration. Tonelli [F4] therefore gives $\int_{\mathsf X^n}\int_\Theta\prod_{i=1}^n p_\theta(x_i)\, \Pi(d\theta)\,\mu^n(dx_{1:n})=1.$ Let $Z_n(x_{1:n})=\int_\Theta\prod_i p_\theta(x_i)\Pi(d\theta)$. By [F11], $Z_n<\infty$ $\mu^n$-almost everywhere. The sample vector has law $P_0^n$ by [F9]. Its product density relative to $\mu^n$ is $\prod_i p_0(x_i)$: repeated Tonelli gives this density's rectangle formula, and [F10] identifies the resulting measure with $P_0^n$. Therefore $Z_n<\infty$ $P_0^n$-almost surely. [F4, F7, F8, F9, F10, F11, F15, F16, F17, given]

2.1 For $\Pi$-almost every $\theta\in B_\epsilon$, finite KL gives $P_0\ll P_\theta$ by [F2], so $p_\theta(X_i)>0$ almost surely for each coordinate. The coordinate products are measurable by [F15]; Tonelli [F4] applied to the indicator of a zero likelihood shows that, for $P_0^n$-almost every sample, $p_\theta(X_i)>0$ for every $i$ for $\Pi$-almost every $\theta\in B_\epsilon$. Since $\Pi(B_\epsilon)>0$, $Z_n>0$. Finally, $p_{\theta^*}(X_i)$ is finite and positive $P_0$-almost surely, so the relative denominator $D_n$ is finite and positive $P_0^n$-almost surely. [F1, F2, F3, F4, F7, F15, step 1.3, given]

2.2 Fix $\alpha>\epsilon$ and choose $\alpha'$ with $\epsilon<\alpha'<\alpha$. On the event from step 1.2, for $\Pi$-almost every $\theta\in B_\epsilon$ the log likelihood average is eventually greater than $-\alpha'$. Therefore $e^{n\alpha}\prod_{i=1}^n \frac{p_\theta(X_i)}{p_{\theta^*}(X_i)} \ge e^{n(\alpha-\alpha')}\longrightarrow+\infty.$ Fatou's lemma [F14] for the nonnegative integrands gives $\liminf_{n\to\infty}e^{n\alpha}D_n \ge\int_{B_\epsilon}\liminf_{n\to\infty} e^{n\alpha}\prod_{i=1}^n\frac{p_\theta(X_i)}{p_{\theta^*}(X_i)} \,\Pi(d\theta)=+\infty,$ since $\Pi(B_\epsilon)>0$. Hence $D_n\ge e^{-n\alpha}$ eventually. [F14, step 1.2, algebra, choose]

3.1 Steps 1.3–2.2 establish finite-positive evidence, and step 2.2 establishes the eventual exponential lower bound asserted in the Statement. [step 1.3, step 2.1, step 2.2] ∎

## Remarks

The lower bound is relative to the likelihood at the selected
$\theta^*$; it does not require $Q_\theta$ to be a probability measure.
