---
id: thm-classification-of-extraspecial-p-groups-for-odd-p
kind: theorem
title: "For odd $p$ and each $n\\ge1$ there are exactly two extraspecial groups of order $p^{1+2n}$, distinguished by their exponent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed, thm-classification-of-the-nonabelian-groups-of-order-p-cubed, lem-central-product-absorption-of-the-exponent-p-squared-factor-for-odd-p, cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p, cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p, prop-equivalent-characterisations-of-an-extraspecial-p-group, thm-frattini-subgroup-formula-for-a-finite-p-group, def-pth-power-subgroup-of-a-group, thm-recognition-of-an-internal-central-product, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, def-internal-central-product-of-a-family-of-subgroups, def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, def-heisenberg-group-of-order-p-cubed, prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p, prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p, def-exponent-of-a-finite-group, def-center-of-a-group, def-generated-subgroup, thm-lagrange, def-order-in-a-group]
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Theorem 3.14(i)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Theorem 2.42"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $p$ be an odd prime. For each $n\ge1$ there are exactly two extraspecial
groups of order $p^{1+2n}$ up to isomorphism, and they are distinguished by their
exponent: one has exponent $p$ and the other has exponent $p^2$.

## Facts & Assumptions

**Given:** An odd prime $p$, an integer $n\ge1$, and an extraspecial group $P$ of order $p^{1+2n}$ with $Z(P)=\langle z\rangle$.

[F1] Subgroups $G_1,\dots,G_r$ of $G$ form an internal central product when they generate $G$ and $[G_i,G_j]=1$ for $i\ne j$ ([[def-internal-central-product-of-a-family-of-subgroups]]).

[F2] For groups $G,H$ with central subgroups $Z_1\le Z(G)$, $Z_2\le Z(H)$ and an isomorphism $\alpha:Z_1\to Z_2$, the central product $G\circ_\alpha H$ is the quotient of $G\times H$ by $N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$ ([[def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups]]).

[F3] For a finite group $G$, $\exp(G)=\min\{n\in\mathbb N:n>0\text{ and }g^n=e\text{ for every }g\in G\}$ ([[def-exponent-of-a-finite-group]]).

[F4] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F5] $\langle S\rangle$ is the smallest subgroup of $G$ containing $S$ ([[def-generated-subgroup]]).

[F6] For a group $G$ and a prime $p$, $G^p=\langle g^p:g\in G\rangle$ ([[def-pth-power-subgroup-of-a-group]]).

[F7] The Heisenberg group is $H_p=(\mathbb Z/p)^3$ with $(a,b,c)(a',b',c')=(a+a',b+b',c+c'+ab')$ ([[def-heisenberg-group-of-order-p-cubed]]).

[L1] There are $n\ge1$ subgroups $P_1,\dots,P_n$ of $P$, each nonabelian of order $p^3$ with $Z(P_i)=Z(P)$, which form an internal central product of $P$; such a family is admissible, $\lvert P\rvert=p^{1+2n}$, and peeling one member leaves an extraspecial group of order $p^{1+2(n-1)}$ with the induced admissible family ([[thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed]]).

[L2] For every prime $p$ there are exactly two nonabelian groups of order $p^3$ up to isomorphism; for odd $p$ they are $H_p$, of exponent $p$, and $M_p$, of exponent $p^2$ ([[thm-classification-of-the-nonabelian-groups-of-order-p-cubed]]).

[L3] For odd $p$, a central product of two copies of $M_p$ along an isomorphism of their centres is an internal central product of a subgroup isomorphic to $H_p$ and a subgroup isomorphic to $M_p$ ([[lem-central-product-absorption-of-the-exponent-p-squared-factor-for-odd-p]]).

[L4] For an odd prime $p$ and a finite group $G$ with $[G,G]\le Z(G)$ of exponent dividing $p$, $(xy)^p=x^py^p$ for all $x,y$ ([[cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p]]).

[L5] An extraspecial $p$-group is nilpotent of class exactly two, its derived subgroup satisfies $P'=Z(P)$ and has order $p$, and every nonidentity commutator has order $p$ ([[cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p]]).

[L6] For a finite $p$-group $P$ the following are equivalent: $P$ is extraspecial; $P$ is nonabelian, $|Z(P)|=p$ and $P/Z(P)$ is elementary abelian; $P$ is nonabelian and $Z(P)=P'=\Phi(P)$ has order $p$ ([[prop-equivalent-characterisations-of-an-extraspecial-p-group]]).

[L7] For every finite $p$-group $P$, $\Phi(P)=P'P^p$ ([[thm-frattini-subgroup-formula-for-a-finite-p-group]]).

[L8] Subgroups form an internal central product of $G$ if and only if the multiplication map from their direct product is a surjective homomorphism; for two factors $G\cong G_1\circ_{\operatorname{id}}G_2$ along the identity of $G_1\cap G_2$ ([[thm-recognition-of-an-internal-central-product]]).

[L9] A central product of two extraspecial $p$-groups identified along their centres is extraspecial of order $\lvert E_1\rvert\lvert E_2\rvert/p$ ([[thm-a-central-product-of-extraspecial-p-groups-is-extraspecial]]).

[L10] $H_p$ is extraspecial and, for odd $p$, has exponent $p$ ([[prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p]]).

[L11] $M_p$ is extraspecial of exponent $p^2$ ([[prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p]]).

[L12] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

[L13] The canonical maps from both factors into a central product are injective homomorphisms; their images commute and generate the central product ([[prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images]]).

## Proof

**Proof technique:** induction.

1.1 At $n=1$ an extraspecial group of order $p^3$ is nonabelian, hence isomorphic to $H_p$ or to $M_p$; their exponents are $p$ and $p^2$, so there are exactly two and the exponent tells them apart. [L2, L6, L10, L11, base]

1.2 Assume, for every $m$ with $1\le m<n$: both exponents $p$ and $p^2$ are realised by extraspecial groups of order $p^{1+2m}$; every such group has an admissible family with at most one modular member; its exponent is $p$ when that number is zero and $p^2$ when it is one; and two such groups with the same exponent are isomorphic. [ih]

1.3 If $\phi:G\to G'$ and $\psi:H\to H'$ are isomorphisms carrying the identified central subgroups onto the identified central subgroups compatibly with the identifying isomorphisms, then $\phi\times\psi$ carries $N$ onto $N'$ and induces an isomorphism $G\circ_\alpha H\to G'\circ_{\alpha'}H'$. [F2, algebra]

1.4 Every $g\in P$ has $g^p\in P^p\le\Phi(P)=Z(P)$, so $g^{p^2}=(g^p)^p=e$ and the exponent of $P$ divides $p^2$. [F3, F6, L6, L7]

1.5 Let $P$ be extraspecial of order $p^{1+2n}$ with $n\ge2$ and take an admissible family $P_1,\dots,P_n$; each member is nonabelian of order $p^3$, hence isomorphic to $H_p$ or to $M_p$. [F1, L1, L2]

2.1 If two members $P_i,P_j$ are isomorphic to $M_p$, then $R=\langle P_i,P_j\rangle$ is an internal central product of them, so $R\cong M_p\circ M_p$ and $R$ is an internal central product of a subgroup isomorphic to $H_p$ and one isomorphic to $M_p$, both with centre $Z(P)$; replacing $P_i,P_j$ by those two leaves an admissible family with one fewer modular member. Repeating, $P$ has an admissible family with $k\in\{0,1\}$ modular members. [F1, F4, F5, L3, L8, step 1.3, step 1.5]

3.1 If $k=0$ every member has exponent $p$; since the members commute and generate $P$ and the $p$-th power map is a homomorphism, every element of $P$ is a product of elements of the members and has $p$-th power the identity, so $\exp(P)=p$. If $k=1$ the modular member contains an element of order $p^2$, so $\exp(P)$ is a multiple of $p^2$, and by step 1.4 it equals $p^2$. Thus the exponent determines $k$. [F3, F5, L4, L5, L10, L11, step 1.4, step 2.1]

3.2 Since $n\ge2$ and $k\le1$, some member $P_1$ is isomorphic to $H_p$; peeling it leaves $C=\langle P_2,\dots,P_n\rangle$, extraspecial of order $p^{1+2(n-1)}$ with an admissible family of $n-1$ members of which $k$ are modular, and $P\cong P_1\circ_{\operatorname{id}}C$ along the identity of $Z(P)$. [F1, L1, L8, L12, step 2.1]

4.1 If $P$ and $P'$ are extraspecial of order $p^{1+2n}$ with the same exponent, their normalised families have the same $k$ by step 3.1, so the peeled subgroups $C$ and $C'$ have the same exponent and are isomorphic by the induction hypothesis. Any such isomorphism restricts to an isomorphism $Z(C)\to Z(C')$. For the peeled Heisenberg factors, the maps $(a,b,c)\mapsto(ra,b,rc)$ with $r\in\mathbb F_p^\times$ preserve the multiplication of [F7] and induce every automorphism of their order-$p$ centres; choose one whose central restriction makes the two factor isomorphisms compatible. Step 1.3 then induces $P\cong P'$. [F4, F7, L10, step 1.2, step 1.3, step 3.1, step 3.2]

5.1 Both exponents are realised: if $C$ is extraspecial of order $p^{1+2(n-1)}$ then $H_p\circ C$ is extraspecial of order $p^{1+2n}$. When $C$ has exponent $p$, the commuting generating images of [L13] and [L4] show that the product has exponent $p$; when $C$ has exponent $p^2$, its injective canonical image from [L13] still contains an element of order $p^2$, while step 1.4 bounds the product exponent by $p^2$. Applying this to the two groups supplied by the induction hypothesis gives one group of each exponent. With step 4.1 this gives exactly two isomorphism classes at order $p^{1+2n}$ and completes the induction. [L4, L9, L10, L13, step 1.1, step 1.2, step 1.4, step 3.1, step 4.1, discharge-induction] ∎

## Remarks

The modular factors are not an invariant of the group and, unlike the quaternion factors at $p=2$, not even their parity is: two of them can be traded for one Heisenberg factor and one modular factor, so the count drops by one rather than by two. What survives is the presence or absence of an element of order $p^2$, which is the exponent.
