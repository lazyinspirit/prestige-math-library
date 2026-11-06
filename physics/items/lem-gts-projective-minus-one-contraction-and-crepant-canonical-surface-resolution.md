---
id: lem-gts-projective-minus-one-contraction-and-crepant-canonical-surface-resolution
kind: lemma
title: "Projective minus-one contraction and crepant canonical-surface resolution"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - lem-gts-log-adjoint-vanishing-on-snc-pairs
  - lem-gts-curve-nef-ample-perturbation-by-nakai-construction
  - thm-hodge-index-theorem-for-smooth-projective-surfaces
  - thm-ample-powers-very-ample-proper-base
  - thm-serre-criterion-ampleness
  - lem-etale-neighbourhood-isolated-fibre-point-finite
  - thm-purity-for-finite-covers-of-regular-local-rings
  - lem-etale-formal-local-isomorphism
  - lem-completion-preserves-embedding-dimension
  - thm-completion-preserves-regular-local-rings
  - thm-normalization-finite-birational-surjective
  - lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point
  - lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces
  - thm-serre-vanishing
  - thm-leray-spectral-sequence-for-sheaf-cohomology
  - lem-projection-formula-invertible-twist
  - thm-proper-pushforward-coherent
  - def-axiom-of-choice
dependency_roles:
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  lem-gts-curve-nef-ample-perturbation-by-nakai-construction: mathematical-premise
  thm-hodge-index-theorem-for-smooth-projective-surfaces: mathematical-premise
  thm-ample-powers-very-ample-proper-base: mathematical-premise
  thm-serre-criterion-ampleness: mathematical-premise
  lem-etale-neighbourhood-isolated-fibre-point-finite: mathematical-premise
  thm-purity-for-finite-covers-of-regular-local-rings: mathematical-premise
  lem-etale-formal-local-isomorphism: mathematical-premise
  lem-completion-preserves-embedding-dimension: mathematical-premise
  thm-completion-preserves-regular-local-rings: mathematical-premise
  thm-normalization-finite-birational-surjective: mathematical-premise
  lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point: mathematical-premise
  lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  thm-leray-spectral-sequence-for-sheaf-cohomology: mathematical-premise
  lem-projection-formula-invertible-twist: mathematical-premise
  thm-proper-pushforward-coherent: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Stacks Project, Resolution of Surfaces, contraction context; direct projective construction using the
      supplied finite-cover purity theorem below
    url: https://stacks.math.columbia.edu/download/resolve.pdf
    locator: Resolution of Surfaces, §16, Lemmas16.1–16.9 (PDF pp.46–51), including16.9 proof. Contraction context
      only; the local proof uses its declared purity and étale-completion suppliers instead of importing Stein/formal
      functions.
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-projective-minus-one-contraction-and-crepant-canonical-surface-resolution.md
dependency_level: 2
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

(Contraction) Let T be a smooth integral complex projective surface and E⊂T a smooth rational curve with E²=−1. There is a smooth integral projective surface $T_1$ and a projective birational morphism $c:T→T_1$ contracting exactly E to a smooth point and giving an isomorphism off E.

(Canonical Gorenstein resolution) Let S be an integral normal complex projective surface with Cartier $K_S$. Assume S is canonical in the actual discrepancy sense: on each smooth projective resolution π:T→S, one has $K_T=π^*K_S+\sum  a_i E_i$ with $a_i$ nonnegative integers. Starting from a projective resolution, finitely many of the preceding contractions over S give a smooth projective resolution $π_0:T_0→S$ with $K_{T_0}=π_0^*K_S$ and no exceptional minus-one curve. Moreover $R¹π_{0*}O_{T_0}=0$ and $H¹(T_0,O_{T_0})≅H¹(S,O_S)$. In particular $K_S∼−qH$, for H ample Cartier and integer q≥0, gives $K_{T_0}∼−qπ_0^*H$; if $q>0$ then $H^i(T_0,O_{T_0})=0$ for $i>0$. When $q=0$ and $H¹(S,O_S)=0$, the resolution has exactly the K-trivial and H¹-zero hypotheses used by the nef-big K3 argument. Simple connectivity is not asserted or needed.

Assume AC through the cited projective, cohomological and purity suppliers. No rational-Gorenstein embedding-dimension theorem is needed here; the BMT lead owns the separate ICIS obstruction.


## Statement references

[[lem-gts-log-adjoint-vanishing-on-snc-pairs]]

[[lem-gts-curve-nef-ample-perturbation-by-nakai-construction]]

[[thm-hodge-index-theorem-for-smooth-projective-surfaces]]

[[thm-ample-powers-very-ample-proper-base]]

[[thm-serre-criterion-ampleness]]

[[lem-etale-neighbourhood-isolated-fibre-point-finite]]

[[thm-purity-for-finite-covers-of-regular-local-rings]]

[[lem-etale-formal-local-isomorphism]]

[[lem-completion-preserves-embedding-dimension]]

[[thm-completion-preserves-regular-local-rings]]

[[thm-normalization-finite-birational-surjective]]

[[lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point]]

[[lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces]]

[[thm-serre-vanishing]]

[[thm-leray-spectral-sequence-for-sheaf-cohomology]]

[[lem-projection-formula-invertible-twist]]

[[def-axiom-of-choice]]

## Facts & Assumptions

[A1] The contraction starts with a smooth rational curve of square −1 on a smooth PROJECTIVE surface. The canonical-resolution conclusion retains integral nonnegative discrepancies, Cartier canonical class and an actual projective resolution; the K3 consequence additionally retains $K_S∼0$ and $H¹(S,O_S)=0$. These are explicit hypotheses; no singularity classification or simple connectivity is inferred.

[F1] The exact suppliers are [[lem-gts-log-adjoint-vanishing-on-snc-pairs]], [[lem-gts-curve-nef-ample-perturbation-by-nakai-construction]], [[thm-hodge-index-theorem-for-smooth-projective-surfaces]], [[thm-ample-powers-very-ample-proper-base]], [[thm-serre-criterion-ampleness]], [[lem-etale-neighbourhood-isolated-fibre-point-finite]], [[thm-purity-for-finite-covers-of-regular-local-rings]], [[lem-etale-formal-local-isomorphism]], [[lem-completion-preserves-embedding-dimension]], [[thm-completion-preserves-regular-local-rings]], [[thm-normalization-finite-birational-surjective]], [[lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point]], [[lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces]], [[thm-serre-vanishing]], [[thm-leray-spectral-sequence-for-sheaf-cohomology]], [[lem-projection-formula-invertible-twist]], [[def-axiom-of-choice]]. [[thm-proper-pushforward-coherent]] gives coherence of every $R^qπ_*O_T$ in step 16.1 because π is projective and S is Noetherian. The finite-after-etale-localization and finite-cover purity statements are used at their actual dimension-two regular-local scope. The local smoothness proof uses etale completion comparison only with the stated identical complex residue fields. No unproved Stein or proper formal-functions theorem is imported.

## Proof

**Given:** Exactly the Statement data.

1.1 Choose an ample Cartier divisor D on T and put $d=D E>0$ and $B=D+dE$. Then B $E=0$, $B²=D²+d²>0$, and $B C>0$ for every irreducible curve C≠E, because $D C>0$ and E C≥0. Adjunction gives $K_T E=−1$. [given, A1, F1, algebra]

2.1 For each $j=0,1,2$ and all sufficiently large integers k, the divisor $kB−jE−K_T$ is ample. Indeed choose k so that $kD−K_T$ is ample and kd−j≥0. On C≠E its intersection is $(kD−K_T)C+(kd−j)E C>0$; on E it is $j+1>0$. Its square has leading term $k²B²>0$ for sufficiently large k. The actual surface Nakai--Moishezon criterion proves ampleness. Choose one k working for all three j and with kD very ample. [given, A1, F1, step 1.1, algebra]

3.1 Smooth adjoint vanishing gives H¹(T,kB−E)=H¹(T,kB−2E)=0. Hence sections of kB surject onto $H⁰(E,O_E)=C$, and sections of kB−E surject onto $H⁰(E,O_E(1))$. The complete |kB| is globally generated along E. Off E, multiply all sections of kD by the canonical section of kdE: these give a subsystem of |kB| generating and separating points and tangent vectors on T minus E. These sections all vanish on E and have no common zero off E, so no point outside E has the same image as E. [given, A1, F1, step 2.1, algebra]

4.1 Thus the complete |kB| gives a projective morphism with fibre E over one point and an immersion on the complement. Take the normalization $T_1$ of its projective image. Normalization is finite; the morphism factors through it because T is normal. This is a projective birational morphism $c:T→T_1$, an isomorphism outside E, with exactly E over the contracted point q. It remains to prove q smooth; normality alone does not supply that assertion. [given, A1, F1, step 3.1, algebra]

5.1 Choose $s_0∈H⁰(T,kB)$ restricting to a nonzero constant on E. Choose $s_1,s_2∈H⁰(T,kB−E)$ whose restrictions form a basis of $H⁰(E,O_E(1))$. Regard these as sections of kB vanishing along E. On the chart $s_0≠0$ their ratios $u=s_1/s_0$ and $v=s_2/s_0$ are regular functions descending to $T_1$: they are ratios of the actual coordinates of the complete projective image. [given, A1, F1, step 4.1, algebra]

6.1 Near E the ideal generated by u,v is exactly $O_T(−E)$. Their images generate its conormal quotient $O_E(1)$, and Nakayama gives generation along E and hence on an open neighbourhood. Write locally $u=t$ a, $v=t$ b for a local equation t of E; a and b have no simultaneous zero there. The two blowup charts (u,v/u) and (u/v,v) therefore define a morphism to $Bl_0(A²)$ near E. Its restriction to E is the degree-one map [a:b]:P¹→P¹ and hence an isomorphism. On a chart where a is a unit, du is nonzero in the normal direction and the derivative of b/a is nonzero in the tangent direction along E. The analogous calculation holds where b is a unit. Thus this morphism is etale at every point of E. [given, A1, F1, step 5.1, algebra]

7.1 The two functions define $h:T_1→A²$ near q. Their common zero set pulls back to E near E, so q is an isolated point of $h^{-1}(0)$. Shrink around q using properness of c: the image of the closed complement of the etale neighbourhood of E does not contain q. On the resulting punctured neighbourhood of q, h is etale, since c and $Bl_0(A²)→A²$ are isomorphisms off their exceptional curves. This is an actual coordinate calculation, not a formal-neighbourhood assertion. [given, A1, F1, step 6.1, algebra]

8.1 Apply the exact finite-after-elementary-etale-localization theorem to h at the isolated fibre point q. It gives an elementary etale neighbourhood (U',0')→(A²,0), with the same residue field C, and an affine open V in the base change of the chosen neighbourhood of $T_1$ that is finite over U' and has just one point q' over 0', with residue field C. Localize at 0'. The base ring A' is regular of dimension two; V is normal, and its restriction to Spec A' minus its closed point is finite etale by Section 2. [given, A1, F1, step 7.1, algebra]

9.1 The supplied purity theorem for finite covers of regular local rings extends that punctured finite etale cover to a finite etale cover of Spec A'. The existing finite normal V is that extension: both are the integral closure of A' in the same finite generic algebra, so they agree. Therefore V is etale over A' also at q', and its local ring is regular. [given, A1, F1, step 8.1, algebra]

10.1 The map from V to $T_1$ is etale at q' with the same complex residue field. Its completed local ring is therefore the completed local ring of $T_1$ at q. Completion preserves dimension and embedding dimension, so regularity of the former implies regularity of $O_{T_1,q}$. This proves the contraction conclusion with the exact purity dependency exposed. It does not call a normal contraction target smooth without a proof. [given, A1, F1, step 9.1, algebra]

11.1 Suppose also π:T→S is a projective morphism and π(E) is one point. It factors through $c:T→T_1$. To see this without Stein factorization, take the closure of the graph of the induced rational map $T_1⇢S$ in $T_1×S$. The morphism from T to this graph exists by (c,π), is onto, and the fibre of the graph over q is the image of π(E), a single point. The projection of the graph to normal $T_1$ is thus proper birational and quasi-finite at that point. The supplied proper-birational-normal-target theorem makes it an isomorphism near q; elsewhere it already is the graph of a morphism. Hence the rational map extends and π factors through the smooth $T_1$. [given, A1, F1, step 10.1, algebra]

12.1 Such a contraction strictly lowers the numerical Picard rank: pullbacks of numerical divisor classes from $T_1$ are orthogonal to E, while E²=−1. Pullback is injective for a birational morphism, so its image is a proper subspace of the finite-dimensional numerical divisor space of T. Thus only finitely many consecutive such contractions can occur. Finite dimensionality follows also by mapping first Chern classes into the finite-dimensional H² of the compact projective surface; homologically trivial classes are numerically trivial by the intersection pairing. [given, A1, F1, step 11.1, algebra]

13.1 Start with a smooth projective resolution of S and contract any exceptional smooth rational minus-one curves, using Section 4 to remain over S. Termination follows from the rank drop. On the terminal smooth resolution write $K_T=π^*K_S+C$ with C effective integral exceptional by the actual canonical hypothesis. The exceptional intersection form is negative definite: the pullback of an ample divisor on normal S has positive square, is orthogonal to all exceptional curves, and the actual Hodge-index equality criterion gives negative definiteness by the nonnegative-off-diagonal argument used in the nonvanishing packet. [given, A1, F1, step 12.1, algebra]

14.1 If C≠0 then $C²<0$. Since C²=Σ $a_i(C E_i)$, some component with $a_i>0$ has $K_T E_i=C E_i<0$, since $π^*K_S E_i=0$. Adjunction gives $K_T E_i=2p_a(E_i)−2−E_i²$. [given, A1, F1, step 13.1, algebra]

15.1 The negative integer $E_i²$ and $p_a(E_i)≥0$ force $p_a(E_i)=0$ and $E_i²=−1$. An integral projective curve of arithmetic genus zero over C is smooth rational: the normalization genus and the finite nonnormality length are nonnegative and sum to its arithmetic genus. Thus $E_i$ is an exceptional smooth rational minus-one curve, contradicting termination. Consequently $C=0$ and $K_T=π^*K_S$. This argument uses only Cartier $K_S$ and canonical discrepancies, not triviality of $K_S$. [given, A1, F1, step 14.1, algebra]

16.1 Let H be an ample Cartier divisor on S and $L=π^*H$. For all sufficiently large integers n, $nH−K_S$ is ample. Its pullback $N=π^*(nH−K_S)$ is nef and big. The actual smooth nef-big adjoint vanishing theorem gives $H¹(T,K_T+N)=H¹(T,nL)=0$, using the proved crepancy $K_T=π^*K_S$. For n sufficiently large, Serre vanishing and the Leray sequence identify $H⁰(S,R¹π_*O_T⊗O_S(nH))$ with H¹(T,nL), because $π_*O_T=O_S$ by normality and the outside coherent cohomology groups vanish. A nonzero coherent sheaf has nonzero sections after sufficiently high ample twist, so $R¹π_*O_T=0$. [given, A1, F1, step 15.1, algebra]

17.1 The low-degree Leray sequence now identifies $H¹(T,O_T)≅H¹(S,O_S)$. If $K_S∼0$ and $H¹(S,O_S)=0$, the resolution has $K_T∼0$ and $H¹(O_T)=0$, exactly as required by the nef-big K3 argument. If $K_S∼−qH$ with integer $q>0$, then $K_T+qL∼0$ and qL is nef and big; the same adjoint vanishing gives $H^i(T,O_T)=0$ for every $i>0$. This covers $q=1,2,3$ weak del-Pezzo/quadric/plane resolution inputs without assuming a rational-singularity theorem. No stronger classification, proper formal-functions theorem or simple connectivity is asserted. [given, A1, F1, step 16.1, algebra] ∎

## Remarks

This is a research proposal for the bounded projective minimal-resolution prerequisite used by the primitive-system argument. It does not supply the separate local ICIS rank obstruction or the canonical-cut protocol. Source references provide context; the actual load-bearing theorems are the declared local suppliers, and no new external theorem is imported.
