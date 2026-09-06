---
id: lem-pairing-preserves-convergence-in-probability
kind: lemma
title: "Pairing preserves convergence in probability"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-probability]
proof_strategy: direct
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Theorem 3.14"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

If $X_n\to X$ and $Y_n\to Y$ in probability, then, for every
$\varepsilon>0$,
$$\mathbb P\!\left(\max\{|X_n-X|,|Y_n-Y|\}>\varepsilon\right)\longrightarrow0.$$
Thus the pairs converge in probability for the max metric on $\mathbb R^2$.

## Facts & Assumptions

**Given:** $X_n\to X$ and $Y_n\to Y$ in probability.

[L1] Each coordinate convergence controls its fixed-threshold error event ([[def-convergence-in-probability]]).

## Proof

**Proof technique:** direct.

1.1 For $\varepsilon>0$, the max-metric bad event equals $$\{|X_n-X|>\varepsilon\}\cup\{|Y_n-Y|>\varepsilon\}.$$ [algebra]

2.1 The union bound and [L1] make the probability in step 1.1 tend to zero, which proves the claim. [step 1.1, L1] ∎
