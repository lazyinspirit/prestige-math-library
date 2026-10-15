---
id: thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails
kind: theorem
title: "Conservative coverage of adaptive empirical-Bayes credible balls on polished tails"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-adaptive-empirical-bayes-gaussian-sequence-procedure
  - def-axiom-of-choice
  - def-polished-tail-class-for-gaussian-sequence
  - lem-gaussian-sequence-empirical-bayes-posterior-formula
  - lem-empirical-bayes-maximizer-bracket-on-polished-tails
justified_by: []
proof_strategy: direct
axiom_use: "The probability model inherits AC through the Gaussian sequence procedure. No stronger choice principle is asserted."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Botond Szabó, Aad van der Vaart and Harry van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets, Annals of Statistics 43(4) (2015)"
      url: "https://arxiv.org/pdf/1310.4489v5"
      locator: "Theorem 3.6 and full proof in §5, printed pp. 12–13 and 22–28 (PDF pp. 13–14 and 23–29)."
    - title: "B. T. Knapik, A. W. van der Vaart and J. H. van Zanten, Bayesian inverse problems with Gaussian priors, Annals of Statistics 39(5) (2011)"
      url: "https://research.vu.nl/ws/portalfiles/portal/2619416/276605.pdf"
      locator: "Theorem 4.2 and complete proof in §7.4, printed pp. 2635–2638 (PDF pp. 11–14); fixed-hyperparameter Gaussian credible-ball coverage and bias/spread comparison."
---

## Statement

Use the Gaussian sequence procedure of
[[def-adaptive-empirical-bayes-gaussian-sequence-procedure]] with fixed
$p\ge0$, $C\ge1$, $A>0$, and
$C^{-2}i^{-2p}\le\kappa_i^2\le C^2i^{-2p}$. Fix $L_0\ge1$, $N_0\ge1$,
$\rho\ge2$, and $\gamma\in(0,1)$. Assume that
$\theta_0\in\Theta_{\mathrm{pt}}(L_0,N_0,\rho)$ and
$\theta_{0,1}=0$. Then there is a finite inflation constant $L>0$,
depending only on the fixed model and class parameters, such that
$$ \inf_{\substack{\theta_0\in\Theta_{\mathrm{pt}}(L_0,N_0,\rho)\\ \theta_{0,1}=0}} P_{\theta_0}^{(n)}\{\theta_0\in\widehat C_n(L)\} \longrightarrow1. $$
This is conservative frequentist coverage tending to one, not exact
asymptotic coverage $1-\gamma$. The source also allows a growing
$A=A_n$ provided
$$ A_n\le \frac{\sqrt{\log n}}{4\sqrt{\log(\rho\vee e)}}. $$
In that case a slowly varying inflation sequence is required; the source
allows $L_n\lesssim(3\rho^{3(1+2p)})^{A_n}$.

## Escalation record

**Given:** AC, the source-specific Gaussian sequence model, the fixed
polished-tail class, a measurable marginal-likelihood maximizer, and
$\theta_{0,1}=0$.

**Escalated proof gap:** This item has no completed local proof. The source
route first needs the maximizer-bracketing result
[[lem-empirical-bayes-maximizer-bracket-on-polished-tails]], then proves
uniform lower and upper bounds for the posterior radius, posterior-mean
bias, and centered posterior-mean noise. The first local supplier remains
unproved; the complete theorem argument is therefore withheld from
readiness.

## Remarks

The controlling track design omits the source's hypothesis
$\theta_{0,1}=0$. In the source model, the marginal likelihood's first
coordinate contribution is independent of $\alpha$, while the posterior
mean's first-coordinate bias is not. A uniform theorem over all
$\theta_0\in\Theta_{\mathrm{pt}}$ is therefore not justified by Theorem 3.6
as cited. The exact conflict and proposed owner options are recorded in the
batch-21 notes.
