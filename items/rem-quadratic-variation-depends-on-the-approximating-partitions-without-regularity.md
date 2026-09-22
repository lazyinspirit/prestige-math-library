---
id: rem-quadratic-variation-depends-on-the-approximating-partitions-without-regularity
kind: remark
title: "Quadratic variation needs a partition convention"
status: draft
origin: pipeline
deps: [def-quadratic-variation-along-a-partition-sequence, thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.8 (partition-dependence warning)"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Remark

The identity $[B]_t=t$ established on this page is an almost-sure assertion
along the fixed dyadic partition sequence of
[[def-quadratic-variation-along-a-partition-sequence]]; the uniform form of
that assertion is
[[thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes]]. It is
**not** a simultaneous assertion over all refining sequences, and the
path-dependent or arbitrary refinements of a realized path are not covered.

**What the quantifiers allow.** The theorem cited above supplies almost-sure
uniform convergence for the fixed dyadic sequence.  For a general prescribed
deterministic sequence whose mesh tends to zero, the standard conclusion
without an additional summability or regularity hypothesis is convergence in
probability, not almost-sure convergence along the whole sequence.  In
particular there is no single event on which every refining sequence
simultaneously has the same limit, and the definition deliberately builds in
no partition-independent object.

**What fails without regularity.** The convergence proofs use the independence
of increments over a preselected mesh together with a summable mesh estimate. A
refinement adapted to the oscillations of one realization destroys that
independence and can change the sums; the deterministic partition dependence of
quadratic sums is illustrated on the companion examples page, and the boundary
is recorded here so that later semimartingale statements do not silently
inherit a claim about arbitrary partitions.

No proof is attached to this remark: it records the quantifier boundary of the
preceding definition and theorem rather than a new mathematical assertion.
