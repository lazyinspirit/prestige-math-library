---
id: def-morse-function-adapted-to-a-cobordism
kind: definition
title: "Morse function adapted to a cobordism"
status: draft
origin: pipeline
dependency_level: 1
deps: [def-smooth-cobordism-triad-for-morse-theory, def-morse-function-and-excellent-morse-function, def-downward-gradient-like-vector-field, def-inward-outward-and-boundary-tangent-vectors, def-smooth-collar-of-a-manifold-boundary, def-complete-vector-field]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
proof_strategy: "definition"
---

## Definition

Let $(W;M_0,M_1)$ be a smooth cobordism triad
([[def-smooth-cobordism-triad-for-morse-theory]]) with its fixed collars
([[def-smooth-collar-of-a-manifold-boundary]], [[def-complete-vector-field]]). A smooth function
$f:W\to[0,1]$ is **adapted to the triad** when:

1. $f^{-1}(0)=M_0$ and $f^{-1}(1)=M_1$, and $f$ is constant on each face;
2. every critical point of $f$ is an interior point of $W$ and is
   nondegenerate, so that $f$ is a Morse function
   ([[def-morse-function-and-excellent-morse-function]]);
3. there is a fixed collar of $\partial W$ containing no critical point of $f$.

The pair $(f,X)$ is **adapted** when $f$ is adapted and $X$ is an adapted
complete downward gradient-like field for $f$
([[def-downward-gradient-like-vector-field]]) that points outward along $M_0$
and inward along $M_1$ ([[def-inward-outward-and-boundary-tangent-vectors]]),
so that descending trajectories enter through $M_1$ and can leave only through
$M_0$.

Here **adapted complete** means that $W$ is embedded in a boundaryless smooth
collar extension $\widehat W$ and $X$ is the restriction of a complete smooth
vector field $\widehat X$ on $\widehat W$ ([[def-complete-vector-field]]). A collar extension is obtained by
appending negative collar parameters to the fixed boundary collars. Trajectories
in $W$ are the ambient integral curves restricted to the time intervals during
which they remain in $W$; they stop at a boundary exit. This does not require
$W$ to be invariant under the complete ambient flow. Such invariance would be
incompatible with an outward field at a nonempty $M_0$.

The pair is **excellent** when in addition distinct critical points of $f$ have
distinct values.

**Convention.** The library convention for trajectories is the descending one:
$df(X)<0$ off the critical set and $X=(2u,-2v)$ in Morse charts
$f=f(p)-|u|^2+|v|^2$. The upward field of the classical Milnor presentation is
$-X$; statements imported from that presentation are translated by this
convention before use.

Existence of adapted excellent pairs on a compact collared triad is proved
later on this page; nothing beyond the listed properties is asserted here.
