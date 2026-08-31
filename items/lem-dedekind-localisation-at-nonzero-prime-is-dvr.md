---
id: lem-dedekind-localisation-at-nonzero-prime-is-dvr
kind: lemma
title: "Localizing a Dedekind domain at a nonzero prime gives a DVR"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dedekind-domain, thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a Dedekind domain and let $\mathfrak p\subset R$ be a nonzero prime ideal. Then $R_{\mathfrak p}$ is a discrete valuation ring.

## Facts & Assumptions

**Given:** A Dedekind domain $R$ and a nonzero prime ideal $\mathfrak p$.

[F1] A Dedekind domain is a Noetherian integrally closed domain of Krull dimension $1$ ([[def-dedekind-domain]]).

[L1] In a Noetherian integrally closed domain, the localisation at a height-one prime is a discrete valuation ring ([[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]).

## Proof

**Proof technique:** direct.

1.1 Because $R$ is a domain, $(0)\subsetneq\mathfrak p$ is a strict prime chain. Since [F1] gives $\dim R=1$, no longer strict chain ending at $\mathfrak p$ exists. Therefore $\mathfrak p$ has height $1$. [F1, given, algebra]

2.1 The ring $R$ is Noetherian and integrally closed by [F1], and step 1.1 shows that $\mathfrak p$ is height one. Hence [L1] applies and gives that $R_{\mathfrak p}$ is a discrete valuation ring. [F1, L1, step 1.1] ∎
