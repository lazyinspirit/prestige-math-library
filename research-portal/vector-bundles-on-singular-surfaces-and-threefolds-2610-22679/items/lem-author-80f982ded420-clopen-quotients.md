---
id: lem-author-80f982ded420-clopen-quotients
kind: lemma
title: Levine–Weibel relations split on clopen pure-dimensional components
status: published
domain: mathematics
deps:
  - lem-author-80f982ded420-normal-point-strata
  - def-levine-weibel-zero-cycles
  - thm-author-80f982ded420-quotient-cycle-map-input
  - math:def-axiom-of-choice
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-weil-divisor-normal-noetherian-scheme
  - math:def-affine-open-subscheme
  - math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:lem-affine-finite-type-source-immerses-in-relative-projective-space
  - math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union
  - math:thm-regular-locus-is-open-variety
  - math:thm-regular-equals-smooth-over-perfect-field
  - math:lem-distinguished-open-refinement-at-a-point
  - math:lem-spectrum-localization-open-immersion
  - math:def-closed-point-scheme
  - math:lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - math:lem-clopen-subset-gives-idempotent-decomposition
  - math:def-sheaf-on-topological-space
  - math:def-finite-type-and-module-finite-algebras
  - math:cor-affine-scheme-quasi-compact
  - math:def-smooth-morphism-classical
dependency_roles:
  lem-author-80f982ded420-normal-point-strata: mathematical-premise
  def-levine-weibel-zero-cycles: mathematical-premise
  thm-author-80f982ded420-quotient-cycle-map-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-weil-divisor-normal-noetherian-scheme: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
  math:lem-affine-finite-type-source-immerses-in-relative-projective-space: mathematical-premise
  math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union: mathematical-premise
  math:thm-regular-locus-is-open-variety: mathematical-premise
  math:thm-regular-equals-smooth-over-perfect-field: mathematical-premise
  math:lem-distinguished-open-refinement-at-a-point: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
  math:def-closed-point-scheme: mathematical-premise
  math:lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite: mathematical-premise
  math:lem-clopen-subset-gives-idempotent-decomposition: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
  math:def-finite-type-and-module-finite-algebras: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:def-smooth-morphism-classical: mathematical-premise
formulation_deps:
  - lem-author-80f982ded420-normal-point-strata
  - def-levine-weibel-zero-cycles
  - thm-author-80f982ded420-quotient-cycle-map-input
  - math:def-axiom-of-choice
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-weil-divisor-normal-noetherian-scheme
  - math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union
  - math:thm-regular-equals-smooth-over-perfect-field
  - math:def-closed-point-scheme
  - math:def-smooth-morphism-classical
argument_deps:
  - lem-author-80f982ded420-normal-point-strata
  - def-levine-weibel-zero-cycles
  - thm-author-80f982ded420-quotient-cycle-map-input
  - math:def-axiom-of-choice
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-weil-divisor-normal-noetherian-scheme
  - math:def-affine-open-subscheme
  - math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:lem-affine-finite-type-source-immerses-in-relative-projective-space
  - math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union
  - math:thm-regular-locus-is-open-variety
  - math:thm-regular-equals-smooth-over-perfect-field
  - math:lem-distinguished-open-refinement-at-a-point
  - math:lem-spectrum-localization-open-immersion
  - math:def-closed-point-scheme
  - math:lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - math:lem-clopen-subset-gives-idempotent-decomposition
  - math:def-sheaf-on-topological-space
  - math:def-finite-type-and-module-finite-algebras
  - math:cor-affine-scheme-quasi-compact
  - math:def-smooth-morphism-classical
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 20
sources:
  references:
    - title: The Stacks Project, Noetherian sources give quasi-compact morphisms
      url: https://stacks.math.columbia.edu/tag/01OU
      locator: Section 28.5, Lemma 28.5.8 and its displayed proof
      statement: Every morphism of schemes with Noetherian source is quasi-compact.
      hypotheses: The source scheme is Noetherian. Apply to the projective-space
        immersion of each affine finite-type scheme, after the coordinate-ring
        Noetherianity check.
      reading_limits: Read Lemma 28.5.8 and its displayed proof on the actual tag
        page. Its cited topological compactness results are not reconstructed
        here; only this quasi-compactness implication is imported.
    - title: The Stacks Project, factoring a quasi-compact immersion
      url: https://stacks.math.columbia.edu/tag/01QV
      locator: Lemma 29.3.2, statement and displayed proof
      statement: A quasi-compact immersion factors as an open immersion into a closed
        subscheme of its target.
      hypotheses: An immersion of schemes that is quasi-compact. Apply to the supplied
        immersion into finite-dimensional projective space over k; its closed
        intermediate scheme is projective in the cycle definition's convention.
      reading_limits: Read the actual lemma statement and displayed proof. The cited
        quasi-coherence, ideal-sheaf and closed-subscheme theorems are not
        reconstructed; this factorization is explicit external input.
---

## Statement
Assume the Axiom of Choice and the fixed size conventions of the supplied constructions. Fix a perfect field $k$. For a finite clopen union $T=\coprod_\alpha T_\alpha$ of normal affine finite-type $k$-schemes, each of pure dimension $e\geq1$, the completed pure-dimensional Levine–Weibel definition gives
$$\operatorname{CH}^{LW}_0(T)\cong\bigoplus_\alpha\operatorname{CH}^{LW}_0(T_\alpha),$$
with the component inclusions induced by zero extension of point cycles. For a normal affine finite-type $k$-scheme $X$ of dimension $d\geq1$ which need not be pure, Krishna's exact dimension-$d$ convention has generators only on the regular parts of its $d$-dimensional components. In this convention
$$\operatorname{CH}^{d}_{\mathrm{Kr}}(X)\cong\operatorname{CH}^{LW}_0(X_d).$$
The left notation denotes precisely Krishna's Section2.1 group, not a redefinition of the completed pure-dimensional local item. Its source “singular locus” in this nonpure convention includes all lower-dimensional clopen components, even if they are geometrically smooth. For an empty indexing family, the notation in the first display means the zero group on both sides, as given by the empty point-and-relation presentation.

## Facts & Assumptions
**Given:** The stated perfect field, normal affine finite-type schemes, Choice and size bounds, and the exact Cartier-curve, semilocal-unit and principal-divisor presentation of [[def-levine-weibel-zero-cycles]]. That definition also supplies the meanings of dimension, pure dimension, reducedness, perfect field, the forbidden reduced closed subscheme, and the free point-cycle quotient.

**Goal:** Match both quotients, including the permitted point loci, by inverse restriction and zero-extension maps on cycles.

[F1] [[lem-author-80f982ded420-normal-point-strata]] supplies the finite clopen dimension strata $X_e$, each nonempty stratum being pure of dimension $e$. Here clopen means both open and closed; every piece carries its restricted scheme structure. In particular $X_d$ is the union of the dimension-$d$ components. This supplier is used for the partition, not for a regular-versus-smooth comparison.

[F2] [[thm-author-80f982ded420-quotient-cycle-map-input]] supplies Krishna's Section 2.1 quotient presentation, with its permitted locus on the dimension-$d$ components and all lower-dimensional components forbidden. Its Cartier curves, units and component-divisor relations are the ones recorded in that supplier's [F1]. Krishna uses the word regular for these smooth points. The present argument uses this presentation, not the substantial cycle-map relation-vanishing theorem also supplied there.

[F3] [[math:def-axiom-of-choice]] supplies the stated Choice assumption. It is inherited through the cycle definition, normal-component supplier, coordinate-ring, projective-immersion, clopen-idempotent and closed-point interfaces, and the affine quasi-compactness, regular-locus and smoothness interfaces used below. No additional choice is used in the finite product, restriction, extension or quotient arguments. The size conventions are those already fixed for the supplied cycle constructions.

[F4] Affine scheme has the meaning of [[math:def-affine-scheme]]; finite type refers to the structure morphism to $\operatorname{Spec}k$ in [[math:def-locally-finite-type-and-finite-type-morphism]]. For an affine finite-type scheme $W=\operatorname{Spec}A$, [[math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]] gives finitely many $k$-algebra generators for $A$. A field is Noetherian because its only ideals are $(0)$ and $(1)$; [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]] makes $A$ Noetherian. Thus $W$ has a finite affine cover by spectra of Noetherian rings, the Noetherian-scheme condition in [[math:def-weil-divisor-normal-noetherian-scheme]]. In that same definition normal means that every local ring is an integrally closed domain; in particular $W$ is reduced. No irreducibility assumption is added. Finite algebra generation means polynomial expressions in finitely many elements with coefficients in $k$, as in [[math:def-finite-type-and-module-finite-algebras]]. Conversely, if a $k$-algebra $B$ has such a generating list, the one-chart affine presentation $\operatorname{Spec}B\to\operatorname{Spec}k$ is locally of finite type by the morphism definition. Under AC, [[math:cor-affine-scheme-quasi-compact]] makes $\operatorname{Spec}B$ quasi-compact. Since the only opens of $\operatorname{Spec}k$ are the empty set and the whole space, this structure morphism is quasi-compact, hence of finite type. We use this converse for the principal localizations, finite products and clopen coordinate rings below.

[F5] Open subschemes use the restricted structure sheaf of [[math:def-affine-open-subscheme]]. Neighborhoods contained in an open subset are cofinal among neighborhoods of any point there, so their stalks agree with the ambient stalks. Smoothness uses [[math:def-smooth-morphism-classical]]: standard smooth presentations exist after principal shrinking around the point, and the condition is local on source and target. A smooth point means a point having such a smooth open neighborhood. For a finite-type scheme over the perfect field, [[math:thm-regular-locus-is-open-variety]] makes the intrinsic regular locus open, and [[math:thm-regular-equals-smooth-over-perfect-field]] equates regularity and smoothness for an entire finite-type scheme. To obtain the needed pointwise comparison, take a regular point in a finite-type affine chart $\operatorname{Spec}A$. By [[math:lem-distinguished-open-refinement-at-a-point]] and [[math:lem-spectrum-localization-open-immersion]], there is a neighborhood $D(f)=\operatorname{Spec}A_f$ contained in the regular locus. This neighborhood is finite type by the converse in [F4], since $A_f$ is generated over $k$ by the generators of $A$ and $f^{-1}$, and all its stalks are regular. The whole-scheme theorem makes it smooth. Conversely, the local presentation at a smooth point in [[math:def-smooth-morphism-classical]] gives a smooth open neighborhood. In the finite-type affine chart $\operatorname{Spec}A$, refine its intersection with that neighborhood to a principal open using the refinement and localization suppliers above. This principal open is finite type by [F4], since $A_f$ has the indicated finite generating list, and is smooth by source locality. The whole-scheme theorem makes it regular. Thus regular and smooth loci coincide pointwise. Both regularity (by the stalk equality) and smoothness (by the source-local condition in the declared smooth-morphism definition) restrict to each clopen piece. For the completed intrinsic-smooth-locus presentation, the forbidden locus of a piece is therefore the ambient forbidden locus intersected with that piece, with the same reduced structure.

[F6] [[math:lem-affine-finite-type-source-immerses-in-relative-projective-space]] gives each affine finite-type $W$ an immersion into finite-dimensional projective space over $k$. By [F4] it is Noetherian, so Stacks Lemma 28.5.8 makes that immersion quasi-compact. Stacks Lemma 29.3.2 factors it as an open immersion into a closed subscheme of that projective space. Hence $W$ is open in a projective scheme in the precise convention of the cycle definition. These two imported implications, with their hypotheses and reading limits, are recorded below. Normality and [F4] give reducedness; equal pure dimensions give the remaining eligibility for that definition.

[F7] A finite disjoint union of affine schemes $\operatorname{Spec}A_\alpha$ is affine by [[math:lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union]], with ring $\prod_\alpha A_\alpha$ and the identical local rings on each piece. If all $A_\alpha$ are finite type over $k$, the product is generated by its finitely many component idempotents and the finitely many generators placed in their respective coordinates; it is a finite-type algebra in [F4], and the converse there makes its affine scheme finite type over $k$. Normality is checked in those same local rings. This checks the eligibility of $T$ in the first assertion. The strata in the second assertion are clopen by [F1]. Applied to the affine $X$, [[math:lem-clopen-subset-gives-idempotent-decomposition]] realizes each $X_e$ as $D(1-a)$ for an idempotent $a$ of its coordinate ring. The principal-localization interface in [F5] makes $X_e$ affine with its restricted structure sheaf. By the locality and gluing axioms in [[math:def-sheaf-on-topological-space]], including its empty-cover convention, restriction $\Gamma(X,\mathcal O_X)\to\Gamma(X_e,\mathcal O_{X_e})$ is surjective: a section on the clopen $X_e$ glues uniquely with zero on its complement, since the overlap is empty. The same axioms identify sections on any finite disjoint open cover with tuples of sections. Images of finite $k$-algebra generators of the affine coordinate ring of $X$ therefore generate the coordinate ring of $X_e$, so the converse in [F4] makes each stratum finite type over $k$. Empty pieces can be omitted. For the empty union, the free point group and its relation subgroup are both zero; only in this case the notation in the first display uses this zero quotient, without applying the positive-dimensional definition to an empty scheme.

[F8] A closed point means a point whose singleton is closed; on an affine scheme these are the maximal ideals, under the already assumed AC ([[math:def-closed-point-scheme]]). Closed points of an open subset of a finite-type affine $k$-scheme $W=\operatorname{Spec}A$ are also closed in $W$: take a principal neighborhood $D(f)$ of such a point inside the open, using the refinements in [F5]. Its ring $A_f$ is finite type, and the point corresponds to a maximal ideal $\mathfrak m$ there. By [[math:lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]], $A_f/\mathfrak m$ is finite over $k$. If $\mathfrak p$ is the contraction to $A$, the domain $A/\mathfrak p$ embeds into this field, so all its elements are algebraic over $k$. Every nonzero such element has an algebraic equation over $k$ with nonzero constant term; rearranging this equation gives its inverse as a polynomial in that element. Hence $A/\mathfrak p$ is a field and $\mathfrak p$ is maximal. The converse follows by intersecting a closed singleton with the open. This identifies the cycle definition's closed points of the smooth open with the source's ambient closed points outside the forbidden set.

## Proof
1.1 For a nonempty union apply the cycle definition using [F4], [F6] and [F7]; the empty-union convention gives $0\cong0$ directly. Use [F8] to interpret all closed-point generators in the ambient schemes. A closed point on a clopen piece is closed in the ambient scheme and conversely; [F5] identifies its permitted locus. Restriction of the finite formal point sums and their zero extensions therefore give inverse maps between the free point group on $T$ and the sum of those on $T_\alpha$. A Cartier curve $C\subset T$ splits into the nonempty $C_\alpha=C\cap T_\alpha$. These are reduced pure one-dimensional closed subschemes. Their irreducible components, forbidden points and local regular-sequence conditions are unchanged, since the piece is clopen and has the identical local rings. For the finite sets $S$ of forbidden and generic curve points in the cycle definition, a neighborhood in $C$ is the disjoint union of its neighborhoods in the $C_\alpha$; conversely the finite union of any such neighborhoods is a neighborhood of $S$. The sheaf gluing axiom identifies sections with tuples on these disjoint opens, and equality after shrinking is coordinatewise. Thus the defined semilocal rings, and their units, split as products. Each irreducible curve component has the same function field, local rings and length-defined divisor coefficients in its piece as in $T$. Each relation on $T$ is consequently a sum of the zero-extended component relations. Conversely an allowed curve and unit on one piece remain an allowed curve and unit on $T$, because their closed immersion and all forbidden-point tests are identical there. Restriction and extension preserve the relation subgroups. They therefore descend to inverse maps on the quotients: changing a cycle by a relation changes each coordinate by a relation, and the two compositions are already the identity on point sums. This proves the first isomorphism with the stated component inclusions. [F3, F4, F5, F6, F7, F8, given, algebra]

2.1 For the nonpure normal $X$, [F1] supplies the clopen $X_d$ and [F4]–[F7] check its eligibility for the completed definition. By [F2] all lower-dimensional components are forbidden. Any irreducible component of an allowed curve lies in one member of the finite clopen dimension partition: otherwise its intersections with a piece and its complement would disconnect that irreducible space into two nonempty clopen subsets. Such a curve component cannot lie in a lower-dimensional piece, since then it is contained in the forbidden set, contrary to the Cartier-curve condition. Every allowed curve is therefore contained in $X_d$. Since $X_d$ has the restricted scheme structure, the closed subscheme $C$ factors through it with the same ideal stalks; conversely its closed immersion into $X_d$ is a closed immersion into $X$ because $X_d$ is clopen. By [F5] and the normal component partition, the source's smooth loci of the top-dimensional components equal the intrinsic smooth/regular locus of $X_d$. By [F8], closedness in the smooth open and in the ambient affine scheme also agree. Thus the free point generators agree. The forbidden intersection, regular-sequence conditions, semilocal units, function fields and local length formulas are identical for every such curve. Hence the relation subgroups also agree, and the identity on point sums induces the second isomorphism. This identifies the source convention without changing the completed pure-dimensional definition. [F1, F2, F3, F4, F5, F6, F7, F8, step 1.1] ∎

## External input
Only the two eligibility implications in [F6] are imported directly here: Stacks Lemma 28.5.8 gives quasi-compactness from the checked Noetherian source, and Lemma 29.3.2 gives the open-in-closed factorization of that quasi-compact immersion. Their complete source records are above. The cycle presentations and Krishna's top-dimensional convention are supplied by the declared local items. The quotient splitting and comparison are the local argument, not imported theorems.
