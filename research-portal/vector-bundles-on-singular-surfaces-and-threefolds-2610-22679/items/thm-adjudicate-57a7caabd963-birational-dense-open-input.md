---
id: thm-adjudicate-57a7caabd963-birational-dense-open-input
kind: theorem
title: Dense-open isomorphism for proper birational maps
status: draft
domain: mathematics
external_input: true
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Stacks Project, Generically finite morphisms
      url: https://stacks.math.columbia.edu/tag/0BAJ
      locator: Tag 0BAJ, displayed Lemma 29.52.6; online text retrieved 2026-11-09
      statement: A proper birational morphism between integral finite-type schemes
        over a field is an isomorphism over a dense open of its target.
      hypotheses: Use the quasi-compact, locally finite type, reduced-target branch;
        both schemes have one irreducible component.
      reading_limits: Read the complete statement and displayed proof of tag 0BAJ. The
        cited finite-morphism and birational-open lemmas were not reconstructed.
        The history endpoint was unavailable; no commit-specific version is
        claimed.
    - title: Stacks Project, Birational morphisms
      url: https://stacks.math.columbia.edu/tag/0552
      locator: Tag 0552, displayed Lemma 29.51.7; online text retrieved 2026-11-09
      statement: For integral schemes locally of finite type over a base,
        birationality is equivalent to an isomorphism of generic residue fields
        over their common base point.
      hypotheses: Here both schemes are integral and finite type over the field k; the
        isomorphism is induced by the given dominant morphism.
      reading_limits: Read the complete statement and displayed proof to check the
        function-field convention. Its cited rational-map foundations were not
        reconstructed.
dependency_level: 0
---

## Statement
Let $k$ be a field and let $f:P\to Q$ be a proper birational morphism between integral finite-type $k$-schemes. Birational here means that the dominant map induces an isomorphism of function fields. There is a dense open subscheme $V\subseteq Q$ such that the entire inverse image $f^{-1}(V)\to V$ is an isomorphism.

## External input
Import this specialization of [Stacks Project, tag 0BAJ](https://stacks.math.columbia.edu/tag/0BAJ), using its reduced-target branch. The function-field convention is consistent with [tag 0552](https://stacks.math.columbia.edu/tag/0552). These established inputs are cited rather than reconstructed.
