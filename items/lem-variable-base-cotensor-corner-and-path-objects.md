---
id: lem-variable-base-cotensor-corner-and-path-objects
kind: lemma
title: "Variable-base cotensor corners and path objects"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
proof_strategy: constructive
justified_by: []
aliases: []
deps:
  - def-simplicial-horn-and-kan-fibration
  - lem-additive-kan-and-normalized-fibration-criterion
  - lem-boundary-horn-product-is-anodyne
  - lem-simplicial-normalization-prism-and-trivial-fibration-criterion
  - lem-trivial-simplicial-fibration-fibres-products-and-contraction
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Goerss-Schemmerhorn, Model Categories and Simplicial Methods"
      url: "https://arxiv.org/pdf/math/0609537"
      locator: "Explicit variable-base and relative cotensor and product-horn proof, route 4.9-4.14; unprinted prerequisites expanded locally"
    - title: "The Stacks Project, Chapter 14 (Simplicial Methods)"
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
      locator: "Sections 14.5-14.8, 14.24.1-14.24.3 and 14.31.1-14.31.9"
---

## Statement

For a simplicial commutative ring $A$, modules and unital or nonunital
simplicial $A$-algebras have cotensors $X^K$ with underlying simplicial
exponent and $A$-action through the constant-precomposition map
$A\to A^K$. For an augmentation to $B$ one uses the relative cotensor
$X^K\times_{B^K}B$. If $p\colon X\to Y$ has underlying horn lifting and
$i\colon K\to L$ is a monomorphism, then
$X^L\to X^K\times_{Y^K}Y^L$ has horn lifting; it has boundary lifting if $i$
is a horn inclusion or if $p$ has boundary lifting. For each unsliced additive
or algebraic object the cotensor path endpoints
$X^{\Delta[1]}\to X\times X$ are Kan and the constant-path map
$X\to X^{\Delta[1]}$ is a weak equivalence on normalized additive homology.
The relative assertions apply to fibrant sliced objects; arbitrary
$A$-algebras augmented to $B$ need not be fibrant. The Axiom of Choice
([[def-axiom-of-choice]]) is assumed for simultaneous lifts.

## Facts & Assumptions

**Given:** A simplicial commutative ring $A$; a simplicial set $K$; an $A$-module or (nonunital) $A$-algebra $X$; a map $p\colon X\to Y$ with underlying horn lifting; a monomorphism $i\colon K\to L$; AC.

[F1] A map has horn lifting (is a Kan fibration) when it has the right lifting property against all horn inclusions; pushout products of monomorphisms with horn inclusions are anodyne, and any map with horn lifting lifts against anodyne inclusions ([[def-simplicial-horn-and-kan-fibration]], [[lem-boundary-horn-product-is-anodyne]]).

[F2] Every simplicial abelian group is Kan, and the normalized fibration criterion identifies the Kan and boundary-lifting classes additively; an additive homomorphism that is a homotopy equivalence of underlying simplicial sets induces a quasi-isomorphism on normalized complexes ([[lem-additive-kan-and-normalized-fibration-criterion]], [[lem-simplicial-normalization-prism-and-trivial-fibration-criterion]]).

[F3] A map with boundary lifting lifts every simplicial monomorphism under AC ([[lem-trivial-simplicial-fibration-fibres-products-and-contraction]]).

## Proof

1.1 Cotensors in the variable base. For a simplicial set $K$ and a fixed-variable-base $A$-module $M$, define $M^K_n$ as the set of maps of simplicial sets $K\times\Delta[n]\to M$ with the pointwise additive structure; the $A$-action is through the constant-precomposition map $A\to A^K$: an $n$-simplex $a\in A_n$ represents a map $\Delta[n]\to A$ and multiplies a map $K\times\Delta[n]\to M$ pointwise in the $K$-coordinate as well. For an $A$-algebra $C$ this gives $C^K$ its $A$-algebra structure through $A\to A^K\to C^K$, with pointwise multiplication in the nonunital case. All constructions commute with the face and degeneracy maps because these act on the $\Delta[n]$-coordinate, so the underlying simplicial set of $X^K$ is exactly the simplicial exponent. For a fixed augmentation $C\to B$ one uses the relative cotensor $C^K\times_{B^K}B$, where $B\to B^K$ is the constant map in the $K$-variable; the fixed-base restriction is essential, since the unrestricted exponent would change the prescribed augmentation. [given, construct]

2.1 Corner lifting. Let $p\colon X\to Y$ have underlying horn lifting and let $i\colon K\to L$ be a monomorphism. By the exponent adjunction $\operatorname{Map}(Z,X^K)\cong\operatorname{Map}(Z\times K,X)$, a lifting problem for $p^i\colon X^L\to X^K\times_{Y^K}Y^L$ against a horn inclusion is equivalent to a lifting problem for $p$ against the pushout product $i\,\square\,(\Lambda^r[t]\subset\Delta[t])$, which is anodyne by [F1]; hence $p^i$ has horn lifting. If $i$ is itself a horn inclusion, the corresponding boundary lifting problems for $p^i$ translate into pushout products of that horn with a boundary inclusion, again anodyne, so $p^i$ has boundary lifting. If instead $p$ has boundary lifting, then all corresponding pushout products of the monomorphism $i$ with a boundary inclusion are monomorphisms, and [F3] supplies lifting of $p$ against these monomorphisms, so $p^i$ has boundary lifting. These arguments apply verbatim to the variable-base additive and algebraic cotensors, because their underlying set corners are the exponent corners and all algebraic structure is fixed through constant precomposition. [F1, F3, step 1.1]

3.1 Path objects in the unsliced case. Take $Y=0$ and $i\colon\partial\Delta[1]\subset\Delta[1]$. Every additive object $X$ is Kan by [F2], so the endpoint map $X^{\Delta[1]}\to X\times X$ is a Kan fibration by step 2.1 with $p\colon X\to 0$. The constant-path map $c\colon X\to X^{\Delta[1]}$ satisfies $e_0c=\mathrm{id}$ for the evaluation $e_0$ at $0$. Precomposing with the map $\Delta[1]\times\Delta[1]\to\Delta[1]$ given on ordered vertices by the minimum gives a simplicial homotopy $ce_0\simeq\mathrm{id}$ on $X^{\Delta[1]}$: at one endpoint it is the constant map at $0$ and at the other it is the identity. Pointwise operations and constant-$A$-precomposition make this homotopy compatible with the module and algebra structures at every simplicial stage, so the prism and free-additive argument of [F2] shows that $c$ is a weak equivalence on normalized additive homology. Hence the endpoint and constant-path assertions hold for simplicial modules and for unital or nonunital algebras over an arbitrary simplicial $A$. [F2, step 1.1, step 2.1]

4.1 Relative and sliced statements. For augmented $B$-algebras, every augmentation $D\to B$ has the section given by the structure map and is termwise surjective, so it is Kan by [F2]; applying steps 2.1 and 3.1 with $Y=B$ (or with the relative cotensor of step 1.1) proves the corresponding path facts in the slice. For an arbitrary slice $\mathrm{Alg}_A/B$, the fibrant objects are exactly those whose augmentation is Kan; not every object of the slice is fibrant, and no such assertion is made. The Axiom of Choice is used exactly for the simultaneous lifting choices in step 2.1. [F2, step 1.1, step 2.1, step 3.1, discharge-construct] ∎ 