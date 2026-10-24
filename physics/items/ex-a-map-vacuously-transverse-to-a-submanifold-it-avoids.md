---
id: ex-a-map-vacuously-transverse-to-a-submanifold-it-avoids
kind: example
title: "A map vacuously transverse to a submanifold it avoids"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-a-smooth-map-transverse-to-an-embedded-submanifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

The constant map $F:\mathbb R\to\mathbb R^2$, $F(t)=(0,1)$, is transverse to
the $x$-axis $Z=\mathbb R\times\{0\}$ because $F(\mathbb R)\cap Z=\varnothing$.

## Facts & Assumptions

**Given:** The constant map $F(t)=(0,1)$ and the submanifold $Z=\mathbb R\times\{0\}$.

[F1] A smooth map is transverse to a submanifold when the tangent-space condition holds at every point of the preimage, and this is vacuous when the preimage is empty ([[def-a-smooth-map-transverse-to-an-embedded-submanifold]]).

## Verification
**Proof technique:** direct.

1.1 The image of $F$ is the single point $(0,1)$, which does not lie on the $x$-axis. Hence $F^{-1}(Z)=\varnothing$. [given]

2.1 By [F1], the transversality condition has no points to check when the preimage is empty. Therefore $F\pitchfork Z$. [F1, step 1.1]

3.1 This is a concrete vacuous transversality example. [step 2.1] ∎