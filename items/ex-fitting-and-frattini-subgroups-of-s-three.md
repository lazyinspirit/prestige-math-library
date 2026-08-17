---
id: ex-fitting-and-frattini-subgroups-of-s-three
kind: example
title: "The Fitting and Frattini subgroups of $S_3$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-fitting-subgroup-of-a-finite-group, def-frattini-subgroup-of-a-finite-group, thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup, def-finite-symmetric-group-and-permutation-notation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\Phi(S_3)=1$. Hence $F(S_3/\Phi(S_3))=F(S_3)/\Phi(S_3)$. See [[def-fitting-subgroup-of-a-finite-group]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] For a finite group $G$, the Fitting subgroup is $$F(G):=\prod_{p\mid |G|}O_p(G),$$ the product of its $p$-cores (def-p-core-of-a-finite-group). The factors are normal, so their finite product is a normal subgroup and does not depend on the order of multiplication. For the trivial group the product is empty and equals $1$. ([[def-fitting-subgroup-of-a-finite-group]]).

[L2] For a finite group $G$, the Frattini subgroup is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$. ([[def-frattini-subgroup-of-a-finite-group]]).

[L3] For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$. ([[thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]]).

[L4] Let $n\in\mathbb N$, so that $n=\{0,1,\dots,n-1\}$ (def-natural-numbers). The symmetric group on $n$ letters is $$S_n:=\operatorname{Sym}(n)=\operatorname{Sym}(\{0,1,\dots,n-1\}),$$ the group of all bijections of $n$ under composition (def-symmetric-group), with the composition convention. ([[def-finite-symmetric-group-and-permutation-notation]]).

## Verification

**Proof technique:** direct.

1.1 The subgroup $A_3$ is the unique Sylow $3$-subgroup, so $O_3(S_3)=A_3$. The three order-$2$ subgroups are conjugate, so no nontrivial $2$-subgroup is normal and $O_2(S_3)=1$. Therefore $F(S_3)=A_3$. [L1, L2, L3, L4, given, algebra]

2.1 The maximal subgroups are $A_3$ and the three order-$2$ subgroups, whose intersection is $1$; hence $\Phi(S_3)=1$. The quotient identity reduces to $F(S_3)=F(S_3)$ and is therefore satisfied. This proves the stated claim. [step 1.1, given, algebra] ∎
