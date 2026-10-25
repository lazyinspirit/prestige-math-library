---
id: prop-pe05-shallow-water-admissible-state-set-is-convex
kind: proposition
title: The shallow-water wet/dry state set is convex
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-pe05-shallow-water-balance-law, def-pe03-convex-invariant-domain]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "J.-L. Guermond and B. Popov, Invariant Domains and First-Order Continuous Finite Element Approximation for Hyperbolic Systems"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_popov_sinum_hyperbolic_systems_2016.pdf"
      locator: "Complete 24-page paper; §2.2, Definition 2.4, PDF pp. 3–4."
    - title: "E. Audusse, F. Bouchut, M.-O. Bristeau, R. Klein, and B. Perthame, A Fast and Stable Well-Balanced Scheme with Hydrostatic Reconstruction for Shallow Water Flows"
      url: "https://publications.imp.fu-berlin.de/478/1/file_2004_siam.pdf"
      locator: "Complete 16-page paper; §2.1, dry-depth convention, printed pp. 2052–2053."
---

## Statement

The admissible wet/dry state set $K$ from [[def-pe05-shallow-water-balance-law]] is convex.

## Facts & Assumptions

**Given:** The set $K=\{(h,m):h>0\}\cup\{(0,0)\}$. Prove its convexity using the PE03 convention.

[F1] [[def-pe05-shallow-water-balance-law]]: every state in $K$ has $h>0$ with arbitrary $m$, or is exactly $(0,0)$.

[F2] [[def-pe03-convex-invariant-domain]]: a set is convex when every segment between two of its elements lies in the set.

## Proof

1.1 Let $(h_1,m_1),(h_2,m_2)\in K$ and $\theta\in[0,1]$. The convex combination has depth $h_\theta=\theta h_1+(1-\theta)h_2\ge0$. If $\theta=0$ or $\theta=1$, it is an endpoint in $K$ by [F1]. If $0<\theta<1$ and $h_\theta=0$, nonnegativity forces $h_1=h_2=0$; [F1] then gives $m_1=m_2=0$, so the combination is $(0,0)\in K$. If $h_\theta>0$, [F1] places the combination in $K$ for any momentum. [given, F1, algebra]

2.1 Thus every segment between two states in $K$ lies in $K$, which is exactly the convexity condition in [F2]. [F2, step 1.1] ∎
