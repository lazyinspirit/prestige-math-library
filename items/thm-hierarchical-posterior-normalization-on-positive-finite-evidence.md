---
id: thm-hierarchical-posterior-normalization-on-positive-finite-evidence
kind: theorem
title: "Hierarchical posterior normalization on positive finite evidence"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-hierarchical-bayesian-model
  - lem-finite-products-of-dominated-kernels-have-product-density
  - thm-bayes-formula-for-dominated-kernels
  - lem-prior-and-model-kernel-define-joint-law
justified_by: []
proof_strategy: direct
axiom_use: "The dominated-kernel normalization is choice-free. The model's conditional-independence vocabulary carries AC only through its stated definition; the formula proof does not use that axiom."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., §§5.2–5.3"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 5, §§5.2–5.3, printed pp. 107–111: the full joint posterior and its conditional and marginal factors."
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 16"
      url: "https://www.bayesrulesbook.com/chapter-16.html"
      locator: "Chapter 16, §§16.3–16.4: the hierarchical model's prior layers and full posterior analysis."
---

## Statement

Assume the finite-group hierarchical model of
[[def-hierarchical-bayesian-model]]. Write $P_0$ for its proper prior on
$\Xi=H\times\Theta^m$, let $L_y(\xi)$ be its specified product likelihood
density with respect to the finite product measure $\nu$, and define
$$Z(y)=\int_\Xi L_y(\xi)\,P_0(d\xi).$$
For every observation $y$ with $0<Z(y)<\infty$, the measure
$$P_y(A)=\frac{\int_A L_y(\xi)\,P_0(d\xi)}{Z(y)}\qquad(A\in\mathcal H\otimes\mathcal T^{\otimes m})$$
is the joint posterior law of the latent tuple. Defining $P_y=P_0$ when
$Z(y)=0$ or $Z(y)=\infty$ gives a regular conditional distribution under the
prior-predictive law; no quotient is formed on either exceptional fiber.

## Facts & Assumptions

**Given:** A proper hyperprior, finite product group and observation kernels, and their specified jointly measurable likelihood densities.

[F1] The finite-group model defines a proper latent prior $P_0$ and the product observation kernel with likelihood section $L_y$. [[def-hierarchical-bayesian-model]]

[F2] The finite product of the group observation kernels has jointly measurable product density $L(\xi,y)=\prod_j f_j(\theta_j,y_j)$ relative to the sigma-finite product measure $\nu$. [[lem-finite-products-of-dominated-kernels-have-product-density]]

[F3] A proper prior and probability model kernel define a joint probability law with the corresponding iterated-integral identity. [[lem-prior-and-model-kernel-define-joint-law]]

[F4] For a proper prior and a dominated probability kernel with a specified jointly measurable density, the posterior kernel is the normalized density on $0<m(y)<\infty$ fibers and uses the prior as filler on zero or infinite normalizer fibers. [[thm-bayes-formula-for-dominated-kernels]]

## Proof

**Proof technique:** identify the finite product likelihood density and apply the dominated-kernel Bayes formula.

**Given:** The hypotheses in the Statement.

1.1 By [F1] and [F3], the latent prior $P_0$ is a probability measure and the model kernel gives a joint probability law for the latent tuple and the observations. By [F2], that observation kernel is dominated by the sigma-finite product measure $\nu$ with the specified jointly measurable density $L(\xi,y)=\prod_j f_j(\theta_j,y_j)$. Thus all hypotheses of [F4] apply with prior $P_0$ and likelihood density $L$. [F1, F2, F3, F4, given]

2.1 The resulting evidence is $m(y)=\int_\Xi L_y(\xi)P_0(d\xi)=Z(y)$. On every fiber with $0<Z(y)<\infty$, [F4] gives the probability measure $P_y(A)=Z(y)^{-1}\int_A L_y\,dP_0$ and the conditional-event identities. On fibers with zero or infinite evidence [F4] uses the probability filler $P_0$, so its kernel remains a regular conditional distribution there without dividing by zero or infinity. The same theorem says these filled fibers have prior-predictive measure zero. [F4, step 1.1] ∎
