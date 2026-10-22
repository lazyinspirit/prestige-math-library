---
id: lem-conway-polynomial-from-seifert-determinant
kind: lemma
title: "Seifert determinant constructs the normalized Conway polynomial"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 14
deps:
  - def-seifert-s-equivalence-and-conway-normalization
  - def-link-seifert-pairing-and-matrix
  - def-seifert-surface-arc-surgery
  - lem-link-seifert-pairing-well-defined
  - lem-link-seifert-matrix-enlargement-under-arc-surgery
  - lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-regular-oriented-link-diagram
  - lem-every-oriented-link-admits-a-regular-projection
  - def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - thm-linking-number-equals-signed-intersection
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "W. B. Raymond Lickorish, An Introduction to Knot Theory, Graduate Texts in Mathematics 175, Springer (1997)"
      url: "https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf"
      locator: "Chapter 8, Theorems 8.5–8.6, printed pp. 82–83: determinant invariance and skein characterization. Lickorish uses the opposite sign for the formal skein variable; this item fixes $z=u-u^{-1}$ and proves the sign for its stated crossing convention."
---
## Statement

Assume full AC. Every nonempty smooth oriented link $L\subset S^3$ bounds a connected compact smooth oriented embedded surface. If $F$ is any such surface with Seifert matrix $V$, and $u$ is a formal Laurent variable, then
$$D_L(u)=\det(uV-u^{-1}V^T)$$
is independent of the surface and integral basis, belongs to $\mathbb Z[u-u^{-1}]$, equals $1$ for the unknot, and satisfies
$$D_{L_+}(u)-D_{L_-}(u)=(u-u^{-1})D_{L_0}(u)$$
for every oriented skein triple. Thus $D_L(u)=\nabla_L(u-u^{-1})$ for the unique Conway polynomial normalized by $\nabla_U=1$ and $\nabla_+-\nabla_-=z\nabla_0$.

## Statement references

[[def-seifert-s-equivalence-and-conway-normalization|The normalized Conway convention and Alexander substitution]]

[[def-link-seifert-pairing-and-matrix|The positive-push Seifert matrix for links]]

## Facts & Assumptions

**Given:** Full AC, a nonempty oriented link, the positive crossing convention, and a connected spanning surface with its Seifert matrix.

[A1] Full AC implies the countable-choice hypotheses for regular projection, Jordan disks, and the Seifert construction. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]

[F1] A regular oriented diagram has finitely many crossings; oriented smoothing yields finitely many disjoint circles, each bounding a disk in the projection sphere. [[def-regular-oriented-link-diagram]], [[lem-every-oriented-link-admits-a-regular-projection]], [[def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram]], [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[F2] The positive-push matrix is $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ on integral homology classes, with the pairing independent of representatives and push-off level. [[def-link-seifert-pairing-and-matrix]], [[lem-link-seifert-pairing-well-defined]]

[F3] One link-level embedded arc surgery changes the positive-push matrix by one of the two displayed two-row/two-column block enlargements. [[lem-link-seifert-matrix-enlargement-under-arc-surgery]]

[L1] The surface-surgery supplier states that same-boundary spanning surfaces are related by finitely many ambient isotopies and arc surgeries, but its proof has unresolved general-position and cut-and-paste steps. [[lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries]]

[A2] For the conditional determinant-invariance argument, assume every two connected spanning surfaces of the same oriented link are related by the finite sequence in [L1]. This is an unresolved interface, not an accepted result. [[lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries]]

[F4] The positive crossing is the right-handed half-twist in the declared diagram convention; linking is the half-sum of mixed crossing signs for a supplied regular diagram. [[def-oriented-crossing-sign-writhe-and-blackboard-framing]], [[thm-linking-number-equals-signed-intersection]], [[def-regular-oriented-link-diagram]], [[lem-every-oriented-link-admits-a-regular-projection]]

[F5] An embedded arc surgery replaces two disks by the lateral annulus of an embedded product cylinder and preserves the boundary link. [[def-seifert-surface-arc-surgery]]

## Proof

1.1 Choose a regular diagram by [F1]. Smooth every crossing in the orientation-compatible way. Cap each resulting Seifert circle by its disk on the side away from a chosen point at infinity; when disks are nested, place them at distinct nearby heights in nesting order. In disjoint crossing balls attach one half-twisted band for each original crossing, with twist and endpoint orientation chosen to reproduce the given over-under crossing. The disks are disjoint after the height separation, the bands lie in disjoint crossing balls, and their attaching intervals are pairwise disjoint. Hence their union is an embedded oriented surface, and at each crossing the band boundary restores the original two strands. If it has more than one connected component, each component has nonempty boundary, so its second cohomology vanishes by the compact-surface normal form. Alexander duality makes the complement of their union connected; as an open subset of a smooth three-manifold it is locally path-connected, hence path-connected. Choose points in the interiors of two distinct surface components and short transverse arcs from them into the complement. Join the exterior endpoints by a path in that complement, then perturb the resulting path relative to its endpoints to an embedded arc whose interior misses the surfaces. A small product neighbourhood of the arc performs the disk replacement in [F5], joining the components without changing $L$. Choose the tube framing that extends the two surface orientations. Repeating this finite operation leaves one connected surface with boundary $L$. [A1, F1, F5, given, construct]

2.1 Assume [A2]. An ambient isotopy preserves the positive normal and linking coefficient, so a transported basis has the same matrix; rechoosing basis gives $V\mapsto P^TVP$ with $P\in GL_m(\mathbb Z)$, multiplying the determinant by $(\det P)^2=1$. By [F3], a surgery replaces $V$ by one of the two displayed block forms, with old block $V$, new basis classes $b,c$, arbitrary column vectors $x,y$, and an integer $z$. For the first form, the matrix $uV'-u^{-1}V'^T$ has the old block $M=uV-u^{-1}V^T$ and new $2\times2$ diagonal block
$$D_0=\begin{pmatrix}z(u-u^{-1})&-u^{-1}\\u&0\end{pmatrix},$$
while its old-to-new block has second column zero. For the second form the corresponding block is
$$D_1=\begin{pmatrix}z(u-u^{-1})&u\\-u^{-1}&0\end{pmatrix},$$
again with zero second old-to-new column. Both blocks have determinant $1$ and their inverses have $(1,1)$ entry $0$. The Schur-complement formula therefore gives determinant $\det M$ for either enlargement; reductions reverse the equality. Thus the determinant is unchanged at every move in the conditional surface sequence [A2]. [A2, L1, F2, F3, step 1.1, algebra]

3.1 For a skein triple, first construct a connected surface $F_0$ for $L_0$ by step 1.1. Add to it the single local band that changes the smoothing into $L_+$ or $L_-$. Choose the old basis curves outside the crossing ball. The resulting two Seifert matrices have common upper-left block $V_0$ and common old-to-new entries, because the two bands agree outside that ball. Their last diagonal entries $N_+$ and $N_-$ differ by $1$: in the local band chart, the positive and negative half-twists switch one mixed crossing of the band core and its positive parallel from sign $-1$ to $+1$, so the half-sum in [F4] changes by $((+1)-(-1))/2=1$. In $uV-u^{-1}V^T$ only the final diagonal entry differs, by $(u-u^{-1})(N_+-N_-)=u-u^{-1}$. The determinant is linear in that entry, and its cofactor is precisely $\det(uV_0-u^{-1}V_0^T)$. Hence $D_{L_+}-D_{L_-}=(u-u^{-1})D_{L_0}$. [F2, F4, step 2.1, algebra]

4.1 For the unknot use a disk, whose matrix is empty and whose determinant is $1$. For an $r$-component unlink with $r>1$, add a Reidemeister-I curl to one component. The positive and negative curl choices are both isotopic to the same unlink, while the oriented smoothing is the $(r+1)$-component unlink. The skein relation gives $(u-u^{-1})D_{U_{r+1}}=0$, so $D_{U_{r+1}}=0$ because the Laurent polynomial ring is a domain; starting with $D_{U_1}=1$ establishes all unlink base values. Assume the conditional surface-independence interface [A2]. Fix a diagram with basepoints and an order of its components. A crossing is bad if its first encountered branch in the resulting ordered traversal is under. Induct on the pair (crossing count, number of bad crossings), ordered lexicographically. Switching a selected bad crossing lowers the second entry without changing the crossing count; smoothing lowers the first. Repeated switches turn the diagram into a descending diagram, which is an unlink: pull each component off in its traversal order, since its first branch at every crossing lies over the later branch. The skein relation and unlink values therefore express $D_L$ inductively as a polynomial in $z=u-u^{-1}$ with integer coefficients. The same induction shows uniqueness for any invariant satisfying the unknot value and skein relation, since the same curl argument forces every multi-component unlink value to be zero. For a descending diagram, cut each component at its basepoint and lift the first encountered arc above every later arc; component order puts earlier components above later ones. Remove the resulting disjoint descending arcs one at a time by isotopy, leaving disjoint simple circles, so the link is the unlink. This proves the determinant gives exactly the normalized Conway polynomial conditional on [A2]. [A2, step 1.1, step 2.1, step 3.1, induction, algebra] ∎

## Unresolved proof obligation

The determinant calculation for each isotopy and link-level arc surgery is established, but surface independence and the construction and uniqueness of a link invariant use [A2]. Its supplier [L1] remains unresolved: the available isotopy-extension statement has the wrong source/target dimensions for the required surface isotopy, and its maximal-translate and relative-neighbourhood steps have not been completely justified. The Conway conclusion remains escalated until these obligations are resolved.
