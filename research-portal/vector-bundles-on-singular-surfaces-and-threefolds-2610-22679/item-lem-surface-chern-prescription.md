---
title: Prescribing two surface Chern classes
status: draft
research_item: lem-surface-chern-prescription
dependency_level: 29
---

PDF p. 12: Theorem A surjectivity construction

## Prerequisites

- [thm-line-bundle-first-chern-classification](item-thm-line-bundle-first-chern-classification)
- [lem-second-chern-surjective-low-dimension](item-lem-second-chern-surjective-low-dimension)
- [lem-critical-rank-representatives](item-lem-critical-rank-representatives)
- [lem-second-piece-rank-determinant](item-lem-second-piece-rank-determinant)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [thm-serre-affine-splitting](item-thm-serre-affine-splitting)
- [lem-author-3cde9692a7e9-actual-total-cartan](item-lem-author-3cde9692a7e9-actual-total-cartan)
- [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the site-size and universe bounds required by the cited motivic and perfect K-theory constructions. Let $k$ be an algebraically closed field and let $X$ be a normal affine finite-type $k$-scheme of Krull dimension two. For every pair $a_1$ in $H^{2,1}_{mot}(X, Z)$ and $a_2$ in $H^{4,2}_{mot}(X, Z)$, there is a rank-two vector bundle $W$ on $X$ with $c_1(W)=a_1$ and $c_2(W)=a_2$.

More precisely, one may choose a line bundle $L$ with $c_1(L)=a_1$ and a rank-two bundle $V$ with trivial determinant such that $[V]-[O_X^2]$ lies in the second motivic image filtration and has second Chern class $a_2$. Then $V$ direct-summed with $L$ is isomorphic to $W$ direct-summed with $O_X$, and the resulting $W$ has the prescribed classes. The virtual class $[V]-[O_X^2]+[L]-[O_X]$ also has first and second Chern classes $a_1$ and $a_2$.

A vector bundle is a finite locally free sheaf, its rank is the number of copies of the structure sheaf in a local trivialization, and a line bundle is a rank-one vector bundle. Its determinant is its top exterior power. Normal means that every local ring is an integrally closed domain; finite type over $k$ means a finite affine cover by spectra of finitely generated $k$-algebras. Krull dimension is the supremum of lengths of chains of irreducible closed subsets. The groups $H^{2i,i}_{mot}(X, Z)$ are the indicated cohomology groups of the integral weight-$i$ motivic complexes. The group $K_0(X)$ is the zeroth homotopy group of nonconnective K-theory of perfect complexes; a perfect complex is locally quasi-isomorphic to a bounded complex of vector bundles. The second motivic image filtration $F^2_{mot}K_0(X)$ is the image in $K_0(X)$ of the zeroth homotopy group of the second stage of the motivic K-theory tower. Brackets denote the class of a bundle in $K_0(X)$, and $c_i$ on virtual classes denotes the actual perfect K-theory Chern operation.

## Facts & Assumptions

**Given:** An algebraically closed field $k$, a normal affine finite-type $k$-scheme $X$ of dimension two, the two prescribed motivic cohomology classes, Choice, and the stated site-size and universe bounds.

**Goal:** Construct $L$, $V$ and $W$ with the stated properties and calculate both actual and virtual Chern classes.

[F1] Under these Choice and size hypotheses, first Chern class identifies line bundles with $H^{2,1}_{mot}(X, Z)$. [thm-line-bundle-first-chern-classification](item-thm-line-bundle-first-chern-classification)

[F2] For a normal finite-type scheme of dimension two over an algebraically closed field, with the stated Choice and size hypotheses, the actual second Chern operation maps $F^2_{mot}K_0(X)$ onto $H^{4,2}_{mot}(X, Z)$. [lem-second-chern-surjective-low-dimension](item-lem-second-chern-surjective-low-dimension)

[F3] On such a normal finite-type scheme, every class in the second image filtration has pointwise rank zero and first perfect Chern class zero. If it is represented by a difference of bundles, their determinants are isomorphic. [lem-second-piece-rank-determinant](item-lem-second-piece-rank-determinant)

[F4] On a nonempty affine finite-type scheme of dimension two over a field, Choice and suitable universes allow every pointwise rank-zero perfect $K_0$ class to be written $[V]-[O_X^2]$ with $V$ a rank-two bundle. [lem-critical-rank-representatives](item-lem-critical-rank-representatives)

[F5] Under Choice, a rank-three bundle on a nonempty noetherian affine scheme of dimension two splits as a rank-two bundle plus a trivial line. [thm-serre-affine-splitting](item-thm-serre-affine-splitting)

[F6] Actual perfect Chern operations satisfy the total Cartan identity on noetherian finite-dimensional schemes over a field, and the universal operation restricts to the supplied actual bundle classes. Bundle Chern classes obey Whitney's formula, a line has no Chern classes above degree one, and trivial bundles have total Chern class one. [lem-author-3cde9692a7e9-actual-total-cartan](item-lem-author-3cde9692a7e9-actual-total-cartan) [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space) [prop-chern-whitney-identities](item-prop-chern-whitney-identities)

[F7] The Axiom of Choice is assumed for the cited constructions and affine splitting. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof

**Proof technique:** Choose the two classes separately, represent the second by a critical-rank bundle, and split one trivial line from the resulting rank-three bundle.

1.1 The dimension hypothesis makes $X$ nonempty. It is noetherian because it is finite type over a field. By [F1], choose a line bundle $L$ with $c_1(L)=a_1$. By [F2], choose a class $alpha$ in $F^2_{mot}K_0(X)$ with $c_2(alpha)=a_2$. [F1, F2, F7, given, choose]

2.1 The class $alpha$ has pointwise rank zero by [F3]. Applying [F4], write $alpha=[V]-[O_X^2]$ for a rank-two bundle $V$. The determinant assertion of [F3] gives an isomorphism from the determinant of $V$ to the determinant of $O_X^2$, which is the trivial line. Also $c_1(alpha)=0$ by [F3]. [F3, F4, step 1.1]

3.1 The actual perfect total Cartan identity and bundle restriction in [F6] give $c_t(alpha)c_t(O_X^2)=c_t(V)$. Since the total class of $O_X^2$ is one, $c_1(V)=c_1(alpha)=0$ and $c_2(V)=c_2(alpha)=a_2$. Here $c_t$ denotes the formal total Chern series with constant term one; the equalities are its coefficients in degrees one and two. [F6, step 1.1, step 2.1]

4.1 Put $beta=alpha+[L]-[O_X]$. By [F6], the total class of $[L]-[O_X]$ is $1+a_1t$. Multiplying by the total class of $alpha$, whose first coefficient vanishes, gives $c_1(beta)=a_1$ and $c_2(beta)=a_2+0$; the cross term is $c_1(alpha)a_1=0$. This establishes the virtual-class assertion. [F6, step 1.1, step 2.1, step 3.1, construct]

5.1 The bundle $V$ direct-summed with $L$ has constant rank three. Apply [F5] to obtain an isomorphism $V$ direct-summed with $L$ isomorphic to $W$ direct-summed with $O_X$, where $W$ has rank two. Whitney's formula and the trivial-line normalization in [F6] give $c_i(W)=c_i(V\oplus L)$ for $i=1,2$. The first class of the latter is $0+a_1$; its second is $a_2+0a_1+0$, using step 3.1 and the vanishing of the second class of a line. Hence $c_1(W)=a_1$ and $c_2(W)=a_2$, as required. [F5, F6, step 1.1, step 3.1] ∎
