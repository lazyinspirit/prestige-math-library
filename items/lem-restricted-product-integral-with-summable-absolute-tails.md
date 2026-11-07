---
id: lem-restricted-product-integral-with-summable-absolute-tails
kind: lemma
title: Restricted-product integrals with summable absolute tails
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  scraped: []
  references: []
---

## Statement

Let $(X_v,\mu_v)$ be $\sigma$-finite measure spaces indexed by a countable set, with distinguished measurable $K_v\subset X_v$ of measure one outside a finite set $S_0$. Let $X=\prod'_v(X_v,K_v)$ carry the product measure determined by its finite-coordinate cylinders. Let $f_v$ be integrable for $v\in S_0$; for $v\notin S_0$ let $f_v$ be measurable, equal to one on $K_v$, and satisfy $a_v=\int_{X_v\setminus K_v}|f_v|\,d\mu_v<\infty$ with $\sum_{v\notin S_0}a_v<\infty$. Define $f((x_v))=\prod_v f_v(x_v)$, the product being finite outside $S_0$ at every point. Then $f$ is absolutely integrable and

$$\int_X f\,d\mu=\prod_v\int_{X_v}f_v\,d\mu_v,$$

where the product converges absolutely. If the $a_v$ have parameter-independent summable bounds and the integrals $\int_{X_v}|f_v|$ for $v\in S_0$ are uniformly bounded over a parameter set, the convergence is uniform on that set.

## Facts & Assumptions

**Given:** Exactly the measure spaces, functions and summable tails in the Statement. 

[F1] Tonelli identifies integrals of nonnegative functions on sigma-finite products. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F2] Fubini identifies the integrals of integrable complex functions on sigma-finite products. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F3] The integral preserves increasing limits of nonnegative measurable functions. [[thm-monotone-convergence-for-the-integral]]

[F4] Dominated convergence gives convergence of complex integrals under an integrable majorant. [[thm-dominated-convergence]]

## Proof

**Given:** The Statement data.

1.1 For each finite $S\supseteq S_0$ let $X_S=\prod_{v\in S}X_v\times\prod_{v\notin S}K_v$. Finite Tonelli and Fubini yield $\int_{X_S}|f|=C\prod_{v\in S\setminus S_0}(1+a_v)\le C\exp(\sum_{v\notin S_0}a_v)$, where $C=\prod_{v\in S_0}\int_{X_v}|f_v|$. Since $X_S\uparrow X$ along a countable exhaustion, monotone convergence proves absolute integrability of $f$. [given, F1, F2, F3, construct, algebra]

2.1 Finite Fubini gives $\int_{X_S}f=\prod_{v\in S}\int f_v$, and dominated convergence gives the limit on the left. For $v\notin S_0$ write $\int f_v=1+b_v$ with $|b_v|\le a_v$. Thus $\sum|b_v|<\infty$, proving absolute convergence of the product and the displayed identity. [given, F2, F4, step 1.1, algebra]

3.1 Under uniform tail bounds, the absolute integral outside $X_S$ is at most $C e^{\sum a_v}(e^{\sum_{v\notin S}a_v}-1)$ after replacing $a_v$ by their uniform majorants and $C$ by a uniform bound. This tends to zero independently of the parameter, proving uniform convergence of the integrals and products. [given, step 1.1, step 2.1, algebra] ∎
