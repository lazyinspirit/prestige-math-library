---
id: prop-ext-zero-is-hom-for-the-injective-construction
kind: proposition
title: "The degree-zero injective construction of Ext is Hom"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ext-via-an-injective-resolution-of-the-second-variable, thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor, lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions, lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Dependent Choice, and let $I$ be supplied injective
resolution data on the objects under consideration.
For $0\to N\xrightarrow\iota I^0\xrightarrow {d^0}I^1\to\cdots$, $f\mapsto\iota f$ gives a natural isomorphism $\operatorname{Hom}(M,N)\cong\operatorname{Ext}^0_I(M,N)$.

## Facts & Assumptions

**Given:** The displayed injective resolution and an object $M$.

## Proof

**Proof technique:** direct.

1.1 Exactness gives $\ker d^0=\operatorname{im}\iota$; thus $\iota f$ is a degree-zero cocycle, and $f\mapsto\iota f$ is injective because $\iota$ is monic. [given, construct]

2.1 If $d^0g=0$, then $g$ factors uniquely through $\iota$. Since there are no negative-degree coboundaries, this is the required $H^0$ identification. Precomposition makes it natural in $M$. For $b:N\to N'$, choose a comparison extension between the supplied resolutions; its degree-zero square with the coaugmentations commutes, so the identification is natural in $N$, and the independence lemma makes this map independent of the chosen extension. [step 1.1, algebra] ∎
