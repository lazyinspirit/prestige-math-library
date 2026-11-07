---
id: lem-proper-torsion-base-change-reduces-to-projective-line-acyclicity
kind: lemma
title: Proper torsion base change reduces to projective-line acyclicity
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
- def-axiom-of-choice
- thm-etale-locally-standard-etale
- lem-injective-torsion-sheaves-on-projective-line-have-acyclic-closed-fibre
- lem-proper-henselian-restriction-for-sections-and-finite-etale-covers
- lem-proper-curve-torsion-cohomology-finite-and-field-invariant
- lem-finite-morphism-etale-direct-image-calculus
- lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses
- lem-torsion-etale-cohomology-classes-have-finite-constructible-coefficient-witnesses
- lem-site-slice-restriction-locality-and-composition
- lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives
- lem-chow-lemma-proper-noetherian
- thm-proper-quasi-finite-is-finite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Proper base change
    url: https://stacks.math.columbia.edu/tag/095S
    locator: Full displayed59.91.1–13 read; canonical prime-coefficient acyclicity, proper composition/descent and projective reduction reconstructed below. No geometric premise is imported.
axiom_use: Explicit AC, including the existing published Noetherian Chow and proper-quasi-finite interfaces; original unqualified batch25 remains unchanged and held.
---

## Statement

Assume the Axiom of Choice. Degree-zero proper exchange for torsion abelian sheaves, projective-line closed-fibre acyclicity for injective prime-coefficient sheaves, and field-extension invariance of proper-curve torsion cohomology together imply canonical torsion base change for every proper morphism f:X→S of Noetherian schemes and every base change T→S. The conclusion holds for all torsion abelian sheaves and for bounded-below complexes with torsion cohomology. The proof includes the actual Noetherian Chow/projective reduction at the stated choice scope.

## Statement references

[The Stacks Project, Section59.91](https://stacks.math.columbia.edu/tag/095S)

## Base-change diagram

```tikzcd
X_T = T \times_S X \arrow[r, "h"] \arrow[d, "f_T"'] & X \arrow[d, "f"] \\
T \arrow[r, "g"'] & S
```

The square is Cartesian: $h$ and $f_T$ are the projections from the fibre product, and $f_T$ is the base change of $f$ along $g$. The canonical comparison in the Statement is the exchange map across this square; the proof below establishes it by the stated local cohomology and descent arguments, independently of the drawing.

## Facts & Assumptions

**Given:** AC and the three geometric premises explicitly named in the conditional Statement, at their full stated scopes. For the last premise use the locally authored curve supplier F4. No unconditional completion of the other premises is asserted.

[A1] AC is explicit throughout. [[def-axiom-of-choice]]

[F1] Actual common-resolution and slice/composition calculus, with exact conservative geometric stalks and enough injectives at AC scope. [[lem-site-slice-restriction-locality-and-composition]] [[lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives]]

[F2] Finite direct image is exact and commutes with arbitrary base change. [[lem-finite-morphism-etale-direct-image-calculus]]

[F3] The corrected AC continuity and separate coefficient-colimit theorem apply to qcqs schemes and actual sheaf coefficients. [[lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses]] [[lem-torsion-etale-cohomology-classes-have-finite-constructible-coefficient-witnesses]]

[F4] Proper curve cohomology is invariant under extensions of separably closed fields at AC scope, in every degree for arbitrary torsion sheaves. [[lem-proper-curve-torsion-cohomology-finite-and-field-invariant]]

[F5] The published Noetherian Chow theorem under AC gives a proper surjective modification X′→X with X′ projective over the base. Proper quasi-finite maps are finite. [[lem-chow-lemma-proper-noetherian]] [[thm-proper-quasi-finite-is-finite]]

[F6] Proper degree-zero exchange for torsion abelian sheaves is a premise of the conditional Statement. At AC scope the proper-henselian supplier proves restriction for set sections, and the projective-line supplier proves injective prime-coefficient closed-fibre acyclicity. This conditional statement does not require degree-zero exchange for arbitrary non-torsion sheaves. [[lem-proper-henselian-restriction-for-sections-and-finite-etale-covers]] [[lem-injective-torsion-sheaves-on-projective-line-have-acyclic-closed-fibre]]

[F7] At the present AC scope an étale morphism is locally a monic standard étale chart; henselian factorization lifts its specified simple residue root. [[thm-etale-locally-standard-etale]]

## Proof

**Proof technique:** actual injective acyclicity criterion, proper descent, binary forms and Noetherian Chow.

1.1 Work first with Cartesian squares whose vertical proper maps have Noetherian bases and total schemes. Say f satisfies exchange if the canonical g^*Rf_*F→Rf′_*h^*F is an isomorphism for every torsion sheaf F and such a square. Here the map is always the pullback-counit map derived using the actual models of [F1]. We will prove exchange from exactly the geometric premises specified in the Statement, rather than assert those premises as established. [A1, F1, F2, F3, F4, F5, F6, F7, given, construct, algebra]

2.1 For a fixed f, suppose every prime ℓ and every injective Z/ℓ-module sheaf I on X has h^*I f′_*-acyclic in every such square. For F killed by ℓ take an actual injective resolution F→I• in Z/ℓ-module sheaves. Exact inverse image resolves h^*F by h^*I•, and the supposed acyclicity makes f′_*h^*I• compute Rf′_*h^*F. The degree-zero exchange premise identifies this complex termwise with g^*f_*I•. Since g^* is exact, its cohomology is g^*R^qf_*F. The termwise maps are the actual adjunction maps, so this proves the canonical exchange, not an abstract equality of groups. [A1, F1, F2, F3, F4, F5, F6, F7, step 1.1, given, construct, algebra]

3.1 Conversely exchange makes those positive higher direct images zero, since R^qf_*I=0 for q>0. Thus the preceding injective acyclicity is equivalent to exchange for prime coefficients. In each fixed degree comparisons are independent of resolutions: comparison maps extending the identity are lifted degree by degree into injective terms; the difference of two such lifts factors through boundary objects and is extended into the next injective term to produce a homotopy. Applying the additive functors preserves that homotopy. This is the concrete comparison required for the canonical derived map. [A1, F1, F2, F3, F4, F5, F6, F7, step 2.1, given, construct, algebra]

4.1 For a sheaf killed by n, use 0→F[ℓ]→F→Q→0 for a prime divisor ℓ of n; Q is killed by n/ℓ. Exact inverse image and naturality of the two long exact sequences reduce exchange for F to that for F[ℓ] and Q by the five-lemma. Induction gives every bounded exponent. Every torsion sheaf is the filtered union of F[n], indexed by divisibility; [F3] commutes higher direct image with that union on qcqs inverse images of affine étale objects. Thus the acyclicity criterion proves exchange for all torsion sheaves. No bounded-exponent restriction remains. [A1, F1, F2, F3, F4, F5, F6, F7, step 3.1, given, construct, algebra]

5.1 Exchange is stable under proper composition. Let u:Y→X and f:X→S both satisfy it. For injective prime-coefficient J on Y, u_*J is injective because its left adjoint u^* is exact. Under base change, h^*u_*J=u′_*h_Y^*J by the given degree-zero exchange. Exchange for u kills positive R^qu′_*h_Y^*J; exchange for f kills positive R^pf′_*h^*u_*J. The actual composition double complex has spectral sequence R^pf′_*R^qu′_*⇒R^(p+q)(f′u′)_*, which therefore kills every positive degree. The criterion proves exchange for f∘u. [A1, F1, F2, F3, F4, F5, F6, F7, step 4.1, given, construct, algebra]

6.1 If u:Y→X is proper surjective and both u and f∘u satisfy exchange, then f does too. For injective prime-coefficient I on X choose a monomorphism u^*I→J with J injective. The map I→u_*J is monic: at any given geometric x, a geometric lift to the nonempty fibre exists under AC, and its adjunction triangle recovers that monomorphism; conservative stalks finish. Injectivity of I splits it. After any base change the degree-zero exchange identifies h^*u_*J with u′_*h_Y^*J. Both R^qu′_*h_Y^*J and R^q(f′u′)_*h_Y^*J vanish for q>0 by hypothesis. The composition spectral sequence yields R^pf′_*h^*u_*J=0 for p>0. It also vanishes on its direct summand h^*I. Apply the criterion. [A1, F1, F2, F3, F4, F5, F6, F7, step 5.1, given, construct, algebra]

7.1 Finite maps satisfy exchange immediately from [F2]; their arbitrary base changes are finite. Thus so do closed immersions. These cases need no positive-dimensional proper theorem. Exchange and the geometric criterion are local under étale, hence under Zariski, restriction on the base: the relevant direct images are computed on those slices by [F1]. We may therefore restrict all subsequent geometry to an affine Noetherian base. [A1, F1, F2, F3, F4, F5, F6, F7, step 6.1, given, construct, algebra]

8.1 Assume exchange for P1_S→S for every Noetherian S. Its iterated base changes and composition give exchange for (P1_S)^n→S. The multiplication of binary linear forms gives a map (P1_S)^n→Pn_S: its coordinates are the coefficients of ∏(x_iT+y_iU). They cannot all vanish in a field fibre, since a product of nonzero linear forms is nonzero; hence they define a morphism. Over an algebraically closed residue field every homogeneous binary form factors into n linear factors. The fibre is the finite set of ordered factor lists up to the factor scalars, including multiplicities, so it is nonempty and zero-dimensional. There are no positive-dimensional geometric fibre components: a positive-dimensional finite-type algebra over an algebraically closed field has infinitely many closed points by Noether normalization, whereas these ordered lists give finitely many. The map is proper because its source is proper over S and its target is separated; it is quasi-finite by these finite-type zero-dimensional fibres, hence finite by [F5]. It is surjective by the same geometric-factorization calculation. [A1, F1, F2, F3, F4, F5, F6, F7, step 7.1, given, construct, algebra]

9.1 Finite exchange and the proper-surjective descent of step6.1 now imply exchange for Pn_S→S. Every projective morphism factors as a closed immersion into Pn_S followed by that projection, so satisfies exchange by steps5.1 and7.1. For an arbitrary proper f:X→S of Noetherian schemes, [F5] gives X′ projective over S and proper surjective u:X′→X. The map X′→Pn_X obtained from u and its projective embedding over S is a closed immersion: its graph into X′×S X is closed since X/S is separated, and then use the closed embedding of X′ in Pn_S. Hence u itself is projective, so both u and f∘u satisfy exchange. Step6.1 proves it for f. This is the actual Noetherian Chow reduction, with its AC premise carried explicitly. [A1, F1, F2, F3, F4, F5, F6, F7, step 8.1, given, construct, algebra]

10.1 It remains to establish the assumed projective-line case from the specified closed-fibre premise. Let A be any strictly henselian local ring, X=P1_A and X0 its closed fibre. For a Z/ℓ-module sheaf F choose an actual injective resolution F→I•. The closed-fibre acyclicity premise makes I•|X0 an acyclic resolution for global sections on X0. The given degree-zero proper exchange identifies Γ(X,I•)=Γ(X0,I•|X0) term by term: for any sheaf E on a strictly henselian local S, Γ(S,E) is its closed geometric stalk. A germ is represented on a pointed étale neighbourhood, which has a section: use [F7] at its rational residue point and lift the prescribed simple root by henselian factorization; the inverted chart functions are units since their residues are nonzero; equal germs agree after another such section. Thus apply the degree-zero exchange at the closed geometric point to f_*I•. No additional henselian-H0 premise is being introduced. Their common complex therefore gives H^q(X,F)≅H^q(X0,F|X0), canonically in every degree. This uses the actual I, not a false claim that arbitrary pullback preserves injectivity. [A1, F1, F2, F3, F4, F5, F6, F7, step 9.1, given, construct, algebra]

11.1 For arbitrary Noetherian S and a given geometric point s, take the directed system of pointed affine étale neighbourhoods and its strict-local limit A. Corrected continuity [F3], applied to P1 over that affine system, identifies (R^qf_*F)_s with H^q(P1_A,F|). The residue field of A is the separable closure of κ(s) in the specified geometric field. Step10.1 applies to this strict-local limit without requiring it to be Noetherian and identifies the latter cohomology with that of P1 over its residue field. The actual field-extension invariance [F4] then identifies it with the cohomology over the full geometric field. For a base change S′→S, both sides at a given geometric point of S′ are thus identified with the same geometric projective-line fibre. The maps are actual restriction maps from the common complexes, and [F4] applies to the intermediate separably closed field extension. Hence the canonical projective-line exchange map is an isomorphism on every geometric stalk. [A1, F1, F2, F3, F4, F5, F6, F7, step 10.1, given, construct, algebra]

12.1 Step11.1 establishes the projective-line assumption used in steps8.1–9.1, first for prime coefficients and then for all torsion coefficients by step4.1. Consequently exchange holds for all proper Noetherian f and all Noetherian base changes. Now permit arbitrary g:T→S. Locally take S=Spec(R) and T=Spec(B). Write B as the filtered union of its finitely generated R-subalgebras B_i. Each B_i is Noetherian. Since f is finite presentation, X_B is the inverse limit of X_B_i with affine transitions; the given coefficient is pulled back from X. Corrected continuity identifies its cohomology with the colimit of the cohomologies over B_i, in each fixed degree. Applying this to affine étale neighbourhoods of T and to every fixed zero/equality witness makes the canonical comparison an isomorphism of sheaves. On the other side inverse image is exactly the same neighbourhood colimit and is exact. Thus arbitrary, possibly non-Noetherian base changes are included without assuming their strict local rings are Noetherian. [A1, F1, F2, F3, F4, F5, F6, F7, step 11.1, given, construct, algebra, step 9.1]

13.1 For a bounded-below complex E with torsion cohomology, use its canonical truncation filtration. The two hypercohomology spectral sequences have E2 terms R^af_*H^b(E) and R^af′_*h^*H^b(E). Their comparison is the actual exchange map by functoriality of truncation. In a fixed total degree only finitely many pairs (a,b), with a≥0 and b bounded below, occur; the established sheaf comparisons therefore give an isomorphism on the abutment. No splitting into cohomology sheaves or unbounded convergence claim is needed. [A1, F1, F2, F3, F4, F5, F6, F7, step 12.1, given, construct, algebra]

14.1 The proof supplies precisely the full conditional reduction of the Statement, at explicit AC scope, with all coefficient orders and arbitrary base changes. The proper-henselian and projective-line suppliers are now recorded at AC scope. This conditional result still assumes the stated torsion degree-zero exchange premise and does not establish unqualified original batch25. Empty schemes and zero sheaves are preserved by every functor and satisfy the formulas directly. [A1, F1, F2, F3, F4, F5, F6, F7, step 13.1, given, construct, algebra] ∎

## Authoring status

Full local proof of the stated conditional reduction. The AC-scoped A5/A6 suppliers are recorded; torsion degree-zero exchange remains a stated premise. No unqualified old25 closure or independent acceptance is claimed.
