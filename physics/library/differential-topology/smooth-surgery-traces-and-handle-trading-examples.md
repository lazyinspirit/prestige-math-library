---
page: smooth-surgery-traces-and-handle-trading-examples
title: Smooth Surgery Traces and Handle Trading — Examples
status: published
items: []
examples: [ex-zero-surgery-on-the-circle, ex-surgery-on-s-p-times-s-q-produces-a-sphere-in-the-standard-framing, ex-one-surgery-on-a-three-manifold-as-framed-knot-surgery, cex-an-embedded-sphere-with-nontrivial-normal-bundle-is-not-valid-framed-surgery-data, cex-middle-dimensional-surgery-can-change-an-intersection-form]
---

The examples make the single surgery step concrete on the smallest cases and
test each of its structural claims. Zero-surgery on the circle reads the
standard decomposition of the square's boundary from the other side: removing
two open intervals and gluing in two intervals produces two circles, the
endpoint case $p=0$, $q=1$ of the definition and of the trace.

Surgery on a product of spheres produces a sphere: the standard framed
$S^p\times\{y_0\}$ in $S^p\times S^q$ turns the product into
$S^{p+q}=\partial(D^{p+1}\times D^q)$. Its inverse is a $(q-1)$-surgery on $S^{p+q}$ returning $S^p\times S^q$. A separate $p$-surgery on the standard framed $S^p$ in $S^{p+q}$ produces $S^{p+1}\times S^{q-1}$. One-surgery on a three-manifold is framed knot
surgery: the framed unknot in $S^3$ with zero twist gives
$S^2\times S^1$, while one twist gives $S^3$, and the fundamental groups
separate the two results, so the diffeomorphism type depends on the framing and
not only on the knot.

The two counterexamples mark the failure modes. The diagonal in
$S^2\times S^2$ is an embedded sphere whose normal bundle is $TS^2$, which is
nontrivial, so it is not valid framed surgery data: embeddedness alone is not
enough. And middle-dimensional surgery can change an intersection form: the
$2$-surgery on $S^2\times S^2$ along the standard framed sphere is $S^4$, whose
degree-two intersection data vanish, while the source carries the hyperbolic
pairing on a rank-two free group.
