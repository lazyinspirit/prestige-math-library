---
id: ex-kuratowski-embedding-of-a-finite-metric-space
kind: example
title: "The Kuratowski embedding of a finite metric space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-kuratowski-distance-map-is-an-isometry]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "James Dugundji, Topology"
      url: "https://dokumen.pub/topology-12th-printingnbsped-9780697068897.html"
pipeline_run: frontier-29
---

## Example

Let $M=\{o,a,b\}$ with metric determined by

$$d(o,a)=1,\qquad d(a,b)=1,\qquad d(o,b)=2.$$

Using $o$ as basepoint, the based Kuratowski map
$K_o:M\to C_b(M)$ is given by

$$K_o(o)=(0,0,0),\qquad K_o(a)=(1,-1,-1),\qquad K_o(b)=(2,0,-2),$$

where each function is recorded by its values on $(o,a,b)$. These three points
in $\mathbb R^3$ are at the same pairwise sup distances as the original metric
space.

## Facts & Assumptions

**Given:** The three-point metric space $M=\{o,a,b\}$ above.

[L1] The based Kuratowski map preserves all distances
([[thm-kuratowski-distance-map-is-an-isometry]]).

## Verification

**Proof technique:** direct.

1.1 By definition, $K_o(x)(z)=d(x,z)-d(o,z)$. Evaluating this on the three points gives $K_o(o)=(0,0,0)$, $K_o(a)=(1,-1,-1)$, and $K_o(b)=(2,0,-2)$. [given, algebra]

2.1 The sup distances are $\|K_o(a)-K_o(o)\|_\infty=1$, $\|K_o(b)-K_o(a)\|_\infty=1$, and $\|K_o(b)-K_o(o)\|_\infty=2$, exactly matching $d(o,a)$, $d(a,b)$, and $d(o,b)$. This is the concrete instance promised by [L1]. [L1, step 1.1, algebra] ∎
