---
id: cor-locally-integrable-weakly-harmonic-functions-are-smooth
kind: corollary
title: "Locally integrable weakly harmonic functions are smooth"
status: published
origin: pipeline
deps: [def-countable-choice, def-distributional-harmonicity-and-poisson-equation-in-rn, thm-weyl-lemma-for-the-laplacian]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (cor-locally-integrable-weakly-harmonic-functions-are-smooth). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. If $f\in L^1_{\rm loc}(\Omega)$ and $\Delta T_f=0$, then $f=h$ almost everywhere for a unique smooth harmonic $h$.

## Proof

**Given:** Countable Choice ([[def-countable-choice]]), $f\in L^1_{\rm loc}(\Omega)$ and $\Delta T_f=0$.

1.1 [[thm-weyl-lemma-for-the-laplacian]] supplies a smooth harmonic $h$ with $T_f=T_h$ [given].

2.1 Equality of regular distributions implies $f=h$ almost everywhere, and uniqueness is inherited [step 1.1]. ∎
