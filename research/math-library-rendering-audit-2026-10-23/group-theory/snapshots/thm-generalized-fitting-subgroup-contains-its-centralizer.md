---
id: thm-generalized-fitting-subgroup-contains-its-centralizer
kind: theorem
title: "The generalized Fitting subgroup contains its centralizer"
status: published
origin: pipeline
deps: [def-generalized-fitting-subgroup, def-quasisimple-group-component-and-layer, thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup, lem-characteristic-subgroup-of-a-normal-subgroup-is-normal, lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple, thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups, lem-centralizer-of-a-normal-subgroup-is-normal]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: induction
sources:
  scraped: []
  references:
    - title: "Stephen D. Smith, CFSG—A User's Manual, p. 23 (statement, with reference to Aschbacher §31.13)"
      url: "https://homepages.math.uic.edu/~smiths/talkv.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

For a finite group $G$, $C_G(F^*(G))\le F^*(G)$.

## Facts & Assumptions

**Given:** A finite group $G$. Write $F=F(G)$, $E=E(G)$, $H=F^*(G)=FE$,
and $C=C_G(H)$.

[L1] $F(G)$ is characteristic, normal, and nilpotent; every normal nilpotent
subgroup of $G$ lies in $F(G)$ ([[thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]]).

[L2] A component is a subnormal quasisimple subgroup, and $E(G)$ is generated
by all components. Quasisimple means perfect with a simple central quotient
([[def-quasisimple-group-component-and-layer]]). Conjugation permutes
components, so $E(G)$, and hence $H=FE$, is normal in $G$.

[L3] A minimal normal subgroup of a finite group is characteristically simple
([[lem-minimal-normal-subgroups-of-finite-groups-are-characteristically-simple]]),
and a nontrivial finite characteristically simple group is an internal direct
product of isomorphic simple groups
([[thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups]]).

[L4] A characteristic subgroup of a normal subgroup is normal
([[lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]]), and the
centralizer of a normal subgroup is normal
([[lem-centralizer-of-a-normal-subgroup-is-normal]]).

## Proof

**Proof technique:** induction on $|G|$.

1.1 The result is immediate for $G=1$, since $F^*(1)=1$. [base]

1.2 Assume the result for all finite groups of order smaller than $|G|$. By [L2], $H\trianglelefteq G$, so $C\trianglelefteq G$ by [L4]. [IH, L2, L4]

2.1 The subgroup $F(C)$ is characteristic in $C$: an automorphism of $C$ permutes its $p$-cores. Thus $F(C)\trianglelefteq G$ because $C\trianglelefteq G$; it is nilpotent by [L1], so $F(C)\le F(G)$. Every component of $C$ is subnormal in $G$, by appending $C\trianglelefteq G$ to its subnormal chain in $C$. Hence $E(C)\le E(G)$ and $$F^*(C)=F(C)E(C)\le H\cap C.$$ [L1, L2, L4, step 1.2, algebra]

3.1 Every element of $C$ centralizes every element of $H$. Consequently $H\cap C\le Z(C)$ and $F^*(C)\le Z(C)$. [given, step 2.1]

4.1 If $C<G$, step 1.2 applied to $C$ gives $C_C(F^*(C))\le F^*(C)$. But step 3.1 makes the left side equal to $C$. Therefore $C\le F^*(C)\le H$, as required. [step 1.2, step 2.1, step 3.1]

4.2 It remains to consider $C=G$. Then $H\le Z(G)$, in particular $F\le Z(G)$ and $E\le Z(G)$. Suppose $G/F\ne1$. Choose a minimal nontrivial normal subgroup $A$ of the finite group $G/F$, and let $N$ be its inverse image in $G$. Such an $A$ exists by choosing a subgroup of least positive order among the nontrivial normal subgroups of $G/F$. Thus $F<N\trianglelefteq G$ and $N/F=A$. [given, L2, step 3.1, choose]

5.1 If $A$ is abelian, then $[N,N]\le F\le Z(G)$. Hence the lower central series of $N$ ends after at most two commutator steps, so $N$ is nilpotent. As $N\trianglelefteq G$, [L1] gives $N\le F$, contradicting $F<N$. [L1, step 4.2]

5.2 If $A$ is nonabelian, [L3] writes it as a direct product of isomorphic nonabelian simple groups. Choose a simple direct factor $T\trianglelefteq A$, and let $N_T$ be its inverse image under $N\to N/F=A$. Then $N_T\trianglelefteq N\trianglelefteq G$, $F\le Z(G)$, and $N_T/F\cong T$. Put $K=[N_T,N_T]$. The image of $K$ in $T$ is $[T,T]=T$, since a nonabelian simple group is perfect. Thus $N_T=KF$. Because $F$ is central, $$K=[N_T,N_T]=[KF,KF]=[K,K],$$ so $K$ is perfect. Also $K/(K\cap F)\cong T$. Since $K\cap F$ is central in $K$ and $T$ has trivial center, $Z(K)=K\cap F$; hence $K/Z(K)\cong T$ is simple. Finally $K\trianglelefteq N_T\trianglelefteq N\trianglelefteq G$, so $K$ is a component of $G$. [L2, L3, step 4.2, algebra]

6.1 Step 5.2 gives $K\le E\le H\le Z(G)$, whereas $K/Z(K)\cong T$ is nonabelian. This contradiction rules out the nonabelian case. Together with step 5.1, it follows that $G/F=1$. Hence $C=G=F\le H$. [step 4.2, step 5.1, step 5.2]

7.1 Steps 4.1 and 6.1 cover both possibilities for $C$, proving $C_G(F^*(G))\le F^*(G)$ for all finite $G$. [discharge-induction, step 4.1, step 6.1] ∎
