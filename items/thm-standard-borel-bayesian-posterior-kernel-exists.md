---
id: thm-standard-borel-bayesian-posterior-kernel-exists
kind: theorem
title: Standard-Borel Bayesian posterior kernel exists
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-bayesian-model-as-prior-and-sampling-kernel
  - def-bayesian-posterior-as-regular-conditional-law
  - cor-posterior-r-c-d-exists-for-standard-borel-parameter
  - def-standard-borel-space
  - def-axiom-of-choice
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measurable-function-between-measurable-spaces
  - def-random-element-and-real-random-variable
  - def-conditional-law-given-a-random-element
  - def-measure-kernel-and-probability-kernel
  - lem-prior-and-model-kernel-define-joint-law
  - lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., Chapter 1 §§1.1–1.3"
      url: https://sites.stat.columbia.edu/gelman/book/BDA3.pdf
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 2"
      url: https://www.bayesrulesbook.com/chapter-2.html
---

## Statement

Assume AC ([[def-axiom-of-choice]]). In a proper Bayesian model, suppose both parameter and data spaces $(\Theta,\mathcal T)$ and $(\mathsf Y,\mathcal Y)$ are standard Borel ([[def-standard-borel-space]]). Let $J$ be the joint prior-predictive law and let $J_Y$ be its data marginal. There is a data-indexed posterior probability kernel $y\mapsto\Pi_y$ such that, for all $A\in\mathcal T$ and $B\in\mathcal Y$,
$$J(A\times B)=\int_B\Pi_y(A)\,J_Y(dy),\qquad J_Y(B)=\int_\Theta K(\theta,B)\,\Pi(d\theta).$$
The composition $\Pi_{Y(\omega)}$ is a posterior RCD. Any two data-indexed posterior kernels agree as probability measures outside one measurable $J_Y$-null set. On any measurable $J_Y$-null set, the conditional-law identities do not select a pointwise value: replacing the kernel there by the prior $\Pi$ preserves the identities.

## Facts & Assumptions

**Given:** A proper Bayesian model, its prior-predictive joint law $J$, the parameter and data coordinate maps $X,Y$, AC, and standard-Borel parameter and data spaces.

[A1] The Axiom of Choice (AC). [[def-axiom-of-choice]]

[F1] The prior and parameter-measurable sampling kernel define the joint probability $J$ and its rectangle law. [[lem-prior-and-model-kernel-define-joint-law]]

[F2] Coordinate projections have measurable inverse images because they are measurable rectangles; a measurable map from a probability space is a random element. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[def-measurable-function-between-measurable-spaces]], [[def-random-element-and-real-random-variable]]

[F3] A posterior RCD exists when the parameter space is standard Borel, with no standard-Borel requirement on the data space. [[cor-posterior-r-c-d-exists-for-standard-borel-parameter]]

[F4] If both random-element targets are standard Borel and AC holds, an RCD of $X$ given $\sigma(Y)$ factors through $Y$ as a probability kernel on the data space. [[lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable]]

[F5] A data-indexed probability kernel is a conditional law precisely when its composition with $Y$ satisfies the conditional event identities. [[def-conditional-law-given-a-random-element]]

[F6] A joint probability on a product of standard-Borel spaces admits a disintegration kernel, unique outside one null set of its second marginal. [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]

## Proof

**Given:** The model and hypotheses in the statement.

1.1 By [F1], $J$ is a probability measure on $(\Theta\times\mathsf Y,\mathcal T\otimes\mathcal Y)$ and $J_Y(B)=J(\Theta\times B)=\int_\Theta K(\theta,B)\,\Pi(d\theta)$. Its coordinate maps $X$ and $Y$ are measurable by [F2]. [given, F1, F2, construct]

2.1 Since $\Theta$ is standard Borel and [A1] holds, [F3] supplies a posterior RCD $L$ of $X$ given $\sigma(Y)$ on the canonical space of step 1.1. [given, A1, F3, step 1.1, choose]

3.1 Both $\Theta$ and $\mathsf Y$ are standard Borel and [A1] holds, so [F4] factors $L$ through $Y$ as a probability kernel $\Pi_y$; hence its evaluations are $\mathcal Y$-measurable and every section is a probability. By [F5], the composition $\Pi_Y$ is a posterior RCD, with rectangle identity $J(A\times B)=\int_B\Pi_y(A)\,J_Y(dy)$. [given, A1, F4, F5, step 2.1]

4.1 Apply [F6] to the same joint probability $J$. It gives uniqueness of the disintegration kernel as a probability measure outside one $J_Y$-null set. Replacing a version on any measurable $J_Y$-null set by the prior $\Pi$ preserves every rectangle identity, as [F5] records. Thus the conditional identities alone do not choose a pointwise value there; each section must still be a probability measure. [F1, F5, F6, step 1.1, step 3.1] ∎
