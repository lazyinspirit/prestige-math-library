---
id: rem-warsaw-circle-weakly-contractible
kind: remark
title: "The Warsaw circle: weakly contractible but not contractible"
status: draft
origin: session
proved_here: false
deps: [rem-shape-theory]
justified_by: []
forward_refs: []
aliases: [rem-warsaw-circle, rem-polish-circle]
landmark: false
short: "All homotopy groups vanish, yet it has the shape of a circle"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Shape theory (Wikipedia), section: Warsaw circle"
      url: "https://en.wikipedia.org/wiki/Shape_theory_(mathematics)"
    - title: "Warsaw circle (nLab)"
      url: "https://ncatlab.org/nlab/show/Warsaw+circle"
    - title: "The Polish Circle and some of its unusual properties (Math 205B lecture notes, UC Riverside)"
      url: "http://math.ucr.edu/~res/math205B-2012/polishcircle.pdf"
    - title: "Whitehead theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Whitehead_theorem"
pipeline_run: null
---

## Statement

Let $A = \{ (x, \sin(1/x)) : 0 < x \leq 1 \}$, let $V = \{0\} \times [-1,1]$, and
let $J$ be an arc in the plane from $(1, \sin 1)$ to $(0,-1)$ meeting
$A \cup V$ only in those two endpoints. The **Warsaw circle** (also the Polish
circle) is

$$W = \overline{A} \cup J = A \cup V \cup J.$$

**Deferred facts.** All homotopy groups of $W$ are trivial: $W$ is path connected
and $\pi_n(W, w_0) = 0$ for every $n \geq 1$ and every basepoint. Hence the
constant map $W \to \ast$ is a weak homotopy equivalence. Nevertheless $W$ is
**not contractible**, and indeed not homotopy equivalent to a point: its Cech
cohomology is that of a circle, $\check{H}^1(W;\mathbb{Z}) \cong \mathbb{Z}$, and
its shape is the shape of $S^1$. By the Whitehead theorem it follows that $W$
does not have the homotopy type of a CW complex.

## Remarks

**What is in scope.** The point-set description of $W$ and of its pieces. That
$\overline{A} = A \cup V$, the closed topologist's sine curve, is compact and
connected but **not** path connected is elementary and belongs on the library's
connectedness page, as does the fact that $W$ itself is a **compact connected
metric continuum**. Note carefully what the arc $J$ does: it joins the point
$(0,-1)$ of the vertical segment to the point $(1, \sin 1)$ of the sine curve, so
travelling along $J$ is an ordinary path between the two path components of
$\overline{A}$. **The Warsaw circle is therefore path connected**, unlike the
closed topologist's sine curve inside it. What $W$ is not is locally connected:
at any point of $V$ other than $(0,-1)$, small neighbourhoods contain infinitely
many separate arcs of $A$. All of that is point-set and in scope.

**Not proved in this library.** The vanishing of the homotopy groups, the
non-contractibility, the computation of Cech cohomology, and the shape-theoretic
statement.

**What would prove it.** For the homotopy groups, the observation that the image
of any path in $W$ misses an open piece of the sine curve and so lies in a
contractible subspace, which requires the homotopy track. For
non-contractibility, Cech cohomology or shape theory, see
[[rem-shape-theory]]; homotopy groups provably cannot do it, since they all
vanish. The Whitehead theorem, which needs CW theory, is what converts the
combination into the statement that $W$ is not of CW homotopy type.

**Why it matters here.** It is the standard demonstration that weakly
contractible does not imply contractible, so that Whitehead's theorem genuinely
needs its CW hypothesis, and it is the cleanest evidence that homotopy groups are
the wrong invariant for compacta with bad local structure. It is also a correction
to a natural misreading: the Warsaw circle is not an example of a connected space
that fails to be path connected. That example is the closed topologist's sine
curve, which is a proper subspace of it.
