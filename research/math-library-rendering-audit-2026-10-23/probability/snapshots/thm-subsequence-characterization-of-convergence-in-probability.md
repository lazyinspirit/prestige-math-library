---
id: thm-subsequence-characterization-of-convergence-in-probability
kind: theorem
title: "Subsequence characterization of convergence in probability"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-probability, thm-almost-sure-convergence-implies-convergence-in-probability, thm-almost-sure-subsequence-from-convergence-in-probability]
proof_strategy: direct
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Theorem 3.12"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

$X_n\to X$ in probability if and only if every subsequence of $(X_n)$ has a
further subsequence converging almost surely to $X$.

## Facts & Assumptions

**Given:** Real random variables $(X_n)$ and $X$ on one probability space.

[L1] Almost-sure convergence implies convergence in probability ([[thm-almost-sure-convergence-implies-convergence-in-probability]]).

[L2] Probability convergence has an almost-surely convergent subsequence ([[thm-almost-sure-subsequence-from-convergence-in-probability]]).

## Proof

**Proof technique:** direct.

1.1 If $X_n\to X$ in probability, every subsequence has the same property. Apply [L2] to that subsequence to obtain the asserted further subsequence. [L2]

2.1 Conversely, if probability convergence failed, some $\varepsilon>0$ and a subsequence would satisfy $\mathbb P(|X_{n_k}-X|>\varepsilon)\ge\varepsilon$ for every $k$. Any almost-surely convergent further subsequence would converge in probability by [L1], a contradiction. [L1] ∎
