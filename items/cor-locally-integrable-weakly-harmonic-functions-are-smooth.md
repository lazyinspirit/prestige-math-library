---
id: cor-locally-integrable-weakly-harmonic-functions-are-smooth
kind: corollary
title: "Locally integrable weakly harmonic functions are smooth"
status: draft
origin: pipeline
deps: [def-distributional-harmonicity-and-poisson-equation-in-rn, thm-weyl-lemma-for-the-laplacian]
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

If $f\in L^1_{\rm loc}(\Omega)$ and $\Delta T_f=0$, then $f=h$ almost everywhere for a unique smooth harmonic $h$.

## Proof

**Given:** $f\in L^1_{\rm loc}(\Omega)$ and $\Delta T_f=0$.

1.1 [[thm-weyl-lemma-for-the-laplacian]] supplies a smooth harmonic $h$ with $T_f=T_h$ [given].

2.1 Equality of regular distributions implies $f=h$ almost everywhere, and uniqueness is inherited [step 1.1]. ∎
