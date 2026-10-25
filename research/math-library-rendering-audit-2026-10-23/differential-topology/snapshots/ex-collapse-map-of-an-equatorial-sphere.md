---
id: ex-collapse-map-of-an-equatorial-sphere
kind: example
title: "Explicit normal-framed collapse of an equatorial sphere"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-pontryagin-thom-collapse-of-an-embedded-submanifold", "prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product"]
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
    content_sha256: "8eacbdf132a404a133d5a4355564878884ce18307b06e1193a939010e81f697a"
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
    - title: "Stanford Math 215B notes, Lectures 14–15, Theorems 138–139"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "printed pp.44–46; collapse pullback, compact-support duality and Thom normalization"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.194–196; disk/sphere models, Thom normalization; stabilization on p.196"
---

## Example

For $S^n=\{(x,0)\}\subset S^{n+1}\subset\mathbb R^{n+1}\times\mathbb R$, use its upward unit normal framing and $0<a<1$. An explicit collapse to $S^n_+\wedge S^1$ is
$$c(\sqrt{1-t^2}\,x,t)=[x,t/a]\quad(|t|<a),\qquad c=*\quad(|t|\geq a).$$
Here $S^1=[-1,1]/\{-1,1\}$. Projecting the first smash factor by $S^n_+\to S^0$ gives the framed collapse to $S^1$.

## Facts & Assumptions

**Given:** $n\geq0$, the standard equator and the specified upward normal framing.

[F1] [[def-pontryagin-thom-collapse-of-an-embedded-submanifold]] fixes the compatible tube and collapse.

[F2] [[prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product]] identifies its trivial line target.

## Verification

1.1 The chart $\Phi(x,t)=(\sqrt{1-t^2}x,t)$ is a diffeomorphism onto the band $|t|<1$. Its derivative in the normal direction at $t=0$ is $(0,1)$, so it respects exactly the specified framing. The metric disk of radius $a$ is its closed band, and [F1] gives the displayed formula. [F1, given]

2.1 The two band boundaries go to the circle basepoint, so the outside constant formula pastes continuously. By [F2] its target is $S^n_+\wedge S^1$. The continuous based map $S^n_+\to S^0$ sends the whole equator to the nonbasepoint; smashing it with the identity produces the claimed sphere-valued framed collapse. For $n=0$ the same formula has two band components and remains valid. [F2, step 1.1] ∎
