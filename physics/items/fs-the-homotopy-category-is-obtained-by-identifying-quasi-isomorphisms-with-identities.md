---
id: fs-the-homotopy-category-is-obtained-by-identifying-quasi-isomorphisms-with-identities
kind: false-statement
title: "FALSE: the homotopy category is obtained by identifying quasi-isomorphisms with identities"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homotopy-category-of-chain-complexes, def-quasi-isomorphism]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 13.8: The homotopy category"
      url: "https://stacks.math.columbia.edu/tag/05RN"
pipeline_run: frontier-25
---

## Statement

The homotopy category is obtained by identifying quasi-isomorphisms with
identities.

## Facts & Assumptions

**Given:** The zero map from the acyclic noncontractible complex $$0\to\mathbb Z\xrightarrow{2}\mathbb Z\xrightarrow{\bmod 2}\mathbb Z/2\to0$$ to the zero complex.

[A1] The statement refuted is: the homotopy category is obtained by identifying quasi-isomorphisms with identities.

[L1] The homotopy category keeps the same objects and uses homotopy classes of chain maps as morphisms ([[def-homotopy-category-of-chain-complexes]]).

[L2] A quasi-isomorphism is defined by its effect on homology ([[def-quasi-isomorphism]]).

## Refutation

**Proof technique:** direct.

1.1 The displayed zero map is a quasi-isomorphism, because both complexes are acyclic. Yet it is not invertible by any chain homotopy inverse, since an inverse would force the source complex to be homotopy equivalent to zero and hence contractible, which it is not. [L2, given, algebra]

2.1 Therefore merely passing to homotopy classes, as in [L1], does not turn every quasi-isomorphism into an identity or even into an isomorphism. So [A1] is false: that later localization is not the definition of $K(\mathcal A)$. [A1, L1, step 1.1, algebra] ∎
