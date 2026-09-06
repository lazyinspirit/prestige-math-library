---
id: thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic
kind: theorem
title: "Locally uniform limits of harmonic functions are harmonic"
status: published
origin: pipeline
deps: [def-spherical-averages-and-local-ball-means-in-rn, cor-ball-mean-value-property-for-harmonic-functions, thm-continuous-mean-value-functions-are-harmonic]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Statement

If harmonic $u_j$ converge locally uniformly on $\Omega$ to $u$, then $u$ is harmonic.

## Proof

**Given:** $u_j\to u$ uniformly on compact subsets of $\Omega$.

1.1 On every $B_r(x)\Subset\Omega$, [[cor-ball-mean-value-property-for-harmonic-functions]] says $u_j(x)=A_{u_j}(x,r)$ [given].

1.2 Uniform convergence on $\overline {B_r(x)}$ permits passage to the integral, giving $u(x)=A_u(x,r)$ [given].

2.1 [[thm-continuous-mean-value-functions-are-harmonic]] proves $u$ harmonic [step 1.2]. ∎
