---
id: lem-sphere-and-ball-measures-scale
kind: lemma
title: "Sphere and ball measures scale in Rn"
status: published
origin: pipeline
deps: [def-spherical-averages-and-local-ball-means-in-rn, thm-polar-coordinates-formula-for-lebesgue-measure, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (lem-sphere-and-ball-measures-scale). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Statement

Assume the Axiom of Countable Choice. For $n\ge1$ and $r>0$, $|\partial B_r|=\omega_{n-1}r^{n-1}$ and $|B_r|=\omega_{n-1}r^n/n$; both factors are finite and positive.

## Proof

**Given:** Countable Choice, $n\ge1$, and $r>0$.

1.1 The parametrization $\theta\mapsto r\theta$ gives $|\partial B_r|=\omega_{n-1}r^{n-1}$ [given].

2.1 Under Countable Choice, applying [[thm-polar-coordinates-formula-for-lebesgue-measure]] to $1_{B_r}$ gives $|B_r|=\omega_{n-1}\int_0^r t^{n-1}dt=\omega_{n-1}r^n/n$ [given, algebra]. ∎
