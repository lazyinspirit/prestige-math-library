---
id: fs-vertex-and-edge-connectivity-always-agree
kind: false-statement
title: "FALSE: vertex connectivity, edge connectivity and minimum degree are always equal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-whitney-connectivity-inequalities, def-vertex-and-edge-connectivity]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Wolfram MathWorld, Vertex Connectivity"
      url: "https://mathworld.wolfram.com/VertexConnectivity.html"
pipeline_run: null
---

## Statement

**FALSE.** Every nontrivial connected finite simple graph satisfies
$\kappa(G)=\lambda(G)=\delta(G)$.

## Facts & Assumptions

**Given:** The bowtie graph $G$ with two triangles $xabx$ and $xcdx$ sharing only the vertex $x$.

[L1] Whitney's theorem guarantees only $\kappa(G)\le\lambda(G)\le\delta(G)$ ([[thm-whitney-connectivity-inequalities]]).

[F1] Vertex and edge connectivity are the minimum sizes of vertex and edge cuts ([[def-vertex-and-edge-connectivity]]).

## Refutation

**Proof technique:** direct.

1.1 Deleting $x$ separates the two edges $ab$ and $cd$, while the connected graph has no vertex cut of size $0$. Hence $\kappa(G)=1$. [given, F1]

1.2 Deleting the two edges $xa$ and $xb$ separates $a,b$ from the other triangle, so $\lambda(G)\le2$. No single edge disconnects $G$, because every edge lies on one of the two triangles and the other two edges of that triangle give an alternate path between its endpoints. Hence $\lambda(G)=2$. [given, F1]

1.3 The four noncentral vertices have degree $2$ and $x$ has degree $4$, so $\delta(G)=2$. [given]

2.1 Thus $\kappa(G)=1<2=\lambda(G)=\delta(G)$, a strict instance of the first Whitney inequality and a counterexample to the asserted equality. [step 1.1, step 1.2, step 1.3, L1] ∎
