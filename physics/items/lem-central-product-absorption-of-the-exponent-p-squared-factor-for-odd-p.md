---
id: lem-central-product-absorption-of-the-exponent-p-squared-factor-for-odd-p
kind: lemma
title: "For odd $p$, a central product of two modular groups of order $p^3$ is a central product of a modular group with a Heisenberg group"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-modular-group-of-order-p-cubed, prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p, def-heisenberg-group-of-order-p-cubed, def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p, cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p, lem-commutator-identities-in-a-group-of-class-two, lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, def-centralizer-of-a-subgroup, thm-classification-of-the-nonabelian-groups-of-order-p-cubed, thm-recognition-of-an-internal-central-product, lem-group-power-laws, def-exponent-of-a-finite-group, def-center-of-a-group, def-commutator-and-commutator-subgroup, def-generated-subgroup, def-order-in-a-group]
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
    - title: "D. A. Craven, The Theory of p-Groups, Proposition 3.13(ii)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Exercise 2.37"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $p$ be an odd prime and let $E$ be a central product of two copies of the
modular group $M_p$ along an isomorphism of their centres. Then $E$ is an
internal central product of a subgroup isomorphic to the Heisenberg group $H_p$
and a subgroup isomorphic to $M_p$; consequently

$$M_p\circ M_p\;\cong\;H_p\circ M_p .$$

## Facts & Assumptions

**Given:** An odd prime $p$, two copies of $M_p$ with generators $a_i$ of order $p^2$ and $s_i$ of order $p$ satisfying $s_ia_is_i^{-1}=a_i^{1+p}$, and the central product $E$ of the two along an isomorphism of their centres, with canonical images $x_i,y_i$ of $a_i,s_i$ and common central image $z$.

[F1] The modular group of order $p^3$ is $M_p=A\rtimes_\alpha B$ with $A=\langle a\rangle$ of order $p^2$, $B=\langle s\rangle$ of order $p$, and $sas^{-1}=a^{1+p}$ ([[def-modular-group-of-order-p-cubed]]).

[F2] For groups $G,H$ with central subgroups $Z_1\le Z(G)$, $Z_2\le Z(H)$ and an isomorphism $\alpha:Z_1\to Z_2$, the central product $G\circ_\alpha H$ is the quotient of $G\times H$ by $N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$ ([[def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups]]).

[F3] For $g,h\in G$ the commutator is $[g,h]:=ghg^{-1}h^{-1}$ ([[def-commutator-and-commutator-subgroup]]).

[F4] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F5] For a finite group $G$, $\exp(G)=\min\{n\in\mathbb N:n>0\text{ and }g^n=e\text{ for every }g\in G\}$ ([[def-exponent-of-a-finite-group]]).

[F6] $\langle S\rangle$ is the smallest subgroup of $G$ containing $S$ ([[def-generated-subgroup]]).

[L1] $M_p$ is nonabelian of order $p^3$, extraspecial of exponent $p^2$, with $Z(M_p)=[M_p,M_p]=\langle a^p\rangle$ ([[prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p]]).

[L2] A central product of two extraspecial $p$-groups identified along their centres is extraspecial of order $\lvert E_1\rvert\lvert E_2\rvert/p$ ([[thm-a-central-product-of-extraspecial-p-groups-is-extraspecial]]).

[L3] The canonical maps into a central product are injective homomorphisms whose images commute elementwise, generate the product, and meet in the image of the identified subgroup ([[prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images]]).

[L4] For an odd prime $p$ and a finite group $G$ with $[G,G]\le Z(G)$ of exponent dividing $p$, $(xy)^p=x^py^p$ for all $x,y$ ([[cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p]]).

[L5] An extraspecial $p$-group is nilpotent of class exactly two, its derived subgroup satisfies $P'=Z(P)$ and has order $p$, and every nonidentity commutator has order $p$ ([[cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p]]).

[L6] If $[G,G]\le Z(G)$ then $[xy,w]=[x,w][y,w]$, $[x,yw]=[x,y][x,w]$, and $[x^n,y]=[x,y]^n=[x,y^n]$ for every integer $n$ ([[lem-commutator-identities-in-a-group-of-class-two]]).

[L7] If $[x,y]\ne e$ in an extraspecial $p$-group $P$, then $\langle x,y\rangle$ contains $Z(P)$, has order $p^3$, is nonabelian, and is extraspecial with centre $Z(P)$ ([[lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed]]).

[L8] If $x,y\in P$ satisfy $[x,y]\ne e$ and $F=\langle x,y\rangle$, then $P=F\,C_P(F)$ and $F\cap C_P(F)=Z(P)$, and $C_P(F)$ is extraspecial of order $\lvert P\rvert/p^{2}$ with centre $Z(P)$ when $\lvert P\rvert>p^3$ ([[thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed]], [[def-centralizer-of-a-subgroup]]).

[L9] For every prime $p$ there are exactly two nonabelian groups of order $p^3$ up to isomorphism; for odd $p$ they are $H_p$, of exponent $p$, and $M_p$, of exponent $p^2$ ([[thm-classification-of-the-nonabelian-groups-of-order-p-cubed]]).

[L10] Subgroups form an internal central product of $G$ if and only if the multiplication map from their direct product is a surjective homomorphism; for two factors $G\cong G_1\circ_{\operatorname{id}}G_2$ along the identity of $G_1\cap G_2$ ([[thm-recognition-of-an-internal-central-product]]).

[L11] For all $m,n\in\mathbb Z$ one has $(g^m)^n=g^{mn}$ ([[lem-group-power-laws]]).

## Proof

**Proof technique:** direct.

1.1 $E$ is extraspecial of order $p^5$, its centre is the common image $\langle z\rangle$ of the two centres, and the two canonical images commute elementwise, are injective and generate $E$. [F2, F4, L1, L2, L3]

1.2 The generator $a_2$ may be replaced by a power $a_2^{c}$ with $c$ not divisible by $p$ without changing the relations of the second copy, and such a replacement multiplies $x_2^{p}$ by $c$ in the exponent; choosing $c$ suitably we may assume $x_1^{p}=x_2^{p}=z$. [F1, F2, L1, L11]

2.1 Each $x_i$ has order $p^2$ and each $y_i$ has order $p$, and $[x_2,y_2]$ is the image of $[a_2,s_2]=a_2^{-p}$, so $[x_2,y_2]=z^{-1}$. [F1, F3, L1, L3, step 1.2]

2.2 Put $w=x_2x_1^{-1}$. The $p$-th power map on $E$ is a homomorphism, because $p$ is odd and $[E,E]=Z(E)$ has order $p$, so $w^{p}=x_2^{p}(x_1^{p})^{-1}=zz^{-1}=e$. [L4, L5, L11, step 1.1, step 1.2]

3.1 Moreover $w\ne e$: otherwise $x_1=x_2$ would lie in both canonical images, hence in $\langle z\rangle$, contradicting that $x_1$ has order $p^2$. So $w$ has order $p$. [L3, step 1.1, step 2.1, step 2.2]

3.2 Since $x_1$ and $y_2$ lie in different canonical images they commute, so $[w,y_2]=[x_2x_1^{-1},y_2]=[x_2,y_2][x_1^{-1},y_2]=[x_2,y_2]=z^{-1}\ne e$. [F3, L3, L6, step 1.1, step 2.1]

4.1 Hence $F=\langle w,y_2\rangle$ is extraspecial of order $p^3$ with $Z(F)=Z(E)$. [F6, L7, step 3.2]

5.1 The elements of $E$ whose $p$-th power is the identity form the kernel of the $p$-th power homomorphism, hence a subgroup; it contains $w$, $y_2$ and $z$, so it contains $F$, and $F$ has exponent $p$. [F5, F6, L4, step 2.2, step 3.1, step 4.1]

5.2 By the splitting clause, $E=F\,C_E(F)$ with $F\cap C_E(F)=Z(E)$, and $C=C_E(F)$ is extraspecial of order $p^{5}/p^{2}=p^{3}$ with $Z(C)=Z(E)$; so $F$ and $C$ form an internal central product of $E$. [L8, step 1.1, step 3.2, step 4.1]

6.1 A nonabelian group of order $p^3$ and exponent $p$ is isomorphic to $H_p$, since the other one has exponent $p^2$; so $F\cong H_p$. [L9, step 4.1, step 5.1]

6.2 If $C$ had exponent $p$ then every element of $E=FC$ would be a product of two commuting elements of $p$-th power the identity, so $E$ would have exponent $p$, contradicting that $x_1$ has order $p^2$. Hence $C$ has exponent $p^2$ and $C\cong M_p$. [F5, L4, L9, step 2.1, step 5.1, step 5.2]

7.1 Therefore $E$ is an internal central product of $F\cong H_p$ and $C\cong M_p$ meeting in $Z(E)$, and the recognition theorem identifies it with $H_p\circ M_p$ along the identity of that centre. [L10, step 6.1, step 5.2, step 6.2] ∎

## Remarks

The construction of the exponent-$p$ subgroup is where oddness of $p$ is spent: the element $w=x_2x_1^{-1}$ has order $p$ only because the $p$-th power map is a homomorphism, and at $p=2$ that map is not one. The corresponding statement at $p=2$ is the trade of two quaternion factors for two dihedral ones, which is a different computation with a different outcome.
