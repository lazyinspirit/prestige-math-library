---
id: def-cft-higher-zhu-algebra
kind: definition
title: Higher Zhu quotients and candidate products
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps:
  - def-conformal-vertex-algebra
  - def-vertex-algebra-state-field
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
domain: mathematics
library: mathematics
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Chongying Dong, Haisheng Li, and Geoffrey Mason, Vertex operator algebras and associative algebras"
      url: "https://arxiv.org/pdf/q-alg/9612010"
      locator: "§2, the definition of O_n(V), A_n(V), and the product *_n; Theorem 2.3."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $V=\bigoplus_{r\geq0}V_r$ be a conformal vertex algebra of CFT type. For each integer $n\geq0$ and homogeneous $u,v\in V$, define
$$ u\circ_n v=\operatorname{Res}_zY(u,z)v\,\frac{(1+z)^{\mathrm{wt}(u)+n}}{z^{2n+2}},\qquad D u=L(-1)u+L(0)u,\qquad O_n(V)=\operatorname{span}_{\mathbb C}\{u\circ_n v,\;D u:u,v\in V\}. $$
Define the candidate operation on representatives
$$ u*_n v=\sum_{m=0}^{n}(-1)^m\binom{m+n}{n}\operatorname{Res}_zY(u,z)v\,\frac{(1+z)^{\mathrm{wt}(u)+n}}{z^{n+m+1}}. $$
Extend $\circ_n$ and $*_n$ uniquely to bilinear maps $V\times V\to V$ by summing over the finite homogeneous decompositions of both inputs; $D=T+L(0)$ is linear. The span defining $O_n(V)$ uses these extensions. Write $A_n(V)=V/O_n(V)$ for the vector-space quotient; the operation $*_n$ descends to an associative unital algebra only under the separate theorem cited below. At $n=0$ the extra span $D(V)$ is redundant and the formulas reduce to the Zhu circle subspace and candidate product.

## Statement references

[[thm-cft-higher-zhu-algebra-structure]]

## Facts & Assumptions

**Given:** $V$ is a conformal vertex algebra of CFT type in the non-super state–field convention.

[F1] [[def-conformal-vertex-algebra]]: $T=L(-1)$, homogeneous weights are nonnegative integers, and $L(0)u=\mathrm{wt}(u)u$ for homogeneous $u$.

[F2] [[def-vertex-algebra-state-field]]: $Y(u,z)v=\sum_{j\in\mathbb Z}u_{(j)}v\,z^{-j-1}$ and the vacuum/creation axiom is $Y(u,z)\mathbf1=e^{zT}u$.

## Proof

1.1 For fixed $n\geq0$ and homogeneous $u$ of weight $r$, the exponent $r+n$ is a nonnegative integer. The two residue formulas are therefore finite sums:
$$ u\circ_n v=\sum_{j=0}^{r+n}\binom{r+n}{j}u_{(j-2n-2)}v,\qquad u*_n v=\sum_{m=0}^{n}\sum_{j=0}^{r+n}(-1)^m\binom{m+n}{n}\binom{r+n}{j}u_{(j-n-m-1)}v. $$
Thus every displayed vector lies in $V$, and $O_n(V)$ is a vector subspace. [given, F1, F2, algebra]

2.1 For homogeneous $u$, the creation axiom and the finite binomial expansion give
$$ u\circ_0\mathbf1=\operatorname{Res}_z e^{zT}u\,(1+z)^{\mathrm{wt}(u)}z^{-2}=Tu+\mathrm{wt}(u)u=L(-1)u+L(0)u=D u. $$
Hence $D(V)\subseteq\operatorname{span}\{u\circ_0v\}$ and $O_0(V)$ equals the ordinary Zhu circle subspace. The $n=0$ candidate operation is the ordinary Zhu star operation. [given, F1, F2, step 1.1, algebra] ∎

## Proof status

This definition fixes the higher Zhu quotient as in DLM §2, including the additional $D(V)$ summand needed for the algebra theorem. It defines a vector quotient and a candidate operation only; associativity and descent are not implicit.

