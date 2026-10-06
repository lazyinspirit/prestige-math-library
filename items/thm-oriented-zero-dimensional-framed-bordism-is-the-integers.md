---
id: thm-oriented-zero-dimensional-framed-bordism-is-the-integers
kind: theorem
title: Framed zero-dimensional bordism in an oriented manifold is the integers
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
deps:
- def-framing-sign-of-a-zero-dimensional-regular-preimage
- lem-oppositely-framed-points-are-framed-null-cobordant-in-pairs
- lem-equal-framing-sign-points-do-not-cancel-in-oriented-zero-bordism
- lem-components-of-the-frame-bundle-of-a-connected-manifold
- lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant
- def-framed-cobordism-of-embedded-submanifolds
- def-framing-of-a-normal-bundle
- lem-framed-cobordism-is-an-equivalence-relation
- def-connected-space
- def-path-connected
- thm-connected-and-locally-path-connected-implies-path-connected
- def-oriented-smooth-manifold-and-oriented-chart
- def-compact-space
- def-orientation-of-a-finite-dimensional-real-vector-space
- ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds
- def-smooth-manifold
- def-countable-choice
- lem-boundary-of-a-compact-one-manifold-has-even-cardinality
- lem-positively-oriented-bases-are-path-connected
- def-the-standard-smooth-step-function
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: Theorem 2.37(i) with Lemmas 2.44-2.46 and Exercise 2.49, printed pp.23-24
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, concluding Hopf discussion, 'the framed cobordism class of the 0-manifold is uniquely determined by this integer', printed p.50
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: Chapter 3, Section 6, degree as a complete invariant of framed 0-manifolds, printed pp.141-147
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a nonempty closed connected oriented smooth
$m$-manifold, $m\ge1$. Then the signed count
$\Phi(N,\varphi)=\sum_{x\in N}\varepsilon(x)$ is a bijection from the set of
framed cobordism classes of closed framed $0$-dimensional submanifolds of $M$
to $\mathbb Z$, it is additive under disjoint union, and $(N,\varphi)$ is
framed null-cobordant if and only if $\Phi(N,\varphi)=0$. Framed cobordism
classes of closed framed $0$-manifolds in $M$ therefore form a commutative
monoid isomorphic to $(\mathbb Z,+)$.


## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a nonempty closed connected oriented smooth $m$-manifold $M$, $m\ge1$.

[F1] The signed count is invariant under framed cobordism ([[lem-equal-framing-sign-points-do-not-cancel-in-oriented-zero-bordism]], [[def-framing-sign-of-a-zero-dimensional-regular-preimage]]).

[F2] Same-sign frames lie in one component of $B(M)$ and are joined by smooth paths; a frame path gives a graph cobordism with product ends ([[lem-components-of-the-frame-bundle-of-a-connected-manifold]], [[lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant]]).

[F3] An opposite-sign pair in a chart ball cancels by a framed cobordism supported there ([[lem-oppositely-framed-points-are-framed-null-cobordant-in-pairs]]).

[F4] Framed cobordisms have literal product ends and compose along them; finitely many cobordisms with disjoint images may be united, since their normal bundles and framings restrict to the pieces ([[def-framed-cobordism-of-embedded-submanifolds]], [[lem-framed-cobordism-is-an-equivalence-relation]], [[def-framing-of-a-normal-bundle]]).

[F5] A nonempty closed connected smooth $1$-manifold is a circle: the finite circle-and-interval classification has no interval component when its boundary is empty, and exactly one circle component by connectedness ([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]], [[def-connected-space]], [[def-compact-space]]).

[F6] Same-orientation frames are smoothly path-connected, and the standard smooth step function makes the paths constant near endpoints ([[lem-positively-oriented-bases-are-path-connected]], [[def-the-standard-smooth-step-function]]).

## Proof

1.1 The count descends to classes by [F1]. For any $k\in\mathbb Z$, a chart ball contains $|k|$ distinct points carrying frames of sign $\operatorname{sgn}(k)$; the empty set represents $0$. Their signed count is $k$. This proves surjectivity without choosing a preferred framing at every point of $M$. [F1, given, choose]

1.2 Suppose $m\ge2$. A Euclidean ball minus finitely many points is path-connected: for two allowed endpoints choose an intermediate point off the finitely many lines through an endpoint and a removed point; the two straight segments lie in the convex ball and avoid the removed points. Such an intermediate point exists because a finite union of lines has empty interior in dimension at least two (in a small ball choose a line direction distinct from the finitely many directions, then exclude its finitely many intersections). Consequently a frame path can be replaced by one avoiding any prescribed finite set $P\subset M$ disjoint from its endpoint base points: subdivide the original path into finitely many tangent trivializations, move its subdivision frames slightly off $P$ inside the chart overlaps, and join the new endpoints inside each punctured chart, keeping the frame coordinate in its original determinant component by [F6]. Small moves in the overlaps preserve that component. The finitely many local paths glue; smoothing with fixed endpoints as in [F2] on the open manifold $M\setminus P$ gives a smooth frame path avoiding $P$. Its graph cobordism is disjoint from every stationary cylinder $\{p\}\times I$, $p\in P$, and their union is therefore embedded by [F4]. [F2, F4, F6]

1.3 For $m=1$, identify $M$ with an oriented circle using [F5]. If both signs occur in a finite configuration, some cyclically adjacent pair has opposite signs. The arc between them with a small extension at either end is a chart interval containing no other occupied point. Apply [F3] inside that interval and adjoin the stationary cylinders of the other points, whose images are disjoint from its support. Repeat until only $|k|$ points of one sign remain. To compare two remaining configurations of $r=|k|>0$ points, choose cyclically increasing real lifts $a_1<\cdots<a_r<a_1+1$ and $b_1<\cdots<b_r<b_1+1$ in a period-one circle coordinate, matching the cyclic orders. The paths $a_i(t)=(1-t)a_i+tb_i$ remain distinct modulo one: successive gaps, including the final cyclic gap, are convex combinations of positive gaps. The oriented circle coordinate supplies a smooth nonzero tangent frame; choose the constant model frame of the required sign along each trajectory. At the fixed endpoints, adjust the prescribed frames to these models by [F6] on disjoint stationary cylinders. Flatten the parameter at the ends and use the quotient graph framing from [F2]. The resulting disjoint graphs and endpoint cylinders give a cobordism of the two configurations. For $r=0$ both reduced configurations are empty. [F2, F3, F4, F5, F6]

2.1 For $m\ge2$, fix a chart ball $U$ and distinct target points there avoiding $N$. Apply step 1.2 successively to move each framed point of $N$ to a target point of the same sign, taking $P$ to be the other currently occupied points. Thus every move extends to a cobordism of the entire configuration. Arrange each positive-negative pair at two points in its own small ball in $U$, disjoint from all the other points. By [F3] cancel these pairs one at a time, adjoining only stationary cylinders outside the supporting ball. The remaining configuration has $|k|$ points all of sign $\operatorname{sgn}(k)$, where $k=\Phi(N,\varphi)$. Two such configurations with the same $k$ can both be moved to the same distinct target points (chosen to avoid both initial finite sets), with the same chosen frames there, again using step 1.2. Thus their classes agree. [F2, F3, F4, step 1.2]

3.1 Steps 2.1 and 1.3 show that configurations with the same signed count are cobordant; [F1] gives the converse. Together with step 1.1 this proves the bijection and the null-cobordism criterion. Every two classes admit disjoint representatives by placing the required finite sets in separate small balls. Define their sum by the class of that union: its count is the sum of the two counts, so the bijection proves independence of the disjoint representatives. Associativity, commutativity and the empty unit follow from integer addition, giving the asserted monoid isomorphic to $(\mathbb Z,+)$. This uses no disjointness inference for arbitrary cobordisms. [F1, F4, step 1.1, step 2.1, step 1.3, algebra] ∎
