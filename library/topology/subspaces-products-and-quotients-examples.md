---
page: subspaces-products-and-quotients-examples
title: "Subspaces, Products, and Quotients: Examples and Counterexamples"
status: published
items: []
examples: [ex-rn-as-a-product, cex-projection-is-not-closed,
           cex-box-topology-diagonal-not-continuous, ex-cantor-set-as-a-product,
           ex-hilbert-cube, ex-circle-as-r-mod-z, ex-torus-as-a-quotient-of-the-square,
           ex-cylinder-and-mobius-band-as-quotients,
           cex-quotient-map-neither-open-nor-closed, cex-line-with-two-origins,
           cex-r-mod-q-is-indiscrete-like, ex-sorgenfrey-plane,
           cex-antidiagonal-of-the-sorgenfrey-plane]
---

**Objective.** This page is the worked companion to Subspaces, Products, and
Quotients, linked under Prerequisites above. That page builds the four
constructions and proves the characteristic property of each; this one exhibits
them. Seven examples carry out full computations in concrete spaces, and six
counterexamples supply the witnesses behind the false statements of the general
page and behind the non-reversal claims it declined to assert.

**Products, from the familiar to the infinite.** $\mathbb{R}^n$ is the product of
$n$ copies of the line, its product topology is the Euclidean one, its
projections are continuous, open and surjective with no appeal to a choice
principle, and a map into it is continuous exactly when its $n$ coordinate
functions are ([[ex-rn-as-a-product]]). Two counterexamples then show what the
product topology is and is not. The hyperbola $\{xy = 1\}$ is closed in
$\mathbb{R}^2$ and its image under the first projection is
$\mathbb{R}\setminus\{0\}$, so a projection need not be a closed map
([[cex-projection-is-not-closed]]); and the diagonal
$t \mapsto (t,t,\dots)$ into $\mathbb{R}^{\mathbb{N}}$ has every component
continuous, is continuous for the product topology, and is not continuous for the
box topology ([[cex-box-topology-diagonal-not-continuous]]), which is the failure
of the characteristic property that the box topology suffers.

**Two infinite products identified by hand.** The Cantor set is homeomorphic to
$\{0,1\}^{\mathbb{N}}$ with the product of discrete topologies, the ternary
digits of a point being its coordinates ([[ex-cantor-set-as-a-product]]). The
proof avoids compactness, which is later in the reading order: two explicit
estimates, one bounding the distance between images of sequences agreeing to
depth $n$ and one bounding it below at the first disagreement, make the map
continuous and open by hand. The Hilbert cube $[0,1]^{\mathbb{N}}$ is metrizable,
by the weighted metric $\sum_k |x_k - y_k|/2^{\,k+1}$
([[ex-hilbert-cube]]); the weights do two opposite jobs, making tails negligible
and keeping every single coordinate visible, and both are needed for the metric
topology to be the product topology.

**Gluing.** $\mathbb{R}/\mathbb{Z}$ has an open quotient map and is homeomorphic
to $[0,1]$ with its endpoints identified ([[ex-circle-as-r-mod-z]]); the inverse
homeomorphism is induced by the fractional part, which is not continuous on
$\mathbb{R}$ and becomes continuous after the identification, by the closed
pasting lemma applied to two pieces. The square with opposite edges identified is
then homeomorphic to $(\mathbb{R}/\mathbb{Z}) \times (\mathbb{R}/\mathbb{Z})$
([[ex-torus-as-a-quotient-of-the-square]]), proved through the *open* quotient map
$q \times q$ rather than through any claim that a product of quotient maps is a
quotient map. The cylinder and the Mobius band are quotients of the same square
by two relations differing in one sign, both by closed quotient maps, and the
cylinder is identified with $(\mathbb{R}/\mathbb{Z}) \times [0,1]$
([[ex-cylinder-and-mobius-band-as-quotients]]). **Nothing on this page claims
that any two of these glued spaces are different**: the invariants that would
decide it are not available at this point in the reading order.

**How badly quotients behave.** A quotient map need be neither open nor closed:
on $A = ([0,\infty)\times\mathbb{R}) \cup (\mathbb{R}\times\{0\})$ the first
projection is a quotient map by the continuous section $x \mapsto (x,0)$, carries
an open set to $[0,\infty)$ and a closed set to $(0,\infty)$
([[cex-quotient-map-neither-open-nor-closed]]), which shows that the third clause
of the sufficient condition on the general page, the one about a continuous
section, reaches quotient maps that the first two do not.
Separation fares worse. Two copies of $\mathbb{R}$ glued along
$\mathbb{R}\setminus\{0\}$ give the line with two origins, a non-Hausdorff
quotient of a **metrizable** space by an **open** quotient map, with the metric
written down explicitly ([[cex-line-with-two-origins]]). And
$\mathbb{R}/\mathbb{Q}$ carries the indiscrete topology although it has more than
one point ([[cex-r-mod-q-is-indiscrete-like]]), which is the same failure taken to
its limit: every coset is dense, so a nonempty saturated open set is everything.

**Heredity, and the one property that fails it.** The Sorgenfrey plane is the
product of two half-open-interval lines; its basis is the family of rectangles
$[a,b) \times [c,d)$ and $\mathbb{Q}\times\mathbb{Q}$ is a countable dense subset
([[ex-sorgenfrey-plane]]). Its antidiagonal $\{(x,-x)\}$ is an uncountable
subspace on which the subspace topology is discrete, so its only dense subset is
itself and it has no countable dense subset
([[cex-antidiagonal-of-the-sorgenfrey-plane]]). Hence "has a countable dense
subset" is not hereditary, while by the subspace theorem of the general page it
is open-hereditary; the antidiagonal is not open. The word *separable* is not used
anywhere on these two pages, since it is not defined at this point in the reading
order, and the property is written out in full instead.

**Where the choice principles are.** Only two items on this page touch one. The
closedness of the hyperbola is proved through the sequential characterisation of
closed sets in a metric space, whose relevant direction spends the Axiom of
Countable Choice, and that is flagged at the fact that carries it, in
[[cex-projection-is-not-closed]] and again in
[[cex-quotient-map-neither-open-nor-closed]], which reuses it. Everywhere else
the maps, the metrics and the open sets are written down by formulas: the
projections of $\mathbb{R}^n$ are surjective by a constant function, the boxes
separating the product and box topologies are given by an explicit shrinking
sequence, and the enumerations behind the countability claims are all given
rather than selected.
