---
id: def-equivalence-of-n-fold-extensions
kind: definition
title: "Equivalence of n-fold extensions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-n-fold-yoneda-extension]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Definition

For two $n$-fold extensions with the same endpoints, begin with chain maps between their displayed exact sequences that are the identity on $N$ and $M$. Their reflexive, symmetric, and transitive closure is called **equivalence of $n$-fold extensions**. For $n>1$, this generated relation does not require one isomorphism of all middle terms.
