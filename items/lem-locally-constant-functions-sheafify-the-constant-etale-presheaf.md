---
id: lem-locally-constant-functions-sheafify-the-constant-etale-presheaf
kind: lemma
title: "Locally constant functions realize the constant étale sheaf"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-small-etale-site-of-a-scheme
  - def-etale-sheaf-of-finite-modules
  - lem-etale-coverings-form-a-grothendieck-site
  - thm-etale-morphisms-open-and-quasi-finite
  - thm-etale-equivalent-flat-unramified-fp
  - lem-etale-residue-extensions-finite-separable
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC through the published étale openness and finite-residue-field suppliers. The gluing rule defines each value independently of lifts and uses no global choice function."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, Section 59.64, Definition 59.64.1"
      url: https://stacks.math.columbia.edu/tag/09Y8
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, Section 6"
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
---

## Statement

Assume AC. Let $X$ be a scheme. For every finite set $E$, the assignment $U\mapsto\operatorname{LC}(|U|,E)$ is the constant étale sheaf $\underline E$. For every finite commutative ring $\Lambda$ with identity and finite $\Lambda$-module $M$, the assignment $U\mapsto\operatorname{LC}(|U|,M)$ with pointwise module operations is the constant étale module sheaf $\underline M$. Here $\operatorname{LC}$ denotes locally constant functions from the underlying topological space of $U$ to the indicated finite set.

## Statement references

[The Stacks Project, Section 59.64, Definition 59.64.1](https://stacks.math.columbia.edu/tag/09Y8)

[Milne, Lectures on Étale Cohomology, Chapter I, Section 6](https://www.jmilne.org/math/CourseNotes/LEC.pdf)

## Facts & Assumptions

**Given:** $X$, $\Lambda$, $M$, and the small étale topology of [[def-small-etale-site-of-a-scheme]].

[F1] [[def-etale-sheaf-of-finite-modules]]: a module presheaf is a sheaf exactly when its equalizer diagram for every étale covering family is an equalizer.

[F2] [[lem-etale-coverings-form-a-grothendieck-site]]: covering families remain covering after base change, and fiber products in their matching diagrams exist.

[F3] [[thm-etale-morphisms-open-and-quasi-finite]]: under AC, every étale morphism is open.

[F4] [[thm-etale-equivalent-flat-unramified-fp]]: under AC, an étale morphism locally of finite presentation is unramified.

[F5] [[lem-etale-residue-extensions-finite-separable]]: an unramified morphism locally of finite type induces finite separable residue-field extensions at its points.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; the assumed use is inherited through [F3]–[F5].

## Proof

**Given:** For a finite set $E$, the presheaf $P_E(U)=E$ and candidate sheaf $C_E(U)=\operatorname{LC}(|U|,E)$; for a finite $\Lambda$-module $M$, the module presheaf $P_M(U)=M$ and candidate module sheaf $C_M(U)=\operatorname{LC}(|U|,M)$.

1.1 If $V\to U$ is an arrow, restriction sends $f$ to $f\circ(|V|\to|U|)$, which is locally constant. For module values, pointwise addition and scalar multiplication preserve local constancy by intersecting neighborhoods on which the input functions are constant. Thus $C_E$ is a set-valued presheaf and $C_M$ is a presheaf of $\Lambda$-modules. [given, F1]

1.2 Let $\{U_i\to U\}$ be a covering family and let locally constant functions $f_i:|U_i|\to E$ (or $M$) agree after pullback to every $U_i\times_U U_j$. For each $u\in U$, joint surjectivity supplies a lift $u_i$ in some $U_i$. Define $f(u)$ to be $f_i(u_i)$. This value is independent of the lift: for any two lifts over $u$, the covering maps are étale and hence locally of finite presentation and locally of finite type; [F4] makes them unramified and [F5] gives finite residue-field extensions. A finite basis of either extension identifies their tensor product over $\kappa(u)$ with a nonempty finite direct sum of copies of the other residue field. The tensor product is therefore nonzero, so their fiber product has a point above the pair, where compatibility equates the values. Hence $f$ is uniquely defined without choosing lifts globally. [F1, F2, F4, F5, choose]

2.1 For each $u\in U$, choose a lift $u_i$ as in step 1.2. Local constancy gives an open neighborhood $W_i\subset U_i$ on which $f_i$ has the value $f(u)$. By [F3], the image of $W_i$ in $U$ is open and contains $u$. Every point in that image has a lift in $W_i$, and the independence proved in step 1.2 shows that $f$ has value $f(u)$ there. Thus $f$ is locally constant. Its pullback to each $U_i$ is $f_i$ by construction, so it glues the compatible family. Uniqueness follows pointwise from joint surjectivity. Therefore both $C_E$ and $C_M$ satisfy the respective sheaf conditions of [F1]. [F1, F3, step 1.2]

3.1 The natural maps $P_E\to C_E$ and $P_M\to C_M$ send each element to its constant function. Let $G$ be any étale sheaf of sets and let $\alpha:P_E\to G$ be a presheaf morphism. Its component on $X$ is a map $E\to G(X)$, and naturality forces every other component to be its restriction. For $f\in C_E(U)$, the finitely many fibers $U_e=f^{-1}(e)$ are open and closed and cover $U$; the restrictions of $\alpha_X(e)$ glue uniquely to a section of $G(U)$. This defines the unique sheaf morphism $C_E\to G$ extending $\alpha$. The same construction for a sheaf $\mathcal G$ of $\Lambda$-modules and a module-presheaf morphism $P_M\to\mathcal G$ uses a linear map $M\to\mathcal G(X)$. For functions $f,g:|U|\to M$, the finite open-and-closed partition by the common fibers $f^{-1}(m)\cap g^{-1}(m')$ shows that the glued image of $f+g$ agrees with the sum of the glued images, because $\alpha_X(m+m')=\alpha_X(m)+\alpha_X(m')$ on each piece; the same argument gives compatibility with scalar multiplication. Thus both natural maps have the sheafification universal property, and $C_E=\underline E$ and $C_M=\underline M$. [F1, step 2.1, construct]

4.1 If $U=\varnothing$, there is one function to either $E$ or $M$; for module values it is the zero module required by the equalizer for the empty covering of the empty scheme. If $M$ is the zero module, every function has this value, so the universal property remains valid. AC enters through the openness, criterion, and finite-residue-field suppliers [F3]–[F5]; step 1.2 defines the glued value independently of lifts and makes no global selection. [F1, F3, F4, F5, A1, step 1.2, step 2.1, step 3.1] ∎

## Proof notes

The overlap argument uses that for finite field extensions $K_1,K_2$ of a field $K$, the tensor product $K_1\otimes_K K_2$ is nonzero: a finite basis of $K_1$ over $K$ identifies it, as a $K_2$-vector space, with a nonempty finite direct sum of copies of $K_2$. This is the only residue-field fact used in step 1.2.
