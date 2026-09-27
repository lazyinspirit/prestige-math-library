---
id: lem-derivatives-of-harmonic-functions-are-harmonic
kind: lemma
title: "Derivatives of harmonic functions are harmonic"
status: published
origin: pipeline
deps: [def-distributional-harmonicity-and-poisson-equation-in-rn, thm-weyl-lemma-for-the-laplacian]
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

Every partial derivative of a smooth harmonic function is smooth harmonic. If $\Delta T=0$, every distributional derivative of $T$ is induced by the corresponding smooth harmonic derivative.

## Proof

**Given:** $\Delta h=0$.

1.1 Constant-coefficient derivatives commute, so $\Delta(\partial^\alpha h)=\partial^\alpha\Delta h=0$ [given].

2.1 For $T=T_h$ from [[thm-weyl-lemma-for-the-laplacian]], the derivative definition gives $\partial^\alpha T=T_{\partial^\alpha h}$ [step 1.1]. ∎
