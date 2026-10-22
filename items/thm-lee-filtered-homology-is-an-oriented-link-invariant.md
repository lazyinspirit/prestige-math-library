---
id: thm-lee-filtered-homology-is-an-oriented-link-invariant
kind: theorem
title: Lee filtered homology is an oriented link invariant
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-lee-deformed-khovanov-complex
  - def-countable-choice
  - thm-oriented-reidemeister-equivalence-theorem
  - lem-khovanov-signed-local-cancellation-models
  - lem-lee-filtered-spectral-sequence-and-two-orientation-classes
  - def-chain-homotopy-equivalence
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC_omega is used only to obtain a finite oriented Reidemeister
  sequence between diagrams.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
sources:
  references:
    - title: Jacob Rasmussen, Khovanov homology and the slice genus,
        arXiv:math/0402131v1
      url: https://arxiv.org/pdf/math/0402131v1
      locator: §§2.3 and 6, printed pp. 4 and 15–19
    - title: Curtis T. McMullen, 4-Manifolds, Stanford lecture notes
      url: https://web.stanford.edu/~cm5/4Mnotes.pdf
      locator: §§5.5–5.6, printed pp. 94–99
    - title: Eun Soo Lee, On Khovanov invariant for alternating links,
        arXiv:math/0210213v2
      url: https://arxiv.org/pdf/math/0210213v2
      locator: §§4–5
---

## Statement

Assume the Axiom of Countable Choice. If $D$ and $D'$ are finite regular diagrams of the same nonempty oriented link, then their rational Lee cochain complexes are related by a cochain homotopy equivalence whose maps and homotopies preserve the decreasing quantum filtrations after normalization. Consequently their Lee homology groups with induced filtrations are isomorphic, and the spectral sequences from the rational Khovanov page onward are isomorphic. These filtered groups and pages therefore depend only on the oriented link.

## Statement references

[[def-lee-deformed-khovanov-complex|Rational Lee complex and decreasing quantum filtration]]

[[lem-khovanov-signed-local-cancellation-models|Explicit signed local cancellation coordinates]]

[[thm-oriented-reidemeister-equivalence-theorem|Finite oriented Reidemeister sequence]]

[Rasmussen, *Khovanov homology and the slice genus* (2004), §§2.3 and 6](https://arxiv.org/pdf/math/0402131v1)

[McMullen, *4-Manifolds*, §§5.5–5.6](https://web.stanford.edu/~cm5/4Mnotes.pdf)

[Lee, *On Khovanov invariant for alternating links* (2002), §3.2 and §4.2](https://arxiv.org/pdf/math/0210213v2)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, two finite oriented diagrams of the same link, and their Lee complexes with normalized gradings.

[F1] The rational Lee saddle maps differ from the degree-preserving Khovanov maps only by terms that raise quantum degree by $4$ ([[def-lee-deformed-khovanov-complex]]).

[F2] Under $\mathrm{AC}_\omega$, diagrams of the same oriented link are related by finitely many planar isotopies and oriented Reidemeister I, II, and III moves ([[thm-oriented-reidemeister-equivalence-theorem]]).

[F3] The signed local cancellation coordinates, inverse blocks, and homotopies for the two-crossing and three-crossing cubes are explicit in [[lem-khovanov-signed-local-cancellation-models]].

[F4] In the signed Reidemeister II model, the four state modules retract by explicit identity pivots to the identity matching in local cohomological degree one and quantum shift upward by one; the two Reidemeister III cubes cancel to a common three-term complex ([[lem-khovanov-signed-local-cancellation-models]]).

[F5] Cochain homotopy equivalence induces cohomology isomorphisms ([[def-chain-homotopy-equivalence]]).

[F6] The associated-graded Lee differential is the integral Khovanov differential, and its filtered spectral sequence has rational Khovanov cohomology as its homology page ([[lem-lee-filtered-spectral-sequence-and-two-orientation-classes]]).

[A1] $\mathrm{AC}_\omega$ is the axiom that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

## Proof

**Given:** The hypotheses of the Statement.

1.1 In $A_L=\mathbb Q[X]/(X^2-1)$, multiplication by $X$ is a dot operator with $X^2=1$, and $\Delta_L(z)=1\otimes Xz+X\otimes z,\qquad \Delta_Lm_L(a\otimes b)=Xa\otimes b+a\otimes Xb.$ The first identity follows by substituting $z=1,X$; the second follows by substituting the four basis pairs $1\otimes1,1\otimes X,X\otimes1,X\otimes X$. Thus the split and merge circle coordinates in [F3] remain valid for the Lee algebra, and the neck-cutting relation required in the Reidemeister II retraction holds with $X^2=1$. [F1, F3, algebra]

2.1 For a positive curl, the local differential is $(u,v)\mapsto u+Xv$ from the small-circle coordinates $1\otimes u+X\otimes v$ to the continuing arc. Change coordinates to $(u',v')=(u+Xv,v)$. The retraction has inclusion $i(w)=(0,w)$, projection $p(u',v')=v'$, and contraction $h(w)=(w,0)$ on the target; hence $pi=1$ and $1-ip=dh+hd$. For a negative curl, the local differential is $v\mapsto(Xv,v)$ into the small-circle coordinates. Change target coordinates to $(w'_1,w_X)=(w_1-Xw_X,w_X)$; then the map is $v\mapsto(0,v)$, and the retraction onto $w'_1$ has inclusion $i(w)=(w,0)$, projection $p(w'_1,w_X)=w'_1$, and contraction $h(0,w) = w$ from the $w_X$ target summand to the source. These formulas give $pi=1$ and $1-ip=dh+hd$. Before the writhe shifts, the positive survivor has quantum shift $-1$ and the negative survivor has quantum shift $+2$; the new $+1$ and $-2$ writhe shifts cancel them, respectively. In both cases the normalized homological degree agrees with the original. For Reidemeister II use the local maps $i(v)=(v,tv,0)$ and $p(v,w_1,w_X)=v-sw_X$ from [F3]; the identity $ts=x+y$ used in $dh+hd=1-ip$ is exactly the second identity in step 1.1. Its local homological and quantum shifts are canceled by the one positive and one negative crossing normalization changes. For Reidemeister III, the two cancellations in [F4] use only identity pivots and the same split coordinates, while writhe normalization is unchanged. All coordinate changes have pivots $\pm1$ and entries given by the Lee saddle and dot maps, so they preserve the decreasing filtration after normalization. [F1, F3, F4, step 1.1, algebra]

3.1 The Lee deformation terms raise $q$ by $4$ by [F1]. Each local coordinate change in step 2.1 is triangular with diagonal entries $\pm1$; its off-diagonal entries are saddle maps, whose degree-preserving parts are the corresponding Khovanov maps and whose other terms raise $q$ by $4$. Therefore the maps, inverses, and contraction homotopies preserve the decreasing filtration after applying the normalization shifts. On the associated graded, the R1 retractions are the degree-preserving parts of the displayed curl maps, and the RII/RIII retractions are the local Khovanov equivalences of [F4]. Their filtered maps induce isomorphisms on filtered homology; their associated-graded maps induce isomorphisms on the Khovanov page and, by page iteration, on every later spectral-sequence page. [F1, F4, F6, step 2.1, algebra]

4.1 By [A1] and [F2], choose a finite sequence of oriented Reidemeister moves and planar isotopies from $D$ to $D'$; if $D=D'$, the empty sequence gives the identity. Planar isotopies rel crossing data simply relabel state circles and preserve all degrees. Compose the filtered equivalences from step 3.1 along this finite sequence. The composite has a filtered inverse up to filtered homotopy, so [F5] gives an isomorphism of filtered Lee homology and step 3.1 gives isomorphisms of all pages from rational Khovanov onward. This proves diagram independence. The only choice used is the finite move sequence supplied by $\mathrm{AC}_\omega$; the local algebraic maps themselves are explicit and choice-free. [A1, F2, F5, step 3.1, given, construct] ∎
