---
id: thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed
kind: theorem
title: "Every extraspecial $p$-group is an internal central product of nonabelian subgroups of order $p^3$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-equivalent-characterisations-of-an-extraspecial-p-group, def-internal-central-product-of-a-family-of-subgroups, thm-recognition-of-an-internal-central-product, def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, lem-the-commutator-pairing-is-nondegenerate, lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed, def-centralizer-of-a-subgroup, thm-lagrange, def-center-of-a-group, def-generated-subgroup, lem-centralizers-and-normalizers-are-subgroups, def-elementary-abelian-p-group, thm-first-isomorphism-theorem-groups, def-quotient-group, thm-z-mod-p-is-a-field]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Theorem 3.9"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Theorem 2.40(iii)"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $P$ be an extraspecial $p$-group and $Z(P)=\langle z\rangle$.

**Splitting.** If $x,y\in P$ satisfy $[x,y]\ne e$ and $F=\langle x,y\rangle$,
then $P=F\,C_P(F)$ and $F\cap C_P(F)=Z(P)$, so $F$ and $C_P(F)$ form an internal
central product of $P$ ([[def-internal-central-product-of-a-family-of-subgroups]],
[[def-centralizer-of-a-subgroup]]). Here $F$ is extraspecial of order $p^3$ with
$Z(F)=Z(P)$; and $C_P(F)$ has order $\lvert P\rvert/p^{2}$ with
$Z(C_P(F))=Z(P)$, and is extraspecial when $\lvert P\rvert>p^3$.

**Decomposition.** There are $n\ge1$ subgroups $P_1,\dots,P_n$ of $P$, each
nonabelian of order $p^3$ with $Z(P_i)=Z(P)$, which form an internal central
product of $P$; call such a family **admissible**. Moreover
$\lvert P\rvert=p^{1+2n}$.

**Peeling.** For an admissible family, $P_i\cap P_j=Z(P)$ whenever $i\ne j$; and
when $n\ge2$, for each index $i$ the subgroup $C_i=\langle P_j:j\ne i\rangle$
satisfies $[P_i,C_i]=1$, $P=P_iC_i$, $P_i\cap C_i=Z(P)$ and $Z(C_i)=Z(P)$, is
extraspecial of order $p^{1+2(n-1)}$, and has $(P_j)_{j\ne i}$ as an admissible
family for itself.

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$ with $Z(P)=\langle z\rangle$ of order $p$, the quotient $V=P/Z(P)$ and its commutator pairing $b_z$.

[F1] Subgroups $G_1,\dots,G_r$ of $G$ form an internal central product when they generate $G$ and $[G_i,G_j]=1$ for $i\ne j$ ([[def-internal-central-product-of-a-family-of-subgroups]]).

[F2] The commutator pairing of $P$ relative to $z$ is the map $b_z:V\times V\to\mathbb F_p$ determined by $[x,y]=z^{\,b_z(\bar x,\bar y)}$ ([[def-commutator-pairing-of-an-extraspecial-p-group]]).

[F3] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F4] $C_G(H):=\{g\in G:gh=hg\text{ for every }h\in H\}$, and $C_G(H)\cap H=Z(H)$ ([[def-centralizer-of-a-subgroup]]).

[L1] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

[L2] The commutator pairing is well defined, $\mathbb F_p$-bilinear and alternating, with $b_z(\bar y,\bar x)=-b_z(\bar x,\bar y)$ ([[lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating]]).

[L3] The radical of the commutator pairing is trivial ([[lem-the-commutator-pairing-is-nondegenerate]]).

[L4] If $[x,y]\ne e$ in an extraspecial $p$-group $P$, then $\langle x,y\rangle$ contains $Z(P)$, has order $p^3$, is nonabelian, and is extraspecial with centre $Z(P)$ ([[lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed]]).

[L5] Subgroups $G_1,\dots,G_r$ form an internal central product of $G$ if and only if the multiplication map $G_1\times\dots\times G_r\to G$ is a surjective homomorphism; for two factors this identifies the internal product with the external central product along the identity on their intersection ([[thm-recognition-of-an-internal-central-product]]).

[L6] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

[L7] For every group $G$ and $x\in G$, the centralizer $C_G(x)$ is a subgroup of $G$ ([[lem-centralizers-and-normalizers-are-subgroups]]).

[L8] An elementary abelian $p$-group is a finite abelian $p$-group in which every nonidentity element has order $p$ ([[def-elementary-abelian-p-group]]).

[L9] For every homomorphism $f:G\to H$, the rule $g\ker f\mapsto f(g)$ is an isomorphism from $G/\ker f$ onto $\operatorname{im}f$ ([[thm-first-isomorphism-theorem-groups]]).

[L10] $\langle S\rangle$ is the smallest subgroup of $G$ containing $S$ ([[def-generated-subgroup]]).

[L11] For every prime $p$, $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

## Proof

**Proof technique:** induction.

1.1 If $\lvert P\rvert=p^{3}$ the one-member family $P_1=P$ is admissible, and $p^{3}=p^{1+2\cdot1}$; moreover any $F=\langle x,y\rangle$ with $[x,y]\ne e$ then has order $p^3$ and equals $P$, so $C_P(F)=Z(P)$ has order $p=\lvert P\rvert/p^{2}$ and the splitting clause holds. [F1, F3, F4, L4, L6, base]

1.2 Assume all three clauses of the theorem hold for every extraspecial $p$-group of order smaller than $\lvert P\rvert$. [ih]

1.3 Suppose $A,B\le P$ satisfy $[A,B]=1$, $P=AB$, $A\cap B=Z(P)$ and $\lvert A\rvert=p^{3}$. An element of $Z(B)$ commutes with $B$ and, lying in $B$, with $A$, hence with $AB=P$, so $Z(B)\le Z(P)$; and $Z(P)=A\cap B$ lies in $B$ and is central in $P$, so $Z(B)=Z(P)$. The multiplication map $\mu:A\times B\to P$ is a surjective homomorphism.  If $\mu(a,b)=e$, then $a=b^{-1}\in A\cap B$, while every $(z,z^{-1})$ with $z\in A\cap B$ lies in the kernel.  Thus $\ker\mu$ is the antidiagonal of $A\cap B$ and has order $p$, so $\lvert P\rvert=p^{3}\lvert B\rvert/p$ and $\lvert B\rvert=\lvert P\rvert/p^{2}$. If $B$ were abelian it would equal $Z(B)=Z(P)$ and $\lvert P\rvert$ would be $p^{3}$; so for $\lvert P\rvert>p^{3}$ the group $B$ is nonabelian, and $B/Z(B)=B/Z(P)$ is a subgroup of the elementary abelian group $V$, hence elementary abelian, so $B$ is extraspecial. [F1, F3, F4, L1, L5, L6, L8, L9]

1.4 If $[x,y]\ne e$ then $F=\langle x,y\rangle$ is extraspecial of order $p^{3}$ with $Z(F)=Z(P)$, and $\beta=b_z(\bar x,\bar y)$ is a nonzero element of the field $\mathbb F_p$, hence invertible. [F2, L4, L10, L11]

1.5 Let $(P_1,\dots,P_n)$ be an admissible family and fix an index $i$, writing $C_i=\langle P_j:j\ne i\rangle$. Each generator of $C_i$ commutes with every element of $P_i$, and the centraliser of an element is a subgroup, so $[P_i,C_i]=1$ and $C_i\le C_P(P_i)$; then $P_iC_i$ is a subgroup containing every member of the family, so $P=P_iC_i$; and $P_i\cap C_i\le P_i\cap C_P(P_i)=Z(P_i)=Z(P)$, while $Z(P)=Z(P_j)\le P_j\le C_i$ gives the reverse inclusion. Taking $C_i$ to be a single $P_j$ shows $P_i\cap P_j=Z(P)$. [F1, F3, F4, L7, L10]

2.1 For $g\in P$ put $s=\beta^{-1}b_z(\bar g,\bar y)$ and $r=-\beta^{-1}b_z(\bar g,\bar x)$ and $u=x^{s}y^{r}$. Bilinearity and alternation give $b_z(\bar u,\bar x)=r\,b_z(\bar y,\bar x)=-r\beta=b_z(\bar g,\bar x)$ and $b_z(\bar u,\bar y)=s\,b_z(\bar x,\bar y)=s\beta=b_z(\bar g,\bar y)$, so $b_z(\overline{gu^{-1}},\bar x)=0$ and $b_z(\overline{gu^{-1}},\bar y)=0$. [F2, L2, L11, step 1.4]

2.2 Applying step 1.3 with $A=P_i$ and $B=C_i$ gives $Z(C_i)=Z(P)$ and $\lvert C_i\rvert=\lvert P\rvert/p^{2}$; when $n\ge2$ the subgroup $C_i$ contains the nonabelian $P_j$, so $\lvert P\rvert>p^3$ and $C_i$ is extraspecial. The members $P_j$ with $j\ne i$ generate it, commute pairwise and have centre $Z(C_i)$, so they form an admissible family for it; since $C_i$ has smaller order, the induction hypothesis applied to that $(n-1)$-member family gives $\lvert C_i\rvert=p^{1+2(n-1)}$. [F1, F3, ih, step 1.2, step 1.3, step 1.5]

3.1 Hence $gu^{-1}$ commutes with $x$ and with $y$; the centraliser of $gu^{-1}$ is a subgroup containing both, hence contains $F$, so $gu^{-1}\in C_P(F)$ and $g=(gu^{-1})u\in C_P(F)F$. Therefore $P=F\,C_P(F)$, and $F\cap C_P(F)=Z(F)=Z(P)$, so $F$ and $C_P(F)$ form an internal central product of $P$; step 1.3 with $A=F$ and $B=C_P(F)$ supplies the order of $C_P(F)$, its centre, and that it is extraspecial when $\lvert P\rvert>p^{3}$. [F1, F4, L7, L10, step 1.3, step 1.4, step 2.1]

4.1 If $\lvert P\rvert>p^{3}$, choose $x\notin Z(P)$, which exists because $P$ is nonabelian, and then $y$ with $b_z(\bar x,\bar y)\ne0$, which exists because the radical is trivial; put $F=\langle x,y\rangle$ and $C=C_P(F)$. By step 3.1 the group $C$ is extraspecial of order $\lvert P\rvert/p^{2}$, so the induction hypothesis gives an admissible family $P_2,\dots,P_n$ for $C$ with $\lvert C\rvert=p^{1+2(n-1)}$. Then $F,P_2,\dots,P_n$ generate $P$, commute pairwise, are nonabelian of order $p^3$ and have centre $Z(C)=Z(P)$, so they form an admissible family for $P$, and $\lvert P\rvert=p^{2}\lvert C\rvert=p^{1+2n}$; with step 1.1 this completes the induction. [F1, F2, F3, L1, L3, L10, ih, step 1.1, step 1.2, step 3.1, discharge-induction] ∎

## Remarks

The factors are not canonical: the subgroup $F$ depends on the choice of $x$ and of a partner $y$, and the companion page records two decompositions of one group with different factors. What the order formula does fix is the number of factors.

The splitting and peeling clauses are stated for an arbitrary noncommuting pair and an arbitrary admissible family because the classification arguments need to remove a factor of a prescribed isomorphism type, not the one this proof happens to construct.
