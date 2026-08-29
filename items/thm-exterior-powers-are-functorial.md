---
id: thm-exterior-powers-are-functorial
kind: theorem
title: "Exterior powers are functorial"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kth-exterior-power-of-a-linear-map, thm-universal-property-and-uniqueness-of-exterior-powers, thm-exterior-algebra-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Statement

For linear maps $T:V\to W$ and $S:W\to U$ and every $k\ge0$, the induced maps of [[def-kth-exterior-power-of-a-linear-map]] satisfy

$$\Lambda^k(\operatorname{id}_V)=\operatorname{id}_{\Lambda^kV},\qquad \Lambda^k(S\circ T)=\Lambda^kS\circ\Lambda^kT.$$

Thus $V\mapsto\Lambda^kV$, $T\mapsto\Lambda^kT$ is a functor from $F$-vector spaces to $F$-vector spaces, for each fixed $k$.

## Facts & Assumptions

**Given:** Linear maps $T:V\to W$ and $S:W\to U$ and a degree $k\ge0$.

[L1] The induced map is $\Lambda^kT(v_1\wedge\cdots\wedge v_k)=T(v_1)\wedge\cdots\wedge T(v_k)$ ([[def-kth-exterior-power-of-a-linear-map]]).

[L2] A linear map out of $\Lambda^kV$ is determined by its values on decomposable wedges, by the uniqueness clause of the universal property ([[thm-universal-property-and-uniqueness-of-exterior-powers]]).

## Proof

**Proof technique:** direct.


1.1 By [L1], $\Lambda^k(\operatorname{id}_V)(v_1\wedge\cdots\wedge v_k)=v_1\wedge\cdots\wedge v_k$, so it agrees with $\operatorname{id}_{\Lambda^kV}$ on decomposables; [L2] then gives equality everywhere. [L1, L2]

1.2 By [L1] applied to $S\circ T$ and to each factor, $\Lambda^k(S\circ T)(v_1\wedge\cdots\wedge v_k)=S(T(v_1))\wedge\cdots\wedge S(T(v_k))=\Lambda^kS(T(v_1)\wedge\cdots\wedge T(v_k))=(\Lambda^kS\circ\Lambda^kT)(v_1\wedge\cdots\wedge v_k)$; [L2] extends the equality from decomposables to all of $\Lambda^kV$. [L1, L2]

2.1 Steps 1.1 and 1.2 are the identity and composition laws of a functor, with the $k=0$ and $k=1$ cases the conventions of [L1]. [step 1.1, step 1.2, L1] ∎
