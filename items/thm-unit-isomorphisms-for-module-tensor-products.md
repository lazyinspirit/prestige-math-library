---
id: thm-unit-isomorphisms-for-module-tensor-products
kind: theorem
title: "The regular module is a tensor unit: $R\\otimes_RN\\cong N$ and $M\\otimes_RR\\cong M$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-module-tensor-products, prop-elementary-tensor-formulas-descend-exactly-when-balanced]
aliases: []
landmark: true
short: "Tensor-unit isomorphisms"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.12: Tensor products"
      url: "https://stacks.math.columbia.edu/tag/00CV"
pipeline_run: null
---

## Statement

Let $R$ be a unital ring. For every left $R$-module $N$ and every right $R$-module $M$, the maps

$$\lambda_N:R\otimes_RN\longrightarrow N,\qquad r\otimes n\longmapsto rn,$$

and

$$\rho_M:M\otimes_RR\longrightarrow M,\qquad m\otimes r\longmapsto mr,$$

are group isomorphisms. Their inverses are $n\mapsto1_R\otimes n$ and $m\mapsto m\otimes1_R$, respectively. The maps respect every displayed outer module structure.

## Facts & Assumptions

**Given:** A unital ring $R$, a left $R$-module $N$, and a right $R$-module $M$.

[L1] Balanced pairings induce unique homomorphisms from tensor products ([[thm-universal-property-of-module-tensor-products]]).

[L2] An elementary-tensor prescription descends exactly when the corresponding pairing is balanced ([[prop-elementary-tensor-formulas-descend-exactly-when-balanced]]).

## Proof

**Proof technique:** direct.

1.1 The pairing $(r,n)\mapsto rn$ is additive in each variable and satisfies $(rs)n=r(sn)$, so it is balanced; [L1] and [L2] give $\lambda_N$. [given, L1, L2]

1.2 The pairing $(m,r)\mapsto mr$ is balanced, so [L1] and [L2] give $\rho_M$. Define the additive map $\eta_M(m)=m\otimes1_R$. Then $\rho_M\eta_M(m)=m$, while $\eta_M\rho_M(m\otimes r)=mr\otimes1_R=m\otimes r$ by balance; uniqueness in [L1] makes the second composite the identity. Thus $\rho_M$ and $\eta_M$ are inverse. [L1, L2, algebra]

2.1 The additive map $\eta_N:N\to R\otimes_RN$, $n\mapsto1_R\otimes n$, satisfies $\lambda_N\eta_N(n)=n$, while $\eta_N\lambda_N(r\otimes n)=1_R\otimes rn=r\otimes n$ by balance. Uniqueness in [L1] makes the second composite the identity, so $\lambda_N$ and $\eta_N$ are inverse. [step 1.1, L1, algebra]

3.1 Each map commutes with any outer scalar action by associativity of that action, checked on elementary tensors. The calculations remain valid for the zero ring and for zero modules, where all displayed maps are the unique maps between zero groups. [step 1.1, step 2.1, step 1.2, algebra]

4.1 Therefore the regular module is a left and right tensor unit with the stated natural formulas. [step 2.1, step 1.2, step 3.1] ∎
