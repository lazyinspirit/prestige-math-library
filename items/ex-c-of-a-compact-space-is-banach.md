---
id: ex-c-of-a-compact-space-is-banach
kind: example
title: "$C(K)$ is Banach when $K$ is compact metric"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-cb-of-a-space-is-banach, thm-extreme-value-metric,
       def-metric-compactness]
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
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
pipeline_run: frontier-27
---

## Example

If $K$ is a nonempty compact metric space, then the space $C(K)$ of continuous
scalar functions on $K$, with the supremum norm, is a Banach space.

## Facts & Assumptions

**Given:** A nonempty compact metric space $K$.

[L1] Every bounded continuous function space $C_b(X)$ is Banach for the supremum norm ([[ex-cb-of-a-space-is-banach]]).

[L2] A continuous real-valued function on a nonempty compact metric space is bounded and attains its extrema ([[thm-extreme-value-metric]]).

## Verification

**Proof technique:** direct.

1.1 If $f\in C(K)$, [L2] makes $f$ bounded. Hence $C(K)=C_b(K)$ as sets and the supremum norms agree. [L2]

2.1 Since $K$ is nonempty and compact, [L1] makes $C_b(K)$ Banach for the supremum norm. By step 1.1, this is exactly $C(K)$ with the same norm. [step 1.1, L1] ∎
