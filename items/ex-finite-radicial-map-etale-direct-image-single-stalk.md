---
id: ex-finite-radicial-map-etale-direct-image-single-stalk
kind: example
title: A finite radicial map has one étale stalk over each geometric point
status: draft
dependency_level: 4
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-finite-morphism-etale-direct-image-calculus
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Etale Cohomology and Cohomology on Sites; More on Morphisms and Algebra
    url: https://stacks.math.columbia.edu/download/etale-cohomology.pdf
    locator: Local reconstruction from the full retrieved chapter sources, with targeted sections only. Exact item proof inputs and reading limits recorded below.
  - title: Demarche and Harari, Artin–Mazur–Milne duality for fppf cohomology, arXiv:1804.03941v3
    url: https://arxiv.org/pdf/1804.03941v3
    locator: Section2 completed-field complexes, Proposition2.1(4), Remark2.2 and Lemma2.10. It cites ordinary comparison and is not an independent proof of the generic finite-refinement geometry.
axiom_use: Only finite choices and all-witness covering refinements are used. Actual supplied cohomology models are data; no unqualified injective-existence theorem or family of closures is asserted.
generation:
  role: example
proof_strategy: direct
---

## Example

For a field K of characteristic p and a∉K^p, the finite radicial map Spec(K[u]/(u^p−a))→SpecK is not étale, while its finite étale direct-image formula has exactly one geometric stalk over every geometric point. Explain its exactness without claiming the morphism is étale.

## Example references

[[lem-finite-morphism-etale-direct-image-calculus]]

## Facts & Assumptions

**Given:** All data and hypotheses of the example, with every actual supplied cohomology model interpreted as in the topology-comparison definition.

[F1] Use the exact public interface of [[lem-finite-morphism-etale-direct-image-calculus]] at the hypotheses stated there.

## Verification

**Proof technique:** direct.

1.1 The polynomial U^p-a has no root in K and in characteristic p is irreducible unless a is a pth power: its sole root in a splitting field has purely inseparable degree p. Thus L=K[u]/(u^p-a) is a field extension of degree p, and its map to K is finite radicial. [F1, given, construct, algebra]

2.1 At a GIVEN geometric point with algebraically closed field Omega, the fibre algebra is Omega[U]/((U-b)^p) for its unique root b. It has exactly one point, with a nilpotent thickening. It is not reduced for p>1, so the finite map fails the defining geometric-regular-fibre condition for being etale. Nevertheless the finite-direct-image theorem applies to any finite map: its geometric stalk product is indexed by this single point, hence consists of exactly one stalk and is exact. This makes no claim that the morphism itself is etale. [F1, step 1.1, given, construct, algebra] ∎

## Source notes

This draft supplies the local arguments rather than importing their conclusions. The exact full sources were retrieved; reading was limited to the named comparison, site-induction, finite-localization and refinement sections, and the compact-support sections listed in the references. It does not claim whole-chapter reading. The staged argument is adapted from the independently bound research packet; formal comparison proofs and the generic finite-direct-image successor have their separate review status. No publication or native gate credit is asserted.
