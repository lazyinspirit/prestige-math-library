---
id: cor-complex-jacobian-determinant-is-multiplicative
kind: corollary
title: "The complex Jacobian determinant of a composite of equidimensional holomorphic maps is the product"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-chain-rule-for-holomorphic-maps-in-several-variables, def-holomorphic-map-and-complex-jacobian, thm-determinant-multiplicative, def-determinant-of-a-square-matrix, def-matrices-over-a-commutative-ring, thm-complex-numbers-form-a-field, cor-invertible-matrix-has-unit-determinant, def-coordinate-column-and-matrix-of-a-linear-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.3"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $U,V\subseteq\mathbb C^m$ be open, let $F:U\to V$ be holomorphic
at $a\in U$ and let $G:V\to\mathbb C^m$ be holomorphic at $F(a)$. Then
$J_{\mathbb C}F(a)$, $J_{\mathbb C}G(F(a))$ and $J_{\mathbb C}(G\circ F)(a)$ are
$m\times m$ matrices over $\mathbb C$ and

$$\det J_{\mathbb C}(G\circ F)(a)=\det J_{\mathbb C}G(F(a))\cdot\det J_{\mathbb C}F(a).$$

Consequently, if $F$ is holomorphic on $U$ with a holomorphic two-sided inverse
$F^{-1}:V\to U$, then $\det J_{\mathbb C}F(a)\ne0$ for every $a\in U$.

## Facts & Assumptions

**Given:** Equidimensional holomorphic maps $F$ and $G$ as above.

[L1] For holomorphic $F$ at $a$ and $G$ at $F(a)$, the composite is holomorphic at $a$ and $J_{\mathbb C}(G\circ F)(a)=J_{\mathbb C}G(F(a))J_{\mathbb C}F(a)$ ([[thm-chain-rule-for-holomorphic-maps-in-several-variables]]).

[L2] $J_{\mathbb C}F(a)$ is the matrix of the $\mathbb C$-linear differential in the standard bases, an $n\times m$ matrix over $\mathbb C$ ([[def-holomorphic-map-and-complex-jacobian]], [[def-coordinate-column-and-matrix-of-a-linear-map]]).

[L3] For $n\ge1$ and $A,B\in M_n(R)$ over a commutative ring, $\det(AB)=\det(A)\det(B)$ ([[thm-determinant-multiplicative]], [[def-determinant-of-a-square-matrix]]).

[L4] Matrices over a commutative ring and their product are those of [[def-matrices-over-a-commutative-ring]], and $\mathbb C$ is a field, hence a commutative ring ([[thm-complex-numbers-form-a-field]]).

[L5] If $A\in M_n(R)$ is invertible over a commutative ring then $\det(A)$ is a unit, with inverse $\det(A^{-1})$ ([[cor-invertible-matrix-has-unit-determinant]]).

## Proof

**Proof technique:** direct.

1.1 Since the source and target dimensions are all $m$, [L2] makes each of the three Jacobians an $m\times m$ matrix over $\mathbb C$, which is a commutative ring by [L4]. [given, L2, L4]

2.1 By [L1] the composite Jacobian is the matrix product $J_{\mathbb C}G(F(a))J_{\mathbb C}F(a)$, so [L3] applied over $\mathbb C$ gives $\det J_{\mathbb C}(G\circ F)(a)=\det J_{\mathbb C}G(F(a))\det J_{\mathbb C}F(a)$. [step 1.1, L1, L3, L4]

3.1 If $F$ has a holomorphic two-sided inverse $F^{-1}$, applying step 2.1 to $G=F^{-1}$ gives $\det J_{\mathbb C}F^{-1}(F(a))\det J_{\mathbb C}F(a)=\det J_{\mathbb C}(\mathrm{id})(a)=1$, since the identity map is holomorphic with identity differential by [L2]; so $\det J_{\mathbb C}F(a)$ is a unit of the field $\mathbb C$, in particular nonzero, as [L5] also records. [step 2.1, L2, L4, L5] ∎
