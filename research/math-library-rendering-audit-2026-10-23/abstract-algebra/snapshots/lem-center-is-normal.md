---
id: lem-center-is-normal
kind: lemma
title: "The center of a group is a normal subgroup"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-center-of-a-group, thm-normal-subgroup-characterisations, def-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Characteristic subgroup"
      url: "https://encyclopediaofmath.org/wiki/Characteristic_subgroup"
pipeline_run: null
---

## Statement

For every group $G$, the center $Z(G)$ is a normal subgroup of $G$.

## Facts & Assumptions

**Given:** A group $G$ with identity $e$ and center $Z(G)$.

[F1] The center is $Z(G)=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F2] A subset of a group is a subgroup when it contains the identity and is closed under products and inverses ([[def-subgroup]]).

[L1] A subgroup $N\le G$ is normal if $gNg^{-1}=N$ for every $g\in G$ ([[thm-normal-subgroup-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 The identity lies in $Z(G)$. If $x,y\in Z(G)$ and $g\in G$, then $(xy)g=x(yg)=x(gy)=(xg)y=(gx)y=g(xy)$, so $xy\in Z(G)$. If $x\in Z(G)$, then $xg=gx$ implies $x^{-1}g=gx^{-1}$ after multiplying by $x^{-1}$ on both sides, so $x^{-1}\in Z(G)$. Hence $Z(G)\le G$. [F1, F2, algebra]

1.2 If $z\in Z(G)$ and $g\in G$, then $gzg^{-1}=zgg^{-1}=z$. Therefore $gZ(G)g^{-1}=Z(G)$ for every $g\in G$. [F1, algebra]

2.1 Steps 1.1 and 1.2 show that $Z(G)$ is a subgroup invariant under conjugation, so it is normal. [step 1.1, step 1.2, L1] ∎
