---
page: connectedness-examples
title: "Connectedness: Examples and Counterexamples"
status: published
items: []
examples: [ex-convex-subsets-of-rn-are-path-connected,
           ex-connectedness-of-the-standard-topologies,
           ex-the-oscillating-zigzag-curve-computed,
           ex-the-rationals-are-totally-disconnected-and-not-discrete,
           cex-components-differ-from-quasicomponents,
           ex-the-long-line-in-the-connectedness-hierarchy,
           cex-a-path-connected-space-that-is-not-locally-connected,
           cex-the-box-topology-disconnects-a-product-of-connected-spaces]
---

**Objective.** This page is the worked companion to Connectedness, linked under
Prerequisites above. That page proves the general theory; this one computes it in
concrete spaces and exhibits the witnesses that keep its implications from being
reversed. Read together, the two settle which of the conditions *connected*,
*path-connected*, *locally connected* and *totally disconnected* imply which
others, and where each implication stops.

**The easy end.** [[ex-convex-subsets-of-rn-are-path-connected]] disposes of the
familiar cases at once: a convex subset of $\mathbb{R}^n$ is path-connected,
because the straight segment between two of its points is a path that stays
inside; hence every ball in any of the norms $\lVert\cdot\rVert_1$,
$\lVert\cdot\rVert_2$, $\lVert\cdot\rVert_\infty$, every box, every half-space
and $\mathbb{R}^n$ itself is path-connected and connected. The only technical
point is that the segment is continuous into $\mathbb{R}^n$, which is the
characteristic property of a product applied to $n$ affine maps of one real
variable.

**Where the standard topologies sit.**
[[ex-connectedness-of-the-standard-topologies]] places the discrete, indiscrete,
cofinite, cocountable, particular-point and Sierpinski topologies in the
hierarchy. The indiscrete and particular-point topologies, the cofinite topology on an
infinite set, and the cocountable topology on an uncountable set
are connected for one structural reason — no two nonempty open sets are disjoint —
and in each connected case every nonempty open subspace
is again of the same kind, so local connectedness holds for free and carries no
information. The indiscrete and particular-point topologies are even
path-connected, by paths that are continuous because there are too few open sets
for continuity to be a constraint. Two cells of the table are deliberately left
open: whether the cofinite topology on an infinite set, or the cocountable
topology on an uncountable set, is path-connected depends on cardinality
arithmetic that this page's declared prerequisites do not supply.

**The zigzag closure, computed.**
[[ex-the-oscillating-zigzag-curve-computed]] takes the space built on the general
page and reads off its decomposition: one component and one quasicomponent, both
the whole space; two path components, the graph and the added segment; the graph
open in the closure and the segment closed in it, neither clopen; and local
connectedness holding at every point of the graph and failing at every point of
the segment. The failure set is therefore exactly the segment, which is the sharp
form of the statement that the space is connected but neither path-connected nor
locally connected.

**Shredded spaces.**
[[ex-the-rationals-are-totally-disconnected-and-not-discrete]] works out
$\mathbb{Q}$ as a subspace of $\mathbb{R}$: every component is a single point,
because the irrationals block every interval; no singleton is open, because the
rationals are everywhere; and consequently the space is locally connected at no
point, since in a totally disconnected space local connectedness at a point is
the same as that point being isolated. The same two sentences apply to the
irrationals.

**Components against quasicomponents.**
[[cex-components-differ-from-quasicomponents]] supplies the witness that the
inclusion $C(x) \subseteq Q(x)$ proved on the general page can be strict. The
space is the union of the vertical unit segments over the points $1/(n+1)$
together with the two extra points $(0,0)$ and $(0,1)$. The component of $(0,0)$
is a single point, because the first coordinates of a connected subset would have
to be order-convex inside a set with no two adjacent members; its quasicomponent
is $\{(0,0),(0,1)\}$, because a clopen set containing $(0,0)$ must catch a point
of every late segment, must then swallow each of those segments whole, and must
finally contain the limit of their top endpoints.

**The long ray, and the comb.**
[[ex-the-long-line-in-the-connectedness-hierarchy]] records that the long ray is
connected, that every initial segment, ray and interval of it is order-convex and
connected, and that it is locally connected, every basic open set of an order
topology being order-convex. Under the Axiom of Countable Choice no at most
countable subset of it is cofinal, which is the one property separating it from
an ordinary half-line; path-connectedness is not claimed.
[[cex-a-path-connected-space-that-is-not-locally-connected]] then shows that
path-connectedness alone does not force local connectedness: the comb space, the
base segment together with the teeth over $0$ and over each $1/(n+1)$, is
path-connected because every point may descend to the base, travel and climb,
and it is not locally connected at any point of the limit tooth strictly above
the base, because a small neighbourhood there misses the base and the teeth fall
apart.

**Boxes.** [[cex-the-box-topology-disconnects-a-product-of-connected-spaces]]
closes the page with the failure of the product theorem for the box topology. In
$\mathbb{R}^{\mathbb{N}}$ the bounded and the unbounded sequences are both open
for the box topology, since a single box of width $2$ around a point perturbs
every coordinate by less than $1$ and boundedness is stable under that; they are
disjoint, nonempty and cover the space, so they separate it. Every factor is
connected and the same product is connected in the product topology, so the
witness isolates the box topology itself as the cause.
