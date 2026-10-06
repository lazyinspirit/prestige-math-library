---
id: lem-khovanov-rozansky-complex-is-invariant-under-braid-conjugation
kind: lemma
title: "Invariance under braid conjugation"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
deps: [def-khovanov-rozansky-complex-and-trigraded-braid-homology, thm-markings-do-not-change-the-khovanov-rozansky-complex, def-markov-conjugation-and-stabilization-moves]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), section 1, the Markov move list and the conjugation relation, printed pp. 8-9; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, Geom. Topol. 12 (2008) 1387-1425 (published version of record), relation (18) and its discussion, printed p. 1397"
      url: "https://msp.org/gt/2008/12-3/gt-v12-n3-p04-p.pdf"
    - title: "Khovanov and Rozansky, Matrix factorizations and link homology, arXiv:math/0401268v2, introduction printed pp. 6-12: fixed-n sl(n) analogue with different potentials and gradings, not the parameter-a formulas of KR II"
      url: "https://arxiv.org/pdf/math/0401268"
---

## Statement

Let $\alpha,\beta$ be braid words on $n$ strands and let
$D_{\alpha\beta}$, $D_{\beta\alpha}$ be the corresponding closed braid
diagrams with any admissible markings. Then
$C(D_{\alpha\beta})\cong C(D_{\beta\alpha})$ in $K(\mathrm{hmf}_0)$, with no
grading shift; hence the trigraded cohomology is unchanged,
$H(D_{\alpha\beta})\cong H(D_{\beta\alpha})$.

Caveat: the statement is about the two closed braid diagrams of conjugate braid
words, not about a homotopy between arbitrary complexes; the isomorphism is
constructed, not merely asserted. The two braid words represent the same link
by Markov move (a) of [[def-markov-conjugation-and-stabilization-moves]].

## Facts & Assumptions

**Given:** braid words $\alpha,\beta$ on $n$ strands, the two closed braid diagrams $D_{\alpha\beta}$ and $D_{\beta\alpha}$ with admissible markings, and their complexes $C(D_{\alpha\beta})$, $C(D_{\beta\alpha})$.

[F1] $C(D)$ is the tensor product of the crossing complexes and the arc factors over the shared polynomial ring, with the totalized differential of bidegree $(0,0)$ and Koszul signs; it is an object of $K(\mathrm{hmf}_w)$, and for a closed braid diagram $w=0$ ([[def-khovanov-rozansky-complex-and-trigraded-braid-homology]]).

[F2] Changing the marks of a tangle diagram changes $C(D)$ by a chain homotopy equivalence, with no grading shift, compatibly with the crossing differentials ([[thm-markings-do-not-change-the-khovanov-rozansky-complex]]).

[F3] Markov move (a) relates the closed braid diagrams of $\alpha\beta$ and $\beta\alpha$: the two closures are the same diagram, with the closure arcs attached at different points ([[def-markov-conjugation-and-stabilization-moves]]).

## Proof

**Proof technique:** construction of the isomorphism by sliding the closure seam and applying the tensor-permutation and marking-independence isomorphisms.

1.1 *The two diagrams differ by a cyclic reordering of the tensor factors.* Cutting the closed braid of [F3] at an angular cut away from all crossings unfolds it to a braid word; cutting at the meridian that separates the block $\alpha$ from the block $\beta$ gives the word $\alpha\beta$, and cutting one block further along the annulus gives $\beta\alpha$. Changing that cut is a cyclic reading of the same annular diagram: no crossing is created or destroyed, and the arc and crossing factors of $C(D)$ are the same local data in both diagrams, only read in the cyclic order recorded by the two words. The closures of $\alpha\beta$ and $\beta\alpha$ are therefore the same marked diagram up to the cyclic reordering of the blocks $\alpha$ and $\beta$, and both are closed, so the potential vanishes by [F1]. [F1, F3]

2.1 *The reordering is an isomorphism of complexes.* A cyclic reordering of the tensor factors of a finite tensor product of complexes is realized by the symmetry and associativity isomorphisms of the monoidal structure, which are isomorphisms of factorizations and intertwine the total differentials: the differential is a sum of local maps, one for each tensor factor, and the permutation isomorphism conjugates each summand to the corresponding summand in the reordered product, the Koszul signs being exactly the ones built into the symmetric monoidal structure. Hence a cyclic permutation of the tensor factors of $C(D)$ induces an isomorphism of complexes over the same polynomial ring, preserving the cohomological and the two bigrading degrees; combinations of such permutations generate every reordering of the blocks, and reassociation of adjacent factors uses the associativity isomorphism. The change of the mark labels along the moved seam is an isomorphism or chain homotopy equivalence by [F2]. Composing these isomorphisms gives a chain homotopy equivalence $C(D_{\alpha\beta})\simeq C(D_{\beta\alpha})$, hence the asserted isomorphism in $K(\mathrm{hmf}_0)$. [F1, F2, step 1.1]

3.1 *Conclusion.* The isomorphism of step 2.1 has bidegree $(0,0)$ and preserves the cohomological degree, so it induces an isomorphism $H(D_{\alpha\beta})\cong H(D_{\beta\alpha})$ of trigraded vector spaces with no shift; since both diagrams are closed, the potential is zero throughout and no shift arises from crossing normalization because the same crossings occur in both words. This is the conjugation invariance used in Markov's theorem, and no step uses the Axiom of Choice. [F1, step 2.1] ∎
