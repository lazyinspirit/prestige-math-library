---
page: hausdorff-via-the-diagonal
title: "Hausdorff via the Diagonal"
status: draft
items: [def-the-diagonal-of-a-space, lem-the-diagonal-map-is-an-embedding,
        thm-hausdorff-iff-the-diagonal-is-closed,
        cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed,
        cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal,
        lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit,
        thm-a-compact-hausdorff-space-is-regular-and-normal,
        lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed,
        thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain,
        lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure,
        rem-what-the-diagonal-criterion-gives-and-what-it-costs]
examples: [fs-a-function-with-closed-graph-is-continuous,
           fs-two-continuous-maps-agreeing-on-a-dense-subset-are-equal]
---

**Objective.** The Hausdorff condition ([[def-hausdorff-space]]) is stated as a
quantifier over pairs of distinct points and pairs of open sets, and in that form
it has to be re-verified by hand at every use. This page replaces it by a single
closedness statement about one subset of one space: a space is Hausdorff exactly
when its diagonal is closed in its square. Everything else here is obtained by
pulling that one closed set back along a continuous map.

**The objects, and why the product has to be named carefully.**
[[def-the-diagonal-of-a-space]] fixes the diagonal
$\Delta_X = \{\, z \in X \times X : z_0 = z_1 \,\}$, the diagonal map
$\delta_X(x) = (x,x)$, and the pairing $\langle f, g \rangle$ of two maps with a
common domain. A point of the binary product is a function on the von Neumann
$2$ ([[def-product-topology]]), so $(u,v)$ is notation for that function and
$\Delta_X$ is a subset defined by a formula rather than by a picture. For an
index set with two members the box basis and the product basis are one family,
which is why every proof below may test a basic open set of the form
$U \times V$. [[lem-the-diagonal-map-is-an-embedding]] then records that
$\delta_X$ is a topological embedding with image $\Delta_X$, its inverse being
the restriction of a projection, and that a pairing is continuous exactly when
both of its components are.

**The criterion.** [[thm-hausdorff-iff-the-diagonal-is-closed]] proves both
directions by the same box. If $X$ is Hausdorff, a point off the diagonal has
distinct coordinates, and disjoint open sets around them give a box missing the
diagonal; conversely, a box around $(x,y)$ missing the diagonal has disjoint
factors, since a point of the intersection of the factors would sit on the
diagonal inside the box. Neither direction selects anything, so the criterion is
a theorem of ZF.

**Consequences, each a preimage of the diagonal.**
[[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]] observes
that $\{\, z : f(z) = g(z) \,\}$ is $\langle f, g \rangle^{-1}[\Delta_Y]$ and is
therefore closed when $Y$ is Hausdorff, with no hypothesis on the domain.
[[cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal]]
adds density and concludes equality, so a continuous map into a Hausdorff space
is determined by its restriction to any dense subset — a uniqueness statement,
not an existence one.
[[lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed]] applies
the same corollary to the two maps $f \circ \pi_0$ and $\pi_1$ out of
$X \times Y$, whose agreement set is the graph of $f$.

**The sequential form, and how much weaker it is.**
[[lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit]] proves that a
sequence in a Hausdorff space converges to at most one point, which is what
licenses the notation $\lim_k x_k$ that [[def-sequence-convergence-top]]
withholds in general. The converse fails: uniqueness of sequential limits does
not imply the Hausdorff condition, and
[[fs-unique-sequential-limits-imply-hausdorff]] is the witness. A sequence sees
at most countably many points, while closedness of the diagonal is a condition at
every point of the square at once.

**Compactness enters, and with it the separation axioms.**
[[thm-a-compact-hausdorff-space-is-regular-and-normal]] proves that a compact
Hausdorff space is regular and normal, hence $T_3$ and $T_4$. The argument is
short because the work is elsewhere: in a compact space every closed set is
compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]), and in a
Hausdorff space a point and a disjoint compact set, and two disjoint compact
sets, have disjoint open neighbourhoods
([[thm-compact-subset-of-a-hausdorff-space-is-closed]]). The $T_1$ half comes
from [[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]]. Nothing stronger
is claimed here, and in particular no continuous real-valued function is
produced. [[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]]
then works with a compact neighbourhood instead of a compact space: inside such a
neighbourhood the previous theorem supplies regularity, and the transfers
back to the ambient space use that the neighbourhood has open interior and, being
compact in a Hausdorff space, is closed. The result is a base of open sets with
compact closure, and regularity of the whole space.

**The closed graph criterion.** For a continuous map into a Hausdorff space the
graph is closed; the converse needs a different hypothesis altogether.
[[thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain]] proves that
a map into a **compact** space whose graph is closed is continuous, with no
separation hypothesis used in that direction, so for a compact Hausdorff
codomain the two conditions are equivalent. Its proof is the model
for the choice discipline of this page: the family of admissible boxes is
collected by a formula, compactness cuts it down to finitely many members, and
only then is a selection made, licensed by [[lem-finite-choice]], a theorem of
ZF. The empty case is written out rather than assumed away, since the set to be
covered is empty exactly when the target open set is everything.

**The false statements mark the hypotheses that cannot be dropped.**
[[fs-a-function-with-closed-graph-is-continuous]] refutes the closed-graph
implication without a compactness hypothesis, using the function equal to $1/x$
off $0$ and to $0$ at $0$; the same witness shows, through the criterion itself,
that $\mathbb{R}$ with its usual topology is not compact.
[[fs-two-continuous-maps-agreeing-on-a-dense-subset-are-equal]] refutes the
dense-agreement implication without a separation hypothesis on the codomain,
using two maps into the indiscrete two-point space that agree at every rational
and differ at every irrational.

**What the criterion costs.**
[[rem-what-the-diagonal-criterion-gives-and-what-it-costs]] collects the
running themes: that the criterion is a statement about the product topology on a
binary product, where the box and product bases coincide; and that the naive
proof of the compact separation clauses — one pair of open sets chosen for each
point of an arbitrary set — is an application of the Axiom of Choice, while the
formula-defined family together with [[lem-finite-choice]] is not. Where a step
of this page spends a choice principle, the step names it.
