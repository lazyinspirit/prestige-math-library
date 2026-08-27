---
id: fs-exponential-generating-functions-multiply-without-labelled-product-hypothesis
kind: false-statement
title: "FALSE: exponential generating functions multiply without the labelled-product hypothesis"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-labelled-symbolic-method-rules-for-exponential-generating-functions]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics — Symbolic Combinatorics"
      url: "https://algo.inria.fr/flajolet/Publications/FlSe02.pdf"
pipeline_run: null
---

## Statement

**False claim:** whenever two labelled classes $\mathcal{A}$ and $\mathcal{B}$
are combined in any way, the exponential generating function of the result is
the product of the EGFs of $\mathcal{A}$ and $\mathcal{B}$.

## Facts & Assumptions

**Given:** The labelled product rule of
[[thm-labelled-symbolic-method-rules-for-exponential-generating-functions]].

## Proof

**Proof technique:** direct.

1.1 The product rule of [[thm-labelled-symbolic-method-rules-for-exponential-generating-functions]] applies to the labelled product $\mathcal{A}\star\mathcal{B}$, where the label set is split into two disjoint parts, one for the $\mathcal{A}$-object and one for the $\mathcal{B}$-object. [given]

2.1 If that disjointness requirement is dropped, two one-label structures can be forced to live on the same label. Then the combined object has size $1$, whereas the EGF product would place it in degree $2$. So multiplication is not a free rule about arbitrary combinations; it is the rule for the labelled product and depends on that hypothesis. [step 1.1, given]

3.1 Therefore the claim is false. [step 2.1] ∎
