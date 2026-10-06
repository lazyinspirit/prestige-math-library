---
id: ex-thom-space-of-a-trivial-line-bundle
kind: example
title: "Thom space of a trivial line bundle"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product"]
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

## Example

For the supplied product line $B\times\mathbb R$, its Thom space is $\Sigma B_+$. This is the line case of the AT trivial line/plane computation, used here to specify the framed normal target.

## Facts & Assumptions

**Given:** A product line with its specified trivialization.

[F1] [[prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product]] gives the natural quotient.

## Verification

1.1 The disk bundle is $B\times[-1,1]$ and the sphere bundle is $B\times\{-1,1\}$. Collapsing both boundary copies to the one Thom basepoint gives $B_+\wedge([-1,1]/\{-1,1\})$. [F1]

2.1 The interval quotient is the based circle, so the result is $B_+\wedge S^1=\Sigma B_+$. For a point base this is $S^1$; for empty base it is a point. The trivialization records which fiber direction is positive, even though the underlying homeomorphism type does not remember its sign. [F1, step 1.1] ∎
