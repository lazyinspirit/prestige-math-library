---
id: ex-marchenko-pastur-law-and-edges-at-aspect-four
kind: example
title: "Structural zeros and the positive edge above aspect one"
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

Assume AC. Let $X_n\in\mathbb R^{n\times p_n}$ have mutually independent entries with a common mean-zero, unit-variance law of finite fourth moment and $p_n/n\to4$. For $S_n=X_n^{\mathsf T}X_n/n$, the limiting empirical spectral distribution has density
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

[F1] The density, endpoints, and atom are defined by the Marchenko–Pastur formula ([[def-marchenko-pastur-measure]]).

[L1] The MP weak law is stated in [[thm-marchenko-pastur-law-for-sample-covariance]].

[L2] The largest-edge conclusion is stated in [[thm-largest-eigenvalue-sample-covariance-edge]].

[L3] The smallest-positive-edge and eventual-full-row-rank conclusions are stated in [[thm-smallest-positive-eigenvalue-sample-covariance-edge]]. Their proofs remain escalated.

## Verification

**Given:** The hypotheses and notation in the Example.

1.1 Since $\sqrt\gamma=2$, the endpoints are $a=(1-2)^2=1$ and $b=(1+2)^2=9$, while the zero atom is $(1-1/4)_+=3/4$. Substituting in [F1] gives the displayed density on $(1,9)$ and zero outside, plus the atom $3/4$. [given, F1, algebra]

2.1 The constants in [L2]–[L3] specialize to largest edge $9$ and smallest positive edge $1$; [L1] specializes the limit law to the density/atom computed in step 1.1. The stated exact zero count is conditional on the eventual full-row-rank clause of [L3]. These are interface substitutions only; the local edge proofs remain unresolved. [A1, L1, L2, L3, step 1.1, algebra] ∎
