---
id: ex-adjacency-spectrum-of-c-four
kind: example
title: "The cycle $C_4$ has adjacency spectrum $\\{2,0,0,-2\\}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-spectrum-of-the-cycle-graph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Steve Butler, Spectral Graph Theory course notes, lecture 3"
      url: "https://www.stevebutler.org/spectral2023"
---

## Example

The cycle graph $C_4$ has adjacency spectrum $\{2,0,0,-2\}$.

## Facts & Assumptions

**Given:** The cycle graph $C_4$.

[L1] The cycle graph $C_n$ has adjacency eigenvalues $2\cos(2\pi j/n)$ for $0\le j<n$ ([[thm-spectrum-of-the-cycle-graph]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L1] with $n=4$ gives the eigenvalues $2\cos(0)=2$, $2\cos(\pi/2)=0$, $2\cos(\pi)=-2$, and $2\cos(3\pi/2)=0$. [L1, algebra]

2.1 Reordering these values from largest to smallest yields $\{2,0,0,-2\}$. [step 1.1] ∎
