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
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - lem-khovanov-reidemeister-chain-homotopies
  - lem-khovanov-signed-local-cancellation-models
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

Assume countable choice and fix a generic movie $M$ of a smooth oriented surface cobordism $\Sigma$ from an oriented link $L_0$ to an oriented link $L_1$. For each regular frame $D$, let $Kh(D)$ be the normalized integral Khovanov homology group. Associate to a birth the unit map $\eta:\mathbb Z\to\mathcal A$, $\eta(1)=1$; associate to a death the counit $\epsilon:\mathcal A\to\mathbb Z$, $\epsilon(1)=0,\epsilon(X)=1$; and associate to a saddle the multiplication $m:\mathcal A\otimes\mathcal A\to\mathcal A$ when two resolution circles merge, or the comultiplication $\Delta:\mathcal A\to\mathcal A\otimes\mathcal A$ when one splits. Each local map is tensored with the identity on unaffected circles. Associate to planar isotopy the induced identification of the cube complexes, and to a Reidemeister move the specified local normalized chain homotopy equivalence from the signed unit/counit and Gaussian-cancellation models, with its specified inverse in the reverse direction. Use the fixed local orientation cases and the Koszul crossing-order correction $(-1)^{v(a)v(b)}$ when crossings $a,b$ are interchanged. These local maps are chosen once; composing them with an arbitrary automorphism of a complex is not an allowed change of representative. Compose the induced maps on homology in movie order and denote the result by $Kh(M):Kh(L_0)\to Kh(L_1)$, considered modulo multiplication by $-1$. This definition fixes a movie; independence from changing the movie is not included in the definition.

## Definition references

[[def-generic-movie-of-an-oriented-knot-cobordism|Generic movie conventions]]

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|The unit, counit, multiplication, and comultiplication]]

[[lem-khovanov-reidemeister-chain-homotopies|Reidemeister chain homotopy equivalences]]

[[lem-khovanov-signed-local-cancellation-models|The specified local maps and crossing-order signs]]

[[thm-khovanov-homology-is-an-oriented-link-invariant|The link-level Khovanov homology groups]]

[Khovanov, *A categorification of the Jones polynomial*, §§5 and 7](https://arxiv.org/pdf/math/9908171v2)

[Jacobsson, *An invariant of link cobordisms from Khovanov homology*, §§3.2–5](https://arxiv.org/pdf/math/0206303)

[Bar-Natan, *Khovanov's homology for tangles and cobordisms*, §§7–8](https://arxiv.org/pdf/math/0410495v2)
