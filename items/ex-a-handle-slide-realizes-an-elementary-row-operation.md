---
id: ex-a-handle-slide-realizes-an-elementary-row-operation
kind: example
title: "A handle slide realizes an elementary row operation"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 9
deps: [def-handle-slide-of-one-k-handle-over-another, lem-handle-slides-preserve-the-relative-diffeomorphism-type, lem-handle-slides-act-by-elementary-basis-change-on-handle-chains, def-attaching-belt-intersection-matrix-of-adjacent-index-handles, prop-elementary-matrix-operations-are-realized-by-handle-slides, def-k-handle-core-cocore-attaching-region-and-belt-sphere, lem-standard-complementary-pair-fills-an-n-ball, def-attaching-a-smooth-handle-with-corner-rounding, def-local-oriented-intersection-sign, def-mod-two-intersection-number, def-oriented-intersection-number, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Theorem 5.4.5 (same-index handle addition changes the classes to xi, eta + eps*xi) and §5.5 (row operations in the h-cobordism proof), §5.4-5.5, printed pp. 147-151, with Figure 5.9"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes; complete author PDF)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Ch. 1 §1.1, printed pp. 4-7 (attaching data, isotopy invariance and the standard examples of slides)"
verification:
  precheck: pass
---

## Example

Assume $\mathrm{AC}_\omega$. In dimension $n=4$ start from the $0$-handle $D^4$ and attach the standard $1$-handle $h^1$ along the equatorial embedding, so that $D^4\cup h^1\cong S^1\times D^3$ and the middle boundary is $N=\partial_+(D^4\cup h^1)\cong S^1\times S^2$ with belt sphere $B=\{p\}\times S^2$ of $h^1$ a $2$-sphere. Attach two $2$-handles $g_1,g_2$ to $N$ along embedded circles $\gamma_1,\gamma_2\subseteq N$ with disjoint images, for instance $\gamma_1=S^1\times\{u_1\}$ and $\gamma_2$ a small circle in a coordinate ball disjoint from $B\cup\gamma_1$, with product/local framings. They are chosen so that $\gamma_1$ meets $B$ transversely in exactly one point and $\gamma_2$ is disjoint from $B$. Indexing rows by the $2$-handles and the single column by the $1$-handle, the attaching-belt matrix is the column $(\pm1,0)^T$ over $\mathbb Z$ for suitable orientations, respectively $(1,0)^T$ over $\mathbb Z_2$. Slide the $2$-handle $g_2$ over $g_1$. The total $4$-manifold is unchanged by the slide, while the same column becomes $(\pm1,\pm1)^T$ over $\mathbb Z$, respectively $(1,1)^T$ over $\mathbb Z_2$: exactly the elementary row operation $R_2\mapsto R_2\pm R_1$.

## Facts & Assumptions

**Given:** Dimension $n=4$; the $0$-handle $D^4$ with the standard $1$-handle $h^1$ attached, middle boundary $N=\partial_+(D^4\cup h^1)$ and belt sphere $B\subseteq N$ of $h^1$; two embedded circles $\gamma_1,\gamma_2\subseteq N$ with disjoint images, with $\gamma_1$ meeting $B$ transversely in exactly one point and $\gamma_2\cap B=\varnothing$; the $2$-handles $g_1,g_2$ attached to $N$ along $\gamma_1,\gamma_2$ with chosen framings.

[F1] [[def-attaching-a-smooth-handle-with-corner-rounding]] and [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]: in dimension $4$ a $1$-handle has attaching region $S^0\times D^3$, outgoing region $D^1\times S^2$ and belt sphere $S^2$; a $2$-handle has attaching sphere $S^1$ and attaching region $S^1\times D^2$.

[F2] [[lem-standard-complementary-pair-fills-an-n-ball]]: attaching the standard $1$-handle to $D^4$ along the equatorial embedding gives $D^4\cup h^1\cong S^1\times D^3$ with outgoing boundary $S^1\times S^2$, and up to this diffeomorphism the belt sphere of $h^1$ is the fiber sphere $\{p\}\times S^2$.

[F3] [[def-attaching-belt-intersection-matrix-of-adjacent-index-handles]]: for $n=4$ and $k=1$ the matrix is defined ($1\le k\le n-2=2$), its rows are the $(k+1)$-handles $g_i$ and its columns the $k$-handles $e_j$, and $M_{ij}$ is the intersection number of the attaching sphere of $g_i$ with the belt sphere of $e_j$ in the middle boundary, over $\mathbb Z$ or $\mathbb Z_2$ according to the orientations.

[F4] [[def-oriented-intersection-number]], [[def-local-oriented-intersection-sign]] and [[def-mod-two-intersection-number]]: transverse complementary-dimensional intersections are finite with local signs $\pm1$; a single transverse point of a circle with a $2$-sphere has entry $\pm1$ over $\mathbb Z$ and $1$ over $\mathbb Z_2$, and disjoint spheres have entry $0$.

[F5] [[def-handle-slide-of-one-k-handle-over-another]] and [[lem-handle-slides-preserve-the-relative-diffeomorphism-type]]: assume $\mathrm{AC}_\omega$; a slide of $g_2$ over $g_1$ is defined here (index $2$, middle boundary of dimension $3$, so $1\le2\le3-1$), replaces the attaching circle of $g_2$ by the band sum with a framed parallel copy of the attaching circle of $g_1$, and leaves the total $4$-manifold unchanged.

[F6] [[lem-handle-slides-act-by-elementary-basis-change-on-handle-chains]] and [[prop-elementary-matrix-operations-are-realized-by-handle-slides]]: assume $\mathrm{AC}_\omega$; under the disk-push diffeomorphism together with its specified lower-stage homotopy, the slid core satisfies $[C_2']=[C_2]\pm[C_1]$ in the handle chain group, so intersecting the fixed belt sphere with both sides gives $M_{2,1}'=M_{2,1}\pm M_{1,1}$, the elementary row operation $R_2\mapsto R_2\pm R_1$; this is case (ii) of the matrix-operation proposition because $k+1=2\le n-2=2$.

[F7] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed; it is used through [F5] and [F6].

## Verification

**Given:** The configuration of the statement.

1.1 By [F1] and [F2] the middle boundary is $N\cong S^1\times S^2$ and the belt sphere of $h^1$ is $B=\{p\}\times S^2$, a $2$-sphere; the $2$-handles are attached along the circles $\gamma_i$, so the matrix is the column with entries $M_{i1}=I(\gamma_i,B)$. By hypothesis $\gamma_1$ meets $B$ in exactly one transverse point and $\gamma_2$ is disjoint from $B$, so by [F4] the column is $(\pm1,0)^T$ over $\mathbb Z$ for suitable orientations and $(1,0)^T$ over $\mathbb Z_2$. [F1, F2, F3, F4, given]

2.1 Slide the $2$-handle $g_2$ over $g_1$; the move is legitimate in the range of [F5], the total $4$-manifold is unchanged, and the slid attaching circle $\gamma_2'$ has core class $[C_2']=[C_2]\pm[C_1]$ by [F6]. Countable Choice enters only through the slide and basis-change suppliers [F5] and [F6]. [F5, F6, F7, step 1.1]

3.1 Recomputing the same column with the slid handle, $M_{2,1}'=I(\gamma_2',B)=I(\gamma_2,B)\pm I(\gamma_1,B)=0\pm(\pm1)$ over $\mathbb Z$, respectively $0+1=1$ over $\mathbb Z_2$: the column becomes $(\pm1,\pm1)^T$, respectively $(1,1)^T$, which is exactly the elementary row operation $R_2\mapsto R_2\pm R_1$ on the matrix. [F4, F6, step 2.1]

4.1 The construction is legitimate in the range of both the matrix definition and the slide: with $n=4$ and $k=1$ one has $1\le k\le n-2=2$ and $k+1=2\le n-2$, so the example realizes case (ii) of [[prop-elementary-matrix-operations-are-realized-by-handle-slides]] in the lowest dimension in which the row operation is available. [F3, F5, F6, step 3.1, given] ∎
