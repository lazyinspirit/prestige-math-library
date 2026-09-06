---
id: lem-sphere-and-ball-measures-scale
kind: lemma
title: "Sphere and ball measures scale in Rn"
status: draft
origin: pipeline
deps: [def-spherical-averages-and-local-ball-means-in-rn, thm-polar-coordinates-formula-for-lebesgue-measure]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Statement

For $n\ge1$ and $r>0$, $|\partial B_r|=\omega_{n-1}r^{n-1}$ and $|B_r|=\omega_{n-1}r^n/n$; both factors are finite and positive.

## Proof

**Given:** $n\ge1$ and $r>0$.

1.1 The parametrization $\theta\mapsto r\theta$ gives $|\partial B_r|=\omega_{n-1}r^{n-1}$ [given].

2.1 Applying [[thm-polar-coordinates-formula-for-lebesgue-measure]] to $1_{B_r}$ gives $|B_r|=\omega_{n-1}\int_0^r t^{n-1}dt=\omega_{n-1}r^n/n$ [given, algebra]. ∎
