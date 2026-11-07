---
id: lem-generic-constructibility-for-smooth-proper-curve-torsion-cohomology
kind: lemma
title: Generic constructibility for smooth proper curve torsion cohomology
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
- def-axiom-of-choice
- thm-primitive-element-theorem-for-finite-separable-extensions
- thm-etale-locally-standard-etale
- thm-choice-implies-dependent-implies-countable-choice
- lem-proper-curve-torsion-cohomology-finite-and-field-invariant
- lem-proper-torsion-base-change-under-choice
- lem-proper-flat-fp-cohomology-perfect-complex
- thm-picard-zero-represented-by-jacobian
- lem-multiplication-by-n-on-abelian-scheme
- lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses
- lem-finite-morphism-etale-direct-image-calculus
- lem-faithfully-flat-effective-descent-of-modules-and-algebras
- lem-site-slice-restriction-locality-and-composition
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: SGA4 ExposeXIV section1
    url: https://grothendiecksga.com/read/sga4/en/XIV-1.html
    locator: Full displayed section1 read, especially1.11; the finite-stalk and Frobenius-matrix arguments below are local reconstructions, not imported geometric claims.
axiom_use: Explicit AC, which implies DC for the accepted coherent perfect-complex and field Picard suppliers. Proper torsion exchange is supplied separately at explicit AC scope.
---

## Statement

Assume the Axiom of Choice. Let f:X→S be a smooth proper relative curve over an integral Noetherian scheme, and let ℓ be prime. After replacing S by some nonempty open, every R^q f_*constant(Z/ℓ) is finite constructible, and its geometric H1 specialization maps are injective. On that open R^q=0 for q>2; in characteristic ℓ one has R^2=0, and off ℓ the degree-two sheaf is finite locally constant of rank equal to the number of geometric one-dimensional components.

## Statement references

[SGA4 XIV1.11](https://grothendiecksga.com/read/sga4/en/XIV-1.html)

## Facts & Assumptions

**Given:** AC, the integral Noetherian base, smooth proper relative curve and prime of the Statement.

[A1] AC is assumed and implies the DC hypothesis of the coherent and field Picard interfaces. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The local proper-curve proof gives finite geometric torsion cohomology, dimension bounds, field extension invariance, Artin–Schreier Frobenius-kernel calculation and the canonical Kummer H1/H2 formulas. [[lem-proper-curve-torsion-cohomology-finite-and-field-invariant]]

[F2] Canonical proper torsion base change at explicit AC scope includes the actual geometric stalk and base-change identifications used below. [[lem-proper-torsion-base-change-under-choice]]

[F3] At AC/DC scope a proper finitely presented flat family with a finitely presented base-flat coefficient module has a bounded finite-projective cohomology complex which computes every base change. In particular this applies to O of a smooth proper family. [[lem-proper-flat-fp-cohomology-perfect-complex]]

[F4] Field Picard has dimension g=dim H1(O); multiplication by invertible ℓ has finite étale kernel of rank ℓ^(2g). [[thm-picard-zero-represented-by-jacobian]] [[lem-multiplication-by-n-on-abelian-scheme]]

[F5] Corrected AC continuity descends a finite diagram of finite-presentation objects, finite sections and their equalities to a neighbourhood of the generic point. [[lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses]]

[F6] Finite direct image/base change and actual slice/composition calculus are available. Finite locally free algebras descend by the faithful-flat equalizer. [[lem-finite-morphism-etale-direct-image-calculus]] [[lem-site-slice-restriction-locality-and-composition]] [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

[F7] A finite separable extension has a primitive element, and the monic derivative-invertible chart is étale, at the present AC scope. [[thm-primitive-element-theorem-for-finite-separable-extensions]] [[thm-etale-locally-standard-etale]]

## Proof

**Proof technique:** coherent finite complexes, field Picard and Frobenius ranks, then a finite-stalk criterion.

1.1 Shrink the integral Noetherian base to a nonempty affine S=Spec(R), with fraction field K. The empty generic curve case may be removed entirely: its proper image is closed and avoids the generic point. Thus suppose the generic curve is nonempty. The smooth proper generic fibre has finitely many geometric connected components, all defined over one finite separable extension K′/K. To see separability, its global function algebra is a finite-dimensional reduced algebra and remains reduced after every field extension because the fibre is geometrically reduced; each field factor is therefore separable. Its idempotents index the geometric connected components. [A1, F1, F2, F3, F4, F5, F6, F7, given, construct, algebra]

2.1 Realize K′ by a finite étale cover S′→S after shrinking S: choose a primitive separable polynomial, clear its finitely many coefficient denominators, and invert its discriminant. The resulting monic algebra is finite free and étale with generic field K′, hence is a domain by its injection into K′. Each generic component idempotent on X_K′ extends to a section of O on X_S′ after another base shrink: on a finite affine cover it is given by finitely many fractions, and their restrictions and idempotent, orthogonality and sum-one equations hold after clearing finitely many denominators. They split X_S′ into finitely many open-and-closed smooth proper families. Constructibility and local constancy descend under a finite surjective étale base change, directly by the local definition. It is enough to prove the assertion for one such family with geometrically connected generic fibre. [A1, F1, F2, F3, F4, F5, F6, F7, step 1.1, given, construct, algebra]

3.1 Apply [F3] to O of this family and choose a bounded finite-free complex after shrinking the affine base. Over K its only nonzero cohomology is K in degree0 and a K-vector space of some dimension g in degree1. Row/column operations split the differentials into identity and zero blocks over K. Their finite matrices and inverses exist over R after inverting one nonzero denominator, and the zero remaining blocks are already zero since R is a domain. Thus the complex over that open is the direct sum of contractible identity blocks, R in degree0 and R^g in degree1. The actual universal base-change property gives H0(X_L,O)=L and H1(X_L,O)=L^g for every residue-field extension L, and higher O-cohomology zero. In particular every geometric fibre is connected, since a disconnected proper fibre would have a nontrivial idempotent in its one-dimensional global algebra. [A1, F1, F2, F3, F4, F5, F6, F7, step 2.1, given, construct, algebra]

4.1 Write G_q=R^q f_*constant(F_ℓ). By [F2] and [F1], its stalks are the cohomology of the geometric fibres. In particular G_q=0 for q>2. G_0 has exactly ℓ elements in every geometric stalk of the geometrically connected family. If the generic characteristic is not ℓ, shrink so ℓ is invertible everywhere. Then [F1] and [F4] give |(G_1)_s|=ℓ^(2g) and |(G_2)_s|=ℓ for every geometric s. Indeed H1 is the geometric ℓ-kernel of a genus-g Jacobian and H2 is Pic/ℓ=Z/ℓ by degree. No relative Picard representability is assumed here: these are separate field-fibre calculations. [A1, F1, F2, F3, F4, F5, F6, F7, step 3.1, given, construct, algebra]

5.1 If the generic characteristic is ℓ, the integral base has characteristic ℓ. On the now-free module R1 f_*O≅R^g the absolute Frobenius induces a semilinear map represented by a matrix A: x↦A x^[ℓ]. This description is compatible with field base change: compute Frobenius on the finite affine Čech complex, and use the universal coherent identifications from step3.1. For a geometric residue field, the stable Frobenius image has dimension equal to the rank of A A^[ℓ]···A^[ℓ^(g−1)]. Dimensions of the descending images stabilize within g steps; over a perfect field Frobenius restricts bijectively to that stable image. In the case g=0 use rank0 without a matrix product. [A1, F1, F2, F3, F4, F5, F6, F7, step 4.1, given, construct, algebra]

6.1 Let r be that matrix rank over K. Invert one nonzero r-minor; every larger minor vanishes identically because R is a domain and it vanishes over K. Its rank at every geometric point of the resulting open is r. The actual Artin–Schreier calculation in [F1] now gives |(G_1)_s|=ℓ^r and G_2=0: the nilpotent Frobenius part contributes no kernel of Frob−1, while the stable-image equations have a finite étale kernel of rank ℓ^r. This argument only uses the matrix ranks on perfect geometric fields; it does not treat the image of a semilinear map over an imperfect ring as an R-submodule. [A1, F1, F2, F3, F4, F5, F6, F7, step 5.1, given, construct, algebra]

7.1 We give the finite-stalk argument that turns these constant cardinalities into generic local constancy. Let G be an étale sheaf of finite groups whose geometric stalk cardinality on an integral base is a fixed integer N, and whose geometric generic stalk is finite. Its generic continuous G_K-action factors through a finite quotient. Choose one finite separable extension trivializing it, and spread a corresponding finite étale domain V over a nonempty base open as in step2.1. The finitely many generic elements of G are represented by sections on a further such V after shrinking: by the definition of the geometric generic stalk each element occurs on an étale neighbourhood, and finitely many neighbourhoods have a common refinement. Every relation in the finite multiplication table, together with its identity section, holds after a further shrink. Thus there is a sheaf homomorphism constant(M)→G on V, where M is the generic group and |M|=N. [A1, F1, F2, F3, F4, F5, F6, F7, step 6.1, given, construct, algebra]

8.1 That homomorphism is injective at every geometric point of V. If a nonidentity m became identity at some point, it would do so on an étale neighbourhood of that point. The image of that neighbourhood is a nonempty open in the integral V and hence contains the generic point. At a geometric generic point the homomorphism would therefore identify m with the identity, contrary to the chosen trivialization. The target generic action on V is trivial, so this contradiction is independent of the chosen geometric generic lift. Both source and target stalks have cardinality N, so injectivity implies surjectivity. Exact conservative stalks give an isomorphism. This proves generic local constancy from the actual cardinality calculation, rather than assuming that arbitrary finite stalks alone imply constructibility. [A1, F1, F2, F3, F4, F5, F6, F7, step 7.1, given, construct, algebra]

9.1 Apply steps7.1–8.1 to G_0,G_1,G_2, using the constant finite cardinalities of steps4.1 or6.1. There are only three sheaves and finitely many generic components, so intersect the finitely many resulting dense opens and descend from the finite étale covers. Every G_q is consequently finite locally constant there (zero for q>2). In characteristic ℓ, G_2 is zero; off ℓ it has one Z/ℓ factor for each geometric one-dimensional component. Undoing step2.1 makes its rank the locally constant component count on the chosen open. [A1, F1, F2, F3, F4, F5, F6, F7, step 8.1, given, construct, algebra]

10.1 For completeness prove the claimed geometric H1 specialization injectivity on this open. First note that derived H1 with constant finite abelian coefficients classifies its torsors: in an injective embedding M→J, the quotient sequence identifies H1(M)=Γ(J/M)/Γ(J). A quotient section pulls back to an M-torsor in J. Conversely the associated J-torsor splits, because the map from the augmentation kernel of the free abelian sheaf on an M-torsor sends a formal difference of two torsor points to their unique M-difference, then to J; injectivity extends this to the free sheaf. The resulting equivariant map from the torsor to J gives a global quotient section, and changing the extension changes it by Γ(J). Finite constant torsors are represented by finite étale schemes: a local trivialization gives finite free algebras, their translation transition maps satisfy descent, and [F6] glues them effectively. This is the actual H1 model, not a definition replacing derived H1. [A1, F1, F2, F3, F4, F5, F6, F7, step 9.1, given, construct, algebra]

11.1 Fix a geometric specialization t→s and use the strict henselization of the local base at s with the prescribed geometric residue field. A section of G_1 at its closed point is represented by H1 of the total curve there. Indeed the closed point has cofinal pointed étale neighbourhoods, every cover of a strictly henselian local scheme has a section, and its section functor is exact; Leray plus the proper exchange [F2] gives that identification. Represent the class by an F_ℓ-torsor T over the total smooth proper curve. If it becomes zero at t, its geometric fibre over t is the disjoint union of ℓ copies of that curve. [A1, F1, F2, F3, F4, F5, F6, F7, step 10.1, given, construct, algebra]

12.1 Replace this strict-local base by the local domain obtained by quotienting by the prime of the specified t. Its closed geometric fibre stays the same; its generic fibre is the chosen t-fibre up to field extension. The torsor T is again smooth proper and flat over that domain. Apply [F3] to O_T. At a local trivialization its H0 is the kernel of the first matrix of a nonnegative finite-free complex. Matrix rank can only decrease under specialization, so the dimension of geometric H0 at the closed point is at least its generic dimension ℓ. On the other hand a finite étale cover of degree ℓ of a connected proper geometric curve has at most ℓ connected components, and every connected component has only its field as global functions. Hence its closed-fibre H0 dimension is at most ℓ. Equality forces ℓ degree-one components; the closed-fibre torsor is trivial. The original H1 class at s is therefore zero. This proves injectivity of each actual specialization map. [A1, F1, F2, F3, F4, F5, F6, F7, step 11.1, given, construct, algebra]

13.1 The conclusions are insensitive to removal of finitely many dense-open complements and to finite étale descent. They include disconnected relative curves by the component decomposition, and the identically empty case by step1.1. All computations concern actual stalk, coefficient and base-change maps. Thus the full claimed generic constructibility, H1 specialization injectivity and H2 descriptions follow from the actual proper-exchange supplier [F2]. The proper-exchange theorem is a separate AC-scoped local supplier; no unqualified theorem is inferred here. [A1, F1, F2, F3, F4, F5, F6, F7, step 12.1, given, construct, algebra] ∎

## Authoring status

Dependent local proof using the separately supplied AC-scoped proper exchange. The original unqualified proper-base-change item remains held; no independent acceptance is asserted.
