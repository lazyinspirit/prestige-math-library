---
id: prop-null-homotopic-maps-form-a-two-sided-additive-ideal
kind: proposition
title: "Null-homotopic maps form a two-sided additive ideal"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-null-homotopic-chain-map, lem-chain-homotopy-is-compatible-with-addition-and-composition, thm-the-category-of-complexes-in-an-additive-category-is-additive]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
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

If $\mathcal A$ is an abelian category, then in $\operatorname{Ch}(\mathcal A)$
the null-homotopic maps form a two-sided
additive ideal: the zero map is null-homotopic, sums of null-homotopic maps
are null-homotopic, and whiskering a null-homotopic map on either side by a
chain map again gives a null-homotopic map.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$, null-homotopic chain maps $f,g:C_\bullet\to D_\bullet$, and chain maps $v:B_\bullet\to C_\bullet$, $u:D_\bullet\to E_\bullet$ in $\operatorname{Ch}(\mathcal A)$.

[L1] A null-homotopic chain map is a chain map homotopic to the zero map ([[def-null-homotopic-chain-map]]).

[L2] Chain homotopy is compatible with sums and whiskering ([[lem-chain-homotopy-is-compatible-with-addition-and-composition]]).

[L3] Because $\mathcal A$ is abelian and hence additive, $\operatorname{Ch}(\mathcal A)$ is additive, so it has zero maps and sums of parallel maps ([[thm-the-category-of-complexes-in-an-additive-category-is-additive]]).

## Proof

**Proof technique:** direct.

1.1 The zero chain map is null-homotopic via the zero degree-$1$ family, and [L3] guarantees this zero map exists in $\operatorname{Ch}(\mathcal A)$. [L1, L3, given, algebra]

2.1 Because $f$ and $g$ are each homotopic to zero by [L1], [L2] shows $f+g\simeq0+0=0$, $uf\simeq0$, and $fv\simeq0$. Hence sums and left or right composition preserve null-homotopy, so these maps form a two-sided additive ideal. [L1, L2, step 1.1, algebra] ∎
