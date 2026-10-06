---
id: def-framed-regular-preimage-of-a-map-to-a-sphere
kind: definition
title: "Framed regular preimages of a map to a sphere"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
deps:
  - prop-transverse-preimage-carries-a-pulled-back-normal-structure
  - def-framing-of-a-normal-bundle
  - def-disk-bundle-sphere-bundle-and-thom-space
  - def-orientation-of-a-finite-dimensional-real-vector-space
  - def-transverse-smooth-maps
  - prop-transversality-to-a-point-is-the-regular-value-condition
  - prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product
  - cor-regular-values-form-a-dense-g-delta-set
  - def-smooth-manifold
  - def-countable-choice
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Section 7, the Pontryagin manifold $(f^{-1}(y),f_*b)$, printed p.43"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Definition 2.31 and the discussion of regular values, printed pp.20-21; Example 6.15"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Example 6.7, electronic p.111"
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Fix the standard
orientation of $S^k$ and identify $S^k=D^k/S^{k-1}$ with the one-point
compactification $\mathbb R^k\cup\{\infty\}$ of the zero section of the
trivial rank-$k$ bundle over a point, so a chosen centre $y_0$ corresponds to
$0$
([[prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product]],
[[def-disk-bundle-sphere-bundle-and-thom-space]]). Let $X$ be a closed smooth
manifold, let $f:X\to S^k$ be smooth and let $y\in S^k$ be a regular value,
with $b=(b_1,\dots,b_k)$ a positively oriented basis of $T_yS^k$
([[def-smooth-manifold]],
[[prop-transversality-to-a-point-is-the-regular-value-condition]]); read $b$
as the trivialization $\beta:T_yS^k\to\mathbb R^k$ sending $b_i$ to the
$i$-th standard basis vector
([[def-orientation-of-a-finite-dimensional-real-vector-space]]).

Then $N=f^{-1}(y)$ is a closed embedded submanifold of $X$ of codimension $k$,
and the differential of $f$ factors through the normal quotient to a smooth
bundle isomorphism
$$\nu(N\subseteq X)\longrightarrow(f|_N)^*TS^k;$$
composing it with $\beta$ gives a framing
$$f_*b:\nu(N\subseteq X)\longrightarrow N\times\mathbb R^k.$$
The pair $(N,f_*b)$ is the **framed regular preimage** of $(f,y,b)$.

Both assertions are the case $E=\mathbb R^k$ of
[[prop-transverse-preimage-carries-a-pulled-back-normal-structure]], applied locally in a target chart centred at $y$, whose differential at $y$ is $\beta$, to
the trivial rank-$k$ bundle over the one-point base: its Thom space is
$S^k=\mathbb R^k\cup\{\infty\}$, its zero section is $\{0\}$, transversality
of $f$ to $\{0\}$ is exactly regularity of $y$
([[def-transverse-smooth-maps]],
[[prop-transversality-to-a-point-is-the-regular-value-condition]]), and
clauses (i)-(ii) of that proposition give the closed embedded submanifold and
the specified isomorphism of the normal quotient with the pulled-back target
fibre; inserting the positive basis $\beta$ turns the target factor into
$\mathbb R^k$ and is precisely the framing. The construction is independent of
any auxiliary choice: only the derivative of $f$ along $N$, the value $y$ and
the basis $b$ enter, so no chart of $S^k$ at $y$ is chosen and the framing is
the composite displayed above. Regular values are not assumed to exist a
priori; they are dense by [[cor-regular-values-form-a-dense-g-delta-set]], and
for $k\ge1$ the framed cobordism class is shown to be independent of the
regular value and positive basis in the two following lemmas.

Rank $k=0$ and $N=\varnothing$ are included: for $k=0$ the sphere is $S^0$,
the basis is empty, $\beta$ is the unique map $T_yS^0\to\mathbb R^0$, and
$N=f^{-1}(y)$ is a clopen submanifold of $X$ of dimension $\dim X$, carrying the unique rank-zero framing;
for $N=\varnothing$ the normal bundle and the framing are empty. Regular-value
independence does not extend to $k=0$: a constant map from a point to $S^0$
has the point and the empty set as its two regular fibres. They are not
framed cobordant within the point, since a compact neat codimension-zero
submanifold of $I$ is clopen, and one containing $0$ must also contain $1$.
The
countable-choice hypothesis is inherited exactly from
[[prop-transverse-preimage-carries-a-pulled-back-normal-structure]]; the
definition itself selects nothing.
