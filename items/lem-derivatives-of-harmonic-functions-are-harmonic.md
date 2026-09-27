---
id: lem-derivatives-of-harmonic-functions-are-harmonic
kind: lemma
title: "Derivatives of harmonic functions are harmonic"
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (lem-derivatives-of-harmonic-functions-are-harmonic). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Every partial derivative of a smooth harmonic function is smooth harmonic. Under the Axiom of Countable Choice $\mathrm{AC}_\omega$, if $\Delta T=0$, every distributional derivative of $T$ is induced by the corresponding smooth harmonic derivative.

## Proof

**Given:** $\Delta h=0$; for the distributional assertion, Countable Choice ([[def-countable-choice]]) and $\Delta T=0$.

1.1 Constant-coefficient derivatives commute, so $\Delta(\partial^\alpha h)=\partial^\alpha\Delta h=0$ [given].

2.1 Under Countable Choice, [[thm-weyl-lemma-for-the-laplacian]] supplies $T=T_h$. The derivative definition gives $\partial^\alpha T=T_{\partial^\alpha h}$ [step 1.1]. ∎
