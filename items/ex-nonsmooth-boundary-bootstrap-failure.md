---
id: ex-nonsmooth-boundary-bootstrap-failure
kind: example
title: Absolute-value boundary and squared-mean degeneracy
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-m-out-of-n-bootstrap-and-subsampling
  - thm-bootstrap-fails-at-nonsmooth-boundary-and-degenerate-mean-functionals
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

For IID standard-normal data at mean zero, compare the two estimators $|\bar X_n|$ and $\bar X_n^2$. The first has a kink at the boundary value zero. The second has zero first derivative and a nondegenerate second-order limit. Both ordinary bootstrap roots retain a random conditional distribution.

## Facts & Assumptions

**Given:** AC, the IID normal model at mean zero, and the two statistic sequences.

[A1] [[def-axiom-of-choice]]: AC is the axiom that every family of nonempty sets has a choice function.

[F1] [[thm-bootstrap-fails-at-nonsmooth-boundary-and-degenerate-mean-functionals]]: Under AC and IID standard-normal observations, both correctly centered bootstrap root CDFs at zero stay separated in probability from the corresponding true root CDF value zero.

[F2] [[def-m-out-of-n-bootstrap-and-subsampling]]: The ordinary bootstrap is the size-$n$ with-replacement method, centered at the observed estimator and scaled by the actual root normalization.

## Verification

1.1 Under AC and the IID standard-normal model in [F1], the boundary mean is zero. The target for $|\mu|$ is zero and $|\cdot|$ is not differentiable there; the target for $\mu^2$ is also zero and its first derivative vanishes. The root normalizations are respectively $\sqrt n$ and $n$. [A1, F1, given]

2.1 The ordinary bootstrap roots therefore are $\sqrt n(|\bar X_n^*|-|\bar X_n|)$ and $n((\bar X_n^*)^2-\bar X_n^2)$, as follows from the centering and size-$n$ scale in [F2]. Theorem [F1] proves that each conditional CDF fails at the continuity point zero, despite the nondegenerate true limits $|Z|$ and $Z^2$. [A1, F1, F2, given] ∎
