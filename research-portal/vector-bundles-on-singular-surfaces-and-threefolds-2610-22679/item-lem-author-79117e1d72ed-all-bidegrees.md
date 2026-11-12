---
title: The exact projective bundle map in every integer bidegree
status: published
research_item: lem-author-79117e1d72ed-all-bidegrees
dependency_level: 14
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes (v1)
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Introduction p.2; Definition 5.2 and convention following (5.2), p.34;
        component maps, Theorem 5.24(2) and proof, pp.43–44
      statement: The pullback-and-Chern-power map from the finite sum of shifted
        motivic complexes to the motivic complex of the line projectivization is
        an equivalence. Negative-weight complexes are set to zero.
      hypotheses: X is qcqs over Q or F_p; target weight is nonnegative; the bundle
        has positive constant finite rank. Apply to the dual bundle after
        restriction to the prime subfield.
      reading_limits: Freshly checked these versioned primary PDF text passages. The
        substantial theorem is imported through the declared EM supplier; its
        trace, syntomic, descent and Annala–Iwasa foundations were not
        reconstructed. No PDF image review is claimed.
---

PDF p. 2: Motivic projective bundle property; PDF p. 8: Orientation for the splitting principle

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-author-79117e1d72ed-bigraded-ring](item-lem-author-79117e1d72ed-bigraded-ring)
- [lem-author-79117e1d72ed-additive-c1](item-lem-author-79117e1d72ed-additive-c1)
- [lem-author-79117e1d72ed-dual-conventions](item-lem-author-79117e1d72ed-dual-conventions)
- [thm-author-79117e1d72ed-em-complex-pbf](item-thm-author-79117e1d72ed-em-complex-pbf)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification)
- [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)
- [lem-author-b747b28c359f-cochain-cohomology](item-lem-author-b747b28c359f-cochain-cohomology)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes (v1) · Introduction p.2; Definition 5.2 and convention following (5.2), p.34; component maps, Theorem 5.24(2) and proof, pp.43–44 `](https://arxiv.org/pdf/2309.08463v1)


## Statement
Assume the Axiom of Choice. Let $X$ be qcqs over a field, $E$ finite locally free of constant rank $r>0$, $\pi:Q_X(E)\to X$, and $\xi=c_1(\mathcal O_Q(1))$. For all integers $a,b$ the map $\bigoplus_{m=0}^{r-1}H^{a-2m,b-m}(X)\to H^{a,b}(Q_X(E))$ given by $(x_m)\mapsto\sum_m\pi^*(x_m)\xi^m$ is an isomorphism, where $H^{a,b}(T)=0$ for $b<0$.

## Statement references
[lem-author-79117e1d72ed-bigraded-ring](item-lem-author-79117e1d72ed-bigraded-ring)

## Facts & Assumptions
[A1] Assume the Axiom of Choice, as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). In step 1.1 it discharges the explicit AC hypothesis of [lem-author-79117e1d72ed-dual-conventions](item-lem-author-79117e1d72ed-dual-conventions), inherited from the relative-Proj line-quotient representation. It also retains the Choice and standing size hypotheses of the bigraded-ring supplier in [F2]. No additional geometric hypothesis is imposed.

[F1] [thm-author-79117e1d72ed-em-complex-pbf](item-thm-author-79117e1d72ed-em-complex-pbf) supplies the complex-level equivalence with components given by the actual pullback and powers of EM’s Definition5.2 class for every nonnegative target weight.

[F2] [lem-author-79117e1d72ed-dual-conventions](item-lem-author-79117e1d72ed-dual-conventions) identifies the relevant projectivizations and tautological lines. [lem-author-79117e1d72ed-bigraded-ring](item-lem-author-79117e1d72ed-bigraded-ring) and [lem-author-79117e1d72ed-additive-c1](item-lem-author-79117e1d72ed-additive-c1) specify precisely the product and Chern class being used. The dual-conventions supplier fixes $Q_X(E)=\operatorname{Proj}_X\operatorname{Sym}(E)$, its tautological quotient, the sheaf dual $E^\vee$, and the qcqs domain of both projectivizations.

[F3] [math:thm-prime-subfield-classification](https://alphabetamath.cc/item/thm-prime-subfield-classification) identifies the prime subfield $F\subset k$ with $\mathbb Q$ or $\mathbb F_p$. The complexes and pullbacks of [def-motivic-cohomology](item-def-motivic-cohomology) are restrictions of the same prime-field functors, as also specified in the bigraded-ring supplier; forgetting from $k$ to $F$ changes neither the underlying scheme nor qcqs.

[F4] [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology) supplies the cohomology functor on the unbounded derived category. [lem-author-b747b28c359f-cochain-cohomology](item-lem-author-b747b28c359f-cochain-cohomology) supplies its kernel/image formula on cochain representatives. In this proof a finite sum of complexes has the degreewise direct sum and componentwise differential; the cochain shift is $(C[t])^n=C^{n+t}$ with differential $(-1)^t d_C^{n+t}$.

## Proof
**Given:** AC and $X,E,r,a,b$ as stated.

**Goal:** Obtain the exact contracted map in all bidegrees.

1.1 By [F3], regard $X$ as a qcqs scheme over $F=\mathbb Q$ or $\mathbb F_p$, its classified prime subfield; this does not change its underlying scheme or the supplied motivic complexes. For $b\geq0$, apply [F1] to $E^\vee$ of rank $r$ and target weight $b$. Using [A1] to discharge the AC hypothesis of the dual-conventions supplier in [F2], transport its target through that identification. Each component remains $\xi^m\pi^*$ for the actual product in [F2]. Apply the functor $H^a$ of [F4] to the equivalence in [F1]. For the finite direct sum in [F4], a tuple is a cocycle exactly when each component is, and is a coboundary exactly when each component is; finitely many preimages can be chosen, so quotienting gives the direct sum of cohomology groups. The shift formula in [F4] gives $H^a(C_{b-m}[-2m])=H^{a-2m,b-m}(X)$ by reindexing the same kernels and images; its even shift has no differential sign. These identifications respect summand inclusions, so the induced map has exactly the specified components. [A1, F1, F2, F3, F4]

2.1 The degree of $\xi^m$ is $2m$, even. Graded commutativity therefore identifies $\xi^m\pi^*(x_m)$ with $\pi^*(x_m)\xi^m$ without a sign, giving exactly the displayed map. For $m=0$ the power is the unit, so the component is pullback. [F2, step 1.1]

3.1 For $b<0$, every $b-m<0$ with $m\geq0$. All source groups and the target vanish by the explicit zero convention. The unique homomorphism between these zero groups is an isomorphism, and its formula is the same sum with zero entries. This covers all $a\in\mathbb Z$, including negative cohomological degrees; no truncation was taken. [F2, step 1.1, step 2.1] ∎

## Reading limits
Freshly checked [Elmanto–Morrow v1](https://arxiv.org/pdf/2309.08463v1), Introduction p.2, Definition 5.2 and the convention following (5.2), p.34, and the component maps, line convention, Theorem 5.24 and proof, pp.43–44, in the primary PDF text. The equivalence is imported through [F1]. Its deeper foundations were not reconstructed; this item proves the stated cohomological application locally.
