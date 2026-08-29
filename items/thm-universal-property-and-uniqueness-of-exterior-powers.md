---
id: thm-universal-property-and-uniqueness-of-exterior-powers
kind: theorem
title: "Exterior powers represent alternating multilinear maps and are unique up to unique isomorphism"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-alternating-k-linear-map, def-kth-exterior-power-by-quotient, cor-module-tensor-products-are-unique-up-to-unique-isomorphism, cor-finite-iterated-tensor-products-represent-multilinear-maps, thm-quotient-vector-space-universal-property]
aliases: []
landmark: true
short: "Universal property of $\\Lambda^kV$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Statement

Let $V$ be a vector space over a field $F$ and $k\ge0$. The basic wedge map $\wedge:V^k\to\Lambda^kV$, $(v_1,\ldots,v_k)\mapsto v_1\wedge\cdots\wedge v_k$, is $k$-linear and alternating. For every $F$-vector space $W$ and every alternating $k$-linear map $f:V^k\to W$ of [[def-alternating-k-linear-map]], there is a unique linear map $\overline f:\Lambda^kV\to W$ with

$$\overline f(v_1\wedge\cdots\wedge v_k)=f(v_1,\ldots,v_k).$$

Moreover, if $U$ is a vector space and $\wedge':V^k\to U$ is a $k$-linear alternating map with the same property, then there is a unique linear isomorphism $u:\Lambda^kV\to U$ with $u\circ\wedge=\wedge'$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$, an integer $k\ge0$, a vector space $W$, and an alternating $k$-linear map $f:V^k\to W$.

[L1] An alternating $k$-linear map vanishes whenever two arguments are equal ([[def-alternating-k-linear-map]]).

[L2] The exterior power is $\Lambda^kV=V^{\otimes k}/W_k$, and the wedge is the universal multilinear map composed with the quotient projection ([[def-kth-exterior-power-by-quotient]]).

[L3] The iterated tensor product represents $k$-linear maps: every $k$-linear map out of $V^k$ factors uniquely through the pure-tensor map ([[cor-finite-iterated-tensor-products-represent-multilinear-maps]]).

[L4] A linear map out of $V$ factors uniquely through $V/W$ when it kills $W$ ([[thm-quotient-vector-space-universal-property]]).

[L5] Two pairs representing the same class of maps are related by a unique isomorphism carrying structure maps to structure maps ([[cor-module-tensor-products-are-unique-up-to-unique-isomorphism]]).

## Proof

**Proof technique:** direct.


1.1 The wedge is multilinear and alternating: by [L2] it is the composition of the universal multilinear map of [L3] with the quotient projection, and the projection kills every pure tensor with a repeated pair, which is exactly the vanishing condition of [L1]. [L1, L2, L3]

1.2 Since $f$ is $k$-linear, [L3] supplies a unique linear map $\widetilde f:V^{\otimes k}\to W$ with $\widetilde f(v_1\otimes\cdots\otimes v_k)=f(v_1,\ldots,v_k)$. [L3]

2.1 The map $\widetilde f$ kills $W_k$: each generator is a pure tensor with a repeated pair, on which $\widetilde f$ agrees with the alternating map $f$, which vanishes by [L1]; hence $\widetilde f$ vanishes on the whole span $W_k$. [L1, step 1.2]

3.1 By [L4], $\widetilde f$ factors uniquely through the quotient of [L2], giving a unique linear $\overline f:\Lambda^kV\to W$ with the displayed value on every wedge. [L2, L4, step 1.2, step 2.1]

4.1 For the uniqueness up to unique isomorphism, apply the universal property of $(\Lambda^kV,\wedge)$ to $\wedge'$ and that of $(U,\wedge')$ to $\wedge$, obtaining $u:\Lambda^kV\to U$ and $v:U\to\Lambda^kV$ with $u\wedge=\wedge'$ and $v\wedge'=\wedge$. Then $vu\wedge=\wedge$ and $uv\wedge'=\wedge'$, so the uniqueness clause of step 3.1 forces $vu=\operatorname{id}$ and $uv=\operatorname{id}$; this is the two-application argument of [L5]. [step 3.1, L5]

5.1 Steps 1.1 and 3.1 prove the representing property, and step 4.1 the uniqueness of the representing pair. [step 1.1, step 3.1, step 4.1] ∎
