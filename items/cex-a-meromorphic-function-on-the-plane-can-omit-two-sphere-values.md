---
id: cex-a-meromorphic-function-on-the-plane-can-omit-two-sphere-values
kind: counterexample
title: "The exponential function omits 0 and infinity as a meromorphic map on the plane"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-meromorphic-little-picard-theorem, thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-surjects-onto-the-punctured-plane]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Statement refuted

A nonconstant meromorphic function on $\mathbb C$ omits at most one sphere
value.

## Facts & Assumptions

**Given:** The exponential function regarded as a meromorphic map $e^z:\mathbb C\to\widehat{\mathbb C}$.

[L1] The exponential is entire ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[L2] Its image is $\mathbb C\setminus\{0\}$ ([[thm-complex-exponential-surjects-onto-the-punctured-plane]]).

## Counterexample

**Proof technique:** direct.

1.1 Fact [L1] makes $e^z$ meromorphic on $\mathbb C$ with no poles, and [L2] identifies its image as $\mathbb C\setminus\{0\}$. [L1, L2, given]

2.1 As a sphere-valued map, the omitted values are therefore $0$ and $\infty$. Since $e^z$ is nonconstant, this refutes the claim that at most one sphere value can be omitted. [step 1.1] ∎
