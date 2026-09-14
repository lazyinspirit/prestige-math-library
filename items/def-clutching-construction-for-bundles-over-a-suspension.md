---
id: def-clutching-construction-for-bundles-over-a-suspension
kind: definition
title: Clutching construction for bundles over a suspension
status: published
origin: pipeline
deps: [thm-vector-bundles-glued-from-transition-cocycles, def-reduced-cone-suspension-and-cofiber-sequence]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §1.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Clutching functions and Example 1.10, printed pp.21–24"
---

## Definition

Let $(A,a_0)$ be a well-pointed based compact CGWH space and let
$g:A\to\operatorname{GL}_n(\mathbb F)$ be continuous. Write the suspension
from [[def-reduced-cone-suspension-and-cofiber-sequence]] as the union of its
upper and lower cones $C_+A$ and $C_-A$. The **clutched bundle** $E_g$ is
the quotient of

$$(C_+A\times\mathbb F^n)\amalg(C_-A\times\mathbb F^n)$$

by the equatorial identifications

$$(a,v)_+\sim(a,g(a)v)_-.$$

Using collar neighborhoods of the equator gives two open product charts whose
transition is the same $g$ on every collar slice. Thus
[[thm-vector-bundles-glued-from-transition-cocycles]] makes $E_g\to\Sigma A$
a rank-$n$ vector bundle.

This upper-to-lower convention is fixed throughout the page: under the affine
coordinates used in the companion calculation, $g(z)=z$ gives the chosen
tautological Hopf line over $S^2=\mathbb{CP}^1$. Interchanging the upper and
lower charts reverses the relation and replaces $g$ by $g^{-1}$. For $n=0$,
$\operatorname{GL}_0(\mathbb F)$ is a point and the construction gives the
unique rank-zero bundle.
