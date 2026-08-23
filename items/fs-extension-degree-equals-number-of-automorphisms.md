---
id: fs-extension-degree-equals-number-of-automorphisms
kind: false-statement
title: "FALSE: every degree-$n$ extension has exactly $n$ automorphisms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-separable-nonnormal-extension-with-trivial-automorphism-group, thm-relative-automorphism-group-and-separable-degree-bound, cor-relative-automorphism-order-divides-extension-degree]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Galois Correspondence, Corollary 4.3 and examples"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Statement

**False claim.** Every finite extension $K/F$ has $|\operatorname{Aut}(K/F)|=[K:F]$.

## Facts & Assumptions

**Given:** The valid upper bound of [[thm-relative-automorphism-group-and-separable-degree-bound]] and divisibility result of [[cor-relative-automorphism-order-divides-extension-degree]].

[L1] $\mathbb Q(\sqrt[3]{2})/\mathbb Q$ has degree three and trivial automorphism group ([[cex-separable-nonnormal-extension-with-trivial-automorphism-group]]).

## Refutation

**Proof technique:** direct.

1.1 The extension in [L1] has degree $3$ but automorphism-group order $1$, so the two numbers are unequal. [L1]

2.1 The same witness satisfies the correct statements $1\le3$ and $1\mid3$, showing that equality, not the bound or divisibility, is the failed assertion. [step 1.1, given] ∎
