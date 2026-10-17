---
id: ex-qsm-finite-range-nearest-neighbor-ising
kind: example
title: Nearest-neighbor Ising interaction satisfies the finite-range bounds
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-qsm-bounded-finite-range-interaction
  - def-qsm-local-spin-algebras
dependency_roles:
  def-qsm-bounded-finite-range-interaction: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
dependency_level: 4
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, Example 3.3.9, pp. 67–68
      url: https://arxiv.org/pdf/1311.2717
    - title: Bruno Nachtergaele and Robert Sims, Lieb-Robinson Bounds in Quantum Many-Body Physics, §2.1, pp. 4–5
      url: https://arxiv.org/pdf/1004.2086
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Take $d=1$, $q=2$, $\Gamma=\mathbb Z$, and let
$$\sigma^z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$
For every $n\in\mathbb Z$, let $E_n=\{n,n+1\}$ and set $\Phi(E_n)=J\,\sigma^z\otimes\sigma^z\in\mathcal A_{E_n}$ for a fixed $J\in\mathbb R$; set $\Phi(S)=0$ for every other finite nonempty support $S$. If interpreted as an energy coefficient, $J$ has units J, but no value or measurement is assumed. This is a nearest-neighbor diagonal spin interaction of the kind described by [[def-qsm-bounded-finite-range-interaction]].

## Facts & Assumptions

**Given:** The displayed Pauli matrix, $J\in\mathbb R$, and the local tensor-factor conventions of [[def-qsm-local-spin-algebras]].

[F1] [[def-qsm-local-spin-algebras]]: the two-site algebra is the finite matrix algebra $\mathcal A_{\{n,n+1\}}$ with the ordinary operator norm.

[F2] [[def-qsm-bounded-finite-range-interaction]]: an interaction term must be self-adjoint, have uniformly bounded support size and diameter, and have finite per-site norm sum.

## Verification

**Proof technique:** direct finite-dimensional norm and support calculation.

**Given:** [F1]–[F2] and the interaction in the Example.

1.1 Since $(\sigma^z)^*=\sigma^z$ and $(\sigma^z)^2=I$, the tensor product $\sigma^z\otimes\sigma^z$ is a self-adjoint unitary in $\mathcal A_{E_n}$ and has norm one. Therefore every nonzero term $\Phi(E_n)$ is self-adjoint and has norm $|J|$. [given, F1, algebra]

2.1 Each support $E_n$ has cardinality two and max-metric diameter one. Each site belongs to exactly two such edges, so $\sup_{x\in\mathbb Z}\sum_{S\ni x}\|\Phi(S)\|=2|J|$. All other terms vanish. Hence the interaction satisfies the definition with $M=2$, $R=1$, and $\kappa=2|J|$, including the case $J=0$. [given, F2, step 1.1, algebra] ∎
