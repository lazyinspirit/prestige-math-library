---
id: lem-author-f08c343a07fc-local-stabilized-chern
kind: lemma
title: Chern data survive addition of trivial bundles
status: published
domain: mathematics
deps:
  - math:lem-operational-chern-classes-and-whitney-formula
  - math:def-chern-classes-of-a-vector-bundle
  - math:def-axiom-of-choice
  - lem-author-ab0a6fc202cb-finite-common-rank-strata
  - math:def-intersection-with-a-cartier-divisor-and-first-chern-class
  - math:def-chow-group-of-cycles-mod-rational-equivalence
  - math:def-algebraic-cycle-and-cycle-group
  - lem-adjudicate-febd1cc3219d-finite-type-field-qcqs
  - math:def-locally-free-sheaf-finite-rank
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-integral-scheme
  - math:def-irreducible-topological-space-and-subset
  - math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme
  - math:def-pullback-module-ringed-spaces
  - math:def-sheaf-tensor-product
  - math:thm-universal-property-of-module-tensor-products
dependency_roles:
  math:lem-operational-chern-classes-and-whitney-formula: mathematical-premise
  math:def-chern-classes-of-a-vector-bundle: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-author-ab0a6fc202cb-finite-common-rank-strata: mathematical-premise
  math:def-intersection-with-a-cartier-divisor-and-first-chern-class: mathematical-premise
  math:def-chow-group-of-cycles-mod-rational-equivalence: mathematical-premise
  math:def-algebraic-cycle-and-cycle-group: mathematical-premise
  lem-adjudicate-febd1cc3219d-finite-type-field-qcqs: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-irreducible-topological-space-and-subset: mathematical-premise
  math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme: mathematical-premise
  math:def-pullback-module-ringed-spaces: mathematical-premise
  math:def-sheaf-tensor-product: mathematical-premise
  math:thm-universal-property-of-module-tensor-products: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 3
formulation_deps:
  - math:def-chern-classes-of-a-vector-bundle
  - math:def-axiom-of-choice
  - lem-author-ab0a6fc202cb-finite-common-rank-strata
  - math:def-chow-group-of-cycles-mod-rational-equivalence
  - math:def-locally-free-sheaf-finite-rank
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme
  - math:def-pullback-module-ringed-spaces
argument_deps:
  - math:lem-operational-chern-classes-and-whitney-formula
  - math:def-chern-classes-of-a-vector-bundle
  - math:def-axiom-of-choice
  - lem-author-ab0a6fc202cb-finite-common-rank-strata
  - math:def-intersection-with-a-cartier-divisor-and-first-chern-class
  - math:def-chow-group-of-cycles-mod-rational-equivalence
  - math:def-algebraic-cycle-and-cycle-group
  - lem-adjudicate-febd1cc3219d-finite-type-field-qcqs
  - math:def-locally-free-sheaf-finite-rank
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-integral-scheme
  - math:def-irreducible-topological-space-and-subset
  - math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme
  - math:def-pullback-module-ringed-spaces
  - math:def-sheaf-tensor-product
  - math:thm-universal-property-of-module-tensor-products
---

## Statement
Assume AC. Fix a field $k$ and a smooth equidimensional finite-type $k$-scheme $X$. Let $E,F$ be vector bundles on $X$, allowing locally constant finite ranks. Their ordinary Chow Chern polynomials are taken componentwise on the finite open-and-closed common rank partition. They satisfy $c_t(E\oplus\mathcal O_X^m)=c_t(E)$ for every integer $m\geq0$, and likewise for $F$. Consequently equal Chern tuples of rank-two bundles give equal first three Chern classes of $E\oplus\mathcal O_X$ and $F\oplus\mathcal O_X$: the common third class is zero. For every $k$-morphism $f:X'\to X$ from another smooth equidimensional finite-type $k$-scheme, these equalities remain true after pullback.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement. A vector bundle means a finite locally free $\mathcal O_X$-module. A trivial bundle $\mathcal O_X^m$ is the sheaf of $m$-tuples of functions; $\mathcal O_X^0=0$. The direct sum of two module sheaves is their sheaf of pairs, with componentwise operations. Equidimensional means that all irreducible components have one common dimension $n$; an open-and-closed subset is also called clopen. [[math:def-locally-free-sheaf-finite-rank]]

**Goal:** Prove stabilization invariance and its compatibility with pullback, including variable ranks and the empty scheme.

[F1] The ordinary Chow Chern convention on a smooth equidimensional finite-type scheme is the quotient-projective-bundle convention, with $c_0(E)=1$, $c_i(E)=0$ above the rank, and $c_t(0)=1$. On a constant-rank stratum set $c_t(E)=1+\sum_{i=1}^{r}c_i(E)t^i$; a polynomial is its finite coefficient sequence, with coefficientwise equality. A Chern tuple of a rank-two bundle here means the ordered pair $(c_1(E),c_2(E))$, without forming a set of bundle isomorphism classes. [[math:def-chern-classes-of-a-vector-bundle]]

[F2] Operational Chern classes obey Whitney for a short exact sequence of bundles and $c_t(L)=1+c_1(L)t$ for a line bundle. On the stated smooth schemes, evaluation on the fundamental class identifies these operators with the ordinary Chow ring classes, so Whitney gives $c_t(E\oplus G)=c_t(E)c_t(G)$ there. The rank-zero convention is included. [[math:lem-operational-chern-classes-and-whitney-formula]], [[math:def-chern-classes-of-a-vector-bundle]], [[math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme]]

[F3] The first Chern operation of the trivial line is zero: $c_1(\mathcal O_X)\cap\alpha=0$ for every Chow class $\alpha$. The same evaluation convention therefore gives $c_1(\mathcal O_X)=0$ as an ordinary Chow class. [[math:def-intersection-with-a-cartier-divisor-and-first-chern-class]], [[math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme]]

[F4] Under AC a finite-type scheme over a field is qcqs, indeed every open subset is quasi-compact. Finite locally free sheaves on a qcqs scheme have a finite common clopen rank partition, including rank-zero strata; the empty scheme has the empty partition. Only this partition assertion, not the flag construction in the supplier, is used. [[lem-adjudicate-febd1cc3219d-finite-type-field-qcqs]], [[lem-author-ab0a6fc202cb-finite-common-rank-strata]]

[F5] The cycle group $Z_d(X)$ is free abelian on the integral closed subschemes of dimension $d$. The Chow group is $A_d(X)=Z_d(X)/\operatorname{Rat}_d(X)$, where $\operatorname{Rat}_d(X)$ is generated by the principal-divisor cycles of nonzero rational functions on integral closed subschemes of dimension $d+1$. For equidimensional $X$ of dimension $n$, $\mathrm{CH}^i(X)=A^i(X)=A_{n-i}(X)$. An integral scheme is nonempty, reduced and irreducible; an irreducible space is not the union of two proper closed subsets. [[math:def-algebraic-cycle-and-cycle-group]], [[math:def-chow-group-of-cycles-mod-rational-equivalence]], [[math:def-integral-scheme]], [[math:def-irreducible-topological-space-and-subset]]

[F6] Smoothness of $X$ means smoothness of its structural morphism to $k$ and is preserved by open restriction. Finite type means locally of finite type and quasi-compact; the first condition is local on the source. A smooth equidimensional finite-type scheme has its graded Chow ring with unit and a functorial ring pullback for every morphism between such $k$-schemes, agreeing with flat pullback when flat. The ordinary Chern classes satisfy $c_i(f^*E)=f^*c_i(E)$. [[math:def-smooth-morphism-schemes]], [[math:def-locally-finite-type-and-finite-type-morphism]], [[math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme]], [[math:def-chern-classes-of-a-vector-bundle]]

[F7] Module pullback is $f^*E=\mathcal O_{X'}\otimes_{f^{-1}\mathcal O_X}f^{-1}E$, with sheaf tensor product obtained by sheafifying the tensor-product presheaf. Balanced maps define unique maps from module tensor products. These definitions supply the local coordinate identifications used below. [[math:def-pullback-module-ringed-spaces]], [[math:def-sheaf-tensor-product]], [[math:thm-universal-property-of-module-tensor-products]]

[A1] AC is retained for the qualified Chow, qcqs and common-rank-partition suppliers. No universe or bundle-class-set construction is invoked. [[math:def-axiom-of-choice]]

## Proof

1.1 By [F4], take the finite common clopen rank partition $X=\coprod_\alpha X_\alpha$ for $E,F$. An integral closed subscheme $W$ lies wholly in one stratum: if it met a stratum and its complement, their intersections with $W$ would express its irreducible space as the union of two proper closed subsets, contradicting [F5]. Conversely an integral closed subscheme of a stratum is closed in $X$, since that stratum is closed. Thus the bases in [F5] partition by strata and $Z_d(X)=\bigoplus_\alpha Z_d(X_\alpha)$. Every principal-divisor generator is supported on an integral $W$ in one stratum, with exactly the same local rings, rational functions and divisor coefficients there. Hence also $\operatorname{Rat}_d(X)=\bigoplus_\alpha\operatorname{Rat}_d(X_\alpha)$ and $A_d(X)=\bigoplus_\alpha A_d(X_\alpha)$. These identifications are restrictions, so Chow classes are determined by their restrictions. Each nonempty clopen stratum is smooth by [F6] and finite type: it is locally of finite type by open restriction and quasi-compact by [F4]. Each irreducible component of $X$ lies entirely in one stratum by the same irreducibility argument; hence the stratum has precisely the components of $X$ that it contains and is equidimensional of dimension $n$. Consequently the codimension gradings agree and [F1] applies on every stratum. The finite partition bounds the ranks, so the componentwise coefficient sequences define finite polynomials on $X$ uniquely. The empty partition gives zero Chow groups and the unique polynomial there; rank-zero strata use $c_t(0)=1$. This establishes the stated convention and reduces equality to the strata. [F1, F4, F5, F6, A1]

2.1 On each stratum [F3] and the line formula in [F2] give $c_t(\mathcal O)=1$. The case $m=0$ is the identity; applying Whitney to $0\to E\to E\oplus\mathcal O\to\mathcal O\to0$ and iterating $m$ times gives $c_t(E\oplus\mathcal O^m)=c_t(E)$, also when the rank of $E$ is zero. The displayed sequence has inclusion $e\mapsto(e,0)$ and projection $(e,a)\mapsto a$; on every open the inclusion identifies $E$ with the kernel, and $a\mapsto(0,a)$ splits the projection, verifying the Whitney hypothesis. The same holds for $F$, and step 1.1 assembles the equalities on $X$. For rank-two $E,F$, equality of their tuples means equality of the first two coefficients by [F1], while their third coefficients are zero by rank vanishing; thus their one-line stabilizations have equal first three coefficients, with common third coefficient zero. For the pullback assertion, on any bundle chart the definition in [F7] identifies $f^*\mathcal O^r$ with $\mathcal O_{X'}^r$: multiplication sends $b\otimes(a_1,\ldots,a_r)$ to $(ba_1,\ldots,ba_r)$, and the inverse sends $(b_j)$ to $\sum_j b_j\otimes e_j$, where $e_j$ are the coordinate vectors. These balanced maps are inverse by the tensor relations and commute with restriction, so give sheaf isomorphisms. The same coordinate maps for pairs identify $f^*(E\oplus\mathcal O^m)$ with $f^*E\oplus\mathcal O_{X'}^m$. Thus the pulled bundles are finite locally free with ranks pulled back from $X$. The inverse images of the rank strata are a finite clopen partition of $X'$; their nonempty members satisfy the same geometric hypotheses, by [F4] and [F6] as in step 1.1. Naturality and ring pullback in [F6] now pull every coefficient equality just proved to the corresponding equality on $X'$, preserving zero, and step 1.1 applied on $X'$ assembles them. The identical argument applies to $F$, proving all assertions. [F1, F2, F3, F4, F6, F7, A1, step 1.1, algebra] ∎
