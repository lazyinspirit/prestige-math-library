---
id: thm-model-structures-on-variable-simplicial-modules-and-algebras
kind: theorem
title: "Model structures for variable simplicial modules and algebras"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
proof_strategy: constructive
justified_by: []
aliases: []
deps:
  - def-model-category-and-quillen-adjunction
  - def-simplicial-horn-and-kan-fibration
  - lem-additive-kan-and-normalized-fibration-criterion
  - lem-boundary-horn-product-is-anodyne
  - lem-variable-base-cotensor-corner-and-path-objects
  - def-polynomial-ring-on-a-family-of-indeterminates
  - def-free-module-on-a-set-and-standard-basis
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Goerss-Schemmerhorn, Model Categories and Simplicial Methods"
      url: "https://arxiv.org/pdf/math/0609537"
      locator: "Small-object, path and retract transfer and corner, route 3.5-3.8 and 4.17; unprinted prerequisites expanded locally"
    - title: "The Stacks Project, Chapter 14 (Simplicial Methods)"
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
      locator: "Sections 14.5-14.8, 14.24.1-14.24.3 and 14.31.1-14.31.9"
---

## Statement

Assume the Axiom of Choice (AC) ([[def-axiom-of-choice]]). For any simplicial
commutative unital ring $A$, its simplicial modules and its commutative unital
or nonunital simplicial $A$-algebras admit functorial model structures
([[def-model-category-and-quillen-adjunction]]) in which the weak
equivalences are the normalized additive quasi-isomorphisms, the fibrations
are the maps with underlying horn lifting
([[def-simplicial-horn-and-kan-fibration]]), and the cofibrations are the maps
with the left lifting property against maps whose underlying simplicial-set
maps lift all boundary inclusions (equivalently, against trivial fibrations). Generating
cofibrations and trivial cofibrations are the free $A$-objects on simplex
boundaries and horns. Model factorizations attach all lifting squares; no
transfer theorem is imported. The categories have simplicial tensors and
cotensors and mapping objects, and their mapping corner is Kan for a
cofibration-fibration pair and has actual boundary lifting when either is
acyclic. The corresponding slice models have inherited
weak equivalences, fibrations and cofibrations, with fibrancy in a slice
meaning that the structure map is fibrant. The theorem asserts no properness
or tensor-flatness.

## Facts & Assumptions

**Given:** A simplicial commutative unital ring $A$; one of the categories of simplicial $A$-modules, commutative unital $A$-algebras, or commutative nonunital $A$-algebras; AC.

[F1] A model category is a complete and cocomplete category with three retract-closed classes satisfying two-out-of-three, the lifting axiom and the two factorizations; cofibrant and fibrant objects are read from the initial and terminal structure maps ([[def-model-category-and-quillen-adjunction]]).

[F2] A termwise surjective additive simplicial map inducing a quasi-isomorphism on normalized complexes is a trivial Kan fibration, and every simplicial abelian group is Kan; the normalized criterion is exact and converts the lifting classes into the additive ones ([[lem-additive-kan-and-normalized-fibration-criterion]]).

[F3] Cotensor corners: for a map with underlying horn lifting and a monomorphism $K\to L$, the map $X^L\to X^K\times_{Y^K}Y^L$ has horn lifting, and it has boundary lifting if the monomorphism is a horn or the map has boundary lifting; the unsliced cotensor path objects have Kan endpoints and constant paths that are weak equivalences on normalized additive homology ([[lem-variable-base-cotensor-corner-and-path-objects]]).

[F4] Free objects: the free simplicial $A$-module on a simplicial set $K$ is $A\otimes_{\mathbb Z}\mathbb Z[K]$, the free commutative unital $A$-algebra is $A[K]$, and the free commutative nonunital $A$-algebra is the positive-degree part of the symmetric algebra, all formed degreewise with their adjunctions ([[def-polynomial-ring-on-a-family-of-indeterminates]], [[def-free-module-on-a-set-and-standard-basis]]).

[F5] Pushout products of monomorphisms with horn inclusions are anodyne, and pushout products of monomorphisms are monomorphisms ([[lem-boundary-horn-product-is-anodyne]]).



## Proof

1.1 Limits, colimits and smallness. Small limits are formed degreewise with the induced $A$-action and multiplication. Small coproducts and coequalizers are formed by adjoining all indicated module or algebra generators and imposing the relations, with functoriality inducing the simplicial operators, so all small colimits exist and the universal properties hold degreewise. Filtered colimits are created in underlying sets because every relation is a finite algebraic expression and equality is witnessed at a finite stage. The free objects of [F4] are left adjoint to the forgetful functor to simplicial sets; a simplex has finitely many operators in each fixed dimension and the free objects on a finite simplicial set are sequentially small, where finite means finitely many nondegenerate simplices. [F1, F4, given, construct]

2.1 Generating sets and the classes. Take $I=\{F(\partial\Delta[n])\to F(\Delta[n]):n\ge0\}$ and $J=\{F(\Lambda^k[n])\to F(\Delta[n]):n\ge1,0\le k\le n\}$ with $F$ the relevant free functor. Let $\mathrm{Fib}=J\text{-inj}$ and let $\mathcal W$ be the maps inducing isomorphisms on normalized additive homology. The elementary premises E1-E3 are supplied: E1 and E2 by [F2] (horn lifting is positive-degree normalized surjectivity; boundary lifting is horn lifting plus normalized quasi-isomorphism), and E3 by [F3]. [F2, F3, step 1.1]

3.1 The small-object factorization. For an arbitrary $f\colon X\to Y$, form $Z_0=X$ and at stage $r$ attach, by a pushout, one copy of every codomain of a chosen generating map for every commutative lifting square into $Z_r\to Y$; let $Z=\operatorname{colim}_rZ_r$. Every square from a generating domain into $Z$ factors through some finite stage by the sequential smallness of step 1.1, and the next-stage attachment solves it. Hence $f$ factors functorially as an $I$-cell map followed by an $I$-injective, and also as a $J$-cell map followed by a $J$-injective; relative cell maps have the left lifting property against the indicated injectives by pushout, composition and passage to colimits. [F1, step 1.1, step 2.1]

3.2 Acyclic cell maps. Every map with the left lifting property against $\mathrm{Fib}$ lies in $\mathcal W$ by the explicit path-retraction argument: apply the lifting property of $i\colon X\to Y$ to the fibration $X\to 0$ (all objects are fibrant by E1) to obtain a retraction $r\colon Y\to X$ with $ri=\mathrm{id}_X$, then apply it to the endpoint fibration $P(Y)\to Y\times Y$ of [F3] with upper map the constant path on $i$ and lower map $(ir,\mathrm{id}_Y)$; a lift gives a homotopy $ir\simeq\mathrm{id}_Y$, and the prism assertion of [F3] yields $H(Ni)H(Nr)=\mathrm{id}$ and $H(Nr)H(Ni)=\mathrm{id}$, so $i\in\mathcal W$. Consequently every $J$-cell map lies in $\mathcal W$, and it also has the left lifting property against $I$-injectives because every $I$-injective is $J$-injective by E2, the relative cell maps having been built from the anodyne pushout-product class of [F5]. [F2, F3, step 2.1]

4.1 The model axioms. Define $\mathrm{Cof}$ as the maps with the left lifting property against $I$-injectives. The $I$-factorization of step 3.1 shows every cofibration is a retract of an $I$-cell map. If a cofibration $f$ lies in $\mathcal W$, factor it as $f=qj$ with $j$ a $J$-cell map and $q$ a $J$-injective; then $j\in\mathcal W$ by step 3.2, so $q\in\mathcal W$ by two-out-of-three, hence $q\in I\text{-inj}$ by E2, and lifting against $q$ exhibits $f$ as a retract of $j$, proving the acyclic-cofibration lifting axiom. Conversely every map with the left lifting property against $\mathrm{Fib}$ lies in $\mathcal W$ and in $\mathrm{Cof}$ by step 3.2. Retract closure, the lifting axioms and the two factorizations now follow; $\mathcal W$ is closed under retracts and satisfies two-out-of-three because it is defined by homology of the underlying normalized additive complex. No transfer theorem is imported. [F1, F2, step 3.2]

5.1 Tensors, cotensors and the mapping corner. The tensor $K\otimes C$ in unital $A$-algebras is the degreewise coproduct over $K_n$ in $A_n$-algebras, in modules it is $\bigoplus_{K_n}C_n$, and in nonunital algebras the ordinary nonunital coproduct is used; the operators come from the maps of $A,C,K$ and fold the coproduct summands. A morphism $K\otimes C\to D$ is exactly a $K$-indexed simplicial family of $A$-linear or $A$-algebra morphisms into $D$, equivalently $C\to D^K$ through the cotensor, which gives the tensor-cotensor adjunction; the mapping simplicial set $\mathrm{Map}(C,D)_n=\operatorname{Hom}(C,D^{\Delta[n]})$ has composition by pointwise composition and the diagonal $\Delta[n]\to\Delta[n]\times\Delta[n]$. Let $j\colon C\to D$ be a cofibration and $p\colon X\to Y$ a fibration; transposing a horn problem into a lifting problem of $j$ against the cotensor corner $p^{\text{horn}}$ (a boundary trivial fibration by [F3]) and using the cofibration lifting axiom, the corner $\mathrm{Map}(D,X)\to\mathrm{Map}(D,Y)\times_{\mathrm{Map}(C,Y)}\mathrm{Map}(C,X)$ is Kan; boundary problems transpose similarly using the acyclicity of $j$ or of $p$, so the corner has boundary lifting when either is acyclic. [F2, F3, step 4.1]

6.1 Slices. The slice categories carry the inherited weak equivalences, fibrations and cofibrations, and the model axioms hold because the defining diagrams are diagrams over the base object; an object of a slice is fibrant exactly when its structure map to the base is a fibration. This completes the construction for all three categories and for every simplicial commutative base $A$, with AC used exactly for the simultaneous choices of generating maps and lifts in steps 3.1 and 3.2 and no properness or tensor-flatness claimed. [F1, step 4.1, step 5.1, discharge-construct] ∎ 