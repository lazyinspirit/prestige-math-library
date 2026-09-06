---
id: cor-ball-mean-value-property-for-harmonic-functions
kind: corollary
title: "Ball mean-value property for harmonic functions"
status: draft
origin: pipeline
deps: [def-spherical-averages-and-local-ball-means-in-rn, lem-sphere-and-ball-measures-scale, thm-spherical-mean-value-property-for-harmonic-functions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
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

Under [[thm-spherical-mean-value-property-for-harmonic-functions]], $u(x)=A_u(x,r)$ for every $B_r(x)\Subset\Omega$.

## Proof

**Given:** $u$ is harmonic and $B_r(x)\Subset\Omega$.

1.1 Polar coordinates express $\int_{B_r(x)}u=\omega_{n-1}\int_0^r t^{n-1}M_u(x,t)dt$ [given].

1.2 The spherical identity makes this $\omega_{n-1}u(x)r^n/n=u(x)|B_r|$ [given, algebra].

2.1 Divide by the positive ball volume from [[lem-sphere-and-ball-measures-scale]] [step 1.2]. ∎
