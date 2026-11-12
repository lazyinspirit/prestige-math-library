---
title: Levine–Weibel zero cycles
status: published
research_item: def-levine-weibel-zero-cycles
dependency_level: 0
sources:
  references:
    - title: Amalendu Krishna, Murthy’s conjecture on 0-cycles, arXiv:1511.04221v3
      url: https://arxiv.org/html/1511.04221v3#S2.SS1
      locator: Section 2 opening perfect-field convention; §2.1, Cartier curves,
        semilocal units, component divisors, and quotient (2.1)
      statement: The relative zero-cycle presentation uses closed points outside the
        forbidden locus, reduced Cartier curves locally cut out by regular
        sequences at that locus, units near its intersection with the curve and
        the component generic points, and the sum of their principal divisors as
        relations.
      hypotheses: The source assumes a reduced quasi-projective scheme of positive
        dimension over a perfect field and a closed forbidden subset containing
        its specified singular locus but no top-dimensional component. Here
        retain the existing pure-dimensional convention and intrinsic smooth
        locus of X.
      reading_limits: Read the versioned HTML Section 2 opening and Section 2.1
        through equation (2.1), including its exact component convention. The
        presentation here retains its existing pure-dimensional
        intrinsic-smooth-locus convention; no comparison at intersections of
        different ambient components is asserted. Later theorem proofs and the
        original Levine–Weibel paper were not read for this repair.
    - title: The Stacks Project, morphisms of finite type
      url: https://stacks.math.columbia.edu/tag/01T0
      locator: Lemmas 29.15.3, 29.15.5 and 29.15.6
      statement: Finite-type morphisms compose; closed immersions are of finite type;
        a finite-type scheme over a Noetherian scheme is Noetherian.
      hypotheses: Morphisms of schemes; the last assertion requires a Noetherian base
        and a finite-type morphism. Apply over Spec k to X, C and its reduced
        component closed subschemes.
      reading_limits: Read Lemmas 29.15.3, 29.15.5 and 29.15.6 and their displayed
        proofs. The cited algebraic and locality results were not reconstructed;
        these scheme-level implications are imported.
    - title: The Stacks Project, finite presentation over a locally Noetherian base
      url: https://stacks.math.columbia.edu/tag/01TX
      locator: Lemma 29.22.9(1)
      statement: A locally finite-type morphism to a locally Noetherian scheme is
        locally of finite presentation.
      hypotheses: The target is locally Noetherian. Apply to the finite-type structure
        morphism X to Spec k.
      reading_limits: Read Lemma 29.22.9 and its displayed proof; only clause (1) is
        applied. Its cited algebra theorem is not reconstructed.
    - title: The Stacks Project, Noetherian schemes
      url: https://stacks.math.columbia.edu/tag/01OU
      locator: Lemmas 28.5.3 and 28.5.5
      statement: An immersion into a locally Noetherian scheme is quasi-compact. The
        underlying space of a Noetherian scheme is Noetherian.
      hypotheses: For the first assertion the ambient scheme is locally Noetherian;
        for the second it is Noetherian. Apply the first to the open immersion
        of X into a projective k-scheme and the second to C.
      reading_limits: Read Lemmas 28.5.3 and 28.5.5 with their displayed proofs. Their
        cited affine-spectrum, quasi-compactness and finite-union inputs were
        not reconstructed.
    - title: The Stacks Project, quasi-projective morphisms
      url: https://stacks.math.columbia.edu/tag/01VV
      locator: Definition 29.41.1(2) and Lemma 29.41.4
      statement: A quasi-compact immersion into finite-dimensional relative projective
        space defines an H-quasi-projective morphism; every such morphism is
        separated of finite type.
      hypotheses: Morphisms of schemes with a quasi-compact immersion into projective
        space over the same base. Apply over the field k; the open-in-projective
        convention is quasi-compact over a field.
      reading_limits: Read Definition 29.41.1, its convention footnote and Lemma
        29.41.4. The source omits the lemma proof; no local reconstruction of it
        is claimed. Apply its H-quasi-projective clause over the field.
    - title: The Stacks Project, reduced induced closed subscheme structures
      url: https://stacks.math.columbia.edu/tag/01J3
      locator: Lemma 26.12.4; terminology in Definition 26.12.5 (tag 01J4)
      statement: Each closed subset of a scheme has a unique reduced closed subscheme
        structure. On an affine chart where the subset is V(I), this structure
        is Spec(A/radical(I)).
      hypotheses: An arbitrary scheme and a closed subset. Apply to the closed
        complement of the smooth locus and to the closed irreducible components
        of C.
      reading_limits: Read Lemma 26.12.4, its displayed construction and uniqueness
        proof, and Definition 26.12.5. The cited algebraic radical-ideal and
        quasi-coherent-ideal construction results are not reconstructed.
---

PDF p. 3: Levine–Weibel cycle group

## Prerequisites

- [math:def-chow-group-of-cycles-mod-rational-equivalence](https://alphabetamath.cc/item/def-chow-group-of-cycles-mod-rational-equivalence)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-smooth-locus-morphism](https://alphabetamath.cc/item/def-smooth-locus-morphism)
- [math:thm-smooth-locus-open](https://alphabetamath.cc/item/thm-smooth-locus-open)
- [math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)
- [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)
- [math:lem-noetherian-subspaces-and-compact-opens](https://alphabetamath.cc/item/lem-noetherian-subspaces-and-compact-opens)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)
- [math:lem-order-function-one-dimensional-local-domain](https://alphabetamath.cc/item/lem-order-function-one-dimensional-local-domain)
- [math:def-quasi-projective-morphism](https://alphabetamath.cc/item/def-quasi-projective-morphism)
- [math:thm-spectrum-sober](https://alphabetamath.cc/item/thm-spectrum-sober)
- [math:cor-spectrum-is-t-zero](https://alphabetamath.cc/item/cor-spectrum-is-t-zero)
- [math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field)
- [math:def-projective-morphism-pre-proj](https://alphabetamath.cc/item/def-projective-morphism-pre-proj)
- [` Amalendu Krishna, Murthy’s conjecture on 0-cycles, arXiv:1511.04221v3 · Section 2 opening perfect-field convention; §2.1, Cartier curves, semilocal units, component divisors, and quotient (2.1) `](https://arxiv.org/html/1511.04221v3#S2.SS1)
- [` The Stacks Project, morphisms of finite type · Lemmas 29.15.3, 29.15.5 and 29.15.6 `](https://stacks.math.columbia.edu/tag/01T0)
- [` The Stacks Project, finite presentation over a locally Noetherian base · Lemma 29.22.9(1) `](https://stacks.math.columbia.edu/tag/01TX)
- [` The Stacks Project, Noetherian schemes · Lemmas 28.5.3 and 28.5.5 `](https://stacks.math.columbia.edu/tag/01OU)
- [` The Stacks Project, quasi-projective morphisms · Definition 29.41.1(2) and Lemma 29.41.4 `](https://stacks.math.columbia.edu/tag/01VV)
- [` The Stacks Project, reduced induced closed subscheme structures · Lemma 26.12.4; terminology in Definition 26.12.5 (tag 01J4) `](https://stacks.math.columbia.edu/tag/01J3)


## Definition
Assume the Axiom of Choice. Let $k$ be a perfect field and let $X$ be a reduced equidimensional quasi-projective $k$-scheme of dimension $d\geq 1$. A $k$-scheme is a scheme equipped with a structure morphism to $\operatorname{Spec}k$. Here reduced means that the local rings have no nonzero nilpotents, equidimensional means that all irreducible components have dimension $d$, and quasi-projective means that $X$ is an open subscheme of a projective $k$-scheme, where projective means admitting a closed immersion into some finite-dimensional projective space over $k$. In particular, $X$ admits a quasi-compact immersion $X\hookrightarrow\mathbb P^n_k$ for some finite $n$, as justified below. A perfect field is one whose algebraic extensions are separable. Dimension means the supremum of lengths of strict chains of nonempty irreducible closed subsets; the empty scheme has dimension $-\infty$. Write $U=X_{\mathrm{reg}}$ for the smooth locus of $X$ over $k$ and $Y=X_{\mathrm{sing}}=X\setminus U$ with its reduced closed subscheme structure. For a closed subset with affine description $V(I)\subseteq\operatorname{Spec}A$, its reduced induced structure is $\operatorname{Spec}(A/\sqrt I)$; the existence and uniqueness of this reduced induced structure is the imported Stacks Lemma 26.12.4. Let $Z_0(X,Y)$ be the free abelian group on the closed points of $U$, concretely the finite formal sums $\sum_x n_x[x]$ with $n_x\in\mathbb Z$ and coefficientwise addition.

A **Cartier curve relative to $Y$** is a reduced, purely one-dimensional closed subscheme $C\hookrightarrow X$ such that no irreducible component of $C$ is contained in $Y$, and, at every point $x\in C\cap Y$, the ideal of $C$ in $\mathcal O_{X,x}$ is generated by a regular sequence. Purely one-dimensional means that every irreducible component has dimension one. A regular sequence $a_1,\ldots,a_r$ in a local ring means that $(a_1,\ldots,a_r)$ is proper and each $a_i$ is a non-zero-divisor modulo the preceding elements; the empty sequence is allowed.

For such a curve let $C_1,\ldots,C_r$ be its irreducible components with their reduced induced closed subscheme structures and generic points $\eta_i$ (so $\overline{\{\eta_i\}}=C_i$), and put $S=(C\cap Y)\cup\{\eta_1,\ldots,\eta_r\}$. Let $\mathcal O_{C,S}=\varinjlim_{S\subset V}\Gamma(V,\mathcal O_C)$, where $V$ runs through open neighborhoods of $S$ and the maps are restrictions to smaller neighborhoods. Concretely, an element is a pair $(V,s)$ with $s\in\Gamma(V,\mathcal O_C)$, modulo equality after restriction to some smaller neighborhood of $S$; addition and multiplication are performed on a common smaller neighborhood. The notation $\Gamma(V,\mathcal O_C)$ denotes the ring of regular sections on $V$, and the superscript $\times$ denotes its group of multiplicatively invertible elements. For $f\in\mathcal O_{C,S}^{\times}$, let $f_i\in k(C_i)^\times$ be its restriction to $\eta_i$, where $k(C_i)=\mathcal O_{C_i,\eta_i}$ is the function field of the integral curve $C_i$; integral means nonempty, reduced and irreducible. Form the finite zero-cycle
$$\operatorname{div}_C(f)=\sum_{i=1}^r\operatorname{div}_{C_i}(f_i),$$
viewed on $X$ through the closed immersions $C_i\hookrightarrow X$. Here module length is the number of simple factors in a finite composition series, with length zero for the zero module. For an integral curve $D$ and $g\in k(D)^\times$, its principal divisor is $\sum_{x\in D\text{ closed}}\operatorname{ord}_{\mathcal O_{D,x}}(g)[x]$: writing $g=a/b$ with nonzero $a,b\in\mathcal O_{D,x}$, the coefficient is $\operatorname{length}(\mathcal O_{D,x}/(a))-\operatorname{length}(\mathcal O_{D,x}/(b))$.

Let $R_0^{LW}(X,Y)$ be the subgroup of $Z_0(X,Y)$ generated by all $\operatorname{div}_C(f)$ for these curves and units. The **Levine–Weibel Chow group of zero cycles** is
$$\operatorname{CH}_0^{LW}(X)=Z_0(X,Y)/R_0^{LW}(X,Y).$$
The subgroup generated here consists of finite integer linear combinations of the specified divisors. The quotient consists of additive cosets, with $(z+R)+(w+R)=(z+w)+R$. This construction uses regular-point generators and the specified Cartier-curve relations; it is not the definition of the unrestricted ordinary Chow group on a singular scheme.

## Facts & Assumptions

**Given:** The field, scheme, curves and functions in the definition, and the Axiom of Choice.

**Goal:** Show that the displayed relations are finite cycles supported on $U$ and that the quotient is well defined.

[F1] For an integral finite-type curve over a field, the principal divisor has finite support. At each closed point its local ring is a one-dimensional Noetherian local domain, and the stated length difference is independent of the fraction representing the rational function and is zero on units. These are the precise principal-divisor and order interfaces used here ([math:def-chow-group-of-cycles-mod-rational-equivalence](https://alphabetamath.cc/item/def-chow-group-of-cycles-mod-rational-equivalence), [math:lem-order-function-one-dimensional-local-domain](https://alphabetamath.cc/item/lem-order-function-one-dimensional-local-domain), [math:def-composition-series-and-length-of-a-module](https://alphabetamath.cc/item/def-composition-series-and-length-of-a-module)). Choice is inherited through the order and finite-length interfaces ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

[F2] The quasi-projective $k$-scheme $X$ is of finite type. Closed immersions are of finite type and finite-type morphisms compose, so $C$ and each reduced component $C_i$ are of finite type over $k$. A finite-type scheme over a Noetherian base is Noetherian, and its underlying space is Noetherian. Since a field has only the ideals zero and the whole field, $\operatorname{Spec}k$ is Noetherian. The structure morphism of $X$ is locally of finite presentation because its base is Noetherian. The scheme and morphism terminology is supplied by [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base), [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes), [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), [math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism), [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) and [math:def-quasi-projective-morphism](https://alphabetamath.cc/item/def-quasi-projective-morphism), with the projective convention of [math:def-projective-morphism-pre-proj](https://alphabetamath.cc/item/def-projective-morphism-pre-proj). To check the open-in-projective convention, a projective $k$-scheme is H-quasi-projective via its closed projective-space immersion, hence finite type by Stacks Lemma 29.41.4 and Noetherian by Lemma 29.15.6. Its open immersion from $X$ is quasi-compact by Lemma 28.5.3, so the composite immersion of $X$ into that projective space is quasi-compact. The scheme-level implications are precise imported inputs recorded below.

[F3] Under AC, the smooth locus of a locally finitely presented morphism is open ([math:def-smooth-locus-morphism](https://alphabetamath.cc/item/def-smooth-locus-morphism), [math:thm-smooth-locus-open](https://alphabetamath.cc/item/thm-smooth-locus-open)). Apply this to $X\to\operatorname{Spec}k$ using [F2], so $Y$ is closed. The reduced closed structure on $Y$ exists uniquely by Stacks Lemma 26.12.4. Component schemes use their reduced induced structures ([math:def-irreducible-component-scheme](https://alphabetamath.cc/item/def-irreducible-component-scheme)). A generic point means a point whose closure is the component ([math:def-generic-point-irreducible-closed-subset](https://alphabetamath.cc/item/def-generic-point-irreducible-closed-subset)). Existence of such points on affine charts is supplied by [math:thm-spectrum-sober](https://alphabetamath.cc/item/thm-spectrum-sober), and distinct affine points have distinct closures by [math:cor-spectrum-is-t-zero](https://alphabetamath.cc/item/cor-spectrum-is-t-zero). The generic stalk of an integral finite-type scheme is its function field, canonically the fraction field on every nonempty affine open ([math:lem-integral-finite-type-scheme-function-field](https://alphabetamath.cc/item/lem-integral-finite-type-scheme-function-field)).

[F4] Under AC, a Noetherian space has finitely many irreducible components, each subspace is Noetherian, and dimension is measured by chains of irreducible closed subsets ([math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components), [math:lem-noetherian-subspaces-and-compact-opens](https://alphabetamath.cc/item/lem-noetherian-subspaces-and-compact-opens), [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)). Noetherian here means that descending chains of closed subsets stabilize.

## Justification

1.1 By [F2], the curve $C$ is Noetherian, and by [F4] it has finitely many irreducible components. By [F3], $Y$ is closed. For each component $C_i$, take an affine open of $C$ meeting it. The nonempty intersection with $C_i$ is irreducible and closed in that affine open, so [F3] gives a generic point there. Its closure in $C$ is $C_i$, since the intersection is dense in $C_i$. Distinct points of a scheme have distinct closures: if two points had the same closure, any affine neighborhood of one would contain the other (otherwise its closed complement would contain both closures), contradicting the affine assertion in [F3]. Thus each $C_i$ has the unique generic point used in the definition. Any nonempty irreducible closed subset of $C\cap Y$ lies in one of the finitely many components of $C$ (otherwise its intersections with those components would express it as a finite union of proper closed subsets); it is a proper subset of that one-dimensional component because no component is contained in $Y$. The chain definition of dimension in [F4] therefore gives $\dim(C\cap Y)\leq0$, including the empty case. This subspace is Noetherian by [F4], so it has finitely many irreducible components. Every point closure is irreducible; dimension at most zero prevents a strict inclusion of nonempty irreducible closed subsets. Scheme points are distinguished by their closures, hence each such zero-dimensional component is a single closed point. Thus $C\cap Y$ and $S$ are finite. By their reduced structures and [F2], the $C_i$ are integral finite-type curves. [F2, F3, F4, given]

2.1 Represent $f$ and its inverse by sections on neighborhoods of $S$. Their product equals $1$ in the defined colimit, so the explicit equivalence relation permits shrinking to a common neighborhood on which they are inverse sections. Restricting to the generic points gives the nonzero rational functions $f_i$ in the function fields identified by [F3]; different representatives agree after a further restriction and give the same $f_i$. By [F1] their component divisors are well defined and finite; there are finitely many components by step 1.1, so the sum is finite. At every $x\in C\cap Y$, restriction to any component through $x$ gives inverse elements of $\mathcal O_{C_i,x}$, so [F1] gives order zero (the unit quotients in the length formula are zero). The finite sum is thus supported on $U$; a closed immersion sends each closed component point to the same closed point of $X$. Its closedness in $U$ follows by intersection with the open $U$. The relations therefore lie in $Z_0(X,Y)$. Their finite integer combinations form a subgroup $R$. If $z-z'\in R$ and $w-w'\in R$, then $(z+w)-(z'+w')\in R$, so addition of the defined cosets is well defined; associativity, identity, inverses and commutativity descend from coefficientwise addition of cycles. This proves well-definedness of the stated quotient. AC is used through [F1], the openness and affine generic-point suppliers [F3] and the Noetherian-space suppliers [F4]; no additional choice is used in shrinking neighborhoods or forming finite sums. [F1, F2, F3, F4, step 1.1, construct] ∎

## External input
The Cartier-curve, semilocal-unit and component-divisor presentation is adapted from Krishna, §2.1, through equation (2.1), in the pure-dimensional intrinsic-smooth-locus convention fixed in this definition. The explicit colimit presentation and the preceding well-definedness argument are local explanations, not a claim that Krishna supplies this exact proof.

The finite-type implications in [F2] use Stacks Lemmas 29.15.3, 29.15.5 and 29.15.6; local finite presentation uses Lemma 29.22.9(1); quasi-compactness of the open immersion into a projective $k$-scheme uses Lemma 28.5.3; passage to a Noetherian underlying space uses Lemma 28.5.5. Quasi-projectivity gives finite type by Lemma 29.41.4 in the H-quasi-projective convention: over a field, an open subscheme of a projective scheme has a quasi-compact immersion into finite-dimensional projective space. The reduced induced closed structures use Stacks Lemma 26.12.4 and Definition 26.12.5. The source hypotheses and reading limits are recorded separately for each import. These inputs do not mark the whole locally justified definition as an external-input theorem.
