---
id: lem-author-8e1c0251ef0d-h1-torsor-input
kind: lemma
title: External classification of torsors by first cohomology
status: published
domain: mathematics
external_input: true
deps:
  - def-derived-sections-on-sites
dependency_roles:
  def-derived-sections-on-sites: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: The Stacks Project, First cohomology and torsors
      url: https://stacks.math.columbia.edu/tag/03AG
      locator: Lemma 21.4.3 and its proof
      statement: For an abelian sheaf on a site, isomorphism classes of its torsors
        are canonically in bijection with first sheaf cohomology.
      hypotheses: A site and an abelian sheaf, with the usual sheaf cohomology and
        size conventions.
      reading_limits: The statement and displayed construction in the proof were read.
        The source explicitly omits verification that its two constructions are
        inverse; that verification was not reconstructed here.
dependency_level: 12
---

## Statement
For an abelian sheaf $G$ on a small site with terminal object and the derived-cohomology conventions of [[def-derived-sections-on-sites]], there is a canonical bijection from isomorphism classes of $G$-torsors to $H^1(G)$. A torsor is a locally nonempty sheaf of sets with a simply transitive $G$-action on each nonempty section set.

## External input
This is Stacks Project Lemma 21.4.3, imported with the reading limits stated above. Its proof is not claimed as a local reconstruction.
