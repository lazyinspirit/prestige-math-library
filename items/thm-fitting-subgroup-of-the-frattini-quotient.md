---
id: thm-fitting-subgroup-of-the-frattini-quotient
kind: theorem
title: "$F(G/\\Phi(G))=F(G)/\\Phi(G)$ for every finite group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup, cor-frattini-subgroup-is-contained-in-the-fitting-subgroup, thm-nilpotence-is-detected-modulo-the-frattini-subgroup, thm-correspondence-theorem-groups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

For every finite group $G$, $$F(G/\Phi(G))=F(G)/\Phi(G).$$ See [[thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$. ([[thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]]).

[L2] For every finite group $G$, $\Phi(G)\le F(G)$. ([[cor-frattini-subgroup-is-contained-in-the-fitting-subgroup]]).

[L3] Let $G$ be finite and let $\Phi(G)\le N\trianglelefteq G$. Then $N$ is nilpotent if and only if $N/\Phi(G)$ is nilpotent. In particular, $G$ is nilpotent if and only if $G/\Phi(G)$ is nilpotent. ([[thm-nilpotence-is-detected-modulo-the-frattini-subgroup]]).

[L4] Correspondence theorem: subgroups of $G/N$ correspond to subgroups of $G$ containing $N$, with normality preserved. For $N\mathrel{\trianglelefteq}G$, the maps $H\mapsto H/N$ and $K\mapsto\pi^{-1}(K)$ are inverse inclusion-preserving bijections between subgroups $H$ with $N\le H\le G$ and subgroups $K\le G/N$; they preserve normality. ([[thm-correspondence-theorem-groups]]).

## Proof

**Proof technique:** direct.

1.1 The image $F(G)/\Phi(G)$ is normal and nilpotent, giving one inclusion. [L1, L2, L3, L4, given, algebra]

2.1 For the reverse inclusion, pull $F(G/\Phi(G))$ back to a normal subgroup $N$ of $G$; the lifting theorem makes $N$ nilpotent, so $N\le F(G)$. [step 1.1, given, algebra]

3.1 If $G/\Phi(G)$ is trivial, then $\Phi(G)=G$, and $\Phi(G)\le F(G)\le G$ from [L2] forces $F(G)=G$; both sides of the identity are then the trivial group. Together with the two inclusions of steps 1.1 and 2.1 this gives equality in every case. This proves the stated claim. [step 1.1, step 2.1, L2, given, algebra] ∎
