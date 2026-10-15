---
id: lem-langevin-gaussian-proposal-kernel
kind: lemma
title: The ULA Gaussian proposal is a probability kernel with a positive density
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-unadjusted-langevin-algorithm
  - def-axiom-of-choice
  - def-borel-and-lebesgue-measurable-function-on-rn
  - def-borel-sigma-algebra
  - def-countable-choice
  - def-finite-sigma-finite-and-semifinite-measures
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-measure-kernel-and-probability-kernel
  - def-multivariate-normal-law
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - cor-continuous-functions-are-borel-measurable
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-measurability-of-integration-against-a-kernel
  - thm-nondegenerate-multivariate-normal-law-has-density
proof_strategy: direct
axiom_use: "AC is inherited through the normal law and its density theorem. The kernel-measurability argument uses only the displayed countable exhaustion of Lebesgue measure."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alain Durmus and Éric Moulines, Non-asymptotic convergence analysis for the Unadjusted Langevin Algorithm, §1, equation (2)"
      url: "https://arxiv.org/pdf/1507.05021v3"
    - title: "Gautam Iyer, Lecture 20: Langevin Monte Carlo, course notes, §3"
      url: "https://geometrycollective.github.io/monte-carlo/notes/Lecture20/Lecture20.pdf"
---

## Statement

Assume AC and the hypotheses of [[alg-unadjusted-langevin-algorithm]]. For
$\gamma>0$, its proposal family $Q_\gamma$ is a probability kernel on
$\mathbb R^d$ and has the everywhere positive finite jointly continuous
Lebesgue density
$$q_\gamma(y\mid x)=(4\pi\gamma)^{-d/2}\exp\!\left(-\frac{\|y-x+\gamma\nabla U(x)\|^2}{4\gamma}\right).$$

## Facts & Assumptions

**Given:** AC, a finite $d\ge1$, $U\in C^1(\mathbb R^d)$, $\gamma>0$, and
the proposal in [[alg-unadjusted-langevin-algorithm]].

[A1] AC holds as required by the algorithm and multivariate normal law. [[def-axiom-of-choice]] [[alg-unadjusted-langevin-algorithm]]

[F1] For positive-definite covariance, $N_d(m,\Sigma)$ has the displayed Gaussian Lebesgue density. [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F2] $N_d(m,\Sigma)$ is a probability law when $\Sigma$ is symmetric positive semidefinite; its coordinates and projections follow the multivariate-normal convention. [[def-multivariate-normal-law]]

[F3] The definition of a probability kernel requires each section to be a probability measure and each evaluation on a Borel set to be measurable in the starting point. [[def-measure-kernel-and-probability-kernel]]

[F4] Integration of a nonnegative product-measurable function against a uniformly sigma-finite kernel is measurable in the starting point. [[thm-measurability-of-integration-against-a-kernel]]

[F5] Lebesgue measure on $\mathbb R^d$ is sigma-finite in the sense of [[def-finite-sigma-finite-and-semifinite-measures]], with finite mass on bounded boxes. [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] [[def-finite-sigma-finite-and-semifinite-measures]] [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]

[F6] AC implies countable choice, which is the hypothesis of the continuous-map measurability result. [[lem-ac-supplies-sequential-choices-for-probability-constructions]] [[def-countable-choice]]

[F7] A continuous Euclidean map is Borel measurable in the sense of [[def-borel-and-lebesgue-measurable-function-on-rn]], under countable choice. [[cor-continuous-functions-are-borel-measurable]] [[def-borel-and-lebesgue-measurable-function-on-rn]]

[F8] The Borel sigma-algebra [[def-borel-sigma-algebra]] of $\mathbb R^{2d}$ is the product of the two Borel sigma-algebras on $\mathbb R^d$. [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]

## Proof

**Given:** The hypotheses and conventions above.

1.1 The covariance $2\gamma I_d$ is symmetric positive definite. By [F2], the transition law in [[alg-unadjusted-langevin-algorithm]] is a probability measure for each $x$. Applying [F1] with $m=x-\gamma\nabla U(x)$ gives the displayed density; its normalizing factor is finite and positive because $\gamma>0$. [A1, F1, F2, given]

2.1 The map $(x,y)\mapsto x-y+\gamma\nabla U(x)$ is continuous, so the displayed $q_\gamma(y\mid x)$ is Borel on $\mathbb R^{2d}$ by [F7], hence product-measurable by [F8]. For a Borel set $A$, the constant kernel $K(x,B)=\lambda_d(B)$ is uniformly sigma-finite: $[-n,n]^d$ exhausts $\mathbb R^d$ and has finite Lebesgue measure by [F5]. Applying [F4] to $f(x,y)=\mathbf1_A(y)q_\gamma(y\mid x)$ gives measurability of $x\mapsto\int_Aq_\gamma(y\mid x)\,dy=Q_\gamma(x,A)$. Together with step 1.1 this is exactly [F3], so $Q_\gamma$ is a probability kernel. [F3, F4, F5, F6, F7, F8, step 1.1] ∎