---
id: ex-linucb-feature-norm-violation
kind: example
title: A feature outside the assumed norm bound
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
verification:
  precheck: pass
deps: [def-linear-contextual-bandit-model,
       def-matrix-product-and-identity-matrix]
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§19.2–§19.3, bounded-feature hypothesis."
---

## Example

Take a one-round horizon $n=1$, $d=2$, $\lambda=1$, $L=1$, and $m_2=0$. Let $\Omega=\{\omega_0\}$, $\mathcal F=\{\emptyset,\Omega\}$, $P(\Omega)=1$, and $\mathcal F_t=\mathcal F$ for all times. Use a single context $c$, a single available action $\bar a$, and feature map $\psi(c,\bar a)=a=(2,0)$. Let $\theta^*=(0,0)$ and $\eta_1=0$, so the reward is $X_1=0$. The coordinate Euclidean norm is $\|a\|_2=\sqrt{a_1^2+a_2^2}$. This candidate violates the model's feature bound, although the matrix update formula still gives $V_1=\operatorname{diag}(5,1)$.

## Example references

[[def-linear-contextual-bandit-model]]: every candidate feature must have Euclidean norm at most $L$.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, §19.3](https://tor-lattimore.com/downloads/book/book.pdf)

## Facts & Assumptions

**Given:** The finite-dimensional linear contextual bandit model and the one-round data in the Example.

[F1] [[def-linear-contextual-bandit-model]]: candidate features satisfy $\|a\|_2\le L$; the information matrix is $V_1=\lambda I_2+aa^{\mathsf T}$.

[F2] [[def-matrix-product-and-identity-matrix]]: matrix products and the identity use their usual coordinate formulas.

## Verification

1.1 The feature has norm $\|a\|_2=\sqrt{2^2+0^2}=2>1=L$, so it violates the model's candidate-feature hypothesis. The zero parameter and zero noise do not repair that failed assumption. [given, F1, algebra]

2.1 Its outer product is $aa^{\mathsf T}=\begin{pmatrix}4&0\\0&0\end{pmatrix}$ and $V_0=I_2$, hence $V_1=I_2+aa^{\mathsf T}=\begin{pmatrix}5&0\\0&1\end{pmatrix}$. Thus the algebraic ridge update is defined, while the feature-norm premise used by the regret theorem is absent. [F1, F2, step 1.1, algebra] ∎
