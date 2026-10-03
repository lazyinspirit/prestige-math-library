---
id: lem-nonaffine-generic-quasisection-flat-groupoid
kind: lemma
title: "A flat finite-type equivalence relation has generic saturated quasi-sections"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, lem-nonaffine-flat-hypersurface-slice, lem-flat-locus-open-finitely-presented-algebra, cor-quasi-finite-locus-open-finite-type-algebra, lem-scheme-zariski-main-factorization-quasi-finite, thm-flat-finite-presentation-is-open, thm-faithfully-flat-descent-of-flatness, thm-proper-quasi-finite-is-finite, cor-finite-flat-noetherian-modules-are-projective, lem-nonaffine-affine-and-finite-morphism-fppf-descent, lem-finite-prime-avoidance]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "SGA3, Expose V, Sections 7-8"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp5-13oct24.pdf
---

## Statement

Assume the Axiom of Choice. Let $R\rightrightarrows X$ be an equivalence-relation groupoid of finite type over $k$, with $X$ separated of finite type and both projections $s,t$ flat. There is a dense saturated open $W\subset X$ which is a finite disjoint union of saturated opens $W_i$. For every $i$ there is a locally closed $U_i\subset W_i$, contained in an affine subscheme of $X$, such that $t:s^{-1}(U_i)\to W_i$ is finite locally free and surjective. The induced groupoid on $U_i$ has finite locally free projections. Every finite subset of $U_i$ lies in an affine open of $U_i$.

## Facts & Assumptions

[F1] Fibre-regular affine slices exist. Flat and quasi-finite loci of finitely presented morphisms are open. ([[lem-nonaffine-flat-hypersurface-slice]], [[lem-flat-locus-open-finitely-presented-algebra]], [[cor-quasi-finite-locus-open-finite-type-algebra]])

[F2] Separated quasi-finite morphisms have finite compactifications. Proper quasi-finite maps are finite; finite flat Noetherian modules are locally free. Flat finite-presentation maps are open and flatness descends faithfully flatly. Finiteness descends under fppf target covers and finite prime avoidance holds. ([[lem-nonaffine-affine-and-finite-morphism-fppf-descent]], [[lem-finite-prime-avoidance]], [[lem-scheme-zariski-main-factorization-quasi-finite]], [[thm-proper-quasi-finite-is-finite]], [[cor-finite-flat-noetherian-modules-are-projective]], [[thm-flat-finite-presentation-is-open]], [[thm-faithfully-flat-descent-of-flatness]])

## Proof

**Given:** The schemes, maps, and hypotheses in the statement, and AC.

1.1 Choose a closed point $z\in X$ and an affine neighbourhood $E$ of the source of an arrow targeting $z$ (the identity arrow suffices). Apply [F1] to $s:t^{-1}(z)\cap s^{-1}(E)\to E$ and the flat map $t:s^{-1}(E)\to X$. It gives a closed $F\subset E$ with nonempty fibre and finite source image over $z$, while $a=t:s^{-1}(F)\to X$ is flat along that fibre. This fibre has finitely many points: over a fixed source point $f$ and target $z$, the possible product points lie in $\operatorname{Spec}(\kappa(f)\otimes_k\kappa(z))$, which is finite over $\kappa(f)$ because $\kappa(z)/k$ is finite. A monomorphism $R\to X\times X$ has at most one point over each such product point. The fibre of $a$ is therefore a finite-type $\kappa(z)$-scheme with finitely many points, hence zero-dimensional with finite residue fields. Thus $a$ is also quasi-finite at those fibre points. [F1, given, construct]

2.1 Let $P\subset s^{-1}(F)$ be the locus where $a$ is flat and quasi-finite. Composition gives the following invariance: for arrows $f\to x$ and $x\to y$, composing identifies the space of arrows $f\to x$ with that of arrows $f\to y$ after base change to the arrow scheme parametrizing $x\to y$. The two target base changes use $s,t:R\to X$, both faithfully flat and of finite presentation. Flatness descends by [F2], and quasi-finiteness is detected by geometric fibre dimension, which is unchanged by residue-field extension. Consequently the two inverse images of $P$ on $s^{-1}(F)\times_Fs^{-1}(F)$ coincide. The map $s:s^{-1}(F)\to F$ is open and onto, so $P=s^{-1}(F')$ for an open $F'\subset F$. It contains the entire fibre over $z$. Replace $F$ by $F'$; now $a$ is flat, quasi-finite and separated everywhere. Its open image $D$ contains $z$ and is saturated by composition. [F1, F2, step 1.1, algebra, construct]

3.1 Inside $D$ take the union $W_z$ of all opens over which $a$ is finite. This open contains the generic points of every irreducible component of $X$ through $z$. Indeed those points lie in the open image $D$; over their Artinian local rings a quasi-finite finite-type separated scheme is finite. To see this, its reduced closed fibre is a finite discrete scheme, so its finitely many affine point neighbourhoods are disjoint and cover the scheme, and lifting finite module generators through the nilpotent maximal ideal proves module finiteness. A finite compactification from [F2], replaced by the schematic closure of its source, then has no boundary over that local scheme; the finite image of the closed boundary can be removed from a neighbourhood of the generic point, making $a$ finite there. [F2, step 2.1, construct, algebra]

4.1 The finite locus just defined is invariant along $R$: its two inverse images are the finite loci of the two isomorphic base changes of $a$ given by composition. Here finiteness descends under our faithfully flat open covers. An explicit verification is as follows. If a separated quasi-finite finite-type map becomes finite after such a cover, it becomes universally closed. For every further base change and closed source subset, its image pulls back to a closed set on the covering target; an open surjective map detects closed sets, so that image is closed downstairs. The original map is therefore proper, and [F2] makes it finite. This also proves equality of the maximal finite loci, by descending each covering open's saturated image. Hence $W_z$ is saturated. Set $U_z=F'\cap W_z$. Saturation identifies $s^{-1}(U_z)$ with $a^{-1}(W_z)$, so its target map is finite, flat and onto. Its base change by $U_z\subset W_z$ is one projection of $R_{U_z}$, and inversion gives the other. [F2, step 2.1, step 3.1, algebra, construct]

5.1 If $W_z$ is not dense, repeat in the interior of $X\setminus W_z$. This interior is saturated: openness of the relation projections implies that the closure of a saturated subset is saturated, since the inverse image of its closure equals the closure of its inverse image for an open map. Each repetition meets a previously missed irreducible component at its generic point, and there are only finitely many components. We obtain finitely many disjoint $W_i$ with dense union. Finally $U_i$ is open in the affine $F$: for any finite subset, the ideal defining the complement of $U_i$ avoids its point primes; prime avoidance gives a principal open in $F$ containing the subset and contained in $U_i$. This proves the affine-neighbourhood assertion. AC is inherited from [F1]–[F2]. [F1, F2, step 1.1, step 4.1, construct] ∎

