---
id: lem-orbit-dimension-and-closed-orbits-for-complex-group-actions
kind: lemma
title: Orbit dimension and closed orbits for complex group actions
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-rational-action-on-affine-variety, lem-complex-algebraic-groups-are-smooth, def-dimension-classical-variety, lem-dimension-finite-union-components, lem-dimension-nonempty-open-subset, cor-smooth-variety-classical-scheme-conventions-agree, lem-action-map-fibres-and-stabilizer-subscheme, lem-orbit-map-fibres-and-stabilizer-dimension, lem-orbit-map-faithfully-flat-and-orbit-locally-closed, def-axiom-of-choice]
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
---

## Statement

Assume the Axiom of Choice inherited from the orbit and dimension suppliers.
Let $G$ be a complex affine algebraic group acting algebraically on a classical
variety $X$ ([[def-rational-action-on-affine-variety]]), and let $x\in X$. Then:
(a) $G_x$ and $(G^\circ)_x$ have the same dimension, the orbit $Gx$ is a finite
union of $G^\circ$-orbits of common dimension $\dim G^\circ-\dim G_x$, and
$\dim G=\dim G_x+\dim Gx$; (b) every irreducible component of the orbit closure
$\overline{Gx}$ has dimension $\dim Gx$, and $\overline{Gx}$ is the union of
$Gx$ and of orbits of strictly smaller dimension; (c) every orbit of minimal
dimension in $X$ is closed, and every orbit closure contains a closed orbit.
Assertion (c) is the input used later for the unique closed orbit in a quotient
fibre.

## Facts & Assumptions

**Given:** AC; a complex affine algebraic group $G$ acting algebraically on a classical variety $X$; a point $x\in X$ with orbit $Gx$ and stabilizer $G_x$.

[F1] *Stabilizer and orbit map fibres.* For a finite-type group scheme $G$ acting on a separated finite-type scheme $X$ and a closed point $x$, the scheme-theoretic stabilizer $H=G_x$ is a closed subgroup scheme, and for $g_0\in G(k)$ the fibre of the orbit map over $g_0x$ is $g_0H$ with $G_{gx}=gHg^{-1}$ ([[lem-action-map-fibres-and-stabilizer-subscheme]]). Read in the classical register, $G_x$ is a closed subgroup of the complex affine algebraic group $G$.

[F2] *Local closedness and connected orbit dimension.* Assume AC, let $G$ be a connected smooth finite-type group over an algebraically closed field acting on a classical variety $X$, and let $x$ be a closed point. The orbit $O_x$ is a locally closed smooth subvariety and the orbit map is faithfully flat, hence surjective ([[lem-orbit-map-faithfully-flat-and-orbit-locally-closed]]). The connected dimension supplier gives the following conclusions: every fibre of the orbit map over a closed point is a left translate of the stabilizer $G_x$ and has dimension $\dim G_x$; $\dim G=\dim G_x+\dim O_x$; the orbit closure $\overline{O_x}$ is the union of $O_x$ and of orbits of strictly smaller dimension; and consequently every orbit of minimal dimension in $X$ is closed and $\overline{O_x}$ contains a closed orbit ([[lem-orbit-map-fibres-and-stabilizer-dimension]], [[lem-action-map-fibres-and-stabilizer-subscheme]]).

[F3] *Dimension of classical varieties.* For a classical variety, $\dim$ is the chain dimension, $\dim_xX$ is the maximum of the dimensions of the irreducible components through the closed point $x$, and pure dimension $d$ means that every irreducible component has dimension $d$ ([[def-dimension-classical-variety]]).

[F4] *Finite unions.* If a Noetherian space $T$ is a finite union of closed subsets $T_1,\dots,T_m$, then $\dim T=\max_i\dim T_i$ ([[lem-dimension-finite-union-components]]).

[F5] *Classical and scheme conventions.* For a finite-type scheme over a perfect field, classical smoothness, scheme smoothness and regularity of all local rings agree ([[cor-smooth-variety-classical-scheme-conventions-agree]]); complex affine algebraic groups are smooth ([[lem-complex-algebraic-groups-are-smooth]]). Proof 3.1 of the latter also supplies the normal irreducible open subgroup $G^\circ$ whose finitely many cosets are the components of $G$.

[F6] *Dimension of a dense open and its boundary.* A nonempty open subset of an irreducible classical variety has the same dimension as the variety, and every proper closed subvariety has strictly smaller dimension ([[lem-dimension-nonempty-open-subset]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $G$ is connected. Then $G_x=G^\circ_x$ is a closed subgroup of the smooth connected group $G$ by [F1], and the local-closedness supplier [F2], applied to the closed point $x$ and read in the classical register through [F5], makes $Gx$ a locally closed subvariety. The connected group $G$ is irreducible by [F5], so its image $Gx$ under the surjective orbit map is irreducible. The connected dimension supplier in [F2] then gives $\dim Gx=\dim G-\dim G_x$, and hence $\dim G=\dim G_x+\dim Gx$. [F1, F2, F5]

2.1 Still with $G$ connected, let $Z=\overline{Gx}$. By step 1.1, $Gx$ is a nonempty irreducible locally closed subset of $Z$, hence is open and dense in $Z$. Therefore $\dim Z=\dim Gx$ by [F6], and $Z$ is its only irreducible component. The connected orbit-closure conclusion in [F2] says that every orbit in $Z\setminus Gx$ has dimension strictly smaller than $\dim Gx$. This proves the connected case of (b). [F2, F6, step 1.1]

3.1 Now drop the connectedness of $G$. By [F5] the cosets of $G^\circ$ are finite, so $Gx$ is the union of finitely many $G^\circ$-orbits $O_i=g_iG^\circ x$, permuted transitively by $G$; discard repetitions so these orbits are pairwise disjoint. The finite-index inclusions $(G_x)^\circ\subseteq(G^\circ)_x\subseteq G_x$ give equal stabilizer dimensions, and $\dim G=\dim G^\circ$ because $G/G^\circ$ is finite. Thus every $O_i$ has dimension $d=\dim G^\circ-\dim G_x=\dim G-\dim G_x$ by step 1.1. Each $O_i$ is irreducible and locally closed, hence open and dense in its irreducible closure $Z_i$; step 2.1 gives $\dim Z_i=d$. If $i\ne j$ and $O_i\cap Z_j\ne\varnothing$, the $G^\circ$-stability of $Z_j$ and transitivity on $O_i$ imply $O_i\subseteq Z_j$, so $Z_i\subseteq Z_j$. Equal dimensions and [F6] force $Z_i=Z_j$; then the two nonempty open subsets $O_i,O_j$ of this irreducible variety intersect, contrary to their disjointness. Hence $O_i\cap Z_j=\varnothing$ for $i\ne j$. Now $Z=\overline{Gx}=\bigcup_i Z_i$ and $Gx=\bigcup_iO_i$; the complement $Z\setminus Gx=\bigcup_i(Z_i\setminus O_i)$ is closed, so $Gx$ is open dense in $Z$. Moreover $O_i=Z_i\cap Gx$ is closed in $Gx$; by [F6] each has dimension $d$, and [F4] applied to their finite closed union gives $\dim Gx=d$. The same finite-union argument shows every irreducible component of $Z$ is one of the $Z_i$ and has dimension $d$. Every connected-group orbit in $Z\setminus Gx$ has dimension less than $d$ by [F2], so each full $G$-orbit there also has dimension less than $d$ by the same argument. This proves (a) and (b). [F1, F3, F4, F5, F6, step 1.1, step 2.1]

4.1 For (c): if $Gx$ has minimal dimension among the orbits in $X$ and $y$ lies in its boundary, then step 3.1 gives $\dim Gy<\dim Gx$, a contradiction; hence $Gx$ is closed. For any orbit closure $\overline{Gz}$, the nonempty set of dimensions of orbits contained in it is a subset of the nonnegative integers and therefore has a least value; choose an orbit $Gy\subseteq\overline{Gz}$ attaining it. Since $\overline{Gz}$ is closed and $G$-stable, $\overline{Gy}\subseteq\overline{Gz}$. If $Gy$ were not closed, its boundary would contain an orbit of strictly smaller dimension by step 3.1, still contained in $\overline{Gz}$, contradicting the choice of $Gy$. Thus every orbit closure contains a closed orbit. [F3, step 3.1]

5.1 Assertions (a), (b) and (c) are exactly the conclusions of steps 3.1 and 4.1, and all of them were obtained from the named suppliers, whose Axiom of Choice is inherited here. [step 3.1, step 4.1] ∎

## Remarks

- This is Brion's Proposition 1.11 (printed p. 4) and Lemma 1.3 (printed p. 3): the connected case is the scheme-theoretic orbit lemma, and the passage to disconnected $G$ uses only the finiteness of $G/G^\circ$ and the finite-index inclusions of stabilizers.
- Local closedness is supplied by [[lem-orbit-map-faithfully-flat-and-orbit-locally-closed]]; the dimension and boundary clauses come from [[lem-orbit-map-fibres-and-stabilizer-dimension]]. Irreducibility of a connected-group orbit follows from the surjective orbit map and irreducibility of the group, as in step 1.1.
