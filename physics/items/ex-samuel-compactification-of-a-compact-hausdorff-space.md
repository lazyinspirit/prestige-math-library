---
id: ex-samuel-compactification-of-a-compact-hausdorff-space
kind: example
title: "Under dependent choice and the ultrafilter lemma, the Samuel compactification of a nonempty compact Hausdorff space adds no points up to unique uniform isomorphism"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-samuel-compactification-agrees-with-completion-for-totally-bounded-spaces, lem-compact-uniform-spaces-are-complete, lem-compact-uniform-spaces-are-totally-bounded, thm-compact-hausdorff-space-has-a-unique-compatible-uniformity, thm-separated-uniformity-iff-induced-topology-is-hausdorff]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Uniform space"
      url: "https://encyclopediaofmath.org/wiki/Uniform_space"
pipeline_run: null
---

## Example

Assume dependent choice and the ultrafilter lemma. Let $K$ be a nonempty compact Hausdorff space and give it its unique compatible uniformity. Its Samuel compactification is then uniformly isomorphic over $K$ to $K$ itself, and the identity $\operatorname{id}_K$ realizes the corresponding ordinary completion.

## Facts & Assumptions

**Given:** A nonempty compact Hausdorff space $K$ with its unique compatible uniformity.

[L1] The compatible uniformity induces the given Hausdorff topology and is therefore separated; compact uniform spaces are complete and totally bounded ([[thm-compact-hausdorff-space-has-a-unique-compatible-uniformity]], [[thm-separated-uniformity-iff-induced-topology-is-hausdorff]], [[lem-compact-uniform-spaces-are-complete]], [[lem-compact-uniform-spaces-are-totally-bounded]]).

[L2] Under dependent choice, every Samuel completion of a separated totally bounded space is, up to the unique uniform isomorphism fixing that space, its ordinary uniform completion; under the ultrafilter lemma this common completion is compact ([[cor-samuel-compactification-agrees-with-completion-for-totally-bounded-spaces]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the identity $K\to K$ is a Hausdorff completion: it is a uniform embedding, its image is dense, and its target is complete. [L1]

2.1 Apply [L2]: every Samuel completion is uniformly isomorphic over $K$ to the identity completion of step 1.1, and under the stated choice principles it is the Samuel compactification. [L2, step 1.1]

3.1 Thus no point is added; the singleton case is included. [step 2.1] ∎
