---
id: lem-affine-representable-fppf-family-descent
kind: lemma
title: Affine representable functors satisfy fppf family descent
status: draft
dependency_level: 5
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-fppf-cover-refinement-by-etale-local-finite-flat-covers
- lem-faithfully-flat-effective-descent-of-modules-and-algebras
justified_by: []
provenance:
  statement: ai-altered
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
proof_strategy: direct
---

## Statement

For an affine scheme Z the functor T↦Hom(T,Z) satisfies unique descent for arbitrary jointly surjective flat locally finitely presented covering families. The assertion includes non-affine test schemes and does not infer arbitrary-family descent from a single faithfully flat cover without a refinement proof.

## Statement references

[[lem-fppf-cover-refinement-by-etale-local-finite-flat-covers]]

[[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

## Facts & Assumptions

**Given:** All data and hypotheses of the statement, with every actual supplied cohomology model interpreted as in the topology-comparison definition.

[F1] Use the exact public interface of [[lem-fppf-cover-refinement-by-etale-local-finite-flat-covers]] at the hypotheses stated there.

[F2] Use the exact public interface of [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]] at the hypotheses stated there.

## Proof

**Proof technique:** direct.

1.1 Let Y=Spec D be an affine scheme (in particular Gm or μ_n), and let compatible sections of its represented functor on an fppf family be given. Pull them to the refinement tree. At a single affine faithfully flat map Spec B→Spec A, the equalizer A→B⇉B⊗A B gives unique descent of a ring map D→B: for each d∈D the compatible image belongs to A, with a UNIQUE preimage. Uniqueness supplies a function d↦a_d by separation/replacement, not by choice; injectivity verifies addition, multiplication, and unit. For Gm the inverse descends simultaneously, and for μ_n the equation x^n=1 descends by injectivity. At a Zariski cover, glue the morphisms by the actual sheaf/gluing definition for schemes. Repeat these arguments from the finite-depth leaves to the root to obtain a unique section on S. [F1, F2, given, construct, algebra]

2.1 It remains to check that this section pulls back to the ORIGINAL sections, not merely the leaf sections. Base change the same refinement tree to each X_i. Two candidate sections agree on its leaves by the original pairwise compatibility. The uniqueness part of each affine faithfully flat equalizer and Zariski gluing propagates equality back to X_i. Thus the original matching family descends uniquely. This proves represented affine functors are sheaves for the actual arbitrary covering families, contingent only on the explicit geometric constructions in §§1–2. [F1, F2, step 1.1, given, construct, algebra] ∎

## Source notes

This draft supplies the local arguments rather than importing their conclusions. The exact full sources were retrieved; reading was limited to the named comparison, site-induction, finite-localization and refinement sections, and the compact-support sections listed in the references. It does not claim whole-chapter reading. The staged argument is adapted from the independently bound research packet; formal comparison proofs and the generic finite-direct-image successor have their separate review status. No publication or native gate credit is asserted.
