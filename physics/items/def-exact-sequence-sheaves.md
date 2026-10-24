---
id: def-exact-sequence-sheaves
kind: definition
title: "Exact sequences of sheaves"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-exact-sequence-and-short-exact-sequence-in-an-abelian-category, thm-abelian-sheaves-form-abelian-category]
verification:
  audited: 2026-09-05
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 17.3"
      url: "https://stacks.math.columbia.edu/tag/01AF"
    - title: "Ravi Vakil, The Rising Sea, Section 2.6"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Definition

Let $X$ be a topological space. A sequence of sheaves of abelian groups on $X$
is **exact** when it is exact in the abelian category of
[[thm-abelian-sheaves-form-abelian-category]], equivalently in the sense of
[[def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]].

Thus a sequence
$$
\cdots\to \mathcal F_{i-1}\to \mathcal F_i\to \mathcal F_{i+1}\to\cdots
$$
is exact at $\mathcal F_i$ when the image sheaf of the first morphism equals
the kernel sheaf of the second.

The same language applies to $\mathcal O_X$-modules on a ringed space.
