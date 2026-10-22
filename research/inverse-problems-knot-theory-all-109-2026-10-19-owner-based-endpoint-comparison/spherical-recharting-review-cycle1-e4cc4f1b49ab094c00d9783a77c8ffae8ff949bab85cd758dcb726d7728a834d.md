---
id: lem-pointed-spherical-recharting-preserves-odd-barnatan-complexes
kind: lemma
title: "Pointed spherical recharting preserves the integral odd and Bar–Natan complexes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-odd-khovanov-barnatan-and-leo-triple
  - lem-odd-cube-oriented-face-parity-and-sign-existence
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsváth, Rasmussen and Szabó, Odd Khovanov homology"
      url: https://arxiv.org/pdf/0710.4300
      locator: "Figure 2, Definition 1.1 and Lemmas 2.2–2.3; the spherical zero-face and marked comparison calculations are supplied below"
---

## Statement

Let a finite oriented based regular diagram, with its ordered crossing disks and crossing arrows, lie on an oriented two-sphere. Choose any two orientation-preserving planar coordinate presentations whose omitted points miss the diagram and all crossing disks. Transport the diagram, crossing arrows, over/under information and mark by these coordinates; keep the same crossing order. Circle relabelling gives grading-preserving marked-module chain isomorphisms between their integral odd complexes with transported full admissible edge signs, and between their integral Bar–Natan complexes. In particular the full odd face prescription, including zero-composite faces, is unchanged by the choice of omitted point.

For independently chosen edge assignments satisfying that full prescription, compose the odd relabelling with vertexwise signs. The resulting odd and Bar–Natan isomorphisms have inverse maps, are respectively right linear over $\mathbb A=\mathbb Z[X]/(X^2)$ and $\mathbb R=\mathbb Z[h,X]/(X^2-hX)$, and give a strictly commuting square under the statewise reductions modulo $2$ and $(2,h)$. Their inverses give the inverse square. They therefore give local maps in both directions; the Bar–Natan maps are already chain isomorphisms before localization. The construction is finite and requires no choice axiom. This assertion concerns recharting the same spherical diagram, not transporting a mark through a crossing of a fixed planar diagram.

## Statement references

[[def-odd-khovanov-barnatan-and-leo-triple|State modules, saddles, marked action and comparison]]

[[lem-odd-cube-oriented-face-parity-and-sign-existence|Full face prescription and vertexwise sign comparison]]

## Facts & Assumptions

**Given:** The finite based spherical diagram and its two coordinate presentations as in the Statement.

[F1] Odd state modules, merge quotients, split difference maps, gradings and right marked action are those of [[def-odd-khovanov-barnatan-and-leo-triple]]. The Bar–Natan operations are its displayed commutative Frobenius algebra operations.

[F2] [[lem-odd-cube-oriented-face-parity-and-sign-existence]] supplies the full face prescription, existence of assignments with those face products, and vertexwise sign comparison for any two such assignments. Its zero faces consist of two directed surgery arcs with alternating endpoints on one circle, one on each side; its standard inside-up, outside-left/right test defines the coefficient $\kappa$.

## Proof

**Given:** The hypotheses of the Statement. All surgery arcs and their tail/head labels are transported geometrically. An orientation of a resolution circle induced as the boundary of its bounded planar disk will be used only for the zero-face calculation; it is not an extra orientation on the knot or an extra algebraic choice.

1.1 **The zero-face cyclic-order test.** Name the inside arc $a$ and the outside arc $b$, and write their directed endpoints as $a_-,a_+,b_-,b_+$. Give their common circle the positive boundary orientation of its bounded disk. The endpoints alternate. There are exactly two possible cyclic words, starting at $a_-$: $W_+=(a_-,b_-,a_+,b_+)$ and $W_-=(a_-,b_+,a_+,b_-)$. Each is unchanged as a cyclic word by rotating its starting point. In the standard two-chord picture of [F2], reversing just the outside arrow exchanges those words and exchanges the values of $\kappa$. Thus that fixed standard convention identifies the two words with the two values of $\kappa$ in one fixed order. Equivalently, if $\chi(W_+)=1$ and $\chi(W_-)=-1$, there is one fixed calibration sign $c\in\{1,-1\}$ with $\kappa=c\chi$ in every zero face. No value of $c$ needs to be chosen or altered in a recharting: it is fixed by the already stipulated standard picture. This cyclic-order description follows from that picture by its orientation-preserving planar normalization; such a normalization preserves the boundary orientation and all four endpoint labels. It also shows that the test uses the relative directions of the two arcs rather than their Euclidean tangent at an arbitrarily chosen point. [F2, given, construct]

2.1 **Changing the omitted point.** Consider the same zero-face circle on the oriented sphere. Its two complementary sides contain its two surgery arcs. If the two omitted points are on the same side, both planar boundary orientations agree and both presentations call the same arc inside. Their cyclic word and $\kappa$ agree by step 1.1. If the omitted points are on opposite sides, the inside/outside names are exchanged and the positive bounded-side boundary orientation is reversed: the boundary orientations of the two sides of an oriented surface are opposite. Both changes are necessary. For example, an old word $W_+=(a_-,b_-,a_+,b_+)$, read in the reverse orientation starting at $b_-$, is $(b_-,a_-,b_+,a_+)$, which is the new word $W_+$ when $b$ is the new inside arc and $a$ the new outside arc. An old word $W_-=(a_-,b_+,a_+,b_-)$ becomes $(b_-,a_+,b_+,a_-)$, which is the new word $W_-$. Hence $\chi$, and therefore $\kappa$, is unchanged in this case too. This is the full two-case calculation; exchanging only the names without reversing the boundary orientation would give an incorrect sign. The same argument applies to an arbitrary orientation-preserving spherical change of coordinates by transporting the circle and its two sides first. [step 1.1, given, construct]

3.1 **Naturality of every unsigned saddle.** At state $v$ let $P_v$ send each circle generator to that same spherical circle in the other chart. It is a bijection of bases. For a merge quotient $q$, both $P_{v+e}q$ and $q'P_v$ send the two merging generators to the same merged generator and fix every spectator. Thus their exterior extensions agree. For a split, transport the arrow and its ordered output circles. Then $P_{v+e}$ carries the difference $C_1-C_2$ to $C'_1-C'_2$. Choose the transported lift $j'$ of the split input. On every wedge $z$ one has $\Lambda P_{v+e}((C_1-C_2)\wedge\Lambda j(z))=(C'_1-C'_2)\wedge\Lambda j'(\Lambda P_v(z))$. The alternative lift gives the same expression by [F1]. Circle order changes are absorbed by the exterior relabelling, including their actual wedge signs. Thus the two unsigned composites on every face are conjugate by invertible relabellings. On a nonzero face their relative commutation sign $\kappa$ is consequently unchanged. On a zero face it is unchanged by step 2.1. All face products prescribed by [F2] therefore agree in the two charts. [F1, F2, step 2.1, algebra]

4.1 **Odd chain isomorphisms and their actual inverse.** Choose a full admissible assignment in the first chart using [F2] and give each corresponding edge of the second chart the same sign. By step 3.1 these are full admissible signs in the second chart, and $P_o=\bigoplus_v\Lambda P_v$ intertwines their signed differentials. Its inverse is $\bigoplus_v\Lambda(P_v^{-1})$, so both composites are exactly the identity; the chain homotopies for an inverse are zero. If the second chart instead has independently chosen full admissible signs, divide those signs by the transported signs. The quotient has product one on every face, including the zero faces. Fix the lowest vertex sign to be one and assign each other vertex the product of the edge quotients along a monotone path. The square equations make this independent of the path, since adjacent coordinate exchanges connect all monotone paths. Multiplication by the resulting scalar at each vertex conjugates the transported differential to the chosen one. Compose this diagonal map with $P_o$. Its inverse is the inverse relabelling followed by the same scalar signs in the inverse order. This proves the asserted isomorphism for the independently chosen assignments, without claiming independence for arbitrary weak square-compatible assignments. [F2, step 3.1, algebra, construct]

5.1 **Marked linearity and gradings.** Relabelling carries the marked generator $Z_p$ to the marked generator $Z'_p$. Hence $P_o(z\wedge Z_p)=P_o(z)\wedge Z'_p$. Vertexwise scalar signs commute with this right action too. Both the odd map and its inverse are thus $\mathbb A$-linear. An orientation-preserving surface chart preserves the signed crossing, its designated 0/1 smoothing and its over/under information. It consequently preserves $n_+,n_-,|v|,k(v)$; relabelling preserves exterior degree. The formula in [F1] then proves preservation of both normalized gradings. Vertexwise signs have degree zero. There is no semilinear substitution $X\mapsto-X$ in these maps. [F1, step 4.1, algebra]

6.1 **The integral Bar–Natan map.** On each state relabel the tensor factors by their spherical circles and keep the labels $1,X$ and the coefficient $h$ unchanged. Commutativity of multiplication and cocommutativity of comultiplication make this independent of a tensor-factor ordering. For a merge, split, birth or death the relabelling intertwines the operations because their input and output circles and all coefficients in the formulas of [F1] agree. In particular it intertwines every cube edge. The crossing order has been kept, so the ordinary cube edge signs agree as well. This yields a chain isomorphism $P_h$ with inverse the inverse tensor-factor relabelling. It takes multiplication by the marked $X$ to multiplication by the target marked $X$, and fixes $h$, so is $\mathbb R$-linear. The grading check is the same state-shift calculation as in step 5.1, with unchanged circle labels. Both inverse composites are identities with zero homotopies. [F1, step 5.1, algebra]

7.1 **The common reduction and the local maps.** Modulo two all vertex signs and exterior reorder signs are one. The reduced odd map sends a selected subset of circles to exactly the same spherical subset in the other chart. After setting $(2,h)=0$, the Bar–Natan map sends the tensor state with those $X$-labels to that same subset. Under the comparison of [F1] these maps are identical on every basis state, including its marked action. Thus $P_h f=f'P_o$ holds exactly after the specified quotients, not merely up to homotopy. The inverse maps satisfy the same calculation. Since $P_h$ is already an integral marked-module chain isomorphism, localizing at $h$ retains its explicit inverse and zero homotopies. This gives local maps in both directions with the full asserted degrees and module structures. The only sign assignment and comparison constructions used finite cube paths and finite multiplications, so require no choice axiom. [F1, step 4.1, step 5.1, step 6.1, algebra, construct] ∎
