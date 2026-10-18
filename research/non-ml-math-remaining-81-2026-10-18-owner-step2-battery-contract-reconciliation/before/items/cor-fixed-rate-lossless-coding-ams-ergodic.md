---
id: cor-fixed-rate-lossless-coding-ams-ergodic
kind: corollary
title: "Fixed-rate lossless coding for AMS ergodic sources"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - thm-ams-ergodic-information-aep
  - lem-aep-implies-fixed-rate-lossless-coding
  - def-axiom-of-choice
  - thm-dominated-convergence
  - def-finite-block-source-code
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC as inherited through the AMS information-AEP tail-domination prerequisite."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Paul H. Algoet and Thomas M. Cover, “A Sandwich Proof of the Shannon–McMillan–Breiman Theorem,” Annals of Probability 16 (1988), 899–909"
      url: "https://isl.stanford.edu/~cover/papers/paper83.pdf"
      locator: "Theorem 4, PDF pp.8–9: generalized AEP for an AMS source using likelihood-ratio bounds and Borel–Cantelli."
    - title: "Robert M. Gray, Entropy and Information Theory, corrected edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 8 §§8.2–8.4, printed pp.153–164: finite-past information, stationary componentwise SMB, nonergodic and AMS entropy-transfer proofs."
---
## Statement

Assume AC. For a finite-alphabet AMS source with ergodic stationary mean, fixed-rate lossless coding has vanishing block error above the stationary-mean entropy rate and success probability tending to zero below it.

## Facts & Assumptions

**Given:** AC; a finite-alphabet AMS source with ergodic stationary mean and entropy rate $h$; and a target rate $R\ge0$ with the fixed-length code convention of [[def-finite-block-source-code]].

[A1] [[def-axiom-of-choice]]: AC is inherited only through the AMS information-AEP tail-domination prerequisite.

[F1] [[thm-ams-ergodic-information-aep]]: normalized self-information under the AMS block law converges almost surely, hence in probability, to $h$.

[F2] [[lem-aep-implies-fixed-rate-lossless-coding]]: an information AEP gives the fixed-rate achievability and converse.
[F3] [[thm-dominated-convergence]]: bounded almost-surely convergent indicators converge in expectation.

## Proof

**Given:** AC and the source and hypotheses above.

1.1 Almost-sure convergence in [F1] implies convergence in probability by [F3] applied to the bounded deviation indicators. [A1, F1, F3, given, algebra]

2.1 Apply [F2]. Every rate $R>h$ admits fixed-length codes with block error tending to zero, and for every $R<h$ every fixed-length code sequence has success probability tending to zero. This conclusion concerns the AMS source law; no stationarity assumption on that law is added. [F1, F2, step 1.1] ∎
