---
id: lem-orbit-dimension-and-closed-orbits-for-complex-group-actions
kind: lemma
title: Orbit dimension and closed orbits for complex group actions
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-rational-action-on-affine-variety, lem-complex-algebraic-groups-are-smooth, def-dimension-classical-variety, lem-dimension-finite-union-components, lem-dimension-nonempty-open-subset, cor-smooth-variety-classical-scheme-conventions-agree, lem-action-map-fibres-and-stabilizer-subscheme, lem-orbit-map-fibres-and-stabilizer-dimension, lem-orbit-map-faithfully-flat-and-orbit-locally-closed, def-axiom-of-choice, lem-regular-point-lies-on-one-component, lem-classical-variety-noetherian-components]
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

[F5] *Classical and scheme conventions.* For a finite-type scheme over a perfect field, classical smoothness, scheme smoothness and regularity of all local rings agree ([[cor-smooth-variety-classical-scheme-conventions-agree]]); every complex affine algebraic group is smooth and has regular local rings ([[lem-complex-algebraic-groups-are-smooth]]).

[F6] *Dimension of a dense open and its boundary.* A nonempty open subset of an irreducible classical variety has the same dimension as the variety, and every proper closed subvariety has strictly smaller dimension ([[lem-dimension-nonempty-open-subset]]).

[F7] *Components at regular points.* Every classical variety is Noetherian and has finitely many irreducible components ([[lem-classical-variety-noetherian-components]]). Under AC, a regular point of a reduced Noetherian scheme lies on exactly one irreducible component ([[lem-regular-point-lies-on-one-component]]); apply this to the associated reduced finite-type complex scheme and read its components in the classical register through [F5].

## Proof

**Proof technique:** direct.

1.1 For any complex affine algebraic group $K$, [F5] and [F7] imply that distinct irreducible components are disjoint. The finitely many components are therefore open and closed; since each is irreducible and hence connected, they are exactly the connected components. Let $C$ be the component containing the identity. Translation by $c\in C$ carries the unique component through the identity onto the unique component through $c$, so $cC=C$. Inversion and conjugation fix the identity and permute components, hence preserve $C$. Thus $C=K^\circ$ is a closed normal irreducible open subgroup, and translation by any $k\in K$ identifies $C$ with the component through $k$. Its finitely many cosets are precisely the components, all of the same dimension; [F4] gives $\dim K=\dim K^\circ$. Apply this also to the closed classical subgroup $H=G_x$: its identity component $H^\circ$, being connected and containing the identity, lies in $G^\circ$. Since $H\cap G^\circ$ is open and closed in $H$, it is a nonempty union of components of $H$, each of dimension $\dim H$. Hence [F4] gives $\dim(G^\circ)_x=\dim(H\cap G^\circ)=\dim H=\dim G_x$. [F1, F4, F5, F7]

2.1 Suppose first that $G$ is connected. Then $G_x=(G^\circ)_x$ is a closed subgroup by [F1], and [F2], read through [F5], makes $Gx$ a locally closed subvariety. By step 1.1 the connected group $G$ is irreducible, so its image under the surjective orbit map is irreducible. The connected dimension supplier in [F2] gives $\dim Gx=\dim G-\dim G_x$, hence $\dim G=\dim G_x+\dim Gx$. [F1, F2, F5, step 1.1]

3.1 Still with $G$ connected, put $Z=\overline{Gx}$. By step 2.1, $Gx$ is irreducible and locally closed, hence open dense in $Z$. Thus $Z$ is irreducible and $\dim Z=\dim Gx$ by [F6]. The orbit-closure clause of [F2] makes every orbit in $Z\setminus Gx$ strictly smaller in dimension. This proves the connected case of (b). [F2, F6, step 2.1]

4.1 For arbitrary $G$, step 1.1 writes $Gx$ as finitely many distinct pairwise disjoint $G^\circ$-orbits $O_i=g_iG^\circ x$, permuted transitively by $G$. That step also gives $\dim(G^\circ)_x=\dim G_x$ and $\dim G=\dim G^\circ$. Hence every $O_i$ has dimension $d=\dim G^\circ-\dim G_x=\dim G-\dim G_x$ by step 2.1 and translation. Each $O_i$ is irreducible and locally closed, so it is open dense in its irreducible closure $Z_i$, with $\dim Z_i=d$ by step 2.1. If $i\ne j$ and $O_i\cap Z_j\ne\varnothing$, the $G^\circ$-stability of $Z_j$ implies $O_i\subseteq Z_j$ and then $Z_i\subseteq Z_j$. Equal dimensions and [F6] force $Z_i=Z_j$, whose two nonempty open subsets $O_i,O_j$ would intersect, a contradiction. Thus $O_i\cap Z_j=\varnothing$ for $i\ne j$. Consequently $Z=\overline{Gx}=\bigcup_i Z_i$ has $Z\setminus Gx=\bigcup_i(Z_i\setminus O_i)$ closed, and $O_i=Z_i\cap Gx$ is closed in $Gx$. By [F4], $\dim Gx=d$; the irreducible components of $Z$ are exactly the distinct $Z_i$, each of dimension $d$. Every $G^\circ$-orbit in the boundary has dimension less than $d$ by [F2]. For any full $G$-orbit there, apply the same finite-union construction to its finitely many connected-group orbits, which are translates of one another: its dimension is their common dimension, also less than $d$. This proves (a) and (b). [F1, F2, F3, F4, F6, step 1.1, step 2.1, step 3.1]

5.1 If $Gx$ has minimal dimension among the orbits in $X$, step 4.1 leaves no boundary orbit of smaller dimension, so $Gx$ is closed. For an arbitrary orbit closure $\overline{Gz}$, choose an orbit $Gy$ in it with least dimension, which exists because the nonempty set of orbit dimensions is a subset of the nonnegative integers. This closure is closed and $G$-stable, so $\overline{Gy}\subseteq\overline{Gz}$. A boundary orbit of $Gy$ would have smaller dimension by step 4.1 and still lie in $\overline{Gz}$, contradicting the choice. Thus $Gy$ is closed, proving (c). [F3, step 4.1]

6.1 Steps 4.1 and 5.1 prove all the stated conclusions, with the inherited Axiom of Choice. The component argument was proved locally in step 1.1 using the stated regular-point and finite-component suppliers. [step 1.1, step 4.1, step 5.1] ∎

## Remarks

- This is Brion's Proposition 1.11 (printed p. 4) and Lemma 1.3 (printed p. 3): the connected case is the scheme-theoretic orbit lemma, and the passage to disconnected $G$ uses only the finiteness of $G/G^\circ$ and the finite-index inclusions of stabilizers.
- Local closedness is supplied by [[lem-orbit-map-faithfully-flat-and-orbit-locally-closed]]; the dimension and boundary clauses come from [[lem-orbit-map-fibres-and-stabilizer-dimension]]. Irreducibility of a connected-group orbit follows from the surjective orbit map and irreducibility of the group, as in step 1.1.
