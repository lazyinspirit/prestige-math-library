---
id: thm-spherical-mean-value-property-for-harmonic-functions
kind: theorem
title: "Spherical mean-value property for harmonic functions"
status: published
origin: pipeline
deps: [def-laplacian-of-a-c2-function, def-spherical-averages-and-local-ball-means-in-rn, lem-radial-derivative-of-a-spherical-average]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Statement

If $u\in C^2(\Omega)$ and $\Delta u=0$, then $u(x)=M_u(x,r)$ whenever $B_r(x)\Subset\Omega$.

## Proof

**Given:** $u$ is classically harmonic and $B_r(x)\Subset\Omega$.

1.1 [[lem-radial-derivative-of-a-spherical-average]] gives $\frac d{dt}M_u(x,t)=0$ for $0<t\le r$ [given].

1.2 Hence $M_u(x,t)$ is constant, and continuity gives $\lim_{t\downarrow0}M_u(x,t)=u(x)$ [given].

2.1 Its value at $r$ is therefore $u(x)$ [step 1.2]. ∎
