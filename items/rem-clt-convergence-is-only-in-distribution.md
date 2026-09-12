---
id: rem-clt-convergence-is-only-in-distribution
kind: remark
title: Central-limit convergence is only in distribution
deps: ["thm-lindeberg-levy-iid-central-limit-theorem", "thm-lindeberg-feller-central-limit-theorem-sufficiency", "thm-multivariate-iid-central-limit-theorem", "def-convergence-in-distribution-of-random-elements", "def-convergence-in-probability", "def-almost-sure-convergence-of-random-variables", "thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, Sections 3.2 and 3.4'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Aldous and Chewi, Probability Theory notes, Lectures 5-6
      url: https://www.stat.berkeley.edu/users/aldous/205B/chewi_notes.pdf
status: draft
origin: pipeline
---

## Remarks

The conclusions of [[thm-lindeberg-levy-iid-central-limit-theorem]], [[thm-lindeberg-feller-central-limit-theorem-sufficiency]] and [[thm-multivariate-iid-central-limit-theorem]] compare the row-sum laws with a Gaussian law. In [[def-convergence-in-distribution-of-random-elements]], the limit is specified by tests on laws; the theorem does not construct a Gaussian random vector jointly with the original summands. The AC hypotheses of the cited theorems remain in force when applying them.

By contrast, [[def-convergence-in-probability]] requires the probabilities of distance-from-the-limit events on a common probability space to tend to zero. [[def-almost-sure-convergence-of-random-variables]] requires pointwise convergence outside a null set on such a space. Neither conclusion is supplied merely by identifying the Gaussian limit law; a coupling or further argument is required. These statements do not deny that a suitable coupling can sometimes give stronger convergence.

The special result [[thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability]] concerns a point-mass limit. It applies to scalar degenerate normal limits on a common space, but does not turn a positive-variance normal limit into convergence in probability to a newly chosen Gaussian. A multivariate fully degenerate Gaussian limit requires the corresponding vector argument, which that real-valued theorem does not supply; a singular covariance with some positive-variance directions still gives a nonconstant law. No convergence rate or almost-sure version is asserted here.
