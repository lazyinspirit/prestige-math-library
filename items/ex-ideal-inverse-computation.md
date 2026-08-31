---
id: ex-ideal-inverse-computation
kind: example
title: "Computing an inverse fractional ideal explicitly"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-product-and-colon-of-fractional-ideals, thm-unique-factorisation-of-ideals-in-dedekind-domains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
pipeline_run: null
---

## Example

In $R=\mathbb Z$, let $I=(2/3)\mathbb Z$. Then
$$
(R:I)=(3/2)\mathbb Z,
$$
and therefore $I(R:I)=R$.

## Facts & Assumptions

**Given:** The fractional ideal $I=(2/3)\mathbb Z$ of $R=\mathbb Z$.

[F1] The inverse candidate is defined by $(R:I)=\{x\in\mathbb Q:xI\subseteq R\}$ ([[def-product-and-colon-of-fractional-ideals]]).

[L1] Fractional ideals factor uniquely into prime powers ([[thm-unique-factorisation-of-ideals-in-dedekind-domains]]).

## Verification

**Proof technique:** direct.

1.1 An element $x\in\mathbb Q$ lies in $(R:I)$ exactly when $x(2/3)\in\mathbb Z$, equivalently when $x\in(3/2)\mathbb Z$. Thus $(R:I)=(3/2)\mathbb Z$. [F1, given, algebra]

2.1 Multiplying the displayed generators gives $(2/3)(3/2)=1$, so $I(R:I)=\mathbb Z$. This agrees with the valuation description from [L1]. [L1, step 1.1, algebra] ∎
