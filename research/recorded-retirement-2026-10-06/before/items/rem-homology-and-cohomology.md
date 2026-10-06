---
id: rem-homology-and-cohomology
kind: remark
title: "Homology and cohomology"
status: draft
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: []
aliases: [rem-singular-homology]
landmark: true
short: "Singular homology, the Eilenberg-Steenrod axioms, and cohomology with cup products"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Homology (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Homology_(mathematics)"
    - title: "Cohomology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cohomology"
    - title: "A. Hatcher, Algebraic Topology, Chapters 2 and 3 (free official edition)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATpage.html"
    - title: "J. P. May, A Concise Course in Algebraic Topology (University of Chicago)"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

**Singular homology.** To each topological space $X$ one associates abelian
groups $H_k(X)$, $k \geq 0$, as the homology of the chain complex whose $k$-chains
are formal integer combinations of continuous maps $\Delta^k \to X$. The
construction is functorial, and the properties that make it usable are:

* **homotopy invariance**: homotopic maps induce the same homomorphism, so
  homotopy equivalent spaces have isomorphic homology;
* the **long exact sequence** of a pair $(X,A)$, and **excision**;
* the **Mayer-Vietoris sequence** for a suitable open cover by two sets;
* the computation $\tilde{H}_k(S^n) \cong \mathbb{Z}$ for $k = n$ and $0$
  otherwise;
* the **Eilenberg-Steenrod axioms**, which characterise the theory uniquely on CW
  pairs once the value on a point is fixed.

**Cohomology.** Dualising the chain complex with coefficients in an abelian group
$G$ gives $H^k(X;G)$, related to homology by the universal coefficient theorem,
and carrying extra structure that homology lacks: the **cup product** makes
$H^*(X;R)$ a graded-commutative ring, which distinguishes spaces with isomorphic
homology groups.

## Remarks

**Not proved in this library.** None of this is constructed here, and no
computation of any homology or cohomology group is available.

**What would prove it.** The homology track: simplicial or singular chains,
elementary homological algebra (chain complexes, chain homotopy, the snake
lemma), the barycentric subdivision argument behind excision, and CW methods for
computation. It is long but not deep in the sense of needing anything the library
lacks in prerequisites; it is simply a track that has not been built.

**Why it matters here.** It is the machinery that actually proves most of what
this page records. The Jordan curve theorem in
[[rem-jordan-curve-theorem]] and invariance of domain in
[[rem-invariance-of-domain]] are Mayer-Vietoris computations; Brouwer's theorem
for all $n$, see [[rem-brouwer-fixed-point]], is the statement
$\tilde{H}_{n-1}(S^{n-1}) \neq 0$ in disguise; the obstruction classes of
[[rem-hopf-extension-and-obstruction]] live in cohomology; and the de Rham
theorem of [[rem-de-rham-and-stokes-on-manifolds]] identifies analytic data with
the singular cohomology of a manifold. Recording homology as unproved is
therefore recording the single largest gap on this page.
