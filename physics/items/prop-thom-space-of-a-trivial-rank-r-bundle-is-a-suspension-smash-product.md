---
id: prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product
kind: proposition
title: "Trivial Thom spaces as suspension smash products"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["prop-thom-space-of-zero-and-trivial-bundles", "def-disk-bundle-sphere-bundle-and-thom-space"]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-14.md; immutable carrier: research/frontier-38-owner-30-step5-hash-14-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-14 dispatch"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.194–196; disk/sphere models, Thom normalization; stabilization on p.196"
---

## Statement

For $r\geq0$, with the product metric and supplied trivialization, $\operatorname{Th}(B\times\mathbb R^r)\cong B_+\wedge S^r=\Sigma^rB_+$ naturally in $B$. The rank-zero and empty-base cases are included.

## Facts & Assumptions

**Given:** A product bundle in the compactly generated convention of [[def-disk-bundle-sphere-bundle-and-thom-space]].

[F1] [[prop-thom-space-of-zero-and-trivial-bundles]] proves the quotient identification of the product bundle, its naturality in $B$ and its degeneracies.

## Proof

1.1 With the product metric and the supplied trivialization, [F1] identifies the disk/sphere pair of $B\times\mathbb R^r$ with $(B\times D^r,B\times S^{r-1})$ and computes the quotient as $B_+\wedge(D^r/S^{r-1})$, naturally in $B$. Under [[def-disk-bundle-sphere-bundle-and-thom-space]] this quotient is exactly $\operatorname{Th}(B\times\mathbb R^r)$, with the same based convention and the same compactly generated quotient topology. [F1]

2.1 Since $D^r/S^{r-1}=S^r$ — with the conventions $S^{-1}=\varnothing$ and $D^0/S^{-1}=\{\mathrm{pt}\}_+=S^0$ when $r=0$ — step 1.1 gives $\operatorname{Th}(B\times\mathbb R^r)\cong B_+\wedge S^r=\Sigma^rB_+$. For $r=0$ the empty sphere bundle and the convention $X/\varnothing=X_+$ leave $B_+$; for empty $B$ both sides are the one-point based space; for $r=1$ the boundary is the two endpoints. The identity formula commutes with pullback along every map $B'\to B$, which is the asserted naturality. This is the AT result restated for the framed DT target. [F1, step 1.1] ∎
