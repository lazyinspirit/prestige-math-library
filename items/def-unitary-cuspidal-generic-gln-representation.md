---
dependency_level: 1
id: def-unitary-cuspidal-generic-gln-representation
kind: definition
title: "Unitary Cuspidal Generic Representation of GL(n)"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-adelic-gln-automorphic-representation]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lecture 1, §§1.1–1.2"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §0"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
    - title: "Hervé Jacquet, Archimedean Rankin-Selberg Integrals, §2, pp. 2–3"
      url: "https://www.math.columbia.edu/~hj/PerfectRankinSelberg.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Definition

Let $F$ be a number field and let $\pi$ be an adelic automorphic representation of $\mathrm{GL}_n(\mathbb A_F)$, realized by automorphic forms as in the definition of an adelic automorphic representation. It is unitary if its representation space has a positive-definite Hermitian inner product invariant under $\mathrm{GL}_n(\mathbb A_F)$. A standard parabolic subgroup is the block upper-triangular subgroup associated with a partition $n=n_1+\cdots+n_k$; it is proper when $k\ge2$, and its unipotent radical consists of the block upper-unitriangular matrices with identity diagonal blocks. The representation $\pi$ is cuspidal if, for every proper standard parabolic subgroup with unipotent radical $N_P$, every representing automorphic form $\phi$, and every $g\in\mathrm{GL}_n(\mathbb A_F)$, its constant term

$$\int_{N_P(F)\backslash N_P(\mathbb A_F)}\phi(ug)\,du$$

vanishes, where $du$ is a Haar measure on the quotient. Fix a continuous nontrivial additive character $\psi:F\backslash\mathbb A_F\to S^1$. Let $N_n$ be the upper-unitriangular subgroup and define $\psi_N(u)=\psi(u_{1,2}+\cdots+u_{n-1,n})$. The representation $\pi$ is globally generic if its smooth vectors admit a nonzero continuous linear functional $\Lambda$ in the smooth tensor topology satisfying $\Lambda(\pi(u)v)=\psi_N(u)\Lambda(v)$ for every $u\in N_n(\mathbb A_F)$ and every smooth vector $v$. A unitary cuspidal generic representation of $\mathrm{GL}_n(\mathbb A_F)$ is one satisfying all three conditions. For $n=1$ the cuspidality condition is vacuous because there is no proper parabolic subgroup, and genericity is automatic because $N_1$ is trivial.

## Definition references

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lecture 1, §§1.1–1.2](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §0](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)
