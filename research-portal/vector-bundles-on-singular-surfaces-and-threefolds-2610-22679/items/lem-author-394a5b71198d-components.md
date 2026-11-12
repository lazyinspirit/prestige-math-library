---
id: lem-author-394a5b71198d-components
kind: lemma
title: Smooth affine components and gluing a trivial line
status: published
domain: mathematics
deps:
  - math:thm-regular-equals-smooth-over-perfect-field
  - math:thm-regular-local-rings-are-domains-and-cohen-macaulay
  - math:lem-noetherian-space-has-finitely-many-irreducible-components
  - math:def-chow-group-of-cycles-mod-rational-equivalence
  - thm-serre-affine-splitting
  - math:def-axiom-of-choice
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - math:def-algebraically-closed-field
  - math:def-smooth-morphism-classical
  - math:def-affine-scheme
  - math:def-affine-open-subscheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated
  - lem-author-14463ef2f4e5-finite-type-dimension
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:cor-affine-scheme-quasi-compact
  - math:thm-irreducible-closed-subsets-and-prime-ideals
  - math:thm-irreducible-components-and-minimal-primes
  - math:thm-prime-spectrum-of-a-localisation-bijection
  - math:thm-stalk-structure-sheaf-prime-localization
  - math:lem-spectrum-localization-open-immersion
  - math:def-sheaf-on-topological-space
  - math:def-module-on-ringed-space
  - math:def-locally-free-sheaf-finite-rank
  - math:def-chern-classes-of-a-vector-bundle
  - math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme
  - math:lem-chern-class-naturality-additivity-and-splitting
dependency_roles:
  math:thm-regular-equals-smooth-over-perfect-field: mathematical-premise
  math:thm-regular-local-rings-are-domains-and-cohen-macaulay: mathematical-premise
  math:lem-noetherian-space-has-finitely-many-irreducible-components: mathematical-premise
  math:def-chow-group-of-cycles-mod-rational-equivalence: mathematical-premise
  thm-serre-affine-splitting: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-smooth-morphism-classical: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated: mathematical-premise
  lem-author-14463ef2f4e5-finite-type-dimension: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:thm-irreducible-closed-subsets-and-prime-ideals: mathematical-premise
  math:thm-irreducible-components-and-minimal-primes: mathematical-premise
  math:thm-prime-spectrum-of-a-localisation-bijection: mathematical-premise
  math:thm-stalk-structure-sheaf-prime-localization: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-chern-classes-of-a-vector-bundle: mathematical-premise
  math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme: mathematical-premise
  math:lem-chern-class-naturality-additivity-and-splitting: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 8
formulation_deps:
  - math:def-axiom-of-choice
  - math:def-algebraically-closed-field
  - math:def-smooth-morphism-classical
  - math:def-affine-scheme
  - math:def-affine-open-subscheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-sheaf-on-topological-space
  - math:def-module-on-ringed-space
  - math:def-locally-free-sheaf-finite-rank
  - math:def-chow-group-of-cycles-mod-rational-equivalence
  - math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme
  - math:def-chern-classes-of-a-vector-bundle
  - math:lem-chern-class-naturality-additivity-and-splitting
argument_deps:
  - math:thm-regular-equals-smooth-over-perfect-field
  - math:thm-regular-local-rings-are-domains-and-cohen-macaulay
  - math:lem-noetherian-space-has-finitely-many-irreducible-components
  - math:def-chow-group-of-cycles-mod-rational-equivalence
  - thm-serre-affine-splitting
  - math:def-axiom-of-choice
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - math:def-algebraically-closed-field
  - math:def-smooth-morphism-classical
  - math:def-affine-scheme
  - math:def-affine-open-subscheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated
  - lem-author-14463ef2f4e5-finite-type-dimension
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:cor-affine-scheme-quasi-compact
  - math:thm-irreducible-closed-subsets-and-prime-ideals
  - math:thm-irreducible-components-and-minimal-primes
  - math:thm-prime-spectrum-of-a-localisation-bijection
  - math:thm-stalk-structure-sheaf-prime-localization
  - math:lem-spectrum-localization-open-immersion
  - math:def-sheaf-on-topological-space
  - math:def-module-on-ringed-space
  - math:def-locally-free-sheaf-finite-rank
  - math:def-chern-classes-of-a-vector-bundle
  - math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme
  - math:lem-chern-class-naturality-additivity-and-splitting
---

## Statement
Assume AC. A nonempty smooth affine finite-type scheme $X$ over an algebraically closed field $k$ has a finite disjoint decomposition $X=\coprod_jX_j$ into integral open and closed smooth affine finite-type $k$-schemes, with their restricted structure sheaves. Here integral means nonempty, irreducible and reduced: irreducible means not a union of two proper closed subsets, and reduced means that the local rings have no nonzero nilpotents. Put $d=\dim X=\max_j d_j<\infty$ and $d_j=\dim X_j$. Dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets; pure dimension means that all irreducible components have the same dimension. A vector bundle means a finite locally free sheaf, and a trivial line means $\mathcal O_X$. Bundles, bundle isomorphisms and finite direct sums are given componentwise. Define $\mathrm{CH}^i(X)=\bigoplus_j A_{d_j-i}(X_j)=\bigoplus_j\mathrm{CH}^i(X_j)$, where $A_m$ is the Chow group of $m$-dimensional cycles modulo rational equivalence, and give this graded group the componentwise Chow-ring product. For pure-dimensional $X$ this is the usual integral Chow ring. Chern classes are given componentwise, including $c_0(E)=1$ and the rank-zero convention $c(0)=1$, $c_i(0)=0$ for $i>0$. If a bundle of constant rank $d$ restricts to a bundle with a trivial line summand on every $X_j$, these decompositions glue to a trivial line summand on $X$. For $d_j<d$, its restriction always splits off a line.

## Statement references

[[math:def-algebraically-closed-field]]

[[math:def-smooth-morphism-classical]]

[[math:def-affine-scheme]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:def-locally-free-sheaf-finite-rank]]

[[math:def-chow-group-of-cycles-mod-rational-equivalence]]

[[math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme]]

[[math:def-chern-classes-of-a-vector-bundle]]

[[math:lem-chern-class-naturality-additivity-and-splitting]]

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, and a nonempty smooth affine finite-type $k$-scheme $X$, together with the bundles in the Statement. No perfect K-theory construction or universe assumption is used here.

**Goal:** Establish the component decomposition, Chow and Chern conventions, and the splitting claims.

[A1] AC is retained through the regularity, component, dimension, Chow and Serre suppliers; the gluing construction below makes no additional infinite choice. [[math:def-axiom-of-choice]]

[F1] An algebraically closed field is perfect. Smooth finite-type schemes over a perfect field are regular, meaning locally noetherian with regular local rings; regular local rings are domains. Smoothness is local on the source. [[math:def-algebraically-closed-field]], [[math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]], [[math:def-smooth-morphism-classical]], [[math:thm-regular-equals-smooth-over-perfect-field]], [[math:thm-regular-local-rings-are-domains-and-cohen-macaulay]]

[F2] An affine finite-type $k$-scheme has a finitely generated coordinate algebra; finite type means locally of finite type and quasi-compact, and an algebra of finite type means a finitely generated algebra. Affine schemes are quasi-compact under AC. A $k$-algebra generated by $n$ elements is noetherian of Krull dimension at most $n$, where Krull dimension counts strict prime chains. Its spectrum is topologically noetherian. The correspondence between nonempty irreducible closed subsets and prime ideals reverses inclusion, identifying spectrum dimension with Krull dimension. A noetherian affine scheme means the spectrum of a noetherian ring. [[math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]], [[math:def-locally-finite-type-and-finite-type-morphism]], [[math:cor-affine-scheme-quasi-compact]], [[lem-author-14463ef2f4e5-finite-type-dimension]], [[math:thm-noetherian-ring-has-noetherian-spectrum]], [[math:thm-irreducible-closed-subsets-and-prime-ideals]]

[F3] A noetherian space has finitely many irreducible components covering it. In an affine spectrum these components correspond to minimal primes. Primes of a localization correspond bijectively, preserving inclusion, to primes disjoint from its denominators, and the stalk at $\mathfrak p$ is the prime localization. [[math:lem-noetherian-space-has-finitely-many-irreducible-components]], [[math:thm-irreducible-components-and-minimal-primes]], [[math:thm-prime-spectrum-of-a-localisation-bijection]], [[math:thm-stalk-structure-sheaf-prime-localization]]

[F4] An affine scheme is a ring spectrum with its structure sheaf, with coordinate ring its global sections. Open subschemes have the restricted structure sheaf, and $D(e)\subseteq\operatorname{Spec}A$ is the affine open subscheme $\operatorname{Spec}A_e$. [[math:def-affine-scheme]], [[math:def-affine-open-subscheme]], [[math:lem-spectrum-localization-open-immersion]]

[F5] Sheaves have locality and unique gluing, including on the empty set. Sheaves of modules and their maps have compatible sectionwise module operations. A bundle is finite locally free; its rank is locally constant and restriction to an open subscheme preserves local freeness. The zero bundle has rank zero. [[math:def-sheaf-on-topological-space]], [[math:def-module-on-ringed-space]], [[math:def-locally-free-sheaf-finite-rank]]

[F6] Chow groups are cycle groups modulo the subgroup generated by principal divisors on integral closed subschemes. On a pure-dimensional scheme of dimension $n$, the codimension convention is $A^i=A_{n-i}$. [[math:def-chow-group-of-cycles-mod-rational-equivalence]]

[F7] Smooth equidimensional finite-type schemes have integral Chow rings, whose pullbacks are ring maps and agree with flat pullback for flat maps; on open equidimensional components the product is componentwise. For a bundle of constant positive rank on such a scheme, the quotient-projective-bundle Chern classes are natural under morphisms of smooth equidimensional schemes. The zero-bundle convention is $c(0)=1$ and $c_i(0)=0$ for $i>0$, and $c_0(E)=1$ for every bundle. For a finite locally free sheaf whose rank is only locally constant, use the rank-locus convention: its classes are defined componentwise on the finitely many open-and-closed constant-rank loci by the preceding constant-rank and zero-bundle definitions. [[math:thm-intersection-product-and-chow-ring-of-a-smooth-scheme]], [[math:def-chern-classes-of-a-vector-bundle]], [[math:lem-chern-class-naturality-additivity-and-splitting]]

[F8] Under AC, on a nonempty noetherian affine scheme of finite dimension $e\geq0$, a bundle of constant rank $r>e$ splits as $\mathcal O\oplus F$, with $F$ a bundle of rank $r-1$. [[thm-serre-affine-splitting]]

## Proof

1.1 Write $X=\operatorname{Spec}A$. By [F2], $A$ is finitely generated over $k$, noetherian and of finite dimension, and its spectrum is noetherian with the same dimension. By [F1], $k$ is perfect and all local rings of $X$ are domains. Suppose two distinct minimal primes $\mathfrak q_1,\mathfrak q_2$ of $A$ lie in a prime $\mathfrak p$. Their extensions are distinct minimal primes of $A_{\mathfrak p}$ by [F3]: a smaller prime would contract to a prime smaller than the corresponding minimal prime of $A$, and contraction recovers each $\mathfrak q_i$. This contradicts the fact that the domain $A_{\mathfrak p}$ has just the zero minimal prime. Thus distinct irreducible components do not meet. They form a finite cover by [F3], so each is closed and open. For each component $C$, glue the sections $1$ on $C$ and $0$ on its complement by [F5]. By [F4] this gives $e\in A$ with $e^2=e$, and $C=D(e)$: its germs are $1$ on $C$ and $0$ on the complement, using the stalk description in [F3]. Therefore its restricted scheme $X_j$ is $\operatorname{Spec}A_e$ by [F4]. Since an invertible idempotent equals $1$, every fraction $a/e^m$ in $A_e$ equals $a/1$; hence $A\to A_e$ is surjective, and $A_e$ is again finitely generated over $k$. By [F2], $X_j$ is noetherian, affine and of finite dimension; finite generation gives local finite type, and affine quasi-compactness in [F2] gives finite type. It is smooth by source locality in [F1]. Its local rings are those of $X$, hence have no nonzero nilpotents, and its underlying space is an irreducible component; it is nonempty and thus integral in the stated sense. Every irreducible closed subset of $X$ lies in one component, since it cannot be a union of finitely many proper closed intersections with the components. Each chain lies in that component, and chains in the closed component are chains in $X$. Consequently $d=\max_j d_j<\infty$. Each $X_j$ is itself pure-dimensional, having a single irreducible component. [A1, F1, F2, F3, F4, F5, given, construct]

2.1 For sheaves of modules $G_j$ on the components, put $G(U)=\prod_jG_j(U\cap X_j)$ with coordinatewise operations and restrictions. By [F5] this is a sheaf of $\mathcal O_X$-modules. Locality and unique gluing identify any sheaf on $X$ with this construction on its restrictions; sectionwise maps and their inverses are also recovered coordinatewise. Local freeness is local on the open components, so bundles, their isomorphisms and finite direct sums are given componentwise. In particular, isomorphisms $E|_{X_j}\cong\mathcal O_{X_j}\oplus F_j$ glue with the product sheaf of the $F_j$, which is locally free, to $E\cong\mathcal O_X\oplus F$. Every integral closed subscheme lies in one component, as does the integral closed subscheme carrying each rational-function relation. Hence both the cycle groups and the rational-equivalence subgroups in [F6] split over the components; taking their quotients gives the asserted Chow-group decomposition in each dimension and then the stated componentwise codimension grading. By step 1.1 each $X_j$ satisfies the smooth, finite-type and pure-dimensional hypotheses of [F7], so its Chow product and Chern classes are defined. Give the finite direct sum the coordinatewise product. If $X$ has pure dimension $d$, all $d_j=d$, and the group decomposition is restriction to the open components. Those restriction maps are ring maps by [F7], so the group isomorphism identifies this product with the usual Chow-ring product. A bundle has constant rank $r_j$ on each irreducible $X_j$: by [F5] the rank is locally constant, and two nonempty rank loci would be disjoint nonempty open subsets of an irreducible space, which is impossible. Thus [F7] defines its Chern classes on each $X_j$, using the zero-bundle convention if $r_j=0$. For pure-dimensional $X$, put $X_r=\coprod_{r_j=r}X_j$ with its restricted structure sheaf, omitting empty loci. There are finitely many such rank loci, each open and closed, smooth, equidimensional of dimension $d$, and of finite type: step 1.1 supplies these properties on each of its finitely many components, and their finite union is quasi-compact. The restriction $E|_{X_r}$ has constant rank $r$, so the usual variable-rank convention in [F7] defines $c_i(E)$ by its classes on these loci. When $r>0$, apply the constant-rank naturality in [F7] to the inclusion $X_j\to X_r$, a morphism of smooth equidimensional finite-type $k$-schemes, to obtain $c_i(E|_{X_r})|_{X_j}=c_i(E|_{X_j})$. When $r=0$, the same equality follows from the zero-bundle convention and preservation of the Chow-ring unit by restriction. The rank-locus decomposition followed by the component decomposition is the original component decomposition, so the componentwise tuple of Chern classes agrees with this usual variable-rank convention for pure-dimensional $X$. For general $X$, take the tuple of the usual classes on the $X_j$ as the stated componentwise convention. In either case $c_0$ is the tuple of units. Finally, for a constant-rank-$d$ bundle and $d_j<d$, step 1.1 supplies all hypotheses of [F8]: $X_j$ is nonempty, noetherian, affine, and of finite dimension $d_j$, while restriction has constant rank $d>d_j$. Thus its restriction splits off a trivial line. Together with the preceding gluing argument this proves every asserted splitting claim, also when some components have dimension zero. If $d=0$, there are no components with $d_j<d$, so this last assertion is vacuous. [A1, F5, F6, F7, F8, step 1.1, construct] ∎
