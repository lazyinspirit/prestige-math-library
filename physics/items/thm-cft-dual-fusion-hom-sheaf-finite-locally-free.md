---
id: thm-cft-dual-fusion-hom-sheaf-finite-locally-free
kind: theorem
title: Finite local freeness of the dual-fusion Hom sheaf
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
deps:
  - def-cft-pointed-analytic-worldsheet
  - def-cft-voa-conformal-block-and-dual-fusion-product
  - def-grading-restricted-generalized-vertex-module
  - def-cft-contragredient-generalized-module
  - thm-cft-contragredient-generalized-module
  - lem-cft-c2-cofinite-modules-finitely-generated
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  def-cft-voa-conformal-block-and-dual-fusion-product: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
  def-cft-contragredient-generalized-module: mathematical-premise
  thm-cft-contragredient-generalized-module: mathematical-premise
  lem-cft-c2-cofinite-modules-finitely-generated: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras III: The Sewing-Factorization Theorems"
      url: https://arxiv.org/pdf/2503.23995v4
      locator: "Theorem 3.13 and proof, §3.3, PDF pp. 57–58: the source identifies the Hom-sheaf source as locally free before its fiberwise matrix argument."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V$ be a C2-cofinite conformal vertex algebra of CFT type, let $B$ be a nonempty open polydisk, and let $F,G\to B$ be analytic families of compact pointed worldsheets such that every component of every fiber of each family meets an incoming marked section. Give $F$ and $G$ respectively $N$ and $K$ incoming sections and the same number $R\ge0$ of ordered outgoing sections. Assign fixed admitted generalized joint $V^{\otimes N}$- and $V^{\otimes K}$-modules $W,X$ to the incoming sections. By a **dual fusion product over $B$** for $H=F$ or $G$ with incoming module $Z=W$ or $X$, mean a fixed grading-restricted generalized joint $V^{\otimes R}$-module $D_H(Z)$ and a holomorphic family conformal block $\gamma_H$ on $Z\otimes D_H(Z)$. Holomorphic means that its evaluation on every fixed tensor is a holomorphic function on $B$. Require, for every $b\in B$ and every admitted $V^{\otimes R}$-module $M$, that $T\mapsto\gamma_{H,b}\circ(\mathrm{id}_Z\otimes T)$ be the representing bijection $\operatorname{Hom}_{V^{\otimes R}}(M,D_H(Z))\to\mathrm{CB}_{H_b}(Z\otimes M)$. Suppose these two family products are supplied; their existence and a choice of holomorphic trivialization of arbitrary varying fiber modules are not conclusions of this theorem. Then the constant sheaf
$$
\mathcal H:=\operatorname{Hom}_{V^{\otimes R}}\!\bigl(D_G(X)',D_F(W)\bigr)\otimes_{\mathbb C}\mathcal O_B
$$
is finite locally free over $B$. Here $D_G(X)'$ is the contragredient of $D_G(X)$; “finite locally free” means locally isomorphic to $\mathcal O_B^n$ for one finite integer $n$ on each neighborhood.

## Statement references

[[def-cft-voa-conformal-block-and-dual-fusion-product]]

[[def-cft-contragredient-generalized-module]]

[[thm-cft-contragredient-generalized-module]]

## Facts & Assumptions

[F1] [[lem-cft-c2-cofinite-modules-finitely-generated]] supplies a finite set $E\subset\mathbb C$, depending only on $V$, for which $G(A)=\bigoplus_{\lambda\in E^R}A_{[\lambda]}$ is a finite-dimensional generating subspace of every admitted generalized joint module $A$.

[F2] [[def-cft-voa-conformal-block-and-dual-fusion-product]] requires each assumed dual fusion product to be a grading-restricted generalized module; existence is a hypothesis here. [[thm-cft-contragredient-generalized-module]] makes the restricted contragredient another module in this same joint class.

[F3] A component module map intertwines every mode, and therefore each $L_i(0)$. Hence it preserves joint generalized weights: $(L_i(0)-\lambda_i)^nf(a)=f((L_i(0)-\lambda_i)^na)$ for every integer $n\geq0$.

## Proof

**Given:** The C2-cofinite algebra, families, nonempty base, and indicated dual fusion products in the Statement.

1.1 Put $A=D_G(X)'$ and $C=D_F(W)$. By [F2] these are grading-restricted generalized $V^{\otimes R}$-modules. By [F1], $G(A)=\bigoplus_{\lambda\in E^R}A_{[\lambda]}$ is finite dimensional and generates $A$ under the component modes. Also $C_E=\bigoplus_{\lambda\in E^R}C_{[\lambda]}$ is finite dimensional, since it is a finite sum of finite-dimensional joint generalized-weight spaces. If $R=0$, the empty-tuple joint-space convention makes both modules finite dimensional and the same assertions hold with $G(A)=A$ and $C_E=C$. [given, F1, F2, algebra]

2.1 By [F3], restriction sends $\operatorname{Hom}_{V^{\otimes R}}(A,C)$ into $\operatorname{Hom}_{\mathbb C}(G(A),C_E)$. This restriction map is injective: a module map zero on $G(A)$ is zero on every finite string of component modes applied to those generators, and such strings span $A$. The target is a finite-dimensional vector space, so the indicated module Hom space has some finite dimension $d$. No auxiliary grading-preservation condition is imposed on these maps. [F3, step 1.1, algebra]

3.1 Choose a basis of this $d$-dimensional Hom space. Tensoring its basis isomorphism with $\mathcal O_B$ gives an $\mathcal O_B$-linear isomorphism $\mathcal H\cong\mathcal O_B^d$, proving finite local freeness of exactly the constant tensor-product sheaf in the Statement. This uses neither an identification with a varying conformal-block sheaf nor a base-change assertion about such a sheaf. [step 2.1, choose] ∎

## Remarks

This proof is conditional only on the existence and module-class interfaces expressly assumed for the displayed dual fusion products. It does not construct those products or prove the dual-fusion representing theorem. Identifying this constant Hom sheaf with a family conformal-block sheaf and proving compatibility with holomorphic base change remain separate obligations in consumers that require them.
