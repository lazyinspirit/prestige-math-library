---
id: rem-dimension-invariance-of-euclidean-space
kind: remark
title: "Topological invariance of dimension: $\\mathbb{R}^n \\cong \\mathbb{R}^m$ implies $n = m$"
status: draft
origin: session
proved_here: false
deps: [rem-invariance-of-domain]
justified_by: []
forward_refs: [def-injection-surjection-bijection, thm-schroder-bernstein]
aliases: [rem-invariance-of-dimension]
landmark: true
short: "Cardinality proves nothing here, since R and R^2 are in bijection"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Invariance of domain (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Invariance_of_domain"
    - title: "invariance of dimension (nLab)"
      url: "https://ncatlab.org/nlab/show/invariance+of+dimension"
    - title: "Hilbert cube (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hilbert_cube"
pipeline_run: null
---

## Statement

If $\mathbb{R}^n$ and $\mathbb{R}^m$ are homeomorphic then $n = m$. More
generally, if some nonempty open subset of $\mathbb{R}^n$ is homeomorphic to some
open subset of $\mathbb{R}^m$ then $n = m$.

## Remarks

**Not proved in this library.** It is a corollary of
[[rem-invariance-of-domain]], which is itself recorded and not proved: if
$n < m$ and $h \colon \mathbb{R}^m \to \mathbb{R}^n$ were a homeomorphism,
composing with the inclusion $\mathbb{R}^n \hookrightarrow \mathbb{R}^m$ that pads
with zeros gives a continuous injection $\mathbb{R}^m \to \mathbb{R}^m$ whose
image is the non-open set $\mathbb{R}^n \times \{0\}$, contradicting invariance
of domain.

**The cheap arguments do not work, and it matters that they do not.**

* **Cardinality proves nothing.** $\mathbb{R}$ and $\mathbb{R}^2$ **are** in
  bijection: they have the same cardinality, so there is a bijection between them
  in the sense of [[def-injection-surjection-bijection]], obtainable by the
  interleaving-of-digits construction together with
  [[thm-schroder-bernstein]]. Cantor found this in 1877 and famously wrote that
  he saw it but did not believe it. So any proof of dimension invariance must use
  continuity in an essential way, and the historical point of the theorem is
  exactly that.
* **Smoothness would be cheap, and is not available.** If the homeomorphism were
  a diffeomorphism, its derivative would be a linear isomorphism
  $\mathbb{R}^m \to \mathbb{R}^n$ and linear algebra would finish it at once.
  The theorem is about homeomorphisms, where there is no derivative to look at.
* **One case IS elementary and in scope.** $\mathbb{R}$ is not homeomorphic to
  $\mathbb{R}^n$ for $n \geq 2$: removing a point disconnects $\mathbb{R}$ and
  does not disconnect $\mathbb{R}^n$, and connectedness is preserved by
  homeomorphisms. That argument belongs on the library's connectedness page. It
  does not extend, because removing a point from $\mathbb{R}^2$ and from
  $\mathbb{R}^3$ leaves connected spaces in both cases; separating those needs
  the fundamental group or homology of the punctured space.

**Why it matters here.** It is what licenses the word "dimension" for topological
objects at all. It is also the reason the Hilbert cube $[0,1]^{\mathbb{N}}$ is
startling: the cube $[0,1]^n$ has genuine corners, and its boundary points are
topologically distinguishable from its interior points precisely by invariance of
domain, whereas the Hilbert cube is homogeneous, every point looking like every
other. Without this theorem the contrast cannot even be stated.
