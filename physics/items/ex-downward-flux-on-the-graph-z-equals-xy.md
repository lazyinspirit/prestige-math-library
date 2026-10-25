---
id: ex-downward-flux-on-the-graph-z-equals-xy
kind: example
title: 'Downward flux through the graph $z=xy$ over the unit square'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-surface-integrals-over-c-one-graphs, thm-jordan-fubini-by-sections, thm-ftc-second-part, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'University of Toronto MAT237 notes, Section 5.3, Basic Problem 3'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
pipeline_run: null
---

## Example

For $F(x,y,z)=(zx,z^2,xy)$, the downward flux through the graph $z=xy$ over $[0,1]^2$ is $-1/18$. The upward flux is $1/18$.

## Facts & Assumptions

**Given:** The graph function $g(x,y)=xy$ and vector field $F$.

[L1] The downward area vector of a $C^1$ graph is $(g_x,g_y,-1)$ ([[thm-surface-integrals-over-c-one-graphs]]), and derivative algebra gives $(g_x,g_y)=(y,x)$ ([[thm-algebra-of-derivatives]]).

[L2] Jordan-Fubini and the fundamental theorem evaluate polynomial integrals over the unit square ([[thm-jordan-fubini-by-sections]], [[thm-ftc-second-part]]).

## Verification

**Proof technique:** direct.

1.1 On the graph, $F(x,y,xy)=(x^2y,x^2y^2,xy)$, and its dot product with the downward area vector $(y,x,-1)$ is $x^2y^2+x^3y^2-xy$. [given, L1, algebra]

2.1 By [L2], the integral is $1/9+1/12-1/4=-1/18$. [step 1.1, L2, algebra]

3.1 Reversing the orientation negates flux, so the upward value is $1/18$. [step 2.1, L1] ∎
