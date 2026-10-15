---
id: thm-posterior-consistency-at-kl-projection
kind: theorem
title: Posterior consistency at a KL projection
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-identically-distributed-and-iid-random-variables
  - def-metric-space
  - def-probability-measure
  - def-kl-projection-set-and-relative-kl-neighborhoods
  - def-likelihood-tilted-measure-at-kl-projection
  - lem-product-likelihood-tilt-has-product-density
  - lem-kl-neighborhood-prior-mass-likelihood-denominator-lower-bound
  - lem-exponential-test-posterior-splitting-at-kl-projection
  - thm-bayes-formula-for-dominated-kernels
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: AC enters through the imported KL and likelihood-density conventions. The jointly measurable density family is supplied, so the proof makes no further selections.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, §4.1, Lemma 4.1 and Corollary 4.2, pp. 376–379
      url: https://pure.uva.nl/ws/files/1850322/114737_376240.pdf
    - title: B. J. K. Kleijn, Bayesian Statistics for Frequentists, §5.3.1, pp. 158–160
      url: https://staff.fnwi.uva.nl/b.j.k.kleijn/bkleijn-book-work-in-progress-Bayesian_Statistics_for_frequentists-Version-1.0-July-2025.pdf
    - title: R. V. Ramamoorthi, K. Sriram, and R. Martin, On Posterior Concentration in Misspecified Models, §§1–3
      url: https://arxiv.org/pdf/1312.4620
justified_by: []
forward_refs:
  - cex-weak-tilted-tests-do-not-imply-almost-sure-consistency
---

## Statement

Let $(\mathsf X,\mathcal A,\mu)$ be a sample space with a fixed sigma-finite
measure and let $(P_\theta)_{\theta\in\Theta}$ be a dominated experiment
([[def-dominated-statistical-experiment]]). Let $(\Theta,\mathcal T,\rho)$
be a metric parameter space with its Borel sigma-algebra
([[def-metric-space]]) and supplied
finite-valued likelihood densities $p_\theta$
([[def-likelihood-density]]) that are jointly measurable and normalized
relative to $\mu$. Let $P_0$ be a probability measure with supplied density
$p_0$ ([[def-probability-measure]]) and let
$X_1,X_2,\ldots$ be IID with law $P_0$
([[def-identically-distributed-and-iid-random-variables]]). Let $\Pi$ be a
prior probability on $(\Theta,\mathcal T)$ ([[def-probability-measure]]).
Assume AC for the imported directional KL and likelihood-density
conventions. Define
$K(\theta)$, $K^*$, and the nonempty set $\Theta^*$ as in
[[def-kl-projection-set-and-relative-kl-neighborhoods]]. Assume $K^*<\infty$
and, for every $\epsilon>0$, the measurable set
$$\Pi\{\theta:K(\theta)-K^*\le\epsilon\}>0.$$
Fix any selected $\theta^*\in\Theta^*$ and assume that for
$\Pi$-almost every $\theta$ in each such set,
$\log(p_\theta/p_{\theta^*})$ is $P_0$-integrable, as required by the
denominator lemma. Define the likelihood-tilted measures $Q_\theta$ as in
[[def-likelihood-tilted-measure-at-kl-projection]]. Define the posterior by
[[thm-bayes-formula-for-dominated-kernels]] on finite positive evidence
fibres; the denominator lemma below makes those fibres $P_0^n$-almost sure.
For each $n\ge1$, use the product measure $Q_\theta^n$ and its $P_0^n$
density from [[lem-product-likelihood-tilt-has-product-density]].
Assume the test integrals below are well-defined. For every $\eta>0$,
suppose there are
measurable tests $\phi_n:\mathsf X^n\to[0,1]$ and a constant $\beta_\eta>0$ such that
$$\phi_n(X_1,\ldots,X_n)\longrightarrow0\quad P_0^\infty\text{-almost surely},\qquad \sup_{\theta:\,d(\theta,\Theta^*)>\eta} Q_\theta^n(1-\phi_n)\le e^{-n\beta_\eta}$$
for all sufficiently large $n$,
where $d(\theta,\Theta^*)=\inf_{\vartheta\in\Theta^*}\rho(\theta,\vartheta)$.
Then
$$\Pi\{\theta:d(\theta,\Theta^*)>\eta\mid X_1,\ldots,X_n\} \longrightarrow0 \quad P_0^\infty\text{-almost surely}$$
for every fixed $\eta>0$. The type-I expectations need not be summable or exponentially small.

## Facts & Assumptions

**Given:** The jointly measurable dominated IID model, finite KL minimum, nonempty minimizer set, positive prior mass in every relative KL neighborhood, supplied likelihood tilts, and the test hypotheses in the Statement.

[A1] [[def-axiom-of-choice]] supplies the imported KL and likelihood-density conventions; no additional choice of density representatives is made.

[F1] [[lem-kl-neighborhood-prior-mass-likelihood-denominator-lower-bound]] gives finite positive evidence almost surely and the eventual lower bound $D_n\ge e^{-n\alpha}$ for every $\alpha>\epsilon$ on each positive-prior relative KL neighborhood $B_\epsilon$.

[F2] [[lem-exponential-test-posterior-splitting-at-kl-projection]] gives a.s. posterior exclusion of a measurable set $V$ when the type-I statistics vanish a.s. and the uniform type-II bound is $e^{-n\beta}$ with $\beta>\epsilon$.

[F3] [[lem-product-likelihood-tilt-has-product-density]] identifies each product tilt with the relative IID likelihood density; [[thm-bayes-formula-for-dominated-kernels]] defines the posterior on finite positive evidence fibers.

## Proof

**Given:** The hypotheses and notation of the Statement.

1.1 Fix $\eta>0$ and put $V=\{\theta:d(\theta,\Theta^*)>\eta\}$. Distance to a nonempty subset of a metric space is a finite 1-Lipschitz function, since the triangle inequality gives $d(\theta,\Theta^*)\le\rho(\theta,\theta')+d(\theta',\Theta^*)$ and the reversed inequality follows on exchanging the parameters. Thus $V$ is Borel measurable. Choose $0<\epsilon<\beta_\eta$. The relative KL support and log-integrability hypotheses supply $\Pi(B_\epsilon)>0$ and all premises of [F1]. [A1, F1, given, choose, algebra]

2.1 By [F1] and [F3], the posterior and product-test integrals are those required by [F2]. The tests in the Statement have a.s.-vanishing type-I statistics and uniform type-II exponent $\beta_\eta>\epsilon$. Apply [F2] to $V$ to obtain $\Pi(V\mid X_1,\ldots,X_n)\to0$ almost surely. Since $\eta$ was any fixed positive radius, this is the asserted conclusion. [F1, F2, F3, step 1.1, given] ∎

## Remarks

This sufficient test criterion allows a nonunique minimizer set and arbitrary sigma-finite likelihood tilts. Summable type-I expectations imply its a.s. type-I premise, but summability is not required. The original weaker assertion with only both test expectations tending to zero is false for this class, as the explicit counterexample [[cex-weak-tilted-tests-do-not-imply-almost-sure-consistency]] shows. That example satisfies finite relative KL support and has a unique minimizer, yet its posterior leaves every smaller discrete neighborhood infinitely often. The repair therefore retains a sufficient test interface rather than using the invalid weak-test amplification in the cited article's Lemma 3.3.
