---
id: alg-laplace-mechanism
kind: algorithm
title: Laplace mechanism
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-differential-privacy-and-adjacency
  - def-global-l1-sensitivity
  - def-laplace-distribution
  - lem-finite-products-of-probability-kernels
  - def-countable-choice
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
  - def-borel-sigma-algebra
  - cor-continuous-functions-are-borel-measurable
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: Countable Choice is inherited from the real Laplace probability law; finite product formation uses no stronger choice principle.
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Definition

Assume Countable Choice. Let $\mathcal D$ be the finite-support count functions on a nonempty record universe, with neighbors formed by adding or removing one record occurrence. Input a database $D\in\mathcal D$, a finite-dimensional query $f:\mathcal D\to\mathbb R^d$ with finite global $L^1$ sensitivity $\Delta_1 f$, and a parameter $\varepsilon>0$. If $\Delta_1 f>0$, draw $Z$ from the finite product law $\operatorname{Lap}(\Delta_1 f/\varepsilon)^{\otimes d}$ and release $f(D)+Z$. If $\Delta_1 f=0$, release $f(D)$ deterministically. The output space is $\mathbb R^d$ with its Borel sigma-algebra. Equivalently, for each Borel event $A$, the output kernel is $K(D,A)=\int\mathbf1_A(f(D)+z)\operatorname{Lap}(\Delta_1f/\varepsilon)^{\otimes d}(dz)$ when $\Delta_1f>0$, and $K(D,A)=\mathbf1_A(f(D))$ when $\Delta_1f=0$.

## Definition references

[[def-global-l1-sensitivity|Finite-dimensional query sensitivity]]

[[def-laplace-distribution|The scalar Laplace probability law]]

[[lem-laplace-product-density|The finite independent-coordinate Laplace law]]

[[def-measure-kernel-and-probability-kernel|The probability-kernel conditions for a randomized mechanism]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Definition 3.3 and Theorem 3.6, printed p. 32.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §1.5, PDF pp. 7–8.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** A database $D$, finite integer $d\ge1$, measurable query $f:\mathcal D\to\mathbb R^d$, finite $\Delta_1 f\ge0$, and $\varepsilon>0$.

[F1] [[def-differential-privacy-and-adjacency|Database domain]] has the power-set sigma-algebra, so every function out of $\mathcal D$ is measurable.

[A1] [[def-countable-choice|Countable Choice]] is assumed through the real-valued Laplace law supplier; the finite product adds no stronger choice requirement.

[F2] [[def-global-l1-sensitivity|Global sensitivity]] is a finite attained maximum over the add/remove neighboring pairs.

[F3] [[def-laplace-distribution|Laplace law]] is a probability measure on $\mathbb R$ for every scale $b\ge0$.

[F4] [[lem-finite-products-of-probability-kernels|Finite products]] of probability kernels are probability kernels and have the rectangle product law.

[F5] [[def-borel-sigma-algebra|Borel sigma-algebra]] on $\mathbb R^d$ is the output measurable structure; translations are homeomorphisms and carry Borel sets to Borel sets.

[F7] [[cor-continuous-functions-are-borel-measurable|Continuous maps between Borel spaces are measurable]]; the inverse translation therefore pulls Borel sets back to Borel sets.

[F6] [[def-measure-kernel-and-probability-kernel|Probability-kernel conditions]] require probability-measure sections and measurable evaluation at each output event.

## Verification

1.1 By [F2], $\Delta_1 f$ is finite and nonnegative, so the zero and positive branches cover every allowed input; if $\Delta_1 f>0$, the scale $b=\Delta_1 f/\varepsilon$ is positive. By [A1], [F3], and [F4], the noise vector has a probability law $\nu=\operatorname{Lap}(b)^{\otimes d}$. For each database $D$, define the output law as the pushforward of $\nu$ under $z\mapsto f(D)+z$; the inverse translation is continuous, so [F7] makes the preimage of every Borel set Borel and this is a probability measure. [A1, F1, F2, F3, F4, F5, F7, given, construct]

2.1 If $\Delta_1 f=0$, assign the point mass at $f(D)$, which is a probability measure on the Borel output space. For either branch and each Borel event $A$, the evaluation $D\mapsto K(D,A)$ is measurable because every subset of the database domain is measurable by [F1]. Thus the assignment is a probability kernel as required by [F6]. [F1, F5, F6, step 1.1, given] ∎
