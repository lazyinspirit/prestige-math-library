---
id: lem-author-80e2d7bee57f-spectral-integer-shift
kind: lemma
title: Homotopy groups of integer spectral shifts
status: draft
domain: mathematics
deps:
  - def-stable-spectra-interface
dependency_roles:
  def-stable-spectra-interface: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 4
---

## Statement
For a spectrum $E$ in the stable spectra interface and integers $i,k$, there is a natural isomorphism $\pi_i(E[k])\cong\pi_{i-k}(E)$, where $[1]$ is suspension and $[-1]$ its inverse.

## Facts & Assumptions
**Given:** $E$ and integers $i,k$.

**Goal:** Compute the homotopy index after shifting.

[F1] [[def-stable-spectra-interface]] defines suspension and desuspension as inverse shifts and supplies $\pi_i(E[1])\cong\pi_{i-1}(E)$.

## Proof
1.1 For $k\geq0$, iterate the isomorphism in [F1] $k$ times, including the identity when $k=0$. This gives $\pi_i(E[k])\cong\pi_{i-k}(E)$. [F1, given]

2.1 For $k<0$, apply the nonnegative case to $E[k]$ and $-k$: $\pi_{i-k}(E)\cong\pi_i(E[k])$. Inverting this isomorphism gives the stated formula. Every step is natural in $E$. [F1, step 1.1] ∎
