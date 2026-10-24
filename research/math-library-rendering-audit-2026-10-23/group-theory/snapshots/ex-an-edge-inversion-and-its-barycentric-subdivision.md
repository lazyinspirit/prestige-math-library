---
id: ex-an-edge-inversion-and-its-barycentric-subdivision
kind: example
title: "An edge inversion and its barycentric subdivision"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-barycentric-subdivision-removes-edge-inversions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Yuriy Tumarkin, Groups Acting on Trees"
      url: "https://www.scribd.com/document/825918235/trees"
---

## Example

Let $T$ be a single geometric edge with endpoints $u$ and $v$, and let the
nontrivial element of $C_2$ swap $u$ and $v$. This action inverts the unique
edge of $T$, but after barycentric subdivision it fixes the midpoint vertex and
acts without inversions.

## Facts & Assumptions

**Given:** The reflected one-edge tree.

[L1] Barycentric subdivision preserves the tree and removes edge inversions. ([[lem-barycentric-subdivision-removes-edge-inversions]])

## Verification

**Proof technique:** direct.

1.1 Before subdivision, the nontrivial element sends the oriented edge $u\to v$ to the reverse edge $v\to u$, so there is an inversion. [L1, given]

2.1 After subdivision, the midpoint is a vertex fixed by the action, and each half-edge is sent to the other half-edge with the same orientation type rather than to its reverse. This is exactly the mechanism asserted in [L1]. [L1, step 1.1, algebra] ∎
