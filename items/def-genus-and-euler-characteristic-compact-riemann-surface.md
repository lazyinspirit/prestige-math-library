---
id: def-genus-and-euler-characteristic-compact-riemann-surface
kind: definition
title: Genus and Euler characteristic of a compact Riemann surface
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
landmark: true
deps:
  - thm-topological-classification-compact-riemann-surfaces
  - cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g
  - def-euler-characteristic-of-a-finite-cw-complex
  - def-axiom-of-choice
  - def-riemann-surface-and-holomorphic-atlas
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 1 §2 and Ch. 4 §3: the genus of a compact Riemann surface and its computation from a polygonal schema or triangulation."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Chs. 2–3 and 6: Euler characteristic of a compact surface and the relation χ=2−2g on the orientable models."
    - title: "Jürgen Jost, Compact Riemann Surfaces, Ch. 2 §2.3.A and §2.4.A"
      url: https://www.math.wichita.edu/~ryan/teaching/M829F/syllabus/Jost-book/JJ_ch2.pdf
      locator: "§2.4.A, the oriented polygonal normal forms and the count V−E+F of the handle polygon."
---

## Definition

Assume the Axiom of Choice. Let $X$ be a compact Riemann surface
([[def-riemann-surface-and-holomorphic-atlas]]), and let
$X\cong\#_gT^2$ be its homeomorphism type as a sphere with $g$ handles
([[thm-topological-classification-compact-riemann-surfaces]]); here
$\#_gT^2$ is the connected sum of $g$ copies of the torus and
$\#_0T^2=S^2$.

- The **genus** of $X$ is that number,
  $$g(X):=g\ge0 .$$
  Equivalently, $g(X)=0$ exactly when $X$ is homeomorphic to the sphere, and
  $g(X)\ge1$ is the unique number of handles in the classification.
- The **Euler characteristic** of $X$ is the alternating cell count of any
  finite cell structure of $X$,
  $$\chi(X):=V-E+F,$$
  in the sense of [[def-euler-characteristic-of-a-finite-cw-complex]]: choose a
  finite triangulation or polygonal schema of $X$, count its vertices, edges
  and faces, and take the alternating sum.

## Well-definedness

The number $g(X)$ is well defined by the uniqueness clause of
[[thm-topological-classification-compact-riemann-surfaces]]: among the
orientable normal forms $\#_gT^2$, $g\ge0$, the homeomorphism type determines
$g$ uniquely, and the value depends only on the topological type of $X$, not on
the holomorphic atlas used to exhibit it.

The displayed formula
$$\chi(X)=2-2g(X)$$
is the content of the in-run corollary
[[cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g]]:
it states that a nonempty compact connected orientable boundaryless
topological 2-manifold has a unique genus $g\ge0$ — the sphere being $g=0$ —
and Euler characteristic $2-2g$, so the alternating count is independent of the
triangulation and of the polygonal schema chosen. The empty reduced word
denotes the zero-handle terminal case; it is not itself a polygonal schema.
The sphere has the actual one-face digon $aa^{-1}$, with two quotient
vertices, one paired edge and one face, so $\chi=2-1+1=2$. For $g\ge1$ the
$g$-fold commutator word gives one vertex, $2g$ edges and one face, so
$\chi=1-2g+1=2-2g$. The same value is obtained from any finite triangulation
by the subdivision-invariance of $V-E+F$. The formula also shows that
$\chi(X)$ is even and at most $2$.

**Axiom of Choice.** This definition assumes AC because the topological
classification theorem it invokes does; AC enters exactly through
[[thm-classification-of-compact-connected-surfaces]] and its finite
triangulation and Schoenflies chain
([[def-axiom-of-choice]]). No further choice is made here: the genus is read off
from the classification, and the cell count is finite.

## Remarks

For the two basic cases: the Riemann sphere has $g=0$ and $\chi=2$, and the
complex torus $\mathbb C/\Lambda$ has $g=1$ and $\chi=0$, matching the count
$1-2+1=0$ for its commutator polygon. The Euler characteristic is used in this
pair only through the two identities $\chi(X)=2-2g(X)$ and
$\chi(Y)=2-2g(Y)$ substituted into the cell count of
[[thm-riemann-hurwitz-formula]]; no other surface invariant is asserted here.
Because the genus is defined topologically, it is automatically invariant under
biholomorphism, and the notation $g(X)$ may be used before the homological or
de Rham interpretations of the genus, which belong to later pages.
