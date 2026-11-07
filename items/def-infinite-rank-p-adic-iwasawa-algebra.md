---
id: def-infinite-rank-p-adic-iwasawa-algebra
kind: definition
title: "Completed Group Algebra for Γ ≅ Z_p^N × G with N Infinite"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-p-adic-integers-as-compatible-residue-classes
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Burns, Alexandre Daoud, and Dingli Liang, On Non-Noetherian Iwasawa Theory, §3.1"
      url: "https://arxiv.org/pdf/2401.02946"
verification:
  precheck: n/a
---

## Definition

Fix a prime $p$, let $\mathbb N=\{1,2,\ldots\}$, and let $G$ be a finite abelian group. Give $\mathbb Z_p^{\mathbb N}=\prod_{i\ge1}\mathbb Z_p$ the product topology and put $\Gamma=\mathbb Z_p^{\mathbb N}\times G$. The **completed $p$-adic group algebra** of $\Gamma$ is
$$\mathbb Z_p[\![\Gamma]\!]:=\varprojlim_{U}\mathbb Z_p[\Gamma/U],$$
where $U$ ranges over open subgroups of $\Gamma$ and the transition maps are induced by quotient maps. It is a commutative ring because $\Gamma$ is abelian.

For the coordinate element $\gamma_i$ equal to $1$ in the $i$th $\mathbb Z_p$ factor and $0$ in the other factors, set $X_i=\gamma_i-1$. Let $R_n=\mathbb Z_p[\![X_1,\ldots,X_n]\!]$, with the projection $R_n\to R_{n-1}$ fixing $X_i$ for $i<n$ and sending $X_n$ to $0$. Then
$$R:=\mathbb Z_p[\![\mathbb Z_p^{\mathbb N}]\!]\cong\varprojlim_{n\ge1}R_n,$$
where the isomorphism depends on the chosen coordinates. The completed group algebra of $\Gamma$ is canonically $A=R[G]$. For every finite set $S\subseteq\mathbb N$, the coordinate retraction $R\to\mathbb Z_p[\![X_i:i\in S]\!]$ sends $X_j$ to $0$ when $j\notin S$.

## Definition references

[[def-p-adic-integers-as-compatible-residue-classes]]

[Burns, Daoud, and Liang, §3.1](https://arxiv.org/pdf/2401.02946)
