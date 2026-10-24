---
id: lem-definite-quadratic-forms-have-a-uniform-sphere-bound
kind: lemma
title: "A definite quadratic form has a uniform signed bound on the Euclidean unit sphere"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-definite-and-indefinite-hessian-quadratic-forms, def-euclidean-inner-product, lem-finite-sum-laws, lem-triangle-inequality-finite, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-metric-continuity-characterisations, def-metric-topology, def-metric-bounded-diameter, lem-standard-basis-of-f-n, thm-heine-borel-rn, thm-extreme-value-metric]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Analysis, Convexity, and Optimization"
      url: "https://www.math.columbia.edu/department/pinkham/Optimizationbook.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ and let $q$ be a positive definite quadratic form on $\mathbb R^n$. Then some $c>0$ satisfies $q(u)\ge c$ whenever $\|u\|_2=1$. For a negative definite $q$, some $c>0$ satisfies $q(u)\le-c$ on the same sphere.

## Facts & Assumptions
**Given:** A definite quadratic form $q$ on $\mathbb R^n$ with $n\ge1$.

[L1] The Euclidean norm is continuous, and a continuous map has closed preimages of closed sets ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[thm-metric-continuity-characterisations]]).

[L2] Heine--Borel says that a closed bounded Euclidean subset is compact ([[thm-heine-borel-rn]]).

[L3] A continuous real function on a nonempty compact metric space attains its extrema ([[thm-extreme-value-metric]]).

## Proof

**Proof technique:** direct.

1.1 The unit sphere is nonempty because it contains $e_0$, closed by [L1], and bounded since it lies in the radius-two ball about zero. [L1, given, algebra]

2.1 It is compact by [L2]. [step 1.1, L2]

3.1 The finite coordinate formula for $q$ makes it continuous; [L3] therefore gives a point where $q$ attains its minimum and maximum on the sphere. [step 2.1, L3, algebra]

4.1 In the positive definite case the attained minimum is positive, and in the negative definite case the attained maximum is negative, by the definition of definiteness. [step 3.1, given]

5.1 Taking $c$ to be the positive minimum or the negative maximum gives the asserted uniform signed bounds. [step 4.1, algebra] ∎
