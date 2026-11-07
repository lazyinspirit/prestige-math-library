---
id: def-burns-daoud-liang-decomposition-hypothesis
kind: definition
title: "Burns–Daoud–Liang Decomposition Hypothesis for Σ"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-infinite-rank-p-adic-iwasawa-algebra
  - def-global-field
  - def-place-of-a-global-field
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "The place extensions are fixed as part of the data; the global-field place interface assumes AC."
sources:
  references:
    - title: "David Burns, Alexandre Daoud, and Dingli Liang, On Non-Noetherian Iwasawa Theory, §3.2 and Hypothesis 3.5"
      url: "https://arxiv.org/pdf/2401.02946"
verification:
  precheck: n/a
---

## Definition

Let $k$ be a global function field of characteristic $p$ with finite exact constant field, let $K/k$ be an abelian Galois extension, and fix an isomorphism $\Gamma=\operatorname{Gal}(K/k)\cong\mathbb Z_p^{\mathbb N}\times G$ with $G$ finite abelian. Let $\Sigma$ be a finite nonempty set of places of $k$ containing every place ramified in $K$ and containing no place that splits completely in $K$. For $v\in\Sigma$, fix an extension $\widetilde v$ of $v$ to $K$ and define its decomposition subgroup by $\Gamma_v=\{\sigma\in\Gamma:\sigma(\widetilde v)=\widetilde v\}$. Since $\Gamma$ is abelian, this subgroup does not depend on the chosen extension $\widetilde v$. A place splits completely in $K$ when its decomposition subgroup is trivial.

For each $n\ge1$, define $\Gamma(n)\le\Gamma$ to be the subgroup whose first $n$ coordinates in $\mathbb Z_p^{\mathbb N}$ are zero and whose $G$ coordinate is the identity, and let $K_n=K^{\Gamma(n)}$. The **Burns–Daoud–Liang decomposition hypothesis for $\Sigma$** is that there exists an integer $n_0\ge1$ such that, for every $v\in\Sigma$, the subgroup $\Gamma(n_0)\cap\Gamma_v$ is not open in $\Gamma_v$.

## Definition references

[[def-infinite-rank-p-adic-iwasawa-algebra]]

[[def-global-field]]

[[def-place-of-a-global-field]]

[[def-axiom-of-choice]]

[Burns, Daoud, and Liang, §3.2, Hypothesis 3.5](https://arxiv.org/pdf/2401.02946)

## Structural diagram

For $n\ge1$, the inclusions $\Gamma(n+1)\subseteq\Gamma(n)$ induce the field inclusion $K_n\subseteq K_{n+1}$. Restriction identifies the exact sequence of Galois groups below with the quotient sequence on the top row; the kernel $\Gamma(n)/\Gamma(n+1)$ is the $(n+1)$st $\mathbb Z_p$ coordinate.

```tikzcd
1 \arrow[r] \arrow[d, equal] & \Gamma(n)/\Gamma(n+1) \arrow[r, hook] \arrow[d, "\\cong"] & \Gamma/\Gamma(n+1) \arrow[r, two heads] \arrow[d, "\\cong"] & \Gamma/\Gamma(n) \arrow[r] \arrow[d, "\\cong"] & 1 \arrow[d, equal] \\
1 \arrow[r] & \operatorname{Gal}(K_{n+1}/K_n) \arrow[r, hook] & \operatorname{Gal}(K_{n+1}/k) \arrow[r, two heads] & \operatorname{Gal}(K_n/k) \arrow[r] & 1
```

The diagram records the quotient identifications used by the notation; no proof in this pair relies on it.
