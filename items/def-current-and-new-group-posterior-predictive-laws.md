---
id: def-current-and-new-group-posterior-predictive-laws
kind: definition
title: "Current-group and new-group posterior prediction"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-hierarchical-bayesian-model
  - thm-hierarchical-posterior-normalization-on-positive-finite-evidence
  - thm-measurability-of-integration-against-a-kernel
  - thm-conditional-integration-through-a-regular-conditional-law
  - def-axiom-of-choice
justified_by: []
proof_strategy: definition
axiom_use: "The kernel mixtures are choice-free. AC is inherited only through the conditional-expectation-class interpretation in the cited regular-conditional integration result."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., §5.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 5, §5.4, printed p. 118: future observations for a current group versus future groups drawn from the population distribution."
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 16, §16.5"
      url: "https://www.bayesrulesbook.com/chapter-16.html"
      locator: "Chapter 16, §16.5: predictive distributions for an observed artist and an unobserved new artist."
---

## Definition

Let $\mathcal Y=\prod_{j=1}^m\mathcal Y_j$ be the data space and
$\mathcal Y_+=\{y\in\mathcal Y:0<Z(y)<\infty\}$ its measurable subset of
positive finite evidence fibers. Write $P_y$ for the full latent probability
kernel supplied by
[[thm-hierarchical-posterior-normalization-on-positive-finite-evidence]], and
set $\Lambda_y:=P_y$ for every $y\in\mathcal Y$. On $\mathcal Y_+$ this is
the normalized joint posterior; off $\mathcal Y_+$ it is the prior filler
$P_0$, so no likelihood quotient is formed there. For an already observed
group $j$, its **current-group posterior predictive law** for a future
observation with the same conditional observation kernel is
$$Q^{\mathrm{cur}}_{j,y}(A)=\int_\Xi K_j(\theta_j,A)\,\Lambda_y(d\eta,d\theta_1\cdots d\theta_m).$$

For a new group, specify a probability kernel $K_{\mathrm{new}}$ from
$(\Theta,\mathcal T)$ to a future observation space
$(\widetilde{\mathcal Y},\widetilde{\mathcal A})$. Its **new-group posterior
predictive law** is
$$Q^{\mathrm{new}}_y(A)=\int_\Xi\left[\int_\Theta K_{\mathrm{new}}(\theta,A)\,G_\eta(d\theta)\right]\,\Lambda_y(d\eta,d\theta_1\cdots d\theta_m).$$
For $y\in\mathcal Y_+$, if $\Lambda_y^\eta$ denotes the hyperparameter
marginal of $\Lambda_y$, the joint posterior law of
$(\eta,\theta_{\mathrm{new}})$ used here is
$\Lambda_y^\eta(d\eta)G_\eta(d\theta_{\mathrm{new}})$. Thus the new-group
prediction first draws a new latent parameter from $G_\eta$ and then draws its
observation from $K_{\mathrm{new}}$. On $\mathcal Y_+$ both formulas average
over the joint posterior and retain uncertainty about unknown hyperparameters.
On exceptional fibers they reduce to prior-predictive laws because
$\Lambda_y=P_0$.
