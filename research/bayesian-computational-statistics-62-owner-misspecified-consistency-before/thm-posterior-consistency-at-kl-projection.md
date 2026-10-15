---
id: thm-posterior-consistency-at-kl-projection
kind: theorem
title: "Posterior consistency at a KL projection"
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
provenance:
  statement: literature-derived
  proof: not-supplied
axiom_use: "AC enters through the imported KL and likelihood-density conventions. The jointly measurable density family is supplied, so the proof makes no further selections."
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, §4.1, Lemma 4.1 and Corollary 4.2, pp. 376–379"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
    - title: "B. J. K. Kleijn, Bayesian Statistics for Frequentists, §5.3.1, pp. 158–160"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/bkleijn-book-work-in-progress-Bayesian_Statistics_for_frequentists-Version-1.0-July-2025.pdf"
    - title: "R. V. Ramamoorthi, K. Sriram, and R. Martin, On Posterior Concentration in Misspecified Models, §§1–3"
      url: "https://arxiv.org/pdf/1312.4620"
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
measurable tests $\phi_n:\mathsf X^n\to[0,1]$ such that
$$P_0^n\phi_n\longrightarrow0,\qquad \sup_{\theta:\,d(\theta,\Theta^*)>\eta} Q_\theta^n(1-\phi_n)\longrightarrow0,$$
where $d(\theta,\Theta^*)=\inf_{\vartheta\in\Theta^*}\rho(\theta,\vartheta)$.
Then
$$\Pi\{\theta:d(\theta,\Theta^*)>\eta\mid X_1,\ldots,X_n\} \longrightarrow0 \quad P_0^\infty\text{-almost surely}$$
for every fixed $\eta>0$. The two test-error limits need not be summable.

## Remarks

The claim is retained at the planned scope, including a possibly nonunique
minimizer set, likelihood tilts that are not probability laws, and test
errors that only tend to zero. Its proof is escalated: the local
exponential-test splitting lemma is complete, but I have not verified a
complete argument upgrading the stated weak test limits to exponential
bounds for these possibly unnormalized likelihood tilts. The exact issue and
the source steps requiring owner reconciliation are recorded in
research/bayesian-computational-statistics-62-batch-12.notes.md.

The primary article's Corollary 4.2 prints a limit of $1$ for posterior mass
outside the KL-minimizer neighborhood. Its Corollary 4.1, applied to that
outside set, gives limit $0$; this Statement uses the logically consistent
value $0$ and the controlling plan.
