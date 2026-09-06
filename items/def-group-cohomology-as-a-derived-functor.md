---
id: def-group-cohomology-as-a-derived-functor
kind: definition
title: "Group cohomology as a derived functor"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-the-invariants-functor-is-left-exact, thm-invariants-are-hom-from-the-trivial-group-ring-module, def-right-derived-object-relative-to-injective-resolution-data, def-supplied-injective-resolution-datum, thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic]
landmark: true
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Definition 6.1.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Definition

Assume the Axiom of Dependent Choice and fix supplied injective resolution data
$I$ on all left $G$-modules. Define
$$H_I^n(G;M):=R_I^n((-)^G)(M).$$
By invariants-as-Hom, this is the injective-resolution construction
$\operatorname{Ext}_{I,\mathbb Z[G]}^n(\mathbb Z,M)$. The cited
change-of-resolution theorem gives natural isomorphisms for two supplied data;
after making that identification, write the resolution-independent notation
$H^n(G;M)$.
