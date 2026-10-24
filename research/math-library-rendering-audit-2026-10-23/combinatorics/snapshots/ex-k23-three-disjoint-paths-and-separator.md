---
id: ex-k23-three-disjoint-paths-and-separator
kind: example
title: "In $K_{2,3}$, the two vertices in the two-part have three internally disjoint paths and a minimum separator of size three"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-menger-finite-directed-and-undirected-path-forms, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $K_{2,3}$ have two-part $\{x_1,x_2\}$ and three-part $\{y_1,y_2,y_3\}$.
The paths $x_1y_ix_2$ for $i=1,2,3$ are internally vertex-disjoint, and
$\{y_1,y_2,y_3\}$ is a minimum $x_1$-$x_2$ separator.

## Facts & Assumptions

**Given:** The displayed complete bipartite graph $K_{2,3}$.

[L1] For nonadjacent terminals, finite vertex Menger equates maximum internally disjoint paths and minimum vertex separators ([[thm-menger-finite-directed-and-undirected-path-forms]]).

## Verification

**Verification technique:** direct.

1.1 The three paths $x_1y_1x_2$, $x_1y_2x_2$, and $x_1y_3x_2$ have distinct internal vertices. [given]

1.2 Deleting all three $y_i$ destroys every $x_1$-$x_2$ path, while deleting fewer leaves some $y_i$ and its two-edge path.

1.3 The terminals are nonadjacent, so [L1] agrees with the direct calculation: both the packing and separator numbers equal three. [L1]

2.1 This is a concrete equality case for the local undirected vertex form. [step 1.1, step 1.2, step 1.3] ∎
