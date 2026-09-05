---
id: thm-enriched-completeness-is-cotensors-plus-small-conical-limits
kind: theorem
title: "Enriched completeness is cotensors plus small conical limits"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cotensor-and-tensor, def-conical-limit-in-an-enriched-category, def-enriched-weighted-limit]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Theorem 3.73"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Corollary 7.6.4"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

Assume $\mathcal V$ is symmetric monoidal right closed, locally small,
complete, and cocomplete. A $\mathcal V$-category is complete in the enriched
sense if and only if it has all cotensors and all small conical enriched
limits.

## Facts & Assumptions

**Given:** A base $\mathcal V$ as in the statement and a $\mathcal V$-category $\mathcal B$.

[L1] Cotensors are the one-object enriched weighted limits
([[def-cotensor-and-tensor]]).

[L2] Conical enriched limits are the constant-unit weighted enriched limits
([[def-conical-limit-in-an-enriched-category]]).

[L3] Enriched weighted limits are the general notion of enriched limit
([[def-enriched-weighted-limit]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathcal B$ is enriched complete, then it has every enriched weighted limit by [L3]. In particular it has the one-object weights of [L1] and the constant-unit weights of [L2], so it has all cotensors and all small conical limits. [L1, L2, L3, given]

1.2 Conversely, assume $\mathcal B$ has all cotensors and all small conical limits. For a small weight $W:\mathcal A\to\mathcal V$ and diagram $T:\mathcal A\to\mathcal B$, form the enriched end $$\int_A W(A)\pitchfork T(A).$$ Its standard equalizer presentation uses a small product of the displayed cotensors and a small product of cotensors encoding the two action maps for every ordered pair of objects of $\mathcal A$. All those cotensors exist by hypothesis, and the products and equalizer are small conical limits, so the end exists. Applying $\mathcal B(B,-)$ and the cotensor identities identifies this end with $$[\mathcal A,\mathcal V](W,\mathcal B(B,T-)),$$ which is precisely the weighted-limit universal property of [L3]. [L1, L2, L3, construct]

2.1 Therefore enriched completeness is equivalent to the joint existence of cotensors and all small conical enriched limits. [step 1.1, step 1.2] ∎
