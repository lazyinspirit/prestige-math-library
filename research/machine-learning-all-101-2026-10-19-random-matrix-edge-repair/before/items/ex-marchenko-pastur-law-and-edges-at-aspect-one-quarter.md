---
id: ex-marchenko-pastur-law-and-edges-at-aspect-one-quarter
kind: example
title: "Marchenko–Pastur law and edges below aspect one"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-marchenko-pastur-measure
  - thm-marchenko-pastur-law-for-sample-covariance
  - thm-largest-eigenvalue-sample-covariance-edge
  - thm-smallest-positive-eigenvalue-sample-covariance-edge
  - def-axiom-of-choice
proof_strategy: direct
aliases: []
provenance:
  statement: ai-generated
  proof: ai-altered
---

## Example

Assume AC. Let $X_n\in\mathbb R^{n\times p_n}$ have mutually independent entries with a common mean-zero, unit-variance law of finite fourth moment and $p_n/n\to1/4$. For $S_n=X_n^{\mathsf T}X_n/n$, the limiting empirical spectral distribution has density
$$\rho_{1/4}(x)=\begin{cases}\dfrac{2\sqrt{(9/4-x)(x-1/4)}}{\pi x},&1/4<x<9/4,\\0,&\text{otherwise},\end{cases}$$
and no atom at zero; the largest eigenvalue tends almost surely to $9/4$, the smallest positive eigenvalue tends almost surely to $1/4$, and $S_n$ has no zero eigenvalues eventually almost surely.

## Example references

[[def-marchenko-pastur-measure]]

[[thm-marchenko-pastur-law-for-sample-covariance]]

[[thm-largest-eigenvalue-sample-covariance-edge]]

[[thm-smallest-positive-eigenvalue-sample-covariance-edge]]

## Facts & Assumptions

**Given:** AC, the entry-law assumptions in the Example, and $\gamma=1/4$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]).

[F1] The density, endpoints, and atom are defined by the Marchenko–Pastur formula ([[def-marchenko-pastur-measure]]).

[L1] The MP weak law is stated in [[thm-marchenko-pastur-law-for-sample-covariance]].

[L2] The largest-edge conclusion is stated in [[thm-largest-eigenvalue-sample-covariance-edge]].

[L3] The smallest-positive-edge and eventual-rank conclusions are stated in [[thm-smallest-positive-eigenvalue-sample-covariance-edge]]. These edge proofs remain escalated.

## Verification

**Given:** The hypotheses and notation in the Example.

1.1 Since $\sqrt\gamma=1/2$, the endpoints are $a=(1-1/2)^2=1/4$ and $b=(1+1/2)^2=9/4$, while the zero atom is $(1-4)_+=0$. Substituting in [F1] gives the displayed density on $(1/4,9/4)$ and zero outside. [given, F1, algebra]

2.1 The constants in [L2]–[L3] specialize to $b=9/4$ and $a=1/4$; [L1] specializes the limit law to the same density computed in step 1.1. These are conditional interface substitutions only: the local proofs of [L2] and [L3] remain unresolved, so this Example is escalated for its random-matrix conclusions. [A1, L1, L2, L3, step 1.1, algebra] ∎
