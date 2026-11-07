---
id: thm-local-whittaker-multiplicity-one-for-gln
kind: theorem
title: "Local Whittaker Multiplicity One for GL(n)"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-gln-generic-whittaker-model
  - thm-nonarchimedean-gln-whittaker-multiplicity-one
  - thm-archimedean-gln-whittaker-multiplicity-one
dependency_level: 3
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §1"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lecture 1, §§1.1–1.2"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
    - title: "Hervé Jacquet, Archimedean Rankin-Selberg Integrals, §11"
      url: "https://www.math.columbia.edu/~hj/PerfectRankinSelberg.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $K$ be a nonarchimedean local field, $\mathbb R$, or $\mathbb C$, let $n\geq1$, and let $\psi:K\to\mathbb C^\times$ be a nontrivial continuous additive character. Let $\pi$ be an irreducible admissible representation of $\mathrm{GL}_n(K)$ in the nonarchimedean smooth or archimedean Casselman–Wallach category. If $\pi$ is locally generic for the character $\psi_N(u)=\psi(u_{1,2}+\cdots+u_{n-1,n})$ of the upper-unitriangular subgroup, then the vector space of $\psi_N$-equivariant linear functionals (continuous at archimedean places) on $\pi$ has dimension exactly one.

## Statement references

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §1](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lecture 1, §§1.1–1.2](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)

[Hervé Jacquet, *Archimedean Rankin-Selberg Integrals*, §11](https://www.math.columbia.edu/~hj/PerfectRankinSelberg.pdf)

## Facts & Assumptions

**Given:** Exactly the local field, integer, character, representation and local-genericity data in the unchanged Statement.

[F1] Every irreducible smooth admissible complex representation over a nonarchimedean local field has at most one Whittaker functional for any nontrivial continuous additive character. [[thm-nonarchimedean-gln-whittaker-multiplicity-one]]

[F2] Every irreducible admissible Casselman–Wallach representation over $\mathbb R$ or $\mathbb C$ has at most one continuous Whittaker functional for any nontrivial continuous additive character. [[thm-archimedean-gln-whittaker-multiplicity-one]]

## Proof

**Given:** The Statement data and [F1]–[F2].

1.1 If $K$ is nonarchimedean, [F1] gives dimension at most one for the actual smooth admissible representation and the stated $\psi_N$. Local genericity supplies a nonzero functional, so the dimension is exactly one. [F1, given, algebra]

2.1 If $K=\mathbb R$ or $\mathbb C$, [F2] gives dimension at most one in the actual continuous Casselman–Wallach category. The same local-genericity hypothesis supplies a nonzero continuous functional. Together with step 1.1 these cases exhaust the Statement, so the dimension is exactly one in every case. [F2, step 1.1, given, algebra] ∎
