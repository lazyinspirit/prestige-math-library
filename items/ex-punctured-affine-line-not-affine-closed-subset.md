---
id: ex-punctured-affine-line-not-affine-closed-subset
kind: example
title: "The punctured affine line is a principal open with Laurent-polynomial coordinate ring but is not closed in its ambient affine line"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-open-classical-variety, thm-coordinate-ring-principal-open, cor-zariski-topology-cofinite-on-affine-line]
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 3c"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §1.3 and localization discussion"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
---

## Example

Assume the Axiom of Choice, and let $k$ be an algebraically closed field.
Inside $\mathbf A_k^1$ with coordinate $t$, the punctured affine line is
$$ \mathbf A_k^1\setminus\{0\}=D_{\mathbf A_k^1}(t). $$
Therefore [[thm-coordinate-ring-principal-open]] identifies its regular-function
ring with the principal localization
$$ k[t]_t, $$
the Laurent polynomial ring obtained by adjoining $t^{-1}$.

By [[cor-zariski-topology-cofinite-on-affine-line]], the closed subsets of
$\mathbf A_k^1$ are exactly the finite sets and the whole line. Hence
$\{0\}$ is closed, so its complement $\mathbf A_k^1\setminus\{0\}$ is open; but
that complement is not all of $\mathbf A_k^1$ and is infinite, so it is not
closed. This is the basic quasi-affine example: it is affine as a principal
open, but not as a closed subset of the ambient affine line.
