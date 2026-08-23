---
id: fs-galois-correspondence-is-inclusion-preserving
kind: false-statement
title: "FALSE: the Galois correspondence preserves inclusion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-biquadratic-galois-correspondence-lattice, thm-fundamental-theorem-of-finite-galois-theory]
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
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 3.17"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, The Galois Correspondence, Theorem 5.6"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Statement

**False claim.** If $H_1\subseteq H_2$ are subgroups in a finite Galois correspondence, then $K^{H_1}\subseteq K^{H_2}$.

## Facts & Assumptions

**Given:** The general inclusion-reversing correspondence of [[thm-fundamental-theorem-of-finite-galois-theory]].

[L1] The trivial subgroup fixes the whole biquadratic extension, while each order-two subgroup fixes a quadratic field ([[ex-biquadratic-galois-correspondence-lattice]]).

## Refutation

**Proof technique:** direct.

1.1 In [L1], the trivial subgroup is strictly contained in an order-two subgroup, but its fixed field is the entire biquadratic field and strictly contains the quadratic fixed field of the larger subgroup. [L1, given]

2.1 The subgroup containment in step 1.1 produces the reverse strict field containment, so it refutes inclusion preservation. [step 1.1] ∎
