---
id: "thm-levy-continuity-theorem-forward-direction"
kind: "theorem"
title: "Levy continuity theorem forward direction"
deps: ["def-characteristic-function-of-a-real-random-variable", "def-weak-convergence-of-borel-probability-measures"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

If Borel probability laws $\mu_n\Rightarrow\mu$ on $\mathbb R$, then $\varphi_{\mu_n}(t)\to\varphi_\mu(t)$ for every real $t$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Weak convergence tests every bounded continuous real function. [[def-weak-convergence-of-borel-probability-measures]].

[F2] The complex integral is componentwise. [[def-characteristic-function-of-a-real-random-variable]].

## Proof

**Proof technique:** direct.

1.1 Fix $t\in\mathbb R$. The real functions $x\mapsto\cos(tx)$ and $x\mapsto\sin(tx)$ are continuous and bounded by one, so weak convergence gives convergence of each of their integrals against $\mu_n$ to the corresponding integral against $\mu$. [F1]

2.1 By the componentwise definition, the cosine integrals are the real parts of the characteristic functions and the sine integrals their imaginary parts. Combining the two convergences gives the asserted complex limit. At t=0 these two integral sequences are constantly one and zero respectively. Since t was arbitrary the result holds at every frequency. [step 1.1, F2] ∎
