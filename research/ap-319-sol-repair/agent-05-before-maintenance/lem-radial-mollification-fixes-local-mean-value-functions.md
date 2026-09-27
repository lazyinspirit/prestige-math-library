---
id: lem-radial-mollification-fixes-local-mean-value-functions
kind: lemma
title: "Radial mollification fixes local mean-value functions"
status: published
origin: pipeline
deps: [def-radial-mollifier-family-in-rn, def-spherical-averages-and-local-ball-means-in-rn, lem-sphere-and-ball-measures-scale]
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

Let $u\in C(\Omega)$ have the spherical mean-value property, and let $(\rho_\varepsilon)$ be a radial mollifier family as in [[def-radial-mollifier-family-in-rn]]. Then $(u*\rho_\varepsilon)(x)=u(x)$ whenever $B_\varepsilon(x)\Subset\Omega$.

## Proof

**Given:** $u$ has the local spherical mean-value property and $B_\varepsilon(x)\Subset\Omega$.

1.1 Polar coordinates give $(u*\rho_\varepsilon)(x)=\omega_{n-1}\int_0^\varepsilon q_\varepsilon(t)t^{n-1}M_u(x,t)dt$ [given].

2.1 Substitute $M_u(x,t)=u(x)$ and use $\int\rho_\varepsilon=1$ to obtain $(u*\rho_\varepsilon)(x)=u(x)$ [given]. ∎
