---
id: "def-positive-definite-function-on-the-real-line"
kind: "definition"
title: "Positive definite function on the real line"
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
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
status: published
origin: "pipeline"
---

## Definition

A function $\psi:\mathbb R\to\mathbb C$ is **positive definite** if for every integer $n\ge1$, all $t_1,\ldots,t_n\in\mathbb R$ and all $z_1,\ldots,z_n\in\mathbb C$, the number
$$\sum_{j=1}^n\sum_{k=1}^n z_j\overline{z_k}\psi(t_j-t_k)$$
is real and nonnegative. The frequencies may repeat and coefficients may vanish. Including $n=0$ would impose only the automatic inequality $0\ge0$. Taking $n=1$, $z_1=1$ forces $\psi(0)$ to be real and nonnegative; normalization to $\psi(0)=1$ is not part of this definition. Continuity is also not imposed. This definition asserts no representation theorem and makes no choice assumption.
