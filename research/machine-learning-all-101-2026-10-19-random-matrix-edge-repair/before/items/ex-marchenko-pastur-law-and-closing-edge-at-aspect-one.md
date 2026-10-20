---
id: ex-marchenko-pastur-law-and-closing-edge-at-aspect-one
kind: example
title: "The Marchenko–Pastur support and closing lower edge at aspect one"
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

Assume AC. Let $X_n\in\mathbb R^{n\times p_n}$ have mutually independent entries with a common mean-zero, unit-variance law of finite fourth moment and $p_n/n\to1$. For $S_n=X_n^{\mathsf T}X_n/n$, the limiting empirical spectral distribution has density
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

[F1] The density, endpoints, and atom are defined by the Marchenko–Pastur formula ([[def-marchenko-pastur-measure]]).

[L1] The MP weak law is stated in [[thm-marchenko-pastur-law-for-sample-covariance]].

[L2] The largest-edge conclusion is stated in [[thm-largest-eigenvalue-sample-covariance-edge]].

[L3] The smallest-positive-edge conclusion is stated in [[thm-smallest-positive-eigenvalue-sample-covariance-edge]]. Both edge proofs remain escalated.

## Verification

**Given:** The hypotheses and notation in the Example.

1.1 At $\gamma=1$, the endpoints are $a=0$ and $b=4$, and the atom is zero. On $(0,4)$ the density simplifies as $\sqrt{(4-x)x}/(2\pi x)=\sqrt{4-x}/(2\pi\sqrt{x})$, giving the formula in the Example. [given, F1, algebra]

2.1 The constants in [L2]–[L3] specialize to largest edge $4$ and smallest-positive edge $0$; [L1] specializes the limit law to the density computed in step 1.1. These are interface substitutions only; the edge proofs remain unresolved, so the Example is escalated for its random-matrix conclusions. [A1, L1, L2, L3, step 1.1, algebra] ∎
