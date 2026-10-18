---
id: ex-it-gaussian-distortion-waterline
kind: example
title: "Finite Gaussian-vector distortion waterline"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - lem-it-finite-vector-gaussian-water-level-allocation
  - thm-it-gaussian-vector-squared-error-rate-distortion
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC is assumed by the finite-dimensional Gaussian vector theorem."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed."
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "§10.3.3, Theorem 10.3.3, printed pp. 312–314: vector Gaussian water-filling example."
---

## Statement

Let \(X_1\sim N(0,4)\) and \(X_2\sim N(0,1)\) be independent, and use total squared-error budget \(D=5/2\). The water level is \(\theta=3/2\), the optimal coordinate distortions are \((3/2,1)\), and the information rate is \(\frac12\log_2(8/3)\) bits per vector. An attaining reconstruction is \(Y_1=\sqrt{5/2}U\), \(Y_2=0\), where \(X_1=\sqrt{5/2}U+\sqrt{3/2}V\) for independent standard normals \(U,V\).

## Facts & Assumptions

**Given:** Independent centered Gaussian coordinates of variances 4 and 1, squared-error budget \(5/2\), and AC.

[F1] [[lem-it-finite-vector-gaussian-water-level-allocation]]: the optimum allocates \(\min(\lambda_i,\theta)\) with unique \(\theta\) satisfying the total-distortion equation.

[F2] [[thm-it-gaussian-vector-squared-error-rate-distortion]]: for independent Gaussian coordinates, the standard-Borel information rate is the half-sum of positive log variance-to-water-level ratios and the allocation is attained by independent scalar Gaussian test channels.

## Proof

1.1 Since \(1<\theta<4\), the water-level equation is \(\min(4,\theta)+\min(1,\theta)=\theta+1=5/2\), so \(\theta=3/2\). The allocated distortions are \((\min(4,3/2),\min(1,3/2))=(3/2,1)\). By [F1]–[F2],
\[
R(5/2)=\frac12\left(\log_2\frac4{3/2}+\log_2^+\frac1{3/2}\right)=\frac12\log_2\frac83.
\]
[F1, F2, given, algebra]

1.2 The displayed reconstruction has error \(X_1-Y_1=\sqrt{3/2}V\) of mean-square value \(3/2\), and \(X_2-Y_2=X_2\) has mean-square value 1; the total is \(5/2\). The vector theorem [F2] gives mutual information equal to the rate calculated in step 1.1, so this test channel attains the displayed value. [F2, step 1.1, given, algebra] ∎
