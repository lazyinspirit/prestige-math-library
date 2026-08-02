---
id: thm-samuel-compactification-universal-property
kind: theorem
title: "Under dependent choice and the ultrafilter lemma, uniformly continuous maps to compact Hausdorff spaces extend uniquely over the Samuel compactification"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-samuel-uniformity, def-samuel-compactification, thm-samuel-completion-is-a-compactification, thm-uniform-completion-universal-property-and-uniqueness, lem-compact-uniform-spaces-are-complete, thm-compact-hausdorff-space-has-a-unique-compatible-uniformity, thm-separated-uniformity-iff-induced-topology-is-hausdorff, cor-compact-domain-maps-are-uniformly-continuous, cor-a-compact-hausdorff-space-is-tychonoff, lem-completely-regular-topologies-come-from-continuous-pseudometrics]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "A. Zucker, Big Ramsey Degrees and Topological Dynamics"
      url: "https://www.math.cmu.edu/~andrewz/Big%20Ramsey%202.pdf"
    - title: "Garrido and Meroño, The Samuel realcompactification"
      url: "https://arxiv.org/abs/1706.00279"
pipeline_run: null
---

## Statement

**Assume dependent choice and the ultrafilter lemma.** Let $X$ be a separated uniform space, let $\eta:X\to S(X)$ be a Samuel compactification, and let $f:X\to K$ be uniformly continuous, where $K$ is compact Hausdorff with its unique compatible uniformity. Then there is a unique uniformly continuous $\bar f:S(X)\to K$ such that $\bar f\eta=f$.

## Facts & Assumptions

**Given:** The stated choice principles, a separated uniform space $X$, a uniformly continuous $f:X\to K$, and compact Hausdorff $K$.

[L1] A compact Hausdorff topology has exactly one compatible uniformity; that uniformity is separated, the topology is Tychonoff under dependent choice, and its continuous maps to uniform spaces are uniformly continuous ([[thm-compact-hausdorff-space-has-a-unique-compatible-uniformity]], [[thm-separated-uniformity-iff-induced-topology-is-hausdorff]], [[cor-a-compact-hausdorff-space-is-tychonoff]], [[cor-compact-domain-maps-are-uniformly-continuous]]).

[L2] The gauge $q_h(u,v)=|h(u)-h(v)|$ over continuous $h:K\to[0,1]$ induces the topology of a completely regular space ([[lem-completely-regular-topologies-come-from-continuous-pseudometrics]]).

[L3] A compact uniform space is complete, and a uniformly continuous map from a uniform space to a complete separated uniform space extends uniquely over its Hausdorff completion ([[lem-compact-uniform-spaces-are-complete]], [[thm-uniform-completion-universal-property-and-uniqueness]]).

[L4] Under the two choice principles, a Samuel completion of separated $X$ is a Samuel compactification ([[thm-samuel-completion-is-a-compactification]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the gauge of the continuous maps $h:K\to[0,1]$ is a compatible uniformity on $K$, hence it is the unique compatible uniformity of $K$. [L1, L2]

2.1 For such $h$, [L1] makes $h$ uniformly continuous, so $h\circ f$ is a Samuel coordinate; therefore every finite basic entourage of the gauge in step 1.1 has Samuel-entourage preimage under $f$. [L1, step 1.1]

3.1 Thus $f:(X,\mathcal U_S)\to K$ is uniformly continuous, while $K$ is complete and separated by [L1] and [L3]. [L1, L3, step 2.1]

4.1 Apply [L3] to the Samuel completion to obtain the unique uniformly continuous extension $\bar f:S(X)\to K$. [L3, step 3.1]

5.1 By [L4] this completion is the Samuel compactification claimed in the statement, and its dense canonical image also gives uniqueness among continuous extensions. [L4, step 4.1] ∎
