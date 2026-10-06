---
id: rem-thom-space-empty-and-rank-zero-conventions
kind: remark
title: "Empty-base and rank-zero Thom conventions"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-disk-bundle-sphere-bundle-and-thom-space", "prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product"]
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-14.md; immutable carrier: research/frontier-38-owner-30-step5-hash-14-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-14 dispatch"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.194–196; disk/sphere models, Thom normalization; stabilization on p.196"
---

## Conventions

The based quotient convention gives $\operatorname{Th}(0_B)=B_+$, even though the sphere bundle is empty. For $B=\varnothing$, the Thom space is the one-point based space. These are the conventions already proved in [[prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product]] and defined in [[def-disk-bundle-sphere-bundle-and-thom-space]]. A rank-zero collapse of a union of components is the identity on that union and sends the other components to the basepoint.
