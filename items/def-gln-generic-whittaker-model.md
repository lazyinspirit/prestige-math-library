---
id: def-gln-generic-whittaker-model
kind: definition
title: "Generic Whittaker Model for GL(n)"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-unitary-cuspidal-generic-gln-representation
dependency_level: 2
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jacquet, Piatetski-Shapiro, and Shalika, Rankin-Selberg Convolutions, §§1–2"
      url: "https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf"
    - title: "Hervé Jacquet, Archimedean Rankin-Selberg Integrals, §§3–5 and §11"
      url: "https://www.math.columbia.edu/~hj/PerfectRankinSelberg.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Definition

Let $K$ be a place completion of a number field, so $K$ is a finite extension of a $p$-adic field, $\mathbb R$, or $\mathbb C$, and let $n\geq1$. Write $G_n(K)=\mathrm{GL}_n(K)$, let $N_n(K)$ be its upper-unitriangular subgroup, and fix a nontrivial continuous additive character $\psi:K\to\mathbb C^\times$. For $u=(u_{ij})\in N_n(K)$, set $\psi_N(u)=\psi(u_{1,2}+\cdots+u_{n-1,n})$. In the nonarchimedean case, a smooth representation is one in which each vector is fixed by a compact open subgroup, and it is admissible if the fixed subspace for each compact open subgroup is finite-dimensional. In the archimedean case, use a Casselman–Wallach representation: a smooth Fréchet representation whose maximal-compact finite vectors form an admissible module of finite length, and for every continuous seminorm $p$ there are a continuous seminorm $q$ and $M\geq0$ such that $p(\pi(g)v)\leq\|g\|^M q(v)$ for all $g,v$, for a fixed proper matrix norm on $G_n(K)$. Let $(\pi,V)$ be such a representation. A Whittaker functional is a linear functional $\lambda:V\to\mathbb C$, required to be continuous in the archimedean case, satisfying $\lambda(\pi(u)v)=\psi_N(u)\lambda(v)$ for every $u\in N_n(K)$ and $v\in V$. The representation is locally generic if this space of functionals is nonzero. Given a locally generic representation and one such $\lambda$, its Whittaker model is

$$\mathcal W(\pi,\psi)=\{W_v:G_n(K)\to\mathbb C\mid W_v(g)=\lambda(\pi(g)v),\ v\in V\}.$$

For a nonarchimedean $K$, a representation is of Whittaker type in the sense used for the local integral theorems below when it is admissible of finite length, meaning it has a finite composition series by irreducible subquotients, and its space of $\psi_N$-Whittaker functionals has dimension one. This definition makes no assertion that a globally generic automorphic representation has locally generic components; that implication is a separate theorem.

## Definition references

[[def-unitary-cuspidal-generic-gln-representation]]

[Jacquet, Piatetski-Shapiro, and Shalika, *Rankin-Selberg Convolutions*, §§1–2](https://www.math.columbia.edu/~hj/Rankin%20Selberg%20convolutions.pdf)

[Hervé Jacquet, *Archimedean Rankin-Selberg Integrals*, §§3–5 and §11](https://www.math.columbia.edu/~hj/PerfectRankinSelberg.pdf)
