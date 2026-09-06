---
id: thm-limits-in-probability-are-unique-almost-surely
kind: theorem
title: "Limits in probability are unique almost surely"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-almost-sure-convergence-of-random-variables, def-convergence-in-probability]
proof_strategy: direct
sources:
  references:
    - title: "S. Roch, Lecture 3: Modes of convergence, Section 1.3"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

If $X_n\to X$ and $X_n\to Y$ in probability, then $X=Y$ almost surely.

## Facts & Assumptions

**Given:** $X_n\to X$ and $X_n\to Y$ in probability.

[L1] Convergence in probability means every fixed positive error probability tends to zero ([[def-convergence-in-probability]]).

## Proof

**Proof technique:** direct.

1.1 For $a>0$, the triangle inequality gives the containment [given] $$\{|X-Y|>a\}\subseteq \{|X-X_n|>a/2\}\cup\{|X_n-Y|>a/2\}.$$ [given]

2.1 Taking probabilities in step 1.1 and then limits gives the following. [step 1.1, L1] $\mathbb P(|X-Y|>a)=0$ for every $a>0$. The union over $a=1/m$ is $\{X\ne Y\}$, so it is null. [step 1.1, L1] ∎
