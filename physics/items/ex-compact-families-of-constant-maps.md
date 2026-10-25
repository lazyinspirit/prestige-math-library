---
id: ex-compact-families-of-constant-maps
kind: example
title: "A compact set of target values gives a compact family of constant maps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-compact-open-topology-for-topological-domains, thm-compactness-under-continuous-maps]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Topology, second edition, Section 47"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
pipeline_run: null
---

## Example

Let $X$ be a nonempty locally compact Hausdorff space, let $Y$ be a metric space, and let $Q\subseteq Y$ be compact. For $q\in Q$, let $c_q:X\to Y$ be the constant map with value $q$. Then $\mathcal C_Q:=\{c_q:q\in Q\}$ is compact in the compact-open topology, and $q\mapsto c_q$ is a homeomorphism from $Q$ onto $\mathcal C_Q$.

## Facts & Assumptions

**Given:** A nonempty locally compact Hausdorff space $X$, a metric space $Y$, and a compact subset $Q\subseteq Y$.

[L1] Compact-open subbasic sets have the form $S(K,V)=\{f:f[K]\subseteq V\}$ ([[def-compact-open-topology-for-topological-domains]]).

[L2] A continuous image of a compact space is compact, and a continuous bijection from a compact space to a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]]).

## Verification

**Proof technique:** direct.

1.1 Define $\Phi:Q\to C(X,Y)$ by $\Phi(q)=c_q$. For a subbasic $S(K,V)$, its inverse image under $\Phi$ is $Q$ when $K=\varnothing$, and is $Q\cap V$ when $K\ne\varnothing$. Hence $\Phi$ is continuous. [L1]

1.2 Fix $x_0\in X$. Evaluation at $x_0$ is continuous because the inverse image of open $V\subseteq Y$ is $S(\{x_0\},V)$. Its restriction to $\mathcal C_Q$ is inverse to $\Phi$. [L1]

2.1 By [L2], the image $\mathcal C_Q=\Phi[Q]$ is compact. [L2, step 1.1]

3.1 Therefore $\Phi:Q\to\mathcal C_Q$ is a homeomorphism, and step 2.1 gives the asserted compactness. [step 1.1, step 2.1, step 1.2] ∎
