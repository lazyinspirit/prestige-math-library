---
id: cor-ball-mean-value-property-for-harmonic-functions
kind: corollary
title: "Ball mean-value property for harmonic functions under Countable Choice"
status: published
origin: pipeline
deps: [def-countable-choice, def-spherical-averages-and-local-ball-means-in-rn, lem-sphere-and-ball-measures-scale, thm-polar-coordinates-formula-for-lebesgue-measure, thm-spherical-mean-value-property-for-harmonic-functions]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (cor-ball-mean-value-property-for-harmonic-functions). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Countable Choice. Under [[thm-spherical-mean-value-property-for-harmonic-functions]], $u(x)=A_u(x,r)$ for every $B_r(x)\Subset\Omega$.

## Proof

**Given:** Countable Choice ([[def-countable-choice]]), $u$ is harmonic and $B_r(x)\Subset\Omega$.

1.1 Under Countable Choice, [[thm-polar-coordinates-formula-for-lebesgue-measure|polar coordinates]] express $\int_{B_r(x)}u=\omega_{n-1}\int_0^r t^{n-1}M_u(x,t)dt$ [given].

1.2 The spherical identity makes this $\omega_{n-1}u(x)r^n/n=u(x)|B_r|$ [given, algebra].

2.1 Divide by the positive ball volume from [[lem-sphere-and-ball-measures-scale]] [step 1.2]. ∎
