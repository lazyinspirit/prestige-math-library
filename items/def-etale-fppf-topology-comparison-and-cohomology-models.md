---
id: def-etale-fppf-topology-comparison-and-cohomology-models
kind: definition
title: Étale–fppf topology change and compatible cohomology models
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-small-etale-site-of-a-scheme
- def-fppf-topology-on-schemes
- def-derived-category-of-an-abelian-category
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: The Stacks Project, Etale Cohomology and Cohomology on Sites; More on Morphisms and Algebra
    url: https://stacks.math.columbia.edu/download/etale-cohomology.pdf
    locator: Local reconstruction from the full retrieved chapter sources, with targeted sections only. Exact item proof inputs and reading limits recorded below.
  - title: Demarche and Harari, Artin–Mazur–Milne duality for fppf cohomology, arXiv:1804.03941v3
    url: https://arxiv.org/pdf/1804.03941v3
    locator: Section2 completed-field complexes, Proposition2.1(4), Remark2.2 and Lemma2.10. It cites ordinary comparison and is not an independent proof of the generic finite-refinement geometry.
axiom_use: Only finite choices and all-witness covering refinements are used. Actual supplied cohomology models are data; no unqualified injective-existence theorem or family of closures is asserted.
---

## Definition

Fix scheme/site universes, so every site used is small in the chosen larger universe. For a scheme X let E_X be its big etale site, F_X its big fppf site, and X_et its small etale site. The identity on underlying schemes gives epsilon_X:F_X→E_X; inclusion of the small etale category gives pi_X:E_X→X_et. Write a_X=pi_X epsilon_X. On abelian sheaves epsilon_* forgets the stronger descent condition and epsilon^* is fppf sheafification; pi_* is restriction and pi^* is left-Kan extension followed by sheafification. Comparison maps are the actual adjunction units and pullback-counit maps, not independently chosen group isomorphisms. H^q and derived sections mean the named right-derived functors, with their defining natural units, evaluated on the actual supplied models. A Phi-acyclic term means R^q Phi vanishes on that term for every q>0; the named Phi must be specified. In particular Gamma(X)-acyclic does not mean slice-, epsilon_*- or f_*-acyclic. The proofs compute site operations on actual injective models and prove the comparison with actual alternative named-functor-acyclic models; they also construct the composition spectral sequences and cone homotopies, rather than assuming a compatible double complex or homotopy as data. No unqualified existence theorem for injective resolutions is asserted. The natural derived comparison may be represented by the common-model identity; it does not mean a globally selected strict map between every pair of arbitrary complex representatives. Ordinary restriction diagrams are derived together from the actual section/restriction functors, not replaced by unrelated arrows with the same cohomology groups. A given geometric point means a specified map from an algebraically closed field, and does not assert the existence of a family of closures.

## Definition references

[[def-small-etale-site-of-a-scheme]]

[[def-fppf-topology-on-schemes]]

[[def-derived-category-of-an-abelian-category]]

## Facts & Assumptions

**Given:** The fixed universes and actual site/cohomology data in the Definition.

[F1] Use the exact public interface of [[def-small-etale-site-of-a-scheme]] at the hypotheses stated there.

[F2] Use the exact public interface of [[def-fppf-topology-on-schemes]] at the hypotheses stated there.

[F3] Use the exact public interface of [[def-derived-category-of-an-abelian-category]] at the hypotheses stated there.

## Source notes

This draft supplies the local arguments rather than importing their conclusions. The exact full sources were retrieved; reading was limited to the named comparison, site-induction, finite-localization and refinement sections, and the compact-support sections listed in the references. It does not claim whole-chapter reading. The staged argument is adapted from the independently bound research packet; formal comparison proofs and the generic finite-direct-image successor have their separate review status. No publication or native gate credit is asserted.
