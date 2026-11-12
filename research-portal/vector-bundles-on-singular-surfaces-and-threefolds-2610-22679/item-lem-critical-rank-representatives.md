---
title: Critical-rank representatives of rank-zero classes
status: published
research_item: lem-critical-rank-representatives
dependency_level: 13
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 12, proof of Theorem A, surjectivity paragraph; p. 15, opening
        of proof of Theorem 6.7; p. 17, proof of Theorem B, surjectivity
        paragraph
      statement: The article represents the relevant rank-zero K-zero classes by
        rank-two bundles minus the trivial rank-two bundle on its normal affine
        surfaces, and by rank-three bundles minus the trivial rank-three bundle
        on its normal affine threefolds, invoking Serre splitting. Its surface
        proof also splits a rank-three bundle as a rank-two bundle plus a
        trivial line.
      hypotheses: The cited applications concern normal affine surfaces or threefolds
        over algebraically closed fields, under the article finite-type
        conventions. The broader arbitrary-field statement in this item is a
        locally proved abstraction of those applications, using the declared
        affine bridge, complement and splitting suppliers.
      reading_limits: Read the indicated passages in the frozen extracted article
        text, together with the title and introduction for scope. This repair
        does not independently check the original Ser58 paper or reconstruct the
        underlying K-theory construction. The local proof uses the inspected
        supplier interfaces; no new original-author defect judgment is made.
---

PDF p. 12: Proof of Theorem A, rank two representative; PDF p. 15: Proof of Theorem 6.7, first sentence; PDF p. 17: Proof of Theorem B, rank three representatives

## Prerequisites

- [thm-serre-affine-splitting](item-thm-serre-affine-splitting)
- [lem-finite-projective-complements](item-lem-finite-projective-complements)
- [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-field](https://alphabetamath.cc/item/def-field)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated](https://alphabetamath.cc/item/lem-affine-finite-type-scheme-coordinate-ring-finitely-generated)
- [math:cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)


## Statement
Assume the Axiom of Choice and suitable universes. Let $X$ be a nonempty affine scheme of finite type over a field, of dimension $d=2$ or $3$. Every class $\alpha$ of pointwise rank zero in $K_0(X)=\pi_0 K(X)$ can be written $\alpha=[E]-[\mathcal O_X^d]$ for a vector bundle $E$ of constant rank $d$. Moreover, any vector bundle $V$ of constant rank $r\geq d$ is isomorphic to $E'\oplus\mathcal O_X^{r-d}$ for a vector bundle $E'$ of rank $d$.

A vector bundle is a finite locally free $\mathcal O_X$-module; its rank at a point is the number of copies of the structure sheaf in a local trivialization there. Constant rank means the same rank at every point. The dimension is the supremum of the lengths of strict chains of irreducible closed subsets. The spectrum $K(X)$ is the nonconnective K-theory of perfect complexes in the supplied interface. The class of a vector bundle in $K_0(X)$ is the class of the complex concentrated in degree zero. Pointwise rank on $K_0(X)$ is transported through the affine K-zero isomorphism to the rank homomorphism on the vector-bundle Grothendieck group: a difference $[B]-[C]$ has rank $\operatorname{rank}_x B-\operatorname{rank}_x C$ at $x$.

## Facts & Assumptions

**Given:** The Axiom of Choice, suitable universes, and $X$ and $d$ as in the statement.

**Goal:** Represent every pointwise rank-zero class by a rank-$d$ bundle minus the trivial rank-$d$ bundle, and split any constant-rank bundle down to rank $d$.

[A1] The Axiom of Choice is used through the affine perfect-K-zero bridge and finite-projective-complement suppliers in step 1.1, Serre splitting in step 2.1, and the coordinate-ring and affine quasi-compactness inputs in [F5]. Padding requires no additional choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[A2] Suitable universes are fixed with the Grothendieck-universe closure convention and large enough for the sheaf, perfect-category and K-theory constructions in [F1]. Their existence is an additional size assumption, not a consequence of Choice. [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[F1] For an affine scheme, the supplied bridge defines the specified nonconnective perfect K-theory spectrum $K(X)$ and identifies $K_0(X)=\pi_0K(X)$ with the vector-bundle Grothendieck group $K^0(X)$, sending the spectral class of a bundle in degree zero to its bundle class. Its affine domain and size requirements are those in [A1] and [A2]. [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)

[F2] For a locally noetherian affine scheme, under the Axiom of Choice, each element of $K^0(X)$ is $[B]-[\mathcal O_X^N]$ for some vector bundle $B$ and integer $N\geq0$. Its rank at $x$ is $\operatorname{rank}_x B-N$. The construction uses a finite projective complement to turn the negative bundle into a trivial bundle. The group has the exact-sequence relations for vector bundles; in particular $[B\oplus C]=[B]+[C]$. The rank homomorphism respects these relations. [lem-finite-projective-complements](item-lem-finite-projective-complements)

[F3] Under the Axiom of Choice, on a nonempty noetherian affine scheme of dimension $d$, a constant-rank-$r$ vector bundle with $r>d$ is isomorphic to a rank-$d$ bundle plus $r-d$ trivial line summands. [thm-serre-affine-splitting](item-thm-serre-affine-splitting)

[F4] An affine scheme is a locally ringed space isomorphic to $\operatorname{Spec}A$ with its structure sheaf, and $A$ is recovered as its ring of global sections. A scheme over a field $k$ has a structure morphism to $\operatorname{Spec}k$; a field is a commutative unital ring with $0\ne1$ in which every nonzero element is invertible. A finite-type morphism is locally of finite type and quasi-compact; locally of finite type means locally described by finitely generated algebras on affine charts. A finite-type $k$-algebra is an algebra generated by finitely many elements over $k$. These are the scheme, base and finite-type conventions used here. [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme) [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) [math:def-field](https://alphabetamath.cc/item/def-field) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)

[F5] Under Choice, if an affine scheme $X=\operatorname{Spec}A$ is of finite type over a field $k$, then $A$ is a finitely generated $k$-algebra. A finite-type algebra over a principal ideal domain is noetherian; this supplier explicitly includes fields, whose only ideals are $(0)$ and $(1)$. Here noetherian means that every ideal is finitely generated. A scheme is locally noetherian when it has an affine open cover by spectra of noetherian rings, and noetherian when it is also quasi-compact. Under Choice every affine scheme is quasi-compact. [math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated](https://alphabetamath.cc/item/lem-affine-finite-type-scheme-coordinate-ring-finitely-generated) [math:cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian) [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)

[F6] Finite locally free sheaves have well-defined local rank. The trivial sheaf $\mathcal O_X^n$ has sections and restrictions componentwise, including $\mathcal O_X^0=0$. The direct sum of two sheaves of modules is the sheaf of pairs of sections with componentwise restrictions. On a common trivializing open, concatenation of coordinates gives $\mathcal O_U^a\oplus\mathcal O_U^b\cong\mathcal O_U^{a+b}$; thus finite direct sums of bundles are bundles and their ranks add. The first two assertions are supplied; the last construction is explicit here. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[F7] In the dimension convention of the Statement, an irreducible closed subset is nonempty and cannot be written as the union of two proper relatively closed subsets. Strict chains are ordered by strict inclusion, and their length is their number of strict inclusions. [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)

## Proof

**Proof technique:** First use a finite projective complement to obtain a single bundle minus a trivial bundle, then pad or split off trivial summands.

1.1 Choose an affine presentation $X\cong\operatorname{Spec}A$, with $A=\Gamma(X,\mathcal O_X)$ carrying its $k$-algebra structure from the given structure morphism. By [F4] and [F5], $A$ is a finite-type $k$-algebra, hence noetherian by the field case of the finite-type algebra result. The single affine chart therefore makes $X$ locally noetherian; affine quasi-compactness makes it noetherian. All hypotheses of [F1] and [F2] now hold. Use their isomorphism and representative assertion to write the given rank-zero class as $\alpha=[B]-[\mathcal O_X^N]$ with $N\geq0$. Since its rank is zero at every point, [F2] gives $\operatorname{rank}_x B=N$ for every $x$; thus $B$ has constant rank $N$. [A1, A2, F1, F2, F4, F5, given, choose]

2.1 If $N\leq d$, put $E=B\oplus\mathcal O_X^{d-N}$; it has rank $d$ by [F6]. The direct-sum relation of [F2], transported by [F1], gives $[E]-[\mathcal O_X^d]=[B]-[\mathcal O_X^N]=\alpha$. If $N>d$, apply [F3] to $B$ to obtain $B\cong E\oplus\mathcal O_X^{N-d}$ with $E$ of rank $d$; the same relation gives $[B]-[\mathcal O_X^N]=[E]-[\mathcal O_X^d]$. These cases prove the representative assertion. For the additional assertion, if $r=d$ take $E'=V$, using $\mathcal O_X^0=0$; if $r>d$, [F3] gives $V\cong E'\oplus\mathcal O_X^{r-d}$ with $E'$ of rank $d$. This proves both claims without any normality or algebraic-closure assumption. [A1, F1, F2, F3, F6, given, step 1.1, construct] ∎

## Source scope

The cited article passages use rank-two representatives in the surface argument and rank-three representatives in the threefold arguments. The present statement isolates the common affine argument and its additional splitting consequence. Its arbitrary-field scope is established by the local proof from the declared suppliers, rather than imported as an exact theorem of the article.
