---
title: Dense-open isomorphism for proper birational maps
status: published
research_item: thm-adjudicate-57a7caabd963-birational-dense-open-input
dependency_level: 0
sources:
  references:
    - title: Stacks Project, Generically finite morphisms
      url: https://stacks.math.columbia.edu/tag/0BAJ
      locator: Tag 0BAJ, Lemma 29.52.6, statement and displayed proof; online text
        accessed 2026-11-12
      statement: A quasi-compact, locally finite type birational morphism between
        schemes with finitely many irreducible components, whose target is
        reduced, is an isomorphism over the entire inverse image of some dense
        open of the target.
      hypotheses: Apply with X=P and Y=Q. Properness supplies quasi-compactness and
        finite type; integrality supplies reducedness and one irreducible
        component on each side. Birationality is induced by the given morphism.
      reading_limits: Read the complete statement and displayed proof on the tag page.
        Its cited finite-morphism reduction and birational-open lemma were not
        reconstructed. No commit-specific version or independent proof
        verification is claimed.
    - title: Stacks Project, Birational morphisms
      url: https://stacks.math.columbia.edu/tag/0552
      locator: Tag 0552, Lemma 29.51.7, equivalence (1)-(3) and displayed proof;
        online text accessed 2026-11-12
      statement: For integral schemes X and Y locally of finite type over S, being
        S-birational is equivalent to having S-isomorphic nonempty opens, and to
        their generic points mapping to the same s in S with isomorphic generic
        residue fields as extensions of kappa(s).
      hypotheses: Here S=Spec(k), X=P and Y=Q are integral and finite type over k.
        This is a compatibility check for the function-field convention;
        birationality of the specified morphism is defined by
        math:def-birational-morphism-schemes, not inferred from an arbitrary
        field isomorphism.
      reading_limits: Read the complete statement and displayed proof on the tag page.
        The cited rational-map and local-ring results were not reconstructed. No
        claim is made that an abstract function-field isomorphism identifies an
        arbitrary given morphism.
external_input: true
---

PDF p. 10: Lemma 5.1, weight-zero restriction; PDF p. 5: Lemma 2.4, finite-type cdh topology

## Prerequisites

- [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)
- [math:def-birational-morphism-schemes](https://alphabetamath.cc/item/def-birational-morphism-schemes)
- [math:def-scheme-theoretic-inverse-image-subscheme](https://alphabetamath.cc/item/def-scheme-theoretic-inverse-image-subscheme)
- [` Stacks Project, Generically finite morphisms · Tag 0BAJ, Lemma 29.52.6, statement and displayed proof; online text accessed 2026-11-12 `](https://stacks.math.columbia.edu/tag/0BAJ)
- [` Stacks Project, Birational morphisms · Tag 0552, Lemma 29.51.7, equivalence (1)-(3) and displayed proof; online text accessed 2026-11-12 `](https://stacks.math.columbia.edu/tag/0552)


## Statement
Let $k$ be a field and let $f:P\to Q$ be a proper birational morphism between integral finite-type $k$-schemes. Birational here means that the dominant map induces an isomorphism of function fields. There is a dense open subscheme $V\subseteq Q$ such that the entire inverse image $f^{-1}(V)\to V$ is an isomorphism.

## External input
Import the dense-open conclusion of [Stacks Project, tag 0BAJ](https://stacks.math.columbia.edu/tag/0BAJ), using its reduced-target branch. Properness supplies quasi-compactness and finite type; integrality supplies reducedness and one irreducible component on each side. The birationality and inverse-image conventions are those of the declared mathematical suppliers. [Tag 0552](https://stacks.math.columbia.edu/tag/0552) confirms the generic-field convention for birational schemes over $k$; it is not used to infer birationality of the given map from an arbitrary abstract field isomorphism. These inputs are imported, not locally proved.
