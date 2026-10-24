---
id: lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation
kind: lemma
title: "Algebraic cancellation does not yet give geometric cancellation"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 4
deps: [def-attaching-belt-intersection-matrix-of-adjacent-index-handles, lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix, def-oriented-intersection-number, def-mod-two-intersection-number, def-local-oriented-intersection-sign, def-oriented-smooth-manifold-and-oriented-chart, def-attaching-a-smooth-handle-with-corner-rounding, def-k-handle-core-cocore-attaching-region-and-belt-sphere, lem-standard-complementary-pair-fills-an-n-ball, def-transverse-embedded-submanifolds, def-transverse-complementary-dimensional-intersection-set, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow; scanned edition with text layer)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "§6, printed pp. 67-79 (intersection numbers of middle spheres and the need for the Whitney trick to remove opposite pairs)"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "§5.4, printed pp. 143-148 (homological bookkeeping versus geometric cancellation); §§5.5-5.6, printed pp. 149-158 (where the excess intersections are removed)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume $\mathrm{AC}_\omega$. The oriented intersection number does not determine the geometric intersection set: on the closed oriented $3$-manifold $N=S^2\times S^1$ there are an embedded $2$-sphere $A$ and an embedded circle $B$, meeting transversely, with exactly three intersection points whose local signs are $+1,+1,-1$, so that $I(A,B)=1$ while the geometric intersection has three points. Consequently a unit entry of an attaching-belt intersection matrix does not by itself exhibit a geometrically cancelling pair: the single-point hypothesis of the cancellation theorem is strictly stronger than a unit or an odd algebraic count, A general conversion from algebraic to geometric cancellation requires additional geometric input, such as the Whitney trick under its dimension and fundamental-group hypotheses. In this deliberately inserted finger configuration the extra pair can simply be undone by reversing the finger isotopy; no general Whitney-trick assertion is made. The configuration is realized with $A$ the attaching sphere of a $3$-handle and $B$ the belt sphere of a $2$-handle in the middle boundary of the standard $4$-dimensional model $D^4\cup h^2$.

## Facts & Assumptions

**Given:** The standard $4$-dimensional model $W=D^4\cup h^2$ in which a $2$-handle is attached to $D^4$ along the standard equatorial embedding, and in its outgoing boundary $N$ the belt sphere $B$ of $h^2$ and an embedded $2$-sphere $A$ obtained from a product sphere by a finger move across $B$.

[F1] [[def-attaching-a-smooth-handle-with-corner-rounding]] and [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]: for a $2$-handle in dimension $4$ the attaching region is $S^1\times D^2$, the outgoing region is $D^2\times S^1$ and the belt sphere is $\{0\}\times S^1$; attaching along the standard equatorial embedding is the handle attachment with corners rounded.

[F2] [[lem-standard-complementary-pair-fills-an-n-ball]]: for the standard equatorial embedding $\sigma$ one has $D^n\cup_\sigma(D^k\times D^{n-k})\cong S^k\times D^{n-k}$; with $n=4$ and $k=2$ this gives $D^4\cup h^2\cong S^2\times D^2$, whose boundary is $S^2\times S^1$ and whose belt sphere is $\{p\}\times S^1$.

[F3] [[def-transverse-embedded-submanifolds]], [[def-transverse-complementary-dimensional-intersection-set]] and [[def-local-oriented-intersection-sign]]: transversality is $T_qS_1+T_qS_2=T_qM$ at common points; complementary-dimensional transverse intersections are isolated; the local oriented sign of a transverse intersection of oriented submanifolds is $\pm1$, computed from the product orientation.

[F4] [[def-oriented-intersection-number]] and [[def-mod-two-intersection-number]]: the oriented number is the finite sum of local signs over the transverse intersection, and the mod-2 number is the cardinality of the intersection reduced modulo two.

[F5] [[def-attaching-belt-intersection-matrix-of-adjacent-index-handles]], [[lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix]] and [[def-countable-choice]]: assume $\mathrm{AC}_\omega$; the matrix entry is the oriented, respectively mod-2, intersection number of attaching and belt spheres, and a single transverse point gives a unit entry.

## Proof

**Proof technique:** direct.

1.1 In the model $W=D^4\cup h^2$ the outgoing boundary is the boundary of the manifold obtained by attaching the standard $2$-handle; by [F2] this manifold is $S^2\times D^2$, so $N\cong S^2\times S^1$ and the belt sphere of $h^2$ is $B=\{p\}\times S^1$ for a point $p\in S^2$. [F1, F2]

2.1 Let $A_0=S^2\times\{u_0\}\subseteq N$. Then $A_0$ meets $B$ transversely in the single point $(p,u_0)$, whose local sign is $+1$ for the product orientation of $S^2\times S^1$; the oriented and mod-2 intersection numbers of $A_0$ with $B$ are both $1$. [F3, F4, step 1.1]

3.1 Perform a finger move of $A_0$ across $B$: choose a small embedded disk $D\subseteq A_0$ disjoint from $(p,u_0)$ and replace $D$ by a thin finger disk along a short arc starting normally at $D$, with interior off $A_0$, and passing across a short segment of $B$, the finger is the lateral boundary and end cap of a thin tubular cylinder, joined to $\partial D$ and smoothed, producing an embedded $2$-sphere $A$ that agrees with $A_0$ outside a small neighbourhood of $D$ and crosses $B$ in two new transverse points. The two new intersections have opposite local signs, because $B$ enters and exits the finger cylinder through its two lateral walls; their induced outward normal directions are opposite, so the ordered tangent determinants have opposite signs; no other intersections are created or destroyed. [F3, step 2.1, given]

4.1 Hence $A\cap B$ consists of the original point, of sign $+1$, together with the finger pair of opposite signs; after orienting $A$ so that the original point keeps sign $+1$, the three local signs are $+1,+1,-1$ up to the order of the pair. By [F4] the oriented intersection number is $I(A,B)=1$ and the mod-2 number is $1$, while $A\cap B$ has three points. [F4, step 2.1, step 3.1]

5.1 The finger is an isotopy of the original sphere, so its product normal line framing is transported and gives an attaching embedding $A\times D^1\to N$. Reading the configuration as handle data, $A$ is the attaching sphere of a $3$-handle attached to $N$ and $B$ is the belt sphere of the $2$-handle $h^2$; by [F5] the attaching-belt matrix entry is $I(A,B)=1$, a unit, yet the spheres do not meet in exactly one point. The single-point hypothesis of the cancellation theorem is therefore strictly stronger than a unit or odd algebraic count, and the extra pair in this example can be removed by the inverse finger isotopy. The example proves the failure of the converse for the displayed configuration, not an obstruction to cancellation after further isotopy. [F5, step 4.1] ∎
