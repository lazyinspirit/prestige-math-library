---
id: lem-closed-orientable-finite-pl-surfaces-with-abelian-group-are-spheres-or-tori
kind: lemma
title: "Closed orientable finite PL surfaces with abelian group are spheres or tori"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema
  - lem-polygonal-schema-reduction-moves
  - lem-finite-polygonal-disk-and-collar-surgery
  - thm-seifert-van-kampen
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free for the supplied finite PL surface. Finite polygon moves are used directly, without invoking the AC-qualified theorem that first triangulates an arbitrary topological surface."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Finite polygon operations through the fully read local one-polygon and polygon-move suppliers. The orientable reduction and abelian-group test are proved below, conditional on the supplied triangulation."
---

## Statement

A nonempty connected closed orientable surface with a supplied finite PL triangulation and abelian fundamental group is PL homeomorphic to the standard two-sphere or standard two-torus. All parameters can be obtained by finite polygonal operations; no choice axiom is assumed.

## Facts & Assumptions

**Given:** The finite orientable closed PL surface and its abelian fundamental group.

[F1] A supplied finite triangulated closed surface admits a finite one-polygon schema by dual-tree gluing; the construction uses only finitely many affine triangle maps. [[lem-finite-triangulated-surface-reduces-to-a-one-polygon-schema]]

[F2] Paired-edge subdivision, cyclic reading, nonterminal adjacent inverse cancellation and interlaced-handle extraction are finite quotient-preserving polygon operations. In particular $aUbVa^{-1}Xb^{-1}Y$ extracts a commutator block followed by $YXVU$. [[lem-polygonal-schema-reduction-moves]]

[F3] Finite polygonal disks and collars admit prescribed-boundary PL parameters and extensions. [[lem-finite-polygonal-disk-and-collar-surgery]]

[F4] Van Kampen computes the presentation from the finite polygon edges and its attached face. [[thm-seifert-van-kampen]]

## Proof

1.1 Use [F1] to obtain one polygon. Orient its triangles coherently. The two occurrences of every paired edge then have opposite directions, since the orientations on the incident triangles induce opposite edge orientations. The resulting word is a finite cyclic word with every letter occurring once positively and once negatively. Its actual parameter is PL: in [F1] the placed triangles are matched affinely to the supplied surface triangles, and all residual boundary pairings are affine after subdivision. We shall use only finite straight polygon cuts and the finite disk extensions of [F3], so all later identifications remain PL as well. [F1, F3, given, construct]

2.1 Cancel any adjacent inverse pair while another paired letter remains, using [F2]. If only the inverse bigon remains it is the PL sphere, by coning its two boundary arcs with their matched subdivision. Otherwise, after cancellations there is an interlaced pair. Indeed choose a matched pair for which one of its cyclic intervening arcs contains as few endpoints as possible. If no chord crosses that pair, every endpoint inside that arc is paired to another endpoint inside it. Choosing a pair inside gives a shorter intervening arc; eventual finiteness gives an adjacent pair, contrary to the cancellation stopping rule. Thus some pair crosses the chosen pair. Orient its labels and read cyclically to obtain the pattern of [F2], and extract a commutator block $cdc^{-1}d^{-1}$. If there is a residue, that block is a punctured torus attached to the capped residual surface by a disk-sum: take a small polygonal circle through the face separating the four-edge block from the residue, with small sectors at their common corner. The block side is the square torus with one disk removed. The other side is the residual paired polygon with one disk removed. Its links away from this seam are unchanged; the sectors at the seam replace one interval in the original cyclic vertex link by one interval, so after capping they remain circles. Its one face is connected, hence it is a connected closed orientable surface. These statements can also be read directly by splitting off the four-edge block along [F2]'s last diagonal and capping the two seam circles using [F3]. Thus this is a PL connected-sum decomposition. Repeat on the residual surface. Each handle extraction removes two paired letters from that residual word, and each cancellation removes one; hence only finitely many operations occur. The terminal models are the sphere or a finite disk-sum of $g\ge1$ square tori. [F2, F3, step 1.1, construct]

3.1 The resulting genus-$g$ polygon has presentation $\langle a_1,b_1,\ldots,a_g,b_g\mid\prod_{j=1}^g[a_j,b_j]=1\rangle$ by [F4], with no generators when $g=0$. If $g\ge2$, send $a_1$ to $x$, $a_2$ to $y$, and every other displayed generator to the identity. The face relation maps to the identity, so this is a surjection onto the free group on $x,y$. That free group is nonabelian: deleting consecutive inverse pairs gives a unique reduced word, and $xyx^{-1}y^{-1}$ is a nonempty reduced word. An abelian group cannot have a nonabelian quotient. Thus $g=0$ or $g=1$, whose finite polygonal parameters are exactly those of the standard PL sphere and square torus. No topological-surface triangulation theorem or infinite selection was used. [F4, step 2.1, algebra] ∎
