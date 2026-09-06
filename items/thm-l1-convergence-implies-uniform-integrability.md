---
id: thm-l1-convergence-implies-uniform-integrability
kind: theorem
title: "$L^1$ convergence implies uniform integrability"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-convergence-in-l-one-of-a-measure, def-convergence-in-lp-for-random-variables, def-probability-measure, def-uniformly-integrable-family]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 4.6.3"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

If $X_n\to X$ in $L^1$ on a probability space, then
$\{X,X_0,X_1,\ldots\}$ is uniformly integrable.

## Facts & Assumptions

**Given:** Integrable $X_n,X$ with $\mathbb E|X_n-X|\to0$.

[L1] Uniform integrability is vanishing uniformly of the large-value tail integrals ([[def-uniformly-integrable-family]]).

[L2] $L^1$ convergence means $\mathbb E|X_n-X|\to0$ ([[def-convergence-in-l-one-of-a-measure]]).

## Proof

**Proof technique:** direct.

1.1 Given $\varepsilon>0$, choose $N$ from [L2] so that the following tail estimate holds for $n\ge N$. [L2, algebra] $\mathbb E|X_n-X|<\varepsilon/4$ for $n\ge N$. For $M>0$, $$\mathbb E[|X_n|\mathbf1_{|X_n|>M}] \le2\mathbb E|X_n-X|+2\mathbb E[|X|\mathbf1_{|X|>M/2}]$$ for $n\ge N$, by splitting at $|X|>M/2$. [L2, algebra]

2.1 Choose $M$ so the tail of $X$ in step 1.1 is below $\varepsilon/4$ and control the finite initial family separately. [step 1.1, L1, choose] The finitely many functions $X,X_0,\ldots,X_{N-1}$ each have tail below $\varepsilon$. Then step 1.1 gives the same bound for all later $X_n$. By [L1] the whole family is uniformly integrable. [step 1.1, L1, choose] ∎
