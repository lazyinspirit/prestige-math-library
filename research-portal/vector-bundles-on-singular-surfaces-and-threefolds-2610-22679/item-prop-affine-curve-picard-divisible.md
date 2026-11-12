---
title: Divisibility of the Picard group of an affine curve
status: published
research_item: prop-affine-curve-picard-divisible
dependency_level: 3
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF page 13, paragraph citing Fulton Example 1.6.6
      statement: The Picard group of a smooth affine curve over an algebraically
        closed field is divisible.
      hypotheses: The curve is smooth and affine over an algebraically closed field.
      reading_limits: Read the article paragraph in the supplied extracted text.
        Fulton Example 1.6.6 was not separately read; the proof below instead
        uses the explicitly identified Jacobian inputs.
    - title: "The Stacks Project, Section 59.69: Picard groups of curves"
      url: https://stacks.math.columbia.edu/tag/03RN
      locator: Opening degree exact sequence and identification before Lemma 59.69.1;
        opening paragraph of the proof of Lemma 59.69.3
      statement: For a smooth projective integral curve X over an algebraically closed
        field k, the kernel of the degree homomorphism on Pic(X) is isomorphic
        to the k-points of an abelian variety. For a smooth affine curve with
        nonempty boundary in such a completion, restriction from that kernel to
        Pic(C) is surjective.
      hypotheses: The projective curve is smooth and integral over an algebraically
        closed field. In the affine application the connected curve is nonempty
        and the completion has at least one boundary point.
      reading_limits: Read the opening exact sequence and identification and the first
        paragraph of the proof of Lemma 59.69.3. The Picard-scheme
        representability proof was not reconstructed. The invertibility
        condition on n in the etale-cohomology statement is not imposed on the
        separate abelian-variety divisibility input.
    - title: "The Stacks Project, Proposition 39.9.11: Abelian varieties"
      url: https://stacks.math.columbia.edu/tag/03RP
      locator: Proposition 39.9.11(2)-(4) and the proof sentence deriving (4) from (3)
      statement: An abelian variety is commutative; multiplication by every positive
        integer is surjective, and over an algebraically closed field its group
        of rational points is divisible.
      hypotheses: An abelian variety over a field k; k is algebraically closed for the
        rational-point divisibility conclusion. No restriction on the
        characteristic or positive integer is imposed.
      reading_limits: Read parts (2)-(4) and the proof implication from (3) to (4);
        also checked Definition 39.9.1 at
        https://stacks.math.columbia.edu/tag/03RO for the convention. The
        multiplication theorem and the results underlying representability were
        not reconstructed.
---

PDF p. 13: Ful98 Example 1.6.6

## Prerequisites

- [lem-affine-curve-picard-boundary](item-lem-affine-curve-picard-boundary)
- [lem-author-9ab3274efad8-positive-roots](item-lem-author-9ab3274efad8-positive-roots)
- [lem-author-9ab3274efad8-surjective-image-roots](item-lem-author-9ab3274efad8-surjective-image-roots)
- [lem-author-9ab3274efad8-finite-product-roots](item-lem-author-9ab3274efad8-finite-product-roots)
- [lem-author-9ab3274efad8-picard-disjoint-union](item-lem-author-9ab3274efad8-picard-disjoint-union)
- [lem-author-9ab3274efad8-smooth-affine-components](item-lem-author-9ab3274efad8-smooth-affine-components)
- [thm-author-9ab3274efad8-jacobian-input](item-thm-author-9ab3274efad8-jacobian-input)
- [thm-author-9ab3274efad8-abelian-variety-divisibility-input](item-thm-author-9ab3274efad8-abelian-variety-divisibility-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)
- [math:def-group-power](https://alphabetamath.cc/item/def-group-power)
- [math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · PDF page 13, paragraph citing Fulton Example 1.6.6 `](https://arxiv.org/abs/2610.22679v1)
- [` The Stacks Project, Section 59.69: Picard groups of curves · Opening degree exact sequence and identification before Lemma 59.69.1; opening paragraph of the proof of Lemma 59.69.3 `](https://stacks.math.columbia.edu/tag/03RN)
- [` The Stacks Project, Proposition 39.9.11: Abelian varieties · Proposition 39.9.11(2)-(4) and the proof sentence deriving (4) from (3) `](https://stacks.math.columbia.edu/tag/03RP)


## Statement

Assume the Axiom of Choice. The Picard group of a smooth affine curve over an algebraically closed field is divisible.

A curve is a finite-type scheme of pure dimension one over the field. Pure dimension one means that every irreducible component has dimension one, with dimension measured by lengths of strict chains of nonempty irreducible closed subsets. The empty scheme is allowed. A line bundle is an $\mathcal O_C$-module locally isomorphic to $\mathcal O_C$, and the Picard group consists of its isomorphism classes under tensor product. Divisible means that for each nonzero integer $n$ and each Picard class $L$ there is a class $M$ with $nM=L$; in multiplicative notation this means that the $n$-fold tensor power of $M$ represents $L$ for positive $n$.

## Facts & Assumptions

[F1] A nonempty smooth connected affine curve $C$ over an algebraically closed field has a smooth projective integral completion $X$, and restriction is a surjective group homomorphism $\operatorname{Pic}^0(X)\to\operatorname{Pic}(C)$ ([lem-affine-curve-picard-boundary](item-lem-affine-curve-picard-boundary)). Here $\operatorname{Pic}^0(X)$ denotes the degree-zero subgroup of the ordinary Picard group, rather than a scheme; it is the kernel of the degree homomorphism. The completion and degree conventions are those of the boundary supplier.

[F2] For such $X$, $\operatorname{Pic}^0(X)$ is isomorphic as a group to $J(k)$ for an abelian variety $J$ over $k$; multiplication by every positive integer is surjective on $J(k)$, without a characteristic restriction ([thm-author-9ab3274efad8-jacobian-input](item-thm-author-9ab3274efad8-jacobian-input), [thm-author-9ab3274efad8-abelian-variety-divisibility-input](item-thm-author-9ab3274efad8-abelian-variety-divisibility-input)). The abelian-variety and rational-point group conventions are those stated in these two imported suppliers.

[F3] Roots descend along surjective homomorphisms, and finite products retain surjectivity of a fixed positive multiplication map ([lem-author-9ab3274efad8-surjective-image-roots](item-lem-author-9ab3274efad8-surjective-image-roots), [lem-author-9ab3274efad8-finite-product-roots](item-lem-author-9ab3274efad8-finite-product-roots)). Surjective means that every target element has a preimage. A homomorphism preserves the group operation, and a group isomorphism means a bijective homomorphism.

[F4] Under the Axiom of Choice, a smooth affine curve is a finite disjoint union of open and closed connected smooth affine curves, with their open subscheme structures, and its Picard group is isomorphic to the product of their Picard groups ([lem-author-9ab3274efad8-smooth-affine-components](item-lem-author-9ab3274efad8-smooth-affine-components), [lem-author-9ab3274efad8-picard-disjoint-union](item-lem-author-9ab3274efad8-picard-disjoint-union)). The components in a nonempty decomposition are nonempty; the empty curve has the empty decomposition and the zero Picard group. Connected means that the underlying space cannot be partitioned into two nonempty disjoint open subsets; in particular connectedness alone does not exclude the empty scheme.

[F5] Surjectivity of multiplication by every positive integer is equivalent to divisibility of an abelian group ([lem-author-9ab3274efad8-positive-roots](item-lem-author-9ab3274efad8-positive-roots)).

[F6] Smoothness and finite type refer to the structure morphism $C\to\operatorname{Spec}k$ ([math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)). Affine means isomorphic as a locally ringed space to the spectrum of a commutative ring ([math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)). Algebraically closed means that every nonconstant polynomial over the field has a root in that field ([math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)). The curve, pure-dimension and component conventions agree with the decomposition supplier in [F4].

[F7] The tensor-product law on isomorphism classes of line bundles is well-defined and makes $\operatorname{Pic}(C)$ an abelian group, including for the empty scheme ([math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)). We write it additively: $0$ is the structure-sheaf class, addition is tensor product, and the inverse is the dual-line-bundle class. Multiplication by an integer is the group-power construction in additive notation ([math:def-group-power](https://alphabetamath.cc/item/def-group-power)).

[F8] A group homomorphism preserves integer powers; in additive notation $f(na)=nf(a)$ for every integer $n$ ([math:lem-group-homomorphism-basic-properties](https://alphabetamath.cc/item/lem-group-homomorphism-basic-properties), claim 3). Thus a bijective homomorphism transports surjectivity of multiplication by $n$.

[A1] Assume the Axiom of Choice ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)). It is carried through the boundary and component suppliers in [F1] and [F4]; the finite-product root argument requires only finite choices.

**Given:** A smooth affine curve $C$ over an algebraically closed field $k$, with the conventions in [F6] and [F7], and the Axiom of Choice.

**Goal:** Prove $\operatorname{Pic}(C)$ divisible.

## External input

The Jacobian identification and rational-point divisibility in [F2] are imported through the two named theorem suppliers from Stacks Section 59.69 and Proposition 39.9.11(2)-(4). The cited source statements and the proof implication from scheme-level surjectivity to rational-point divisibility were checked; their substantial underlying theorems are not reconstructed here. The argument below is a local composition of these inputs with [F1], [F3]-[F5] and [F8].

## Proof

1.1 First suppose $C$ is nonempty and connected, and fix a positive integer $n$. Choose $X$ and the surjective restriction homomorphism from [F1]. By [F2] choose a group isomorphism $f:\operatorname{Pic}^0(X)\to J(k)$. For any $a\in\operatorname{Pic}^0(X)$, choose $b\in J(k)$ with $nb=f(a)$ and then $x\in\operatorname{Pic}^0(X)$ with $f(x)=b$. By [F8], $f(nx)=nf(x)=nb=f(a)$; injectivity of $f$ gives $nx=a$. Thus multiplication by $n$ is surjective on $\operatorname{Pic}^0(X)$, including if the characteristic divides $n$. [F1, F2, F3, F7, F8, A1, given, choose]

2.1 Apply the surjective-image result in [F3] to restriction. Multiplication by $n$ is therefore surjective on $\operatorname{Pic}(C)$. Since $n$ was arbitrary, this holds for every positive integer whenever $C$ is nonempty and connected. [F1, F3, F7, step 1.1]

3.1 In general, decompose $C$ into finitely many nonempty connected smooth affine components as in [F4], using the empty family when $C$ is empty. Step 2.1 applies to each component. By [F3], multiplication by each positive $n$ is surjective on the finite product of their Picard groups. The group isomorphism in [F4] transports this to $\operatorname{Pic}(C)$: its homomorphism property gives $f(nx)=nf(x)$ by [F8], so taking a preimage of a product root and using injectivity gives an $n$-th root in $\operatorname{Pic}(C)$. The empty product has one element, and its multiplication map is also surjective. [F3, F4, F7, F8, A1, step 2.1]

4.1 By [F5], $\operatorname{Pic}(C)$ is divisible, as required. [F5, F7, step 3.1] ∎
