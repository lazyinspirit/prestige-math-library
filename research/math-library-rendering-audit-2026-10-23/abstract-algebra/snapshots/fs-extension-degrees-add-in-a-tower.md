---
id: fs-extension-degrees-add-in-a-tower
kind: false-statement
title: "FALSE: degrees add in a tower of finite field extensions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tower-law-for-finite-field-extensions, thm-subfield-lattice-of-a-finite-field, thm-existence-of-finite-fields]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Sections 1-2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Statement

For every finite tower $F\subseteq K\subseteq L$, one has

$$[L:F]=[L:K]+[K:F].$$

## Facts & Assumptions

**Given:** A field $L$ of order $64=2^6$.

[L1] The tower law is multiplicative: $[L:F]=[L:K][K:F]$ ([[thm-tower-law-for-finite-field-extensions]]).

[L2] The field $\mathbb F_{64}$ has a unique subfield $K$ of order $4$ and prime subfield $F$ of order $2$ ([[thm-subfield-lattice-of-a-finite-field]]).

[L3] A field of order $64$ exists ([[thm-existence-of-finite-fields]]).

## Refutation

**Proof technique:** direct.

1.1 Choose $L=\mathbb F_{64}$ using [L3], let $F=\mathbb F_2$, and let $K=\mathbb F_4\subseteq L$ from [L2]. Then $[K:F]=2$ and $[L:F]=6$. [given, L2, L3]

2.1 By the true tower law [L1], $6=[L:K]\cdot2$, so $[L:K]=3$. [step 1.1, L1, algebra]

3.1 The false additive formula would give $[L:F]=3+2=5$, contradicting the actual value $6$. Thus degrees multiply, rather than add, in a tower. [step 1.1, step 2.1] ∎
