---
id: ex-algebraically-closed-field-finite-constant-etale-fppf-comparison
kind: example
title: Finite constant coefficients over a given algebraically closed field
status: draft
dependency_level: 8
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-finite-etale-coefficients-have-etale-fppf-cohomology-comparison
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

For a given algebraically closed field k and finite abelian group M, both topologies have H0=M and positive-degree cohomology zero. The assertion fixes k as data and does not assert a choice-free existence theorem for algebraic closures.

## Example references

[[thm-finite-etale-coefficients-have-etale-fppf-cohomology-comparison]]

## Facts & Assumptions

**Given:** All data and hypotheses of the example, with every actual supplied cohomology model interpreted as in the topology-comparison definition.

[F1] Use the exact public interface of [[thm-finite-etale-coefficients-have-etale-fppf-cohomology-comparison]] at the hypotheses stated there.

## Verification

**Proof technique:** direct.

1.1 Every nonempty etale object over the GIVEN algebraically closed field k has a k-point: its residue field at any specified point is a finite separable extension by the finite direct-image proof’s elementary fibre calculation, and hence is k. The corresponding map Spec k into that object is a section of its structural map. Thus every covering of the final small-etale object has a section. [F1, given, construct, algebra]

2.1 A locally surjective morphism of abelian sheaves is surjective on global sections: choose a covering lifting one specified section, take one member with the section just constructed, and pull its lift back. Kernels are computed sectionwise, so global sections is exact. It follows that its positive-degree derived functors vanish for every actual supplied resolution; the finite constant sheaf has H0=M. Apply the ordinary etale/fppf comparison to identify the fppf groups with these same groups. The given k is data, so no algebraic-closure existence principle is being asserted. [F1, step 1.1, given, construct, algebra] ∎

## Source notes

This draft supplies the local arguments rather than importing their conclusions. The exact full sources were retrieved; reading was limited to the named comparison, site-induction, finite-localization and refinement sections, and the compact-support sections listed in the references. It does not claim whole-chapter reading. The staged argument is adapted from the independently bound research packet; formal comparison proofs and the generic finite-direct-image successor have their separate review status. No publication or native gate credit is asserted.
