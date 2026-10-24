---
id: cor-convex-subsets-of-rn-are-contractible
kind: corollary
title: "Every nonempty convex subset of $\\mathbb{R}^n$ is contractible"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-two-maps-into-a-convex-set-are-homotopic, cor-contractible-iff-identity-nullhomotopic]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-08
    scope: published-audit
    delegated_by: owner
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Algebraic Topology lecture notes (UC Riverside)"
      url: "https://math.ucr.edu/~jbergner/SPWM09.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$. Every nonempty convex subset $C\subseteq\mathbb R^n$, with its Euclidean subspace topology, is contractible. More precisely, for each $c\in C$ the formula

$$H(x,t)=(1-t)x+tc$$

is a homotopy from $\operatorname{id}_C$ to the constant map at $c$.

## Facts & Assumptions

**Given:** A nonempty convex subset $C\subseteq\mathbb R^n$ and a point $c\in C$.

[L1] Any two continuous maps into a nonempty convex subset of $\mathbb R^n$ are homotopic by the straight-line formula ([[thm-two-maps-into-a-convex-set-are-homotopic]]).

[L2] A nonempty space is contractible exactly when its identity map is nullhomotopic ([[cor-contractible-iff-identity-nullhomotopic]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to $\operatorname{id}_C:C\to C$ and the constant map $c_c:C\to C$. The resulting homotopy is $H(x,t)=(1-t)x+tc$. [L1]

2.1 Thus $\operatorname{id}_C$ is nullhomotopic, so $C$ is contractible by [L2]. [step 1.1, L2] ∎
