---
title: External finite-type dimension, rational-point and etale-fiber inputs
status: published
research_item: thm-author-fc2380accb47-finite-type-geometric-input
dependency_level: 0
sources:
  references:
    - title: The Stacks Project, finite-type dimensions and image closures
      url: https://stacks.math.columbia.edu/tag/06LF
      locator: "Section 33.20: Definition 33.20.1 and the following Noetherian
        observation; Lemma 33.20.2; Lemma 33.20.3(2), (4), (6), (10); Lemma
        33.20.4(2), especially its displayed transcendence-degree calculation;
        Lemma 33.20.5."
      statement: Finite-type dimension/codimension is computed by transcendence
        degrees; image closure has dimension at most the source; product
        dimensions add. These give dimensions of locally trivial affine bundles
        and bounds for projected incidence schemes.
      hypotheses: Locally algebraic schemes over a field; source irreducible
        in33.20.4(2), applied componentwise when necessary; finite-type schemes
        in this application have finitely many components and finite dimension.
      reading_limits: Checked these statements and their displayed proofs in Section
        33.20. The underlying commutative-algebra, dimension-of-fibres and
        flatness references are imported, not reconstructed. Product dimension
        is used for nonempty factors; empty loci are handled separately.
    - title: The Stacks Project, closed points on finite-type field schemes
      url: https://stacks.math.columbia.edu/tag/0478
      locator: Lemma 33.14.1 (tag 0478), both assertions and complete proof.
      statement: Schemes locally of finite type over a field are Jacobson and
        closed-point residue fields are algebraic over that field. Thus nonempty
        finite-type opens over algebraically closed k have k-rational closed
        points.
      hypotheses: Locally finite type over a field; algebraic closure is used only to
        identify closed-point residue fields with k.
      reading_limits: Checked both assertions and the proof reducing to affine Hilbert
        Nullstellensatz. That earlier theorem was not reconstructed.
        Rational-point existence is applied to nonempty opens over the
        algebraically closed base field.
    - title: The Stacks Project, etale finite-type algebras over fields
      url: https://stacks.math.columbia.edu/tag/00U0
      locator: Definition 10.143.1; Lemma 10.143.3(7) (tag 00U2), including proof
        paragraph (7); Lemma 10.143.4 (tag 00U3), complete statement and proof.
      statement: For a finite-type algebra B over any field L, vanishing Omega_(B/L)
        implies B is etale over L. Such an algebra is a finite product of finite
        separable field extensions. This fixes actual smooth scheme structure,
        including geometric reducedness, from the differential calculation.
      hypotheses: Finite-type algebra over a field, all characteristics. This is not a
        claim that Omega=0 implies etale for arbitrary base rings. The empty
        algebra corresponds to the empty scheme.
      reading_limits: Checked the indicated definition, Lemma 10.143.3 and proof
        paragraph (7), and the complete statement and proof of Lemma 10.143.4.
        The smooth-algebra foundations, Lemma 10.140.3 and other cited
        antecedents remain imported. No reading of Lemma 10.106.3 is asserted
        for this repair.
    - title: The Stacks Project, affine and geometric meanings of etale
      url: https://stacks.math.columbia.edu/tag/02GH
      locator: Section 29.37, Definition 29.37.1 and the immediately following
        smooth-relative-dimension-zero equivalence; Lemma 29.37.7(1), complete
        statement and direct proof.
      statement: The affine ring-map definition of an etale scheme morphism agrees
        with smoothness of relative dimension zero. A scheme etale over a field
        is a disjoint union of spectra of finite separable extensions; a
        finite-type such scheme has only finitely many components.
      hypotheses: Morphisms of schemes; for the last assertion the base is a field and
        the scheme is of finite type. Applied here to Spec B, with B a
        finite-type field algebra. The empty scheme is allowed.
      reading_limits: Checked Definition 29.37.1, its following equivalence and the
        direct proof of Lemma 29.37.7. The cited general smoothness foundations
        are imported. This bridge supplies the scheme interpretation of the
        algebra result, not an additional generic-smoothness assertion.
external_input: true
---

PDF p. 15: Theorem6.7: rank-three Bertini functional

## Prerequisites

- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:def-ag-universal-algebraic-differentials](https://alphabetamath.cc/item/def-ag-universal-algebraic-differentials)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring)
- [math:def-algebraically-independent-finite-tuples-over-a-field](https://alphabetamath.cc/item/def-algebraically-independent-finite-tuples-over-a-field)
- [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-extension-degree-and-finite-extension](https://alphabetamath.cc/item/def-extension-degree-and-finite-extension)
- [math:def-separable-elements-and-separable-extensions](https://alphabetamath.cc/item/def-separable-elements-and-separable-extensions)
- [math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes)
- [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)
- [math:def-reduced-affine-scheme](https://alphabetamath.cc/item/def-reduced-affine-scheme)
- [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)
- [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)
- [` The Stacks Project, finite-type dimensions and image closures · Section 33.20: Definition 33.20.1 and the following Noetherian observation; Lemma 33.20.2; Lemma 33.20.3(2), (4), (6), (10); Lemma 33.20.4(2), especially its displayed transcendence-degree calculation; Lemma 33.20.5. `](https://stacks.math.columbia.edu/tag/06LF)
- [` The Stacks Project, closed points on finite-type field schemes · Lemma 33.14.1 (tag 0478), both assertions and complete proof. `](https://stacks.math.columbia.edu/tag/0478)
- [` The Stacks Project, etale finite-type algebras over fields · Definition 10.143.1; Lemma 10.143.3(7) (tag 00U2), including proof paragraph (7); Lemma 10.143.4 (tag 00U3), complete statement and proof. `](https://stacks.math.columbia.edu/tag/00U0)
- [` The Stacks Project, affine and geometric meanings of etale · Section 29.37, Definition 29.37.1 and the immediately following smooth-relative-dimension-zero equivalence; Lemma 29.37.7(1), complete statement and direct proof. `](https://stacks.math.columbia.edu/tag/02GH)

## Statement
Import the exact finite-type geometric facts in the source record: dimension/codimension and image-closure inequalities for finite-type field schemes; product dimensions; the Jacobson and closed-point residue-field facts; and the implication $\Omega_{B/L}=0\Rightarrow B$ finite étale for $B$ finite type over a field $L$. Consequently over algebraically closed $L$, $\operatorname{Spec}B$ is a finite disjoint union of reduced rational points. No characteristic-zero generic-smoothness theorem is part of this input.

## Formulation
The structure morphism to $\operatorname{Spec}k$ makes $X$ a finite-type $k$-scheme in the sense of [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism). Finite-type and module-finite algebras have the meanings in [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras). The module $\Omega_{B/L}$ is the module of Kähler differentials in [math:def-ag-universal-algebraic-differentials](https://alphabetamath.cc/item/def-ag-universal-algebraic-differentials). All rings are commutative and unital; the zero algebra is allowed.

Scheme dimension is the chain dimension of the underlying Noetherian space, with $\dim\varnothing=-\infty$, as in [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space); dimensions of local rings are Krull dimensions as in [math:def-krull-dimension-of-a-ring](https://alphabetamath.cc/item/def-krull-dimension-of-a-ring). Write $\dim_x X=\inf_{x\in V}\dim V$, over open neighbourhoods $V$. For irreducible closed $Z$ in irreducible $X$, codimension is the supremum of lengths of strict chains of irreducible closed subsets from $Z$ to $X$; in a reducible scheme apply this within the specified containing component. For a finitely generated field extension $K/k$, $\operatorname{trdeg}_k K$ is the supremum of sizes of finite algebraically independent subsets, using [math:def-algebraically-independent-finite-tuples-over-a-field](https://alphabetamath.cc/item/def-algebraically-independent-finite-tuples-over-a-field). These are formulation conventions, not new dimension theorems.

A closed point means a point whose singleton is closed, and its residue field is $\kappa(x)$ from [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point). Here Jacobson means that closed points are dense in every closed subset. A rational point is a morphism $\operatorname{Spec}k\to X$ over $k$; a closed point is rational when its residue field is $k$. Algebraically closed fields have the meaning in [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field), and finite and separable field extensions have the meanings in [math:def-extension-degree-and-finite-extension](https://alphabetamath.cc/item/def-extension-degree-and-finite-extension) and [math:def-separable-elements-and-separable-extensions](https://alphabetamath.cc/item/def-separable-elements-and-separable-extensions).

An algebra is finite étale over $L$ when its spectrum is finite and étale over $\operatorname{Spec}L$, using [math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes) and [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes). Reduced affine schemes have the meaning in [math:def-reduced-affine-scheme](https://alphabetamath.cc/item/def-reduced-affine-scheme); the empty spectrum of the zero algebra is permitted. Scheme products are over the indicated field: their universal property is [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property), and their existence is supplied by [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist).

## Source contract
**Given:** Finite-type schemes over a field, with the irreducible hypotheses of the dimension statements applied componentwise; a finite-type field algebra for the last implication.

**Goal:** Import the ordinary geometric foundations used in the locally authored parameter argument.

[F1] The dimension and image-closure facts are the indicated parts of [Stacks, Section 33.20](https://stacks.math.columbia.edu/tag/06LF); the closed-point facts are [Lemma 33.14.1](https://stacks.math.columbia.edu/tag/0478). Apply the irreducible dimension formulas within each component, not by subtracting unrelated global dimensions.

[F2] The differential criterion and finite-separable-product description are [Stacks, Lemmas 10.143.3(7) and 10.143.4](https://stacks.math.columbia.edu/tag/00U0). Their scheme interpretation uses [Definition 29.37.1 and Lemma 29.37.7(1)](https://stacks.math.columbia.edu/tag/02GH), as specified in the fourth source record. The base is a field, in any characteristic; this criterion is not asserted for arbitrary base rings.

## External input
Import [F1]–[F2] with the source record's hypotheses and honest proof-reading limits. These foundations do not import the proposition being authored: finite first-jet generation, the determinant-incidence dimension and simultaneous avoidance are proved in the five local items. In particular a smooth total incidence scheme is not being used to assume separability of its projection.
