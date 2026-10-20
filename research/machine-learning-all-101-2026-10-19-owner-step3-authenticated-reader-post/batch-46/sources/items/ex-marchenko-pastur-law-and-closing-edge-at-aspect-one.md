---
id: ex-marchenko-pastur-law-and-closing-edge-at-aspect-one
kind: example
title: "The Marchenko–Pastur support and closing lower edge at aspect one"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-marchenko-pastur-measure
  - thm-marchenko-pastur-law-for-sample-covariance
  - thm-largest-eigenvalue-sample-covariance-edge
  - thm-smallest-positive-eigenvalue-sample-covariance-edge
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
proof_strategy: direct
aliases: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, Chapters 3 and 5"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Example

Assume AC. Let $(\xi_{ij})_{i,j\ge1}$ be one infinite real iid array with mean zero, variance one and finite fourth moment. Set $X_n=(\xi_{ij})_{1\le i\le n,1\le j\le p_n}$ and suppose $p_n/n\to1$. For $S_n=X_n^{\mathsf T}X_n/n$, the limiting empirical spectral distribution has density
$$\rho_1(x)=\begin{cases}\dfrac{\sqrt{4-x}}{2\pi\sqrt{x}},&0<x<4,\\0,&\text{otherwise},\end{cases}$$
and no atom at zero; almost surely the largest eigenvalue tends to $4$ and the smallest positive eigenvalue tends to $0$.

## Example references

[[def-marchenko-pastur-measure]]

[[thm-marchenko-pastur-law-for-sample-covariance]]

[[thm-largest-eigenvalue-sample-covariance-edge]]

[[thm-smallest-positive-eigenvalue-sample-covariance-edge]]

## Facts & Assumptions

**Given:** AC, the entry-law assumptions in the Example, and $\gamma=1$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]).

[A2] The Axiom of Choice implies countable choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Under countable choice, the density, endpoints, and atom are defined by the Marchenko–Pastur formula ([[def-marchenko-pastur-measure]]).

[L1] The MP weak law is stated in [[thm-marchenko-pastur-law-for-sample-covariance]].

[L2] The largest-edge conclusion is stated in [[thm-largest-eigenvalue-sample-covariance-edge]].

[L3] The smallest-positive-edge conclusion is stated in [[thm-smallest-positive-eigenvalue-sample-covariance-edge]].

## Verification

**Given:** The hypotheses and notation in the Example.

1.1 At $\gamma=1$, the endpoints are $a=0$ and $b=4$, and the atom is zero. On $(0,4)$ the density simplifies as $\sqrt{(4-x)x}/(2\pi x)=\sqrt{4-x}/(2\pi\sqrt{x})$, giving the formula in the Example. [given, A2, F1, algebra]

2.1 The nested array and AC satisfy [L1]–[L3]. The MP weak law [L1] gives the density computed in step 1.1. Independently, [L2] gives largest edge $4$, while [L3] gives an eventually defined smallest positive eigenvalue tending to zero. Their simultaneous probability-one conclusions prove the Example, without inferring either edge from the weak law. [A1, L1, L2, L3, step 1.1, algebra] ∎
