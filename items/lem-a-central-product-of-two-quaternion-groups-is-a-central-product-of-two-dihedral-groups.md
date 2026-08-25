---
id: lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups
kind: lemma
title: "$Q_8\\circ Q_8\\cong\\operatorname{Dih}(C_4)\\circ\\operatorname{Dih}(C_4)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-internal-central-product-of-a-family-of-subgroups, thm-recognition-of-an-internal-central-product, def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups, prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images, thm-a-central-product-of-extraspecial-p-groups-is-extraspecial, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, def-quaternion-group-of-order-eight, def-quaternions, prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two, cor-dihedral-groups-as-semidirect-products, thm-internal-external-semidirect-product-equivalence, thm-lagrange, def-generated-subgroup, def-order-in-a-group, def-center-of-a-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Proposition 3.13(i)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Exercise 2.37"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Let $E=Q_8\circ Q_8$ be the central product of two copies of the quaternion
group along the unique isomorphism between their centres. Then $E$ is also an
internal central product of two subgroups isomorphic to $\operatorname{Dih}(C_4)$
meeting in $Z(E)$, and therefore

$$Q_8\circ Q_8\;\cong\;\operatorname{Dih}(C_4)\circ\operatorname{Dih}(C_4).$$

## Facts & Assumptions

**Given:** Two copies $E_1,E_2$ of $Q_8$, the central product $E=E_1\circ_\alpha E_2$ along the unique isomorphism $\alpha$ of their centres, the canonical images $x_1,y_1$ of the generators $\mathbf i,\mathbf j$ of $E_1$ and $x_2,y_2$ of those of $E_2$, and the common central image $z$, so that $x_i^2=y_i^2=z$, $z^2=1$ and $y_ix_iy_i^{-1}=x_i^{-1}$.

[F1] For groups $G,H$ with central subgroups $Z_1\le Z(G)$, $Z_2\le Z(H)$ and an isomorphism $\alpha:Z_1\to Z_2$, the central product $G\circ_\alpha H$ is the quotient of $G\times H$ by $N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$ ([[def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups]]).

[F2] Subgroups $G_1,\dots,G_r$ of $G$ form an internal central product when they generate $G$ and $[G_i,G_j]=1$ for $i\ne j$ ([[def-internal-central-product-of-a-family-of-subgroups]]).

[F3] $\langle S\rangle$ is the smallest subgroup of $G$ containing $S$ ([[def-generated-subgroup]]).

[F4] $\operatorname{ord}(g)$ is the least $k\ge1$ with $g^k=e$ ([[def-order-in-a-group]]).

[L1] $Q_8=\{1,-1,\mathbf i,-\mathbf i,\mathbf j,-\mathbf j,\mathbf k,-\mathbf k\}$ with $\mathbf i^2=\mathbf j^2=-1$ and $\mathbf j\mathbf i=-\mathbf k=\mathbf i^{-1}\mathbf j$ ([[def-quaternion-group-of-order-eight]], [[def-quaternions]]).

[L2] $\lvert Q_8\rvert=8$, the element $-1$ is its only element of order two, and each of $\pm\mathbf i,\pm\mathbf j,\pm\mathbf k$ has order four ([[prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two]]).

[L3] $\operatorname{Dih}(C_4)$ and $Q_8$ are extraspecial of order eight ([[prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial]]).

[L4] The canonical maps into a central product are injective homomorphisms whose images commute elementwise, generate the product, and meet in the image of the identified subgroup ([[prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images]]).

[L5] A central product of two extraspecial $p$-groups identified along their centres is extraspecial of order $\lvert E_1\rvert\lvert E_2\rvert/p$ ([[thm-a-central-product-of-extraspecial-p-groups-is-extraspecial]]).

[L6] Subgroups form an internal central product of $G$ if and only if the multiplication map from their direct product is a surjective homomorphism; for two factors $G\cong G_1\circ_{\operatorname{id}}G_2$ along the identity of $G_1\cap G_2$ ([[thm-recognition-of-an-internal-central-product]]).

[L7] For $n\ge1$, $\operatorname{Dih}(C_n)=C_n\rtimes C_2$ with $r^n=s^2=1$ and $srs^{-1}=r^{-1}$, of order $2n$ ([[cor-dihedral-groups-as-semidirect-products]]).

[L8] The conditions $N\trianglelefteq G$, $G=NH$, $N\cap H=\{1\}$ hold if and only if conjugation restricts to an action and $(n,h)\mapsto nh$ is an isomorphism $N\rtimes_\alpha H\to G$ ([[thm-internal-external-semidirect-product-equivalence]]).

[L9] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 The two canonical images are isomorphic copies of $Q_8$ that commute elementwise, generate $E$, and meet exactly in $\langle z\rangle$; and $E$ is extraspecial of order $8\cdot8/2=32$. [F1, L2, L3, L4, L5]

1.2 Each $x_i$ has order four, since $x_i^2=z$ and $z^2=1$ with $z\ne1$; likewise each $y_i$. [F4, L1, L2]

2.1 Put $t_1=x_2y_1$ and $t_2=x_1y_2$. Then $t_1^2=x_2y_1x_2y_1=x_2^2y_1^2=z\cdot z=1$, because $x_2$ commutes with $y_1$; likewise $t_2^2=1$. [L1, L4, step 1.1, step 1.2]

2.2 Also $t_1x_1t_1^{-1}=x_2\,(y_1x_1y_1^{-1})\,x_2^{-1}=y_1x_1y_1^{-1}=x_1^{-1}$, because $x_2$ commutes with everything in the first image; likewise $t_2x_2t_2^{-1}=x_2^{-1}$. [L1, L4, step 1.1]

2.3 Neither $t_1$ lies in $\langle x_1\rangle$ nor $t_2$ in $\langle x_2\rangle$: if $x_2y_1$ were a power of $x_1$ then $x_2$ would lie in the first canonical image, hence in $\langle z\rangle$, contradicting that $x_2$ has order four. [F3, L4, step 1.1, step 1.2]

3.1 Set $H_1=\langle x_1,t_1\rangle$ and $H_2=\langle x_2,t_2\rangle$. In $H_1$ the cyclic subgroup $\langle x_1\rangle$ of order four is normalised by $t_1$ and meets $\langle t_1\rangle$ trivially, and $\lvert\langle x_1\rangle\rvert\,\lvert\langle t_1\rangle\rvert=8$; so $H_1$ is the internal semidirect product of a cyclic group of order four by a group of order two acting by inversion, that is $H_1\cong\operatorname{Dih}(C_4)$ of order eight with $Z(H_1)=\langle x_1^2\rangle=\langle z\rangle$. The same holds for $H_2$. [F3, L7, L8, L9, step 2.1, step 2.2, step 2.3]

4.1 The four generators commute in pairs across the two subgroups: $x_1$ commutes with $x_2$ and with $t_2=x_1y_2$; $t_1=x_2y_1$ commutes with $x_2$; and $t_1t_2=x_2(y_1x_1)y_2=x_1^{-1}x_2y_1y_2$ while $t_2t_1=x_1(y_2x_2)y_1=x_2^{-1}x_1y_1y_2$, and these agree because $x_1^2=z=x_2^2$ gives $x_1^{-1}x_2=x_2^{-1}x_1$. Hence $[H_1,H_2]=1$. [F2, F3, L1, L4, step 1.1, step 3.1]

4.2 The two subgroups generate $E$: they contain $x_1,x_2,t_1,t_2$, hence $y_1=x_2^{-1}t_1$ and $y_2=x_1^{-1}t_2$, hence both canonical images, which generate $E$. [F3, L4, step 1.1, step 3.1]

5.1 So $H_1$ and $H_2$ form an internal central product of $E$, and the recognition theorem gives $E\cong H_1\circ_{\operatorname{id}}H_2$ along the identity of $D=H_1\cap H_2$. Comparing orders, $32=\lvert E\rvert=8\cdot8/\lvert D\rvert$, so $\lvert D\rvert=2$ and $D=\langle z\rangle=Z(H_1)=Z(H_2)$. [F2, L6, L9, step 1.1, step 3.1, step 4.1, step 4.2]

6.1 Since $H_1$ and $H_2$ are isomorphic to $\operatorname{Dih}(C_4)$ by isomorphisms carrying $D$ to the centre, $E$ is a central product of two copies of $\operatorname{Dih}(C_4)$ along the unique isomorphism of their centres, which is what was claimed. [F1, L3, step 3.1, step 5.1] ∎

## Remarks

The identity $x_1^2=x_2^2$ is the whole of the computation in step 4.1, and it is where the quaternion hypothesis is spent: in a central product of two dihedral groups the corresponding squares are both trivial and the same computation succeeds for a different reason. What the statement records is that these two central products are the same group, so the number of quaternion factors in a decomposition is not an invariant of it.
