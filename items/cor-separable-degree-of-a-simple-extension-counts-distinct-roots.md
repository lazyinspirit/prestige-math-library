---
id: cor-separable-degree-of-a-simple-extension-counts-distinct-roots
kind: corollary
title: "The separable degree of $F(\\alpha)/F$ is the number of distinct roots of $m_{\\alpha}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-degree, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, thm-separable-degree-is-independent-of-the-algebraic-closure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

If $\alpha$ is algebraic over $F$, then $[F(\alpha):F]_s$ equals the number of
distinct roots of the minimal polynomial $m_\alpha$ in any algebraic closure of
$F$.

## Facts & Assumptions

**Given:** An algebraic element $\alpha$ over $F$ and an algebraic closure $\Omega/F$.

[L1] Separable degree counts $F$-embeddings into an algebraic closure ([[def-separable-degree]]).

[L2] Such embeddings of $F(\alpha)$ correspond bijectively to the distinct roots of $m_\alpha$ ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

[L3] The embedding count is independent of the chosen algebraic closure ([[thm-separable-degree-is-independent-of-the-algebraic-closure]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the embedding set counted in [L1] is in bijection with the distinct-root set of $m_\alpha$ in $\Omega$. [L1, L2]

2.1 Taking finite cardinalities gives the assertion, and [L3] removes dependence on $\Omega$. [step 1.1, L3] ∎
