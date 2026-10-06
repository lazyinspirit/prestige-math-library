---
id: lem-trivial-simplicial-fibration-fibres-products-and-contraction
kind: lemma
title: "Trivial simplicial fibrations lift monomorphisms and have contractible products of fibres"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
proof_strategy: constructive
justified_by: []
aliases: []
deps:
  - def-simplicial-set-homotopy-and-trivial-kan-fibration
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Chapter 14 (Simplicial Methods)"
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
      locator: "Lemma 14.18.2 (tag 017R), Lemma 14.21.7 (tag 018R), Lemmas 14.30.2, 14.30.3, 14.30.6, 14.30.8 (tags 08NM, 08NN, 08NR, 08NS), printed 19, 31-32, 55-56"
---

## Statement

Assume the Axiom of Choice (AC) ([[def-axiom-of-choice]]). A trivial Kan
fibration of simplicial sets
([[def-simplicial-set-homotopy-and-trivial-kan-fibration]]) lifts every
degreewise injective map. It is stable under pullback and under set-indexed
products. Every fibre over a vertex of a constant target is nonempty and
contractible, and every set-indexed product of such fibres is nonempty and
contractible. In particular, a trivial Kan fibration is a simplicial homotopy
equivalence.

## Facts & Assumptions

**Given:** AC; a trivial Kan fibration $p\colon X\to Y$ of simplicial sets and, where needed, a degreewise injective map $Z\to W$ of simplicial sets and a vertex $y\in Y_0$.

[F1] A map $p\colon X\to Y$ is a trivial Kan fibration when every square with left side $\partial\Delta[n]\hookrightarrow\Delta[n]$, $n\ge0$, admits a diagonal lift; the boundary consists of the non-surjective maps, $\partial\Delta[0]=\varnothing$, and in degree zero the condition is surjectivity of $p_0$ ([[def-simplicial-set-homotopy-and-trivial-kan-fibration]]).

[F2] A simplicial homotopy from $f$ to $g$ is a map $H\colon X\times\Delta[1]\to Y$ restricting to $f$ and $g$ at the two vertices; a simplicial set is contractible when it is homotopy equivalent to the one-point constant simplicial set ([[def-simplicial-set-homotopy-and-trivial-kan-fibration]]).

[F3] AC: every family of nonempty sets indexed by a set has a choice function ([[def-axiom-of-choice]]).



## Proof

1.1 Unique nondegenerate ancestors. Every simplex $x$ of a simplicial set has a unique expression $x=\alpha^*y$ with $\alpha$ surjective and $y$ nondegenerate, and the $n$-simplices that are not degenerate are precisely those obtainable by adjoining a missing nondegenerate simplex together with its degeneracies. For the first assertion, if $\alpha^*y=\beta^*z$ with $\alpha,\beta$ surjective and $y,z$ nondegenerate, choose an order-preserving section $\xi$ of $\beta$; nondegeneracy forces $\alpha\xi$ to be surjective, hence $\dim z\ge\dim y$, and symmetry gives equality of the dimensions. For every order-preserving section $\xi$ of $\beta$, the map $\alpha\xi$ is then an order-preserving surjection between equally sized finite ordinals, hence the identity. Every position $j$ may be included in such a section (choose $j$ in its fibre of $\beta$ and any position in each other ordered fibre), so $\alpha(j)=\beta(j)$ for all $j$. Thus $\alpha=\beta$, and applying a section recovers $y=z$. Existence follows by repeatedly applying degeneracy operators backwards until the dimension drops and the resulting simplex is nondegenerate. Consequently, adjoining a missing simplex of smallest dimension together with its degeneracies is exactly the pushout of a simplex along its boundary, and no two such adjunctions conflict. [F1, given, construct]

1.2 Stability under pullback and products. If $Y'\to Y$ is a map of simplicial sets, the pullback $p'\colon X\times_YY'\to Y'$ lifts any boundary square because a lift of the corresponding square for $p$, composed with the projection, provides a lift for $p'$ by the universal property. For a set-indexed family $(p_i\colon X_i\to Y_i)$ of trivial Kan fibrations, a boundary square into the product has coordinate boundary squares; by [F3] choose one lift in each coordinate simultaneously and combine them by the universal property of the product. The empty product is the one-point simplicial set, and the statement holds vacuously. [F1, F3, given]

2.1 Lifting monomorphisms. Let $Z\subseteq W$ be a degreewise injective map and let $f\colon Z\to X$, $g\colon W\to Y$ satisfy $p f=g|_Z$. Well-order the nondegenerate simplices of $W$ not lying in $Z$ first by dimension and then within each dimension, using [F3]. Adjoin them one at a time: at each stage the new nondegenerate simplex has boundary lying in the already constructed part (by the minimality of the ordering), so the lifting property of the trivial Kan fibration supplies a lift of that simplex over the prescribed boundary; at limit stages take the union. Step 1.1 ensures that the degenerate simplices generated along the way receive compatible values, so the construction produces a map $W\to X$ lifting along $p$ and extending $f$. This proves lifting against every monomorphism. AC is used exactly in the well-ordering and in the transfinite selection of lifts. [F1, F3, step 1.1]

3.1 Fibres are trivial fibrations over a point. The fibre $F=X_y=p^{-1}(y)$ over a vertex $y\in Y_0$, defined as the pullback of $p$ along the map $\Delta[0]\to Y$ with value $y$, is a trivial Kan fibration over $\Delta[0]$ by step 1.2; in particular $F_0$ is nonempty by degree-zero surjectivity [F1]. Choose a section $q\colon\Delta[0]\to F$ (AC gives a global choice of one point here, and degree-zero surjectivity gives nonemptiness of the set of choices). The inclusion of the boundary $F\times\partial\Delta[1]\subseteq F\times\Delta[1]$ has prescribed maps $\mathrm{id}_F$ on $F\times\{0\}$ and $q\circ p_F$ on $F\times\{1\}$, where $p_F\colon F\to\Delta[0]$; lifting this square by step 2.1 (the inclusion is degreewise injective) yields a homotopy from $\mathrm{id}_F$ to the constant map, and the composite $p_F\circ q=\mathrm{id}_{\Delta[0]}$, so $F$ is contractible. The product of a set-indexed family of fibres is itself a trivial Kan fibration over a point by step 1.2, so the same argument applies to it and gives nonemptiness and contractibility. [F1, F2, step 2.1, step 1.2]

4.1 Homotopy equivalence. Lifting the inclusion $X\times\partial\Delta[1]\subseteq X\times\Delta[1]$ with the prescribed maps $\mathrm{id}_X$ on $X\times\{0\}$ and $q'\! p$ on $X\times\{1\}$, where $q'\colon Y\to X$ is a section of $p$ obtained by lifting the empty subobject of $Y$ (AC supplies the simultaneous choices over the simplex set of $Y$, using step 2.1 with $Z=\varnothing$), gives a homotopy from $\mathrm{id}_X$ to $q'\! p$, while $p q'=\mathrm{id}_Y$; hence $p$ is a simplicial homotopy equivalence. [F2, step 2.1, discharge-construct] ∎ 