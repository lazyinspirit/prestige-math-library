---
id: thm-finite-etale-coefficients-have-etale-fppf-cohomology-comparison
kind: theorem
title: Natural ordinary étale–fppf comparison for finite étale coefficients
status: draft
dependency_level: 7
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-cohomological-topology-comparison-from-finite-refinements
- lem-finite-morphism-etale-direct-image-calculus
- lem-fppf-cover-refinement-by-etale-local-finite-flat-covers
- lem-small-etale-sheaves-extend-with-fppf-descent
- lem-site-slice-restriction-locality-and-composition
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

Let X be any scheme and G a finite etale commutative group scheme. In the cohomology models of the definition, the actual topology-change map H^q_et(X,G)→H^q_fppf(X,G) is an isomorphism for every q≥0. It is natural in X and G and represented by a natural quasi-isomorphism of derived section complexes. No choice axiom is added to the models.

## Statement references

[[thm-cohomological-topology-comparison-from-finite-refinements]]

[[lem-finite-morphism-etale-direct-image-calculus]]

[[lem-fppf-cover-refinement-by-etale-local-finite-flat-covers]]

[[lem-small-etale-sheaves-extend-with-fppf-descent]]

## Facts & Assumptions

**Given:** All data and hypotheses of the statement, with every actual supplied cohomology model interpreted as in the topology-comparison definition.

[F1] Use the exact public interface of [[thm-cohomological-topology-comparison-from-finite-refinements]] at the hypotheses stated there.

[F2] Use the exact public interface of [[lem-finite-morphism-etale-direct-image-calculus]] at the hypotheses stated there.

[F3] Use the exact public interface of [[lem-fppf-cover-refinement-by-etale-local-finite-flat-covers]] at the hypotheses stated there.

[F4] Use the exact public interface of [[lem-small-etale-sheaves-extend-with-fppf-descent]] at the hypotheses stated there.

[F5] Finite injective comparisons, the named-functor acyclic-model lemma and the actual composition spectral sequence are proved locally. [[lem-site-slice-restriction-locality-and-composition]]

## Proof

**Proof technique:** direct.

1.1 Let F be the small-etale abelian sheaf represented by the finite etale commutative group scheme G. Over every X-scheme Y its inverse image is represented by G_Y: an etale-local section is exactly a morphism into that base change, and equality is the diagonal equality. The affine family-descent theorem, applied after Zariski localization on X, proves that the same represented functor is an fppf sheaf. Thus the natural small/big extension and its fppf sheafification are the actual coefficient sheaves in the Statement. [F1, F2, F3, F4, F5, given, construct, algebra]

2.1 Let the coarse topology be big etale and the fine topology big fppf on the same fixed category. On every slice take the essential abelian image of small-etale inverse image. The small/big formal calculus in the extension theorem makes this a pullback-stable weak Serre class: kernels and cokernels follow from exactness/full faithfulness; an extension is recovered by applying the exact restriction functor and comparing the endpoint counit isomorphisms, with a kernel/image chase. Its objects already satisfy fppf descent by that theorem. [F1, F2, F3, F4, F5, step 1.1, given, construct, algebra]

3.1 Take the basechange-stable class of finite morphisms. The finite direct-image theorem proves exactness of coarse direct image on every arbitrary big object, and its actual arbitrary-basechange map identifies the image of a small extension with the small extension of the direct image. The same formula on both topologies gives the degree-zero push-pull comparison; the topology-change direct-image square commutes literally on underlying sections. The covering-refinement theorem gives an etale cover followed by a single finite locally free surjective cover refining each fppf covering. These are exactly the three hypotheses of the abstract comparison theorem, not imports of a proper-basechange result. [F1, F2, F3, F4, F5, step 2.1, given, construct, algebra]

4.1 Let F be in the small-site essential image and let 0→aF→I be ONE actual injective resolution on the big fppf site. Exactness of a and its adjunction show epsilon_* preserves injectives. The augmentation gives the actual chain map [F1, F2, F3, F4, F5, step 3.1, given, construct, algebra]

5.1 F → epsilon_*aF → epsilon_*I. [F1, F2, F3, F4, F5, step 4.1, given, construct, algebra]

6.1 This constructs the derived topology-change unit, without lifting an unknown map degree by degree and without assuming it is a quasi-isomorphism. The independently read Vn/Cn argument, now using [F5] for its spectral-sequence operations, proves all positive R^q epsilon_*aF vanish. Hence that displayed map IS a quasi-isomorphism, and epsilon_*I is an actual injective resolution of F on the coarse site. [F1, F2, F3, F4, F5, step 5.1, given, construct, algebra]

7.1 Compute ordinary sections on these common models. The complexes Gamma(X,epsilon_*I) and Gamma(X,I) are literally equal because epsilon_* does not change the underlying presheaf. This equality holds on EVERY slice, not only on the final object: restriction preserves injectives, and the coarse restricted complex is an actual resolution by the proved sheaf-level vanishing. Thus the corresponding section complexes at every completed local field and all their ordinary restriction arrows are literally equal as well. All coefficient and scheme maps are the actual adjunction-unit maps, so these identities represent the natural derived comparison, not unrelated isomorphisms chosen on cohomology groups. [F1, F2, F3, F4, F5, step 6.1, given, construct, algebra]

8.1 For a different actual injective or named-functor-acyclic model, the finite comparison theorem [F5] gives the required finite comparisons and uniqueness on each degree, and the acyclic-model theorem [F5] identifies the actual derived model through its defining unit. Therefore the same natural comparison is obtained. A Gamma(X)-acyclic model is used ONLY for R Gamma(X); it is never declared epsilon_*-acyclic or objectwise acyclic. The natural quasi-isomorphism of derived section objects is represented by the literal identity on the common complexes above. This does not claim a globally chosen strict chain map between every arbitrary pair of representatives. [F1, F2, F3, F4, F5, step 7.1, given, construct, algebra]

9.1 Finally restrict the coarse big injective resolution epsilon_*I to the small etale site. Exact small/big restriction preserves injectives and its final-object section complex is unchanged, by [F4]. Therefore the common complexes just constructed are precisely the stated small-etale and fppf derived sections. All conclusions hold in every degree and for the actual natural maps. [F1, F2, F3, F4, F5, step 8.1, given, construct, algebra] ∎


## Source notes

This draft supplies the local arguments rather than importing their conclusions. The exact full sources were retrieved; reading was limited to the named comparison, site-induction, finite-localization and refinement sections, and the compact-support sections listed in the references. It does not claim whole-chapter reading. The staged argument is adapted from the independently bound research packet; formal comparison proofs and the generic finite-direct-image successor have their separate review status. No publication or native gate credit is asserted.
