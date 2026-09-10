---
id: def-induced-filtration-on-homology
kind: definition
title: Induced filtration on homology
deps: ["def-filtered-chain-complex", "thm-a-chain-map-induces-a-well-defined-map-on-homology", "prop-homology-respects-identities-and-composition"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
---



## Definition

For a filtered chain complex, the **induced filtration on homology** is
$$F_pH_n(C)=\operatorname{im}\bigl(H_n(F_pC)\longrightarrow H_n(C)\bigr).$$
The arrow is induced by the inclusion chain map from [[def-filtered-chain-complex]], using [[thm-a-chain-map-induces-a-well-defined-map-on-homology]]. Since $F_{p-1}C\to C$ factors through $F_pC$, functoriality in [[prop-homology-respects-identities-and-composition]] shows that its homology image is contained in $F_pH_n(C)$. Thus this is an increasing family of subobjects of $H_n(C)$. The domain $H_n(F_pC)$ of the arrow need not embed into $H_n(C)$.

## Source notes

[Stacks §12.24](https://stacks.math.columbia.edu/tag/012K), Definition 12.24.5; Weibel §5.5 p.135.
