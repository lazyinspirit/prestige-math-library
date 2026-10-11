---
id: lem-artin-affine-vanishing-for-constructible-perverse-sheaves
kind: lemma
title: "Artin vanishing on complex affine varieties"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [def-axiom-of-choice,
       lem-complex-stratified-morse-data-have-tangential-normal-product-and-link-description,
       lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions,
       thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes,
       lem-analytic-constructible-sheaves-admit-coherent-six-operations,
       def-algebraically-constructible-complex-of-analytic-field-sheaves,
       def-canonical-t-structure-on-a-derived-category,
       def-finite-complex-algebraic-whitney-stratification-and-control-data]
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "M. Goresky, Lecture Notes on Sheaves and Perverse Sheaves (version of June 26, 2026)"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "§13 (Morse theory with constructible coefficients) and §17.7, §17.9 (complex-link vanishing and Stein/affine vanishing)"
---

## Statement

Assume the Axiom of Choice as inherited from the constructible derived-category construction. If $Z$ is a complex affine algebraic variety of complex dimension $d$ and $F$ is an algebraically constructible sheaf of finite-dimensional $k$-vector spaces, then $H^q(Z,F)=0$ for $q>d$. More precisely the bound is the dimension of the closure of its support. If $P\in{}^pD^{\le0}_c(Z;k)$, then $H^q(Z,P)=0$ for $q>0$. If $P\in{}^pD^{\ge0}_c(Z;k)$, then $H_c^q(Z,P)=0$ for $q<0$. The empty variety and zero coefficients give zero groups.

## Facts & Assumptions

**Given:** the affine complex algebraic variety $Z$, its algebraic Whitney strata, the constructible complex $P$ or sheaf $F$ over the field $k$, and the choice assumption of the Statement.

[F1] The affine finite-critical strongly plurisubharmonic distance exhaustion is supplied by [[lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions]], and the local stratified Morse supplier [[lem-complex-stratified-morse-data-have-tangential-normal-product-and-link-description]] gives the following exact input: a generic proper strongly plurisubharmonic stratified Morse exhaustion on an affine algebraic variety has finitely many critical points, and across a critical point on a stratum of complex dimension $s$ and real tangent Morse index $\lambda$ its relative constructible cohomology is the normal Morse cohomology shifted by $\lambda$; the normal pair has the constructible-cohomology triangle between the stalk on the cone and a collared complex link of dimension at most $d-s-1$, including an empty link; unrefined transverse link strata have the same codimensions relative to the allowed upper dimension $d-s-1$ as their original strata relative to $d$, and further compatible refinements only weaken the stalk upper bound; this upper-dimension convention covers nonpure varieties and the vocabulary is that of [[def-finite-complex-algebraic-whitney-stratification-and-control-data]]. For a local link cut out by a ball, the supplier identifies its closed and open versions by a stratum-preserving collar, chooses a nearby generic distance center preserving that collar, and uses $-\log(R^2-\phi_a)$ on the open ball as a proper strongly plurisubharmonic exhaustion with the same finite critical points and Hessian indices; a local ball-cut link is not assumed to be a closed affine variety, and regular intervals preserve constructible cohomology, including the interval above the last critical value. This includes the sheaf-valued product and link identifications, not just a statement about ordinary real CW dimension.

[F2] The support definition of the perverse upper aisle is $\dim\operatorname{supp}\mathcal H^b(P)\le-b$, and the perverse aisles are the two halves of the ordinary middle perverse t-structure ([[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]], [[def-canonical-t-structure-on-a-derived-category]]). Verdier duality exchanges the two perverse aisles, and finite constructible duality identifies $H_c^q(Z,P)$ with the dual of $H^{-q}(Z,DP)$ ([[lem-analytic-constructible-sheaves-admit-coherent-six-operations]], [[def-algebraically-constructible-complex-of-analytic-field-sheaves]]); the Axiom of Choice is assumed as in [[def-axiom-of-choice]].

## Proof

**Given:** the data of the Statement and the exact stratified Morse input [F1]. We prove the stalk-codimension version of the Morse bound first, by induction on the allowed complex codimension of a stratum; in this local induction $d$ may be any upper bound on the actual complex dimension, which permits nonpure links without claiming that they attain that upper bound.

1.1 At a critical point on a complex manifold of dimension $s$, a strongly plurisubharmonic function has tangent Morse index at most $s$. Indeed, if its real negative subspace had dimension larger than $s$, it would meet its image under multiplication by $\sqrt{-1}$ nontrivially, so it would contain a real two-plane spanned by $v,\sqrt{-1}v$; the sum of the Hessian on these two vectors is a positive multiple of the Levi form on $v$, positive for a strongly plurisubharmonic function, whereas both Hessian values would instead be negative, a contradiction. [given, algebra]

2.1 Suppose a constructible complex $A$ has stalks satisfying $\mathcal H^q(A)_x=0$ for $q>d-s$ on each stratum of complex dimension $s$, and put $c=d-s$. For $c=0$ the normal Morse pair is the point pair and its cohomology has the asserted upper bound zero. Assume the upper normal-Morse bound for all smaller codimensions. The complex link at a codimension-$c$ stratum has dimension at most $c-1$, and we use $c-1$ as an allowed upper dimension even when the variety is nonpure; an empty link has zero cohomology. A critical point of its collar-compatible logarithmic strongly plurisubharmonic exhaustion lies on a link stratum of dimension $c-1-c'$, where $c'$ is its codimension relative to that allowed upper dimension and satisfies $0\le c'\le c-1<c$. Before refinement its stalk bound is the original codimension bound, and refinement lowers the stratum dimension and therefore weakens the required upper bound, so the same stalk hypothesis holds. By the induction hypothesis its normal Morse cohomology vanishes above $c'$, and by step 1.1 its tangential index is at most $c-1-c'$; thus its relative link cohomology vanishes above $c-1$. Starting with the empty sublevel and applying the long exact pair sequences at each critical value proves that the link cohomology vanishes above $c-1$, and the collared-link and regular-interval clauses of [F1] identify this calculation with the full complex link. [F1, step 1.1, induction, base, ih]

3.1 The normal Morse triangle has stalk cohomology in one term and link cohomology in the other; in degrees $q>c$ the stalk term vanishes by the hypothesis on $A$, and the link term in degree $q-1$ vanishes by step 2.1, so its long exact sequence makes normal Morse cohomology vanish above $c$. This completes the codimension induction. For $Z$ itself, at a critical point on an $s$-dimensional stratum the normal degree is at most $d-s$ and the tangential index is at most $s$, so [F1] makes each relative group vanish above $d$; the finitely many critical-value exact sequences, followed by the regular interval above the last value, give $H^q(Z,A)=0$ for $q>d$. [F1, step 1.1, step 2.1, induction]

4.1 A degree-zero sheaf $F$ satisfies the stalk hypothesis of step 2.1 because every codimension $d-s$ is nonnegative and $H^q(F)=0$ for $q\ne0$, which proves its dimension-$d$ bound. Replace $Z$ by the closed algebraic support closure of $F$, of dimension $e$: extension by zero along that closed embedding recovers $F$ and its global cohomology, so the same argument gives the sharpened bound $q>e$. [F1, step 3.1, algebra]

5.1 For $P\in{}^pD^{\le0}_c(Z;k)$ use its finite hypercohomology spectral sequence $E_2^{a,b}=H^a(Z,\mathcal H^b(P))$. By [F2] the support dimension of $\mathcal H^b(P)$ is at most $-b$, so step 4.1 makes $E_2^{a,b}=0$ whenever $a+b>0$, and the bounded spectral sequence therefore gives $H^q(Z,P)=0$ for $q>0$. For $P\in{}^pD^{\ge0}_c$, apply this result to $DP\in{}^pD^{\le0}_c$ and the duality in [F2] to obtain $H_c^q(Z,P)=0$ for $q<0$. Empty spaces and zero sheaves are covered by the zero spectral sequence. [F2, step 4.1, algebra, discharge-induction] ∎

## Remarks

This is the affine-cohomology deduction relative to the exact local Morse product and link supplier [F1]; the local construction, including its boundary and complex-link coefficient components, is embedded in that supplier's proof. Goresky prints the codimension induction as Theorem 17.7 and the affine vanishing as Theorem 17.9; the nonpure upper-dimension, nearby-center and collared logarithmic exhaustion clauses are explicit local inputs rather than a treatment of a ball-cut link as affine. The relative affine-morphism one-sided perverse exactness is a separate later deduction, not silently included here.
