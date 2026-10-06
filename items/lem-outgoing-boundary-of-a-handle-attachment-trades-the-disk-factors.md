---
id: "lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors"
kind: "lemma"
title: "The outgoing boundary of a handle attachment trades the disk factors"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps: ["def-k-handle-core-cocore-attaching-region-and-belt-sphere", "def-attaching-a-smooth-handle-with-corner-rounding", "lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism", "thm-collar-neighborhood-theorem", "def-smooth-collar-of-a-manifold-boundary", "thm-the-double-has-a-well-defined-smooth-structure", "def-embedded-smooth-submanifold-with-boundary", "def-diffeomorphism-and-local-diffeomorphism-of-manifolds", "def-countable-choice"]
justified_by: []
aliases: []
proof_strategy: "construction of the boundary decomposition from the product model and the collar gluing"
provenance:
  statement: "literature-derived"
  proof: "literature-derived"
verification:
  precheck: "pass"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 3 §3.4.1, printed p. 72 (M minus the interior of the image of q is a manifold with boundary im(q|_{S^k×S^{n-k-1}}), which is glued to D^{k+1}×S^{n-k-1})"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Definition 10.1 (vi), printed p. 195 (the effect M'=cl.(M\\g(S^n×D^{m-n})) ∪ D^{n+1}×S^{m-n-1} replacing the open attaching region by the other disk factor)"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.1, printed pp. 196-197 (attaching D^r×D^{m-r+1} along S^{r-1}×D^{m-r+1} up to rounding the corner; the a-sphere and b-sphere vocabulary)"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $N$ be a smooth
$n$-manifold with boundary, let $0\le k\le n$, and let
$N'=N\cup_\psi h^k$ be obtained by attaching the standard $k$-handle
$D^k\times D^{n-k}$ along an embedding
$\psi:S^{k-1}\times D^{n-k}\to\partial N$ that extends over a neighbourhood of
the disk factor, with corners rounded. Then:

(i) $\partial(D^k\times D^{n-k})=(S^{k-1}\times D^{n-k})\cup(D^k\times S^{n-k-1})$
with intersection $S^{k-1}\times S^{n-k-1}$;

(ii) the boundary of $N'$ is obtained from $\partial N$ by trading the open
attaching region for the outgoing region,
$$\partial N'\cong\bigl(\partial N\setminus\psi(S^{k-1}\times\operatorname{int}D^{n-k})\bigr)\cup_{\psi|_{S^{k-1}\times S^{n-k-1}}}\bigl(D^k\times S^{n-k-1}\bigr),$$
the identification on the overlap being $\psi$;

(iii) the belt sphere $\{0\}\times S^{n-k-1}$ is a closed embedded submanifold of
$\partial N'$, and its normal bundle in $\partial N'$ is identified with the
bundle of $D^k$-factor directions.

Endpoint cases: for $k=0$ the attaching region is empty and
$\partial N'=\partial N\sqcup S^{n-1}$; for $k=n$ the outgoing region is empty
and the attaching region is the sphere $S^{n-1}\times D^0$, which the handle
$D^n\times D^0$ caps.

## Facts & Assumptions

**Given:** a smooth $n$-manifold $N$ with boundary, an integer $0\le k\le n$, an
embedding $\psi:S^{k-1}\times D^{n-k}\to\partial N$ extending over a
neighbourhood of the disk factor, and the attached manifold
$N'=N\cup_\psi h^k$ with rounded corners.

[F1] [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]: For
$0\le k\le n$ the standard $n$-dimensional $k$-handle is $D^k\times D^{n-k}$;
its attaching region is $S^{k-1}\times D^{n-k}$, its outgoing region is
$D^k\times S^{n-k-1}$ and its belt sphere is $\{0\}\times S^{n-k-1}$. Here
$D^j$ is the closed disk, $D^0$ is a point and $S^{-1}=\varnothing$.

[F2] [[def-attaching-a-smooth-handle-with-corner-rounding]]: The handle is
attached by gluing $D^k\times D^{n-k}$ to $N$ along the attaching region,
identifying $z$ with $\psi(z)$; the framing is part of the data, the seam
receives product charts from collars, and the compact codimension-two corner is
rounded by a compatible profile. There is no corner to round when $k=0$ or
$k=n$.

[F3] [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]]:
For fixed attaching and product-collar data, two compatible roundings are
related by a diffeomorphism equal to the identity outside the collar.

[F4] [[thm-collar-neighborhood-theorem]]: every smooth manifold with boundary
has a smooth collar ([[def-smooth-collar-of-a-manifold-boundary]]), so
$\partial N$ has a neighbourhood identified with $\partial N\times[0,1)$.

[F5] [[thm-the-double-has-a-well-defined-smooth-structure]]: gluing a manifold
with boundary to itself along its boundary using a collar produces a
boundaryless smooth manifold whose structure is well defined up to a
diffeomorphism fixing the seam pointwise; this is the model for the seam charts
used in an attachment.

## Proof

**Given:** the objects and hypotheses of the statement.

1.1 For the product $D^k\times D^{n-k}$ the boundary is the union of the two products with the boundary of one factor, $\partial(D^k\times D^{n-k})=\partial D^k\times D^{n-k}\cup D^k\times\partial D^{n-k}$, overlapping exactly in $\partial D^k\times\partial D^{n-k}$; writing $\partial D^k=S^{k-1}$ and $\partial D^{n-k}=S^{n-k-1}$ gives claim (i). The degenerate cases are included: for $k=0$ the first term is $S^{-1}\times D^n=\varnothing$ and the second is $D^0\times S^{n-1}=S^{n-1}$. [F1, algebra]

1.2 The glued manifold $N'$ is covered by the interior of $N\setminus\psi(S^{k-1}\times\operatorname{int}D^{n-k})$, the interior of the handle, and a collar neighbourhood of the seam supplied by [F4], in which the two pieces are presented as half-spaces meeting along the seam; the seam has the product model recorded in [F5], so the union is a smooth manifold with boundary. [F2, F4, F5, given]

2.1 A point of $N'$ is a boundary point exactly when it lies in $\partial N$ outside the open attaching region or in the outgoing region $D^k\times S^{n-k-1}$ of the handle: points of the attaching region and of the seam that lie over its interior are interior points of $N'$ by the collar model of step 1.2, and the remaining boundary points of the handle are precisely its outgoing region by claim (i). The two parts meet exactly along $\psi(S^{k-1}\times S^{n-k-1})$, where $\psi$ and the boundary identification of the handle agree. This proves claim (ii); the rounding enters only through the smooth structure of the seam, and changing it changes the result at most by a diffeomorphism equal to the identity outside the collar by [F3]. [F1, F2, F3, step 1.1, step 1.2]

3.1 The belt sphere $\{0\}\times S^{n-k-1}$ lies in the outgoing region $D^k\times S^{n-k-1}\subseteq\partial N'$ and is closed there because $S^{n-k-1}$ is closed in $D^k\times S^{n-k-1}$. Near a point $(0,y)$ the outgoing region is an open subset of $D^k\times S^{n-k-1}$ with the product smooth structure, and the tangent directions of $\{0\}\times S^{n-k-1}$ are the $S^{n-k-1}$-directions, so the complementary normal directions inside $\partial N'$ are the $D^k$-factor directions; the product trivialization identifies this normal bundle with the trivial bundle of rank $k$. This is claim (iii), and it makes the belt sphere a closed embedded submanifold of $\partial N'$ in the sense of [[def-embedded-smooth-submanifold-with-boundary]]. [F1, F2, step 2.1, algebra]

4.1 Endpoint cases. For $k=0$ the attaching region is $S^{-1}\times D^n=\varnothing$, the handle is the disk $D^n$ attached along the empty set, and the formula of claim (ii) reduces to $\partial N'=\partial N\sqcup\partial D^n=\partial N\sqcup S^{n-1}$. For $k=n$ the outgoing region is $D^n\times S^{-1}=\varnothing$, the attaching region is $S^{n-1}\times D^0=S^{n-1}$, and the handle $D^n\times D^0=D^n$ caps the attaching sphere, so the formula removes $\psi(S^{n-1}\times\{0\})$ from $\partial N$ and glues nothing; no rounding is needed in either case by [F2]. [F1, F2, step 1.1] ∎
