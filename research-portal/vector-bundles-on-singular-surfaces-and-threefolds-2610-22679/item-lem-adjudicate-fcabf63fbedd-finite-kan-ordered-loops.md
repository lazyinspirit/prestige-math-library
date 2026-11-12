---
title: Finite Kan representatives and ordered iterated loops
status: draft
research_item: lem-adjudicate-fcabf63fbedd-finite-kan-ordered-loops
dependency_level: 1
sources:
  references:
    - title: Kerodon, homotopy groups of Kan complexes
      url: https://kerodon.net/tag/00VJ
      locator: Construction 3.2.2.4, Notation 3.2.2.5, Example 3.2.2.7, Theorem
        3.2.2.10 and Remarks 3.2.2.16–17
      statement: For a pointed Kan target, homotopy classes use the simplex modulo its
        boundary, and equality has a single pointed cylinder witness. Positive
        homotopy groups are functorial and abelian above degree one. On singular
        complexes, the sphere-class sets identify with topological sphere-class
        sets.
      hypotheses: Pointed Kan complexes; positive homotopy degree. Only degrees at
        least two are used here.
      reading_limits: Read the cited constructions, statements and remarks in the
        primary HTML in this repair. The group-law proof in the next subsection
        was not reconstructed.
    - title: Kerodon, exponentiation for Kan fibrations
      url: https://kerodon.net/tag/00TM
      locator: Corollary 3.1.3.3
      statement: Restriction along a simplicial monomorphism into a Kan target gives a
        Kan fibration of function complexes.
      hypotheses: An arbitrary monomorphism A into B and a Kan target Z; apply to the
        inclusion of the basepoint in B, and take the fiber over its constant
        map.
      reading_limits: Read the complete corollary statement in primary HTML. Its
        preceding pushout-product and lifting arguments are imported, not
        reconstructed.
    - title: Kerodon, Milnor unit theorem
      url: https://kerodon.net/tag/0142
      locator: Theorem 3.6.4.1
      statement: The unit Z to Sing(|Z|) is a weak homotopy equivalence for every
        simplicial set Z.
      hypotheses: Any simplicial set; here Z is pointed and Kan, so both sides are Kan.
      reading_limits: Read the theorem statement and displayed proof in primary HTML.
        Excision and the prior weak-equivalence foundations invoked in that
        proof are imported.
    - title: Kerodon, equivalences between Kan complexes
      url: https://kerodon.net/tag/00UB
      locator: Proposition 3.1.7.13, statement and proof
      statement: A weak homotopy equivalence between Kan complexes is a simplicial
        homotopy equivalence.
      hypotheses: Both source and target are Kan. Applied to the realization unit of a
        Kan complex.
      reading_limits: Read the statement and entire displayed proof in primary HTML.
        The mapping-out characterization used by the proof is imported.
    - title: Kerodon, pointed Kan complexes
      url: https://kerodon.net/tag/00V4
      locator: Proposition 3.2.1.4, Example 3.2.1.8, Notation 3.2.1.10 and Proposition
        3.2.1.13
      statement: Pointed homotopy classes into a Kan target use homotopies fixing the
        basepoint. Realization–singular adjunction identifies pointed homotopies
        into a singular complex with topological pointed homotopies. An
        underlying homotopy equivalence of pointed Kan complexes has a pointed
        homotopy inverse.
      hypotheses: Kan target for a single simplicial homotopy witness; pointed Kan
        source and target for the homotopy-inverse assertion. The adjunction
        comparison permits any pointed simplicial source.
      reading_limits: Read the cited statements, the displayed proof of Proposition
        3.2.1.4 and Example 3.2.1.8 in primary HTML. The later proof of
        Proposition 3.2.1.13 is imported, not reconstructed.
    - title: Kerodon, singular complexes are Kan
      url: https://kerodon.net/tag/002K
      locator: Proposition 1.2.5.8, statement and proof
      statement: The singular simplicial set of every topological space is Kan.
      hypotheses: Any topological space; here the realization of a pointed Kan
        complex, with the chosen vertex as basepoint.
      reading_limits: Read the statement and full displayed proof in primary HTML,
        including its explicit horn retraction. The preceding realization
        construction is imported.
---

PDF p. 3: Filtered S1 spectra: finite Kan comparison and ordered loops

## Prerequisites

- [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)
- [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)
- [math:def-higher-homotopy-group-by-based-cubes](https://alphabetamath.cc/item/def-higher-homotopy-group-by-based-cubes)
- [math:thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one](https://alphabetamath.cc/item/thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one)
- [` Kerodon, homotopy groups of Kan complexes · Construction 3.2.2.4, Notation 3.2.2.5, Example 3.2.2.7, Theorem 3.2.2.10 and Remarks 3.2.2.16–17 `](https://kerodon.net/tag/00VJ)
- [` Kerodon, exponentiation for Kan fibrations · Corollary 3.1.3.3 `](https://kerodon.net/tag/00TM)
- [` Kerodon, Milnor unit theorem · Theorem 3.6.4.1 `](https://kerodon.net/tag/0142)
- [` Kerodon, equivalences between Kan complexes · Proposition 3.1.7.13, statement and proof `](https://kerodon.net/tag/00UB)
- [` Kerodon, pointed Kan complexes · Proposition 3.2.1.4, Example 3.2.1.8, Notation 3.2.1.10 and Proposition 3.2.1.13 `](https://kerodon.net/tag/00V4)
- [` Kerodon, singular complexes are Kan · Proposition 1.2.5.8, statement and proof `](https://kerodon.net/tag/002K)


## Statement
Use pointed simplicial sets with degreewise colimits and smash products. For a sequence $Z_j\to Z_{j+1}$, its degree-$q$ colimit is the disjoint union of the sets $(Z_j)_q$ modulo eventual equality: $(j,x)$ and $(j',x')$ agree if their images agree at some stage $\ell\geq j,j'$. Faces, degeneracies and the basepoint are induced from the stages. Here a Kan complex means a simplicial set in which every horn (the union of all but one codimension-one face of a simplex) has a filler. For every sequential system of pointed Kan complexes $Z_j$, its degreewise colimit $Z_\infty$ is Kan, and the natural map $\operatorname{colim}_j\pi_r(Z_j)\to\pi_r(Z_\infty)$ is an isomorphism for $r\geq2$. Homotopy groups are based at the chosen vertex and identified with realization groups.

Put $K=\Delta^1/\partial\Delta^1$ and $\Omega Z=\operatorname{Map}_*(K,Z)$, with constant-map basepoint. For a pointed simplicial set $A$, the $q$-simplices of $\operatorname{Map}_*(A,Z)$ are the pointed maps $A\wedge(\Delta^q)_+\to Z$, where $(\Delta^q)_+$ adds a disjoint basepoint. For Kan $Z$, all $\Omega^mZ$ are Kan, and there are natural group isomorphisms $D_{r,m}:\pi_r(\Omega^mZ)\xrightarrow{\sim}\pi_{r+m}(Z)$ for $r\geq2$ and $m\geq0$, with $D_{r,0}$ the identity. They are obtained by evaluation on the ordered finite sphere $T_r=K^{\wedge r}$: uncurry each loop by putting its circle to the left of the sphere already present. Thus innermost loops are evaluated on the leftmost circle factors.

In particular, if $Z,W$ are pointed Kan complexes and $u:Z\to\Omega W$ is adjoint to $v:K\wedge Z\to W$, then $D_{r,m+1}\circ(\Omega^m u)_*=v_*\circ\Sigma_{\mathrm{left}}\circ D_{r,m}$, where $\Sigma_{\mathrm{left}}$ suspends a sphere representative by a new $K$ factor on its left. Here $v_*$ is induced on realization homotopy groups, so no Kan hypothesis on $K\wedge Z$ is required. All sphere coordinates use the oriented identification $|K|=S^1$ and the sphere-first convention.

## Statement references

[math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration)

[lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)

[math:def-higher-homotopy-group-by-based-cubes](https://alphabetamath.cc/item/def-higher-homotopy-group-by-based-cubes)

## Facts & Assumptions
**Given:** The pointed Kan complexes, sequential maps, integers $r\geq2$, $m\geq0$ and, for the last assertion, the adjoint pair $u,v$ specified in the Statement. A simplex is nondegenerate if it is not the image of a lower-dimensional simplex under a degeneracy operator. A finite simplicial set has finitely many nondegenerate simplices; it need not have finitely many simplices in all degrees together.

**Goal:** Establish finite representatives, colimit comparison and the ordered loop isomorphisms needed for sequential stabilization.

[F1] [math:def-simplicial-set-homotopy-and-trivial-kan-fibration](https://alphabetamath.cc/item/def-simplicial-set-homotopy-and-trivial-kan-fibration) supplies simplicial sets, standard simplices, their boundaries, degreewise constructions and simplicial homotopies. The pointed mapping object is defined in the Statement.

[F2] [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance) supplies the realization convention, its natural Kan comparison, preservation of colimits by realization and the ordered identification $|K\wedge A|\cong S^1\wedge|A|$. [math:def-higher-homotopy-group-by-based-cubes](https://alphabetamath.cc/item/def-higher-homotopy-group-by-based-cubes) supplies based cube representatives and concatenation; [math:thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one](https://alphabetamath.cc/item/thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one) supplies their group laws.

[F3] The first source record supplies finite simplicial sphere representatives, homotopy witnesses and functorial Kan homotopy groups. The second supplies Kan fibrancy of pointed mapping objects by taking the fiber of restriction along a basepoint inclusion.

[F4] The third and fourth source records make the realization unit of a Kan complex a homotopy equivalence. The fifth supplies its pointed version and the pointed realization–singular homotopy adjunction; the sixth ensures the singular target is Kan.

## External input
The imported premises are precisely [F3] and [F4] at the six source locators. In [F4], the unit has Kan source and singular Kan target, so the hypotheses of both equivalence statements apply. The adjunction compares homotopies fixing the specified basepoint. These inputs do not assert a coordinate ordering for iterated loops; the ordered application and colimit argument below are local.

## Proof
1.1 The finite sources used below are explicit: nondegenerate simplices of $\Delta^r\times\Delta^1$ are strictly increasing chains in the finite grid $[r]\times[1]$; those of $(\Delta^1)^d$ are strictly increasing chains in $\{0,1\}^d$. These products have finitely many such chains, and their quotients give the sphere cylinders and $T_d$. A map from a finite simplicial set to a degreewise sequential colimit factors through a stage: choose representatives for its finitely many nondegenerate simplices, then advance until their finitely many face relations hold. Any equality of two such maps holds at a common later stage by the same finite argument. Apply this to a horn and its containing simplex to obtain a filler in $Z_\infty$ from a Kan stage. By [F3], homotopy classes use the finite source $\Delta^r/\partial\Delta^r$, and equality uses its finite product with $\Delta^1$, fixing the basepoint. Representatives therefore lift to stages and every equality occurs at a later stage. This proves bijectivity of the canonical colimit map; functoriality makes it a group isomorphism. For the ordered calculation, [F4] gives a pointed homotopy equivalence $Z\to\operatorname{Sing}|Z|$. Postcomposition, followed by the pointed adjunction, gives $[A,Z]_*\cong[|A|,|Z|]_*$, naturally for any pointed simplicial $A$. Here brackets denote maps modulo homotopies fixing the basepoint. With $A=T_r$, [F2] identifies its realization with the ordered cube sphere $I^r/\partial I^r$, so these classes compute $\pi_r(Z)$. All constructions preserve the specified basepoints. [F1, F2, F3, F4, given, construct]

2.1 By [F3], the pointed mapping objects and hence iterated loops of a Kan complex are Kan. Direct currying gives $[A,\Omega B]_*\cong[K\wedge A,B]_*$: a representative $f$ goes to $(t,a)\mapsto f(a)(t)$, and the same formula with an extra $\Delta^1$ parameter gives the inverse correspondence on pointed homotopies. Apply this repeatedly with $A=T_r$, using step 1.1, to obtain the bijections $D_{r,m}$. They are group isomorphisms: realizing evaluation and using the ordered smash identification in [F2] gives a continuous map $S^1\wedge|\Omega B|\to|B|$. Its iterates define the same evaluation operation on continuous cube representatives, agreeing with currying on every realized simplicial representative. This operation preserves concatenation in a retained sphere coordinate. Concatenation in distinct cube coordinates has a common constant unit and satisfies the four-quarter-cube interchange identity, so those operations agree, as in the group-law argument of [F2]. This agrees with the prescribed first-coordinate group law. For $\Omega^m u$, applying $u$ after all old loop evaluations adds its loop as the new innermost one. Uncurrying puts its circle to the left of all old loop circles, giving exactly $v\circ(1_K\wedge\widehat f)$, where $\widehat f:T_{r+m}\to Z$ is the fully uncurried representative. This proves the displayed identity with $\Sigma_{\mathrm{left}}$. Evaluation commutes with all pointed maps, so the isomorphisms and identity are natural. [F1, F2, F3, step 1.1, construct] ∎
