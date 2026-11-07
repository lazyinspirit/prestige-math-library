---
id: def-bounded-measure-over-finite-free-zp-algebra
kind: definition
title: Bounded measures with finite free p-adic coefficients
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
    locator: §§3.1–3.2, printed pp. 117–121
  - title: J. Sharifi, Iwasawa Theory lecture notes
    url: https://www.math.ucla.edu/~sharifi/iwasawa.pdf
    locator: §2.3, printed pp. 47–51
verification: {}
---

## Definition

Let $R$ be a commutative algebra that is finite free as a $\mathbb Z_p$-module, and choose a $\mathbb Z_p$-basis $e_1,\ldots,e_r$. Give $R$ the norm $\|\sum_j a_je_j\|_R=\max_j|a_j|_p$; this norm induces its finite-free $p$-adic topology and is independent of the chosen basis because every change-of-basis matrix and its inverse have entries in $\mathbb Z_p$. Let $G$ be a profinite abelian group and give $C(G,R)$ the supremum norm. A **bounded $R$-valued measure** on $G$ is a continuous $R$-linear functional $\mu:C(G,R)\to R$. For a clopen subset $U\subseteq G$, put $\mu(U)=\mu(1_U)$; linearity then gives finite additivity on clopen partitions.

## Definition references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, §§3.1–3.2, pp. 117–121](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

[J. Sharifi, *Iwasawa Theory*, §2.3, pp. 47–51](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** A finite free commutative $\mathbb Z_p$-algebra $R$ and a profinite abelian group $G$.

[F1] The $p$-adic integers are complete for their inverse-limit topology. [[def-p-adic-integers-as-compatible-residue-classes]]

[F2] Finite-coordinate identity cylinders are open subgroups and form a neighborhood basis in an inverse limit of finite discrete groups. Their cosets are clopen. [[def-profinite-group-by-inverse-limit]]

## Proof

1.1 When the finite free rank is zero, $R$ is the zero algebra and the empty maximum in its basis norm is interpreted as $0$; its function space and dual each have one element. At positive rank, both basis-change matrices have integral entries, so each gives one inequality between the maximum norms and the norms are equal. Products have norm at most the product of norms because the finitely many basis structure constants are integral. Every function with values in $R$ has norm at most $1$, and uniform Cauchy sequences converge coordinatewise in $R$ by [F1]. If $U\subseteq G$ is clopen, then both $U$ and its complement are open, so its indicator function $1_U$ is continuous and $\mu(U)$ is defined. [F2, given, algebra]

2.1 If disjoint clopen sets $U_1,\ldots,U_r$ have union $U$, then $1_U=\sum_i1_{U_i}$. Applying the $R$-linear functional gives $\mu(U)=\sum_i\mu(U_i)$, which is the stated finite additivity. [given, step 1.1, algebra] ∎
