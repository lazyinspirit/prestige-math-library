---
id: cor-every-local-ring-is-its-localisation-at-its-maximal-ideal
kind: corollary
title: 'A local ring $R$ is canonically isomorphic to $R_{\mathfrak m}$ at its maximal ideal'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-local-ring-unit-characterisations, def-localisation-at-a-prime-ideal, thm-universal-property-of-localisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'The Stacks Project, Section 10.18: Local rings'
      url: 'https://stacks.math.columbia.edu/tag/07BH'
pipeline_run: frontier-12
---

## Statement

If $(R,\mathfrak m)$ is a local ring, its localisation map
$$ \lambda:R\longrightarrow R_{\mathfrak m} $$
is a ring isomorphism. Its inverse sends $r/s$ to $rs^{-1}$.

## Facts & Assumptions

**Given:** A local ring $(R,\mathfrak m)$.

[F1] In a local ring, the unique maximal ideal is exactly the set of nonunits ([[thm-local-ring-unit-characterisations]]).

[F2] The denominators in $R_{\mathfrak m}$ are the elements of $R\setminus\mathfrak m$ ([[def-localisation-at-a-prime-ideal]]).

[F3] Any map that inverts all denominators extends uniquely through the localisation ([[thm-universal-property-of-localisation]]).

## Proof

**Proof technique:** direct universal-property argument.

1.1 By [F1] and [F2], every denominator is already a unit in $R$. Applying [F3] to $\operatorname{id}_R$ gives $g:R_{\mathfrak m}\to R$ with $g(r/s)=rs^{-1}$ and $g\lambda=\operatorname{id}_R$. [F1, F2, F3]

2.1 Both $\lambda g$ and $\operatorname{id}_{R_{\mathfrak m}}$ compose with $\lambda$ to give $\lambda$. The uniqueness clause of [F3] gives $\lambda g=\operatorname{id}_{R_{\mathfrak m}}$, so $\lambda$ is an isomorphism with inverse $g$. [F3, step 1.1] ∎
