---
title: Completion, divisors and degree on smooth curves
status: published
research_item: lem-author-4057f3195e4f-curve-geometric-input
dependency_level: 0
sources:
  references:
    - title: "The Stacks Project, Curves: regular completion and affine nonproperness"
      url: https://stacks.math.columbia.edu/tag/0A22
      locator: Remark 33.43.9 and the unnumbered paragraph immediately following it;
        curve convention in Definition 33.43.1
      statement: A regular curve has a projective regular completion with finitely
        many missing closed points; over a perfect field it is smooth. A
        positive-dimensional scheme over a field cannot be both affine and
        proper.
      hypotheses: "For completion: integral separated finite-type dimension-one scheme
        over a perfect field. For nonproperness: affine scheme of positive
        dimension over a field."
      reading_limits: Read the remark, the following observation and Definition
        33.43.1, and checked Definition 33.3.1 separately. Did not reconstruct
        the compactification or finite-morphism proofs.
    - title: The Stacks Project, The Weil divisor class associated to an invertible
        module
      url: https://stacks.math.columbia.edu/tag/02SE
      locator: Definitions 31.28.1 and 31.28.4; Lemmas 31.28.2, 31.28.3, 31.28.5,
        31.28.6 and 31.28.7, including the forward proof of 31.28.7
      statement: Orders of a nonzero meromorphic section give a well-defined additive
        map Pic(X) to Cl(X); with UFD local rings it is an isomorphism, and the
        class of O_X(D) maps to the class of a prime effective Cartier divisor
        D. Orders are computed at its generic local ring.
      hypotheses: X locally Noetherian and integral; UFD local rings for the
        isomorphism. Meromorphic section nonzero; D prime effective Cartier for
        the stated image.
      reading_limits: Read the definitions and displayed arguments through the forward
        direction of 31.28.7; checked the restriction application by equality of
        the local rings and orders. Did not reconstruct underlying
        commutative-algebra prerequisites.
    - title: The Stacks Project, Degrees on curves
      url: https://stacks.math.columbia.edu/tag/0AYQ
      locator: Definition 33.44.1 and Lemmas 33.44.7 and 33.44.9 (individual tags
        0AYR, 0AYX and 0AYY)
      statement: Line-bundle degree is chi(X,L)-chi(X,O_X), is additive under tensor
        product, and gives O_X(D) degree dim_k Gamma(D,O_D) for an effective
        Cartier divisor D; for a reduced closed point this is its residue-field
        degree.
      hypotheses: Proper scheme of dimension at most one over a field; invertible
        sheaves. D must be an effective Cartier divisor for the point formula.
      reading_limits: Read the definition and the two lemma statements and their
        displayed proofs, including the exact sequence for 33.44.9. The
        Euler-characteristic and cohomology theorems underlying the definition
        were not reconstructed. Applied only to smooth projective integral
        curves and reduced closed points.
    - title: The Stacks Project, Picard groups of curves
      url: https://stacks.math.columbia.edu/tag/03RN
      locator: Section 59.69, opening paragraph before Lemma 59.69.1
      statement: For a smooth projective curve over an algebraically closed field, the
        degree kernel in the Picard group is the group of k-points of the
        degree-zero Picard variety.
      hypotheses: Smooth projective integral curve over an algebraically closed field.
      reading_limits: Read the opening exact sequence and identification. No
        Kummer-sequence or torsion conclusions are used; the Picard-variety
        construction is imported rather than reconstructed.
    - title: The Stacks Project, Geometrically regular schemes
      url: https://stacks.math.columbia.edu/tag/038X
      locator: Lemma 33.12.6, together with Definition 33.12.1 at
        https://stacks.math.columbia.edu/tag/038S
      statement: For a scheme locally of finite type over a field, smoothness at a
        point is equivalent to geometric regularity there; taking the identity
        field extension implies ordinary local-ring regularity.
      hypotheses: Locally finite-type scheme over a field and a point of it. No
        perfectness, separatedness or geometric-integrality hypothesis is needed
        for this implication.
      reading_limits: Read the lemma statement and displayed proof, and the definition
        of geometric regularity. Only smooth-implies-regular is applied; the
        algebraic equivalence is not reconstructed.
    - title: The Stacks Project, Regular closed points on a curve
      url: https://stacks.math.columbia.edu/tag/0B8Y
      locator: Lemma 33.43.8, equivalence of clauses (1), (3) and (5)
      statement: At a closed point of an integral separated finite-type curve,
        regularity, being a DVR and defining an effective Cartier divisor are
        equivalent. The equivalence of these three conditions holds over any
        field.
      hypotheses: A curve in the Stacks convention and a reduced closed point. For a
        possibly nonseparated integral curve here, use a finite-type affine
        neighborhood of that point. The optional converse from regularity to
        smoothness needs perfectness or separable residue field and is not used.
      reading_limits: Read all clauses and the displayed proof. Applied the
        regular-to-DVR-and-Cartier implications locally on affine neighborhoods,
        without importing the extra smoothness equivalence.
    - title: The Stacks Project, Weil divisors and principal divisors
      url: https://stacks.math.columbia.edu/tag/0BE0
      locator: Section 31.27 opening convention; Definitions 31.27.2, 31.27.3, 31.27.5
        and 31.27.7; Lemmas 31.27.4 and 31.27.6
      statement: For a locally Noetherian integral scheme, principal-divisor orders
        have locally finite support and are additive, so principal divisors form
        a subgroup and define the divisor class group. On a quasi-compact scheme
        their support is finite.
      hypotheses: Locally Noetherian integral scheme and nonzero rational function.
        Quasi-compactness for finite rather than locally finite support.
      reading_limits: Read the definitions, local-finiteness lemma and homomorphism
        lemma with their displayed arguments. Underlying dimension and
        local-order theory was not reconstructed. Applied only on finite-type
        integral curves.
    - title: The Stacks Project, The Picard scheme of a curve
      url: https://stacks.math.columbia.edu/tag/0BA0
      locator: Lemma 44.6.7, clauses (1), (2) and (3); existence in Proposition 44.6.6
        at https://stacks.math.columbia.edu/tag/0B9R
      statement: A smooth projective curve over a separably closed field has a Picard
        scheme with degree components; k-points of a degree component classify
        line bundles of that degree and the degree-zero component is an open and
        closed subgroup scheme.
      hypotheses: Smooth projective curve over a separably closed field. The
        application here uses an algebraically closed field and the degree-zero
        component.
      reading_limits: Read Proposition 44.6.6 and Lemma 44.6.7, including the
        degree-component description. Did not reconstruct representability,
        cohomology and base change, or the Hilbert-scheme construction. The
        later Hilbert-scheme claims are unused.
    - title: "The Stacks Project, Varieties: the integral separated finite-type
        convention"
      url: https://stacks.math.columbia.edu/tag/020D
      locator: Definition 33.3.1, used with Definition 33.43.1
      statement: A variety is an integral scheme whose structure morphism to the field
        is separated and of finite type; the Stacks curve convention adds
        dimension one.
      hypotheses: A scheme over a field. Geometric integrality is not part of the
        definition.
      reading_limits: Read Definition 33.3.1 and checked its use in Definition
        33.43.1. This convention is used to match the compactification
        hypotheses, not to impose separatedness on the later divisor comparison.
    - title: The Stacks Project, Projective morphisms are proper
      url: https://stacks.math.columbia.edu/tag/01WC
      locator: Lemma 29.44.5; H-projective convention in Definition 29.44.1(2) at
        https://stacks.math.columbia.edu/tag/01W8
      statement: A locally projective morphism is proper, in particular a morphism
        admitting a closed immersion into finite-dimensional projective space
        over the base is proper.
      hypotheses: A locally projective morphism of schemes. The application is an
        H-projective curve over a field.
      reading_limits: Read the lemma and its displayed proof and the projectivity
        definition. The valuative-criterion and projective-space properness
        proofs cited there were not reconstructed.
    - title: The Stacks Project, Orders of vanishing
      url: https://stacks.math.columbia.edu/tag/02MD
      locator: Definition 10.121.2; used by Definitions 31.27.3 and 31.28.1
      statement: For a one-dimensional Noetherian local domain R with fraction field
        K, the order of a nonzero a in R is the module length of R/(a). For
        nonzero a,b in R the order of a/b is the order of a minus the order of
        b. This is the order used in the cited Weil-divisor and
        invertible-module constructions.
      hypotheses: R is a local Noetherian subring of a field K, has dimension one, and
        has fraction field K; the numerator and denominator are nonzero. Here R
        is the local ring at a closed point of a smooth integral finite-type
        curve.
      reading_limits: Read Definition 10.121.2 and its two formulas, and checked the
        explicit references to it in Definitions 31.27.3 and 31.28.1. The
        equality with normalized valuation is checked below using the published
        DVR normal-form and length interfaces; no proof of general order theory
        is claimed.
external_input: true
---

PDF p. 13: Divisibility of the normalization Picard group

## Prerequisites

- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)
- [math:def-regular-local-ring-geometric-point](https://alphabetamath.cc/item/def-regular-local-ring-geometric-point)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-projective-morphism-pre-proj](https://alphabetamath.cc/item/def-projective-morphism-pre-proj)
- [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)
- [math:def-invertible-sheaf-of-cartier-divisor](https://alphabetamath.cc/item/def-invertible-sheaf-of-cartier-divisor)
- [math:def-effective-cartier-divisor](https://alphabetamath.cc/item/def-effective-cartier-divisor)
- [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field)
- [math:def-discrete-valuation-ring](https://alphabetamath.cc/item/def-discrete-valuation-ring)
- [math:def-degree-divisor-proper-curve](https://alphabetamath.cc/item/def-degree-divisor-proper-curve)
- [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:thm-dvr-element-normal-form](https://alphabetamath.cc/item/thm-dvr-element-normal-form)
- [math:thm-dvr-ideal-and-module-length](https://alphabetamath.cc/item/thm-dvr-ideal-and-module-length)
- [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)
- [` The Stacks Project, Curves: regular completion and affine nonproperness · Remark 33.43.9 and the unnumbered paragraph immediately following it; curve convention in Definition 33.43.1 `](https://stacks.math.columbia.edu/tag/0A22)
- [` The Stacks Project, The Weil divisor class associated to an invertible module · Definitions 31.28.1 and 31.28.4; Lemmas 31.28.2, 31.28.3, 31.28.5, 31.28.6 and 31.28.7, including the forward proof of 31.28.7 `](https://stacks.math.columbia.edu/tag/02SE)
- [` The Stacks Project, Degrees on curves · Definition 33.44.1 and Lemmas 33.44.7 and 33.44.9 (individual tags 0AYR, 0AYX and 0AYY) `](https://stacks.math.columbia.edu/tag/0AYQ)
- [` The Stacks Project, Picard groups of curves · Section 59.69, opening paragraph before Lemma 59.69.1 `](https://stacks.math.columbia.edu/tag/03RN)
- [` The Stacks Project, Geometrically regular schemes · Lemma 33.12.6, together with Definition 33.12.1 at https://stacks.math.columbia.edu/tag/038S `](https://stacks.math.columbia.edu/tag/038X)
- [` The Stacks Project, Regular closed points on a curve · Lemma 33.43.8, equivalence of clauses (1), (3) and (5) `](https://stacks.math.columbia.edu/tag/0B8Y)
- [` The Stacks Project, Weil divisors and principal divisors · Section 31.27 opening convention; Definitions 31.27.2, 31.27.3, 31.27.5 and 31.27.7; Lemmas 31.27.4 and 31.27.6 `](https://stacks.math.columbia.edu/tag/0BE0)
- [` The Stacks Project, The Picard scheme of a curve · Lemma 44.6.7, clauses (1), (2) and (3); existence in Proposition 44.6.6 at https://stacks.math.columbia.edu/tag/0B9R `](https://stacks.math.columbia.edu/tag/0BA0)
- [` The Stacks Project, Varieties: the integral separated finite-type convention · Definition 33.3.1, used with Definition 33.43.1 `](https://stacks.math.columbia.edu/tag/020D)
- [` The Stacks Project, Projective morphisms are proper · Lemma 29.44.5; H-projective convention in Definition 29.44.1(2) at https://stacks.math.columbia.edu/tag/01W8 `](https://stacks.math.columbia.edu/tag/01WC)
- [` The Stacks Project, Orders of vanishing · Definition 10.121.2; used by Definitions 31.27.3 and 31.28.1 `](https://stacks.math.columbia.edu/tag/02MD)


## Statement

For a regular integral separated curve of finite type over a perfect field, there is a smooth projective integral curve containing it as a dense open subscheme with finite closed-point complement; if the original curve is affine, that complement is nonempty. On a smooth integral finite-type curve, the divisor class group, defined as finite integer sums of closed points modulo principal divisors of nonzero rational functions, identifies naturally with the Picard group by sending a closed point to its associated line bundle. Restriction to a nonempty open subset corresponds to deleting divisor coefficients outside that subset. On a smooth projective curve over an algebraically closed field, degree is an additive homomorphism on the Picard group, the class of a closed point has degree equal to its residue-field degree, and its kernel is the group of rational points of the degree-zero Picard variety.

Here a curve over $k$ means an integral finite-type $k$-scheme of dimension one. Separatedness is an additional hypothesis where stated; geometric integrality is not assumed. Integral means reduced, irreducible and nonempty, dimension is the length-of-chains dimension of the underlying Noetherian space, and separatedness is separatedness of the structure morphism. A regular scheme has regular local rings at all points; smoothness is smoothness of the structure morphism. A perfect field is one whose irreducible polynomials are separable. Affine means isomorphic to a ring spectrum. Projective means admitting a closed immersion into some finite-dimensional projective space over $k$, and proper means separated, of finite type and universally closed. A completion is an open immersion with dense image into such a projective curve. Restriction to an open subscheme uses its restricted structure sheaf.

A line bundle is an invertible structure-sheaf module, and the Picard group consists of its isomorphism classes under tensor product. For an effective Cartier divisor $D$, its associated line bundle is $\mathcal O_X(D)$, locally $f^{-1}\mathcal O_X$ when $f$ is a regular local equation for $D$; an effective Cartier divisor is locally cut out by one non-zero-divisor. On an integral curve with generic point $\eta$, write $K(X)=\mathcal O_{X,\eta}$ for its function field. On a smooth integral curve the order $\operatorname{ord}_x(f)$ at a closed point is the normalized discrete valuation of $K(X)$ with valuation ring $\mathcal O_{X,x}$; normalized means that a generator of the maximal ideal has value one. The principal divisor is $\operatorname{div}(f)=\sum_x\operatorname{ord}_x(f)[x]$, a finite sum, and $\operatorname{Cl}(X)=\operatorname{Div}(X)/\operatorname{div}(K(X)^\times)$, where $\operatorname{Div}(X)$ is the free abelian group on closed points. A discrete valuation ring here is the valuation ring of a surjective valuation to $\mathbb Z$.

For a proper integral curve and a divisor $D=\sum_x n_x[x]$, set $\deg_k D=\sum_x n_x[\kappa(x):k]$, where $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$ and $[\kappa(x):k]=\dim_k\kappa(x)$. On a smooth projective integral curve define the degree of a line-bundle class by transporting this weighted sum through the divisor-class isomorphism; independence of the divisor representative is part of the imported degree assertion. The degree-zero Picard variety means the degree-zero component $\underline{\operatorname{Pic}}^0_{X/k}$ of the Picard scheme, which exists in the algebraically closed case used here; the last assertion identifies its $k$-points with the kernel, and does not identify the variety itself with an abstract group.

## Statement references

[math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)

[math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)

[math:def-regular-local-ring-geometric-point](https://alphabetamath.cc/item/def-regular-local-ring-geometric-point)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-perfect-field](https://alphabetamath.cc/item/def-perfect-field)

[math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)

[math:def-projective-morphism-pre-proj](https://alphabetamath.cc/item/def-projective-morphism-pre-proj)

[math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)

[math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)

[math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)

[math:def-invertible-sheaf-of-cartier-divisor](https://alphabetamath.cc/item/def-invertible-sheaf-of-cartier-divisor)

[math:def-effective-cartier-divisor](https://alphabetamath.cc/item/def-effective-cartier-divisor)

[math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field)

[math:def-discrete-valuation-ring](https://alphabetamath.cc/item/def-discrete-valuation-ring)

[math:def-degree-divisor-proper-curve](https://alphabetamath.cc/item/def-degree-divisor-proper-curve)

[math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)

[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

## External input

Reference 1 supplies the regular-curve completion and the observation that a positive-dimensional affine scheme over a field cannot be proper. Its curve convention is integral, separated and of finite type, as specified in Definition 33.43.1 together with Definition 33.3.1. Thus the perfect-field completion assertion has exactly the stated hypotheses, without a geometric-integrality requirement. Reference 10 supplies properness of projective morphisms, used both for the nonempty-boundary conclusion and for applying the proper-curve degree inputs.

The finite-type schemes here are Noetherian: fields are Noetherian, finite-type algebras over them are Noetherian, and finite type includes quasi-compactness. Reference 5 supplies smooth-implies-regular over any field. Reference 6 supplies the equivalence between regularity of a closed curve point, its local ring being a discrete valuation ring, and that point being an effective Cartier divisor. In the divisor assertion separatedness is unnecessary: apply Reference 6 on an affine neighborhood of each closed point. The generic stalk is the function field, and every other point of an integral finite-type one-dimensional scheme is closed. Thus all local rings are fields or discrete valuation rings. Such rings are UFDs: in a discrete valuation ring each nonzero element is a unit times a nonnegative power of a uniformizer, and fields have only units among their nonzero elements.

For this factoriality application, [math:thm-dvr-element-normal-form](https://alphabetamath.cc/item/thm-dvr-element-normal-form) supplies the unique expression $a=u\pi^n$, with $u$ a unit and $n\geq0$ for $0\ne a\in R$, where $R$ is a discrete valuation ring and $\pi$ is a uniformizer, meaning an element of normalized valuation one. A nonunit has positive integer valuation, so $\pi$ cannot be a product of two nonunits. Every irreducible is a unit times $\pi$: an exponent $n\geq2$ would give a product of two nonunits. The unique normal form therefore gives unique factorization into irreducibles up to units and order, which is the UFD property used by Reference 2.

Reference 11 specifies the length-based order used by References 2 and 7. Write $\ell_R(M)$ for module length, the number of simple factors in a composition series, independent of the chosen series ([math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)). At a closed point $x$, the preceding regularity input makes $R=\mathcal O_{X,x}$ a one-dimensional Noetherian local domain with fraction field $K(X)$ and a normalized valuation $v_x$. For $0\ne a\in R$, normal form gives $a=u\pi^n$ with $n=v_x(a)\geq0$, and [math:thm-dvr-ideal-and-module-length](https://alphabetamath.cc/item/thm-dvr-ideal-and-module-length) gives $\ell_R(R/(a))=n=v_x(a)$. Thus the order of Reference 11 equals $v_x$ on nonzero ring elements. For $f=a/b\in K(X)^\times$, where $a,b\in R$ are nonzero, its defining quotient rule gives $\operatorname{ord}_R(f)=\ell_R(R/(a))-\ell_R(R/(b))=v_x(a)-v_x(b)=v_x(f)$. Consequently the principal divisor in the Statement is exactly the one in Reference 7, and the orders defining the Picard-class map in Reference 2 are the same normalized orders. This calculation is a local application of the cited interfaces.

Reference 7 supplies the finite-support principal-divisor construction and its homomorphism property. Reference 2 supplies the map from line-bundle classes to divisor classes, its well-definedness and additivity, and its isomorphism when the local rings are UFDs. Its proof identifies the divisor class of a prime effective Cartier divisor $x$ with that of $\mathcal O_X(x)$, fixing the sign. These results apply to locally Noetherian integral schemes and do not require separatedness. For a nonempty open $U\subseteq X$, the function field and the local rings at its points agree with those on $X$. The construction in Reference 2 therefore keeps precisely the same orders at these points. This gives the stated compatibility with deleting coefficients outside $U$, and identifies the restriction of a line bundle with the restricted divisor class.

Reference 3 imports the existence of the line-bundle degree, its tensor additivity and the formula for the line bundle of an effective Cartier divisor. For a closed point $x$, Reference 6 makes it Cartier, and Reference 3 gives $\deg\mathcal O_X(x)=[\kappa(x):k]$. Through Reference 2 this says exactly that the weighted divisor sum descends to the Picard group; hence the degree construction in the Statement is independent of representatives and additive. Reference 4 imports the identification of its kernel with the $k$-points of the degree-zero Picard variety. Reference 8 supplies the existence and degree-component description of that Picard scheme in this algebraically closed setting. Only the degree-zero component and its points are used, not the further Hilbert-scheme or torsion claims in those sources.

Reference 9 records explicitly the integral, separated finite-type convention underlying the completion sources. The function field, line bundles, Cartier-divisor line bundles, residue fields, open restrictions and weighted divisor degree use the published mathematical interfaces listed in Statement references. The function-field supplier is used only for its canonical generic-stalk and affine-chart identifications; its separate geometric-integrality assertion and its choice assumption are not used. All substantial geometric assertions above are external inputs. The application explanations specify how their hypotheses fit; no reconstruction of the published proofs or construction of the Picard scheme is claimed.
