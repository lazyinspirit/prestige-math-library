---
id: ex-homology-of-an-interval-from-contractibility
kind: example
title: "The homology of an interval from contractibility"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-contractible-nonempty-spaces-have-the-homology-of-a-point, cor-convex-subsets-of-rn-are-contractible, ex-singular-chain-complex-of-a-point]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: frontier-30
---

## Example

For the unit interval $I=[0,1]$,
$$H_0^{\mathrm{sing}}(I;\mathbb Z)\cong\mathbb Z,\qquad H_n^{\mathrm{sing}}(I;\mathbb Z)=0\text{ for }n>0,$$
and all reduced singular homology groups vanish.

## Facts & Assumptions

**Given:** The unit interval $I=[0,1]$.

[L1] Every nonempty convex subset of $\mathbb R^n$ is contractible
([[cor-convex-subsets-of-rn-are-contractible]]).

[L2] A nonempty contractible space has the singular homology of a point
([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]]).

[L3] The one-point space has $H_0\cong\mathbb Z$, trivial higher homology, and
trivial reduced homology ([[ex-singular-chain-complex-of-a-point]]).

## Verification

**Proof technique:** direct.

1.1 The interval $I$ is a nonempty convex subset of $\mathbb R$, so [L1] makes it contractible. [L1, given]

2.1 By [L2], $I$ has the same singular homology groups as a point. Substituting the computation from [L3] gives the displayed formulas for ordinary and reduced singular homology. [L2, L3, step 1.1] ∎