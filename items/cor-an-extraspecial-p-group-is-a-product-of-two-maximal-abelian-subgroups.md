---
id: cor-an-extraspecial-p-group-is-a-product-of-two-maximal-abelian-subgroups
kind: corollary
title: "An extraspecial $p$-group is the product of two maximal abelian subgroups meeting in its centre"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, lem-orthogonal-complement-counting-for-the-commutator-pairing, prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, def-internal-central-product-of-a-family-of-subgroups, thm-correspondence-theorem-groups, thm-second-isomorphism-theorem-groups, thm-lagrange, def-generated-subgroup, def-center-of-a-group, def-subgroup-commutator-and-lower-central-series, cor-prime-order-group-is-cyclic, lem-centralizers-and-normalizers-are-subgroups, prop-equivalent-characterisations-of-an-extraspecial-p-group, def-quotient-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Proposition 2.41(iv) and Theorem 2.40(iv)"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $P$ be an extraspecial $p$-group of order $p^{1+2n}$. Then there are maximal
abelian subgroups $A$ and $B$ of $P$, each of order $p^{1+n}$, with

$$P=AB,\qquad A\cap B=Z(P),\qquad [A,B]=Z(P).$$

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$ of order $p^{1+2n}$ with $Z(P)=\langle z\rangle$, the quotient $V=P/Z(P)$ and its commutator pairing $b_z$.

[F1] The commutator pairing of $P$ relative to $z$ is the map $b_z:V\times V\to\mathbb F_p$ determined by $[x,y]=z^{\,b_z(\bar x,\bar y)}$ ([[def-commutator-pairing-of-an-extraspecial-p-group]]).

[F2] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F3] $\langle S\rangle$ is the smallest subgroup of $G$ containing $S$ ([[def-generated-subgroup]]).

[F4] For subgroups $A,B\le G$, $[A,B]=\langle[a,b]:a\in A,\ b\in B\rangle$ ([[def-subgroup-commutator-and-lower-central-series]]).

[L1] Every extraspecial $p$-group is an internal central product of $n\ge1$ nonabelian subgroups $P_1,\dots,P_n$ of order $p^3$ with $Z(P_i)=Z(P)$ and $P_i\cap P_j=Z(P)$ for $i\ne j$ ([[thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed]], [[def-internal-central-product-of-a-family-of-subgroups]]).

[L2] The commutator pairing is well defined, $\mathbb F_p$-bilinear and alternating ([[lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating]]).

[L3] For a subgroup $U$ of $V$, $\lvert U\rvert\,\lvert U^{\perp}\rvert=\lvert V\rvert=p^{2n}$ ([[lem-orthogonal-complement-counting-for-the-commutator-pairing]]).

[L4] Maximal abelian subgroups of $P$ contain $Z(P)$, have order $p^{1+n}$, and under the correspondence $A\mapsto A/Z(P)$ are exactly the subgroups containing $Z(P)$ whose image $U$ satisfies $U=U^{\perp}$ ([[prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n]]).

[L5] In a finite group whose order is prime, every $g\ne e$ has order $|G|$ and generates $G$ ([[cor-prime-order-group-is-cyclic]]).

[L6] For $N\trianglelefteq G$ the maps $H\mapsto H/N$ and $K\mapsto\pi^{-1}(K)$ are inverse inclusion-preserving bijections between subgroups $H$ with $N\le H\le G$ and subgroups $K\le G/N$ ([[thm-correspondence-theorem-groups]]).

[L7] If $H\le G$ and $N\trianglelefteq G$, then $H/(H\cap N)\cong HN/N$ ([[thm-second-isomorphism-theorem-groups]]).

[L8] For every group $G$ and $x\in G$, the centralizer $C_G(x)$ is a subgroup of $G$ ([[lem-centralizers-and-normalizers-are-subgroups]]).

[L9] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

[L10] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

## Proof

**Proof technique:** direct.

1.1 Fix an internal central product decomposition $P=\langle P_1,\dots,P_n\rangle$ with each $P_i$ nonabelian of order $p^3$, $Z(P_i)=Z(P)$, $[P_i,P_j]=1$ for $i\ne j$, and $P_i\cap P_j=Z(P)$. [F3, L1]

2.1 Each $P_i$ is nonabelian, so it contains elements with nontrivial commutator; choose $x_i,w_i\in P_i$ with $[x_i,w_i]\ne e$. That commutator lies in $Z(P)$ and is not the identity, so it generates $Z(P)$ and equals $z^{c_i}$ with $c_i\ne0$; putting $y_i=w_i^{\,t_i}$ with $t_ic_i=1$ in $\mathbb F_p$ gives $[x_i,y_i]=z$. [F1, F2, L2, L5, L10, step 1.1]

3.1 The pairing values are $b_z(\bar x_i,\bar y_i)=1$, while $b_z(\bar x_i,\bar y_j)=0$, $b_z(\bar x_i,\bar x_j)=0$ and $b_z(\bar y_i,\bar y_j)=0$ whenever the two elements lie in different factors or are equal, because distinct factors commute elementwise and the pairing is alternating. [F1, L2, step 1.1, step 2.1]

4.1 Put $A=\langle Z(P),x_1,\dots,x_n\rangle$ and $B=\langle Z(P),y_1,\dots,y_n\rangle$. Their generators commute pairwise, so the centraliser of each generator is a subgroup containing all of them and hence contains $A$ (respectively $B$); therefore each generator is central in $A$ (respectively $B$), and $A$ and $B$ are abelian. [F2, F3, L8, step 2.1, step 3.1]

5.1 The images $\bar A=\langle\bar x_1,\dots,\bar x_n\rangle$ and $\bar B=\langle\bar y_1,\dots,\bar y_n\rangle$ consist of the products $\prod_i\bar x_i^{\,a_i}$ and $\prod_i\bar y_i^{\,c_i}$. If $\prod_i\bar x_i^{\,a_i}$ is the identity, pairing with $\bar y_k$ gives $a_k=0$, so the $\bar x_i$ are independent and $\lvert\bar A\rvert=p^{n}$; the same argument with the roles exchanged gives $\lvert\bar B\rvert=p^{n}$. If $\prod_i\bar x_i^{\,a_i}=\prod_j\bar y_j^{\,c_j}$, pairing with $\bar y_k$ gives $a_k=0$ and pairing with $\bar x_k$ gives $c_k=0$, so $\bar A\cap\bar B$ is trivial. [F3, L2, step 3.1, step 4.1]

6.1 Since $A$ is abelian its image satisfies $\bar A\le\bar A^{\perp}$, and the counting formula gives $\lvert\bar A^{\perp}\rvert=p^{2n}/p^{n}=p^{n}=\lvert\bar A\rvert$, so $\bar A=\bar A^{\perp}$ and $A$ is maximal abelian of order $p^{1+n}$; likewise for $B$. [L3, L4, L9, step 4.1, step 5.1]

7.1 In the abelian group $V$ the product $\bar A\bar B$ is a subgroup and the second isomorphism theorem gives $\lvert\bar A\bar B\rvert=\lvert\bar A\rvert\lvert\bar B\rvert/\lvert\bar A\cap\bar B\rvert=p^{2n}=\lvert V\rvert$, so $\bar A\bar B=V$; lifting along the correspondence, every $g\in P$ has $\bar g=\bar a\bar b$, hence $g\in abZ(P)\subseteq AB$ because $Z(P)\le A$, and $P=AB$. The correspondence also gives $(A\cap B)/Z(P)=\bar A\cap\bar B$ trivial, so $A\cap B=Z(P)$. [L6, L7, L9, step 5.1, step 6.1]

8.1 Finally $[A,B]$ is generated by commutators of elements of $P$, so it lies in $[P,P]=Z(P)$; and it contains $[x_1,y_1]=z$, which generates $Z(P)$. Hence $[A,B]=Z(P)$. [F4, L5, L10, step 2.1, step 7.1] ∎

## Remarks

The two subgroups are built from a chosen decomposition and are not canonical;
another decomposition may yield the same pair or a different one. What the
statement fixes is that a factorisation of this shape exists, with both factors
as large as an abelian subgroup can be.
