---
id: cex-adjacent-index-handles-with-zero-intersection-do-not-cancel
kind: counterexample
title: "Adjacent-index handles with zero intersection do not cancel"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps: [def-geometric-cancelling-handle-pair, thm-handle-cancellation, def-attaching-belt-intersection-matrix-of-adjacent-index-handles, lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix, def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-attaching-a-smooth-handle-with-corner-rounding, cor-one-critical-point-cell-attachment-homotopy-type, def-countable-choice, thm-seifert-van-kampen]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes; complete author PDF)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Cancellation Lemma 1.12 and its Euler-characteristic remark, Ch. 1 §1.1, printed pp. 6-7 (the one-point hypothesis is sufficient for geometric cancellation)"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "§5.4, printed pp. 143-148 (complementary pair versus merely homologically trivial pair)"
verification:
  precheck: pass
---

## Statement refuted

Assume $\mathrm{AC}_\omega$. In dimension $n=3$ start from $W_0=D^3$, attach the standard $1$-handle $h^1$ along two disks of $\partial D^3$, so that $W_1=D^3\cup h^1\cong S^1\times D^2$ is a solid torus, and attach a $2$-handle $h^2$ along an embedded circle $\gamma\subset\partial W_1$ that bounds a closed disk in $\partial W_1$ disjoint from the belt sphere $S^1$ of $h^1$; such a circle is disjoint from the belt sphere, so the matrix entry is $0$ over both $\mathbb Z$ and $\mathbb Z_2$. Then the pair $(h^1,h^2)$ is not geometrically cancelling and does not cancel: $W_1\cup h^2$ has fundamental group $\mathbb Z$, because the attaching circle is null-homotopic in the solid torus and the relation it adds is trivial, while $W_0=D^3$ is simply connected. Hence no diffeomorphism relative to the lower stage removes the pair.

## Facts & Assumptions

**Given:** In dimension $n=3$ the manifold $W_0=D^3$ with a $1$-handle $h^1$ attached along two disks of $\partial D^3$, giving $W_1=D^3\cup h^1\cong S^1\times D^2$, and a $2$-handle $h^2$ attached along an embedded circle $\gamma\subseteq\partial W_1$ that bounds a closed disk in $\partial W_1$ disjoint from the belt sphere $S^1$ of $h^1$.

[F1] [[def-attaching-a-smooth-handle-with-corner-rounding]] and [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]: attaching a $1$-handle to $D^3$ along two disks of the boundary and rounding the corner gives the solid torus $S^1\times D^2$, whose boundary is a torus; the belt sphere of the $1$-handle is the meridian $\{p\}\times S^1$ of that torus, a $2$-handle attaches along a circle, and a circle in the boundary that bounds a disk there is null-homotopic in the solid torus.

[F2] [[def-attaching-belt-intersection-matrix-of-adjacent-index-handles]] and [[lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix]]: the matrix entry is the intersection number of $\gamma$ with the belt sphere; if the two are disjoint the entry is $0$ over both $\mathbb Z$ and $\mathbb Z_2$, whereas a geometrically cancelling pair would have a unit entry.

[F3] [[thm-seifert-van-kampen]]: for two open path-connected sets with path-connected overlap, the fundamental group is the pushout of the two groups over the overlap group. A collar thickening of an attached $2$-handle gives such a cover with the old manifold and handle as deformation retracts, and overlap retracting onto the attaching annulus $S^1\times D^1$.

[F4] [[thm-handle-cancellation]] and [[def-geometric-cancelling-handle-pair]]: a cancelled pair may be deleted, so if $(h^1,h^2)$ cancelled then $W_1\cup h^2$ would be diffeomorphic to $D^3$ relative to the lower stage, in particular simply connected.

[F5] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed; it is used through [F3] and [F4].

## Counterexample

**Given:** The configuration of the statement.

1.1 Take $W_1=S^1\times D^2$ with its boundary torus $S^1\times S^1$; the belt sphere of the $1$-handle is the meridian $\{p\}\times S^1$. The attaching circle $\gamma$ bounds a closed disk in $\partial W_1$ that avoids $\{p\}\times S^1$, so $\gamma$ is disjoint from the belt sphere and, bounding a disk in the boundary torus, is null-homotopic in $W_1$. [F1, given]

2.1 Since the two circles are disjoint, the attaching-belt matrix entry is $0$ over both $\mathbb Z$ and $\mathbb Z_2$; in particular the pair is not geometrically cancelling, because a geometrically cancelling pair has a unit entry by [F2]. [F2, step 1.1]

2.2 Thicken the old stage and handle slightly across their seam to obtain open path-connected sets $U,V$, with $U\simeq W_1$, $V\simeq D^2\times D^1$, and $U\cap V\simeq S^1\times D^1$. By [F3], $\pi_1(U\cup V)$ is the pushout of $\pi_1(W_1)\leftarrow\mathbb Z\to1$; the map into $\pi_1(W_1)$ is represented by $\gamma$, which is null-homotopic by step 1.1. The pushout is therefore $\pi_1(W_1)$. The product contraction $S^1\times D^2\to S^1\times\{0\}$ gives $\pi_1(W_1)\cong\mathbb Z$, so $\pi_1(W_1\cup h^2)\cong\mathbb Z$. This is a direct handle-gluing argument and does not assume an unspecified one-critical-point Morse presentation. [F3, step 1.1, construct, algebra]

3.1 By [F4] a cancellation of the pair would give a diffeomorphism $W_1\cup h^2\cong W_0=D^3$ relative to the lower stage, hence an isomorphism of fundamental groups $\mathbb Z\cong 1$, which is impossible. Therefore the pair does not cancel, even though both the algebraic and the geometric intersection counts are zero. [F4, F5, step 2.1, step 2.2]

4.1 Consequently the single-point criterion of the cancellation theorem cannot be replaced by a count-only condition: an adjacent-index pair with vanishing (algebraic and geometric) intersection need not cancel, and no diffeomorphism relative to the lower stage removes the pair. [F2, F4, step 3.1] ∎
