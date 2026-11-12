---
title: Cycle coefficients and face intersections are open local
status: published
research_item: lem-author-89250b1d710c-cycle-open-locality
dependency_level: 0
sources:
  references:
    - title: "The Stacks Project, Lemma 26.11.1: generic points of schemes"
      url: https://stacks.math.columbia.edu/tag/01IS
      locator: Lemma 26.11.1, statement and proof
      statement: Every nonempty irreducible closed subset of a scheme has exactly one
        generic point.
      hypotheses: The ambient space is a scheme; irreducible subsets are nonempty.
      reading_limits: Read the displayed lemma and its proof. Its cited algebraic
        prerequisites were not independently reconstructed; no separatedness or
        finite-type hypothesis is imported.
    - title: "The Stacks Project, Lemma 26.12.4: reduced induced closed subscheme"
      url: https://stacks.math.columbia.edu/tag/01J3
      locator: Lemma 26.12.4, properties (a)-(b) and proof
      statement: Every closed subset of a scheme has a unique reduced closed subscheme
        structure with that underlying subset.
      hypotheses: An arbitrary scheme and a closed subset of its underlying
        topological space.
      reading_limits: Read the full displayed lemma and proof, including the
        radical-ideal affine description. The linked foundational algebra
        results were not independently audited.
    - title: "The Stacks Project, Lemma 28.5.6: subschemes of Noetherian schemes"
      url: https://stacks.math.columbia.edu/tag/02IK
      locator: Lemma 28.5.6, statement and proof hint
      statement: A locally closed subscheme of a Noetherian scheme is Noetherian.
      hypotheses: The ambient scheme is Noetherian and the immersion is locally closed.
      reading_limits: Read the displayed statement and proof hint. The source omits a
        full proof; quotient/localization and topological assertions in its hint
        are imported, not claimed as locally reconstructed.
    - title: "The Stacks Project, Lemma 28.5.7: finiteness of irreducible components"
      url: https://stacks.math.columbia.edu/tag/0BA8
      locator: Lemma 28.5.7, statement and proof
      statement: A Noetherian scheme has finitely many irreducible components.
      hypotheses: The scheme is Noetherian; no irreducibility, separatedness or
        equidimensionality is required.
      reading_limits: Read the displayed lemma and its short proof. The two linked
        topological premises were not independently audited. Only finiteness,
        not dimension or intersection multiplicity, is imported.
---

PDF p. 4: Smooth comparison with Bloch cycles

## Prerequisites

- [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)
- [math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)
- [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)
- [math:thm-jordan-holder-theorem-for-modules](https://alphabetamath.cc/item/thm-jordan-holder-theorem-for-modules)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)
- [math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction)
- [math:lem-subscheme-intersection-fibre-product](https://alphabetamath.cc/item/lem-subscheme-intersection-fibre-product)
- [math:lem-tensor-ring-presentations-for-base-change](https://alphabetamath.cc/item/lem-tensor-ring-presentations-for-base-change)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [` The Stacks Project, Lemma 26.11.1: generic points of schemes · Lemma 26.11.1, statement and proof `](https://stacks.math.columbia.edu/tag/01IS)
- [` The Stacks Project, Lemma 26.12.4: reduced induced closed subscheme · Lemma 26.12.4, properties (a)-(b) and proof `](https://stacks.math.columbia.edu/tag/01J3)
- [` The Stacks Project, Lemma 28.5.6: subschemes of Noetherian schemes · Lemma 28.5.6, statement and proof hint `](https://stacks.math.columbia.edu/tag/02IK)
- [` The Stacks Project, Lemma 28.5.7: finiteness of irreducible components · Lemma 28.5.7, statement and proof `](https://stacks.math.columbia.edu/tag/0BA8)


## Statement
On a noetherian scheme $Y$, let $Z_*(Y)$ be the free abelian group on integral closed subschemes with their reduced structures; a cycle is a finite integral linear combination of these generators. For an open subscheme $V\subset Y$, the rule $[W]\mapsto[W\cap V]$ when $W\cap V\ne\varnothing$, and $[W]\mapsto0$ otherwise, defines a restriction homomorphism $\rho_V:Z_*(Y)\to Z_*(V)$. Equality of cycles can be tested on any open cover of $Y$.

For a closed subset $Z\subset |Y|$ and a prescribed integer $r\geq0$, the condition that every irreducible component $T$ of $Z$ has codimension $r$ in $Y$ is open local on $Y$, including when $Z$ is the underlying subset of an intersection. Here components carry reduced structures, $\eta_T$ denotes the unique generic point, $\mathcal O_{Y,y}$ denotes the stalk of the structure sheaf at $y$, and codimension means $\operatorname{codim}_Y(T)=\dim\mathcal O_{Y,\eta_T}$, with Krull dimension defined by chains of prime ideals. Empty intersections satisfy this condition vacuously.

In particular, let $k$ be a field, $X$ a scheme of finite type over $k$, $n\geq1$, and $0\leq i\leq n$. All products below are over $\operatorname{Spec}k$. Set $\Delta^m=\operatorname{Spec}(k[t_0,\ldots,t_m]/(\sum_{a=0}^m t_a-1))$ for $m\geq0$, and put $Y=X\times_k\Delta^n$. The symbol $t_i$ on $Y$ is the pullback of the indicated coordinate function. The closed face $H_i=V(t_i)\subset Y$ is identified with $X\times_k\Delta^{n-1}$ by deleting the $i$th coordinate and keeping the others in increasing order. For an integral closed subscheme $W\subset Y$, let $T$ range over the irreducible components of the scheme-theoretic intersection $W\cap H_i$. Whenever each indicated quotient module has a finite composition series, define the cycle on $H_i$ by
$$D_i[W]=\sum_T\ell_{\mathcal O_{W,\eta_T}}(\mathcal O_{W,\eta_T}/(t_i))[T].$$
A composition series of an $R$-module $M$ is a finite strict chain from $0$ to $M$ with simple successive quotients; $\ell_R(M)$ is its number of factors, independent of the series, and $\ell_R(0)=0$. The empty face intersection has cycle zero. For every open $U\subset X$, put $V_U=U\times_k\Delta^n$ and $H_{i,U}=H_i\cap V_U=U\times_k\Delta^{n-1}$. The restricted quotient lengths exist whenever the original ones do, and
$$\rho_{H_{i,U}}(D_i[W])=D_i(\rho_{V_U}[W]).$$
The rule extends linearly to finite signed cycles whose generators have the stated finite lengths. No nonzerodivisor condition on the image of $t_i$ in $\mathcal O_{W,\eta_T}$ is asserted or needed for this conditional compatibility. No separatedness or pure-dimension assumption is imposed.

## Statement references

[math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset)

[math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)

[math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)

[math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)

[math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)

[math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf)

[math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)

[math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

[math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)

[math:thm-jordan-holder-theorem-for-modules](https://alphabetamath.cc/item/thm-jordan-holder-theorem-for-modules)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)

[math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction)

[math:lem-subscheme-intersection-fibre-product](https://alphabetamath.cc/item/lem-subscheme-intersection-fibre-product)

[math:lem-tensor-ring-presentations-for-base-change](https://alphabetamath.cc/item/lem-tensor-ring-presentations-for-base-change)

[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)

## Facts & Assumptions

**Given:** The schemes, closed subsets, indices, cycles and open covers specified in the Statement; the face formula is used only for generators with finite quotient-module lengths at every intersection component.

**Goal:** Prove local detection of equality and codimension, and compatibility of the conditional face cycles with open restriction.

[F1] A function on generators extends uniquely to a homomorphism from a free abelian group. [math:def-free-abelian-group](https://alphabetamath.cc/item/def-free-abelian-group)

[F2] Nonempty irreducible closed subsets of a scheme have unique generic points, and closed subsets have unique reduced induced closed structures. These are the two imported premises recorded in the External input section, references 0 and 1.

[F3] A closed subscheme is specified by a closed immersion. An integral scheme is nonempty, reduced and irreducible, with irreducible meaning that it is not a union of two proper closed subsets. A locally closed subscheme of a noetherian scheme is noetherian, and a noetherian scheme has finitely many irreducible components. These are the imported premises recorded in the External input section, references 2 and 3. The relevant notions are supplied by [math:def-irreducible-topological-space-and-subset](https://alphabetamath.cc/item/def-irreducible-topological-space-and-subset), [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes), [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme), [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme) and [math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset).

[F4] Module length is the number of simple factors in a finite composition series, with independence of the chosen series furnished by the module Jordan–Hölder theorem. [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module) [math:thm-jordan-holder-theorem-for-modules](https://alphabetamath.cc/item/thm-jordan-holder-theorem-for-modules)

[F5] An open subscheme has the restricted structure sheaf; its local ring at a surviving point is computed from the same germs, since neighbourhoods inside that open suffice. Codimension in the Statement uses Krull dimension of this ring. [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme) [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace) [math:def-stalk-of-presheaf](https://alphabetamath.cc/item/def-stalk-of-presheaf) [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)

[F6] Scheme fibre products exist, restricting either factor to an open gives the inverse-image open in the product, and scheme-theoretic intersections are fibre products cut out by sums of ideal sheaves. [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist) [math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction) [math:lem-subscheme-intersection-fibre-product](https://alphabetamath.cc/item/lem-subscheme-intersection-fibre-product)

[F7] The base-scheme and finite-type conventions give affine charts of $X$ by finite-type $k$-algebras. Product charts are tensor products; polynomial and quotient presentations commute with base extension. Finite-type algebras over noetherian rings are noetherian. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist) [math:lem-tensor-ring-presentations-for-base-change](https://alphabetamath.cc/item/lem-tensor-ring-presentations-for-base-change) [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)

## External input

Reference 0 imports generic-point existence and uniqueness from [Stacks, Lemma 26.11.1](https://stacks.math.columbia.edu/tag/01IS) for arbitrary schemes. Reference 1 imports the reduced induced closed-subscheme existence and uniqueness assertion of [Stacks, Lemma 26.12.4](https://stacks.math.columbia.edu/tag/01J3). Reference 2 imports noetherianity of locally closed subschemes from [Stacks, Lemma 28.5.6](https://stacks.math.columbia.edu/tag/02IK). Reference 3 imports finiteness of components from [Stacks, Lemma 28.5.7](https://stacks.math.columbia.edu/tag/0BA8). These are cited premises, with precise hypotheses and reading limits in sources.references. The restriction, codimension and length-compatibility arguments below are local arguments, rather than imported conclusions.

## Proof

**Given:** The schemes, closed subsets, indices, cycles and open covers specified in the Statement; the face formula is used only for generators with finite quotient-module lengths at every intersection component.

Reference 0 imports generic-point existence and uniqueness from [Stacks, Lemma 26.11.1](https://stacks.math.columbia.edu/tag/01IS) for arbitrary schemes. Reference 1 imports the reduced induced closed-subscheme existence and uniqueness assertion of [Stacks, Lemma 26.12.4](https://stacks.math.columbia.edu/tag/01J3). Reference 2 imports noetherianity of locally closed subschemes from [Stacks, Lemma 28.5.6](https://stacks.math.columbia.edu/tag/02IK). Reference 3 imports finiteness of components from [Stacks, Lemma 28.5.7](https://stacks.math.columbia.edu/tag/0BA8). These are cited premises, with precise hypotheses and reading limits in sources.references. The restriction, codimension and length-compatibility arguments below are local arguments, rather than imported conclusions.

1.1 In an irreducible space every two nonempty opens meet, since disjoint opens would express the space as the union of their two proper closed complements. Thus a nonempty open is dense and irreducible: its nonempty open subsets also meet. A nonempty open of an integral scheme remains reduced because its local rings are unchanged by [F5], so it is integral. By [F2], its generic point is the original generic point: every nonempty open contains that point, as a proper closed complement cannot contain a point whose closure is the whole space. Hence $W\cap V$ is an integral closed subscheme of $V$ when nonempty. Taking its topological closure in $Y$ recovers $|W|$, and the unique reduced closed structure in [F2] recovers $W$ itself. Distinct generators therefore cannot have the same nonempty restriction, and [F1] extends the generator rule to $\rho_V$. [F1, F2, F3, F5, construct]

1.2 On an affine chart $\operatorname{Spec}B\subset X$, [F6] and [F7] identify the product chart with $\operatorname{Spec}(B[t_0,\ldots,t_n]/(\sum_a t_a-1))$. Deleting coordinate $i$ after setting $t_i=0$ gives the claimed ordered face identification; eliminating any one remaining coordinate realizes that quotient as a polynomial ring in $n-1$ variables over $B$. These substitutions fix coefficients and the ordered remaining coordinates, so commute with restriction and agree on overlapping charts. A field is noetherian because its only ideals are $0$ and itself. The finite-type, quasi-compact hypothesis on $X$ supplies finitely many such charts with each $B$ finite type over $k$. Their product coordinate rings are finite type over $k$, hence noetherian by [F7], so $Y$ is noetherian. The intersection and open-restriction formulas in [F6] identify the restricted closed subscheme with $(W\cap H_i)\cap V_U=(W\cap V_U)\cap H_{i,U}$, retaining the same parameter $t_i$. By [F3], $W\cap H_i$ is noetherian and has finitely many components. [F3, F6, F7, given, algebra]

2.1 If a cycle has a nonzero coefficient at $W$, some member of any open cover contains $\eta_W$. The corresponding restriction preserves that coefficient without collision with another generator by step 1.1. A cycle restricting to zero on the cover is consequently zero. Apply this to the difference of two cycles to detect equality. [given, step 1.1, algebra]

2.2 Let $Z\subset |Y|$ be closed. The closure of any irreducible subset is irreducible, since any decomposition of the closure into two closed subsets restricts to such a decomposition of the original subset, which must lie in one, forcing its closure into that same subset. If a component $T$ of $Z$ meets $V$, then $T\cap V$ is nonempty, irreducible and dense in $T$ by step 1.1. Any irreducible closed subset of $Z\cap V$ containing it has irreducible closure in $Z$ containing $T$, hence equal to $T$ by maximality; taking its trace on $V$ gives equality with $T\cap V$. Conversely, if $D$ is a component of $Z\cap V$, its closure $C$ in $Z$ is irreducible. For any irreducible closed $E\subset Z$ containing $C$, the nonempty open $E\cap V$ is irreducible and contains $D$, so it equals $D$ by maximality; its density in $E$ gives $E=C$. Thus $C$ is a component of $Z$ and $C\cap V=D$. These correspondences are inverse, with the same generic points by [F2] and step 1.1. [F2, F3, step 1.1]

3.1 At each surviving generic point $\eta_T$, [F5] identifies $\mathcal O_{V,\eta_T}$ with $\mathcal O_{Y,\eta_T}$ as rings: replacing a neighbourhood by its intersection with $V$ changes no germ. The prime-ideal chains and hence Krull dimensions agree. By the codimension convention in the Statement and the component correspondence in step 2.2, the prescribed codimension condition restricts to each open. Conversely every component has a generic point lying in some member of a covering family, so the local conditions imply the global one. This includes a scheme-theoretic intersection by applying the argument to its underlying closed subset. [F5, given, step 2.2]

4.1 By steps 2.2 and 1.2 the components surviving on $H_{i,U}$ are exactly the nonempty $T\cap V_U$. At their generic points, [F5] gives $\mathcal O_{W,\eta_T}=\mathcal O_{W\cap V_U,\eta_T}$ and identifies $t_i$ on both sides. More generally, transporting scalars along a ring isomorphism carrying one parameter to the other identifies the parameter-quotient modules and gives inverse bijections on their submodule chains. Strict inclusions and simple quotients are preserved, since a proper intermediate submodule would transport back to one. Thus any finite composition series transports with the same number of factors, which equals the well-defined module length by [F4]. Every surviving coefficient is unchanged. Components missing the open contribute zero on both sides; if $W\cap V_U$ is empty the entire identity is zero. Equality of the finite cycles follows coefficientwise and extends by [F1] to their finite signed sums. The argument also permits a zero parameter whenever the quotient has finite length, and proves all the asserted compatibilities without an additional geometric hypothesis. [F1, F4, F5, step 1.1, step 2.2, step 1.2, algebra] ∎
