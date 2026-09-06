---
id: def-group-homology-as-a-derived-functor
kind: definition
title: "Group homology as a derived functor"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-the-coinvariants-functor-is-right-exact, def-left-derived-object-relative-to-projective-resolution-data, def-supplied-projective-resolution-datum, thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic]
verification:
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

Assume the Axiom of Dependent Choice and fix supplied projective resolution
data $P$ on all left $G$-modules. Define
$$H_n^P(G;M):=L_n^P((-) _G)(M)=H_n\!\left(\mathbb Z\otimes_{\mathbb Z[G]}P_\bullet(M)\right),$$
where the first factor is the right trivial module. This is the left-resolution
construction of $\operatorname{Tor}^{\mathbb Z[G]}_n(\mathbb Z,M)$.
The cited change-of-resolution theorem gives natural isomorphisms for two
supplied data; after making that identification, write $H_n(G;M)$.
