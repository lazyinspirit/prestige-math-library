---
id: prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n
kind: proposition
title: "In an extraspecial $p$-group of order $p^{1+2n}$ every maximal abelian subgroup has order $p^{1+n}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-equivalent-characterisations-of-an-extraspecial-p-group, def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number, lem-orthogonal-complement-counting-for-the-commutator-pairing, def-center-of-a-group, thm-lagrange, def-quotient-group, thm-correspondence-theorem-groups, def-generated-subgroup]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Proposition 2.41(iii) and Theorem 2.40(v)"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. A. Craven, The Theory of p-Groups, Lemma 3.12"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Statement

Let $P$ be an extraspecial $p$-group of order $p^{1+2n}$. Call an abelian
subgroup of $P$ **maximal abelian** when it is not properly contained in any
abelian subgroup of $P$. Then maximal abelian subgroups exist, every one of them
contains $Z(P)$, and every one of them has order $p^{1+n}$. Under the
correspondence $A\mapsto A/Z(P)$ they are exactly the subgroups $A$ with
$Z(P)\le A\le P$ whose image $U=A/Z(P)$ in $V=P/Z(P)$ satisfies $U=U^{\perp}$.

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$ of order $p^{1+2n}$, the quotient $V=P/Z(P)$ with its commutator pairing $b_z$, and for $U\le V$ the subgroup $U^{\perp}=\{v\in V:b_z(v,u)=0\text{ for all }u\in U\}$.

[F1] The commutator pairing of $P$ relative to $z$ is the map $b_z:V\times V\to\mathbb F_p$ determined by $[x,y]=z^{\,b_z(\bar x,\bar y)}$ ([[def-commutator-pairing-of-an-extraspecial-p-group]]).

[F2] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F3] $\langle S\rangle$ is the smallest subgroup of $G$ containing $S$ ([[def-generated-subgroup]]).

[L1] The commutator pairing is well defined, $\mathbb F_p$-bilinear and alternating, with $b_z(\bar y,\bar x)=-b_z(\bar x,\bar y)$ ([[lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating]]).

[L2] An extraspecial $p$-group has $\lvert P\rvert=p^{1+2n}$ with $n\ge1$ and $\lvert P/Z(P)\rvert=p^{2n}$ ([[cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number]]).

[L3] For a subgroup $U$ of $V$, $\lvert U\rvert\,\lvert U^{\perp}\rvert=\lvert V\rvert=p^{2n}$ ([[lem-orthogonal-complement-counting-for-the-commutator-pairing]]).

[L4] For $N\trianglelefteq G$ the maps $H\mapsto H/N$ and $K\mapsto\pi^{-1}(K)$ are inverse inclusion-preserving bijections between subgroups $H$ with $N\le H\le G$ and subgroups $K\le G/N$ ([[thm-correspondence-theorem-groups]]).

[L5] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

[L6] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

## Proof

**Proof technique:** direct.

1.1 If $B\le P$ is abelian then $BZ(P)$ is a subgroup, because $Z(P)$ is normal, and it is abelian, because $(bu)(b'u')=bb'uu'=(b'u')(bu)$ for $u,u'\in Z(P)$; it contains $B$. So a maximal abelian subgroup equals $BZ(P)$ and contains $Z(P)$. [F2, algebra]

1.2 For $Z(P)\le A\le P$ with image $U=A/Z(P)$: two elements $a,a'$ of $A$ commute exactly when $[a,a']=e$, that is exactly when $b_z(\bar a,\bar a')=0$; so $A$ is abelian exactly when $U\le U^{\perp}$. [F1, L1]

1.3 The correspondence $A\mapsto A/Z(P)$ is an inclusion-preserving bijection between the subgroups of $P$ containing $Z(P)$ and the subgroups of $V$, and $\lvert A\rvert=p\,\lvert A/Z(P)\rvert$ by Lagrange. [F2, L4, L5, L6]

1.4 If $U\le U^{\perp}$ then $\lvert U\rvert^{2}\le\lvert U\rvert\,\lvert U^{\perp}\rvert=p^{2n}$, so $\lvert U\rvert\le p^{n}$. [L2, L3]

1.5 The trivial subgroup satisfies $U\le U^{\perp}$, and $V$ is finite, so among the subgroups with $U\le U^{\perp}$ there is one of largest order, and it is maximal with that property. [L2]

2.1 Combining the previous three observations, $A\mapsto A/Z(P)$ carries the maximal abelian subgroups of $P$ bijectively onto the subgroups $U$ of $V$ that are maximal subject to $U\le U^{\perp}$. [step 1.1, step 1.2, step 1.3]

2.2 Let $U$ be maximal subject to $U\le U^{\perp}$ and suppose $U\ne U^{\perp}$. Pick $v\in U^{\perp}$ with $v\notin U$ and set $U'=\langle U,v\rangle$, whose elements are the products $uv^{a}$. For such elements, $b_z(uv^{a},u'v^{a'})=b_z(u,u')+a'b_z(u,v)+a\,b_z(v,u')+aa'\,b_z(v,v)=0$, using $U\le U^{\perp}$, the choice of $v$, skew symmetry and alternation. So $U'\le U'^{\perp}$ and $U'$ properly contains $U$, contradicting maximality. Hence $U=U^{\perp}$ and $\lvert U\rvert^{2}=p^{2n}$, so $\lvert U\rvert=p^{n}$. [F1, F3, L1, L3, step 1.4]

3.1 Therefore maximal abelian subgroups exist, each contains $Z(P)$, each corresponds to a subgroup $U$ with $U=U^{\perp}$ of order $p^{n}$, and each has order $p\cdot p^{n}=p^{1+n}$. [step 1.5, step 2.1, step 2.2] ∎

## Remarks

Maximality is under inclusion, not merely maximality of order, and the two agree here only because step 2.2 shows every maximal self-orthogonal subgroup has the same order. That is what makes the conclusion a statement about every maximal abelian subgroup rather than about a largest one.
