---
id: thm-classification-of-extraspecial-two-groups
kind: theorem
title: "For each $n\\ge1$ there are exactly two extraspecial groups of order $2^{1+2n}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, thm-classification-of-the-nonabelian-groups-of-order-p-cubed, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups, lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups, thm-recognition-of-an-internal-central-product, def-internal-central-product-of-a-family-of-subgroups, def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, def-special-and-extraspecial-p-groups, def-center-of-a-group, def-generated-subgroup, thm-lagrange, def-order-in-a-group]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Theorem 3.14(ii)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Theorem 2.42"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. Kaur and A. Kulshrestha, Characters of real special 2-groups, Remark 2.4"
      url: "https://arxiv.org/pdf/1510.06583"
pipeline_run: null
---

## Statement

For each $n\ge1$ there are exactly two extraspecial groups of order $2^{1+2n}$
up to isomorphism. Writing $t(G)$ for the number of solutions of $x^2=1$ in $G$,
one of them has $t=2^{2n}+2^{n}$ and the other has $t=2^{2n}-2^{n}$, and an
extraspecial group of that order is determined up to isomorphism by which of the
two values it takes.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and an extraspecial group $P$ of order $2^{1+2n}$ with $Z(P)=\langle z\rangle$.

[F1] Subgroups $G_1,\dots,G_r$ of $G$ form an internal central product when they generate $G$ and $[G_i,G_j]=1$ for $i\ne j$ ([[def-internal-central-product-of-a-family-of-subgroups]]).

[F2] For groups $G,H$ with central subgroups $Z_1\le Z(G)$, $Z_2\le Z(H)$ and an isomorphism $\alpha:Z_1\to Z_2$, the central product $G\circ_\alpha H$ is the quotient of $G\times H$ by $N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$ ([[def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups]]).

[F3] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F4] $\langle S\rangle$ is the smallest subgroup of $G$ containing $S$ ([[def-generated-subgroup]]).

[L1] There are $n\ge1$ subgroups $P_1,\dots,P_n$ of $P$, each nonabelian of order $p^3$ with $Z(P_i)=Z(P)$, which form an internal central product of $P$; such a family is admissible, $\lvert P\rvert=p^{1+2n}$, and peeling one member leaves an extraspecial group of order $p^{1+2(n-1)}$ with the induced admissible family ([[thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed]]).

[L2] For every prime $p$ there are exactly two nonabelian groups of order $p^3$ up to isomorphism; at $p=2$ they are $\operatorname{Dih}(C_4)$ and $Q_8$ ([[thm-classification-of-the-nonabelian-groups-of-order-p-cubed]]).

[L3] $\operatorname{Dih}(C_4)$ and $Q_8$ are extraspecial of order eight, with exactly six and exactly two solutions of $x^2=1$ ([[prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial]]).

[L4] $Q_8\circ Q_8$ is an internal central product of two subgroups isomorphic to $\operatorname{Dih}(C_4)$ meeting in its centre ([[lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups]]).

[L5] For extraspecial $2$-groups, $t(P_1\circ_\alpha P_2)=\bigl(t(P_1)t(P_2)+(\lvert P_1\rvert-t(P_1))(\lvert P_2\rvert-t(P_2))\bigr)/2$ ([[lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups]]).

[L6] Subgroups form an internal central product of $G$ if and only if the multiplication map from their direct product is a surjective homomorphism; for two factors $G\cong G_1\circ_{\operatorname{id}}G_2$ along the identity of $G_1\cap G_2$ ([[thm-recognition-of-an-internal-central-product]]).

[L7] A central product of two extraspecial $p$-groups identified along their centres is extraspecial of order $\lvert E_1\rvert\lvert E_2\rvert/p$ ([[thm-a-central-product-of-extraspecial-p-groups-is-extraspecial]]).

[L8] A finite $p$-group $P$ is extraspecial when it is nonabelian and $Z(P)=P'=\Phi(P)$ is elementary abelian of order $p$ ([[def-special-and-extraspecial-p-groups]]).

[L9] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

## Proof

**Proof technique:** induction.

1.1 At $n=1$ an extraspecial group of order eight is nonabelian, hence isomorphic to $\operatorname{Dih}(C_4)$ or to $Q_8$; these have $t=6=2^{2}+2^{1}$ and $t=2=2^{2}-2^{1}$, so there are exactly two and the value of $t$ tells them apart. [L2, L3, L8, base]

1.2 Assume, for every $m$ with $1\le m<n$: both values $2^{2m}+2^m$ and $2^{2m}-2^m$ are realised; every extraspecial group of order $2^{1+2m}$ has an admissible family with at most one quaternion member; if that number is $k$ then $t=2^{2m}+(-1)^{k}2^{m}$; and two such groups with equal $t$ are isomorphic. [ih]

1.3 If $\phi:G\to G'$ and $\psi:H\to H'$ are isomorphisms carrying the identified central subgroups to the identified central subgroups compatibly with the identifying isomorphisms, then $\phi\times\psi$ carries $N$ onto $N'$ and induces an isomorphism $G\circ_\alpha H\to G'\circ_{\alpha'}H'$; when all four identified subgroups have order two the compatibility is automatic, since a group of order two has only one automorphism. [F2, algebra]

1.4 Let $P$ be extraspecial of order $2^{1+2n}$ with $n\ge2$ and take an admissible family $P_1,\dots,P_n$; each member is nonabelian of order eight, hence isomorphic to $\operatorname{Dih}(C_4)$ or to $Q_8$. [F1, L1, L2]

2.1 If two members $P_i,P_j$ are isomorphic to $Q_8$, then $R=\langle P_i,P_j\rangle$ is an internal central product of them, so $R\cong Q_8\circ Q_8$ and $R$ is an internal central product of two subgroups isomorphic to $\operatorname{Dih}(C_4)$ with the same centre $Z(P)$; replacing $P_i,P_j$ by those two subgroups leaves an admissible family with two fewer quaternion members. Repeating, $P$ has an admissible family with $k\in\{0,1\}$ quaternion members. [F1, F3, F4, L4, L6, step 1.3, step 1.4]

3.1 Fix such a family. Since $n\ge2$ and $k\le1$, some member $P_1$ is isomorphic to $\operatorname{Dih}(C_4)$; peeling it leaves $C=\langle P_2,\dots,P_n\rangle$, extraspecial of order $2^{1+2(n-1)}$ with an admissible family of $n-1$ members of which $k$ are quaternion, and $P\cong P_1\circ_{\operatorname{id}}C$ along the identity of $Z(P)$. [F1, L1, L6, L9, step 2.1]

4.1 By the induction hypothesis $t(C)=2^{2(n-1)}+(-1)^{k}2^{n-1}$, and $t(P_1)=6=2^{2}+2$; the counting formula then gives $t(P)=2^{2n}+(-1)^{k}2^{n}$. [L5, L9, step 1.2, step 3.1]

5.1 If $P$ and $P'$ are extraspecial of order $2^{1+2n}$ with $t(P)=t(P')$, their normalised families have the same $k$ by step 4.1, so peeling a dihedral member from each gives $C$ and $C'$ extraspecial of order $2^{1+2(n-1)}$ with equal $t$, hence isomorphic by the induction hypothesis, by an isomorphism carrying $Z(C)=Z(P)$ onto $Z(C')=Z(P')$; the peeled members are isomorphic too, so $P\cong P'$. [F3, step 1.2, step 1.3, step 3.1, step 4.1]

6.1 Both values are realised: if $C$ is extraspecial of order $2^{1+2(n-1)}$ then $\operatorname{Dih}(C_4)\circ C$ is extraspecial of order $2^{1+2n}$ with $t=2^{2n}+(-1)^{k}2^{n}$ where $t(C)=2^{2(n-1)}+(-1)^{k}2^{n-1}$, so the two groups supplied by the induction hypothesis produce one group of each value. With step 5.1 this gives exactly two isomorphism classes at order $2^{1+2n}$ and completes the induction. [L5, L7, step 1.1, step 1.2, step 4.1, step 5.1, discharge-induction] ∎

## Remarks

The quaternion factors are not an invariant of the group, only their parity is: two of them can always be traded for two dihedral factors, and it is exactly that trade which leaves the count $t$ unchanged, since the two signs multiply.

The count $t$ is an isomorphism invariant because an isomorphism carries solutions of $x^2=1$ to solutions of $x^2=1$; that is what makes the two classes provably distinct rather than merely differently presented.
