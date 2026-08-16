---
id: thm-sylow-characterizations-of-finite-nilpotence
kind: theorem
title: "Sylow and maximal-subgroup characterizations of finite nilpotence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-nilpotence-via-normal-sylow-subgroups, thm-maximal-subgroups-of-finite-nilpotent-groups, thm-nilpotence-is-detected-modulo-the-frattini-subgroup, def-frattini-subgroup-of-a-finite-group, thm-internal-direct-product-recognition, thm-correspondence-theorem-groups, thm-cauchys-theorem-for-finite-groups, thm-finite-p-groups-are-nilpotent, thm-subgroups-quotients-and-finite-products-of-nilpotent-groups]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; $G$ is the internal direct product of its Sylow subgroups; and every maximal subgroup of $G$ is normal. See [[lem-finite-nilpotence-via-normal-sylow-subgroups]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; and $G$ is the internal direct product of its Sylow subgroups. ([[lem-finite-nilpotence-via-normal-sylow-subgroups]]).

[L2] Every maximal proper subgroup of a finite nilpotent group is normal and has prime index. ([[thm-maximal-subgroups-of-finite-nilpotent-groups]]).

[L3] Let $G$ be finite and let $\Phi(G)\le N\trianglelefteq G$. Then $N$ is nilpotent if and only if $N/\Phi(G)$ is nilpotent. In particular, $G$ is nilpotent if and only if $G/\Phi(G)$ is nilpotent. ([[thm-nilpotence-is-detected-modulo-the-frattini-subgroup]]).

[L4] For a finite group $G$, the Frattini subgroup is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$. ([[def-frattini-subgroup-of-a-finite-group]]).

[L5] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case. ([[thm-internal-direct-product-recognition]]).

[L6] If a prime $p$ divides the order of a finite group $H$, then $H$ contains an element, and hence a subgroup, of order $p$. ([[thm-cauchys-theorem-for-finite-groups]]).

[L7] Every finite $p$-group is nilpotent, including the trivial group. ([[thm-finite-p-groups-are-nilpotent]]).

[L8] Every subgroup and every quotient of a nilpotent group is nilpotent, and every finite direct product of nilpotent groups is nilpotent. ([[thm-subgroups-quotients-and-finite-products-of-nilpotent-groups]]).

[L9] For $K\trianglelefteq G$, subgroups of $G/K$ correspond to subgroups of $G$ containing $K$, and the correspondence preserves inclusion and normality. ([[thm-correspondence-theorem-groups]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the first three conditions are equivalent, and [L2] proves that any of them implies normality of every maximal subgroup. [L1, L2, given]

2.1 Conversely, assume every maximal subgroup $M$ is normal. The diagonal map $G/\Phi(G)\to\prod_M G/M$ is injective because its kernel is the intersection [L4]. By [L9] and maximality, each nontrivial quotient $G/M$ has no nontrivial proper subgroup. If $p$ divides its order, [L6] supplies a subgroup of order $p$, which must be all of $G/M$. Thus each factor has prime order and is nilpotent by [L7]. [L4, L6, L7, L9, step 1.1, given, algebra]

3.1 The finite product in step 2.1 is nilpotent and so is its subgroup $G/\Phi(G)$ by [L8]. The lifting theorem [L3] now makes $G$ nilpotent. [L3, L8, step 2.1]

4.1 This proves the reverse implication and hence all four equivalences. [step 1.1, step 3.1]

5.1 If the family of maximal subgroups is empty, finiteness forces $G=1$; the diagonal target is then the empty product $1$, and every condition holds. [L1, L4, L5, L7, step 4.1, given] ∎
