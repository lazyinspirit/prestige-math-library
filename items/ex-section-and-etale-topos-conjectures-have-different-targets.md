---
id: ex-section-and-etale-topos-conjectures-have-different-targets
kind: example
title: Galois sections versus reconstruction from an étale topos
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - rem-etale-topos-reconstruction-is-not-the-section-conjecture
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: Magnus Carlson and Jakob Stix, Étale topoi and anabelian geometry, abstract and Introduction
      url: https://arxiv.org/abs/2410.22474
---

## Example

Assume the Axiom of Choice. For a proper hyperbolic curve $C/k$, the section-conjecture assertion compares $C(k)$ with conjugacy classes of continuous splittings of $\pi_1^{\mathrm{et}}(C)\to G_k$. An étale-topos reconstruction assertion instead compares the small étale topoi of two schemes and asks whether a topos equivalence comes from a scheme isomorphism. The first assertion is a point-to-section bijection; the second is a reconstruction statement from categorical data.

## Example references

[Carlson and Stix, reconstruction from étale topoi, abstract and Introduction](https://arxiv.org/abs/2410.22474)

[[rem-etale-topos-reconstruction-is-not-the-section-conjecture]]
## Facts & Assumptions

**Given:** The section-conjecture formulation and the definition of the small étale topos as the category of sheaves on a scheme's small étale site.

[F1] The two formulations have the distinct input data and conclusions described in the cited remark. [[rem-etale-topos-reconstruction-is-not-the-section-conjecture]]

## Verification

1.1 The section-conjecture map has rational points as its domain and conjugacy classes of group sections as its codomain, as stated in [F1]. [F1, given]

2.1 A topos reconstruction assertion has two étale topoi as input and a scheme isomorphism as the proposed recovered structure. Its input and output types differ from those in step 1.1, so the two assertions are distinct formulations. [F1, step 1.1, algebra] ∎
