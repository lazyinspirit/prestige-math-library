---
id: cex-qsmx-gap-not-automatic
kind: counterexample
title: A one-spin path can close its spectral gap
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
deps:
  - def-qsmx-summable-interaction-norm
dependency_roles:
  def-qsmx-summable-interaction-norm: mathematical-premise
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "S. Bachmann, S. Michalakis, B. Nachtergaele, and R. Sims, Automorphic Equivalence within Gapped Phases of Quantum Lattice Systems, §2 and discussion after Theorem 5.5"
      url: "https://arxiv.org/pdf/1102.0842"
---

## Statement

Let one site of $\mathbb Z^d$ have spin dimension $2$, let $Z=\mathrm{diag}(1,-1)$, and define the finite-volume Hamiltonian path $H(s)=(1-2s)Z$ on $0\le s\le1$, with all other interaction terms zero. This is a $C^1$ finite-range path with a uniform finite weighted-interaction norm and gapped endpoint Hamiltonians, but its gap closes at $s=\frac12$. Thus endpoint gaps alone do not imply a uniform path gap.

## Statement references

[[def-qsmx-summable-interaction-norm]]

## Facts & Assumptions

**Given:** A single spin space $\mathbb C^2$, the path in the Statement, and the weighted-interaction convention. Energies are dimensionless in the chosen positive energy unit, $\hbar=1$, and $s$ is dimensionless.

[F1] [[def-qsmx-summable-interaction-norm]]: a one-site self-adjoint matrix path with a bounded $C^1$ coefficient is a finite-range path with finite $G$-interaction and derivative norms.

## Proof

**Proof technique:** direct.

**Given:** $H(s)=(1-2s)Z$ and $Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$.

1.1 The interaction has only one nonzero term, on a singleton support, with coefficient $1-2s$; its derivative is the constant $-2$. The two weighted norms are finite because the support and coefficient are bounded and every admissible weight is positive at distance zero. [given, F1, algebra]

2.1 The eigenvalues of $H(s)$ are $1-2s$ and $-(1-2s)$. The ground eigenvalue is $-|1-2s|$, the excited eigenvalue is $+|1-2s|$, so the gap is $2|1-2s|$. It is $2$ at each endpoint and $0$ at $s=\frac12$. The path therefore has gapped endpoints but no uniform positive gap on $[0,1]$. [given, step 1.1, algebra] ∎
