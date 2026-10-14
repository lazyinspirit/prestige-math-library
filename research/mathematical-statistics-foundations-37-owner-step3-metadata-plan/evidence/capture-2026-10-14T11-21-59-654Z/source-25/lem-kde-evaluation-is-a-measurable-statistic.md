---
id: lem-kde-evaluation-is-a-measurable-statistic
kind: lemma
title: "Each fixed-point KDE evaluation is a statistic"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-density-target-and-kernel-density-estimator
  - def-statistic-and-estimator
  - def-measurable-function-between-measurable-spaces
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT OpenCourseWare 14.385, Fall 2007, PDF pp. 1–3"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Adrian Bowman and Ludger Evers, Nonparametric Smoothing, APTS 2013–14 course notes, §1.2, PDF pp. 6–7"
      url: "https://warwick.ac.uk/fac/sci/statistics/apts/students/resources-1314/ns_notes.pdf"
---

## Statement

Fix $x\in\mathbb R^d$, $h>0$, $n\ge1$, and a Borel normalized kernel $K$.
The evaluation map
$$T_x:(\mathbb R^d)^n\to\mathbb R,\qquad (z_1,\ldots,z_n)\mapsto\frac1{nh^d}\sum_{i=1}^nK\!\left(\frac{x-z_i}{h}\right)$$
is measurable for the finite product Borel sigma-algebra. Hence it is a
statistic on the iid density experiment.

## Facts & Assumptions

**Given:** Fixed $x\in\mathbb R^d$, $h>0$, $n\ge1$, and a Borel normalized kernel $K$.

[F1] The sample space is the finite product Borel space and $K$ is Borel ([[def-density-target-and-kernel-density-estimator]]).

[F2] A statistic is a measurable map from the experiment's data space to its measurable target ([[def-statistic-and-estimator]], [[def-measurable-function-between-measurable-spaces]]).

[F3] Compositions of measurable maps are measurable ([[thm-composition-with-borel-functions-preserves-measurability]]).

[F4] Finite sums and scalar multiples of real measurable functions are measurable ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

## Proof


1.1 Each coordinate projection $\pi_i:(\mathbb R^d)^n\to\mathbb R^d$ is measurable by the definition of the finite product sigma-algebra. The map $z\mapsto(x-z)/h$ is continuous, hence Borel; composing it with $\pi_i$ and then with $K$ gives a real measurable function on the sample space by [F1] and [F3]. [given, F1, F3]

2.1 By [F4], the finite sum of these functions and its scalar multiple $(nh^d)^{-1}$ are measurable. This is exactly $T_x$, so [F2] makes it a statistic with target $\mathbb R$. Since the estimand $\psi_x$ also has target space $\mathbb R$, $T_x$ is an estimator of $\psi_x$. [step 1.1, F2, F4] ∎

