---
id: def-motion-of-an-unordered-point-configuration
kind: definition
title: "Based motions of an unordered point configuration"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-unordered-configuration-space,
       def-ordered-configuration-space,
       def-based-loops-and-fundamental-group,
       def-braid-group-from-unordered-configurations,
       def-geometric-braid-with-setwise-endpoints,
       lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, §§1.1–1.3, printed pp. 3–6"
      url: https://arxiv.org/pdf/1010.0321
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, §1.1, author manuscript pp. 3–5"
      url: https://www.math.columbia.edu/~jb/Handbook-21.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Definition

Fix $n\in\mathbb N$ and let $Q=(q_1,\ldots,q_n)$ be the explicit base tuple
fixed in [[def-geometric-braid-with-setwise-endpoints]]. Identify its real
closed unit disk with the complex closed unit disk $D^2$ by
$(x,y)\mapsto x+iy$, so $Q\in F_n(\operatorname{int}D^2)$ and its orbit
$[Q]\in C_n(D^2)$ is defined by [[def-ordered-configuration-space]] and
[[def-unordered-configuration-space]].

An **unordered configuration motion** is a continuous map
$$\alpha:I\longrightarrow C_n(D^2).$$
It is a **based motion at $Q$** if
$$\alpha(0)=[Q]=\alpha(1),$$
and it is an **interior based motion** if, in addition,
$$\alpha(t)\in C_n(\operatorname{int}D^2)\qquad\text{for every }t\in I.$$
Every slice is a collision-free $n$-point set because it is an element of the
unordered configuration space; continuity is with respect to its quotient
topology. With the base configuration in
[[def-braid-group-from-unordered-configurations]] chosen to be this same $Q$,
the based-loop classes of all such closed-disc motions form
$$B_n^{\mathrm{conf}}=\pi_1(C_n(D^2),[Q]).$$

Let $\iota:C_n(\operatorname{int}D^2)\hookrightarrow C_n(D^2)$ be the inclusion.
The published radial homotopy in
[[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]
shows that $\iota_*$ is an isomorphism at the same basepoint $[Q]$. Thus every
class in $B_n^{\mathrm{conf}}$ has an interior based-motion representative, and
two interior motions represent the same closed-disc class exactly when they
are path-homotopic through interior based motions. This transfers classes
between the two disc models; it does not assert that every closed-disc motion
itself stays in the interior.

For $n=0$, both configuration spaces are one-point spaces and there is one
based motion. For $n=1$, $C_1(X)$ is canonically homeomorphic to $X$ and the
geometric basepoint is $q_1=0$, so the same definitions apply without any
collision condition. No choice principle is used: the base tuple is the fixed
one from the geometric-braid definition, and the quotient and inclusion maps
are specified maps.
