---
id: lem-radial-derivative-of-a-spherical-average
kind: lemma
title: "Radial derivative of a spherical average"
status: published
origin: pipeline
deps: [def-spherical-averages-and-local-ball-means-in-rn, lem-sphere-and-ball-measures-scale, thm-polar-coordinates-formula-for-lebesgue-measure]
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

If $u\in C^2(\Omega)$, $B_r(x)\Subset\Omega$, and $m(t)=M_u(x,t)$, then $m'(r)=\frac r n\frac{1}{|B_r(x)|}\int_{B_r(x)}\Delta u(y)dy$.

## Proof

**Given:** $u\in C^2(\Omega)$ and $B_r(x)\Subset\Omega$.

1.1 Differentiation under the compact sphere integral gives $m'(r)=\omega_{n-1}^{-1}\int_{S^{n-1}}\nabla u(x+r\theta)\cdot\theta d\sigma(\theta)$ [given].

1.2 Integrating $\partial_t(t^{n-1}\partial_tu(x+t\theta))$ from $0$ to $r$, then using polar coordinates, yields $r^{n-1}\omega_{n-1}m'(r)=\int_{B_r(x)}\Delta u$ [given].

2.1 Divide by $|B_r|=\omega_{n-1}r^n/n$ from [[lem-sphere-and-ball-measures-scale]] [step 1.2]. ∎
