---
id: thm-fitting-subgroup-contains-its-centralizer-in-a-finite-solvable-group
kind: theorem
title: "Philip Hall: in a finite solvable group the Fitting subgroup contains its own centralizer"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [def-fitting-subgroup-of-a-finite-group, thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup, def-centralizer-of-a-subgroup, lem-centralizer-of-a-normal-subgroup-is-normal, lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup, thm-subgroups-and-quotients-of-solvable-groups-are-solvable, thm-correspondence-theorem-groups, lem-dedekind-modular-law-for-subgroups, thm-quotient-abelian-iff-contains-commutator-subgroup, lem-intersection-of-normal-subgroups, def-nilpotent-group-and-nilpotency-class, def-upper-central-series, def-center-of-a-group, lem-center-is-normal]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Theorem 2.13"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite solvable group. Then $C_G(F(G))\le F(G)$.

## Facts & Assumptions

**Given:** A finite solvable group $G$. Write $F:=F(G)$ and $C:=C_G(F)$.

[L1] For a finite group $G$ the Fitting subgroup is $F(G)=\prod_{p\mid|G|}O_p(G)$; and if $A,B\trianglelefteq G$, then $AB$ is a subgroup, is normal, and satisfies $AB=BA$ ([[def-fitting-subgroup-of-a-finite-group]]).

[L2] For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$ ([[thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]]).

[L3] $C_G(H)=\{g\in G:gh=hg\text{ for every }h\in H\}$, a subgroup of $G$ ([[def-centralizer-of-a-subgroup]]).

[L4] If $N\trianglelefteq G$, then $C_G(N)\trianglelefteq G$ ([[lem-centralizer-of-a-normal-subgroup-is-normal]]).

[L5] Every subgroup and every quotient of a solvable group is solvable; no finiteness hypothesis is required ([[thm-subgroups-and-quotients-of-solvable-groups-are-solvable]]).

[L6] For $N\trianglelefteq G$, the maps $H\mapsto H/N$ and $K\mapsto\pi^{-1}(K)$ are inverse inclusion-preserving bijections between the subgroups $H$ with $N\le H\le G$ and the subgroups $K\le G/N$; they preserve normality ([[thm-correspondence-theorem-groups]]).

[L7] Let $Q$ be a solvable group and let $N\trianglelefteq Q$ with $N\ne1$. Then $N$ contains a subgroup $A\ne1$ that is abelian and normal in $Q$ ([[lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup]]).

[L8] Let $A,B,C\le G$ with $A\le C$. If $AB$ is a subgroup of $G$, then $A(B\cap C)=AB\cap C$ ([[lem-dedekind-modular-law-for-subgroups]]).

[L9] Let $N\trianglelefteq G$. Then $G/N$ is abelian if and only if $[G,G]\subseteq N$ ([[thm-quotient-abelian-iff-contains-commutator-subgroup]]).

[L10] Let $G$ be a group and let $\mathcal N$ be a nonempty family of normal subgroups of $G$. Then $\bigcap_{N\in\mathcal N}N$ is a normal subgroup of $G$ ([[lem-intersection-of-normal-subgroups]]).

[L11] A group $G$ is nilpotent if $Z_c(G)=G$ for some $c\in\mathbb N$, where $(Z_r(G))$ is its upper central series ([[def-nilpotent-group-and-nilpotency-class]]).

[L12] The upper central series begins with $Z_0(G)=1$ and satisfies $Z_{r+1}(G)/Z_r(G)=Z(G/Z_r(G))$; in particular $Z_1(G)=Z(G)$ ([[def-upper-central-series]]).

[L13] $Z(G)=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[L14] For every group $G$, the center $Z(G)$ is a normal subgroup of $G$ ([[lem-center-is-normal]]).

## Proof

**Proof technique:** contradiction.

1.1 By [L2], $F\trianglelefteq G$ and every normal nilpotent subgroup of $G$ is contained in $F$. [L2, given]

1.2 Assume towards a contradiction that $C\not\le F$. [assume-contra, given]

2.1 $F$ is normal in $G$, so $C=C_G(F)\trianglelefteq G$ by [L4]. [L4, step 1.1]

3.1 $C$ and $F$ are both normal in $G$, so by [L1] the product $CF$ is a subgroup of $G$, is normal in $G$, and satisfies $CF=FC$. Since the identity lies in $C$, also $F\le CF$. [L1, step 1.1, step 2.1]

4.1 $G$ is solvable, so its quotient $G/F$ is solvable by [L5]; and $CF\trianglelefteq G$ with $F\le CF$, so $CF/F\trianglelefteq G/F$ by [L6]. By step 1.2 some $c\in C$ lies outside $F$, so $cF\ne F$ and $CF/F\ne1$. [L5, L6, given, step 1.2, step 3.1]

5.1 Apply [L7] to the solvable group $G/F$ and its nontrivial normal subgroup $CF/F$: there is a subgroup $\bar A\ne1$ of $CF/F$ that is abelian and normal in $G/F$. Let $A$ be its preimage under $G\to G/F$. By [L6], $F\le A\le CF$, $A\trianglelefteq G$, and $A/F=\bar A$ is nontrivial and abelian. [L6, L7, step 4.1]

6.1 $F\trianglelefteq A$ and $A/F$ is abelian, so $[A,A]\le F$ by [L9]. [L9, step 5.1]

6.2 Put $D:=C\cap A$. Both $C$ and $A$ are normal in $G$, so $D\trianglelefteq G$ by [L10]. [L10, step 2.1, step 5.1]

7.1 Apply [L8] with its $A:=F$, its $B:=C$ and its $C:=A$. Its hypotheses hold: $F\le A$ by step 5.1, and $FC=CF$ is a subgroup by step 3.1. Hence $F(C\cap A)=FC\cap A$, and $A\le CF=FC$ makes the right-hand side equal to $A$. Therefore $A=FD$. [L8, step 3.1, step 5.1, step 6.2]

7.2 $D\le A$, so $[D,D]\le[A,A]\le F$ by step 6.1. Also $D\le C=C_G(F)$, so by [L3] every element of $D$ commutes with every element of $F$, in particular with every element of $[D,D]$. Since $[D,D]\le D$, this says $[D,D]\le Z(D)$ by [L13]. [L3, L13, step 6.1, step 6.2]

8.1 $Z(D)\trianglelefteq D$ by [L14], and $[D,D]\le Z(D)$, so $D/Z(D)$ is abelian by [L9]. [L9, L14, step 7.2]

9.1 By [L12], $Z_1(D)=Z(D)$ and $Z_2(D)/Z_1(D)=Z\!\left(D/Z_1(D)\right)$. Step 8.1 makes $D/Z_1(D)$ abelian, and the center of an abelian group is the whole group by [L13], so $Z_2(D)/Z_1(D)=D/Z_1(D)$ and hence $Z_2(D)=D$. By [L11], $D$ is nilpotent. [L11, L12, L13, step 8.1]

10.1 $D$ is a normal nilpotent subgroup of $G$ by steps 6.2 and 9.1, so $D\le F$ by step 1.1. [step 1.1, step 6.2, step 9.1]

11.1 Substituting into step 7.1 gives $A=FD\le F$, so $A/F$ is trivial, contradicting step 5.1. The assumption of step 1.2 is therefore untenable, and $C_G(F(G))\le F(G)$. This proves the stated claim. [discharge-contradiction: step 1.2, step 5.1, step 7.1, step 10.1] ∎
