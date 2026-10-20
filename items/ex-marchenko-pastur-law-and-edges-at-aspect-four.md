---
id: ex-marchenko-pastur-law-and-edges-at-aspect-four
kind: example
title: "Structural zeros and the positive edge above aspect one"
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

Assume AC. Let $(\xi_{ij})_{i,j\ge1}$ be one infinite real iid array with mean zero, variance one and finite fourth moment. Set $X_n=(\xi_{ij})_{1\le i\le n,1\le j\le p_n}$ and suppose $p_n/n\to4$. For $S_n=X_n^{\mathsf T}X_n/n$, the limiting empirical spectral distribution has density
$$\rho_4(x)=\begin{cases}\dfrac{\sqrt{(9-x)(x-1)}}{8\pi x},&1<x<9,\\0,&\text{otherwise},\end{cases}$$
and an atom of mass $3/4$ at zero; almost surely $S_n$ has exactly $p_n-n$ zero eigenvalues eventually, its largest eigenvalue tends to $9$, and its smallest positive eigenvalue tends to $1$.

## Example references

[[def-marchenko-pastur-measure]]

[[thm-marchenko-pastur-law-for-sample-covariance]]

[[thm-largest-eigenvalue-sample-covariance-edge]]

[[thm-smallest-positive-eigenvalue-sample-covariance-edge]]

## Facts & Assumptions

**Given:** AC, the entry-law assumptions in the Example, and $\gamma=4$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]).

[A2] The Axiom of Choice implies countable choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Under countable choice, the density, endpoints, and atom are defined by the Marchenko–Pastur formula ([[def-marchenko-pastur-measure]]).

[L1] The MP weak law is stated in [[thm-marchenko-pastur-law-for-sample-covariance]].

[L2] The largest-edge conclusion is stated in [[thm-largest-eigenvalue-sample-covariance-edge]].

[L3] The smallest-positive-edge and eventual-full-row-rank conclusions are stated in [[thm-smallest-positive-eigenvalue-sample-covariance-edge]].

## Verification

**Given:** The hypotheses and notation in the Example.

1.1 Since $\sqrt\gamma=2$, the endpoints are $a=(1-2)^2=1$ and $b=(1+2)^2=9$, while the zero atom is $(1-1/4)_+=3/4$. Substituting in [F1] gives the displayed density on $(1,9)$ and zero outside, plus the atom $3/4$. [given, A2, F1, algebra]

2.1 The nested array and AC satisfy [L1]–[L3]. The MP weak law [L1] gives the limiting density and atom computed in step 1.1. Independently, [L2] gives largest edge $9$; [L3] gives smallest positive edge $1$ and eventual full row rank, hence exactly $p_n-n$ zero eigenvalues. Intersecting these probability-one events proves the assertions. [A1, L1, L2, L3, step 1.1, algebra] ∎
