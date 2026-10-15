---
id: thm-current-and-new-group-posterior-predictive-laws-are-probability-kernels
kind: theorem
title: "Current-group and new-group posterior predictions are probability kernels"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-current-and-new-group-posterior-predictive-laws
  - def-hierarchical-bayesian-model
  - thm-hierarchical-posterior-normalization-on-positive-finite-evidence
  - thm-measurability-of-integration-against-a-kernel
  - thm-conditional-integration-through-a-regular-conditional-law
  - thm-monotone-convergence-for-the-integral
  - def-measure-kernel-and-probability-kernel
  - lem-prior-and-model-kernel-define-joint-law
  - lem-finite-products-of-probability-kernels
justified_by: []
proof_strategy: direct
axiom_use: "The sectionwise probability-kernel, measurability, and conditional-event checks are choice-free; no choice axiom is used by this proof."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., §5.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 5, §5.4, printed p. 118: separate posterior predictive constructions for current and future groups."
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 16, §16.5"
      url: "https://www.bayesrulesbook.com/chapter-16.html"
      locator: "Chapter 16, §16.5, lines 467–545: current-group prediction conditions on its posterior mean, while new-group prediction first samples a population mean."
---

## Statement

Under [[def-hierarchical-bayesian-model]], the current-group and new-group
predictive assignments of
[[def-current-and-new-group-posterior-predictive-laws]] are probability
kernels on the full data space $\mathcal Y$. On every positive finite evidence
fiber they are the stated posterior-predictive laws. On zero or infinite
evidence fibers, the posterior kernel uses its prior filler, so the predictions
are the corresponding prior-predictive laws. When a future current-group
observation is drawn from $K_j$ conditional on the latent tuple, or a future
new-group parameter is first drawn from $G_\eta$ and then observed from
$K_{\mathrm{new}}$, these kernels are conditional laws of the future
observations given the observed data. This is a posterior-predictive statement
under the specified model, not a frequentist coverage claim.

## Facts & Assumptions

**Given:** A proper hierarchical model, its posterior kernel on $\mathcal Y_+$, and the future observation kernels specified in the predictive definition.

[F1] For every $y\in\mathcal Y$, $P_y$ is a probability measure and conditional law of the latent tuple; it is the normalized posterior on positive finite evidence fibers and equals $P_0$ on zero or infinite evidence fibers. The evidence-positive set is measurable and has prior-predictive probability one. [[thm-hierarchical-posterior-normalization-on-positive-finite-evidence]]

[F2] $G_\eta$, each current-group $K_j(\theta_j,\cdot)$, and $K_{\mathrm{new}}(\theta,\cdot)$ are probability kernels. [[def-hierarchical-bayesian-model]], [[def-current-and-new-group-posterior-predictive-laws]]

[F3] Integrating a nonnegative measurable function against a kernel gives a measurable function. [[thm-measurability-of-integration-against-a-kernel]]

[F4] Increasing nonnegative limits pass through integrals. [[thm-monotone-convergence-for-the-integral]]

[F5] Integrating a nonnegative measurable function against a regular conditional law gives the conditional integral on every conditioning event. [[thm-conditional-integration-through-a-regular-conditional-law]]

[F6] A proper prior and a probability model kernel define a joint probability law with the iterated-integral identity. [[lem-prior-and-model-kernel-define-joint-law]]

[F7] The finite product of probability kernels with a common source is a probability kernel. [[lem-finite-products-of-probability-kernels]]

## Proof

**Proof technique:** verify probability-kernel mixture properties, then check the conditional-event identity for a future draw.

**Given:** The hypotheses in the Statement.

1.1 Fix a current group $j$ and $y\in\mathcal Y$. For each measurable future-event set $A$, the formula $Q^{\mathrm{cur}}_{j,y}(A)=\int K_j(\theta_j,A)\,P_y(d\xi)$ gives zero on $A=\varnothing$ and one on the full observation space by [F1] and [F2]. If $(A_k)_{k\ge0}$ are disjoint, then $K_j(\theta_j,\bigcup_kA_k)=\lim_N\sum_{k\le N}K_j(\theta_j,A_k)$; [F4] passes this increasing limit through the $P_y$ integral and gives countable additivity. The integrand is measurable in $\xi$ by the kernel definition and coordinate projection, so [F3] makes $y\mapsto Q^{\mathrm{cur}}_{j,y}(A)$ measurable against the posterior kernel $y\mapsto P_y$. Thus each $Q^{\mathrm{cur}}_j$ is a probability kernel on $\mathcal Y$. [F1, F2, F3, F4, given]

1.2 For a new group, define $R_\eta(A)=\int K_{\mathrm{new}}(\theta,A)G_\eta(d\theta)$. The empty-set and whole-space evaluations are zero and one. For disjoint $(A_k)$, countable additivity of each $K_{\mathrm{new}}(\theta,\cdot)$ and [F4] pass the increasing partial sums through the $G_\eta$ integral; hence $R_\eta$ is a probability measure. [F3] makes $\eta\mapsto R_\eta(A)$ measurable, so $R$ is a probability kernel. Mixing $R_\eta(A)$ over $P_y$ through the measurable coordinate $\eta$ and repeating the countable-additivity argument shows that $Q^{\mathrm{new}}_y(A)$ is a probability measure and [F3] makes its evaluations measurable in $y$. Its integral through the marginal $P_y^\eta$ is the same iterated-kernel law. [F1, F2, F3, F4]

2.1 For either prediction let $H(\xi,A)$ be its conditional future-event probability given the latent tuple: $K_j(\theta_j,A)$ for a current group, or $R_\eta(A)$ for a new group. Steps 1.1–1.2 make $H$ a probability kernel. By [F7], the product of the observation kernel and this future kernel is a probability kernel from $\Xi$ to the product of data and future-observation spaces; applying [F6] with prior $P_0$ gives a joint probability law on $(\xi,Y,\widetilde Y)$. Because every section of $H$ has total mass one, marginalizing out $\widetilde Y$ leaves the original joint law of $(\xi,Y)$, so [F1] still supplies its posterior conditional law $P_y$. For data event $B$ and future event $A$, the triple law gives $P(Y\in B,\widetilde Y\in A)=E[1_{\{Y\in B\}}H(\xi,A)]$. Applying the event identity in [F5] to $H(\xi,A)$ turns the right side into $\int_B\int H(\xi,A)\,P_y(d\xi)\,P_Y(dy)=\int_B Q_y(A)\,P_Y(dy)$. This verifies the conditional-event identity for every data event $B$ and proves that both full-data kernels are the conditional laws of the future observations. Since $P_y=P_0$ off $\mathcal Y_+$, their exceptional-fiber predictions are the prior-predictive laws. [F1, F5, F6, F7, step 1.1, step 1.2] ∎
