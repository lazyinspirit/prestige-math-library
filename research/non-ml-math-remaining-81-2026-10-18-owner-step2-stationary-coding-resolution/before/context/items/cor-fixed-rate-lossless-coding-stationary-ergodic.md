---
id: cor-fixed-rate-lossless-coding-stationary-ergodic
kind: corollary
title: "Fixed-rate source coding theorem for stationary ergodic sources"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - cor-ergodic-shannon-mcmillan-breiman
  - lem-aep-implies-fixed-rate-lossless-coding
  - thm-dominated-convergence
  - def-finite-block-source-code
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 8 §§8.2–8.4, printed pp.153–164: finite-past information, stationary componentwise SMB, nonergodic and AMS entropy-transfer proofs."
---
## Statement

For a stationary ergodic finite-alphabet source, fixed-rate lossless coding has vanishing block error above the entropy rate and success probability tending to zero below it.

## Facts & Assumptions

**Given:** A stationary ergodic finite-alphabet source of entropy rate $h$, a target rate $R\ge0$, and fixed-length binary block codes as in [[def-finite-block-source-code]].

[F1] [[cor-ergodic-shannon-mcmillan-breiman]]: $-n^{-1}\log_2P(X_0^{n-1})\to h$ almost surely, hence in probability.

[F2] [[lem-aep-implies-fixed-rate-lossless-coding]]: information convergence in probability gives vanishing error above $h$ and vanishing success below $h$.
[F3] [[thm-dominated-convergence]]: bounded almost-surely convergent indicators converge in expectation.

## Proof

**Given:** The source, its entropy rate and coding convention.

1.1 Almost-sure convergence in [F1] implies convergence in probability: for each $\epsilon>0$, the indicators of deviations by more than $\epsilon$ tend almost surely to zero and are bounded by one, so [F3] makes their expectations tend to zero. [F1, F3, given, algebra]

2.1 Apply [F2] with this AEP limit. For every $R>h$ there are rate-$R$ codes with block error tending to zero; for every $R<h$, every rate-$R$ code sequence has success probability tending to zero. At $R=h$ no boundary conclusion follows from the theorem. [F1, F2, step 1.1] ∎
