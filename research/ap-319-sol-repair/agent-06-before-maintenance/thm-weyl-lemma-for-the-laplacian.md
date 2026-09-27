---
id: thm-weyl-lemma-for-the-laplacian
kind: theorem
title: "Weyl's lemma for the Laplacian"
status: published
origin: pipeline
deps: [def-distributional-harmonicity-and-poisson-equation-in-rn, cor-ball-mean-value-property-for-harmonic-functions, lem-radial-mollification-fixes-local-mean-value-functions, lem-distributional-laplacian-commutes-with-mollification]
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

If $T\in\mathcal D'(\Omega)$ and $\Delta T=0$, there is a unique smooth harmonic $h$ with $T=T_h$.

## Proof

**Given:** $\Delta T=0$ on the open set $\Omega$.

1.1 [[lem-distributional-laplacian-commutes-with-mollification]] makes $h_\varepsilon=T*\rho_\varepsilon$ smooth and harmonic on $\Omega_\varepsilon$ [given].

2.1 Radial mean invariance and associativity of convolution show on every common shrunken domain that $h_\varepsilon*\rho_\delta=h_\delta*\rho_\varepsilon$ [step 1.1].

3.1 The nested-interior double-convolution equality makes the regularizations agree as their radii shrink; their common local value defines a smooth harmonic $h$, and $T_{h_\varepsilon}\to T$ gives $T_h=T$ [step 2.1].

4.1 If $T_h=T_k$, then $h=k$ almost everywhere; continuity makes $h=k$ everywhere [given]. ∎
