---
id: cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
kind: corollary
title: "Every finite-dimensional real or complex inner product space has an orthonormal basis"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-gram-schmidt-orthonormalisation, def-linear-basis]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., result 6.35'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

Every finite-dimensional real or complex inner product space has an orthonormal basis. In dimension zero, this is the empty basis.

## Facts & Assumptions

**Given:** A finite-dimensional inner product space $V$.

[L1] A finite-dimensional vector space has a finite basis, with the empty list serving when $V=0$ ([[def-linear-basis]]).

[L2] Gram–Schmidt converts every finite independent list into an orthonormal list with the same span ([[thm-gram-schmidt-orthonormalisation]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite basis $(v_0,\ldots,v_{r-1})$ of $V$ using [L1]. [L1, choose]

2.1 Apply [L2]. The resulting orthonormal list has the same span as the basis, namely $V$, and therefore is an orthonormal basis. This also covers $r=0$. [step 1.1, L2] ∎
