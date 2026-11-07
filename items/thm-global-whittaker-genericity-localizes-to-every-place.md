---
id: thm-global-whittaker-genericity-localizes-to-every-place
kind: theorem
title: "Global Whittaker Genericity Localizes at Every Place"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-adelic-gln-automorphic-representation
  - def-unitary-cuspidal-generic-gln-representation
  - def-gln-generic-whittaker-model
dependency_level: 3
sources:
  scraped: []
  references:
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lecture 1, §§1.1–1.2"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §§0–1"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $F$ be a number field, $n\geq1$, and $\Pi=\bigotimes'_v\Pi_v$ a unitary cuspidal automorphic representation of $\mathrm{GL}_n(\mathbb A_F)$ that is globally generic for a fixed nontrivial additive character $\psi:F\backslash\mathbb A_F\to\mathbb C^\times$, with nontrivial local components $\psi_v:F_v\to\mathbb C^\times$. Then every local component $\Pi_v$ admits a nonzero $\psi_{N,v}$-Whittaker functional, where $\psi_{N,v}(u)=\psi_v(u_{1,2}+\cdots+u_{n-1,n})$ on the upper-unitriangular subgroup of $\mathrm{GL}_n(F_v)$.

## Statement references

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lecture 1, §§1.1–1.2](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §§0–1](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

## Facts & Assumptions

**Given:** $\Pi=\bigotimes'_v\Pi_v$ is globally generic and $\Lambda$ is a nonzero global Whittaker functional for $\psi$. Prove that every $\Pi_v$ admits a nonzero local Whittaker functional for $\psi_v$.

[F1] [[def-unitary-cuspidal-generic-gln-representation]]: global genericity supplies a nonzero continuous linear functional $\Lambda$ satisfying $\Lambda(\Pi(u)x)=\psi_N(u)\Lambda(x)$ for every $u\in N_n(\mathbb A_F)$ and every smooth vector $x$.

[F2] [[def-adelic-gln-automorphic-representation]]: the supplier writes $\Pi$ as a restricted tensor product $\bigotimes'_v\Pi_v$ of its local representations. In the smooth tensor topology, finite sums of pure tensors are dense and each partial tensor insertion is continuous.

[F3] [[def-gln-generic-whittaker-model]]: a local component is locally generic when it admits a nonzero $\psi_{N,v}$-equivariant linear functional.

## Proof

1.1 Since $\Lambda\neq0$, choose a smooth vector $x$ with $\Lambda(x)\neq0$. If $\Lambda$ vanished on every pure tensor, linearity would make it vanish on their span and continuity and [F2] would make it vanish everywhere, a contradiction. Hence some pure tensor $x_0=\bigotimes_w x_w$ satisfies $\Lambda(x_0)\neq0$. Fix any place $v$ and define $\lambda_v(y)=\Lambda((\bigotimes_{w\neq v}x_w)\otimes y)$. By continuity of partial insertion, $\lambda_v$ is continuous at archimedean places. Then $\lambda_v(x_v)=\Lambda(x_0)\neq0$, so $\lambda_v$ is nonzero. [given, F2, choose]

2.1 For $u_v\in N_n(F_v)$, embed $u_v$ into $N_n(\mathbb A_F)$ with identity components away from $v$. The global equivariance in [F1], applied to the tensor with $y$ at $v$, gives $\lambda_v(\Pi_v(u_v)y)=\psi_{N,v}(u_v)\lambda_v(y)$. Thus $\lambda_v$ is a nonzero local Whittaker functional as in [F3]. Since $v$ was arbitrary, every local component is locally generic. [given, F1, F2, F3, step 1.1, construct] ∎

## Proof references

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lecture 1, §§1.1–1.2](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)
