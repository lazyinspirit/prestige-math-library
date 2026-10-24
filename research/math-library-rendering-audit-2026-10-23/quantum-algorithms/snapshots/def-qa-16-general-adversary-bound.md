---
id: def-qa-16-general-adversary-bound
kind: definition
title: General adversary matrix and spectral bound
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - def-qa-16-input-mismatch-matrices
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - lem-qa-16-general-adversary-finite-and-attained
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition


For a nonconstant finite Boolean query problem define
$$\operatorname{Adv}^{\pm}(f):= \max_{\substack{\Gamma\in\mathbb R^{D\times D},\ \Gamma=\Gamma^{\mathsf T},\ \Gamma\ne0\\ \Gamma\circ F=0}} \frac{\|\Gamma\|}{\max_{i\in[N]}\|\Gamma\circ\Delta_i\|}.$$
Negative entries are allowed. The denominator is positive and the maximum is finite and attained by [[lem-qa-16-general-adversary-finite-and-attained]]. For constant f set $\operatorname{Adv}^{\pm}(f)=0$. The **nonnegative adversary value** $\operatorname{Adv}(f)$ is the same maximum with the additional constraint $\Gamma_{xy}\ge0$ for all x,y; it is also set to zero for constant f.

## Facts & Assumptions

**Given:** A finite Boolean query problem with mismatch masks and same-output matrix F.



[F1] [[def-qa-16-input-mismatch-matrices]]: F_{xy}=1 on equal-output pairs and Δ_i(x,y)=1 on coordinate mismatches.

[F2] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: ||A|| is the induced Euclidean operator norm.

[F3] [[lem-qa-16-general-adversary-finite-and-attained]]: for nonconstant f every nonzero admissible Γ has positive denominator and the finite optimum is attained.

## Proof

1.1 Call Γ admissible when it is a nonzero real symmetric D×D matrix with Γ∘F=0. Define d(Γ)=max_{i∈[N]}||Γ∘Δ_i|| and set Adv±(f)=sup_Γ ||Γ||/d(Γ) for nonconstant f; for constant f set Adv±(f)=0. [given, F1, F2]

2.1 By [F3], d(Γ)>0 for every nonzero admissible Γ and the supremum is a finite attained maximum when f is nonconstant. The entries of Γ need not be nonnegative; negative entries are permitted by this feasible set. Restricting to Γ≥0 entrywise gives the separate nonnegative adversary value, which is a smaller feasible set. [given, F3] ∎
