---
id: def-self-transverse-immersion-and-double-point-locus
kind: definition
title: Self-transverse immersions and the double point locus
status: published
origin: session
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
- lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold
- def-immersion-submersion-and-constant-rank-map
- def-a-smooth-map-transverse-to-an-embedded-submanifold
- def-smooth-embedding
- def-embedded-submanifold-and-slice-chart
- def-local-oriented-intersection-sign
- cor-every-immersion-is-locally-an-embedding
justified_by:
- lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks
aliases: []
landmark: false
sources:
  references:
  - title: C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University
      Press 2016; full text retrieved from the Internet Archive Wayback Machine snapshot of the ETH Zürich course
      copy), Chapter 6 §§6.2–6.4, printed pp. 169–192 (Theorem 6.2.1; Propositions 6.3.1 and 6.3.3; Theorems 6.3.2,
      6.3.4, 6.3.6, 6.4.5, 6.4.8 and 6.4.9; Lemma 6.3.5)
    url: https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf
  - title: Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045), §1,
      article pp. 2–5 (self-intersection set; ambient versus non-ambient isotopy) and §2, article pp. 6–14 (Theorems
      2.1–2.3 and 2.8; the modulo 2 and integral Whitney obstruction; the Whitney invariant); §3 and §5 used only
      for the recorded knotting boundary
    url: https://arxiv.org/pdf/math/0604045
---
## Definition

Let $f:M^m\to X$ be a smooth immersion. Write $\Delta_M$ and $\Delta_X$ for the diagonals, embedded by [[lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold]]. Its **ordered coincidence locus** is
$$\Delta_2(f)=\{(x,y)\in M\times M\setminus\Delta_M:f(x)=f(y)\}.$$
Its **unordered branch-pair set** is
$$D(f)=\{\{x,y\}:x\ne y,\ f(x)=f(y)\}=\Delta_2(f)/(x,y)\sim(y,x),$$
and its **collision image** is $\Sigma(f)=f(\operatorname{pr}_1\Delta_2(f))\subseteq X$. The common-image map $D(f)\to\Sigma(f)$ is surjective. It is bijective exactly when no image point has three or more preimages. At an image point with $k$ preimages, $D(f)$ has one element for each of the $\binom{k}{2}$ unordered branch pairs, rather than one element for the image point. A **genuine double point** is a point of $X$ with exactly two preimages. The term double-point locus refers to the branch-pair locus; it does not exclude higher-multiplicity collision images.

The immersion is **self-transverse** when
$$f\times f:M\times M\setminus\Delta_M\to X\times X$$
is transverse to $\Delta_X$ ([[def-a-smooth-map-transverse-to-an-embedded-submanifold]]). Equivalently, for every distinct $x,y$ with common image $r$, one has $df_x(T_xM)+df_y(T_yM)=T_rX$. This is pairwise transversality and does not assert absence of triple points. Each selected preimage gives a local embedded sheet by [[cor-every-immersion-is-locally-an-embedding]]; for a self-transverse immersion in ambient dimension $2m$, a selected coincident pair has complementary tangent planes, and its two local sheet disks are supplied by [[lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks]]. This statement about a selected pair does not say that these are all sheets over $r$.

If $f$ is self-transverse and $M$ and $X^{2m}$ are oriented, every ordered coincident branch pair has the sign $\varepsilon(x,y)\in\{\pm1\}$ of [[def-local-oriented-intersection-sign]], computed with the $x$ branch first. Swapping the two oriented $m$-blocks multiplies this sign by $(-1)^{m^2}=(-1)^m$. Consequently for even $m$ it defines an ordering-independent sign on each element of $D(f)$; for odd $m$ an ordering is needed. At a multiple collision image, different branch pairs need not have the same sign, so no single sign is assigned to that image. None of these definitions asserts finiteness, compactness, orientability, absence of triples or any choice principle.
