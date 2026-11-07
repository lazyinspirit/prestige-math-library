---
id: lem-finite-graph-hilbert-parameter-for-smooth-group-families
kind: lemma
title: "Finite Hilbert graph parameters for smooth projective group families"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [thm-hilbert-scheme-represents-projective-flat-families, lem-hilbert-family-vanishing-locus, cor-quasi-finite-locus-open-finite-type-algebra, thm-proper-quasi-finite-is-finite, thm-smooth-locus-open, thm-proper-morphism-closed-image, thm-cohomology-and-base-change, def-axiom-of-choice, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification: {}
---

## Statement

Assume AC and DC. Fix an integer $N\ge0$, a Hilbert polynomial $P$, finitely many nonnegative arities $r_i$, Hilbert polynomials $Q_i$ for subschemes of the Segre products $(\mathbb P^N)^{r_i+1}$, and finitely many formal equations between maps assembled from projections, a distinguished point, and operations of those arities.

There is a finite-type $\mathbb C$-scheme $S$ with a universal closed projective family $X\subseteq\mathbb P^N_S$, a section $e:S\to X$, and morphisms $f_i:X^{r_i}_S\to X$ such that:

1. $X\to S$ is smooth with geometrically connected fibres of Hilbert polynomial $P$; each graph $\Gamma_{f_i}$ has Segre Hilbert polynomial $Q_i$; and all specified equations hold as morphism identities.
2. For every $\mathbb C$-scheme $T$, a smooth projective embedded family $X_T\subseteq\mathbb P^N_T$ with geometrically connected fibres, a section and morphisms with the fixed fibre polynomials whose graphs are flat over $T$ and whose specified equations hold determines a unique classifying morphism $T\to S$ carrying the universal family and data to it.

In particular, if the operations and equations specify addition, inversion and identity, the universal family is a smooth proper group scheme with geometrically connected fibres; finitely many additional operations and equations can encode a fixed finitely generated ring action. The construction does not supply an analytic classifying map for any given complex-analytic family.

## Facts & Assumptions

**Given:** AC, DC, the finite ambient and polynomial data, and the finite list of formal equations.

[F1] Fixed-polynomial projective Hilbert functors are represented by finite-type schemes with universal flat closed families ([[thm-hilbert-scheme-represents-projective-flat-families]]).

[F2] For a projective morphism over a Noetherian base and a flat coherent target, vanishing of a coherent homomorphism is represented by a closed subscheme on every test ([[lem-hilbert-family-vanishing-locus]]).

[F3] The quasi-finite locus is open and a proper quasi-finite morphism is finite ([[cor-quasi-finite-locus-open-finite-type-algebra]], [[thm-proper-quasi-finite-is-finite]]).

[F4] The smooth locus is open and proper morphisms have closed image ([[thm-smooth-locus-open]], [[thm-proper-morphism-closed-image]]).

[F5] For proper finite-presentation morphisms with flat coherent sheaf, surjectivity of the degree-zero base-change map gives a neighbourhood on which direct image is locally free and commutes with arbitrary base change ([[thm-cohomology-and-base-change]]).

## Proof

**Proof technique:** parameterize a fibre and finitely many graphs, impose graph isomorphism and algebraic identities, then take the smooth connected locus.

1.1 By [F1], take the product of the Hilbert scheme for $P$, the Hilbert schemes for the $Q_i$ in their Segre projective ambient spaces, and $\mathbb P^N$ for the distinguished point. It is finite type and carries a flat projective universal closed family $X$ and universal graph candidates $Z_i$. For each $i$, impose $Z_i\subseteq X^{r_i+1}$: pull the ideal of $X^{r_i+1}$ back to the ambient product and require its map to $\mathcal O_{Z_i}$ to vanish. The target is flat over the parameter base, so [F2] gives a closed universal incidence locus. The condition that the distinguished point lies in $X$ is the analogous vanishing condition on the section. Restrict to this closed locus. [F1, F2, given, construct, algebra]

2.1 On the incidence locus the graph projection $p_i:Z_i\to X^{r_i}$ is proper and finitely presented; both source and target are flat over the base, since Hilbert families are flat and finite products of flat families are flat. For any proper finitely presented map $p:Z\to W$ over a Noetherian base, remove from $W$ the proper image of the closed non-quasi-finite locus from [F3]. Over the remaining open, $p$ is proper and quasi-finite, hence finite. The support of the kernel and cokernel of $\mathcal O_W\to p_*\mathcal O_Z$ is closed, and its complement is exactly the locus where this finite morphism is an isomorphism. Combining these opens gives an open target isomorphism locus; its closed complement has closed image in the parameter base by [F4]. Removing that image makes $p_i$ an isomorphism everywhere. Conversely, if its fibre over a base point is an isomorphism, the isomorphism holds near that entire fibre: locally the finite algebra map has zero cokernel by Nakayama; its kernel also has zero fibre because source and target are flat over the base, and Nakayama kills that kernel. Properness makes these local neighbourhoods uniform over the fibre. Thus the all-fibre graph-isomorphism locus is open and contains every base point whose fibre graph is a genuine morphism. On it, composing the inverse graph projection with the last projection gives $f_i:X^{r_i}\to X$. [F3, F4, given, step 1.1, construct, algebra]

3.1 Every specified equation is an equality $a=b:X^m\to X$ between compositions of the universal operations, section and projections. Since $X$ is projective and hence separated over the base, the diagonal of $X$ is closed. Pull back its ideal along $(a,b):X^m\to X\times_SX$ and require the induced map to $\mathcal O_{X^m}$ to vanish. The source family $X^m$ is projective and flat, so [F2] represents this equality on all tests by a closed subscheme. Intersect the finitely many closed loci. The graph, section and identity conditions are universal under base change, and the representing properties of [F1] make the classifying map of any specified embedded family unique. [F1, F2, given, step 1.1, step 2.1, construct, algebra]

4.1 By [F4], the nonsmooth locus of the universal family is closed and has closed image under the proper projection. Removing that image gives the open locus where all fibres are smooth. On this locus the structure sheaf is flat over the base. At a point with geometrically connected fibre, smoothness makes the geometric fibre reduced and its global functions consist exactly of constants; hence the degree-zero base-change map is surjective because it contains the unit. By [F5], near that point $f_*\mathcal O_X$ is a rank-one vector bundle commuting with all base changes. The unit is nonzero in each nearby fibre, so every nearby geometric fibre has one-dimensional global functions; a smooth proper geometric fibre with that property is connected. Thus the geometrically connected-fibre locus is open. Restricting to it gives the finite-type scheme $S$ and the universal family in the Statement. When the identities are the group axioms, the universal data define a group object; smoothness, properness and connected fibres give the asserted group scheme. Further finitely many ring-action identities are treated in the same way. [F4, F5, given, step 1.1, step 3.1, construct, algebra] ∎

## Boundary

This constructs only the algebraic parameter and universal data. It does not produce an analytic map into it, prove graph flatness for a given analytic family, or establish any cohomological comparison.
