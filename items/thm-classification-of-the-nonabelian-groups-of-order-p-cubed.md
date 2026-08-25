---
id: thm-classification-of-the-nonabelian-groups-of-order-p-cubed
kind: theorem
title: "For each prime there are exactly two nonabelian groups of order $p^3$ up to isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p, def-heisenberg-group-of-order-p-cubed, prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p, prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed, def-modular-group-of-order-p-cubed, prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, thm-every-nonabelian-group-of-order-p-cubed-is-extraspecial, prop-equivalent-characterisations-of-an-extraspecial-p-group, lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed, lem-commutator-identities-in-a-group-of-class-two, thm-frattini-subgroup-formula-for-a-finite-p-group, def-pth-power-subgroup-of-a-group, def-exponent-of-a-finite-group, thm-internal-external-semidirect-product-equivalence, thm-classification-of-cyclic-groups, thm-lagrange, lem-group-power-laws, def-quaternion-group-of-order-eight, def-quaternions, prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two, cor-dihedral-groups-as-semidirect-products, def-generated-subgroup, def-order-in-a-group, def-center-of-a-group, def-commutator-and-commutator-subgroup, def-quotient-group]
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Lemma 3.4"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Exercise 2.33"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

For every prime $p$ there are exactly two nonabelian groups of order $p^3$ up to
isomorphism. For odd $p$ they are the Heisenberg group $H_p$, of exponent $p$,
and the modular group $M_p$, of exponent $p^2$. For $p=2$ they are
$\operatorname{Dih}(C_4)$ and $Q_8$.

## Facts & Assumptions

**Given:** A prime $p$ and a nonabelian group $P$ with $\lvert P\rvert=p^3$.

[F1] The Heisenberg group of order $p^3$ is the set $H_p$ of triples over $\mathbb Z/p$ with $(a,b,c)(a',b',c'):=(a+a',\,b+b',\,c+c'+ab')$ ([[def-heisenberg-group-of-order-p-cubed]]).

[F2] The modular group of order $p^3$ is $M_p=A\rtimes_\alpha B$ with $A=\langle a\rangle$ of order $p^2$, $B=\langle s\rangle$ of order $p$ and $sas^{-1}=a^{1+p}$ ([[def-modular-group-of-order-p-cubed]]).

[F3] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F4] For $g,h\in G$ the commutator is $[g,h]:=ghg^{-1}h^{-1}$ ([[def-commutator-and-commutator-subgroup]]).

[F5] For a finite group $G$, $\exp(G)=\min\{n\in\mathbb N:n>0\text{ and }g^n=e\text{ for every }g\in G\}$ ([[def-exponent-of-a-finite-group]]).

[F6] $\langle S\rangle$ is the smallest subgroup of $G$ containing $S$ ([[def-generated-subgroup]]).

[F7] $\operatorname{ord}(g)$ is the least $k\ge1$ with $g^k=e$ ([[def-order-in-a-group]]).

[F8] For a group $G$ and a prime $p$, $G^p=\langle g^p:g\in G\rangle$ ([[def-pth-power-subgroup-of-a-group]]).

[L1] A nonabelian group of order $p^3$ is extraspecial, with $Z(P)=[P,P]=\Phi(P)$ of order $p$ and $P/Z(P)$ elementary abelian of order $p^2$ ([[thm-every-nonabelian-group-of-order-p-cubed-is-extraspecial]]).

[L2] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

[L3] For every finite $p$-group $P$, $\Phi(P)=P'P^p$ ([[thm-frattini-subgroup-formula-for-a-finite-p-group]]).

[L4] If $[x,y]\ne e$ in an extraspecial $p$-group $P$, then $\langle x,y\rangle$ contains $Z(P)$, has order $p^3$, is nonabelian, and is extraspecial with centre $Z(P)$ ([[lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed]]).

[L5] If $[G,G]\le Z(G)$ then $[xy,w]=[x,w][y,w]$, $[x,yw]=[x,y][x,w]$, and $[x^n,y]=[x,y]^n=[x,y^n]$ for every integer $n$ ([[lem-commutator-identities-in-a-group-of-class-two]]).

[L6] For an odd prime $p$ and a finite group $G$ with $[G,G]\le Z(G)$ of exponent dividing $p$, $(xy)^p=x^py^p$ for all $x,y$ ([[cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p]]).

[L7] $Z(H_p)=[H_p,H_p]$ is the third coordinate axis, of order $p$; $H_p$ is extraspecial; and for odd $p$ its exponent is $p$ ([[prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p]]).

[L8] The Heisenberg multiplication is a group law with identity $(0,0,0)$ and inverse $(a,b,c)^{-1}=(-a,-b,-c+ab)$, the group is nonabelian of order $p^3$, and $(1,0,0)^a=(a,0,0)$, $(0,1,0)^b=(0,b,0)$, $(0,0,1)^c=(0,0,c)$ ([[prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed]]).

[L9] $M_p$ is nonabelian of order $p^3$, extraspecial of exponent $p^2$, with $Z(M_p)=[M_p,M_p]=\langle a^p\rangle$; at $p=2$ it is $\operatorname{Dih}(C_4)$ ([[prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p]]).

[L10] $\operatorname{Dih}(C_4)$ and $Q_8$ are extraspecial of order $8$, with exactly six and exactly two solutions of $x^2=1$ respectively ([[prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial]]).

[L11] The conditions $N\trianglelefteq G$, $G=NH$, $N\cap H=\{1\}$ hold if and only if conjugation restricts to an action $\alpha:H\to\operatorname{Aut}(N)$ and $(n,h)\mapsto nh$ is an isomorphism $N\rtimes_\alpha H\to G$ carrying the canonical factors onto $N$ and $H$ ([[thm-internal-external-semidirect-product-equivalence]]).

[L12] For $n\ge1$, $\operatorname{Dih}(C_n)=C_n\rtimes C_2$ with $r^n=s^2=1$ and $srs^{-1}=r^{-1}$, of order $2n$ ([[cor-dihedral-groups-as-semidirect-products]]).

[L13] $Q_8=\{1,-1,\mathbf i,-\mathbf i,\mathbf j,-\mathbf j,\mathbf k,-\mathbf k\}$ with $\mathbf i^2=\mathbf j^2=\mathbf k^2=-1$, $\mathbf i\mathbf j=\mathbf k$ and $\mathbf j\mathbf i=-\mathbf k$ ([[def-quaternion-group-of-order-eight]], [[def-quaternions]]).

[L14] $\lvert Q_8\rvert=8$, the element $-1$ is its only element of order two, and each of $\pm\mathbf i,\pm\mathbf j,\pm\mathbf k$ has order four ([[prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two]]).

[L15] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

[L16] For all $m,n\in\mathbb Z$ one has $g^{m+n}=g^mg^n$ and $(g^m)^n=g^{mn}$ ([[lem-group-power-laws]]).

[L17] A cyclic group with a generator of finite order $n$ is isomorphic to $(\mathbb Z/n,+)$ ([[thm-classification-of-cyclic-groups]]).

## Proof

**Proof technique:** cases.

1.1 $P$ is extraspecial: $Z(P)=[P,P]=\Phi(P)=\langle z\rangle$ has order $p$, and $V=P/Z(P)$ is elementary abelian of order $p^2$. [F3, F4, L1, L2]

1.2 Since $\Phi(P)=[P,P]P^p$ contains $P^p$, every $g\in P$ has $g^p\in Z(P)$. [F8, L1, L3]

1.3 Every element order divides $p^3$; an element of order $p^3$ would generate $P$ and make it abelian, so every element has order dividing $p^2$ and $\exp(P)$ is $p$ or $p^2$. [F5, F6, F7, L15, L16]

1.4 For odd $p$ the groups $H_p$ and $M_p$ are nonabelian of order $p^3$ with exponents $p$ and $p^2$, so they are not isomorphic. [F5, L7, L8, L9]

1.5 The groups $\operatorname{Dih}(C_4)$ and $Q_8$ are nonabelian of order eight and have six and two solutions of $x^2=1$, so they are not isomorphic. [L10]

1.6 First case: suppose $g^p=e$ for every $g\in P$. At $p=2$ this makes $P$ abelian, since $gh=(gh)^{-1}=h^{-1}g^{-1}=hg$; so $p$ is odd here. [F7, L16, assume-case expp]

1.7 Second case: suppose instead that $P$ has an element $a$ of order $p^2$. Then $\langle a\rangle$ has order $p^2$ and index $p$, and $a^p$ is a nonidentity element of $Z(P)$, so $Z(P)=\langle a^p\rangle$. [F6, F7, L15, L16, assume-case exppsq]

2.1 In the first case, nonabelianness gives $x,y$ with $[x,y]\ne e$; then $z:=[x,y]$ generates $Z(P)$ and $\langle x,y\rangle$ has order $p^3$, so $P=\langle x,y\rangle$. [F4, F6, L4, step 1.1, step 1.6]

2.2 In the second case, choose $b\notin\langle a\rangle$; then $\langle a,b\rangle$ properly contains a subgroup of index $p$ and so equals $P$, and $[b,a]\ne e$ since otherwise $P$ would be abelian. [F4, F6, L15, step 1.7]

3.1 In the first case every element of $P$ is uniquely $x^{u}y^{v}z^{w}$ with $u,v,w$ in $\{0,\dots,p-1\}$: the images $\bar x,\bar y$ generate $V$, so the products $x^{u}y^{v}$ meet every coset of $Z(P)=\{z^{w}\}$, and there are exactly $p^3$ such triples of exponents. [F3, F6, L1, L15, step 2.1]

3.2 In the second case $[b,a]$ lies in $\langle a^{p}\rangle$ and is not the identity, so $[b,a]=a^{pk}$ with $p\nmid k$; choosing $k'$ with $kk'\equiv1\pmod p$ and replacing $b$ by $b^{k'}$, which still lies outside $\langle a\rangle$ because its image in $V$ is nontrivial, gives $[b,a]=a^{p}$, that is $bab^{-1}=a^{1+p}$. Moreover $b^{p}\in Z(P)=\langle a^{p}\rangle$, say $b^{p}=a^{pm}$. [F4, L5, L16, step 1.2, step 1.7, step 2.2]

4.1 In the first case the class-two identities give $y^{v}x^{u'}=[y^{v},x^{u'}]x^{u'}y^{v}=z^{-u'v}x^{u'}y^{v}$, so $(x^{u}y^{v}z^{w})(x^{u'}y^{v'}z^{w'})=x^{u+u'}y^{v+v'}z^{w+w'-u'v}$, all exponents read modulo $p$ because $x^{p}=y^{p}=z^{p}=e$. [F4, L5, L16, step 1.6, step 3.1]

4.2 In the second case with $p$ odd, the $p$-th power map is a homomorphism, so $c=ba^{-m}$ has $c^{p}=b^{p}(a^{-m})^{p}=e$; also $c\notin\langle a\rangle$, and $cac^{-1}=bab^{-1}=a^{1+p}$. [L6, L16, step 3.2, assume-case odd]

4.3 In the second case with $p=2$, the element $b^{2}$ lies in $\{e,a^{2}\}$, and the relation reads $bab^{-1}=a^{3}=a^{-1}$. [L16, step 3.2, assume-case two]

5.1 In $H_p$ put $X=(1,0,0)$, $Y=(0,1,0)$ and $W=(0,0,1)$. Then $XY=(1,1,1)$, $YX=(1,1,0)$ and $(YX)^{-1}=(-1,-1,1)$, so $[X,Y]=(XY)(YX)^{-1}=(0,0,1)=W$, which generates $Z(H_p)$; for odd $p$ every element of $H_p$ has $p$-th power the identity, so steps 3.1 and 4.1 hold verbatim in $H_p$ with $X,Y,W$ in place of $x,y,z$. [F1, F4, L4, L7, L8, step 3.1, step 4.1]

5.2 In the second case with $p$ odd, $\langle a\rangle$ is normal because $c$ conjugates it into itself and $a$ normalises it, $\langle a\rangle\cap\langle c\rangle$ is trivial because $c\notin\langle a\rangle$ and $\langle c\rangle$ has prime order, and $\lvert\langle a\rangle\rvert\lvert\langle c\rangle\rvert=p^3$, so $P=\langle a\rangle\langle c\rangle$ is an internal semidirect product whose conjugation action sends $a$ to $a^{1+p}$; hence $P\cong M_p$. [F2, F6, L11, L15, L17, step 4.2]

5.3 In the second case with $p=2$ and $b^{2}=e$: $\langle a\rangle$ is normal of index two, $\langle a\rangle\cap\langle b\rangle$ is trivial, and $b$ acts on $\langle a\rangle$ by inversion, so $P$ is the internal semidirect product of a cyclic group of order four by a cyclic group of order two acting by inversion, that is $P\cong\operatorname{Dih}(C_4)$. [F6, L11, L12, L15, L17, step 4.3]

5.4 In the second case with $p=2$ and $b^{2}=a^{2}$: the eight elements $a^{u}b^{v}$ with $0\le u<4$ and $v\in\{0,1\}$ are distinct and exhaust $P$, and the relations $a^{4}=e$, $b^{2}=a^{2}$ and $ba=a^{-1}b$ determine every product of two of them. The quaternion group satisfies the same three relations with $\mathbf i$ for $a$ and $\mathbf j$ for $b$, since $\mathbf i^{4}=1$, $\mathbf j^{2}=-1=\mathbf i^{2}$ and $\mathbf j\mathbf i=-\mathbf k=\mathbf i^{-1}\mathbf j$, and $\mathbf j\notin\langle\mathbf i\rangle$, so its eight elements have the same normal form; matching normal forms is therefore an isomorphism and $P\cong Q_8$. [F6, L13, L14, L15, L16, step 4.3]

6.1 In the first case, matching normal forms gives a bijection $H_p\to P$ carrying $X^{u}Y^{v}W^{w}$ to $x^{u}y^{v}z^{w}$, and both products are computed by the same rule, so it is an isomorphism and $P\cong H_p$. [step 3.1, step 4.1, step 5.1]

7.1 The two cases are exhaustive, and within the second the two parities are exhaustive; so for odd $p$ every nonabelian group of order $p^3$ is isomorphic to $H_p$ or to $M_p$, and for $p=2$ to $\operatorname{Dih}(C_4)$ or to $Q_8$. With the two non-isomorphy statements this gives exactly two isomorphism classes at every prime. [step 1.3, step 1.4, step 1.5, step 5.2, step 5.3, step 5.4, step 6.1, cases-exhaustive] ∎

## Remarks

The parity of $p$ enters twice and in opposite directions. It rules out the exponent-$p$ case at $p=2$, where it forces commutativity; and it is what allows the correction of the second generator in the exponent-$p^2$ case, since that correction is made with the $p$-th power homomorphism, which is available only for odd $p$. At $p=2$ the correction is not available and the two possible values of $b^2$ produce the two groups of order eight.
