---
id: "lem-compatible-local-orientation-classes-exist-over-compact-subsets"
kind: "lemma"
title: "Compatible orientation classes over compact subsets"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-r-orientation-of-a-topological-manifold","def-relative-singular-homology","thm-excision-for-singular-homology","lem-relative-homology-mayer-vietoris-for-closed-supports","thm-long-exact-sequence-of-a-pair-in-singular-homology","cor-homotopic-maps-induce-the-same-map-on-singular-homology","thm-heine-borel-rn","thm-compact-subset-of-a-hausdorff-space-is-closed","thm-path-connected-implies-connected","def-connected-component-and-quasicomponent","thm-local-homology-detects-interior-points-boundary-points-and-dimension"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Lemma 3.27, pp.236–238
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    - title: Miller, Lectures on Algebraic Topology, Lecture 32
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $M$ be a boundaryless $n$-manifold, $R$ a commutative unital ring, and $K\subseteq M$ compact. Then $H_i(M,M\setminus K;R)=0$ for $i>n$, and restriction from $H_n(M,M\setminus K;R)$ to all local stalks at points of $K$ is injective. Every continuous section $s$ of the local $R$-homology system on $M$ is realized by a unique class $s_K$ in this relative group.

In particular an $R$-orientation determines a unique $[M]_K$ restricting to its generator at each point of $K$. These classes commute with restriction for compact-set inclusions and split over the finitely many components meeting $K$. No AC is needed.

## Facts & Assumptions

[F1] [[def-r-orientation-of-a-topological-manifold]] constructs the local $R$-system with ball restriction trivializations; orientations are its generator sections.

[F2] [[def-relative-singular-homology]] describes a relative class by a finite chain whose boundary lies in the omitted subspace.

[F3] [[thm-excision-for-singular-homology]] identifies support-relative groups with their coordinate-neighborhood versions.

[F4] [[lem-relative-homology-mayer-vietoris-for-closed-supports]] supplies the exact sequence with diagonal restriction and difference on overlaps.

[F5] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] and [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]] compute relative homology through the explicit radial contractions below.

[F6] [[thm-heine-borel-rn]] gives compactness and boundedness of closed Euclidean balls, compact sets and simplices. [[thm-compact-subset-of-a-hausdorff-space-is-closed]] gives closedness of their compact images in $M$.

[F7] [[thm-path-connected-implies-connected]] makes convex coordinate balls connected.

[F8] [[def-connected-component-and-quasicomponent]] makes the component through a point its largest connected subset.

[F9] [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]] gives the point-local groups in every degree.

## Proof

**Given:** $M,n,R,K$ and, for the existence assertion, a supplied continuous section $s$ on $M$. Write $H_i(M\Vert A)=H_i(M,M\setminus A;R)$. For a compact support $A$, let $P(A)$ consist of the three assertions: vanishing in degrees above $n$, injectivity of restriction in degree $n$ to all its point stalks, and realization of every supplied section.

1.1 Suppose $P(A)$, $P(B)$ and $P(A\cap B)$ hold. In [F4]'s exact sequence, $H_{n+1}(M\Vert A\cap B)=0$ makes the diagonal map from $H_n(M\Vert A\cup B)$ injective. If a class restricts to zero at all points of $A\cup B$, its two images vanish by pointwise injectivity for $A,B$, so it is zero. The classes $s_A,s_B$ have equal restrictions to $A\cap B$, because their point values there coincide and restriction on that intersection is injective. Thus $(s_A,s_B)$ lies in the kernel of the difference map and lifts to $s_{A\cup B}$; its point restrictions are the required ones. For $i>n$, the terms $H_{i+1}(M\Vert A\cap B)$ and $H_i(M\Vert A)\oplus H_i(M\Vert B)$ are zero, so exactness also gives $H_i(M\Vert A\cup B)=0$. This proves $P(A\cup B)$. [F4, given]

1.2 Let $A$ be a nonempty compact convex subset in a coordinate neighborhood identified with all of $\mathbb R^n$, first with $n\ge1$, and fix $x\in A$. Choose $L>\sup_{a\in A}\lVert a-x\rVert$, which is finite by compactness. The radial homotopy about $x$ taking radius $\lVert y-x\rVert$ linearly to $L$ retracts both $\mathbb R^n\setminus A$ and $\mathbb R^n\setminus\{x\}$ to $S_L(x)$. To check the first assertion, if the initial radius is at most $L$, all movement is outward: if an outward multiple of $y-x$ met $A$, convexity with $x\in A$ would force $y\in A$, a contradiction. If the initial radius exceeds $L$, every intermediate radius is at least $L$ and is outside $A$. The same positive-radius formula works for the punctured space. The inclusion of complements therefore induces homology isomorphisms. The natural pair sequences [F5], together with the point-local calculation [F9], give isomorphisms $H_i(M\Vert A)\to H_i(M\Vert\{x\})$ for every $i$, by excision [F3]. They prove vanishing above $n$ and pointwise injectivity. [F1, F3, F5, F6, F9, given]

2.1 To realize a section over such an $A$, take a closed coordinate ball $D$ with $A\subset\operatorname{int}D$. Its ball trivialization from [F1] identifies $s$ over the connected open ball $\operatorname{int}D$ with a continuous function into a discrete module. Such a function is constant: any nonempty fiber and its nonempty complement would be a separation into open sets. The ball is connected by [F7]. The constant coordinate is a class in $H_n(M\Vert D)$, whose restriction to $A$ realizes $s$. For $n=0$, a nonempty compact convex coordinate support is a singleton and the ball comparison is the identity on $R$. The empty support has zero relative complex and satisfies all three assertions. Hence $P(A)$ holds for every compact convex coordinate support. A coordinate ball may always be identified with all of $\mathbb R^n$: in centered radius-$r$ coordinates, $y\mapsto y/(r-\lVert y\rVert)$ has continuous inverse $z\mapsto rz/(1+\lVert z\rVert)$. [F1, F2, F7, step 1.2]

3.1 Property $P$ holds for every finite union of compact convex subsets in one coordinate $\mathbb R^n$. Induct on their number. To adjoin the last set, its intersection with the preceding union is a union of fewer compact convex sets, since each pairwise intersection is compact and convex, possibly empty. Apply the induction hypothesis to that intersection and preceding union, then step 1.1. This proves the induction without assuming intersections are balls. [step 1.1, step 2.1]

4.1 Let $A$ now be any compact subset of one such coordinate $\mathbb R^n$, and let $\alpha\in H_i(M\Vert A)$, $i\ge n$. By excision and [F2], represent it by a finite chain $z$ in the coordinate space with $\partial z$ supported outside $A$. Let $C$ be the union of the images of the finitely many simplex maps occurring with nonzero coefficient in $\partial z$. It is compact: a simplex is closed and bounded, hence compact by [F6], its continuous image is compact by pulling back covers, and finitely many compact images have compact union by taking finitely many finite subcovers. Thus $C$ is closed and disjoint from $A$. Take all closed balls centered at points of $A$ and small enough to miss $C$. Their interiors cover $A$; compactness gives finitely many with union $D$ containing $A$. Every chosen center belongs to $A$. Now $z$ represents $\alpha_D\in H_i(M\Vert D)$ restricting to $\alpha$. If $i>n$, step 3.1 gives $\alpha_D=0$, hence $\alpha=0$. [F2, F3, F6, step 3.1]

5.1 If $i=n$ and $\alpha$ vanishes at every point of $A$, the image of $\alpha_D$ in the group supported on each ball of step 4.1 has zero restriction at its center in $A$. The convex-support isomorphism of step 1.2 makes that ball-supported class zero. Hence $\alpha_D$ vanishes at every point of each ball, and therefore at every point of $D$. Pointwise injectivity from step 3.1 gives $\alpha_D=0$, and so $\alpha=0$. This proves injectivity for arbitrary compact coordinate supports. Existence for these supports is the same restriction from a large ball as in step 2.1: compactness puts $A$ inside that ball and the section has constant coordinate on its interior. Thus $P(A)$ holds for every compact coordinate support. When $A$ is empty, no balls are needed and the relative group is already zero. [F1, F2, F6, step 1.2, step 2.1, step 3.1, step 4.1]

6.1 For a general compact $K\subset M$, consider all chart balls whose closures lie inside a larger chart ball. Their interiors cover $K$. These closures are compact by [F6] and continuous-image compactness, and are closed in $M$. Choose a finite subcover and put $K_j=K\cap\overline B_j$. These are compact, their union is $K$, and each lies in a chart homeomorphic to $\mathbb R^n$. Induct on the number of pieces. The intersection of the last piece with the preceding union is the union of fewer compact chart pieces $K_j\cap K_m$. Property $P$ for a single piece is step 5.1; the same induction and step 1.1 therefore prove $P(K)$. Only finite covers and finite selections have been used. [F6, step 1.1, step 2.1, step 5.1]

7.1 Apply realization to the orientation section from [F1] to define $[M]_K$. Its uniqueness is the pointwise injectivity just proved. If $K\subset L$ are compact, the restriction of $[M]_L$ to $K$ has the same point values, hence equals $[M]_K$. Components of $M$ are open: each point has a connected coordinate-ball neighborhood by [F7], and that neighborhood lies in its component by [F8]. Thus their cover of $K$ has a finite subcover; disjointness shows these are all the components meeting $K$. Each such component is also closed, since its complement is a union of the other open components. Thus its intersection with $K$ is compact. Repeatedly applying [F4] to these disjoint supports, whose intersections have zero relative groups, gives the direct-sum decomposition and sends $[M]_K$ to the individual orientation classes. For $R=0$ all groups and sections are zero, and for empty $K$ the result is the unique zero class. All component arguments used only this local connectedness, and no AC or nondegenerate-simplex convention was used. [F1, F4, F7, F8, step 6.1] ∎
