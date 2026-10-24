---
page: handle-decompositions-duality-and-rearrangement
title: "Handle Decompositions Duality and Rearrangement"
status: published
requires: [morse-functions-critical-values-and-genericity, gradient-like-vector-fields-and-morse-trajectories, sublevel-deformation-and-the-handle-attachment-theorem, manifolds-with-boundary-collars-and-orientations, cw-complexes-and-cellular-homology, higher-homotopy-groups-and-cofiber-sequences, homology-axioms-degree-and-classical-applications, hurewicz-whitehead-freudenthal-and-cw-approximation]
items: [def-smooth-cobordism-triad-for-morse-theory, def-morse-function-adapted-to-a-cobordism, lem-boundary-product-function-on-a-collared-cobordism, thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms, lem-separating-critical-values-far-from-the-boundary, def-handle-decomposition-relative-to-the-incoming-boundary, lem-standard-handle-admits-an-adapted-morse-function, lem-gluing-handle-morse-models-along-collars, lem-interior-slab-handle-attachment, lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy, lem-a-one-handle-between-distinct-boundary-components-is-a-boundary-connected-sum, lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type, thm-morse-functions-and-handle-decompositions-correspond, lem-a-handle-decomposition-gives-a-relative-cw-complex, def-dual-handle-decomposition, thm-handle-duality-from-negating-a-morse-function, lem-product-cobordisms-have-critical-point-free-presentations, lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods, lem-a-sphere-with-a-product-neighbourhood-can-be-moved-off-a-lower-dimensional-submanifold, lem-flow-reparametrization-realizes-a-level-isotopy, lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged, lem-gradient-like-perturbation-separates-adjacent-critical-levels, thm-morse-rearrangement-by-index, lem-increasing-reparametrization-of-finitely-many-critical-levels, thm-self-indexing-morse-function-existence, lem-handles-of-equal-index-can-be-attached-on-one-level, prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles, prop-dual-elimination-of-top-index-handles, rem-handle-decompositions-are-not-canonical]
examples: []
---

Assuming Countable Choice, this page turns a compact cobordism with collared faces into a finite handle
presentation and records how the presentation depends on the data. A smooth
cobordism triad $(W;M_0,M_1)$ carries fixed collars of both faces; a function
adapted to it is a Morse function whose level sets $0$ and $1$ are exactly the
incoming and outgoing faces and whose critical points sit away from a collar of
$\partial W$, and an adapted field is a downward gradient-like field with a complete boundaryless collar extension
pointing outward along $M_0$ and inward along $M_1$. Every compact triad admits
an adapted excellent pair, agreeing with the product model on the fixed
collars, and the standard handle model supplies, on one disk, a function with a
single nondegenerate critical point of any prescribed index whose collars carry
exactly the product level structure. A handle decomposition relative to $M_0$
is then an ordered list of handles attached successively to the collar of
$M_0$; the quadratic elementary-cobordism model glues onto an outgoing boundary
after lowering the old face height in its prescribed collar, and the interior-slab lemma produces the attaching data from a Morse
band.

The central correspondence is two-way: every adapted excellent Morse function
determines a finite handle decomposition with one handle per critical point, of
the same index, and conversely every finite handle decomposition is induced by
such a function. A handle decomposition gives
a finite CW model of pairs with one relative cell per handle; retaining the
actual incoming manifold as a CW subcomplex requires its CW structure to be
supplied. Each attachment is a relative cell attachment up to homotopy. Negating the function on the reversed
triad replaces the presentation by its dual: the same handle bodies are read
with the disk factors exchanged, attached in reverse order, with $k$-handles
becoming $(n-k)$-handles and attaching and belt spheres interchanged. Rearranging
the critical values is the third theme. Two consecutive critical levels whose
trajectory sets are disjoint can have their values interchanged while the field
is kept; when the lower index is at least the upper one, a gradient-like
perturbation supported near a regular intermediate level separates the crossing
spheres and makes the trajectory sets disjoint, and iterating the exchange
orders the critical values by index. Successive no-connection exchanges merge equal-index critical levels. A final
increasing reparametrisation assigns the common levels their normalized values, producing a
self-indexing presentation in which all index-$k$ handles are attached before
all handles of index $k+1$; handles of equal index may be attached
simultaneously, in any order, with attaching embeddings changed by isotopy.

The last two propositions remove superfluous endpoint handles: a connected
triad with nonempty connected incoming boundary has a presentation with no
$0$-handles, and dually a connected triad with nonempty outgoing boundary has
a presentation with no $n$-handles. Eliminated $0$-handles in the reversed
triad correspond to eliminated $n$-handles; its retained connecting $1$-handles
become the final $(n-1)$-handles when the outgoing face is disconnected.
The closing remark records the consequence that no presentation-dependent
quantity may be called an invariant without an invariance argument; the
elementary moves that compare presentations belong to the later handle calculus
and are not constructed here. Countable Choice $\mathrm{AC}_\omega$ is used
throughout for the collar, partition-of-unity, metric, flow and genericity
suppliers, and the existence theorem uses a finite-parameter transversality argument
under that same principle. No full Axiom of Choice is required here.
