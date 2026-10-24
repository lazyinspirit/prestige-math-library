---
id: ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five
kind: example
title: "An upside-down comb with anticonnected blocks creates a $\\overline{P_5}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-standard-complete-bipartite-path-and-cycle-graphs,
       def-complete-anticomplete-pure-and-x-sparse-blockades]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Claim 5.2.2 pattern"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Example

In the mixed-pair obstruction from Claim 5.2.2 of the source, the five vertices
$v,u,w,z,a_i$ induce $\overline{P_5}$.

## Facts & Assumptions

**Given:** Vertices $v,u,w,z,a_i$ such that $vu,vw,vz,uw,a_iw,a_iz\in E(G)$ and $va_i,ua_i,uz,wz\notin E(G)$.

## Verification

**Proof technique:** direct finite check.

1.1 Among the five chosen vertices, the only nonedges are $va_i$, $a_iu$, $uz$, and $wz$. All other pairs are adjacent by hypothesis. [given]

2.1 The four nonedges from step 1.1 are exactly the edges of the path $v-a_i-u-z-w$. Therefore the induced graph on $\{v,u,w,z,a_i\}$ is the complement of a five-vertex path. [step 1.1] ∎
