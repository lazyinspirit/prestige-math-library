---
id: lem-lee-cobordism-filtration-genus-bound
kind: lemma
title: Lee cobordism maps give the genus filtration bound
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-abstract-oriented-knot-cobordism
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-smooth-knot-concordance
  - def-lee-deformed-khovanov-complex
  - lem-lee-filtered-spectral-sequence-and-two-orientation-classes
  - thm-lee-homology-of-a-knot-has-two-generators
  - thm-lee-filtered-homology-is-an-oriented-link-invariant
  - def-rasmussen-s-invariant
  - thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms
  - def-generic-movie-of-an-oriented-knot-cobordism
  - lem-smooth-link-cobordisms-admit-finite-generic-movies
  - def-countable-choice
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC_omega supplies the finite adapted Morse and generic-movie choices;
  the finite Lee algebra checks are choice-free.
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
      locator: §§4.1–4.3, printed pp. 9–12; §6, printed pp. 15–19
    - title: Curtis T. McMullen, 4-Manifolds, Stanford lecture notes
      url: https://web.stanford.edu/~cm5/4Mnotes.pdf
      locator: §5.7, printed pp. 99–102
---

## Statement

Assume the Axiom of Countable Choice. Let $S\subset S^3\times[0,1]$ be a connected compact oriented smoothly properly embedded surface of genus $g$, with product collars and oriented boundary $(-K_0\times\{0\})\sqcup(K_1\times\{1\})$ for oriented knots $K_0,K_1$ in the standard three-sphere. A **finite movie** for $S$ is a finite ordered sequence of regular-level link diagrams whose changes are planar isotopies, oriented Reidemeister moves, births, saddles or deaths. Such a movie defines a map on rational Lee homology that preserves the induced decreasing filtration with degree $\chi(S)=-2g$. The map is an isomorphism; consequently
$$
|s(K_1)-s(K_0)|\le 2g.
$$

## Statement references

[[def-generic-movie-of-an-oriented-knot-cobordism|Properly embedded smooth knot cobordism in the standard product, with product collars]]

[[def-smooth-knot-concordance|Smooth embeddings and product collars]]

[[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms|Finite adapted Morse decomposition]]

[[def-generic-movie-of-an-oriented-knot-cobordism|Generic movies and their elementary changes]]

[[def-lee-deformed-khovanov-complex|Lee saddle operations and filtration]]

[Rasmussen, *Khovanov homology and the slice genus* (2004), §§4.1–4.3 and §6](https://arxiv.org/pdf/math/0402131v1)

[McMullen, *4-Manifolds*, §5.7](https://web.stanford.edu/~cm5/4Mnotes.pdf)


## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a connected smoothly properly embedded oriented knot cobordism in $S^3\times[0,1]$ with product collars, and finite regular diagrams at its boundary.

[F2] A birth uses $\eta_L(1)=1$, a death uses $\epsilon_L(1)=0,\epsilon_L(X)=1$, and a saddle uses $m_L$ or $\Delta_L$ ([[def-lee-deformed-khovanov-complex]]).

[F3] Each oriented Reidemeister move induces a filtered chain homotopy equivalence of degree zero on Lee homology ([[thm-lee-filtered-homology-is-an-oriented-link-invariant]]).

[F4] The two canonical orientation classes form a basis of knot Lee homology ([[thm-lee-homology-of-a-knot-has-two-generators]]).

[F5] For a $c$-component link the $2^c$ canonical orientation classes form a basis, with labels fixed by the checkerboard convention ([[lem-lee-filtered-spectral-sequence-and-two-orientation-classes]]).

[A1] $\mathrm{AC}_\omega$ is the axiom used by the adapted-Morse and finite diagram/movie inputs ([[def-countable-choice]]).

[F6] Every compact smooth collared oriented link cobordism admits a finite generic movie representing its actual embedded trace, relative to smaller end collars, under countable choice ([[lem-smooth-link-cobordisms-admit-finite-generic-movies]]).

## Proof

**Given:** The hypotheses of the Statement.

1.1 Under [A1], [F6] supplies a finite movie of the actual collared surface, with fixed regular endpoint diagrams and only planar isotopies, Reidemeister events, births, saddles and deaths. It represents the same oriented embedded surface up to ambient isotopy relative to smaller collars, so it has the same connectedness, genus and Euler characteristic. No assertion that all movies give the same homology map is needed here; choose one supplied movie and its reverse. [A1, F6, given, construct]

1.2 For every Reidemeister disk choose a marked point on each link component outside that disk, carried through the move. On the Lee cube let $X_p$ multiply the circle containing the point by $X$. Each $X_p$ is a chain map: $m(Xu,v)=Xm(u,v)=m(u,Xv)$ and $\Delta(Xu)=(X\otimes1)\Delta(u)=(1\otimes X)\Delta(u)$, verified on $u,v=1,X$. The local Reidemeister maps commute with these operators. Indeed the retractions used in [F3] consist of saddles, dots, factor relabelings, and inverses of scalar identity pivots; the displayed identities show that each constituent commutes with every exterior $X_p$, so their composites and homotopies do too. In the canonical basis $a=1+X$, $b=X-1$, one has $Xa=a$, $Xb=-b$. The checkerboard convention for the canonical labels is unchanged outside the disk. At one fixed mark on each component its sign determines the orientation of that component; consequently the $2^c$ orientation classes are distinct simultaneous eigenlines of the exterior marked actions. A Reidemeister homology isomorphism intertwining those actions must carry each eigenline to the line with the same signs, and cannot kill it. Thus it carries each orientation class to a nonzero multiple of the class with the induced orientation. This argument covers every orientation and exterior connectivity of RIII without an omitted case census. [F2, F3, F5, algebra, construct]

2.1 In the basis $a,b$ the Morse maps are $\eta_L(1)=\tfrac12(a-b)$, $m_L(aa)=2a$, $m_L(bb)=-2b$, $m_L(ab)=m_L(ba)=0$, $\Delta_L(a)=aa$, $\Delta_L(b)=bb$, and $\epsilon_L(a)=\epsilon_L(b)=1$. The local label compatibility is explicit: in an empty band disk put its two attaching segments parallel. The middle strip has a single checkerboard color. The black-right rule of [F5] then assigns equal labels exactly when the segment arrows are opposite, and different labels exactly when they agree; inspect the two possible strip colors, which exchange both labels. An orientation extends across an oriented band exactly in the opposite-arrow case. The exterior checkerboard colors remain fixed, so the surviving equal label is the canonical label after the saddle. This includes segments on the same circle, nested circles or disjoint circles. Track orientations of each partial surface: components meeting the incoming knot have their forced orientation, while each other component has its two possible orientations. A birth creates precisely the two possibilities with nonzero coefficients. A split or a band within one surface component extends its orientation uniquely and multiplies its coefficient by a nonzero scalar. A band joining distinct components retains precisely the compatible choices and kills the others: each orientation of the joined component restricts to a unique compatible pair, so no two retained terms cancel. For a death the disappearing boundary circle belongs to a surface component with another boundary, unless that component becomes closed. A closed component of a partial surface cannot later join another component, and would be a closed component of $S$; connectedness and its incoming boundary exclude this. Thus distinct permitted orientations remain distinct on the surviving boundary after a death, and $\epsilon_L(a)=\epsilon_L(b)=1$ preserves their nonzero coefficients. Step 1.2 treats the Reidemeister events. At the final level every component meets the incoming boundary because $S$ is connected. Hence exactly one permitted orientation extends either incoming orientation, and its coefficient is nonzero. The two input classes map to nonzero multiples of the two output classes. [F2, F4, step 1.2, algebra, construct]

2.2 Assign to a planar isotopy the relabeling of state circles, to a Reidemeister move the filtered map of [F3], and to a Morse event the cube map induced by the corresponding Lee Frobenius operation in [F2]. These are actual cochain maps: the move disk misses the crossings, and its unsigned operation commutes with every cube saddle by associativity, coassociativity and the Frobenius/unit/counit identities proved for [F2]; the crossing set and its cube signs remain fixed. The map for a birth is $\eta_L(1)=1$, whose new circle label has quantum degree $+1$. The death map sends only the $X$ term to $1$, raising quantum degree by $+1$. Each degree-preserving term of a saddle has quantum degree $-1$, while each Lee deformation term raises that saddle degree by $4$; hence a saddle map has filtration degree $-1$. If the movie has $b$ births, $s$ saddles and $d$ deaths, composition has filtered degree $b-s+d=\chi(S)$. For a connected genus-$g$ surface with two boundary components, $\chi(S)=2-2g-2=-2g$. [F2, F3, step 1.1, algebra]

3.1 Step 2.1 and [F4] show that the movie map is an isomorphism between two-dimensional Lee homology groups. Its forward and reverse maps both have filtered degree $-2g$ by step 2.2. Applying the forward map to a nonzero class of level $s_{\max}(K_0)$ gives $s_{\max}(K_1)\ge s_{\max}(K_0)-2g$; applying the reverse map to a class of level $s_{\max}(K_1)$ gives $s_{\max}(K_0)\ge s_{\max}(K_1)-2g$. Since $s=s_{\max}-1$, these inequalities give $|s(K_1)-s(K_0)|\le2g$. The same argument applies to every supplied finite movie, and step 1.1 supplies one for every surface in the Statement. Thus all asserted conclusions follow. [A1, F3, F4, F6, step 2.2, step 2.1, algebra] ∎
