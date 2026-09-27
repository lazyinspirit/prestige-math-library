---
id: thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric
kind: theorem
title: "Every smooth vector bundle admits a smooth bundle metric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-bundle-metric, def-local-frame-and-global-frame-of-a-vector-bundle, prop-local-frames-and-local-trivializations-are-equivalent-data, def-euclidean-inner-product, thm-smooth-partitions-of-unity-exist-on-manifolds, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-receipts.jsonl (thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

Assume the Axiom of Countable Choice. Every smooth vector bundle admits a smooth bundle metric.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a smooth vector bundle $E\to M$.

[L1] Under Countable Choice, the base manifold admits smooth partitions of unity subordinate to indexed open covers ([[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[def-countable-choice]]).

[L2] Local frames are equivalent to local trivializations ([[prop-local-frames-and-local-trivializations-are-equivalent-data]]).

## Proof

**Proof technique:** direct.

1.1 Index an open cover by all pairs $(U_\alpha,\tau_\alpha)$ supplied by the bundle's local trivializations, so each cover member comes with its trivialization and no separate family of frame choices is needed. Pull back the Euclidean inner product on $\mathbb R^r$ through $\tau_\alpha$ to obtain a smooth local bundle metric $h_\alpha$ on $E|_{U_\alpha}$. [L2, given, construct]

2.1 Under the stated Countable Choice, [L1] gives a smooth partition of unity $(\rho_\alpha)$ indexed by these same trivialization pairs, with $\operatorname{supp}\rho_\alpha\subseteq U_\alpha$. Define $\rho_\alpha h_\alpha$ on $U_\alpha$ and extend it by zero outside $U_\alpha$; this is smooth because every point outside the closed support of $\rho_\alpha$ has a neighbourhood where the term vanishes. The sum $h:=\sum_\alpha \rho_\alpha h_\alpha$ is locally finite and smooth. At each point $p$, some $\rho_\alpha(p)>0$, all weights are nonnegative, and $\sum_\alpha\rho_\alpha(p)=1$, so $h_p$ is positive definite. Thus $h$ is a smooth bundle metric. [L1, step 1.1, construct, algebra] ∎
