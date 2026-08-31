---
id: ex-dedekind-localisation-is-dvr
kind: example
title: "Localizing a Dedekind domain at a nonzero prime"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-dedekind-localisation-at-nonzero-prime-is-dvr, def-prime-ideal-valuations-on-fractional-ideals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Example

Let $R$ be a Dedekind domain, let $\mathfrak p$ be a nonzero prime ideal, and let $n\ge0$ be an integer.
Then $R_{\mathfrak p}$ is a DVR, and
$$
(\mathfrak p^n)_{\mathfrak p}=\mathfrak p^nR_{\mathfrak p}.
$$
Hence $v_{\mathfrak p}(\mathfrak p^n)=n$.

## Facts & Assumptions

**Given:** A Dedekind domain $R$, a nonzero prime ideal $\mathfrak p$, and an integer $n\ge0$.

[L1] The localisation $R_{\mathfrak p}$ is a discrete valuation ring ([[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]).

[F1] The valuation $v_{\mathfrak p}(I)$ is defined by the equality $I_{\mathfrak p}=\mathfrak p^{v_{\mathfrak p}(I)}R_{\mathfrak p}$ ([[def-prime-ideal-valuations-on-fractional-ideals]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the localisation $R_{\mathfrak p}$ is a DVR. Localising the ideal $\mathfrak p^n$ gives exactly $\mathfrak p^nR_{\mathfrak p}$ by the definition of localisation of ideals. [L1, given]

2.1 Comparing step 1.1 with [F1] shows that the corresponding valuation is $v_{\mathfrak p}(\mathfrak p^n)=n$. [F1, step 1.1] ∎
