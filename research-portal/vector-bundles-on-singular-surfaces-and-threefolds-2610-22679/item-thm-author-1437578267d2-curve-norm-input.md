---
title: External norm-divisor identity for integral curves
status: published
research_item: thm-author-1437578267d2-curve-norm-input
dependency_level: 0
sources:
  references:
    - title: The Stacks Project, Principal divisors and pushforward
      url: https://stacks.math.columbia.edu/tag/02RT
      locator: Lemma 42.18.1 (02RT), statement and proof; Situation 42.7.1 (02QL) and
        Example 42.7.2 (02QM) for the field base with dimension function zero
      statement: For integral schemes locally of finite type over a base in Situation
        42.7.1, of equal delta-dimension, a dominant proper morphism sends the
        principal divisor of a nonzero rational function to the principal
        divisor of its function-field norm. The coefficient formula weights
        local orders by residue-field degrees.
      hypotheses: Situation 42.7.1; integral source and target locally of finite type
        over that base, equal delta-dimension, dominant proper morphism, and
        nonzero rational function. F8 supplies equality of delta-dimensions for
        the stated curves; F9 supplies the finite function-field extension. No
        normality, smoothness or separability is assumed.
      reading_limits: Read the complete HTML statement and displayed proof of 02RT,
        and the statements of 02QL and 02QM. Checked its application using
        F8-F10. The finite-morphism reduction and deeper linked prerequisites
        are imported, not reconstructed. Live tag text was read; no pinned
        commit is asserted.
    - title: The Stacks Project, Orders of vanishing
      url: https://stacks.math.columbia.edu/tag/02MB
      locator: "Section 10.121: Lemma 10.121.1 (02MC), Definition 10.121.2 (02MD), and
        Lemma 10.121.8 (02MJ)"
      statement: Quotient lengths by nonzerodivisors in a one-dimensional Noetherian
        semilocal ring are finite and additive on products. On a local domain
        their differences define rational-function orders. For a finite
        extension of such domains, the order of a field norm is the sum of
        upstairs orders weighted by residue-field degrees.
      hypotheses: "For orders: a one-dimensional Noetherian local domain with the
        stated fraction field and nonzero numerator and denominator. For the
        norm formula: a finite domain extension of this local domain and a
        nonzero element of its fraction field. No normality or separability
        assumption."
      reading_limits: Read the indicated definition, both lemma statements and their
        displayed proofs, as well as the separate 02MD and 02MJ pages. Checked
        that the length convention matches the singular-curve formula below.
        Linked finite-length, semilocal and determinant-length prerequisites are
        accepted through these external results, not reconstructed locally.
    - title: The Stacks Project, Weil divisors
      url: https://stacks.math.columbia.edu/tag/0BE0
      locator: Section 31.27, Definitions 31.27.2, 31.27.3 and 31.27.5; Lemmas
        31.27.1, 31.27.4 (02RL) and 31.27.6
      statement: On a locally Noetherian integral scheme, orders at prime divisors use
        the one-dimensional local-ring length convention. Nonzero orders of a
        rational function have locally finite support, giving its principal Weil
        divisor and an additive divisor map. On a quasi-compact scheme this
        support is finite.
      hypotheses: The scheme is integral and locally Noetherian; the rational function
        is nonzero. Quasi-compactness is used for finite support. For curves,
        prime divisors are reduced closed points. Normality is not required.
      reading_limits: Read the listed definitions, lemma statements and displayed
        proofs in the section, including the finite-sum convention in its
        introduction. Also read the separate 02RJ and 02RL pages. Checked the
        quasi-compact curve specialization. Deeper linked results on local
        rings, codimension and Noetherian spaces were not reconstructed.
    - title: The Stacks Project, Finite type over a Noetherian base
      url: https://stacks.math.columbia.edu/tag/01T6
      locator: Lemma 29.15.6, complete statement and displayed proof
      statement: The source of a finite-type morphism to a Noetherian scheme is
        Noetherian; the analogous locally finite-type and locally Noetherian
        assertion also holds.
      hypotheses: A morphism with (locally) Noetherian target and (locally) finite
        type structure. The application uses the Noetherian scheme Spec(k) for a
        field k.
      reading_limits: Read the complete lemma statement and displayed proof. Checked
        that the finite-type curves satisfy its hypotheses over Spec(k). The
        linked Hilbert basis theorem was not reconstructed.
    - title: The Stacks Project, Local dimension and codimension
      url: https://stacks.math.columbia.edu/tag/02IZ
      locator: Lemma 28.10.3, complete statement and displayed proof
      statement: For an irreducible closed subset of a scheme with generic point xi,
        its codimension equals the dimension of the local ring at xi.
      hypotheses: A scheme, an irreducible closed subset and its generic point. A
        reduced closed point in an integral scheme of chain dimension one has
        codimension one, so its local ring has dimension one.
      reading_limits: Read the complete lemma statement and displayed proof. Checked
        the closed-point specialization on an integral curve. The linked affine
        and topological codimension lemmas were not reconstructed.
    - title: The Stacks Project, Field-base dimension comparison
      url: https://stacks.math.columbia.edu/tag/02QK
      locator: "Section 42.7: Situation 42.7.1 (02QL), induced dimension-function
        convention, Example 42.7.2 (02QM), Lemma 42.7.5 (02QO), Definition
        42.7.6 (02QP)"
      statement: Over Spec(k) with base dimension function zero, delta-dimension
        equals chain dimension for integral finite-type k-schemes and their
        integral closed subschemes. Thus the two curves have delta-dimension one
        and reduced closed points have delta-dimension zero.
      hypotheses: "Situation 42.7.1, Jacobson base with dimension function zero at
        closed points, and schemes locally of finite type over it. Spec(k)
        satisfies the setup by Example 42.7.2 and is Jacobson: its sole point is
        closed."
      reading_limits: Read the named statements, the intervening induced-dimension
        convention and the displayed proof of 42.7.5. Checked the field-base
        curve and closed-point applications. Linked catenarity,
        dimension-function and Jacobson results are imported, not reconstructed.
    - title: The Stacks Project, Proper pushforward
      url: https://stacks.math.columbia.edu/tag/02R3
      locator: Definition 42.12.1, parts (1)-(2) and following homomorphism assertion
      statement: Proper pushforward on cycles assigns an integral closed subscheme the
        degree times its reduced image when delta-dimensions agree, and zero
        when the image dimension drops; it extends linearly. In dimension zero
        over a field this is the residue-field-degree point formula.
      hypotheses: Situation 42.7.1; source and target locally of finite type over the
        base; a proper morphism. F8 verifies the grading and F9 verifies
        finiteness for points in this application.
      reading_limits: Read the entire definition and following homomorphism assertion.
        Checked its point specialization and its use in 02RT. The locally finite
        sum lemma is not reconstructed; the present finite-cycle application
        needs only finite sums.
    - title: The Stacks Project, Finiteness for dominant equal-dimension morphisms
      url: https://stacks.math.columbia.edu/tag/02R1
      locator: Lemma 42.11.1, complete statement and displayed proof
      statement: Between integral schemes locally of finite type over a base in
        Situation 42.7.1, equal delta-dimension and dominance imply a finite
        extension of function fields.
      hypotheses: Situation 42.7.1; integral source and target locally of finite type
        over the base; equal delta-dimension and dominant morphism. Applied to C
        to T and to each reduced point to its reduced closed image, using F8.
      reading_limits: Read the complete lemma statement and displayed proof. Checked
        both applications and the degree used by Definition 42.12.1. Linked
        results on generic points and finitely generated field extensions are
        imported, not reconstructed.
external_input: true
---

PDF p. 13: Divisor presentation for supported degree six

## Prerequisites

- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:def-algebraic-cycle-and-cycle-group](https://alphabetamath.cc/item/def-algebraic-cycle-and-cycle-group)
- [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field)
- [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)
- [math:def-extension-degree-and-finite-extension](https://alphabetamath.cc/item/def-extension-degree-and-finite-extension)
- [math:def-field-norm-and-trace](https://alphabetamath.cc/item/def-field-norm-and-trace)
- [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)
- [math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module)
- [` The Stacks Project, Principal divisors and pushforward · Lemma 42.18.1 (02RT), statement and proof; Situation 42.7.1 (02QL) and Example 42.7.2 (02QM) for the field base with dimension function zero `](https://stacks.math.columbia.edu/tag/02RT)
- [` The Stacks Project, Orders of vanishing · Section 10.121: Lemma 10.121.1 (02MC), Definition 10.121.2 (02MD), and Lemma 10.121.8 (02MJ) `](https://stacks.math.columbia.edu/tag/02MB)
- [` The Stacks Project, Weil divisors · Section 31.27, Definitions 31.27.2, 31.27.3 and 31.27.5; Lemmas 31.27.1, 31.27.4 (02RL) and 31.27.6 `](https://stacks.math.columbia.edu/tag/0BE0)
- [` The Stacks Project, Finite type over a Noetherian base · Lemma 29.15.6, complete statement and displayed proof `](https://stacks.math.columbia.edu/tag/01T6)
- [` The Stacks Project, Local dimension and codimension · Lemma 28.10.3, complete statement and displayed proof `](https://stacks.math.columbia.edu/tag/02IZ)
- [` The Stacks Project, Field-base dimension comparison · Section 42.7: Situation 42.7.1 (02QL), induced dimension-function convention, Example 42.7.2 (02QM), Lemma 42.7.5 (02QO), Definition 42.7.6 (02QP) `](https://stacks.math.columbia.edu/tag/02QK)
- [` The Stacks Project, Proper pushforward · Definition 42.12.1, parts (1)-(2) and following homomorphism assertion `](https://stacks.math.columbia.edu/tag/02R3)
- [` The Stacks Project, Finiteness for dominant equal-dimension morphisms · Lemma 42.11.1, complete statement and displayed proof `](https://stacks.math.columbia.edu/tag/02R1)


## Statement
Let $k$ be a field and let $C,T$ be integral finite-type $k$-schemes of chain dimension one. Let $p:C\to T$ be a proper dominant $k$-morphism, where dominant means that $p(C)$ is dense in $T$. Write $K=k(T)$ and $L=k(C)$ for the function fields, identified with the generic stalks and the fraction fields of nonempty affine charts. The induced extension $L/K$ is finite. For every $g\in L^\times$,
$$p_*\operatorname{div}_C(g)=\operatorname{div}_T\operatorname{Nm}_{L/K}(g)\quad\text{in }Z_0(T).$$

The constructions in this identity have the following conventions. For $D=C$ or $T$, $Z_0(D)$ is the free abelian group on its reduced closed points, so its elements are finite formal integer sums of symbols $[x]$. At a closed point $x$, $R=\mathcal O_{D,x}$ is a one-dimensional Noetherian local domain with fraction field $k(D)$. For $f=a/b\in k(D)^\times$, with $a,b\in R\setminus\{0\}$, set $\operatorname{ord}_x(f)=\ell_R(R/aR)-\ell_R(R/bR)$, where $\ell_R$ is composition length and the quotients are $R$-modules. These lengths are finite, their difference is independent of the fraction, and it is additive on products. The sum $\operatorname{div}_D(f)=\sum_{x\in D\text{ closed}}\operatorname{ord}_x(f)[x]$ has finite support and defines a homomorphism $k(D)^\times\to Z_0(D)$.

The norm is $\operatorname{Nm}_{L/K}(g)=\det_K(m_g)$ for the multiplication operator $m_g:L\to L$, $z\mapsto gz$. For a point $x$ write $\kappa(x)=\mathcal O_{D,x}/\mathfrak m_x$, with $\mathfrak m_x$ its maximal ideal. A closed point $y$ of $C$ maps to a closed point of $T$ with finite residue-field extension. Define $p_*$ on point cycles by $p_*[y]=[\kappa(y):\kappa(p(y))][p(y)]$ and extend it $\mathbb Z$-linearly; the bracketed field degree is vector-space dimension. Neither curve need be normal or smooth, and $L/K$ need not be separable.

## Facts & Assumptions
**Given:** The field, integral curves, proper dominant morphism and nonzero rational function in the Statement.

**Goal:** Record the established external identity with its singular-curve coefficient convention and well-defined constructions.

[F1] The imported norm-divisor theorem is [Stacks Lemma 42.18.1](https://stacks.math.columbia.edu/tag/02RT), in the field-base setup of Situation 42.7.1 and Example 42.7.2. Its proof uses a finite-domain reduction and residue-degree-weighted local orders. F8 verifies its dimension hypothesis, and F9 and F10 supply finiteness and the proper pushforward convention.

[F2] [Stacks Section 10.121](https://stacks.math.columbia.edu/tag/02MB), specifically Lemma 10.121.1, Definition 10.121.2 and Lemma 10.121.8, supplies the finite-length order convention and the weighted local norm formula. The fraction-order construction is imported with its well-definedness, not asserted as a new local proof.

[F3] [Stacks Section 31.27](https://stacks.math.columbia.edu/tag/0BE0), specifically Definitions 31.27.3 and 31.27.5 and Lemmas 31.27.4 and 31.27.6, supplies the principal-divisor construction, locally finite support and additivity. Its quasi-compact specialization gives finite support on these curves.

[F4] The geometric hypotheses for these constructions hold: finite-type schemes over a field are Noetherian by [Stacks Lemma 29.15.6](https://stacks.math.columbia.edu/tag/01T6); a closed point on an integral curve has local dimension one by [Stacks Lemma 28.10.3](https://stacks.math.columbia.edu/tag/02IZ). These geometric facts are imported together with F2 and F3.

[F5] Integrality, finite type, properness and chain dimension use [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism) and [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space). Dominance is defined inline in the Statement for scheme morphisms.

[F6] Function fields use the generic-stalk identification of [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field), only its ordinary function-field clause. Residue fields, finite degrees and the determinant norm use [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point), [math:def-extension-degree-and-finite-extension](https://alphabetamath.cc/item/def-extension-degree-and-finite-extension) and [math:def-field-norm-and-trace](https://alphabetamath.cc/item/def-field-norm-and-trace), respectively.

[F7] The cycle group, quotient modules and composition lengths use [math:def-algebraic-cycle-and-cycle-group](https://alphabetamath.cc/item/def-algebraic-cycle-and-cycle-group), [math:def-quotient-module](https://alphabetamath.cc/item/def-quotient-module) and [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module), respectively. F2 and F3 provide the additional singular-curve well-definedness and finite-support inputs.

[F8] In the field-base setup of F1, [Stacks Section 42.7](https://stacks.math.columbia.edu/tag/02QK), especially Lemma 42.7.5 and Definition 42.7.6, identifies delta-dimension with chain dimension on integral finite-type $k$-schemes and their integral closed subschemes. The lemma requires a Jacobson base (closed points are dense in every closed subset) and base dimension function zero at closed points; $\operatorname{Spec}k$ has just one closed point, with value zero as in Example 42.7.2. In particular $\dim_\delta C=\dim_\delta T=1$, and reduced closed points have delta-dimension zero.

[F9] [Stacks Lemma 42.11.1](https://stacks.math.columbia.edu/tag/02R1) imports finiteness of function-field extensions for dominant morphisms between integral schemes locally of finite type over this base with equal delta-dimension. Apply it to $C\to T$ using F8. For every closed $y\in C$, properness makes $x=p(y)$ closed; the induced map between reduced points is dominant, and F8 gives both delta-dimension zero. The same lemma gives $[\kappa(y):\kappa(x)]<\infty$.

[F10] [Stacks Definition 42.12.1](https://stacks.math.columbia.edu/tag/02R3) supplies proper pushforward of cycles in F1. For a reduced closed point $y$ and $x=p(y)$, F8 and F9 put its formula in the equal-dimension case, with function fields $\kappa(y)$ and $\kappa(x)$. Its degree coefficient is therefore $[\kappa(y):\kappa(x)]$, exactly the point formula in the Statement. Linear extension on finite zero-cycles is the homomorphism used by F1.

## External input
Import F1 with the construction facts F2-F4, formulation interfaces F5-F7, field-base dimension comparison F8, finite-degree input F9 and proper zero-cycle pushforward F10. This is an equality of zero-cycles before quotienting by rational equivalence. The cited results are external inputs; no local reconstruction of their proofs is claimed.
