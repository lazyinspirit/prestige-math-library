---
id: lem-chosen-ribbon-tree-words-reduce-to-the-short-root-unit
kind: lemma
title: Chosen compatible ribbon-tree words reduce to the short-root unit
status: draft
origin: session
deps:
  - lem-chosen-link-neck-maps-and-edge-counts-satisfy-local-identities
  - thm-offcurve-split-birth-and-death-have-actual-triangular-counts
  - thm-chosen-leaf-packet-triangles-have-triangular-transfer
  - lem-based-multipointed-link-diagrams-admit-finite-relative-move-words
  - thm-finite-based-link-move-words-have-full-colored-unit-comparisons
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Link cobordisms and absolute gradings on link Floer homology
      url: https://arxiv.org/abs/1701.03454
    - title: Link cobordisms and functoriality in link Floer homology
      url: https://arxiv.org/abs/1610.05207
proof_strategy: induction
---

## Statement

Let a finite ribbon tree have a distinguished root path with its two boundary endpoints, and no other boundary leaves. Consider a chosen ordinary, uniform-$U$ chain-map word obtained after forgetting $z$ from the following compatible elementary data. Each auxiliary vertex has actual insertion and deletion maps $S^+,S^-$. Each oriented edge has its actual relative edge action $A_e$. A vertex star uses its ribbon cyclic order for the incident edge actions. Subdivisions use actual concatenated paths. All non-root terminal packets admit the adapted leaf counts, retained-path commutations and protected triangle transfers. Intermediate based-link comparisons are actual finite move words, with the packets inserted in common protected collars; their full colored comparison maps have ordinary unit action. At the end of leaf pruning the distinguished root is the chosen short path between two points in a single old region, with its stipulated short-root datum.

Then this chosen tree word is chain homotopic to the short-root word, interspersed with its old-factor comparisons. Consequently its induced map on the normalized ordinary tower sends $1$ to $1$. This is a statement about the specified compatible data, not an invariance theorem for arbitrary graph decompositions or an assertion that every surface movie already has such data.

## Statement references

[[lem-chosen-link-neck-maps-and-edge-counts-satisfy-local-identities]]

[[thm-offcurve-split-birth-and-death-have-actual-triangular-counts]]

[[thm-chosen-leaf-packet-triangles-have-triangular-transfer]]

[[lem-based-multipointed-link-diagrams-admit-finite-relative-move-words]]

[[thm-finite-based-link-move-words-have-full-colored-unit-comparisons]]

## Facts & Assumptions

[F1] The actual chosen local counts give $S^-S^+=0$, the adapted leaf sandwich $S^-_lA_lS^+_l=\mathrm{id}$, the short-root sandwich $S^-_pA_{pq}S^+_q=\mathrm{id}$, and the relative edge square homotopy $A_e^2\simeq U$: [[lem-chosen-link-neck-maps-and-edge-counts-satisfy-local-identities]]. Retained paths commute with $S^\pm$ in the stipulated packet data. Only these inclusions and projections, not arbitrary edge actions, are asserted to commute.

[F2] An actual offcurve split-birth complex has differential $\left(\begin{smallmatrix}D&H\\0&D\end{smallmatrix}\right)$, with birth the top inclusion and death the bottom extraction. Its actual edge supplies $H=Da+aD$ and the normalization $Q=\left(\begin{smallmatrix}I&a\\0&I\end{smallmatrix}\right)$ preserving these two maps: [[thm-offcurve-split-birth-and-death-have-actual-triangular-counts]]. Thus these are genuine ordinary insertion and deletion maps after forgetting $z$; no alternating quasistabilization is substituted for a split birth.

[F3] A chosen protected packet triangle has matrix $\left(\begin{smallmatrix}F&K\\0&F\end{smallmatrix}\right)$, hence commutes with top inclusion and bottom extraction: [[thm-chosen-leaf-packet-triangles-have-triangular-transfer]]. The same triangular form for retained-path actions suffices; a tensor identity is not required.

[F4] Finite based-link geometric words and a common protected collar for a newly chosen insertion are supplied by [[lem-based-multipointed-link-diagrams-admit-finite-relative-move-words]]. For these actual words the colored comparison maps and ordinary units are supplied by [[thm-finite-based-link-move-words-have-full-colored-unit-comparisons]]; the geometric word alone does not supply their counts.

## Proof

**Given:** The finite tree and the actual compatible word, packets, comparison maps and short-root datum of the statement.

1.1 Fix composition from right to left. The elementary star with central point $v$, incoming point set $V_1$ and outgoing point set $V_2$ has word $S^-_{V_1\cup\{v\}}(\prod A_{\mathrm{ordinary}})(A_{e_m}\cdots A_{e_1})S^+_{V_2\cup\{v\}}$, where the displayed incident block has the actual cyclic order of the ribbon star and each product has its chosen order. Non-star elementary pieces omit the central point and incident block. This specifies the typed elementary word under discussion; no change of cyclic edge order is permitted. A birth or death factor is the actual map in [F2]. [given, F2, construct]

1.2 Let $l$ be a non-root terminal vertex. It occurs in just one edge action. Move its insertion and deletion through the other packet operations, retained edge actions and protected comparison maps, using only [F1] and [F3]. The relative order of all edge actions stays fixed. The exposed consecutive factor is $S^-_lA_lS^+_l$, which is the identity by the actual adapted leaf count. Removing it gives the same elementary star words for the tree with that leaf deleted, retaining the inherited ribbon orders and old-factor comparisons. Triangular reverse entries do not obstruct this operation: top inclusion and bottom extraction commute with a triangular matrix independently of its upper-right entry. [F1, F3, step 1.1, algebra]

1.3 If deletion produces a bivalent auxiliary vertex $v$, use the stipulated local short subdivision data. Write its two consecutive actions as $A_1$ and $A_2=A_{\mathrm{bypass}}+A_1$; the equality comes from concatenating relative paths with the corner displacement in an old unmarked face. In $S^-_vA_2A_1S^+_v$, pull $A_{\mathrm{bypass}}$ past $S^-_v$ only. Its mixed term is the bypass times $S^-_vA_1S^+_v$, hence the bypass. Its remaining term is $S^-_vA_1^2S^+_v\simeq U S^-_vS^+_v=0$. For the opposite cyclic order $S^-_vA_1A_2S^+_v$, pull the bypass past $S^+_v$ only and obtain the same result. Thus subdivision removal is valid up to chain homotopy in either order, without commuting two edge actions or asserting a strict square in an arbitrary birth-normalized basis. [given, F1, F3, algebra]

1.4 There is always a non-root terminal vertex until only the distinguished root path remains: remove that path from the finite tree and choose a terminal vertex of any nonempty remaining branch. Step 1.2 decreases the number of non-root edges; step 1.3 removes unnecessary subdivision vertices. At every stage the compatible packet data in the hypothesis provide exactly the exposed local operation, and comparisons pass the packet by their stipulated triangular transfers. Induction on the finite number of non-root edges therefore leaves the short-root word and old-factor comparison words. No ambient isotopy assertion for an embedded branched tree is used. [given, F3, F4, step 1.2, step 1.3, induction]

1.5 The last root word is $S^-_pA_{pq}S^+_q=\mathrm{id}$ by [F1]. Each remaining actual comparison sends the normalized tower unit to itself by hypothesis. Chain homotopic words induce equal homology maps, so the original chosen tree word sends $1$ to $1$, as asserted. [given, F1, step 1.4] ∎
