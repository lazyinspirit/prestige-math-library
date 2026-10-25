---
id: cor-alexander-polynomial-multiplies-under-connected-sum
kind: corollary
title: "The knot Alexander polynomial multiplies under connected sum"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-oriented-seifert-surface
  - thm-collar-neighborhood-theorem
  - def-smooth-collar-of-a-manifold-boundary
  - def-knot-connected-sum-and-prime-knot
  - lem-knot-connected-sum-well-defined
  - lem-the-extended-time-dependent-field-has-a-global-time-one-flow
  - thm-every-oriented-knot-bounds-a-seifert-surface
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - def-one-variable-alexander-module-of-an-oriented-link
  - thm-seifert-matrix-presents-knot-alexander-module
  - lem-seifert-matrix-s-equivalence-under-isotopy
  - def-alexander-polynomial-from-the-first-elementary-ideal
  - thm-the-alexander-polynomial-is-an-oriented-link-invariant
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - lem-square-seifert-presentation-and-alexander-normalization
  - cor-contractible-nonempty-spaces-have-the-homology-of-a-point
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "Chapter 8.E, printed p. 218; Chapter 8.C, printed pp. 206–211"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
      locator: "§6.2.3, Proposition 6.2.12(6), printed p. 46"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the full Axiom of Choice. Let $K,J\subset S^3$ be smooth oriented knots, and let $K\#J$ be their oriented connected sum for a connected-sum datum using the fixed gluing convention. Then

$$\Delta_{K\#J}(t)\doteq \Delta_K(t)\Delta_J(t),$$

where each $\Delta$ is the generator of the zeroth elementary ideal of the one-variable Alexander module and $\doteq$ means equality up to multiplication by a unit $\pm t^k$ of $\mathbb Z[t^{\pm1}]$. The statement is independent of the local connected-sum choices and of the Seifert surfaces and bases used to compute the polynomials.

## Statement references

[[def-knot-connected-sum-and-prime-knot|The oriented connected-sum construction and fixed gluing convention]]

[[lem-knot-connected-sum-well-defined|Independence of local connected-sum choices]]

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert matrix convention]]

[[thm-seifert-determinant-is-the-knot-alexander-polynomial|The Seifert determinant formula]]

[[def-alexander-polynomial-from-the-first-elementary-ideal|The polynomial and unit conventions]]

## Facts & Assumptions

**Given:** Full AC, two smooth oriented knots $K,J\subset S^3$, and a connected-sum datum as in the Definition.

[A1] Full AC is the choice-function axiom used by the Alexander-module and knot-surface conventions. ([[def-axiom-of-choice]])

[F1] The connected sum is formed by cutting each knot in a trivial-arc ball and gluing along the fixed orientation-matching boundary map. ([[def-knot-connected-sum-and-prime-knot]])

[F2] For sufficiently small coordinate balls, changing the balls, subarcs, positive local frames, or oriented knot representatives does not change the oriented ambient-isotopy class of the connected sum. ([[lem-knot-connected-sum-well-defined]])

[F3] Full AC implies DC and hence the Axiom of Countable Choice. ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]])

[F4] A Seifert surface is a connected compact smooth oriented embedded surface with the given knot as its oriented boundary; under AC$_\omega$, every smooth oriented knot bounds one. ([[def-oriented-seifert-surface]], [[thm-every-oriented-knot-bounds-a-seifert-surface]])

[F5] A connected compact knot surface has free fundamental group of rank $2g(F)$, and the first Hurewicz map identifies its first homology with the abelianization. Thus an ordered integral homology basis exists for each summand surface. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]], [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]])

[F6] The Seifert matrix uses $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ with the positive normal. ([[def-knot-seifert-pairing-and-matrix]])

[F7] The one-variable Alexander module is the positive-meridian module, $\Delta_K$ is its zeroth-elementary-ideal generator, and for each connected knot Seifert surface and basis the module is presented by $V-tV^T$, whose determinant generates that ideal up to a unit. ([[def-one-variable-alexander-module-of-an-oriented-link]], [[def-alexander-polynomial-from-the-first-elementary-ideal]], [[thm-seifert-matrix-presents-knot-alexander-module]], [[lem-square-seifert-presentation-and-alexander-normalization]], [[thm-seifert-determinant-is-the-knot-alexander-polynomial]])

[F8] Ambient isotopies preserve the Alexander polynomial up to a unit, and transported/basis-changed Seifert matrices have the stated congruence relation. ([[thm-the-alexander-polynomial-is-an-oriented-link-invariant]], [[lem-seifert-matrix-s-equivalence-under-isotopy]])

[F9] A standard closed 3-ball is contractible, so its first singular homology is that of a point and vanishes. The singular chain complex of a point has $\partial_1=0$ and $\partial_2=1$, hence $H_1(\ast;\mathbb Z)=0$. ([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]])

[F10] Under AC$_\omega$, every smooth manifold with boundary, including each summand Seifert surface, has a smooth collar of its boundary. ([[thm-collar-neighborhood-theorem]], [[def-smooth-collar-of-a-manifold-boundary]])

[F11] Under the supplier's AC$_\omega$ hypothesis, its finite-graph-spine argument constructs a finite graph spine whose thickening is each connected compact surface with nonempty boundary; full AC supplies AC$_\omega$ by [F3]. Thus $F$ and $G$ are thickenings of finite graphs. ([[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]], finite-graph-spine argument)

[F12] Under AC$_\omega$, a smooth time-dependent vector field whose supports lie in a fixed compact set has a unique global evolution by diffeomorphisms on a compact time interval. In particular this applies to a smooth vector field on $S^3$. ([[lem-the-extended-time-dependent-field-has-a-global-time-one-flow]])

## Proof

1.1 By [A1] and [F3], the AC$_\omega$ hypothesis of [F4] holds. Apply [F4] to choose connected Seifert surfaces $F$ for $K$ and $G$ for $J$. By [F5], choose ordered integral bases for $H_1(F;\mathbb Z)$ and $H_1(G;\mathbb Z)$. [A1, F3, F4, F5, given, choose]

2.1 Reduce each given trivial-arc ball to a small coordinate ball as follows. Write its oriented ball-arc parametrization as $e:D^3\to B$, with diameter on the first coordinate axis. On $B$ prescribe the inward field $X(e(x))=De_x(-x)$. Extend it smoothly to $S^3$, tangent to the whole knot: near each arc endpoint take coordinates $(s,u,v)$ with the knot $u=v=0$ and the ball boundary $s=0$. The two normal components on the ball side vanish on the axis, so each is $u a+v b$ with smooth coefficients, by integrating normal derivatives. Extend these coefficients and the tangential component across $s=0$; away from the endpoints extend across the sphere in ordinary boundary charts. A finite partition of unity patches these extensions, all agreeing with $X$ on $B$, and a cutoff makes the field zero away from a neighborhood of $B$ while preserving tangency to the knot. This is the tangent-field extension construction in the proof of [F2], now applied at the boundary of the given ball. By [F12] its flow $H_t$ exists for every fixed finite time interval; uniqueness gives $H_t(e(x))=e(e^{-t}x)$ for $x\in D^3$. The flow preserves the oriented knot setwise, and for large finite $T$ its image of $B$ is an arbitrarily small coordinate ball in the interior chart $e$. Transport the boundary parametrization as $H_t\circ e$ throughout. The fixed gluing map in these parametrizations is unchanged, so the flows identify the cut-and-glued pairs and their boundary collars throughout the isotopy, just as in the representative-transport argument in the proof of [F2]. Thus the original connected sum is ambient isotopic to one using small coordinate balls. [F1, F2, F3, F12, step 1.1, construct]

3.1 By step 2.1 and [F2], it suffices to use standard round coordinate balls whose trivial-arc neighborhoods lie in boundary collars of $F$ and $G$; such collars exist by [F10]. Their complementary pieces are standard closed 3-balls. Remove a small boundary half-disk from each surface and join the exposed boundary arcs by the standard band in the gluing collar. The resulting embedded oriented surface $S$ has boundary $K\#J$. By [F11], each summand surface is a thickening of a finite graph. Include a path from each attaching arc to its graph as a tree edge, then retract the band to its core interval. The two graphs are joined by one further bridge, so no cycle is added. Their old cycle bases therefore form a basis of $H_1(S;\mathbb Z)$. [F1, F2, F5, F10, F11, step 1.1, step 2.1, given, construct]

4.1 Use the union basis from step 3.1. Each basis cycle and its positive push-off can be kept in the interior of its own complementary 3-ball. By [F9], a cycle in one ball bounds an integral $2$-chain there; that chain is disjoint from every cycle in the other ball. Thus both cross-linking entries between the two summands are zero. The within-summand entries are unchanged, so the Seifert matrix of $S$ is $V_K\oplus V_J$. [F1, F6, F9, step 3.1, given, construct]

5.1 The determinant of the block matrix satisfies $\det\bigl((V_K\oplus V_J)-t(V_K\oplus V_J)^T\bigr)=\det(V_K-tV_K^T)\det(V_J-tV_J^T)$. Apply [F7] to $S,F,G$ to identify these three determinants with generators of their respective $E_0$ ideals, up to units. By step 2.1 and [F1], [F2], and [F8] this identity gives the formula for the specified connected sum and is unchanged by the datum, surface, basis, or representative choices. [F1, F2, F7, F8, step 2.1, step 4.1, algebra] ∎

## Diagram

This schematic shows the two summand surfaces in disjoint complementary 3-balls and the boundary band used to form $S$. The cycles $a_i$ and $b_j$ remain in separate balls; the proof uses the separating balls to make the cross-linking terms zero. The drawing records the construction and is not a proof premise.

~~~tikz
\begin{tikzpicture}[scale=0.9]
  \draw[fill=blue!8,thick,rounded corners] (-3,-1) rectangle (-0.5,1);
  \draw[fill=orange!10,thick,rounded corners] (0.5,-1) rectangle (3,1);
  \node at (-1.75,0.75) {$F$};
  \node at (1.75,0.75) {$G$};
  \draw[thick,blue] (-2.4,0) ellipse (0.55 and 0.35);
  \draw[thick,orange] (1.4,0) ellipse (0.55 and 0.35);
  \node[blue] at (-2.4,0) {$a_i$};
  \node[orange] at (1.4,0) {$b_j$};
  \draw[fill=gray!20,thick] (-0.5,-0.25) rectangle (0.5,0.25);
  \node at (0,0) {band};
  \node[below] at (-1.75,-1.2) {complementary 3-ball};
  \node[below] at (1.75,-1.2) {complementary 3-ball};
\end{tikzpicture}
~~~
