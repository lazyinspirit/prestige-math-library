---
id: def-khovanov-cobordism-map-up-to-sign
kind: definition
title: "The Khovanov map assigned to a generic surface movie"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-generic-movie-of-an-oriented-knot-cobordism
  - lem-smooth-link-cobordisms-admit-finite-generic-movies
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - def-barnatan-open-tangle-cobordism-complexes
  - lem-barnatan-formal-kink-retractions
  - lem-barnatan-formal-inverse-boundary-crossings
  - lem-barnatan-formal-third-reidemeister-equivalence
  - lem-integral-khovanov-frobenius-algebra-defines-a-cobordism-functor
  - lem-khovanov-frobenius-tqft-respects-barnatan-relations
  - thm-khovanov-homology-is-an-oriented-link-invariant
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: not-applicable
axiom_use: "Assumes AC_omega through the link-level Khovanov homology groups and their diagram independence; the birth, death, and saddle maps use only the integral Frobenius algebra."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, §§5 and 7"
      url: "https://arxiv.org/pdf/math/9908171v2"
      locator: "§§5.1–5.4 and 7.1–7.2; Reidemeister maps, link cobordism maps, and their functoriality conjecture"
    - title: "Magnus Jacobsson, An invariant of link cobordisms from Khovanov homology, §§3.2–5"
      url: "https://arxiv.org/pdf/math/0206303"
      locator: "Printed pp.1220–1244; movie construction, local maps, and the proof of invariance up to sign"
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, §§7–8"
      url: "https://arxiv.org/pdf/math/0410495v2"
      locator: "Printed pp.1470–1480; Frobenius TQFT and the movie-level construction"
---

## Definition

Assume countable choice and fix a generic movie $M$ of a smooth oriented surface cobordism $\Sigma$ from an oriented link $L_0$ to an oriented link $L_1$. For each regular frame $D$, let $Kh(D)$ be the normalized integral Khovanov homology group. The empty frame has the one-term complex $\mathbb Z$ in both gradings zero, using the empty resolution and the zero-fold tensor product. Associate to a birth the unit map $\eta:\mathbb Z\to\mathcal A$, $\eta(1)=1$; associate to a death the counit $\epsilon:\mathcal A\to\mathbb Z$, $\epsilon(1)=0,\epsilon(X)=1$; and associate to a saddle the multiplication $m:\mathcal A\otimes\mathcal A\to\mathcal A$ when two resolution circles merge, or the comultiplication $\Delta:\mathcal A\to\mathcal A\otimes\mathcal A$ when one splits. Each local map is tensored with the identity on unaffected circles. Associate to planar isotopy the induced identification of the cube complexes. For Reidemeister moves, use the following fixed Bar-Natan constructions: the kink retractions $F_+=v-\Delta$, $G_+=e$, $F_-=u$, $G_-=w-m$; the two inverse-crossing strong retractions with degree-zero inclusion $(1,ut)^T$ and projection $(1,-se)$, with their specified reverse-order cube signs; and the third-move equivalences obtained by the explicit source- or target-cone retractions onto the common six-point residual complex. Here $u,e$ are circle birth/death, $v,w$ are punctured-torus birth/death, and the saddle letters denote the actual local bands in these constructions. Use their specified inverses for the reversed moves. Insert these formal surface matrices into the fixed planar outside of the diagram, then apply the integral Frobenius cobordism functor. Normalize a state $v$ to cochain degree $|v|-n_-$ and quantum shift $|v|+n_+-2n_-$. Fix the local coordinate identifications and orientation cases once, with the Koszul crossing-order correction $(-1)^{v(a)v(b)}$ when crossings $a,b$ are interchanged. These local maps are chosen once; composing them with an arbitrary automorphism of a complex is not an allowed change of representative. Compose the induced maps on homology in movie order and denote the result by $Kh(M):Kh(L_0)\to Kh(L_1)$, considered modulo multiplication by $-1$. This definition fixes a movie; independence from changing the movie is not included in the definition.

## Definition references

[[lem-smooth-link-cobordisms-admit-finite-generic-movies|Finite generic movies for oriented link cobordisms, including empty ends]]

[[def-generic-movie-of-an-oriented-knot-cobordism|The knot-endpoint specialization of the movie conventions]]

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|The unit, counit, multiplication, and comultiplication]]

[[def-barnatan-open-tangle-cobordism-complexes|Open formal surfaces, signed planar insertion and shifts]]

[[lem-barnatan-formal-kink-retractions|The specified kink maps]]

[[lem-barnatan-formal-inverse-boundary-crossings|Both specified inverse-crossing systems]]

[[lem-barnatan-formal-third-reidemeister-equivalence|The specified third-move cone constructions]]

[[lem-integral-khovanov-frobenius-algebra-defines-a-cobordism-functor|The actual integral Frobenius functor]]

[[lem-khovanov-frobenius-tqft-respects-barnatan-relations|Its factorization through the local relations]]

[[thm-khovanov-homology-is-an-oriented-link-invariant|The link-level Khovanov homology groups]]

[Khovanov, *A categorification of the Jones polynomial*, §§5 and 7](https://arxiv.org/pdf/math/9908171v2)

[Jacobsson, *An invariant of link cobordisms from Khovanov homology*, §§3.2–5](https://arxiv.org/pdf/math/0206303)

[Bar-Natan, *Khovanov's homology for tangles and cobordisms*, §§7–8](https://arxiv.org/pdf/math/0410495v2)
