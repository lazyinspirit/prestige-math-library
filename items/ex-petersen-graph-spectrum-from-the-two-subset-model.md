---
id: ex-petersen-graph-spectrum-from-the-two-subset-model
kind: example
title: "The two-subset model reproduces the Petersen spectrum"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-petersen-graph, thm-spectrum-of-the-petersen-graph]
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
    - title: "Steve Butler, Spectral Graph Theory course notes, lecture 9"
      url: "https://www.stevebutler.org/spectral2023"
---

## Example

The Petersen graph, realised on the two-element subsets of a five-element set,
has adjacency spectrum $\{3,1^5,(-2)^4\}$.

## Facts & Assumptions

**Given:** The Petersen graph on $[\Omega]^2$ for a five-element set $\Omega$.

[F1] This graph is the Petersen graph exactly when adjacency means disjointness of the two-element subsets ([[def-petersen-graph]]).

[L1] The Petersen graph has adjacency spectrum $\{3,1^5,(-2)^4\}$ ([[thm-spectrum-of-the-petersen-graph]]).

## Verification

**Proof technique:** direct.

1.1 By [F1], the displayed two-subset construction is precisely the Petersen graph, not merely an isomorphic copy under a different naming convention. [F1]

2.1 Therefore [L1] applies directly and yields the spectrum $\{3,1^5,(-2)^4\}$. [step 1.1, L1] ∎
