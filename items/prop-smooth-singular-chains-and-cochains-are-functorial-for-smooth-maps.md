---
id: "prop-smooth-singular-chains-and-cochains-are-functorial-for-smooth-maps"
kind: "proposition"
title: "Smooth singular chains and cochains are functorial for smooth maps"
deps: ["def-smooth-singular-chain-and-cochain-complexes", "prop-identity-maps-and-composites-of-smooth-maps-are-smooth", "def-smooth-map-between-manifolds-with-boundary"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://people.math.harvard.edu/~pspark/derham.pdf"
      locator: "DG-16 item 14; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

A smooth map $f:M\to N$ of smooth manifolds, possibly with boundary, induces a real-linear chain map $f_\#:C_\bullet^\infty(M;\mathbb R)\to C_\bullet^\infty(N;\mathbb R)$ by postcomposition. Precomposition induces cochain and cohomology pullbacks $f^*$. These assignments satisfy covariant chain and contravariant cochain/cohomology identity and composition laws.

## Facts & Assumptions

**Given:** Smooth maps $f:M\to N$ and $g:N\to P$.

[F1] Smooth simplices have target-valued neighbourhood extensions; their faces define the smooth subcomplex and its dual ([[def-smooth-singular-chain-and-cochain-complexes]]).

[F2] Identity and composite maps between boundaryless smooth manifolds are smooth ([[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]).

[F3] Boundary smoothness means Euclidean local smooth extension of coordinate representatives ([[def-smooth-map-between-manifolds-with-boundary]]).

## Proof

1.1 Composition is smooth also in the boundary case: around a point choose charts for the two maps, take local Euclidean smooth extensions of their coordinate representatives from [F3], and shrink the first extension domain so its image is inside the domain of the second. Their ordinary smooth composite extends the coordinate representative of the composite on the original half-space domain. The same coordinate argument for identity uses the Euclidean identity. This is the chart argument of [F2], with the local extension requirement explicitly respected. [given, F2, F3]

2.1 If $\bar\sigma:O\to M$ extends a smooth simplex, $f\bar\sigma:O\to N$ is smooth by step 1.1 and takes values in $N$. Thus $f_\#[\sigma]=[f\sigma]$ preserves smooth generators and has a unique finite real-linear extension. For $k\ge1$, $\partial f_\#[\sigma]=\sum_i(-1)^i[f\sigma\delta_i]=f_\#\partial[\sigma]$; for $k\le0$ both sides are zero. [F1, step 1.1, algebra]

3.1 Set $f^*\varphi=\varphi f_\#$. Then $\delta f^*\varphi=\varphi f_\#\partial=\varphi\partial f_\#=f^*\delta\varphi$, so cycles and boundaries are preserved and a quotient pullback is defined. On each smooth generator $(gf)_\#=g_\#f_\#$ and $(\operatorname{id})_\#=\operatorname{id}$ by composition of maps; precomposition reverses these laws, and passing to quotient classes preserves them. [F1, step 2.1, algebra]

4.1 On empty manifolds or negative degrees the maps are the unique zero maps. At degree zero they act by the point maps; on a one-point identity they are the identity of $\mathbb R$. Degenerate simplices and constant maps, including those landing in the boundary, retain their target-valued extensions through step 2.1. Each local extension is used for one simplex only; no simultaneous choice and no AC is used. [F1, step 2.1, step 3.1] ∎
