---
id: prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups
kind: proposition
title: "The maximal elementary abelian subgroups of the two extraspecial groups of order $2^{1+2n}$ have orders $2^{n+1}$ and $2^{n}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, def-square-map-of-an-extraspecial-two-group, lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing, def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, lem-the-commutator-pairing-is-nondegenerate, lem-orthogonal-complement-counting-for-the-commutator-pairing, prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups, thm-classification-of-extraspecial-two-groups, def-plus-and-minus-type-of-an-extraspecial-p-group, def-elementary-abelian-p-group, def-fp-basis-of-an-elementary-abelian-p-group, lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension, thm-lagrange, def-generated-subgroup, def-center-of-a-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Proposition 3.14(ii)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Proposition 2.39(ii)"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
---
## Statement

The maximal elementary abelian subgroups of the two extraspecial groups of order $2^{1+2n}$ have orders $2^{n+1}$ and $2^{n}$.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[L1] For an extraspecial $2$-group $P$ of order $2^{1+2n}$ with $Z(P)=\langle z\rangle$, the square map is the function $q$ determined by $x^2=z^{q(\bar x)}$, with values in $\mathbb F_2$ ([[def-square-map-of-an-extraspecial-two-group]]).

[L2] The square map is well defined on the central quotient and satisfies $q(\bar x\bar y)=q(\bar x)+q(\bar y)+b(\bar x,\bar y)$ ([[lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing]]).

[L3] For a subgroup $\bar A$ of $P/Z(P)$ one has $|\bar A|\,|\bar A^{\perp}|=|P/Z(P)|$ ([[lem-orthogonal-complement-counting-for-the-commutator-pairing]]).

[L4] For each $n\ge1$ there are exactly two extraspecial groups of order $2^{1+2n}$ up to isomorphism, with $2^{2n}+2^{n}$ and $2^{2n}-2^{n}$ solutions of $x^2=1$ ([[thm-classification-of-extraspecial-two-groups]]).

[L5] If $P_1$ and $P_2$ are extraspecial $2$-groups with $t_i$ solutions of $x^2=1$, then $P_1\circ P_2$ has $(t_1t_2+(|P_1|-t_1)(|P_2|-t_2))/2$ such solutions ([[lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups]]).

[L6] Every maximal abelian subgroup of an extraspecial $p$-group of order $p^{1+2n}$ has order $p^{1+n}$ ([[prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n]]).

[L7] An extraspecial $p$-group has order $p^{1+2n}$ for some $n\ge1$ ([[cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number]]).

[L8] The commutator pairing is independent of the coset representatives, is $\mathbb F_p$-bilinear on $P/Z(P)$, and is alternating ([[lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating]]).

[L9] The commutator pairing of an extraspecial $p$-group has trivial radical ([[lem-the-commutator-pairing-is-nondegenerate]]).

[L10] For an extraspecial $p$-group $P$ with $Z(P)=\langle z\rangle$, the commutator pairing is the map $b_z(\bar x,\bar y)\in\mathbb Z/p$ determined by $[x,y]=z^{b_z(\bar x,\bar y)}$ ([[def-commutator-pairing-of-an-extraspecial-p-group]]).

[L11] An elementary abelian $p$-group is a finite abelian $p$-group in which every nonidentity element has order $p$; the trivial group is permitted (,, ). ([[def-elementary-abelian-p-group]]).

[L12] The set $S$ is **independent** when $\prod_{s\in S}s^{a_s}=e$ with finite support forces every $a_s=0$. A basis of an elementary abelian $p$-group is an independent spanning subset for its canonical $\mathbb F_p$-linear structure. ([[def-fp-basis-of-an-elementary-abelian-p-group]]).

[L13] Every finite elementary abelian $p$-group has a basis; every independent subset extends to a basis, every spanning subset contains a basis, and all bases have the same finite size. ([[lem-finite-elementary-abelian-p-groups-have-bases-and-basis-extension]]).

[L14] $$|G|=[G:H]\,|H|.$$ ([[thm-lagrange]]).

[L15] $$\langle S \rangle;:=; \bigcap \{\, H;:; H \le G \text{ and } S \subseteq H \,\}.$$ ([[def-generated-subgroup]]).

[L16] $$Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}.$$ ([[def-center-of-a-group]]).

[L17] An extraspecial $2$-group of order $2^{1+2n}$ is of plus type when it has $2^{2n}+2^n$ solutions of $x^2=1$ and of minus type when it has $2^{2n}-2^n$ such solutions; for odd $p$, plus and minus mean exponent $p$ and $p^2$ respectively ([[def-plus-and-minus-type-of-an-extraspecial-p-group]]).

[L18] A central product of extraspecial $p$-groups identified along their centres is extraspecial ([[thm-a-central-product-of-extraspecial-p-groups-is-extraspecial]]).

[L19] Every extraspecial $p$-group is an internal central product of nonabelian subgroups of order $p^3$ pairwise intersecting in its centre ([[thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed]]).


## Proof

**Proof technique:** direct.

1.1 A maximal elementary abelian subgroup $E$ contains $Z(P)$, so $\bar E\le P/Z(P)$ has order $2^{k}$ with $|E|=2^{k+1}$, and $q$ vanishes on $\bar E$. [L1, L2, L7, L11, L14, L16]

1.2 On a coset $\bar E\bar v$ with $\bar v\notin\bar E^{\perp}$ the map $\bar u\mapsto b(\bar u,\bar v)$ is a nonzero $\mathbb F_2$-linear functional on $\bar E$, so its kernel has index two and exactly $2^{k-1}$ of the coset's classes have $q=0$. [L1, L2, L8, L10, L12, L13]

2.1 Maximality of $E$ says no $\bar v\notin\bar E$ orthogonal to $\bar E$ has $q(\bar v)=0$: the polar identity would make $q$ vanish on $\bar E\langle\bar v\rangle$, whose preimage is a strictly larger elementary abelian subgroup. [L2, L10, L11, L15, step 1.1]

2.2 On the coset $\bar E$ itself $q$ vanishes identically, contributing $2^{k}$ classes. [L1, step 1.1]

3.1 On a coset $\bar E\bar v$ with $\bar v\in\bar E^{\perp}\setminus\bar E$ the correction term vanishes, so $q$ is constantly $q(\bar v)=1$ by step 2.1 and the coset contributes no class. [L1, L2, step 2.1]

4.1 With $|\bar E^{\perp}|=2^{2n-k}$ there are $2^{2n-2k}$ cosets inside the complement and $2^{2n-k}-2^{2n-2k}$ outside, so the classes with $q=0$ number $2^{k}+(2^{2n-k}-2^{2n-2k})2^{k-1}=2^{2n-1}+2^{k}-2^{2n-k-1}$, and the elements with $x^2=1$ number twice that. [L1, L2, L3, L7, L9, L14, step 2.2, step 3.1, step 1.2, algebra]

5.1 The classification counts those elements as $2^{2n}+2^{n}$ in the plus case and $2^{2n}-2^{n}$ in the minus case, so $2^{k}-2^{2n-k-1}=\pm2^{n-1}$. [L4, L5, step 4.1, algebra]

6.1 The left side is strictly increasing in $k$, so $k=n$ in the plus case and $k=n-1$ in the minus case are the only solutions; both are attained, giving $|E|=2^{n+1}$ and $|E|=2^{n}$ for EVERY maximal elementary abelian subgroup. [L11, L13, L17, L18, L19, step 2.1, step 5.1, algebra]

7.1 Independently, $E$ is abelian, so the maximal-abelian bound gives $|E|\le2^{n+1}$ and hence $k\le n$ without the monotonicity argument; this is the free half of the plus case. [L6, step 1.1] ∎
