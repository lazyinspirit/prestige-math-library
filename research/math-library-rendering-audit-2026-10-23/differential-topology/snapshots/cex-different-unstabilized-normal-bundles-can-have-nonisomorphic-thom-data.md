---
id: cex-different-unstabilized-normal-bundles-can-have-nonisomorphic-thom-data
kind: counterexample
title: "Embedding-dependent unstable normal Thom data"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-stable-normal-bundle-of-a-compact-smooth-manifold", "thm-stable-normal-bundle-is-independent-of-the-embedding", "prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product"]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-14.md"
      - "research/frontier-38-owner-30-alpha-batch-14-5a.md"
      - "research/frontier-38-owner-30-step5-hash-14-post-5a.json"
    content_sha256: "cdce5a91fc14744c1587e4034ea269f5db46d714e7b014586599b267f945ff27"
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
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §§3–4"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.191–193; tangent/normal complement and stable normal data"
    - title: "Hatcher, Vector Bundles and K-Theory"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "Theorem 1.6, printed pp.20–21; endpoint bundle transport"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.194–196; disk/sphere models, Thom normalization; stabilization on p.196"
---

## Statement refuted

The actual normal bundle and its unsuspended Thom target of a compact smooth manifold are independent of its embedding, without stabilization.

## Facts & Assumptions

**Given:** The one-point smooth $0$-manifold embedded in $\mathbb R$ and in $\mathbb R^2$.

[F1] [[def-stable-normal-bundle-of-a-compact-smooth-manifold]] defines the normal quotient.

[F2] [[prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product]] computes its Thom target.

[F3] [[thm-stable-normal-bundle-is-independent-of-the-embedding]] asserts only stabilized independence.

## Counterexample

1.1 At the point its tangent space is zero, so [F1] gives the normal fibers $\mathbb R$ and $\mathbb R^2$. These bundles have different ranks and are not isomorphic; rank is preserved by a fiberwise linear isomorphism. [F1, given]

2.1 Their Thom spaces are $S^1$ and $S^2$ by [F2]. They are not homeomorphic: removing any point from $S^1$ gives an open interval, and removing any further point disconnects it; removing a point from $S^2$ gives $\mathbb R^2$, which remains path connected after removing any further point (polygonal paths may be detoured around that point). A putative sphere homeomorphism would preserve these deletion properties. Nevertheless adding one trivial line to the first normal fiber gives the second and suspends its Thom sphere, in accordance with [F3]. This explicitly exhibits why only the stable normal class is intrinsic. [F2, F3, step 1.1] ∎
