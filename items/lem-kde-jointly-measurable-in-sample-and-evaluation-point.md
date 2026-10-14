---
id: lem-kde-jointly-measurable-in-sample-and-evaluation-point
kind: lemma
title: "The KDE is jointly measurable in sample and evaluation point"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-density-target-and-kernel-density-estimator
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT OpenCourseWare 14.385, Fall 2007, PDF pp. 1–3"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Adrian Bowman and Ludger Evers, Nonparametric Smoothing, APTS 2013–14 course notes, §1.2, PDF pp. 6–7"
      url: "https://warwick.ac.uk/fac/sci/statistics/apts/students/resources-1314/ns_notes.pdf"
---

## Statement

For a Borel normalized kernel $K$, $h>0$ and $n\ge1$, the map
$$Q_h:(\mathbb R^d)^n\times\mathbb R^d\to\mathbb R,\qquad (z_1,\ldots,z_n,x)\mapsto\frac1{nh^d}\sum_{i=1}^n K\!\left(\frac{x-z_i}{h}\right)$$
is Borel measurable for the finite product Borel sigma-algebra.

## Facts & Assumptions

**Given:** A Borel normalized kernel $K$, $h>0$, $n\ge1$, and the finite
product Borel data and evaluation spaces.

[F1] The sample space carries the finite product Borel sigma-algebra, and $K$
is Borel ([[def-density-target-and-kernel-density-estimator]],
[[def-product-sigma-algebra-and-finite-product-sigma-algebras]]).

[F2] Composition of measurable maps is measurable
([[thm-composition-with-borel-functions-preserves-measurability]]).

[F3] Scalar multiples and finite sums of real measurable functions are
measurable ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

[F4] For positive integers $a,b$, $\mathcal B(\mathbb R^a)\otimes\mathcal B(\mathbb R^b)=\mathcal B(\mathbb R^{a+b})$ under the coordinate identification ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]).

## Proof


1.1 Induct on the number of factors using the finite product recursion in [F1] and the two-factor equality [F4]. Starting with $\mathcal B(\mathbb R^d)$, this identifies the specified $(n+1)$-factor sigma-algebra with $\mathcal B(\mathbb R^{(n+1)d})$. For each $i$, the affine map $(z_1,\ldots,z_n,x)\mapsto(x-z_i)/h$ is continuous on this Euclidean space: inverse images of open sets are open, hence inverse images of Borel sets are Borel by closure under complements and countable unions. It is therefore measurable for the specified product sigma-algebra. Composing with the Borel map $K$ gives a measurable real function by [F2]. [given, F1, F2, F4]

2.1 Applying [F3] to the finite sum of these functions and multiplying by the constant $(nh^d)^{-1}$ proves that $Q_h$ is Borel measurable. [step 1.1, F3] ∎

