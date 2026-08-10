---
id: lem-compactly-supported-riemann-integral-is-well-defined
kind: lemma
title: "The Riemann integral of a compactly supported function is independent of its bounding rectangle"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-support-and-compactly-supported-riemann-integral-in-rn, lem-jordan-set-integral-well-defined, thm-multidimensional-integral-properties]
justified_by: []
aliases: []
landmark: false
proof_strategy: common-extension
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, §6.1"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $f:\mathbb R^n\to\mathbb R$ have compact support. If $f$ is Riemann integrable on one closed rectangle whose interior contains its support, then it is integrable on every such rectangle, and all the resulting integrals are equal. This includes the empty-support case.

## Facts & Assumptions

**Given:** Compactly supported $f$ and bounding rectangles $Q_1,Q_2$ whose interiors contain its support.

[L1] Extending an integrable function on a Jordan set by zero to a bounding rectangle gives a well-defined integral independent of that rectangle ([[lem-jordan-set-integral-well-defined]]).

[L2] Cutting rectangles along coordinate hyperplanes preserves integrability and adds the integrals of the pieces ([[thm-multidimensional-integral-properties]]).

## Proof

**Proof technique:** common-extension.

1.1 Choose a third rectangle $Q$ whose interior contains $Q_1\cup Q_2$. Since $f=0$ outside its support, extending $f|_{Q_i}$ by zero to $Q$ recovers exactly $f|_Q$. [given]

2.1 If $f|_{Q_1}$ is integrable, [L1] makes its zero extension integrable on $Q$ with the same integral. Restricting this function to $Q_2$ by the coordinate cuts in [L2] gives integrability there, again with zero contribution off the support. [L1, L2, step 1.1]

3.1 Applying [L1] to $Q_1$ and $Q_2$ inside the common rectangle yields $\int_{Q_1}f=\int_Qf=\int_{Q_2}f$. If the support is empty, all three functions are identically zero, so the same argument gives value $0$. [L1, step 2.1] ∎

