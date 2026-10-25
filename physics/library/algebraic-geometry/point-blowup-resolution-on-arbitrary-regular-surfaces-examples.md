---
page: point-blowup-resolution-on-arbitrary-regular-surfaces-examples
title: "Point Blowup Resolution on Arbitrary Regular Surfaces — Examples"
status: published
requires: [point-blowup-resolution-on-arbitrary-regular-surfaces]
items: []
examples: [cex-finite-normalization-does-not-make-the-curve-regular-before-blowups,
           ex-cusp-resolution-and-delta-drop,
           ex-node-resolved-by-one-blowup]
---

The computations on this page exercise the resolution theory of
[[point-blowup-resolution-on-arbitrary-regular-surfaces]] on the two standard
plane curve singularities and on the boundary between normalization and
blowups.

The node $y^2=x^2(x+1)$ has two formal branches with distinct tangent
directions meeting with multiplicity one; a single blowup of the origin
separates them into the two points $t=\pm1$ of the exceptional curve
$\mathbb P^1_k$, each with contact multiplicity one, and the strict transform is
the normalization of the node. One blowup therefore already produces strict
normal crossings support
([[ex-node-resolved-by-one-blowup]]).

The cusp $y^2=x^3$ is more delicate. One blowup makes the strict transform the
regular normalization of the curve and drops the multiplicity at the point over
the origin from two to one, but the strict transform is tangent to the
exceptional curve with contact multiplicity two, so the support is not yet SNC;
two further blowups, creating and then separating a transverse triple point,
reach strict normal crossings. For the projective completion of the cusp the
normalization defect drops from $\delta_k=1$ to $\delta_k=0$, matching the
general multiplicity formula $r\,m(m-1)/2$ with $r=1$, $m=2$
([[ex-cusp-resolution-and-delta-drop]]).

The counterexample records the boundary of the theory: the cuspidal cubic has
finite normalization yet is not regular, so finite normalization alone does not
resolve the singularity, and the blowup procedure is genuinely needed
([[cex-finite-normalization-does-not-make-the-curve-regular-before-blowups]]).
