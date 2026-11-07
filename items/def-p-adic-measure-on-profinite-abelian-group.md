---
id: def-p-adic-measure-on-profinite-abelian-group
kind: definition
title: Bounded p-adic measures on profinite abelian groups
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-p-adic-integers-as-compatible-residue-classes
- def-profinite-group-by-inverse-limit
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions
    url: https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf
    locator: §3.2, printed pp. 119–121
verification: {}
---

## Definition

Let $p$ be a prime and let $G$ be a profinite abelian group. Write $C(G,\mathbb Z_p)$ for the continuous functions from $G$ to the $p$-adic integers, with the supremum norm. A **bounded $\mathbb Z_p$-valued measure** on $G$ is a continuous $\mathbb Z_p$-linear functional
$$\mu:C(G,\mathbb Z_p)\longrightarrow\mathbb Z_p.$$
Its value on $f$ is denoted $\int_G f(g)\,d\mu(g)$. For a clopen subset $U\subseteq G$, put $\mu(U)=\mu(1_U)$; linearity then gives finite additivity on clopen partitions.

## Definition references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, §3.2, pp. 119–121](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

## Facts & Assumptions

**Given:** A prime $p$ and a profinite abelian group $G$.

[F1] $\mathbb Z_p$ is the inverse limit of the residue rings $\mathbb Z/p^n\mathbb Z$, with its inverse-limit topology. [[def-p-adic-integers-as-compatible-residue-classes]]

[F2] Finite-coordinate identity cylinders are open subgroups and form a neighborhood basis in an inverse limit of finite discrete groups. Their cosets are clopen. [[def-profinite-group-by-inverse-limit]]

## Proof

1.1 For each clopen $U$, the indicator $1_U$ is continuous because both $U$ and its complement are open; hence $\mu(U)$ is defined.[F2, given, algebra]

2.1 If disjoint clopen sets $U_1,\ldots,U_r$ have union $U$, then $1_U=\sum_i1_{U_i}$. Applying the linear functional gives $\mu(U)=\sum_i\mu(U_i)$, so the stated clopen values are finitely additive.[F1, F2, step 1.1, algebra] ∎
