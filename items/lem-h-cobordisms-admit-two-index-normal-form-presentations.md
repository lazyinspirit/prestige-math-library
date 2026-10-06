---
id: lem-h-cobordisms-admit-two-index-normal-form-presentations
kind: lemma
title: h-cobordisms admit two-index normal form presentations
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 14
deps: ["def-h-cobordism", "prop-h-cobordisms-admit-adapted-ordered-handle-decompositions", "prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles", "lem-handle-elimination-by-trading-a-pair", "lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring", "def-based-handle-chain-complex-over-the-fundamental-group-ring", "lem-group-ring-modification-lemma-for-embedded-spheres", "lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy", "thm-handle-duality-from-negating-a-morse-function", "def-dual-handle-decomposition", "thm-handle-cancellation", "thm-whitney-trick-in-the-two-dimensional-borderline-case", "lem-metastable-embedding-for-maps-from-a-compact-manifold", "lem-a-sphere-with-a-product-neighbourhood-can-be-moved-off-a-lower-dimensional-submanifold", "lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type", "def-k-handle-core-cocore-attaching-region-and-belt-sphere", "def-countable-choice", "lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group", "thm-morse-functions-and-handle-decompositions-correspond", "thm-morse-rearrangement-by-index"]
provenance:
  statement: ai-altered
  proof: ai-altered
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete
      author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1 §1.3, Lemma 1.21 and Normal Form Lemma 1.24 with their proofs, printed pp. 12--18
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)
    url: https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf
    locator: "Propositions 8.31 and 8.32, printed pp. 183--184; PDF pages 191, 192"
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a nonempty connected oriented compact
smooth h-cobordism of dimension $n+1\ge6$, with $M_0$ and $M_1$ closed
connected oriented $n$-manifolds. Then for every integer $q$ with
$2\le q\le n-2$ there is a handle decomposition of $W$ relative to $M_0$ all of
whose handles have index $q$ or $q+1$; equivalently, $W$ is diffeomorphic
relative to $M_0$ to $\partial_0W\times[0,1]$ with finitely many $q$-handles and
$(q+1)$-handles attached. In such a presentation the relative chain complex is
concentrated in degrees $q,q+1$, the numbers of $q$-handles and $(q+1)$-handles
are equal, and the group-ring differential matrix, with lower handles as rows and upper handles as columns, is invertible; the passing between
presentations is by the elementary modifications of the previous lemma. No
simple connectivity of $M_0$ is assumed.

## Facts & Assumptions

**Given:** A nonempty connected oriented compact smooth h-cobordism $(W;M_0,M_1)$ of dimension $n+1\ge6$ with closed connected oriented boundary manifolds, and an integer $q$ with $2\le q\le n-2$.

[F1] Any given finite presentation is realized by an adapted excellent Morse function. The constructive index-rearrangement proof changes attaching data by level isotopies and interchanges adjacent handles after making their crossing spheres disjoint; these are attaching isotopies and commutations of disjoint attachments. Zero-handles are then removed by the spanning-tree procedure, each absorbed disk and its tree $1$-handle being a geometrically cancelling pair. Thus one obtains an index-ordered presentation with no $0$-handles using the allowed moves; its inclusions are homotopy equivalences, so $\pi_1(M_0)\to\pi_1(W)$ is an isomorphism, the outgoing boundary after the low handles is highly connected relative to $W$, and a null-homotopy of a loop in a high-dimensional outgoing boundary can be chosen embedded ([[thm-morse-functions-and-handle-decompositions-correspond]], [[thm-morse-rearrangement-by-index]], [[prop-h-cobordisms-admit-adapted-ordered-handle-decompositions]], [[prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles]], [[def-h-cobordism]], [[lem-metastable-embedding-for-maps-from-a-compact-manifold]], [[lem-a-sphere-with-a-product-neighbourhood-can-be-moved-off-a-lower-dimensional-submanifold]], [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]).

[F2] Elimination Lemma: if a presentation has all indices at least $q\ge1$ and a framed sphere in the outgoing boundary after the $q$-handles meets the belt sphere of a $q$-handle once and the others not at all, and is isotopic one level higher to a trivial embedding, then the handle can be deleted at the cost of one $(q+2)$-handle, preserving the diffeomorphism type relative to $\partial_0W$ ([[lem-handle-elimination-by-trading-a-pair]], [[lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type]]).

[F3] Tools for producing the framed sphere of [F2] out of a prescribed class: the Modification Lemma adds an arbitrary group-ring combination of the classes $d_{r+1}[\varphi_j]$ to the class of an embedded sphere by an isotopy that is trivial one level higher, and the group-labelled homology lemma isotopes an embedded sphere whose class is $[\varphi]\cdot(\pm\gamma)$ so that it meets the belt sphere of $\varphi$ once and all other belt spheres not at all; the two-dimensional case $r=2$ uses the belt-complement injection supplied by the h-cobordism incoming fundamental-group isomorphism ([[lem-group-ring-modification-lemma-for-embedded-spheres]], [[lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy]], [[thm-whitney-trick-in-the-two-dimensional-borderline-case]]).

[F4] The based handle complex of the presentation is contractible, and the dual decomposition relative to $M_1$ has complementary indices and interchanged attaching and belt spheres; the low-index elimination run in the dual removes the high-index handles of the original ([[lem-h-cobordism-handle-complex-is-contractible-over-the-group-ring]], [[def-based-handle-chain-complex-over-the-fundamental-group-ring]], [[thm-handle-duality-from-negating-a-morse-function]], [[def-dual-handle-decomposition]]).

[F5] In a presentation with handles only in two adjacent degrees $q,q+1$, the relative chain complex is the two-term complex with differential the intersection matrix, and for a contractible complex of finitely generated free modules the differential is an isomorphism, so the two handle numbers agree and the intersection matrix is invertible ([[def-based-handle-chain-complex-over-the-fundamental-group-ring]]).

[F6] In an h-cobordism low-handle level, deleting its actual belt spheres gives a complement whose fundamental group maps isomorphically to the level. In particular this supplies the $r=2$ Whitney-complement condition in both orientations of the h-cobordism. [[lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group]]

## Proof

1.1 Start from any given finite presentation. By the constructive rearrangement and zero-handle procedure of [F1], put it into adapted index order with no $0$-handles, using attaching isotopies, disjoint commutations and geometric $0/1$ cancellations. The incoming inclusion is a homotopy equivalence. For each $1$-handle form the circle from a parallel half-core and a joining arc in the incoming boundary with its attaching balls removed. Choose the relative path class of this arc using the surjection $\pi_1(M_0)\to\pi_1(W)$ so that it cancels the loop class of the half-core and a reference joining arc; relative one-dimensional general position gives an embedded representative avoiding the other attaching balls. Shrink the existing $2$-handle attaching tubes and perturb the circle away from their core circles, using $1+1<n$, so it lies in the common part of the levels before and after the $2$-handles. Its loop is therefore null in $W$ and hence in the level after the $2$-handles, since later handles have index at least three and the reverse trace to that level has index at least three. Choose an embedded nullhomotopy disk in that level, possible because $n\ge5$, and use its normal frame to make the circle a framed embedding trivial one level higher. It meets the selected $1$-handle belt once and avoids the other belts. [F2] trades that handle for a $3$-handle. After finitely many steps all indices are at least two. [F1, F2]

2.1 For $r=2,\ldots,q-1$, assume all indices are at least $r$ and fix an $r$-handle $e$. Contractibility of the based handle complex and $C_{r-1}=0$ give coefficients $x_j$ with $\sum_jd_{r+1}[\varphi_j]\cdot x_j=[e]$. Start with a trivial framed $r$-sphere $\alpha$ in the outgoing level after the $r$-handles; its class is zero. The modification construction gives a sphere $\beta$ with class $[e]$ isotopic to $\alpha$ one level higher. It supplies a framing by transporting the trivial normal frame along that higher-level isotopy; $\beta$ lies in the unchanged open part common to the two levels. Since $r\le q-1\le n-3$, the corrected homology lemma applies. For $r=2$, [F6] supplies its incoming fundamental-group injection, because the presentation still represents the same h-cobordism. It puts $\beta$ into single-point position. Carry the higher attaching data along that ambient isotopy, preserving its one-level-higher triviality and framing. The elimination lemma trades $e$ for an $(r+2)$-handle. Repeating deletes every handle of index below $q$. [F2, F3, F4, F6, step 1.1]

3.1 Reverse the triad. An original handle of index $k$ becomes a dual handle of index $n+1-k$. Remove dual $0$- and $1$-handles by the same low-index argument, then eliminate dual indices $r=2,\ldots,n-q-1$. This upper bound is at most $n-3$, so only the already proved homology range and its $r=2$ h-cobordism complement condition are used. Trading such a dual $r$-handle creates a dual $(r+2)$-handle, which is an original handle of index $n-r-1\ge q$; the dual $1$-handle trade creates original index $n-2\ge q$. Thus this phase removes all original indices at least $q+2$ without reintroducing any original index below $q$. The remaining indices are exactly $q,q+1$, for every $2\le q\le n-2$. No arbitrary-sphere flipped endpoint is invoked. [F3, F4, F6, step 2.1]

4.1 The remaining based handle complex is concentrated in degrees $q,q+1$ and contractible. Its only differential, the intersection matrix, is therefore an isomorphism; its two free modules have equal rank and the two handle numbers agree, because tensoring this isomorphism with $\mathbb Z$ along the augmentation gives an isomorphism of finite free abelian groups. All changes preserve the relative diffeomorphism type and are the indicated elementary presentation modifications. This proves the full stated normal form without simple connectivity. [F4, F5, step 3.1] ∎
