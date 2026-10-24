---
id: ex-one-dimension-shift-along-an-injective-copresentation
kind: example
title: "One dimension shift along an injective copresentation"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-right-derived-functors-form-a-cohomological-delta-functor, prop-positive-right-derived-functors-vanish-on-injective-objects, lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.12: Cohomological delta-functors"
      url: "https://stacks.math.columbia.edu/tag/010P"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Example

Assume the Axiom of Dependent Choice.

Let $I$ be supplied injective resolution data on a class $\mathcal D$ of
objects of $\mathcal A$, let $F:\mathcal A\to\mathcal B$ be additive and left
exact, and let
$$0\to A\to J\to C\to0$$
be a short exact sequence in $\mathcal D$ with $J$ injective. Then for every
$n>1$ the
connecting map gives an isomorphism
$$R_I^{n-1}F(C)\xrightarrow{\ \sim\ }R_I^nF(A).$$
## Facts & Assumptions

**Given:** A short exact sequence $0\to A\to J\to C\to0$ in $\mathcal D$ with $J$ injective and an integer $n>1$.

[L1] The right derived functors form a cohomological delta functor ([[thm-right-derived-functors-form-a-cohomological-delta-functor]]).

[L2] Positive right derived functors vanish on injective objects ([[prop-positive-right-derived-functors-vanish-on-injective-objects]]).

[L3] Vanishing of the adjacent injective terms makes the connecting map an isomorphism ([[lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the given short exact sequence yields an exact segment $$R_I^{n-1}F(J)\to R_I^{n-1}F(C)\xrightarrow{\partial^{n-1}}R_I^nF(A)\to R_I^nF(J).$$ [L1, given, construct]

2.1 Since $J\in\mathcal D$ is injective and $n>1$, [L2] gives $R_I^{n-1}F(J)=R_I^nF(J)=0$. Hence [L3] makes the connecting map in step 1.1 an isomorphism. [L2, L3, step 1.1] ∎
