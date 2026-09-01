---
id: prop-comparison-maps-respect-composition-up-to-homotopy
kind: proposition
title: "Comparison maps respect composition up to homotopy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-projective-comparison-map-exists, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Statement

Assume the Axiom of Dependent Choice.

Given composable morphisms $A\xrightarrow{u}B\xrightarrow{v}C$ and chosen projective resolutions of the three objects, any comparison map lifting $vu$ is chain-homotopic to the composite of a comparison map lifting $u$ with a comparison map lifting $v$.
## Facts & Assumptions

**Given:** Projective resolutions of $A$, $B$, and $C$, together with comparison maps lifting $u$ and $v$.

[L1] Comparison maps exist for the composite morphism ([[thm-projective-comparison-map-exists]]).

[L2] Two comparison maps lifting the same object morphism are chain-homotopic ([[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]).
## Proof

**Proof technique:** direct.

1.1 Let $F_\bullet$ lift $u$ and $G_\bullet$ lift $v$. By [L1], choose a comparison map $H_\bullet$ lifting the composite $vu$. The composite $G_\bullet F_\bullet$ also lifts $vu$. [L1, given, construct]

2.1 Since $H_\bullet$ and $G_\bullet F_\bullet$ lift the same morphism $vu$, [L2] makes them chain-homotopic. This is exactly the claimed compatibility with composition up to homotopy. [L2, step 1.1] ∎
