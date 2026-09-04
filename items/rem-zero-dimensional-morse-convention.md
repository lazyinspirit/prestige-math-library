---
id: rem-zero-dimensional-morse-convention
kind: remark
title: "The zero-dimensional Morse convention"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-critical-point-and-critical-value-of-a-smooth-function, def-nondegenerate-critical-point-nullity-index-and-coindex]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed."
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
---

## Remark

On a $0$-manifold, every tangent space is the zero vector space. Therefore for
every smooth $f:M\to\mathbb R$ and every point $p\in M$, one has $df_p=0$, so
every point is critical
([[def-critical-point-and-critical-value-of-a-smooth-function]]). The Hessian is
the zero bilinear form on the zero vector space, whose kernel is also zero, so
every point is nondegenerate with nullity, index, and coindex all equal to $0$
([[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

Thus a smooth function on a nonempty $0$-manifold is automatically Morse, and
it is excellent exactly when distinct points have distinct values. On the empty
$0$-manifold there are no critical points at all.
