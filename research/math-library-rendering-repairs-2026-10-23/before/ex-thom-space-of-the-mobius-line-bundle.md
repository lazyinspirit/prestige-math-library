---
id: ex-thom-space-of-the-mobius-line-bundle
kind: example
title: "Möbius line Thom space as a projective-plane quotient"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-disk-bundle-sphere-bundle-and-thom-space", "prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product"]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item read and recorded Step 7 mathematical repair review, including the used supplier interfaces; current mathematical content matches the bound evidence. The repair review is local and does not claim an independent audit of the repair."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-14.md
      - research/frontier-38-owner-30-dispatch/reader-reader-14.result.json
      - research/frontier-38-owner-30-step5-hash-14-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-14-5a-decisions.json
      - research/frontier-38-owner-30-step7-v2/step7-v2-gate-r1-u1.json
      - research/frontier-38-owner-30-dispatch/alpha-repair-step7-v2-gate-r1-u1.result.json
  precheck: pass
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

For the Möbius line $L\to S^1$, $\operatorname{Th}(L)=D(L)/S(L)$ is homeomorphic to $\mathbb{RP}^2$ with the center of a complementary disk as basepoint. Equivalently it is the quotient $\mathbb{RP}^2/D^2$ for a closed disk whose complement is the interior of a Möbius band. This describes its twisting, beyond the AT mod-two Thom class example.

## Facts & Assumptions

**Given:** $D(L)=[0,1]\times[-1,1]/((0,t)\sim(1,-t))$.

[F1] [[def-disk-bundle-sphere-bundle-and-thom-space]] collapses the sphere boundary to one basepoint.

[F2] [[prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product]] identifies the trivial line's Thom space over $S^1$ with $\Sigma(S^1_+)$.

## Verification

1.1 The disk bundle $D(L)=[0,1]\times[-1,1]/((0,t)\sim(1,-t))$ is a Möbius band and its sphere bundle $S(L)$ is its single boundary circle. Realize $\mathbb{RP}^2$ as the disk with antipodal boundary points identified. Removing from it a smaller concentric open disk leaves the closed annulus with its outer circle antipodally identified, which is again a Möbius band: the outer identification reverses the inward transverse direction on one traversal, which is the defining twist. Since the removed disk is complementary to that Möbius band, $\mathbb{RP}^2$ is obtained from $D(L)$ by attaching a closed disk along $\partial D(L)$, and collapsing that attached disk turns the pushout into $D(L)/\partial D(L)$, which is $\operatorname{Th}(L)$ by [F1]. [F1, given, construct]

2.1 On a disk pair $D_1\subset D_2$ of concentric Euclidean disks, the radial map that sends $D_1$ to the center of $D_2$ and rescales the annulus $D_2\setminus D_1$ onto $D_2$ minus its center, while fixing the complement of $D_2$, is continuous, injective off $D_1$, and onto; it therefore descends to a continuous bijection $D_2/D_1\to D_2$ from the compact quotient to the Hausdorff disk, hence a homeomorphism. Applying this inside the projective plane to a disk containing the attached disk exhibits $\operatorname{Th}(L)\cong\mathbb{RP}^2/D^2\cong\mathbb{RP}^2$ with the basepoint corresponding to the centre of the complementary disk. The trivial line over $S^1$ instead has Thom space $\Sigma(S^1_+)$ by [F2]: its two boundary circles are collapsed to the same basepoint, whereas the unreduced suspension $\Sigma S^1\cong S^2$ keeps its two suspension points distinct. [F2, step 1.1, construct] ∎
