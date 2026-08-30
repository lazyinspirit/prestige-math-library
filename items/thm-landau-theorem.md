---
id: thm-landau-theorem
kind: theorem
title: "Landau's theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-landau-radius-and-landau-constant, thm-bloch-theorem]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, Theorem 7.4.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Statement

If $f$ is holomorphic on $\mathbb D$ and $|f'(0)|=1$, then

$$\lambda(f)\ge\frac1{48}.$$

In particular, $\mathcal L\ge\mathcal B>0$.

## Facts & Assumptions

**Given:** A holomorphic map $f:\mathbb D\to\mathbb C$ with $|f'(0)|=1$.

[L1] Bloch's theorem gives a univalent subdisc whose image contains a round disc of radius at least $1/48$ ([[thm-bloch-theorem]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], some subdomain of $\mathbb D$ is mapped by $f$ univalently onto a round disc of radius at least $1/48$. That round disc is contained in the full image $f(\mathbb D)$, so $\lambda(f)\ge1/48$. [L1, given]

2.1 Since every schlicht disc counted by $\beta(f)$ is also a disc inside $f(\mathbb D)$, one has $\lambda(f)\ge\beta(f)$ for each normalized $f$. Taking infima and using [L1] gives $\mathcal L\ge\mathcal B>0$. [L1, step 1.1] ∎
