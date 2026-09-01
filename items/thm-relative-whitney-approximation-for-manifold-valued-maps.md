---
id: thm-relative-whitney-approximation-for-manifold-valued-maps
kind: theorem
title: "Relative Whitney approximation for manifold-valued maps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-relative-whitney-approximation-for-euclidean-valued-maps,
       lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood,
       thm-whitney-approximation-for-manifold-valued-maps]
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Smooth Approximation of Maps Between Manifolds"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $F:M\to N$ be continuous, let $A\subseteq M$ be closed, and suppose $F$ is
smooth on a neighbourhood of $A$. Then there exists a smooth map
$\widetilde F:M\to N$ such that $\widetilde F=F$ on a neighbourhood of $A$ and
$\widetilde F$ is homotopic to $F$.

## Facts & Assumptions

**Given:** A continuous map $F:M\to N$, a closed set $A\subseteq M$, and the
assumption that $F$ is smooth on a neighbourhood of $A$.

[L1] Relative Euclidean approximation preserves the map near a closed set
([[thm-relative-whitney-approximation-for-euclidean-valued-maps]]).

[L2] Fine approximation can be forced into a tubular neighbourhood, and the
absolute manifold-valued theorem retracts such an approximation back to the
target ([[lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood]],
[[thm-whitney-approximation-for-manifold-valued-maps]]).

## Proof
**Proof technique:** direct.

1.1 In the proof of the absolute manifold-valued theorem from [L2], fix one Euclidean embedding $j:N\hookrightarrow\mathbb R^m$, one tubular neighbourhood $U$ of $j(N)$, and one tubular retraction $r:U\to j(N)$. [L2, given, choose]

2.1 Apply the fine-approximation lemma from [L2] to $j\circ F$ and $U$, then apply the relative Euclidean approximation theorem from [L1] to obtain a smooth map $H:M\to\mathbb R^m$ such that $H=j\circ F$ on a neighbourhood of $A$ and $H(M)\subseteq U$. [L1, L2, step 1.1, construct]

3.1 Define $\widetilde F:=j^{-1}\circ r\circ H$. On the neighbourhood where $H=j\circ F$, the retraction fixes $j(F)$ pointwise, so $\widetilde F=F$ there. The same straight-line homotopy inside $U$ as in the absolute theorem gives a homotopy from $F$ to $\widetilde F$. [step 1.1, step 2.1, algebra] ∎
