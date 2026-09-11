---
id: prop-singular-cohomology-is-contravariantly-functorial
kind: proposition
title: Singular cohomology is contravariantly functorial
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-singular-cohomology-with-coefficients, def-singular-cochain-complex-with-coefficients, def-induced-singular-chain-map, lem-induced-singular-chain-maps-commute-with-boundaries]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Hatcher, section 3.1, printed pages 198–200
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
---

## Statement

A continuous map $f:X\to Y$ induces $f^*:H^n(Y;G)\to H^n(X;G)$ for every integer $n$ and abelian group $G$, by $f^*[\varphi]=[\varphi f_\#]$. These maps satisfy $(1_X)^*=1$ and $(g\circ f)^*=f^*\circ g^*$. A coefficient homomorphism $u:G\to G'$ induces $u_*:H^n(X;G)\to H^n(X;G')$, covariantly functorial in coefficients and commuting with $f^*$.

## Facts & Assumptions

[F1] [[def-singular-cochain-complex-with-coefficients]] defines cochains by Hom and coboundary by precomposition with the boundary.

[F2] [[def-singular-cohomology-with-coefficients]] forms the quotient of cocycles by coboundaries in every degree.

[F3] [[def-induced-singular-chain-map]] sends each simplex $\sigma$ to $f\circ\sigma$; [[lem-induced-singular-chain-maps-commute-with-boundaries]] gives $\partial f_\#=f_\#\partial$, including the zero-degree convention.

## Proof

**Given:** The continuous maps and coefficient homomorphism in the statement; $g:Y\to Z$ is continuous.

1.1 Define $f^\sharp\varphi=\varphi f_\#$ on cochains. It is additive and satisfies $\delta_Xf^\sharp\varphi=\varphi f_\#\partial_X=\varphi\partial_Yf_\#=f^\sharp\delta_Y\varphi$ by [F1] and [F3]. Thus it takes cocycles to cocycles and a coboundary $\delta_Y\eta$ to $\delta_X(f^\sharp\eta)$. It therefore induces the specified homomorphism on [F2] quotients, independently of every representative. In negative degrees use the unique map of zero groups. [F1, F2, F3]

1.2 On each singular simplex, $(g\circ f)_\#\sigma=g\circ f\circ\sigma=g_\#f_\#\sigma$ and $(1_X)_\#\sigma=\sigma$; extending linearly proves the same on chains. Consequently $\varphi(g\circ f)_\#=(\varphi g_\#)f_\#$ and $\varphi(1_X)_\#=\varphi$ on cochains. These equalities also hold in negative degrees by the zero convention. [F1, F3]

1.3 Postcomposition sends $\varphi$ to $u\varphi$. It is additive and $\delta(u\varphi)=u\varphi\partial=u(\delta\varphi)$. It preserves cocycles and coboundaries and induces $u_*$ on [F2]. Moreover $u(\varphi f_\#)=(u\varphi)f_\#$, so the induced coefficient and space maps commute. Postcomposition by $1_G$ is identity, and postcomposition by $v\circ u$ equals successive postcomposition by $u$ and $v$, giving coefficient functoriality. [F1, F2, F3]

2.1 Step 1.1 supplies the quotient maps, and the cochain equalities of step 1.2 descend to their stated contravariant identity and composition laws. Step 1.3 proves coefficient functoriality and naturality. The formulas cover degree zero without quotient ambiguity since $B^0=0$, and negative degrees by zero maps. For empty source $X$, pullback lands in zero groups; a map to empty $Y$ exists only when $X$ is empty. Zero coefficients give zero groups. Identity maps on a point satisfy the same literal identity calculation. No representative or basis is selected and no AC is needed. [F1, F2, step 1.1, step 1.2, step 1.3] ∎
